import type { H3Event } from 'h3'

export async function getVersions(evt: H3Event, pkg: string) {
  const response = await fetch(`https://jsr.io/${pkg}/meta.json`, {
    headers: { 'User-Agent': 'https://github.com/sxzz/jsr-api' },
  })
  setResponseStatus(evt, response.status)
  return response
}
