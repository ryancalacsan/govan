import { Van, LoginFormData } from "../types"
// A function whose only purpose is to delay execution for testing

// function sleep(ms: number) {
//   return new Promise((resolve) => setTimeout(() => resolve(), ms))
// }

export async function getVans(id?: string): Promise<Van[]> {
  const url = id ? `/api/vans/${id}` : "/api/vans"
  const res = await fetch(url)
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    }
  }
  const data = await res.json()
  return data.vans
}

export async function getHostVans(id?: string) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
  const res = await fetch(url)
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    }
  }
  const data = await res.json()
  return data.vans
}

export async function loginUser(creds: LoginFormData) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  })
  const data = await res.json()

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    }
  }

  return data
}

export async function getHostIncome() {
  const res = await fetch("/api/host/income")
  if (!res.ok) {
    throw {
      message: "Failed to fetch income",
      statusText: res.statusText,
      status: res.status,
    }
  }
  const data = await res.json()
  return data.users.income
}
