import { Van, LoginFormData } from "../../types/types"
import { db } from "../firebase"

// use mirage when env is set to development
const useMirage = import.meta.env.VITE_USE_MIRAGE === "development"

// Firebase

import {
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite"

const vansCollectionRef = collection(db, "vans")

export async function getVans(): Promise<Van[]> {
  if (useMirage) {
    const res = await fetch("/api/vans")
    if (!res.ok) {
      throw {
        message: "Failed to fetch vans",
        statusText: res.statusText,
        status: res.status,
      }
    }
    const data = await res.json()
    return data.vans
  } else {
    const snapshot = await getDocs(vansCollectionRef)

    return snapshot.docs.map((doc) => doc.data() as Van)
  }
}

export async function getVan(id: string): Promise<Van> {
  if (useMirage) {
    const res = await fetch(`/api/vans/${id}`)
    if (!res.ok) {
      throw {
        message: "Failed to fetch vans",
        statusText: res.statusText,
        status: res.status,
      }
    }
    const data = await res.json()
    return data.vans
  } else {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)

    if (!snapshot.exists()) {
      throw new Error("Van not found")
    }

    return snapshot.data() as Van
  }
}

export async function getHostVans(): Promise<Van[]> {
  if (useMirage) {
    const res = await fetch("/api/host/vans/")
    if (!res.ok) {
      throw {
        message: "Failed to fetch vans",
        statusText: res.statusText,
        status: res.status,
      }
    }
    const data = await res.json()
    return data.vans
  } else {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)

    return snapshot.docs.map((doc) => doc.data() as Van)
  }
}

export async function loginUser(creds: LoginFormData) {
  if (useMirage) {
    console.log("logging in")
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
  } else {
    const { email, password } = creds
    {
      const docRef = doc(db, "users", "123")
      const snapshot = await getDoc(docRef)

      if (!snapshot.exists()) {
        throw new Error("User not found")
      }
      const foundUser = snapshot.data()
      if (foundUser.email !== email || foundUser.password !== password) {
        throw new Error("No user with those credentials found!")
      }
      return snapshot.data()
    }
  }
}

export async function getHostIncome() {
  if (useMirage) {
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
  } else {
    {
      const docRef = doc(db, "users", "123")
      const snapshot = await getDoc(docRef)

      if (!snapshot.exists()) {
        throw new Error("Van not found")
      }
      return snapshot.data().income
    }
  }
}
