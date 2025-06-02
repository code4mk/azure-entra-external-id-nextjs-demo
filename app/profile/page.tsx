"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { useAuth } from "@/lib/auth-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ArrowLeft, User, Mail, Shield, Calendar, Globe } from "lucide-react"

export default function ProfilePage() {
  const { user } = useAuth()

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/home"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
            <p className="text-gray-600">Manage your account information and preferences</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Profile Overview */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg" alt={user?.name || ""} />
                    <AvatarFallback className="text-2xl">{user?.name?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
                  </Avatar>
                  <CardTitle>{user?.name || "User Name"}</CardTitle>
                  <CardDescription>{user?.username || "user@example.com"}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Account Status</span>
                      <Badge variant="default">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Verification</span>
                      <Badge variant="secondary">Verified</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">MFA</span>
                      <Badge variant="outline">Enabled</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Profile Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>Your personal details from Azure Entra ID</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Display Name</label>
                      <p className="mt-1 text-sm">{user?.name || "Not available"}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Username</label>
                      <p className="mt-1 text-sm">{user?.username || "Not available"}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Account ID</label>
                      <p className="mt-1 text-sm font-mono text-xs">{user?.localAccountId || "Not available"}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Tenant ID</label>
                      <p className="mt-1 text-sm font-mono text-xs">{user?.tenantId || "Not available"}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Account Security */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Account Security
                  </CardTitle>
                  <CardDescription>Security settings and authentication methods</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium">Multi-Factor Authentication</p>
                        <p className="text-xs text-gray-500">Additional security layer enabled</p>
                      </div>
                    </div>
                    <Badge variant="default">Active</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium">Email Verification</p>
                        <p className="text-xs text-gray-500">Email address verified</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Verified</Badge>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" disabled>
                      <Shield className="w-4 h-4 mr-2" />
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full justify-start" disabled>
                      <Globe className="w-4 h-4 mr-2" />
                      Manage Sessions
                    </Button>
                    <Button variant="outline" className="w-full justify-start" disabled>
                      <Calendar className="w-4 h-4 mr-2" />
                      View Login History
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Account Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Account Actions</CardTitle>
                  <CardDescription>Manage your account settings and preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" disabled>
                      Export Account Data
                    </Button>
                    <Button variant="outline" className="w-full justify-start" disabled>
                      Privacy Settings
                    </Button>
                    <Button variant="destructive" className="w-full justify-start" disabled>
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
