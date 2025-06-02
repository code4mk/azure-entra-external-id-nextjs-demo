"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ArrowLeft, LogIn } from "lucide-react"

export default function LoginPage() {
  const { login, isAuthenticated, loading, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      let theData = {
        azure_entra_oid: user?.localAccountId,
        name: user?.name || user?.username,
        email: user?.username,
      }
      // TODO: Send the data to the backend
      // TODO: If the user is not found, create a new user
      
      router.push("/home")
    }
  }, [isAuthenticated, router])

  const handleLogin = async () => {
    await login()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            <CardDescription>Sign in to your account using Azure Entra ID</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={handleLogin} className="w-full" size="lg">
              <LogIn className="w-4 h-4 mr-2" />
              Sign in with Entra ID
            </Button>

            <Separator />

            <div className="text-center text-sm text-muted-foreground">
              {"Don't have an account?"}{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
