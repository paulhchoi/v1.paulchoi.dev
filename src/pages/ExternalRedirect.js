import React from "react"

const ExternalRedirect = ({ slug }) => {
  const isClient = typeof window === "object"
  isClient && window.location.replace(slug)

  return <div className="text-center">Redirecting...</div>
}

export default ExternalRedirect
