"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, Share2, Edit } from "lucide-react"
import Link from "next/link"
import { FileUpload } from "@/components/file-upload"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import {use} from 'react'
import { set } from "date-fns"


export default function AssignmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  
  const unwrappedParams = use(params)

  

const [assignmentData , setAssignmentData] = useState<any>({})
  const router = useRouter()
  const [assignNameOpen, setAssignNameOpen] = useState(false)
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null)
  const [selectedStudent, setSelectedStudent] = useState("")
  const [manualStudentName, setManualStudentName] = useState("")
  const [activeTab, setActiveTab] = useState("select")
  const { toast } = useToast()

  useEffect(() => {
    const assignmentId = unwrappedParams.id
    const assignmentData = async () => {
      try {
        const response = await fetch("/api/assignments-data" ,{
          method: "POST",
          body: JSON.stringify({ id: assignmentId }),
          headers: {
            "Content-Type": "application/json",
          },
        })
        if (!response.ok) {
          const data = await response.json()
          
          alert("Failed to fetch assignment data noww")
          return
        }
        const data = await response.json()
        
        const required_data= {
          id: data.id,
          title: data.assignmentTitle,
          description: data.description,
          dueDate: data.dueDate.split("T")[0],
          totalPoints: 100,
          submissions: [
            {
              id: "1",
              studentName: "Mock Student 1",
              studentId: "S12345",
              submissionDate: "2023-12-10",
              status: "graded",
              score: 85,
              aiScore: 92,
              plagiarismScore: 98,
            },
            {
              id: "2",
              studentName: "Mock Student 2",
              studentId: "S12346",
              submissionDate: "2023-12-12",
              status: "pending",
              score: null,
              aiScore: 88,
              plagiarismScore: 95,
            },
            {
              id: "3",
              studentName: "Bob Johnson",
              studentId: "S12347",
              submissionDate: "2023-12-14",
              status: "graded",
              score: 92,
              aiScore: 90,
              plagiarismScore: 100,
            },
            {
              id: "4",
              studentName: null,
              studentId: "S12348",
              submissionDate: "2023-12-14",
              status: "pending",
              score: null,
              aiScore: 0,
              plagiarismScore: 0,
            },
          ],
        }
        setAssignmentData(required_data)
      } catch (error) {
        console.error("Error fetching assignment data:", error)
      }
    }
    assignmentData()
  },[unwrappedParams.id])

  // Mock data for the assignment
  const assignment = {
    id: unwrappedParams.id,
    title: "Essay on Climate Change",
    description: "Write a 500-word essay on the impacts of climate change on global ecosystems.",
    dueDate: "2023-12-15",
    totalPoints: 100,
    submissions: [
      {
        id: "1",
        studentName: "Mock Student 1",
        studentId: "S12345",
        submissionDate: "2023-12-10",
        status: "graded",
        score: 85,
        aiScore: 92,
        plagiarismScore: 98,
      },
      {
        id: "2",
        studentName: "Mock Student 2",
        studentId: "S12346",
        submissionDate: "2023-12-12",
        status: "pending",
        score: null,
        aiScore: 88,
        plagiarismScore: 95,
      },
      {
        id: "3",
        studentName: "Bob Johnson",
        studentId: "S12347",
        submissionDate: "2023-12-14",
        status: "graded",
        score: 92,
        aiScore: 90,
        plagiarismScore: 100,
      },
      {
        id: "4",
        studentName: null,
        studentId: "S12348",
        submissionDate: "2023-12-14",
        status: "pending",
        score: null,
        aiScore: 0,
        plagiarismScore: 0,
      },
    ],
  }

  const handleUploadComplete = async (files: File[], images: string[]) => {
    // console.log("Files uploaded:", files)
    // console.log("Images captured:", images)
  
    const formData = new FormData();
    for (const file of files) {
      formData.append("files", file); // append multiple files with same key
    }
    for (const [i, image] of images.entries()) {
      formData.append(`images`, image); // You could also do `images[${i}]` if your backend expects indexed keys
    }
    try {
      const res = await fetch("/api/extract-text", {
        method: "POST",
        body: formData, // no need to set Content-Type manually for FormData
      });
    
      if (!res.ok) {
        console.error("Upload failed");
      }
      let content = "";
    try {
      const data = await res.json();
      // console.log(data[0]); // an array of extracted texts
       content = data[0]
      alert("Files uploaded successfully!");
      const submission_to_db = await fetch("/api/assignment-submission", {
        method: "POST",
        body: JSON.stringify({
          
          studentId: selectedStudent,
           content,
           status:'PENDING',
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!submission_to_db.ok) {
        alert("Failed to save submission to database");
        return;
      }
      const submissionData = await submission_to_db.json();
      // console.log("Submission saved to database:", submissionData);
      alert("Submission saved successfully!");
    }
    catch (error) {
      console.error("Error parsing response:", error);
      alert("Error parsing response");
    }
    } catch (err) {
      console.error(err);
      alert("Error uploading files");
    }

    
    
  
  
    // Here you would typically process the files/images and send them to your backend
  
  
  }

  const handleEditAssignment = () => {
    // Navigate to the edit assignment page with the current assignment data
    router.push(`/dashboard/assignments/${unwrappedParams.id}/edit`)
  }

  const handleAssignName = () => {
    const studentName = activeTab === "select" ? selectedStudent : manualStudentName

    if (!studentName) {
      toast({
        title: "Error",
        description: "Please select or enter a student name",
        variant: "destructive",
      })
      return
    }

    // Here you would update the submission with the student name
    // This is a placeholder for the actual implementation
    toast({
      title: "Success",
      description: `Submission assigned to ${studentName}`,
    })

    setAssignNameOpen(false)
    setSelectedSubmission(null)
    setSelectedStudent("")
    setManualStudentName("")
  }

  const openAssignNameDialog = (submission) => {
    setSelectedSubmission(submission)
    setAssignNameOpen(true)
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{assignmentData.title}</h1>
          <p className="text-muted-foreground">Due: {assignmentData.dueDate}</p>
        </div>
        <div className="flex gap-2">
          <FileUpload
            trigger={<Button>Submit Assignment</Button>}
            title="Submit Assignment"
            description="Upload your completed assignment. You can upload files or take photos."
            onUploadComplete={handleUploadComplete}
          />
          <Button variant="outline" onClick={handleEditAssignment}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Assignment
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Assignment Details</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{assignmentData.description}</p>
          <p className="mt-2">
            <strong>Total Points:</strong> {assignmentData.totalPoints}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Submissions</CardTitle>
          <CardDescription>{assignment.submissions.length} submissions received</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {assignment.submissions.map((submission) => (
              <div key={submission.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                    <AvatarFallback>
                      {submission.studentName
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("") || "?"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    {submission.studentName ? (
                      <p className="font-medium">{submission.studentName}</p>
                    ) : (
                      <Button
                        variant="link"
                        className="p-0 h-auto font-medium text-blue-500"
                        onClick={() => openAssignNameDialog(submission)}
                      >
                        Assign Student Name
                      </Button>
                    )}
                    <p className="text-sm text-muted-foreground">
                   
      Submitted: {(submission.submissionDate)}
    </p>
                   
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {submission.status === "graded" ? (
                    <Badge className="bg-green-500">{submission.score}/100</Badge>
                  ) : (
                    <Badge variant="outline">Pending</Badge>
                  )}
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" asChild title="Share">
                      <Link href={`/dashboard/assignments/${unwrappedParams.id}/submissions/${submission.id}/share`}>
                        <Share2 className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild title="Download">
                      <Link href={`/dashboard/assignments/${unwrappedParams.id}/submissions/${submission.id}/download`}>
                        <Download className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild title="Review">
                      <Link href={`/dashboard/assignments/${unwrappedParams.id}/submissions/${submission.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Dialog open={assignNameOpen} onOpenChange={setAssignNameOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Assign Student Name</DialogTitle>
            <DialogDescription>
              This submission doesn't have a student name. Please assign a student to it.
            </DialogDescription>
          </DialogHeader>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="select">Select Student</TabsTrigger>
              <TabsTrigger value="manual">Enter Manually</TabsTrigger>
            </TabsList>

            <TabsContent value="select" className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="student-select">Select from class roster</Label>
                <Select value={selectedStudent} onValueChange={setSelectedStudent}>
                  <SelectTrigger id="student-select">
                    <SelectValue placeholder="Select a student" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* This would be populated from your actual student list */}
                    <SelectItem value="john-doe">John Doe</SelectItem>
                    <SelectItem value="jane-smith">Jane Smith</SelectItem>
                    <SelectItem value="alex-johnson">Alex Johnson</SelectItem>
                    <SelectItem value="sam-wilson">Sam Wilson</SelectItem>
                    <SelectItem value="taylor-brown">Taylor Brown</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>

            <TabsContent value="manual" className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="student-name">Enter student name</Label>
                <Input
                  id="student-name"
                  value={manualStudentName}
                  onChange={(e) => setManualStudentName(e.target.value)}
                  placeholder="e.g., John Doe"
                />
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter>
            <Button onClick={handleAssignName}>Assign Name</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
