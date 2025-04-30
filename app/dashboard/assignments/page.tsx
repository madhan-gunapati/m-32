"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CalendarDays, Clock, FileText, Plus, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { use, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useDispatch } from "react-redux"
import { setUser } from "@/lib/state/slices/userSlice"
import { date } from "zod"
import { useSelector } from "react-redux"
import { selectUser } from "@/lib/state/slices/userSlice"
import { useState } from "react"
export default function AssignmentsPage() {
  const { toast } = useToast()
  const dispatch = useDispatch()
  const { data: session } = useSession()
  
  const [assignementList, setAssignmentList] = useState([])
 

  useEffect(() => {
    
  dispatch(setUser(session?.user))
  }
, [session , dispatch])

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await fetch("/api/assignments")
        if (!response.ok) {
          toast({
            title: "Error",
            description: "Failed to fetch assignments",
            variant: "destructive",
          })
          return
        }
        const data = await response.json()
          
        // Assuming the response contains an array of assignments
        if (data.length === 0) {
          alert("No assignments found , Create NEW")
        } else {
         
         
          setAssignmentList(data)
          console.log(data)
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "An error occurred while fetching assignments",
          variant: "destructive",
        })
      }
    }
    fetchAssignments()
  }, [])
  

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Assignments </h2>
        
        <div className="flex items-center space-x-2">
          <Link href="/dashboard/create-assignment">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Assignment
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search assignments..." className="w-[200px] pl-8 md:w-[300px]" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {
          assignementList.map((assignment) => (<Card key={assignment.id}>
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle>{assignment.assignmentTitle}</CardTitle>
                <CardDescription>{assignment.course.courseTitle} (PSY 101)</CardDescription>
              </div>
              <Badge>Active</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CalendarDays className="mr-1 h-4 w-4" />
                  <span>Due: {assignment.dueDate}</span>
                </div>
                <div className="flex items-center mt-1">
                  <FileText className="mr-1 h-4 w-4" />
                  <span>mock data : 32 submissions</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/dashboard/assignments/${assignment.id}`} className="w-full">
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
          ))
        }
        
       
      </div>
    </div>
  )
}
