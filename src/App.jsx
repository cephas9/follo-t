"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { SimpleTest } from "./components/test-simple"
import { Sidebar } from "./components/ui/sidebar"
import { Dashboard } from "./pages/dashboard"
import { ContactsPage } from "./pages/contacts"
import { MessagesPage } from "./pages/messages"
import { FollowUpsPage } from "./pages/followups"
import { AdminPage } from "./pages/admin"
import { Button } from "./components/ui/button"
import "./index.css"

// Menu icon
const MenuIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [testMode, setTestMode] = useState(false) // Add test mode

  console.log("App is rendering")

  // Test mode - show only the simple test component
  if (testMode) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="p-4">
          <button
            onClick={() => setTestMode(false)}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Exit Test Mode
          </button>
        </div>
        <SimpleTest />
      </div>
    )
  }

  return (
    <Router>
      <div className="flex h-screen bg-background">
        {/* Test Mode Button */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setTestMode(true)}
            className="px-3 py-1 bg-yellow-500 text-white text-xs rounded hover:bg-yellow-600"
          >
            Test Mode
          </button>
        </div>

        <Sidebar collapsed={sidebarCollapsed} />

        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="flex h-16 items-center gap-4 border-b bg-background px-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="lg:hidden"
            >
              <MenuIcon />
            </Button>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold text-foreground">Follow-Up Ministry</h1>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto bg-gray-50/50">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/followups" element={<FollowUpsPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route
                path="/calendar"
                element={
                  <div className="p-8">
                    <h1 className="text-3xl font-bold">Calendar</h1>
                    <p className="text-muted-foreground mt-2">Calendar feature coming soon...</p>
                  </div>
                }
              />
              <Route
                path="/settings"
                element={
                  <div className="p-8">
                    <h1 className="text-3xl font-bold">Settings</h1>
                    <p className="text-muted-foreground mt-2">Settings page coming soon...</p>
                  </div>
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
