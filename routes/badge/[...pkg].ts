import latestSemver from 'latest-semver'
import { getVersions } from '../../src/fetch'

export default eventHandler(async (evt) => {
  const pkg = getRouterParam(evt, 'pkg')

  const response = await getVersions(evt, pkg)
  if (response.status !== 200) {
    if (response.status === 404) {
      return {
        schemaVersion: 1,
        isError: true,
        message: 'Package not found',
      }
    } else {
      return {
        schemaVersion: 1,
        isError: true,
        message: 'Unknown error',
      }
    }
  }

  const data = await response.json()
  const versions = Object.keys(data.versions)
  const latest = data.latest || latestSemver(versions)

  const query = getQuery(evt)

  return {
    ...query,
    schemaVersion: 1,
    label: 'jsr',
    message: `v${latest}`,
    color: '#f7df1e',
  }
})
