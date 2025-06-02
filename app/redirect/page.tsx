"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function RedirectPage() {
  const router = useRouter()

  useEffect(() => {
    // Handle the redirect after authentication
    const timer = setTimeout(() => {
      router.push("/home")
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
        <h2 className="text-lg font-semibold mb-2">Completing authentication...</h2>
        <p className="text-gray-600">Please wait while we redirect you.</p>
      </div>
    </div>
  )
}
