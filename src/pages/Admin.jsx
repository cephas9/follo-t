"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Modal } from "../components/ui/modal"
import { Input } from "../components/ui/input"
import { Select } from "../components/ui/select"

// Icons
const PlusIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
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

const SettingsIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const DatabaseIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
    />
  </svg>
)

const users = [
  {
    id: 1,
    name: "Pastor John Smith",
    email: "pastor@church.org",
    role: "Admin",
    status: "active",
    avatar: "PJ",
    lastLogin: "2 hours ago",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah@church.org",
    role: "Ministry Leader",
    status: "active",
    avatar: "SW",
    lastLogin: "1 day ago",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@church.org",
    role: "Volunteer",
    status: "active",
    avatar: "MJ",
    lastLogin: "3 days ago",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@church.org",
    role: "Volunteer",
    status: "inactive",
    avatar: "ED",
    lastLogin: "2 weeks ago",
  },
]

export function AdminPage() {
  const [activeTab, setActiveTab] = useState("users")
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [isViewUserModalOpen, setIsViewUserModalOpen] = useState(false)

  const handleViewUser = (user) => {
    setSelectedUser(user)
    setIsViewUserModalOpen(true)
  }

  return (
    <div className="space-y-6 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Panel</h1>
          <p className="text-muted-foreground mt-2">Manage users, settings, and system configuration</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="text-2xl">👥</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                <p className="text-2xl font-bold text-green-600">9</p>
              </div>
              <div className="text-2xl">✅</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Contacts</p>
                <p className="text-2xl font-bold">247</p>
              </div>
              <div className="text-2xl">📇</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Messages Sent</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <div className="text-2xl">📧</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <div className="border-b">
        <nav className="-mb-px flex space-x-8">
          {["users", "settings", "backup"].map((tab) => (
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

      {/* Users Tab */}
      {activeTab === "users" && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">User Management</h2>
            <Button onClick={() => setIsAddUserModalOpen(true)}>
              <PlusIcon className="mr-2 h-4 w-4" />
              Add User
            </Button>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {users.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={`/placeholder.svg?height=48&width=48`} />
                        <AvatarFallback className="bg-blue-100 text-blue-600 font-medium">{user.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <p className="text-xs text-muted-foreground">Last login: {user.lastLogin}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant={user.role === "Admin" ? "default" : "secondary"}>{user.role}</Badge>
                      <Badge variant={user.status === "active" ? "default" : "secondary"}>{user.status}</Badge>
                      <Button variant="outline" size="sm" onClick={() => handleViewUser(user)}>
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === "settings" && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">System Settings</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SettingsIcon />
                  General Settings
                </CardTitle>
                <CardDescription>Configure general application settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Church Name</label>
                  <Input defaultValue="Grace Community Church" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Contact Email</label>
                  <Input defaultValue="info@gracechurch.org" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input defaultValue="(555) 123-4567" />
                </div>
                <Button className="w-full">Save Changes</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UsersIcon />
                  User Permissions
                </CardTitle>
                <CardDescription>Manage user roles and permissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Admin Access</span>
                    <Badge variant="default">Full Access</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Ministry Leader</span>
                    <Badge variant="secondary">Limited Access</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Volunteer</span>
                    <Badge variant="outline">View Only</Badge>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Configure Permissions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Backup Tab */}
      {activeTab === "backup" && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Data Management</h2>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DatabaseIcon />
                Backup & Restore
              </CardTitle>
              <CardDescription>Manage your data backups and system restore points</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="font-medium">Create Backup</h3>
                  <p className="text-sm text-muted-foreground">
                    Create a backup of all your contacts, messages, and follow-up data.
                  </p>
                  <Button className="w-full">Create Backup</Button>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium">Restore Data</h3>
                  <p className="text-sm text-muted-foreground">Restore your data from a previous backup file.</p>
                  <Button variant="outline" className="w-full">
                    Choose Backup File
                  </Button>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-medium mb-4">Recent Backups</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <p className="text-sm font-medium">backup_2024_01_15.zip</p>
                      <p className="text-xs text-muted-foreground">January 15, 2024 - 2.3 MB</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <p className="text-sm font-medium">backup_2024_01_08.zip</p>
                      <p className="text-xs text-muted-foreground">January 8, 2024 - 2.1 MB</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Add User Modal */}
      <Modal isOpen={isAddUserModalOpen} onClose={() => setIsAddUserModalOpen(false)} title="Add New User" size="lg">
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
            <label className="text-sm font-medium">Role</label>
            <Select>
              <option value="">Select role</option>
              <option value="admin">Admin</option>
              <option value="ministry-leader">Ministry Leader</option>
              <option value="volunteer">Volunteer</option>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Temporary Password</label>
            <Input type="password" placeholder="Enter temporary password" />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" onClick={() => setIsAddUserModalOpen(false)}>
              Cancel
            </Button>
            <Button>Add User</Button>
          </div>
        </div>
      </Modal>

      {/* View User Modal */}
      <Modal isOpen={isViewUserModalOpen} onClose={() => setIsViewUserModalOpen(false)} title="User Details" size="lg">
        {selectedUser && (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={`/placeholder.svg?height=64&width=64`} />
                <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-medium">
                  {selectedUser.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">{selectedUser.name}</h3>
                <p className="text-muted-foreground">{selectedUser.email}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="default">{selectedUser.role}</Badge>
                  <Badge variant={selectedUser.status === "active" ? "default" : "secondary"}>
                    {selectedUser.status}
                  </Badge>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground">Last Login</label>
              <p className="text-sm">{selectedUser.lastLogin}</p>
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={() => setIsViewUserModalOpen(false)}>
                Close
              </Button>
              <Button variant="outline">Edit User</Button>
              <Button variant="destructive">Deactivate User</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
