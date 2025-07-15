
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
 * Model Specialty
 * 
 */
export type Specialty = $Result.DefaultSelection<Prisma.$SpecialtyPayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model StaffLog
 * 
 */
export type StaffLog = $Result.DefaultSelection<Prisma.$StaffLogPayload>
/**
 * Model UserLog
 * 
 */
export type UserLog = $Result.DefaultSelection<Prisma.$UserLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  man: 'man',
  woman: 'woman'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Role: {
  admin: 'admin',
  user: 'user',
  staff: 'staff'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Field: {
  dentistry: 'dentistry',
  cardiology: 'cardiology',
  pediatrics: 'pediatrics',
  dermatology: 'dermatology',
  cosmetology: 'cosmetology',
  orthopedics: 'orthopedics',
  anesthesiology: 'anesthesiology',
  dietetics: 'dietetics',
  ophthalmology: 'ophthalmology',
  respiratorySpecialty: 'respiratorySpecialty'
};

export type Field = (typeof Field)[keyof typeof Field]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Field = $Enums.Field

export const Field: typeof $Enums.Field

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Specialties
 * const specialties = await prisma.specialty.findMany()
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
   * // Fetch zero or more Specialties
   * const specialties = await prisma.specialty.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.specialty`: Exposes CRUD operations for the **Specialty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specialties
    * const specialties = await prisma.specialty.findMany()
    * ```
    */
  get specialty(): Prisma.SpecialtyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staffLog`: Exposes CRUD operations for the **StaffLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffLogs
    * const staffLogs = await prisma.staffLog.findMany()
    * ```
    */
  get staffLog(): Prisma.StaffLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLog`: Exposes CRUD operations for the **UserLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLogs
    * const userLogs = await prisma.userLog.findMany()
    * ```
    */
  get userLog(): Prisma.UserLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma.skip
   */
  export import skip = runtime.skip


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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    Specialty: 'Specialty',
    Staff: 'Staff',
    User: 'User',
    Appointment: 'Appointment',
    StaffLog: 'StaffLog',
    UserLog: 'UserLog'
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
      modelProps: "specialty" | "staff" | "user" | "appointment" | "staffLog" | "userLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Specialty: {
        payload: Prisma.$SpecialtyPayload<ExtArgs>
        fields: Prisma.SpecialtyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialtyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialtyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          findFirst: {
            args: Prisma.SpecialtyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialtyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          findMany: {
            args: Prisma.SpecialtyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>[]
          }
          create: {
            args: Prisma.SpecialtyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          createMany: {
            args: Prisma.SpecialtyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecialtyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>[]
          }
          delete: {
            args: Prisma.SpecialtyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          update: {
            args: Prisma.SpecialtyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          deleteMany: {
            args: Prisma.SpecialtyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialtyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecialtyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>[]
          }
          upsert: {
            args: Prisma.SpecialtyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          aggregate: {
            args: Prisma.SpecialtyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialty>
          }
          groupBy: {
            args: Prisma.SpecialtyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialtyGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialtyCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialtyCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      StaffLog: {
        payload: Prisma.$StaffLogPayload<ExtArgs>
        fields: Prisma.StaffLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffLogPayload>
          }
          findFirst: {
            args: Prisma.StaffLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffLogPayload>
          }
          findMany: {
            args: Prisma.StaffLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffLogPayload>[]
          }
          create: {
            args: Prisma.StaffLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffLogPayload>
          }
          createMany: {
            args: Prisma.StaffLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffLogPayload>[]
          }
          delete: {
            args: Prisma.StaffLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffLogPayload>
          }
          update: {
            args: Prisma.StaffLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffLogPayload>
          }
          deleteMany: {
            args: Prisma.StaffLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffLogPayload>[]
          }
          upsert: {
            args: Prisma.StaffLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffLogPayload>
          }
          aggregate: {
            args: Prisma.StaffLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffLog>
          }
          groupBy: {
            args: Prisma.StaffLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffLogCountArgs<ExtArgs>
            result: $Utils.Optional<StaffLogCountAggregateOutputType> | number
          }
        }
      }
      UserLog: {
        payload: Prisma.$UserLogPayload<ExtArgs>
        fields: Prisma.UserLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          findFirst: {
            args: Prisma.UserLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          findMany: {
            args: Prisma.UserLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>[]
          }
          create: {
            args: Prisma.UserLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          createMany: {
            args: Prisma.UserLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>[]
          }
          delete: {
            args: Prisma.UserLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          update: {
            args: Prisma.UserLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          deleteMany: {
            args: Prisma.UserLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>[]
          }
          upsert: {
            args: Prisma.UserLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          aggregate: {
            args: Prisma.UserLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLog>
          }
          groupBy: {
            args: Prisma.UserLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLogCountArgs<ExtArgs>
            result: $Utils.Optional<UserLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    specialty?: SpecialtyOmit
    staff?: StaffOmit
    user?: UserOmit
    appointment?: AppointmentOmit
    staffLog?: StaffLogOmit
    userLog?: UserLogOmit
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
   * Count Type SpecialtyCountOutputType
   */

  export type SpecialtyCountOutputType = {
    doctors: number
    Appointment: number
  }

  export type SpecialtyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctors?: boolean | SpecialtyCountOutputTypeCountDoctorsArgs
    Appointment?: boolean | SpecialtyCountOutputTypeCountAppointmentArgs
  }

  // Custom InputTypes
  /**
   * SpecialtyCountOutputType without action
   */
  export type SpecialtyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialtyCountOutputType
     */
    select?: SpecialtyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialtyCountOutputType without action
   */
  export type SpecialtyCountOutputTypeCountDoctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput | $Types.Skip
  }

  /**
   * SpecialtyCountOutputType without action
   */
  export type SpecialtyCountOutputTypeCountAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput | $Types.Skip
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    appointments: number
    messages: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | StaffCountOutputTypeCountAppointmentsArgs
    messages?: boolean | StaffCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput | $Types.Skip
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffLogWhereInput | $Types.Skip
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    appointments: number
    messages: number
    StaffLog: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | UserCountOutputTypeCountAppointmentsArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    StaffLog?: boolean | UserCountOutputTypeCountStaffLogArgs
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
  export type UserCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput | $Types.Skip
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLogWhereInput | $Types.Skip
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStaffLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffLogWhereInput | $Types.Skip
  }


  /**
   * Models
   */

  /**
   * Model Specialty
   */

  export type AggregateSpecialty = {
    _count: SpecialtyCountAggregateOutputType | null
    _avg: SpecialtyAvgAggregateOutputType | null
    _sum: SpecialtySumAggregateOutputType | null
    _min: SpecialtyMinAggregateOutputType | null
    _max: SpecialtyMaxAggregateOutputType | null
  }

  export type SpecialtyAvgAggregateOutputType = {
    avgVisitTime: number | null
  }

  export type SpecialtySumAggregateOutputType = {
    avgVisitTime: number | null
  }

  export type SpecialtyMinAggregateOutputType = {
    id: string | null
    title: $Enums.Field | null
    avgVisitTime: number | null
  }

  export type SpecialtyMaxAggregateOutputType = {
    id: string | null
    title: $Enums.Field | null
    avgVisitTime: number | null
  }

  export type SpecialtyCountAggregateOutputType = {
    id: number
    title: number
    avgVisitTime: number
    _all: number
  }


  export type SpecialtyAvgAggregateInputType = {
    avgVisitTime?: true | $Types.Skip
  }

  export type SpecialtySumAggregateInputType = {
    avgVisitTime?: true | $Types.Skip
  }

  export type SpecialtyMinAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    avgVisitTime?: true | $Types.Skip
  }

  export type SpecialtyMaxAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    avgVisitTime?: true | $Types.Skip
  }

  export type SpecialtyCountAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    avgVisitTime?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type SpecialtyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialty to aggregate.
     */
    where?: SpecialtyWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtyOrderByWithRelationInput | SpecialtyOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialtyWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Specialties
    **/
    _count?: true | SpecialtyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecialtyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecialtySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialtyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialtyMaxAggregateInputType
  }

  export type GetSpecialtyAggregateType<T extends SpecialtyAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialty[P]>
      : GetScalarType<T[P], AggregateSpecialty[P]>
  }




  export type SpecialtyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialtyWhereInput | $Types.Skip
    orderBy?: SpecialtyOrderByWithAggregationInput | SpecialtyOrderByWithAggregationInput[] | $Types.Skip
    by: SpecialtyScalarFieldEnum[] | SpecialtyScalarFieldEnum
    having?: SpecialtyScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: SpecialtyCountAggregateInputType | true
    _avg?: SpecialtyAvgAggregateInputType
    _sum?: SpecialtySumAggregateInputType
    _min?: SpecialtyMinAggregateInputType
    _max?: SpecialtyMaxAggregateInputType
  }

  export type SpecialtyGroupByOutputType = {
    id: string
    title: $Enums.Field
    avgVisitTime: number | null
    _count: SpecialtyCountAggregateOutputType | null
    _avg: SpecialtyAvgAggregateOutputType | null
    _sum: SpecialtySumAggregateOutputType | null
    _min: SpecialtyMinAggregateOutputType | null
    _max: SpecialtyMaxAggregateOutputType | null
  }

  type GetSpecialtyGroupByPayload<T extends SpecialtyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialtyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialtyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialtyGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialtyGroupByOutputType[P]>
        }
      >
    >


  export type SpecialtySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    avgVisitTime?: boolean | $Types.Skip
    doctors?: boolean | Specialty$doctorsArgs<ExtArgs> | $Types.Skip
    Appointment?: boolean | Specialty$AppointmentArgs<ExtArgs> | $Types.Skip
    _count?: boolean | SpecialtyCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["specialty"]>

  export type SpecialtySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    avgVisitTime?: boolean | $Types.Skip
  }, ExtArgs["result"]["specialty"]>

  export type SpecialtySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    avgVisitTime?: boolean | $Types.Skip
  }, ExtArgs["result"]["specialty"]>

  export type SpecialtySelectScalar = {
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    avgVisitTime?: boolean | $Types.Skip
  }

  export type SpecialtyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "avgVisitTime", ExtArgs["result"]["specialty"], $Types.Skip>
  export type SpecialtyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctors?: boolean | Specialty$doctorsArgs<ExtArgs> | $Types.Skip
    Appointment?: boolean | Specialty$AppointmentArgs<ExtArgs> | $Types.Skip
    _count?: boolean | SpecialtyCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type SpecialtyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SpecialtyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpecialtyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Specialty"
    objects: {
      doctors: Prisma.$StaffPayload<ExtArgs>[]
      Appointment: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: $Enums.Field
      avgVisitTime: number | null
    }, ExtArgs["result"]["specialty"]>
    composites: {}
  }

  type SpecialtyGetPayload<S extends boolean | null | undefined | SpecialtyDefaultArgs> = $Result.GetResult<Prisma.$SpecialtyPayload, S>

  type SpecialtyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecialtyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialtyCountAggregateInputType | true
    }

  export interface SpecialtyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Specialty'], meta: { name: 'Specialty' } }
    /**
     * Find zero or one Specialty that matches the filter.
     * @param {SpecialtyFindUniqueArgs} args - Arguments to find a Specialty
     * @example
     * // Get one Specialty
     * const specialty = await prisma.specialty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialtyFindUniqueArgs>(args: SelectSubset<T, SpecialtyFindUniqueArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Specialty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecialtyFindUniqueOrThrowArgs} args - Arguments to find a Specialty
     * @example
     * // Get one Specialty
     * const specialty = await prisma.specialty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialtyFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialtyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyFindFirstArgs} args - Arguments to find a Specialty
     * @example
     * // Get one Specialty
     * const specialty = await prisma.specialty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialtyFindFirstArgs>(args?: SelectSubset<T, SpecialtyFindFirstArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyFindFirstOrThrowArgs} args - Arguments to find a Specialty
     * @example
     * // Get one Specialty
     * const specialty = await prisma.specialty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialtyFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialtyFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Specialties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specialties
     * const specialties = await prisma.specialty.findMany()
     * 
     * // Get first 10 Specialties
     * const specialties = await prisma.specialty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialtyWithIdOnly = await prisma.specialty.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecialtyFindManyArgs>(args?: SelectSubset<T, SpecialtyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Specialty.
     * @param {SpecialtyCreateArgs} args - Arguments to create a Specialty.
     * @example
     * // Create one Specialty
     * const Specialty = await prisma.specialty.create({
     *   data: {
     *     // ... data to create a Specialty
     *   }
     * })
     * 
     */
    create<T extends SpecialtyCreateArgs>(args: SelectSubset<T, SpecialtyCreateArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Specialties.
     * @param {SpecialtyCreateManyArgs} args - Arguments to create many Specialties.
     * @example
     * // Create many Specialties
     * const specialty = await prisma.specialty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialtyCreateManyArgs>(args?: SelectSubset<T, SpecialtyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Specialties and returns the data saved in the database.
     * @param {SpecialtyCreateManyAndReturnArgs} args - Arguments to create many Specialties.
     * @example
     * // Create many Specialties
     * const specialty = await prisma.specialty.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Specialties and only return the `id`
     * const specialtyWithIdOnly = await prisma.specialty.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecialtyCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecialtyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Specialty.
     * @param {SpecialtyDeleteArgs} args - Arguments to delete one Specialty.
     * @example
     * // Delete one Specialty
     * const Specialty = await prisma.specialty.delete({
     *   where: {
     *     // ... filter to delete one Specialty
     *   }
     * })
     * 
     */
    delete<T extends SpecialtyDeleteArgs>(args: SelectSubset<T, SpecialtyDeleteArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Specialty.
     * @param {SpecialtyUpdateArgs} args - Arguments to update one Specialty.
     * @example
     * // Update one Specialty
     * const specialty = await prisma.specialty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialtyUpdateArgs>(args: SelectSubset<T, SpecialtyUpdateArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Specialties.
     * @param {SpecialtyDeleteManyArgs} args - Arguments to filter Specialties to delete.
     * @example
     * // Delete a few Specialties
     * const { count } = await prisma.specialty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialtyDeleteManyArgs>(args?: SelectSubset<T, SpecialtyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specialties
     * const specialty = await prisma.specialty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialtyUpdateManyArgs>(args: SelectSubset<T, SpecialtyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialties and returns the data updated in the database.
     * @param {SpecialtyUpdateManyAndReturnArgs} args - Arguments to update many Specialties.
     * @example
     * // Update many Specialties
     * const specialty = await prisma.specialty.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Specialties and only return the `id`
     * const specialtyWithIdOnly = await prisma.specialty.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpecialtyUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecialtyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Specialty.
     * @param {SpecialtyUpsertArgs} args - Arguments to update or create a Specialty.
     * @example
     * // Update or create a Specialty
     * const specialty = await prisma.specialty.upsert({
     *   create: {
     *     // ... data to create a Specialty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specialty we want to update
     *   }
     * })
     */
    upsert<T extends SpecialtyUpsertArgs>(args: SelectSubset<T, SpecialtyUpsertArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Specialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyCountArgs} args - Arguments to filter Specialties to count.
     * @example
     * // Count the number of Specialties
     * const count = await prisma.specialty.count({
     *   where: {
     *     // ... the filter for the Specialties we want to count
     *   }
     * })
    **/
    count<T extends SpecialtyCountArgs>(
      args?: Subset<T, SpecialtyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialtyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specialty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpecialtyAggregateArgs>(args: Subset<T, SpecialtyAggregateArgs>): Prisma.PrismaPromise<GetSpecialtyAggregateType<T>>

    /**
     * Group by Specialty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyGroupByArgs} args - Group by arguments.
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
      T extends SpecialtyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialtyGroupByArgs['orderBy'] }
        : { orderBy?: SpecialtyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpecialtyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialtyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Specialty model
   */
  readonly fields: SpecialtyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Specialty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialtyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctors<T extends Specialty$doctorsArgs<ExtArgs> = {}>(args?: Subset<T, Specialty$doctorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Appointment<T extends Specialty$AppointmentArgs<ExtArgs> = {}>(args?: Subset<T, Specialty$AppointmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Specialty model
   */
  interface SpecialtyFieldRefs {
    readonly id: FieldRef<"Specialty", 'String'>
    readonly title: FieldRef<"Specialty", 'Field'>
    readonly avgVisitTime: FieldRef<"Specialty", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Specialty findUnique
   */
  export type SpecialtyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which Specialty to fetch.
     */
    where: SpecialtyWhereUniqueInput
  }

  /**
   * Specialty findUniqueOrThrow
   */
  export type SpecialtyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which Specialty to fetch.
     */
    where: SpecialtyWhereUniqueInput
  }

  /**
   * Specialty findFirst
   */
  export type SpecialtyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which Specialty to fetch.
     */
    where?: SpecialtyWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtyOrderByWithRelationInput | SpecialtyOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialties.
     */
    cursor?: SpecialtyWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialties.
     */
    distinct?: SpecialtyScalarFieldEnum | SpecialtyScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Specialty findFirstOrThrow
   */
  export type SpecialtyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which Specialty to fetch.
     */
    where?: SpecialtyWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtyOrderByWithRelationInput | SpecialtyOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialties.
     */
    cursor?: SpecialtyWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialties.
     */
    distinct?: SpecialtyScalarFieldEnum | SpecialtyScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Specialty findMany
   */
  export type SpecialtyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which Specialties to fetch.
     */
    where?: SpecialtyWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtyOrderByWithRelationInput | SpecialtyOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Specialties.
     */
    cursor?: SpecialtyWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number | $Types.Skip
    distinct?: SpecialtyScalarFieldEnum | SpecialtyScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Specialty create
   */
  export type SpecialtyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * The data needed to create a Specialty.
     */
    data: XOR<SpecialtyCreateInput, SpecialtyUncheckedCreateInput>
  }

  /**
   * Specialty createMany
   */
  export type SpecialtyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Specialties.
     */
    data: SpecialtyCreateManyInput | SpecialtyCreateManyInput[]
  }

  /**
   * Specialty createManyAndReturn
   */
  export type SpecialtyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * The data used to create many Specialties.
     */
    data: SpecialtyCreateManyInput | SpecialtyCreateManyInput[]
  }

  /**
   * Specialty update
   */
  export type SpecialtyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * The data needed to update a Specialty.
     */
    data: XOR<SpecialtyUpdateInput, SpecialtyUncheckedUpdateInput>
    /**
     * Choose, which Specialty to update.
     */
    where: SpecialtyWhereUniqueInput
  }

  /**
   * Specialty updateMany
   */
  export type SpecialtyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Specialties.
     */
    data: XOR<SpecialtyUpdateManyMutationInput, SpecialtyUncheckedUpdateManyInput>
    /**
     * Filter which Specialties to update
     */
    where?: SpecialtyWhereInput | $Types.Skip
    /**
     * Limit how many Specialties to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Specialty updateManyAndReturn
   */
  export type SpecialtyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * The data used to update Specialties.
     */
    data: XOR<SpecialtyUpdateManyMutationInput, SpecialtyUncheckedUpdateManyInput>
    /**
     * Filter which Specialties to update
     */
    where?: SpecialtyWhereInput | $Types.Skip
    /**
     * Limit how many Specialties to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Specialty upsert
   */
  export type SpecialtyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * The filter to search for the Specialty to update in case it exists.
     */
    where: SpecialtyWhereUniqueInput
    /**
     * In case the Specialty found by the `where` argument doesn't exist, create a new Specialty with this data.
     */
    create: XOR<SpecialtyCreateInput, SpecialtyUncheckedCreateInput>
    /**
     * In case the Specialty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialtyUpdateInput, SpecialtyUncheckedUpdateInput>
  }

  /**
   * Specialty delete
   */
  export type SpecialtyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter which Specialty to delete.
     */
    where: SpecialtyWhereUniqueInput
  }

  /**
   * Specialty deleteMany
   */
  export type SpecialtyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialties to delete
     */
    where?: SpecialtyWhereInput | $Types.Skip
    /**
     * Limit how many Specialties to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Specialty.doctors
   */
  export type Specialty$doctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput | $Types.Skip
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[] | $Types.Skip
    cursor?: StaffWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Specialty.Appointment
   */
  export type Specialty$AppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput | $Types.Skip
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[] | $Types.Skip
    cursor?: AppointmentWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Specialty without action
   */
  export type SpecialtyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffMinAggregateOutputType = {
    id: string | null
    name: string | null
    lastName: string | null
    personnelId: string | null
    personnelEmail: string | null
    password: string | null
    gender: $Enums.Gender | null
    phoneNumber: string | null
    avatarUrl: string | null
    avatarPublicId: string | null
    workingDays: string | null
    workingHours: string | null
    specialtyId: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type StaffMaxAggregateOutputType = {
    id: string | null
    name: string | null
    lastName: string | null
    personnelId: string | null
    personnelEmail: string | null
    password: string | null
    gender: $Enums.Gender | null
    phoneNumber: string | null
    avatarUrl: string | null
    avatarPublicId: string | null
    workingDays: string | null
    workingHours: string | null
    specialtyId: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    name: number
    lastName: number
    personnelId: number
    personnelEmail: number
    password: number
    gender: number
    phoneNumber: number
    avatarUrl: number
    avatarPublicId: number
    workingDays: number
    workingHours: number
    specialtyId: number
    role: number
    createdAt: number
    _all: number
  }


  export type StaffMinAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    lastName?: true | $Types.Skip
    personnelId?: true | $Types.Skip
    personnelEmail?: true | $Types.Skip
    password?: true | $Types.Skip
    gender?: true | $Types.Skip
    phoneNumber?: true | $Types.Skip
    avatarUrl?: true | $Types.Skip
    avatarPublicId?: true | $Types.Skip
    workingDays?: true | $Types.Skip
    workingHours?: true | $Types.Skip
    specialtyId?: true | $Types.Skip
    role?: true | $Types.Skip
    createdAt?: true | $Types.Skip
  }

  export type StaffMaxAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    lastName?: true | $Types.Skip
    personnelId?: true | $Types.Skip
    personnelEmail?: true | $Types.Skip
    password?: true | $Types.Skip
    gender?: true | $Types.Skip
    phoneNumber?: true | $Types.Skip
    avatarUrl?: true | $Types.Skip
    avatarPublicId?: true | $Types.Skip
    workingDays?: true | $Types.Skip
    workingHours?: true | $Types.Skip
    specialtyId?: true | $Types.Skip
    role?: true | $Types.Skip
    createdAt?: true | $Types.Skip
  }

  export type StaffCountAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    lastName?: true | $Types.Skip
    personnelId?: true | $Types.Skip
    personnelEmail?: true | $Types.Skip
    password?: true | $Types.Skip
    gender?: true | $Types.Skip
    phoneNumber?: true | $Types.Skip
    avatarUrl?: true | $Types.Skip
    avatarPublicId?: true | $Types.Skip
    workingDays?: true | $Types.Skip
    workingHours?: true | $Types.Skip
    specialtyId?: true | $Types.Skip
    role?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput | $Types.Skip
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[] | $Types.Skip
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: StaffCountAggregateInputType | true
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: string
    name: string
    lastName: string
    personnelId: string
    personnelEmail: string
    password: string
    gender: $Enums.Gender
    phoneNumber: string | null
    avatarUrl: string | null
    avatarPublicId: string | null
    workingDays: string
    workingHours: string
    specialtyId: string | null
    role: $Enums.Role
    createdAt: Date | null
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    lastName?: boolean | $Types.Skip
    personnelId?: boolean | $Types.Skip
    personnelEmail?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    gender?: boolean | $Types.Skip
    phoneNumber?: boolean | $Types.Skip
    avatarUrl?: boolean | $Types.Skip
    avatarPublicId?: boolean | $Types.Skip
    workingDays?: boolean | $Types.Skip
    workingHours?: boolean | $Types.Skip
    specialtyId?: boolean | $Types.Skip
    role?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    specialty?: boolean | Staff$specialtyArgs<ExtArgs> | $Types.Skip
    appointments?: boolean | Staff$appointmentsArgs<ExtArgs> | $Types.Skip
    messages?: boolean | Staff$messagesArgs<ExtArgs> | $Types.Skip
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    lastName?: boolean | $Types.Skip
    personnelId?: boolean | $Types.Skip
    personnelEmail?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    gender?: boolean | $Types.Skip
    phoneNumber?: boolean | $Types.Skip
    avatarUrl?: boolean | $Types.Skip
    avatarPublicId?: boolean | $Types.Skip
    workingDays?: boolean | $Types.Skip
    workingHours?: boolean | $Types.Skip
    specialtyId?: boolean | $Types.Skip
    role?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    specialty?: boolean | Staff$specialtyArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    lastName?: boolean | $Types.Skip
    personnelId?: boolean | $Types.Skip
    personnelEmail?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    gender?: boolean | $Types.Skip
    phoneNumber?: boolean | $Types.Skip
    avatarUrl?: boolean | $Types.Skip
    avatarPublicId?: boolean | $Types.Skip
    workingDays?: boolean | $Types.Skip
    workingHours?: boolean | $Types.Skip
    specialtyId?: boolean | $Types.Skip
    role?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    specialty?: boolean | Staff$specialtyArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectScalar = {
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    lastName?: boolean | $Types.Skip
    personnelId?: boolean | $Types.Skip
    personnelEmail?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    gender?: boolean | $Types.Skip
    phoneNumber?: boolean | $Types.Skip
    avatarUrl?: boolean | $Types.Skip
    avatarPublicId?: boolean | $Types.Skip
    workingDays?: boolean | $Types.Skip
    workingHours?: boolean | $Types.Skip
    specialtyId?: boolean | $Types.Skip
    role?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lastName" | "personnelId" | "personnelEmail" | "password" | "gender" | "phoneNumber" | "avatarUrl" | "avatarPublicId" | "workingDays" | "workingHours" | "specialtyId" | "role" | "createdAt", ExtArgs["result"]["staff"], $Types.Skip>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialty?: boolean | Staff$specialtyArgs<ExtArgs> | $Types.Skip
    appointments?: boolean | Staff$appointmentsArgs<ExtArgs> | $Types.Skip
    messages?: boolean | Staff$messagesArgs<ExtArgs> | $Types.Skip
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type StaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialty?: boolean | Staff$specialtyArgs<ExtArgs> | $Types.Skip
  }
  export type StaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialty?: boolean | Staff$specialtyArgs<ExtArgs> | $Types.Skip
  }

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      specialty: Prisma.$SpecialtyPayload<ExtArgs> | null
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      messages: Prisma.$StaffLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      lastName: string
      personnelId: string
      personnelEmail: string
      password: string
      gender: $Enums.Gender
      phoneNumber: string | null
      avatarUrl: string | null
      avatarPublicId: string | null
      workingDays: string
      workingHours: string
      specialtyId: string | null
      role: $Enums.Role
      createdAt: Date | null
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {StaffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {StaffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
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
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    specialty<T extends Staff$specialtyArgs<ExtArgs> = {}>(args?: Subset<T, Staff$specialtyArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    appointments<T extends Staff$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Staff$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Staff$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Staff$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Staff model
   */
  interface StaffFieldRefs {
    readonly id: FieldRef<"Staff", 'String'>
    readonly name: FieldRef<"Staff", 'String'>
    readonly lastName: FieldRef<"Staff", 'String'>
    readonly personnelId: FieldRef<"Staff", 'String'>
    readonly personnelEmail: FieldRef<"Staff", 'String'>
    readonly password: FieldRef<"Staff", 'String'>
    readonly gender: FieldRef<"Staff", 'Gender'>
    readonly phoneNumber: FieldRef<"Staff", 'String'>
    readonly avatarUrl: FieldRef<"Staff", 'String'>
    readonly avatarPublicId: FieldRef<"Staff", 'String'>
    readonly workingDays: FieldRef<"Staff", 'String'>
    readonly workingHours: FieldRef<"Staff", 'String'>
    readonly specialtyId: FieldRef<"Staff", 'String'>
    readonly role: FieldRef<"Staff", 'Role'>
    readonly createdAt: FieldRef<"Staff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number | $Types.Skip
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
  }

  /**
   * Staff createManyAndReturn
   */
  export type StaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput | $Types.Skip
    /**
     * Limit how many Staff to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Staff updateManyAndReturn
   */
  export type StaffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput | $Types.Skip
    /**
     * Limit how many Staff to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput | $Types.Skip
    /**
     * Limit how many Staff to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Staff.specialty
   */
  export type Staff$specialtyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    where?: SpecialtyWhereInput | $Types.Skip
  }

  /**
   * Staff.appointments
   */
  export type Staff$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput | $Types.Skip
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[] | $Types.Skip
    cursor?: AppointmentWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Staff.messages
   */
  export type Staff$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLog
     */
    select?: StaffLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffLog
     */
    omit?: StaffLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffLogInclude<ExtArgs> | null
    where?: StaffLogWhereInput | $Types.Skip
    orderBy?: StaffLogOrderByWithRelationInput | StaffLogOrderByWithRelationInput[] | $Types.Skip
    cursor?: StaffLogWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: StaffLogScalarFieldEnum | StaffLogScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
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
    lastName: string | null
    email: string | null
    password: string | null
    gender: $Enums.Gender | null
    location: string | null
    phoneNumber: string | null
    avatarUrl: string | null
    avatarPublicId: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    lastName: string | null
    email: string | null
    password: string | null
    gender: $Enums.Gender | null
    location: string | null
    phoneNumber: string | null
    avatarUrl: string | null
    avatarPublicId: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    lastName: number
    email: number
    password: number
    gender: number
    location: number
    phoneNumber: number
    avatarUrl: number
    avatarPublicId: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    lastName?: true | $Types.Skip
    email?: true | $Types.Skip
    password?: true | $Types.Skip
    gender?: true | $Types.Skip
    location?: true | $Types.Skip
    phoneNumber?: true | $Types.Skip
    avatarUrl?: true | $Types.Skip
    avatarPublicId?: true | $Types.Skip
    role?: true | $Types.Skip
    createdAt?: true | $Types.Skip
  }

  export type UserMaxAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    lastName?: true | $Types.Skip
    email?: true | $Types.Skip
    password?: true | $Types.Skip
    gender?: true | $Types.Skip
    location?: true | $Types.Skip
    phoneNumber?: true | $Types.Skip
    avatarUrl?: true | $Types.Skip
    avatarPublicId?: true | $Types.Skip
    role?: true | $Types.Skip
    createdAt?: true | $Types.Skip
  }

  export type UserCountAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    lastName?: true | $Types.Skip
    email?: true | $Types.Skip
    password?: true | $Types.Skip
    gender?: true | $Types.Skip
    location?: true | $Types.Skip
    phoneNumber?: true | $Types.Skip
    avatarUrl?: true | $Types.Skip
    avatarPublicId?: true | $Types.Skip
    role?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
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
    where?: UserWhereInput | $Types.Skip
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[] | $Types.Skip
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    lastName: string
    email: string
    password: string
    gender: $Enums.Gender
    location: string
    phoneNumber: string | null
    avatarUrl: string | null
    avatarPublicId: string | null
    role: $Enums.Role
    createdAt: Date | null
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
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    lastName?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    gender?: boolean | $Types.Skip
    location?: boolean | $Types.Skip
    phoneNumber?: boolean | $Types.Skip
    avatarUrl?: boolean | $Types.Skip
    avatarPublicId?: boolean | $Types.Skip
    role?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    appointments?: boolean | User$appointmentsArgs<ExtArgs> | $Types.Skip
    messages?: boolean | User$messagesArgs<ExtArgs> | $Types.Skip
    StaffLog?: boolean | User$StaffLogArgs<ExtArgs> | $Types.Skip
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    lastName?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    gender?: boolean | $Types.Skip
    location?: boolean | $Types.Skip
    phoneNumber?: boolean | $Types.Skip
    avatarUrl?: boolean | $Types.Skip
    avatarPublicId?: boolean | $Types.Skip
    role?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    lastName?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    gender?: boolean | $Types.Skip
    location?: boolean | $Types.Skip
    phoneNumber?: boolean | $Types.Skip
    avatarUrl?: boolean | $Types.Skip
    avatarPublicId?: boolean | $Types.Skip
    role?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    lastName?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    gender?: boolean | $Types.Skip
    location?: boolean | $Types.Skip
    phoneNumber?: boolean | $Types.Skip
    avatarUrl?: boolean | $Types.Skip
    avatarPublicId?: boolean | $Types.Skip
    role?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lastName" | "email" | "password" | "gender" | "location" | "phoneNumber" | "avatarUrl" | "avatarPublicId" | "role" | "createdAt", ExtArgs["result"]["user"], $Types.Skip>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | User$appointmentsArgs<ExtArgs> | $Types.Skip
    messages?: boolean | User$messagesArgs<ExtArgs> | $Types.Skip
    StaffLog?: boolean | User$StaffLogArgs<ExtArgs> | $Types.Skip
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      messages: Prisma.$UserLogPayload<ExtArgs>[]
      StaffLog: Prisma.$StaffLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      lastName: string
      email: string
      password: string
      gender: $Enums.Gender
      location: string
      phoneNumber: string | null
      avatarUrl: string | null
      avatarPublicId: string | null
      role: $Enums.Role
      createdAt: Date | null
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    appointments<T extends User$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    StaffLog<T extends User$StaffLogArgs<ExtArgs> = {}>(args?: Subset<T, User$StaffLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly location: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly avatarPublicId: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
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
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
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
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to update.
     */
    limit?: number | $Types.Skip
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
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * User.appointments
   */
  export type User$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput | $Types.Skip
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[] | $Types.Skip
    cursor?: AppointmentWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    where?: UserLogWhereInput | $Types.Skip
    orderBy?: UserLogOrderByWithRelationInput | UserLogOrderByWithRelationInput[] | $Types.Skip
    cursor?: UserLogWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: UserLogScalarFieldEnum | UserLogScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User.StaffLog
   */
  export type User$StaffLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLog
     */
    select?: StaffLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffLog
     */
    omit?: StaffLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffLogInclude<ExtArgs> | null
    where?: StaffLogWhereInput | $Types.Skip
    orderBy?: StaffLogOrderByWithRelationInput | StaffLogOrderByWithRelationInput[] | $Types.Skip
    cursor?: StaffLogWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: StaffLogScalarFieldEnum | StaffLogScalarFieldEnum[] | $Types.Skip
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
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    reasonId: string | null
    doctorId: string | null
    date: Date | null
    time: string | null
    expired: boolean | null
    reservedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    reasonId: string | null
    doctorId: string | null
    date: Date | null
    time: string | null
    expired: boolean | null
    reservedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    patientId: number
    reasonId: number
    doctorId: number
    date: number
    time: number
    expired: number
    reservedAt: number
    _all: number
  }


  export type AppointmentMinAggregateInputType = {
    id?: true | $Types.Skip
    patientId?: true | $Types.Skip
    reasonId?: true | $Types.Skip
    doctorId?: true | $Types.Skip
    date?: true | $Types.Skip
    time?: true | $Types.Skip
    expired?: true | $Types.Skip
    reservedAt?: true | $Types.Skip
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true | $Types.Skip
    patientId?: true | $Types.Skip
    reasonId?: true | $Types.Skip
    doctorId?: true | $Types.Skip
    date?: true | $Types.Skip
    time?: true | $Types.Skip
    expired?: true | $Types.Skip
    reservedAt?: true | $Types.Skip
  }

  export type AppointmentCountAggregateInputType = {
    id?: true | $Types.Skip
    patientId?: true | $Types.Skip
    reasonId?: true | $Types.Skip
    doctorId?: true | $Types.Skip
    date?: true | $Types.Skip
    time?: true | $Types.Skip
    expired?: true | $Types.Skip
    reservedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput | $Types.Skip
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[] | $Types.Skip
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: AppointmentCountAggregateInputType | true
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    patientId: string | null
    reasonId: string
    doctorId: string
    date: Date | null
    time: string
    expired: boolean
    reservedAt: Date | null
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    patientId?: boolean | $Types.Skip
    reasonId?: boolean | $Types.Skip
    doctorId?: boolean | $Types.Skip
    date?: boolean | $Types.Skip
    time?: boolean | $Types.Skip
    expired?: boolean | $Types.Skip
    reservedAt?: boolean | $Types.Skip
    patient?: boolean | Appointment$patientArgs<ExtArgs> | $Types.Skip
    reason?: boolean | SpecialtyDefaultArgs<ExtArgs> | $Types.Skip
    doctor?: boolean | StaffDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    patientId?: boolean | $Types.Skip
    reasonId?: boolean | $Types.Skip
    doctorId?: boolean | $Types.Skip
    date?: boolean | $Types.Skip
    time?: boolean | $Types.Skip
    expired?: boolean | $Types.Skip
    reservedAt?: boolean | $Types.Skip
    patient?: boolean | Appointment$patientArgs<ExtArgs> | $Types.Skip
    reason?: boolean | SpecialtyDefaultArgs<ExtArgs> | $Types.Skip
    doctor?: boolean | StaffDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    patientId?: boolean | $Types.Skip
    reasonId?: boolean | $Types.Skip
    doctorId?: boolean | $Types.Skip
    date?: boolean | $Types.Skip
    time?: boolean | $Types.Skip
    expired?: boolean | $Types.Skip
    reservedAt?: boolean | $Types.Skip
    patient?: boolean | Appointment$patientArgs<ExtArgs> | $Types.Skip
    reason?: boolean | SpecialtyDefaultArgs<ExtArgs> | $Types.Skip
    doctor?: boolean | StaffDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean | $Types.Skip
    patientId?: boolean | $Types.Skip
    reasonId?: boolean | $Types.Skip
    doctorId?: boolean | $Types.Skip
    date?: boolean | $Types.Skip
    time?: boolean | $Types.Skip
    expired?: boolean | $Types.Skip
    reservedAt?: boolean | $Types.Skip
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "reasonId" | "doctorId" | "date" | "time" | "expired" | "reservedAt", ExtArgs["result"]["appointment"], $Types.Skip>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | Appointment$patientArgs<ExtArgs> | $Types.Skip
    reason?: boolean | SpecialtyDefaultArgs<ExtArgs> | $Types.Skip
    doctor?: boolean | StaffDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | Appointment$patientArgs<ExtArgs> | $Types.Skip
    reason?: boolean | SpecialtyDefaultArgs<ExtArgs> | $Types.Skip
    doctor?: boolean | StaffDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | Appointment$patientArgs<ExtArgs> | $Types.Skip
    reason?: boolean | SpecialtyDefaultArgs<ExtArgs> | $Types.Skip
    doctor?: boolean | StaffDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      patient: Prisma.$UserPayload<ExtArgs> | null
      reason: Prisma.$SpecialtyPayload<ExtArgs>
      doctor: Prisma.$StaffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string | null
      reasonId: string
      doctorId: string
      date: Date | null
      time: string
      expired: boolean
      reservedAt: Date | null
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends Appointment$patientArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$patientArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reason<T extends SpecialtyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecialtyDefaultArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends StaffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaffDefaultArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly patientId: FieldRef<"Appointment", 'String'>
    readonly reasonId: FieldRef<"Appointment", 'String'>
    readonly doctorId: FieldRef<"Appointment", 'String'>
    readonly date: FieldRef<"Appointment", 'DateTime'>
    readonly time: FieldRef<"Appointment", 'String'>
    readonly expired: FieldRef<"Appointment", 'Boolean'>
    readonly reservedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number | $Types.Skip
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput | $Types.Skip
    /**
     * Limit how many Appointments to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput | $Types.Skip
    /**
     * Limit how many Appointments to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput | $Types.Skip
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Appointment.patient
   */
  export type Appointment$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput | $Types.Skip
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model StaffLog
   */

  export type AggregateStaffLog = {
    _count: StaffLogCountAggregateOutputType | null
    _min: StaffLogMinAggregateOutputType | null
    _max: StaffLogMaxAggregateOutputType | null
  }

  export type StaffLogMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    senderId: string | null
    title: string | null
    message: string | null
    isRead: boolean | null
    generatedAt: Date | null
  }

  export type StaffLogMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    senderId: string | null
    title: string | null
    message: string | null
    isRead: boolean | null
    generatedAt: Date | null
  }

  export type StaffLogCountAggregateOutputType = {
    id: number
    ownerId: number
    senderId: number
    title: number
    message: number
    isRead: number
    generatedAt: number
    _all: number
  }


  export type StaffLogMinAggregateInputType = {
    id?: true | $Types.Skip
    ownerId?: true | $Types.Skip
    senderId?: true | $Types.Skip
    title?: true | $Types.Skip
    message?: true | $Types.Skip
    isRead?: true | $Types.Skip
    generatedAt?: true | $Types.Skip
  }

  export type StaffLogMaxAggregateInputType = {
    id?: true | $Types.Skip
    ownerId?: true | $Types.Skip
    senderId?: true | $Types.Skip
    title?: true | $Types.Skip
    message?: true | $Types.Skip
    isRead?: true | $Types.Skip
    generatedAt?: true | $Types.Skip
  }

  export type StaffLogCountAggregateInputType = {
    id?: true | $Types.Skip
    ownerId?: true | $Types.Skip
    senderId?: true | $Types.Skip
    title?: true | $Types.Skip
    message?: true | $Types.Skip
    isRead?: true | $Types.Skip
    generatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type StaffLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffLog to aggregate.
     */
    where?: StaffLogWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffLogs to fetch.
     */
    orderBy?: StaffLogOrderByWithRelationInput | StaffLogOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffLogWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffLogs from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffLogs.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaffLogs
    **/
    _count?: true | StaffLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffLogMaxAggregateInputType
  }

  export type GetStaffLogAggregateType<T extends StaffLogAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffLog[P]>
      : GetScalarType<T[P], AggregateStaffLog[P]>
  }




  export type StaffLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffLogWhereInput | $Types.Skip
    orderBy?: StaffLogOrderByWithAggregationInput | StaffLogOrderByWithAggregationInput[] | $Types.Skip
    by: StaffLogScalarFieldEnum[] | StaffLogScalarFieldEnum
    having?: StaffLogScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: StaffLogCountAggregateInputType | true
    _min?: StaffLogMinAggregateInputType
    _max?: StaffLogMaxAggregateInputType
  }

  export type StaffLogGroupByOutputType = {
    id: string
    ownerId: string
    senderId: string | null
    title: string | null
    message: string
    isRead: boolean
    generatedAt: Date | null
    _count: StaffLogCountAggregateOutputType | null
    _min: StaffLogMinAggregateOutputType | null
    _max: StaffLogMaxAggregateOutputType | null
  }

  type GetStaffLogGroupByPayload<T extends StaffLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffLogGroupByOutputType[P]>
            : GetScalarType<T[P], StaffLogGroupByOutputType[P]>
        }
      >
    >


  export type StaffLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    ownerId?: boolean | $Types.Skip
    senderId?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    message?: boolean | $Types.Skip
    isRead?: boolean | $Types.Skip
    generatedAt?: boolean | $Types.Skip
    owner?: boolean | StaffDefaultArgs<ExtArgs> | $Types.Skip
    sender?: boolean | StaffLog$senderArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["staffLog"]>

  export type StaffLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    ownerId?: boolean | $Types.Skip
    senderId?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    message?: boolean | $Types.Skip
    isRead?: boolean | $Types.Skip
    generatedAt?: boolean | $Types.Skip
    owner?: boolean | StaffDefaultArgs<ExtArgs> | $Types.Skip
    sender?: boolean | StaffLog$senderArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["staffLog"]>

  export type StaffLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    ownerId?: boolean | $Types.Skip
    senderId?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    message?: boolean | $Types.Skip
    isRead?: boolean | $Types.Skip
    generatedAt?: boolean | $Types.Skip
    owner?: boolean | StaffDefaultArgs<ExtArgs> | $Types.Skip
    sender?: boolean | StaffLog$senderArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["staffLog"]>

  export type StaffLogSelectScalar = {
    id?: boolean | $Types.Skip
    ownerId?: boolean | $Types.Skip
    senderId?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    message?: boolean | $Types.Skip
    isRead?: boolean | $Types.Skip
    generatedAt?: boolean | $Types.Skip
  }

  export type StaffLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "senderId" | "title" | "message" | "isRead" | "generatedAt", ExtArgs["result"]["staffLog"], $Types.Skip>
  export type StaffLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | StaffDefaultArgs<ExtArgs> | $Types.Skip
    sender?: boolean | StaffLog$senderArgs<ExtArgs> | $Types.Skip
  }
  export type StaffLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | StaffDefaultArgs<ExtArgs> | $Types.Skip
    sender?: boolean | StaffLog$senderArgs<ExtArgs> | $Types.Skip
  }
  export type StaffLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | StaffDefaultArgs<ExtArgs> | $Types.Skip
    sender?: boolean | StaffLog$senderArgs<ExtArgs> | $Types.Skip
  }

  export type $StaffLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaffLog"
    objects: {
      owner: Prisma.$StaffPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      senderId: string | null
      title: string | null
      message: string
      isRead: boolean
      generatedAt: Date | null
    }, ExtArgs["result"]["staffLog"]>
    composites: {}
  }

  type StaffLogGetPayload<S extends boolean | null | undefined | StaffLogDefaultArgs> = $Result.GetResult<Prisma.$StaffLogPayload, S>

  type StaffLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffLogCountAggregateInputType | true
    }

  export interface StaffLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaffLog'], meta: { name: 'StaffLog' } }
    /**
     * Find zero or one StaffLog that matches the filter.
     * @param {StaffLogFindUniqueArgs} args - Arguments to find a StaffLog
     * @example
     * // Get one StaffLog
     * const staffLog = await prisma.staffLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffLogFindUniqueArgs>(args: SelectSubset<T, StaffLogFindUniqueArgs<ExtArgs>>): Prisma__StaffLogClient<$Result.GetResult<Prisma.$StaffLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaffLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffLogFindUniqueOrThrowArgs} args - Arguments to find a StaffLog
     * @example
     * // Get one StaffLog
     * const staffLog = await prisma.staffLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffLogFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffLogClient<$Result.GetResult<Prisma.$StaffLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffLogFindFirstArgs} args - Arguments to find a StaffLog
     * @example
     * // Get one StaffLog
     * const staffLog = await prisma.staffLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffLogFindFirstArgs>(args?: SelectSubset<T, StaffLogFindFirstArgs<ExtArgs>>): Prisma__StaffLogClient<$Result.GetResult<Prisma.$StaffLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffLogFindFirstOrThrowArgs} args - Arguments to find a StaffLog
     * @example
     * // Get one StaffLog
     * const staffLog = await prisma.staffLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffLogFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffLogClient<$Result.GetResult<Prisma.$StaffLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaffLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffLogs
     * const staffLogs = await prisma.staffLog.findMany()
     * 
     * // Get first 10 StaffLogs
     * const staffLogs = await prisma.staffLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffLogWithIdOnly = await prisma.staffLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffLogFindManyArgs>(args?: SelectSubset<T, StaffLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaffLog.
     * @param {StaffLogCreateArgs} args - Arguments to create a StaffLog.
     * @example
     * // Create one StaffLog
     * const StaffLog = await prisma.staffLog.create({
     *   data: {
     *     // ... data to create a StaffLog
     *   }
     * })
     * 
     */
    create<T extends StaffLogCreateArgs>(args: SelectSubset<T, StaffLogCreateArgs<ExtArgs>>): Prisma__StaffLogClient<$Result.GetResult<Prisma.$StaffLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaffLogs.
     * @param {StaffLogCreateManyArgs} args - Arguments to create many StaffLogs.
     * @example
     * // Create many StaffLogs
     * const staffLog = await prisma.staffLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffLogCreateManyArgs>(args?: SelectSubset<T, StaffLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffLogs and returns the data saved in the database.
     * @param {StaffLogCreateManyAndReturnArgs} args - Arguments to create many StaffLogs.
     * @example
     * // Create many StaffLogs
     * const staffLog = await prisma.staffLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffLogs and only return the `id`
     * const staffLogWithIdOnly = await prisma.staffLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffLogCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaffLog.
     * @param {StaffLogDeleteArgs} args - Arguments to delete one StaffLog.
     * @example
     * // Delete one StaffLog
     * const StaffLog = await prisma.staffLog.delete({
     *   where: {
     *     // ... filter to delete one StaffLog
     *   }
     * })
     * 
     */
    delete<T extends StaffLogDeleteArgs>(args: SelectSubset<T, StaffLogDeleteArgs<ExtArgs>>): Prisma__StaffLogClient<$Result.GetResult<Prisma.$StaffLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaffLog.
     * @param {StaffLogUpdateArgs} args - Arguments to update one StaffLog.
     * @example
     * // Update one StaffLog
     * const staffLog = await prisma.staffLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffLogUpdateArgs>(args: SelectSubset<T, StaffLogUpdateArgs<ExtArgs>>): Prisma__StaffLogClient<$Result.GetResult<Prisma.$StaffLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaffLogs.
     * @param {StaffLogDeleteManyArgs} args - Arguments to filter StaffLogs to delete.
     * @example
     * // Delete a few StaffLogs
     * const { count } = await prisma.staffLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffLogDeleteManyArgs>(args?: SelectSubset<T, StaffLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffLogs
     * const staffLog = await prisma.staffLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffLogUpdateManyArgs>(args: SelectSubset<T, StaffLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffLogs and returns the data updated in the database.
     * @param {StaffLogUpdateManyAndReturnArgs} args - Arguments to update many StaffLogs.
     * @example
     * // Update many StaffLogs
     * const staffLog = await prisma.staffLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaffLogs and only return the `id`
     * const staffLogWithIdOnly = await prisma.staffLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffLogUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaffLog.
     * @param {StaffLogUpsertArgs} args - Arguments to update or create a StaffLog.
     * @example
     * // Update or create a StaffLog
     * const staffLog = await prisma.staffLog.upsert({
     *   create: {
     *     // ... data to create a StaffLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffLog we want to update
     *   }
     * })
     */
    upsert<T extends StaffLogUpsertArgs>(args: SelectSubset<T, StaffLogUpsertArgs<ExtArgs>>): Prisma__StaffLogClient<$Result.GetResult<Prisma.$StaffLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaffLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffLogCountArgs} args - Arguments to filter StaffLogs to count.
     * @example
     * // Count the number of StaffLogs
     * const count = await prisma.staffLog.count({
     *   where: {
     *     // ... the filter for the StaffLogs we want to count
     *   }
     * })
    **/
    count<T extends StaffLogCountArgs>(
      args?: Subset<T, StaffLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffLogAggregateArgs>(args: Subset<T, StaffLogAggregateArgs>): Prisma.PrismaPromise<GetStaffLogAggregateType<T>>

    /**
     * Group by StaffLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffLogGroupByArgs} args - Group by arguments.
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
      T extends StaffLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffLogGroupByArgs['orderBy'] }
        : { orderBy?: StaffLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaffLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaffLog model
   */
  readonly fields: StaffLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaffLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends StaffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaffDefaultArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends StaffLog$senderArgs<ExtArgs> = {}>(args?: Subset<T, StaffLog$senderArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StaffLog model
   */
  interface StaffLogFieldRefs {
    readonly id: FieldRef<"StaffLog", 'String'>
    readonly ownerId: FieldRef<"StaffLog", 'String'>
    readonly senderId: FieldRef<"StaffLog", 'String'>
    readonly title: FieldRef<"StaffLog", 'String'>
    readonly message: FieldRef<"StaffLog", 'String'>
    readonly isRead: FieldRef<"StaffLog", 'Boolean'>
    readonly generatedAt: FieldRef<"StaffLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StaffLog findUnique
   */
  export type StaffLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLog
     */
    select?: StaffLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffLog
     */
    omit?: StaffLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffLogInclude<ExtArgs> | null
    /**
     * Filter, which StaffLog to fetch.
     */
    where: StaffLogWhereUniqueInput
  }

  /**
   * StaffLog findUniqueOrThrow
   */
  export type StaffLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLog
     */
    select?: StaffLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffLog
     */
    omit?: StaffLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffLogInclude<ExtArgs> | null
    /**
     * Filter, which StaffLog to fetch.
     */
    where: StaffLogWhereUniqueInput
  }

  /**
   * StaffLog findFirst
   */
  export type StaffLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLog
     */
    select?: StaffLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffLog
     */
    omit?: StaffLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffLogInclude<ExtArgs> | null
    /**
     * Filter, which StaffLog to fetch.
     */
    where?: StaffLogWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffLogs to fetch.
     */
    orderBy?: StaffLogOrderByWithRelationInput | StaffLogOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffLogs.
     */
    cursor?: StaffLogWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffLogs from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffLogs.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffLogs.
     */
    distinct?: StaffLogScalarFieldEnum | StaffLogScalarFieldEnum[] | $Types.Skip
  }

  /**
   * StaffLog findFirstOrThrow
   */
  export type StaffLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLog
     */
    select?: StaffLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffLog
     */
    omit?: StaffLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffLogInclude<ExtArgs> | null
    /**
     * Filter, which StaffLog to fetch.
     */
    where?: StaffLogWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffLogs to fetch.
     */
    orderBy?: StaffLogOrderByWithRelationInput | StaffLogOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffLogs.
     */
    cursor?: StaffLogWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffLogs from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffLogs.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffLogs.
     */
    distinct?: StaffLogScalarFieldEnum | StaffLogScalarFieldEnum[] | $Types.Skip
  }

  /**
   * StaffLog findMany
   */
  export type StaffLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLog
     */
    select?: StaffLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffLog
     */
    omit?: StaffLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffLogInclude<ExtArgs> | null
    /**
     * Filter, which StaffLogs to fetch.
     */
    where?: StaffLogWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffLogs to fetch.
     */
    orderBy?: StaffLogOrderByWithRelationInput | StaffLogOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaffLogs.
     */
    cursor?: StaffLogWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffLogs from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffLogs.
     */
    skip?: number | $Types.Skip
    distinct?: StaffLogScalarFieldEnum | StaffLogScalarFieldEnum[] | $Types.Skip
  }

  /**
   * StaffLog create
   */
  export type StaffLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLog
     */
    select?: StaffLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffLog
     */
    omit?: StaffLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffLogInclude<ExtArgs> | null
    /**
     * The data needed to create a StaffLog.
     */
    data: XOR<StaffLogCreateInput, StaffLogUncheckedCreateInput>
  }

  /**
   * StaffLog createMany
   */
  export type StaffLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffLogs.
     */
    data: StaffLogCreateManyInput | StaffLogCreateManyInput[]
  }

  /**
   * StaffLog createManyAndReturn
   */
  export type StaffLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLog
     */
    select?: StaffLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffLog
     */
    omit?: StaffLogOmit<ExtArgs> | null
    /**
     * The data used to create many StaffLogs.
     */
    data: StaffLogCreateManyInput | StaffLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffLog update
   */
  export type StaffLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLog
     */
    select?: StaffLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffLog
     */
    omit?: StaffLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffLogInclude<ExtArgs> | null
    /**
     * The data needed to update a StaffLog.
     */
    data: XOR<StaffLogUpdateInput, StaffLogUncheckedUpdateInput>
    /**
     * Choose, which StaffLog to update.
     */
    where: StaffLogWhereUniqueInput
  }

  /**
   * StaffLog updateMany
   */
  export type StaffLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffLogs.
     */
    data: XOR<StaffLogUpdateManyMutationInput, StaffLogUncheckedUpdateManyInput>
    /**
     * Filter which StaffLogs to update
     */
    where?: StaffLogWhereInput | $Types.Skip
    /**
     * Limit how many StaffLogs to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * StaffLog updateManyAndReturn
   */
  export type StaffLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLog
     */
    select?: StaffLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffLog
     */
    omit?: StaffLogOmit<ExtArgs> | null
    /**
     * The data used to update StaffLogs.
     */
    data: XOR<StaffLogUpdateManyMutationInput, StaffLogUncheckedUpdateManyInput>
    /**
     * Filter which StaffLogs to update
     */
    where?: StaffLogWhereInput | $Types.Skip
    /**
     * Limit how many StaffLogs to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffLog upsert
   */
  export type StaffLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLog
     */
    select?: StaffLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffLog
     */
    omit?: StaffLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffLogInclude<ExtArgs> | null
    /**
     * The filter to search for the StaffLog to update in case it exists.
     */
    where: StaffLogWhereUniqueInput
    /**
     * In case the StaffLog found by the `where` argument doesn't exist, create a new StaffLog with this data.
     */
    create: XOR<StaffLogCreateInput, StaffLogUncheckedCreateInput>
    /**
     * In case the StaffLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffLogUpdateInput, StaffLogUncheckedUpdateInput>
  }

  /**
   * StaffLog delete
   */
  export type StaffLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLog
     */
    select?: StaffLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffLog
     */
    omit?: StaffLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffLogInclude<ExtArgs> | null
    /**
     * Filter which StaffLog to delete.
     */
    where: StaffLogWhereUniqueInput
  }

  /**
   * StaffLog deleteMany
   */
  export type StaffLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffLogs to delete
     */
    where?: StaffLogWhereInput | $Types.Skip
    /**
     * Limit how many StaffLogs to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * StaffLog.sender
   */
  export type StaffLog$senderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput | $Types.Skip
  }

  /**
   * StaffLog without action
   */
  export type StaffLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffLog
     */
    select?: StaffLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffLog
     */
    omit?: StaffLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffLogInclude<ExtArgs> | null
  }


  /**
   * Model UserLog
   */

  export type AggregateUserLog = {
    _count: UserLogCountAggregateOutputType | null
    _min: UserLogMinAggregateOutputType | null
    _max: UserLogMaxAggregateOutputType | null
  }

  export type UserLogMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    message: string | null
    isRead: boolean | null
    generatedAt: Date | null
  }

  export type UserLogMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    message: string | null
    isRead: boolean | null
    generatedAt: Date | null
  }

  export type UserLogCountAggregateOutputType = {
    id: number
    ownerId: number
    title: number
    message: number
    isRead: number
    generatedAt: number
    _all: number
  }


  export type UserLogMinAggregateInputType = {
    id?: true | $Types.Skip
    ownerId?: true | $Types.Skip
    title?: true | $Types.Skip
    message?: true | $Types.Skip
    isRead?: true | $Types.Skip
    generatedAt?: true | $Types.Skip
  }

  export type UserLogMaxAggregateInputType = {
    id?: true | $Types.Skip
    ownerId?: true | $Types.Skip
    title?: true | $Types.Skip
    message?: true | $Types.Skip
    isRead?: true | $Types.Skip
    generatedAt?: true | $Types.Skip
  }

  export type UserLogCountAggregateInputType = {
    id?: true | $Types.Skip
    ownerId?: true | $Types.Skip
    title?: true | $Types.Skip
    message?: true | $Types.Skip
    isRead?: true | $Types.Skip
    generatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type UserLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLog to aggregate.
     */
    where?: UserLogWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogs to fetch.
     */
    orderBy?: UserLogOrderByWithRelationInput | UserLogOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLogWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogs from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogs.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLogs
    **/
    _count?: true | UserLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLogMaxAggregateInputType
  }

  export type GetUserLogAggregateType<T extends UserLogAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLog[P]>
      : GetScalarType<T[P], AggregateUserLog[P]>
  }




  export type UserLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLogWhereInput | $Types.Skip
    orderBy?: UserLogOrderByWithAggregationInput | UserLogOrderByWithAggregationInput[] | $Types.Skip
    by: UserLogScalarFieldEnum[] | UserLogScalarFieldEnum
    having?: UserLogScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: UserLogCountAggregateInputType | true
    _min?: UserLogMinAggregateInputType
    _max?: UserLogMaxAggregateInputType
  }

  export type UserLogGroupByOutputType = {
    id: string
    ownerId: string
    title: string | null
    message: string
    isRead: boolean
    generatedAt: Date | null
    _count: UserLogCountAggregateOutputType | null
    _min: UserLogMinAggregateOutputType | null
    _max: UserLogMaxAggregateOutputType | null
  }

  type GetUserLogGroupByPayload<T extends UserLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLogGroupByOutputType[P]>
            : GetScalarType<T[P], UserLogGroupByOutputType[P]>
        }
      >
    >


  export type UserLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    ownerId?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    message?: boolean | $Types.Skip
    isRead?: boolean | $Types.Skip
    generatedAt?: boolean | $Types.Skip
    owner?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["userLog"]>

  export type UserLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    ownerId?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    message?: boolean | $Types.Skip
    isRead?: boolean | $Types.Skip
    generatedAt?: boolean | $Types.Skip
    owner?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["userLog"]>

  export type UserLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    ownerId?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    message?: boolean | $Types.Skip
    isRead?: boolean | $Types.Skip
    generatedAt?: boolean | $Types.Skip
    owner?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["userLog"]>

  export type UserLogSelectScalar = {
    id?: boolean | $Types.Skip
    ownerId?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    message?: boolean | $Types.Skip
    isRead?: boolean | $Types.Skip
    generatedAt?: boolean | $Types.Skip
  }

  export type UserLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "title" | "message" | "isRead" | "generatedAt", ExtArgs["result"]["userLog"], $Types.Skip>
  export type UserLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type UserLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type UserLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $UserLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLog"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      title: string | null
      message: string
      isRead: boolean
      generatedAt: Date | null
    }, ExtArgs["result"]["userLog"]>
    composites: {}
  }

  type UserLogGetPayload<S extends boolean | null | undefined | UserLogDefaultArgs> = $Result.GetResult<Prisma.$UserLogPayload, S>

  type UserLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLogCountAggregateInputType | true
    }

  export interface UserLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLog'], meta: { name: 'UserLog' } }
    /**
     * Find zero or one UserLog that matches the filter.
     * @param {UserLogFindUniqueArgs} args - Arguments to find a UserLog
     * @example
     * // Get one UserLog
     * const userLog = await prisma.userLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLogFindUniqueArgs>(args: SelectSubset<T, UserLogFindUniqueArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLogFindUniqueOrThrowArgs} args - Arguments to find a UserLog
     * @example
     * // Get one UserLog
     * const userLog = await prisma.userLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLogFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogFindFirstArgs} args - Arguments to find a UserLog
     * @example
     * // Get one UserLog
     * const userLog = await prisma.userLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLogFindFirstArgs>(args?: SelectSubset<T, UserLogFindFirstArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogFindFirstOrThrowArgs} args - Arguments to find a UserLog
     * @example
     * // Get one UserLog
     * const userLog = await prisma.userLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLogFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLogs
     * const userLogs = await prisma.userLog.findMany()
     * 
     * // Get first 10 UserLogs
     * const userLogs = await prisma.userLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLogWithIdOnly = await prisma.userLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLogFindManyArgs>(args?: SelectSubset<T, UserLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLog.
     * @param {UserLogCreateArgs} args - Arguments to create a UserLog.
     * @example
     * // Create one UserLog
     * const UserLog = await prisma.userLog.create({
     *   data: {
     *     // ... data to create a UserLog
     *   }
     * })
     * 
     */
    create<T extends UserLogCreateArgs>(args: SelectSubset<T, UserLogCreateArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLogs.
     * @param {UserLogCreateManyArgs} args - Arguments to create many UserLogs.
     * @example
     * // Create many UserLogs
     * const userLog = await prisma.userLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLogCreateManyArgs>(args?: SelectSubset<T, UserLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLogs and returns the data saved in the database.
     * @param {UserLogCreateManyAndReturnArgs} args - Arguments to create many UserLogs.
     * @example
     * // Create many UserLogs
     * const userLog = await prisma.userLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLogs and only return the `id`
     * const userLogWithIdOnly = await prisma.userLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLogCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserLog.
     * @param {UserLogDeleteArgs} args - Arguments to delete one UserLog.
     * @example
     * // Delete one UserLog
     * const UserLog = await prisma.userLog.delete({
     *   where: {
     *     // ... filter to delete one UserLog
     *   }
     * })
     * 
     */
    delete<T extends UserLogDeleteArgs>(args: SelectSubset<T, UserLogDeleteArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLog.
     * @param {UserLogUpdateArgs} args - Arguments to update one UserLog.
     * @example
     * // Update one UserLog
     * const userLog = await prisma.userLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLogUpdateArgs>(args: SelectSubset<T, UserLogUpdateArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLogs.
     * @param {UserLogDeleteManyArgs} args - Arguments to filter UserLogs to delete.
     * @example
     * // Delete a few UserLogs
     * const { count } = await prisma.userLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLogDeleteManyArgs>(args?: SelectSubset<T, UserLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLogs
     * const userLog = await prisma.userLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLogUpdateManyArgs>(args: SelectSubset<T, UserLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLogs and returns the data updated in the database.
     * @param {UserLogUpdateManyAndReturnArgs} args - Arguments to update many UserLogs.
     * @example
     * // Update many UserLogs
     * const userLog = await prisma.userLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserLogs and only return the `id`
     * const userLogWithIdOnly = await prisma.userLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserLogUpdateManyAndReturnArgs>(args: SelectSubset<T, UserLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserLog.
     * @param {UserLogUpsertArgs} args - Arguments to update or create a UserLog.
     * @example
     * // Update or create a UserLog
     * const userLog = await prisma.userLog.upsert({
     *   create: {
     *     // ... data to create a UserLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLog we want to update
     *   }
     * })
     */
    upsert<T extends UserLogUpsertArgs>(args: SelectSubset<T, UserLogUpsertArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogCountArgs} args - Arguments to filter UserLogs to count.
     * @example
     * // Count the number of UserLogs
     * const count = await prisma.userLog.count({
     *   where: {
     *     // ... the filter for the UserLogs we want to count
     *   }
     * })
    **/
    count<T extends UserLogCountArgs>(
      args?: Subset<T, UserLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLogAggregateArgs>(args: Subset<T, UserLogAggregateArgs>): Prisma.PrismaPromise<GetUserLogAggregateType<T>>

    /**
     * Group by UserLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogGroupByArgs} args - Group by arguments.
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
      T extends UserLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLogGroupByArgs['orderBy'] }
        : { orderBy?: UserLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLog model
   */
  readonly fields: UserLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserLog model
   */
  interface UserLogFieldRefs {
    readonly id: FieldRef<"UserLog", 'String'>
    readonly ownerId: FieldRef<"UserLog", 'String'>
    readonly title: FieldRef<"UserLog", 'String'>
    readonly message: FieldRef<"UserLog", 'String'>
    readonly isRead: FieldRef<"UserLog", 'Boolean'>
    readonly generatedAt: FieldRef<"UserLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserLog findUnique
   */
  export type UserLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLog to fetch.
     */
    where: UserLogWhereUniqueInput
  }

  /**
   * UserLog findUniqueOrThrow
   */
  export type UserLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLog to fetch.
     */
    where: UserLogWhereUniqueInput
  }

  /**
   * UserLog findFirst
   */
  export type UserLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLog to fetch.
     */
    where?: UserLogWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogs to fetch.
     */
    orderBy?: UserLogOrderByWithRelationInput | UserLogOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLogs.
     */
    cursor?: UserLogWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogs from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogs.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLogs.
     */
    distinct?: UserLogScalarFieldEnum | UserLogScalarFieldEnum[] | $Types.Skip
  }

  /**
   * UserLog findFirstOrThrow
   */
  export type UserLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLog to fetch.
     */
    where?: UserLogWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogs to fetch.
     */
    orderBy?: UserLogOrderByWithRelationInput | UserLogOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLogs.
     */
    cursor?: UserLogWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogs from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogs.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLogs.
     */
    distinct?: UserLogScalarFieldEnum | UserLogScalarFieldEnum[] | $Types.Skip
  }

  /**
   * UserLog findMany
   */
  export type UserLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLogs to fetch.
     */
    where?: UserLogWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogs to fetch.
     */
    orderBy?: UserLogOrderByWithRelationInput | UserLogOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLogs.
     */
    cursor?: UserLogWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogs from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogs.
     */
    skip?: number | $Types.Skip
    distinct?: UserLogScalarFieldEnum | UserLogScalarFieldEnum[] | $Types.Skip
  }

  /**
   * UserLog create
   */
  export type UserLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLog.
     */
    data: XOR<UserLogCreateInput, UserLogUncheckedCreateInput>
  }

  /**
   * UserLog createMany
   */
  export type UserLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLogs.
     */
    data: UserLogCreateManyInput | UserLogCreateManyInput[]
  }

  /**
   * UserLog createManyAndReturn
   */
  export type UserLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * The data used to create many UserLogs.
     */
    data: UserLogCreateManyInput | UserLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLog update
   */
  export type UserLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLog.
     */
    data: XOR<UserLogUpdateInput, UserLogUncheckedUpdateInput>
    /**
     * Choose, which UserLog to update.
     */
    where: UserLogWhereUniqueInput
  }

  /**
   * UserLog updateMany
   */
  export type UserLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLogs.
     */
    data: XOR<UserLogUpdateManyMutationInput, UserLogUncheckedUpdateManyInput>
    /**
     * Filter which UserLogs to update
     */
    where?: UserLogWhereInput | $Types.Skip
    /**
     * Limit how many UserLogs to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * UserLog updateManyAndReturn
   */
  export type UserLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * The data used to update UserLogs.
     */
    data: XOR<UserLogUpdateManyMutationInput, UserLogUncheckedUpdateManyInput>
    /**
     * Filter which UserLogs to update
     */
    where?: UserLogWhereInput | $Types.Skip
    /**
     * Limit how many UserLogs to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLog upsert
   */
  export type UserLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLog to update in case it exists.
     */
    where: UserLogWhereUniqueInput
    /**
     * In case the UserLog found by the `where` argument doesn't exist, create a new UserLog with this data.
     */
    create: XOR<UserLogCreateInput, UserLogUncheckedCreateInput>
    /**
     * In case the UserLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLogUpdateInput, UserLogUncheckedUpdateInput>
  }

  /**
   * UserLog delete
   */
  export type UserLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter which UserLog to delete.
     */
    where: UserLogWhereUniqueInput
  }

  /**
   * UserLog deleteMany
   */
  export type UserLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLogs to delete
     */
    where?: UserLogWhereInput | $Types.Skip
    /**
     * Limit how many UserLogs to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * UserLog without action
   */
  export type UserLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SpecialtyScalarFieldEnum: {
    id: 'id',
    title: 'title',
    avgVisitTime: 'avgVisitTime'
  };

  export type SpecialtyScalarFieldEnum = (typeof SpecialtyScalarFieldEnum)[keyof typeof SpecialtyScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastName: 'lastName',
    personnelId: 'personnelId',
    personnelEmail: 'personnelEmail',
    password: 'password',
    gender: 'gender',
    phoneNumber: 'phoneNumber',
    avatarUrl: 'avatarUrl',
    avatarPublicId: 'avatarPublicId',
    workingDays: 'workingDays',
    workingHours: 'workingHours',
    specialtyId: 'specialtyId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    gender: 'gender',
    location: 'location',
    phoneNumber: 'phoneNumber',
    avatarUrl: 'avatarUrl',
    avatarPublicId: 'avatarPublicId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    reasonId: 'reasonId',
    doctorId: 'doctorId',
    date: 'date',
    time: 'time',
    expired: 'expired',
    reservedAt: 'reservedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const StaffLogScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    senderId: 'senderId',
    title: 'title',
    message: 'message',
    isRead: 'isRead',
    generatedAt: 'generatedAt'
  };

  export type StaffLogScalarFieldEnum = (typeof StaffLogScalarFieldEnum)[keyof typeof StaffLogScalarFieldEnum]


  export const UserLogScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    title: 'title',
    message: 'message',
    isRead: 'isRead',
    generatedAt: 'generatedAt'
  };

  export type UserLogScalarFieldEnum = (typeof UserLogScalarFieldEnum)[keyof typeof UserLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Field'
   */
  export type EnumFieldFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Field'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SpecialtyWhereInput = {
    AND?: SpecialtyWhereInput | SpecialtyWhereInput[] | $Types.Skip
    OR?: SpecialtyWhereInput[] | $Types.Skip
    NOT?: SpecialtyWhereInput | SpecialtyWhereInput[] | $Types.Skip
    id?: StringFilter<"Specialty"> | string | $Types.Skip
    title?: EnumFieldFilter<"Specialty"> | $Enums.Field | $Types.Skip
    avgVisitTime?: IntNullableFilter<"Specialty"> | number | null | $Types.Skip
    doctors?: StaffListRelationFilter | $Types.Skip
    Appointment?: AppointmentListRelationFilter | $Types.Skip
  }

  export type SpecialtyOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    avgVisitTime?: SortOrderInput | SortOrder | $Types.Skip
    doctors?: StaffOrderByRelationAggregateInput | $Types.Skip
    Appointment?: AppointmentOrderByRelationAggregateInput | $Types.Skip
  }

  export type SpecialtyWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    title?: $Enums.Field | $Types.Skip
    AND?: SpecialtyWhereInput | SpecialtyWhereInput[] | $Types.Skip
    OR?: SpecialtyWhereInput[] | $Types.Skip
    NOT?: SpecialtyWhereInput | SpecialtyWhereInput[] | $Types.Skip
    avgVisitTime?: IntNullableFilter<"Specialty"> | number | null | $Types.Skip
    doctors?: StaffListRelationFilter | $Types.Skip
    Appointment?: AppointmentListRelationFilter | $Types.Skip
  }, "id" | "title">

  export type SpecialtyOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    avgVisitTime?: SortOrderInput | SortOrder | $Types.Skip
    _count?: SpecialtyCountOrderByAggregateInput | $Types.Skip
    _avg?: SpecialtyAvgOrderByAggregateInput | $Types.Skip
    _max?: SpecialtyMaxOrderByAggregateInput | $Types.Skip
    _min?: SpecialtyMinOrderByAggregateInput | $Types.Skip
    _sum?: SpecialtySumOrderByAggregateInput | $Types.Skip
  }

  export type SpecialtyScalarWhereWithAggregatesInput = {
    AND?: SpecialtyScalarWhereWithAggregatesInput | SpecialtyScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: SpecialtyScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: SpecialtyScalarWhereWithAggregatesInput | SpecialtyScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Specialty"> | string | $Types.Skip
    title?: EnumFieldWithAggregatesFilter<"Specialty"> | $Enums.Field | $Types.Skip
    avgVisitTime?: IntNullableWithAggregatesFilter<"Specialty"> | number | null | $Types.Skip
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[] | $Types.Skip
    OR?: StaffWhereInput[] | $Types.Skip
    NOT?: StaffWhereInput | StaffWhereInput[] | $Types.Skip
    id?: StringFilter<"Staff"> | string | $Types.Skip
    name?: StringFilter<"Staff"> | string | $Types.Skip
    lastName?: StringFilter<"Staff"> | string | $Types.Skip
    personnelId?: StringFilter<"Staff"> | string | $Types.Skip
    personnelEmail?: StringFilter<"Staff"> | string | $Types.Skip
    password?: StringFilter<"Staff"> | string | $Types.Skip
    gender?: EnumGenderFilter<"Staff"> | $Enums.Gender | $Types.Skip
    phoneNumber?: StringNullableFilter<"Staff"> | string | null | $Types.Skip
    avatarUrl?: StringNullableFilter<"Staff"> | string | null | $Types.Skip
    avatarPublicId?: StringNullableFilter<"Staff"> | string | null | $Types.Skip
    workingDays?: StringFilter<"Staff"> | string | $Types.Skip
    workingHours?: StringFilter<"Staff"> | string | $Types.Skip
    specialtyId?: StringNullableFilter<"Staff"> | string | null | $Types.Skip
    role?: EnumRoleFilter<"Staff"> | $Enums.Role | $Types.Skip
    createdAt?: DateTimeNullableFilter<"Staff"> | Date | string | null | $Types.Skip
    specialty?: XOR<SpecialtyNullableScalarRelationFilter, SpecialtyWhereInput> | null | $Types.Skip
    appointments?: AppointmentListRelationFilter | $Types.Skip
    messages?: StaffLogListRelationFilter | $Types.Skip
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    lastName?: SortOrder | $Types.Skip
    personnelId?: SortOrder | $Types.Skip
    personnelEmail?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    gender?: SortOrder | $Types.Skip
    phoneNumber?: SortOrderInput | SortOrder | $Types.Skip
    avatarUrl?: SortOrderInput | SortOrder | $Types.Skip
    avatarPublicId?: SortOrderInput | SortOrder | $Types.Skip
    workingDays?: SortOrder | $Types.Skip
    workingHours?: SortOrder | $Types.Skip
    specialtyId?: SortOrderInput | SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    createdAt?: SortOrderInput | SortOrder | $Types.Skip
    specialty?: SpecialtyOrderByWithRelationInput | $Types.Skip
    appointments?: AppointmentOrderByRelationAggregateInput | $Types.Skip
    messages?: StaffLogOrderByRelationAggregateInput | $Types.Skip
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    personnelId?: string | $Types.Skip
    personnelEmail?: string | $Types.Skip
    avatarPublicId?: string | $Types.Skip
    AND?: StaffWhereInput | StaffWhereInput[] | $Types.Skip
    OR?: StaffWhereInput[] | $Types.Skip
    NOT?: StaffWhereInput | StaffWhereInput[] | $Types.Skip
    name?: StringFilter<"Staff"> | string | $Types.Skip
    lastName?: StringFilter<"Staff"> | string | $Types.Skip
    password?: StringFilter<"Staff"> | string | $Types.Skip
    gender?: EnumGenderFilter<"Staff"> | $Enums.Gender | $Types.Skip
    phoneNumber?: StringNullableFilter<"Staff"> | string | null | $Types.Skip
    avatarUrl?: StringNullableFilter<"Staff"> | string | null | $Types.Skip
    workingDays?: StringFilter<"Staff"> | string | $Types.Skip
    workingHours?: StringFilter<"Staff"> | string | $Types.Skip
    specialtyId?: StringNullableFilter<"Staff"> | string | null | $Types.Skip
    role?: EnumRoleFilter<"Staff"> | $Enums.Role | $Types.Skip
    createdAt?: DateTimeNullableFilter<"Staff"> | Date | string | null | $Types.Skip
    specialty?: XOR<SpecialtyNullableScalarRelationFilter, SpecialtyWhereInput> | null | $Types.Skip
    appointments?: AppointmentListRelationFilter | $Types.Skip
    messages?: StaffLogListRelationFilter | $Types.Skip
  }, "id" | "personnelId" | "personnelEmail" | "avatarPublicId">

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    lastName?: SortOrder | $Types.Skip
    personnelId?: SortOrder | $Types.Skip
    personnelEmail?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    gender?: SortOrder | $Types.Skip
    phoneNumber?: SortOrderInput | SortOrder | $Types.Skip
    avatarUrl?: SortOrderInput | SortOrder | $Types.Skip
    avatarPublicId?: SortOrderInput | SortOrder | $Types.Skip
    workingDays?: SortOrder | $Types.Skip
    workingHours?: SortOrder | $Types.Skip
    specialtyId?: SortOrderInput | SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    createdAt?: SortOrderInput | SortOrder | $Types.Skip
    _count?: StaffCountOrderByAggregateInput | $Types.Skip
    _max?: StaffMaxOrderByAggregateInput | $Types.Skip
    _min?: StaffMinOrderByAggregateInput | $Types.Skip
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: StaffScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Staff"> | string | $Types.Skip
    name?: StringWithAggregatesFilter<"Staff"> | string | $Types.Skip
    lastName?: StringWithAggregatesFilter<"Staff"> | string | $Types.Skip
    personnelId?: StringWithAggregatesFilter<"Staff"> | string | $Types.Skip
    personnelEmail?: StringWithAggregatesFilter<"Staff"> | string | $Types.Skip
    password?: StringWithAggregatesFilter<"Staff"> | string | $Types.Skip
    gender?: EnumGenderWithAggregatesFilter<"Staff"> | $Enums.Gender | $Types.Skip
    phoneNumber?: StringNullableWithAggregatesFilter<"Staff"> | string | null | $Types.Skip
    avatarUrl?: StringNullableWithAggregatesFilter<"Staff"> | string | null | $Types.Skip
    avatarPublicId?: StringNullableWithAggregatesFilter<"Staff"> | string | null | $Types.Skip
    workingDays?: StringWithAggregatesFilter<"Staff"> | string | $Types.Skip
    workingHours?: StringWithAggregatesFilter<"Staff"> | string | $Types.Skip
    specialtyId?: StringNullableWithAggregatesFilter<"Staff"> | string | null | $Types.Skip
    role?: EnumRoleWithAggregatesFilter<"Staff"> | $Enums.Role | $Types.Skip
    createdAt?: DateTimeNullableWithAggregatesFilter<"Staff"> | Date | string | null | $Types.Skip
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[] | $Types.Skip
    OR?: UserWhereInput[] | $Types.Skip
    NOT?: UserWhereInput | UserWhereInput[] | $Types.Skip
    id?: StringFilter<"User"> | string | $Types.Skip
    name?: StringFilter<"User"> | string | $Types.Skip
    lastName?: StringFilter<"User"> | string | $Types.Skip
    email?: StringFilter<"User"> | string | $Types.Skip
    password?: StringFilter<"User"> | string | $Types.Skip
    gender?: EnumGenderFilter<"User"> | $Enums.Gender | $Types.Skip
    location?: StringFilter<"User"> | string | $Types.Skip
    phoneNumber?: StringNullableFilter<"User"> | string | null | $Types.Skip
    avatarUrl?: StringNullableFilter<"User"> | string | null | $Types.Skip
    avatarPublicId?: StringNullableFilter<"User"> | string | null | $Types.Skip
    role?: EnumRoleFilter<"User"> | $Enums.Role | $Types.Skip
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null | $Types.Skip
    appointments?: AppointmentListRelationFilter | $Types.Skip
    messages?: UserLogListRelationFilter | $Types.Skip
    StaffLog?: StaffLogListRelationFilter | $Types.Skip
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    lastName?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    gender?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    phoneNumber?: SortOrderInput | SortOrder | $Types.Skip
    avatarUrl?: SortOrderInput | SortOrder | $Types.Skip
    avatarPublicId?: SortOrderInput | SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    createdAt?: SortOrderInput | SortOrder | $Types.Skip
    appointments?: AppointmentOrderByRelationAggregateInput | $Types.Skip
    messages?: UserLogOrderByRelationAggregateInput | $Types.Skip
    StaffLog?: StaffLogOrderByRelationAggregateInput | $Types.Skip
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    email?: string | $Types.Skip
    AND?: UserWhereInput | UserWhereInput[] | $Types.Skip
    OR?: UserWhereInput[] | $Types.Skip
    NOT?: UserWhereInput | UserWhereInput[] | $Types.Skip
    name?: StringFilter<"User"> | string | $Types.Skip
    lastName?: StringFilter<"User"> | string | $Types.Skip
    password?: StringFilter<"User"> | string | $Types.Skip
    gender?: EnumGenderFilter<"User"> | $Enums.Gender | $Types.Skip
    location?: StringFilter<"User"> | string | $Types.Skip
    phoneNumber?: StringNullableFilter<"User"> | string | null | $Types.Skip
    avatarUrl?: StringNullableFilter<"User"> | string | null | $Types.Skip
    avatarPublicId?: StringNullableFilter<"User"> | string | null | $Types.Skip
    role?: EnumRoleFilter<"User"> | $Enums.Role | $Types.Skip
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null | $Types.Skip
    appointments?: AppointmentListRelationFilter | $Types.Skip
    messages?: UserLogListRelationFilter | $Types.Skip
    StaffLog?: StaffLogListRelationFilter | $Types.Skip
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    lastName?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    gender?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    phoneNumber?: SortOrderInput | SortOrder | $Types.Skip
    avatarUrl?: SortOrderInput | SortOrder | $Types.Skip
    avatarPublicId?: SortOrderInput | SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    createdAt?: SortOrderInput | SortOrder | $Types.Skip
    _count?: UserCountOrderByAggregateInput | $Types.Skip
    _max?: UserMaxOrderByAggregateInput | $Types.Skip
    _min?: UserMinOrderByAggregateInput | $Types.Skip
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: UserScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
    name?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
    lastName?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
    email?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
    password?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
    gender?: EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender | $Types.Skip
    location?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null | $Types.Skip
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null | $Types.Skip
    avatarPublicId?: StringNullableWithAggregatesFilter<"User"> | string | null | $Types.Skip
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role | $Types.Skip
    createdAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null | $Types.Skip
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[] | $Types.Skip
    OR?: AppointmentWhereInput[] | $Types.Skip
    NOT?: AppointmentWhereInput | AppointmentWhereInput[] | $Types.Skip
    id?: StringFilter<"Appointment"> | string | $Types.Skip
    patientId?: StringNullableFilter<"Appointment"> | string | null | $Types.Skip
    reasonId?: StringFilter<"Appointment"> | string | $Types.Skip
    doctorId?: StringFilter<"Appointment"> | string | $Types.Skip
    date?: DateTimeNullableFilter<"Appointment"> | Date | string | null | $Types.Skip
    time?: StringFilter<"Appointment"> | string | $Types.Skip
    expired?: BoolFilter<"Appointment"> | boolean | $Types.Skip
    reservedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null | $Types.Skip
    patient?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null | $Types.Skip
    reason?: XOR<SpecialtyScalarRelationFilter, SpecialtyWhereInput> | $Types.Skip
    doctor?: XOR<StaffScalarRelationFilter, StaffWhereInput> | $Types.Skip
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    patientId?: SortOrderInput | SortOrder | $Types.Skip
    reasonId?: SortOrder | $Types.Skip
    doctorId?: SortOrder | $Types.Skip
    date?: SortOrderInput | SortOrder | $Types.Skip
    time?: SortOrder | $Types.Skip
    expired?: SortOrder | $Types.Skip
    reservedAt?: SortOrderInput | SortOrder | $Types.Skip
    patient?: UserOrderByWithRelationInput | $Types.Skip
    reason?: SpecialtyOrderByWithRelationInput | $Types.Skip
    doctor?: StaffOrderByWithRelationInput | $Types.Skip
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: AppointmentWhereInput | AppointmentWhereInput[] | $Types.Skip
    OR?: AppointmentWhereInput[] | $Types.Skip
    NOT?: AppointmentWhereInput | AppointmentWhereInput[] | $Types.Skip
    patientId?: StringNullableFilter<"Appointment"> | string | null | $Types.Skip
    reasonId?: StringFilter<"Appointment"> | string | $Types.Skip
    doctorId?: StringFilter<"Appointment"> | string | $Types.Skip
    date?: DateTimeNullableFilter<"Appointment"> | Date | string | null | $Types.Skip
    time?: StringFilter<"Appointment"> | string | $Types.Skip
    expired?: BoolFilter<"Appointment"> | boolean | $Types.Skip
    reservedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null | $Types.Skip
    patient?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null | $Types.Skip
    reason?: XOR<SpecialtyScalarRelationFilter, SpecialtyWhereInput> | $Types.Skip
    doctor?: XOR<StaffScalarRelationFilter, StaffWhereInput> | $Types.Skip
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    patientId?: SortOrderInput | SortOrder | $Types.Skip
    reasonId?: SortOrder | $Types.Skip
    doctorId?: SortOrder | $Types.Skip
    date?: SortOrderInput | SortOrder | $Types.Skip
    time?: SortOrder | $Types.Skip
    expired?: SortOrder | $Types.Skip
    reservedAt?: SortOrderInput | SortOrder | $Types.Skip
    _count?: AppointmentCountOrderByAggregateInput | $Types.Skip
    _max?: AppointmentMaxOrderByAggregateInput | $Types.Skip
    _min?: AppointmentMinOrderByAggregateInput | $Types.Skip
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: AppointmentScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Appointment"> | string | $Types.Skip
    patientId?: StringNullableWithAggregatesFilter<"Appointment"> | string | null | $Types.Skip
    reasonId?: StringWithAggregatesFilter<"Appointment"> | string | $Types.Skip
    doctorId?: StringWithAggregatesFilter<"Appointment"> | string | $Types.Skip
    date?: DateTimeNullableWithAggregatesFilter<"Appointment"> | Date | string | null | $Types.Skip
    time?: StringWithAggregatesFilter<"Appointment"> | string | $Types.Skip
    expired?: BoolWithAggregatesFilter<"Appointment"> | boolean | $Types.Skip
    reservedAt?: DateTimeNullableWithAggregatesFilter<"Appointment"> | Date | string | null | $Types.Skip
  }

  export type StaffLogWhereInput = {
    AND?: StaffLogWhereInput | StaffLogWhereInput[] | $Types.Skip
    OR?: StaffLogWhereInput[] | $Types.Skip
    NOT?: StaffLogWhereInput | StaffLogWhereInput[] | $Types.Skip
    id?: StringFilter<"StaffLog"> | string | $Types.Skip
    ownerId?: StringFilter<"StaffLog"> | string | $Types.Skip
    senderId?: StringNullableFilter<"StaffLog"> | string | null | $Types.Skip
    title?: StringNullableFilter<"StaffLog"> | string | null | $Types.Skip
    message?: StringFilter<"StaffLog"> | string | $Types.Skip
    isRead?: BoolFilter<"StaffLog"> | boolean | $Types.Skip
    generatedAt?: DateTimeNullableFilter<"StaffLog"> | Date | string | null | $Types.Skip
    owner?: XOR<StaffScalarRelationFilter, StaffWhereInput> | $Types.Skip
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null | $Types.Skip
  }

  export type StaffLogOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    ownerId?: SortOrder | $Types.Skip
    senderId?: SortOrderInput | SortOrder | $Types.Skip
    title?: SortOrderInput | SortOrder | $Types.Skip
    message?: SortOrder | $Types.Skip
    isRead?: SortOrder | $Types.Skip
    generatedAt?: SortOrderInput | SortOrder | $Types.Skip
    owner?: StaffOrderByWithRelationInput | $Types.Skip
    sender?: UserOrderByWithRelationInput | $Types.Skip
  }

  export type StaffLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: StaffLogWhereInput | StaffLogWhereInput[] | $Types.Skip
    OR?: StaffLogWhereInput[] | $Types.Skip
    NOT?: StaffLogWhereInput | StaffLogWhereInput[] | $Types.Skip
    ownerId?: StringFilter<"StaffLog"> | string | $Types.Skip
    senderId?: StringNullableFilter<"StaffLog"> | string | null | $Types.Skip
    title?: StringNullableFilter<"StaffLog"> | string | null | $Types.Skip
    message?: StringFilter<"StaffLog"> | string | $Types.Skip
    isRead?: BoolFilter<"StaffLog"> | boolean | $Types.Skip
    generatedAt?: DateTimeNullableFilter<"StaffLog"> | Date | string | null | $Types.Skip
    owner?: XOR<StaffScalarRelationFilter, StaffWhereInput> | $Types.Skip
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null | $Types.Skip
  }, "id">

  export type StaffLogOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    ownerId?: SortOrder | $Types.Skip
    senderId?: SortOrderInput | SortOrder | $Types.Skip
    title?: SortOrderInput | SortOrder | $Types.Skip
    message?: SortOrder | $Types.Skip
    isRead?: SortOrder | $Types.Skip
    generatedAt?: SortOrderInput | SortOrder | $Types.Skip
    _count?: StaffLogCountOrderByAggregateInput | $Types.Skip
    _max?: StaffLogMaxOrderByAggregateInput | $Types.Skip
    _min?: StaffLogMinOrderByAggregateInput | $Types.Skip
  }

  export type StaffLogScalarWhereWithAggregatesInput = {
    AND?: StaffLogScalarWhereWithAggregatesInput | StaffLogScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: StaffLogScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: StaffLogScalarWhereWithAggregatesInput | StaffLogScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"StaffLog"> | string | $Types.Skip
    ownerId?: StringWithAggregatesFilter<"StaffLog"> | string | $Types.Skip
    senderId?: StringNullableWithAggregatesFilter<"StaffLog"> | string | null | $Types.Skip
    title?: StringNullableWithAggregatesFilter<"StaffLog"> | string | null | $Types.Skip
    message?: StringWithAggregatesFilter<"StaffLog"> | string | $Types.Skip
    isRead?: BoolWithAggregatesFilter<"StaffLog"> | boolean | $Types.Skip
    generatedAt?: DateTimeNullableWithAggregatesFilter<"StaffLog"> | Date | string | null | $Types.Skip
  }

  export type UserLogWhereInput = {
    AND?: UserLogWhereInput | UserLogWhereInput[] | $Types.Skip
    OR?: UserLogWhereInput[] | $Types.Skip
    NOT?: UserLogWhereInput | UserLogWhereInput[] | $Types.Skip
    id?: StringFilter<"UserLog"> | string | $Types.Skip
    ownerId?: StringFilter<"UserLog"> | string | $Types.Skip
    title?: StringNullableFilter<"UserLog"> | string | null | $Types.Skip
    message?: StringFilter<"UserLog"> | string | $Types.Skip
    isRead?: BoolFilter<"UserLog"> | boolean | $Types.Skip
    generatedAt?: DateTimeNullableFilter<"UserLog"> | Date | string | null | $Types.Skip
    owner?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
  }

  export type UserLogOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    ownerId?: SortOrder | $Types.Skip
    title?: SortOrderInput | SortOrder | $Types.Skip
    message?: SortOrder | $Types.Skip
    isRead?: SortOrder | $Types.Skip
    generatedAt?: SortOrderInput | SortOrder | $Types.Skip
    owner?: UserOrderByWithRelationInput | $Types.Skip
  }

  export type UserLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: UserLogWhereInput | UserLogWhereInput[] | $Types.Skip
    OR?: UserLogWhereInput[] | $Types.Skip
    NOT?: UserLogWhereInput | UserLogWhereInput[] | $Types.Skip
    ownerId?: StringFilter<"UserLog"> | string | $Types.Skip
    title?: StringNullableFilter<"UserLog"> | string | null | $Types.Skip
    message?: StringFilter<"UserLog"> | string | $Types.Skip
    isRead?: BoolFilter<"UserLog"> | boolean | $Types.Skip
    generatedAt?: DateTimeNullableFilter<"UserLog"> | Date | string | null | $Types.Skip
    owner?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
  }, "id">

  export type UserLogOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    ownerId?: SortOrder | $Types.Skip
    title?: SortOrderInput | SortOrder | $Types.Skip
    message?: SortOrder | $Types.Skip
    isRead?: SortOrder | $Types.Skip
    generatedAt?: SortOrderInput | SortOrder | $Types.Skip
    _count?: UserLogCountOrderByAggregateInput | $Types.Skip
    _max?: UserLogMaxOrderByAggregateInput | $Types.Skip
    _min?: UserLogMinOrderByAggregateInput | $Types.Skip
  }

  export type UserLogScalarWhereWithAggregatesInput = {
    AND?: UserLogScalarWhereWithAggregatesInput | UserLogScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: UserLogScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: UserLogScalarWhereWithAggregatesInput | UserLogScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"UserLog"> | string | $Types.Skip
    ownerId?: StringWithAggregatesFilter<"UserLog"> | string | $Types.Skip
    title?: StringNullableWithAggregatesFilter<"UserLog"> | string | null | $Types.Skip
    message?: StringWithAggregatesFilter<"UserLog"> | string | $Types.Skip
    isRead?: BoolWithAggregatesFilter<"UserLog"> | boolean | $Types.Skip
    generatedAt?: DateTimeNullableWithAggregatesFilter<"UserLog"> | Date | string | null | $Types.Skip
  }

  export type SpecialtyCreateInput = {
    id?: string | $Types.Skip
    title: $Enums.Field
    avgVisitTime?: number | null | $Types.Skip
    doctors?: StaffCreateNestedManyWithoutSpecialtyInput | $Types.Skip
    Appointment?: AppointmentCreateNestedManyWithoutReasonInput | $Types.Skip
  }

  export type SpecialtyUncheckedCreateInput = {
    id?: string | $Types.Skip
    title: $Enums.Field
    avgVisitTime?: number | null | $Types.Skip
    doctors?: StaffUncheckedCreateNestedManyWithoutSpecialtyInput | $Types.Skip
    Appointment?: AppointmentUncheckedCreateNestedManyWithoutReasonInput | $Types.Skip
  }

  export type SpecialtyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: EnumFieldFieldUpdateOperationsInput | $Enums.Field | $Types.Skip
    avgVisitTime?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    doctors?: StaffUpdateManyWithoutSpecialtyNestedInput | $Types.Skip
    Appointment?: AppointmentUpdateManyWithoutReasonNestedInput | $Types.Skip
  }

  export type SpecialtyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: EnumFieldFieldUpdateOperationsInput | $Enums.Field | $Types.Skip
    avgVisitTime?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    doctors?: StaffUncheckedUpdateManyWithoutSpecialtyNestedInput | $Types.Skip
    Appointment?: AppointmentUncheckedUpdateManyWithoutReasonNestedInput | $Types.Skip
  }

  export type SpecialtyCreateManyInput = {
    id?: string | $Types.Skip
    title: $Enums.Field
    avgVisitTime?: number | null | $Types.Skip
  }

  export type SpecialtyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: EnumFieldFieldUpdateOperationsInput | $Enums.Field | $Types.Skip
    avgVisitTime?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
  }

  export type SpecialtyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: EnumFieldFieldUpdateOperationsInput | $Enums.Field | $Types.Skip
    avgVisitTime?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
  }

  export type StaffCreateInput = {
    id?: string | $Types.Skip
    name: string
    lastName: string
    personnelId: string
    personnelEmail: string
    password: string
    gender: $Enums.Gender
    phoneNumber?: string | null | $Types.Skip
    avatarUrl?: string | null | $Types.Skip
    avatarPublicId?: string | null | $Types.Skip
    workingDays: string
    workingHours: string
    role?: $Enums.Role | $Types.Skip
    createdAt?: Date | string | null | $Types.Skip
    specialty?: SpecialtyCreateNestedOneWithoutDoctorsInput | $Types.Skip
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput | $Types.Skip
    messages?: StaffLogCreateNestedManyWithoutOwnerInput | $Types.Skip
  }

  export type StaffUncheckedCreateInput = {
    id?: string | $Types.Skip
    name: string
    lastName: string
    personnelId: string
    personnelEmail: string
    password: string
    gender: $Enums.Gender
    phoneNumber?: string | null | $Types.Skip
    avatarUrl?: string | null | $Types.Skip
    avatarPublicId?: string | null | $Types.Skip
    workingDays: string
    workingHours: string
    specialtyId?: string | null | $Types.Skip
    role?: $Enums.Role | $Types.Skip
    createdAt?: Date | string | null | $Types.Skip
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput | $Types.Skip
    messages?: StaffLogUncheckedCreateNestedManyWithoutOwnerInput | $Types.Skip
  }

  export type StaffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelEmail?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    workingDays?: StringFieldUpdateOperationsInput | string | $Types.Skip
    workingHours?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    specialty?: SpecialtyUpdateOneWithoutDoctorsNestedInput | $Types.Skip
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput | $Types.Skip
    messages?: StaffLogUpdateManyWithoutOwnerNestedInput | $Types.Skip
  }

  export type StaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelEmail?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    workingDays?: StringFieldUpdateOperationsInput | string | $Types.Skip
    workingHours?: StringFieldUpdateOperationsInput | string | $Types.Skip
    specialtyId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput | $Types.Skip
    messages?: StaffLogUncheckedUpdateManyWithoutOwnerNestedInput | $Types.Skip
  }

  export type StaffCreateManyInput = {
    id?: string | $Types.Skip
    name: string
    lastName: string
    personnelId: string
    personnelEmail: string
    password: string
    gender: $Enums.Gender
    phoneNumber?: string | null | $Types.Skip
    avatarUrl?: string | null | $Types.Skip
    avatarPublicId?: string | null | $Types.Skip
    workingDays: string
    workingHours: string
    specialtyId?: string | null | $Types.Skip
    role?: $Enums.Role | $Types.Skip
    createdAt?: Date | string | null | $Types.Skip
  }

  export type StaffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelEmail?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    workingDays?: StringFieldUpdateOperationsInput | string | $Types.Skip
    workingHours?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelEmail?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    workingDays?: StringFieldUpdateOperationsInput | string | $Types.Skip
    workingHours?: StringFieldUpdateOperationsInput | string | $Types.Skip
    specialtyId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type UserCreateInput = {
    id?: string | $Types.Skip
    name: string
    lastName: string
    email: string
    password: string
    gender: $Enums.Gender
    location: string
    phoneNumber?: string | null | $Types.Skip
    avatarUrl?: string | null | $Types.Skip
    avatarPublicId?: string | null | $Types.Skip
    role?: $Enums.Role | $Types.Skip
    createdAt?: Date | string | null | $Types.Skip
    appointments?: AppointmentCreateNestedManyWithoutPatientInput | $Types.Skip
    messages?: UserLogCreateNestedManyWithoutOwnerInput | $Types.Skip
    StaffLog?: StaffLogCreateNestedManyWithoutSenderInput | $Types.Skip
  }

  export type UserUncheckedCreateInput = {
    id?: string | $Types.Skip
    name: string
    lastName: string
    email: string
    password: string
    gender: $Enums.Gender
    location: string
    phoneNumber?: string | null | $Types.Skip
    avatarUrl?: string | null | $Types.Skip
    avatarPublicId?: string | null | $Types.Skip
    role?: $Enums.Role | $Types.Skip
    createdAt?: Date | string | null | $Types.Skip
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput | $Types.Skip
    messages?: UserLogUncheckedCreateNestedManyWithoutOwnerInput | $Types.Skip
    StaffLog?: StaffLogUncheckedCreateNestedManyWithoutSenderInput | $Types.Skip
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput | $Types.Skip
    messages?: UserLogUpdateManyWithoutOwnerNestedInput | $Types.Skip
    StaffLog?: StaffLogUpdateManyWithoutSenderNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput | $Types.Skip
    messages?: UserLogUncheckedUpdateManyWithoutOwnerNestedInput | $Types.Skip
    StaffLog?: StaffLogUncheckedUpdateManyWithoutSenderNestedInput | $Types.Skip
  }

  export type UserCreateManyInput = {
    id?: string | $Types.Skip
    name: string
    lastName: string
    email: string
    password: string
    gender: $Enums.Gender
    location: string
    phoneNumber?: string | null | $Types.Skip
    avatarUrl?: string | null | $Types.Skip
    avatarPublicId?: string | null | $Types.Skip
    role?: $Enums.Role | $Types.Skip
    createdAt?: Date | string | null | $Types.Skip
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type AppointmentCreateInput = {
    id?: string | $Types.Skip
    date?: Date | string | null | $Types.Skip
    time: string
    expired?: boolean | $Types.Skip
    reservedAt?: Date | string | null | $Types.Skip
    patient?: UserCreateNestedOneWithoutAppointmentsInput | $Types.Skip
    reason: SpecialtyCreateNestedOneWithoutAppointmentInput
    doctor: StaffCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string | $Types.Skip
    patientId?: string | null | $Types.Skip
    reasonId: string
    doctorId: string
    date?: Date | string | null | $Types.Skip
    time: string
    expired?: boolean | $Types.Skip
    reservedAt?: Date | string | null | $Types.Skip
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    time?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expired?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    reservedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    patient?: UserUpdateOneWithoutAppointmentsNestedInput | $Types.Skip
    reason?: SpecialtyUpdateOneRequiredWithoutAppointmentNestedInput | $Types.Skip
    doctor?: StaffUpdateOneRequiredWithoutAppointmentsNestedInput | $Types.Skip
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    patientId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    reasonId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    doctorId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    time?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expired?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    reservedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type AppointmentCreateManyInput = {
    id?: string | $Types.Skip
    patientId?: string | null | $Types.Skip
    reasonId: string
    doctorId: string
    date?: Date | string | null | $Types.Skip
    time: string
    expired?: boolean | $Types.Skip
    reservedAt?: Date | string | null | $Types.Skip
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    time?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expired?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    reservedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    patientId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    reasonId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    doctorId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    time?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expired?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    reservedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type StaffLogCreateInput = {
    id?: string | $Types.Skip
    title?: string | null | $Types.Skip
    message: string
    isRead?: boolean | $Types.Skip
    generatedAt?: Date | string | null | $Types.Skip
    owner: StaffCreateNestedOneWithoutMessagesInput
    sender?: UserCreateNestedOneWithoutStaffLogInput | $Types.Skip
  }

  export type StaffLogUncheckedCreateInput = {
    id?: string | $Types.Skip
    ownerId: string
    senderId?: string | null | $Types.Skip
    title?: string | null | $Types.Skip
    message: string
    isRead?: boolean | $Types.Skip
    generatedAt?: Date | string | null | $Types.Skip
  }

  export type StaffLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isRead?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    generatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    owner?: StaffUpdateOneRequiredWithoutMessagesNestedInput | $Types.Skip
    sender?: UserUpdateOneWithoutStaffLogNestedInput | $Types.Skip
  }

  export type StaffLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    ownerId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    senderId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isRead?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    generatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type StaffLogCreateManyInput = {
    id?: string | $Types.Skip
    ownerId: string
    senderId?: string | null | $Types.Skip
    title?: string | null | $Types.Skip
    message: string
    isRead?: boolean | $Types.Skip
    generatedAt?: Date | string | null | $Types.Skip
  }

  export type StaffLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isRead?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    generatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type StaffLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    ownerId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    senderId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isRead?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    generatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type UserLogCreateInput = {
    id?: string | $Types.Skip
    title?: string | null | $Types.Skip
    message: string
    isRead?: boolean | $Types.Skip
    generatedAt?: Date | string | null | $Types.Skip
    owner: UserCreateNestedOneWithoutMessagesInput
  }

  export type UserLogUncheckedCreateInput = {
    id?: string | $Types.Skip
    ownerId: string
    title?: string | null | $Types.Skip
    message: string
    isRead?: boolean | $Types.Skip
    generatedAt?: Date | string | null | $Types.Skip
  }

  export type UserLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isRead?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    generatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    owner?: UserUpdateOneRequiredWithoutMessagesNestedInput | $Types.Skip
  }

  export type UserLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    ownerId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isRead?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    generatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type UserLogCreateManyInput = {
    id?: string | $Types.Skip
    ownerId: string
    title?: string | null | $Types.Skip
    message: string
    isRead?: boolean | $Types.Skip
    generatedAt?: Date | string | null | $Types.Skip
  }

  export type UserLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isRead?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    generatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type UserLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    ownerId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isRead?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    generatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | $Types.Skip
    notIn?: string[] | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringFilter<$PrismaModel> | string | $Types.Skip
  }

  export type EnumFieldFilter<$PrismaModel = never> = {
    equals?: $Enums.Field | EnumFieldFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Field[] | $Types.Skip
    notIn?: $Enums.Field[] | $Types.Skip
    not?: NestedEnumFieldFilter<$PrismaModel> | $Enums.Field | $Types.Skip
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | null | $Types.Skip
    notIn?: number[] | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableFilter<$PrismaModel> | number | null | $Types.Skip
  }

  export type StaffListRelationFilter = {
    every?: StaffWhereInput | $Types.Skip
    some?: StaffWhereInput | $Types.Skip
    none?: StaffWhereInput | $Types.Skip
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput | $Types.Skip
    some?: AppointmentWhereInput | $Types.Skip
    none?: AppointmentWhereInput | $Types.Skip
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder | $Types.Skip
  }

  export type StaffOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type SpecialtyCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    avgVisitTime?: SortOrder | $Types.Skip
  }

  export type SpecialtyAvgOrderByAggregateInput = {
    avgVisitTime?: SortOrder | $Types.Skip
  }

  export type SpecialtyMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    avgVisitTime?: SortOrder | $Types.Skip
  }

  export type SpecialtyMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    avgVisitTime?: SortOrder | $Types.Skip
  }

  export type SpecialtySumOrderByAggregateInput = {
    avgVisitTime?: SortOrder | $Types.Skip
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | $Types.Skip
    notIn?: string[] | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringFilter<$PrismaModel> | $Types.Skip
  }

  export type EnumFieldWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Field | EnumFieldFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Field[] | $Types.Skip
    notIn?: $Enums.Field[] | $Types.Skip
    not?: NestedEnumFieldWithAggregatesFilter<$PrismaModel> | $Enums.Field | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumFieldFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumFieldFilter<$PrismaModel> | $Types.Skip
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | null | $Types.Skip
    notIn?: number[] | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatNullableFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Gender[] | $Types.Skip
    notIn?: $Enums.Gender[] | $Types.Skip
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender | $Types.Skip
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | null | $Types.Skip
    notIn?: string[] | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringNullableFilter<$PrismaModel> | string | null | $Types.Skip
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Role[] | $Types.Skip
    notIn?: $Enums.Role[] | $Types.Skip
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role | $Types.Skip
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: Date[] | string[] | null | $Types.Skip
    notIn?: Date[] | string[] | null | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null | $Types.Skip
  }

  export type SpecialtyNullableScalarRelationFilter = {
    is?: SpecialtyWhereInput | null | $Types.Skip
    isNot?: SpecialtyWhereInput | null | $Types.Skip
  }

  export type StaffLogListRelationFilter = {
    every?: StaffLogWhereInput | $Types.Skip
    some?: StaffLogWhereInput | $Types.Skip
    none?: StaffLogWhereInput | $Types.Skip
  }

  export type StaffLogOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    lastName?: SortOrder | $Types.Skip
    personnelId?: SortOrder | $Types.Skip
    personnelEmail?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    gender?: SortOrder | $Types.Skip
    phoneNumber?: SortOrder | $Types.Skip
    avatarUrl?: SortOrder | $Types.Skip
    avatarPublicId?: SortOrder | $Types.Skip
    workingDays?: SortOrder | $Types.Skip
    workingHours?: SortOrder | $Types.Skip
    specialtyId?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    lastName?: SortOrder | $Types.Skip
    personnelId?: SortOrder | $Types.Skip
    personnelEmail?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    gender?: SortOrder | $Types.Skip
    phoneNumber?: SortOrder | $Types.Skip
    avatarUrl?: SortOrder | $Types.Skip
    avatarPublicId?: SortOrder | $Types.Skip
    workingDays?: SortOrder | $Types.Skip
    workingHours?: SortOrder | $Types.Skip
    specialtyId?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    lastName?: SortOrder | $Types.Skip
    personnelId?: SortOrder | $Types.Skip
    personnelEmail?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    gender?: SortOrder | $Types.Skip
    phoneNumber?: SortOrder | $Types.Skip
    avatarUrl?: SortOrder | $Types.Skip
    avatarPublicId?: SortOrder | $Types.Skip
    workingDays?: SortOrder | $Types.Skip
    workingHours?: SortOrder | $Types.Skip
    specialtyId?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Gender[] | $Types.Skip
    notIn?: $Enums.Gender[] | $Types.Skip
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumGenderFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumGenderFilter<$PrismaModel> | $Types.Skip
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | null | $Types.Skip
    notIn?: string[] | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Role[] | $Types.Skip
    notIn?: $Enums.Role[] | $Types.Skip
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumRoleFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumRoleFilter<$PrismaModel> | $Types.Skip
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: Date[] | string[] | null | $Types.Skip
    notIn?: Date[] | string[] | null | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type UserLogListRelationFilter = {
    every?: UserLogWhereInput | $Types.Skip
    some?: UserLogWhereInput | $Types.Skip
    none?: UserLogWhereInput | $Types.Skip
  }

  export type UserLogOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    lastName?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    gender?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    phoneNumber?: SortOrder | $Types.Skip
    avatarUrl?: SortOrder | $Types.Skip
    avatarPublicId?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    lastName?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    gender?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    phoneNumber?: SortOrder | $Types.Skip
    avatarUrl?: SortOrder | $Types.Skip
    avatarPublicId?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    lastName?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    gender?: SortOrder | $Types.Skip
    location?: SortOrder | $Types.Skip
    phoneNumber?: SortOrder | $Types.Skip
    avatarUrl?: SortOrder | $Types.Skip
    avatarPublicId?: SortOrder | $Types.Skip
    role?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolFilter<$PrismaModel> | boolean | $Types.Skip
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null | $Types.Skip
    isNot?: UserWhereInput | null | $Types.Skip
  }

  export type SpecialtyScalarRelationFilter = {
    is?: SpecialtyWhereInput | $Types.Skip
    isNot?: SpecialtyWhereInput | $Types.Skip
  }

  export type StaffScalarRelationFilter = {
    is?: StaffWhereInput | $Types.Skip
    isNot?: StaffWhereInput | $Types.Skip
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    patientId?: SortOrder | $Types.Skip
    reasonId?: SortOrder | $Types.Skip
    doctorId?: SortOrder | $Types.Skip
    date?: SortOrder | $Types.Skip
    time?: SortOrder | $Types.Skip
    expired?: SortOrder | $Types.Skip
    reservedAt?: SortOrder | $Types.Skip
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    patientId?: SortOrder | $Types.Skip
    reasonId?: SortOrder | $Types.Skip
    doctorId?: SortOrder | $Types.Skip
    date?: SortOrder | $Types.Skip
    time?: SortOrder | $Types.Skip
    expired?: SortOrder | $Types.Skip
    reservedAt?: SortOrder | $Types.Skip
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    patientId?: SortOrder | $Types.Skip
    reasonId?: SortOrder | $Types.Skip
    doctorId?: SortOrder | $Types.Skip
    date?: SortOrder | $Types.Skip
    time?: SortOrder | $Types.Skip
    expired?: SortOrder | $Types.Skip
    reservedAt?: SortOrder | $Types.Skip
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedBoolFilter<$PrismaModel> | $Types.Skip
    _max?: NestedBoolFilter<$PrismaModel> | $Types.Skip
  }

  export type StaffLogCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    ownerId?: SortOrder | $Types.Skip
    senderId?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    message?: SortOrder | $Types.Skip
    isRead?: SortOrder | $Types.Skip
    generatedAt?: SortOrder | $Types.Skip
  }

  export type StaffLogMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    ownerId?: SortOrder | $Types.Skip
    senderId?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    message?: SortOrder | $Types.Skip
    isRead?: SortOrder | $Types.Skip
    generatedAt?: SortOrder | $Types.Skip
  }

  export type StaffLogMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    ownerId?: SortOrder | $Types.Skip
    senderId?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    message?: SortOrder | $Types.Skip
    isRead?: SortOrder | $Types.Skip
    generatedAt?: SortOrder | $Types.Skip
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput | $Types.Skip
    isNot?: UserWhereInput | $Types.Skip
  }

  export type UserLogCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    ownerId?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    message?: SortOrder | $Types.Skip
    isRead?: SortOrder | $Types.Skip
    generatedAt?: SortOrder | $Types.Skip
  }

  export type UserLogMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    ownerId?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    message?: SortOrder | $Types.Skip
    isRead?: SortOrder | $Types.Skip
    generatedAt?: SortOrder | $Types.Skip
  }

  export type UserLogMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    ownerId?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    message?: SortOrder | $Types.Skip
    isRead?: SortOrder | $Types.Skip
    generatedAt?: SortOrder | $Types.Skip
  }

  export type StaffCreateNestedManyWithoutSpecialtyInput = {
    create?: XOR<StaffCreateWithoutSpecialtyInput, StaffUncheckedCreateWithoutSpecialtyInput> | StaffCreateWithoutSpecialtyInput[] | StaffUncheckedCreateWithoutSpecialtyInput[] | $Types.Skip
    connectOrCreate?: StaffCreateOrConnectWithoutSpecialtyInput | StaffCreateOrConnectWithoutSpecialtyInput[] | $Types.Skip
    createMany?: StaffCreateManySpecialtyInputEnvelope | $Types.Skip
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[] | $Types.Skip
  }

  export type AppointmentCreateNestedManyWithoutReasonInput = {
    create?: XOR<AppointmentCreateWithoutReasonInput, AppointmentUncheckedCreateWithoutReasonInput> | AppointmentCreateWithoutReasonInput[] | AppointmentUncheckedCreateWithoutReasonInput[] | $Types.Skip
    connectOrCreate?: AppointmentCreateOrConnectWithoutReasonInput | AppointmentCreateOrConnectWithoutReasonInput[] | $Types.Skip
    createMany?: AppointmentCreateManyReasonInputEnvelope | $Types.Skip
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
  }

  export type StaffUncheckedCreateNestedManyWithoutSpecialtyInput = {
    create?: XOR<StaffCreateWithoutSpecialtyInput, StaffUncheckedCreateWithoutSpecialtyInput> | StaffCreateWithoutSpecialtyInput[] | StaffUncheckedCreateWithoutSpecialtyInput[] | $Types.Skip
    connectOrCreate?: StaffCreateOrConnectWithoutSpecialtyInput | StaffCreateOrConnectWithoutSpecialtyInput[] | $Types.Skip
    createMany?: StaffCreateManySpecialtyInputEnvelope | $Types.Skip
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[] | $Types.Skip
  }

  export type AppointmentUncheckedCreateNestedManyWithoutReasonInput = {
    create?: XOR<AppointmentCreateWithoutReasonInput, AppointmentUncheckedCreateWithoutReasonInput> | AppointmentCreateWithoutReasonInput[] | AppointmentUncheckedCreateWithoutReasonInput[] | $Types.Skip
    connectOrCreate?: AppointmentCreateOrConnectWithoutReasonInput | AppointmentCreateOrConnectWithoutReasonInput[] | $Types.Skip
    createMany?: AppointmentCreateManyReasonInputEnvelope | $Types.Skip
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string | $Types.Skip
  }

  export type EnumFieldFieldUpdateOperationsInput = {
    set?: $Enums.Field | $Types.Skip
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null | $Types.Skip
    increment?: number | $Types.Skip
    decrement?: number | $Types.Skip
    multiply?: number | $Types.Skip
    divide?: number | $Types.Skip
  }

  export type StaffUpdateManyWithoutSpecialtyNestedInput = {
    create?: XOR<StaffCreateWithoutSpecialtyInput, StaffUncheckedCreateWithoutSpecialtyInput> | StaffCreateWithoutSpecialtyInput[] | StaffUncheckedCreateWithoutSpecialtyInput[] | $Types.Skip
    connectOrCreate?: StaffCreateOrConnectWithoutSpecialtyInput | StaffCreateOrConnectWithoutSpecialtyInput[] | $Types.Skip
    upsert?: StaffUpsertWithWhereUniqueWithoutSpecialtyInput | StaffUpsertWithWhereUniqueWithoutSpecialtyInput[] | $Types.Skip
    createMany?: StaffCreateManySpecialtyInputEnvelope | $Types.Skip
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[] | $Types.Skip
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[] | $Types.Skip
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[] | $Types.Skip
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[] | $Types.Skip
    update?: StaffUpdateWithWhereUniqueWithoutSpecialtyInput | StaffUpdateWithWhereUniqueWithoutSpecialtyInput[] | $Types.Skip
    updateMany?: StaffUpdateManyWithWhereWithoutSpecialtyInput | StaffUpdateManyWithWhereWithoutSpecialtyInput[] | $Types.Skip
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[] | $Types.Skip
  }

  export type AppointmentUpdateManyWithoutReasonNestedInput = {
    create?: XOR<AppointmentCreateWithoutReasonInput, AppointmentUncheckedCreateWithoutReasonInput> | AppointmentCreateWithoutReasonInput[] | AppointmentUncheckedCreateWithoutReasonInput[] | $Types.Skip
    connectOrCreate?: AppointmentCreateOrConnectWithoutReasonInput | AppointmentCreateOrConnectWithoutReasonInput[] | $Types.Skip
    upsert?: AppointmentUpsertWithWhereUniqueWithoutReasonInput | AppointmentUpsertWithWhereUniqueWithoutReasonInput[] | $Types.Skip
    createMany?: AppointmentCreateManyReasonInputEnvelope | $Types.Skip
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    update?: AppointmentUpdateWithWhereUniqueWithoutReasonInput | AppointmentUpdateWithWhereUniqueWithoutReasonInput[] | $Types.Skip
    updateMany?: AppointmentUpdateManyWithWhereWithoutReasonInput | AppointmentUpdateManyWithWhereWithoutReasonInput[] | $Types.Skip
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[] | $Types.Skip
  }

  export type StaffUncheckedUpdateManyWithoutSpecialtyNestedInput = {
    create?: XOR<StaffCreateWithoutSpecialtyInput, StaffUncheckedCreateWithoutSpecialtyInput> | StaffCreateWithoutSpecialtyInput[] | StaffUncheckedCreateWithoutSpecialtyInput[] | $Types.Skip
    connectOrCreate?: StaffCreateOrConnectWithoutSpecialtyInput | StaffCreateOrConnectWithoutSpecialtyInput[] | $Types.Skip
    upsert?: StaffUpsertWithWhereUniqueWithoutSpecialtyInput | StaffUpsertWithWhereUniqueWithoutSpecialtyInput[] | $Types.Skip
    createMany?: StaffCreateManySpecialtyInputEnvelope | $Types.Skip
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[] | $Types.Skip
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[] | $Types.Skip
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[] | $Types.Skip
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[] | $Types.Skip
    update?: StaffUpdateWithWhereUniqueWithoutSpecialtyInput | StaffUpdateWithWhereUniqueWithoutSpecialtyInput[] | $Types.Skip
    updateMany?: StaffUpdateManyWithWhereWithoutSpecialtyInput | StaffUpdateManyWithWhereWithoutSpecialtyInput[] | $Types.Skip
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[] | $Types.Skip
  }

  export type AppointmentUncheckedUpdateManyWithoutReasonNestedInput = {
    create?: XOR<AppointmentCreateWithoutReasonInput, AppointmentUncheckedCreateWithoutReasonInput> | AppointmentCreateWithoutReasonInput[] | AppointmentUncheckedCreateWithoutReasonInput[] | $Types.Skip
    connectOrCreate?: AppointmentCreateOrConnectWithoutReasonInput | AppointmentCreateOrConnectWithoutReasonInput[] | $Types.Skip
    upsert?: AppointmentUpsertWithWhereUniqueWithoutReasonInput | AppointmentUpsertWithWhereUniqueWithoutReasonInput[] | $Types.Skip
    createMany?: AppointmentCreateManyReasonInputEnvelope | $Types.Skip
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    update?: AppointmentUpdateWithWhereUniqueWithoutReasonInput | AppointmentUpdateWithWhereUniqueWithoutReasonInput[] | $Types.Skip
    updateMany?: AppointmentUpdateManyWithWhereWithoutReasonInput | AppointmentUpdateManyWithWhereWithoutReasonInput[] | $Types.Skip
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[] | $Types.Skip
  }

  export type SpecialtyCreateNestedOneWithoutDoctorsInput = {
    create?: XOR<SpecialtyCreateWithoutDoctorsInput, SpecialtyUncheckedCreateWithoutDoctorsInput> | $Types.Skip
    connectOrCreate?: SpecialtyCreateOrConnectWithoutDoctorsInput | $Types.Skip
    connect?: SpecialtyWhereUniqueInput | $Types.Skip
  }

  export type AppointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[] | $Types.Skip
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[] | $Types.Skip
    createMany?: AppointmentCreateManyDoctorInputEnvelope | $Types.Skip
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
  }

  export type StaffLogCreateNestedManyWithoutOwnerInput = {
    create?: XOR<StaffLogCreateWithoutOwnerInput, StaffLogUncheckedCreateWithoutOwnerInput> | StaffLogCreateWithoutOwnerInput[] | StaffLogUncheckedCreateWithoutOwnerInput[] | $Types.Skip
    connectOrCreate?: StaffLogCreateOrConnectWithoutOwnerInput | StaffLogCreateOrConnectWithoutOwnerInput[] | $Types.Skip
    createMany?: StaffLogCreateManyOwnerInputEnvelope | $Types.Skip
    connect?: StaffLogWhereUniqueInput | StaffLogWhereUniqueInput[] | $Types.Skip
  }

  export type AppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[] | $Types.Skip
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[] | $Types.Skip
    createMany?: AppointmentCreateManyDoctorInputEnvelope | $Types.Skip
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
  }

  export type StaffLogUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<StaffLogCreateWithoutOwnerInput, StaffLogUncheckedCreateWithoutOwnerInput> | StaffLogCreateWithoutOwnerInput[] | StaffLogUncheckedCreateWithoutOwnerInput[] | $Types.Skip
    connectOrCreate?: StaffLogCreateOrConnectWithoutOwnerInput | StaffLogCreateOrConnectWithoutOwnerInput[] | $Types.Skip
    createMany?: StaffLogCreateManyOwnerInputEnvelope | $Types.Skip
    connect?: StaffLogWhereUniqueInput | StaffLogWhereUniqueInput[] | $Types.Skip
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | $Types.Skip
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null | $Types.Skip
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role | $Types.Skip
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null | $Types.Skip
  }

  export type SpecialtyUpdateOneWithoutDoctorsNestedInput = {
    create?: XOR<SpecialtyCreateWithoutDoctorsInput, SpecialtyUncheckedCreateWithoutDoctorsInput> | $Types.Skip
    connectOrCreate?: SpecialtyCreateOrConnectWithoutDoctorsInput | $Types.Skip
    upsert?: SpecialtyUpsertWithoutDoctorsInput | $Types.Skip
    disconnect?: SpecialtyWhereInput | boolean | $Types.Skip
    delete?: SpecialtyWhereInput | boolean | $Types.Skip
    connect?: SpecialtyWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<SpecialtyUpdateToOneWithWhereWithoutDoctorsInput, SpecialtyUpdateWithoutDoctorsInput>, SpecialtyUncheckedUpdateWithoutDoctorsInput> | $Types.Skip
  }

  export type AppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[] | $Types.Skip
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[] | $Types.Skip
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[] | $Types.Skip
    createMany?: AppointmentCreateManyDoctorInputEnvelope | $Types.Skip
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[] | $Types.Skip
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[] | $Types.Skip
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[] | $Types.Skip
  }

  export type StaffLogUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<StaffLogCreateWithoutOwnerInput, StaffLogUncheckedCreateWithoutOwnerInput> | StaffLogCreateWithoutOwnerInput[] | StaffLogUncheckedCreateWithoutOwnerInput[] | $Types.Skip
    connectOrCreate?: StaffLogCreateOrConnectWithoutOwnerInput | StaffLogCreateOrConnectWithoutOwnerInput[] | $Types.Skip
    upsert?: StaffLogUpsertWithWhereUniqueWithoutOwnerInput | StaffLogUpsertWithWhereUniqueWithoutOwnerInput[] | $Types.Skip
    createMany?: StaffLogCreateManyOwnerInputEnvelope | $Types.Skip
    set?: StaffLogWhereUniqueInput | StaffLogWhereUniqueInput[] | $Types.Skip
    disconnect?: StaffLogWhereUniqueInput | StaffLogWhereUniqueInput[] | $Types.Skip
    delete?: StaffLogWhereUniqueInput | StaffLogWhereUniqueInput[] | $Types.Skip
    connect?: StaffLogWhereUniqueInput | StaffLogWhereUniqueInput[] | $Types.Skip
    update?: StaffLogUpdateWithWhereUniqueWithoutOwnerInput | StaffLogUpdateWithWhereUniqueWithoutOwnerInput[] | $Types.Skip
    updateMany?: StaffLogUpdateManyWithWhereWithoutOwnerInput | StaffLogUpdateManyWithWhereWithoutOwnerInput[] | $Types.Skip
    deleteMany?: StaffLogScalarWhereInput | StaffLogScalarWhereInput[] | $Types.Skip
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[] | $Types.Skip
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[] | $Types.Skip
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[] | $Types.Skip
    createMany?: AppointmentCreateManyDoctorInputEnvelope | $Types.Skip
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[] | $Types.Skip
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[] | $Types.Skip
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[] | $Types.Skip
  }

  export type StaffLogUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<StaffLogCreateWithoutOwnerInput, StaffLogUncheckedCreateWithoutOwnerInput> | StaffLogCreateWithoutOwnerInput[] | StaffLogUncheckedCreateWithoutOwnerInput[] | $Types.Skip
    connectOrCreate?: StaffLogCreateOrConnectWithoutOwnerInput | StaffLogCreateOrConnectWithoutOwnerInput[] | $Types.Skip
    upsert?: StaffLogUpsertWithWhereUniqueWithoutOwnerInput | StaffLogUpsertWithWhereUniqueWithoutOwnerInput[] | $Types.Skip
    createMany?: StaffLogCreateManyOwnerInputEnvelope | $Types.Skip
    set?: StaffLogWhereUniqueInput | StaffLogWhereUniqueInput[] | $Types.Skip
    disconnect?: StaffLogWhereUniqueInput | StaffLogWhereUniqueInput[] | $Types.Skip
    delete?: StaffLogWhereUniqueInput | StaffLogWhereUniqueInput[] | $Types.Skip
    connect?: StaffLogWhereUniqueInput | StaffLogWhereUniqueInput[] | $Types.Skip
    update?: StaffLogUpdateWithWhereUniqueWithoutOwnerInput | StaffLogUpdateWithWhereUniqueWithoutOwnerInput[] | $Types.Skip
    updateMany?: StaffLogUpdateManyWithWhereWithoutOwnerInput | StaffLogUpdateManyWithWhereWithoutOwnerInput[] | $Types.Skip
    deleteMany?: StaffLogScalarWhereInput | StaffLogScalarWhereInput[] | $Types.Skip
  }

  export type AppointmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[] | $Types.Skip
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[] | $Types.Skip
    createMany?: AppointmentCreateManyPatientInputEnvelope | $Types.Skip
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
  }

  export type UserLogCreateNestedManyWithoutOwnerInput = {
    create?: XOR<UserLogCreateWithoutOwnerInput, UserLogUncheckedCreateWithoutOwnerInput> | UserLogCreateWithoutOwnerInput[] | UserLogUncheckedCreateWithoutOwnerInput[] | $Types.Skip
    connectOrCreate?: UserLogCreateOrConnectWithoutOwnerInput | UserLogCreateOrConnectWithoutOwnerInput[] | $Types.Skip
    createMany?: UserLogCreateManyOwnerInputEnvelope | $Types.Skip
    connect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[] | $Types.Skip
  }

  export type StaffLogCreateNestedManyWithoutSenderInput = {
    create?: XOR<StaffLogCreateWithoutSenderInput, StaffLogUncheckedCreateWithoutSenderInput> | StaffLogCreateWithoutSenderInput[] | StaffLogUncheckedCreateWithoutSenderInput[] | $Types.Skip
    connectOrCreate?: StaffLogCreateOrConnectWithoutSenderInput | StaffLogCreateOrConnectWithoutSenderInput[] | $Types.Skip
    createMany?: StaffLogCreateManySenderInputEnvelope | $Types.Skip
    connect?: StaffLogWhereUniqueInput | StaffLogWhereUniqueInput[] | $Types.Skip
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[] | $Types.Skip
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[] | $Types.Skip
    createMany?: AppointmentCreateManyPatientInputEnvelope | $Types.Skip
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
  }

  export type UserLogUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<UserLogCreateWithoutOwnerInput, UserLogUncheckedCreateWithoutOwnerInput> | UserLogCreateWithoutOwnerInput[] | UserLogUncheckedCreateWithoutOwnerInput[] | $Types.Skip
    connectOrCreate?: UserLogCreateOrConnectWithoutOwnerInput | UserLogCreateOrConnectWithoutOwnerInput[] | $Types.Skip
    createMany?: UserLogCreateManyOwnerInputEnvelope | $Types.Skip
    connect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[] | $Types.Skip
  }

  export type StaffLogUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<StaffLogCreateWithoutSenderInput, StaffLogUncheckedCreateWithoutSenderInput> | StaffLogCreateWithoutSenderInput[] | StaffLogUncheckedCreateWithoutSenderInput[] | $Types.Skip
    connectOrCreate?: StaffLogCreateOrConnectWithoutSenderInput | StaffLogCreateOrConnectWithoutSenderInput[] | $Types.Skip
    createMany?: StaffLogCreateManySenderInputEnvelope | $Types.Skip
    connect?: StaffLogWhereUniqueInput | StaffLogWhereUniqueInput[] | $Types.Skip
  }

  export type AppointmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[] | $Types.Skip
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[] | $Types.Skip
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[] | $Types.Skip
    createMany?: AppointmentCreateManyPatientInputEnvelope | $Types.Skip
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[] | $Types.Skip
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[] | $Types.Skip
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[] | $Types.Skip
  }

  export type UserLogUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<UserLogCreateWithoutOwnerInput, UserLogUncheckedCreateWithoutOwnerInput> | UserLogCreateWithoutOwnerInput[] | UserLogUncheckedCreateWithoutOwnerInput[] | $Types.Skip
    connectOrCreate?: UserLogCreateOrConnectWithoutOwnerInput | UserLogCreateOrConnectWithoutOwnerInput[] | $Types.Skip
    upsert?: UserLogUpsertWithWhereUniqueWithoutOwnerInput | UserLogUpsertWithWhereUniqueWithoutOwnerInput[] | $Types.Skip
    createMany?: UserLogCreateManyOwnerInputEnvelope | $Types.Skip
    set?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[] | $Types.Skip
    disconnect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[] | $Types.Skip
    delete?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[] | $Types.Skip
    connect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[] | $Types.Skip
    update?: UserLogUpdateWithWhereUniqueWithoutOwnerInput | UserLogUpdateWithWhereUniqueWithoutOwnerInput[] | $Types.Skip
    updateMany?: UserLogUpdateManyWithWhereWithoutOwnerInput | UserLogUpdateManyWithWhereWithoutOwnerInput[] | $Types.Skip
    deleteMany?: UserLogScalarWhereInput | UserLogScalarWhereInput[] | $Types.Skip
  }

  export type StaffLogUpdateManyWithoutSenderNestedInput = {
    create?: XOR<StaffLogCreateWithoutSenderInput, StaffLogUncheckedCreateWithoutSenderInput> | StaffLogCreateWithoutSenderInput[] | StaffLogUncheckedCreateWithoutSenderInput[] | $Types.Skip
    connectOrCreate?: StaffLogCreateOrConnectWithoutSenderInput | StaffLogCreateOrConnectWithoutSenderInput[] | $Types.Skip
    upsert?: StaffLogUpsertWithWhereUniqueWithoutSenderInput | StaffLogUpsertWithWhereUniqueWithoutSenderInput[] | $Types.Skip
    createMany?: StaffLogCreateManySenderInputEnvelope | $Types.Skip
    set?: StaffLogWhereUniqueInput | StaffLogWhereUniqueInput[] | $Types.Skip
    disconnect?: StaffLogWhereUniqueInput | StaffLogWhereUniqueInput[] | $Types.Skip
    delete?: StaffLogWhereUniqueInput | StaffLogWhereUniqueInput[] | $Types.Skip
    connect?: StaffLogWhereUniqueInput | StaffLogWhereUniqueInput[] | $Types.Skip
    update?: StaffLogUpdateWithWhereUniqueWithoutSenderInput | StaffLogUpdateWithWhereUniqueWithoutSenderInput[] | $Types.Skip
    updateMany?: StaffLogUpdateManyWithWhereWithoutSenderInput | StaffLogUpdateManyWithWhereWithoutSenderInput[] | $Types.Skip
    deleteMany?: StaffLogScalarWhereInput | StaffLogScalarWhereInput[] | $Types.Skip
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[] | $Types.Skip
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[] | $Types.Skip
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[] | $Types.Skip
    createMany?: AppointmentCreateManyPatientInputEnvelope | $Types.Skip
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[] | $Types.Skip
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[] | $Types.Skip
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[] | $Types.Skip
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[] | $Types.Skip
  }

  export type UserLogUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<UserLogCreateWithoutOwnerInput, UserLogUncheckedCreateWithoutOwnerInput> | UserLogCreateWithoutOwnerInput[] | UserLogUncheckedCreateWithoutOwnerInput[] | $Types.Skip
    connectOrCreate?: UserLogCreateOrConnectWithoutOwnerInput | UserLogCreateOrConnectWithoutOwnerInput[] | $Types.Skip
    upsert?: UserLogUpsertWithWhereUniqueWithoutOwnerInput | UserLogUpsertWithWhereUniqueWithoutOwnerInput[] | $Types.Skip
    createMany?: UserLogCreateManyOwnerInputEnvelope | $Types.Skip
    set?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[] | $Types.Skip
    disconnect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[] | $Types.Skip
    delete?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[] | $Types.Skip
    connect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[] | $Types.Skip
    update?: UserLogUpdateWithWhereUniqueWithoutOwnerInput | UserLogUpdateWithWhereUniqueWithoutOwnerInput[] | $Types.Skip
    updateMany?: UserLogUpdateManyWithWhereWithoutOwnerInput | UserLogUpdateManyWithWhereWithoutOwnerInput[] | $Types.Skip
    deleteMany?: UserLogScalarWhereInput | UserLogScalarWhereInput[] | $Types.Skip
  }

  export type StaffLogUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<StaffLogCreateWithoutSenderInput, StaffLogUncheckedCreateWithoutSenderInput> | StaffLogCreateWithoutSenderInput[] | StaffLogUncheckedCreateWithoutSenderInput[] | $Types.Skip
    connectOrCreate?: StaffLogCreateOrConnectWithoutSenderInput | StaffLogCreateOrConnectWithoutSenderInput[] | $Types.Skip
    upsert?: StaffLogUpsertWithWhereUniqueWithoutSenderInput | StaffLogUpsertWithWhereUniqueWithoutSenderInput[] | $Types.Skip
    createMany?: StaffLogCreateManySenderInputEnvelope | $Types.Skip
    set?: StaffLogWhereUniqueInput | StaffLogWhereUniqueInput[] | $Types.Skip
    disconnect?: StaffLogWhereUniqueInput | StaffLogWhereUniqueInput[] | $Types.Skip
    delete?: StaffLogWhereUniqueInput | StaffLogWhereUniqueInput[] | $Types.Skip
    connect?: StaffLogWhereUniqueInput | StaffLogWhereUniqueInput[] | $Types.Skip
    update?: StaffLogUpdateWithWhereUniqueWithoutSenderInput | StaffLogUpdateWithWhereUniqueWithoutSenderInput[] | $Types.Skip
    updateMany?: StaffLogUpdateManyWithWhereWithoutSenderInput | StaffLogUpdateManyWithWhereWithoutSenderInput[] | $Types.Skip
    deleteMany?: StaffLogScalarWhereInput | StaffLogScalarWhereInput[] | $Types.Skip
  }

  export type UserCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type SpecialtyCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<SpecialtyCreateWithoutAppointmentInput, SpecialtyUncheckedCreateWithoutAppointmentInput> | $Types.Skip
    connectOrCreate?: SpecialtyCreateOrConnectWithoutAppointmentInput | $Types.Skip
    connect?: SpecialtyWhereUniqueInput | $Types.Skip
  }

  export type StaffCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<StaffCreateWithoutAppointmentsInput, StaffUncheckedCreateWithoutAppointmentsInput> | $Types.Skip
    connectOrCreate?: StaffCreateOrConnectWithoutAppointmentsInput | $Types.Skip
    connect?: StaffWhereUniqueInput | $Types.Skip
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean | $Types.Skip
  }

  export type UserUpdateOneWithoutAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput | $Types.Skip
    upsert?: UserUpsertWithoutAppointmentsInput | $Types.Skip
    disconnect?: UserWhereInput | boolean | $Types.Skip
    delete?: UserWhereInput | boolean | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsInput, UserUpdateWithoutAppointmentsInput>, UserUncheckedUpdateWithoutAppointmentsInput> | $Types.Skip
  }

  export type SpecialtyUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<SpecialtyCreateWithoutAppointmentInput, SpecialtyUncheckedCreateWithoutAppointmentInput> | $Types.Skip
    connectOrCreate?: SpecialtyCreateOrConnectWithoutAppointmentInput | $Types.Skip
    upsert?: SpecialtyUpsertWithoutAppointmentInput | $Types.Skip
    connect?: SpecialtyWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<SpecialtyUpdateToOneWithWhereWithoutAppointmentInput, SpecialtyUpdateWithoutAppointmentInput>, SpecialtyUncheckedUpdateWithoutAppointmentInput> | $Types.Skip
  }

  export type StaffUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<StaffCreateWithoutAppointmentsInput, StaffUncheckedCreateWithoutAppointmentsInput> | $Types.Skip
    connectOrCreate?: StaffCreateOrConnectWithoutAppointmentsInput | $Types.Skip
    upsert?: StaffUpsertWithoutAppointmentsInput | $Types.Skip
    connect?: StaffWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutAppointmentsInput, StaffUpdateWithoutAppointmentsInput>, StaffUncheckedUpdateWithoutAppointmentsInput> | $Types.Skip
  }

  export type StaffCreateNestedOneWithoutMessagesInput = {
    create?: XOR<StaffCreateWithoutMessagesInput, StaffUncheckedCreateWithoutMessagesInput> | $Types.Skip
    connectOrCreate?: StaffCreateOrConnectWithoutMessagesInput | $Types.Skip
    connect?: StaffWhereUniqueInput | $Types.Skip
  }

  export type UserCreateNestedOneWithoutStaffLogInput = {
    create?: XOR<UserCreateWithoutStaffLogInput, UserUncheckedCreateWithoutStaffLogInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutStaffLogInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type StaffUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<StaffCreateWithoutMessagesInput, StaffUncheckedCreateWithoutMessagesInput> | $Types.Skip
    connectOrCreate?: StaffCreateOrConnectWithoutMessagesInput | $Types.Skip
    upsert?: StaffUpsertWithoutMessagesInput | $Types.Skip
    connect?: StaffWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutMessagesInput, StaffUpdateWithoutMessagesInput>, StaffUncheckedUpdateWithoutMessagesInput> | $Types.Skip
  }

  export type UserUpdateOneWithoutStaffLogNestedInput = {
    create?: XOR<UserCreateWithoutStaffLogInput, UserUncheckedCreateWithoutStaffLogInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutStaffLogInput | $Types.Skip
    upsert?: UserUpsertWithoutStaffLogInput | $Types.Skip
    disconnect?: UserWhereInput | boolean | $Types.Skip
    delete?: UserWhereInput | boolean | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStaffLogInput, UserUpdateWithoutStaffLogInput>, UserUncheckedUpdateWithoutStaffLogInput> | $Types.Skip
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput | $Types.Skip
    upsert?: UserUpsertWithoutMessagesInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput> | $Types.Skip
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | $Types.Skip
    notIn?: string[] | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringFilter<$PrismaModel> | string | $Types.Skip
  }

  export type NestedEnumFieldFilter<$PrismaModel = never> = {
    equals?: $Enums.Field | EnumFieldFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Field[] | $Types.Skip
    notIn?: $Enums.Field[] | $Types.Skip
    not?: NestedEnumFieldFilter<$PrismaModel> | $Enums.Field | $Types.Skip
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | null | $Types.Skip
    notIn?: number[] | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableFilter<$PrismaModel> | number | null | $Types.Skip
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | $Types.Skip
    notIn?: string[] | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | $Types.Skip
    notIn?: number[] | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntFilter<$PrismaModel> | number | $Types.Skip
  }

  export type NestedEnumFieldWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Field | EnumFieldFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Field[] | $Types.Skip
    notIn?: $Enums.Field[] | $Types.Skip
    not?: NestedEnumFieldWithAggregatesFilter<$PrismaModel> | $Enums.Field | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumFieldFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumFieldFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | null | $Types.Skip
    notIn?: number[] | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatNullableFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | null | $Types.Skip
    notIn?: number[] | null | $Types.Skip
    lt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null | $Types.Skip
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Gender[] | $Types.Skip
    notIn?: $Enums.Gender[] | $Types.Skip
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender | $Types.Skip
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | null | $Types.Skip
    notIn?: string[] | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringNullableFilter<$PrismaModel> | string | null | $Types.Skip
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Role[] | $Types.Skip
    notIn?: $Enums.Role[] | $Types.Skip
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role | $Types.Skip
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: Date[] | string[] | null | $Types.Skip
    notIn?: Date[] | string[] | null | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null | $Types.Skip
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Gender[] | $Types.Skip
    notIn?: $Enums.Gender[] | $Types.Skip
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumGenderFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumGenderFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | null | $Types.Skip
    notIn?: string[] | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Role[] | $Types.Skip
    notIn?: $Enums.Role[] | $Types.Skip
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumRoleFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumRoleFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: Date[] | string[] | null | $Types.Skip
    notIn?: Date[] | string[] | null | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolFilter<$PrismaModel> | boolean | $Types.Skip
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedBoolFilter<$PrismaModel> | $Types.Skip
    _max?: NestedBoolFilter<$PrismaModel> | $Types.Skip
  }

  export type StaffCreateWithoutSpecialtyInput = {
    id?: string | $Types.Skip
    name: string
    lastName: string
    personnelId: string
    personnelEmail: string
    password: string
    gender: $Enums.Gender
    phoneNumber?: string | null | $Types.Skip
    avatarUrl?: string | null | $Types.Skip
    avatarPublicId?: string | null | $Types.Skip
    workingDays: string
    workingHours: string
    role?: $Enums.Role | $Types.Skip
    createdAt?: Date | string | null | $Types.Skip
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput | $Types.Skip
    messages?: StaffLogCreateNestedManyWithoutOwnerInput | $Types.Skip
  }

  export type StaffUncheckedCreateWithoutSpecialtyInput = {
    id?: string | $Types.Skip
    name: string
    lastName: string
    personnelId: string
    personnelEmail: string
    password: string
    gender: $Enums.Gender
    phoneNumber?: string | null | $Types.Skip
    avatarUrl?: string | null | $Types.Skip
    avatarPublicId?: string | null | $Types.Skip
    workingDays: string
    workingHours: string
    role?: $Enums.Role | $Types.Skip
    createdAt?: Date | string | null | $Types.Skip
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput | $Types.Skip
    messages?: StaffLogUncheckedCreateNestedManyWithoutOwnerInput | $Types.Skip
  }

  export type StaffCreateOrConnectWithoutSpecialtyInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutSpecialtyInput, StaffUncheckedCreateWithoutSpecialtyInput>
  }

  export type StaffCreateManySpecialtyInputEnvelope = {
    data: StaffCreateManySpecialtyInput | StaffCreateManySpecialtyInput[]
  }

  export type AppointmentCreateWithoutReasonInput = {
    id?: string | $Types.Skip
    date?: Date | string | null | $Types.Skip
    time: string
    expired?: boolean | $Types.Skip
    reservedAt?: Date | string | null | $Types.Skip
    patient?: UserCreateNestedOneWithoutAppointmentsInput | $Types.Skip
    doctor: StaffCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutReasonInput = {
    id?: string | $Types.Skip
    patientId?: string | null | $Types.Skip
    doctorId: string
    date?: Date | string | null | $Types.Skip
    time: string
    expired?: boolean | $Types.Skip
    reservedAt?: Date | string | null | $Types.Skip
  }

  export type AppointmentCreateOrConnectWithoutReasonInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutReasonInput, AppointmentUncheckedCreateWithoutReasonInput>
  }

  export type AppointmentCreateManyReasonInputEnvelope = {
    data: AppointmentCreateManyReasonInput | AppointmentCreateManyReasonInput[]
  }

  export type StaffUpsertWithWhereUniqueWithoutSpecialtyInput = {
    where: StaffWhereUniqueInput
    update: XOR<StaffUpdateWithoutSpecialtyInput, StaffUncheckedUpdateWithoutSpecialtyInput>
    create: XOR<StaffCreateWithoutSpecialtyInput, StaffUncheckedCreateWithoutSpecialtyInput>
  }

  export type StaffUpdateWithWhereUniqueWithoutSpecialtyInput = {
    where: StaffWhereUniqueInput
    data: XOR<StaffUpdateWithoutSpecialtyInput, StaffUncheckedUpdateWithoutSpecialtyInput>
  }

  export type StaffUpdateManyWithWhereWithoutSpecialtyInput = {
    where: StaffScalarWhereInput
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyWithoutSpecialtyInput>
  }

  export type StaffScalarWhereInput = {
    AND?: StaffScalarWhereInput | StaffScalarWhereInput[] | $Types.Skip
    OR?: StaffScalarWhereInput[] | $Types.Skip
    NOT?: StaffScalarWhereInput | StaffScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"Staff"> | string | $Types.Skip
    name?: StringFilter<"Staff"> | string | $Types.Skip
    lastName?: StringFilter<"Staff"> | string | $Types.Skip
    personnelId?: StringFilter<"Staff"> | string | $Types.Skip
    personnelEmail?: StringFilter<"Staff"> | string | $Types.Skip
    password?: StringFilter<"Staff"> | string | $Types.Skip
    gender?: EnumGenderFilter<"Staff"> | $Enums.Gender | $Types.Skip
    phoneNumber?: StringNullableFilter<"Staff"> | string | null | $Types.Skip
    avatarUrl?: StringNullableFilter<"Staff"> | string | null | $Types.Skip
    avatarPublicId?: StringNullableFilter<"Staff"> | string | null | $Types.Skip
    workingDays?: StringFilter<"Staff"> | string | $Types.Skip
    workingHours?: StringFilter<"Staff"> | string | $Types.Skip
    specialtyId?: StringNullableFilter<"Staff"> | string | null | $Types.Skip
    role?: EnumRoleFilter<"Staff"> | $Enums.Role | $Types.Skip
    createdAt?: DateTimeNullableFilter<"Staff"> | Date | string | null | $Types.Skip
  }

  export type AppointmentUpsertWithWhereUniqueWithoutReasonInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutReasonInput, AppointmentUncheckedUpdateWithoutReasonInput>
    create: XOR<AppointmentCreateWithoutReasonInput, AppointmentUncheckedCreateWithoutReasonInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutReasonInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutReasonInput, AppointmentUncheckedUpdateWithoutReasonInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutReasonInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutReasonInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[] | $Types.Skip
    OR?: AppointmentScalarWhereInput[] | $Types.Skip
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"Appointment"> | string | $Types.Skip
    patientId?: StringNullableFilter<"Appointment"> | string | null | $Types.Skip
    reasonId?: StringFilter<"Appointment"> | string | $Types.Skip
    doctorId?: StringFilter<"Appointment"> | string | $Types.Skip
    date?: DateTimeNullableFilter<"Appointment"> | Date | string | null | $Types.Skip
    time?: StringFilter<"Appointment"> | string | $Types.Skip
    expired?: BoolFilter<"Appointment"> | boolean | $Types.Skip
    reservedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null | $Types.Skip
  }

  export type SpecialtyCreateWithoutDoctorsInput = {
    id?: string | $Types.Skip
    title: $Enums.Field
    avgVisitTime?: number | null | $Types.Skip
    Appointment?: AppointmentCreateNestedManyWithoutReasonInput | $Types.Skip
  }

  export type SpecialtyUncheckedCreateWithoutDoctorsInput = {
    id?: string | $Types.Skip
    title: $Enums.Field
    avgVisitTime?: number | null | $Types.Skip
    Appointment?: AppointmentUncheckedCreateNestedManyWithoutReasonInput | $Types.Skip
  }

  export type SpecialtyCreateOrConnectWithoutDoctorsInput = {
    where: SpecialtyWhereUniqueInput
    create: XOR<SpecialtyCreateWithoutDoctorsInput, SpecialtyUncheckedCreateWithoutDoctorsInput>
  }

  export type AppointmentCreateWithoutDoctorInput = {
    id?: string | $Types.Skip
    date?: Date | string | null | $Types.Skip
    time: string
    expired?: boolean | $Types.Skip
    reservedAt?: Date | string | null | $Types.Skip
    patient?: UserCreateNestedOneWithoutAppointmentsInput | $Types.Skip
    reason: SpecialtyCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorInput = {
    id?: string | $Types.Skip
    patientId?: string | null | $Types.Skip
    reasonId: string
    date?: Date | string | null | $Types.Skip
    time: string
    expired?: boolean | $Types.Skip
    reservedAt?: Date | string | null | $Types.Skip
  }

  export type AppointmentCreateOrConnectWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentCreateManyDoctorInputEnvelope = {
    data: AppointmentCreateManyDoctorInput | AppointmentCreateManyDoctorInput[]
  }

  export type StaffLogCreateWithoutOwnerInput = {
    id?: string | $Types.Skip
    title?: string | null | $Types.Skip
    message: string
    isRead?: boolean | $Types.Skip
    generatedAt?: Date | string | null | $Types.Skip
    sender?: UserCreateNestedOneWithoutStaffLogInput | $Types.Skip
  }

  export type StaffLogUncheckedCreateWithoutOwnerInput = {
    id?: string | $Types.Skip
    senderId?: string | null | $Types.Skip
    title?: string | null | $Types.Skip
    message: string
    isRead?: boolean | $Types.Skip
    generatedAt?: Date | string | null | $Types.Skip
  }

  export type StaffLogCreateOrConnectWithoutOwnerInput = {
    where: StaffLogWhereUniqueInput
    create: XOR<StaffLogCreateWithoutOwnerInput, StaffLogUncheckedCreateWithoutOwnerInput>
  }

  export type StaffLogCreateManyOwnerInputEnvelope = {
    data: StaffLogCreateManyOwnerInput | StaffLogCreateManyOwnerInput[]
  }

  export type SpecialtyUpsertWithoutDoctorsInput = {
    update: XOR<SpecialtyUpdateWithoutDoctorsInput, SpecialtyUncheckedUpdateWithoutDoctorsInput>
    create: XOR<SpecialtyCreateWithoutDoctorsInput, SpecialtyUncheckedCreateWithoutDoctorsInput>
    where?: SpecialtyWhereInput | $Types.Skip
  }

  export type SpecialtyUpdateToOneWithWhereWithoutDoctorsInput = {
    where?: SpecialtyWhereInput | $Types.Skip
    data: XOR<SpecialtyUpdateWithoutDoctorsInput, SpecialtyUncheckedUpdateWithoutDoctorsInput>
  }

  export type SpecialtyUpdateWithoutDoctorsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: EnumFieldFieldUpdateOperationsInput | $Enums.Field | $Types.Skip
    avgVisitTime?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    Appointment?: AppointmentUpdateManyWithoutReasonNestedInput | $Types.Skip
  }

  export type SpecialtyUncheckedUpdateWithoutDoctorsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: EnumFieldFieldUpdateOperationsInput | $Enums.Field | $Types.Skip
    avgVisitTime?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    Appointment?: AppointmentUncheckedUpdateManyWithoutReasonNestedInput | $Types.Skip
  }

  export type AppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type StaffLogUpsertWithWhereUniqueWithoutOwnerInput = {
    where: StaffLogWhereUniqueInput
    update: XOR<StaffLogUpdateWithoutOwnerInput, StaffLogUncheckedUpdateWithoutOwnerInput>
    create: XOR<StaffLogCreateWithoutOwnerInput, StaffLogUncheckedCreateWithoutOwnerInput>
  }

  export type StaffLogUpdateWithWhereUniqueWithoutOwnerInput = {
    where: StaffLogWhereUniqueInput
    data: XOR<StaffLogUpdateWithoutOwnerInput, StaffLogUncheckedUpdateWithoutOwnerInput>
  }

  export type StaffLogUpdateManyWithWhereWithoutOwnerInput = {
    where: StaffLogScalarWhereInput
    data: XOR<StaffLogUpdateManyMutationInput, StaffLogUncheckedUpdateManyWithoutOwnerInput>
  }

  export type StaffLogScalarWhereInput = {
    AND?: StaffLogScalarWhereInput | StaffLogScalarWhereInput[] | $Types.Skip
    OR?: StaffLogScalarWhereInput[] | $Types.Skip
    NOT?: StaffLogScalarWhereInput | StaffLogScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"StaffLog"> | string | $Types.Skip
    ownerId?: StringFilter<"StaffLog"> | string | $Types.Skip
    senderId?: StringNullableFilter<"StaffLog"> | string | null | $Types.Skip
    title?: StringNullableFilter<"StaffLog"> | string | null | $Types.Skip
    message?: StringFilter<"StaffLog"> | string | $Types.Skip
    isRead?: BoolFilter<"StaffLog"> | boolean | $Types.Skip
    generatedAt?: DateTimeNullableFilter<"StaffLog"> | Date | string | null | $Types.Skip
  }

  export type AppointmentCreateWithoutPatientInput = {
    id?: string | $Types.Skip
    date?: Date | string | null | $Types.Skip
    time: string
    expired?: boolean | $Types.Skip
    reservedAt?: Date | string | null | $Types.Skip
    reason: SpecialtyCreateNestedOneWithoutAppointmentInput
    doctor: StaffCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutPatientInput = {
    id?: string | $Types.Skip
    reasonId: string
    doctorId: string
    date?: Date | string | null | $Types.Skip
    time: string
    expired?: boolean | $Types.Skip
    reservedAt?: Date | string | null | $Types.Skip
  }

  export type AppointmentCreateOrConnectWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentCreateManyPatientInputEnvelope = {
    data: AppointmentCreateManyPatientInput | AppointmentCreateManyPatientInput[]
  }

  export type UserLogCreateWithoutOwnerInput = {
    id?: string | $Types.Skip
    title?: string | null | $Types.Skip
    message: string
    isRead?: boolean | $Types.Skip
    generatedAt?: Date | string | null | $Types.Skip
  }

  export type UserLogUncheckedCreateWithoutOwnerInput = {
    id?: string | $Types.Skip
    title?: string | null | $Types.Skip
    message: string
    isRead?: boolean | $Types.Skip
    generatedAt?: Date | string | null | $Types.Skip
  }

  export type UserLogCreateOrConnectWithoutOwnerInput = {
    where: UserLogWhereUniqueInput
    create: XOR<UserLogCreateWithoutOwnerInput, UserLogUncheckedCreateWithoutOwnerInput>
  }

  export type UserLogCreateManyOwnerInputEnvelope = {
    data: UserLogCreateManyOwnerInput | UserLogCreateManyOwnerInput[]
  }

  export type StaffLogCreateWithoutSenderInput = {
    id?: string | $Types.Skip
    title?: string | null | $Types.Skip
    message: string
    isRead?: boolean | $Types.Skip
    generatedAt?: Date | string | null | $Types.Skip
    owner: StaffCreateNestedOneWithoutMessagesInput
  }

  export type StaffLogUncheckedCreateWithoutSenderInput = {
    id?: string | $Types.Skip
    ownerId: string
    title?: string | null | $Types.Skip
    message: string
    isRead?: boolean | $Types.Skip
    generatedAt?: Date | string | null | $Types.Skip
  }

  export type StaffLogCreateOrConnectWithoutSenderInput = {
    where: StaffLogWhereUniqueInput
    create: XOR<StaffLogCreateWithoutSenderInput, StaffLogUncheckedCreateWithoutSenderInput>
  }

  export type StaffLogCreateManySenderInputEnvelope = {
    data: StaffLogCreateManySenderInput | StaffLogCreateManySenderInput[]
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPatientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPatientInput>
  }

  export type UserLogUpsertWithWhereUniqueWithoutOwnerInput = {
    where: UserLogWhereUniqueInput
    update: XOR<UserLogUpdateWithoutOwnerInput, UserLogUncheckedUpdateWithoutOwnerInput>
    create: XOR<UserLogCreateWithoutOwnerInput, UserLogUncheckedCreateWithoutOwnerInput>
  }

  export type UserLogUpdateWithWhereUniqueWithoutOwnerInput = {
    where: UserLogWhereUniqueInput
    data: XOR<UserLogUpdateWithoutOwnerInput, UserLogUncheckedUpdateWithoutOwnerInput>
  }

  export type UserLogUpdateManyWithWhereWithoutOwnerInput = {
    where: UserLogScalarWhereInput
    data: XOR<UserLogUpdateManyMutationInput, UserLogUncheckedUpdateManyWithoutOwnerInput>
  }

  export type UserLogScalarWhereInput = {
    AND?: UserLogScalarWhereInput | UserLogScalarWhereInput[] | $Types.Skip
    OR?: UserLogScalarWhereInput[] | $Types.Skip
    NOT?: UserLogScalarWhereInput | UserLogScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"UserLog"> | string | $Types.Skip
    ownerId?: StringFilter<"UserLog"> | string | $Types.Skip
    title?: StringNullableFilter<"UserLog"> | string | null | $Types.Skip
    message?: StringFilter<"UserLog"> | string | $Types.Skip
    isRead?: BoolFilter<"UserLog"> | boolean | $Types.Skip
    generatedAt?: DateTimeNullableFilter<"UserLog"> | Date | string | null | $Types.Skip
  }

  export type StaffLogUpsertWithWhereUniqueWithoutSenderInput = {
    where: StaffLogWhereUniqueInput
    update: XOR<StaffLogUpdateWithoutSenderInput, StaffLogUncheckedUpdateWithoutSenderInput>
    create: XOR<StaffLogCreateWithoutSenderInput, StaffLogUncheckedCreateWithoutSenderInput>
  }

  export type StaffLogUpdateWithWhereUniqueWithoutSenderInput = {
    where: StaffLogWhereUniqueInput
    data: XOR<StaffLogUpdateWithoutSenderInput, StaffLogUncheckedUpdateWithoutSenderInput>
  }

  export type StaffLogUpdateManyWithWhereWithoutSenderInput = {
    where: StaffLogScalarWhereInput
    data: XOR<StaffLogUpdateManyMutationInput, StaffLogUncheckedUpdateManyWithoutSenderInput>
  }

  export type UserCreateWithoutAppointmentsInput = {
    id?: string | $Types.Skip
    name: string
    lastName: string
    email: string
    password: string
    gender: $Enums.Gender
    location: string
    phoneNumber?: string | null | $Types.Skip
    avatarUrl?: string | null | $Types.Skip
    avatarPublicId?: string | null | $Types.Skip
    role?: $Enums.Role | $Types.Skip
    createdAt?: Date | string | null | $Types.Skip
    messages?: UserLogCreateNestedManyWithoutOwnerInput | $Types.Skip
    StaffLog?: StaffLogCreateNestedManyWithoutSenderInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutAppointmentsInput = {
    id?: string | $Types.Skip
    name: string
    lastName: string
    email: string
    password: string
    gender: $Enums.Gender
    location: string
    phoneNumber?: string | null | $Types.Skip
    avatarUrl?: string | null | $Types.Skip
    avatarPublicId?: string | null | $Types.Skip
    role?: $Enums.Role | $Types.Skip
    createdAt?: Date | string | null | $Types.Skip
    messages?: UserLogUncheckedCreateNestedManyWithoutOwnerInput | $Types.Skip
    StaffLog?: StaffLogUncheckedCreateNestedManyWithoutSenderInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
  }

  export type SpecialtyCreateWithoutAppointmentInput = {
    id?: string | $Types.Skip
    title: $Enums.Field
    avgVisitTime?: number | null | $Types.Skip
    doctors?: StaffCreateNestedManyWithoutSpecialtyInput | $Types.Skip
  }

  export type SpecialtyUncheckedCreateWithoutAppointmentInput = {
    id?: string | $Types.Skip
    title: $Enums.Field
    avgVisitTime?: number | null | $Types.Skip
    doctors?: StaffUncheckedCreateNestedManyWithoutSpecialtyInput | $Types.Skip
  }

  export type SpecialtyCreateOrConnectWithoutAppointmentInput = {
    where: SpecialtyWhereUniqueInput
    create: XOR<SpecialtyCreateWithoutAppointmentInput, SpecialtyUncheckedCreateWithoutAppointmentInput>
  }

  export type StaffCreateWithoutAppointmentsInput = {
    id?: string | $Types.Skip
    name: string
    lastName: string
    personnelId: string
    personnelEmail: string
    password: string
    gender: $Enums.Gender
    phoneNumber?: string | null | $Types.Skip
    avatarUrl?: string | null | $Types.Skip
    avatarPublicId?: string | null | $Types.Skip
    workingDays: string
    workingHours: string
    role?: $Enums.Role | $Types.Skip
    createdAt?: Date | string | null | $Types.Skip
    specialty?: SpecialtyCreateNestedOneWithoutDoctorsInput | $Types.Skip
    messages?: StaffLogCreateNestedManyWithoutOwnerInput | $Types.Skip
  }

  export type StaffUncheckedCreateWithoutAppointmentsInput = {
    id?: string | $Types.Skip
    name: string
    lastName: string
    personnelId: string
    personnelEmail: string
    password: string
    gender: $Enums.Gender
    phoneNumber?: string | null | $Types.Skip
    avatarUrl?: string | null | $Types.Skip
    avatarPublicId?: string | null | $Types.Skip
    workingDays: string
    workingHours: string
    specialtyId?: string | null | $Types.Skip
    role?: $Enums.Role | $Types.Skip
    createdAt?: Date | string | null | $Types.Skip
    messages?: StaffLogUncheckedCreateNestedManyWithoutOwnerInput | $Types.Skip
  }

  export type StaffCreateOrConnectWithoutAppointmentsInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutAppointmentsInput, StaffUncheckedCreateWithoutAppointmentsInput>
  }

  export type UserUpsertWithoutAppointmentsInput = {
    update: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    messages?: UserLogUpdateManyWithoutOwnerNestedInput | $Types.Skip
    StaffLog?: StaffLogUpdateManyWithoutSenderNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    messages?: UserLogUncheckedUpdateManyWithoutOwnerNestedInput | $Types.Skip
    StaffLog?: StaffLogUncheckedUpdateManyWithoutSenderNestedInput | $Types.Skip
  }

  export type SpecialtyUpsertWithoutAppointmentInput = {
    update: XOR<SpecialtyUpdateWithoutAppointmentInput, SpecialtyUncheckedUpdateWithoutAppointmentInput>
    create: XOR<SpecialtyCreateWithoutAppointmentInput, SpecialtyUncheckedCreateWithoutAppointmentInput>
    where?: SpecialtyWhereInput | $Types.Skip
  }

  export type SpecialtyUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: SpecialtyWhereInput | $Types.Skip
    data: XOR<SpecialtyUpdateWithoutAppointmentInput, SpecialtyUncheckedUpdateWithoutAppointmentInput>
  }

  export type SpecialtyUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: EnumFieldFieldUpdateOperationsInput | $Enums.Field | $Types.Skip
    avgVisitTime?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    doctors?: StaffUpdateManyWithoutSpecialtyNestedInput | $Types.Skip
  }

  export type SpecialtyUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: EnumFieldFieldUpdateOperationsInput | $Enums.Field | $Types.Skip
    avgVisitTime?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    doctors?: StaffUncheckedUpdateManyWithoutSpecialtyNestedInput | $Types.Skip
  }

  export type StaffUpsertWithoutAppointmentsInput = {
    update: XOR<StaffUpdateWithoutAppointmentsInput, StaffUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<StaffCreateWithoutAppointmentsInput, StaffUncheckedCreateWithoutAppointmentsInput>
    where?: StaffWhereInput | $Types.Skip
  }

  export type StaffUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: StaffWhereInput | $Types.Skip
    data: XOR<StaffUpdateWithoutAppointmentsInput, StaffUncheckedUpdateWithoutAppointmentsInput>
  }

  export type StaffUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelEmail?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    workingDays?: StringFieldUpdateOperationsInput | string | $Types.Skip
    workingHours?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    specialty?: SpecialtyUpdateOneWithoutDoctorsNestedInput | $Types.Skip
    messages?: StaffLogUpdateManyWithoutOwnerNestedInput | $Types.Skip
  }

  export type StaffUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelEmail?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    workingDays?: StringFieldUpdateOperationsInput | string | $Types.Skip
    workingHours?: StringFieldUpdateOperationsInput | string | $Types.Skip
    specialtyId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    messages?: StaffLogUncheckedUpdateManyWithoutOwnerNestedInput | $Types.Skip
  }

  export type StaffCreateWithoutMessagesInput = {
    id?: string | $Types.Skip
    name: string
    lastName: string
    personnelId: string
    personnelEmail: string
    password: string
    gender: $Enums.Gender
    phoneNumber?: string | null | $Types.Skip
    avatarUrl?: string | null | $Types.Skip
    avatarPublicId?: string | null | $Types.Skip
    workingDays: string
    workingHours: string
    role?: $Enums.Role | $Types.Skip
    createdAt?: Date | string | null | $Types.Skip
    specialty?: SpecialtyCreateNestedOneWithoutDoctorsInput | $Types.Skip
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput | $Types.Skip
  }

  export type StaffUncheckedCreateWithoutMessagesInput = {
    id?: string | $Types.Skip
    name: string
    lastName: string
    personnelId: string
    personnelEmail: string
    password: string
    gender: $Enums.Gender
    phoneNumber?: string | null | $Types.Skip
    avatarUrl?: string | null | $Types.Skip
    avatarPublicId?: string | null | $Types.Skip
    workingDays: string
    workingHours: string
    specialtyId?: string | null | $Types.Skip
    role?: $Enums.Role | $Types.Skip
    createdAt?: Date | string | null | $Types.Skip
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput | $Types.Skip
  }

  export type StaffCreateOrConnectWithoutMessagesInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutMessagesInput, StaffUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutStaffLogInput = {
    id?: string | $Types.Skip
    name: string
    lastName: string
    email: string
    password: string
    gender: $Enums.Gender
    location: string
    phoneNumber?: string | null | $Types.Skip
    avatarUrl?: string | null | $Types.Skip
    avatarPublicId?: string | null | $Types.Skip
    role?: $Enums.Role | $Types.Skip
    createdAt?: Date | string | null | $Types.Skip
    appointments?: AppointmentCreateNestedManyWithoutPatientInput | $Types.Skip
    messages?: UserLogCreateNestedManyWithoutOwnerInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutStaffLogInput = {
    id?: string | $Types.Skip
    name: string
    lastName: string
    email: string
    password: string
    gender: $Enums.Gender
    location: string
    phoneNumber?: string | null | $Types.Skip
    avatarUrl?: string | null | $Types.Skip
    avatarPublicId?: string | null | $Types.Skip
    role?: $Enums.Role | $Types.Skip
    createdAt?: Date | string | null | $Types.Skip
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput | $Types.Skip
    messages?: UserLogUncheckedCreateNestedManyWithoutOwnerInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutStaffLogInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStaffLogInput, UserUncheckedCreateWithoutStaffLogInput>
  }

  export type StaffUpsertWithoutMessagesInput = {
    update: XOR<StaffUpdateWithoutMessagesInput, StaffUncheckedUpdateWithoutMessagesInput>
    create: XOR<StaffCreateWithoutMessagesInput, StaffUncheckedCreateWithoutMessagesInput>
    where?: StaffWhereInput | $Types.Skip
  }

  export type StaffUpdateToOneWithWhereWithoutMessagesInput = {
    where?: StaffWhereInput | $Types.Skip
    data: XOR<StaffUpdateWithoutMessagesInput, StaffUncheckedUpdateWithoutMessagesInput>
  }

  export type StaffUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelEmail?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    workingDays?: StringFieldUpdateOperationsInput | string | $Types.Skip
    workingHours?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    specialty?: SpecialtyUpdateOneWithoutDoctorsNestedInput | $Types.Skip
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput | $Types.Skip
  }

  export type StaffUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelEmail?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    workingDays?: StringFieldUpdateOperationsInput | string | $Types.Skip
    workingHours?: StringFieldUpdateOperationsInput | string | $Types.Skip
    specialtyId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput | $Types.Skip
  }

  export type UserUpsertWithoutStaffLogInput = {
    update: XOR<UserUpdateWithoutStaffLogInput, UserUncheckedUpdateWithoutStaffLogInput>
    create: XOR<UserCreateWithoutStaffLogInput, UserUncheckedCreateWithoutStaffLogInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutStaffLogInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutStaffLogInput, UserUncheckedUpdateWithoutStaffLogInput>
  }

  export type UserUpdateWithoutStaffLogInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput | $Types.Skip
    messages?: UserLogUpdateManyWithoutOwnerNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutStaffLogInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput | $Types.Skip
    messages?: UserLogUncheckedUpdateManyWithoutOwnerNestedInput | $Types.Skip
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string | $Types.Skip
    name: string
    lastName: string
    email: string
    password: string
    gender: $Enums.Gender
    location: string
    phoneNumber?: string | null | $Types.Skip
    avatarUrl?: string | null | $Types.Skip
    avatarPublicId?: string | null | $Types.Skip
    role?: $Enums.Role | $Types.Skip
    createdAt?: Date | string | null | $Types.Skip
    appointments?: AppointmentCreateNestedManyWithoutPatientInput | $Types.Skip
    StaffLog?: StaffLogCreateNestedManyWithoutSenderInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string | $Types.Skip
    name: string
    lastName: string
    email: string
    password: string
    gender: $Enums.Gender
    location: string
    phoneNumber?: string | null | $Types.Skip
    avatarUrl?: string | null | $Types.Skip
    avatarPublicId?: string | null | $Types.Skip
    role?: $Enums.Role | $Types.Skip
    createdAt?: Date | string | null | $Types.Skip
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput | $Types.Skip
    StaffLog?: StaffLogUncheckedCreateNestedManyWithoutSenderInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput | $Types.Skip
    StaffLog?: StaffLogUpdateManyWithoutSenderNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    location?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput | $Types.Skip
    StaffLog?: StaffLogUncheckedUpdateManyWithoutSenderNestedInput | $Types.Skip
  }

  export type StaffCreateManySpecialtyInput = {
    id?: string | $Types.Skip
    name: string
    lastName: string
    personnelId: string
    personnelEmail: string
    password: string
    gender: $Enums.Gender
    phoneNumber?: string | null | $Types.Skip
    avatarUrl?: string | null | $Types.Skip
    avatarPublicId?: string | null | $Types.Skip
    workingDays: string
    workingHours: string
    role?: $Enums.Role | $Types.Skip
    createdAt?: Date | string | null | $Types.Skip
  }

  export type AppointmentCreateManyReasonInput = {
    id?: string | $Types.Skip
    patientId?: string | null | $Types.Skip
    doctorId: string
    date?: Date | string | null | $Types.Skip
    time: string
    expired?: boolean | $Types.Skip
    reservedAt?: Date | string | null | $Types.Skip
  }

  export type StaffUpdateWithoutSpecialtyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelEmail?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    workingDays?: StringFieldUpdateOperationsInput | string | $Types.Skip
    workingHours?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput | $Types.Skip
    messages?: StaffLogUpdateManyWithoutOwnerNestedInput | $Types.Skip
  }

  export type StaffUncheckedUpdateWithoutSpecialtyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelEmail?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    workingDays?: StringFieldUpdateOperationsInput | string | $Types.Skip
    workingHours?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput | $Types.Skip
    messages?: StaffLogUncheckedUpdateManyWithoutOwnerNestedInput | $Types.Skip
  }

  export type StaffUncheckedUpdateManyWithoutSpecialtyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    personnelEmail?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender | $Types.Skip
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatarPublicId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    workingDays?: StringFieldUpdateOperationsInput | string | $Types.Skip
    workingHours?: StringFieldUpdateOperationsInput | string | $Types.Skip
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role | $Types.Skip
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type AppointmentUpdateWithoutReasonInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    time?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expired?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    reservedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    patient?: UserUpdateOneWithoutAppointmentsNestedInput | $Types.Skip
    doctor?: StaffUpdateOneRequiredWithoutAppointmentsNestedInput | $Types.Skip
  }

  export type AppointmentUncheckedUpdateWithoutReasonInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    patientId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    doctorId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    time?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expired?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    reservedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type AppointmentUncheckedUpdateManyWithoutReasonInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    patientId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    doctorId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    time?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expired?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    reservedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type AppointmentCreateManyDoctorInput = {
    id?: string | $Types.Skip
    patientId?: string | null | $Types.Skip
    reasonId: string
    date?: Date | string | null | $Types.Skip
    time: string
    expired?: boolean | $Types.Skip
    reservedAt?: Date | string | null | $Types.Skip
  }

  export type StaffLogCreateManyOwnerInput = {
    id?: string | $Types.Skip
    senderId?: string | null | $Types.Skip
    title?: string | null | $Types.Skip
    message: string
    isRead?: boolean | $Types.Skip
    generatedAt?: Date | string | null | $Types.Skip
  }

  export type AppointmentUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    time?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expired?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    reservedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    patient?: UserUpdateOneWithoutAppointmentsNestedInput | $Types.Skip
    reason?: SpecialtyUpdateOneRequiredWithoutAppointmentNestedInput | $Types.Skip
  }

  export type AppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    patientId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    reasonId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    time?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expired?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    reservedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    patientId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    reasonId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    time?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expired?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    reservedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type StaffLogUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isRead?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    generatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    sender?: UserUpdateOneWithoutStaffLogNestedInput | $Types.Skip
  }

  export type StaffLogUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    senderId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isRead?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    generatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type StaffLogUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    senderId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isRead?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    generatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type AppointmentCreateManyPatientInput = {
    id?: string | $Types.Skip
    reasonId: string
    doctorId: string
    date?: Date | string | null | $Types.Skip
    time: string
    expired?: boolean | $Types.Skip
    reservedAt?: Date | string | null | $Types.Skip
  }

  export type UserLogCreateManyOwnerInput = {
    id?: string | $Types.Skip
    title?: string | null | $Types.Skip
    message: string
    isRead?: boolean | $Types.Skip
    generatedAt?: Date | string | null | $Types.Skip
  }

  export type StaffLogCreateManySenderInput = {
    id?: string | $Types.Skip
    ownerId: string
    title?: string | null | $Types.Skip
    message: string
    isRead?: boolean | $Types.Skip
    generatedAt?: Date | string | null | $Types.Skip
  }

  export type AppointmentUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    time?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expired?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    reservedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    reason?: SpecialtyUpdateOneRequiredWithoutAppointmentNestedInput | $Types.Skip
    doctor?: StaffUpdateOneRequiredWithoutAppointmentsNestedInput | $Types.Skip
  }

  export type AppointmentUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    reasonId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    doctorId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    time?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expired?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    reservedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    reasonId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    doctorId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    time?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expired?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    reservedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type UserLogUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isRead?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    generatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type UserLogUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isRead?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    generatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type UserLogUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isRead?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    generatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type StaffLogUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isRead?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    generatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    owner?: StaffUpdateOneRequiredWithoutMessagesNestedInput | $Types.Skip
  }

  export type StaffLogUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    ownerId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isRead?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    generatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type StaffLogUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    ownerId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isRead?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    generatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
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