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

export type PatchLinks = {
  __typename?: "PatchLinks";
  large?: Maybe<Scalars["String"]>;
  small?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  launchpad?: Maybe<Launchpad>;
  root?: Maybe<Scalars["String"]>;
  upcomingLaunch?: Maybe<UpcomingLaunch>;
  upcomingLaunches?: Maybe<Array<Maybe<UpcomingLaunches>>>;
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
  launchpadRegion?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  patch?: Maybe<PatchLinks>;
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
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Launchpad: ResolverTypeWrapper<Launchpad>;
  PatchLinks: ResolverTypeWrapper<PatchLinks>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  UpcomingLaunch: ResolverTypeWrapper<UpcomingLaunch>;
  UpcomingLaunches: ResolverTypeWrapper<UpcomingLaunches>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"];
  Int: Scalars["Int"];
  Launchpad: Launchpad;
  PatchLinks: PatchLinks;
  Query: {};
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
  launchpad?: Resolver<
    Maybe<ResolversTypes["Launchpad"]>,
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

export type Resolvers<ContextType = any> = {
  Launchpad?: LaunchpadResolvers<ContextType>;
  PatchLinks?: PatchLinksResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UpcomingLaunch?: UpcomingLaunchResolvers<ContextType>;
  UpcomingLaunches?: UpcomingLaunchesResolvers<ContextType>;
};
