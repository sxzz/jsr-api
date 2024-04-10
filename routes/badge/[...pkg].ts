import latestSemver from 'latest-semver'
import { getVersions } from '../../src/fetch'

export default eventHandler(async (evt) => {
  const pkg = getRouterParam(evt, 'pkg')

  const response = await getVersions(evt, pkg, false)
  if (response.status !== 200) {
    if (response.status === 404) {
      return {
        schemaVersion: 1,
        isError: true,
        label: 'jsr',
        message: 'Package not found',
      }
    } else {
      return {
        schemaVersion: 1,
        isError: true,
        label: 'jsr',
        message: 'Unknown error',
      }
    }
  }

  const data = await response.json()
  const versions = Object.keys(data.versions)
  const latest = data.latest || latestSemver(versions)

  return {
    schemaVersion: 1,
    label: '',
    labelColor: '#083344',
    message: `v${latest}`,
    color: '#f7df1e',
    logoSvg:
      '<svg width="100%" height="100%" viewBox="0 0 637 343" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n  <g transform="matrix(1,0,0,1,-0.272,0)">\n    <path d="M637.272,49L637.272,245L539.272,245L539.272,343L196.272,343L196.272,294L0.272,294L0.272,98L98.272,98L98.272,0L441.272,0L441.272,49L637.272,49Z" style="fill:rgb(8,51,68);"/>\n    <path d="M98.272,196L147.272,196L147.272,49L196.272,49L196.272,245L49.274,245L49.274,147L98.272,147L98.272,196ZM588.272,98L588.272,196L539.272,196L539.272,147L490.272,147L490.272,294L441.272,294L441.272,98L588.272,98ZM294.272,98L294.272,147L392.272,147L392.272,294L245.272,294L245.272,245L343.272,245L343.272,196L245.272,196L245.272,49L392.272,49L392.272,98L294.272,98Z" style="fill:rgb(247,223,30);"/>\n  </g>\n</svg>',
    logoWidth: 25,
  }
})
