// THIS IS A GENERATED FILE, DO NOT EDIT MANUALLY!
/* eslint-disable */
import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Launchpad = {
  __typename?: "Launchpad";
  fullName?: Maybe<Scalars["String"]>;
  locality?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  region?: Maybe<Scalars["String"]>;
};

export type PastLaunches = {
  __typename?: "PastLaunches";
  dateUnix: Scalars["Int"];
  details?: Maybe<Scalars["String"]>;
  flightNumber: Scalars["Int"];
  landAttempt?: Maybe<Scalars["Boolean"]>;
  landSuccess?: Maybe<Scalars["Boolean"]>;
  launchSuccess?: Maybe<Scalars["Boolean"]>;
  launchpadRegion?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  patch?: Maybe<PatchLinks>;
  rocketName?: Maybe<Scalars["String"]>;
};

export type PatchLinks = {
  __typename?: "PatchLinks";
  large?: Maybe<Scalars["String"]>;
  small?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  allRockets?: Maybe<Array<Maybe<RocketPartial>>>;
  launchpad?: Maybe<Launchpad>;
  oneRocket?: Maybe<RocketFull>;
  pastLaunches?: Maybe<Array<Maybe<PastLaunches>>>;
  root?: Maybe<Scalars["String"]>;
  upcomingLaunch?: Maybe<UpcomingLaunch>;
  upcomingLaunches?: Maybe<Array<Maybe<UpcomingLaunches>>>;
};

export type QueryOneRocketArgs = {
  rocketId: Scalars["String"];
};

export type RocketEngines = {
  __typename?: "RocketEngines";
  number?: Maybe<Scalars["Int"]>;
  propellants?: Maybe<Array<Maybe<Scalars["String"]>>>;
  type?: Maybe<Scalars["String"]>;
};

export type RocketFull = {
  __typename?: "RocketFull";
  active?: Maybe<Scalars["Boolean"]>;
  costPerLaunch?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  diameter?: Maybe<RocketSize>;
  engines?: Maybe<RocketEngines>;
  firstFlight?: Maybe<Scalars["String"]>;
  height?: Maybe<RocketSize>;
  id: Scalars["String"];
  imagesLinks: Array<Scalars["String"]>;
  mass?: Maybe<RocketMass>;
  name: Scalars["String"];
  stages?: Maybe<Scalars["Int"]>;
  successRatePct?: Maybe<Scalars["Int"]>;
  wikipedia?: Maybe<Scalars["String"]>;
};

export type RocketMass = {
  __typename?: "RocketMass";
  kg?: Maybe<Scalars["Float"]>;
  lb?: Maybe<Scalars["Float"]>;
};

export type RocketPartial = {
  __typename?: "RocketPartial";
  id: Scalars["String"];
  imagesLinks: Array<Scalars["String"]>;
  name: Scalars["String"];
};

export type RocketSize = {
  __typename?: "RocketSize";
  feet?: Maybe<Scalars["Float"]>;
  meters?: Maybe<Scalars["Float"]>;
};

export type UpcomingLaunch = {
  __typename?: "UpcomingLaunch";
  dateUnix: Scalars["Int"];
  details?: Maybe<Scalars["String"]>;
  launchpadRegion?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  patch?: Maybe<PatchLinks>;
  rocketName?: Maybe<Scalars["String"]>;
};

export type UpcomingLaunches = {
  __typename?: "UpcomingLaunches";
  dateUnix: Scalars["Int"];
  details?: Maybe<Scalars["String"]>;
  flightNumber: Scalars["Int"];
  id: Scalars["String"];
  launchpadRegion?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  patch: PatchLinks;
  rocketName?: Maybe<Scalars["String"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Launchpad: ResolverTypeWrapper<Launchpad>;
  PastLaunches: ResolverTypeWrapper<PastLaunches>;
  PatchLinks: ResolverTypeWrapper<PatchLinks>;
  Query: ResolverTypeWrapper<{}>;
  RocketEngines: ResolverTypeWrapper<RocketEngines>;
  RocketFull: ResolverTypeWrapper<RocketFull>;
  RocketMass: ResolverTypeWrapper<RocketMass>;
  RocketPartial: ResolverTypeWrapper<RocketPartial>;
  RocketSize: ResolverTypeWrapper<RocketSize>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  UpcomingLaunch: ResolverTypeWrapper<UpcomingLaunch>;
  UpcomingLaunches: ResolverTypeWrapper<UpcomingLaunches>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"];
  Float: Scalars["Float"];
  Int: Scalars["Int"];
  Launchpad: Launchpad;
  PastLaunches: PastLaunches;
  PatchLinks: PatchLinks;
  Query: {};
  RocketEngines: RocketEngines;
  RocketFull: RocketFull;
  RocketMass: RocketMass;
  RocketPartial: RocketPartial;
  RocketSize: RocketSize;
  String: Scalars["String"];
  UpcomingLaunch: UpcomingLaunch;
  UpcomingLaunches: UpcomingLaunches;
};

export type LaunchpadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Launchpad"] = ResolversParentTypes["Launchpad"]
> = {
  fullName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  locality?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PastLaunchesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PastLaunches"] = ResolversParentTypes["PastLaunches"]
> = {
  dateUnix?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  flightNumber?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  landAttempt?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  landSuccess?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  launchSuccess?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  launchpadRegion?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  patch?: Resolver<
    Maybe<ResolversTypes["PatchLinks"]>,
    ParentType,
    ContextType
  >;
  rocketName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PatchLinksResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PatchLinks"] = ResolversParentTypes["PatchLinks"]
> = {
  large?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  small?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  allRockets?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["RocketPartial"]>>>,
    ParentType,
    ContextType
  >;
  launchpad?: Resolver<
    Maybe<ResolversTypes["Launchpad"]>,
    ParentType,
    ContextType
  >;
  oneRocket?: Resolver<
    Maybe<ResolversTypes["RocketFull"]>,
    ParentType,
    ContextType,
    RequireFields<QueryOneRocketArgs, "rocketId">
  >;
  pastLaunches?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["PastLaunches"]>>>,
    ParentType,
    ContextType
  >;
  root?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  upcomingLaunch?: Resolver<
    Maybe<ResolversTypes["UpcomingLaunch"]>,
    ParentType,
    ContextType
  >;
  upcomingLaunches?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["UpcomingLaunches"]>>>,
    ParentType,
    ContextType
  >;
};

export type RocketEnginesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RocketEngines"] = ResolversParentTypes["RocketEngines"]
> = {
  number?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  propellants?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  type?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RocketFullResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RocketFull"] = ResolversParentTypes["RocketFull"]
> = {
  active?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  costPerLaunch?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  diameter?: Resolver<
    Maybe<ResolversTypes["RocketSize"]>,
    ParentType,
    ContextType
  >;
  engines?: Resolver<
    Maybe<ResolversTypes["RocketEngines"]>,
    ParentType,
    ContextType
  >;
  firstFlight?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  height?: Resolver<
    Maybe<ResolversTypes["RocketSize"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  imagesLinks?: Resolver<
    Array<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  mass?: Resolver<Maybe<ResolversTypes["RocketMass"]>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  stages?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  successRatePct?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  wikipedia?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RocketMassResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RocketMass"] = ResolversParentTypes["RocketMass"]
> = {
  kg?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  lb?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RocketPartialResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RocketPartial"] = ResolversParentTypes["RocketPartial"]
> = {
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  imagesLinks?: Resolver<
    Array<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RocketSizeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RocketSize"] = ResolversParentTypes["RocketSize"]
> = {
  feet?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  meters?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpcomingLaunchResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UpcomingLaunch"] = ResolversParentTypes["UpcomingLaunch"]
> = {
  dateUnix?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  launchpadRegion?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  patch?: Resolver<
    Maybe<ResolversTypes["PatchLinks"]>,
    ParentType,
    ContextType
  >;
  rocketName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpcomingLaunchesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UpcomingLaunches"] = ResolversParentTypes["UpcomingLaunches"]
> = {
  dateUnix?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  flightNumber?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  launchpadRegion?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  patch?: Resolver<ResolversTypes["PatchLinks"], ParentType, ContextType>;
  rocketName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Launchpad?: LaunchpadResolvers<ContextType>;
  PastLaunches?: PastLaunchesResolvers<ContextType>;
  PatchLinks?: PatchLinksResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RocketEngines?: RocketEnginesResolvers<ContextType>;
  RocketFull?: RocketFullResolvers<ContextType>;
  RocketMass?: RocketMassResolvers<ContextType>;
  RocketPartial?: RocketPartialResolvers<ContextType>;
  RocketSize?: RocketSizeResolvers<ContextType>;
  UpcomingLaunch?: UpcomingLaunchResolvers<ContextType>;
  UpcomingLaunches?: UpcomingLaunchesResolvers<ContextType>;
};
