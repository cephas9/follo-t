import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"

// Icons
const TrendingUpIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const PlusIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
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

const stats = [
  {
    title: "Total Contacts",
    value: "247",
    change: "+12 this week",
    icon: "👥",
    color: "text-blue-600",
  },
  {
    title: "Follow-Ups Due",
    value: "18",
    change: "5 overdue",
    icon: "📋",
    color: "text-orange-600",
  },
  {
    title: "Messages Sent",
    value: "156",
    change: "+23 this week",
    icon: "💬",
    color: "text-green-600",
  },
  {
    title: "Response Rate",
    value: "78%",
    change: "+5% from last month",
    icon: "📈",
    color: "text-purple-600",
  },
]

const recentFollowUps = [
  {
    name: "Sarah Johnson",
    type: "First-time visitor",
    date: "2 days ago",
    status: "pending",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    type: "Prayer request",
    date: "3 days ago",
    status: "completed",
    avatar: "MC",
  },
  {
    name: "Emily Davis",
    type: "New member",
    date: "1 week ago",
    status: "in-progress",
    avatar: "ED",
  },
  {
    name: "Robert Wilson",
    type: "Pastoral care",
    date: "1 week ago",
    status: "pending",
    avatar: "RW",
  },
]

const upcomingTasks = [
  {
    task: "Call new visitors from Sunday service",
    time: "Today, 2:00 PM",
    priority: "high",
  },
  {
    task: "Send welcome email to new members",
    time: "Tomorrow, 10:00 AM",
    priority: "medium",
  },
  {
    task: "Follow up on prayer requests",
    time: "Friday, 3:00 PM",
    priority: "high",
  },
  {
    task: "Prepare monthly ministry report",
    time: "Next Monday",
    priority: "low",
  },
]

export function Dashboard() {
  return (
    <div className="space-y-8 p-8">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Pastor John</h1>
          <p className="text-muted-foreground mt-2">Here's what's happening with your follow-up ministry today.</p>
        </div>
        <Button className="shadow-lg">
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Contact
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className="text-2xl">{stat.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs flex items-center gap-1 mt-1 ${stat.color}`}>
                <TrendingUpIcon />
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Recent Follow-Ups */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Recent Follow-Ups</CardTitle>
            <CardDescription>Latest follow-up activities and their status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentFollowUps.map((followUp, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-medium">{followUp.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{followUp.name}</p>
                  <p className="text-sm text-muted-foreground">{followUp.type}</p>
                </div>
                <div className="flex flex-col items-end space-y-2">
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
                  <p className="text-xs text-muted-foreground">{followUp.date}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Your scheduled follow-up activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingTasks.map((task, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{task.task}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <CalendarIcon />
                    {task.time}
                  </p>
                </div>
                <Badge
                  variant={
                    task.priority === "high" ? "destructive" : task.priority === "medium" ? "default" : "secondary"
                  }
                >
                  {task.priority}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks to help you stay connected with your congregation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-24 flex-col space-y-3 hover:shadow-md transition-all duration-200">
              <div className="bg-blue-100 p-3 rounded-full">
                <PhoneIcon className="h-6 w-6 text-blue-600" />
              </div>
              <span className="font-medium">Make Calls</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col space-y-3 hover:shadow-md transition-all duration-200">
              <div className="bg-green-100 p-3 rounded-full">
                <MailIcon className="h-6 w-6 text-green-600" />
              </div>
              <span className="font-medium">Send Emails</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col space-y-3 hover:shadow-md transition-all duration-200">
              <div className="bg-purple-100 p-3 rounded-full">
                <CalendarIcon className="h-6 w-6 text-purple-600" />
              </div>
              <span className="font-medium">Schedule Visit</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
