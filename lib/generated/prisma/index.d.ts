
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model GradingPolicy
 * 
 */
export type GradingPolicy = $Result.DefaultSelection<Prisma.$GradingPolicyPayload>
/**
 * Model GradingComponent
 * 
 */
export type GradingComponent = $Result.DefaultSelection<Prisma.$GradingComponentPayload>
/**
 * Model Policies
 * 
 */
export type Policies = $Result.DefaultSelection<Prisma.$PoliciesPayload>
/**
 * Model WeeklySchedule
 * 
 */
export type WeeklySchedule = $Result.DefaultSelection<Prisma.$WeeklySchedulePayload>
/**
 * Model Payments
 * 
 */
export type Payments = $Result.DefaultSelection<Prisma.$PaymentsPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model AICheckerResults
 * 
 */
export type AICheckerResults = $Result.DefaultSelection<Prisma.$AICheckerResultsPayload>
/**
 * Model AIDetail
 * 
 */
export type AIDetail = $Result.DefaultSelection<Prisma.$AIDetailPayload>
/**
 * Model PlagiarismResults
 * 
 */
export type PlagiarismResults = $Result.DefaultSelection<Prisma.$PlagiarismResultsPayload>
/**
 * Model PlagiarismMatch
 * 
 */
export type PlagiarismMatch = $Result.DefaultSelection<Prisma.$PlagiarismMatchPayload>
/**
 * Model InlineComment
 * 
 */
export type InlineComment = $Result.DefaultSelection<Prisma.$InlineCommentPayload>
/**
 * Model OverallFeedback
 * 
 */
export type OverallFeedback = $Result.DefaultSelection<Prisma.$OverallFeedbackPayload>
/**
 * Model Subscore
 * 
 */
export type Subscore = $Result.DefaultSelection<Prisma.$SubscorePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Provider: {
  credentials: 'credentials',
  google: 'google',
  azure: 'azure'
};

export type Provider = (typeof Provider)[keyof typeof Provider]


export const PaymentStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  STOPPED: 'STOPPED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const SubsciptionType: {
  educator: 'educator',
  department: 'department',
  institution: 'institution'
};

export type SubsciptionType = (typeof SubsciptionType)[keyof typeof SubsciptionType]


export const SubmissionStatus: {
  PENDING: 'PENDING',
  GRADED: 'GRADED'
};

export type SubmissionStatus = (typeof SubmissionStatus)[keyof typeof SubmissionStatus]


export const ConfidenceLevel: {
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW'
};

export type ConfidenceLevel = (typeof ConfidenceLevel)[keyof typeof ConfidenceLevel]

}

export type Provider = $Enums.Provider

export const Provider: typeof $Enums.Provider

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type SubsciptionType = $Enums.SubsciptionType

export const SubsciptionType: typeof $Enums.SubsciptionType

export type SubmissionStatus = $Enums.SubmissionStatus

export const SubmissionStatus: typeof $Enums.SubmissionStatus

export type ConfidenceLevel = $Enums.ConfidenceLevel

export const ConfidenceLevel: typeof $Enums.ConfidenceLevel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Payments
 * const payments = await prisma.payments.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Payments
   * const payments = await prisma.payments.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.payments`: Exposes CRUD operations for the **Payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.PaymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aICheckerResults`: Exposes CRUD operations for the **AICheckerResults** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AICheckerResults
    * const aICheckerResults = await prisma.aICheckerResults.findMany()
    * ```
    */
  get aICheckerResults(): Prisma.AICheckerResultsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIDetail`: Exposes CRUD operations for the **AIDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIDetails
    * const aIDetails = await prisma.aIDetail.findMany()
    * ```
    */
  get aIDetail(): Prisma.AIDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plagiarismResults`: Exposes CRUD operations for the **PlagiarismResults** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlagiarismResults
    * const plagiarismResults = await prisma.plagiarismResults.findMany()
    * ```
    */
  get plagiarismResults(): Prisma.PlagiarismResultsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plagiarismMatch`: Exposes CRUD operations for the **PlagiarismMatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlagiarismMatches
    * const plagiarismMatches = await prisma.plagiarismMatch.findMany()
    * ```
    */
  get plagiarismMatch(): Prisma.PlagiarismMatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inlineComment`: Exposes CRUD operations for the **InlineComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InlineComments
    * const inlineComments = await prisma.inlineComment.findMany()
    * ```
    */
  get inlineComment(): Prisma.InlineCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.overallFeedback`: Exposes CRUD operations for the **OverallFeedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OverallFeedbacks
    * const overallFeedbacks = await prisma.overallFeedback.findMany()
    * ```
    */
  get overallFeedback(): Prisma.OverallFeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscore`: Exposes CRUD operations for the **Subscore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscores
    * const subscores = await prisma.subscore.findMany()
    * ```
    */
  get subscore(): Prisma.SubscoreDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "payments" | "user" | "course" | "assignment" | "student" | "submission" | "aICheckerResults" | "aIDetail" | "plagiarismResults" | "plagiarismMatch" | "inlineComment" | "overallFeedback" | "subscore"
      txIsolationLevel: never
    }
    model: {
      Payments: {
        payload: Prisma.$PaymentsPayload<ExtArgs>
        fields: Prisma.PaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findFirst: {
            args: Prisma.PaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findMany: {
            args: Prisma.PaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          create: {
            args: Prisma.PaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          createMany: {
            args: Prisma.PaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          update: {
            args: Prisma.PaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.PaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PaymentsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PaymentsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CourseFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CourseAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AssignmentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AssignmentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.StudentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.StudentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SubmissionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SubmissionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      AICheckerResults: {
        payload: Prisma.$AICheckerResultsPayload<ExtArgs>
        fields: Prisma.AICheckerResultsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AICheckerResultsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AICheckerResultsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AICheckerResultsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AICheckerResultsPayload>
          }
          findFirst: {
            args: Prisma.AICheckerResultsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AICheckerResultsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AICheckerResultsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AICheckerResultsPayload>
          }
          findMany: {
            args: Prisma.AICheckerResultsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AICheckerResultsPayload>[]
          }
          create: {
            args: Prisma.AICheckerResultsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AICheckerResultsPayload>
          }
          createMany: {
            args: Prisma.AICheckerResultsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AICheckerResultsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AICheckerResultsPayload>
          }
          update: {
            args: Prisma.AICheckerResultsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AICheckerResultsPayload>
          }
          deleteMany: {
            args: Prisma.AICheckerResultsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AICheckerResultsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AICheckerResultsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AICheckerResultsPayload>
          }
          aggregate: {
            args: Prisma.AICheckerResultsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAICheckerResults>
          }
          groupBy: {
            args: Prisma.AICheckerResultsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AICheckerResultsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AICheckerResultsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AICheckerResultsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AICheckerResultsCountArgs<ExtArgs>
            result: $Utils.Optional<AICheckerResultsCountAggregateOutputType> | number
          }
        }
      }
      AIDetail: {
        payload: Prisma.$AIDetailPayload<ExtArgs>
        fields: Prisma.AIDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIDetailPayload>
          }
          findFirst: {
            args: Prisma.AIDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIDetailPayload>
          }
          findMany: {
            args: Prisma.AIDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIDetailPayload>[]
          }
          create: {
            args: Prisma.AIDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIDetailPayload>
          }
          createMany: {
            args: Prisma.AIDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AIDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIDetailPayload>
          }
          update: {
            args: Prisma.AIDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIDetailPayload>
          }
          deleteMany: {
            args: Prisma.AIDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AIDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIDetailPayload>
          }
          aggregate: {
            args: Prisma.AIDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIDetail>
          }
          groupBy: {
            args: Prisma.AIDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIDetailGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AIDetailFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AIDetailAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AIDetailCountArgs<ExtArgs>
            result: $Utils.Optional<AIDetailCountAggregateOutputType> | number
          }
        }
      }
      PlagiarismResults: {
        payload: Prisma.$PlagiarismResultsPayload<ExtArgs>
        fields: Prisma.PlagiarismResultsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlagiarismResultsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagiarismResultsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlagiarismResultsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagiarismResultsPayload>
          }
          findFirst: {
            args: Prisma.PlagiarismResultsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagiarismResultsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlagiarismResultsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagiarismResultsPayload>
          }
          findMany: {
            args: Prisma.PlagiarismResultsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagiarismResultsPayload>[]
          }
          create: {
            args: Prisma.PlagiarismResultsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagiarismResultsPayload>
          }
          createMany: {
            args: Prisma.PlagiarismResultsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlagiarismResultsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagiarismResultsPayload>
          }
          update: {
            args: Prisma.PlagiarismResultsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagiarismResultsPayload>
          }
          deleteMany: {
            args: Prisma.PlagiarismResultsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlagiarismResultsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlagiarismResultsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagiarismResultsPayload>
          }
          aggregate: {
            args: Prisma.PlagiarismResultsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlagiarismResults>
          }
          groupBy: {
            args: Prisma.PlagiarismResultsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlagiarismResultsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PlagiarismResultsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PlagiarismResultsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PlagiarismResultsCountArgs<ExtArgs>
            result: $Utils.Optional<PlagiarismResultsCountAggregateOutputType> | number
          }
        }
      }
      PlagiarismMatch: {
        payload: Prisma.$PlagiarismMatchPayload<ExtArgs>
        fields: Prisma.PlagiarismMatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlagiarismMatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagiarismMatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlagiarismMatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagiarismMatchPayload>
          }
          findFirst: {
            args: Prisma.PlagiarismMatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagiarismMatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlagiarismMatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagiarismMatchPayload>
          }
          findMany: {
            args: Prisma.PlagiarismMatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagiarismMatchPayload>[]
          }
          create: {
            args: Prisma.PlagiarismMatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagiarismMatchPayload>
          }
          createMany: {
            args: Prisma.PlagiarismMatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlagiarismMatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagiarismMatchPayload>
          }
          update: {
            args: Prisma.PlagiarismMatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagiarismMatchPayload>
          }
          deleteMany: {
            args: Prisma.PlagiarismMatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlagiarismMatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlagiarismMatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagiarismMatchPayload>
          }
          aggregate: {
            args: Prisma.PlagiarismMatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlagiarismMatch>
          }
          groupBy: {
            args: Prisma.PlagiarismMatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlagiarismMatchGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PlagiarismMatchFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PlagiarismMatchAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PlagiarismMatchCountArgs<ExtArgs>
            result: $Utils.Optional<PlagiarismMatchCountAggregateOutputType> | number
          }
        }
      }
      InlineComment: {
        payload: Prisma.$InlineCommentPayload<ExtArgs>
        fields: Prisma.InlineCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InlineCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InlineCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InlineCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InlineCommentPayload>
          }
          findFirst: {
            args: Prisma.InlineCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InlineCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InlineCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InlineCommentPayload>
          }
          findMany: {
            args: Prisma.InlineCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InlineCommentPayload>[]
          }
          create: {
            args: Prisma.InlineCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InlineCommentPayload>
          }
          createMany: {
            args: Prisma.InlineCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InlineCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InlineCommentPayload>
          }
          update: {
            args: Prisma.InlineCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InlineCommentPayload>
          }
          deleteMany: {
            args: Prisma.InlineCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InlineCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InlineCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InlineCommentPayload>
          }
          aggregate: {
            args: Prisma.InlineCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInlineComment>
          }
          groupBy: {
            args: Prisma.InlineCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InlineCommentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.InlineCommentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.InlineCommentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.InlineCommentCountArgs<ExtArgs>
            result: $Utils.Optional<InlineCommentCountAggregateOutputType> | number
          }
        }
      }
      OverallFeedback: {
        payload: Prisma.$OverallFeedbackPayload<ExtArgs>
        fields: Prisma.OverallFeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OverallFeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverallFeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OverallFeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverallFeedbackPayload>
          }
          findFirst: {
            args: Prisma.OverallFeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverallFeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OverallFeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverallFeedbackPayload>
          }
          findMany: {
            args: Prisma.OverallFeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverallFeedbackPayload>[]
          }
          create: {
            args: Prisma.OverallFeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverallFeedbackPayload>
          }
          createMany: {
            args: Prisma.OverallFeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OverallFeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverallFeedbackPayload>
          }
          update: {
            args: Prisma.OverallFeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverallFeedbackPayload>
          }
          deleteMany: {
            args: Prisma.OverallFeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OverallFeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OverallFeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OverallFeedbackPayload>
          }
          aggregate: {
            args: Prisma.OverallFeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOverallFeedback>
          }
          groupBy: {
            args: Prisma.OverallFeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<OverallFeedbackGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.OverallFeedbackFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.OverallFeedbackAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.OverallFeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<OverallFeedbackCountAggregateOutputType> | number
          }
        }
      }
      Subscore: {
        payload: Prisma.$SubscorePayload<ExtArgs>
        fields: Prisma.SubscoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscorePayload>
          }
          findFirst: {
            args: Prisma.SubscoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscorePayload>
          }
          findMany: {
            args: Prisma.SubscoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscorePayload>[]
          }
          create: {
            args: Prisma.SubscoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscorePayload>
          }
          createMany: {
            args: Prisma.SubscoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubscoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscorePayload>
          }
          update: {
            args: Prisma.SubscoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscorePayload>
          }
          deleteMany: {
            args: Prisma.SubscoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscorePayload>
          }
          aggregate: {
            args: Prisma.SubscoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscore>
          }
          groupBy: {
            args: Prisma.SubscoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscoreGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SubscoreFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SubscoreAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SubscoreCountArgs<ExtArgs>
            result: $Utils.Optional<SubscoreCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    payments?: PaymentsOmit
    user?: UserOmit
    course?: CourseOmit
    assignment?: AssignmentOmit
    student?: StudentOmit
    submission?: SubmissionOmit
    aICheckerResults?: AICheckerResultsOmit
    aIDetail?: AIDetailOmit
    plagiarismResults?: PlagiarismResultsOmit
    plagiarismMatch?: PlagiarismMatchOmit
    inlineComment?: InlineCommentOmit
    overallFeedback?: OverallFeedbackOmit
    subscore?: SubscoreOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    courses: number
    assignments: number
    students: number
    inlineComments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | UserCountOutputTypeCountCoursesArgs
    assignments?: boolean | UserCountOutputTypeCountAssignmentsArgs
    students?: boolean | UserCountOutputTypeCountStudentsArgs
    inlineComments?: boolean | UserCountOutputTypeCountInlineCommentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInlineCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InlineCommentWhereInput
  }


  /**
   * Count Type AssignmentCountOutputType
   */

  export type AssignmentCountOutputType = {
    submission: number
  }

  export type AssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | AssignmentCountOutputTypeCountSubmissionArgs
  }

  // Custom InputTypes
  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentCountOutputType
     */
    select?: AssignmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Count Type SubmissionCountOutputType
   */

  export type SubmissionCountOutputType = {
    inlineComments: number
    subscores: number
  }

  export type SubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inlineComments?: boolean | SubmissionCountOutputTypeCountInlineCommentsArgs
    subscores?: boolean | SubmissionCountOutputTypeCountSubscoresArgs
  }

  // Custom InputTypes
  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionCountOutputType
     */
    select?: SubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeCountInlineCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InlineCommentWhereInput
  }

  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeCountSubscoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscoreWhereInput
  }


  /**
   * Count Type AICheckerResultsCountOutputType
   */

  export type AICheckerResultsCountOutputType = {
    details: number
  }

  export type AICheckerResultsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | AICheckerResultsCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * AICheckerResultsCountOutputType without action
   */
  export type AICheckerResultsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AICheckerResultsCountOutputType
     */
    select?: AICheckerResultsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AICheckerResultsCountOutputType without action
   */
  export type AICheckerResultsCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIDetailWhereInput
  }


  /**
   * Count Type PlagiarismResultsCountOutputType
   */

  export type PlagiarismResultsCountOutputType = {
    matches: number
  }

  export type PlagiarismResultsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | PlagiarismResultsCountOutputTypeCountMatchesArgs
  }

  // Custom InputTypes
  /**
   * PlagiarismResultsCountOutputType without action
   */
  export type PlagiarismResultsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismResultsCountOutputType
     */
    select?: PlagiarismResultsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlagiarismResultsCountOutputType without action
   */
  export type PlagiarismResultsCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlagiarismMatchWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Material
   */





  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    title?: boolean
    author?: boolean
    publisher?: boolean
    year?: boolean
    required?: boolean
  }, ExtArgs["result"]["material"]>



  export type MaterialSelectScalar = {
    title?: boolean
    author?: boolean
    publisher?: boolean
    year?: boolean
    required?: boolean
  }

  export type MaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"title" | "author" | "publisher" | "year" | "required", ExtArgs["result"]["material"]>

  export type $MaterialPayload = {
    name: "Material"
    objects: {}
    scalars: {
      title: string
      author: string
      publisher: string
      year: string
      required: boolean
    }
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>





  /**
   * Fields of the Material model
   */
  interface MaterialFieldRefs {
    readonly title: FieldRef<"Material", 'String'>
    readonly author: FieldRef<"Material", 'String'>
    readonly publisher: FieldRef<"Material", 'String'>
    readonly year: FieldRef<"Material", 'String'>
    readonly required: FieldRef<"Material", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
  }


  /**
   * Model GradingPolicy
   */





  export type GradingPolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assignments?: boolean | GradingComponentDefaultArgs<ExtArgs>
    midterm?: boolean | GradingComponentDefaultArgs<ExtArgs>
    finalExam?: boolean | GradingComponentDefaultArgs<ExtArgs>
    participation?: boolean | GradingComponentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gradingPolicy"]>



  export type GradingPolicySelectScalar = {}

  export type GradingPolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"assignments" | "midterm" | "finalExam" | "participation", ExtArgs["result"]["gradingPolicy"]>
  export type GradingPolicyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GradingPolicyPayload = {
    name: "GradingPolicy"
    objects: {}
    scalars: {}
    composites: {
      assignments: Prisma.$GradingComponentPayload
      midterm: Prisma.$GradingComponentPayload
      finalExam: Prisma.$GradingComponentPayload
      participation: Prisma.$GradingComponentPayload
    }
  }

  type GradingPolicyGetPayload<S extends boolean | null | undefined | GradingPolicyDefaultArgs> = $Result.GetResult<Prisma.$GradingPolicyPayload, S>





  /**
   * Fields of the GradingPolicy model
   */
  interface GradingPolicyFieldRefs {

  }
    

  // Custom InputTypes
  /**
   * GradingPolicy without action
   */
  export type GradingPolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingPolicy
     */
    select?: GradingPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingPolicy
     */
    omit?: GradingPolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingPolicyInclude<ExtArgs> | null
  }


  /**
   * Model GradingComponent
   */





  export type GradingComponentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    description?: boolean
    percentage?: boolean
  }, ExtArgs["result"]["gradingComponent"]>



  export type GradingComponentSelectScalar = {
    description?: boolean
    percentage?: boolean
  }

  export type GradingComponentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"description" | "percentage", ExtArgs["result"]["gradingComponent"]>

  export type $GradingComponentPayload = {
    name: "GradingComponent"
    objects: {}
    scalars: {
      description: string
      percentage: number
    }
    composites: {}
  }

  type GradingComponentGetPayload<S extends boolean | null | undefined | GradingComponentDefaultArgs> = $Result.GetResult<Prisma.$GradingComponentPayload, S>





  /**
   * Fields of the GradingComponent model
   */
  interface GradingComponentFieldRefs {
    readonly description: FieldRef<"GradingComponent", 'String'>
    readonly percentage: FieldRef<"GradingComponent", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GradingComponent without action
   */
  export type GradingComponentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingComponent
     */
    select?: GradingComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingComponent
     */
    omit?: GradingComponentOmit<ExtArgs> | null
  }


  /**
   * Model Policies
   */





  export type PoliciesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attendance?: boolean
    lateWork?: boolean
    academicIntegrity?: boolean
    accommodations?: boolean
  }, ExtArgs["result"]["policies"]>



  export type PoliciesSelectScalar = {
    attendance?: boolean
    lateWork?: boolean
    academicIntegrity?: boolean
    accommodations?: boolean
  }

  export type PoliciesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"attendance" | "lateWork" | "academicIntegrity" | "accommodations", ExtArgs["result"]["policies"]>

  export type $PoliciesPayload = {
    name: "Policies"
    objects: {}
    scalars: {
      attendance: string
      lateWork: string
      academicIntegrity: string
      accommodations: string
    }
    composites: {}
  }

  type PoliciesGetPayload<S extends boolean | null | undefined | PoliciesDefaultArgs> = $Result.GetResult<Prisma.$PoliciesPayload, S>





  /**
   * Fields of the Policies model
   */
  interface PoliciesFieldRefs {
    readonly attendance: FieldRef<"Policies", 'String'>
    readonly lateWork: FieldRef<"Policies", 'String'>
    readonly academicIntegrity: FieldRef<"Policies", 'String'>
    readonly accommodations: FieldRef<"Policies", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Policies without action
   */
  export type PoliciesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policies
     */
    select?: PoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policies
     */
    omit?: PoliciesOmit<ExtArgs> | null
  }


  /**
   * Model WeeklySchedule
   */





  export type WeeklyScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    week?: boolean
    topic?: boolean
    readings?: boolean
    assignments?: boolean
  }, ExtArgs["result"]["weeklySchedule"]>



  export type WeeklyScheduleSelectScalar = {
    week?: boolean
    topic?: boolean
    readings?: boolean
    assignments?: boolean
  }

  export type WeeklyScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"week" | "topic" | "readings" | "assignments", ExtArgs["result"]["weeklySchedule"]>

  export type $WeeklySchedulePayload = {
    name: "WeeklySchedule"
    objects: {}
    scalars: {
      week: number
      topic: string
      readings: string
      assignments: string
    }
    composites: {}
  }

  type WeeklyScheduleGetPayload<S extends boolean | null | undefined | WeeklyScheduleDefaultArgs> = $Result.GetResult<Prisma.$WeeklySchedulePayload, S>





  /**
   * Fields of the WeeklySchedule model
   */
  interface WeeklyScheduleFieldRefs {
    readonly week: FieldRef<"WeeklySchedule", 'Int'>
    readonly topic: FieldRef<"WeeklySchedule", 'String'>
    readonly readings: FieldRef<"WeeklySchedule", 'String'>
    readonly assignments: FieldRef<"WeeklySchedule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WeeklySchedule without action
   */
  export type WeeklyScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklySchedule
     */
    select?: WeeklyScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklySchedule
     */
    omit?: WeeklyScheduleOmit<ExtArgs> | null
  }


  /**
   * Model Payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: string | null
    email: string | null
    payment_status: $Enums.PaymentStatus | null
    subscription_type: $Enums.SubsciptionType | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: string | null
    email: string | null
    payment_status: $Enums.PaymentStatus | null
    subscription_type: $Enums.SubsciptionType | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    email: number
    payment_status: number
    subscription_type: number
    _all: number
  }


  export type PaymentsMinAggregateInputType = {
    id?: true
    email?: true
    payment_status?: true
    subscription_type?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    email?: true
    payment_status?: true
    subscription_type?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    email?: true
    payment_status?: true
    subscription_type?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to aggregate.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type PaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithAggregationInput | PaymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: PaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: string
    email: string
    payment_status: $Enums.PaymentStatus
    subscription_type: $Enums.SubsciptionType
    _count: PaymentsCountAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends PaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    payment_status?: boolean
    subscription_type?: boolean
  }, ExtArgs["result"]["payments"]>



  export type PaymentsSelectScalar = {
    id?: boolean
    email?: boolean
    payment_status?: boolean
    subscription_type?: boolean
  }

  export type PaymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "payment_status" | "subscription_type", ExtArgs["result"]["payments"]>

  export type $PaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payments"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      payment_status: $Enums.PaymentStatus
      subscription_type: $Enums.SubsciptionType
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type PaymentsGetPayload<S extends boolean | null | undefined | PaymentsDefaultArgs> = $Result.GetResult<Prisma.$PaymentsPayload, S>

  type PaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface PaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payments'], meta: { name: 'Payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {PaymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentsFindUniqueArgs>(args: SelectSubset<T, PaymentsFindUniqueArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentsFindFirstArgs>(args?: SelectSubset<T, PaymentsFindFirstArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentsFindManyArgs>(args?: SelectSubset<T, PaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {PaymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends PaymentsCreateArgs>(args: SelectSubset<T, PaymentsCreateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentsCreateManyArgs>(args?: SelectSubset<T, PaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payments.
     * @param {PaymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends PaymentsDeleteArgs>(args: SelectSubset<T, PaymentsDeleteArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {PaymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentsUpdateArgs>(args: SelectSubset<T, PaymentsUpdateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentsDeleteManyArgs>(args?: SelectSubset<T, PaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentsUpdateManyArgs>(args: SelectSubset<T, PaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payments.
     * @param {PaymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends PaymentsUpsertArgs>(args: SelectSubset<T, PaymentsUpsertArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * @param {PaymentsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const payments = await prisma.payments.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PaymentsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Payments.
     * @param {PaymentsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const payments = await prisma.payments.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PaymentsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentsCountArgs>(
      args?: Subset<T, PaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payments model
   */
  readonly fields: PaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payments model
   */
  interface PaymentsFieldRefs {
    readonly id: FieldRef<"Payments", 'String'>
    readonly email: FieldRef<"Payments", 'String'>
    readonly payment_status: FieldRef<"Payments", 'PaymentStatus'>
    readonly subscription_type: FieldRef<"Payments", 'SubsciptionType'>
  }
    

  // Custom InputTypes
  /**
   * Payments findUnique
   */
  export type PaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findUniqueOrThrow
   */
  export type PaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findFirst
   */
  export type PaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findFirstOrThrow
   */
  export type PaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findMany
   */
  export type PaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments create
   */
  export type PaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data needed to create a Payments.
     */
    data: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
  }

  /**
   * Payments createMany
   */
  export type PaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
  }

  /**
   * Payments update
   */
  export type PaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data needed to update a Payments.
     */
    data: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
    /**
     * Choose, which Payments to update.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments updateMany
   */
  export type PaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payments upsert
   */
  export type PaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The filter to search for the Payments to update in case it exists.
     */
    where: PaymentsWhereUniqueInput
    /**
     * In case the Payments found by the `where` argument doesn't exist, create a new Payments with this data.
     */
    create: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
    /**
     * In case the Payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
  }

  /**
   * Payments delete
   */
  export type PaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Filter which Payments to delete.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments deleteMany
   */
  export type PaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payments findRaw
   */
  export type PaymentsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Payments aggregateRaw
   */
  export type PaymentsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Payments without action
   */
  export type PaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    hashed_password: string | null
    provider: $Enums.Provider | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    hashed_password: string | null
    provider: $Enums.Provider | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    hashed_password: number
    provider: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    hashed_password?: true
    provider?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    hashed_password?: true
    provider?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    hashed_password?: true
    provider?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    hashed_password: string
    provider: $Enums.Provider
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    hashed_password?: boolean
    provider?: boolean
    courses?: boolean | User$coursesArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    students?: boolean | User$studentsArgs<ExtArgs>
    inlineComments?: boolean | User$inlineCommentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    hashed_password?: boolean
    provider?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "hashed_password" | "provider", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | User$coursesArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    students?: boolean | User$studentsArgs<ExtArgs>
    inlineComments?: boolean | User$inlineCommentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      students: Prisma.$StudentPayload<ExtArgs>[]
      inlineComments: Prisma.$InlineCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      hashed_password: string
      provider: $Enums.Provider
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends User$coursesArgs<ExtArgs> = {}>(args?: Subset<T, User$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends User$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends User$studentsArgs<ExtArgs> = {}>(args?: Subset<T, User$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inlineComments<T extends User$inlineCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$inlineCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InlineCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly hashed_password: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'Provider'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.courses
   */
  export type User$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User.assignments
   */
  export type User$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * User.students
   */
  export type User$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * User.inlineComments
   */
  export type User$inlineCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InlineComment
     */
    select?: InlineCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InlineComment
     */
    omit?: InlineCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InlineCommentInclude<ExtArgs> | null
    where?: InlineCommentWhereInput
    orderBy?: InlineCommentOrderByWithRelationInput | InlineCommentOrderByWithRelationInput[]
    cursor?: InlineCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InlineCommentScalarFieldEnum | InlineCommentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    courseTitle: string | null
    courseDescription: string | null
    description: string | null
    instructor: string | null
    subject: string | null
    term: string | null
    gradeLevel: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    courseTitle: string | null
    courseDescription: string | null
    description: string | null
    instructor: string | null
    subject: string | null
    term: string | null
    gradeLevel: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    courseTitle: number
    courseDescription: number
    description: number
    instructor: number
    subject: number
    term: number
    gradeLevel: number
    learningObjectives: number
    _all: number
  }


  export type CourseMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    courseTitle?: true
    courseDescription?: true
    description?: true
    instructor?: true
    subject?: true
    term?: true
    gradeLevel?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    courseTitle?: true
    courseDescription?: true
    description?: true
    instructor?: true
    subject?: true
    term?: true
    gradeLevel?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    courseTitle?: true
    courseDescription?: true
    description?: true
    instructor?: true
    subject?: true
    term?: true
    gradeLevel?: true
    learningObjectives?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    userId: string
    name: string
    courseTitle: string
    courseDescription: string
    description: string
    instructor: string
    subject: string
    term: string
    gradeLevel: string
    learningObjectives: string[]
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    courseTitle?: boolean
    courseDescription?: boolean
    description?: boolean
    instructor?: boolean
    subject?: boolean
    term?: boolean
    gradeLevel?: boolean
    learningObjectives?: boolean
    requiredMaterials?: boolean | MaterialDefaultArgs<ExtArgs>
    gradingPolicy?: boolean | GradingPolicyDefaultArgs<ExtArgs>
    policies?: boolean | PoliciesDefaultArgs<ExtArgs>
    weeklySchedule?: boolean | WeeklyScheduleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>



  export type CourseSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    courseTitle?: boolean
    courseDescription?: boolean
    description?: boolean
    instructor?: boolean
    subject?: boolean
    term?: boolean
    gradeLevel?: boolean
    learningObjectives?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "courseTitle" | "courseDescription" | "description" | "instructor" | "subject" | "term" | "gradeLevel" | "learningObjectives" | "requiredMaterials" | "gradingPolicy" | "policies" | "weeklySchedule", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      courseTitle: string
      courseDescription: string
      description: string
      instructor: string
      subject: string
      term: string
      gradeLevel: string
      learningObjectives: string[]
    }, ExtArgs["result"]["course"]>
    composites: {
      requiredMaterials: Prisma.$MaterialPayload[]
      gradingPolicy: Prisma.$GradingPolicyPayload
      policies: Prisma.$PoliciesPayload
      weeklySchedule: Prisma.$WeeklySchedulePayload[]
    }
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * @param {CourseFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const course = await prisma.course.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CourseFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Course.
     * @param {CourseAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const course = await prisma.course.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CourseAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly userId: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly courseTitle: FieldRef<"Course", 'String'>
    readonly courseDescription: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly instructor: FieldRef<"Course", 'String'>
    readonly subject: FieldRef<"Course", 'String'>
    readonly term: FieldRef<"Course", 'String'>
    readonly gradeLevel: FieldRef<"Course", 'String'>
    readonly learningObjectives: FieldRef<"Course", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course findRaw
   */
  export type CourseFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Course aggregateRaw
   */
  export type CourseAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentMinAggregateOutputType = {
    id: string | null
    assignmentTitle: string | null
    selectedCourse: string | null
    dueDate: Date | null
    description: string | null
    learningObjectives: string | null
    instructions: string | null
    rubric: string | null
    questions: string | null
    answer_key: string | null
    checklist: string | null
    participation_criteria: string | null
    peer_evaluation: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssignmentMaxAggregateOutputType = {
    id: string | null
    assignmentTitle: string | null
    selectedCourse: string | null
    dueDate: Date | null
    description: string | null
    learningObjectives: string | null
    instructions: string | null
    rubric: string | null
    questions: string | null
    answer_key: string | null
    checklist: string | null
    participation_criteria: string | null
    peer_evaluation: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssignmentCountAggregateOutputType = {
    id: number
    assignmentTitle: number
    selectedCourse: number
    dueDate: number
    description: number
    learningObjectives: number
    instructions: number
    rubric: number
    questions: number
    answer_key: number
    checklist: number
    participation_criteria: number
    peer_evaluation: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssignmentMinAggregateInputType = {
    id?: true
    assignmentTitle?: true
    selectedCourse?: true
    dueDate?: true
    description?: true
    learningObjectives?: true
    instructions?: true
    rubric?: true
    questions?: true
    answer_key?: true
    checklist?: true
    participation_criteria?: true
    peer_evaluation?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssignmentMaxAggregateInputType = {
    id?: true
    assignmentTitle?: true
    selectedCourse?: true
    dueDate?: true
    description?: true
    learningObjectives?: true
    instructions?: true
    rubric?: true
    questions?: true
    answer_key?: true
    checklist?: true
    participation_criteria?: true
    peer_evaluation?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssignmentCountAggregateInputType = {
    id?: true
    assignmentTitle?: true
    selectedCourse?: true
    dueDate?: true
    description?: true
    learningObjectives?: true
    instructions?: true
    rubric?: true
    questions?: true
    answer_key?: true
    checklist?: true
    participation_criteria?: true
    peer_evaluation?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    id: string
    assignmentTitle: string
    selectedCourse: string
    dueDate: Date
    description: string
    learningObjectives: string
    instructions: string | null
    rubric: string | null
    questions: string | null
    answer_key: string | null
    checklist: string | null
    participation_criteria: string | null
    peer_evaluation: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentTitle?: boolean
    selectedCourse?: boolean
    dueDate?: boolean
    description?: boolean
    learningObjectives?: boolean
    instructions?: boolean
    rubric?: boolean
    questions?: boolean
    answer_key?: boolean
    checklist?: boolean
    participation_criteria?: boolean
    peer_evaluation?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    submission?: boolean | Assignment$submissionArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>



  export type AssignmentSelectScalar = {
    id?: boolean
    assignmentTitle?: boolean
    selectedCourse?: boolean
    dueDate?: boolean
    description?: boolean
    learningObjectives?: boolean
    instructions?: boolean
    rubric?: boolean
    questions?: boolean
    answer_key?: boolean
    checklist?: boolean
    participation_criteria?: boolean
    peer_evaluation?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assignmentTitle" | "selectedCourse" | "dueDate" | "description" | "learningObjectives" | "instructions" | "rubric" | "questions" | "answer_key" | "checklist" | "participation_criteria" | "peer_evaluation" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["assignment"]>
  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    submission?: boolean | Assignment$submissionArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      submission: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assignmentTitle: string
      selectedCourse: string
      dueDate: Date
      description: string
      learningObjectives: string
      instructions: string | null
      rubric: string | null
      questions: string | null
      answer_key: string | null
      checklist: string | null
      participation_criteria: string | null
      peer_evaluation: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * @param {AssignmentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const assignment = await prisma.assignment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AssignmentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Assignment.
     * @param {AssignmentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const assignment = await prisma.assignment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AssignmentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submission<T extends Assignment$submissionArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assignment model
   */
  interface AssignmentFieldRefs {
    readonly id: FieldRef<"Assignment", 'String'>
    readonly assignmentTitle: FieldRef<"Assignment", 'String'>
    readonly selectedCourse: FieldRef<"Assignment", 'String'>
    readonly dueDate: FieldRef<"Assignment", 'DateTime'>
    readonly description: FieldRef<"Assignment", 'String'>
    readonly learningObjectives: FieldRef<"Assignment", 'String'>
    readonly instructions: FieldRef<"Assignment", 'String'>
    readonly rubric: FieldRef<"Assignment", 'String'>
    readonly questions: FieldRef<"Assignment", 'String'>
    readonly answer_key: FieldRef<"Assignment", 'String'>
    readonly checklist: FieldRef<"Assignment", 'String'>
    readonly participation_criteria: FieldRef<"Assignment", 'String'>
    readonly peer_evaluation: FieldRef<"Assignment", 'String'>
    readonly userId: FieldRef<"Assignment", 'String'>
    readonly createdAt: FieldRef<"Assignment", 'DateTime'>
    readonly updatedAt: FieldRef<"Assignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to delete.
     */
    limit?: number
  }

  /**
   * Assignment findRaw
   */
  export type AssignmentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Assignment aggregateRaw
   */
  export type AssignmentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Assignment.submission
   */
  export type Assignment$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    class: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    class: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    email: number
    class: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    class?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    class?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    class?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    name: string
    email: string
    class: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    class?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    class?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "class" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      class: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * @param {StudentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const student = await prisma.student.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: StudentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Student.
     * @param {StudentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const student = await prisma.student.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: StudentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly class: FieldRef<"Student", 'String'>
    readonly userId: FieldRef<"Student", 'String'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student findRaw
   */
  export type StudentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Student aggregateRaw
   */
  export type StudentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    assignmentId: string | null
    assignmentTitle: string | null
    studentName: string | null
    studentId: string | null
    submissionDate: Date | null
    status: $Enums.SubmissionStatus | null
    content: string | null
    aiCheckerResultsId: string | null
    plagiarismResultsId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    assignmentId: string | null
    assignmentTitle: string | null
    studentName: string | null
    studentId: string | null
    submissionDate: Date | null
    status: $Enums.SubmissionStatus | null
    content: string | null
    aiCheckerResultsId: string | null
    plagiarismResultsId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    assignmentId: number
    assignmentTitle: number
    studentName: number
    studentId: number
    submissionDate: number
    status: number
    content: number
    aiCheckerResultsId: number
    plagiarismResultsId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubmissionMinAggregateInputType = {
    id?: true
    assignmentId?: true
    assignmentTitle?: true
    studentName?: true
    studentId?: true
    submissionDate?: true
    status?: true
    content?: true
    aiCheckerResultsId?: true
    plagiarismResultsId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    assignmentId?: true
    assignmentTitle?: true
    studentName?: true
    studentId?: true
    submissionDate?: true
    status?: true
    content?: true
    aiCheckerResultsId?: true
    plagiarismResultsId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    assignmentId?: true
    assignmentTitle?: true
    studentName?: true
    studentId?: true
    submissionDate?: true
    status?: true
    content?: true
    aiCheckerResultsId?: true
    plagiarismResultsId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    assignmentId: string
    assignmentTitle: string
    studentName: string | null
    studentId: string | null
    submissionDate: Date
    status: $Enums.SubmissionStatus
    content: string
    aiCheckerResultsId: string | null
    plagiarismResultsId: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    assignmentTitle?: boolean
    studentName?: boolean
    studentId?: boolean
    submissionDate?: boolean
    status?: boolean
    content?: boolean
    aiCheckerResultsId?: boolean
    plagiarismResultsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    aiCheckerResults?: boolean | Submission$aiCheckerResultsArgs<ExtArgs>
    plagiarismResults?: boolean | Submission$plagiarismResultsArgs<ExtArgs>
    inlineComments?: boolean | Submission$inlineCommentsArgs<ExtArgs>
    overallFeedback?: boolean | Submission$overallFeedbackArgs<ExtArgs>
    subscores?: boolean | Submission$subscoresArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>



  export type SubmissionSelectScalar = {
    id?: boolean
    assignmentId?: boolean
    assignmentTitle?: boolean
    studentName?: boolean
    studentId?: boolean
    submissionDate?: boolean
    status?: boolean
    content?: boolean
    aiCheckerResultsId?: boolean
    plagiarismResultsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assignmentId" | "assignmentTitle" | "studentName" | "studentId" | "submissionDate" | "status" | "content" | "aiCheckerResultsId" | "plagiarismResultsId" | "createdAt" | "updatedAt", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    aiCheckerResults?: boolean | Submission$aiCheckerResultsArgs<ExtArgs>
    plagiarismResults?: boolean | Submission$plagiarismResultsArgs<ExtArgs>
    inlineComments?: boolean | Submission$inlineCommentsArgs<ExtArgs>
    overallFeedback?: boolean | Submission$overallFeedbackArgs<ExtArgs>
    subscores?: boolean | Submission$subscoresArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      assignment: Prisma.$AssignmentPayload<ExtArgs>
      aiCheckerResults: Prisma.$AICheckerResultsPayload<ExtArgs> | null
      plagiarismResults: Prisma.$PlagiarismResultsPayload<ExtArgs> | null
      inlineComments: Prisma.$InlineCommentPayload<ExtArgs>[]
      overallFeedback: Prisma.$OverallFeedbackPayload<ExtArgs> | null
      subscores: Prisma.$SubscorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assignmentId: string
      assignmentTitle: string
      studentName: string | null
      studentId: string | null
      submissionDate: Date
      status: $Enums.SubmissionStatus
      content: string
      aiCheckerResultsId: string | null
      plagiarismResultsId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * @param {SubmissionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const submission = await prisma.submission.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SubmissionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Submission.
     * @param {SubmissionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const submission = await prisma.submission.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SubmissionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends AssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentDefaultArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    aiCheckerResults<T extends Submission$aiCheckerResultsArgs<ExtArgs> = {}>(args?: Subset<T, Submission$aiCheckerResultsArgs<ExtArgs>>): Prisma__AICheckerResultsClient<$Result.GetResult<Prisma.$AICheckerResultsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    plagiarismResults<T extends Submission$plagiarismResultsArgs<ExtArgs> = {}>(args?: Subset<T, Submission$plagiarismResultsArgs<ExtArgs>>): Prisma__PlagiarismResultsClient<$Result.GetResult<Prisma.$PlagiarismResultsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    inlineComments<T extends Submission$inlineCommentsArgs<ExtArgs> = {}>(args?: Subset<T, Submission$inlineCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InlineCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    overallFeedback<T extends Submission$overallFeedbackArgs<ExtArgs> = {}>(args?: Subset<T, Submission$overallFeedbackArgs<ExtArgs>>): Prisma__OverallFeedbackClient<$Result.GetResult<Prisma.$OverallFeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subscores<T extends Submission$subscoresArgs<ExtArgs> = {}>(args?: Subset<T, Submission$subscoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly assignmentId: FieldRef<"Submission", 'String'>
    readonly assignmentTitle: FieldRef<"Submission", 'String'>
    readonly studentName: FieldRef<"Submission", 'String'>
    readonly studentId: FieldRef<"Submission", 'String'>
    readonly submissionDate: FieldRef<"Submission", 'DateTime'>
    readonly status: FieldRef<"Submission", 'SubmissionStatus'>
    readonly content: FieldRef<"Submission", 'String'>
    readonly aiCheckerResultsId: FieldRef<"Submission", 'String'>
    readonly plagiarismResultsId: FieldRef<"Submission", 'String'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
    readonly updatedAt: FieldRef<"Submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission findRaw
   */
  export type SubmissionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Submission aggregateRaw
   */
  export type SubmissionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Submission.aiCheckerResults
   */
  export type Submission$aiCheckerResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AICheckerResults
     */
    select?: AICheckerResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AICheckerResults
     */
    omit?: AICheckerResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AICheckerResultsInclude<ExtArgs> | null
    where?: AICheckerResultsWhereInput
  }

  /**
   * Submission.plagiarismResults
   */
  export type Submission$plagiarismResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismResults
     */
    select?: PlagiarismResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismResults
     */
    omit?: PlagiarismResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismResultsInclude<ExtArgs> | null
    where?: PlagiarismResultsWhereInput
  }

  /**
   * Submission.inlineComments
   */
  export type Submission$inlineCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InlineComment
     */
    select?: InlineCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InlineComment
     */
    omit?: InlineCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InlineCommentInclude<ExtArgs> | null
    where?: InlineCommentWhereInput
    orderBy?: InlineCommentOrderByWithRelationInput | InlineCommentOrderByWithRelationInput[]
    cursor?: InlineCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InlineCommentScalarFieldEnum | InlineCommentScalarFieldEnum[]
  }

  /**
   * Submission.overallFeedback
   */
  export type Submission$overallFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverallFeedback
     */
    select?: OverallFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverallFeedback
     */
    omit?: OverallFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverallFeedbackInclude<ExtArgs> | null
    where?: OverallFeedbackWhereInput
  }

  /**
   * Submission.subscores
   */
  export type Submission$subscoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscore
     */
    select?: SubscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscore
     */
    omit?: SubscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscoreInclude<ExtArgs> | null
    where?: SubscoreWhereInput
    orderBy?: SubscoreOrderByWithRelationInput | SubscoreOrderByWithRelationInput[]
    cursor?: SubscoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscoreScalarFieldEnum | SubscoreScalarFieldEnum[]
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model AICheckerResults
   */

  export type AggregateAICheckerResults = {
    _count: AICheckerResultsCountAggregateOutputType | null
    _avg: AICheckerResultsAvgAggregateOutputType | null
    _sum: AICheckerResultsSumAggregateOutputType | null
    _min: AICheckerResultsMinAggregateOutputType | null
    _max: AICheckerResultsMaxAggregateOutputType | null
  }

  export type AICheckerResultsAvgAggregateOutputType = {
    score: number | null
  }

  export type AICheckerResultsSumAggregateOutputType = {
    score: number | null
  }

  export type AICheckerResultsMinAggregateOutputType = {
    id: string | null
    score: number | null
    confidence: $Enums.ConfidenceLevel | null
  }

  export type AICheckerResultsMaxAggregateOutputType = {
    id: string | null
    score: number | null
    confidence: $Enums.ConfidenceLevel | null
  }

  export type AICheckerResultsCountAggregateOutputType = {
    id: number
    score: number
    confidence: number
    _all: number
  }


  export type AICheckerResultsAvgAggregateInputType = {
    score?: true
  }

  export type AICheckerResultsSumAggregateInputType = {
    score?: true
  }

  export type AICheckerResultsMinAggregateInputType = {
    id?: true
    score?: true
    confidence?: true
  }

  export type AICheckerResultsMaxAggregateInputType = {
    id?: true
    score?: true
    confidence?: true
  }

  export type AICheckerResultsCountAggregateInputType = {
    id?: true
    score?: true
    confidence?: true
    _all?: true
  }

  export type AICheckerResultsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AICheckerResults to aggregate.
     */
    where?: AICheckerResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AICheckerResults to fetch.
     */
    orderBy?: AICheckerResultsOrderByWithRelationInput | AICheckerResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AICheckerResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AICheckerResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AICheckerResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AICheckerResults
    **/
    _count?: true | AICheckerResultsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AICheckerResultsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AICheckerResultsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AICheckerResultsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AICheckerResultsMaxAggregateInputType
  }

  export type GetAICheckerResultsAggregateType<T extends AICheckerResultsAggregateArgs> = {
        [P in keyof T & keyof AggregateAICheckerResults]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAICheckerResults[P]>
      : GetScalarType<T[P], AggregateAICheckerResults[P]>
  }




  export type AICheckerResultsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AICheckerResultsWhereInput
    orderBy?: AICheckerResultsOrderByWithAggregationInput | AICheckerResultsOrderByWithAggregationInput[]
    by: AICheckerResultsScalarFieldEnum[] | AICheckerResultsScalarFieldEnum
    having?: AICheckerResultsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AICheckerResultsCountAggregateInputType | true
    _avg?: AICheckerResultsAvgAggregateInputType
    _sum?: AICheckerResultsSumAggregateInputType
    _min?: AICheckerResultsMinAggregateInputType
    _max?: AICheckerResultsMaxAggregateInputType
  }

  export type AICheckerResultsGroupByOutputType = {
    id: string
    score: number
    confidence: $Enums.ConfidenceLevel
    _count: AICheckerResultsCountAggregateOutputType | null
    _avg: AICheckerResultsAvgAggregateOutputType | null
    _sum: AICheckerResultsSumAggregateOutputType | null
    _min: AICheckerResultsMinAggregateOutputType | null
    _max: AICheckerResultsMaxAggregateOutputType | null
  }

  type GetAICheckerResultsGroupByPayload<T extends AICheckerResultsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AICheckerResultsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AICheckerResultsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AICheckerResultsGroupByOutputType[P]>
            : GetScalarType<T[P], AICheckerResultsGroupByOutputType[P]>
        }
      >
    >


  export type AICheckerResultsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    confidence?: boolean
    details?: boolean | AICheckerResults$detailsArgs<ExtArgs>
    submission?: boolean | AICheckerResults$submissionArgs<ExtArgs>
    _count?: boolean | AICheckerResultsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aICheckerResults"]>



  export type AICheckerResultsSelectScalar = {
    id?: boolean
    score?: boolean
    confidence?: boolean
  }

  export type AICheckerResultsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "score" | "confidence", ExtArgs["result"]["aICheckerResults"]>
  export type AICheckerResultsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | AICheckerResults$detailsArgs<ExtArgs>
    submission?: boolean | AICheckerResults$submissionArgs<ExtArgs>
    _count?: boolean | AICheckerResultsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AICheckerResultsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AICheckerResults"
    objects: {
      details: Prisma.$AIDetailPayload<ExtArgs>[]
      submission: Prisma.$SubmissionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      score: number
      confidence: $Enums.ConfidenceLevel
    }, ExtArgs["result"]["aICheckerResults"]>
    composites: {}
  }

  type AICheckerResultsGetPayload<S extends boolean | null | undefined | AICheckerResultsDefaultArgs> = $Result.GetResult<Prisma.$AICheckerResultsPayload, S>

  type AICheckerResultsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AICheckerResultsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AICheckerResultsCountAggregateInputType | true
    }

  export interface AICheckerResultsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AICheckerResults'], meta: { name: 'AICheckerResults' } }
    /**
     * Find zero or one AICheckerResults that matches the filter.
     * @param {AICheckerResultsFindUniqueArgs} args - Arguments to find a AICheckerResults
     * @example
     * // Get one AICheckerResults
     * const aICheckerResults = await prisma.aICheckerResults.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AICheckerResultsFindUniqueArgs>(args: SelectSubset<T, AICheckerResultsFindUniqueArgs<ExtArgs>>): Prisma__AICheckerResultsClient<$Result.GetResult<Prisma.$AICheckerResultsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AICheckerResults that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AICheckerResultsFindUniqueOrThrowArgs} args - Arguments to find a AICheckerResults
     * @example
     * // Get one AICheckerResults
     * const aICheckerResults = await prisma.aICheckerResults.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AICheckerResultsFindUniqueOrThrowArgs>(args: SelectSubset<T, AICheckerResultsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AICheckerResultsClient<$Result.GetResult<Prisma.$AICheckerResultsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AICheckerResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AICheckerResultsFindFirstArgs} args - Arguments to find a AICheckerResults
     * @example
     * // Get one AICheckerResults
     * const aICheckerResults = await prisma.aICheckerResults.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AICheckerResultsFindFirstArgs>(args?: SelectSubset<T, AICheckerResultsFindFirstArgs<ExtArgs>>): Prisma__AICheckerResultsClient<$Result.GetResult<Prisma.$AICheckerResultsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AICheckerResults that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AICheckerResultsFindFirstOrThrowArgs} args - Arguments to find a AICheckerResults
     * @example
     * // Get one AICheckerResults
     * const aICheckerResults = await prisma.aICheckerResults.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AICheckerResultsFindFirstOrThrowArgs>(args?: SelectSubset<T, AICheckerResultsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AICheckerResultsClient<$Result.GetResult<Prisma.$AICheckerResultsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AICheckerResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AICheckerResultsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AICheckerResults
     * const aICheckerResults = await prisma.aICheckerResults.findMany()
     * 
     * // Get first 10 AICheckerResults
     * const aICheckerResults = await prisma.aICheckerResults.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aICheckerResultsWithIdOnly = await prisma.aICheckerResults.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AICheckerResultsFindManyArgs>(args?: SelectSubset<T, AICheckerResultsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AICheckerResultsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AICheckerResults.
     * @param {AICheckerResultsCreateArgs} args - Arguments to create a AICheckerResults.
     * @example
     * // Create one AICheckerResults
     * const AICheckerResults = await prisma.aICheckerResults.create({
     *   data: {
     *     // ... data to create a AICheckerResults
     *   }
     * })
     * 
     */
    create<T extends AICheckerResultsCreateArgs>(args: SelectSubset<T, AICheckerResultsCreateArgs<ExtArgs>>): Prisma__AICheckerResultsClient<$Result.GetResult<Prisma.$AICheckerResultsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AICheckerResults.
     * @param {AICheckerResultsCreateManyArgs} args - Arguments to create many AICheckerResults.
     * @example
     * // Create many AICheckerResults
     * const aICheckerResults = await prisma.aICheckerResults.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AICheckerResultsCreateManyArgs>(args?: SelectSubset<T, AICheckerResultsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AICheckerResults.
     * @param {AICheckerResultsDeleteArgs} args - Arguments to delete one AICheckerResults.
     * @example
     * // Delete one AICheckerResults
     * const AICheckerResults = await prisma.aICheckerResults.delete({
     *   where: {
     *     // ... filter to delete one AICheckerResults
     *   }
     * })
     * 
     */
    delete<T extends AICheckerResultsDeleteArgs>(args: SelectSubset<T, AICheckerResultsDeleteArgs<ExtArgs>>): Prisma__AICheckerResultsClient<$Result.GetResult<Prisma.$AICheckerResultsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AICheckerResults.
     * @param {AICheckerResultsUpdateArgs} args - Arguments to update one AICheckerResults.
     * @example
     * // Update one AICheckerResults
     * const aICheckerResults = await prisma.aICheckerResults.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AICheckerResultsUpdateArgs>(args: SelectSubset<T, AICheckerResultsUpdateArgs<ExtArgs>>): Prisma__AICheckerResultsClient<$Result.GetResult<Prisma.$AICheckerResultsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AICheckerResults.
     * @param {AICheckerResultsDeleteManyArgs} args - Arguments to filter AICheckerResults to delete.
     * @example
     * // Delete a few AICheckerResults
     * const { count } = await prisma.aICheckerResults.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AICheckerResultsDeleteManyArgs>(args?: SelectSubset<T, AICheckerResultsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AICheckerResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AICheckerResultsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AICheckerResults
     * const aICheckerResults = await prisma.aICheckerResults.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AICheckerResultsUpdateManyArgs>(args: SelectSubset<T, AICheckerResultsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AICheckerResults.
     * @param {AICheckerResultsUpsertArgs} args - Arguments to update or create a AICheckerResults.
     * @example
     * // Update or create a AICheckerResults
     * const aICheckerResults = await prisma.aICheckerResults.upsert({
     *   create: {
     *     // ... data to create a AICheckerResults
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AICheckerResults we want to update
     *   }
     * })
     */
    upsert<T extends AICheckerResultsUpsertArgs>(args: SelectSubset<T, AICheckerResultsUpsertArgs<ExtArgs>>): Prisma__AICheckerResultsClient<$Result.GetResult<Prisma.$AICheckerResultsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AICheckerResults that matches the filter.
     * @param {AICheckerResultsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const aICheckerResults = await prisma.aICheckerResults.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AICheckerResultsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AICheckerResults.
     * @param {AICheckerResultsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const aICheckerResults = await prisma.aICheckerResults.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AICheckerResultsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AICheckerResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AICheckerResultsCountArgs} args - Arguments to filter AICheckerResults to count.
     * @example
     * // Count the number of AICheckerResults
     * const count = await prisma.aICheckerResults.count({
     *   where: {
     *     // ... the filter for the AICheckerResults we want to count
     *   }
     * })
    **/
    count<T extends AICheckerResultsCountArgs>(
      args?: Subset<T, AICheckerResultsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AICheckerResultsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AICheckerResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AICheckerResultsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AICheckerResultsAggregateArgs>(args: Subset<T, AICheckerResultsAggregateArgs>): Prisma.PrismaPromise<GetAICheckerResultsAggregateType<T>>

    /**
     * Group by AICheckerResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AICheckerResultsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AICheckerResultsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AICheckerResultsGroupByArgs['orderBy'] }
        : { orderBy?: AICheckerResultsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AICheckerResultsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAICheckerResultsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AICheckerResults model
   */
  readonly fields: AICheckerResultsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AICheckerResults.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AICheckerResultsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    details<T extends AICheckerResults$detailsArgs<ExtArgs> = {}>(args?: Subset<T, AICheckerResults$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submission<T extends AICheckerResults$submissionArgs<ExtArgs> = {}>(args?: Subset<T, AICheckerResults$submissionArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AICheckerResults model
   */
  interface AICheckerResultsFieldRefs {
    readonly id: FieldRef<"AICheckerResults", 'String'>
    readonly score: FieldRef<"AICheckerResults", 'Int'>
    readonly confidence: FieldRef<"AICheckerResults", 'ConfidenceLevel'>
  }
    

  // Custom InputTypes
  /**
   * AICheckerResults findUnique
   */
  export type AICheckerResultsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AICheckerResults
     */
    select?: AICheckerResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AICheckerResults
     */
    omit?: AICheckerResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AICheckerResultsInclude<ExtArgs> | null
    /**
     * Filter, which AICheckerResults to fetch.
     */
    where: AICheckerResultsWhereUniqueInput
  }

  /**
   * AICheckerResults findUniqueOrThrow
   */
  export type AICheckerResultsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AICheckerResults
     */
    select?: AICheckerResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AICheckerResults
     */
    omit?: AICheckerResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AICheckerResultsInclude<ExtArgs> | null
    /**
     * Filter, which AICheckerResults to fetch.
     */
    where: AICheckerResultsWhereUniqueInput
  }

  /**
   * AICheckerResults findFirst
   */
  export type AICheckerResultsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AICheckerResults
     */
    select?: AICheckerResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AICheckerResults
     */
    omit?: AICheckerResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AICheckerResultsInclude<ExtArgs> | null
    /**
     * Filter, which AICheckerResults to fetch.
     */
    where?: AICheckerResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AICheckerResults to fetch.
     */
    orderBy?: AICheckerResultsOrderByWithRelationInput | AICheckerResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AICheckerResults.
     */
    cursor?: AICheckerResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AICheckerResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AICheckerResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AICheckerResults.
     */
    distinct?: AICheckerResultsScalarFieldEnum | AICheckerResultsScalarFieldEnum[]
  }

  /**
   * AICheckerResults findFirstOrThrow
   */
  export type AICheckerResultsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AICheckerResults
     */
    select?: AICheckerResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AICheckerResults
     */
    omit?: AICheckerResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AICheckerResultsInclude<ExtArgs> | null
    /**
     * Filter, which AICheckerResults to fetch.
     */
    where?: AICheckerResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AICheckerResults to fetch.
     */
    orderBy?: AICheckerResultsOrderByWithRelationInput | AICheckerResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AICheckerResults.
     */
    cursor?: AICheckerResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AICheckerResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AICheckerResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AICheckerResults.
     */
    distinct?: AICheckerResultsScalarFieldEnum | AICheckerResultsScalarFieldEnum[]
  }

  /**
   * AICheckerResults findMany
   */
  export type AICheckerResultsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AICheckerResults
     */
    select?: AICheckerResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AICheckerResults
     */
    omit?: AICheckerResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AICheckerResultsInclude<ExtArgs> | null
    /**
     * Filter, which AICheckerResults to fetch.
     */
    where?: AICheckerResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AICheckerResults to fetch.
     */
    orderBy?: AICheckerResultsOrderByWithRelationInput | AICheckerResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AICheckerResults.
     */
    cursor?: AICheckerResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AICheckerResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AICheckerResults.
     */
    skip?: number
    distinct?: AICheckerResultsScalarFieldEnum | AICheckerResultsScalarFieldEnum[]
  }

  /**
   * AICheckerResults create
   */
  export type AICheckerResultsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AICheckerResults
     */
    select?: AICheckerResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AICheckerResults
     */
    omit?: AICheckerResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AICheckerResultsInclude<ExtArgs> | null
    /**
     * The data needed to create a AICheckerResults.
     */
    data: XOR<AICheckerResultsCreateInput, AICheckerResultsUncheckedCreateInput>
  }

  /**
   * AICheckerResults createMany
   */
  export type AICheckerResultsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AICheckerResults.
     */
    data: AICheckerResultsCreateManyInput | AICheckerResultsCreateManyInput[]
  }

  /**
   * AICheckerResults update
   */
  export type AICheckerResultsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AICheckerResults
     */
    select?: AICheckerResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AICheckerResults
     */
    omit?: AICheckerResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AICheckerResultsInclude<ExtArgs> | null
    /**
     * The data needed to update a AICheckerResults.
     */
    data: XOR<AICheckerResultsUpdateInput, AICheckerResultsUncheckedUpdateInput>
    /**
     * Choose, which AICheckerResults to update.
     */
    where: AICheckerResultsWhereUniqueInput
  }

  /**
   * AICheckerResults updateMany
   */
  export type AICheckerResultsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AICheckerResults.
     */
    data: XOR<AICheckerResultsUpdateManyMutationInput, AICheckerResultsUncheckedUpdateManyInput>
    /**
     * Filter which AICheckerResults to update
     */
    where?: AICheckerResultsWhereInput
    /**
     * Limit how many AICheckerResults to update.
     */
    limit?: number
  }

  /**
   * AICheckerResults upsert
   */
  export type AICheckerResultsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AICheckerResults
     */
    select?: AICheckerResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AICheckerResults
     */
    omit?: AICheckerResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AICheckerResultsInclude<ExtArgs> | null
    /**
     * The filter to search for the AICheckerResults to update in case it exists.
     */
    where: AICheckerResultsWhereUniqueInput
    /**
     * In case the AICheckerResults found by the `where` argument doesn't exist, create a new AICheckerResults with this data.
     */
    create: XOR<AICheckerResultsCreateInput, AICheckerResultsUncheckedCreateInput>
    /**
     * In case the AICheckerResults was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AICheckerResultsUpdateInput, AICheckerResultsUncheckedUpdateInput>
  }

  /**
   * AICheckerResults delete
   */
  export type AICheckerResultsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AICheckerResults
     */
    select?: AICheckerResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AICheckerResults
     */
    omit?: AICheckerResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AICheckerResultsInclude<ExtArgs> | null
    /**
     * Filter which AICheckerResults to delete.
     */
    where: AICheckerResultsWhereUniqueInput
  }

  /**
   * AICheckerResults deleteMany
   */
  export type AICheckerResultsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AICheckerResults to delete
     */
    where?: AICheckerResultsWhereInput
    /**
     * Limit how many AICheckerResults to delete.
     */
    limit?: number
  }

  /**
   * AICheckerResults findRaw
   */
  export type AICheckerResultsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AICheckerResults aggregateRaw
   */
  export type AICheckerResultsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AICheckerResults.details
   */
  export type AICheckerResults$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIDetail
     */
    select?: AIDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIDetail
     */
    omit?: AIDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIDetailInclude<ExtArgs> | null
    where?: AIDetailWhereInput
    orderBy?: AIDetailOrderByWithRelationInput | AIDetailOrderByWithRelationInput[]
    cursor?: AIDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIDetailScalarFieldEnum | AIDetailScalarFieldEnum[]
  }

  /**
   * AICheckerResults.submission
   */
  export type AICheckerResults$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
  }

  /**
   * AICheckerResults without action
   */
  export type AICheckerResultsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AICheckerResults
     */
    select?: AICheckerResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AICheckerResults
     */
    omit?: AICheckerResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AICheckerResultsInclude<ExtArgs> | null
  }


  /**
   * Model AIDetail
   */

  export type AggregateAIDetail = {
    _count: AIDetailCountAggregateOutputType | null
    _avg: AIDetailAvgAggregateOutputType | null
    _sum: AIDetailSumAggregateOutputType | null
    _min: AIDetailMinAggregateOutputType | null
    _max: AIDetailMaxAggregateOutputType | null
  }

  export type AIDetailAvgAggregateOutputType = {
    aiProbability: number | null
    humanProbability: number | null
  }

  export type AIDetailSumAggregateOutputType = {
    aiProbability: number | null
    humanProbability: number | null
  }

  export type AIDetailMinAggregateOutputType = {
    id: string | null
    section: string | null
    aiProbability: number | null
    humanProbability: number | null
    aiCheckerResultsId: string | null
  }

  export type AIDetailMaxAggregateOutputType = {
    id: string | null
    section: string | null
    aiProbability: number | null
    humanProbability: number | null
    aiCheckerResultsId: string | null
  }

  export type AIDetailCountAggregateOutputType = {
    id: number
    section: number
    aiProbability: number
    humanProbability: number
    aiCheckerResultsId: number
    _all: number
  }


  export type AIDetailAvgAggregateInputType = {
    aiProbability?: true
    humanProbability?: true
  }

  export type AIDetailSumAggregateInputType = {
    aiProbability?: true
    humanProbability?: true
  }

  export type AIDetailMinAggregateInputType = {
    id?: true
    section?: true
    aiProbability?: true
    humanProbability?: true
    aiCheckerResultsId?: true
  }

  export type AIDetailMaxAggregateInputType = {
    id?: true
    section?: true
    aiProbability?: true
    humanProbability?: true
    aiCheckerResultsId?: true
  }

  export type AIDetailCountAggregateInputType = {
    id?: true
    section?: true
    aiProbability?: true
    humanProbability?: true
    aiCheckerResultsId?: true
    _all?: true
  }

  export type AIDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIDetail to aggregate.
     */
    where?: AIDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIDetails to fetch.
     */
    orderBy?: AIDetailOrderByWithRelationInput | AIDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIDetails
    **/
    _count?: true | AIDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AIDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AIDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIDetailMaxAggregateInputType
  }

  export type GetAIDetailAggregateType<T extends AIDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateAIDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIDetail[P]>
      : GetScalarType<T[P], AggregateAIDetail[P]>
  }




  export type AIDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIDetailWhereInput
    orderBy?: AIDetailOrderByWithAggregationInput | AIDetailOrderByWithAggregationInput[]
    by: AIDetailScalarFieldEnum[] | AIDetailScalarFieldEnum
    having?: AIDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIDetailCountAggregateInputType | true
    _avg?: AIDetailAvgAggregateInputType
    _sum?: AIDetailSumAggregateInputType
    _min?: AIDetailMinAggregateInputType
    _max?: AIDetailMaxAggregateInputType
  }

  export type AIDetailGroupByOutputType = {
    id: string
    section: string
    aiProbability: number
    humanProbability: number
    aiCheckerResultsId: string
    _count: AIDetailCountAggregateOutputType | null
    _avg: AIDetailAvgAggregateOutputType | null
    _sum: AIDetailSumAggregateOutputType | null
    _min: AIDetailMinAggregateOutputType | null
    _max: AIDetailMaxAggregateOutputType | null
  }

  type GetAIDetailGroupByPayload<T extends AIDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIDetailGroupByOutputType[P]>
            : GetScalarType<T[P], AIDetailGroupByOutputType[P]>
        }
      >
    >


  export type AIDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    section?: boolean
    aiProbability?: boolean
    humanProbability?: boolean
    aiCheckerResultsId?: boolean
    aiCheckerResults?: boolean | AICheckerResultsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIDetail"]>



  export type AIDetailSelectScalar = {
    id?: boolean
    section?: boolean
    aiProbability?: boolean
    humanProbability?: boolean
    aiCheckerResultsId?: boolean
  }

  export type AIDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "section" | "aiProbability" | "humanProbability" | "aiCheckerResultsId", ExtArgs["result"]["aIDetail"]>
  export type AIDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiCheckerResults?: boolean | AICheckerResultsDefaultArgs<ExtArgs>
  }

  export type $AIDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIDetail"
    objects: {
      aiCheckerResults: Prisma.$AICheckerResultsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      section: string
      aiProbability: number
      humanProbability: number
      aiCheckerResultsId: string
    }, ExtArgs["result"]["aIDetail"]>
    composites: {}
  }

  type AIDetailGetPayload<S extends boolean | null | undefined | AIDetailDefaultArgs> = $Result.GetResult<Prisma.$AIDetailPayload, S>

  type AIDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIDetailCountAggregateInputType | true
    }

  export interface AIDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIDetail'], meta: { name: 'AIDetail' } }
    /**
     * Find zero or one AIDetail that matches the filter.
     * @param {AIDetailFindUniqueArgs} args - Arguments to find a AIDetail
     * @example
     * // Get one AIDetail
     * const aIDetail = await prisma.aIDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIDetailFindUniqueArgs>(args: SelectSubset<T, AIDetailFindUniqueArgs<ExtArgs>>): Prisma__AIDetailClient<$Result.GetResult<Prisma.$AIDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIDetailFindUniqueOrThrowArgs} args - Arguments to find a AIDetail
     * @example
     * // Get one AIDetail
     * const aIDetail = await prisma.aIDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, AIDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIDetailClient<$Result.GetResult<Prisma.$AIDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIDetailFindFirstArgs} args - Arguments to find a AIDetail
     * @example
     * // Get one AIDetail
     * const aIDetail = await prisma.aIDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIDetailFindFirstArgs>(args?: SelectSubset<T, AIDetailFindFirstArgs<ExtArgs>>): Prisma__AIDetailClient<$Result.GetResult<Prisma.$AIDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIDetailFindFirstOrThrowArgs} args - Arguments to find a AIDetail
     * @example
     * // Get one AIDetail
     * const aIDetail = await prisma.aIDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, AIDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIDetailClient<$Result.GetResult<Prisma.$AIDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIDetails
     * const aIDetails = await prisma.aIDetail.findMany()
     * 
     * // Get first 10 AIDetails
     * const aIDetails = await prisma.aIDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIDetailWithIdOnly = await prisma.aIDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIDetailFindManyArgs>(args?: SelectSubset<T, AIDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIDetail.
     * @param {AIDetailCreateArgs} args - Arguments to create a AIDetail.
     * @example
     * // Create one AIDetail
     * const AIDetail = await prisma.aIDetail.create({
     *   data: {
     *     // ... data to create a AIDetail
     *   }
     * })
     * 
     */
    create<T extends AIDetailCreateArgs>(args: SelectSubset<T, AIDetailCreateArgs<ExtArgs>>): Prisma__AIDetailClient<$Result.GetResult<Prisma.$AIDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIDetails.
     * @param {AIDetailCreateManyArgs} args - Arguments to create many AIDetails.
     * @example
     * // Create many AIDetails
     * const aIDetail = await prisma.aIDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIDetailCreateManyArgs>(args?: SelectSubset<T, AIDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AIDetail.
     * @param {AIDetailDeleteArgs} args - Arguments to delete one AIDetail.
     * @example
     * // Delete one AIDetail
     * const AIDetail = await prisma.aIDetail.delete({
     *   where: {
     *     // ... filter to delete one AIDetail
     *   }
     * })
     * 
     */
    delete<T extends AIDetailDeleteArgs>(args: SelectSubset<T, AIDetailDeleteArgs<ExtArgs>>): Prisma__AIDetailClient<$Result.GetResult<Prisma.$AIDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIDetail.
     * @param {AIDetailUpdateArgs} args - Arguments to update one AIDetail.
     * @example
     * // Update one AIDetail
     * const aIDetail = await prisma.aIDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIDetailUpdateArgs>(args: SelectSubset<T, AIDetailUpdateArgs<ExtArgs>>): Prisma__AIDetailClient<$Result.GetResult<Prisma.$AIDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIDetails.
     * @param {AIDetailDeleteManyArgs} args - Arguments to filter AIDetails to delete.
     * @example
     * // Delete a few AIDetails
     * const { count } = await prisma.aIDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIDetailDeleteManyArgs>(args?: SelectSubset<T, AIDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIDetails
     * const aIDetail = await prisma.aIDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIDetailUpdateManyArgs>(args: SelectSubset<T, AIDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AIDetail.
     * @param {AIDetailUpsertArgs} args - Arguments to update or create a AIDetail.
     * @example
     * // Update or create a AIDetail
     * const aIDetail = await prisma.aIDetail.upsert({
     *   create: {
     *     // ... data to create a AIDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIDetail we want to update
     *   }
     * })
     */
    upsert<T extends AIDetailUpsertArgs>(args: SelectSubset<T, AIDetailUpsertArgs<ExtArgs>>): Prisma__AIDetailClient<$Result.GetResult<Prisma.$AIDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIDetails that matches the filter.
     * @param {AIDetailFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const aIDetail = await prisma.aIDetail.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AIDetailFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AIDetail.
     * @param {AIDetailAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const aIDetail = await prisma.aIDetail.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AIDetailAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AIDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIDetailCountArgs} args - Arguments to filter AIDetails to count.
     * @example
     * // Count the number of AIDetails
     * const count = await prisma.aIDetail.count({
     *   where: {
     *     // ... the filter for the AIDetails we want to count
     *   }
     * })
    **/
    count<T extends AIDetailCountArgs>(
      args?: Subset<T, AIDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AIDetailAggregateArgs>(args: Subset<T, AIDetailAggregateArgs>): Prisma.PrismaPromise<GetAIDetailAggregateType<T>>

    /**
     * Group by AIDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AIDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIDetailGroupByArgs['orderBy'] }
        : { orderBy?: AIDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AIDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIDetail model
   */
  readonly fields: AIDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aiCheckerResults<T extends AICheckerResultsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AICheckerResultsDefaultArgs<ExtArgs>>): Prisma__AICheckerResultsClient<$Result.GetResult<Prisma.$AICheckerResultsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AIDetail model
   */
  interface AIDetailFieldRefs {
    readonly id: FieldRef<"AIDetail", 'String'>
    readonly section: FieldRef<"AIDetail", 'String'>
    readonly aiProbability: FieldRef<"AIDetail", 'Float'>
    readonly humanProbability: FieldRef<"AIDetail", 'Float'>
    readonly aiCheckerResultsId: FieldRef<"AIDetail", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AIDetail findUnique
   */
  export type AIDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIDetail
     */
    select?: AIDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIDetail
     */
    omit?: AIDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIDetailInclude<ExtArgs> | null
    /**
     * Filter, which AIDetail to fetch.
     */
    where: AIDetailWhereUniqueInput
  }

  /**
   * AIDetail findUniqueOrThrow
   */
  export type AIDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIDetail
     */
    select?: AIDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIDetail
     */
    omit?: AIDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIDetailInclude<ExtArgs> | null
    /**
     * Filter, which AIDetail to fetch.
     */
    where: AIDetailWhereUniqueInput
  }

  /**
   * AIDetail findFirst
   */
  export type AIDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIDetail
     */
    select?: AIDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIDetail
     */
    omit?: AIDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIDetailInclude<ExtArgs> | null
    /**
     * Filter, which AIDetail to fetch.
     */
    where?: AIDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIDetails to fetch.
     */
    orderBy?: AIDetailOrderByWithRelationInput | AIDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIDetails.
     */
    cursor?: AIDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIDetails.
     */
    distinct?: AIDetailScalarFieldEnum | AIDetailScalarFieldEnum[]
  }

  /**
   * AIDetail findFirstOrThrow
   */
  export type AIDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIDetail
     */
    select?: AIDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIDetail
     */
    omit?: AIDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIDetailInclude<ExtArgs> | null
    /**
     * Filter, which AIDetail to fetch.
     */
    where?: AIDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIDetails to fetch.
     */
    orderBy?: AIDetailOrderByWithRelationInput | AIDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIDetails.
     */
    cursor?: AIDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIDetails.
     */
    distinct?: AIDetailScalarFieldEnum | AIDetailScalarFieldEnum[]
  }

  /**
   * AIDetail findMany
   */
  export type AIDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIDetail
     */
    select?: AIDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIDetail
     */
    omit?: AIDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIDetailInclude<ExtArgs> | null
    /**
     * Filter, which AIDetails to fetch.
     */
    where?: AIDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIDetails to fetch.
     */
    orderBy?: AIDetailOrderByWithRelationInput | AIDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIDetails.
     */
    cursor?: AIDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIDetails.
     */
    skip?: number
    distinct?: AIDetailScalarFieldEnum | AIDetailScalarFieldEnum[]
  }

  /**
   * AIDetail create
   */
  export type AIDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIDetail
     */
    select?: AIDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIDetail
     */
    omit?: AIDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a AIDetail.
     */
    data: XOR<AIDetailCreateInput, AIDetailUncheckedCreateInput>
  }

  /**
   * AIDetail createMany
   */
  export type AIDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIDetails.
     */
    data: AIDetailCreateManyInput | AIDetailCreateManyInput[]
  }

  /**
   * AIDetail update
   */
  export type AIDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIDetail
     */
    select?: AIDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIDetail
     */
    omit?: AIDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a AIDetail.
     */
    data: XOR<AIDetailUpdateInput, AIDetailUncheckedUpdateInput>
    /**
     * Choose, which AIDetail to update.
     */
    where: AIDetailWhereUniqueInput
  }

  /**
   * AIDetail updateMany
   */
  export type AIDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIDetails.
     */
    data: XOR<AIDetailUpdateManyMutationInput, AIDetailUncheckedUpdateManyInput>
    /**
     * Filter which AIDetails to update
     */
    where?: AIDetailWhereInput
    /**
     * Limit how many AIDetails to update.
     */
    limit?: number
  }

  /**
   * AIDetail upsert
   */
  export type AIDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIDetail
     */
    select?: AIDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIDetail
     */
    omit?: AIDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the AIDetail to update in case it exists.
     */
    where: AIDetailWhereUniqueInput
    /**
     * In case the AIDetail found by the `where` argument doesn't exist, create a new AIDetail with this data.
     */
    create: XOR<AIDetailCreateInput, AIDetailUncheckedCreateInput>
    /**
     * In case the AIDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIDetailUpdateInput, AIDetailUncheckedUpdateInput>
  }

  /**
   * AIDetail delete
   */
  export type AIDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIDetail
     */
    select?: AIDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIDetail
     */
    omit?: AIDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIDetailInclude<ExtArgs> | null
    /**
     * Filter which AIDetail to delete.
     */
    where: AIDetailWhereUniqueInput
  }

  /**
   * AIDetail deleteMany
   */
  export type AIDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIDetails to delete
     */
    where?: AIDetailWhereInput
    /**
     * Limit how many AIDetails to delete.
     */
    limit?: number
  }

  /**
   * AIDetail findRaw
   */
  export type AIDetailFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AIDetail aggregateRaw
   */
  export type AIDetailAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AIDetail without action
   */
  export type AIDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIDetail
     */
    select?: AIDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIDetail
     */
    omit?: AIDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIDetailInclude<ExtArgs> | null
  }


  /**
   * Model PlagiarismResults
   */

  export type AggregatePlagiarismResults = {
    _count: PlagiarismResultsCountAggregateOutputType | null
    _avg: PlagiarismResultsAvgAggregateOutputType | null
    _sum: PlagiarismResultsSumAggregateOutputType | null
    _min: PlagiarismResultsMinAggregateOutputType | null
    _max: PlagiarismResultsMaxAggregateOutputType | null
  }

  export type PlagiarismResultsAvgAggregateOutputType = {
    score: number | null
  }

  export type PlagiarismResultsSumAggregateOutputType = {
    score: number | null
  }

  export type PlagiarismResultsMinAggregateOutputType = {
    id: string | null
    score: number | null
  }

  export type PlagiarismResultsMaxAggregateOutputType = {
    id: string | null
    score: number | null
  }

  export type PlagiarismResultsCountAggregateOutputType = {
    id: number
    score: number
    _all: number
  }


  export type PlagiarismResultsAvgAggregateInputType = {
    score?: true
  }

  export type PlagiarismResultsSumAggregateInputType = {
    score?: true
  }

  export type PlagiarismResultsMinAggregateInputType = {
    id?: true
    score?: true
  }

  export type PlagiarismResultsMaxAggregateInputType = {
    id?: true
    score?: true
  }

  export type PlagiarismResultsCountAggregateInputType = {
    id?: true
    score?: true
    _all?: true
  }

  export type PlagiarismResultsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlagiarismResults to aggregate.
     */
    where?: PlagiarismResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlagiarismResults to fetch.
     */
    orderBy?: PlagiarismResultsOrderByWithRelationInput | PlagiarismResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlagiarismResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlagiarismResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlagiarismResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlagiarismResults
    **/
    _count?: true | PlagiarismResultsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlagiarismResultsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlagiarismResultsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlagiarismResultsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlagiarismResultsMaxAggregateInputType
  }

  export type GetPlagiarismResultsAggregateType<T extends PlagiarismResultsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlagiarismResults]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlagiarismResults[P]>
      : GetScalarType<T[P], AggregatePlagiarismResults[P]>
  }




  export type PlagiarismResultsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlagiarismResultsWhereInput
    orderBy?: PlagiarismResultsOrderByWithAggregationInput | PlagiarismResultsOrderByWithAggregationInput[]
    by: PlagiarismResultsScalarFieldEnum[] | PlagiarismResultsScalarFieldEnum
    having?: PlagiarismResultsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlagiarismResultsCountAggregateInputType | true
    _avg?: PlagiarismResultsAvgAggregateInputType
    _sum?: PlagiarismResultsSumAggregateInputType
    _min?: PlagiarismResultsMinAggregateInputType
    _max?: PlagiarismResultsMaxAggregateInputType
  }

  export type PlagiarismResultsGroupByOutputType = {
    id: string
    score: number
    _count: PlagiarismResultsCountAggregateOutputType | null
    _avg: PlagiarismResultsAvgAggregateOutputType | null
    _sum: PlagiarismResultsSumAggregateOutputType | null
    _min: PlagiarismResultsMinAggregateOutputType | null
    _max: PlagiarismResultsMaxAggregateOutputType | null
  }

  type GetPlagiarismResultsGroupByPayload<T extends PlagiarismResultsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlagiarismResultsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlagiarismResultsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlagiarismResultsGroupByOutputType[P]>
            : GetScalarType<T[P], PlagiarismResultsGroupByOutputType[P]>
        }
      >
    >


  export type PlagiarismResultsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    matches?: boolean | PlagiarismResults$matchesArgs<ExtArgs>
    submission?: boolean | PlagiarismResults$submissionArgs<ExtArgs>
    _count?: boolean | PlagiarismResultsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plagiarismResults"]>



  export type PlagiarismResultsSelectScalar = {
    id?: boolean
    score?: boolean
  }

  export type PlagiarismResultsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "score", ExtArgs["result"]["plagiarismResults"]>
  export type PlagiarismResultsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | PlagiarismResults$matchesArgs<ExtArgs>
    submission?: boolean | PlagiarismResults$submissionArgs<ExtArgs>
    _count?: boolean | PlagiarismResultsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PlagiarismResultsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlagiarismResults"
    objects: {
      matches: Prisma.$PlagiarismMatchPayload<ExtArgs>[]
      submission: Prisma.$SubmissionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      score: number
    }, ExtArgs["result"]["plagiarismResults"]>
    composites: {}
  }

  type PlagiarismResultsGetPayload<S extends boolean | null | undefined | PlagiarismResultsDefaultArgs> = $Result.GetResult<Prisma.$PlagiarismResultsPayload, S>

  type PlagiarismResultsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlagiarismResultsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlagiarismResultsCountAggregateInputType | true
    }

  export interface PlagiarismResultsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlagiarismResults'], meta: { name: 'PlagiarismResults' } }
    /**
     * Find zero or one PlagiarismResults that matches the filter.
     * @param {PlagiarismResultsFindUniqueArgs} args - Arguments to find a PlagiarismResults
     * @example
     * // Get one PlagiarismResults
     * const plagiarismResults = await prisma.plagiarismResults.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlagiarismResultsFindUniqueArgs>(args: SelectSubset<T, PlagiarismResultsFindUniqueArgs<ExtArgs>>): Prisma__PlagiarismResultsClient<$Result.GetResult<Prisma.$PlagiarismResultsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlagiarismResults that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlagiarismResultsFindUniqueOrThrowArgs} args - Arguments to find a PlagiarismResults
     * @example
     * // Get one PlagiarismResults
     * const plagiarismResults = await prisma.plagiarismResults.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlagiarismResultsFindUniqueOrThrowArgs>(args: SelectSubset<T, PlagiarismResultsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlagiarismResultsClient<$Result.GetResult<Prisma.$PlagiarismResultsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlagiarismResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagiarismResultsFindFirstArgs} args - Arguments to find a PlagiarismResults
     * @example
     * // Get one PlagiarismResults
     * const plagiarismResults = await prisma.plagiarismResults.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlagiarismResultsFindFirstArgs>(args?: SelectSubset<T, PlagiarismResultsFindFirstArgs<ExtArgs>>): Prisma__PlagiarismResultsClient<$Result.GetResult<Prisma.$PlagiarismResultsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlagiarismResults that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagiarismResultsFindFirstOrThrowArgs} args - Arguments to find a PlagiarismResults
     * @example
     * // Get one PlagiarismResults
     * const plagiarismResults = await prisma.plagiarismResults.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlagiarismResultsFindFirstOrThrowArgs>(args?: SelectSubset<T, PlagiarismResultsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlagiarismResultsClient<$Result.GetResult<Prisma.$PlagiarismResultsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlagiarismResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagiarismResultsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlagiarismResults
     * const plagiarismResults = await prisma.plagiarismResults.findMany()
     * 
     * // Get first 10 PlagiarismResults
     * const plagiarismResults = await prisma.plagiarismResults.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plagiarismResultsWithIdOnly = await prisma.plagiarismResults.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlagiarismResultsFindManyArgs>(args?: SelectSubset<T, PlagiarismResultsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlagiarismResultsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlagiarismResults.
     * @param {PlagiarismResultsCreateArgs} args - Arguments to create a PlagiarismResults.
     * @example
     * // Create one PlagiarismResults
     * const PlagiarismResults = await prisma.plagiarismResults.create({
     *   data: {
     *     // ... data to create a PlagiarismResults
     *   }
     * })
     * 
     */
    create<T extends PlagiarismResultsCreateArgs>(args: SelectSubset<T, PlagiarismResultsCreateArgs<ExtArgs>>): Prisma__PlagiarismResultsClient<$Result.GetResult<Prisma.$PlagiarismResultsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlagiarismResults.
     * @param {PlagiarismResultsCreateManyArgs} args - Arguments to create many PlagiarismResults.
     * @example
     * // Create many PlagiarismResults
     * const plagiarismResults = await prisma.plagiarismResults.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlagiarismResultsCreateManyArgs>(args?: SelectSubset<T, PlagiarismResultsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlagiarismResults.
     * @param {PlagiarismResultsDeleteArgs} args - Arguments to delete one PlagiarismResults.
     * @example
     * // Delete one PlagiarismResults
     * const PlagiarismResults = await prisma.plagiarismResults.delete({
     *   where: {
     *     // ... filter to delete one PlagiarismResults
     *   }
     * })
     * 
     */
    delete<T extends PlagiarismResultsDeleteArgs>(args: SelectSubset<T, PlagiarismResultsDeleteArgs<ExtArgs>>): Prisma__PlagiarismResultsClient<$Result.GetResult<Prisma.$PlagiarismResultsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlagiarismResults.
     * @param {PlagiarismResultsUpdateArgs} args - Arguments to update one PlagiarismResults.
     * @example
     * // Update one PlagiarismResults
     * const plagiarismResults = await prisma.plagiarismResults.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlagiarismResultsUpdateArgs>(args: SelectSubset<T, PlagiarismResultsUpdateArgs<ExtArgs>>): Prisma__PlagiarismResultsClient<$Result.GetResult<Prisma.$PlagiarismResultsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlagiarismResults.
     * @param {PlagiarismResultsDeleteManyArgs} args - Arguments to filter PlagiarismResults to delete.
     * @example
     * // Delete a few PlagiarismResults
     * const { count } = await prisma.plagiarismResults.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlagiarismResultsDeleteManyArgs>(args?: SelectSubset<T, PlagiarismResultsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlagiarismResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagiarismResultsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlagiarismResults
     * const plagiarismResults = await prisma.plagiarismResults.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlagiarismResultsUpdateManyArgs>(args: SelectSubset<T, PlagiarismResultsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlagiarismResults.
     * @param {PlagiarismResultsUpsertArgs} args - Arguments to update or create a PlagiarismResults.
     * @example
     * // Update or create a PlagiarismResults
     * const plagiarismResults = await prisma.plagiarismResults.upsert({
     *   create: {
     *     // ... data to create a PlagiarismResults
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlagiarismResults we want to update
     *   }
     * })
     */
    upsert<T extends PlagiarismResultsUpsertArgs>(args: SelectSubset<T, PlagiarismResultsUpsertArgs<ExtArgs>>): Prisma__PlagiarismResultsClient<$Result.GetResult<Prisma.$PlagiarismResultsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlagiarismResults that matches the filter.
     * @param {PlagiarismResultsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const plagiarismResults = await prisma.plagiarismResults.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PlagiarismResultsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PlagiarismResults.
     * @param {PlagiarismResultsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const plagiarismResults = await prisma.plagiarismResults.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PlagiarismResultsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PlagiarismResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagiarismResultsCountArgs} args - Arguments to filter PlagiarismResults to count.
     * @example
     * // Count the number of PlagiarismResults
     * const count = await prisma.plagiarismResults.count({
     *   where: {
     *     // ... the filter for the PlagiarismResults we want to count
     *   }
     * })
    **/
    count<T extends PlagiarismResultsCountArgs>(
      args?: Subset<T, PlagiarismResultsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlagiarismResultsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlagiarismResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagiarismResultsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlagiarismResultsAggregateArgs>(args: Subset<T, PlagiarismResultsAggregateArgs>): Prisma.PrismaPromise<GetPlagiarismResultsAggregateType<T>>

    /**
     * Group by PlagiarismResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagiarismResultsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlagiarismResultsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlagiarismResultsGroupByArgs['orderBy'] }
        : { orderBy?: PlagiarismResultsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlagiarismResultsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlagiarismResultsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlagiarismResults model
   */
  readonly fields: PlagiarismResultsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlagiarismResults.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlagiarismResultsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matches<T extends PlagiarismResults$matchesArgs<ExtArgs> = {}>(args?: Subset<T, PlagiarismResults$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlagiarismMatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submission<T extends PlagiarismResults$submissionArgs<ExtArgs> = {}>(args?: Subset<T, PlagiarismResults$submissionArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlagiarismResults model
   */
  interface PlagiarismResultsFieldRefs {
    readonly id: FieldRef<"PlagiarismResults", 'String'>
    readonly score: FieldRef<"PlagiarismResults", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlagiarismResults findUnique
   */
  export type PlagiarismResultsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismResults
     */
    select?: PlagiarismResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismResults
     */
    omit?: PlagiarismResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismResultsInclude<ExtArgs> | null
    /**
     * Filter, which PlagiarismResults to fetch.
     */
    where: PlagiarismResultsWhereUniqueInput
  }

  /**
   * PlagiarismResults findUniqueOrThrow
   */
  export type PlagiarismResultsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismResults
     */
    select?: PlagiarismResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismResults
     */
    omit?: PlagiarismResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismResultsInclude<ExtArgs> | null
    /**
     * Filter, which PlagiarismResults to fetch.
     */
    where: PlagiarismResultsWhereUniqueInput
  }

  /**
   * PlagiarismResults findFirst
   */
  export type PlagiarismResultsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismResults
     */
    select?: PlagiarismResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismResults
     */
    omit?: PlagiarismResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismResultsInclude<ExtArgs> | null
    /**
     * Filter, which PlagiarismResults to fetch.
     */
    where?: PlagiarismResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlagiarismResults to fetch.
     */
    orderBy?: PlagiarismResultsOrderByWithRelationInput | PlagiarismResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlagiarismResults.
     */
    cursor?: PlagiarismResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlagiarismResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlagiarismResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlagiarismResults.
     */
    distinct?: PlagiarismResultsScalarFieldEnum | PlagiarismResultsScalarFieldEnum[]
  }

  /**
   * PlagiarismResults findFirstOrThrow
   */
  export type PlagiarismResultsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismResults
     */
    select?: PlagiarismResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismResults
     */
    omit?: PlagiarismResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismResultsInclude<ExtArgs> | null
    /**
     * Filter, which PlagiarismResults to fetch.
     */
    where?: PlagiarismResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlagiarismResults to fetch.
     */
    orderBy?: PlagiarismResultsOrderByWithRelationInput | PlagiarismResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlagiarismResults.
     */
    cursor?: PlagiarismResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlagiarismResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlagiarismResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlagiarismResults.
     */
    distinct?: PlagiarismResultsScalarFieldEnum | PlagiarismResultsScalarFieldEnum[]
  }

  /**
   * PlagiarismResults findMany
   */
  export type PlagiarismResultsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismResults
     */
    select?: PlagiarismResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismResults
     */
    omit?: PlagiarismResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismResultsInclude<ExtArgs> | null
    /**
     * Filter, which PlagiarismResults to fetch.
     */
    where?: PlagiarismResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlagiarismResults to fetch.
     */
    orderBy?: PlagiarismResultsOrderByWithRelationInput | PlagiarismResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlagiarismResults.
     */
    cursor?: PlagiarismResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlagiarismResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlagiarismResults.
     */
    skip?: number
    distinct?: PlagiarismResultsScalarFieldEnum | PlagiarismResultsScalarFieldEnum[]
  }

  /**
   * PlagiarismResults create
   */
  export type PlagiarismResultsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismResults
     */
    select?: PlagiarismResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismResults
     */
    omit?: PlagiarismResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismResultsInclude<ExtArgs> | null
    /**
     * The data needed to create a PlagiarismResults.
     */
    data: XOR<PlagiarismResultsCreateInput, PlagiarismResultsUncheckedCreateInput>
  }

  /**
   * PlagiarismResults createMany
   */
  export type PlagiarismResultsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlagiarismResults.
     */
    data: PlagiarismResultsCreateManyInput | PlagiarismResultsCreateManyInput[]
  }

  /**
   * PlagiarismResults update
   */
  export type PlagiarismResultsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismResults
     */
    select?: PlagiarismResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismResults
     */
    omit?: PlagiarismResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismResultsInclude<ExtArgs> | null
    /**
     * The data needed to update a PlagiarismResults.
     */
    data: XOR<PlagiarismResultsUpdateInput, PlagiarismResultsUncheckedUpdateInput>
    /**
     * Choose, which PlagiarismResults to update.
     */
    where: PlagiarismResultsWhereUniqueInput
  }

  /**
   * PlagiarismResults updateMany
   */
  export type PlagiarismResultsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlagiarismResults.
     */
    data: XOR<PlagiarismResultsUpdateManyMutationInput, PlagiarismResultsUncheckedUpdateManyInput>
    /**
     * Filter which PlagiarismResults to update
     */
    where?: PlagiarismResultsWhereInput
    /**
     * Limit how many PlagiarismResults to update.
     */
    limit?: number
  }

  /**
   * PlagiarismResults upsert
   */
  export type PlagiarismResultsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismResults
     */
    select?: PlagiarismResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismResults
     */
    omit?: PlagiarismResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismResultsInclude<ExtArgs> | null
    /**
     * The filter to search for the PlagiarismResults to update in case it exists.
     */
    where: PlagiarismResultsWhereUniqueInput
    /**
     * In case the PlagiarismResults found by the `where` argument doesn't exist, create a new PlagiarismResults with this data.
     */
    create: XOR<PlagiarismResultsCreateInput, PlagiarismResultsUncheckedCreateInput>
    /**
     * In case the PlagiarismResults was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlagiarismResultsUpdateInput, PlagiarismResultsUncheckedUpdateInput>
  }

  /**
   * PlagiarismResults delete
   */
  export type PlagiarismResultsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismResults
     */
    select?: PlagiarismResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismResults
     */
    omit?: PlagiarismResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismResultsInclude<ExtArgs> | null
    /**
     * Filter which PlagiarismResults to delete.
     */
    where: PlagiarismResultsWhereUniqueInput
  }

  /**
   * PlagiarismResults deleteMany
   */
  export type PlagiarismResultsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlagiarismResults to delete
     */
    where?: PlagiarismResultsWhereInput
    /**
     * Limit how many PlagiarismResults to delete.
     */
    limit?: number
  }

  /**
   * PlagiarismResults findRaw
   */
  export type PlagiarismResultsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PlagiarismResults aggregateRaw
   */
  export type PlagiarismResultsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PlagiarismResults.matches
   */
  export type PlagiarismResults$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismMatch
     */
    select?: PlagiarismMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismMatch
     */
    omit?: PlagiarismMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismMatchInclude<ExtArgs> | null
    where?: PlagiarismMatchWhereInput
    orderBy?: PlagiarismMatchOrderByWithRelationInput | PlagiarismMatchOrderByWithRelationInput[]
    cursor?: PlagiarismMatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlagiarismMatchScalarFieldEnum | PlagiarismMatchScalarFieldEnum[]
  }

  /**
   * PlagiarismResults.submission
   */
  export type PlagiarismResults$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
  }

  /**
   * PlagiarismResults without action
   */
  export type PlagiarismResultsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismResults
     */
    select?: PlagiarismResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismResults
     */
    omit?: PlagiarismResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismResultsInclude<ExtArgs> | null
  }


  /**
   * Model PlagiarismMatch
   */

  export type AggregatePlagiarismMatch = {
    _count: PlagiarismMatchCountAggregateOutputType | null
    _avg: PlagiarismMatchAvgAggregateOutputType | null
    _sum: PlagiarismMatchSumAggregateOutputType | null
    _min: PlagiarismMatchMinAggregateOutputType | null
    _max: PlagiarismMatchMaxAggregateOutputType | null
  }

  export type PlagiarismMatchAvgAggregateOutputType = {
    similarity: number | null
  }

  export type PlagiarismMatchSumAggregateOutputType = {
    similarity: number | null
  }

  export type PlagiarismMatchMinAggregateOutputType = {
    id: string | null
    test: string | null
    source: string | null
    similarity: number | null
    plagiarismResultsId: string | null
  }

  export type PlagiarismMatchMaxAggregateOutputType = {
    id: string | null
    test: string | null
    source: string | null
    similarity: number | null
    plagiarismResultsId: string | null
  }

  export type PlagiarismMatchCountAggregateOutputType = {
    id: number
    test: number
    source: number
    similarity: number
    plagiarismResultsId: number
    _all: number
  }


  export type PlagiarismMatchAvgAggregateInputType = {
    similarity?: true
  }

  export type PlagiarismMatchSumAggregateInputType = {
    similarity?: true
  }

  export type PlagiarismMatchMinAggregateInputType = {
    id?: true
    test?: true
    source?: true
    similarity?: true
    plagiarismResultsId?: true
  }

  export type PlagiarismMatchMaxAggregateInputType = {
    id?: true
    test?: true
    source?: true
    similarity?: true
    plagiarismResultsId?: true
  }

  export type PlagiarismMatchCountAggregateInputType = {
    id?: true
    test?: true
    source?: true
    similarity?: true
    plagiarismResultsId?: true
    _all?: true
  }

  export type PlagiarismMatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlagiarismMatch to aggregate.
     */
    where?: PlagiarismMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlagiarismMatches to fetch.
     */
    orderBy?: PlagiarismMatchOrderByWithRelationInput | PlagiarismMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlagiarismMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlagiarismMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlagiarismMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlagiarismMatches
    **/
    _count?: true | PlagiarismMatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlagiarismMatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlagiarismMatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlagiarismMatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlagiarismMatchMaxAggregateInputType
  }

  export type GetPlagiarismMatchAggregateType<T extends PlagiarismMatchAggregateArgs> = {
        [P in keyof T & keyof AggregatePlagiarismMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlagiarismMatch[P]>
      : GetScalarType<T[P], AggregatePlagiarismMatch[P]>
  }




  export type PlagiarismMatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlagiarismMatchWhereInput
    orderBy?: PlagiarismMatchOrderByWithAggregationInput | PlagiarismMatchOrderByWithAggregationInput[]
    by: PlagiarismMatchScalarFieldEnum[] | PlagiarismMatchScalarFieldEnum
    having?: PlagiarismMatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlagiarismMatchCountAggregateInputType | true
    _avg?: PlagiarismMatchAvgAggregateInputType
    _sum?: PlagiarismMatchSumAggregateInputType
    _min?: PlagiarismMatchMinAggregateInputType
    _max?: PlagiarismMatchMaxAggregateInputType
  }

  export type PlagiarismMatchGroupByOutputType = {
    id: string
    test: string
    source: string
    similarity: number
    plagiarismResultsId: string
    _count: PlagiarismMatchCountAggregateOutputType | null
    _avg: PlagiarismMatchAvgAggregateOutputType | null
    _sum: PlagiarismMatchSumAggregateOutputType | null
    _min: PlagiarismMatchMinAggregateOutputType | null
    _max: PlagiarismMatchMaxAggregateOutputType | null
  }

  type GetPlagiarismMatchGroupByPayload<T extends PlagiarismMatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlagiarismMatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlagiarismMatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlagiarismMatchGroupByOutputType[P]>
            : GetScalarType<T[P], PlagiarismMatchGroupByOutputType[P]>
        }
      >
    >


  export type PlagiarismMatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    test?: boolean
    source?: boolean
    similarity?: boolean
    plagiarismResultsId?: boolean
    plagiarismResults?: boolean | PlagiarismResultsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plagiarismMatch"]>



  export type PlagiarismMatchSelectScalar = {
    id?: boolean
    test?: boolean
    source?: boolean
    similarity?: boolean
    plagiarismResultsId?: boolean
  }

  export type PlagiarismMatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "test" | "source" | "similarity" | "plagiarismResultsId", ExtArgs["result"]["plagiarismMatch"]>
  export type PlagiarismMatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plagiarismResults?: boolean | PlagiarismResultsDefaultArgs<ExtArgs>
  }

  export type $PlagiarismMatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlagiarismMatch"
    objects: {
      plagiarismResults: Prisma.$PlagiarismResultsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      test: string
      source: string
      similarity: number
      plagiarismResultsId: string
    }, ExtArgs["result"]["plagiarismMatch"]>
    composites: {}
  }

  type PlagiarismMatchGetPayload<S extends boolean | null | undefined | PlagiarismMatchDefaultArgs> = $Result.GetResult<Prisma.$PlagiarismMatchPayload, S>

  type PlagiarismMatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlagiarismMatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlagiarismMatchCountAggregateInputType | true
    }

  export interface PlagiarismMatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlagiarismMatch'], meta: { name: 'PlagiarismMatch' } }
    /**
     * Find zero or one PlagiarismMatch that matches the filter.
     * @param {PlagiarismMatchFindUniqueArgs} args - Arguments to find a PlagiarismMatch
     * @example
     * // Get one PlagiarismMatch
     * const plagiarismMatch = await prisma.plagiarismMatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlagiarismMatchFindUniqueArgs>(args: SelectSubset<T, PlagiarismMatchFindUniqueArgs<ExtArgs>>): Prisma__PlagiarismMatchClient<$Result.GetResult<Prisma.$PlagiarismMatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlagiarismMatch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlagiarismMatchFindUniqueOrThrowArgs} args - Arguments to find a PlagiarismMatch
     * @example
     * // Get one PlagiarismMatch
     * const plagiarismMatch = await prisma.plagiarismMatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlagiarismMatchFindUniqueOrThrowArgs>(args: SelectSubset<T, PlagiarismMatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlagiarismMatchClient<$Result.GetResult<Prisma.$PlagiarismMatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlagiarismMatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagiarismMatchFindFirstArgs} args - Arguments to find a PlagiarismMatch
     * @example
     * // Get one PlagiarismMatch
     * const plagiarismMatch = await prisma.plagiarismMatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlagiarismMatchFindFirstArgs>(args?: SelectSubset<T, PlagiarismMatchFindFirstArgs<ExtArgs>>): Prisma__PlagiarismMatchClient<$Result.GetResult<Prisma.$PlagiarismMatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlagiarismMatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagiarismMatchFindFirstOrThrowArgs} args - Arguments to find a PlagiarismMatch
     * @example
     * // Get one PlagiarismMatch
     * const plagiarismMatch = await prisma.plagiarismMatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlagiarismMatchFindFirstOrThrowArgs>(args?: SelectSubset<T, PlagiarismMatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlagiarismMatchClient<$Result.GetResult<Prisma.$PlagiarismMatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlagiarismMatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagiarismMatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlagiarismMatches
     * const plagiarismMatches = await prisma.plagiarismMatch.findMany()
     * 
     * // Get first 10 PlagiarismMatches
     * const plagiarismMatches = await prisma.plagiarismMatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plagiarismMatchWithIdOnly = await prisma.plagiarismMatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlagiarismMatchFindManyArgs>(args?: SelectSubset<T, PlagiarismMatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlagiarismMatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlagiarismMatch.
     * @param {PlagiarismMatchCreateArgs} args - Arguments to create a PlagiarismMatch.
     * @example
     * // Create one PlagiarismMatch
     * const PlagiarismMatch = await prisma.plagiarismMatch.create({
     *   data: {
     *     // ... data to create a PlagiarismMatch
     *   }
     * })
     * 
     */
    create<T extends PlagiarismMatchCreateArgs>(args: SelectSubset<T, PlagiarismMatchCreateArgs<ExtArgs>>): Prisma__PlagiarismMatchClient<$Result.GetResult<Prisma.$PlagiarismMatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlagiarismMatches.
     * @param {PlagiarismMatchCreateManyArgs} args - Arguments to create many PlagiarismMatches.
     * @example
     * // Create many PlagiarismMatches
     * const plagiarismMatch = await prisma.plagiarismMatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlagiarismMatchCreateManyArgs>(args?: SelectSubset<T, PlagiarismMatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlagiarismMatch.
     * @param {PlagiarismMatchDeleteArgs} args - Arguments to delete one PlagiarismMatch.
     * @example
     * // Delete one PlagiarismMatch
     * const PlagiarismMatch = await prisma.plagiarismMatch.delete({
     *   where: {
     *     // ... filter to delete one PlagiarismMatch
     *   }
     * })
     * 
     */
    delete<T extends PlagiarismMatchDeleteArgs>(args: SelectSubset<T, PlagiarismMatchDeleteArgs<ExtArgs>>): Prisma__PlagiarismMatchClient<$Result.GetResult<Prisma.$PlagiarismMatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlagiarismMatch.
     * @param {PlagiarismMatchUpdateArgs} args - Arguments to update one PlagiarismMatch.
     * @example
     * // Update one PlagiarismMatch
     * const plagiarismMatch = await prisma.plagiarismMatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlagiarismMatchUpdateArgs>(args: SelectSubset<T, PlagiarismMatchUpdateArgs<ExtArgs>>): Prisma__PlagiarismMatchClient<$Result.GetResult<Prisma.$PlagiarismMatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlagiarismMatches.
     * @param {PlagiarismMatchDeleteManyArgs} args - Arguments to filter PlagiarismMatches to delete.
     * @example
     * // Delete a few PlagiarismMatches
     * const { count } = await prisma.plagiarismMatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlagiarismMatchDeleteManyArgs>(args?: SelectSubset<T, PlagiarismMatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlagiarismMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagiarismMatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlagiarismMatches
     * const plagiarismMatch = await prisma.plagiarismMatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlagiarismMatchUpdateManyArgs>(args: SelectSubset<T, PlagiarismMatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlagiarismMatch.
     * @param {PlagiarismMatchUpsertArgs} args - Arguments to update or create a PlagiarismMatch.
     * @example
     * // Update or create a PlagiarismMatch
     * const plagiarismMatch = await prisma.plagiarismMatch.upsert({
     *   create: {
     *     // ... data to create a PlagiarismMatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlagiarismMatch we want to update
     *   }
     * })
     */
    upsert<T extends PlagiarismMatchUpsertArgs>(args: SelectSubset<T, PlagiarismMatchUpsertArgs<ExtArgs>>): Prisma__PlagiarismMatchClient<$Result.GetResult<Prisma.$PlagiarismMatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlagiarismMatches that matches the filter.
     * @param {PlagiarismMatchFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const plagiarismMatch = await prisma.plagiarismMatch.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PlagiarismMatchFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PlagiarismMatch.
     * @param {PlagiarismMatchAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const plagiarismMatch = await prisma.plagiarismMatch.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PlagiarismMatchAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PlagiarismMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagiarismMatchCountArgs} args - Arguments to filter PlagiarismMatches to count.
     * @example
     * // Count the number of PlagiarismMatches
     * const count = await prisma.plagiarismMatch.count({
     *   where: {
     *     // ... the filter for the PlagiarismMatches we want to count
     *   }
     * })
    **/
    count<T extends PlagiarismMatchCountArgs>(
      args?: Subset<T, PlagiarismMatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlagiarismMatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlagiarismMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagiarismMatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlagiarismMatchAggregateArgs>(args: Subset<T, PlagiarismMatchAggregateArgs>): Prisma.PrismaPromise<GetPlagiarismMatchAggregateType<T>>

    /**
     * Group by PlagiarismMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagiarismMatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlagiarismMatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlagiarismMatchGroupByArgs['orderBy'] }
        : { orderBy?: PlagiarismMatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlagiarismMatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlagiarismMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlagiarismMatch model
   */
  readonly fields: PlagiarismMatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlagiarismMatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlagiarismMatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plagiarismResults<T extends PlagiarismResultsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlagiarismResultsDefaultArgs<ExtArgs>>): Prisma__PlagiarismResultsClient<$Result.GetResult<Prisma.$PlagiarismResultsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlagiarismMatch model
   */
  interface PlagiarismMatchFieldRefs {
    readonly id: FieldRef<"PlagiarismMatch", 'String'>
    readonly test: FieldRef<"PlagiarismMatch", 'String'>
    readonly source: FieldRef<"PlagiarismMatch", 'String'>
    readonly similarity: FieldRef<"PlagiarismMatch", 'Float'>
    readonly plagiarismResultsId: FieldRef<"PlagiarismMatch", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlagiarismMatch findUnique
   */
  export type PlagiarismMatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismMatch
     */
    select?: PlagiarismMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismMatch
     */
    omit?: PlagiarismMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismMatchInclude<ExtArgs> | null
    /**
     * Filter, which PlagiarismMatch to fetch.
     */
    where: PlagiarismMatchWhereUniqueInput
  }

  /**
   * PlagiarismMatch findUniqueOrThrow
   */
  export type PlagiarismMatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismMatch
     */
    select?: PlagiarismMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismMatch
     */
    omit?: PlagiarismMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismMatchInclude<ExtArgs> | null
    /**
     * Filter, which PlagiarismMatch to fetch.
     */
    where: PlagiarismMatchWhereUniqueInput
  }

  /**
   * PlagiarismMatch findFirst
   */
  export type PlagiarismMatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismMatch
     */
    select?: PlagiarismMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismMatch
     */
    omit?: PlagiarismMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismMatchInclude<ExtArgs> | null
    /**
     * Filter, which PlagiarismMatch to fetch.
     */
    where?: PlagiarismMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlagiarismMatches to fetch.
     */
    orderBy?: PlagiarismMatchOrderByWithRelationInput | PlagiarismMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlagiarismMatches.
     */
    cursor?: PlagiarismMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlagiarismMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlagiarismMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlagiarismMatches.
     */
    distinct?: PlagiarismMatchScalarFieldEnum | PlagiarismMatchScalarFieldEnum[]
  }

  /**
   * PlagiarismMatch findFirstOrThrow
   */
  export type PlagiarismMatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismMatch
     */
    select?: PlagiarismMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismMatch
     */
    omit?: PlagiarismMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismMatchInclude<ExtArgs> | null
    /**
     * Filter, which PlagiarismMatch to fetch.
     */
    where?: PlagiarismMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlagiarismMatches to fetch.
     */
    orderBy?: PlagiarismMatchOrderByWithRelationInput | PlagiarismMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlagiarismMatches.
     */
    cursor?: PlagiarismMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlagiarismMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlagiarismMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlagiarismMatches.
     */
    distinct?: PlagiarismMatchScalarFieldEnum | PlagiarismMatchScalarFieldEnum[]
  }

  /**
   * PlagiarismMatch findMany
   */
  export type PlagiarismMatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismMatch
     */
    select?: PlagiarismMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismMatch
     */
    omit?: PlagiarismMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismMatchInclude<ExtArgs> | null
    /**
     * Filter, which PlagiarismMatches to fetch.
     */
    where?: PlagiarismMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlagiarismMatches to fetch.
     */
    orderBy?: PlagiarismMatchOrderByWithRelationInput | PlagiarismMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlagiarismMatches.
     */
    cursor?: PlagiarismMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlagiarismMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlagiarismMatches.
     */
    skip?: number
    distinct?: PlagiarismMatchScalarFieldEnum | PlagiarismMatchScalarFieldEnum[]
  }

  /**
   * PlagiarismMatch create
   */
  export type PlagiarismMatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismMatch
     */
    select?: PlagiarismMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismMatch
     */
    omit?: PlagiarismMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismMatchInclude<ExtArgs> | null
    /**
     * The data needed to create a PlagiarismMatch.
     */
    data: XOR<PlagiarismMatchCreateInput, PlagiarismMatchUncheckedCreateInput>
  }

  /**
   * PlagiarismMatch createMany
   */
  export type PlagiarismMatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlagiarismMatches.
     */
    data: PlagiarismMatchCreateManyInput | PlagiarismMatchCreateManyInput[]
  }

  /**
   * PlagiarismMatch update
   */
  export type PlagiarismMatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismMatch
     */
    select?: PlagiarismMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismMatch
     */
    omit?: PlagiarismMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismMatchInclude<ExtArgs> | null
    /**
     * The data needed to update a PlagiarismMatch.
     */
    data: XOR<PlagiarismMatchUpdateInput, PlagiarismMatchUncheckedUpdateInput>
    /**
     * Choose, which PlagiarismMatch to update.
     */
    where: PlagiarismMatchWhereUniqueInput
  }

  /**
   * PlagiarismMatch updateMany
   */
  export type PlagiarismMatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlagiarismMatches.
     */
    data: XOR<PlagiarismMatchUpdateManyMutationInput, PlagiarismMatchUncheckedUpdateManyInput>
    /**
     * Filter which PlagiarismMatches to update
     */
    where?: PlagiarismMatchWhereInput
    /**
     * Limit how many PlagiarismMatches to update.
     */
    limit?: number
  }

  /**
   * PlagiarismMatch upsert
   */
  export type PlagiarismMatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismMatch
     */
    select?: PlagiarismMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismMatch
     */
    omit?: PlagiarismMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismMatchInclude<ExtArgs> | null
    /**
     * The filter to search for the PlagiarismMatch to update in case it exists.
     */
    where: PlagiarismMatchWhereUniqueInput
    /**
     * In case the PlagiarismMatch found by the `where` argument doesn't exist, create a new PlagiarismMatch with this data.
     */
    create: XOR<PlagiarismMatchCreateInput, PlagiarismMatchUncheckedCreateInput>
    /**
     * In case the PlagiarismMatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlagiarismMatchUpdateInput, PlagiarismMatchUncheckedUpdateInput>
  }

  /**
   * PlagiarismMatch delete
   */
  export type PlagiarismMatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismMatch
     */
    select?: PlagiarismMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismMatch
     */
    omit?: PlagiarismMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismMatchInclude<ExtArgs> | null
    /**
     * Filter which PlagiarismMatch to delete.
     */
    where: PlagiarismMatchWhereUniqueInput
  }

  /**
   * PlagiarismMatch deleteMany
   */
  export type PlagiarismMatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlagiarismMatches to delete
     */
    where?: PlagiarismMatchWhereInput
    /**
     * Limit how many PlagiarismMatches to delete.
     */
    limit?: number
  }

  /**
   * PlagiarismMatch findRaw
   */
  export type PlagiarismMatchFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PlagiarismMatch aggregateRaw
   */
  export type PlagiarismMatchAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PlagiarismMatch without action
   */
  export type PlagiarismMatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagiarismMatch
     */
    select?: PlagiarismMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlagiarismMatch
     */
    omit?: PlagiarismMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagiarismMatchInclude<ExtArgs> | null
  }


  /**
   * Model InlineComment
   */

  export type AggregateInlineComment = {
    _count: InlineCommentCountAggregateOutputType | null
    _avg: InlineCommentAvgAggregateOutputType | null
    _sum: InlineCommentSumAggregateOutputType | null
    _min: InlineCommentMinAggregateOutputType | null
    _max: InlineCommentMaxAggregateOutputType | null
  }

  export type InlineCommentAvgAggregateOutputType = {
    startIndex: number | null
    endIndex: number | null
  }

  export type InlineCommentSumAggregateOutputType = {
    startIndex: number | null
    endIndex: number | null
  }

  export type InlineCommentMinAggregateOutputType = {
    id: string | null
    startIndex: number | null
    endIndex: number | null
    text: string | null
    color: string | null
    timeStamp: Date | null
    authorId: string | null
    submissionId: string | null
  }

  export type InlineCommentMaxAggregateOutputType = {
    id: string | null
    startIndex: number | null
    endIndex: number | null
    text: string | null
    color: string | null
    timeStamp: Date | null
    authorId: string | null
    submissionId: string | null
  }

  export type InlineCommentCountAggregateOutputType = {
    id: number
    startIndex: number
    endIndex: number
    text: number
    color: number
    timeStamp: number
    authorId: number
    submissionId: number
    _all: number
  }


  export type InlineCommentAvgAggregateInputType = {
    startIndex?: true
    endIndex?: true
  }

  export type InlineCommentSumAggregateInputType = {
    startIndex?: true
    endIndex?: true
  }

  export type InlineCommentMinAggregateInputType = {
    id?: true
    startIndex?: true
    endIndex?: true
    text?: true
    color?: true
    timeStamp?: true
    authorId?: true
    submissionId?: true
  }

  export type InlineCommentMaxAggregateInputType = {
    id?: true
    startIndex?: true
    endIndex?: true
    text?: true
    color?: true
    timeStamp?: true
    authorId?: true
    submissionId?: true
  }

  export type InlineCommentCountAggregateInputType = {
    id?: true
    startIndex?: true
    endIndex?: true
    text?: true
    color?: true
    timeStamp?: true
    authorId?: true
    submissionId?: true
    _all?: true
  }

  export type InlineCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InlineComment to aggregate.
     */
    where?: InlineCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InlineComments to fetch.
     */
    orderBy?: InlineCommentOrderByWithRelationInput | InlineCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InlineCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InlineComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InlineComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InlineComments
    **/
    _count?: true | InlineCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InlineCommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InlineCommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InlineCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InlineCommentMaxAggregateInputType
  }

  export type GetInlineCommentAggregateType<T extends InlineCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateInlineComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInlineComment[P]>
      : GetScalarType<T[P], AggregateInlineComment[P]>
  }




  export type InlineCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InlineCommentWhereInput
    orderBy?: InlineCommentOrderByWithAggregationInput | InlineCommentOrderByWithAggregationInput[]
    by: InlineCommentScalarFieldEnum[] | InlineCommentScalarFieldEnum
    having?: InlineCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InlineCommentCountAggregateInputType | true
    _avg?: InlineCommentAvgAggregateInputType
    _sum?: InlineCommentSumAggregateInputType
    _min?: InlineCommentMinAggregateInputType
    _max?: InlineCommentMaxAggregateInputType
  }

  export type InlineCommentGroupByOutputType = {
    id: string
    startIndex: number
    endIndex: number
    text: string
    color: string
    timeStamp: Date
    authorId: string
    submissionId: string
    _count: InlineCommentCountAggregateOutputType | null
    _avg: InlineCommentAvgAggregateOutputType | null
    _sum: InlineCommentSumAggregateOutputType | null
    _min: InlineCommentMinAggregateOutputType | null
    _max: InlineCommentMaxAggregateOutputType | null
  }

  type GetInlineCommentGroupByPayload<T extends InlineCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InlineCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InlineCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InlineCommentGroupByOutputType[P]>
            : GetScalarType<T[P], InlineCommentGroupByOutputType[P]>
        }
      >
    >


  export type InlineCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startIndex?: boolean
    endIndex?: boolean
    text?: boolean
    color?: boolean
    timeStamp?: boolean
    authorId?: boolean
    submissionId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inlineComment"]>



  export type InlineCommentSelectScalar = {
    id?: boolean
    startIndex?: boolean
    endIndex?: boolean
    text?: boolean
    color?: boolean
    timeStamp?: boolean
    authorId?: boolean
    submissionId?: boolean
  }

  export type InlineCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startIndex" | "endIndex" | "text" | "color" | "timeStamp" | "authorId" | "submissionId", ExtArgs["result"]["inlineComment"]>
  export type InlineCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }

  export type $InlineCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InlineComment"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      submission: Prisma.$SubmissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startIndex: number
      endIndex: number
      text: string
      color: string
      timeStamp: Date
      authorId: string
      submissionId: string
    }, ExtArgs["result"]["inlineComment"]>
    composites: {}
  }

  type InlineCommentGetPayload<S extends boolean | null | undefined | InlineCommentDefaultArgs> = $Result.GetResult<Prisma.$InlineCommentPayload, S>

  type InlineCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InlineCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InlineCommentCountAggregateInputType | true
    }

  export interface InlineCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InlineComment'], meta: { name: 'InlineComment' } }
    /**
     * Find zero or one InlineComment that matches the filter.
     * @param {InlineCommentFindUniqueArgs} args - Arguments to find a InlineComment
     * @example
     * // Get one InlineComment
     * const inlineComment = await prisma.inlineComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InlineCommentFindUniqueArgs>(args: SelectSubset<T, InlineCommentFindUniqueArgs<ExtArgs>>): Prisma__InlineCommentClient<$Result.GetResult<Prisma.$InlineCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InlineComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InlineCommentFindUniqueOrThrowArgs} args - Arguments to find a InlineComment
     * @example
     * // Get one InlineComment
     * const inlineComment = await prisma.inlineComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InlineCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, InlineCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InlineCommentClient<$Result.GetResult<Prisma.$InlineCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InlineComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InlineCommentFindFirstArgs} args - Arguments to find a InlineComment
     * @example
     * // Get one InlineComment
     * const inlineComment = await prisma.inlineComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InlineCommentFindFirstArgs>(args?: SelectSubset<T, InlineCommentFindFirstArgs<ExtArgs>>): Prisma__InlineCommentClient<$Result.GetResult<Prisma.$InlineCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InlineComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InlineCommentFindFirstOrThrowArgs} args - Arguments to find a InlineComment
     * @example
     * // Get one InlineComment
     * const inlineComment = await prisma.inlineComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InlineCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, InlineCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InlineCommentClient<$Result.GetResult<Prisma.$InlineCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InlineComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InlineCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InlineComments
     * const inlineComments = await prisma.inlineComment.findMany()
     * 
     * // Get first 10 InlineComments
     * const inlineComments = await prisma.inlineComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inlineCommentWithIdOnly = await prisma.inlineComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InlineCommentFindManyArgs>(args?: SelectSubset<T, InlineCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InlineCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InlineComment.
     * @param {InlineCommentCreateArgs} args - Arguments to create a InlineComment.
     * @example
     * // Create one InlineComment
     * const InlineComment = await prisma.inlineComment.create({
     *   data: {
     *     // ... data to create a InlineComment
     *   }
     * })
     * 
     */
    create<T extends InlineCommentCreateArgs>(args: SelectSubset<T, InlineCommentCreateArgs<ExtArgs>>): Prisma__InlineCommentClient<$Result.GetResult<Prisma.$InlineCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InlineComments.
     * @param {InlineCommentCreateManyArgs} args - Arguments to create many InlineComments.
     * @example
     * // Create many InlineComments
     * const inlineComment = await prisma.inlineComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InlineCommentCreateManyArgs>(args?: SelectSubset<T, InlineCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InlineComment.
     * @param {InlineCommentDeleteArgs} args - Arguments to delete one InlineComment.
     * @example
     * // Delete one InlineComment
     * const InlineComment = await prisma.inlineComment.delete({
     *   where: {
     *     // ... filter to delete one InlineComment
     *   }
     * })
     * 
     */
    delete<T extends InlineCommentDeleteArgs>(args: SelectSubset<T, InlineCommentDeleteArgs<ExtArgs>>): Prisma__InlineCommentClient<$Result.GetResult<Prisma.$InlineCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InlineComment.
     * @param {InlineCommentUpdateArgs} args - Arguments to update one InlineComment.
     * @example
     * // Update one InlineComment
     * const inlineComment = await prisma.inlineComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InlineCommentUpdateArgs>(args: SelectSubset<T, InlineCommentUpdateArgs<ExtArgs>>): Prisma__InlineCommentClient<$Result.GetResult<Prisma.$InlineCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InlineComments.
     * @param {InlineCommentDeleteManyArgs} args - Arguments to filter InlineComments to delete.
     * @example
     * // Delete a few InlineComments
     * const { count } = await prisma.inlineComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InlineCommentDeleteManyArgs>(args?: SelectSubset<T, InlineCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InlineComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InlineCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InlineComments
     * const inlineComment = await prisma.inlineComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InlineCommentUpdateManyArgs>(args: SelectSubset<T, InlineCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InlineComment.
     * @param {InlineCommentUpsertArgs} args - Arguments to update or create a InlineComment.
     * @example
     * // Update or create a InlineComment
     * const inlineComment = await prisma.inlineComment.upsert({
     *   create: {
     *     // ... data to create a InlineComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InlineComment we want to update
     *   }
     * })
     */
    upsert<T extends InlineCommentUpsertArgs>(args: SelectSubset<T, InlineCommentUpsertArgs<ExtArgs>>): Prisma__InlineCommentClient<$Result.GetResult<Prisma.$InlineCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InlineComments that matches the filter.
     * @param {InlineCommentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const inlineComment = await prisma.inlineComment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: InlineCommentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a InlineComment.
     * @param {InlineCommentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const inlineComment = await prisma.inlineComment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: InlineCommentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of InlineComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InlineCommentCountArgs} args - Arguments to filter InlineComments to count.
     * @example
     * // Count the number of InlineComments
     * const count = await prisma.inlineComment.count({
     *   where: {
     *     // ... the filter for the InlineComments we want to count
     *   }
     * })
    **/
    count<T extends InlineCommentCountArgs>(
      args?: Subset<T, InlineCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InlineCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InlineComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InlineCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InlineCommentAggregateArgs>(args: Subset<T, InlineCommentAggregateArgs>): Prisma.PrismaPromise<GetInlineCommentAggregateType<T>>

    /**
     * Group by InlineComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InlineCommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InlineCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InlineCommentGroupByArgs['orderBy'] }
        : { orderBy?: InlineCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InlineCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInlineCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InlineComment model
   */
  readonly fields: InlineCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InlineComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InlineCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submission<T extends SubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubmissionDefaultArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InlineComment model
   */
  interface InlineCommentFieldRefs {
    readonly id: FieldRef<"InlineComment", 'String'>
    readonly startIndex: FieldRef<"InlineComment", 'Int'>
    readonly endIndex: FieldRef<"InlineComment", 'Int'>
    readonly text: FieldRef<"InlineComment", 'String'>
    readonly color: FieldRef<"InlineComment", 'String'>
    readonly timeStamp: FieldRef<"InlineComment", 'DateTime'>
    readonly authorId: FieldRef<"InlineComment", 'String'>
    readonly submissionId: FieldRef<"InlineComment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InlineComment findUnique
   */
  export type InlineCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InlineComment
     */
    select?: InlineCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InlineComment
     */
    omit?: InlineCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InlineCommentInclude<ExtArgs> | null
    /**
     * Filter, which InlineComment to fetch.
     */
    where: InlineCommentWhereUniqueInput
  }

  /**
   * InlineComment findUniqueOrThrow
   */
  export type InlineCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InlineComment
     */
    select?: InlineCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InlineComment
     */
    omit?: InlineCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InlineCommentInclude<ExtArgs> | null
    /**
     * Filter, which InlineComment to fetch.
     */
    where: InlineCommentWhereUniqueInput
  }

  /**
   * InlineComment findFirst
   */
  export type InlineCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InlineComment
     */
    select?: InlineCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InlineComment
     */
    omit?: InlineCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InlineCommentInclude<ExtArgs> | null
    /**
     * Filter, which InlineComment to fetch.
     */
    where?: InlineCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InlineComments to fetch.
     */
    orderBy?: InlineCommentOrderByWithRelationInput | InlineCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InlineComments.
     */
    cursor?: InlineCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InlineComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InlineComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InlineComments.
     */
    distinct?: InlineCommentScalarFieldEnum | InlineCommentScalarFieldEnum[]
  }

  /**
   * InlineComment findFirstOrThrow
   */
  export type InlineCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InlineComment
     */
    select?: InlineCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InlineComment
     */
    omit?: InlineCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InlineCommentInclude<ExtArgs> | null
    /**
     * Filter, which InlineComment to fetch.
     */
    where?: InlineCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InlineComments to fetch.
     */
    orderBy?: InlineCommentOrderByWithRelationInput | InlineCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InlineComments.
     */
    cursor?: InlineCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InlineComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InlineComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InlineComments.
     */
    distinct?: InlineCommentScalarFieldEnum | InlineCommentScalarFieldEnum[]
  }

  /**
   * InlineComment findMany
   */
  export type InlineCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InlineComment
     */
    select?: InlineCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InlineComment
     */
    omit?: InlineCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InlineCommentInclude<ExtArgs> | null
    /**
     * Filter, which InlineComments to fetch.
     */
    where?: InlineCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InlineComments to fetch.
     */
    orderBy?: InlineCommentOrderByWithRelationInput | InlineCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InlineComments.
     */
    cursor?: InlineCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InlineComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InlineComments.
     */
    skip?: number
    distinct?: InlineCommentScalarFieldEnum | InlineCommentScalarFieldEnum[]
  }

  /**
   * InlineComment create
   */
  export type InlineCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InlineComment
     */
    select?: InlineCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InlineComment
     */
    omit?: InlineCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InlineCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a InlineComment.
     */
    data: XOR<InlineCommentCreateInput, InlineCommentUncheckedCreateInput>
  }

  /**
   * InlineComment createMany
   */
  export type InlineCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InlineComments.
     */
    data: InlineCommentCreateManyInput | InlineCommentCreateManyInput[]
  }

  /**
   * InlineComment update
   */
  export type InlineCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InlineComment
     */
    select?: InlineCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InlineComment
     */
    omit?: InlineCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InlineCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a InlineComment.
     */
    data: XOR<InlineCommentUpdateInput, InlineCommentUncheckedUpdateInput>
    /**
     * Choose, which InlineComment to update.
     */
    where: InlineCommentWhereUniqueInput
  }

  /**
   * InlineComment updateMany
   */
  export type InlineCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InlineComments.
     */
    data: XOR<InlineCommentUpdateManyMutationInput, InlineCommentUncheckedUpdateManyInput>
    /**
     * Filter which InlineComments to update
     */
    where?: InlineCommentWhereInput
    /**
     * Limit how many InlineComments to update.
     */
    limit?: number
  }

  /**
   * InlineComment upsert
   */
  export type InlineCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InlineComment
     */
    select?: InlineCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InlineComment
     */
    omit?: InlineCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InlineCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the InlineComment to update in case it exists.
     */
    where: InlineCommentWhereUniqueInput
    /**
     * In case the InlineComment found by the `where` argument doesn't exist, create a new InlineComment with this data.
     */
    create: XOR<InlineCommentCreateInput, InlineCommentUncheckedCreateInput>
    /**
     * In case the InlineComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InlineCommentUpdateInput, InlineCommentUncheckedUpdateInput>
  }

  /**
   * InlineComment delete
   */
  export type InlineCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InlineComment
     */
    select?: InlineCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InlineComment
     */
    omit?: InlineCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InlineCommentInclude<ExtArgs> | null
    /**
     * Filter which InlineComment to delete.
     */
    where: InlineCommentWhereUniqueInput
  }

  /**
   * InlineComment deleteMany
   */
  export type InlineCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InlineComments to delete
     */
    where?: InlineCommentWhereInput
    /**
     * Limit how many InlineComments to delete.
     */
    limit?: number
  }

  /**
   * InlineComment findRaw
   */
  export type InlineCommentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * InlineComment aggregateRaw
   */
  export type InlineCommentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * InlineComment without action
   */
  export type InlineCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InlineComment
     */
    select?: InlineCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InlineComment
     */
    omit?: InlineCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InlineCommentInclude<ExtArgs> | null
  }


  /**
   * Model OverallFeedback
   */

  export type AggregateOverallFeedback = {
    _count: OverallFeedbackCountAggregateOutputType | null
    _min: OverallFeedbackMinAggregateOutputType | null
    _max: OverallFeedbackMaxAggregateOutputType | null
  }

  export type OverallFeedbackMinAggregateOutputType = {
    id: string | null
    strengths: string | null
    improvements: string | null
    actionItems: string | null
    submissionId: string | null
  }

  export type OverallFeedbackMaxAggregateOutputType = {
    id: string | null
    strengths: string | null
    improvements: string | null
    actionItems: string | null
    submissionId: string | null
  }

  export type OverallFeedbackCountAggregateOutputType = {
    id: number
    strengths: number
    improvements: number
    actionItems: number
    submissionId: number
    _all: number
  }


  export type OverallFeedbackMinAggregateInputType = {
    id?: true
    strengths?: true
    improvements?: true
    actionItems?: true
    submissionId?: true
  }

  export type OverallFeedbackMaxAggregateInputType = {
    id?: true
    strengths?: true
    improvements?: true
    actionItems?: true
    submissionId?: true
  }

  export type OverallFeedbackCountAggregateInputType = {
    id?: true
    strengths?: true
    improvements?: true
    actionItems?: true
    submissionId?: true
    _all?: true
  }

  export type OverallFeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OverallFeedback to aggregate.
     */
    where?: OverallFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OverallFeedbacks to fetch.
     */
    orderBy?: OverallFeedbackOrderByWithRelationInput | OverallFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OverallFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OverallFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OverallFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OverallFeedbacks
    **/
    _count?: true | OverallFeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OverallFeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OverallFeedbackMaxAggregateInputType
  }

  export type GetOverallFeedbackAggregateType<T extends OverallFeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateOverallFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOverallFeedback[P]>
      : GetScalarType<T[P], AggregateOverallFeedback[P]>
  }




  export type OverallFeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OverallFeedbackWhereInput
    orderBy?: OverallFeedbackOrderByWithAggregationInput | OverallFeedbackOrderByWithAggregationInput[]
    by: OverallFeedbackScalarFieldEnum[] | OverallFeedbackScalarFieldEnum
    having?: OverallFeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OverallFeedbackCountAggregateInputType | true
    _min?: OverallFeedbackMinAggregateInputType
    _max?: OverallFeedbackMaxAggregateInputType
  }

  export type OverallFeedbackGroupByOutputType = {
    id: string
    strengths: string
    improvements: string
    actionItems: string
    submissionId: string
    _count: OverallFeedbackCountAggregateOutputType | null
    _min: OverallFeedbackMinAggregateOutputType | null
    _max: OverallFeedbackMaxAggregateOutputType | null
  }

  type GetOverallFeedbackGroupByPayload<T extends OverallFeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OverallFeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OverallFeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OverallFeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], OverallFeedbackGroupByOutputType[P]>
        }
      >
    >


  export type OverallFeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    strengths?: boolean
    improvements?: boolean
    actionItems?: boolean
    submissionId?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["overallFeedback"]>



  export type OverallFeedbackSelectScalar = {
    id?: boolean
    strengths?: boolean
    improvements?: boolean
    actionItems?: boolean
    submissionId?: boolean
  }

  export type OverallFeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "strengths" | "improvements" | "actionItems" | "submissionId", ExtArgs["result"]["overallFeedback"]>
  export type OverallFeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }

  export type $OverallFeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OverallFeedback"
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      strengths: string
      improvements: string
      actionItems: string
      submissionId: string
    }, ExtArgs["result"]["overallFeedback"]>
    composites: {}
  }

  type OverallFeedbackGetPayload<S extends boolean | null | undefined | OverallFeedbackDefaultArgs> = $Result.GetResult<Prisma.$OverallFeedbackPayload, S>

  type OverallFeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OverallFeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OverallFeedbackCountAggregateInputType | true
    }

  export interface OverallFeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OverallFeedback'], meta: { name: 'OverallFeedback' } }
    /**
     * Find zero or one OverallFeedback that matches the filter.
     * @param {OverallFeedbackFindUniqueArgs} args - Arguments to find a OverallFeedback
     * @example
     * // Get one OverallFeedback
     * const overallFeedback = await prisma.overallFeedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OverallFeedbackFindUniqueArgs>(args: SelectSubset<T, OverallFeedbackFindUniqueArgs<ExtArgs>>): Prisma__OverallFeedbackClient<$Result.GetResult<Prisma.$OverallFeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OverallFeedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OverallFeedbackFindUniqueOrThrowArgs} args - Arguments to find a OverallFeedback
     * @example
     * // Get one OverallFeedback
     * const overallFeedback = await prisma.overallFeedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OverallFeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, OverallFeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OverallFeedbackClient<$Result.GetResult<Prisma.$OverallFeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OverallFeedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverallFeedbackFindFirstArgs} args - Arguments to find a OverallFeedback
     * @example
     * // Get one OverallFeedback
     * const overallFeedback = await prisma.overallFeedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OverallFeedbackFindFirstArgs>(args?: SelectSubset<T, OverallFeedbackFindFirstArgs<ExtArgs>>): Prisma__OverallFeedbackClient<$Result.GetResult<Prisma.$OverallFeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OverallFeedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverallFeedbackFindFirstOrThrowArgs} args - Arguments to find a OverallFeedback
     * @example
     * // Get one OverallFeedback
     * const overallFeedback = await prisma.overallFeedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OverallFeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, OverallFeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__OverallFeedbackClient<$Result.GetResult<Prisma.$OverallFeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OverallFeedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverallFeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OverallFeedbacks
     * const overallFeedbacks = await prisma.overallFeedback.findMany()
     * 
     * // Get first 10 OverallFeedbacks
     * const overallFeedbacks = await prisma.overallFeedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const overallFeedbackWithIdOnly = await prisma.overallFeedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OverallFeedbackFindManyArgs>(args?: SelectSubset<T, OverallFeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OverallFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OverallFeedback.
     * @param {OverallFeedbackCreateArgs} args - Arguments to create a OverallFeedback.
     * @example
     * // Create one OverallFeedback
     * const OverallFeedback = await prisma.overallFeedback.create({
     *   data: {
     *     // ... data to create a OverallFeedback
     *   }
     * })
     * 
     */
    create<T extends OverallFeedbackCreateArgs>(args: SelectSubset<T, OverallFeedbackCreateArgs<ExtArgs>>): Prisma__OverallFeedbackClient<$Result.GetResult<Prisma.$OverallFeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OverallFeedbacks.
     * @param {OverallFeedbackCreateManyArgs} args - Arguments to create many OverallFeedbacks.
     * @example
     * // Create many OverallFeedbacks
     * const overallFeedback = await prisma.overallFeedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OverallFeedbackCreateManyArgs>(args?: SelectSubset<T, OverallFeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OverallFeedback.
     * @param {OverallFeedbackDeleteArgs} args - Arguments to delete one OverallFeedback.
     * @example
     * // Delete one OverallFeedback
     * const OverallFeedback = await prisma.overallFeedback.delete({
     *   where: {
     *     // ... filter to delete one OverallFeedback
     *   }
     * })
     * 
     */
    delete<T extends OverallFeedbackDeleteArgs>(args: SelectSubset<T, OverallFeedbackDeleteArgs<ExtArgs>>): Prisma__OverallFeedbackClient<$Result.GetResult<Prisma.$OverallFeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OverallFeedback.
     * @param {OverallFeedbackUpdateArgs} args - Arguments to update one OverallFeedback.
     * @example
     * // Update one OverallFeedback
     * const overallFeedback = await prisma.overallFeedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OverallFeedbackUpdateArgs>(args: SelectSubset<T, OverallFeedbackUpdateArgs<ExtArgs>>): Prisma__OverallFeedbackClient<$Result.GetResult<Prisma.$OverallFeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OverallFeedbacks.
     * @param {OverallFeedbackDeleteManyArgs} args - Arguments to filter OverallFeedbacks to delete.
     * @example
     * // Delete a few OverallFeedbacks
     * const { count } = await prisma.overallFeedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OverallFeedbackDeleteManyArgs>(args?: SelectSubset<T, OverallFeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OverallFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverallFeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OverallFeedbacks
     * const overallFeedback = await prisma.overallFeedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OverallFeedbackUpdateManyArgs>(args: SelectSubset<T, OverallFeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OverallFeedback.
     * @param {OverallFeedbackUpsertArgs} args - Arguments to update or create a OverallFeedback.
     * @example
     * // Update or create a OverallFeedback
     * const overallFeedback = await prisma.overallFeedback.upsert({
     *   create: {
     *     // ... data to create a OverallFeedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OverallFeedback we want to update
     *   }
     * })
     */
    upsert<T extends OverallFeedbackUpsertArgs>(args: SelectSubset<T, OverallFeedbackUpsertArgs<ExtArgs>>): Prisma__OverallFeedbackClient<$Result.GetResult<Prisma.$OverallFeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OverallFeedbacks that matches the filter.
     * @param {OverallFeedbackFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const overallFeedback = await prisma.overallFeedback.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: OverallFeedbackFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a OverallFeedback.
     * @param {OverallFeedbackAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const overallFeedback = await prisma.overallFeedback.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: OverallFeedbackAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of OverallFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverallFeedbackCountArgs} args - Arguments to filter OverallFeedbacks to count.
     * @example
     * // Count the number of OverallFeedbacks
     * const count = await prisma.overallFeedback.count({
     *   where: {
     *     // ... the filter for the OverallFeedbacks we want to count
     *   }
     * })
    **/
    count<T extends OverallFeedbackCountArgs>(
      args?: Subset<T, OverallFeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OverallFeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OverallFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverallFeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OverallFeedbackAggregateArgs>(args: Subset<T, OverallFeedbackAggregateArgs>): Prisma.PrismaPromise<GetOverallFeedbackAggregateType<T>>

    /**
     * Group by OverallFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverallFeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OverallFeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OverallFeedbackGroupByArgs['orderBy'] }
        : { orderBy?: OverallFeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OverallFeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOverallFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OverallFeedback model
   */
  readonly fields: OverallFeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OverallFeedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OverallFeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends SubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubmissionDefaultArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OverallFeedback model
   */
  interface OverallFeedbackFieldRefs {
    readonly id: FieldRef<"OverallFeedback", 'String'>
    readonly strengths: FieldRef<"OverallFeedback", 'String'>
    readonly improvements: FieldRef<"OverallFeedback", 'String'>
    readonly actionItems: FieldRef<"OverallFeedback", 'String'>
    readonly submissionId: FieldRef<"OverallFeedback", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OverallFeedback findUnique
   */
  export type OverallFeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverallFeedback
     */
    select?: OverallFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverallFeedback
     */
    omit?: OverallFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverallFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which OverallFeedback to fetch.
     */
    where: OverallFeedbackWhereUniqueInput
  }

  /**
   * OverallFeedback findUniqueOrThrow
   */
  export type OverallFeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverallFeedback
     */
    select?: OverallFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverallFeedback
     */
    omit?: OverallFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverallFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which OverallFeedback to fetch.
     */
    where: OverallFeedbackWhereUniqueInput
  }

  /**
   * OverallFeedback findFirst
   */
  export type OverallFeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverallFeedback
     */
    select?: OverallFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverallFeedback
     */
    omit?: OverallFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverallFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which OverallFeedback to fetch.
     */
    where?: OverallFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OverallFeedbacks to fetch.
     */
    orderBy?: OverallFeedbackOrderByWithRelationInput | OverallFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OverallFeedbacks.
     */
    cursor?: OverallFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OverallFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OverallFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OverallFeedbacks.
     */
    distinct?: OverallFeedbackScalarFieldEnum | OverallFeedbackScalarFieldEnum[]
  }

  /**
   * OverallFeedback findFirstOrThrow
   */
  export type OverallFeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverallFeedback
     */
    select?: OverallFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverallFeedback
     */
    omit?: OverallFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverallFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which OverallFeedback to fetch.
     */
    where?: OverallFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OverallFeedbacks to fetch.
     */
    orderBy?: OverallFeedbackOrderByWithRelationInput | OverallFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OverallFeedbacks.
     */
    cursor?: OverallFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OverallFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OverallFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OverallFeedbacks.
     */
    distinct?: OverallFeedbackScalarFieldEnum | OverallFeedbackScalarFieldEnum[]
  }

  /**
   * OverallFeedback findMany
   */
  export type OverallFeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverallFeedback
     */
    select?: OverallFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverallFeedback
     */
    omit?: OverallFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverallFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which OverallFeedbacks to fetch.
     */
    where?: OverallFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OverallFeedbacks to fetch.
     */
    orderBy?: OverallFeedbackOrderByWithRelationInput | OverallFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OverallFeedbacks.
     */
    cursor?: OverallFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OverallFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OverallFeedbacks.
     */
    skip?: number
    distinct?: OverallFeedbackScalarFieldEnum | OverallFeedbackScalarFieldEnum[]
  }

  /**
   * OverallFeedback create
   */
  export type OverallFeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverallFeedback
     */
    select?: OverallFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverallFeedback
     */
    omit?: OverallFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverallFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a OverallFeedback.
     */
    data: XOR<OverallFeedbackCreateInput, OverallFeedbackUncheckedCreateInput>
  }

  /**
   * OverallFeedback createMany
   */
  export type OverallFeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OverallFeedbacks.
     */
    data: OverallFeedbackCreateManyInput | OverallFeedbackCreateManyInput[]
  }

  /**
   * OverallFeedback update
   */
  export type OverallFeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverallFeedback
     */
    select?: OverallFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverallFeedback
     */
    omit?: OverallFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverallFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a OverallFeedback.
     */
    data: XOR<OverallFeedbackUpdateInput, OverallFeedbackUncheckedUpdateInput>
    /**
     * Choose, which OverallFeedback to update.
     */
    where: OverallFeedbackWhereUniqueInput
  }

  /**
   * OverallFeedback updateMany
   */
  export type OverallFeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OverallFeedbacks.
     */
    data: XOR<OverallFeedbackUpdateManyMutationInput, OverallFeedbackUncheckedUpdateManyInput>
    /**
     * Filter which OverallFeedbacks to update
     */
    where?: OverallFeedbackWhereInput
    /**
     * Limit how many OverallFeedbacks to update.
     */
    limit?: number
  }

  /**
   * OverallFeedback upsert
   */
  export type OverallFeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverallFeedback
     */
    select?: OverallFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverallFeedback
     */
    omit?: OverallFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverallFeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the OverallFeedback to update in case it exists.
     */
    where: OverallFeedbackWhereUniqueInput
    /**
     * In case the OverallFeedback found by the `where` argument doesn't exist, create a new OverallFeedback with this data.
     */
    create: XOR<OverallFeedbackCreateInput, OverallFeedbackUncheckedCreateInput>
    /**
     * In case the OverallFeedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OverallFeedbackUpdateInput, OverallFeedbackUncheckedUpdateInput>
  }

  /**
   * OverallFeedback delete
   */
  export type OverallFeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverallFeedback
     */
    select?: OverallFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverallFeedback
     */
    omit?: OverallFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverallFeedbackInclude<ExtArgs> | null
    /**
     * Filter which OverallFeedback to delete.
     */
    where: OverallFeedbackWhereUniqueInput
  }

  /**
   * OverallFeedback deleteMany
   */
  export type OverallFeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OverallFeedbacks to delete
     */
    where?: OverallFeedbackWhereInput
    /**
     * Limit how many OverallFeedbacks to delete.
     */
    limit?: number
  }

  /**
   * OverallFeedback findRaw
   */
  export type OverallFeedbackFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * OverallFeedback aggregateRaw
   */
  export type OverallFeedbackAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * OverallFeedback without action
   */
  export type OverallFeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OverallFeedback
     */
    select?: OverallFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OverallFeedback
     */
    omit?: OverallFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OverallFeedbackInclude<ExtArgs> | null
  }


  /**
   * Model Subscore
   */

  export type AggregateSubscore = {
    _count: SubscoreCountAggregateOutputType | null
    _avg: SubscoreAvgAggregateOutputType | null
    _sum: SubscoreSumAggregateOutputType | null
    _min: SubscoreMinAggregateOutputType | null
    _max: SubscoreMaxAggregateOutputType | null
  }

  export type SubscoreAvgAggregateOutputType = {
    score: number | null
    maxScore: number | null
  }

  export type SubscoreSumAggregateOutputType = {
    score: number | null
    maxScore: number | null
  }

  export type SubscoreMinAggregateOutputType = {
    id: string | null
    name: string | null
    score: number | null
    maxScore: number | null
    rationale: string | null
    submissionId: string | null
  }

  export type SubscoreMaxAggregateOutputType = {
    id: string | null
    name: string | null
    score: number | null
    maxScore: number | null
    rationale: string | null
    submissionId: string | null
  }

  export type SubscoreCountAggregateOutputType = {
    id: number
    name: number
    score: number
    maxScore: number
    rationale: number
    submissionId: number
    _all: number
  }


  export type SubscoreAvgAggregateInputType = {
    score?: true
    maxScore?: true
  }

  export type SubscoreSumAggregateInputType = {
    score?: true
    maxScore?: true
  }

  export type SubscoreMinAggregateInputType = {
    id?: true
    name?: true
    score?: true
    maxScore?: true
    rationale?: true
    submissionId?: true
  }

  export type SubscoreMaxAggregateInputType = {
    id?: true
    name?: true
    score?: true
    maxScore?: true
    rationale?: true
    submissionId?: true
  }

  export type SubscoreCountAggregateInputType = {
    id?: true
    name?: true
    score?: true
    maxScore?: true
    rationale?: true
    submissionId?: true
    _all?: true
  }

  export type SubscoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscore to aggregate.
     */
    where?: SubscoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscores to fetch.
     */
    orderBy?: SubscoreOrderByWithRelationInput | SubscoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscores
    **/
    _count?: true | SubscoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscoreMaxAggregateInputType
  }

  export type GetSubscoreAggregateType<T extends SubscoreAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscore[P]>
      : GetScalarType<T[P], AggregateSubscore[P]>
  }




  export type SubscoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscoreWhereInput
    orderBy?: SubscoreOrderByWithAggregationInput | SubscoreOrderByWithAggregationInput[]
    by: SubscoreScalarFieldEnum[] | SubscoreScalarFieldEnum
    having?: SubscoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscoreCountAggregateInputType | true
    _avg?: SubscoreAvgAggregateInputType
    _sum?: SubscoreSumAggregateInputType
    _min?: SubscoreMinAggregateInputType
    _max?: SubscoreMaxAggregateInputType
  }

  export type SubscoreGroupByOutputType = {
    id: string
    name: string
    score: number
    maxScore: number
    rationale: string
    submissionId: string
    _count: SubscoreCountAggregateOutputType | null
    _avg: SubscoreAvgAggregateOutputType | null
    _sum: SubscoreSumAggregateOutputType | null
    _min: SubscoreMinAggregateOutputType | null
    _max: SubscoreMaxAggregateOutputType | null
  }

  type GetSubscoreGroupByPayload<T extends SubscoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscoreGroupByOutputType[P]>
            : GetScalarType<T[P], SubscoreGroupByOutputType[P]>
        }
      >
    >


  export type SubscoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    score?: boolean
    maxScore?: boolean
    rationale?: boolean
    submissionId?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscore"]>



  export type SubscoreSelectScalar = {
    id?: boolean
    name?: boolean
    score?: boolean
    maxScore?: boolean
    rationale?: boolean
    submissionId?: boolean
  }

  export type SubscoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "score" | "maxScore" | "rationale" | "submissionId", ExtArgs["result"]["subscore"]>
  export type SubscoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }

  export type $SubscorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscore"
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      score: number
      maxScore: number
      rationale: string
      submissionId: string
    }, ExtArgs["result"]["subscore"]>
    composites: {}
  }

  type SubscoreGetPayload<S extends boolean | null | undefined | SubscoreDefaultArgs> = $Result.GetResult<Prisma.$SubscorePayload, S>

  type SubscoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscoreCountAggregateInputType | true
    }

  export interface SubscoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscore'], meta: { name: 'Subscore' } }
    /**
     * Find zero or one Subscore that matches the filter.
     * @param {SubscoreFindUniqueArgs} args - Arguments to find a Subscore
     * @example
     * // Get one Subscore
     * const subscore = await prisma.subscore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscoreFindUniqueArgs>(args: SelectSubset<T, SubscoreFindUniqueArgs<ExtArgs>>): Prisma__SubscoreClient<$Result.GetResult<Prisma.$SubscorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscoreFindUniqueOrThrowArgs} args - Arguments to find a Subscore
     * @example
     * // Get one Subscore
     * const subscore = await prisma.subscore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscoreFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscoreClient<$Result.GetResult<Prisma.$SubscorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscoreFindFirstArgs} args - Arguments to find a Subscore
     * @example
     * // Get one Subscore
     * const subscore = await prisma.subscore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscoreFindFirstArgs>(args?: SelectSubset<T, SubscoreFindFirstArgs<ExtArgs>>): Prisma__SubscoreClient<$Result.GetResult<Prisma.$SubscorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscoreFindFirstOrThrowArgs} args - Arguments to find a Subscore
     * @example
     * // Get one Subscore
     * const subscore = await prisma.subscore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscoreFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscoreClient<$Result.GetResult<Prisma.$SubscorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscores
     * const subscores = await prisma.subscore.findMany()
     * 
     * // Get first 10 Subscores
     * const subscores = await prisma.subscore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscoreWithIdOnly = await prisma.subscore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscoreFindManyArgs>(args?: SelectSubset<T, SubscoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscore.
     * @param {SubscoreCreateArgs} args - Arguments to create a Subscore.
     * @example
     * // Create one Subscore
     * const Subscore = await prisma.subscore.create({
     *   data: {
     *     // ... data to create a Subscore
     *   }
     * })
     * 
     */
    create<T extends SubscoreCreateArgs>(args: SelectSubset<T, SubscoreCreateArgs<ExtArgs>>): Prisma__SubscoreClient<$Result.GetResult<Prisma.$SubscorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscores.
     * @param {SubscoreCreateManyArgs} args - Arguments to create many Subscores.
     * @example
     * // Create many Subscores
     * const subscore = await prisma.subscore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscoreCreateManyArgs>(args?: SelectSubset<T, SubscoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subscore.
     * @param {SubscoreDeleteArgs} args - Arguments to delete one Subscore.
     * @example
     * // Delete one Subscore
     * const Subscore = await prisma.subscore.delete({
     *   where: {
     *     // ... filter to delete one Subscore
     *   }
     * })
     * 
     */
    delete<T extends SubscoreDeleteArgs>(args: SelectSubset<T, SubscoreDeleteArgs<ExtArgs>>): Prisma__SubscoreClient<$Result.GetResult<Prisma.$SubscorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscore.
     * @param {SubscoreUpdateArgs} args - Arguments to update one Subscore.
     * @example
     * // Update one Subscore
     * const subscore = await prisma.subscore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscoreUpdateArgs>(args: SelectSubset<T, SubscoreUpdateArgs<ExtArgs>>): Prisma__SubscoreClient<$Result.GetResult<Prisma.$SubscorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscores.
     * @param {SubscoreDeleteManyArgs} args - Arguments to filter Subscores to delete.
     * @example
     * // Delete a few Subscores
     * const { count } = await prisma.subscore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscoreDeleteManyArgs>(args?: SelectSubset<T, SubscoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscores
     * const subscore = await prisma.subscore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscoreUpdateManyArgs>(args: SelectSubset<T, SubscoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscore.
     * @param {SubscoreUpsertArgs} args - Arguments to update or create a Subscore.
     * @example
     * // Update or create a Subscore
     * const subscore = await prisma.subscore.upsert({
     *   create: {
     *     // ... data to create a Subscore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscore we want to update
     *   }
     * })
     */
    upsert<T extends SubscoreUpsertArgs>(args: SelectSubset<T, SubscoreUpsertArgs<ExtArgs>>): Prisma__SubscoreClient<$Result.GetResult<Prisma.$SubscorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscores that matches the filter.
     * @param {SubscoreFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const subscore = await prisma.subscore.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SubscoreFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Subscore.
     * @param {SubscoreAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const subscore = await prisma.subscore.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SubscoreAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Subscores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscoreCountArgs} args - Arguments to filter Subscores to count.
     * @example
     * // Count the number of Subscores
     * const count = await prisma.subscore.count({
     *   where: {
     *     // ... the filter for the Subscores we want to count
     *   }
     * })
    **/
    count<T extends SubscoreCountArgs>(
      args?: Subset<T, SubscoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscoreAggregateArgs>(args: Subset<T, SubscoreAggregateArgs>): Prisma.PrismaPromise<GetSubscoreAggregateType<T>>

    /**
     * Group by Subscore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscoreGroupByArgs['orderBy'] }
        : { orderBy?: SubscoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscore model
   */
  readonly fields: SubscoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends SubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubmissionDefaultArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscore model
   */
  interface SubscoreFieldRefs {
    readonly id: FieldRef<"Subscore", 'String'>
    readonly name: FieldRef<"Subscore", 'String'>
    readonly score: FieldRef<"Subscore", 'Float'>
    readonly maxScore: FieldRef<"Subscore", 'Float'>
    readonly rationale: FieldRef<"Subscore", 'String'>
    readonly submissionId: FieldRef<"Subscore", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subscore findUnique
   */
  export type SubscoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscore
     */
    select?: SubscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscore
     */
    omit?: SubscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscoreInclude<ExtArgs> | null
    /**
     * Filter, which Subscore to fetch.
     */
    where: SubscoreWhereUniqueInput
  }

  /**
   * Subscore findUniqueOrThrow
   */
  export type SubscoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscore
     */
    select?: SubscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscore
     */
    omit?: SubscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscoreInclude<ExtArgs> | null
    /**
     * Filter, which Subscore to fetch.
     */
    where: SubscoreWhereUniqueInput
  }

  /**
   * Subscore findFirst
   */
  export type SubscoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscore
     */
    select?: SubscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscore
     */
    omit?: SubscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscoreInclude<ExtArgs> | null
    /**
     * Filter, which Subscore to fetch.
     */
    where?: SubscoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscores to fetch.
     */
    orderBy?: SubscoreOrderByWithRelationInput | SubscoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscores.
     */
    cursor?: SubscoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscores.
     */
    distinct?: SubscoreScalarFieldEnum | SubscoreScalarFieldEnum[]
  }

  /**
   * Subscore findFirstOrThrow
   */
  export type SubscoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscore
     */
    select?: SubscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscore
     */
    omit?: SubscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscoreInclude<ExtArgs> | null
    /**
     * Filter, which Subscore to fetch.
     */
    where?: SubscoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscores to fetch.
     */
    orderBy?: SubscoreOrderByWithRelationInput | SubscoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscores.
     */
    cursor?: SubscoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscores.
     */
    distinct?: SubscoreScalarFieldEnum | SubscoreScalarFieldEnum[]
  }

  /**
   * Subscore findMany
   */
  export type SubscoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscore
     */
    select?: SubscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscore
     */
    omit?: SubscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscoreInclude<ExtArgs> | null
    /**
     * Filter, which Subscores to fetch.
     */
    where?: SubscoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscores to fetch.
     */
    orderBy?: SubscoreOrderByWithRelationInput | SubscoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscores.
     */
    cursor?: SubscoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscores.
     */
    skip?: number
    distinct?: SubscoreScalarFieldEnum | SubscoreScalarFieldEnum[]
  }

  /**
   * Subscore create
   */
  export type SubscoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscore
     */
    select?: SubscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscore
     */
    omit?: SubscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscore.
     */
    data: XOR<SubscoreCreateInput, SubscoreUncheckedCreateInput>
  }

  /**
   * Subscore createMany
   */
  export type SubscoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscores.
     */
    data: SubscoreCreateManyInput | SubscoreCreateManyInput[]
  }

  /**
   * Subscore update
   */
  export type SubscoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscore
     */
    select?: SubscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscore
     */
    omit?: SubscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscore.
     */
    data: XOR<SubscoreUpdateInput, SubscoreUncheckedUpdateInput>
    /**
     * Choose, which Subscore to update.
     */
    where: SubscoreWhereUniqueInput
  }

  /**
   * Subscore updateMany
   */
  export type SubscoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscores.
     */
    data: XOR<SubscoreUpdateManyMutationInput, SubscoreUncheckedUpdateManyInput>
    /**
     * Filter which Subscores to update
     */
    where?: SubscoreWhereInput
    /**
     * Limit how many Subscores to update.
     */
    limit?: number
  }

  /**
   * Subscore upsert
   */
  export type SubscoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscore
     */
    select?: SubscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscore
     */
    omit?: SubscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscore to update in case it exists.
     */
    where: SubscoreWhereUniqueInput
    /**
     * In case the Subscore found by the `where` argument doesn't exist, create a new Subscore with this data.
     */
    create: XOR<SubscoreCreateInput, SubscoreUncheckedCreateInput>
    /**
     * In case the Subscore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscoreUpdateInput, SubscoreUncheckedUpdateInput>
  }

  /**
   * Subscore delete
   */
  export type SubscoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscore
     */
    select?: SubscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscore
     */
    omit?: SubscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscoreInclude<ExtArgs> | null
    /**
     * Filter which Subscore to delete.
     */
    where: SubscoreWhereUniqueInput
  }

  /**
   * Subscore deleteMany
   */
  export type SubscoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscores to delete
     */
    where?: SubscoreWhereInput
    /**
     * Limit how many Subscores to delete.
     */
    limit?: number
  }

  /**
   * Subscore findRaw
   */
  export type SubscoreFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Subscore aggregateRaw
   */
  export type SubscoreAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Subscore without action
   */
  export type SubscoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscore
     */
    select?: SubscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscore
     */
    omit?: SubscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscoreInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const PaymentsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    payment_status: 'payment_status',
    subscription_type: 'subscription_type'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    hashed_password: 'hashed_password',
    provider: 'provider'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CourseScalarFieldEnum: {
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

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
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
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    class: 'class',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
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

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const AICheckerResultsScalarFieldEnum: {
    id: 'id',
    score: 'score',
    confidence: 'confidence'
  };

  export type AICheckerResultsScalarFieldEnum = (typeof AICheckerResultsScalarFieldEnum)[keyof typeof AICheckerResultsScalarFieldEnum]


  export const AIDetailScalarFieldEnum: {
    id: 'id',
    section: 'section',
    aiProbability: 'aiProbability',
    humanProbability: 'humanProbability',
    aiCheckerResultsId: 'aiCheckerResultsId'
  };

  export type AIDetailScalarFieldEnum = (typeof AIDetailScalarFieldEnum)[keyof typeof AIDetailScalarFieldEnum]


  export const PlagiarismResultsScalarFieldEnum: {
    id: 'id',
    score: 'score'
  };

  export type PlagiarismResultsScalarFieldEnum = (typeof PlagiarismResultsScalarFieldEnum)[keyof typeof PlagiarismResultsScalarFieldEnum]


  export const PlagiarismMatchScalarFieldEnum: {
    id: 'id',
    test: 'test',
    source: 'source',
    similarity: 'similarity',
    plagiarismResultsId: 'plagiarismResultsId'
  };

  export type PlagiarismMatchScalarFieldEnum = (typeof PlagiarismMatchScalarFieldEnum)[keyof typeof PlagiarismMatchScalarFieldEnum]


  export const InlineCommentScalarFieldEnum: {
    id: 'id',
    startIndex: 'startIndex',
    endIndex: 'endIndex',
    text: 'text',
    color: 'color',
    timeStamp: 'timeStamp',
    authorId: 'authorId',
    submissionId: 'submissionId'
  };

  export type InlineCommentScalarFieldEnum = (typeof InlineCommentScalarFieldEnum)[keyof typeof InlineCommentScalarFieldEnum]


  export const OverallFeedbackScalarFieldEnum: {
    id: 'id',
    strengths: 'strengths',
    improvements: 'improvements',
    actionItems: 'actionItems',
    submissionId: 'submissionId'
  };

  export type OverallFeedbackScalarFieldEnum = (typeof OverallFeedbackScalarFieldEnum)[keyof typeof OverallFeedbackScalarFieldEnum]


  export const SubscoreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    score: 'score',
    maxScore: 'maxScore',
    rationale: 'rationale',
    submissionId: 'submissionId'
  };

  export type SubscoreScalarFieldEnum = (typeof SubscoreScalarFieldEnum)[keyof typeof SubscoreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'SubsciptionType'
   */
  export type EnumSubsciptionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubsciptionType'>
    


  /**
   * Reference to a field of type 'SubsciptionType[]'
   */
  export type ListEnumSubsciptionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubsciptionType[]'>
    


  /**
   * Reference to a field of type 'Provider'
   */
  export type EnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider'>
    


  /**
   * Reference to a field of type 'Provider[]'
   */
  export type ListEnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SubmissionStatus'
   */
  export type EnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus'>
    


  /**
   * Reference to a field of type 'SubmissionStatus[]'
   */
  export type ListEnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ConfidenceLevel'
   */
  export type EnumConfidenceLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConfidenceLevel'>
    


  /**
   * Reference to a field of type 'ConfidenceLevel[]'
   */
  export type ListEnumConfidenceLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConfidenceLevel[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type PaymentsWhereInput = {
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    id?: StringFilter<"Payments"> | string
    email?: StringFilter<"Payments"> | string
    payment_status?: EnumPaymentStatusFilter<"Payments"> | $Enums.PaymentStatus
    subscription_type?: EnumSubsciptionTypeFilter<"Payments"> | $Enums.SubsciptionType
  }

  export type PaymentsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    payment_status?: SortOrder
    subscription_type?: SortOrder
  }

  export type PaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    payment_status?: EnumPaymentStatusFilter<"Payments"> | $Enums.PaymentStatus
    subscription_type?: EnumSubsciptionTypeFilter<"Payments"> | $Enums.SubsciptionType
  }, "id" | "email">

  export type PaymentsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    payment_status?: SortOrder
    subscription_type?: SortOrder
    _count?: PaymentsCountOrderByAggregateInput
    _max?: PaymentsMaxOrderByAggregateInput
    _min?: PaymentsMinOrderByAggregateInput
  }

  export type PaymentsScalarWhereWithAggregatesInput = {
    AND?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    OR?: PaymentsScalarWhereWithAggregatesInput[]
    NOT?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payments"> | string
    email?: StringWithAggregatesFilter<"Payments"> | string
    payment_status?: EnumPaymentStatusWithAggregatesFilter<"Payments"> | $Enums.PaymentStatus
    subscription_type?: EnumSubsciptionTypeWithAggregatesFilter<"Payments"> | $Enums.SubsciptionType
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    hashed_password?: StringFilter<"User"> | string
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    courses?: CourseListRelationFilter
    assignments?: AssignmentListRelationFilter
    students?: StudentListRelationFilter
    inlineComments?: InlineCommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    hashed_password?: SortOrder
    provider?: SortOrder
    courses?: CourseOrderByRelationAggregateInput
    assignments?: AssignmentOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
    inlineComments?: InlineCommentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    hashed_password?: StringFilter<"User"> | string
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    courses?: CourseListRelationFilter
    assignments?: AssignmentListRelationFilter
    students?: StudentListRelationFilter
    inlineComments?: InlineCommentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    hashed_password?: SortOrder
    provider?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    hashed_password?: StringWithAggregatesFilter<"User"> | string
    provider?: EnumProviderWithAggregatesFilter<"User"> | $Enums.Provider
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    userId?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    courseTitle?: StringFilter<"Course"> | string
    courseDescription?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    instructor?: StringFilter<"Course"> | string
    subject?: StringFilter<"Course"> | string
    term?: StringFilter<"Course"> | string
    gradeLevel?: StringFilter<"Course"> | string
    learningObjectives?: StringNullableListFilter<"Course">
    requiredMaterials?: MaterialCompositeListFilter | MaterialObjectEqualityInput[]
    gradingPolicy?: XOR<GradingPolicyCompositeFilter, GradingPolicyObjectEqualityInput>
    policies?: XOR<PoliciesCompositeFilter, PoliciesObjectEqualityInput>
    weeklySchedule?: WeeklyScheduleCompositeListFilter | WeeklyScheduleObjectEqualityInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    courseTitle?: SortOrder
    courseDescription?: SortOrder
    description?: SortOrder
    instructor?: SortOrder
    subject?: SortOrder
    term?: SortOrder
    gradeLevel?: SortOrder
    learningObjectives?: SortOrder
    requiredMaterials?: MaterialOrderByCompositeAggregateInput
    gradingPolicy?: GradingPolicyOrderByInput
    policies?: PoliciesOrderByInput
    weeklySchedule?: WeeklyScheduleOrderByCompositeAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    userId?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    courseTitle?: StringFilter<"Course"> | string
    courseDescription?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    instructor?: StringFilter<"Course"> | string
    subject?: StringFilter<"Course"> | string
    term?: StringFilter<"Course"> | string
    gradeLevel?: StringFilter<"Course"> | string
    learningObjectives?: StringNullableListFilter<"Course">
    requiredMaterials?: MaterialCompositeListFilter | MaterialObjectEqualityInput[]
    gradingPolicy?: XOR<GradingPolicyCompositeFilter, GradingPolicyObjectEqualityInput>
    policies?: XOR<PoliciesCompositeFilter, PoliciesObjectEqualityInput>
    weeklySchedule?: WeeklyScheduleCompositeListFilter | WeeklyScheduleObjectEqualityInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    courseTitle?: SortOrder
    courseDescription?: SortOrder
    description?: SortOrder
    instructor?: SortOrder
    subject?: SortOrder
    term?: SortOrder
    gradeLevel?: SortOrder
    learningObjectives?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    userId?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    courseTitle?: StringWithAggregatesFilter<"Course"> | string
    courseDescription?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
    instructor?: StringWithAggregatesFilter<"Course"> | string
    subject?: StringWithAggregatesFilter<"Course"> | string
    term?: StringWithAggregatesFilter<"Course"> | string
    gradeLevel?: StringWithAggregatesFilter<"Course"> | string
    learningObjectives?: StringNullableListFilter<"Course">
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    id?: StringFilter<"Assignment"> | string
    assignmentTitle?: StringFilter<"Assignment"> | string
    selectedCourse?: StringFilter<"Assignment"> | string
    dueDate?: DateTimeFilter<"Assignment"> | Date | string
    description?: StringFilter<"Assignment"> | string
    learningObjectives?: StringFilter<"Assignment"> | string
    instructions?: StringNullableFilter<"Assignment"> | string | null
    rubric?: StringNullableFilter<"Assignment"> | string | null
    questions?: StringNullableFilter<"Assignment"> | string | null
    answer_key?: StringNullableFilter<"Assignment"> | string | null
    checklist?: StringNullableFilter<"Assignment"> | string | null
    participation_criteria?: StringNullableFilter<"Assignment"> | string | null
    peer_evaluation?: StringNullableFilter<"Assignment"> | string | null
    userId?: StringFilter<"Assignment"> | string
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeFilter<"Assignment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submission?: SubmissionListRelationFilter
  }

  export type AssignmentOrderByWithRelationInput = {
    id?: SortOrder
    assignmentTitle?: SortOrder
    selectedCourse?: SortOrder
    dueDate?: SortOrder
    description?: SortOrder
    learningObjectives?: SortOrder
    instructions?: SortOrder
    rubric?: SortOrder
    questions?: SortOrder
    answer_key?: SortOrder
    checklist?: SortOrder
    participation_criteria?: SortOrder
    peer_evaluation?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    submission?: SubmissionOrderByRelationAggregateInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    assignmentTitle?: StringFilter<"Assignment"> | string
    selectedCourse?: StringFilter<"Assignment"> | string
    dueDate?: DateTimeFilter<"Assignment"> | Date | string
    description?: StringFilter<"Assignment"> | string
    learningObjectives?: StringFilter<"Assignment"> | string
    instructions?: StringNullableFilter<"Assignment"> | string | null
    rubric?: StringNullableFilter<"Assignment"> | string | null
    questions?: StringNullableFilter<"Assignment"> | string | null
    answer_key?: StringNullableFilter<"Assignment"> | string | null
    checklist?: StringNullableFilter<"Assignment"> | string | null
    participation_criteria?: StringNullableFilter<"Assignment"> | string | null
    peer_evaluation?: StringNullableFilter<"Assignment"> | string | null
    userId?: StringFilter<"Assignment"> | string
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeFilter<"Assignment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submission?: SubmissionListRelationFilter
  }, "id">

  export type AssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    assignmentTitle?: SortOrder
    selectedCourse?: SortOrder
    dueDate?: SortOrder
    description?: SortOrder
    learningObjectives?: SortOrder
    instructions?: SortOrder
    rubric?: SortOrder
    questions?: SortOrder
    answer_key?: SortOrder
    checklist?: SortOrder
    participation_criteria?: SortOrder
    peer_evaluation?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assignment"> | string
    assignmentTitle?: StringWithAggregatesFilter<"Assignment"> | string
    selectedCourse?: StringWithAggregatesFilter<"Assignment"> | string
    dueDate?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    description?: StringWithAggregatesFilter<"Assignment"> | string
    learningObjectives?: StringWithAggregatesFilter<"Assignment"> | string
    instructions?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    rubric?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    questions?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    answer_key?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    checklist?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    participation_criteria?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    peer_evaluation?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    userId?: StringWithAggregatesFilter<"Assignment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    class?: StringFilter<"Student"> | string
    userId?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    class?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    class?: StringFilter<"Student"> | string
    userId?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "email">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    class?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    email?: StringWithAggregatesFilter<"Student"> | string
    class?: StringWithAggregatesFilter<"Student"> | string
    userId?: StringWithAggregatesFilter<"Student"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    assignmentId?: StringFilter<"Submission"> | string
    assignmentTitle?: StringFilter<"Submission"> | string
    studentName?: StringNullableFilter<"Submission"> | string | null
    studentId?: StringNullableFilter<"Submission"> | string | null
    submissionDate?: DateTimeFilter<"Submission"> | Date | string
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    content?: StringFilter<"Submission"> | string
    aiCheckerResultsId?: StringNullableFilter<"Submission"> | string | null
    plagiarismResultsId?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    aiCheckerResults?: XOR<AICheckerResultsNullableScalarRelationFilter, AICheckerResultsWhereInput> | null
    plagiarismResults?: XOR<PlagiarismResultsNullableScalarRelationFilter, PlagiarismResultsWhereInput> | null
    inlineComments?: InlineCommentListRelationFilter
    overallFeedback?: XOR<OverallFeedbackNullableScalarRelationFilter, OverallFeedbackWhereInput> | null
    subscores?: SubscoreListRelationFilter
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    assignmentTitle?: SortOrder
    studentName?: SortOrder
    studentId?: SortOrder
    submissionDate?: SortOrder
    status?: SortOrder
    content?: SortOrder
    aiCheckerResultsId?: SortOrder
    plagiarismResultsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignment?: AssignmentOrderByWithRelationInput
    aiCheckerResults?: AICheckerResultsOrderByWithRelationInput
    plagiarismResults?: PlagiarismResultsOrderByWithRelationInput
    inlineComments?: InlineCommentOrderByRelationAggregateInput
    overallFeedback?: OverallFeedbackOrderByWithRelationInput
    subscores?: SubscoreOrderByRelationAggregateInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    aiCheckerResultsId?: string
    plagiarismResultsId?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    assignmentId?: StringFilter<"Submission"> | string
    assignmentTitle?: StringFilter<"Submission"> | string
    studentName?: StringNullableFilter<"Submission"> | string | null
    studentId?: StringNullableFilter<"Submission"> | string | null
    submissionDate?: DateTimeFilter<"Submission"> | Date | string
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    content?: StringFilter<"Submission"> | string
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    aiCheckerResults?: XOR<AICheckerResultsNullableScalarRelationFilter, AICheckerResultsWhereInput> | null
    plagiarismResults?: XOR<PlagiarismResultsNullableScalarRelationFilter, PlagiarismResultsWhereInput> | null
    inlineComments?: InlineCommentListRelationFilter
    overallFeedback?: XOR<OverallFeedbackNullableScalarRelationFilter, OverallFeedbackWhereInput> | null
    subscores?: SubscoreListRelationFilter
  }, "id" | "aiCheckerResultsId" | "plagiarismResultsId">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    assignmentTitle?: SortOrder
    studentName?: SortOrder
    studentId?: SortOrder
    submissionDate?: SortOrder
    status?: SortOrder
    content?: SortOrder
    aiCheckerResultsId?: SortOrder
    plagiarismResultsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    assignmentId?: StringWithAggregatesFilter<"Submission"> | string
    assignmentTitle?: StringWithAggregatesFilter<"Submission"> | string
    studentName?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    studentId?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    submissionDate?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    status?: EnumSubmissionStatusWithAggregatesFilter<"Submission"> | $Enums.SubmissionStatus
    content?: StringWithAggregatesFilter<"Submission"> | string
    aiCheckerResultsId?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    plagiarismResultsId?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
  }

  export type AICheckerResultsWhereInput = {
    AND?: AICheckerResultsWhereInput | AICheckerResultsWhereInput[]
    OR?: AICheckerResultsWhereInput[]
    NOT?: AICheckerResultsWhereInput | AICheckerResultsWhereInput[]
    id?: StringFilter<"AICheckerResults"> | string
    score?: IntFilter<"AICheckerResults"> | number
    confidence?: EnumConfidenceLevelFilter<"AICheckerResults"> | $Enums.ConfidenceLevel
    details?: AIDetailListRelationFilter
    submission?: XOR<SubmissionNullableScalarRelationFilter, SubmissionWhereInput> | null
  }

  export type AICheckerResultsOrderByWithRelationInput = {
    id?: SortOrder
    score?: SortOrder
    confidence?: SortOrder
    details?: AIDetailOrderByRelationAggregateInput
    submission?: SubmissionOrderByWithRelationInput
  }

  export type AICheckerResultsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AICheckerResultsWhereInput | AICheckerResultsWhereInput[]
    OR?: AICheckerResultsWhereInput[]
    NOT?: AICheckerResultsWhereInput | AICheckerResultsWhereInput[]
    score?: IntFilter<"AICheckerResults"> | number
    confidence?: EnumConfidenceLevelFilter<"AICheckerResults"> | $Enums.ConfidenceLevel
    details?: AIDetailListRelationFilter
    submission?: XOR<SubmissionNullableScalarRelationFilter, SubmissionWhereInput> | null
  }, "id">

  export type AICheckerResultsOrderByWithAggregationInput = {
    id?: SortOrder
    score?: SortOrder
    confidence?: SortOrder
    _count?: AICheckerResultsCountOrderByAggregateInput
    _avg?: AICheckerResultsAvgOrderByAggregateInput
    _max?: AICheckerResultsMaxOrderByAggregateInput
    _min?: AICheckerResultsMinOrderByAggregateInput
    _sum?: AICheckerResultsSumOrderByAggregateInput
  }

  export type AICheckerResultsScalarWhereWithAggregatesInput = {
    AND?: AICheckerResultsScalarWhereWithAggregatesInput | AICheckerResultsScalarWhereWithAggregatesInput[]
    OR?: AICheckerResultsScalarWhereWithAggregatesInput[]
    NOT?: AICheckerResultsScalarWhereWithAggregatesInput | AICheckerResultsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AICheckerResults"> | string
    score?: IntWithAggregatesFilter<"AICheckerResults"> | number
    confidence?: EnumConfidenceLevelWithAggregatesFilter<"AICheckerResults"> | $Enums.ConfidenceLevel
  }

  export type AIDetailWhereInput = {
    AND?: AIDetailWhereInput | AIDetailWhereInput[]
    OR?: AIDetailWhereInput[]
    NOT?: AIDetailWhereInput | AIDetailWhereInput[]
    id?: StringFilter<"AIDetail"> | string
    section?: StringFilter<"AIDetail"> | string
    aiProbability?: FloatFilter<"AIDetail"> | number
    humanProbability?: FloatFilter<"AIDetail"> | number
    aiCheckerResultsId?: StringFilter<"AIDetail"> | string
    aiCheckerResults?: XOR<AICheckerResultsScalarRelationFilter, AICheckerResultsWhereInput>
  }

  export type AIDetailOrderByWithRelationInput = {
    id?: SortOrder
    section?: SortOrder
    aiProbability?: SortOrder
    humanProbability?: SortOrder
    aiCheckerResultsId?: SortOrder
    aiCheckerResults?: AICheckerResultsOrderByWithRelationInput
  }

  export type AIDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AIDetailWhereInput | AIDetailWhereInput[]
    OR?: AIDetailWhereInput[]
    NOT?: AIDetailWhereInput | AIDetailWhereInput[]
    section?: StringFilter<"AIDetail"> | string
    aiProbability?: FloatFilter<"AIDetail"> | number
    humanProbability?: FloatFilter<"AIDetail"> | number
    aiCheckerResultsId?: StringFilter<"AIDetail"> | string
    aiCheckerResults?: XOR<AICheckerResultsScalarRelationFilter, AICheckerResultsWhereInput>
  }, "id">

  export type AIDetailOrderByWithAggregationInput = {
    id?: SortOrder
    section?: SortOrder
    aiProbability?: SortOrder
    humanProbability?: SortOrder
    aiCheckerResultsId?: SortOrder
    _count?: AIDetailCountOrderByAggregateInput
    _avg?: AIDetailAvgOrderByAggregateInput
    _max?: AIDetailMaxOrderByAggregateInput
    _min?: AIDetailMinOrderByAggregateInput
    _sum?: AIDetailSumOrderByAggregateInput
  }

  export type AIDetailScalarWhereWithAggregatesInput = {
    AND?: AIDetailScalarWhereWithAggregatesInput | AIDetailScalarWhereWithAggregatesInput[]
    OR?: AIDetailScalarWhereWithAggregatesInput[]
    NOT?: AIDetailScalarWhereWithAggregatesInput | AIDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIDetail"> | string
    section?: StringWithAggregatesFilter<"AIDetail"> | string
    aiProbability?: FloatWithAggregatesFilter<"AIDetail"> | number
    humanProbability?: FloatWithAggregatesFilter<"AIDetail"> | number
    aiCheckerResultsId?: StringWithAggregatesFilter<"AIDetail"> | string
  }

  export type PlagiarismResultsWhereInput = {
    AND?: PlagiarismResultsWhereInput | PlagiarismResultsWhereInput[]
    OR?: PlagiarismResultsWhereInput[]
    NOT?: PlagiarismResultsWhereInput | PlagiarismResultsWhereInput[]
    id?: StringFilter<"PlagiarismResults"> | string
    score?: IntFilter<"PlagiarismResults"> | number
    matches?: PlagiarismMatchListRelationFilter
    submission?: XOR<SubmissionNullableScalarRelationFilter, SubmissionWhereInput> | null
  }

  export type PlagiarismResultsOrderByWithRelationInput = {
    id?: SortOrder
    score?: SortOrder
    matches?: PlagiarismMatchOrderByRelationAggregateInput
    submission?: SubmissionOrderByWithRelationInput
  }

  export type PlagiarismResultsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlagiarismResultsWhereInput | PlagiarismResultsWhereInput[]
    OR?: PlagiarismResultsWhereInput[]
    NOT?: PlagiarismResultsWhereInput | PlagiarismResultsWhereInput[]
    score?: IntFilter<"PlagiarismResults"> | number
    matches?: PlagiarismMatchListRelationFilter
    submission?: XOR<SubmissionNullableScalarRelationFilter, SubmissionWhereInput> | null
  }, "id">

  export type PlagiarismResultsOrderByWithAggregationInput = {
    id?: SortOrder
    score?: SortOrder
    _count?: PlagiarismResultsCountOrderByAggregateInput
    _avg?: PlagiarismResultsAvgOrderByAggregateInput
    _max?: PlagiarismResultsMaxOrderByAggregateInput
    _min?: PlagiarismResultsMinOrderByAggregateInput
    _sum?: PlagiarismResultsSumOrderByAggregateInput
  }

  export type PlagiarismResultsScalarWhereWithAggregatesInput = {
    AND?: PlagiarismResultsScalarWhereWithAggregatesInput | PlagiarismResultsScalarWhereWithAggregatesInput[]
    OR?: PlagiarismResultsScalarWhereWithAggregatesInput[]
    NOT?: PlagiarismResultsScalarWhereWithAggregatesInput | PlagiarismResultsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlagiarismResults"> | string
    score?: IntWithAggregatesFilter<"PlagiarismResults"> | number
  }

  export type PlagiarismMatchWhereInput = {
    AND?: PlagiarismMatchWhereInput | PlagiarismMatchWhereInput[]
    OR?: PlagiarismMatchWhereInput[]
    NOT?: PlagiarismMatchWhereInput | PlagiarismMatchWhereInput[]
    id?: StringFilter<"PlagiarismMatch"> | string
    test?: StringFilter<"PlagiarismMatch"> | string
    source?: StringFilter<"PlagiarismMatch"> | string
    similarity?: FloatFilter<"PlagiarismMatch"> | number
    plagiarismResultsId?: StringFilter<"PlagiarismMatch"> | string
    plagiarismResults?: XOR<PlagiarismResultsScalarRelationFilter, PlagiarismResultsWhereInput>
  }

  export type PlagiarismMatchOrderByWithRelationInput = {
    id?: SortOrder
    test?: SortOrder
    source?: SortOrder
    similarity?: SortOrder
    plagiarismResultsId?: SortOrder
    plagiarismResults?: PlagiarismResultsOrderByWithRelationInput
  }

  export type PlagiarismMatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlagiarismMatchWhereInput | PlagiarismMatchWhereInput[]
    OR?: PlagiarismMatchWhereInput[]
    NOT?: PlagiarismMatchWhereInput | PlagiarismMatchWhereInput[]
    test?: StringFilter<"PlagiarismMatch"> | string
    source?: StringFilter<"PlagiarismMatch"> | string
    similarity?: FloatFilter<"PlagiarismMatch"> | number
    plagiarismResultsId?: StringFilter<"PlagiarismMatch"> | string
    plagiarismResults?: XOR<PlagiarismResultsScalarRelationFilter, PlagiarismResultsWhereInput>
  }, "id">

  export type PlagiarismMatchOrderByWithAggregationInput = {
    id?: SortOrder
    test?: SortOrder
    source?: SortOrder
    similarity?: SortOrder
    plagiarismResultsId?: SortOrder
    _count?: PlagiarismMatchCountOrderByAggregateInput
    _avg?: PlagiarismMatchAvgOrderByAggregateInput
    _max?: PlagiarismMatchMaxOrderByAggregateInput
    _min?: PlagiarismMatchMinOrderByAggregateInput
    _sum?: PlagiarismMatchSumOrderByAggregateInput
  }

  export type PlagiarismMatchScalarWhereWithAggregatesInput = {
    AND?: PlagiarismMatchScalarWhereWithAggregatesInput | PlagiarismMatchScalarWhereWithAggregatesInput[]
    OR?: PlagiarismMatchScalarWhereWithAggregatesInput[]
    NOT?: PlagiarismMatchScalarWhereWithAggregatesInput | PlagiarismMatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlagiarismMatch"> | string
    test?: StringWithAggregatesFilter<"PlagiarismMatch"> | string
    source?: StringWithAggregatesFilter<"PlagiarismMatch"> | string
    similarity?: FloatWithAggregatesFilter<"PlagiarismMatch"> | number
    plagiarismResultsId?: StringWithAggregatesFilter<"PlagiarismMatch"> | string
  }

  export type InlineCommentWhereInput = {
    AND?: InlineCommentWhereInput | InlineCommentWhereInput[]
    OR?: InlineCommentWhereInput[]
    NOT?: InlineCommentWhereInput | InlineCommentWhereInput[]
    id?: StringFilter<"InlineComment"> | string
    startIndex?: IntFilter<"InlineComment"> | number
    endIndex?: IntFilter<"InlineComment"> | number
    text?: StringFilter<"InlineComment"> | string
    color?: StringFilter<"InlineComment"> | string
    timeStamp?: DateTimeFilter<"InlineComment"> | Date | string
    authorId?: StringFilter<"InlineComment"> | string
    submissionId?: StringFilter<"InlineComment"> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }

  export type InlineCommentOrderByWithRelationInput = {
    id?: SortOrder
    startIndex?: SortOrder
    endIndex?: SortOrder
    text?: SortOrder
    color?: SortOrder
    timeStamp?: SortOrder
    authorId?: SortOrder
    submissionId?: SortOrder
    author?: UserOrderByWithRelationInput
    submission?: SubmissionOrderByWithRelationInput
  }

  export type InlineCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InlineCommentWhereInput | InlineCommentWhereInput[]
    OR?: InlineCommentWhereInput[]
    NOT?: InlineCommentWhereInput | InlineCommentWhereInput[]
    startIndex?: IntFilter<"InlineComment"> | number
    endIndex?: IntFilter<"InlineComment"> | number
    text?: StringFilter<"InlineComment"> | string
    color?: StringFilter<"InlineComment"> | string
    timeStamp?: DateTimeFilter<"InlineComment"> | Date | string
    authorId?: StringFilter<"InlineComment"> | string
    submissionId?: StringFilter<"InlineComment"> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }, "id">

  export type InlineCommentOrderByWithAggregationInput = {
    id?: SortOrder
    startIndex?: SortOrder
    endIndex?: SortOrder
    text?: SortOrder
    color?: SortOrder
    timeStamp?: SortOrder
    authorId?: SortOrder
    submissionId?: SortOrder
    _count?: InlineCommentCountOrderByAggregateInput
    _avg?: InlineCommentAvgOrderByAggregateInput
    _max?: InlineCommentMaxOrderByAggregateInput
    _min?: InlineCommentMinOrderByAggregateInput
    _sum?: InlineCommentSumOrderByAggregateInput
  }

  export type InlineCommentScalarWhereWithAggregatesInput = {
    AND?: InlineCommentScalarWhereWithAggregatesInput | InlineCommentScalarWhereWithAggregatesInput[]
    OR?: InlineCommentScalarWhereWithAggregatesInput[]
    NOT?: InlineCommentScalarWhereWithAggregatesInput | InlineCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InlineComment"> | string
    startIndex?: IntWithAggregatesFilter<"InlineComment"> | number
    endIndex?: IntWithAggregatesFilter<"InlineComment"> | number
    text?: StringWithAggregatesFilter<"InlineComment"> | string
    color?: StringWithAggregatesFilter<"InlineComment"> | string
    timeStamp?: DateTimeWithAggregatesFilter<"InlineComment"> | Date | string
    authorId?: StringWithAggregatesFilter<"InlineComment"> | string
    submissionId?: StringWithAggregatesFilter<"InlineComment"> | string
  }

  export type OverallFeedbackWhereInput = {
    AND?: OverallFeedbackWhereInput | OverallFeedbackWhereInput[]
    OR?: OverallFeedbackWhereInput[]
    NOT?: OverallFeedbackWhereInput | OverallFeedbackWhereInput[]
    id?: StringFilter<"OverallFeedback"> | string
    strengths?: StringFilter<"OverallFeedback"> | string
    improvements?: StringFilter<"OverallFeedback"> | string
    actionItems?: StringFilter<"OverallFeedback"> | string
    submissionId?: StringFilter<"OverallFeedback"> | string
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }

  export type OverallFeedbackOrderByWithRelationInput = {
    id?: SortOrder
    strengths?: SortOrder
    improvements?: SortOrder
    actionItems?: SortOrder
    submissionId?: SortOrder
    submission?: SubmissionOrderByWithRelationInput
  }

  export type OverallFeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    submissionId?: string
    AND?: OverallFeedbackWhereInput | OverallFeedbackWhereInput[]
    OR?: OverallFeedbackWhereInput[]
    NOT?: OverallFeedbackWhereInput | OverallFeedbackWhereInput[]
    strengths?: StringFilter<"OverallFeedback"> | string
    improvements?: StringFilter<"OverallFeedback"> | string
    actionItems?: StringFilter<"OverallFeedback"> | string
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }, "id" | "submissionId">

  export type OverallFeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    strengths?: SortOrder
    improvements?: SortOrder
    actionItems?: SortOrder
    submissionId?: SortOrder
    _count?: OverallFeedbackCountOrderByAggregateInput
    _max?: OverallFeedbackMaxOrderByAggregateInput
    _min?: OverallFeedbackMinOrderByAggregateInput
  }

  export type OverallFeedbackScalarWhereWithAggregatesInput = {
    AND?: OverallFeedbackScalarWhereWithAggregatesInput | OverallFeedbackScalarWhereWithAggregatesInput[]
    OR?: OverallFeedbackScalarWhereWithAggregatesInput[]
    NOT?: OverallFeedbackScalarWhereWithAggregatesInput | OverallFeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OverallFeedback"> | string
    strengths?: StringWithAggregatesFilter<"OverallFeedback"> | string
    improvements?: StringWithAggregatesFilter<"OverallFeedback"> | string
    actionItems?: StringWithAggregatesFilter<"OverallFeedback"> | string
    submissionId?: StringWithAggregatesFilter<"OverallFeedback"> | string
  }

  export type SubscoreWhereInput = {
    AND?: SubscoreWhereInput | SubscoreWhereInput[]
    OR?: SubscoreWhereInput[]
    NOT?: SubscoreWhereInput | SubscoreWhereInput[]
    id?: StringFilter<"Subscore"> | string
    name?: StringFilter<"Subscore"> | string
    score?: FloatFilter<"Subscore"> | number
    maxScore?: FloatFilter<"Subscore"> | number
    rationale?: StringFilter<"Subscore"> | string
    submissionId?: StringFilter<"Subscore"> | string
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }

  export type SubscoreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    rationale?: SortOrder
    submissionId?: SortOrder
    submission?: SubmissionOrderByWithRelationInput
  }

  export type SubscoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscoreWhereInput | SubscoreWhereInput[]
    OR?: SubscoreWhereInput[]
    NOT?: SubscoreWhereInput | SubscoreWhereInput[]
    name?: StringFilter<"Subscore"> | string
    score?: FloatFilter<"Subscore"> | number
    maxScore?: FloatFilter<"Subscore"> | number
    rationale?: StringFilter<"Subscore"> | string
    submissionId?: StringFilter<"Subscore"> | string
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }, "id">

  export type SubscoreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    rationale?: SortOrder
    submissionId?: SortOrder
    _count?: SubscoreCountOrderByAggregateInput
    _avg?: SubscoreAvgOrderByAggregateInput
    _max?: SubscoreMaxOrderByAggregateInput
    _min?: SubscoreMinOrderByAggregateInput
    _sum?: SubscoreSumOrderByAggregateInput
  }

  export type SubscoreScalarWhereWithAggregatesInput = {
    AND?: SubscoreScalarWhereWithAggregatesInput | SubscoreScalarWhereWithAggregatesInput[]
    OR?: SubscoreScalarWhereWithAggregatesInput[]
    NOT?: SubscoreScalarWhereWithAggregatesInput | SubscoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscore"> | string
    name?: StringWithAggregatesFilter<"Subscore"> | string
    score?: FloatWithAggregatesFilter<"Subscore"> | number
    maxScore?: FloatWithAggregatesFilter<"Subscore"> | number
    rationale?: StringWithAggregatesFilter<"Subscore"> | string
    submissionId?: StringWithAggregatesFilter<"Subscore"> | string
  }

  export type PaymentsCreateInput = {
    id?: string
    email: string
    payment_status: $Enums.PaymentStatus
    subscription_type: $Enums.SubsciptionType
  }

  export type PaymentsUncheckedCreateInput = {
    id?: string
    email: string
    payment_status: $Enums.PaymentStatus
    subscription_type: $Enums.SubsciptionType
  }

  export type PaymentsUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    subscription_type?: EnumSubsciptionTypeFieldUpdateOperationsInput | $Enums.SubsciptionType
  }

  export type PaymentsUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    subscription_type?: EnumSubsciptionTypeFieldUpdateOperationsInput | $Enums.SubsciptionType
  }

  export type PaymentsCreateManyInput = {
    id?: string
    email: string
    payment_status: $Enums.PaymentStatus
    subscription_type: $Enums.SubsciptionType
  }

  export type PaymentsUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    subscription_type?: EnumSubsciptionTypeFieldUpdateOperationsInput | $Enums.SubsciptionType
  }

  export type PaymentsUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    subscription_type?: EnumSubsciptionTypeFieldUpdateOperationsInput | $Enums.SubsciptionType
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    hashed_password: string
    provider: $Enums.Provider
    courses?: CourseCreateNestedManyWithoutUserInput
    assignments?: AssignmentCreateNestedManyWithoutUserInput
    students?: StudentCreateNestedManyWithoutUserInput
    inlineComments?: InlineCommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    hashed_password: string
    provider: $Enums.Provider
    courses?: CourseUncheckedCreateNestedManyWithoutUserInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutUserInput
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
    inlineComments?: InlineCommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    courses?: CourseUpdateManyWithoutUserNestedInput
    assignments?: AssignmentUpdateManyWithoutUserNestedInput
    students?: StudentUpdateManyWithoutUserNestedInput
    inlineComments?: InlineCommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    courses?: CourseUncheckedUpdateManyWithoutUserNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutUserNestedInput
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
    inlineComments?: InlineCommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    hashed_password: string
    provider: $Enums.Provider
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
  }

  export type CourseCreateInput = {
    id?: string
    name: string
    courseTitle: string
    courseDescription: string
    description: string
    instructor: string
    subject: string
    term: string
    gradeLevel: string
    learningObjectives?: CourseCreatelearningObjectivesInput | string[]
    requiredMaterials?: XOR<MaterialListCreateEnvelopeInput, MaterialCreateInput> | MaterialCreateInput[]
    gradingPolicy: XOR<GradingPolicyCreateEnvelopeInput, GradingPolicyCreateInput>
    policies: XOR<PoliciesCreateEnvelopeInput, PoliciesCreateInput>
    weeklySchedule?: XOR<WeeklyScheduleListCreateEnvelopeInput, WeeklyScheduleCreateInput> | WeeklyScheduleCreateInput[]
    user: UserCreateNestedOneWithoutCoursesInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    courseTitle: string
    courseDescription: string
    description: string
    instructor: string
    subject: string
    term: string
    gradeLevel: string
    learningObjectives?: CourseCreatelearningObjectivesInput | string[]
    requiredMaterials?: XOR<MaterialListCreateEnvelopeInput, MaterialCreateInput> | MaterialCreateInput[]
    gradingPolicy: XOR<GradingPolicyCreateEnvelopeInput, GradingPolicyCreateInput>
    policies: XOR<PoliciesCreateEnvelopeInput, PoliciesCreateInput>
    weeklySchedule?: XOR<WeeklyScheduleListCreateEnvelopeInput, WeeklyScheduleCreateInput> | WeeklyScheduleCreateInput[]
  }

  export type CourseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    courseTitle?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    learningObjectives?: CourseUpdatelearningObjectivesInput | string[]
    requiredMaterials?: XOR<MaterialListUpdateEnvelopeInput, MaterialCreateInput> | MaterialCreateInput[]
    gradingPolicy?: XOR<GradingPolicyUpdateEnvelopeInput, GradingPolicyCreateInput>
    policies?: XOR<PoliciesUpdateEnvelopeInput, PoliciesCreateInput>
    weeklySchedule?: XOR<WeeklyScheduleListUpdateEnvelopeInput, WeeklyScheduleCreateInput> | WeeklyScheduleCreateInput[]
    user?: UserUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseTitle?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    learningObjectives?: CourseUpdatelearningObjectivesInput | string[]
    requiredMaterials?: XOR<MaterialListUpdateEnvelopeInput, MaterialCreateInput> | MaterialCreateInput[]
    gradingPolicy?: XOR<GradingPolicyUpdateEnvelopeInput, GradingPolicyCreateInput>
    policies?: XOR<PoliciesUpdateEnvelopeInput, PoliciesCreateInput>
    weeklySchedule?: XOR<WeeklyScheduleListUpdateEnvelopeInput, WeeklyScheduleCreateInput> | WeeklyScheduleCreateInput[]
  }

  export type CourseCreateManyInput = {
    id?: string
    userId: string
    name: string
    courseTitle: string
    courseDescription: string
    description: string
    instructor: string
    subject: string
    term: string
    gradeLevel: string
    learningObjectives?: CourseCreatelearningObjectivesInput | string[]
    requiredMaterials?: XOR<MaterialListCreateEnvelopeInput, MaterialCreateInput> | MaterialCreateInput[]
    gradingPolicy: XOR<GradingPolicyCreateEnvelopeInput, GradingPolicyCreateInput>
    policies: XOR<PoliciesCreateEnvelopeInput, PoliciesCreateInput>
    weeklySchedule?: XOR<WeeklyScheduleListCreateEnvelopeInput, WeeklyScheduleCreateInput> | WeeklyScheduleCreateInput[]
  }

  export type CourseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    courseTitle?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    learningObjectives?: CourseUpdatelearningObjectivesInput | string[]
    requiredMaterials?: XOR<MaterialListUpdateEnvelopeInput, MaterialCreateInput> | MaterialCreateInput[]
    gradingPolicy?: XOR<GradingPolicyUpdateEnvelopeInput, GradingPolicyCreateInput>
    policies?: XOR<PoliciesUpdateEnvelopeInput, PoliciesCreateInput>
    weeklySchedule?: XOR<WeeklyScheduleListUpdateEnvelopeInput, WeeklyScheduleCreateInput> | WeeklyScheduleCreateInput[]
  }

  export type CourseUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseTitle?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    learningObjectives?: CourseUpdatelearningObjectivesInput | string[]
    requiredMaterials?: XOR<MaterialListUpdateEnvelopeInput, MaterialCreateInput> | MaterialCreateInput[]
    gradingPolicy?: XOR<GradingPolicyUpdateEnvelopeInput, GradingPolicyCreateInput>
    policies?: XOR<PoliciesUpdateEnvelopeInput, PoliciesCreateInput>
    weeklySchedule?: XOR<WeeklyScheduleListUpdateEnvelopeInput, WeeklyScheduleCreateInput> | WeeklyScheduleCreateInput[]
  }

  export type AssignmentCreateInput = {
    id?: string
    assignmentTitle: string
    selectedCourse: string
    dueDate: Date | string
    description: string
    learningObjectives: string
    instructions?: string | null
    rubric?: string | null
    questions?: string | null
    answer_key?: string | null
    checklist?: string | null
    participation_criteria?: string | null
    peer_evaluation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAssignmentsInput
    submission?: SubmissionCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateInput = {
    id?: string
    assignmentTitle: string
    selectedCourse: string
    dueDate: Date | string
    description: string
    learningObjectives: string
    instructions?: string | null
    rubric?: string | null
    questions?: string | null
    answer_key?: string | null
    checklist?: string | null
    participation_criteria?: string | null
    peer_evaluation?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUpdateInput = {
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    selectedCourse?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    rubric?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: NullableStringFieldUpdateOperationsInput | string | null
    answer_key?: NullableStringFieldUpdateOperationsInput | string | null
    checklist?: NullableStringFieldUpdateOperationsInput | string | null
    participation_criteria?: NullableStringFieldUpdateOperationsInput | string | null
    peer_evaluation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
    submission?: SubmissionUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    selectedCourse?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    rubric?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: NullableStringFieldUpdateOperationsInput | string | null
    answer_key?: NullableStringFieldUpdateOperationsInput | string | null
    checklist?: NullableStringFieldUpdateOperationsInput | string | null
    participation_criteria?: NullableStringFieldUpdateOperationsInput | string | null
    peer_evaluation?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentCreateManyInput = {
    id?: string
    assignmentTitle: string
    selectedCourse: string
    dueDate: Date | string
    description: string
    learningObjectives: string
    instructions?: string | null
    rubric?: string | null
    questions?: string | null
    answer_key?: string | null
    checklist?: string | null
    participation_criteria?: string | null
    peer_evaluation?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentUpdateManyMutationInput = {
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    selectedCourse?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    rubric?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: NullableStringFieldUpdateOperationsInput | string | null
    answer_key?: NullableStringFieldUpdateOperationsInput | string | null
    checklist?: NullableStringFieldUpdateOperationsInput | string | null
    participation_criteria?: NullableStringFieldUpdateOperationsInput | string | null
    peer_evaluation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyInput = {
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    selectedCourse?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    rubric?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: NullableStringFieldUpdateOperationsInput | string | null
    answer_key?: NullableStringFieldUpdateOperationsInput | string | null
    checklist?: NullableStringFieldUpdateOperationsInput | string | null
    participation_criteria?: NullableStringFieldUpdateOperationsInput | string | null
    peer_evaluation?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    name: string
    email: string
    class: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    class: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateManyInput = {
    id?: string
    name: string
    email: string
    class: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    id?: string
    assignmentTitle: string
    studentName?: string | null
    studentId?: string | null
    submissionDate?: Date | string
    status: $Enums.SubmissionStatus
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutSubmissionInput
    aiCheckerResults?: AICheckerResultsCreateNestedOneWithoutSubmissionInput
    plagiarismResults?: PlagiarismResultsCreateNestedOneWithoutSubmissionInput
    inlineComments?: InlineCommentCreateNestedManyWithoutSubmissionInput
    overallFeedback?: OverallFeedbackCreateNestedOneWithoutSubmissionInput
    subscores?: SubscoreCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    assignmentId: string
    assignmentTitle: string
    studentName?: string | null
    studentId?: string | null
    submissionDate?: Date | string
    status: $Enums.SubmissionStatus
    content: string
    aiCheckerResultsId?: string | null
    plagiarismResultsId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inlineComments?: InlineCommentUncheckedCreateNestedManyWithoutSubmissionInput
    overallFeedback?: OverallFeedbackUncheckedCreateNestedOneWithoutSubmissionInput
    subscores?: SubscoreUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUpdateInput = {
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionNestedInput
    aiCheckerResults?: AICheckerResultsUpdateOneWithoutSubmissionNestedInput
    plagiarismResults?: PlagiarismResultsUpdateOneWithoutSubmissionNestedInput
    inlineComments?: InlineCommentUpdateManyWithoutSubmissionNestedInput
    overallFeedback?: OverallFeedbackUpdateOneWithoutSubmissionNestedInput
    subscores?: SubscoreUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    content?: StringFieldUpdateOperationsInput | string
    aiCheckerResultsId?: NullableStringFieldUpdateOperationsInput | string | null
    plagiarismResultsId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inlineComments?: InlineCommentUncheckedUpdateManyWithoutSubmissionNestedInput
    overallFeedback?: OverallFeedbackUncheckedUpdateOneWithoutSubmissionNestedInput
    subscores?: SubscoreUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionCreateManyInput = {
    id?: string
    assignmentId: string
    assignmentTitle: string
    studentName?: string | null
    studentId?: string | null
    submissionDate?: Date | string
    status: $Enums.SubmissionStatus
    content: string
    aiCheckerResultsId?: string | null
    plagiarismResultsId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateManyMutationInput = {
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    content?: StringFieldUpdateOperationsInput | string
    aiCheckerResultsId?: NullableStringFieldUpdateOperationsInput | string | null
    plagiarismResultsId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AICheckerResultsCreateInput = {
    id?: string
    score: number
    confidence: $Enums.ConfidenceLevel
    details?: AIDetailCreateNestedManyWithoutAiCheckerResultsInput
    submission?: SubmissionCreateNestedOneWithoutAiCheckerResultsInput
  }

  export type AICheckerResultsUncheckedCreateInput = {
    id?: string
    score: number
    confidence: $Enums.ConfidenceLevel
    details?: AIDetailUncheckedCreateNestedManyWithoutAiCheckerResultsInput
    submission?: SubmissionUncheckedCreateNestedOneWithoutAiCheckerResultsInput
  }

  export type AICheckerResultsUpdateInput = {
    score?: IntFieldUpdateOperationsInput | number
    confidence?: EnumConfidenceLevelFieldUpdateOperationsInput | $Enums.ConfidenceLevel
    details?: AIDetailUpdateManyWithoutAiCheckerResultsNestedInput
    submission?: SubmissionUpdateOneWithoutAiCheckerResultsNestedInput
  }

  export type AICheckerResultsUncheckedUpdateInput = {
    score?: IntFieldUpdateOperationsInput | number
    confidence?: EnumConfidenceLevelFieldUpdateOperationsInput | $Enums.ConfidenceLevel
    details?: AIDetailUncheckedUpdateManyWithoutAiCheckerResultsNestedInput
    submission?: SubmissionUncheckedUpdateOneWithoutAiCheckerResultsNestedInput
  }

  export type AICheckerResultsCreateManyInput = {
    id?: string
    score: number
    confidence: $Enums.ConfidenceLevel
  }

  export type AICheckerResultsUpdateManyMutationInput = {
    score?: IntFieldUpdateOperationsInput | number
    confidence?: EnumConfidenceLevelFieldUpdateOperationsInput | $Enums.ConfidenceLevel
  }

  export type AICheckerResultsUncheckedUpdateManyInput = {
    score?: IntFieldUpdateOperationsInput | number
    confidence?: EnumConfidenceLevelFieldUpdateOperationsInput | $Enums.ConfidenceLevel
  }

  export type AIDetailCreateInput = {
    id?: string
    section: string
    aiProbability: number
    humanProbability: number
    aiCheckerResults: AICheckerResultsCreateNestedOneWithoutDetailsInput
  }

  export type AIDetailUncheckedCreateInput = {
    id?: string
    section: string
    aiProbability: number
    humanProbability: number
    aiCheckerResultsId: string
  }

  export type AIDetailUpdateInput = {
    section?: StringFieldUpdateOperationsInput | string
    aiProbability?: FloatFieldUpdateOperationsInput | number
    humanProbability?: FloatFieldUpdateOperationsInput | number
    aiCheckerResults?: AICheckerResultsUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type AIDetailUncheckedUpdateInput = {
    section?: StringFieldUpdateOperationsInput | string
    aiProbability?: FloatFieldUpdateOperationsInput | number
    humanProbability?: FloatFieldUpdateOperationsInput | number
    aiCheckerResultsId?: StringFieldUpdateOperationsInput | string
  }

  export type AIDetailCreateManyInput = {
    id?: string
    section: string
    aiProbability: number
    humanProbability: number
    aiCheckerResultsId: string
  }

  export type AIDetailUpdateManyMutationInput = {
    section?: StringFieldUpdateOperationsInput | string
    aiProbability?: FloatFieldUpdateOperationsInput | number
    humanProbability?: FloatFieldUpdateOperationsInput | number
  }

  export type AIDetailUncheckedUpdateManyInput = {
    section?: StringFieldUpdateOperationsInput | string
    aiProbability?: FloatFieldUpdateOperationsInput | number
    humanProbability?: FloatFieldUpdateOperationsInput | number
    aiCheckerResultsId?: StringFieldUpdateOperationsInput | string
  }

  export type PlagiarismResultsCreateInput = {
    id?: string
    score: number
    matches?: PlagiarismMatchCreateNestedManyWithoutPlagiarismResultsInput
    submission?: SubmissionCreateNestedOneWithoutPlagiarismResultsInput
  }

  export type PlagiarismResultsUncheckedCreateInput = {
    id?: string
    score: number
    matches?: PlagiarismMatchUncheckedCreateNestedManyWithoutPlagiarismResultsInput
    submission?: SubmissionUncheckedCreateNestedOneWithoutPlagiarismResultsInput
  }

  export type PlagiarismResultsUpdateInput = {
    score?: IntFieldUpdateOperationsInput | number
    matches?: PlagiarismMatchUpdateManyWithoutPlagiarismResultsNestedInput
    submission?: SubmissionUpdateOneWithoutPlagiarismResultsNestedInput
  }

  export type PlagiarismResultsUncheckedUpdateInput = {
    score?: IntFieldUpdateOperationsInput | number
    matches?: PlagiarismMatchUncheckedUpdateManyWithoutPlagiarismResultsNestedInput
    submission?: SubmissionUncheckedUpdateOneWithoutPlagiarismResultsNestedInput
  }

  export type PlagiarismResultsCreateManyInput = {
    id?: string
    score: number
  }

  export type PlagiarismResultsUpdateManyMutationInput = {
    score?: IntFieldUpdateOperationsInput | number
  }

  export type PlagiarismResultsUncheckedUpdateManyInput = {
    score?: IntFieldUpdateOperationsInput | number
  }

  export type PlagiarismMatchCreateInput = {
    id?: string
    test: string
    source: string
    similarity: number
    plagiarismResults: PlagiarismResultsCreateNestedOneWithoutMatchesInput
  }

  export type PlagiarismMatchUncheckedCreateInput = {
    id?: string
    test: string
    source: string
    similarity: number
    plagiarismResultsId: string
  }

  export type PlagiarismMatchUpdateInput = {
    test?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    similarity?: FloatFieldUpdateOperationsInput | number
    plagiarismResults?: PlagiarismResultsUpdateOneRequiredWithoutMatchesNestedInput
  }

  export type PlagiarismMatchUncheckedUpdateInput = {
    test?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    similarity?: FloatFieldUpdateOperationsInput | number
    plagiarismResultsId?: StringFieldUpdateOperationsInput | string
  }

  export type PlagiarismMatchCreateManyInput = {
    id?: string
    test: string
    source: string
    similarity: number
    plagiarismResultsId: string
  }

  export type PlagiarismMatchUpdateManyMutationInput = {
    test?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    similarity?: FloatFieldUpdateOperationsInput | number
  }

  export type PlagiarismMatchUncheckedUpdateManyInput = {
    test?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    similarity?: FloatFieldUpdateOperationsInput | number
    plagiarismResultsId?: StringFieldUpdateOperationsInput | string
  }

  export type InlineCommentCreateInput = {
    id?: string
    startIndex: number
    endIndex: number
    text: string
    color: string
    timeStamp: Date | string
    author: UserCreateNestedOneWithoutInlineCommentsInput
    submission: SubmissionCreateNestedOneWithoutInlineCommentsInput
  }

  export type InlineCommentUncheckedCreateInput = {
    id?: string
    startIndex: number
    endIndex: number
    text: string
    color: string
    timeStamp: Date | string
    authorId: string
    submissionId: string
  }

  export type InlineCommentUpdateInput = {
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutInlineCommentsNestedInput
    submission?: SubmissionUpdateOneRequiredWithoutInlineCommentsNestedInput
  }

  export type InlineCommentUncheckedUpdateInput = {
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
  }

  export type InlineCommentCreateManyInput = {
    id?: string
    startIndex: number
    endIndex: number
    text: string
    color: string
    timeStamp: Date | string
    authorId: string
    submissionId: string
  }

  export type InlineCommentUpdateManyMutationInput = {
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InlineCommentUncheckedUpdateManyInput = {
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
  }

  export type OverallFeedbackCreateInput = {
    id?: string
    strengths: string
    improvements: string
    actionItems: string
    submission: SubmissionCreateNestedOneWithoutOverallFeedbackInput
  }

  export type OverallFeedbackUncheckedCreateInput = {
    id?: string
    strengths: string
    improvements: string
    actionItems: string
    submissionId: string
  }

  export type OverallFeedbackUpdateInput = {
    strengths?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    actionItems?: StringFieldUpdateOperationsInput | string
    submission?: SubmissionUpdateOneRequiredWithoutOverallFeedbackNestedInput
  }

  export type OverallFeedbackUncheckedUpdateInput = {
    strengths?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    actionItems?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
  }

  export type OverallFeedbackCreateManyInput = {
    id?: string
    strengths: string
    improvements: string
    actionItems: string
    submissionId: string
  }

  export type OverallFeedbackUpdateManyMutationInput = {
    strengths?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    actionItems?: StringFieldUpdateOperationsInput | string
  }

  export type OverallFeedbackUncheckedUpdateManyInput = {
    strengths?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    actionItems?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
  }

  export type SubscoreCreateInput = {
    id?: string
    name: string
    score: number
    maxScore: number
    rationale: string
    submission: SubmissionCreateNestedOneWithoutSubscoresInput
  }

  export type SubscoreUncheckedCreateInput = {
    id?: string
    name: string
    score: number
    maxScore: number
    rationale: string
    submissionId: string
  }

  export type SubscoreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    maxScore?: FloatFieldUpdateOperationsInput | number
    rationale?: StringFieldUpdateOperationsInput | string
    submission?: SubmissionUpdateOneRequiredWithoutSubscoresNestedInput
  }

  export type SubscoreUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    maxScore?: FloatFieldUpdateOperationsInput | number
    rationale?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
  }

  export type SubscoreCreateManyInput = {
    id?: string
    name: string
    score: number
    maxScore: number
    rationale: string
    submissionId: string
  }

  export type SubscoreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    maxScore?: FloatFieldUpdateOperationsInput | number
    rationale?: StringFieldUpdateOperationsInput | string
  }

  export type SubscoreUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    maxScore?: FloatFieldUpdateOperationsInput | number
    rationale?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type EnumSubsciptionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubsciptionType | EnumSubsciptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubsciptionType[] | ListEnumSubsciptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubsciptionType[] | ListEnumSubsciptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubsciptionTypeFilter<$PrismaModel> | $Enums.SubsciptionType
  }

  export type PaymentsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    payment_status?: SortOrder
    subscription_type?: SortOrder
  }

  export type PaymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    payment_status?: SortOrder
    subscription_type?: SortOrder
  }

  export type PaymentsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    payment_status?: SortOrder
    subscription_type?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumSubsciptionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubsciptionType | EnumSubsciptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubsciptionType[] | ListEnumSubsciptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubsciptionType[] | ListEnumSubsciptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubsciptionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubsciptionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubsciptionTypeFilter<$PrismaModel>
    _max?: NestedEnumSubsciptionTypeFilter<$PrismaModel>
  }

  export type EnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type InlineCommentListRelationFilter = {
    every?: InlineCommentWhereInput
    some?: InlineCommentWhereInput
    none?: InlineCommentWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InlineCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    hashed_password?: SortOrder
    provider?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    hashed_password?: SortOrder
    provider?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    hashed_password?: SortOrder
    provider?: SortOrder
  }

  export type EnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MaterialCompositeListFilter = {
    equals?: MaterialObjectEqualityInput[]
    every?: MaterialWhereInput
    some?: MaterialWhereInput
    none?: MaterialWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type MaterialObjectEqualityInput = {
    title: string
    author: string
    publisher: string
    year: string
    required: boolean
  }

  export type GradingPolicyCompositeFilter = {
    equals?: GradingPolicyObjectEqualityInput
    is?: GradingPolicyWhereInput
    isNot?: GradingPolicyWhereInput
  }

  export type GradingPolicyObjectEqualityInput = {
    assignments: GradingComponentObjectEqualityInput
    midterm: GradingComponentObjectEqualityInput
    finalExam: GradingComponentObjectEqualityInput
    participation: GradingComponentObjectEqualityInput
  }

  export type PoliciesCompositeFilter = {
    equals?: PoliciesObjectEqualityInput
    is?: PoliciesWhereInput
    isNot?: PoliciesWhereInput
  }

  export type PoliciesObjectEqualityInput = {
    attendance: string
    lateWork: string
    academicIntegrity: string
    accommodations: string
  }

  export type WeeklyScheduleCompositeListFilter = {
    equals?: WeeklyScheduleObjectEqualityInput[]
    every?: WeeklyScheduleWhereInput
    some?: WeeklyScheduleWhereInput
    none?: WeeklyScheduleWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type WeeklyScheduleObjectEqualityInput = {
    week: number
    topic: string
    readings: string
    assignments: string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MaterialOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type GradingPolicyOrderByInput = {
    assignments?: GradingComponentOrderByInput
    midterm?: GradingComponentOrderByInput
    finalExam?: GradingComponentOrderByInput
    participation?: GradingComponentOrderByInput
  }

  export type PoliciesOrderByInput = {
    attendance?: SortOrder
    lateWork?: SortOrder
    academicIntegrity?: SortOrder
    accommodations?: SortOrder
  }

  export type WeeklyScheduleOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    courseTitle?: SortOrder
    courseDescription?: SortOrder
    description?: SortOrder
    instructor?: SortOrder
    subject?: SortOrder
    term?: SortOrder
    gradeLevel?: SortOrder
    learningObjectives?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    courseTitle?: SortOrder
    courseDescription?: SortOrder
    description?: SortOrder
    instructor?: SortOrder
    subject?: SortOrder
    term?: SortOrder
    gradeLevel?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    courseTitle?: SortOrder
    courseDescription?: SortOrder
    description?: SortOrder
    instructor?: SortOrder
    subject?: SortOrder
    term?: SortOrder
    gradeLevel?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    assignmentTitle?: SortOrder
    selectedCourse?: SortOrder
    dueDate?: SortOrder
    description?: SortOrder
    learningObjectives?: SortOrder
    instructions?: SortOrder
    rubric?: SortOrder
    questions?: SortOrder
    answer_key?: SortOrder
    checklist?: SortOrder
    participation_criteria?: SortOrder
    peer_evaluation?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    assignmentTitle?: SortOrder
    selectedCourse?: SortOrder
    dueDate?: SortOrder
    description?: SortOrder
    learningObjectives?: SortOrder
    instructions?: SortOrder
    rubric?: SortOrder
    questions?: SortOrder
    answer_key?: SortOrder
    checklist?: SortOrder
    participation_criteria?: SortOrder
    peer_evaluation?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    assignmentTitle?: SortOrder
    selectedCourse?: SortOrder
    dueDate?: SortOrder
    description?: SortOrder
    learningObjectives?: SortOrder
    instructions?: SortOrder
    rubric?: SortOrder
    questions?: SortOrder
    answer_key?: SortOrder
    checklist?: SortOrder
    participation_criteria?: SortOrder
    peer_evaluation?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    class?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    class?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    class?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type AssignmentScalarRelationFilter = {
    is?: AssignmentWhereInput
    isNot?: AssignmentWhereInput
  }

  export type AICheckerResultsNullableScalarRelationFilter = {
    is?: AICheckerResultsWhereInput | null
    isNot?: AICheckerResultsWhereInput | null
  }

  export type PlagiarismResultsNullableScalarRelationFilter = {
    is?: PlagiarismResultsWhereInput | null
    isNot?: PlagiarismResultsWhereInput | null
  }

  export type OverallFeedbackNullableScalarRelationFilter = {
    is?: OverallFeedbackWhereInput | null
    isNot?: OverallFeedbackWhereInput | null
  }

  export type SubscoreListRelationFilter = {
    every?: SubscoreWhereInput
    some?: SubscoreWhereInput
    none?: SubscoreWhereInput
  }

  export type SubscoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    assignmentTitle?: SortOrder
    studentName?: SortOrder
    studentId?: SortOrder
    submissionDate?: SortOrder
    status?: SortOrder
    content?: SortOrder
    aiCheckerResultsId?: SortOrder
    plagiarismResultsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    assignmentTitle?: SortOrder
    studentName?: SortOrder
    studentId?: SortOrder
    submissionDate?: SortOrder
    status?: SortOrder
    content?: SortOrder
    aiCheckerResultsId?: SortOrder
    plagiarismResultsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    assignmentTitle?: SortOrder
    studentName?: SortOrder
    studentId?: SortOrder
    submissionDate?: SortOrder
    status?: SortOrder
    content?: SortOrder
    aiCheckerResultsId?: SortOrder
    plagiarismResultsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumConfidenceLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ConfidenceLevel | EnumConfidenceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ConfidenceLevel[] | ListEnumConfidenceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConfidenceLevel[] | ListEnumConfidenceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumConfidenceLevelFilter<$PrismaModel> | $Enums.ConfidenceLevel
  }

  export type AIDetailListRelationFilter = {
    every?: AIDetailWhereInput
    some?: AIDetailWhereInput
    none?: AIDetailWhereInput
  }

  export type SubmissionNullableScalarRelationFilter = {
    is?: SubmissionWhereInput | null
    isNot?: SubmissionWhereInput | null
  }

  export type AIDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AICheckerResultsCountOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    confidence?: SortOrder
  }

  export type AICheckerResultsAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type AICheckerResultsMaxOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    confidence?: SortOrder
  }

  export type AICheckerResultsMinOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    confidence?: SortOrder
  }

  export type AICheckerResultsSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumConfidenceLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConfidenceLevel | EnumConfidenceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ConfidenceLevel[] | ListEnumConfidenceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConfidenceLevel[] | ListEnumConfidenceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumConfidenceLevelWithAggregatesFilter<$PrismaModel> | $Enums.ConfidenceLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConfidenceLevelFilter<$PrismaModel>
    _max?: NestedEnumConfidenceLevelFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AICheckerResultsScalarRelationFilter = {
    is?: AICheckerResultsWhereInput
    isNot?: AICheckerResultsWhereInput
  }

  export type AIDetailCountOrderByAggregateInput = {
    id?: SortOrder
    section?: SortOrder
    aiProbability?: SortOrder
    humanProbability?: SortOrder
    aiCheckerResultsId?: SortOrder
  }

  export type AIDetailAvgOrderByAggregateInput = {
    aiProbability?: SortOrder
    humanProbability?: SortOrder
  }

  export type AIDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    section?: SortOrder
    aiProbability?: SortOrder
    humanProbability?: SortOrder
    aiCheckerResultsId?: SortOrder
  }

  export type AIDetailMinOrderByAggregateInput = {
    id?: SortOrder
    section?: SortOrder
    aiProbability?: SortOrder
    humanProbability?: SortOrder
    aiCheckerResultsId?: SortOrder
  }

  export type AIDetailSumOrderByAggregateInput = {
    aiProbability?: SortOrder
    humanProbability?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PlagiarismMatchListRelationFilter = {
    every?: PlagiarismMatchWhereInput
    some?: PlagiarismMatchWhereInput
    none?: PlagiarismMatchWhereInput
  }

  export type PlagiarismMatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlagiarismResultsCountOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type PlagiarismResultsAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type PlagiarismResultsMaxOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type PlagiarismResultsMinOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type PlagiarismResultsSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type PlagiarismResultsScalarRelationFilter = {
    is?: PlagiarismResultsWhereInput
    isNot?: PlagiarismResultsWhereInput
  }

  export type PlagiarismMatchCountOrderByAggregateInput = {
    id?: SortOrder
    test?: SortOrder
    source?: SortOrder
    similarity?: SortOrder
    plagiarismResultsId?: SortOrder
  }

  export type PlagiarismMatchAvgOrderByAggregateInput = {
    similarity?: SortOrder
  }

  export type PlagiarismMatchMaxOrderByAggregateInput = {
    id?: SortOrder
    test?: SortOrder
    source?: SortOrder
    similarity?: SortOrder
    plagiarismResultsId?: SortOrder
  }

  export type PlagiarismMatchMinOrderByAggregateInput = {
    id?: SortOrder
    test?: SortOrder
    source?: SortOrder
    similarity?: SortOrder
    plagiarismResultsId?: SortOrder
  }

  export type PlagiarismMatchSumOrderByAggregateInput = {
    similarity?: SortOrder
  }

  export type SubmissionScalarRelationFilter = {
    is?: SubmissionWhereInput
    isNot?: SubmissionWhereInput
  }

  export type InlineCommentCountOrderByAggregateInput = {
    id?: SortOrder
    startIndex?: SortOrder
    endIndex?: SortOrder
    text?: SortOrder
    color?: SortOrder
    timeStamp?: SortOrder
    authorId?: SortOrder
    submissionId?: SortOrder
  }

  export type InlineCommentAvgOrderByAggregateInput = {
    startIndex?: SortOrder
    endIndex?: SortOrder
  }

  export type InlineCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    startIndex?: SortOrder
    endIndex?: SortOrder
    text?: SortOrder
    color?: SortOrder
    timeStamp?: SortOrder
    authorId?: SortOrder
    submissionId?: SortOrder
  }

  export type InlineCommentMinOrderByAggregateInput = {
    id?: SortOrder
    startIndex?: SortOrder
    endIndex?: SortOrder
    text?: SortOrder
    color?: SortOrder
    timeStamp?: SortOrder
    authorId?: SortOrder
    submissionId?: SortOrder
  }

  export type InlineCommentSumOrderByAggregateInput = {
    startIndex?: SortOrder
    endIndex?: SortOrder
  }

  export type OverallFeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    strengths?: SortOrder
    improvements?: SortOrder
    actionItems?: SortOrder
    submissionId?: SortOrder
  }

  export type OverallFeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    strengths?: SortOrder
    improvements?: SortOrder
    actionItems?: SortOrder
    submissionId?: SortOrder
  }

  export type OverallFeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    strengths?: SortOrder
    improvements?: SortOrder
    actionItems?: SortOrder
    submissionId?: SortOrder
  }

  export type SubscoreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    rationale?: SortOrder
    submissionId?: SortOrder
  }

  export type SubscoreAvgOrderByAggregateInput = {
    score?: SortOrder
    maxScore?: SortOrder
  }

  export type SubscoreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    rationale?: SortOrder
    submissionId?: SortOrder
  }

  export type SubscoreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    rationale?: SortOrder
    submissionId?: SortOrder
  }

  export type SubscoreSumOrderByAggregateInput = {
    score?: SortOrder
    maxScore?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type EnumSubsciptionTypeFieldUpdateOperationsInput = {
    set?: $Enums.SubsciptionType
  }

  export type CourseCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput> | CourseCreateWithoutUserInput[] | CourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUserInput | CourseCreateOrConnectWithoutUserInput[]
    createMany?: CourseCreateManyUserInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput> | AssignmentCreateWithoutUserInput[] | AssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutUserInput | AssignmentCreateOrConnectWithoutUserInput[]
    createMany?: AssignmentCreateManyUserInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput> | StudentCreateWithoutUserInput[] | StudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput | StudentCreateOrConnectWithoutUserInput[]
    createMany?: StudentCreateManyUserInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type InlineCommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<InlineCommentCreateWithoutAuthorInput, InlineCommentUncheckedCreateWithoutAuthorInput> | InlineCommentCreateWithoutAuthorInput[] | InlineCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: InlineCommentCreateOrConnectWithoutAuthorInput | InlineCommentCreateOrConnectWithoutAuthorInput[]
    createMany?: InlineCommentCreateManyAuthorInputEnvelope
    connect?: InlineCommentWhereUniqueInput | InlineCommentWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput> | CourseCreateWithoutUserInput[] | CourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUserInput | CourseCreateOrConnectWithoutUserInput[]
    createMany?: CourseCreateManyUserInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput> | AssignmentCreateWithoutUserInput[] | AssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutUserInput | AssignmentCreateOrConnectWithoutUserInput[]
    createMany?: AssignmentCreateManyUserInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput> | StudentCreateWithoutUserInput[] | StudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput | StudentCreateOrConnectWithoutUserInput[]
    createMany?: StudentCreateManyUserInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type InlineCommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<InlineCommentCreateWithoutAuthorInput, InlineCommentUncheckedCreateWithoutAuthorInput> | InlineCommentCreateWithoutAuthorInput[] | InlineCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: InlineCommentCreateOrConnectWithoutAuthorInput | InlineCommentCreateOrConnectWithoutAuthorInput[]
    createMany?: InlineCommentCreateManyAuthorInputEnvelope
    connect?: InlineCommentWhereUniqueInput | InlineCommentWhereUniqueInput[]
  }

  export type EnumProviderFieldUpdateOperationsInput = {
    set?: $Enums.Provider
  }

  export type CourseUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput> | CourseCreateWithoutUserInput[] | CourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUserInput | CourseCreateOrConnectWithoutUserInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutUserInput | CourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseCreateManyUserInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutUserInput | CourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutUserInput | CourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput> | AssignmentCreateWithoutUserInput[] | AssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutUserInput | AssignmentCreateOrConnectWithoutUserInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutUserInput | AssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssignmentCreateManyUserInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutUserInput | AssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutUserInput | AssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput> | StudentCreateWithoutUserInput[] | StudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput | StudentCreateOrConnectWithoutUserInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutUserInput | StudentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudentCreateManyUserInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutUserInput | StudentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutUserInput | StudentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type InlineCommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<InlineCommentCreateWithoutAuthorInput, InlineCommentUncheckedCreateWithoutAuthorInput> | InlineCommentCreateWithoutAuthorInput[] | InlineCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: InlineCommentCreateOrConnectWithoutAuthorInput | InlineCommentCreateOrConnectWithoutAuthorInput[]
    upsert?: InlineCommentUpsertWithWhereUniqueWithoutAuthorInput | InlineCommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: InlineCommentCreateManyAuthorInputEnvelope
    set?: InlineCommentWhereUniqueInput | InlineCommentWhereUniqueInput[]
    disconnect?: InlineCommentWhereUniqueInput | InlineCommentWhereUniqueInput[]
    delete?: InlineCommentWhereUniqueInput | InlineCommentWhereUniqueInput[]
    connect?: InlineCommentWhereUniqueInput | InlineCommentWhereUniqueInput[]
    update?: InlineCommentUpdateWithWhereUniqueWithoutAuthorInput | InlineCommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: InlineCommentUpdateManyWithWhereWithoutAuthorInput | InlineCommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: InlineCommentScalarWhereInput | InlineCommentScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput> | CourseCreateWithoutUserInput[] | CourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUserInput | CourseCreateOrConnectWithoutUserInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutUserInput | CourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseCreateManyUserInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutUserInput | CourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutUserInput | CourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput> | AssignmentCreateWithoutUserInput[] | AssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutUserInput | AssignmentCreateOrConnectWithoutUserInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutUserInput | AssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssignmentCreateManyUserInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutUserInput | AssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutUserInput | AssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput> | StudentCreateWithoutUserInput[] | StudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput | StudentCreateOrConnectWithoutUserInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutUserInput | StudentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudentCreateManyUserInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutUserInput | StudentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutUserInput | StudentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type InlineCommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<InlineCommentCreateWithoutAuthorInput, InlineCommentUncheckedCreateWithoutAuthorInput> | InlineCommentCreateWithoutAuthorInput[] | InlineCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: InlineCommentCreateOrConnectWithoutAuthorInput | InlineCommentCreateOrConnectWithoutAuthorInput[]
    upsert?: InlineCommentUpsertWithWhereUniqueWithoutAuthorInput | InlineCommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: InlineCommentCreateManyAuthorInputEnvelope
    set?: InlineCommentWhereUniqueInput | InlineCommentWhereUniqueInput[]
    disconnect?: InlineCommentWhereUniqueInput | InlineCommentWhereUniqueInput[]
    delete?: InlineCommentWhereUniqueInput | InlineCommentWhereUniqueInput[]
    connect?: InlineCommentWhereUniqueInput | InlineCommentWhereUniqueInput[]
    update?: InlineCommentUpdateWithWhereUniqueWithoutAuthorInput | InlineCommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: InlineCommentUpdateManyWithWhereWithoutAuthorInput | InlineCommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: InlineCommentScalarWhereInput | InlineCommentScalarWhereInput[]
  }

  export type CourseCreatelearningObjectivesInput = {
    set: string[]
  }

  export type MaterialListCreateEnvelopeInput = {
    set?: MaterialCreateInput | MaterialCreateInput[]
  }

  export type MaterialCreateInput = {
    title: string
    author: string
    publisher: string
    year: string
    required: boolean
  }

  export type GradingPolicyCreateEnvelopeInput = {
    set?: GradingPolicyCreateInput
  }

  export type GradingPolicyCreateInput = {
    assignments: GradingComponentCreateInput
    midterm: GradingComponentCreateInput
    finalExam: GradingComponentCreateInput
    participation: GradingComponentCreateInput
  }

  export type PoliciesCreateEnvelopeInput = {
    set?: PoliciesCreateInput
  }

  export type PoliciesCreateInput = {
    attendance: string
    lateWork: string
    academicIntegrity: string
    accommodations: string
  }

  export type WeeklyScheduleListCreateEnvelopeInput = {
    set?: WeeklyScheduleCreateInput | WeeklyScheduleCreateInput[]
  }

  export type WeeklyScheduleCreateInput = {
    week: number
    topic: string
    readings: string
    assignments: string
  }

  export type UserCreateNestedOneWithoutCoursesInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type CourseUpdatelearningObjectivesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MaterialListUpdateEnvelopeInput = {
    set?: MaterialCreateInput | MaterialCreateInput[]
    push?: MaterialCreateInput | MaterialCreateInput[]
    updateMany?: MaterialUpdateManyInput
    deleteMany?: MaterialDeleteManyInput
  }

  export type GradingPolicyUpdateEnvelopeInput = {
    set?: GradingPolicyCreateInput
    update?: GradingPolicyUpdateInput
  }

  export type PoliciesUpdateEnvelopeInput = {
    set?: PoliciesCreateInput
    update?: PoliciesUpdateInput
  }

  export type WeeklyScheduleListUpdateEnvelopeInput = {
    set?: WeeklyScheduleCreateInput | WeeklyScheduleCreateInput[]
    push?: WeeklyScheduleCreateInput | WeeklyScheduleCreateInput[]
    updateMany?: WeeklyScheduleUpdateManyInput
    deleteMany?: WeeklyScheduleDeleteManyInput
  }

  export type UserUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    upsert?: UserUpsertWithoutCoursesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoursesInput, UserUpdateWithoutCoursesInput>, UserUncheckedUpdateWithoutCoursesInput>
  }

  export type UserCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput> | SubmissionCreateWithoutAssignmentInput[] | SubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutAssignmentInput | SubmissionCreateOrConnectWithoutAssignmentInput[]
    createMany?: SubmissionCreateManyAssignmentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput> | SubmissionCreateWithoutAssignmentInput[] | SubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutAssignmentInput | SubmissionCreateOrConnectWithoutAssignmentInput[]
    createMany?: SubmissionCreateManyAssignmentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    upsert?: UserUpsertWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignmentsInput, UserUpdateWithoutAssignmentsInput>, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type SubmissionUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput> | SubmissionCreateWithoutAssignmentInput[] | SubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutAssignmentInput | SubmissionCreateOrConnectWithoutAssignmentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutAssignmentInput | SubmissionUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: SubmissionCreateManyAssignmentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutAssignmentInput | SubmissionUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutAssignmentInput | SubmissionUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput> | SubmissionCreateWithoutAssignmentInput[] | SubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutAssignmentInput | SubmissionCreateOrConnectWithoutAssignmentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutAssignmentInput | SubmissionUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: SubmissionCreateManyAssignmentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutAssignmentInput | SubmissionUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutAssignmentInput | SubmissionUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStudentsInput = {
    create?: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentsInput
    upsert?: UserUpsertWithoutStudentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentsInput, UserUpdateWithoutStudentsInput>, UserUncheckedUpdateWithoutStudentsInput>
  }

  export type AssignmentCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<AssignmentCreateWithoutSubmissionInput, AssignmentUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubmissionInput
    connect?: AssignmentWhereUniqueInput
  }

  export type AICheckerResultsCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<AICheckerResultsCreateWithoutSubmissionInput, AICheckerResultsUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: AICheckerResultsCreateOrConnectWithoutSubmissionInput
    connect?: AICheckerResultsWhereUniqueInput
  }

  export type PlagiarismResultsCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<PlagiarismResultsCreateWithoutSubmissionInput, PlagiarismResultsUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: PlagiarismResultsCreateOrConnectWithoutSubmissionInput
    connect?: PlagiarismResultsWhereUniqueInput
  }

  export type InlineCommentCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<InlineCommentCreateWithoutSubmissionInput, InlineCommentUncheckedCreateWithoutSubmissionInput> | InlineCommentCreateWithoutSubmissionInput[] | InlineCommentUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: InlineCommentCreateOrConnectWithoutSubmissionInput | InlineCommentCreateOrConnectWithoutSubmissionInput[]
    createMany?: InlineCommentCreateManySubmissionInputEnvelope
    connect?: InlineCommentWhereUniqueInput | InlineCommentWhereUniqueInput[]
  }

  export type OverallFeedbackCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<OverallFeedbackCreateWithoutSubmissionInput, OverallFeedbackUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: OverallFeedbackCreateOrConnectWithoutSubmissionInput
    connect?: OverallFeedbackWhereUniqueInput
  }

  export type SubscoreCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<SubscoreCreateWithoutSubmissionInput, SubscoreUncheckedCreateWithoutSubmissionInput> | SubscoreCreateWithoutSubmissionInput[] | SubscoreUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: SubscoreCreateOrConnectWithoutSubmissionInput | SubscoreCreateOrConnectWithoutSubmissionInput[]
    createMany?: SubscoreCreateManySubmissionInputEnvelope
    connect?: SubscoreWhereUniqueInput | SubscoreWhereUniqueInput[]
  }

  export type InlineCommentUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<InlineCommentCreateWithoutSubmissionInput, InlineCommentUncheckedCreateWithoutSubmissionInput> | InlineCommentCreateWithoutSubmissionInput[] | InlineCommentUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: InlineCommentCreateOrConnectWithoutSubmissionInput | InlineCommentCreateOrConnectWithoutSubmissionInput[]
    createMany?: InlineCommentCreateManySubmissionInputEnvelope
    connect?: InlineCommentWhereUniqueInput | InlineCommentWhereUniqueInput[]
  }

  export type OverallFeedbackUncheckedCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<OverallFeedbackCreateWithoutSubmissionInput, OverallFeedbackUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: OverallFeedbackCreateOrConnectWithoutSubmissionInput
    connect?: OverallFeedbackWhereUniqueInput
  }

  export type SubscoreUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<SubscoreCreateWithoutSubmissionInput, SubscoreUncheckedCreateWithoutSubmissionInput> | SubscoreCreateWithoutSubmissionInput[] | SubscoreUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: SubscoreCreateOrConnectWithoutSubmissionInput | SubscoreCreateOrConnectWithoutSubmissionInput[]
    createMany?: SubscoreCreateManySubmissionInputEnvelope
    connect?: SubscoreWhereUniqueInput | SubscoreWhereUniqueInput[]
  }

  export type EnumSubmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubmissionStatus
  }

  export type AssignmentUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<AssignmentCreateWithoutSubmissionInput, AssignmentUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubmissionInput
    upsert?: AssignmentUpsertWithoutSubmissionInput
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutSubmissionInput, AssignmentUpdateWithoutSubmissionInput>, AssignmentUncheckedUpdateWithoutSubmissionInput>
  }

  export type AICheckerResultsUpdateOneWithoutSubmissionNestedInput = {
    create?: XOR<AICheckerResultsCreateWithoutSubmissionInput, AICheckerResultsUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: AICheckerResultsCreateOrConnectWithoutSubmissionInput
    upsert?: AICheckerResultsUpsertWithoutSubmissionInput
    disconnect?: boolean
    delete?: AICheckerResultsWhereInput | boolean
    connect?: AICheckerResultsWhereUniqueInput
    update?: XOR<XOR<AICheckerResultsUpdateToOneWithWhereWithoutSubmissionInput, AICheckerResultsUpdateWithoutSubmissionInput>, AICheckerResultsUncheckedUpdateWithoutSubmissionInput>
  }

  export type PlagiarismResultsUpdateOneWithoutSubmissionNestedInput = {
    create?: XOR<PlagiarismResultsCreateWithoutSubmissionInput, PlagiarismResultsUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: PlagiarismResultsCreateOrConnectWithoutSubmissionInput
    upsert?: PlagiarismResultsUpsertWithoutSubmissionInput
    disconnect?: boolean
    delete?: PlagiarismResultsWhereInput | boolean
    connect?: PlagiarismResultsWhereUniqueInput
    update?: XOR<XOR<PlagiarismResultsUpdateToOneWithWhereWithoutSubmissionInput, PlagiarismResultsUpdateWithoutSubmissionInput>, PlagiarismResultsUncheckedUpdateWithoutSubmissionInput>
  }

  export type InlineCommentUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<InlineCommentCreateWithoutSubmissionInput, InlineCommentUncheckedCreateWithoutSubmissionInput> | InlineCommentCreateWithoutSubmissionInput[] | InlineCommentUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: InlineCommentCreateOrConnectWithoutSubmissionInput | InlineCommentCreateOrConnectWithoutSubmissionInput[]
    upsert?: InlineCommentUpsertWithWhereUniqueWithoutSubmissionInput | InlineCommentUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: InlineCommentCreateManySubmissionInputEnvelope
    set?: InlineCommentWhereUniqueInput | InlineCommentWhereUniqueInput[]
    disconnect?: InlineCommentWhereUniqueInput | InlineCommentWhereUniqueInput[]
    delete?: InlineCommentWhereUniqueInput | InlineCommentWhereUniqueInput[]
    connect?: InlineCommentWhereUniqueInput | InlineCommentWhereUniqueInput[]
    update?: InlineCommentUpdateWithWhereUniqueWithoutSubmissionInput | InlineCommentUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: InlineCommentUpdateManyWithWhereWithoutSubmissionInput | InlineCommentUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: InlineCommentScalarWhereInput | InlineCommentScalarWhereInput[]
  }

  export type OverallFeedbackUpdateOneWithoutSubmissionNestedInput = {
    create?: XOR<OverallFeedbackCreateWithoutSubmissionInput, OverallFeedbackUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: OverallFeedbackCreateOrConnectWithoutSubmissionInput
    upsert?: OverallFeedbackUpsertWithoutSubmissionInput
    disconnect?: OverallFeedbackWhereInput | boolean
    delete?: OverallFeedbackWhereInput | boolean
    connect?: OverallFeedbackWhereUniqueInput
    update?: XOR<XOR<OverallFeedbackUpdateToOneWithWhereWithoutSubmissionInput, OverallFeedbackUpdateWithoutSubmissionInput>, OverallFeedbackUncheckedUpdateWithoutSubmissionInput>
  }

  export type SubscoreUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<SubscoreCreateWithoutSubmissionInput, SubscoreUncheckedCreateWithoutSubmissionInput> | SubscoreCreateWithoutSubmissionInput[] | SubscoreUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: SubscoreCreateOrConnectWithoutSubmissionInput | SubscoreCreateOrConnectWithoutSubmissionInput[]
    upsert?: SubscoreUpsertWithWhereUniqueWithoutSubmissionInput | SubscoreUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: SubscoreCreateManySubmissionInputEnvelope
    set?: SubscoreWhereUniqueInput | SubscoreWhereUniqueInput[]
    disconnect?: SubscoreWhereUniqueInput | SubscoreWhereUniqueInput[]
    delete?: SubscoreWhereUniqueInput | SubscoreWhereUniqueInput[]
    connect?: SubscoreWhereUniqueInput | SubscoreWhereUniqueInput[]
    update?: SubscoreUpdateWithWhereUniqueWithoutSubmissionInput | SubscoreUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: SubscoreUpdateManyWithWhereWithoutSubmissionInput | SubscoreUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: SubscoreScalarWhereInput | SubscoreScalarWhereInput[]
  }

  export type InlineCommentUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<InlineCommentCreateWithoutSubmissionInput, InlineCommentUncheckedCreateWithoutSubmissionInput> | InlineCommentCreateWithoutSubmissionInput[] | InlineCommentUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: InlineCommentCreateOrConnectWithoutSubmissionInput | InlineCommentCreateOrConnectWithoutSubmissionInput[]
    upsert?: InlineCommentUpsertWithWhereUniqueWithoutSubmissionInput | InlineCommentUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: InlineCommentCreateManySubmissionInputEnvelope
    set?: InlineCommentWhereUniqueInput | InlineCommentWhereUniqueInput[]
    disconnect?: InlineCommentWhereUniqueInput | InlineCommentWhereUniqueInput[]
    delete?: InlineCommentWhereUniqueInput | InlineCommentWhereUniqueInput[]
    connect?: InlineCommentWhereUniqueInput | InlineCommentWhereUniqueInput[]
    update?: InlineCommentUpdateWithWhereUniqueWithoutSubmissionInput | InlineCommentUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: InlineCommentUpdateManyWithWhereWithoutSubmissionInput | InlineCommentUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: InlineCommentScalarWhereInput | InlineCommentScalarWhereInput[]
  }

  export type OverallFeedbackUncheckedUpdateOneWithoutSubmissionNestedInput = {
    create?: XOR<OverallFeedbackCreateWithoutSubmissionInput, OverallFeedbackUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: OverallFeedbackCreateOrConnectWithoutSubmissionInput
    upsert?: OverallFeedbackUpsertWithoutSubmissionInput
    disconnect?: OverallFeedbackWhereInput | boolean
    delete?: OverallFeedbackWhereInput | boolean
    connect?: OverallFeedbackWhereUniqueInput
    update?: XOR<XOR<OverallFeedbackUpdateToOneWithWhereWithoutSubmissionInput, OverallFeedbackUpdateWithoutSubmissionInput>, OverallFeedbackUncheckedUpdateWithoutSubmissionInput>
  }

  export type SubscoreUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<SubscoreCreateWithoutSubmissionInput, SubscoreUncheckedCreateWithoutSubmissionInput> | SubscoreCreateWithoutSubmissionInput[] | SubscoreUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: SubscoreCreateOrConnectWithoutSubmissionInput | SubscoreCreateOrConnectWithoutSubmissionInput[]
    upsert?: SubscoreUpsertWithWhereUniqueWithoutSubmissionInput | SubscoreUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: SubscoreCreateManySubmissionInputEnvelope
    set?: SubscoreWhereUniqueInput | SubscoreWhereUniqueInput[]
    disconnect?: SubscoreWhereUniqueInput | SubscoreWhereUniqueInput[]
    delete?: SubscoreWhereUniqueInput | SubscoreWhereUniqueInput[]
    connect?: SubscoreWhereUniqueInput | SubscoreWhereUniqueInput[]
    update?: SubscoreUpdateWithWhereUniqueWithoutSubmissionInput | SubscoreUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: SubscoreUpdateManyWithWhereWithoutSubmissionInput | SubscoreUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: SubscoreScalarWhereInput | SubscoreScalarWhereInput[]
  }

  export type AIDetailCreateNestedManyWithoutAiCheckerResultsInput = {
    create?: XOR<AIDetailCreateWithoutAiCheckerResultsInput, AIDetailUncheckedCreateWithoutAiCheckerResultsInput> | AIDetailCreateWithoutAiCheckerResultsInput[] | AIDetailUncheckedCreateWithoutAiCheckerResultsInput[]
    connectOrCreate?: AIDetailCreateOrConnectWithoutAiCheckerResultsInput | AIDetailCreateOrConnectWithoutAiCheckerResultsInput[]
    createMany?: AIDetailCreateManyAiCheckerResultsInputEnvelope
    connect?: AIDetailWhereUniqueInput | AIDetailWhereUniqueInput[]
  }

  export type SubmissionCreateNestedOneWithoutAiCheckerResultsInput = {
    create?: XOR<SubmissionCreateWithoutAiCheckerResultsInput, SubmissionUncheckedCreateWithoutAiCheckerResultsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutAiCheckerResultsInput
    connect?: SubmissionWhereUniqueInput
  }

  export type AIDetailUncheckedCreateNestedManyWithoutAiCheckerResultsInput = {
    create?: XOR<AIDetailCreateWithoutAiCheckerResultsInput, AIDetailUncheckedCreateWithoutAiCheckerResultsInput> | AIDetailCreateWithoutAiCheckerResultsInput[] | AIDetailUncheckedCreateWithoutAiCheckerResultsInput[]
    connectOrCreate?: AIDetailCreateOrConnectWithoutAiCheckerResultsInput | AIDetailCreateOrConnectWithoutAiCheckerResultsInput[]
    createMany?: AIDetailCreateManyAiCheckerResultsInputEnvelope
    connect?: AIDetailWhereUniqueInput | AIDetailWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedOneWithoutAiCheckerResultsInput = {
    create?: XOR<SubmissionCreateWithoutAiCheckerResultsInput, SubmissionUncheckedCreateWithoutAiCheckerResultsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutAiCheckerResultsInput
    connect?: SubmissionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumConfidenceLevelFieldUpdateOperationsInput = {
    set?: $Enums.ConfidenceLevel
  }

  export type AIDetailUpdateManyWithoutAiCheckerResultsNestedInput = {
    create?: XOR<AIDetailCreateWithoutAiCheckerResultsInput, AIDetailUncheckedCreateWithoutAiCheckerResultsInput> | AIDetailCreateWithoutAiCheckerResultsInput[] | AIDetailUncheckedCreateWithoutAiCheckerResultsInput[]
    connectOrCreate?: AIDetailCreateOrConnectWithoutAiCheckerResultsInput | AIDetailCreateOrConnectWithoutAiCheckerResultsInput[]
    upsert?: AIDetailUpsertWithWhereUniqueWithoutAiCheckerResultsInput | AIDetailUpsertWithWhereUniqueWithoutAiCheckerResultsInput[]
    createMany?: AIDetailCreateManyAiCheckerResultsInputEnvelope
    set?: AIDetailWhereUniqueInput | AIDetailWhereUniqueInput[]
    disconnect?: AIDetailWhereUniqueInput | AIDetailWhereUniqueInput[]
    delete?: AIDetailWhereUniqueInput | AIDetailWhereUniqueInput[]
    connect?: AIDetailWhereUniqueInput | AIDetailWhereUniqueInput[]
    update?: AIDetailUpdateWithWhereUniqueWithoutAiCheckerResultsInput | AIDetailUpdateWithWhereUniqueWithoutAiCheckerResultsInput[]
    updateMany?: AIDetailUpdateManyWithWhereWithoutAiCheckerResultsInput | AIDetailUpdateManyWithWhereWithoutAiCheckerResultsInput[]
    deleteMany?: AIDetailScalarWhereInput | AIDetailScalarWhereInput[]
  }

  export type SubmissionUpdateOneWithoutAiCheckerResultsNestedInput = {
    create?: XOR<SubmissionCreateWithoutAiCheckerResultsInput, SubmissionUncheckedCreateWithoutAiCheckerResultsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutAiCheckerResultsInput
    upsert?: SubmissionUpsertWithoutAiCheckerResultsInput
    disconnect?: SubmissionWhereInput | boolean
    delete?: SubmissionWhereInput | boolean
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutAiCheckerResultsInput, SubmissionUpdateWithoutAiCheckerResultsInput>, SubmissionUncheckedUpdateWithoutAiCheckerResultsInput>
  }

  export type AIDetailUncheckedUpdateManyWithoutAiCheckerResultsNestedInput = {
    create?: XOR<AIDetailCreateWithoutAiCheckerResultsInput, AIDetailUncheckedCreateWithoutAiCheckerResultsInput> | AIDetailCreateWithoutAiCheckerResultsInput[] | AIDetailUncheckedCreateWithoutAiCheckerResultsInput[]
    connectOrCreate?: AIDetailCreateOrConnectWithoutAiCheckerResultsInput | AIDetailCreateOrConnectWithoutAiCheckerResultsInput[]
    upsert?: AIDetailUpsertWithWhereUniqueWithoutAiCheckerResultsInput | AIDetailUpsertWithWhereUniqueWithoutAiCheckerResultsInput[]
    createMany?: AIDetailCreateManyAiCheckerResultsInputEnvelope
    set?: AIDetailWhereUniqueInput | AIDetailWhereUniqueInput[]
    disconnect?: AIDetailWhereUniqueInput | AIDetailWhereUniqueInput[]
    delete?: AIDetailWhereUniqueInput | AIDetailWhereUniqueInput[]
    connect?: AIDetailWhereUniqueInput | AIDetailWhereUniqueInput[]
    update?: AIDetailUpdateWithWhereUniqueWithoutAiCheckerResultsInput | AIDetailUpdateWithWhereUniqueWithoutAiCheckerResultsInput[]
    updateMany?: AIDetailUpdateManyWithWhereWithoutAiCheckerResultsInput | AIDetailUpdateManyWithWhereWithoutAiCheckerResultsInput[]
    deleteMany?: AIDetailScalarWhereInput | AIDetailScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateOneWithoutAiCheckerResultsNestedInput = {
    create?: XOR<SubmissionCreateWithoutAiCheckerResultsInput, SubmissionUncheckedCreateWithoutAiCheckerResultsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutAiCheckerResultsInput
    upsert?: SubmissionUpsertWithoutAiCheckerResultsInput
    disconnect?: SubmissionWhereInput | boolean
    delete?: SubmissionWhereInput | boolean
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutAiCheckerResultsInput, SubmissionUpdateWithoutAiCheckerResultsInput>, SubmissionUncheckedUpdateWithoutAiCheckerResultsInput>
  }

  export type AICheckerResultsCreateNestedOneWithoutDetailsInput = {
    create?: XOR<AICheckerResultsCreateWithoutDetailsInput, AICheckerResultsUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: AICheckerResultsCreateOrConnectWithoutDetailsInput
    connect?: AICheckerResultsWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AICheckerResultsUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<AICheckerResultsCreateWithoutDetailsInput, AICheckerResultsUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: AICheckerResultsCreateOrConnectWithoutDetailsInput
    upsert?: AICheckerResultsUpsertWithoutDetailsInput
    connect?: AICheckerResultsWhereUniqueInput
    update?: XOR<XOR<AICheckerResultsUpdateToOneWithWhereWithoutDetailsInput, AICheckerResultsUpdateWithoutDetailsInput>, AICheckerResultsUncheckedUpdateWithoutDetailsInput>
  }

  export type PlagiarismMatchCreateNestedManyWithoutPlagiarismResultsInput = {
    create?: XOR<PlagiarismMatchCreateWithoutPlagiarismResultsInput, PlagiarismMatchUncheckedCreateWithoutPlagiarismResultsInput> | PlagiarismMatchCreateWithoutPlagiarismResultsInput[] | PlagiarismMatchUncheckedCreateWithoutPlagiarismResultsInput[]
    connectOrCreate?: PlagiarismMatchCreateOrConnectWithoutPlagiarismResultsInput | PlagiarismMatchCreateOrConnectWithoutPlagiarismResultsInput[]
    createMany?: PlagiarismMatchCreateManyPlagiarismResultsInputEnvelope
    connect?: PlagiarismMatchWhereUniqueInput | PlagiarismMatchWhereUniqueInput[]
  }

  export type SubmissionCreateNestedOneWithoutPlagiarismResultsInput = {
    create?: XOR<SubmissionCreateWithoutPlagiarismResultsInput, SubmissionUncheckedCreateWithoutPlagiarismResultsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutPlagiarismResultsInput
    connect?: SubmissionWhereUniqueInput
  }

  export type PlagiarismMatchUncheckedCreateNestedManyWithoutPlagiarismResultsInput = {
    create?: XOR<PlagiarismMatchCreateWithoutPlagiarismResultsInput, PlagiarismMatchUncheckedCreateWithoutPlagiarismResultsInput> | PlagiarismMatchCreateWithoutPlagiarismResultsInput[] | PlagiarismMatchUncheckedCreateWithoutPlagiarismResultsInput[]
    connectOrCreate?: PlagiarismMatchCreateOrConnectWithoutPlagiarismResultsInput | PlagiarismMatchCreateOrConnectWithoutPlagiarismResultsInput[]
    createMany?: PlagiarismMatchCreateManyPlagiarismResultsInputEnvelope
    connect?: PlagiarismMatchWhereUniqueInput | PlagiarismMatchWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedOneWithoutPlagiarismResultsInput = {
    create?: XOR<SubmissionCreateWithoutPlagiarismResultsInput, SubmissionUncheckedCreateWithoutPlagiarismResultsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutPlagiarismResultsInput
    connect?: SubmissionWhereUniqueInput
  }

  export type PlagiarismMatchUpdateManyWithoutPlagiarismResultsNestedInput = {
    create?: XOR<PlagiarismMatchCreateWithoutPlagiarismResultsInput, PlagiarismMatchUncheckedCreateWithoutPlagiarismResultsInput> | PlagiarismMatchCreateWithoutPlagiarismResultsInput[] | PlagiarismMatchUncheckedCreateWithoutPlagiarismResultsInput[]
    connectOrCreate?: PlagiarismMatchCreateOrConnectWithoutPlagiarismResultsInput | PlagiarismMatchCreateOrConnectWithoutPlagiarismResultsInput[]
    upsert?: PlagiarismMatchUpsertWithWhereUniqueWithoutPlagiarismResultsInput | PlagiarismMatchUpsertWithWhereUniqueWithoutPlagiarismResultsInput[]
    createMany?: PlagiarismMatchCreateManyPlagiarismResultsInputEnvelope
    set?: PlagiarismMatchWhereUniqueInput | PlagiarismMatchWhereUniqueInput[]
    disconnect?: PlagiarismMatchWhereUniqueInput | PlagiarismMatchWhereUniqueInput[]
    delete?: PlagiarismMatchWhereUniqueInput | PlagiarismMatchWhereUniqueInput[]
    connect?: PlagiarismMatchWhereUniqueInput | PlagiarismMatchWhereUniqueInput[]
    update?: PlagiarismMatchUpdateWithWhereUniqueWithoutPlagiarismResultsInput | PlagiarismMatchUpdateWithWhereUniqueWithoutPlagiarismResultsInput[]
    updateMany?: PlagiarismMatchUpdateManyWithWhereWithoutPlagiarismResultsInput | PlagiarismMatchUpdateManyWithWhereWithoutPlagiarismResultsInput[]
    deleteMany?: PlagiarismMatchScalarWhereInput | PlagiarismMatchScalarWhereInput[]
  }

  export type SubmissionUpdateOneWithoutPlagiarismResultsNestedInput = {
    create?: XOR<SubmissionCreateWithoutPlagiarismResultsInput, SubmissionUncheckedCreateWithoutPlagiarismResultsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutPlagiarismResultsInput
    upsert?: SubmissionUpsertWithoutPlagiarismResultsInput
    disconnect?: SubmissionWhereInput | boolean
    delete?: SubmissionWhereInput | boolean
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutPlagiarismResultsInput, SubmissionUpdateWithoutPlagiarismResultsInput>, SubmissionUncheckedUpdateWithoutPlagiarismResultsInput>
  }

  export type PlagiarismMatchUncheckedUpdateManyWithoutPlagiarismResultsNestedInput = {
    create?: XOR<PlagiarismMatchCreateWithoutPlagiarismResultsInput, PlagiarismMatchUncheckedCreateWithoutPlagiarismResultsInput> | PlagiarismMatchCreateWithoutPlagiarismResultsInput[] | PlagiarismMatchUncheckedCreateWithoutPlagiarismResultsInput[]
    connectOrCreate?: PlagiarismMatchCreateOrConnectWithoutPlagiarismResultsInput | PlagiarismMatchCreateOrConnectWithoutPlagiarismResultsInput[]
    upsert?: PlagiarismMatchUpsertWithWhereUniqueWithoutPlagiarismResultsInput | PlagiarismMatchUpsertWithWhereUniqueWithoutPlagiarismResultsInput[]
    createMany?: PlagiarismMatchCreateManyPlagiarismResultsInputEnvelope
    set?: PlagiarismMatchWhereUniqueInput | PlagiarismMatchWhereUniqueInput[]
    disconnect?: PlagiarismMatchWhereUniqueInput | PlagiarismMatchWhereUniqueInput[]
    delete?: PlagiarismMatchWhereUniqueInput | PlagiarismMatchWhereUniqueInput[]
    connect?: PlagiarismMatchWhereUniqueInput | PlagiarismMatchWhereUniqueInput[]
    update?: PlagiarismMatchUpdateWithWhereUniqueWithoutPlagiarismResultsInput | PlagiarismMatchUpdateWithWhereUniqueWithoutPlagiarismResultsInput[]
    updateMany?: PlagiarismMatchUpdateManyWithWhereWithoutPlagiarismResultsInput | PlagiarismMatchUpdateManyWithWhereWithoutPlagiarismResultsInput[]
    deleteMany?: PlagiarismMatchScalarWhereInput | PlagiarismMatchScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateOneWithoutPlagiarismResultsNestedInput = {
    create?: XOR<SubmissionCreateWithoutPlagiarismResultsInput, SubmissionUncheckedCreateWithoutPlagiarismResultsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutPlagiarismResultsInput
    upsert?: SubmissionUpsertWithoutPlagiarismResultsInput
    disconnect?: SubmissionWhereInput | boolean
    delete?: SubmissionWhereInput | boolean
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutPlagiarismResultsInput, SubmissionUpdateWithoutPlagiarismResultsInput>, SubmissionUncheckedUpdateWithoutPlagiarismResultsInput>
  }

  export type PlagiarismResultsCreateNestedOneWithoutMatchesInput = {
    create?: XOR<PlagiarismResultsCreateWithoutMatchesInput, PlagiarismResultsUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: PlagiarismResultsCreateOrConnectWithoutMatchesInput
    connect?: PlagiarismResultsWhereUniqueInput
  }

  export type PlagiarismResultsUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<PlagiarismResultsCreateWithoutMatchesInput, PlagiarismResultsUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: PlagiarismResultsCreateOrConnectWithoutMatchesInput
    upsert?: PlagiarismResultsUpsertWithoutMatchesInput
    connect?: PlagiarismResultsWhereUniqueInput
    update?: XOR<XOR<PlagiarismResultsUpdateToOneWithWhereWithoutMatchesInput, PlagiarismResultsUpdateWithoutMatchesInput>, PlagiarismResultsUncheckedUpdateWithoutMatchesInput>
  }

  export type UserCreateNestedOneWithoutInlineCommentsInput = {
    create?: XOR<UserCreateWithoutInlineCommentsInput, UserUncheckedCreateWithoutInlineCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInlineCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type SubmissionCreateNestedOneWithoutInlineCommentsInput = {
    create?: XOR<SubmissionCreateWithoutInlineCommentsInput, SubmissionUncheckedCreateWithoutInlineCommentsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutInlineCommentsInput
    connect?: SubmissionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInlineCommentsNestedInput = {
    create?: XOR<UserCreateWithoutInlineCommentsInput, UserUncheckedCreateWithoutInlineCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInlineCommentsInput
    upsert?: UserUpsertWithoutInlineCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInlineCommentsInput, UserUpdateWithoutInlineCommentsInput>, UserUncheckedUpdateWithoutInlineCommentsInput>
  }

  export type SubmissionUpdateOneRequiredWithoutInlineCommentsNestedInput = {
    create?: XOR<SubmissionCreateWithoutInlineCommentsInput, SubmissionUncheckedCreateWithoutInlineCommentsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutInlineCommentsInput
    upsert?: SubmissionUpsertWithoutInlineCommentsInput
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutInlineCommentsInput, SubmissionUpdateWithoutInlineCommentsInput>, SubmissionUncheckedUpdateWithoutInlineCommentsInput>
  }

  export type SubmissionCreateNestedOneWithoutOverallFeedbackInput = {
    create?: XOR<SubmissionCreateWithoutOverallFeedbackInput, SubmissionUncheckedCreateWithoutOverallFeedbackInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutOverallFeedbackInput
    connect?: SubmissionWhereUniqueInput
  }

  export type SubmissionUpdateOneRequiredWithoutOverallFeedbackNestedInput = {
    create?: XOR<SubmissionCreateWithoutOverallFeedbackInput, SubmissionUncheckedCreateWithoutOverallFeedbackInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutOverallFeedbackInput
    upsert?: SubmissionUpsertWithoutOverallFeedbackInput
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutOverallFeedbackInput, SubmissionUpdateWithoutOverallFeedbackInput>, SubmissionUncheckedUpdateWithoutOverallFeedbackInput>
  }

  export type SubmissionCreateNestedOneWithoutSubscoresInput = {
    create?: XOR<SubmissionCreateWithoutSubscoresInput, SubmissionUncheckedCreateWithoutSubscoresInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutSubscoresInput
    connect?: SubmissionWhereUniqueInput
  }

  export type SubmissionUpdateOneRequiredWithoutSubscoresNestedInput = {
    create?: XOR<SubmissionCreateWithoutSubscoresInput, SubmissionUncheckedCreateWithoutSubscoresInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutSubscoresInput
    upsert?: SubmissionUpsertWithoutSubscoresInput
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutSubscoresInput, SubmissionUpdateWithoutSubscoresInput>, SubmissionUncheckedUpdateWithoutSubscoresInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumSubsciptionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubsciptionType | EnumSubsciptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubsciptionType[] | ListEnumSubsciptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubsciptionType[] | ListEnumSubsciptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubsciptionTypeFilter<$PrismaModel> | $Enums.SubsciptionType
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumSubsciptionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubsciptionType | EnumSubsciptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubsciptionType[] | ListEnumSubsciptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubsciptionType[] | ListEnumSubsciptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubsciptionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubsciptionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubsciptionTypeFilter<$PrismaModel>
    _max?: NestedEnumSubsciptionTypeFilter<$PrismaModel>
  }

  export type NestedEnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type NestedEnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    title?: StringFilter<"Material"> | string
    author?: StringFilter<"Material"> | string
    publisher?: StringFilter<"Material"> | string
    year?: StringFilter<"Material"> | string
    required?: BoolFilter<"Material"> | boolean
  }

  export type GradingPolicyWhereInput = {
    AND?: GradingPolicyWhereInput | GradingPolicyWhereInput[]
    OR?: GradingPolicyWhereInput[]
    NOT?: GradingPolicyWhereInput | GradingPolicyWhereInput[]
    assignments?: XOR<GradingComponentCompositeFilter, GradingComponentObjectEqualityInput>
    midterm?: XOR<GradingComponentCompositeFilter, GradingComponentObjectEqualityInput>
    finalExam?: XOR<GradingComponentCompositeFilter, GradingComponentObjectEqualityInput>
    participation?: XOR<GradingComponentCompositeFilter, GradingComponentObjectEqualityInput>
  }

  export type GradingComponentObjectEqualityInput = {
    description: string
    percentage: number
  }

  export type PoliciesWhereInput = {
    AND?: PoliciesWhereInput | PoliciesWhereInput[]
    OR?: PoliciesWhereInput[]
    NOT?: PoliciesWhereInput | PoliciesWhereInput[]
    attendance?: StringFilter<"Policies"> | string
    lateWork?: StringFilter<"Policies"> | string
    academicIntegrity?: StringFilter<"Policies"> | string
    accommodations?: StringFilter<"Policies"> | string
  }

  export type WeeklyScheduleWhereInput = {
    AND?: WeeklyScheduleWhereInput | WeeklyScheduleWhereInput[]
    OR?: WeeklyScheduleWhereInput[]
    NOT?: WeeklyScheduleWhereInput | WeeklyScheduleWhereInput[]
    week?: IntFilter<"WeeklySchedule"> | number
    topic?: StringFilter<"WeeklySchedule"> | string
    readings?: StringFilter<"WeeklySchedule"> | string
    assignments?: StringFilter<"WeeklySchedule"> | string
  }

  export type GradingComponentOrderByInput = {
    description?: SortOrder
    percentage?: SortOrder
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }

  export type NestedEnumConfidenceLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ConfidenceLevel | EnumConfidenceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ConfidenceLevel[] | ListEnumConfidenceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConfidenceLevel[] | ListEnumConfidenceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumConfidenceLevelFilter<$PrismaModel> | $Enums.ConfidenceLevel
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumConfidenceLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConfidenceLevel | EnumConfidenceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ConfidenceLevel[] | ListEnumConfidenceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConfidenceLevel[] | ListEnumConfidenceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumConfidenceLevelWithAggregatesFilter<$PrismaModel> | $Enums.ConfidenceLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConfidenceLevelFilter<$PrismaModel>
    _max?: NestedEnumConfidenceLevelFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CourseCreateWithoutUserInput = {
    id?: string
    name: string
    courseTitle: string
    courseDescription: string
    description: string
    instructor: string
    subject: string
    term: string
    gradeLevel: string
    learningObjectives?: CourseCreatelearningObjectivesInput | string[]
    requiredMaterials?: XOR<MaterialListCreateEnvelopeInput, MaterialCreateInput> | MaterialCreateInput[]
    gradingPolicy: XOR<GradingPolicyCreateEnvelopeInput, GradingPolicyCreateInput>
    policies: XOR<PoliciesCreateEnvelopeInput, PoliciesCreateInput>
    weeklySchedule?: XOR<WeeklyScheduleListCreateEnvelopeInput, WeeklyScheduleCreateInput> | WeeklyScheduleCreateInput[]
  }

  export type CourseUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    courseTitle: string
    courseDescription: string
    description: string
    instructor: string
    subject: string
    term: string
    gradeLevel: string
    learningObjectives?: CourseCreatelearningObjectivesInput | string[]
    requiredMaterials?: XOR<MaterialListCreateEnvelopeInput, MaterialCreateInput> | MaterialCreateInput[]
    gradingPolicy: XOR<GradingPolicyCreateEnvelopeInput, GradingPolicyCreateInput>
    policies: XOR<PoliciesCreateEnvelopeInput, PoliciesCreateInput>
    weeklySchedule?: XOR<WeeklyScheduleListCreateEnvelopeInput, WeeklyScheduleCreateInput> | WeeklyScheduleCreateInput[]
  }

  export type CourseCreateOrConnectWithoutUserInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput>
  }

  export type CourseCreateManyUserInputEnvelope = {
    data: CourseCreateManyUserInput | CourseCreateManyUserInput[]
  }

  export type AssignmentCreateWithoutUserInput = {
    id?: string
    assignmentTitle: string
    selectedCourse: string
    dueDate: Date | string
    description: string
    learningObjectives: string
    instructions?: string | null
    rubric?: string | null
    questions?: string | null
    answer_key?: string | null
    checklist?: string | null
    participation_criteria?: string | null
    peer_evaluation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutUserInput = {
    id?: string
    assignmentTitle: string
    selectedCourse: string
    dueDate: Date | string
    description: string
    learningObjectives: string
    instructions?: string | null
    rubric?: string | null
    questions?: string | null
    answer_key?: string | null
    checklist?: string | null
    participation_criteria?: string | null
    peer_evaluation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutUserInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput>
  }

  export type AssignmentCreateManyUserInputEnvelope = {
    data: AssignmentCreateManyUserInput | AssignmentCreateManyUserInput[]
  }

  export type StudentCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    class: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    class: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type StudentCreateManyUserInputEnvelope = {
    data: StudentCreateManyUserInput | StudentCreateManyUserInput[]
  }

  export type InlineCommentCreateWithoutAuthorInput = {
    id?: string
    startIndex: number
    endIndex: number
    text: string
    color: string
    timeStamp: Date | string
    submission: SubmissionCreateNestedOneWithoutInlineCommentsInput
  }

  export type InlineCommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    startIndex: number
    endIndex: number
    text: string
    color: string
    timeStamp: Date | string
    submissionId: string
  }

  export type InlineCommentCreateOrConnectWithoutAuthorInput = {
    where: InlineCommentWhereUniqueInput
    create: XOR<InlineCommentCreateWithoutAuthorInput, InlineCommentUncheckedCreateWithoutAuthorInput>
  }

  export type InlineCommentCreateManyAuthorInputEnvelope = {
    data: InlineCommentCreateManyAuthorInput | InlineCommentCreateManyAuthorInput[]
  }

  export type CourseUpsertWithWhereUniqueWithoutUserInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutUserInput, CourseUncheckedUpdateWithoutUserInput>
    create: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutUserInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutUserInput, CourseUncheckedUpdateWithoutUserInput>
  }

  export type CourseUpdateManyWithWhereWithoutUserInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutUserInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    userId?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    courseTitle?: StringFilter<"Course"> | string
    courseDescription?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    instructor?: StringFilter<"Course"> | string
    subject?: StringFilter<"Course"> | string
    term?: StringFilter<"Course"> | string
    gradeLevel?: StringFilter<"Course"> | string
    learningObjectives?: StringNullableListFilter<"Course">
  }

  export type AssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutUserInput, AssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutUserInput, AssignmentUncheckedUpdateWithoutUserInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutUserInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    id?: StringFilter<"Assignment"> | string
    assignmentTitle?: StringFilter<"Assignment"> | string
    selectedCourse?: StringFilter<"Assignment"> | string
    dueDate?: DateTimeFilter<"Assignment"> | Date | string
    description?: StringFilter<"Assignment"> | string
    learningObjectives?: StringFilter<"Assignment"> | string
    instructions?: StringNullableFilter<"Assignment"> | string | null
    rubric?: StringNullableFilter<"Assignment"> | string | null
    questions?: StringNullableFilter<"Assignment"> | string | null
    answer_key?: StringNullableFilter<"Assignment"> | string | null
    checklist?: StringNullableFilter<"Assignment"> | string | null
    participation_criteria?: StringNullableFilter<"Assignment"> | string | null
    peer_evaluation?: StringNullableFilter<"Assignment"> | string | null
    userId?: StringFilter<"Assignment"> | string
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeFilter<"Assignment"> | Date | string
  }

  export type StudentUpsertWithWhereUniqueWithoutUserInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutUserInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateManyWithWhereWithoutUserInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutUserInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    class?: StringFilter<"Student"> | string
    userId?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
  }

  export type InlineCommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: InlineCommentWhereUniqueInput
    update: XOR<InlineCommentUpdateWithoutAuthorInput, InlineCommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<InlineCommentCreateWithoutAuthorInput, InlineCommentUncheckedCreateWithoutAuthorInput>
  }

  export type InlineCommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: InlineCommentWhereUniqueInput
    data: XOR<InlineCommentUpdateWithoutAuthorInput, InlineCommentUncheckedUpdateWithoutAuthorInput>
  }

  export type InlineCommentUpdateManyWithWhereWithoutAuthorInput = {
    where: InlineCommentScalarWhereInput
    data: XOR<InlineCommentUpdateManyMutationInput, InlineCommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type InlineCommentScalarWhereInput = {
    AND?: InlineCommentScalarWhereInput | InlineCommentScalarWhereInput[]
    OR?: InlineCommentScalarWhereInput[]
    NOT?: InlineCommentScalarWhereInput | InlineCommentScalarWhereInput[]
    id?: StringFilter<"InlineComment"> | string
    startIndex?: IntFilter<"InlineComment"> | number
    endIndex?: IntFilter<"InlineComment"> | number
    text?: StringFilter<"InlineComment"> | string
    color?: StringFilter<"InlineComment"> | string
    timeStamp?: DateTimeFilter<"InlineComment"> | Date | string
    authorId?: StringFilter<"InlineComment"> | string
    submissionId?: StringFilter<"InlineComment"> | string
  }

  export type GradingComponentCreateInput = {
    description: string
    percentage: number
  }

  export type UserCreateWithoutCoursesInput = {
    id?: string
    name: string
    email: string
    hashed_password: string
    provider: $Enums.Provider
    assignments?: AssignmentCreateNestedManyWithoutUserInput
    students?: StudentCreateNestedManyWithoutUserInput
    inlineComments?: InlineCommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
    email: string
    hashed_password: string
    provider: $Enums.Provider
    assignments?: AssignmentUncheckedCreateNestedManyWithoutUserInput
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
    inlineComments?: InlineCommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
  }

  export type MaterialUpdateManyInput = {
    where: MaterialWhereInput
    data: MaterialUpdateInput
  }

  export type MaterialDeleteManyInput = {
    where: MaterialWhereInput
  }

  export type GradingPolicyUpdateInput = {
    assignments?: XOR<GradingComponentUpdateEnvelopeInput, GradingComponentCreateInput>
    midterm?: XOR<GradingComponentUpdateEnvelopeInput, GradingComponentCreateInput>
    finalExam?: XOR<GradingComponentUpdateEnvelopeInput, GradingComponentCreateInput>
    participation?: XOR<GradingComponentUpdateEnvelopeInput, GradingComponentCreateInput>
  }

  export type PoliciesUpdateInput = {
    attendance?: StringFieldUpdateOperationsInput | string
    lateWork?: StringFieldUpdateOperationsInput | string
    academicIntegrity?: StringFieldUpdateOperationsInput | string
    accommodations?: StringFieldUpdateOperationsInput | string
  }

  export type WeeklyScheduleUpdateManyInput = {
    where: WeeklyScheduleWhereInput
    data: WeeklyScheduleUpdateInput
  }

  export type WeeklyScheduleDeleteManyInput = {
    where: WeeklyScheduleWhereInput
  }

  export type UserUpsertWithoutCoursesInput = {
    update: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoursesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
  }

  export type UserUpdateWithoutCoursesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    assignments?: AssignmentUpdateManyWithoutUserNestedInput
    students?: StudentUpdateManyWithoutUserNestedInput
    inlineComments?: InlineCommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutCoursesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    assignments?: AssignmentUncheckedUpdateManyWithoutUserNestedInput
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
    inlineComments?: InlineCommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    email: string
    hashed_password: string
    provider: $Enums.Provider
    courses?: CourseCreateNestedManyWithoutUserInput
    students?: StudentCreateNestedManyWithoutUserInput
    inlineComments?: InlineCommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    email: string
    hashed_password: string
    provider: $Enums.Provider
    courses?: CourseUncheckedCreateNestedManyWithoutUserInput
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
    inlineComments?: InlineCommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
  }

  export type SubmissionCreateWithoutAssignmentInput = {
    id?: string
    assignmentTitle: string
    studentName?: string | null
    studentId?: string | null
    submissionDate?: Date | string
    status: $Enums.SubmissionStatus
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiCheckerResults?: AICheckerResultsCreateNestedOneWithoutSubmissionInput
    plagiarismResults?: PlagiarismResultsCreateNestedOneWithoutSubmissionInput
    inlineComments?: InlineCommentCreateNestedManyWithoutSubmissionInput
    overallFeedback?: OverallFeedbackCreateNestedOneWithoutSubmissionInput
    subscores?: SubscoreCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutAssignmentInput = {
    id?: string
    assignmentTitle: string
    studentName?: string | null
    studentId?: string | null
    submissionDate?: Date | string
    status: $Enums.SubmissionStatus
    content: string
    aiCheckerResultsId?: string | null
    plagiarismResultsId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inlineComments?: InlineCommentUncheckedCreateNestedManyWithoutSubmissionInput
    overallFeedback?: OverallFeedbackUncheckedCreateNestedOneWithoutSubmissionInput
    subscores?: SubscoreUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutAssignmentInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput>
  }

  export type SubmissionCreateManyAssignmentInputEnvelope = {
    data: SubmissionCreateManyAssignmentInput | SubmissionCreateManyAssignmentInput[]
  }

  export type UserUpsertWithoutAssignmentsInput = {
    update: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateWithoutAssignmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    courses?: CourseUpdateManyWithoutUserNestedInput
    students?: StudentUpdateManyWithoutUserNestedInput
    inlineComments?: InlineCommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    courses?: CourseUncheckedUpdateManyWithoutUserNestedInput
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
    inlineComments?: InlineCommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type SubmissionUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutAssignmentInput, SubmissionUncheckedUpdateWithoutAssignmentInput>
    create: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutAssignmentInput, SubmissionUncheckedUpdateWithoutAssignmentInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutAssignmentInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    assignmentId?: StringFilter<"Submission"> | string
    assignmentTitle?: StringFilter<"Submission"> | string
    studentName?: StringNullableFilter<"Submission"> | string | null
    studentId?: StringNullableFilter<"Submission"> | string | null
    submissionDate?: DateTimeFilter<"Submission"> | Date | string
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    content?: StringFilter<"Submission"> | string
    aiCheckerResultsId?: StringNullableFilter<"Submission"> | string | null
    plagiarismResultsId?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
  }

  export type UserCreateWithoutStudentsInput = {
    id?: string
    name: string
    email: string
    hashed_password: string
    provider: $Enums.Provider
    courses?: CourseCreateNestedManyWithoutUserInput
    assignments?: AssignmentCreateNestedManyWithoutUserInput
    inlineComments?: InlineCommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    email: string
    hashed_password: string
    provider: $Enums.Provider
    courses?: CourseUncheckedCreateNestedManyWithoutUserInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutUserInput
    inlineComments?: InlineCommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutStudentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
  }

  export type UserUpsertWithoutStudentsInput = {
    update: XOR<UserUpdateWithoutStudentsInput, UserUncheckedUpdateWithoutStudentsInput>
    create: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentsInput, UserUncheckedUpdateWithoutStudentsInput>
  }

  export type UserUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    courses?: CourseUpdateManyWithoutUserNestedInput
    assignments?: AssignmentUpdateManyWithoutUserNestedInput
    inlineComments?: InlineCommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    courses?: CourseUncheckedUpdateManyWithoutUserNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutUserNestedInput
    inlineComments?: InlineCommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AssignmentCreateWithoutSubmissionInput = {
    id?: string
    assignmentTitle: string
    selectedCourse: string
    dueDate: Date | string
    description: string
    learningObjectives: string
    instructions?: string | null
    rubric?: string | null
    questions?: string | null
    answer_key?: string | null
    checklist?: string | null
    participation_criteria?: string | null
    peer_evaluation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutSubmissionInput = {
    id?: string
    assignmentTitle: string
    selectedCourse: string
    dueDate: Date | string
    description: string
    learningObjectives: string
    instructions?: string | null
    rubric?: string | null
    questions?: string | null
    answer_key?: string | null
    checklist?: string | null
    participation_criteria?: string | null
    peer_evaluation?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentCreateOrConnectWithoutSubmissionInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutSubmissionInput, AssignmentUncheckedCreateWithoutSubmissionInput>
  }

  export type AICheckerResultsCreateWithoutSubmissionInput = {
    id?: string
    score: number
    confidence: $Enums.ConfidenceLevel
    details?: AIDetailCreateNestedManyWithoutAiCheckerResultsInput
  }

  export type AICheckerResultsUncheckedCreateWithoutSubmissionInput = {
    id?: string
    score: number
    confidence: $Enums.ConfidenceLevel
    details?: AIDetailUncheckedCreateNestedManyWithoutAiCheckerResultsInput
  }

  export type AICheckerResultsCreateOrConnectWithoutSubmissionInput = {
    where: AICheckerResultsWhereUniqueInput
    create: XOR<AICheckerResultsCreateWithoutSubmissionInput, AICheckerResultsUncheckedCreateWithoutSubmissionInput>
  }

  export type PlagiarismResultsCreateWithoutSubmissionInput = {
    id?: string
    score: number
    matches?: PlagiarismMatchCreateNestedManyWithoutPlagiarismResultsInput
  }

  export type PlagiarismResultsUncheckedCreateWithoutSubmissionInput = {
    id?: string
    score: number
    matches?: PlagiarismMatchUncheckedCreateNestedManyWithoutPlagiarismResultsInput
  }

  export type PlagiarismResultsCreateOrConnectWithoutSubmissionInput = {
    where: PlagiarismResultsWhereUniqueInput
    create: XOR<PlagiarismResultsCreateWithoutSubmissionInput, PlagiarismResultsUncheckedCreateWithoutSubmissionInput>
  }

  export type InlineCommentCreateWithoutSubmissionInput = {
    id?: string
    startIndex: number
    endIndex: number
    text: string
    color: string
    timeStamp: Date | string
    author: UserCreateNestedOneWithoutInlineCommentsInput
  }

  export type InlineCommentUncheckedCreateWithoutSubmissionInput = {
    id?: string
    startIndex: number
    endIndex: number
    text: string
    color: string
    timeStamp: Date | string
    authorId: string
  }

  export type InlineCommentCreateOrConnectWithoutSubmissionInput = {
    where: InlineCommentWhereUniqueInput
    create: XOR<InlineCommentCreateWithoutSubmissionInput, InlineCommentUncheckedCreateWithoutSubmissionInput>
  }

  export type InlineCommentCreateManySubmissionInputEnvelope = {
    data: InlineCommentCreateManySubmissionInput | InlineCommentCreateManySubmissionInput[]
  }

  export type OverallFeedbackCreateWithoutSubmissionInput = {
    id?: string
    strengths: string
    improvements: string
    actionItems: string
  }

  export type OverallFeedbackUncheckedCreateWithoutSubmissionInput = {
    id?: string
    strengths: string
    improvements: string
    actionItems: string
  }

  export type OverallFeedbackCreateOrConnectWithoutSubmissionInput = {
    where: OverallFeedbackWhereUniqueInput
    create: XOR<OverallFeedbackCreateWithoutSubmissionInput, OverallFeedbackUncheckedCreateWithoutSubmissionInput>
  }

  export type SubscoreCreateWithoutSubmissionInput = {
    id?: string
    name: string
    score: number
    maxScore: number
    rationale: string
  }

  export type SubscoreUncheckedCreateWithoutSubmissionInput = {
    id?: string
    name: string
    score: number
    maxScore: number
    rationale: string
  }

  export type SubscoreCreateOrConnectWithoutSubmissionInput = {
    where: SubscoreWhereUniqueInput
    create: XOR<SubscoreCreateWithoutSubmissionInput, SubscoreUncheckedCreateWithoutSubmissionInput>
  }

  export type SubscoreCreateManySubmissionInputEnvelope = {
    data: SubscoreCreateManySubmissionInput | SubscoreCreateManySubmissionInput[]
  }

  export type AssignmentUpsertWithoutSubmissionInput = {
    update: XOR<AssignmentUpdateWithoutSubmissionInput, AssignmentUncheckedUpdateWithoutSubmissionInput>
    create: XOR<AssignmentCreateWithoutSubmissionInput, AssignmentUncheckedCreateWithoutSubmissionInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutSubmissionInput, AssignmentUncheckedUpdateWithoutSubmissionInput>
  }

  export type AssignmentUpdateWithoutSubmissionInput = {
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    selectedCourse?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    rubric?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: NullableStringFieldUpdateOperationsInput | string | null
    answer_key?: NullableStringFieldUpdateOperationsInput | string | null
    checklist?: NullableStringFieldUpdateOperationsInput | string | null
    participation_criteria?: NullableStringFieldUpdateOperationsInput | string | null
    peer_evaluation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutSubmissionInput = {
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    selectedCourse?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    rubric?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: NullableStringFieldUpdateOperationsInput | string | null
    answer_key?: NullableStringFieldUpdateOperationsInput | string | null
    checklist?: NullableStringFieldUpdateOperationsInput | string | null
    participation_criteria?: NullableStringFieldUpdateOperationsInput | string | null
    peer_evaluation?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AICheckerResultsUpsertWithoutSubmissionInput = {
    update: XOR<AICheckerResultsUpdateWithoutSubmissionInput, AICheckerResultsUncheckedUpdateWithoutSubmissionInput>
    create: XOR<AICheckerResultsCreateWithoutSubmissionInput, AICheckerResultsUncheckedCreateWithoutSubmissionInput>
    where?: AICheckerResultsWhereInput
  }

  export type AICheckerResultsUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: AICheckerResultsWhereInput
    data: XOR<AICheckerResultsUpdateWithoutSubmissionInput, AICheckerResultsUncheckedUpdateWithoutSubmissionInput>
  }

  export type AICheckerResultsUpdateWithoutSubmissionInput = {
    score?: IntFieldUpdateOperationsInput | number
    confidence?: EnumConfidenceLevelFieldUpdateOperationsInput | $Enums.ConfidenceLevel
    details?: AIDetailUpdateManyWithoutAiCheckerResultsNestedInput
  }

  export type AICheckerResultsUncheckedUpdateWithoutSubmissionInput = {
    score?: IntFieldUpdateOperationsInput | number
    confidence?: EnumConfidenceLevelFieldUpdateOperationsInput | $Enums.ConfidenceLevel
    details?: AIDetailUncheckedUpdateManyWithoutAiCheckerResultsNestedInput
  }

  export type PlagiarismResultsUpsertWithoutSubmissionInput = {
    update: XOR<PlagiarismResultsUpdateWithoutSubmissionInput, PlagiarismResultsUncheckedUpdateWithoutSubmissionInput>
    create: XOR<PlagiarismResultsCreateWithoutSubmissionInput, PlagiarismResultsUncheckedCreateWithoutSubmissionInput>
    where?: PlagiarismResultsWhereInput
  }

  export type PlagiarismResultsUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: PlagiarismResultsWhereInput
    data: XOR<PlagiarismResultsUpdateWithoutSubmissionInput, PlagiarismResultsUncheckedUpdateWithoutSubmissionInput>
  }

  export type PlagiarismResultsUpdateWithoutSubmissionInput = {
    score?: IntFieldUpdateOperationsInput | number
    matches?: PlagiarismMatchUpdateManyWithoutPlagiarismResultsNestedInput
  }

  export type PlagiarismResultsUncheckedUpdateWithoutSubmissionInput = {
    score?: IntFieldUpdateOperationsInput | number
    matches?: PlagiarismMatchUncheckedUpdateManyWithoutPlagiarismResultsNestedInput
  }

  export type InlineCommentUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: InlineCommentWhereUniqueInput
    update: XOR<InlineCommentUpdateWithoutSubmissionInput, InlineCommentUncheckedUpdateWithoutSubmissionInput>
    create: XOR<InlineCommentCreateWithoutSubmissionInput, InlineCommentUncheckedCreateWithoutSubmissionInput>
  }

  export type InlineCommentUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: InlineCommentWhereUniqueInput
    data: XOR<InlineCommentUpdateWithoutSubmissionInput, InlineCommentUncheckedUpdateWithoutSubmissionInput>
  }

  export type InlineCommentUpdateManyWithWhereWithoutSubmissionInput = {
    where: InlineCommentScalarWhereInput
    data: XOR<InlineCommentUpdateManyMutationInput, InlineCommentUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type OverallFeedbackUpsertWithoutSubmissionInput = {
    update: XOR<OverallFeedbackUpdateWithoutSubmissionInput, OverallFeedbackUncheckedUpdateWithoutSubmissionInput>
    create: XOR<OverallFeedbackCreateWithoutSubmissionInput, OverallFeedbackUncheckedCreateWithoutSubmissionInput>
    where?: OverallFeedbackWhereInput
  }

  export type OverallFeedbackUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: OverallFeedbackWhereInput
    data: XOR<OverallFeedbackUpdateWithoutSubmissionInput, OverallFeedbackUncheckedUpdateWithoutSubmissionInput>
  }

  export type OverallFeedbackUpdateWithoutSubmissionInput = {
    strengths?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    actionItems?: StringFieldUpdateOperationsInput | string
  }

  export type OverallFeedbackUncheckedUpdateWithoutSubmissionInput = {
    strengths?: StringFieldUpdateOperationsInput | string
    improvements?: StringFieldUpdateOperationsInput | string
    actionItems?: StringFieldUpdateOperationsInput | string
  }

  export type SubscoreUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: SubscoreWhereUniqueInput
    update: XOR<SubscoreUpdateWithoutSubmissionInput, SubscoreUncheckedUpdateWithoutSubmissionInput>
    create: XOR<SubscoreCreateWithoutSubmissionInput, SubscoreUncheckedCreateWithoutSubmissionInput>
  }

  export type SubscoreUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: SubscoreWhereUniqueInput
    data: XOR<SubscoreUpdateWithoutSubmissionInput, SubscoreUncheckedUpdateWithoutSubmissionInput>
  }

  export type SubscoreUpdateManyWithWhereWithoutSubmissionInput = {
    where: SubscoreScalarWhereInput
    data: XOR<SubscoreUpdateManyMutationInput, SubscoreUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type SubscoreScalarWhereInput = {
    AND?: SubscoreScalarWhereInput | SubscoreScalarWhereInput[]
    OR?: SubscoreScalarWhereInput[]
    NOT?: SubscoreScalarWhereInput | SubscoreScalarWhereInput[]
    id?: StringFilter<"Subscore"> | string
    name?: StringFilter<"Subscore"> | string
    score?: FloatFilter<"Subscore"> | number
    maxScore?: FloatFilter<"Subscore"> | number
    rationale?: StringFilter<"Subscore"> | string
    submissionId?: StringFilter<"Subscore"> | string
  }

  export type AIDetailCreateWithoutAiCheckerResultsInput = {
    id?: string
    section: string
    aiProbability: number
    humanProbability: number
  }

  export type AIDetailUncheckedCreateWithoutAiCheckerResultsInput = {
    id?: string
    section: string
    aiProbability: number
    humanProbability: number
  }

  export type AIDetailCreateOrConnectWithoutAiCheckerResultsInput = {
    where: AIDetailWhereUniqueInput
    create: XOR<AIDetailCreateWithoutAiCheckerResultsInput, AIDetailUncheckedCreateWithoutAiCheckerResultsInput>
  }

  export type AIDetailCreateManyAiCheckerResultsInputEnvelope = {
    data: AIDetailCreateManyAiCheckerResultsInput | AIDetailCreateManyAiCheckerResultsInput[]
  }

  export type SubmissionCreateWithoutAiCheckerResultsInput = {
    id?: string
    assignmentTitle: string
    studentName?: string | null
    studentId?: string | null
    submissionDate?: Date | string
    status: $Enums.SubmissionStatus
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutSubmissionInput
    plagiarismResults?: PlagiarismResultsCreateNestedOneWithoutSubmissionInput
    inlineComments?: InlineCommentCreateNestedManyWithoutSubmissionInput
    overallFeedback?: OverallFeedbackCreateNestedOneWithoutSubmissionInput
    subscores?: SubscoreCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutAiCheckerResultsInput = {
    id?: string
    assignmentId: string
    assignmentTitle: string
    studentName?: string | null
    studentId?: string | null
    submissionDate?: Date | string
    status: $Enums.SubmissionStatus
    content: string
    plagiarismResultsId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inlineComments?: InlineCommentUncheckedCreateNestedManyWithoutSubmissionInput
    overallFeedback?: OverallFeedbackUncheckedCreateNestedOneWithoutSubmissionInput
    subscores?: SubscoreUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutAiCheckerResultsInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutAiCheckerResultsInput, SubmissionUncheckedCreateWithoutAiCheckerResultsInput>
  }

  export type AIDetailUpsertWithWhereUniqueWithoutAiCheckerResultsInput = {
    where: AIDetailWhereUniqueInput
    update: XOR<AIDetailUpdateWithoutAiCheckerResultsInput, AIDetailUncheckedUpdateWithoutAiCheckerResultsInput>
    create: XOR<AIDetailCreateWithoutAiCheckerResultsInput, AIDetailUncheckedCreateWithoutAiCheckerResultsInput>
  }

  export type AIDetailUpdateWithWhereUniqueWithoutAiCheckerResultsInput = {
    where: AIDetailWhereUniqueInput
    data: XOR<AIDetailUpdateWithoutAiCheckerResultsInput, AIDetailUncheckedUpdateWithoutAiCheckerResultsInput>
  }

  export type AIDetailUpdateManyWithWhereWithoutAiCheckerResultsInput = {
    where: AIDetailScalarWhereInput
    data: XOR<AIDetailUpdateManyMutationInput, AIDetailUncheckedUpdateManyWithoutAiCheckerResultsInput>
  }

  export type AIDetailScalarWhereInput = {
    AND?: AIDetailScalarWhereInput | AIDetailScalarWhereInput[]
    OR?: AIDetailScalarWhereInput[]
    NOT?: AIDetailScalarWhereInput | AIDetailScalarWhereInput[]
    id?: StringFilter<"AIDetail"> | string
    section?: StringFilter<"AIDetail"> | string
    aiProbability?: FloatFilter<"AIDetail"> | number
    humanProbability?: FloatFilter<"AIDetail"> | number
    aiCheckerResultsId?: StringFilter<"AIDetail"> | string
  }

  export type SubmissionUpsertWithoutAiCheckerResultsInput = {
    update: XOR<SubmissionUpdateWithoutAiCheckerResultsInput, SubmissionUncheckedUpdateWithoutAiCheckerResultsInput>
    create: XOR<SubmissionCreateWithoutAiCheckerResultsInput, SubmissionUncheckedCreateWithoutAiCheckerResultsInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutAiCheckerResultsInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutAiCheckerResultsInput, SubmissionUncheckedUpdateWithoutAiCheckerResultsInput>
  }

  export type SubmissionUpdateWithoutAiCheckerResultsInput = {
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionNestedInput
    plagiarismResults?: PlagiarismResultsUpdateOneWithoutSubmissionNestedInput
    inlineComments?: InlineCommentUpdateManyWithoutSubmissionNestedInput
    overallFeedback?: OverallFeedbackUpdateOneWithoutSubmissionNestedInput
    subscores?: SubscoreUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutAiCheckerResultsInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    content?: StringFieldUpdateOperationsInput | string
    plagiarismResultsId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inlineComments?: InlineCommentUncheckedUpdateManyWithoutSubmissionNestedInput
    overallFeedback?: OverallFeedbackUncheckedUpdateOneWithoutSubmissionNestedInput
    subscores?: SubscoreUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type AICheckerResultsCreateWithoutDetailsInput = {
    id?: string
    score: number
    confidence: $Enums.ConfidenceLevel
    submission?: SubmissionCreateNestedOneWithoutAiCheckerResultsInput
  }

  export type AICheckerResultsUncheckedCreateWithoutDetailsInput = {
    id?: string
    score: number
    confidence: $Enums.ConfidenceLevel
    submission?: SubmissionUncheckedCreateNestedOneWithoutAiCheckerResultsInput
  }

  export type AICheckerResultsCreateOrConnectWithoutDetailsInput = {
    where: AICheckerResultsWhereUniqueInput
    create: XOR<AICheckerResultsCreateWithoutDetailsInput, AICheckerResultsUncheckedCreateWithoutDetailsInput>
  }

  export type AICheckerResultsUpsertWithoutDetailsInput = {
    update: XOR<AICheckerResultsUpdateWithoutDetailsInput, AICheckerResultsUncheckedUpdateWithoutDetailsInput>
    create: XOR<AICheckerResultsCreateWithoutDetailsInput, AICheckerResultsUncheckedCreateWithoutDetailsInput>
    where?: AICheckerResultsWhereInput
  }

  export type AICheckerResultsUpdateToOneWithWhereWithoutDetailsInput = {
    where?: AICheckerResultsWhereInput
    data: XOR<AICheckerResultsUpdateWithoutDetailsInput, AICheckerResultsUncheckedUpdateWithoutDetailsInput>
  }

  export type AICheckerResultsUpdateWithoutDetailsInput = {
    score?: IntFieldUpdateOperationsInput | number
    confidence?: EnumConfidenceLevelFieldUpdateOperationsInput | $Enums.ConfidenceLevel
    submission?: SubmissionUpdateOneWithoutAiCheckerResultsNestedInput
  }

  export type AICheckerResultsUncheckedUpdateWithoutDetailsInput = {
    score?: IntFieldUpdateOperationsInput | number
    confidence?: EnumConfidenceLevelFieldUpdateOperationsInput | $Enums.ConfidenceLevel
    submission?: SubmissionUncheckedUpdateOneWithoutAiCheckerResultsNestedInput
  }

  export type PlagiarismMatchCreateWithoutPlagiarismResultsInput = {
    id?: string
    test: string
    source: string
    similarity: number
  }

  export type PlagiarismMatchUncheckedCreateWithoutPlagiarismResultsInput = {
    id?: string
    test: string
    source: string
    similarity: number
  }

  export type PlagiarismMatchCreateOrConnectWithoutPlagiarismResultsInput = {
    where: PlagiarismMatchWhereUniqueInput
    create: XOR<PlagiarismMatchCreateWithoutPlagiarismResultsInput, PlagiarismMatchUncheckedCreateWithoutPlagiarismResultsInput>
  }

  export type PlagiarismMatchCreateManyPlagiarismResultsInputEnvelope = {
    data: PlagiarismMatchCreateManyPlagiarismResultsInput | PlagiarismMatchCreateManyPlagiarismResultsInput[]
  }

  export type SubmissionCreateWithoutPlagiarismResultsInput = {
    id?: string
    assignmentTitle: string
    studentName?: string | null
    studentId?: string | null
    submissionDate?: Date | string
    status: $Enums.SubmissionStatus
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutSubmissionInput
    aiCheckerResults?: AICheckerResultsCreateNestedOneWithoutSubmissionInput
    inlineComments?: InlineCommentCreateNestedManyWithoutSubmissionInput
    overallFeedback?: OverallFeedbackCreateNestedOneWithoutSubmissionInput
    subscores?: SubscoreCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutPlagiarismResultsInput = {
    id?: string
    assignmentId: string
    assignmentTitle: string
    studentName?: string | null
    studentId?: string | null
    submissionDate?: Date | string
    status: $Enums.SubmissionStatus
    content: string
    aiCheckerResultsId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inlineComments?: InlineCommentUncheckedCreateNestedManyWithoutSubmissionInput
    overallFeedback?: OverallFeedbackUncheckedCreateNestedOneWithoutSubmissionInput
    subscores?: SubscoreUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutPlagiarismResultsInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutPlagiarismResultsInput, SubmissionUncheckedCreateWithoutPlagiarismResultsInput>
  }

  export type PlagiarismMatchUpsertWithWhereUniqueWithoutPlagiarismResultsInput = {
    where: PlagiarismMatchWhereUniqueInput
    update: XOR<PlagiarismMatchUpdateWithoutPlagiarismResultsInput, PlagiarismMatchUncheckedUpdateWithoutPlagiarismResultsInput>
    create: XOR<PlagiarismMatchCreateWithoutPlagiarismResultsInput, PlagiarismMatchUncheckedCreateWithoutPlagiarismResultsInput>
  }

  export type PlagiarismMatchUpdateWithWhereUniqueWithoutPlagiarismResultsInput = {
    where: PlagiarismMatchWhereUniqueInput
    data: XOR<PlagiarismMatchUpdateWithoutPlagiarismResultsInput, PlagiarismMatchUncheckedUpdateWithoutPlagiarismResultsInput>
  }

  export type PlagiarismMatchUpdateManyWithWhereWithoutPlagiarismResultsInput = {
    where: PlagiarismMatchScalarWhereInput
    data: XOR<PlagiarismMatchUpdateManyMutationInput, PlagiarismMatchUncheckedUpdateManyWithoutPlagiarismResultsInput>
  }

  export type PlagiarismMatchScalarWhereInput = {
    AND?: PlagiarismMatchScalarWhereInput | PlagiarismMatchScalarWhereInput[]
    OR?: PlagiarismMatchScalarWhereInput[]
    NOT?: PlagiarismMatchScalarWhereInput | PlagiarismMatchScalarWhereInput[]
    id?: StringFilter<"PlagiarismMatch"> | string
    test?: StringFilter<"PlagiarismMatch"> | string
    source?: StringFilter<"PlagiarismMatch"> | string
    similarity?: FloatFilter<"PlagiarismMatch"> | number
    plagiarismResultsId?: StringFilter<"PlagiarismMatch"> | string
  }

  export type SubmissionUpsertWithoutPlagiarismResultsInput = {
    update: XOR<SubmissionUpdateWithoutPlagiarismResultsInput, SubmissionUncheckedUpdateWithoutPlagiarismResultsInput>
    create: XOR<SubmissionCreateWithoutPlagiarismResultsInput, SubmissionUncheckedCreateWithoutPlagiarismResultsInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutPlagiarismResultsInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutPlagiarismResultsInput, SubmissionUncheckedUpdateWithoutPlagiarismResultsInput>
  }

  export type SubmissionUpdateWithoutPlagiarismResultsInput = {
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionNestedInput
    aiCheckerResults?: AICheckerResultsUpdateOneWithoutSubmissionNestedInput
    inlineComments?: InlineCommentUpdateManyWithoutSubmissionNestedInput
    overallFeedback?: OverallFeedbackUpdateOneWithoutSubmissionNestedInput
    subscores?: SubscoreUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutPlagiarismResultsInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    content?: StringFieldUpdateOperationsInput | string
    aiCheckerResultsId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inlineComments?: InlineCommentUncheckedUpdateManyWithoutSubmissionNestedInput
    overallFeedback?: OverallFeedbackUncheckedUpdateOneWithoutSubmissionNestedInput
    subscores?: SubscoreUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type PlagiarismResultsCreateWithoutMatchesInput = {
    id?: string
    score: number
    submission?: SubmissionCreateNestedOneWithoutPlagiarismResultsInput
  }

  export type PlagiarismResultsUncheckedCreateWithoutMatchesInput = {
    id?: string
    score: number
    submission?: SubmissionUncheckedCreateNestedOneWithoutPlagiarismResultsInput
  }

  export type PlagiarismResultsCreateOrConnectWithoutMatchesInput = {
    where: PlagiarismResultsWhereUniqueInput
    create: XOR<PlagiarismResultsCreateWithoutMatchesInput, PlagiarismResultsUncheckedCreateWithoutMatchesInput>
  }

  export type PlagiarismResultsUpsertWithoutMatchesInput = {
    update: XOR<PlagiarismResultsUpdateWithoutMatchesInput, PlagiarismResultsUncheckedUpdateWithoutMatchesInput>
    create: XOR<PlagiarismResultsCreateWithoutMatchesInput, PlagiarismResultsUncheckedCreateWithoutMatchesInput>
    where?: PlagiarismResultsWhereInput
  }

  export type PlagiarismResultsUpdateToOneWithWhereWithoutMatchesInput = {
    where?: PlagiarismResultsWhereInput
    data: XOR<PlagiarismResultsUpdateWithoutMatchesInput, PlagiarismResultsUncheckedUpdateWithoutMatchesInput>
  }

  export type PlagiarismResultsUpdateWithoutMatchesInput = {
    score?: IntFieldUpdateOperationsInput | number
    submission?: SubmissionUpdateOneWithoutPlagiarismResultsNestedInput
  }

  export type PlagiarismResultsUncheckedUpdateWithoutMatchesInput = {
    score?: IntFieldUpdateOperationsInput | number
    submission?: SubmissionUncheckedUpdateOneWithoutPlagiarismResultsNestedInput
  }

  export type UserCreateWithoutInlineCommentsInput = {
    id?: string
    name: string
    email: string
    hashed_password: string
    provider: $Enums.Provider
    courses?: CourseCreateNestedManyWithoutUserInput
    assignments?: AssignmentCreateNestedManyWithoutUserInput
    students?: StudentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInlineCommentsInput = {
    id?: string
    name: string
    email: string
    hashed_password: string
    provider: $Enums.Provider
    courses?: CourseUncheckedCreateNestedManyWithoutUserInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutUserInput
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInlineCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInlineCommentsInput, UserUncheckedCreateWithoutInlineCommentsInput>
  }

  export type SubmissionCreateWithoutInlineCommentsInput = {
    id?: string
    assignmentTitle: string
    studentName?: string | null
    studentId?: string | null
    submissionDate?: Date | string
    status: $Enums.SubmissionStatus
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutSubmissionInput
    aiCheckerResults?: AICheckerResultsCreateNestedOneWithoutSubmissionInput
    plagiarismResults?: PlagiarismResultsCreateNestedOneWithoutSubmissionInput
    overallFeedback?: OverallFeedbackCreateNestedOneWithoutSubmissionInput
    subscores?: SubscoreCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutInlineCommentsInput = {
    id?: string
    assignmentId: string
    assignmentTitle: string
    studentName?: string | null
    studentId?: string | null
    submissionDate?: Date | string
    status: $Enums.SubmissionStatus
    content: string
    aiCheckerResultsId?: string | null
    plagiarismResultsId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    overallFeedback?: OverallFeedbackUncheckedCreateNestedOneWithoutSubmissionInput
    subscores?: SubscoreUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutInlineCommentsInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutInlineCommentsInput, SubmissionUncheckedCreateWithoutInlineCommentsInput>
  }

  export type UserUpsertWithoutInlineCommentsInput = {
    update: XOR<UserUpdateWithoutInlineCommentsInput, UserUncheckedUpdateWithoutInlineCommentsInput>
    create: XOR<UserCreateWithoutInlineCommentsInput, UserUncheckedCreateWithoutInlineCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInlineCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInlineCommentsInput, UserUncheckedUpdateWithoutInlineCommentsInput>
  }

  export type UserUpdateWithoutInlineCommentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    courses?: CourseUpdateManyWithoutUserNestedInput
    assignments?: AssignmentUpdateManyWithoutUserNestedInput
    students?: StudentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInlineCommentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    courses?: CourseUncheckedUpdateManyWithoutUserNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutUserNestedInput
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubmissionUpsertWithoutInlineCommentsInput = {
    update: XOR<SubmissionUpdateWithoutInlineCommentsInput, SubmissionUncheckedUpdateWithoutInlineCommentsInput>
    create: XOR<SubmissionCreateWithoutInlineCommentsInput, SubmissionUncheckedCreateWithoutInlineCommentsInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutInlineCommentsInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutInlineCommentsInput, SubmissionUncheckedUpdateWithoutInlineCommentsInput>
  }

  export type SubmissionUpdateWithoutInlineCommentsInput = {
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionNestedInput
    aiCheckerResults?: AICheckerResultsUpdateOneWithoutSubmissionNestedInput
    plagiarismResults?: PlagiarismResultsUpdateOneWithoutSubmissionNestedInput
    overallFeedback?: OverallFeedbackUpdateOneWithoutSubmissionNestedInput
    subscores?: SubscoreUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutInlineCommentsInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    content?: StringFieldUpdateOperationsInput | string
    aiCheckerResultsId?: NullableStringFieldUpdateOperationsInput | string | null
    plagiarismResultsId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overallFeedback?: OverallFeedbackUncheckedUpdateOneWithoutSubmissionNestedInput
    subscores?: SubscoreUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionCreateWithoutOverallFeedbackInput = {
    id?: string
    assignmentTitle: string
    studentName?: string | null
    studentId?: string | null
    submissionDate?: Date | string
    status: $Enums.SubmissionStatus
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutSubmissionInput
    aiCheckerResults?: AICheckerResultsCreateNestedOneWithoutSubmissionInput
    plagiarismResults?: PlagiarismResultsCreateNestedOneWithoutSubmissionInput
    inlineComments?: InlineCommentCreateNestedManyWithoutSubmissionInput
    subscores?: SubscoreCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutOverallFeedbackInput = {
    id?: string
    assignmentId: string
    assignmentTitle: string
    studentName?: string | null
    studentId?: string | null
    submissionDate?: Date | string
    status: $Enums.SubmissionStatus
    content: string
    aiCheckerResultsId?: string | null
    plagiarismResultsId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inlineComments?: InlineCommentUncheckedCreateNestedManyWithoutSubmissionInput
    subscores?: SubscoreUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutOverallFeedbackInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutOverallFeedbackInput, SubmissionUncheckedCreateWithoutOverallFeedbackInput>
  }

  export type SubmissionUpsertWithoutOverallFeedbackInput = {
    update: XOR<SubmissionUpdateWithoutOverallFeedbackInput, SubmissionUncheckedUpdateWithoutOverallFeedbackInput>
    create: XOR<SubmissionCreateWithoutOverallFeedbackInput, SubmissionUncheckedCreateWithoutOverallFeedbackInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutOverallFeedbackInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutOverallFeedbackInput, SubmissionUncheckedUpdateWithoutOverallFeedbackInput>
  }

  export type SubmissionUpdateWithoutOverallFeedbackInput = {
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionNestedInput
    aiCheckerResults?: AICheckerResultsUpdateOneWithoutSubmissionNestedInput
    plagiarismResults?: PlagiarismResultsUpdateOneWithoutSubmissionNestedInput
    inlineComments?: InlineCommentUpdateManyWithoutSubmissionNestedInput
    subscores?: SubscoreUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutOverallFeedbackInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    content?: StringFieldUpdateOperationsInput | string
    aiCheckerResultsId?: NullableStringFieldUpdateOperationsInput | string | null
    plagiarismResultsId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inlineComments?: InlineCommentUncheckedUpdateManyWithoutSubmissionNestedInput
    subscores?: SubscoreUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionCreateWithoutSubscoresInput = {
    id?: string
    assignmentTitle: string
    studentName?: string | null
    studentId?: string | null
    submissionDate?: Date | string
    status: $Enums.SubmissionStatus
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutSubmissionInput
    aiCheckerResults?: AICheckerResultsCreateNestedOneWithoutSubmissionInput
    plagiarismResults?: PlagiarismResultsCreateNestedOneWithoutSubmissionInput
    inlineComments?: InlineCommentCreateNestedManyWithoutSubmissionInput
    overallFeedback?: OverallFeedbackCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutSubscoresInput = {
    id?: string
    assignmentId: string
    assignmentTitle: string
    studentName?: string | null
    studentId?: string | null
    submissionDate?: Date | string
    status: $Enums.SubmissionStatus
    content: string
    aiCheckerResultsId?: string | null
    plagiarismResultsId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inlineComments?: InlineCommentUncheckedCreateNestedManyWithoutSubmissionInput
    overallFeedback?: OverallFeedbackUncheckedCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutSubscoresInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutSubscoresInput, SubmissionUncheckedCreateWithoutSubscoresInput>
  }

  export type SubmissionUpsertWithoutSubscoresInput = {
    update: XOR<SubmissionUpdateWithoutSubscoresInput, SubmissionUncheckedUpdateWithoutSubscoresInput>
    create: XOR<SubmissionCreateWithoutSubscoresInput, SubmissionUncheckedCreateWithoutSubscoresInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutSubscoresInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutSubscoresInput, SubmissionUncheckedUpdateWithoutSubscoresInput>
  }

  export type SubmissionUpdateWithoutSubscoresInput = {
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionNestedInput
    aiCheckerResults?: AICheckerResultsUpdateOneWithoutSubmissionNestedInput
    plagiarismResults?: PlagiarismResultsUpdateOneWithoutSubmissionNestedInput
    inlineComments?: InlineCommentUpdateManyWithoutSubmissionNestedInput
    overallFeedback?: OverallFeedbackUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutSubscoresInput = {
    assignmentId?: StringFieldUpdateOperationsInput | string
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    content?: StringFieldUpdateOperationsInput | string
    aiCheckerResultsId?: NullableStringFieldUpdateOperationsInput | string | null
    plagiarismResultsId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inlineComments?: InlineCommentUncheckedUpdateManyWithoutSubmissionNestedInput
    overallFeedback?: OverallFeedbackUncheckedUpdateOneWithoutSubmissionNestedInput
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type GradingComponentCompositeFilter = {
    equals?: GradingComponentObjectEqualityInput
    is?: GradingComponentWhereInput
    isNot?: GradingComponentWhereInput
  }

  export type CourseCreateManyUserInput = {
    id?: string
    name: string
    courseTitle: string
    courseDescription: string
    description: string
    instructor: string
    subject: string
    term: string
    gradeLevel: string
    learningObjectives?: CourseCreatelearningObjectivesInput | string[]
    requiredMaterials?: XOR<MaterialListCreateEnvelopeInput, MaterialCreateInput> | MaterialCreateInput[]
    gradingPolicy: XOR<GradingPolicyCreateEnvelopeInput, GradingPolicyCreateInput>
    policies: XOR<PoliciesCreateEnvelopeInput, PoliciesCreateInput>
    weeklySchedule?: XOR<WeeklyScheduleListCreateEnvelopeInput, WeeklyScheduleCreateInput> | WeeklyScheduleCreateInput[]
  }

  export type AssignmentCreateManyUserInput = {
    id?: string
    assignmentTitle: string
    selectedCourse: string
    dueDate: Date | string
    description: string
    learningObjectives: string
    instructions?: string | null
    rubric?: string | null
    questions?: string | null
    answer_key?: string | null
    checklist?: string | null
    participation_criteria?: string | null
    peer_evaluation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCreateManyUserInput = {
    id?: string
    name: string
    email: string
    class: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InlineCommentCreateManyAuthorInput = {
    id?: string
    startIndex: number
    endIndex: number
    text: string
    color: string
    timeStamp: Date | string
    submissionId: string
  }

  export type CourseUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    courseTitle?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    learningObjectives?: CourseUpdatelearningObjectivesInput | string[]
    requiredMaterials?: XOR<MaterialListUpdateEnvelopeInput, MaterialCreateInput> | MaterialCreateInput[]
    gradingPolicy?: XOR<GradingPolicyUpdateEnvelopeInput, GradingPolicyCreateInput>
    policies?: XOR<PoliciesUpdateEnvelopeInput, PoliciesCreateInput>
    weeklySchedule?: XOR<WeeklyScheduleListUpdateEnvelopeInput, WeeklyScheduleCreateInput> | WeeklyScheduleCreateInput[]
  }

  export type CourseUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    courseTitle?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    learningObjectives?: CourseUpdatelearningObjectivesInput | string[]
    requiredMaterials?: XOR<MaterialListUpdateEnvelopeInput, MaterialCreateInput> | MaterialCreateInput[]
    gradingPolicy?: XOR<GradingPolicyUpdateEnvelopeInput, GradingPolicyCreateInput>
    policies?: XOR<PoliciesUpdateEnvelopeInput, PoliciesCreateInput>
    weeklySchedule?: XOR<WeeklyScheduleListUpdateEnvelopeInput, WeeklyScheduleCreateInput> | WeeklyScheduleCreateInput[]
  }

  export type CourseUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    courseTitle?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    learningObjectives?: CourseUpdatelearningObjectivesInput | string[]
    requiredMaterials?: XOR<MaterialListUpdateEnvelopeInput, MaterialCreateInput> | MaterialCreateInput[]
    gradingPolicy?: XOR<GradingPolicyUpdateEnvelopeInput, GradingPolicyCreateInput>
    policies?: XOR<PoliciesUpdateEnvelopeInput, PoliciesCreateInput>
    weeklySchedule?: XOR<WeeklyScheduleListUpdateEnvelopeInput, WeeklyScheduleCreateInput> | WeeklyScheduleCreateInput[]
  }

  export type AssignmentUpdateWithoutUserInput = {
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    selectedCourse?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    rubric?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: NullableStringFieldUpdateOperationsInput | string | null
    answer_key?: NullableStringFieldUpdateOperationsInput | string | null
    checklist?: NullableStringFieldUpdateOperationsInput | string | null
    participation_criteria?: NullableStringFieldUpdateOperationsInput | string | null
    peer_evaluation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutUserInput = {
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    selectedCourse?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    rubric?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: NullableStringFieldUpdateOperationsInput | string | null
    answer_key?: NullableStringFieldUpdateOperationsInput | string | null
    checklist?: NullableStringFieldUpdateOperationsInput | string | null
    participation_criteria?: NullableStringFieldUpdateOperationsInput | string | null
    peer_evaluation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutUserInput = {
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    selectedCourse?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    rubric?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: NullableStringFieldUpdateOperationsInput | string | null
    answer_key?: NullableStringFieldUpdateOperationsInput | string | null
    checklist?: NullableStringFieldUpdateOperationsInput | string | null
    participation_criteria?: NullableStringFieldUpdateOperationsInput | string | null
    peer_evaluation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InlineCommentUpdateWithoutAuthorInput = {
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateOneRequiredWithoutInlineCommentsNestedInput
  }

  export type InlineCommentUncheckedUpdateWithoutAuthorInput = {
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
  }

  export type InlineCommentUncheckedUpdateManyWithoutAuthorInput = {
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
  }

  export type MaterialUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GradingComponentUpdateEnvelopeInput = {
    set?: GradingComponentCreateInput
    update?: GradingComponentUpdateInput
  }

  export type WeeklyScheduleUpdateInput = {
    week?: IntFieldUpdateOperationsInput | number
    topic?: StringFieldUpdateOperationsInput | string
    readings?: StringFieldUpdateOperationsInput | string
    assignments?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionCreateManyAssignmentInput = {
    id?: string
    assignmentTitle: string
    studentName?: string | null
    studentId?: string | null
    submissionDate?: Date | string
    status: $Enums.SubmissionStatus
    content: string
    aiCheckerResultsId?: string | null
    plagiarismResultsId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateWithoutAssignmentInput = {
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiCheckerResults?: AICheckerResultsUpdateOneWithoutSubmissionNestedInput
    plagiarismResults?: PlagiarismResultsUpdateOneWithoutSubmissionNestedInput
    inlineComments?: InlineCommentUpdateManyWithoutSubmissionNestedInput
    overallFeedback?: OverallFeedbackUpdateOneWithoutSubmissionNestedInput
    subscores?: SubscoreUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutAssignmentInput = {
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    content?: StringFieldUpdateOperationsInput | string
    aiCheckerResultsId?: NullableStringFieldUpdateOperationsInput | string | null
    plagiarismResultsId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inlineComments?: InlineCommentUncheckedUpdateManyWithoutSubmissionNestedInput
    overallFeedback?: OverallFeedbackUncheckedUpdateOneWithoutSubmissionNestedInput
    subscores?: SubscoreUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutAssignmentInput = {
    assignmentTitle?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    content?: StringFieldUpdateOperationsInput | string
    aiCheckerResultsId?: NullableStringFieldUpdateOperationsInput | string | null
    plagiarismResultsId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InlineCommentCreateManySubmissionInput = {
    id?: string
    startIndex: number
    endIndex: number
    text: string
    color: string
    timeStamp: Date | string
    authorId: string
  }

  export type SubscoreCreateManySubmissionInput = {
    id?: string
    name: string
    score: number
    maxScore: number
    rationale: string
  }

  export type InlineCommentUpdateWithoutSubmissionInput = {
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutInlineCommentsNestedInput
  }

  export type InlineCommentUncheckedUpdateWithoutSubmissionInput = {
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type InlineCommentUncheckedUpdateManyWithoutSubmissionInput = {
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    timeStamp?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type SubscoreUpdateWithoutSubmissionInput = {
    name?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    maxScore?: FloatFieldUpdateOperationsInput | number
    rationale?: StringFieldUpdateOperationsInput | string
  }

  export type SubscoreUncheckedUpdateWithoutSubmissionInput = {
    name?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    maxScore?: FloatFieldUpdateOperationsInput | number
    rationale?: StringFieldUpdateOperationsInput | string
  }

  export type SubscoreUncheckedUpdateManyWithoutSubmissionInput = {
    name?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    maxScore?: FloatFieldUpdateOperationsInput | number
    rationale?: StringFieldUpdateOperationsInput | string
  }

  export type AIDetailCreateManyAiCheckerResultsInput = {
    id?: string
    section: string
    aiProbability: number
    humanProbability: number
  }

  export type AIDetailUpdateWithoutAiCheckerResultsInput = {
    section?: StringFieldUpdateOperationsInput | string
    aiProbability?: FloatFieldUpdateOperationsInput | number
    humanProbability?: FloatFieldUpdateOperationsInput | number
  }

  export type AIDetailUncheckedUpdateWithoutAiCheckerResultsInput = {
    section?: StringFieldUpdateOperationsInput | string
    aiProbability?: FloatFieldUpdateOperationsInput | number
    humanProbability?: FloatFieldUpdateOperationsInput | number
  }

  export type AIDetailUncheckedUpdateManyWithoutAiCheckerResultsInput = {
    section?: StringFieldUpdateOperationsInput | string
    aiProbability?: FloatFieldUpdateOperationsInput | number
    humanProbability?: FloatFieldUpdateOperationsInput | number
  }

  export type PlagiarismMatchCreateManyPlagiarismResultsInput = {
    id?: string
    test: string
    source: string
    similarity: number
  }

  export type PlagiarismMatchUpdateWithoutPlagiarismResultsInput = {
    test?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    similarity?: FloatFieldUpdateOperationsInput | number
  }

  export type PlagiarismMatchUncheckedUpdateWithoutPlagiarismResultsInput = {
    test?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    similarity?: FloatFieldUpdateOperationsInput | number
  }

  export type PlagiarismMatchUncheckedUpdateManyWithoutPlagiarismResultsInput = {
    test?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    similarity?: FloatFieldUpdateOperationsInput | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type GradingComponentWhereInput = {
    AND?: GradingComponentWhereInput | GradingComponentWhereInput[]
    OR?: GradingComponentWhereInput[]
    NOT?: GradingComponentWhereInput | GradingComponentWhereInput[]
    description?: StringFilter<"GradingComponent"> | string
    percentage?: IntFilter<"GradingComponent"> | number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GradingComponentUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}