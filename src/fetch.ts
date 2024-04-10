import type { H3Event } from 'h3'

export async function getVersions(evt: H3Event, pkg: string, setStatus = true) {
  const response = await fetch(`https://jsr.io/${pkg}/meta.json`, {
    headers: {
      'User-Agent': 'https://github.com/sxzz/jsr-api',
      Accept: 'application/json',
    },
  })
  setStatus && setResponseStatus(evt, response.status)
  return response
}
