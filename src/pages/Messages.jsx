"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Badge } from "../components/ui/badge"
import { Select } from "../components/ui/select"
import { Modal } from "../components/ui/modal"

// Icons
const SendIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
)

const UsersIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
)

const UserIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
)

const ClockIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const messageTemplates = [
  {
    id: 1,
    name: "Welcome New Visitor",
    subject: "Thank you for visiting us!",
    content:
      "Dear [Name], Thank you for visiting Grace Community Church. We're so glad you joined us for worship and hope you felt welcomed into our church family. We'd love to connect with you and answer any questions you might have about our church community.",
    category: "Welcome",
  },
  {
    id: 2,
    name: "Prayer Request Follow-up",
    subject: "Continuing to pray for you",
    content:
      "Dear [Name], We wanted to follow up on the prayer request you shared with us. Please know that our prayer team continues to lift you up in prayer. If there are any updates or additional ways we can support you, please don't hesitate to reach out.",
    category: "Prayer",
  },
  {
    id: 3,
    name: "Event Invitation",
    subject: "You're invited to our upcoming event",
    content:
      "Dear [Name], We would love to have you join us for our upcoming [Event Name] on [Date] at [Time]. This will be a wonderful opportunity to connect with our church community and grow in faith together.",
    category: "Events",
  },
]

const recentMessages = [
  {
    id: 1,
    recipient: "Sarah Johnson",
    subject: "Thank you for visiting us!",
    status: "sent",
    timestamp: "2 hours ago",
    type: "individual",
  },
  {
    id: 2,
    recipient: "New Members Group",
    subject: "Welcome to our church family",
    status: "delivered",
    timestamp: "1 day ago",
    type: "bulk",
  },
  {
    id: 3,
    recipient: "Michael Chen",
    subject: "Continuing to pray for you",
    status: "read",
    timestamp: "2 days ago",
    type: "individual",
  },
]

export function MessagesPage() {
  const [activeTab, setActiveTab] = useState("compose")
  const [selectedTemplate, setSelectedTemplate] = useState("")
  const [messageType, setMessageType] = useState("individual")
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false)
  const [selectedTemplateForView, setSelectedTemplateForView] = useState(null)

  const handleUseTemplate = (template) => {
    setSelectedTemplate(template.id.toString())
    setIsTemplateModalOpen(false)
  }

  const handleViewTemplate = (template) => {
    setSelectedTemplateForView(template)
    setIsTemplateModalOpen(true)
  }

  return (
    <div className="space-y-6 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Message Center</h1>
          <p className="text-muted-foreground mt-2">Send individual and bulk messages to your contacts</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b">
        <nav className="-mb-px flex space-x-8">
          {["compose", "templates", "history"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                activeTab === tab
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Compose Tab */}
      {activeTab === "compose" && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>New Message</CardTitle>
            <CardDescription>Send a personalized message to your contacts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Message Type</label>
                <Select value={messageType} onChange={(e) => setMessageType(e.target.value)}>
                  <option value="individual">📧 Individual Message</option>
                  <option value="bulk">👥 Bulk Message</option>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Template</label>
                <Select value={selectedTemplate} onChange={(e) => setSelectedTemplate(e.target.value)}>
                  <option value="">Choose a template (optional)</option>
                  {messageTemplates.map((template) => (
                    <option key={template.id} value={template.id.toString()}>
                      {template.name}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                {messageType === "individual" ? "Recipient" : "Recipient Group"}
              </label>
              <Select>
                <option value="">{messageType === "individual" ? "Select a contact" : "Select a group"}</option>
                {messageType === "individual" ? (
                  <>
                    <option value="sarah">Sarah Johnson</option>
                    <option value="michael">Michael Chen</option>
                    <option value="emily">Emily Davis</option>
                  </>
                ) : (
                  <>
                    <option value="new-visitors">New Visitors</option>
                    <option value="new-members">New Members</option>
                    <option value="prayer-requests">Prayer Requests</option>
                  </>
                )}
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <Input placeholder="Enter message subject" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea placeholder="Type your message here..." className="min-h-[150px]" />
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline">Save as Draft</Button>
              <Button>
                <SendIcon className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Templates Tab */}
      {activeTab === "templates" && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {messageTemplates.map((template) => (
            <Card key={template.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                    <CardDescription>{template.subject}</CardDescription>
                  </div>
                  <Badge variant="secondary">{template.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{template.content.substring(0, 100)}...</p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleViewTemplate(template)}>
                    View
                  </Button>
                  <Button size="sm" onClick={() => handleUseTemplate(template)}>
                    Use Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* History Tab */}
      {activeTab === "history" && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Recent Messages</CardTitle>
            <CardDescription>View your sent messages and their delivery status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMessages.map((message) => (
                <div
                  key={message.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      {message.type === "individual" ? (
                        <UserIcon className="h-5 w-5 text-primary" />
                      ) : (
                        <UsersIcon className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{message.subject}</p>
                      <p className="text-sm text-muted-foreground">To: {message.recipient}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge
                      variant={
                        message.status === "read" ? "default" : message.status === "delivered" ? "secondary" : "outline"
                      }
                    >
                      {message.status}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <ClockIcon className="mr-1 h-4 w-4" />
                      {message.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Template View Modal */}
      <Modal
        isOpen={isTemplateModalOpen}
        onClose={() => setIsTemplateModalOpen(false)}
        title={selectedTemplateForView?.name || "Template"}
        size="lg"
      >
        {selectedTemplateForView && (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Subject</label>
              <p className="text-sm font-medium">{selectedTemplateForView.subject}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Category</label>
              <Badge variant="secondary" className="ml-2">
                {selectedTemplateForView.category}
              </Badge>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Content</label>
              <div className="mt-2 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm whitespace-pre-wrap">{selectedTemplateForView.content}</p>
              </div>
            </div>
            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={() => setIsTemplateModalOpen(false)}>
                Close
              </Button>
              <Button onClick={() => handleUseTemplate(selectedTemplateForView)}>Use This Template</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
