"use client"

import { PlusCircle, Upload, Users } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StudentsList } from "./students-list"
import { CoTeachersList } from "./co-teachers-list"
import { useToast } from "@/components/ui/toast"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectUser } from "@/lib/state/slices/userSlice"
import { useDispatch } from "react-redux"
import { add_courses } from "@/lib/state/slices/courseSlice"
export default function ClassroomPage() {
  const [studentName , setStudentName] = useState("")
  const [studentEmail , setStudentEmail] = useState("")
  const [studentClass , setStudentClass] = useState("")
  const [selectedCourseId , setSelectedCourseId] = useState("")
  const [coTeacherEmail , setCoTeacherEmail] = useState("")
  const [coTeacherClass , setCoTeacherClass] = useState("")
  const [coTeacherName , setCoTeacherName] = useState("")
  const [coTeacherRole , setCoTeacherRole] = useState("")
  const [classList, setClassList] = useState([])
  const { toast } = useToast()
  const courses = useSelector((state:any)=>state.courseState.courses)
  const dispatch = useDispatch()
 
  const handleStudentSubmissiontoDB = async () => {
    
    if(classList.length === 1){
      
      setSelectedCourseId(classList[0]['id']) // to make the onChange in SELECT work, bcz it doesnn't work if no of options is 1
    }
    
    const course = classList.find((item)=>item.id === selectedCourseId)
    

    setStudentClass(course.name)
    try {
      const response = await fetch("/api/create-student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
          details: {
            name: studentName,
            email: studentEmail,
            // course: studentClass,
            courseId:selectedCourseId,
          },
        }),
      })

      if (!response.ok) {
        alert("Failed to add student . Retry again")
        return
      }

      const data = await response.json()
      toast({
        title: "Student added",
        description: "The student has been added to your class successfully.",
      })
      
    } catch (error) {
      alert("Error adding student:") 
    }
  } 

  useEffect(() => {
      

      if(courses.length > 0) {
      setClassList(courses)
      }
      // Fetch courses from the server or perform any necessary side effects
      else {
      const createdCourses = async () => {
        try {
        const response = await fetch("/api/courses")
        if (!response.ok) {
          alert("Failed to fetch courses")
          return
        }
        const data = await response.json()
        
        // Assuming the response contains an array of courses
         setClassList(data)
         
         dispatch(add_courses(data))
         return 
      }
      catch (error) {
        console.error("Error fetching courses:", error)
        alert("Error fetching courses: Showing Mock coureses")  
        
        return 
      }
    }
    createdCourses()
  }
  
    }, [])

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Classroom Management</h1>
          <p className="text-muted-foreground">Manage your students and co-teachers for all your classes</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Co-Teacher
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Co-Teacher</DialogTitle>
              <DialogDescription>
                Enter the email address of the teacher you want to invite as a co-teacher for this class.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="teacher@school.edu" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="class" className="text-right">
                  Class
                </Label>
                <select
                  id="class"
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  
                  <option value="all">All Classes</option>
                  <option value="math101">Math 101</option>
                  <option value="science202">Science 202</option>
                  <option value="history303">History 303</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                onClick={() => {
                  toast({
                    title: "Invitation sent",
                    description: "The co-teacher invitation has been sent successfully.",
                  })
                }}
              >
                Send Invitation
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="students" className="mt-6">
        <TabsList>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="co-teachers">Co-Teachers</TabsTrigger>
        </TabsList>

        <TabsContent value="students" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">127</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Average Class Size</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">25</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Submissions This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">342</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Students</h2>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Import Students
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add Student
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Add Student</DialogTitle>
                      <DialogDescription>
                        Enter the details of the student you want to add to your class.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="student-name" className="text-right">
                          Name
                        </Label>
                        <Input id="student-name" placeholder="John Doe" className="col-span-3" onChange={(e)=>setStudentName(e.target.value)} />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="student-email" className="text-right">
                          Email
                        </Label>
                        <Input
                          id="student-email"
                          type="email"
                          placeholder="student@school.edu"
                          className="col-span-3"
                          onChange={(e)=>setStudentEmail(e.target.value)}
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="student-class" className="text-right">
                          Class
                        </Label>
                        <select
                          id="student-class"
                          className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        onChange={(e)=>setSelectedCourseId(e.target.value)}
                        >
                          {/* {classList.length === 0 && <option disabled>add courses</option>} */}
                          {classList.map((item)=> <option key={item.id} value={item.id}>{item.name}</option>)}
                         
                        </select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        type="submit"
                        onClick={() => {
                          handleStudentSubmissiontoDB()
                          
                        }}
                      >
                        Add Student
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <StudentsList />
          </div>
        </TabsContent>

        <TabsContent value="co-teachers" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Co-Teacher Management</CardTitle>
              <CardDescription>
                Share access to your classes with other teachers. Each co-teacher counts as one seat in your plan.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CoTeachersList />
            </CardContent>
            <CardFooter className="flex justify-between border-t px-6 py-4">
              <div className="text-sm text-muted-foreground">
                <Users className="mr-2 inline-block h-4 w-4" />
                Using 2 of 5 available seats
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Co-Teacher
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add Co-Teacher</DialogTitle>
                    <DialogDescription>
                      Enter the email address of the teacher you want to invite as a co-teacher for this class.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">
                        Email
                      </Label>
                      <Input id="email" type="email" placeholder="teacher@school.edu" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="class" className="text-right">
                        Class
                      </Label>
                      <select
                        id="class"
                        className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="all">All Classes</option>
                        <option value="math101">Math 101</option>
                        <option value="science202">Science 202</option>
                        <option value="history303">History 303</option>
                      </select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      type="submit"
                      onClick={() => {
                        toast({
                          title: "Invitation sent",
                          description: "The co-teacher invitation has been sent successfully.",
                        })
                      }}
                    >
                      Send Invitation
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
