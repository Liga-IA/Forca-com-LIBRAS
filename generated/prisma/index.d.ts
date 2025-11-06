
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
 * Model Analytics
 * 
 */
export type Analytics = $Result.DefaultSelection<Prisma.$AnalyticsPayload>
/**
 * Model Metrics
 * 
 */
export type Metrics = $Result.DefaultSelection<Prisma.$MetricsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Analytics
 * const analytics = await prisma.analytics.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Analytics
   * const analytics = await prisma.analytics.findMany()
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
   * `prisma.analytics`: Exposes CRUD operations for the **Analytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Analytics
    * const analytics = await prisma.analytics.findMany()
    * ```
    */
  get analytics(): Prisma.AnalyticsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metrics`: Exposes CRUD operations for the **Metrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metrics
    * const metrics = await prisma.metrics.findMany()
    * ```
    */
  get metrics(): Prisma.MetricsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    Analytics: 'Analytics',
    Metrics: 'Metrics'
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
      modelProps: "analytics" | "metrics"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Analytics: {
        payload: Prisma.$AnalyticsPayload<ExtArgs>
        fields: Prisma.AnalyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          findMany: {
            args: Prisma.AnalyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          create: {
            args: Prisma.AnalyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          createMany: {
            args: Prisma.AnalyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalyticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          delete: {
            args: Prisma.AnalyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          update: {
            args: Prisma.AnalyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalyticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          upsert: {
            args: Prisma.AnalyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalytics>
          }
          groupBy: {
            args: Prisma.AnalyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyticsCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsCountAggregateOutputType> | number
          }
        }
      }
      Metrics: {
        payload: Prisma.$MetricsPayload<ExtArgs>
        fields: Prisma.MetricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>
          }
          findFirst: {
            args: Prisma.MetricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>
          }
          findMany: {
            args: Prisma.MetricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>[]
          }
          create: {
            args: Prisma.MetricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>
          }
          createMany: {
            args: Prisma.MetricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>[]
          }
          delete: {
            args: Prisma.MetricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>
          }
          update: {
            args: Prisma.MetricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>
          }
          deleteMany: {
            args: Prisma.MetricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetricsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>[]
          }
          upsert: {
            args: Prisma.MetricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>
          }
          aggregate: {
            args: Prisma.MetricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetrics>
          }
          groupBy: {
            args: Prisma.MetricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetricsCountArgs<ExtArgs>
            result: $Utils.Optional<MetricsCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    analytics?: AnalyticsOmit
    metrics?: MetricsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type AnalyticsCountOutputType
   */

  export type AnalyticsCountOutputType = {
    metrics: number
  }

  export type AnalyticsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metrics?: boolean | AnalyticsCountOutputTypeCountMetricsArgs
  }

  // Custom InputTypes
  /**
   * AnalyticsCountOutputType without action
   */
  export type AnalyticsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsCountOutputType
     */
    select?: AnalyticsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnalyticsCountOutputType without action
   */
  export type AnalyticsCountOutputTypeCountMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Analytics
   */

  export type AggregateAnalytics = {
    _count: AnalyticsCountAggregateOutputType | null
    _min: AnalyticsMinAggregateOutputType | null
    _max: AnalyticsMaxAggregateOutputType | null
  }

  export type AnalyticsMinAggregateOutputType = {
    analyticsId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    cityIp: string | null
    country: string | null
    state: string | null
    region: string | null
  }

  export type AnalyticsMaxAggregateOutputType = {
    analyticsId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    cityIp: string | null
    country: string | null
    state: string | null
    region: string | null
  }

  export type AnalyticsCountAggregateOutputType = {
    analyticsId: number
    createdAt: number
    updatedAt: number
    cityIp: number
    country: number
    state: number
    region: number
    _all: number
  }


  export type AnalyticsMinAggregateInputType = {
    analyticsId?: true
    createdAt?: true
    updatedAt?: true
    cityIp?: true
    country?: true
    state?: true
    region?: true
  }

  export type AnalyticsMaxAggregateInputType = {
    analyticsId?: true
    createdAt?: true
    updatedAt?: true
    cityIp?: true
    country?: true
    state?: true
    region?: true
  }

  export type AnalyticsCountAggregateInputType = {
    analyticsId?: true
    createdAt?: true
    updatedAt?: true
    cityIp?: true
    country?: true
    state?: true
    region?: true
    _all?: true
  }

  export type AnalyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analytics to aggregate.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Analytics
    **/
    _count?: true | AnalyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsMaxAggregateInputType
  }

  export type GetAnalyticsAggregateType<T extends AnalyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalytics[P]>
      : GetScalarType<T[P], AggregateAnalytics[P]>
  }




  export type AnalyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsWhereInput
    orderBy?: AnalyticsOrderByWithAggregationInput | AnalyticsOrderByWithAggregationInput[]
    by: AnalyticsScalarFieldEnum[] | AnalyticsScalarFieldEnum
    having?: AnalyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsCountAggregateInputType | true
    _min?: AnalyticsMinAggregateInputType
    _max?: AnalyticsMaxAggregateInputType
  }

  export type AnalyticsGroupByOutputType = {
    analyticsId: string
    createdAt: Date
    updatedAt: Date
    cityIp: string
    country: string
    state: string
    region: string
    _count: AnalyticsCountAggregateOutputType | null
    _min: AnalyticsMinAggregateOutputType | null
    _max: AnalyticsMaxAggregateOutputType | null
  }

  type GetAnalyticsGroupByPayload<T extends AnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    analyticsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cityIp?: boolean
    country?: boolean
    state?: boolean
    region?: boolean
    metrics?: boolean | Analytics$metricsArgs<ExtArgs>
    _count?: boolean | AnalyticsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analytics"]>

  export type AnalyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    analyticsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cityIp?: boolean
    country?: boolean
    state?: boolean
    region?: boolean
  }, ExtArgs["result"]["analytics"]>

  export type AnalyticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    analyticsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cityIp?: boolean
    country?: boolean
    state?: boolean
    region?: boolean
  }, ExtArgs["result"]["analytics"]>

  export type AnalyticsSelectScalar = {
    analyticsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cityIp?: boolean
    country?: boolean
    state?: boolean
    region?: boolean
  }

  export type AnalyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"analyticsId" | "createdAt" | "updatedAt" | "cityIp" | "country" | "state" | "region", ExtArgs["result"]["analytics"]>
  export type AnalyticsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metrics?: boolean | Analytics$metricsArgs<ExtArgs>
    _count?: boolean | AnalyticsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnalyticsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AnalyticsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Analytics"
    objects: {
      metrics: Prisma.$MetricsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      analyticsId: string
      createdAt: Date
      updatedAt: Date
      cityIp: string
      country: string
      state: string
      region: string
    }, ExtArgs["result"]["analytics"]>
    composites: {}
  }

  type AnalyticsGetPayload<S extends boolean | null | undefined | AnalyticsDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsPayload, S>

  type AnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalyticsCountAggregateInputType | true
    }

  export interface AnalyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Analytics'], meta: { name: 'Analytics' } }
    /**
     * Find zero or one Analytics that matches the filter.
     * @param {AnalyticsFindUniqueArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsFindUniqueArgs>(args: SelectSubset<T, AnalyticsFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Analytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyticsFindUniqueOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsFindFirstArgs>(args?: SelectSubset<T, AnalyticsFindFirstArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analytics
     * const analytics = await prisma.analytics.findMany()
     * 
     * // Get first 10 Analytics
     * const analytics = await prisma.analytics.findMany({ take: 10 })
     * 
     * // Only select the `analyticsId`
     * const analyticsWithAnalyticsIdOnly = await prisma.analytics.findMany({ select: { analyticsId: true } })
     * 
     */
    findMany<T extends AnalyticsFindManyArgs>(args?: SelectSubset<T, AnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Analytics.
     * @param {AnalyticsCreateArgs} args - Arguments to create a Analytics.
     * @example
     * // Create one Analytics
     * const Analytics = await prisma.analytics.create({
     *   data: {
     *     // ... data to create a Analytics
     *   }
     * })
     * 
     */
    create<T extends AnalyticsCreateArgs>(args: SelectSubset<T, AnalyticsCreateArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Analytics.
     * @param {AnalyticsCreateManyArgs} args - Arguments to create many Analytics.
     * @example
     * // Create many Analytics
     * const analytics = await prisma.analytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsCreateManyArgs>(args?: SelectSubset<T, AnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Analytics and returns the data saved in the database.
     * @param {AnalyticsCreateManyAndReturnArgs} args - Arguments to create many Analytics.
     * @example
     * // Create many Analytics
     * const analytics = await prisma.analytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Analytics and only return the `analyticsId`
     * const analyticsWithAnalyticsIdOnly = await prisma.analytics.createManyAndReturn({
     *   select: { analyticsId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalyticsCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Analytics.
     * @param {AnalyticsDeleteArgs} args - Arguments to delete one Analytics.
     * @example
     * // Delete one Analytics
     * const Analytics = await prisma.analytics.delete({
     *   where: {
     *     // ... filter to delete one Analytics
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsDeleteArgs>(args: SelectSubset<T, AnalyticsDeleteArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Analytics.
     * @param {AnalyticsUpdateArgs} args - Arguments to update one Analytics.
     * @example
     * // Update one Analytics
     * const analytics = await prisma.analytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsUpdateArgs>(args: SelectSubset<T, AnalyticsUpdateArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Analytics.
     * @param {AnalyticsDeleteManyArgs} args - Arguments to filter Analytics to delete.
     * @example
     * // Delete a few Analytics
     * const { count } = await prisma.analytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsDeleteManyArgs>(args?: SelectSubset<T, AnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analytics
     * const analytics = await prisma.analytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsUpdateManyArgs>(args: SelectSubset<T, AnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analytics and returns the data updated in the database.
     * @param {AnalyticsUpdateManyAndReturnArgs} args - Arguments to update many Analytics.
     * @example
     * // Update many Analytics
     * const analytics = await prisma.analytics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Analytics and only return the `analyticsId`
     * const analyticsWithAnalyticsIdOnly = await prisma.analytics.updateManyAndReturn({
     *   select: { analyticsId: true },
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
    updateManyAndReturn<T extends AnalyticsUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalyticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Analytics.
     * @param {AnalyticsUpsertArgs} args - Arguments to update or create a Analytics.
     * @example
     * // Update or create a Analytics
     * const analytics = await prisma.analytics.upsert({
     *   create: {
     *     // ... data to create a Analytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analytics we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsUpsertArgs>(args: SelectSubset<T, AnalyticsUpsertArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsCountArgs} args - Arguments to filter Analytics to count.
     * @example
     * // Count the number of Analytics
     * const count = await prisma.analytics.count({
     *   where: {
     *     // ... the filter for the Analytics we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsCountArgs>(
      args?: Subset<T, AnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalyticsAggregateArgs>(args: Subset<T, AnalyticsAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsAggregateType<T>>

    /**
     * Group by Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsGroupByArgs} args - Group by arguments.
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
      T extends AnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Analytics model
   */
  readonly fields: AnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Analytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    metrics<T extends Analytics$metricsArgs<ExtArgs> = {}>(args?: Subset<T, Analytics$metricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Analytics model
   */
  interface AnalyticsFieldRefs {
    readonly analyticsId: FieldRef<"Analytics", 'String'>
    readonly createdAt: FieldRef<"Analytics", 'DateTime'>
    readonly updatedAt: FieldRef<"Analytics", 'DateTime'>
    readonly cityIp: FieldRef<"Analytics", 'String'>
    readonly country: FieldRef<"Analytics", 'String'>
    readonly state: FieldRef<"Analytics", 'String'>
    readonly region: FieldRef<"Analytics", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Analytics findUnique
   */
  export type AnalyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics findUniqueOrThrow
   */
  export type AnalyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics findFirst
   */
  export type AnalyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analytics.
     */
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics findFirstOrThrow
   */
  export type AnalyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analytics.
     */
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics findMany
   */
  export type AnalyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics create
   */
  export type AnalyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to create a Analytics.
     */
    data: XOR<AnalyticsCreateInput, AnalyticsUncheckedCreateInput>
  }

  /**
   * Analytics createMany
   */
  export type AnalyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Analytics.
     */
    data: AnalyticsCreateManyInput | AnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Analytics createManyAndReturn
   */
  export type AnalyticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * The data used to create many Analytics.
     */
    data: AnalyticsCreateManyInput | AnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Analytics update
   */
  export type AnalyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to update a Analytics.
     */
    data: XOR<AnalyticsUpdateInput, AnalyticsUncheckedUpdateInput>
    /**
     * Choose, which Analytics to update.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics updateMany
   */
  export type AnalyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Analytics.
     */
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which Analytics to update
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to update.
     */
    limit?: number
  }

  /**
   * Analytics updateManyAndReturn
   */
  export type AnalyticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * The data used to update Analytics.
     */
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which Analytics to update
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to update.
     */
    limit?: number
  }

  /**
   * Analytics upsert
   */
  export type AnalyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * The filter to search for the Analytics to update in case it exists.
     */
    where: AnalyticsWhereUniqueInput
    /**
     * In case the Analytics found by the `where` argument doesn't exist, create a new Analytics with this data.
     */
    create: XOR<AnalyticsCreateInput, AnalyticsUncheckedCreateInput>
    /**
     * In case the Analytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsUpdateInput, AnalyticsUncheckedUpdateInput>
  }

  /**
   * Analytics delete
   */
  export type AnalyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter which Analytics to delete.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics deleteMany
   */
  export type AnalyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analytics to delete
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to delete.
     */
    limit?: number
  }

  /**
   * Analytics.metrics
   */
  export type Analytics$metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    where?: MetricsWhereInput
    orderBy?: MetricsOrderByWithRelationInput | MetricsOrderByWithRelationInput[]
    cursor?: MetricsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetricsScalarFieldEnum | MetricsScalarFieldEnum[]
  }

  /**
   * Analytics without action
   */
  export type AnalyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
  }


  /**
   * Model Metrics
   */

  export type AggregateMetrics = {
    _count: MetricsCountAggregateOutputType | null
    _avg: MetricsAvgAggregateOutputType | null
    _sum: MetricsSumAggregateOutputType | null
    _min: MetricsMinAggregateOutputType | null
    _max: MetricsMaxAggregateOutputType | null
  }

  export type MetricsAvgAggregateOutputType = {
    total_games: number | null
  }

  export type MetricsSumAggregateOutputType = {
    total_games: number | null
  }

  export type MetricsMinAggregateOutputType = {
    metricsId: string | null
    createdAt: Date | null
    total_games: number | null
    analyticsId: string | null
  }

  export type MetricsMaxAggregateOutputType = {
    metricsId: string | null
    createdAt: Date | null
    total_games: number | null
    analyticsId: string | null
  }

  export type MetricsCountAggregateOutputType = {
    metricsId: number
    createdAt: number
    total_games: number
    analyticsId: number
    _all: number
  }


  export type MetricsAvgAggregateInputType = {
    total_games?: true
  }

  export type MetricsSumAggregateInputType = {
    total_games?: true
  }

  export type MetricsMinAggregateInputType = {
    metricsId?: true
    createdAt?: true
    total_games?: true
    analyticsId?: true
  }

  export type MetricsMaxAggregateInputType = {
    metricsId?: true
    createdAt?: true
    total_games?: true
    analyticsId?: true
  }

  export type MetricsCountAggregateInputType = {
    metricsId?: true
    createdAt?: true
    total_games?: true
    analyticsId?: true
    _all?: true
  }

  export type MetricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metrics to aggregate.
     */
    where?: MetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricsOrderByWithRelationInput | MetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metrics
    **/
    _count?: true | MetricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricsMaxAggregateInputType
  }

  export type GetMetricsAggregateType<T extends MetricsAggregateArgs> = {
        [P in keyof T & keyof AggregateMetrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetrics[P]>
      : GetScalarType<T[P], AggregateMetrics[P]>
  }




  export type MetricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricsWhereInput
    orderBy?: MetricsOrderByWithAggregationInput | MetricsOrderByWithAggregationInput[]
    by: MetricsScalarFieldEnum[] | MetricsScalarFieldEnum
    having?: MetricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricsCountAggregateInputType | true
    _avg?: MetricsAvgAggregateInputType
    _sum?: MetricsSumAggregateInputType
    _min?: MetricsMinAggregateInputType
    _max?: MetricsMaxAggregateInputType
  }

  export type MetricsGroupByOutputType = {
    metricsId: string
    createdAt: Date
    total_games: number
    analyticsId: string
    _count: MetricsCountAggregateOutputType | null
    _avg: MetricsAvgAggregateOutputType | null
    _sum: MetricsSumAggregateOutputType | null
    _min: MetricsMinAggregateOutputType | null
    _max: MetricsMaxAggregateOutputType | null
  }

  type GetMetricsGroupByPayload<T extends MetricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricsGroupByOutputType[P]>
            : GetScalarType<T[P], MetricsGroupByOutputType[P]>
        }
      >
    >


  export type MetricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    metricsId?: boolean
    createdAt?: boolean
    total_games?: boolean
    analyticsId?: boolean
    analytics?: boolean | AnalyticsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metrics"]>

  export type MetricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    metricsId?: boolean
    createdAt?: boolean
    total_games?: boolean
    analyticsId?: boolean
    analytics?: boolean | AnalyticsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metrics"]>

  export type MetricsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    metricsId?: boolean
    createdAt?: boolean
    total_games?: boolean
    analyticsId?: boolean
    analytics?: boolean | AnalyticsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metrics"]>

  export type MetricsSelectScalar = {
    metricsId?: boolean
    createdAt?: boolean
    total_games?: boolean
    analyticsId?: boolean
  }

  export type MetricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"metricsId" | "createdAt" | "total_games" | "analyticsId", ExtArgs["result"]["metrics"]>
  export type MetricsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analytics?: boolean | AnalyticsDefaultArgs<ExtArgs>
  }
  export type MetricsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analytics?: boolean | AnalyticsDefaultArgs<ExtArgs>
  }
  export type MetricsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analytics?: boolean | AnalyticsDefaultArgs<ExtArgs>
  }

  export type $MetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Metrics"
    objects: {
      analytics: Prisma.$AnalyticsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      metricsId: string
      createdAt: Date
      total_games: number
      analyticsId: string
    }, ExtArgs["result"]["metrics"]>
    composites: {}
  }

  type MetricsGetPayload<S extends boolean | null | undefined | MetricsDefaultArgs> = $Result.GetResult<Prisma.$MetricsPayload, S>

  type MetricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetricsCountAggregateInputType | true
    }

  export interface MetricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Metrics'], meta: { name: 'Metrics' } }
    /**
     * Find zero or one Metrics that matches the filter.
     * @param {MetricsFindUniqueArgs} args - Arguments to find a Metrics
     * @example
     * // Get one Metrics
     * const metrics = await prisma.metrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetricsFindUniqueArgs>(args: SelectSubset<T, MetricsFindUniqueArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetricsFindUniqueOrThrowArgs} args - Arguments to find a Metrics
     * @example
     * // Get one Metrics
     * const metrics = await prisma.metrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetricsFindUniqueOrThrowArgs>(args: SelectSubset<T, MetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsFindFirstArgs} args - Arguments to find a Metrics
     * @example
     * // Get one Metrics
     * const metrics = await prisma.metrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetricsFindFirstArgs>(args?: SelectSubset<T, MetricsFindFirstArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsFindFirstOrThrowArgs} args - Arguments to find a Metrics
     * @example
     * // Get one Metrics
     * const metrics = await prisma.metrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetricsFindFirstOrThrowArgs>(args?: SelectSubset<T, MetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metrics
     * const metrics = await prisma.metrics.findMany()
     * 
     * // Get first 10 Metrics
     * const metrics = await prisma.metrics.findMany({ take: 10 })
     * 
     * // Only select the `metricsId`
     * const metricsWithMetricsIdOnly = await prisma.metrics.findMany({ select: { metricsId: true } })
     * 
     */
    findMany<T extends MetricsFindManyArgs>(args?: SelectSubset<T, MetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metrics.
     * @param {MetricsCreateArgs} args - Arguments to create a Metrics.
     * @example
     * // Create one Metrics
     * const Metrics = await prisma.metrics.create({
     *   data: {
     *     // ... data to create a Metrics
     *   }
     * })
     * 
     */
    create<T extends MetricsCreateArgs>(args: SelectSubset<T, MetricsCreateArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metrics.
     * @param {MetricsCreateManyArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metrics = await prisma.metrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetricsCreateManyArgs>(args?: SelectSubset<T, MetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metrics and returns the data saved in the database.
     * @param {MetricsCreateManyAndReturnArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metrics = await prisma.metrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metrics and only return the `metricsId`
     * const metricsWithMetricsIdOnly = await prisma.metrics.createManyAndReturn({
     *   select: { metricsId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetricsCreateManyAndReturnArgs>(args?: SelectSubset<T, MetricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Metrics.
     * @param {MetricsDeleteArgs} args - Arguments to delete one Metrics.
     * @example
     * // Delete one Metrics
     * const Metrics = await prisma.metrics.delete({
     *   where: {
     *     // ... filter to delete one Metrics
     *   }
     * })
     * 
     */
    delete<T extends MetricsDeleteArgs>(args: SelectSubset<T, MetricsDeleteArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metrics.
     * @param {MetricsUpdateArgs} args - Arguments to update one Metrics.
     * @example
     * // Update one Metrics
     * const metrics = await prisma.metrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetricsUpdateArgs>(args: SelectSubset<T, MetricsUpdateArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metrics.
     * @param {MetricsDeleteManyArgs} args - Arguments to filter Metrics to delete.
     * @example
     * // Delete a few Metrics
     * const { count } = await prisma.metrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetricsDeleteManyArgs>(args?: SelectSubset<T, MetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metrics
     * const metrics = await prisma.metrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetricsUpdateManyArgs>(args: SelectSubset<T, MetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics and returns the data updated in the database.
     * @param {MetricsUpdateManyAndReturnArgs} args - Arguments to update many Metrics.
     * @example
     * // Update many Metrics
     * const metrics = await prisma.metrics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Metrics and only return the `metricsId`
     * const metricsWithMetricsIdOnly = await prisma.metrics.updateManyAndReturn({
     *   select: { metricsId: true },
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
    updateManyAndReturn<T extends MetricsUpdateManyAndReturnArgs>(args: SelectSubset<T, MetricsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Metrics.
     * @param {MetricsUpsertArgs} args - Arguments to update or create a Metrics.
     * @example
     * // Update or create a Metrics
     * const metrics = await prisma.metrics.upsert({
     *   create: {
     *     // ... data to create a Metrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metrics we want to update
     *   }
     * })
     */
    upsert<T extends MetricsUpsertArgs>(args: SelectSubset<T, MetricsUpsertArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsCountArgs} args - Arguments to filter Metrics to count.
     * @example
     * // Count the number of Metrics
     * const count = await prisma.metrics.count({
     *   where: {
     *     // ... the filter for the Metrics we want to count
     *   }
     * })
    **/
    count<T extends MetricsCountArgs>(
      args?: Subset<T, MetricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetricsAggregateArgs>(args: Subset<T, MetricsAggregateArgs>): Prisma.PrismaPromise<GetMetricsAggregateType<T>>

    /**
     * Group by Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsGroupByArgs} args - Group by arguments.
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
      T extends MetricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricsGroupByArgs['orderBy'] }
        : { orderBy?: MetricsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Metrics model
   */
  readonly fields: MetricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Metrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    analytics<T extends AnalyticsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnalyticsDefaultArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Metrics model
   */
  interface MetricsFieldRefs {
    readonly metricsId: FieldRef<"Metrics", 'String'>
    readonly createdAt: FieldRef<"Metrics", 'DateTime'>
    readonly total_games: FieldRef<"Metrics", 'Int'>
    readonly analyticsId: FieldRef<"Metrics", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Metrics findUnique
   */
  export type MetricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where: MetricsWhereUniqueInput
  }

  /**
   * Metrics findUniqueOrThrow
   */
  export type MetricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where: MetricsWhereUniqueInput
  }

  /**
   * Metrics findFirst
   */
  export type MetricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where?: MetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricsOrderByWithRelationInput | MetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricsScalarFieldEnum | MetricsScalarFieldEnum[]
  }

  /**
   * Metrics findFirstOrThrow
   */
  export type MetricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where?: MetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricsOrderByWithRelationInput | MetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricsScalarFieldEnum | MetricsScalarFieldEnum[]
  }

  /**
   * Metrics findMany
   */
  export type MetricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where?: MetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricsOrderByWithRelationInput | MetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metrics.
     */
    cursor?: MetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    distinct?: MetricsScalarFieldEnum | MetricsScalarFieldEnum[]
  }

  /**
   * Metrics create
   */
  export type MetricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    /**
     * The data needed to create a Metrics.
     */
    data: XOR<MetricsCreateInput, MetricsUncheckedCreateInput>
  }

  /**
   * Metrics createMany
   */
  export type MetricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metrics.
     */
    data: MetricsCreateManyInput | MetricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metrics createManyAndReturn
   */
  export type MetricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * The data used to create many Metrics.
     */
    data: MetricsCreateManyInput | MetricsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Metrics update
   */
  export type MetricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    /**
     * The data needed to update a Metrics.
     */
    data: XOR<MetricsUpdateInput, MetricsUncheckedUpdateInput>
    /**
     * Choose, which Metrics to update.
     */
    where: MetricsWhereUniqueInput
  }

  /**
   * Metrics updateMany
   */
  export type MetricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricsUpdateManyMutationInput, MetricsUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricsWhereInput
    /**
     * Limit how many Metrics to update.
     */
    limit?: number
  }

  /**
   * Metrics updateManyAndReturn
   */
  export type MetricsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricsUpdateManyMutationInput, MetricsUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricsWhereInput
    /**
     * Limit how many Metrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Metrics upsert
   */
  export type MetricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    /**
     * The filter to search for the Metrics to update in case it exists.
     */
    where: MetricsWhereUniqueInput
    /**
     * In case the Metrics found by the `where` argument doesn't exist, create a new Metrics with this data.
     */
    create: XOR<MetricsCreateInput, MetricsUncheckedCreateInput>
    /**
     * In case the Metrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetricsUpdateInput, MetricsUncheckedUpdateInput>
  }

  /**
   * Metrics delete
   */
  export type MetricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    /**
     * Filter which Metrics to delete.
     */
    where: MetricsWhereUniqueInput
  }

  /**
   * Metrics deleteMany
   */
  export type MetricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metrics to delete
     */
    where?: MetricsWhereInput
    /**
     * Limit how many Metrics to delete.
     */
    limit?: number
  }

  /**
   * Metrics without action
   */
  export type MetricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AnalyticsScalarFieldEnum: {
    analyticsId: 'analyticsId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    cityIp: 'cityIp',
    country: 'country',
    state: 'state',
    region: 'region'
  };

  export type AnalyticsScalarFieldEnum = (typeof AnalyticsScalarFieldEnum)[keyof typeof AnalyticsScalarFieldEnum]


  export const MetricsScalarFieldEnum: {
    metricsId: 'metricsId',
    createdAt: 'createdAt',
    total_games: 'total_games',
    analyticsId: 'analyticsId'
  };

  export type MetricsScalarFieldEnum = (typeof MetricsScalarFieldEnum)[keyof typeof MetricsScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type AnalyticsWhereInput = {
    AND?: AnalyticsWhereInput | AnalyticsWhereInput[]
    OR?: AnalyticsWhereInput[]
    NOT?: AnalyticsWhereInput | AnalyticsWhereInput[]
    analyticsId?: StringFilter<"Analytics"> | string
    createdAt?: DateTimeFilter<"Analytics"> | Date | string
    updatedAt?: DateTimeFilter<"Analytics"> | Date | string
    cityIp?: StringFilter<"Analytics"> | string
    country?: StringFilter<"Analytics"> | string
    state?: StringFilter<"Analytics"> | string
    region?: StringFilter<"Analytics"> | string
    metrics?: MetricsListRelationFilter
  }

  export type AnalyticsOrderByWithRelationInput = {
    analyticsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cityIp?: SortOrder
    country?: SortOrder
    state?: SortOrder
    region?: SortOrder
    metrics?: MetricsOrderByRelationAggregateInput
  }

  export type AnalyticsWhereUniqueInput = Prisma.AtLeast<{
    analyticsId?: string
    region?: string
    AND?: AnalyticsWhereInput | AnalyticsWhereInput[]
    OR?: AnalyticsWhereInput[]
    NOT?: AnalyticsWhereInput | AnalyticsWhereInput[]
    createdAt?: DateTimeFilter<"Analytics"> | Date | string
    updatedAt?: DateTimeFilter<"Analytics"> | Date | string
    cityIp?: StringFilter<"Analytics"> | string
    country?: StringFilter<"Analytics"> | string
    state?: StringFilter<"Analytics"> | string
    metrics?: MetricsListRelationFilter
  }, "analyticsId" | "region">

  export type AnalyticsOrderByWithAggregationInput = {
    analyticsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cityIp?: SortOrder
    country?: SortOrder
    state?: SortOrder
    region?: SortOrder
    _count?: AnalyticsCountOrderByAggregateInput
    _max?: AnalyticsMaxOrderByAggregateInput
    _min?: AnalyticsMinOrderByAggregateInput
  }

  export type AnalyticsScalarWhereWithAggregatesInput = {
    AND?: AnalyticsScalarWhereWithAggregatesInput | AnalyticsScalarWhereWithAggregatesInput[]
    OR?: AnalyticsScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsScalarWhereWithAggregatesInput | AnalyticsScalarWhereWithAggregatesInput[]
    analyticsId?: StringWithAggregatesFilter<"Analytics"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Analytics"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Analytics"> | Date | string
    cityIp?: StringWithAggregatesFilter<"Analytics"> | string
    country?: StringWithAggregatesFilter<"Analytics"> | string
    state?: StringWithAggregatesFilter<"Analytics"> | string
    region?: StringWithAggregatesFilter<"Analytics"> | string
  }

  export type MetricsWhereInput = {
    AND?: MetricsWhereInput | MetricsWhereInput[]
    OR?: MetricsWhereInput[]
    NOT?: MetricsWhereInput | MetricsWhereInput[]
    metricsId?: StringFilter<"Metrics"> | string
    createdAt?: DateTimeFilter<"Metrics"> | Date | string
    total_games?: IntFilter<"Metrics"> | number
    analyticsId?: StringFilter<"Metrics"> | string
    analytics?: XOR<AnalyticsScalarRelationFilter, AnalyticsWhereInput>
  }

  export type MetricsOrderByWithRelationInput = {
    metricsId?: SortOrder
    createdAt?: SortOrder
    total_games?: SortOrder
    analyticsId?: SortOrder
    analytics?: AnalyticsOrderByWithRelationInput
  }

  export type MetricsWhereUniqueInput = Prisma.AtLeast<{
    metricsId?: string
    AND?: MetricsWhereInput | MetricsWhereInput[]
    OR?: MetricsWhereInput[]
    NOT?: MetricsWhereInput | MetricsWhereInput[]
    createdAt?: DateTimeFilter<"Metrics"> | Date | string
    total_games?: IntFilter<"Metrics"> | number
    analyticsId?: StringFilter<"Metrics"> | string
    analytics?: XOR<AnalyticsScalarRelationFilter, AnalyticsWhereInput>
  }, "metricsId">

  export type MetricsOrderByWithAggregationInput = {
    metricsId?: SortOrder
    createdAt?: SortOrder
    total_games?: SortOrder
    analyticsId?: SortOrder
    _count?: MetricsCountOrderByAggregateInput
    _avg?: MetricsAvgOrderByAggregateInput
    _max?: MetricsMaxOrderByAggregateInput
    _min?: MetricsMinOrderByAggregateInput
    _sum?: MetricsSumOrderByAggregateInput
  }

  export type MetricsScalarWhereWithAggregatesInput = {
    AND?: MetricsScalarWhereWithAggregatesInput | MetricsScalarWhereWithAggregatesInput[]
    OR?: MetricsScalarWhereWithAggregatesInput[]
    NOT?: MetricsScalarWhereWithAggregatesInput | MetricsScalarWhereWithAggregatesInput[]
    metricsId?: StringWithAggregatesFilter<"Metrics"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Metrics"> | Date | string
    total_games?: IntWithAggregatesFilter<"Metrics"> | number
    analyticsId?: StringWithAggregatesFilter<"Metrics"> | string
  }

  export type AnalyticsCreateInput = {
    analyticsId?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cityIp: string
    country: string
    state: string
    region: string
    metrics?: MetricsCreateNestedManyWithoutAnalyticsInput
  }

  export type AnalyticsUncheckedCreateInput = {
    analyticsId?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cityIp: string
    country: string
    state: string
    region: string
    metrics?: MetricsUncheckedCreateNestedManyWithoutAnalyticsInput
  }

  export type AnalyticsUpdateInput = {
    analyticsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cityIp?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    metrics?: MetricsUpdateManyWithoutAnalyticsNestedInput
  }

  export type AnalyticsUncheckedUpdateInput = {
    analyticsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cityIp?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    metrics?: MetricsUncheckedUpdateManyWithoutAnalyticsNestedInput
  }

  export type AnalyticsCreateManyInput = {
    analyticsId?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cityIp: string
    country: string
    state: string
    region: string
  }

  export type AnalyticsUpdateManyMutationInput = {
    analyticsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cityIp?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
  }

  export type AnalyticsUncheckedUpdateManyInput = {
    analyticsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cityIp?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
  }

  export type MetricsCreateInput = {
    metricsId?: string
    createdAt?: Date | string
    total_games: number
    analytics: AnalyticsCreateNestedOneWithoutMetricsInput
  }

  export type MetricsUncheckedCreateInput = {
    metricsId?: string
    createdAt?: Date | string
    total_games: number
    analyticsId: string
  }

  export type MetricsUpdateInput = {
    metricsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    total_games?: IntFieldUpdateOperationsInput | number
    analytics?: AnalyticsUpdateOneRequiredWithoutMetricsNestedInput
  }

  export type MetricsUncheckedUpdateInput = {
    metricsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    total_games?: IntFieldUpdateOperationsInput | number
    analyticsId?: StringFieldUpdateOperationsInput | string
  }

  export type MetricsCreateManyInput = {
    metricsId?: string
    createdAt?: Date | string
    total_games: number
    analyticsId: string
  }

  export type MetricsUpdateManyMutationInput = {
    metricsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    total_games?: IntFieldUpdateOperationsInput | number
  }

  export type MetricsUncheckedUpdateManyInput = {
    metricsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    total_games?: IntFieldUpdateOperationsInput | number
    analyticsId?: StringFieldUpdateOperationsInput | string
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

  export type MetricsListRelationFilter = {
    every?: MetricsWhereInput
    some?: MetricsWhereInput
    none?: MetricsWhereInput
  }

  export type MetricsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnalyticsCountOrderByAggregateInput = {
    analyticsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cityIp?: SortOrder
    country?: SortOrder
    state?: SortOrder
    region?: SortOrder
  }

  export type AnalyticsMaxOrderByAggregateInput = {
    analyticsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cityIp?: SortOrder
    country?: SortOrder
    state?: SortOrder
    region?: SortOrder
  }

  export type AnalyticsMinOrderByAggregateInput = {
    analyticsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cityIp?: SortOrder
    country?: SortOrder
    state?: SortOrder
    region?: SortOrder
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

  export type AnalyticsScalarRelationFilter = {
    is?: AnalyticsWhereInput
    isNot?: AnalyticsWhereInput
  }

  export type MetricsCountOrderByAggregateInput = {
    metricsId?: SortOrder
    createdAt?: SortOrder
    total_games?: SortOrder
    analyticsId?: SortOrder
  }

  export type MetricsAvgOrderByAggregateInput = {
    total_games?: SortOrder
  }

  export type MetricsMaxOrderByAggregateInput = {
    metricsId?: SortOrder
    createdAt?: SortOrder
    total_games?: SortOrder
    analyticsId?: SortOrder
  }

  export type MetricsMinOrderByAggregateInput = {
    metricsId?: SortOrder
    createdAt?: SortOrder
    total_games?: SortOrder
    analyticsId?: SortOrder
  }

  export type MetricsSumOrderByAggregateInput = {
    total_games?: SortOrder
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

  export type MetricsCreateNestedManyWithoutAnalyticsInput = {
    create?: XOR<MetricsCreateWithoutAnalyticsInput, MetricsUncheckedCreateWithoutAnalyticsInput> | MetricsCreateWithoutAnalyticsInput[] | MetricsUncheckedCreateWithoutAnalyticsInput[]
    connectOrCreate?: MetricsCreateOrConnectWithoutAnalyticsInput | MetricsCreateOrConnectWithoutAnalyticsInput[]
    createMany?: MetricsCreateManyAnalyticsInputEnvelope
    connect?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
  }

  export type MetricsUncheckedCreateNestedManyWithoutAnalyticsInput = {
    create?: XOR<MetricsCreateWithoutAnalyticsInput, MetricsUncheckedCreateWithoutAnalyticsInput> | MetricsCreateWithoutAnalyticsInput[] | MetricsUncheckedCreateWithoutAnalyticsInput[]
    connectOrCreate?: MetricsCreateOrConnectWithoutAnalyticsInput | MetricsCreateOrConnectWithoutAnalyticsInput[]
    createMany?: MetricsCreateManyAnalyticsInputEnvelope
    connect?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MetricsUpdateManyWithoutAnalyticsNestedInput = {
    create?: XOR<MetricsCreateWithoutAnalyticsInput, MetricsUncheckedCreateWithoutAnalyticsInput> | MetricsCreateWithoutAnalyticsInput[] | MetricsUncheckedCreateWithoutAnalyticsInput[]
    connectOrCreate?: MetricsCreateOrConnectWithoutAnalyticsInput | MetricsCreateOrConnectWithoutAnalyticsInput[]
    upsert?: MetricsUpsertWithWhereUniqueWithoutAnalyticsInput | MetricsUpsertWithWhereUniqueWithoutAnalyticsInput[]
    createMany?: MetricsCreateManyAnalyticsInputEnvelope
    set?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    disconnect?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    delete?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    connect?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    update?: MetricsUpdateWithWhereUniqueWithoutAnalyticsInput | MetricsUpdateWithWhereUniqueWithoutAnalyticsInput[]
    updateMany?: MetricsUpdateManyWithWhereWithoutAnalyticsInput | MetricsUpdateManyWithWhereWithoutAnalyticsInput[]
    deleteMany?: MetricsScalarWhereInput | MetricsScalarWhereInput[]
  }

  export type MetricsUncheckedUpdateManyWithoutAnalyticsNestedInput = {
    create?: XOR<MetricsCreateWithoutAnalyticsInput, MetricsUncheckedCreateWithoutAnalyticsInput> | MetricsCreateWithoutAnalyticsInput[] | MetricsUncheckedCreateWithoutAnalyticsInput[]
    connectOrCreate?: MetricsCreateOrConnectWithoutAnalyticsInput | MetricsCreateOrConnectWithoutAnalyticsInput[]
    upsert?: MetricsUpsertWithWhereUniqueWithoutAnalyticsInput | MetricsUpsertWithWhereUniqueWithoutAnalyticsInput[]
    createMany?: MetricsCreateManyAnalyticsInputEnvelope
    set?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    disconnect?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    delete?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    connect?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    update?: MetricsUpdateWithWhereUniqueWithoutAnalyticsInput | MetricsUpdateWithWhereUniqueWithoutAnalyticsInput[]
    updateMany?: MetricsUpdateManyWithWhereWithoutAnalyticsInput | MetricsUpdateManyWithWhereWithoutAnalyticsInput[]
    deleteMany?: MetricsScalarWhereInput | MetricsScalarWhereInput[]
  }

  export type AnalyticsCreateNestedOneWithoutMetricsInput = {
    create?: XOR<AnalyticsCreateWithoutMetricsInput, AnalyticsUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: AnalyticsCreateOrConnectWithoutMetricsInput
    connect?: AnalyticsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnalyticsUpdateOneRequiredWithoutMetricsNestedInput = {
    create?: XOR<AnalyticsCreateWithoutMetricsInput, AnalyticsUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: AnalyticsCreateOrConnectWithoutMetricsInput
    upsert?: AnalyticsUpsertWithoutMetricsInput
    connect?: AnalyticsWhereUniqueInput
    update?: XOR<XOR<AnalyticsUpdateToOneWithWhereWithoutMetricsInput, AnalyticsUpdateWithoutMetricsInput>, AnalyticsUncheckedUpdateWithoutMetricsInput>
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

  export type MetricsCreateWithoutAnalyticsInput = {
    metricsId?: string
    createdAt?: Date | string
    total_games: number
  }

  export type MetricsUncheckedCreateWithoutAnalyticsInput = {
    metricsId?: string
    createdAt?: Date | string
    total_games: number
  }

  export type MetricsCreateOrConnectWithoutAnalyticsInput = {
    where: MetricsWhereUniqueInput
    create: XOR<MetricsCreateWithoutAnalyticsInput, MetricsUncheckedCreateWithoutAnalyticsInput>
  }

  export type MetricsCreateManyAnalyticsInputEnvelope = {
    data: MetricsCreateManyAnalyticsInput | MetricsCreateManyAnalyticsInput[]
    skipDuplicates?: boolean
  }

  export type MetricsUpsertWithWhereUniqueWithoutAnalyticsInput = {
    where: MetricsWhereUniqueInput
    update: XOR<MetricsUpdateWithoutAnalyticsInput, MetricsUncheckedUpdateWithoutAnalyticsInput>
    create: XOR<MetricsCreateWithoutAnalyticsInput, MetricsUncheckedCreateWithoutAnalyticsInput>
  }

  export type MetricsUpdateWithWhereUniqueWithoutAnalyticsInput = {
    where: MetricsWhereUniqueInput
    data: XOR<MetricsUpdateWithoutAnalyticsInput, MetricsUncheckedUpdateWithoutAnalyticsInput>
  }

  export type MetricsUpdateManyWithWhereWithoutAnalyticsInput = {
    where: MetricsScalarWhereInput
    data: XOR<MetricsUpdateManyMutationInput, MetricsUncheckedUpdateManyWithoutAnalyticsInput>
  }

  export type MetricsScalarWhereInput = {
    AND?: MetricsScalarWhereInput | MetricsScalarWhereInput[]
    OR?: MetricsScalarWhereInput[]
    NOT?: MetricsScalarWhereInput | MetricsScalarWhereInput[]
    metricsId?: StringFilter<"Metrics"> | string
    createdAt?: DateTimeFilter<"Metrics"> | Date | string
    total_games?: IntFilter<"Metrics"> | number
    analyticsId?: StringFilter<"Metrics"> | string
  }

  export type AnalyticsCreateWithoutMetricsInput = {
    analyticsId?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cityIp: string
    country: string
    state: string
    region: string
  }

  export type AnalyticsUncheckedCreateWithoutMetricsInput = {
    analyticsId?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cityIp: string
    country: string
    state: string
    region: string
  }

  export type AnalyticsCreateOrConnectWithoutMetricsInput = {
    where: AnalyticsWhereUniqueInput
    create: XOR<AnalyticsCreateWithoutMetricsInput, AnalyticsUncheckedCreateWithoutMetricsInput>
  }

  export type AnalyticsUpsertWithoutMetricsInput = {
    update: XOR<AnalyticsUpdateWithoutMetricsInput, AnalyticsUncheckedUpdateWithoutMetricsInput>
    create: XOR<AnalyticsCreateWithoutMetricsInput, AnalyticsUncheckedCreateWithoutMetricsInput>
    where?: AnalyticsWhereInput
  }

  export type AnalyticsUpdateToOneWithWhereWithoutMetricsInput = {
    where?: AnalyticsWhereInput
    data: XOR<AnalyticsUpdateWithoutMetricsInput, AnalyticsUncheckedUpdateWithoutMetricsInput>
  }

  export type AnalyticsUpdateWithoutMetricsInput = {
    analyticsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cityIp?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
  }

  export type AnalyticsUncheckedUpdateWithoutMetricsInput = {
    analyticsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cityIp?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
  }

  export type MetricsCreateManyAnalyticsInput = {
    metricsId?: string
    createdAt?: Date | string
    total_games: number
  }

  export type MetricsUpdateWithoutAnalyticsInput = {
    metricsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    total_games?: IntFieldUpdateOperationsInput | number
  }

  export type MetricsUncheckedUpdateWithoutAnalyticsInput = {
    metricsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    total_games?: IntFieldUpdateOperationsInput | number
  }

  export type MetricsUncheckedUpdateManyWithoutAnalyticsInput = {
    metricsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    total_games?: IntFieldUpdateOperationsInput | number
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