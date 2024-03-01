export async function HttpClient(fetchUrl, fetchOptions) {
  return fetch(fetchUrl, {
    ...fetchOptions,
    body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
    headers: {
      ...fetchOptions.headers,
      "Content-Type": "application/json"
    }
  })
    .then(async res => {
      return {
        ok: res.ok,
        body: await res.json()
      }
    });
}
