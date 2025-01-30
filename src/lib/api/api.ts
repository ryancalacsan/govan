import { Van, LoginFormData } from "../../types/types"

// Firebase

import { initializeApp } from "firebase/app"
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans(): Promise<Van[]> {
  const snapshot = await getDocs(vansCollectionRef)

  const vans: Van[] = snapshot.docs.map((doc) => {
    const data = doc.data()

    return {
      id: doc.id,
      name: data.name,
      price: data.price,
      description: data.description,
      imageUrl: data.imageUrl,
      type: data.type,
      new: data.new,
      hostId: data.hostId,
    }
  })

  return vans
}

export async function getVan(id: string): Promise<Van> {
  const docRef = doc(db, "vans", id)
  const snapshot = await getDoc(docRef)

  if (!snapshot.exists()) {
    throw new Error("Van not found")
  }
  const data = snapshot.data()

  return {
    id: snapshot.id,
    name: data.name,
    price: data.price,
    description: data.description,
    imageUrl: data.imageUrl,
    type: data.type,
    new: data.new,
    hostId: data.hostId,
  }
}

export async function getHostVans(): Promise<Van[]> {
  const q = query(vansCollectionRef, where("hostId", "==", "123"))
  const snapshot = await getDocs(q)

  const vans: Van[] = snapshot.docs.map((doc) => {
    const data = doc.data()

    const van: Van = {
      id: doc.id,
      name: data.name,
      price: data.price,
      description: data.description,
      imageUrl: data.imageUrl,
      type: data.type,
      new: data.new,
      hostId: data.hostId,
    }

    return van
  })

  return vans
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

// Mirage JS

// export async function getVans(id?: string): Promise<Van[] | Van> {
//   const url = id ? `/api/vans/${id}` : "/api/vans"
//   const res = await fetch(url)
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status,
//     }
//   }
//   const data = await res.json()
//   return data.vans
// }

// Mirage JS
// export async function getHostVans(id?: string) {
//   const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//   const res = await fetch(url)
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status,
//     }
//   }
//   const data = await res.json()
//   return data.vans
// }
