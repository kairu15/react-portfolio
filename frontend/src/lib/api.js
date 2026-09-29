// ==================================================================
// Laravel API client for the React SPA
// Base URL: .env → VITE_API_URL (e.g. http://127.0.0.1:8000)
// Empty string in dev = same-origin, rides the Vite /api proxy.
// ==================================================================

const BASE_URL = import.meta.env.VITE_API_URL ?? ''

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      Accept: 'application/json',
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
    },
    ...options,
  })

  // 422 carries Laravel validation errors — surface them to the caller
  const payload = await res.json().catch(() => null)

  if (!res.ok) {
    const error = new Error(
      payload?.message ?? `Request failed with status ${res.status}`,
    )
    error.status = res.status
    error.errors = payload?.errors ?? null
    throw error
  }

  return payload
}

export function fetchProjects() {
  return request('/api/projects')
}

export function sendContact({ name, email, message }) {
  return request('/api/contact', {
    method: 'POST',
    body: JSON.stringify({ name, email, message }),
  })
}
