import latestSemver from 'latest-semver'
import { getVersions } from '../../src/fetch'

export default eventHandler(async (evt) => {
  const pkg = getRouterParam(evt, 'pkg')

  const response = await getVersions(evt, pkg)
  if (response.status !== 200) {
    if (response.status === 404) {
      return { error: 'Package not found', code: response.status }
    } else {
      return { error: 'Unknown error', code: response.status }
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
