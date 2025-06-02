import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Zap } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Secure Authentication with <span className="text-blue-600">Azure Entra ID</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience enterprise-grade security with seamless user authentication powered by Microsoft Azure Entra
            External ID.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Enterprise Security</CardTitle>
              <CardDescription>
                Built on Microsoft's enterprise-grade security infrastructure with multi-factor authentication and
                conditional access.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>User Management</CardTitle>
              <CardDescription>
                Comprehensive user lifecycle management with self-service capabilities and administrative controls.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>Fast Integration</CardTitle>
              <CardDescription>
                Quick and easy integration with existing applications using industry-standard protocols like OAuth 2.0
                and OpenID Connect.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to get started?</CardTitle>
              <CardDescription>Join thousands of users who trust our secure authentication platform.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/signup">
                <Button size="lg" className="w-full">
                  Create Your Account
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Footer Section */}
        <footer className="mt-16 text-center text-gray-600">
          <div className="mb-4">
            <p>© {new Date().getFullYear()} Developed by Mostafa Kamal</p>
            <p className="mt-2">
              <a href="mailto:hiremostafa@gmail.com" className="text-blue-600 hover:text-blue-800">
                hiremostafa@gmail.com
              </a>
            </p>
            <p className="mt-2">
              <a
                href="https://github.com/code4mk/azure-entra-external-id-nextjs-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                GitHub Repository
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
