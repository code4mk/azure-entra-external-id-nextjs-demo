import { LogLevel } from "@azure/msal-browser"

export const msalConfig = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_ENTRA_ID_CLIENT_ID, // This is the ONLY mandatory field that you need to supply.
    authority: process.env.NEXT_PUBLIC_ENTRA_ID_AUTHORITY, // Replace the placeholder with your tenant subdomain
    redirectUri: process.env.NEXT_PUBLIC_ENTRA_ID_REDIRECT_URI, // Points to window.location.origin. You must register this URI on Microsoft Entra admin center/App Registration.
    postLogoutRedirectUri: "/", // Indicates the page to navigate after logout.
    navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
  },
  cache: {
    cacheLocation: "localStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
    storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level: LogLevel, message: string, containsPii: boolean) => {
        if (containsPii) {
          return
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message)
            return
          case LogLevel.Info:
            console.info(message)
            return
          case LogLevel.Verbose:
            console.debug(message)
            return
          case LogLevel.Warning:
            console.warn(message)
            return
          default:
            return
        }
      },
    },
  },
}

export const loginRequest = {
  scopes: ["openid", "profile", "email"],
}

// Silent token request configuration
export const tokenRequest = {
  scopes: ['openid', 'profile', 'email'],
  account: null, // Will be set dynamically
};