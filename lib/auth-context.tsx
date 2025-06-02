"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { PublicClientApplication, type AccountInfo, type AuthenticationResult, type SilentRequest } from "@azure/msal-browser"
import { msalConfig, loginRequest, tokenRequest } from "./msal-config"

interface AuthContextType {
  isAuthenticated: boolean
  user: AccountInfo | null
  login: () => Promise<void>
  logout: () => Promise<void>
  getAccessToken: (theUser: any) => Promise<string>
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

let msalInstance: PublicClientApplication

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<AccountInfo | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initializeMsal = async () => {
      msalInstance = new PublicClientApplication(msalConfig)
      await msalInstance.initialize()

      const accounts = msalInstance.getAllAccounts()
      if (accounts.length > 0) {
        setUser(accounts[0])
        setIsAuthenticated(true)
      }
      setLoading(false)
    }

    initializeMsal()
  }, [])

  const login = async () => {
    try {
      const response: AuthenticationResult = await msalInstance.loginPopup(loginRequest)
      setUser(response.account)
      setIsAuthenticated(true)
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  const logout = async () => {
    try {
      await msalInstance.logoutPopup()
      setUser(null)
      setIsAuthenticated(false)
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  const getAccessToken = async (theUser: any) => {
    if (!theUser) {
      throw new Error("No user is signed in");
    }
    
    const request = {
      ...tokenRequest,
      account: theUser
    };
    
    const result = await msalInstance.acquireTokenSilent(request as SilentRequest);
    return result.accessToken;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading, getAccessToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
