"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Modal } from "../components/ui/modal"
import { Textarea } from "../components/ui/textarea"
import { Select } from "../components/ui/select"

// Icons
const SearchIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
)

const PlusIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
)

const FilterIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"
    />
  </svg>
)

const PhoneIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const MailIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const MoreIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
    />
  </svg>
)

const contacts = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "(555) 123-4567",
    category: "First-time visitor",
    lastContact: "2 days ago",
    status: "active",
    avatar: "SJ",
    notes: "Visited with family, interested in children's ministry",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    phone: "(555) 234-5678",
    category: "Member",
    lastContact: "1 week ago",
    status: "active",
    avatar: "MC",
    notes: "Long-time member, volunteers in youth ministry",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily.davis@email.com",
    phone: "(555) 345-6789",
    category: "New member",
    lastContact: "3 days ago",
    status: "follow-up needed",
    avatar: "ED",
    notes: "Recently joined, needs integration into small group",
  },
]

export function ContactsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [selectedContact, setSelectedContact] = useState(null)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleViewContact = (contact) => {
    setSelectedContact(contact)
    setIsViewModalOpen(true)
  }

  return (
    <div className="space-y-6 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contacts</h1>
          <p className="text-muted-foreground mt-2">Manage your ministry contacts and relationships</p>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)}>
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Contact
        </Button>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <FilterIcon className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Contacts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredContacts.map((contact) => (
          <Card key={contact.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`/placeholder.svg?height=48&width=48`} />
                    <AvatarFallback className="bg-blue-100 text-blue-600 font-medium">{contact.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{contact.name}</CardTitle>
                    <CardDescription>{contact.category}</CardDescription>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => handleViewContact(contact)}>
                  <MoreIcon />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MailIcon />
                  <span>{contact.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <PhoneIcon />
                  <span>{contact.phone}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Badge
                  variant={
                    contact.status === "urgent"
                      ? "destructive"
                      : contact.status === "follow-up needed"
                        ? "secondary"
                        : "default"
                  }
                >
                  {contact.status}
                </Badge>
                <p className="text-xs text-muted-foreground">Last: {contact.lastContact}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Contact Modal */}
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Add New Contact" size="lg">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">First Name</label>
              <Input placeholder="Enter first name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Last Name</label>
              <Input placeholder="Enter last name" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="Enter email address" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Phone</label>
            <Input type="tel" placeholder="Enter phone number" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <Select>
              <option value="">Select category</option>
              <option value="first-time-visitor">First-time visitor</option>
              <option value="member">Member</option>
              <option value="new-member">New member</option>
              <option value="pastoral-care">Pastoral care</option>
              <option value="prayer-request">Prayer request</option>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Notes</label>
            <Textarea placeholder="Add any notes about this contact..." rows={3} />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
              Cancel
            </Button>
            <Button>Add Contact</Button>
          </div>
        </div>
      </Modal>

      {/* View Contact Modal */}
      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title={selectedContact?.name || "Contact Details"}
        size="lg"
      >
        {selectedContact && (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={`/placeholder.svg?height=64&width=64`} />
                <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-medium">
                  {selectedContact.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">{selectedContact.name}</h3>
                <p className="text-muted-foreground">{selectedContact.category}</p>
                <Badge className="mt-2">{selectedContact.status}</Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <p className="text-sm">{selectedContact.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Phone</label>
                <p className="text-sm">{selectedContact.phone}</p>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground">Last Contact</label>
              <p className="text-sm">{selectedContact.lastContact}</p>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground">Notes</label>
              <p className="text-sm">{selectedContact.notes}</p>
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline">
                <PhoneIcon className="mr-2 h-4 w-4" />
                Call
              </Button>
              <Button variant="outline">
                <MailIcon className="mr-2 h-4 w-4" />
                Email
              </Button>
              <Button>Schedule Follow-up</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
