"use client"
import Link from "next/link"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "@/lib/state/slices/userSlice"
import { useEffect } from "react"
import { useState } from "react"
import { add_courses } from "@/lib/state/slices/courseSlice"
export default function CoursesPage() {
  const [courses, setCourses] = useState< {
    id: string;
    name: string;
    description: string;
    subject: string;
    students: number;
    assignments: number;
}[]>([])
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  
  // Mock courses data
  //fetch the created classes - MN
  const mock_courses = [
    {
      id: "1",
      name: "mock data, create new course",
      description: "cereate your own courses.",
      subject: "English",
      students: 28,
      assignments: 12,
    },
    
  ]
  

  useEffect(() => {
    // Fetch courses from the server or perform any necessary side effects
    setCourses(mock_courses)
    const createdCourses = async () => {
      try {
      const response = await fetch("/api/courses")
      if (!response.ok) {
        alert("Failed to fetch courses")
        return
      }
      const data = await response.json()
      // console.log(data)
      // Assuming the response contains an array of courses
      if(data.length === 0){
        alert('No courses found create new')
      }
      else{
       setCourses(data)
       dispatch(add_courses(data))
      }
       return 
    }
    catch (error) {
      console.error("Error fetching courses:", error)
      alert("Error fetching courses: Showing Mock coureses")  
      setCourses(mock_courses)
      
      return 
    }
  }
  createdCourses()
    
  }, [])

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <PageHeader heading="Courses" subheading="Manage your courses and create new ones" />
        <Button asChild>
          <Link href="/dashboard/courses/create" title="Create a new course with details and AI-generated syllabus">
            <Plus className="mr-2 h-4 w-4" />
            Create New Course
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
              <CardDescription>{course.subject}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
              <div className="flex justify-between text-sm">
                <div>
                  <span className="font-medium">{course.students}</span> Students
                </div>
                <div>
                  <span className="font-medium">{course.assignments}</span> Assignments
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild className="w-full">
                <Link href={`/dashboard/courses/${course.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
