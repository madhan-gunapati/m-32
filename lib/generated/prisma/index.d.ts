
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
 * Model RequiredMaterial
 * 
 */
export type RequiredMaterial = $Result.DefaultSelection<Prisma.$RequiredMaterialPayload>
/**
 * Model GradingPolicy
 * 
 */
export type GradingPolicy = $Result.DefaultSelection<Prisma.$GradingPolicyPayload>
/**
 * Model CoursePolicies
 * 
 */
export type CoursePolicies = $Result.DefaultSelection<Prisma.$CoursePoliciesPayload>
/**
 * Model GradingReference
 * 
 */
export type GradingReference = $Result.DefaultSelection<Prisma.$GradingReferencePayload>

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

}

export type Provider = $Enums.Provider

export const Provider: typeof $Enums.Provider

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type SubsciptionType = $Enums.SubsciptionType

export const SubsciptionType: typeof $Enums.SubsciptionType

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
   * `prisma.requiredMaterial`: Exposes CRUD operations for the **RequiredMaterial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequiredMaterials
    * const requiredMaterials = await prisma.requiredMaterial.findMany()
    * ```
    */
  get requiredMaterial(): Prisma.RequiredMaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gradingPolicy`: Exposes CRUD operations for the **GradingPolicy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GradingPolicies
    * const gradingPolicies = await prisma.gradingPolicy.findMany()
    * ```
    */
  get gradingPolicy(): Prisma.GradingPolicyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coursePolicies`: Exposes CRUD operations for the **CoursePolicies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoursePolicies
    * const coursePolicies = await prisma.coursePolicies.findMany()
    * ```
    */
  get coursePolicies(): Prisma.CoursePoliciesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gradingReference`: Exposes CRUD operations for the **GradingReference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GradingReferences
    * const gradingReferences = await prisma.gradingReference.findMany()
    * ```
    */
  get gradingReference(): Prisma.GradingReferenceDelegate<ExtArgs, ClientOptions>;
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
    RequiredMaterial: 'RequiredMaterial',
    GradingPolicy: 'GradingPolicy',
    CoursePolicies: 'CoursePolicies',
    GradingReference: 'GradingReference'
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
      modelProps: "payments" | "user" | "course" | "requiredMaterial" | "gradingPolicy" | "coursePolicies" | "gradingReference"
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
      RequiredMaterial: {
        payload: Prisma.$RequiredMaterialPayload<ExtArgs>
        fields: Prisma.RequiredMaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequiredMaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequiredMaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequiredMaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequiredMaterialPayload>
          }
          findFirst: {
            args: Prisma.RequiredMaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequiredMaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequiredMaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequiredMaterialPayload>
          }
          findMany: {
            args: Prisma.RequiredMaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequiredMaterialPayload>[]
          }
          create: {
            args: Prisma.RequiredMaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequiredMaterialPayload>
          }
          createMany: {
            args: Prisma.RequiredMaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RequiredMaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequiredMaterialPayload>
          }
          update: {
            args: Prisma.RequiredMaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequiredMaterialPayload>
          }
          deleteMany: {
            args: Prisma.RequiredMaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequiredMaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RequiredMaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequiredMaterialPayload>
          }
          aggregate: {
            args: Prisma.RequiredMaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequiredMaterial>
          }
          groupBy: {
            args: Prisma.RequiredMaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequiredMaterialGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RequiredMaterialFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RequiredMaterialAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RequiredMaterialCountArgs<ExtArgs>
            result: $Utils.Optional<RequiredMaterialCountAggregateOutputType> | number
          }
        }
      }
      GradingPolicy: {
        payload: Prisma.$GradingPolicyPayload<ExtArgs>
        fields: Prisma.GradingPolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GradingPolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingPolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GradingPolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingPolicyPayload>
          }
          findFirst: {
            args: Prisma.GradingPolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingPolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GradingPolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingPolicyPayload>
          }
          findMany: {
            args: Prisma.GradingPolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingPolicyPayload>[]
          }
          create: {
            args: Prisma.GradingPolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingPolicyPayload>
          }
          createMany: {
            args: Prisma.GradingPolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GradingPolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingPolicyPayload>
          }
          update: {
            args: Prisma.GradingPolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingPolicyPayload>
          }
          deleteMany: {
            args: Prisma.GradingPolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GradingPolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GradingPolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingPolicyPayload>
          }
          aggregate: {
            args: Prisma.GradingPolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGradingPolicy>
          }
          groupBy: {
            args: Prisma.GradingPolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<GradingPolicyGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GradingPolicyFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.GradingPolicyAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.GradingPolicyCountArgs<ExtArgs>
            result: $Utils.Optional<GradingPolicyCountAggregateOutputType> | number
          }
        }
      }
      CoursePolicies: {
        payload: Prisma.$CoursePoliciesPayload<ExtArgs>
        fields: Prisma.CoursePoliciesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoursePoliciesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePoliciesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoursePoliciesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePoliciesPayload>
          }
          findFirst: {
            args: Prisma.CoursePoliciesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePoliciesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoursePoliciesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePoliciesPayload>
          }
          findMany: {
            args: Prisma.CoursePoliciesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePoliciesPayload>[]
          }
          create: {
            args: Prisma.CoursePoliciesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePoliciesPayload>
          }
          createMany: {
            args: Prisma.CoursePoliciesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CoursePoliciesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePoliciesPayload>
          }
          update: {
            args: Prisma.CoursePoliciesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePoliciesPayload>
          }
          deleteMany: {
            args: Prisma.CoursePoliciesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoursePoliciesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CoursePoliciesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePoliciesPayload>
          }
          aggregate: {
            args: Prisma.CoursePoliciesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoursePolicies>
          }
          groupBy: {
            args: Prisma.CoursePoliciesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursePoliciesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CoursePoliciesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CoursePoliciesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CoursePoliciesCountArgs<ExtArgs>
            result: $Utils.Optional<CoursePoliciesCountAggregateOutputType> | number
          }
        }
      }
      GradingReference: {
        payload: Prisma.$GradingReferencePayload<ExtArgs>
        fields: Prisma.GradingReferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GradingReferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingReferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GradingReferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingReferencePayload>
          }
          findFirst: {
            args: Prisma.GradingReferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingReferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GradingReferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingReferencePayload>
          }
          findMany: {
            args: Prisma.GradingReferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingReferencePayload>[]
          }
          create: {
            args: Prisma.GradingReferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingReferencePayload>
          }
          createMany: {
            args: Prisma.GradingReferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GradingReferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingReferencePayload>
          }
          update: {
            args: Prisma.GradingReferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingReferencePayload>
          }
          deleteMany: {
            args: Prisma.GradingReferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GradingReferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GradingReferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingReferencePayload>
          }
          aggregate: {
            args: Prisma.GradingReferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGradingReference>
          }
          groupBy: {
            args: Prisma.GradingReferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<GradingReferenceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GradingReferenceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.GradingReferenceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.GradingReferenceCountArgs<ExtArgs>
            result: $Utils.Optional<GradingReferenceCountAggregateOutputType> | number
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
    requiredMaterial?: RequiredMaterialOmit
    gradingPolicy?: GradingPolicyOmit
    coursePolicies?: CoursePoliciesOmit
    gradingReference?: GradingReferenceOmit
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
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | UserCountOutputTypeCountCoursesArgs
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
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    requiredMaterials: number
    gradingReferences: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requiredMaterials?: boolean | CourseCountOutputTypeCountRequiredMaterialsArgs
    gradingReferences?: boolean | CourseCountOutputTypeCountGradingReferencesArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountRequiredMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequiredMaterialWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountGradingReferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradingReferenceWhereInput
  }


  /**
   * Models
   */

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
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
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
    name: string | null
    instructorId: string | null
    subject: string | null
    gradeLevel: string | null
    courseDescription: string | null
    generationPrompt: string | null
    additionalInfo: string | null
    term: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    instructorId: string | null
    subject: string | null
    gradeLevel: string | null
    courseDescription: string | null
    generationPrompt: string | null
    additionalInfo: string | null
    term: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    instructorId: number
    subject: number
    gradeLevel: number
    courseDescription: number
    generationPrompt: number
    additionalInfo: number
    term: number
    learningObjects: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    instructorId?: true
    subject?: true
    gradeLevel?: true
    courseDescription?: true
    generationPrompt?: true
    additionalInfo?: true
    term?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    instructorId?: true
    subject?: true
    gradeLevel?: true
    courseDescription?: true
    generationPrompt?: true
    additionalInfo?: true
    term?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    instructorId?: true
    subject?: true
    gradeLevel?: true
    courseDescription?: true
    generationPrompt?: true
    additionalInfo?: true
    term?: true
    learningObjects?: true
    createdAt?: true
    updatedAt?: true
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
    name: string
    instructorId: string
    subject: string
    gradeLevel: string
    courseDescription: string
    generationPrompt: string
    additionalInfo: string | null
    term: string
    learningObjects: string[]
    createdAt: Date
    updatedAt: Date
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
    name?: boolean
    instructorId?: boolean
    subject?: boolean
    gradeLevel?: boolean
    courseDescription?: boolean
    generationPrompt?: boolean
    additionalInfo?: boolean
    term?: boolean
    learningObjects?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    requiredMaterials?: boolean | Course$requiredMaterialsArgs<ExtArgs>
    gradingPolicy?: boolean | Course$gradingPolicyArgs<ExtArgs>
    coursePolicies?: boolean | Course$coursePoliciesArgs<ExtArgs>
    gradingReferences?: boolean | Course$gradingReferencesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>



  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    instructorId?: boolean
    subject?: boolean
    gradeLevel?: boolean
    courseDescription?: boolean
    generationPrompt?: boolean
    additionalInfo?: boolean
    term?: boolean
    learningObjects?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "instructorId" | "subject" | "gradeLevel" | "courseDescription" | "generationPrompt" | "additionalInfo" | "term" | "learningObjects" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    requiredMaterials?: boolean | Course$requiredMaterialsArgs<ExtArgs>
    gradingPolicy?: boolean | Course$gradingPolicyArgs<ExtArgs>
    coursePolicies?: boolean | Course$coursePoliciesArgs<ExtArgs>
    gradingReferences?: boolean | Course$gradingReferencesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      instructor: Prisma.$UserPayload<ExtArgs>
      requiredMaterials: Prisma.$RequiredMaterialPayload<ExtArgs>[]
      gradingPolicy: Prisma.$GradingPolicyPayload<ExtArgs> | null
      coursePolicies: Prisma.$CoursePoliciesPayload<ExtArgs> | null
      gradingReferences: Prisma.$GradingReferencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      instructorId: string
      subject: string
      gradeLevel: string
      courseDescription: string
      generationPrompt: string
      additionalInfo: string | null
      term: string
      learningObjects: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
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
    instructor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requiredMaterials<T extends Course$requiredMaterialsArgs<ExtArgs> = {}>(args?: Subset<T, Course$requiredMaterialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequiredMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gradingPolicy<T extends Course$gradingPolicyArgs<ExtArgs> = {}>(args?: Subset<T, Course$gradingPolicyArgs<ExtArgs>>): Prisma__GradingPolicyClient<$Result.GetResult<Prisma.$GradingPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    coursePolicies<T extends Course$coursePoliciesArgs<ExtArgs> = {}>(args?: Subset<T, Course$coursePoliciesArgs<ExtArgs>>): Prisma__CoursePoliciesClient<$Result.GetResult<Prisma.$CoursePoliciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    gradingReferences<T extends Course$gradingReferencesArgs<ExtArgs> = {}>(args?: Subset<T, Course$gradingReferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradingReferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"Course", 'String'>
    readonly instructorId: FieldRef<"Course", 'String'>
    readonly subject: FieldRef<"Course", 'String'>
    readonly gradeLevel: FieldRef<"Course", 'String'>
    readonly courseDescription: FieldRef<"Course", 'String'>
    readonly generationPrompt: FieldRef<"Course", 'String'>
    readonly additionalInfo: FieldRef<"Course", 'String'>
    readonly term: FieldRef<"Course", 'String'>
    readonly learningObjects: FieldRef<"Course", 'String[]'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
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
   * Course.requiredMaterials
   */
  export type Course$requiredMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredMaterial
     */
    select?: RequiredMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredMaterial
     */
    omit?: RequiredMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredMaterialInclude<ExtArgs> | null
    where?: RequiredMaterialWhereInput
    orderBy?: RequiredMaterialOrderByWithRelationInput | RequiredMaterialOrderByWithRelationInput[]
    cursor?: RequiredMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequiredMaterialScalarFieldEnum | RequiredMaterialScalarFieldEnum[]
  }

  /**
   * Course.gradingPolicy
   */
  export type Course$gradingPolicyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: GradingPolicyWhereInput
  }

  /**
   * Course.coursePolicies
   */
  export type Course$coursePoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePolicies
     */
    select?: CoursePoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePolicies
     */
    omit?: CoursePoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePoliciesInclude<ExtArgs> | null
    where?: CoursePoliciesWhereInput
  }

  /**
   * Course.gradingReferences
   */
  export type Course$gradingReferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReference
     */
    select?: GradingReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReference
     */
    omit?: GradingReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReferenceInclude<ExtArgs> | null
    where?: GradingReferenceWhereInput
    orderBy?: GradingReferenceOrderByWithRelationInput | GradingReferenceOrderByWithRelationInput[]
    cursor?: GradingReferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GradingReferenceScalarFieldEnum | GradingReferenceScalarFieldEnum[]
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
   * Model RequiredMaterial
   */

  export type AggregateRequiredMaterial = {
    _count: RequiredMaterialCountAggregateOutputType | null
    _min: RequiredMaterialMinAggregateOutputType | null
    _max: RequiredMaterialMaxAggregateOutputType | null
  }

  export type RequiredMaterialMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    title: string | null
    author: string | null
    publisher: string | null
    required: boolean | null
  }

  export type RequiredMaterialMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    title: string | null
    author: string | null
    publisher: string | null
    required: boolean | null
  }

  export type RequiredMaterialCountAggregateOutputType = {
    id: number
    courseId: number
    title: number
    author: number
    publisher: number
    required: number
    _all: number
  }


  export type RequiredMaterialMinAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    author?: true
    publisher?: true
    required?: true
  }

  export type RequiredMaterialMaxAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    author?: true
    publisher?: true
    required?: true
  }

  export type RequiredMaterialCountAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    author?: true
    publisher?: true
    required?: true
    _all?: true
  }

  export type RequiredMaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequiredMaterial to aggregate.
     */
    where?: RequiredMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequiredMaterials to fetch.
     */
    orderBy?: RequiredMaterialOrderByWithRelationInput | RequiredMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequiredMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequiredMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequiredMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequiredMaterials
    **/
    _count?: true | RequiredMaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequiredMaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequiredMaterialMaxAggregateInputType
  }

  export type GetRequiredMaterialAggregateType<T extends RequiredMaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateRequiredMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequiredMaterial[P]>
      : GetScalarType<T[P], AggregateRequiredMaterial[P]>
  }




  export type RequiredMaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequiredMaterialWhereInput
    orderBy?: RequiredMaterialOrderByWithAggregationInput | RequiredMaterialOrderByWithAggregationInput[]
    by: RequiredMaterialScalarFieldEnum[] | RequiredMaterialScalarFieldEnum
    having?: RequiredMaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequiredMaterialCountAggregateInputType | true
    _min?: RequiredMaterialMinAggregateInputType
    _max?: RequiredMaterialMaxAggregateInputType
  }

  export type RequiredMaterialGroupByOutputType = {
    id: string
    courseId: string
    title: string
    author: string
    publisher: string
    required: boolean
    _count: RequiredMaterialCountAggregateOutputType | null
    _min: RequiredMaterialMinAggregateOutputType | null
    _max: RequiredMaterialMaxAggregateOutputType | null
  }

  type GetRequiredMaterialGroupByPayload<T extends RequiredMaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequiredMaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequiredMaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequiredMaterialGroupByOutputType[P]>
            : GetScalarType<T[P], RequiredMaterialGroupByOutputType[P]>
        }
      >
    >


  export type RequiredMaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    title?: boolean
    author?: boolean
    publisher?: boolean
    required?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requiredMaterial"]>



  export type RequiredMaterialSelectScalar = {
    id?: boolean
    courseId?: boolean
    title?: boolean
    author?: boolean
    publisher?: boolean
    required?: boolean
  }

  export type RequiredMaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "title" | "author" | "publisher" | "required", ExtArgs["result"]["requiredMaterial"]>
  export type RequiredMaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $RequiredMaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequiredMaterial"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      title: string
      author: string
      publisher: string
      required: boolean
    }, ExtArgs["result"]["requiredMaterial"]>
    composites: {}
  }

  type RequiredMaterialGetPayload<S extends boolean | null | undefined | RequiredMaterialDefaultArgs> = $Result.GetResult<Prisma.$RequiredMaterialPayload, S>

  type RequiredMaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequiredMaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequiredMaterialCountAggregateInputType | true
    }

  export interface RequiredMaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequiredMaterial'], meta: { name: 'RequiredMaterial' } }
    /**
     * Find zero or one RequiredMaterial that matches the filter.
     * @param {RequiredMaterialFindUniqueArgs} args - Arguments to find a RequiredMaterial
     * @example
     * // Get one RequiredMaterial
     * const requiredMaterial = await prisma.requiredMaterial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequiredMaterialFindUniqueArgs>(args: SelectSubset<T, RequiredMaterialFindUniqueArgs<ExtArgs>>): Prisma__RequiredMaterialClient<$Result.GetResult<Prisma.$RequiredMaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequiredMaterial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequiredMaterialFindUniqueOrThrowArgs} args - Arguments to find a RequiredMaterial
     * @example
     * // Get one RequiredMaterial
     * const requiredMaterial = await prisma.requiredMaterial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequiredMaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, RequiredMaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequiredMaterialClient<$Result.GetResult<Prisma.$RequiredMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequiredMaterial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequiredMaterialFindFirstArgs} args - Arguments to find a RequiredMaterial
     * @example
     * // Get one RequiredMaterial
     * const requiredMaterial = await prisma.requiredMaterial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequiredMaterialFindFirstArgs>(args?: SelectSubset<T, RequiredMaterialFindFirstArgs<ExtArgs>>): Prisma__RequiredMaterialClient<$Result.GetResult<Prisma.$RequiredMaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequiredMaterial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequiredMaterialFindFirstOrThrowArgs} args - Arguments to find a RequiredMaterial
     * @example
     * // Get one RequiredMaterial
     * const requiredMaterial = await prisma.requiredMaterial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequiredMaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, RequiredMaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequiredMaterialClient<$Result.GetResult<Prisma.$RequiredMaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequiredMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequiredMaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequiredMaterials
     * const requiredMaterials = await prisma.requiredMaterial.findMany()
     * 
     * // Get first 10 RequiredMaterials
     * const requiredMaterials = await prisma.requiredMaterial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requiredMaterialWithIdOnly = await prisma.requiredMaterial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequiredMaterialFindManyArgs>(args?: SelectSubset<T, RequiredMaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequiredMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequiredMaterial.
     * @param {RequiredMaterialCreateArgs} args - Arguments to create a RequiredMaterial.
     * @example
     * // Create one RequiredMaterial
     * const RequiredMaterial = await prisma.requiredMaterial.create({
     *   data: {
     *     // ... data to create a RequiredMaterial
     *   }
     * })
     * 
     */
    create<T extends RequiredMaterialCreateArgs>(args: SelectSubset<T, RequiredMaterialCreateArgs<ExtArgs>>): Prisma__RequiredMaterialClient<$Result.GetResult<Prisma.$RequiredMaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequiredMaterials.
     * @param {RequiredMaterialCreateManyArgs} args - Arguments to create many RequiredMaterials.
     * @example
     * // Create many RequiredMaterials
     * const requiredMaterial = await prisma.requiredMaterial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequiredMaterialCreateManyArgs>(args?: SelectSubset<T, RequiredMaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RequiredMaterial.
     * @param {RequiredMaterialDeleteArgs} args - Arguments to delete one RequiredMaterial.
     * @example
     * // Delete one RequiredMaterial
     * const RequiredMaterial = await prisma.requiredMaterial.delete({
     *   where: {
     *     // ... filter to delete one RequiredMaterial
     *   }
     * })
     * 
     */
    delete<T extends RequiredMaterialDeleteArgs>(args: SelectSubset<T, RequiredMaterialDeleteArgs<ExtArgs>>): Prisma__RequiredMaterialClient<$Result.GetResult<Prisma.$RequiredMaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequiredMaterial.
     * @param {RequiredMaterialUpdateArgs} args - Arguments to update one RequiredMaterial.
     * @example
     * // Update one RequiredMaterial
     * const requiredMaterial = await prisma.requiredMaterial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequiredMaterialUpdateArgs>(args: SelectSubset<T, RequiredMaterialUpdateArgs<ExtArgs>>): Prisma__RequiredMaterialClient<$Result.GetResult<Prisma.$RequiredMaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequiredMaterials.
     * @param {RequiredMaterialDeleteManyArgs} args - Arguments to filter RequiredMaterials to delete.
     * @example
     * // Delete a few RequiredMaterials
     * const { count } = await prisma.requiredMaterial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequiredMaterialDeleteManyArgs>(args?: SelectSubset<T, RequiredMaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequiredMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequiredMaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequiredMaterials
     * const requiredMaterial = await prisma.requiredMaterial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequiredMaterialUpdateManyArgs>(args: SelectSubset<T, RequiredMaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RequiredMaterial.
     * @param {RequiredMaterialUpsertArgs} args - Arguments to update or create a RequiredMaterial.
     * @example
     * // Update or create a RequiredMaterial
     * const requiredMaterial = await prisma.requiredMaterial.upsert({
     *   create: {
     *     // ... data to create a RequiredMaterial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequiredMaterial we want to update
     *   }
     * })
     */
    upsert<T extends RequiredMaterialUpsertArgs>(args: SelectSubset<T, RequiredMaterialUpsertArgs<ExtArgs>>): Prisma__RequiredMaterialClient<$Result.GetResult<Prisma.$RequiredMaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequiredMaterials that matches the filter.
     * @param {RequiredMaterialFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const requiredMaterial = await prisma.requiredMaterial.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RequiredMaterialFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RequiredMaterial.
     * @param {RequiredMaterialAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const requiredMaterial = await prisma.requiredMaterial.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RequiredMaterialAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of RequiredMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequiredMaterialCountArgs} args - Arguments to filter RequiredMaterials to count.
     * @example
     * // Count the number of RequiredMaterials
     * const count = await prisma.requiredMaterial.count({
     *   where: {
     *     // ... the filter for the RequiredMaterials we want to count
     *   }
     * })
    **/
    count<T extends RequiredMaterialCountArgs>(
      args?: Subset<T, RequiredMaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequiredMaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequiredMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequiredMaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RequiredMaterialAggregateArgs>(args: Subset<T, RequiredMaterialAggregateArgs>): Prisma.PrismaPromise<GetRequiredMaterialAggregateType<T>>

    /**
     * Group by RequiredMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequiredMaterialGroupByArgs} args - Group by arguments.
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
      T extends RequiredMaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequiredMaterialGroupByArgs['orderBy'] }
        : { orderBy?: RequiredMaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RequiredMaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequiredMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequiredMaterial model
   */
  readonly fields: RequiredMaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequiredMaterial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequiredMaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RequiredMaterial model
   */
  interface RequiredMaterialFieldRefs {
    readonly id: FieldRef<"RequiredMaterial", 'String'>
    readonly courseId: FieldRef<"RequiredMaterial", 'String'>
    readonly title: FieldRef<"RequiredMaterial", 'String'>
    readonly author: FieldRef<"RequiredMaterial", 'String'>
    readonly publisher: FieldRef<"RequiredMaterial", 'String'>
    readonly required: FieldRef<"RequiredMaterial", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RequiredMaterial findUnique
   */
  export type RequiredMaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredMaterial
     */
    select?: RequiredMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredMaterial
     */
    omit?: RequiredMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredMaterialInclude<ExtArgs> | null
    /**
     * Filter, which RequiredMaterial to fetch.
     */
    where: RequiredMaterialWhereUniqueInput
  }

  /**
   * RequiredMaterial findUniqueOrThrow
   */
  export type RequiredMaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredMaterial
     */
    select?: RequiredMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredMaterial
     */
    omit?: RequiredMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredMaterialInclude<ExtArgs> | null
    /**
     * Filter, which RequiredMaterial to fetch.
     */
    where: RequiredMaterialWhereUniqueInput
  }

  /**
   * RequiredMaterial findFirst
   */
  export type RequiredMaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredMaterial
     */
    select?: RequiredMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredMaterial
     */
    omit?: RequiredMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredMaterialInclude<ExtArgs> | null
    /**
     * Filter, which RequiredMaterial to fetch.
     */
    where?: RequiredMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequiredMaterials to fetch.
     */
    orderBy?: RequiredMaterialOrderByWithRelationInput | RequiredMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequiredMaterials.
     */
    cursor?: RequiredMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequiredMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequiredMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequiredMaterials.
     */
    distinct?: RequiredMaterialScalarFieldEnum | RequiredMaterialScalarFieldEnum[]
  }

  /**
   * RequiredMaterial findFirstOrThrow
   */
  export type RequiredMaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredMaterial
     */
    select?: RequiredMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredMaterial
     */
    omit?: RequiredMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredMaterialInclude<ExtArgs> | null
    /**
     * Filter, which RequiredMaterial to fetch.
     */
    where?: RequiredMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequiredMaterials to fetch.
     */
    orderBy?: RequiredMaterialOrderByWithRelationInput | RequiredMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequiredMaterials.
     */
    cursor?: RequiredMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequiredMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequiredMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequiredMaterials.
     */
    distinct?: RequiredMaterialScalarFieldEnum | RequiredMaterialScalarFieldEnum[]
  }

  /**
   * RequiredMaterial findMany
   */
  export type RequiredMaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredMaterial
     */
    select?: RequiredMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredMaterial
     */
    omit?: RequiredMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredMaterialInclude<ExtArgs> | null
    /**
     * Filter, which RequiredMaterials to fetch.
     */
    where?: RequiredMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequiredMaterials to fetch.
     */
    orderBy?: RequiredMaterialOrderByWithRelationInput | RequiredMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequiredMaterials.
     */
    cursor?: RequiredMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequiredMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequiredMaterials.
     */
    skip?: number
    distinct?: RequiredMaterialScalarFieldEnum | RequiredMaterialScalarFieldEnum[]
  }

  /**
   * RequiredMaterial create
   */
  export type RequiredMaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredMaterial
     */
    select?: RequiredMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredMaterial
     */
    omit?: RequiredMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredMaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a RequiredMaterial.
     */
    data: XOR<RequiredMaterialCreateInput, RequiredMaterialUncheckedCreateInput>
  }

  /**
   * RequiredMaterial createMany
   */
  export type RequiredMaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequiredMaterials.
     */
    data: RequiredMaterialCreateManyInput | RequiredMaterialCreateManyInput[]
  }

  /**
   * RequiredMaterial update
   */
  export type RequiredMaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredMaterial
     */
    select?: RequiredMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredMaterial
     */
    omit?: RequiredMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredMaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a RequiredMaterial.
     */
    data: XOR<RequiredMaterialUpdateInput, RequiredMaterialUncheckedUpdateInput>
    /**
     * Choose, which RequiredMaterial to update.
     */
    where: RequiredMaterialWhereUniqueInput
  }

  /**
   * RequiredMaterial updateMany
   */
  export type RequiredMaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequiredMaterials.
     */
    data: XOR<RequiredMaterialUpdateManyMutationInput, RequiredMaterialUncheckedUpdateManyInput>
    /**
     * Filter which RequiredMaterials to update
     */
    where?: RequiredMaterialWhereInput
    /**
     * Limit how many RequiredMaterials to update.
     */
    limit?: number
  }

  /**
   * RequiredMaterial upsert
   */
  export type RequiredMaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredMaterial
     */
    select?: RequiredMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredMaterial
     */
    omit?: RequiredMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredMaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the RequiredMaterial to update in case it exists.
     */
    where: RequiredMaterialWhereUniqueInput
    /**
     * In case the RequiredMaterial found by the `where` argument doesn't exist, create a new RequiredMaterial with this data.
     */
    create: XOR<RequiredMaterialCreateInput, RequiredMaterialUncheckedCreateInput>
    /**
     * In case the RequiredMaterial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequiredMaterialUpdateInput, RequiredMaterialUncheckedUpdateInput>
  }

  /**
   * RequiredMaterial delete
   */
  export type RequiredMaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredMaterial
     */
    select?: RequiredMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredMaterial
     */
    omit?: RequiredMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredMaterialInclude<ExtArgs> | null
    /**
     * Filter which RequiredMaterial to delete.
     */
    where: RequiredMaterialWhereUniqueInput
  }

  /**
   * RequiredMaterial deleteMany
   */
  export type RequiredMaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequiredMaterials to delete
     */
    where?: RequiredMaterialWhereInput
    /**
     * Limit how many RequiredMaterials to delete.
     */
    limit?: number
  }

  /**
   * RequiredMaterial findRaw
   */
  export type RequiredMaterialFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * RequiredMaterial aggregateRaw
   */
  export type RequiredMaterialAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * RequiredMaterial without action
   */
  export type RequiredMaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredMaterial
     */
    select?: RequiredMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredMaterial
     */
    omit?: RequiredMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredMaterialInclude<ExtArgs> | null
  }


  /**
   * Model GradingPolicy
   */

  export type AggregateGradingPolicy = {
    _count: GradingPolicyCountAggregateOutputType | null
    _avg: GradingPolicyAvgAggregateOutputType | null
    _sum: GradingPolicySumAggregateOutputType | null
    _min: GradingPolicyMinAggregateOutputType | null
    _max: GradingPolicyMaxAggregateOutputType | null
  }

  export type GradingPolicyAvgAggregateOutputType = {
    assignment: number | null
    participation: number | null
    midterm: number | null
    finalExam: number | null
  }

  export type GradingPolicySumAggregateOutputType = {
    assignment: number | null
    participation: number | null
    midterm: number | null
    finalExam: number | null
  }

  export type GradingPolicyMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    assignment: number | null
    participation: number | null
    midterm: number | null
    finalExam: number | null
  }

  export type GradingPolicyMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    assignment: number | null
    participation: number | null
    midterm: number | null
    finalExam: number | null
  }

  export type GradingPolicyCountAggregateOutputType = {
    id: number
    courseId: number
    assignment: number
    participation: number
    midterm: number
    finalExam: number
    _all: number
  }


  export type GradingPolicyAvgAggregateInputType = {
    assignment?: true
    participation?: true
    midterm?: true
    finalExam?: true
  }

  export type GradingPolicySumAggregateInputType = {
    assignment?: true
    participation?: true
    midterm?: true
    finalExam?: true
  }

  export type GradingPolicyMinAggregateInputType = {
    id?: true
    courseId?: true
    assignment?: true
    participation?: true
    midterm?: true
    finalExam?: true
  }

  export type GradingPolicyMaxAggregateInputType = {
    id?: true
    courseId?: true
    assignment?: true
    participation?: true
    midterm?: true
    finalExam?: true
  }

  export type GradingPolicyCountAggregateInputType = {
    id?: true
    courseId?: true
    assignment?: true
    participation?: true
    midterm?: true
    finalExam?: true
    _all?: true
  }

  export type GradingPolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GradingPolicy to aggregate.
     */
    where?: GradingPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradingPolicies to fetch.
     */
    orderBy?: GradingPolicyOrderByWithRelationInput | GradingPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GradingPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradingPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradingPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GradingPolicies
    **/
    _count?: true | GradingPolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GradingPolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GradingPolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GradingPolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GradingPolicyMaxAggregateInputType
  }

  export type GetGradingPolicyAggregateType<T extends GradingPolicyAggregateArgs> = {
        [P in keyof T & keyof AggregateGradingPolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGradingPolicy[P]>
      : GetScalarType<T[P], AggregateGradingPolicy[P]>
  }




  export type GradingPolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradingPolicyWhereInput
    orderBy?: GradingPolicyOrderByWithAggregationInput | GradingPolicyOrderByWithAggregationInput[]
    by: GradingPolicyScalarFieldEnum[] | GradingPolicyScalarFieldEnum
    having?: GradingPolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GradingPolicyCountAggregateInputType | true
    _avg?: GradingPolicyAvgAggregateInputType
    _sum?: GradingPolicySumAggregateInputType
    _min?: GradingPolicyMinAggregateInputType
    _max?: GradingPolicyMaxAggregateInputType
  }

  export type GradingPolicyGroupByOutputType = {
    id: string
    courseId: string
    assignment: number
    participation: number
    midterm: number
    finalExam: number
    _count: GradingPolicyCountAggregateOutputType | null
    _avg: GradingPolicyAvgAggregateOutputType | null
    _sum: GradingPolicySumAggregateOutputType | null
    _min: GradingPolicyMinAggregateOutputType | null
    _max: GradingPolicyMaxAggregateOutputType | null
  }

  type GetGradingPolicyGroupByPayload<T extends GradingPolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GradingPolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GradingPolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GradingPolicyGroupByOutputType[P]>
            : GetScalarType<T[P], GradingPolicyGroupByOutputType[P]>
        }
      >
    >


  export type GradingPolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    assignment?: boolean
    participation?: boolean
    midterm?: boolean
    finalExam?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gradingPolicy"]>



  export type GradingPolicySelectScalar = {
    id?: boolean
    courseId?: boolean
    assignment?: boolean
    participation?: boolean
    midterm?: boolean
    finalExam?: boolean
  }

  export type GradingPolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "assignment" | "participation" | "midterm" | "finalExam", ExtArgs["result"]["gradingPolicy"]>
  export type GradingPolicyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $GradingPolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GradingPolicy"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      assignment: number
      participation: number
      midterm: number
      finalExam: number
    }, ExtArgs["result"]["gradingPolicy"]>
    composites: {}
  }

  type GradingPolicyGetPayload<S extends boolean | null | undefined | GradingPolicyDefaultArgs> = $Result.GetResult<Prisma.$GradingPolicyPayload, S>

  type GradingPolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GradingPolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GradingPolicyCountAggregateInputType | true
    }

  export interface GradingPolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GradingPolicy'], meta: { name: 'GradingPolicy' } }
    /**
     * Find zero or one GradingPolicy that matches the filter.
     * @param {GradingPolicyFindUniqueArgs} args - Arguments to find a GradingPolicy
     * @example
     * // Get one GradingPolicy
     * const gradingPolicy = await prisma.gradingPolicy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GradingPolicyFindUniqueArgs>(args: SelectSubset<T, GradingPolicyFindUniqueArgs<ExtArgs>>): Prisma__GradingPolicyClient<$Result.GetResult<Prisma.$GradingPolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GradingPolicy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GradingPolicyFindUniqueOrThrowArgs} args - Arguments to find a GradingPolicy
     * @example
     * // Get one GradingPolicy
     * const gradingPolicy = await prisma.gradingPolicy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GradingPolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, GradingPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GradingPolicyClient<$Result.GetResult<Prisma.$GradingPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GradingPolicy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingPolicyFindFirstArgs} args - Arguments to find a GradingPolicy
     * @example
     * // Get one GradingPolicy
     * const gradingPolicy = await prisma.gradingPolicy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GradingPolicyFindFirstArgs>(args?: SelectSubset<T, GradingPolicyFindFirstArgs<ExtArgs>>): Prisma__GradingPolicyClient<$Result.GetResult<Prisma.$GradingPolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GradingPolicy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingPolicyFindFirstOrThrowArgs} args - Arguments to find a GradingPolicy
     * @example
     * // Get one GradingPolicy
     * const gradingPolicy = await prisma.gradingPolicy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GradingPolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, GradingPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__GradingPolicyClient<$Result.GetResult<Prisma.$GradingPolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GradingPolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingPolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GradingPolicies
     * const gradingPolicies = await prisma.gradingPolicy.findMany()
     * 
     * // Get first 10 GradingPolicies
     * const gradingPolicies = await prisma.gradingPolicy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gradingPolicyWithIdOnly = await prisma.gradingPolicy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GradingPolicyFindManyArgs>(args?: SelectSubset<T, GradingPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradingPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GradingPolicy.
     * @param {GradingPolicyCreateArgs} args - Arguments to create a GradingPolicy.
     * @example
     * // Create one GradingPolicy
     * const GradingPolicy = await prisma.gradingPolicy.create({
     *   data: {
     *     // ... data to create a GradingPolicy
     *   }
     * })
     * 
     */
    create<T extends GradingPolicyCreateArgs>(args: SelectSubset<T, GradingPolicyCreateArgs<ExtArgs>>): Prisma__GradingPolicyClient<$Result.GetResult<Prisma.$GradingPolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GradingPolicies.
     * @param {GradingPolicyCreateManyArgs} args - Arguments to create many GradingPolicies.
     * @example
     * // Create many GradingPolicies
     * const gradingPolicy = await prisma.gradingPolicy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GradingPolicyCreateManyArgs>(args?: SelectSubset<T, GradingPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GradingPolicy.
     * @param {GradingPolicyDeleteArgs} args - Arguments to delete one GradingPolicy.
     * @example
     * // Delete one GradingPolicy
     * const GradingPolicy = await prisma.gradingPolicy.delete({
     *   where: {
     *     // ... filter to delete one GradingPolicy
     *   }
     * })
     * 
     */
    delete<T extends GradingPolicyDeleteArgs>(args: SelectSubset<T, GradingPolicyDeleteArgs<ExtArgs>>): Prisma__GradingPolicyClient<$Result.GetResult<Prisma.$GradingPolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GradingPolicy.
     * @param {GradingPolicyUpdateArgs} args - Arguments to update one GradingPolicy.
     * @example
     * // Update one GradingPolicy
     * const gradingPolicy = await prisma.gradingPolicy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GradingPolicyUpdateArgs>(args: SelectSubset<T, GradingPolicyUpdateArgs<ExtArgs>>): Prisma__GradingPolicyClient<$Result.GetResult<Prisma.$GradingPolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GradingPolicies.
     * @param {GradingPolicyDeleteManyArgs} args - Arguments to filter GradingPolicies to delete.
     * @example
     * // Delete a few GradingPolicies
     * const { count } = await prisma.gradingPolicy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GradingPolicyDeleteManyArgs>(args?: SelectSubset<T, GradingPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GradingPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingPolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GradingPolicies
     * const gradingPolicy = await prisma.gradingPolicy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GradingPolicyUpdateManyArgs>(args: SelectSubset<T, GradingPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GradingPolicy.
     * @param {GradingPolicyUpsertArgs} args - Arguments to update or create a GradingPolicy.
     * @example
     * // Update or create a GradingPolicy
     * const gradingPolicy = await prisma.gradingPolicy.upsert({
     *   create: {
     *     // ... data to create a GradingPolicy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GradingPolicy we want to update
     *   }
     * })
     */
    upsert<T extends GradingPolicyUpsertArgs>(args: SelectSubset<T, GradingPolicyUpsertArgs<ExtArgs>>): Prisma__GradingPolicyClient<$Result.GetResult<Prisma.$GradingPolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GradingPolicies that matches the filter.
     * @param {GradingPolicyFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const gradingPolicy = await prisma.gradingPolicy.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: GradingPolicyFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a GradingPolicy.
     * @param {GradingPolicyAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const gradingPolicy = await prisma.gradingPolicy.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: GradingPolicyAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of GradingPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingPolicyCountArgs} args - Arguments to filter GradingPolicies to count.
     * @example
     * // Count the number of GradingPolicies
     * const count = await prisma.gradingPolicy.count({
     *   where: {
     *     // ... the filter for the GradingPolicies we want to count
     *   }
     * })
    **/
    count<T extends GradingPolicyCountArgs>(
      args?: Subset<T, GradingPolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GradingPolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GradingPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingPolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GradingPolicyAggregateArgs>(args: Subset<T, GradingPolicyAggregateArgs>): Prisma.PrismaPromise<GetGradingPolicyAggregateType<T>>

    /**
     * Group by GradingPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingPolicyGroupByArgs} args - Group by arguments.
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
      T extends GradingPolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GradingPolicyGroupByArgs['orderBy'] }
        : { orderBy?: GradingPolicyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GradingPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradingPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GradingPolicy model
   */
  readonly fields: GradingPolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GradingPolicy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GradingPolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GradingPolicy model
   */
  interface GradingPolicyFieldRefs {
    readonly id: FieldRef<"GradingPolicy", 'String'>
    readonly courseId: FieldRef<"GradingPolicy", 'String'>
    readonly assignment: FieldRef<"GradingPolicy", 'Int'>
    readonly participation: FieldRef<"GradingPolicy", 'Int'>
    readonly midterm: FieldRef<"GradingPolicy", 'Int'>
    readonly finalExam: FieldRef<"GradingPolicy", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GradingPolicy findUnique
   */
  export type GradingPolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    /**
     * Filter, which GradingPolicy to fetch.
     */
    where: GradingPolicyWhereUniqueInput
  }

  /**
   * GradingPolicy findUniqueOrThrow
   */
  export type GradingPolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    /**
     * Filter, which GradingPolicy to fetch.
     */
    where: GradingPolicyWhereUniqueInput
  }

  /**
   * GradingPolicy findFirst
   */
  export type GradingPolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    /**
     * Filter, which GradingPolicy to fetch.
     */
    where?: GradingPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradingPolicies to fetch.
     */
    orderBy?: GradingPolicyOrderByWithRelationInput | GradingPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GradingPolicies.
     */
    cursor?: GradingPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradingPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradingPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GradingPolicies.
     */
    distinct?: GradingPolicyScalarFieldEnum | GradingPolicyScalarFieldEnum[]
  }

  /**
   * GradingPolicy findFirstOrThrow
   */
  export type GradingPolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    /**
     * Filter, which GradingPolicy to fetch.
     */
    where?: GradingPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradingPolicies to fetch.
     */
    orderBy?: GradingPolicyOrderByWithRelationInput | GradingPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GradingPolicies.
     */
    cursor?: GradingPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradingPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradingPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GradingPolicies.
     */
    distinct?: GradingPolicyScalarFieldEnum | GradingPolicyScalarFieldEnum[]
  }

  /**
   * GradingPolicy findMany
   */
  export type GradingPolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    /**
     * Filter, which GradingPolicies to fetch.
     */
    where?: GradingPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradingPolicies to fetch.
     */
    orderBy?: GradingPolicyOrderByWithRelationInput | GradingPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GradingPolicies.
     */
    cursor?: GradingPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradingPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradingPolicies.
     */
    skip?: number
    distinct?: GradingPolicyScalarFieldEnum | GradingPolicyScalarFieldEnum[]
  }

  /**
   * GradingPolicy create
   */
  export type GradingPolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a GradingPolicy.
     */
    data: XOR<GradingPolicyCreateInput, GradingPolicyUncheckedCreateInput>
  }

  /**
   * GradingPolicy createMany
   */
  export type GradingPolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GradingPolicies.
     */
    data: GradingPolicyCreateManyInput | GradingPolicyCreateManyInput[]
  }

  /**
   * GradingPolicy update
   */
  export type GradingPolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a GradingPolicy.
     */
    data: XOR<GradingPolicyUpdateInput, GradingPolicyUncheckedUpdateInput>
    /**
     * Choose, which GradingPolicy to update.
     */
    where: GradingPolicyWhereUniqueInput
  }

  /**
   * GradingPolicy updateMany
   */
  export type GradingPolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GradingPolicies.
     */
    data: XOR<GradingPolicyUpdateManyMutationInput, GradingPolicyUncheckedUpdateManyInput>
    /**
     * Filter which GradingPolicies to update
     */
    where?: GradingPolicyWhereInput
    /**
     * Limit how many GradingPolicies to update.
     */
    limit?: number
  }

  /**
   * GradingPolicy upsert
   */
  export type GradingPolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the GradingPolicy to update in case it exists.
     */
    where: GradingPolicyWhereUniqueInput
    /**
     * In case the GradingPolicy found by the `where` argument doesn't exist, create a new GradingPolicy with this data.
     */
    create: XOR<GradingPolicyCreateInput, GradingPolicyUncheckedCreateInput>
    /**
     * In case the GradingPolicy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GradingPolicyUpdateInput, GradingPolicyUncheckedUpdateInput>
  }

  /**
   * GradingPolicy delete
   */
  export type GradingPolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    /**
     * Filter which GradingPolicy to delete.
     */
    where: GradingPolicyWhereUniqueInput
  }

  /**
   * GradingPolicy deleteMany
   */
  export type GradingPolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GradingPolicies to delete
     */
    where?: GradingPolicyWhereInput
    /**
     * Limit how many GradingPolicies to delete.
     */
    limit?: number
  }

  /**
   * GradingPolicy findRaw
   */
  export type GradingPolicyFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * GradingPolicy aggregateRaw
   */
  export type GradingPolicyAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model CoursePolicies
   */

  export type AggregateCoursePolicies = {
    _count: CoursePoliciesCountAggregateOutputType | null
    _min: CoursePoliciesMinAggregateOutputType | null
    _max: CoursePoliciesMaxAggregateOutputType | null
  }

  export type CoursePoliciesMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    attendancePolicy: string | null
    lateWorkPolicy: string | null
    academicIntegrityPolicy: string | null
    accommodationsPolicy: string | null
  }

  export type CoursePoliciesMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    attendancePolicy: string | null
    lateWorkPolicy: string | null
    academicIntegrityPolicy: string | null
    accommodationsPolicy: string | null
  }

  export type CoursePoliciesCountAggregateOutputType = {
    id: number
    courseId: number
    attendancePolicy: number
    lateWorkPolicy: number
    academicIntegrityPolicy: number
    accommodationsPolicy: number
    _all: number
  }


  export type CoursePoliciesMinAggregateInputType = {
    id?: true
    courseId?: true
    attendancePolicy?: true
    lateWorkPolicy?: true
    academicIntegrityPolicy?: true
    accommodationsPolicy?: true
  }

  export type CoursePoliciesMaxAggregateInputType = {
    id?: true
    courseId?: true
    attendancePolicy?: true
    lateWorkPolicy?: true
    academicIntegrityPolicy?: true
    accommodationsPolicy?: true
  }

  export type CoursePoliciesCountAggregateInputType = {
    id?: true
    courseId?: true
    attendancePolicy?: true
    lateWorkPolicy?: true
    academicIntegrityPolicy?: true
    accommodationsPolicy?: true
    _all?: true
  }

  export type CoursePoliciesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoursePolicies to aggregate.
     */
    where?: CoursePoliciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursePolicies to fetch.
     */
    orderBy?: CoursePoliciesOrderByWithRelationInput | CoursePoliciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoursePoliciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursePolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursePolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoursePolicies
    **/
    _count?: true | CoursePoliciesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursePoliciesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursePoliciesMaxAggregateInputType
  }

  export type GetCoursePoliciesAggregateType<T extends CoursePoliciesAggregateArgs> = {
        [P in keyof T & keyof AggregateCoursePolicies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoursePolicies[P]>
      : GetScalarType<T[P], AggregateCoursePolicies[P]>
  }




  export type CoursePoliciesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursePoliciesWhereInput
    orderBy?: CoursePoliciesOrderByWithAggregationInput | CoursePoliciesOrderByWithAggregationInput[]
    by: CoursePoliciesScalarFieldEnum[] | CoursePoliciesScalarFieldEnum
    having?: CoursePoliciesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursePoliciesCountAggregateInputType | true
    _min?: CoursePoliciesMinAggregateInputType
    _max?: CoursePoliciesMaxAggregateInputType
  }

  export type CoursePoliciesGroupByOutputType = {
    id: string
    courseId: string
    attendancePolicy: string
    lateWorkPolicy: string
    academicIntegrityPolicy: string
    accommodationsPolicy: string
    _count: CoursePoliciesCountAggregateOutputType | null
    _min: CoursePoliciesMinAggregateOutputType | null
    _max: CoursePoliciesMaxAggregateOutputType | null
  }

  type GetCoursePoliciesGroupByPayload<T extends CoursePoliciesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursePoliciesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursePoliciesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursePoliciesGroupByOutputType[P]>
            : GetScalarType<T[P], CoursePoliciesGroupByOutputType[P]>
        }
      >
    >


  export type CoursePoliciesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    attendancePolicy?: boolean
    lateWorkPolicy?: boolean
    academicIntegrityPolicy?: boolean
    accommodationsPolicy?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coursePolicies"]>



  export type CoursePoliciesSelectScalar = {
    id?: boolean
    courseId?: boolean
    attendancePolicy?: boolean
    lateWorkPolicy?: boolean
    academicIntegrityPolicy?: boolean
    accommodationsPolicy?: boolean
  }

  export type CoursePoliciesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "attendancePolicy" | "lateWorkPolicy" | "academicIntegrityPolicy" | "accommodationsPolicy", ExtArgs["result"]["coursePolicies"]>
  export type CoursePoliciesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CoursePoliciesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoursePolicies"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      attendancePolicy: string
      lateWorkPolicy: string
      academicIntegrityPolicy: string
      accommodationsPolicy: string
    }, ExtArgs["result"]["coursePolicies"]>
    composites: {}
  }

  type CoursePoliciesGetPayload<S extends boolean | null | undefined | CoursePoliciesDefaultArgs> = $Result.GetResult<Prisma.$CoursePoliciesPayload, S>

  type CoursePoliciesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoursePoliciesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoursePoliciesCountAggregateInputType | true
    }

  export interface CoursePoliciesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoursePolicies'], meta: { name: 'CoursePolicies' } }
    /**
     * Find zero or one CoursePolicies that matches the filter.
     * @param {CoursePoliciesFindUniqueArgs} args - Arguments to find a CoursePolicies
     * @example
     * // Get one CoursePolicies
     * const coursePolicies = await prisma.coursePolicies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoursePoliciesFindUniqueArgs>(args: SelectSubset<T, CoursePoliciesFindUniqueArgs<ExtArgs>>): Prisma__CoursePoliciesClient<$Result.GetResult<Prisma.$CoursePoliciesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoursePolicies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoursePoliciesFindUniqueOrThrowArgs} args - Arguments to find a CoursePolicies
     * @example
     * // Get one CoursePolicies
     * const coursePolicies = await prisma.coursePolicies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoursePoliciesFindUniqueOrThrowArgs>(args: SelectSubset<T, CoursePoliciesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoursePoliciesClient<$Result.GetResult<Prisma.$CoursePoliciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoursePolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePoliciesFindFirstArgs} args - Arguments to find a CoursePolicies
     * @example
     * // Get one CoursePolicies
     * const coursePolicies = await prisma.coursePolicies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoursePoliciesFindFirstArgs>(args?: SelectSubset<T, CoursePoliciesFindFirstArgs<ExtArgs>>): Prisma__CoursePoliciesClient<$Result.GetResult<Prisma.$CoursePoliciesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoursePolicies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePoliciesFindFirstOrThrowArgs} args - Arguments to find a CoursePolicies
     * @example
     * // Get one CoursePolicies
     * const coursePolicies = await prisma.coursePolicies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoursePoliciesFindFirstOrThrowArgs>(args?: SelectSubset<T, CoursePoliciesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoursePoliciesClient<$Result.GetResult<Prisma.$CoursePoliciesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoursePolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePoliciesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoursePolicies
     * const coursePolicies = await prisma.coursePolicies.findMany()
     * 
     * // Get first 10 CoursePolicies
     * const coursePolicies = await prisma.coursePolicies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coursePoliciesWithIdOnly = await prisma.coursePolicies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoursePoliciesFindManyArgs>(args?: SelectSubset<T, CoursePoliciesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePoliciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoursePolicies.
     * @param {CoursePoliciesCreateArgs} args - Arguments to create a CoursePolicies.
     * @example
     * // Create one CoursePolicies
     * const CoursePolicies = await prisma.coursePolicies.create({
     *   data: {
     *     // ... data to create a CoursePolicies
     *   }
     * })
     * 
     */
    create<T extends CoursePoliciesCreateArgs>(args: SelectSubset<T, CoursePoliciesCreateArgs<ExtArgs>>): Prisma__CoursePoliciesClient<$Result.GetResult<Prisma.$CoursePoliciesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoursePolicies.
     * @param {CoursePoliciesCreateManyArgs} args - Arguments to create many CoursePolicies.
     * @example
     * // Create many CoursePolicies
     * const coursePolicies = await prisma.coursePolicies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoursePoliciesCreateManyArgs>(args?: SelectSubset<T, CoursePoliciesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CoursePolicies.
     * @param {CoursePoliciesDeleteArgs} args - Arguments to delete one CoursePolicies.
     * @example
     * // Delete one CoursePolicies
     * const CoursePolicies = await prisma.coursePolicies.delete({
     *   where: {
     *     // ... filter to delete one CoursePolicies
     *   }
     * })
     * 
     */
    delete<T extends CoursePoliciesDeleteArgs>(args: SelectSubset<T, CoursePoliciesDeleteArgs<ExtArgs>>): Prisma__CoursePoliciesClient<$Result.GetResult<Prisma.$CoursePoliciesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoursePolicies.
     * @param {CoursePoliciesUpdateArgs} args - Arguments to update one CoursePolicies.
     * @example
     * // Update one CoursePolicies
     * const coursePolicies = await prisma.coursePolicies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoursePoliciesUpdateArgs>(args: SelectSubset<T, CoursePoliciesUpdateArgs<ExtArgs>>): Prisma__CoursePoliciesClient<$Result.GetResult<Prisma.$CoursePoliciesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoursePolicies.
     * @param {CoursePoliciesDeleteManyArgs} args - Arguments to filter CoursePolicies to delete.
     * @example
     * // Delete a few CoursePolicies
     * const { count } = await prisma.coursePolicies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoursePoliciesDeleteManyArgs>(args?: SelectSubset<T, CoursePoliciesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoursePolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePoliciesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoursePolicies
     * const coursePolicies = await prisma.coursePolicies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoursePoliciesUpdateManyArgs>(args: SelectSubset<T, CoursePoliciesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CoursePolicies.
     * @param {CoursePoliciesUpsertArgs} args - Arguments to update or create a CoursePolicies.
     * @example
     * // Update or create a CoursePolicies
     * const coursePolicies = await prisma.coursePolicies.upsert({
     *   create: {
     *     // ... data to create a CoursePolicies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoursePolicies we want to update
     *   }
     * })
     */
    upsert<T extends CoursePoliciesUpsertArgs>(args: SelectSubset<T, CoursePoliciesUpsertArgs<ExtArgs>>): Prisma__CoursePoliciesClient<$Result.GetResult<Prisma.$CoursePoliciesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoursePolicies that matches the filter.
     * @param {CoursePoliciesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const coursePolicies = await prisma.coursePolicies.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CoursePoliciesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CoursePolicies.
     * @param {CoursePoliciesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const coursePolicies = await prisma.coursePolicies.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CoursePoliciesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of CoursePolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePoliciesCountArgs} args - Arguments to filter CoursePolicies to count.
     * @example
     * // Count the number of CoursePolicies
     * const count = await prisma.coursePolicies.count({
     *   where: {
     *     // ... the filter for the CoursePolicies we want to count
     *   }
     * })
    **/
    count<T extends CoursePoliciesCountArgs>(
      args?: Subset<T, CoursePoliciesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursePoliciesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoursePolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePoliciesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoursePoliciesAggregateArgs>(args: Subset<T, CoursePoliciesAggregateArgs>): Prisma.PrismaPromise<GetCoursePoliciesAggregateType<T>>

    /**
     * Group by CoursePolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePoliciesGroupByArgs} args - Group by arguments.
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
      T extends CoursePoliciesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoursePoliciesGroupByArgs['orderBy'] }
        : { orderBy?: CoursePoliciesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoursePoliciesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursePoliciesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoursePolicies model
   */
  readonly fields: CoursePoliciesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoursePolicies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoursePoliciesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CoursePolicies model
   */
  interface CoursePoliciesFieldRefs {
    readonly id: FieldRef<"CoursePolicies", 'String'>
    readonly courseId: FieldRef<"CoursePolicies", 'String'>
    readonly attendancePolicy: FieldRef<"CoursePolicies", 'String'>
    readonly lateWorkPolicy: FieldRef<"CoursePolicies", 'String'>
    readonly academicIntegrityPolicy: FieldRef<"CoursePolicies", 'String'>
    readonly accommodationsPolicy: FieldRef<"CoursePolicies", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CoursePolicies findUnique
   */
  export type CoursePoliciesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePolicies
     */
    select?: CoursePoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePolicies
     */
    omit?: CoursePoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePoliciesInclude<ExtArgs> | null
    /**
     * Filter, which CoursePolicies to fetch.
     */
    where: CoursePoliciesWhereUniqueInput
  }

  /**
   * CoursePolicies findUniqueOrThrow
   */
  export type CoursePoliciesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePolicies
     */
    select?: CoursePoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePolicies
     */
    omit?: CoursePoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePoliciesInclude<ExtArgs> | null
    /**
     * Filter, which CoursePolicies to fetch.
     */
    where: CoursePoliciesWhereUniqueInput
  }

  /**
   * CoursePolicies findFirst
   */
  export type CoursePoliciesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePolicies
     */
    select?: CoursePoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePolicies
     */
    omit?: CoursePoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePoliciesInclude<ExtArgs> | null
    /**
     * Filter, which CoursePolicies to fetch.
     */
    where?: CoursePoliciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursePolicies to fetch.
     */
    orderBy?: CoursePoliciesOrderByWithRelationInput | CoursePoliciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoursePolicies.
     */
    cursor?: CoursePoliciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursePolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursePolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoursePolicies.
     */
    distinct?: CoursePoliciesScalarFieldEnum | CoursePoliciesScalarFieldEnum[]
  }

  /**
   * CoursePolicies findFirstOrThrow
   */
  export type CoursePoliciesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePolicies
     */
    select?: CoursePoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePolicies
     */
    omit?: CoursePoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePoliciesInclude<ExtArgs> | null
    /**
     * Filter, which CoursePolicies to fetch.
     */
    where?: CoursePoliciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursePolicies to fetch.
     */
    orderBy?: CoursePoliciesOrderByWithRelationInput | CoursePoliciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoursePolicies.
     */
    cursor?: CoursePoliciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursePolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursePolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoursePolicies.
     */
    distinct?: CoursePoliciesScalarFieldEnum | CoursePoliciesScalarFieldEnum[]
  }

  /**
   * CoursePolicies findMany
   */
  export type CoursePoliciesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePolicies
     */
    select?: CoursePoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePolicies
     */
    omit?: CoursePoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePoliciesInclude<ExtArgs> | null
    /**
     * Filter, which CoursePolicies to fetch.
     */
    where?: CoursePoliciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursePolicies to fetch.
     */
    orderBy?: CoursePoliciesOrderByWithRelationInput | CoursePoliciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoursePolicies.
     */
    cursor?: CoursePoliciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursePolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursePolicies.
     */
    skip?: number
    distinct?: CoursePoliciesScalarFieldEnum | CoursePoliciesScalarFieldEnum[]
  }

  /**
   * CoursePolicies create
   */
  export type CoursePoliciesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePolicies
     */
    select?: CoursePoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePolicies
     */
    omit?: CoursePoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePoliciesInclude<ExtArgs> | null
    /**
     * The data needed to create a CoursePolicies.
     */
    data: XOR<CoursePoliciesCreateInput, CoursePoliciesUncheckedCreateInput>
  }

  /**
   * CoursePolicies createMany
   */
  export type CoursePoliciesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoursePolicies.
     */
    data: CoursePoliciesCreateManyInput | CoursePoliciesCreateManyInput[]
  }

  /**
   * CoursePolicies update
   */
  export type CoursePoliciesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePolicies
     */
    select?: CoursePoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePolicies
     */
    omit?: CoursePoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePoliciesInclude<ExtArgs> | null
    /**
     * The data needed to update a CoursePolicies.
     */
    data: XOR<CoursePoliciesUpdateInput, CoursePoliciesUncheckedUpdateInput>
    /**
     * Choose, which CoursePolicies to update.
     */
    where: CoursePoliciesWhereUniqueInput
  }

  /**
   * CoursePolicies updateMany
   */
  export type CoursePoliciesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoursePolicies.
     */
    data: XOR<CoursePoliciesUpdateManyMutationInput, CoursePoliciesUncheckedUpdateManyInput>
    /**
     * Filter which CoursePolicies to update
     */
    where?: CoursePoliciesWhereInput
    /**
     * Limit how many CoursePolicies to update.
     */
    limit?: number
  }

  /**
   * CoursePolicies upsert
   */
  export type CoursePoliciesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePolicies
     */
    select?: CoursePoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePolicies
     */
    omit?: CoursePoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePoliciesInclude<ExtArgs> | null
    /**
     * The filter to search for the CoursePolicies to update in case it exists.
     */
    where: CoursePoliciesWhereUniqueInput
    /**
     * In case the CoursePolicies found by the `where` argument doesn't exist, create a new CoursePolicies with this data.
     */
    create: XOR<CoursePoliciesCreateInput, CoursePoliciesUncheckedCreateInput>
    /**
     * In case the CoursePolicies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoursePoliciesUpdateInput, CoursePoliciesUncheckedUpdateInput>
  }

  /**
   * CoursePolicies delete
   */
  export type CoursePoliciesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePolicies
     */
    select?: CoursePoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePolicies
     */
    omit?: CoursePoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePoliciesInclude<ExtArgs> | null
    /**
     * Filter which CoursePolicies to delete.
     */
    where: CoursePoliciesWhereUniqueInput
  }

  /**
   * CoursePolicies deleteMany
   */
  export type CoursePoliciesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoursePolicies to delete
     */
    where?: CoursePoliciesWhereInput
    /**
     * Limit how many CoursePolicies to delete.
     */
    limit?: number
  }

  /**
   * CoursePolicies findRaw
   */
  export type CoursePoliciesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * CoursePolicies aggregateRaw
   */
  export type CoursePoliciesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * CoursePolicies without action
   */
  export type CoursePoliciesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePolicies
     */
    select?: CoursePoliciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePolicies
     */
    omit?: CoursePoliciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePoliciesInclude<ExtArgs> | null
  }


  /**
   * Model GradingReference
   */

  export type AggregateGradingReference = {
    _count: GradingReferenceCountAggregateOutputType | null
    _min: GradingReferenceMinAggregateOutputType | null
    _max: GradingReferenceMaxAggregateOutputType | null
  }

  export type GradingReferenceMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    title: string | null
    type: string | null
    addedIn: Date | null
    link: string | null
  }

  export type GradingReferenceMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    title: string | null
    type: string | null
    addedIn: Date | null
    link: string | null
  }

  export type GradingReferenceCountAggregateOutputType = {
    id: number
    courseId: number
    title: number
    type: number
    addedIn: number
    link: number
    _all: number
  }


  export type GradingReferenceMinAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    type?: true
    addedIn?: true
    link?: true
  }

  export type GradingReferenceMaxAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    type?: true
    addedIn?: true
    link?: true
  }

  export type GradingReferenceCountAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    type?: true
    addedIn?: true
    link?: true
    _all?: true
  }

  export type GradingReferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GradingReference to aggregate.
     */
    where?: GradingReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradingReferences to fetch.
     */
    orderBy?: GradingReferenceOrderByWithRelationInput | GradingReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GradingReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradingReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradingReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GradingReferences
    **/
    _count?: true | GradingReferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GradingReferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GradingReferenceMaxAggregateInputType
  }

  export type GetGradingReferenceAggregateType<T extends GradingReferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateGradingReference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGradingReference[P]>
      : GetScalarType<T[P], AggregateGradingReference[P]>
  }




  export type GradingReferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradingReferenceWhereInput
    orderBy?: GradingReferenceOrderByWithAggregationInput | GradingReferenceOrderByWithAggregationInput[]
    by: GradingReferenceScalarFieldEnum[] | GradingReferenceScalarFieldEnum
    having?: GradingReferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GradingReferenceCountAggregateInputType | true
    _min?: GradingReferenceMinAggregateInputType
    _max?: GradingReferenceMaxAggregateInputType
  }

  export type GradingReferenceGroupByOutputType = {
    id: string
    courseId: string
    title: string
    type: string
    addedIn: Date
    link: string
    _count: GradingReferenceCountAggregateOutputType | null
    _min: GradingReferenceMinAggregateOutputType | null
    _max: GradingReferenceMaxAggregateOutputType | null
  }

  type GetGradingReferenceGroupByPayload<T extends GradingReferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GradingReferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GradingReferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GradingReferenceGroupByOutputType[P]>
            : GetScalarType<T[P], GradingReferenceGroupByOutputType[P]>
        }
      >
    >


  export type GradingReferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    title?: boolean
    type?: boolean
    addedIn?: boolean
    link?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gradingReference"]>



  export type GradingReferenceSelectScalar = {
    id?: boolean
    courseId?: boolean
    title?: boolean
    type?: boolean
    addedIn?: boolean
    link?: boolean
  }

  export type GradingReferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "title" | "type" | "addedIn" | "link", ExtArgs["result"]["gradingReference"]>
  export type GradingReferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $GradingReferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GradingReference"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      title: string
      type: string
      addedIn: Date
      link: string
    }, ExtArgs["result"]["gradingReference"]>
    composites: {}
  }

  type GradingReferenceGetPayload<S extends boolean | null | undefined | GradingReferenceDefaultArgs> = $Result.GetResult<Prisma.$GradingReferencePayload, S>

  type GradingReferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GradingReferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GradingReferenceCountAggregateInputType | true
    }

  export interface GradingReferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GradingReference'], meta: { name: 'GradingReference' } }
    /**
     * Find zero or one GradingReference that matches the filter.
     * @param {GradingReferenceFindUniqueArgs} args - Arguments to find a GradingReference
     * @example
     * // Get one GradingReference
     * const gradingReference = await prisma.gradingReference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GradingReferenceFindUniqueArgs>(args: SelectSubset<T, GradingReferenceFindUniqueArgs<ExtArgs>>): Prisma__GradingReferenceClient<$Result.GetResult<Prisma.$GradingReferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GradingReference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GradingReferenceFindUniqueOrThrowArgs} args - Arguments to find a GradingReference
     * @example
     * // Get one GradingReference
     * const gradingReference = await prisma.gradingReference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GradingReferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, GradingReferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GradingReferenceClient<$Result.GetResult<Prisma.$GradingReferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GradingReference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingReferenceFindFirstArgs} args - Arguments to find a GradingReference
     * @example
     * // Get one GradingReference
     * const gradingReference = await prisma.gradingReference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GradingReferenceFindFirstArgs>(args?: SelectSubset<T, GradingReferenceFindFirstArgs<ExtArgs>>): Prisma__GradingReferenceClient<$Result.GetResult<Prisma.$GradingReferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GradingReference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingReferenceFindFirstOrThrowArgs} args - Arguments to find a GradingReference
     * @example
     * // Get one GradingReference
     * const gradingReference = await prisma.gradingReference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GradingReferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, GradingReferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__GradingReferenceClient<$Result.GetResult<Prisma.$GradingReferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GradingReferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingReferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GradingReferences
     * const gradingReferences = await prisma.gradingReference.findMany()
     * 
     * // Get first 10 GradingReferences
     * const gradingReferences = await prisma.gradingReference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gradingReferenceWithIdOnly = await prisma.gradingReference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GradingReferenceFindManyArgs>(args?: SelectSubset<T, GradingReferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradingReferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GradingReference.
     * @param {GradingReferenceCreateArgs} args - Arguments to create a GradingReference.
     * @example
     * // Create one GradingReference
     * const GradingReference = await prisma.gradingReference.create({
     *   data: {
     *     // ... data to create a GradingReference
     *   }
     * })
     * 
     */
    create<T extends GradingReferenceCreateArgs>(args: SelectSubset<T, GradingReferenceCreateArgs<ExtArgs>>): Prisma__GradingReferenceClient<$Result.GetResult<Prisma.$GradingReferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GradingReferences.
     * @param {GradingReferenceCreateManyArgs} args - Arguments to create many GradingReferences.
     * @example
     * // Create many GradingReferences
     * const gradingReference = await prisma.gradingReference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GradingReferenceCreateManyArgs>(args?: SelectSubset<T, GradingReferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GradingReference.
     * @param {GradingReferenceDeleteArgs} args - Arguments to delete one GradingReference.
     * @example
     * // Delete one GradingReference
     * const GradingReference = await prisma.gradingReference.delete({
     *   where: {
     *     // ... filter to delete one GradingReference
     *   }
     * })
     * 
     */
    delete<T extends GradingReferenceDeleteArgs>(args: SelectSubset<T, GradingReferenceDeleteArgs<ExtArgs>>): Prisma__GradingReferenceClient<$Result.GetResult<Prisma.$GradingReferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GradingReference.
     * @param {GradingReferenceUpdateArgs} args - Arguments to update one GradingReference.
     * @example
     * // Update one GradingReference
     * const gradingReference = await prisma.gradingReference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GradingReferenceUpdateArgs>(args: SelectSubset<T, GradingReferenceUpdateArgs<ExtArgs>>): Prisma__GradingReferenceClient<$Result.GetResult<Prisma.$GradingReferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GradingReferences.
     * @param {GradingReferenceDeleteManyArgs} args - Arguments to filter GradingReferences to delete.
     * @example
     * // Delete a few GradingReferences
     * const { count } = await prisma.gradingReference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GradingReferenceDeleteManyArgs>(args?: SelectSubset<T, GradingReferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GradingReferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingReferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GradingReferences
     * const gradingReference = await prisma.gradingReference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GradingReferenceUpdateManyArgs>(args: SelectSubset<T, GradingReferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GradingReference.
     * @param {GradingReferenceUpsertArgs} args - Arguments to update or create a GradingReference.
     * @example
     * // Update or create a GradingReference
     * const gradingReference = await prisma.gradingReference.upsert({
     *   create: {
     *     // ... data to create a GradingReference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GradingReference we want to update
     *   }
     * })
     */
    upsert<T extends GradingReferenceUpsertArgs>(args: SelectSubset<T, GradingReferenceUpsertArgs<ExtArgs>>): Prisma__GradingReferenceClient<$Result.GetResult<Prisma.$GradingReferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GradingReferences that matches the filter.
     * @param {GradingReferenceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const gradingReference = await prisma.gradingReference.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: GradingReferenceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a GradingReference.
     * @param {GradingReferenceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const gradingReference = await prisma.gradingReference.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: GradingReferenceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of GradingReferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingReferenceCountArgs} args - Arguments to filter GradingReferences to count.
     * @example
     * // Count the number of GradingReferences
     * const count = await prisma.gradingReference.count({
     *   where: {
     *     // ... the filter for the GradingReferences we want to count
     *   }
     * })
    **/
    count<T extends GradingReferenceCountArgs>(
      args?: Subset<T, GradingReferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GradingReferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GradingReference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingReferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GradingReferenceAggregateArgs>(args: Subset<T, GradingReferenceAggregateArgs>): Prisma.PrismaPromise<GetGradingReferenceAggregateType<T>>

    /**
     * Group by GradingReference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingReferenceGroupByArgs} args - Group by arguments.
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
      T extends GradingReferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GradingReferenceGroupByArgs['orderBy'] }
        : { orderBy?: GradingReferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GradingReferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradingReferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GradingReference model
   */
  readonly fields: GradingReferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GradingReference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GradingReferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GradingReference model
   */
  interface GradingReferenceFieldRefs {
    readonly id: FieldRef<"GradingReference", 'String'>
    readonly courseId: FieldRef<"GradingReference", 'String'>
    readonly title: FieldRef<"GradingReference", 'String'>
    readonly type: FieldRef<"GradingReference", 'String'>
    readonly addedIn: FieldRef<"GradingReference", 'DateTime'>
    readonly link: FieldRef<"GradingReference", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GradingReference findUnique
   */
  export type GradingReferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReference
     */
    select?: GradingReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReference
     */
    omit?: GradingReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReferenceInclude<ExtArgs> | null
    /**
     * Filter, which GradingReference to fetch.
     */
    where: GradingReferenceWhereUniqueInput
  }

  /**
   * GradingReference findUniqueOrThrow
   */
  export type GradingReferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReference
     */
    select?: GradingReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReference
     */
    omit?: GradingReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReferenceInclude<ExtArgs> | null
    /**
     * Filter, which GradingReference to fetch.
     */
    where: GradingReferenceWhereUniqueInput
  }

  /**
   * GradingReference findFirst
   */
  export type GradingReferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReference
     */
    select?: GradingReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReference
     */
    omit?: GradingReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReferenceInclude<ExtArgs> | null
    /**
     * Filter, which GradingReference to fetch.
     */
    where?: GradingReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradingReferences to fetch.
     */
    orderBy?: GradingReferenceOrderByWithRelationInput | GradingReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GradingReferences.
     */
    cursor?: GradingReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradingReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradingReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GradingReferences.
     */
    distinct?: GradingReferenceScalarFieldEnum | GradingReferenceScalarFieldEnum[]
  }

  /**
   * GradingReference findFirstOrThrow
   */
  export type GradingReferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReference
     */
    select?: GradingReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReference
     */
    omit?: GradingReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReferenceInclude<ExtArgs> | null
    /**
     * Filter, which GradingReference to fetch.
     */
    where?: GradingReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradingReferences to fetch.
     */
    orderBy?: GradingReferenceOrderByWithRelationInput | GradingReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GradingReferences.
     */
    cursor?: GradingReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradingReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradingReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GradingReferences.
     */
    distinct?: GradingReferenceScalarFieldEnum | GradingReferenceScalarFieldEnum[]
  }

  /**
   * GradingReference findMany
   */
  export type GradingReferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReference
     */
    select?: GradingReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReference
     */
    omit?: GradingReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReferenceInclude<ExtArgs> | null
    /**
     * Filter, which GradingReferences to fetch.
     */
    where?: GradingReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradingReferences to fetch.
     */
    orderBy?: GradingReferenceOrderByWithRelationInput | GradingReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GradingReferences.
     */
    cursor?: GradingReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradingReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradingReferences.
     */
    skip?: number
    distinct?: GradingReferenceScalarFieldEnum | GradingReferenceScalarFieldEnum[]
  }

  /**
   * GradingReference create
   */
  export type GradingReferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReference
     */
    select?: GradingReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReference
     */
    omit?: GradingReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a GradingReference.
     */
    data: XOR<GradingReferenceCreateInput, GradingReferenceUncheckedCreateInput>
  }

  /**
   * GradingReference createMany
   */
  export type GradingReferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GradingReferences.
     */
    data: GradingReferenceCreateManyInput | GradingReferenceCreateManyInput[]
  }

  /**
   * GradingReference update
   */
  export type GradingReferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReference
     */
    select?: GradingReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReference
     */
    omit?: GradingReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a GradingReference.
     */
    data: XOR<GradingReferenceUpdateInput, GradingReferenceUncheckedUpdateInput>
    /**
     * Choose, which GradingReference to update.
     */
    where: GradingReferenceWhereUniqueInput
  }

  /**
   * GradingReference updateMany
   */
  export type GradingReferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GradingReferences.
     */
    data: XOR<GradingReferenceUpdateManyMutationInput, GradingReferenceUncheckedUpdateManyInput>
    /**
     * Filter which GradingReferences to update
     */
    where?: GradingReferenceWhereInput
    /**
     * Limit how many GradingReferences to update.
     */
    limit?: number
  }

  /**
   * GradingReference upsert
   */
  export type GradingReferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReference
     */
    select?: GradingReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReference
     */
    omit?: GradingReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the GradingReference to update in case it exists.
     */
    where: GradingReferenceWhereUniqueInput
    /**
     * In case the GradingReference found by the `where` argument doesn't exist, create a new GradingReference with this data.
     */
    create: XOR<GradingReferenceCreateInput, GradingReferenceUncheckedCreateInput>
    /**
     * In case the GradingReference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GradingReferenceUpdateInput, GradingReferenceUncheckedUpdateInput>
  }

  /**
   * GradingReference delete
   */
  export type GradingReferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReference
     */
    select?: GradingReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReference
     */
    omit?: GradingReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReferenceInclude<ExtArgs> | null
    /**
     * Filter which GradingReference to delete.
     */
    where: GradingReferenceWhereUniqueInput
  }

  /**
   * GradingReference deleteMany
   */
  export type GradingReferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GradingReferences to delete
     */
    where?: GradingReferenceWhereInput
    /**
     * Limit how many GradingReferences to delete.
     */
    limit?: number
  }

  /**
   * GradingReference findRaw
   */
  export type GradingReferenceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * GradingReference aggregateRaw
   */
  export type GradingReferenceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * GradingReference without action
   */
  export type GradingReferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReference
     */
    select?: GradingReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReference
     */
    omit?: GradingReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReferenceInclude<ExtArgs> | null
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
    name: 'name',
    instructorId: 'instructorId',
    subject: 'subject',
    gradeLevel: 'gradeLevel',
    courseDescription: 'courseDescription',
    generationPrompt: 'generationPrompt',
    additionalInfo: 'additionalInfo',
    term: 'term',
    learningObjects: 'learningObjects',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const RequiredMaterialScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    title: 'title',
    author: 'author',
    publisher: 'publisher',
    required: 'required'
  };

  export type RequiredMaterialScalarFieldEnum = (typeof RequiredMaterialScalarFieldEnum)[keyof typeof RequiredMaterialScalarFieldEnum]


  export const GradingPolicyScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    assignment: 'assignment',
    participation: 'participation',
    midterm: 'midterm',
    finalExam: 'finalExam'
  };

  export type GradingPolicyScalarFieldEnum = (typeof GradingPolicyScalarFieldEnum)[keyof typeof GradingPolicyScalarFieldEnum]


  export const CoursePoliciesScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    attendancePolicy: 'attendancePolicy',
    lateWorkPolicy: 'lateWorkPolicy',
    academicIntegrityPolicy: 'academicIntegrityPolicy',
    accommodationsPolicy: 'accommodationsPolicy'
  };

  export type CoursePoliciesScalarFieldEnum = (typeof CoursePoliciesScalarFieldEnum)[keyof typeof CoursePoliciesScalarFieldEnum]


  export const GradingReferenceScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    title: 'title',
    type: 'type',
    addedIn: 'addedIn',
    link: 'link'
  };

  export type GradingReferenceScalarFieldEnum = (typeof GradingReferenceScalarFieldEnum)[keyof typeof GradingReferenceScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
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
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    hashed_password?: SortOrder
    provider?: SortOrder
    courses?: CourseOrderByRelationAggregateInput
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
    name?: StringFilter<"Course"> | string
    instructorId?: StringFilter<"Course"> | string
    subject?: StringFilter<"Course"> | string
    gradeLevel?: StringFilter<"Course"> | string
    courseDescription?: StringFilter<"Course"> | string
    generationPrompt?: StringFilter<"Course"> | string
    additionalInfo?: StringNullableFilter<"Course"> | string | null
    term?: StringFilter<"Course"> | string
    learningObjects?: StringNullableListFilter<"Course">
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
    requiredMaterials?: RequiredMaterialListRelationFilter
    gradingPolicy?: XOR<GradingPolicyNullableScalarRelationFilter, GradingPolicyWhereInput> | null
    coursePolicies?: XOR<CoursePoliciesNullableScalarRelationFilter, CoursePoliciesWhereInput> | null
    gradingReferences?: GradingReferenceListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    instructorId?: SortOrder
    subject?: SortOrder
    gradeLevel?: SortOrder
    courseDescription?: SortOrder
    generationPrompt?: SortOrder
    additionalInfo?: SortOrder
    term?: SortOrder
    learningObjects?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instructor?: UserOrderByWithRelationInput
    requiredMaterials?: RequiredMaterialOrderByRelationAggregateInput
    gradingPolicy?: GradingPolicyOrderByWithRelationInput
    coursePolicies?: CoursePoliciesOrderByWithRelationInput
    gradingReferences?: GradingReferenceOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    instructorId?: StringFilter<"Course"> | string
    subject?: StringFilter<"Course"> | string
    gradeLevel?: StringFilter<"Course"> | string
    courseDescription?: StringFilter<"Course"> | string
    generationPrompt?: StringFilter<"Course"> | string
    additionalInfo?: StringNullableFilter<"Course"> | string | null
    term?: StringFilter<"Course"> | string
    learningObjects?: StringNullableListFilter<"Course">
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
    requiredMaterials?: RequiredMaterialListRelationFilter
    gradingPolicy?: XOR<GradingPolicyNullableScalarRelationFilter, GradingPolicyWhereInput> | null
    coursePolicies?: XOR<CoursePoliciesNullableScalarRelationFilter, CoursePoliciesWhereInput> | null
    gradingReferences?: GradingReferenceListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    instructorId?: SortOrder
    subject?: SortOrder
    gradeLevel?: SortOrder
    courseDescription?: SortOrder
    generationPrompt?: SortOrder
    additionalInfo?: SortOrder
    term?: SortOrder
    learningObjects?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    instructorId?: StringWithAggregatesFilter<"Course"> | string
    subject?: StringWithAggregatesFilter<"Course"> | string
    gradeLevel?: StringWithAggregatesFilter<"Course"> | string
    courseDescription?: StringWithAggregatesFilter<"Course"> | string
    generationPrompt?: StringWithAggregatesFilter<"Course"> | string
    additionalInfo?: StringNullableWithAggregatesFilter<"Course"> | string | null
    term?: StringWithAggregatesFilter<"Course"> | string
    learningObjects?: StringNullableListFilter<"Course">
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type RequiredMaterialWhereInput = {
    AND?: RequiredMaterialWhereInput | RequiredMaterialWhereInput[]
    OR?: RequiredMaterialWhereInput[]
    NOT?: RequiredMaterialWhereInput | RequiredMaterialWhereInput[]
    id?: StringFilter<"RequiredMaterial"> | string
    courseId?: StringFilter<"RequiredMaterial"> | string
    title?: StringFilter<"RequiredMaterial"> | string
    author?: StringFilter<"RequiredMaterial"> | string
    publisher?: StringFilter<"RequiredMaterial"> | string
    required?: BoolFilter<"RequiredMaterial"> | boolean
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type RequiredMaterialOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publisher?: SortOrder
    required?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type RequiredMaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequiredMaterialWhereInput | RequiredMaterialWhereInput[]
    OR?: RequiredMaterialWhereInput[]
    NOT?: RequiredMaterialWhereInput | RequiredMaterialWhereInput[]
    courseId?: StringFilter<"RequiredMaterial"> | string
    title?: StringFilter<"RequiredMaterial"> | string
    author?: StringFilter<"RequiredMaterial"> | string
    publisher?: StringFilter<"RequiredMaterial"> | string
    required?: BoolFilter<"RequiredMaterial"> | boolean
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type RequiredMaterialOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publisher?: SortOrder
    required?: SortOrder
    _count?: RequiredMaterialCountOrderByAggregateInput
    _max?: RequiredMaterialMaxOrderByAggregateInput
    _min?: RequiredMaterialMinOrderByAggregateInput
  }

  export type RequiredMaterialScalarWhereWithAggregatesInput = {
    AND?: RequiredMaterialScalarWhereWithAggregatesInput | RequiredMaterialScalarWhereWithAggregatesInput[]
    OR?: RequiredMaterialScalarWhereWithAggregatesInput[]
    NOT?: RequiredMaterialScalarWhereWithAggregatesInput | RequiredMaterialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RequiredMaterial"> | string
    courseId?: StringWithAggregatesFilter<"RequiredMaterial"> | string
    title?: StringWithAggregatesFilter<"RequiredMaterial"> | string
    author?: StringWithAggregatesFilter<"RequiredMaterial"> | string
    publisher?: StringWithAggregatesFilter<"RequiredMaterial"> | string
    required?: BoolWithAggregatesFilter<"RequiredMaterial"> | boolean
  }

  export type GradingPolicyWhereInput = {
    AND?: GradingPolicyWhereInput | GradingPolicyWhereInput[]
    OR?: GradingPolicyWhereInput[]
    NOT?: GradingPolicyWhereInput | GradingPolicyWhereInput[]
    id?: StringFilter<"GradingPolicy"> | string
    courseId?: StringFilter<"GradingPolicy"> | string
    assignment?: IntFilter<"GradingPolicy"> | number
    participation?: IntFilter<"GradingPolicy"> | number
    midterm?: IntFilter<"GradingPolicy"> | number
    finalExam?: IntFilter<"GradingPolicy"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type GradingPolicyOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    assignment?: SortOrder
    participation?: SortOrder
    midterm?: SortOrder
    finalExam?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type GradingPolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseId?: string
    AND?: GradingPolicyWhereInput | GradingPolicyWhereInput[]
    OR?: GradingPolicyWhereInput[]
    NOT?: GradingPolicyWhereInput | GradingPolicyWhereInput[]
    assignment?: IntFilter<"GradingPolicy"> | number
    participation?: IntFilter<"GradingPolicy"> | number
    midterm?: IntFilter<"GradingPolicy"> | number
    finalExam?: IntFilter<"GradingPolicy"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "courseId">

  export type GradingPolicyOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    assignment?: SortOrder
    participation?: SortOrder
    midterm?: SortOrder
    finalExam?: SortOrder
    _count?: GradingPolicyCountOrderByAggregateInput
    _avg?: GradingPolicyAvgOrderByAggregateInput
    _max?: GradingPolicyMaxOrderByAggregateInput
    _min?: GradingPolicyMinOrderByAggregateInput
    _sum?: GradingPolicySumOrderByAggregateInput
  }

  export type GradingPolicyScalarWhereWithAggregatesInput = {
    AND?: GradingPolicyScalarWhereWithAggregatesInput | GradingPolicyScalarWhereWithAggregatesInput[]
    OR?: GradingPolicyScalarWhereWithAggregatesInput[]
    NOT?: GradingPolicyScalarWhereWithAggregatesInput | GradingPolicyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GradingPolicy"> | string
    courseId?: StringWithAggregatesFilter<"GradingPolicy"> | string
    assignment?: IntWithAggregatesFilter<"GradingPolicy"> | number
    participation?: IntWithAggregatesFilter<"GradingPolicy"> | number
    midterm?: IntWithAggregatesFilter<"GradingPolicy"> | number
    finalExam?: IntWithAggregatesFilter<"GradingPolicy"> | number
  }

  export type CoursePoliciesWhereInput = {
    AND?: CoursePoliciesWhereInput | CoursePoliciesWhereInput[]
    OR?: CoursePoliciesWhereInput[]
    NOT?: CoursePoliciesWhereInput | CoursePoliciesWhereInput[]
    id?: StringFilter<"CoursePolicies"> | string
    courseId?: StringFilter<"CoursePolicies"> | string
    attendancePolicy?: StringFilter<"CoursePolicies"> | string
    lateWorkPolicy?: StringFilter<"CoursePolicies"> | string
    academicIntegrityPolicy?: StringFilter<"CoursePolicies"> | string
    accommodationsPolicy?: StringFilter<"CoursePolicies"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type CoursePoliciesOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    attendancePolicy?: SortOrder
    lateWorkPolicy?: SortOrder
    academicIntegrityPolicy?: SortOrder
    accommodationsPolicy?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type CoursePoliciesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseId?: string
    AND?: CoursePoliciesWhereInput | CoursePoliciesWhereInput[]
    OR?: CoursePoliciesWhereInput[]
    NOT?: CoursePoliciesWhereInput | CoursePoliciesWhereInput[]
    attendancePolicy?: StringFilter<"CoursePolicies"> | string
    lateWorkPolicy?: StringFilter<"CoursePolicies"> | string
    academicIntegrityPolicy?: StringFilter<"CoursePolicies"> | string
    accommodationsPolicy?: StringFilter<"CoursePolicies"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "courseId">

  export type CoursePoliciesOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    attendancePolicy?: SortOrder
    lateWorkPolicy?: SortOrder
    academicIntegrityPolicy?: SortOrder
    accommodationsPolicy?: SortOrder
    _count?: CoursePoliciesCountOrderByAggregateInput
    _max?: CoursePoliciesMaxOrderByAggregateInput
    _min?: CoursePoliciesMinOrderByAggregateInput
  }

  export type CoursePoliciesScalarWhereWithAggregatesInput = {
    AND?: CoursePoliciesScalarWhereWithAggregatesInput | CoursePoliciesScalarWhereWithAggregatesInput[]
    OR?: CoursePoliciesScalarWhereWithAggregatesInput[]
    NOT?: CoursePoliciesScalarWhereWithAggregatesInput | CoursePoliciesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CoursePolicies"> | string
    courseId?: StringWithAggregatesFilter<"CoursePolicies"> | string
    attendancePolicy?: StringWithAggregatesFilter<"CoursePolicies"> | string
    lateWorkPolicy?: StringWithAggregatesFilter<"CoursePolicies"> | string
    academicIntegrityPolicy?: StringWithAggregatesFilter<"CoursePolicies"> | string
    accommodationsPolicy?: StringWithAggregatesFilter<"CoursePolicies"> | string
  }

  export type GradingReferenceWhereInput = {
    AND?: GradingReferenceWhereInput | GradingReferenceWhereInput[]
    OR?: GradingReferenceWhereInput[]
    NOT?: GradingReferenceWhereInput | GradingReferenceWhereInput[]
    id?: StringFilter<"GradingReference"> | string
    courseId?: StringFilter<"GradingReference"> | string
    title?: StringFilter<"GradingReference"> | string
    type?: StringFilter<"GradingReference"> | string
    addedIn?: DateTimeFilter<"GradingReference"> | Date | string
    link?: StringFilter<"GradingReference"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type GradingReferenceOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    addedIn?: SortOrder
    link?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type GradingReferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GradingReferenceWhereInput | GradingReferenceWhereInput[]
    OR?: GradingReferenceWhereInput[]
    NOT?: GradingReferenceWhereInput | GradingReferenceWhereInput[]
    courseId?: StringFilter<"GradingReference"> | string
    title?: StringFilter<"GradingReference"> | string
    type?: StringFilter<"GradingReference"> | string
    addedIn?: DateTimeFilter<"GradingReference"> | Date | string
    link?: StringFilter<"GradingReference"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type GradingReferenceOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    addedIn?: SortOrder
    link?: SortOrder
    _count?: GradingReferenceCountOrderByAggregateInput
    _max?: GradingReferenceMaxOrderByAggregateInput
    _min?: GradingReferenceMinOrderByAggregateInput
  }

  export type GradingReferenceScalarWhereWithAggregatesInput = {
    AND?: GradingReferenceScalarWhereWithAggregatesInput | GradingReferenceScalarWhereWithAggregatesInput[]
    OR?: GradingReferenceScalarWhereWithAggregatesInput[]
    NOT?: GradingReferenceScalarWhereWithAggregatesInput | GradingReferenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GradingReference"> | string
    courseId?: StringWithAggregatesFilter<"GradingReference"> | string
    title?: StringWithAggregatesFilter<"GradingReference"> | string
    type?: StringWithAggregatesFilter<"GradingReference"> | string
    addedIn?: DateTimeWithAggregatesFilter<"GradingReference"> | Date | string
    link?: StringWithAggregatesFilter<"GradingReference"> | string
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
    courses?: CourseCreateNestedManyWithoutInstructorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    hashed_password: string
    provider: $Enums.Provider
    courses?: CourseUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    courses?: CourseUpdateManyWithoutInstructorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    courses?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
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
    subject: string
    gradeLevel: string
    courseDescription: string
    generationPrompt: string
    additionalInfo?: string | null
    term: string
    learningObjects?: CourseCreatelearningObjectsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: UserCreateNestedOneWithoutCoursesInput
    requiredMaterials?: RequiredMaterialCreateNestedManyWithoutCourseInput
    gradingPolicy?: GradingPolicyCreateNestedOneWithoutCourseInput
    coursePolicies?: CoursePoliciesCreateNestedOneWithoutCourseInput
    gradingReferences?: GradingReferenceCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    name: string
    instructorId: string
    subject: string
    gradeLevel: string
    courseDescription: string
    generationPrompt: string
    additionalInfo?: string | null
    term: string
    learningObjects?: CourseCreatelearningObjectsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    requiredMaterials?: RequiredMaterialUncheckedCreateNestedManyWithoutCourseInput
    gradingPolicy?: GradingPolicyUncheckedCreateNestedOneWithoutCourseInput
    coursePolicies?: CoursePoliciesUncheckedCreateNestedOneWithoutCourseInput
    gradingReferences?: GradingReferenceUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    generationPrompt?: StringFieldUpdateOperationsInput | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    term?: StringFieldUpdateOperationsInput | string
    learningObjects?: CourseUpdatelearningObjectsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutCoursesNestedInput
    requiredMaterials?: RequiredMaterialUpdateManyWithoutCourseNestedInput
    gradingPolicy?: GradingPolicyUpdateOneWithoutCourseNestedInput
    coursePolicies?: CoursePoliciesUpdateOneWithoutCourseNestedInput
    gradingReferences?: GradingReferenceUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    generationPrompt?: StringFieldUpdateOperationsInput | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    term?: StringFieldUpdateOperationsInput | string
    learningObjects?: CourseUpdatelearningObjectsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredMaterials?: RequiredMaterialUncheckedUpdateManyWithoutCourseNestedInput
    gradingPolicy?: GradingPolicyUncheckedUpdateOneWithoutCourseNestedInput
    coursePolicies?: CoursePoliciesUncheckedUpdateOneWithoutCourseNestedInput
    gradingReferences?: GradingReferenceUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    name: string
    instructorId: string
    subject: string
    gradeLevel: string
    courseDescription: string
    generationPrompt: string
    additionalInfo?: string | null
    term: string
    learningObjects?: CourseCreatelearningObjectsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    generationPrompt?: StringFieldUpdateOperationsInput | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    term?: StringFieldUpdateOperationsInput | string
    learningObjects?: CourseUpdatelearningObjectsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    generationPrompt?: StringFieldUpdateOperationsInput | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    term?: StringFieldUpdateOperationsInput | string
    learningObjects?: CourseUpdatelearningObjectsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequiredMaterialCreateInput = {
    id?: string
    title: string
    author: string
    publisher: string
    required: boolean
    course: CourseCreateNestedOneWithoutRequiredMaterialsInput
  }

  export type RequiredMaterialUncheckedCreateInput = {
    id?: string
    courseId: string
    title: string
    author: string
    publisher: string
    required: boolean
  }

  export type RequiredMaterialUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    course?: CourseUpdateOneRequiredWithoutRequiredMaterialsNestedInput
  }

  export type RequiredMaterialUncheckedUpdateInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RequiredMaterialCreateManyInput = {
    id?: string
    courseId: string
    title: string
    author: string
    publisher: string
    required: boolean
  }

  export type RequiredMaterialUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RequiredMaterialUncheckedUpdateManyInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GradingPolicyCreateInput = {
    id?: string
    assignment: number
    participation: number
    midterm: number
    finalExam: number
    course: CourseCreateNestedOneWithoutGradingPolicyInput
  }

  export type GradingPolicyUncheckedCreateInput = {
    id?: string
    courseId: string
    assignment: number
    participation: number
    midterm: number
    finalExam: number
  }

  export type GradingPolicyUpdateInput = {
    assignment?: IntFieldUpdateOperationsInput | number
    participation?: IntFieldUpdateOperationsInput | number
    midterm?: IntFieldUpdateOperationsInput | number
    finalExam?: IntFieldUpdateOperationsInput | number
    course?: CourseUpdateOneRequiredWithoutGradingPolicyNestedInput
  }

  export type GradingPolicyUncheckedUpdateInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    assignment?: IntFieldUpdateOperationsInput | number
    participation?: IntFieldUpdateOperationsInput | number
    midterm?: IntFieldUpdateOperationsInput | number
    finalExam?: IntFieldUpdateOperationsInput | number
  }

  export type GradingPolicyCreateManyInput = {
    id?: string
    courseId: string
    assignment: number
    participation: number
    midterm: number
    finalExam: number
  }

  export type GradingPolicyUpdateManyMutationInput = {
    assignment?: IntFieldUpdateOperationsInput | number
    participation?: IntFieldUpdateOperationsInput | number
    midterm?: IntFieldUpdateOperationsInput | number
    finalExam?: IntFieldUpdateOperationsInput | number
  }

  export type GradingPolicyUncheckedUpdateManyInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    assignment?: IntFieldUpdateOperationsInput | number
    participation?: IntFieldUpdateOperationsInput | number
    midterm?: IntFieldUpdateOperationsInput | number
    finalExam?: IntFieldUpdateOperationsInput | number
  }

  export type CoursePoliciesCreateInput = {
    id?: string
    attendancePolicy: string
    lateWorkPolicy: string
    academicIntegrityPolicy: string
    accommodationsPolicy: string
    course: CourseCreateNestedOneWithoutCoursePoliciesInput
  }

  export type CoursePoliciesUncheckedCreateInput = {
    id?: string
    courseId: string
    attendancePolicy: string
    lateWorkPolicy: string
    academicIntegrityPolicy: string
    accommodationsPolicy: string
  }

  export type CoursePoliciesUpdateInput = {
    attendancePolicy?: StringFieldUpdateOperationsInput | string
    lateWorkPolicy?: StringFieldUpdateOperationsInput | string
    academicIntegrityPolicy?: StringFieldUpdateOperationsInput | string
    accommodationsPolicy?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutCoursePoliciesNestedInput
  }

  export type CoursePoliciesUncheckedUpdateInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    attendancePolicy?: StringFieldUpdateOperationsInput | string
    lateWorkPolicy?: StringFieldUpdateOperationsInput | string
    academicIntegrityPolicy?: StringFieldUpdateOperationsInput | string
    accommodationsPolicy?: StringFieldUpdateOperationsInput | string
  }

  export type CoursePoliciesCreateManyInput = {
    id?: string
    courseId: string
    attendancePolicy: string
    lateWorkPolicy: string
    academicIntegrityPolicy: string
    accommodationsPolicy: string
  }

  export type CoursePoliciesUpdateManyMutationInput = {
    attendancePolicy?: StringFieldUpdateOperationsInput | string
    lateWorkPolicy?: StringFieldUpdateOperationsInput | string
    academicIntegrityPolicy?: StringFieldUpdateOperationsInput | string
    accommodationsPolicy?: StringFieldUpdateOperationsInput | string
  }

  export type CoursePoliciesUncheckedUpdateManyInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    attendancePolicy?: StringFieldUpdateOperationsInput | string
    lateWorkPolicy?: StringFieldUpdateOperationsInput | string
    academicIntegrityPolicy?: StringFieldUpdateOperationsInput | string
    accommodationsPolicy?: StringFieldUpdateOperationsInput | string
  }

  export type GradingReferenceCreateInput = {
    id?: string
    title: string
    type: string
    addedIn?: Date | string
    link: string
    course: CourseCreateNestedOneWithoutGradingReferencesInput
  }

  export type GradingReferenceUncheckedCreateInput = {
    id?: string
    courseId: string
    title: string
    type: string
    addedIn?: Date | string
    link: string
  }

  export type GradingReferenceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    addedIn?: DateTimeFieldUpdateOperationsInput | Date | string
    link?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutGradingReferencesNestedInput
  }

  export type GradingReferenceUncheckedUpdateInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    addedIn?: DateTimeFieldUpdateOperationsInput | Date | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type GradingReferenceCreateManyInput = {
    id?: string
    courseId: string
    title: string
    type: string
    addedIn?: Date | string
    link: string
  }

  export type GradingReferenceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    addedIn?: DateTimeFieldUpdateOperationsInput | Date | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type GradingReferenceUncheckedUpdateManyInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    addedIn?: DateTimeFieldUpdateOperationsInput | Date | string
    link?: StringFieldUpdateOperationsInput | string
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

  export type CourseOrderByRelationAggregateInput = {
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RequiredMaterialListRelationFilter = {
    every?: RequiredMaterialWhereInput
    some?: RequiredMaterialWhereInput
    none?: RequiredMaterialWhereInput
  }

  export type GradingPolicyNullableScalarRelationFilter = {
    is?: GradingPolicyWhereInput | null
    isNot?: GradingPolicyWhereInput | null
  }

  export type CoursePoliciesNullableScalarRelationFilter = {
    is?: CoursePoliciesWhereInput | null
    isNot?: CoursePoliciesWhereInput | null
  }

  export type GradingReferenceListRelationFilter = {
    every?: GradingReferenceWhereInput
    some?: GradingReferenceWhereInput
    none?: GradingReferenceWhereInput
  }

  export type RequiredMaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GradingReferenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    instructorId?: SortOrder
    subject?: SortOrder
    gradeLevel?: SortOrder
    courseDescription?: SortOrder
    generationPrompt?: SortOrder
    additionalInfo?: SortOrder
    term?: SortOrder
    learningObjects?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    instructorId?: SortOrder
    subject?: SortOrder
    gradeLevel?: SortOrder
    courseDescription?: SortOrder
    generationPrompt?: SortOrder
    additionalInfo?: SortOrder
    term?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    instructorId?: SortOrder
    subject?: SortOrder
    gradeLevel?: SortOrder
    courseDescription?: SortOrder
    generationPrompt?: SortOrder
    additionalInfo?: SortOrder
    term?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type RequiredMaterialCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publisher?: SortOrder
    required?: SortOrder
  }

  export type RequiredMaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publisher?: SortOrder
    required?: SortOrder
  }

  export type RequiredMaterialMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publisher?: SortOrder
    required?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type GradingPolicyCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    assignment?: SortOrder
    participation?: SortOrder
    midterm?: SortOrder
    finalExam?: SortOrder
  }

  export type GradingPolicyAvgOrderByAggregateInput = {
    assignment?: SortOrder
    participation?: SortOrder
    midterm?: SortOrder
    finalExam?: SortOrder
  }

  export type GradingPolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    assignment?: SortOrder
    participation?: SortOrder
    midterm?: SortOrder
    finalExam?: SortOrder
  }

  export type GradingPolicyMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    assignment?: SortOrder
    participation?: SortOrder
    midterm?: SortOrder
    finalExam?: SortOrder
  }

  export type GradingPolicySumOrderByAggregateInput = {
    assignment?: SortOrder
    participation?: SortOrder
    midterm?: SortOrder
    finalExam?: SortOrder
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

  export type CoursePoliciesCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    attendancePolicy?: SortOrder
    lateWorkPolicy?: SortOrder
    academicIntegrityPolicy?: SortOrder
    accommodationsPolicy?: SortOrder
  }

  export type CoursePoliciesMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    attendancePolicy?: SortOrder
    lateWorkPolicy?: SortOrder
    academicIntegrityPolicy?: SortOrder
    accommodationsPolicy?: SortOrder
  }

  export type CoursePoliciesMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    attendancePolicy?: SortOrder
    lateWorkPolicy?: SortOrder
    academicIntegrityPolicy?: SortOrder
    accommodationsPolicy?: SortOrder
  }

  export type GradingReferenceCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    addedIn?: SortOrder
    link?: SortOrder
  }

  export type GradingReferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    addedIn?: SortOrder
    link?: SortOrder
  }

  export type GradingReferenceMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    addedIn?: SortOrder
    link?: SortOrder
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

  export type CourseCreateNestedManyWithoutInstructorInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type EnumProviderFieldUpdateOperationsInput = {
    set?: $Enums.Provider
  }

  export type CourseUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutInstructorInput | CourseUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutInstructorInput | CourseUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutInstructorInput | CourseUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutInstructorInput | CourseUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutInstructorInput | CourseUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutInstructorInput | CourseUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseCreatelearningObjectsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutCoursesInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type RequiredMaterialCreateNestedManyWithoutCourseInput = {
    create?: XOR<RequiredMaterialCreateWithoutCourseInput, RequiredMaterialUncheckedCreateWithoutCourseInput> | RequiredMaterialCreateWithoutCourseInput[] | RequiredMaterialUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RequiredMaterialCreateOrConnectWithoutCourseInput | RequiredMaterialCreateOrConnectWithoutCourseInput[]
    createMany?: RequiredMaterialCreateManyCourseInputEnvelope
    connect?: RequiredMaterialWhereUniqueInput | RequiredMaterialWhereUniqueInput[]
  }

  export type GradingPolicyCreateNestedOneWithoutCourseInput = {
    create?: XOR<GradingPolicyCreateWithoutCourseInput, GradingPolicyUncheckedCreateWithoutCourseInput>
    connectOrCreate?: GradingPolicyCreateOrConnectWithoutCourseInput
    connect?: GradingPolicyWhereUniqueInput
  }

  export type CoursePoliciesCreateNestedOneWithoutCourseInput = {
    create?: XOR<CoursePoliciesCreateWithoutCourseInput, CoursePoliciesUncheckedCreateWithoutCourseInput>
    connectOrCreate?: CoursePoliciesCreateOrConnectWithoutCourseInput
    connect?: CoursePoliciesWhereUniqueInput
  }

  export type GradingReferenceCreateNestedManyWithoutCourseInput = {
    create?: XOR<GradingReferenceCreateWithoutCourseInput, GradingReferenceUncheckedCreateWithoutCourseInput> | GradingReferenceCreateWithoutCourseInput[] | GradingReferenceUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: GradingReferenceCreateOrConnectWithoutCourseInput | GradingReferenceCreateOrConnectWithoutCourseInput[]
    createMany?: GradingReferenceCreateManyCourseInputEnvelope
    connect?: GradingReferenceWhereUniqueInput | GradingReferenceWhereUniqueInput[]
  }

  export type RequiredMaterialUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<RequiredMaterialCreateWithoutCourseInput, RequiredMaterialUncheckedCreateWithoutCourseInput> | RequiredMaterialCreateWithoutCourseInput[] | RequiredMaterialUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RequiredMaterialCreateOrConnectWithoutCourseInput | RequiredMaterialCreateOrConnectWithoutCourseInput[]
    createMany?: RequiredMaterialCreateManyCourseInputEnvelope
    connect?: RequiredMaterialWhereUniqueInput | RequiredMaterialWhereUniqueInput[]
  }

  export type GradingPolicyUncheckedCreateNestedOneWithoutCourseInput = {
    create?: XOR<GradingPolicyCreateWithoutCourseInput, GradingPolicyUncheckedCreateWithoutCourseInput>
    connectOrCreate?: GradingPolicyCreateOrConnectWithoutCourseInput
    connect?: GradingPolicyWhereUniqueInput
  }

  export type CoursePoliciesUncheckedCreateNestedOneWithoutCourseInput = {
    create?: XOR<CoursePoliciesCreateWithoutCourseInput, CoursePoliciesUncheckedCreateWithoutCourseInput>
    connectOrCreate?: CoursePoliciesCreateOrConnectWithoutCourseInput
    connect?: CoursePoliciesWhereUniqueInput
  }

  export type GradingReferenceUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<GradingReferenceCreateWithoutCourseInput, GradingReferenceUncheckedCreateWithoutCourseInput> | GradingReferenceCreateWithoutCourseInput[] | GradingReferenceUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: GradingReferenceCreateOrConnectWithoutCourseInput | GradingReferenceCreateOrConnectWithoutCourseInput[]
    createMany?: GradingReferenceCreateManyCourseInputEnvelope
    connect?: GradingReferenceWhereUniqueInput | GradingReferenceWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type CourseUpdatelearningObjectsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    upsert?: UserUpsertWithoutCoursesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoursesInput, UserUpdateWithoutCoursesInput>, UserUncheckedUpdateWithoutCoursesInput>
  }

  export type RequiredMaterialUpdateManyWithoutCourseNestedInput = {
    create?: XOR<RequiredMaterialCreateWithoutCourseInput, RequiredMaterialUncheckedCreateWithoutCourseInput> | RequiredMaterialCreateWithoutCourseInput[] | RequiredMaterialUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RequiredMaterialCreateOrConnectWithoutCourseInput | RequiredMaterialCreateOrConnectWithoutCourseInput[]
    upsert?: RequiredMaterialUpsertWithWhereUniqueWithoutCourseInput | RequiredMaterialUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: RequiredMaterialCreateManyCourseInputEnvelope
    set?: RequiredMaterialWhereUniqueInput | RequiredMaterialWhereUniqueInput[]
    disconnect?: RequiredMaterialWhereUniqueInput | RequiredMaterialWhereUniqueInput[]
    delete?: RequiredMaterialWhereUniqueInput | RequiredMaterialWhereUniqueInput[]
    connect?: RequiredMaterialWhereUniqueInput | RequiredMaterialWhereUniqueInput[]
    update?: RequiredMaterialUpdateWithWhereUniqueWithoutCourseInput | RequiredMaterialUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: RequiredMaterialUpdateManyWithWhereWithoutCourseInput | RequiredMaterialUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: RequiredMaterialScalarWhereInput | RequiredMaterialScalarWhereInput[]
  }

  export type GradingPolicyUpdateOneWithoutCourseNestedInput = {
    create?: XOR<GradingPolicyCreateWithoutCourseInput, GradingPolicyUncheckedCreateWithoutCourseInput>
    connectOrCreate?: GradingPolicyCreateOrConnectWithoutCourseInput
    upsert?: GradingPolicyUpsertWithoutCourseInput
    disconnect?: GradingPolicyWhereInput | boolean
    delete?: GradingPolicyWhereInput | boolean
    connect?: GradingPolicyWhereUniqueInput
    update?: XOR<XOR<GradingPolicyUpdateToOneWithWhereWithoutCourseInput, GradingPolicyUpdateWithoutCourseInput>, GradingPolicyUncheckedUpdateWithoutCourseInput>
  }

  export type CoursePoliciesUpdateOneWithoutCourseNestedInput = {
    create?: XOR<CoursePoliciesCreateWithoutCourseInput, CoursePoliciesUncheckedCreateWithoutCourseInput>
    connectOrCreate?: CoursePoliciesCreateOrConnectWithoutCourseInput
    upsert?: CoursePoliciesUpsertWithoutCourseInput
    disconnect?: CoursePoliciesWhereInput | boolean
    delete?: CoursePoliciesWhereInput | boolean
    connect?: CoursePoliciesWhereUniqueInput
    update?: XOR<XOR<CoursePoliciesUpdateToOneWithWhereWithoutCourseInput, CoursePoliciesUpdateWithoutCourseInput>, CoursePoliciesUncheckedUpdateWithoutCourseInput>
  }

  export type GradingReferenceUpdateManyWithoutCourseNestedInput = {
    create?: XOR<GradingReferenceCreateWithoutCourseInput, GradingReferenceUncheckedCreateWithoutCourseInput> | GradingReferenceCreateWithoutCourseInput[] | GradingReferenceUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: GradingReferenceCreateOrConnectWithoutCourseInput | GradingReferenceCreateOrConnectWithoutCourseInput[]
    upsert?: GradingReferenceUpsertWithWhereUniqueWithoutCourseInput | GradingReferenceUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: GradingReferenceCreateManyCourseInputEnvelope
    set?: GradingReferenceWhereUniqueInput | GradingReferenceWhereUniqueInput[]
    disconnect?: GradingReferenceWhereUniqueInput | GradingReferenceWhereUniqueInput[]
    delete?: GradingReferenceWhereUniqueInput | GradingReferenceWhereUniqueInput[]
    connect?: GradingReferenceWhereUniqueInput | GradingReferenceWhereUniqueInput[]
    update?: GradingReferenceUpdateWithWhereUniqueWithoutCourseInput | GradingReferenceUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: GradingReferenceUpdateManyWithWhereWithoutCourseInput | GradingReferenceUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: GradingReferenceScalarWhereInput | GradingReferenceScalarWhereInput[]
  }

  export type RequiredMaterialUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<RequiredMaterialCreateWithoutCourseInput, RequiredMaterialUncheckedCreateWithoutCourseInput> | RequiredMaterialCreateWithoutCourseInput[] | RequiredMaterialUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RequiredMaterialCreateOrConnectWithoutCourseInput | RequiredMaterialCreateOrConnectWithoutCourseInput[]
    upsert?: RequiredMaterialUpsertWithWhereUniqueWithoutCourseInput | RequiredMaterialUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: RequiredMaterialCreateManyCourseInputEnvelope
    set?: RequiredMaterialWhereUniqueInput | RequiredMaterialWhereUniqueInput[]
    disconnect?: RequiredMaterialWhereUniqueInput | RequiredMaterialWhereUniqueInput[]
    delete?: RequiredMaterialWhereUniqueInput | RequiredMaterialWhereUniqueInput[]
    connect?: RequiredMaterialWhereUniqueInput | RequiredMaterialWhereUniqueInput[]
    update?: RequiredMaterialUpdateWithWhereUniqueWithoutCourseInput | RequiredMaterialUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: RequiredMaterialUpdateManyWithWhereWithoutCourseInput | RequiredMaterialUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: RequiredMaterialScalarWhereInput | RequiredMaterialScalarWhereInput[]
  }

  export type GradingPolicyUncheckedUpdateOneWithoutCourseNestedInput = {
    create?: XOR<GradingPolicyCreateWithoutCourseInput, GradingPolicyUncheckedCreateWithoutCourseInput>
    connectOrCreate?: GradingPolicyCreateOrConnectWithoutCourseInput
    upsert?: GradingPolicyUpsertWithoutCourseInput
    disconnect?: GradingPolicyWhereInput | boolean
    delete?: GradingPolicyWhereInput | boolean
    connect?: GradingPolicyWhereUniqueInput
    update?: XOR<XOR<GradingPolicyUpdateToOneWithWhereWithoutCourseInput, GradingPolicyUpdateWithoutCourseInput>, GradingPolicyUncheckedUpdateWithoutCourseInput>
  }

  export type CoursePoliciesUncheckedUpdateOneWithoutCourseNestedInput = {
    create?: XOR<CoursePoliciesCreateWithoutCourseInput, CoursePoliciesUncheckedCreateWithoutCourseInput>
    connectOrCreate?: CoursePoliciesCreateOrConnectWithoutCourseInput
    upsert?: CoursePoliciesUpsertWithoutCourseInput
    disconnect?: CoursePoliciesWhereInput | boolean
    delete?: CoursePoliciesWhereInput | boolean
    connect?: CoursePoliciesWhereUniqueInput
    update?: XOR<XOR<CoursePoliciesUpdateToOneWithWhereWithoutCourseInput, CoursePoliciesUpdateWithoutCourseInput>, CoursePoliciesUncheckedUpdateWithoutCourseInput>
  }

  export type GradingReferenceUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<GradingReferenceCreateWithoutCourseInput, GradingReferenceUncheckedCreateWithoutCourseInput> | GradingReferenceCreateWithoutCourseInput[] | GradingReferenceUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: GradingReferenceCreateOrConnectWithoutCourseInput | GradingReferenceCreateOrConnectWithoutCourseInput[]
    upsert?: GradingReferenceUpsertWithWhereUniqueWithoutCourseInput | GradingReferenceUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: GradingReferenceCreateManyCourseInputEnvelope
    set?: GradingReferenceWhereUniqueInput | GradingReferenceWhereUniqueInput[]
    disconnect?: GradingReferenceWhereUniqueInput | GradingReferenceWhereUniqueInput[]
    delete?: GradingReferenceWhereUniqueInput | GradingReferenceWhereUniqueInput[]
    connect?: GradingReferenceWhereUniqueInput | GradingReferenceWhereUniqueInput[]
    update?: GradingReferenceUpdateWithWhereUniqueWithoutCourseInput | GradingReferenceUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: GradingReferenceUpdateManyWithWhereWithoutCourseInput | GradingReferenceUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: GradingReferenceScalarWhereInput | GradingReferenceScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutRequiredMaterialsInput = {
    create?: XOR<CourseCreateWithoutRequiredMaterialsInput, CourseUncheckedCreateWithoutRequiredMaterialsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRequiredMaterialsInput
    connect?: CourseWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CourseUpdateOneRequiredWithoutRequiredMaterialsNestedInput = {
    create?: XOR<CourseCreateWithoutRequiredMaterialsInput, CourseUncheckedCreateWithoutRequiredMaterialsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRequiredMaterialsInput
    upsert?: CourseUpsertWithoutRequiredMaterialsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutRequiredMaterialsInput, CourseUpdateWithoutRequiredMaterialsInput>, CourseUncheckedUpdateWithoutRequiredMaterialsInput>
  }

  export type CourseCreateNestedOneWithoutGradingPolicyInput = {
    create?: XOR<CourseCreateWithoutGradingPolicyInput, CourseUncheckedCreateWithoutGradingPolicyInput>
    connectOrCreate?: CourseCreateOrConnectWithoutGradingPolicyInput
    connect?: CourseWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseUpdateOneRequiredWithoutGradingPolicyNestedInput = {
    create?: XOR<CourseCreateWithoutGradingPolicyInput, CourseUncheckedCreateWithoutGradingPolicyInput>
    connectOrCreate?: CourseCreateOrConnectWithoutGradingPolicyInput
    upsert?: CourseUpsertWithoutGradingPolicyInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutGradingPolicyInput, CourseUpdateWithoutGradingPolicyInput>, CourseUncheckedUpdateWithoutGradingPolicyInput>
  }

  export type CourseCreateNestedOneWithoutCoursePoliciesInput = {
    create?: XOR<CourseCreateWithoutCoursePoliciesInput, CourseUncheckedCreateWithoutCoursePoliciesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCoursePoliciesInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutCoursePoliciesNestedInput = {
    create?: XOR<CourseCreateWithoutCoursePoliciesInput, CourseUncheckedCreateWithoutCoursePoliciesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCoursePoliciesInput
    upsert?: CourseUpsertWithoutCoursePoliciesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCoursePoliciesInput, CourseUpdateWithoutCoursePoliciesInput>, CourseUncheckedUpdateWithoutCoursePoliciesInput>
  }

  export type CourseCreateNestedOneWithoutGradingReferencesInput = {
    create?: XOR<CourseCreateWithoutGradingReferencesInput, CourseUncheckedCreateWithoutGradingReferencesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutGradingReferencesInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutGradingReferencesNestedInput = {
    create?: XOR<CourseCreateWithoutGradingReferencesInput, CourseUncheckedCreateWithoutGradingReferencesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutGradingReferencesInput
    upsert?: CourseUpsertWithoutGradingReferencesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutGradingReferencesInput, CourseUpdateWithoutGradingReferencesInput>, CourseUncheckedUpdateWithoutGradingReferencesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type CourseCreateWithoutInstructorInput = {
    id?: string
    name: string
    subject: string
    gradeLevel: string
    courseDescription: string
    generationPrompt: string
    additionalInfo?: string | null
    term: string
    learningObjects?: CourseCreatelearningObjectsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    requiredMaterials?: RequiredMaterialCreateNestedManyWithoutCourseInput
    gradingPolicy?: GradingPolicyCreateNestedOneWithoutCourseInput
    coursePolicies?: CoursePoliciesCreateNestedOneWithoutCourseInput
    gradingReferences?: GradingReferenceCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutInstructorInput = {
    id?: string
    name: string
    subject: string
    gradeLevel: string
    courseDescription: string
    generationPrompt: string
    additionalInfo?: string | null
    term: string
    learningObjects?: CourseCreatelearningObjectsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    requiredMaterials?: RequiredMaterialUncheckedCreateNestedManyWithoutCourseInput
    gradingPolicy?: GradingPolicyUncheckedCreateNestedOneWithoutCourseInput
    coursePolicies?: CoursePoliciesUncheckedCreateNestedOneWithoutCourseInput
    gradingReferences?: GradingReferenceUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutInstructorInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput>
  }

  export type CourseCreateManyInstructorInputEnvelope = {
    data: CourseCreateManyInstructorInput | CourseCreateManyInstructorInput[]
  }

  export type CourseUpsertWithWhereUniqueWithoutInstructorInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutInstructorInput, CourseUncheckedUpdateWithoutInstructorInput>
    create: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutInstructorInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutInstructorInput, CourseUncheckedUpdateWithoutInstructorInput>
  }

  export type CourseUpdateManyWithWhereWithoutInstructorInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutInstructorInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    instructorId?: StringFilter<"Course"> | string
    subject?: StringFilter<"Course"> | string
    gradeLevel?: StringFilter<"Course"> | string
    courseDescription?: StringFilter<"Course"> | string
    generationPrompt?: StringFilter<"Course"> | string
    additionalInfo?: StringNullableFilter<"Course"> | string | null
    term?: StringFilter<"Course"> | string
    learningObjects?: StringNullableListFilter<"Course">
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type UserCreateWithoutCoursesInput = {
    id?: string
    name: string
    email: string
    hashed_password: string
    provider: $Enums.Provider
  }

  export type UserUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
    email: string
    hashed_password: string
    provider: $Enums.Provider
  }

  export type UserCreateOrConnectWithoutCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
  }

  export type RequiredMaterialCreateWithoutCourseInput = {
    id?: string
    title: string
    author: string
    publisher: string
    required: boolean
  }

  export type RequiredMaterialUncheckedCreateWithoutCourseInput = {
    id?: string
    title: string
    author: string
    publisher: string
    required: boolean
  }

  export type RequiredMaterialCreateOrConnectWithoutCourseInput = {
    where: RequiredMaterialWhereUniqueInput
    create: XOR<RequiredMaterialCreateWithoutCourseInput, RequiredMaterialUncheckedCreateWithoutCourseInput>
  }

  export type RequiredMaterialCreateManyCourseInputEnvelope = {
    data: RequiredMaterialCreateManyCourseInput | RequiredMaterialCreateManyCourseInput[]
  }

  export type GradingPolicyCreateWithoutCourseInput = {
    id?: string
    assignment: number
    participation: number
    midterm: number
    finalExam: number
  }

  export type GradingPolicyUncheckedCreateWithoutCourseInput = {
    id?: string
    assignment: number
    participation: number
    midterm: number
    finalExam: number
  }

  export type GradingPolicyCreateOrConnectWithoutCourseInput = {
    where: GradingPolicyWhereUniqueInput
    create: XOR<GradingPolicyCreateWithoutCourseInput, GradingPolicyUncheckedCreateWithoutCourseInput>
  }

  export type CoursePoliciesCreateWithoutCourseInput = {
    id?: string
    attendancePolicy: string
    lateWorkPolicy: string
    academicIntegrityPolicy: string
    accommodationsPolicy: string
  }

  export type CoursePoliciesUncheckedCreateWithoutCourseInput = {
    id?: string
    attendancePolicy: string
    lateWorkPolicy: string
    academicIntegrityPolicy: string
    accommodationsPolicy: string
  }

  export type CoursePoliciesCreateOrConnectWithoutCourseInput = {
    where: CoursePoliciesWhereUniqueInput
    create: XOR<CoursePoliciesCreateWithoutCourseInput, CoursePoliciesUncheckedCreateWithoutCourseInput>
  }

  export type GradingReferenceCreateWithoutCourseInput = {
    id?: string
    title: string
    type: string
    addedIn?: Date | string
    link: string
  }

  export type GradingReferenceUncheckedCreateWithoutCourseInput = {
    id?: string
    title: string
    type: string
    addedIn?: Date | string
    link: string
  }

  export type GradingReferenceCreateOrConnectWithoutCourseInput = {
    where: GradingReferenceWhereUniqueInput
    create: XOR<GradingReferenceCreateWithoutCourseInput, GradingReferenceUncheckedCreateWithoutCourseInput>
  }

  export type GradingReferenceCreateManyCourseInputEnvelope = {
    data: GradingReferenceCreateManyCourseInput | GradingReferenceCreateManyCourseInput[]
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
  }

  export type UserUncheckedUpdateWithoutCoursesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
  }

  export type RequiredMaterialUpsertWithWhereUniqueWithoutCourseInput = {
    where: RequiredMaterialWhereUniqueInput
    update: XOR<RequiredMaterialUpdateWithoutCourseInput, RequiredMaterialUncheckedUpdateWithoutCourseInput>
    create: XOR<RequiredMaterialCreateWithoutCourseInput, RequiredMaterialUncheckedCreateWithoutCourseInput>
  }

  export type RequiredMaterialUpdateWithWhereUniqueWithoutCourseInput = {
    where: RequiredMaterialWhereUniqueInput
    data: XOR<RequiredMaterialUpdateWithoutCourseInput, RequiredMaterialUncheckedUpdateWithoutCourseInput>
  }

  export type RequiredMaterialUpdateManyWithWhereWithoutCourseInput = {
    where: RequiredMaterialScalarWhereInput
    data: XOR<RequiredMaterialUpdateManyMutationInput, RequiredMaterialUncheckedUpdateManyWithoutCourseInput>
  }

  export type RequiredMaterialScalarWhereInput = {
    AND?: RequiredMaterialScalarWhereInput | RequiredMaterialScalarWhereInput[]
    OR?: RequiredMaterialScalarWhereInput[]
    NOT?: RequiredMaterialScalarWhereInput | RequiredMaterialScalarWhereInput[]
    id?: StringFilter<"RequiredMaterial"> | string
    courseId?: StringFilter<"RequiredMaterial"> | string
    title?: StringFilter<"RequiredMaterial"> | string
    author?: StringFilter<"RequiredMaterial"> | string
    publisher?: StringFilter<"RequiredMaterial"> | string
    required?: BoolFilter<"RequiredMaterial"> | boolean
  }

  export type GradingPolicyUpsertWithoutCourseInput = {
    update: XOR<GradingPolicyUpdateWithoutCourseInput, GradingPolicyUncheckedUpdateWithoutCourseInput>
    create: XOR<GradingPolicyCreateWithoutCourseInput, GradingPolicyUncheckedCreateWithoutCourseInput>
    where?: GradingPolicyWhereInput
  }

  export type GradingPolicyUpdateToOneWithWhereWithoutCourseInput = {
    where?: GradingPolicyWhereInput
    data: XOR<GradingPolicyUpdateWithoutCourseInput, GradingPolicyUncheckedUpdateWithoutCourseInput>
  }

  export type GradingPolicyUpdateWithoutCourseInput = {
    assignment?: IntFieldUpdateOperationsInput | number
    participation?: IntFieldUpdateOperationsInput | number
    midterm?: IntFieldUpdateOperationsInput | number
    finalExam?: IntFieldUpdateOperationsInput | number
  }

  export type GradingPolicyUncheckedUpdateWithoutCourseInput = {
    assignment?: IntFieldUpdateOperationsInput | number
    participation?: IntFieldUpdateOperationsInput | number
    midterm?: IntFieldUpdateOperationsInput | number
    finalExam?: IntFieldUpdateOperationsInput | number
  }

  export type CoursePoliciesUpsertWithoutCourseInput = {
    update: XOR<CoursePoliciesUpdateWithoutCourseInput, CoursePoliciesUncheckedUpdateWithoutCourseInput>
    create: XOR<CoursePoliciesCreateWithoutCourseInput, CoursePoliciesUncheckedCreateWithoutCourseInput>
    where?: CoursePoliciesWhereInput
  }

  export type CoursePoliciesUpdateToOneWithWhereWithoutCourseInput = {
    where?: CoursePoliciesWhereInput
    data: XOR<CoursePoliciesUpdateWithoutCourseInput, CoursePoliciesUncheckedUpdateWithoutCourseInput>
  }

  export type CoursePoliciesUpdateWithoutCourseInput = {
    attendancePolicy?: StringFieldUpdateOperationsInput | string
    lateWorkPolicy?: StringFieldUpdateOperationsInput | string
    academicIntegrityPolicy?: StringFieldUpdateOperationsInput | string
    accommodationsPolicy?: StringFieldUpdateOperationsInput | string
  }

  export type CoursePoliciesUncheckedUpdateWithoutCourseInput = {
    attendancePolicy?: StringFieldUpdateOperationsInput | string
    lateWorkPolicy?: StringFieldUpdateOperationsInput | string
    academicIntegrityPolicy?: StringFieldUpdateOperationsInput | string
    accommodationsPolicy?: StringFieldUpdateOperationsInput | string
  }

  export type GradingReferenceUpsertWithWhereUniqueWithoutCourseInput = {
    where: GradingReferenceWhereUniqueInput
    update: XOR<GradingReferenceUpdateWithoutCourseInput, GradingReferenceUncheckedUpdateWithoutCourseInput>
    create: XOR<GradingReferenceCreateWithoutCourseInput, GradingReferenceUncheckedCreateWithoutCourseInput>
  }

  export type GradingReferenceUpdateWithWhereUniqueWithoutCourseInput = {
    where: GradingReferenceWhereUniqueInput
    data: XOR<GradingReferenceUpdateWithoutCourseInput, GradingReferenceUncheckedUpdateWithoutCourseInput>
  }

  export type GradingReferenceUpdateManyWithWhereWithoutCourseInput = {
    where: GradingReferenceScalarWhereInput
    data: XOR<GradingReferenceUpdateManyMutationInput, GradingReferenceUncheckedUpdateManyWithoutCourseInput>
  }

  export type GradingReferenceScalarWhereInput = {
    AND?: GradingReferenceScalarWhereInput | GradingReferenceScalarWhereInput[]
    OR?: GradingReferenceScalarWhereInput[]
    NOT?: GradingReferenceScalarWhereInput | GradingReferenceScalarWhereInput[]
    id?: StringFilter<"GradingReference"> | string
    courseId?: StringFilter<"GradingReference"> | string
    title?: StringFilter<"GradingReference"> | string
    type?: StringFilter<"GradingReference"> | string
    addedIn?: DateTimeFilter<"GradingReference"> | Date | string
    link?: StringFilter<"GradingReference"> | string
  }

  export type CourseCreateWithoutRequiredMaterialsInput = {
    id?: string
    name: string
    subject: string
    gradeLevel: string
    courseDescription: string
    generationPrompt: string
    additionalInfo?: string | null
    term: string
    learningObjects?: CourseCreatelearningObjectsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: UserCreateNestedOneWithoutCoursesInput
    gradingPolicy?: GradingPolicyCreateNestedOneWithoutCourseInput
    coursePolicies?: CoursePoliciesCreateNestedOneWithoutCourseInput
    gradingReferences?: GradingReferenceCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutRequiredMaterialsInput = {
    id?: string
    name: string
    instructorId: string
    subject: string
    gradeLevel: string
    courseDescription: string
    generationPrompt: string
    additionalInfo?: string | null
    term: string
    learningObjects?: CourseCreatelearningObjectsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    gradingPolicy?: GradingPolicyUncheckedCreateNestedOneWithoutCourseInput
    coursePolicies?: CoursePoliciesUncheckedCreateNestedOneWithoutCourseInput
    gradingReferences?: GradingReferenceUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutRequiredMaterialsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutRequiredMaterialsInput, CourseUncheckedCreateWithoutRequiredMaterialsInput>
  }

  export type CourseUpsertWithoutRequiredMaterialsInput = {
    update: XOR<CourseUpdateWithoutRequiredMaterialsInput, CourseUncheckedUpdateWithoutRequiredMaterialsInput>
    create: XOR<CourseCreateWithoutRequiredMaterialsInput, CourseUncheckedCreateWithoutRequiredMaterialsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutRequiredMaterialsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutRequiredMaterialsInput, CourseUncheckedUpdateWithoutRequiredMaterialsInput>
  }

  export type CourseUpdateWithoutRequiredMaterialsInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    generationPrompt?: StringFieldUpdateOperationsInput | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    term?: StringFieldUpdateOperationsInput | string
    learningObjects?: CourseUpdatelearningObjectsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutCoursesNestedInput
    gradingPolicy?: GradingPolicyUpdateOneWithoutCourseNestedInput
    coursePolicies?: CoursePoliciesUpdateOneWithoutCourseNestedInput
    gradingReferences?: GradingReferenceUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutRequiredMaterialsInput = {
    name?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    generationPrompt?: StringFieldUpdateOperationsInput | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    term?: StringFieldUpdateOperationsInput | string
    learningObjects?: CourseUpdatelearningObjectsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gradingPolicy?: GradingPolicyUncheckedUpdateOneWithoutCourseNestedInput
    coursePolicies?: CoursePoliciesUncheckedUpdateOneWithoutCourseNestedInput
    gradingReferences?: GradingReferenceUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateWithoutGradingPolicyInput = {
    id?: string
    name: string
    subject: string
    gradeLevel: string
    courseDescription: string
    generationPrompt: string
    additionalInfo?: string | null
    term: string
    learningObjects?: CourseCreatelearningObjectsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: UserCreateNestedOneWithoutCoursesInput
    requiredMaterials?: RequiredMaterialCreateNestedManyWithoutCourseInput
    coursePolicies?: CoursePoliciesCreateNestedOneWithoutCourseInput
    gradingReferences?: GradingReferenceCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutGradingPolicyInput = {
    id?: string
    name: string
    instructorId: string
    subject: string
    gradeLevel: string
    courseDescription: string
    generationPrompt: string
    additionalInfo?: string | null
    term: string
    learningObjects?: CourseCreatelearningObjectsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    requiredMaterials?: RequiredMaterialUncheckedCreateNestedManyWithoutCourseInput
    coursePolicies?: CoursePoliciesUncheckedCreateNestedOneWithoutCourseInput
    gradingReferences?: GradingReferenceUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutGradingPolicyInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutGradingPolicyInput, CourseUncheckedCreateWithoutGradingPolicyInput>
  }

  export type CourseUpsertWithoutGradingPolicyInput = {
    update: XOR<CourseUpdateWithoutGradingPolicyInput, CourseUncheckedUpdateWithoutGradingPolicyInput>
    create: XOR<CourseCreateWithoutGradingPolicyInput, CourseUncheckedCreateWithoutGradingPolicyInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutGradingPolicyInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutGradingPolicyInput, CourseUncheckedUpdateWithoutGradingPolicyInput>
  }

  export type CourseUpdateWithoutGradingPolicyInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    generationPrompt?: StringFieldUpdateOperationsInput | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    term?: StringFieldUpdateOperationsInput | string
    learningObjects?: CourseUpdatelearningObjectsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutCoursesNestedInput
    requiredMaterials?: RequiredMaterialUpdateManyWithoutCourseNestedInput
    coursePolicies?: CoursePoliciesUpdateOneWithoutCourseNestedInput
    gradingReferences?: GradingReferenceUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutGradingPolicyInput = {
    name?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    generationPrompt?: StringFieldUpdateOperationsInput | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    term?: StringFieldUpdateOperationsInput | string
    learningObjects?: CourseUpdatelearningObjectsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredMaterials?: RequiredMaterialUncheckedUpdateManyWithoutCourseNestedInput
    coursePolicies?: CoursePoliciesUncheckedUpdateOneWithoutCourseNestedInput
    gradingReferences?: GradingReferenceUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateWithoutCoursePoliciesInput = {
    id?: string
    name: string
    subject: string
    gradeLevel: string
    courseDescription: string
    generationPrompt: string
    additionalInfo?: string | null
    term: string
    learningObjects?: CourseCreatelearningObjectsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: UserCreateNestedOneWithoutCoursesInput
    requiredMaterials?: RequiredMaterialCreateNestedManyWithoutCourseInput
    gradingPolicy?: GradingPolicyCreateNestedOneWithoutCourseInput
    gradingReferences?: GradingReferenceCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCoursePoliciesInput = {
    id?: string
    name: string
    instructorId: string
    subject: string
    gradeLevel: string
    courseDescription: string
    generationPrompt: string
    additionalInfo?: string | null
    term: string
    learningObjects?: CourseCreatelearningObjectsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    requiredMaterials?: RequiredMaterialUncheckedCreateNestedManyWithoutCourseInput
    gradingPolicy?: GradingPolicyUncheckedCreateNestedOneWithoutCourseInput
    gradingReferences?: GradingReferenceUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCoursePoliciesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCoursePoliciesInput, CourseUncheckedCreateWithoutCoursePoliciesInput>
  }

  export type CourseUpsertWithoutCoursePoliciesInput = {
    update: XOR<CourseUpdateWithoutCoursePoliciesInput, CourseUncheckedUpdateWithoutCoursePoliciesInput>
    create: XOR<CourseCreateWithoutCoursePoliciesInput, CourseUncheckedCreateWithoutCoursePoliciesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCoursePoliciesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCoursePoliciesInput, CourseUncheckedUpdateWithoutCoursePoliciesInput>
  }

  export type CourseUpdateWithoutCoursePoliciesInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    generationPrompt?: StringFieldUpdateOperationsInput | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    term?: StringFieldUpdateOperationsInput | string
    learningObjects?: CourseUpdatelearningObjectsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutCoursesNestedInput
    requiredMaterials?: RequiredMaterialUpdateManyWithoutCourseNestedInput
    gradingPolicy?: GradingPolicyUpdateOneWithoutCourseNestedInput
    gradingReferences?: GradingReferenceUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCoursePoliciesInput = {
    name?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    generationPrompt?: StringFieldUpdateOperationsInput | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    term?: StringFieldUpdateOperationsInput | string
    learningObjects?: CourseUpdatelearningObjectsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredMaterials?: RequiredMaterialUncheckedUpdateManyWithoutCourseNestedInput
    gradingPolicy?: GradingPolicyUncheckedUpdateOneWithoutCourseNestedInput
    gradingReferences?: GradingReferenceUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateWithoutGradingReferencesInput = {
    id?: string
    name: string
    subject: string
    gradeLevel: string
    courseDescription: string
    generationPrompt: string
    additionalInfo?: string | null
    term: string
    learningObjects?: CourseCreatelearningObjectsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: UserCreateNestedOneWithoutCoursesInput
    requiredMaterials?: RequiredMaterialCreateNestedManyWithoutCourseInput
    gradingPolicy?: GradingPolicyCreateNestedOneWithoutCourseInput
    coursePolicies?: CoursePoliciesCreateNestedOneWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutGradingReferencesInput = {
    id?: string
    name: string
    instructorId: string
    subject: string
    gradeLevel: string
    courseDescription: string
    generationPrompt: string
    additionalInfo?: string | null
    term: string
    learningObjects?: CourseCreatelearningObjectsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    requiredMaterials?: RequiredMaterialUncheckedCreateNestedManyWithoutCourseInput
    gradingPolicy?: GradingPolicyUncheckedCreateNestedOneWithoutCourseInput
    coursePolicies?: CoursePoliciesUncheckedCreateNestedOneWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutGradingReferencesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutGradingReferencesInput, CourseUncheckedCreateWithoutGradingReferencesInput>
  }

  export type CourseUpsertWithoutGradingReferencesInput = {
    update: XOR<CourseUpdateWithoutGradingReferencesInput, CourseUncheckedUpdateWithoutGradingReferencesInput>
    create: XOR<CourseCreateWithoutGradingReferencesInput, CourseUncheckedCreateWithoutGradingReferencesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutGradingReferencesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutGradingReferencesInput, CourseUncheckedUpdateWithoutGradingReferencesInput>
  }

  export type CourseUpdateWithoutGradingReferencesInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    generationPrompt?: StringFieldUpdateOperationsInput | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    term?: StringFieldUpdateOperationsInput | string
    learningObjects?: CourseUpdatelearningObjectsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutCoursesNestedInput
    requiredMaterials?: RequiredMaterialUpdateManyWithoutCourseNestedInput
    gradingPolicy?: GradingPolicyUpdateOneWithoutCourseNestedInput
    coursePolicies?: CoursePoliciesUpdateOneWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutGradingReferencesInput = {
    name?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    generationPrompt?: StringFieldUpdateOperationsInput | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    term?: StringFieldUpdateOperationsInput | string
    learningObjects?: CourseUpdatelearningObjectsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredMaterials?: RequiredMaterialUncheckedUpdateManyWithoutCourseNestedInput
    gradingPolicy?: GradingPolicyUncheckedUpdateOneWithoutCourseNestedInput
    coursePolicies?: CoursePoliciesUncheckedUpdateOneWithoutCourseNestedInput
  }

  export type CourseCreateManyInstructorInput = {
    id?: string
    name: string
    subject: string
    gradeLevel: string
    courseDescription: string
    generationPrompt: string
    additionalInfo?: string | null
    term: string
    learningObjects?: CourseCreatelearningObjectsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateWithoutInstructorInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    generationPrompt?: StringFieldUpdateOperationsInput | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    term?: StringFieldUpdateOperationsInput | string
    learningObjects?: CourseUpdatelearningObjectsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredMaterials?: RequiredMaterialUpdateManyWithoutCourseNestedInput
    gradingPolicy?: GradingPolicyUpdateOneWithoutCourseNestedInput
    coursePolicies?: CoursePoliciesUpdateOneWithoutCourseNestedInput
    gradingReferences?: GradingReferenceUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutInstructorInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    generationPrompt?: StringFieldUpdateOperationsInput | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    term?: StringFieldUpdateOperationsInput | string
    learningObjects?: CourseUpdatelearningObjectsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredMaterials?: RequiredMaterialUncheckedUpdateManyWithoutCourseNestedInput
    gradingPolicy?: GradingPolicyUncheckedUpdateOneWithoutCourseNestedInput
    coursePolicies?: CoursePoliciesUncheckedUpdateOneWithoutCourseNestedInput
    gradingReferences?: GradingReferenceUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutInstructorInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    generationPrompt?: StringFieldUpdateOperationsInput | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    term?: StringFieldUpdateOperationsInput | string
    learningObjects?: CourseUpdatelearningObjectsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequiredMaterialCreateManyCourseInput = {
    id?: string
    title: string
    author: string
    publisher: string
    required: boolean
  }

  export type GradingReferenceCreateManyCourseInput = {
    id?: string
    title: string
    type: string
    addedIn?: Date | string
    link: string
  }

  export type RequiredMaterialUpdateWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RequiredMaterialUncheckedUpdateWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RequiredMaterialUncheckedUpdateManyWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GradingReferenceUpdateWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    addedIn?: DateTimeFieldUpdateOperationsInput | Date | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type GradingReferenceUncheckedUpdateWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    addedIn?: DateTimeFieldUpdateOperationsInput | Date | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type GradingReferenceUncheckedUpdateManyWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    addedIn?: DateTimeFieldUpdateOperationsInput | Date | string
    link?: StringFieldUpdateOperationsInput | string
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