
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.PaymentsScalarFieldEnum = {
  id: 'id',
  email: 'email',
  payment_status: 'payment_status',
  subscription_type: 'subscription_type'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  hashed_password: 'hashed_password',
  provider: 'provider'
};

exports.Prisma.CourseScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  name: 'name',
  courseTitle: 'courseTitle',
  courseDescription: 'courseDescription',
  description: 'description',
  instructor: 'instructor',
  subject: 'subject',
  term: 'term',
  gradeLevel: 'gradeLevel',
  learningObjectives: 'learningObjectives'
};

exports.Prisma.AssignmentScalarFieldEnum = {
  id: 'id',
  assignmentTitle: 'assignmentTitle',
  selectedCourse: 'selectedCourse',
  dueDate: 'dueDate',
  description: 'description',
  learningObjectives: 'learningObjectives',
  instructions: 'instructions',
  rubric: 'rubric',
  questions: 'questions',
  answer_key: 'answer_key',
  checklist: 'checklist',
  participation_criteria: 'participation_criteria',
  peer_evaluation: 'peer_evaluation',
  userId: 'userId',
  courseId: 'courseId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StudentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  class: 'class',
  userId: 'userId',
  courseId: 'courseId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SubmissionScalarFieldEnum = {
  id: 'id',
  assignmentId: 'assignmentId',
  assignmentTitle: 'assignmentTitle',
  studentName: 'studentName',
  studentId: 'studentId',
  submissionDate: 'submissionDate',
  status: 'status',
  content: 'content',
  aiCheckerResultsId: 'aiCheckerResultsId',
  plagiarismResultsId: 'plagiarismResultsId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AICheckerResultsScalarFieldEnum = {
  id: 'id',
  score: 'score',
  confidence: 'confidence'
};

exports.Prisma.AIDetailScalarFieldEnum = {
  id: 'id',
  section: 'section',
  aiProbability: 'aiProbability',
  humanProbability: 'humanProbability',
  aiCheckerResultsId: 'aiCheckerResultsId'
};

exports.Prisma.PlagiarismResultsScalarFieldEnum = {
  id: 'id',
  score: 'score'
};

exports.Prisma.PlagiarismMatchScalarFieldEnum = {
  id: 'id',
  test: 'test',
  source: 'source',
  similarity: 'similarity',
  plagiarismResultsId: 'plagiarismResultsId'
};

exports.Prisma.InlineCommentScalarFieldEnum = {
  id: 'id',
  startIndex: 'startIndex',
  endIndex: 'endIndex',
  text: 'text',
  color: 'color',
  timeStamp: 'timeStamp',
  authorId: 'authorId',
  submissionId: 'submissionId'
};

exports.Prisma.OverallFeedbackScalarFieldEnum = {
  id: 'id',
  strengths: 'strengths',
  improvements: 'improvements',
  actionItems: 'actionItems',
  submissionId: 'submissionId'
};

exports.Prisma.SubscoreScalarFieldEnum = {
  id: 'id',
  name: 'name',
  score: 'score',
  maxScore: 'maxScore',
  rationale: 'rationale',
  submissionId: 'submissionId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  STOPPED: 'STOPPED'
};

exports.SubsciptionType = exports.$Enums.SubsciptionType = {
  educator: 'educator',
  department: 'department',
  institution: 'institution'
};

exports.Provider = exports.$Enums.Provider = {
  credentials: 'credentials',
  google: 'google',
  azure: 'azure'
};

exports.SubmissionStatus = exports.$Enums.SubmissionStatus = {
  PENDING: 'PENDING',
  GRADED: 'GRADED'
};

exports.ConfidenceLevel = exports.$Enums.ConfidenceLevel = {
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW'
};

exports.Prisma.ModelName = {
  Payments: 'Payments',
  User: 'User',
  Course: 'Course',
  Assignment: 'Assignment',
  Student: 'Student',
  Submission: 'Submission',
  AICheckerResults: 'AICheckerResults',
  AIDetail: 'AIDetail',
  PlagiarismResults: 'PlagiarismResults',
  PlagiarismMatch: 'PlagiarismMatch',
  InlineComment: 'InlineComment',
  OverallFeedback: 'OverallFeedback',
  Subscore: 'Subscore'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
