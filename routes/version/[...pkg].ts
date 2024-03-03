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
  return { version: data.latest || Object.keys(data.versions).at(-1) }
})
