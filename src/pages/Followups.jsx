"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Modal } from "../components/ui/modal"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Select } from "../components/ui/select"

// Icons
const PlusIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
)

const CalendarIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
)

const CheckIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const followUps = [
  {
    id: 1,
    contactName: "Sarah Johnson",
    contactAvatar: "SJ",
    type: "First-time visitor",
    dueDate: "Today",
    priority: "high",
    status: "pending",
    notes: "Follow up on Sunday visit, interested in children's ministry",
    assignedTo: "Pastor John",
  },
  {
    id: 2,
    contactName: "Michael Chen",
    contactAvatar: "MC",
    type: "Prayer request",
    dueDate: "Tomorrow",
    priority: "medium",
    status: "in-progress",
    notes: "Check on family situation, offered prayer support",
    assignedTo: "Pastor John",
  },
  {
    id: 3,
    contactName: "Emily Davis",
    contactAvatar: "ED",
    type: "New member integration",
    dueDate: "This week",
    priority: "high",
    status: "pending",
    notes: "Help connect with small group, discuss ministry opportunities",
    assignedTo: "Ministry Leader",
  },
  {
    id: 4,
    contactName: "Robert Wilson",
    contactAvatar: "RW",
    type: "Pastoral care",
    dueDate: "Next week",
    priority: "medium",
    status: "scheduled",
    notes: "Regular check-in, going through difficult time",
    assignedTo: "Pastor John",
  },
]

export function FollowUpsPage() {
  const [activeTab, setActiveTab] = useState("pending")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [selectedFollowUp, setSelectedFollowUp] = useState(null)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)

  const filteredFollowUps = followUps.filter((followUp) => {
    if (activeTab === "pending") return followUp.status === "pending"
    if (activeTab === "in-progress") return followUp.status === "in-progress"
    if (activeTab === "completed") return followUp.status === "completed"
    return true
  })

  const handleViewFollowUp = (followUp) => {
    setSelectedFollowUp(followUp)
    setIsViewModalOpen(true)
  }

  const handleCompleteFollowUp = (followUpId) => {
    console.log("Completing follow-up:", followUpId)
  }

  return (
    <div className="space-y-6 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Follow-Ups</h1>
          <p className="text-muted-foreground mt-2">Track and manage your ministry follow-up activities</p>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)}>
          <PlusIcon className="mr-2 h-4 w-4" />
          Schedule Follow-Up
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Follow-Ups</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <div className="text-2xl">📋</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Due Today</p>
                <p className="text-2xl font-bold text-orange-600">5</p>
              </div>
              <div className="text-2xl">⏰</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">In Progress</p>
                <p className="text-2xl font-bold text-blue-600">8</p>
              </div>
              <div className="text-2xl">🔄</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold text-green-600">11</p>
              </div>
              <div className="text-2xl">✅</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <div className="border-b">
        <nav className="-mb-px flex space-x-8">
          {["pending", "in-progress", "completed", "all"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                activeTab === tab
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
              }`}
            >
              {tab.replace("-", " ")}
            </button>
          ))}
        </nav>
      </div>

      {/* Follow-ups List */}
      <div className="space-y-4">
        {filteredFollowUps.map((followUp) => (
          <Card key={followUp.id} className="hover:shadow-md transition-shadow duration-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`/placeholder.svg?height=48&width=48`} />
                    <AvatarFallback className="bg-blue-100 text-blue-600 font-medium">
                      {followUp.contactAvatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-lg">{followUp.contactName}</h3>
                      <Badge
                        variant={
                          followUp.priority === "high"
                            ? "destructive"
                            : followUp.priority === "medium"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {followUp.priority} priority
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{followUp.type}</p>
                    <p className="text-sm">{followUp.notes}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarIcon />
                        <span>Due: {followUp.dueDate}</span>
                      </div>
                      <span>Assigned to: {followUp.assignedTo}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant={
                      followUp.status === "completed"
                        ? "default"
                        : followUp.status === "in-progress"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {followUp.status}
                  </Badge>
                  <Button variant="outline" size="sm" onClick={() => handleViewFollowUp(followUp)}>
                    View
                  </Button>
                  {followUp.status !== "completed" && (
                    <Button size="sm" onClick={() => handleCompleteFollowUp(followUp.id)}>
                      <CheckIcon className="mr-1 h-4 w-4" />
                      Complete
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Follow-Up Modal */}
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Schedule New Follow-Up" size="lg">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Contact</label>
            <Select>
              <option value="">Select a contact</option>
              <option value="sarah">Sarah Johnson</option>
              <option value="michael">Michael Chen</option>
              <option value="emily">Emily Davis</option>
              <option value="robert">Robert Wilson</option>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Follow-Up Type</label>
            <Select>
              <option value="">Select type</option>
              <option value="first-visit">First-time visitor</option>
              <option value="prayer-request">Prayer request</option>
              <option value="pastoral-care">Pastoral care</option>
              <option value="new-member">New member integration</option>
              <option value="general">General follow-up</option>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Due Date</label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Priority</label>
              <Select>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Assigned To</label>
            <Select>
              <option value="pastor-john">Pastor John</option>
              <option value="ministry-leader">Ministry Leader</option>
              <option value="volunteer">Volunteer</option>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Notes</label>
            <Textarea placeholder="Add any notes or specific instructions..." rows={3} />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
              Cancel
            </Button>
            <Button>Schedule Follow-Up</Button>
          </div>
        </div>
      </Modal>

      {/* View Follow-Up Modal */}
      <Modal isOpen={isViewModalOpen} onClose={() => setIsViewModalOpen(false)} title="Follow-Up Details" size="lg">
        {selectedFollowUp && (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={`/placeholder.svg?height=64&width=64`} />
                <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-medium">
                  {selectedFollowUp.contactAvatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">{selectedFollowUp.contactName}</h3>
                <p className="text-muted-foreground">{selectedFollowUp.type}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge
                    variant={
                      selectedFollowUp.priority === "high"
                        ? "destructive"
                        : selectedFollowUp.priority === "medium"
                          ? "default"
                          : "secondary"
                    }
                  >
                    {selectedFollowUp.priority} priority
                  </Badge>
                  <Badge
                    variant={
                      selectedFollowUp.status === "completed"
                        ? "default"
                        : selectedFollowUp.status === "in-progress"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {selectedFollowUp.status}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Due Date</label>
                <p className="text-sm">{selectedFollowUp.dueDate}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Assigned To</label>
                <p className="text-sm">{selectedFollowUp.assignedTo}</p>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground">Notes</label>
              <p className="text-sm">{selectedFollowUp.notes}</p>
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={() => setIsViewModalOpen(false)}>
                Close
              </Button>
              {selectedFollowUp.status !== "completed" && (
                <Button>
                  <CheckIcon className="mr-2 h-4 w-4" />
                  Mark Complete
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
