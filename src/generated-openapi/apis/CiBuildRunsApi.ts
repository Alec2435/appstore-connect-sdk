/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BuildsResponse,
  CiBuildActionsResponse,
  CiBuildRunCreateRequest,
  CiBuildRunResponse,
  ErrorResponse,
} from '../models';
import {
    BuildsResponseFromJSON,
    BuildsResponseToJSON,
    CiBuildActionsResponseFromJSON,
    CiBuildActionsResponseToJSON,
    CiBuildRunCreateRequestFromJSON,
    CiBuildRunCreateRequestToJSON,
    CiBuildRunResponseFromJSON,
    CiBuildRunResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface CiBuildRunsActionsGetToManyRelatedRequest {
    id: string;
    fieldsCiBuildRuns?: Array<CiBuildRunsActionsGetToManyRelatedFieldsCiBuildRunsEnum>;
    fieldsCiBuildActions?: Array<CiBuildRunsActionsGetToManyRelatedFieldsCiBuildActionsEnum>;
    limit?: number;
    include?: Array<CiBuildRunsActionsGetToManyRelatedIncludeEnum>;
}

export interface CiBuildRunsBuildsGetToManyRelatedRequest {
    id: string;
    filterBetaAppReviewSubmissionBetaReviewState?: Array<CiBuildRunsBuildsGetToManyRelatedFilterBetaAppReviewSubmissionBetaReviewStateEnum>;
    filterBuildAudienceType?: Array<CiBuildRunsBuildsGetToManyRelatedFilterBuildAudienceTypeEnum>;
    filterExpired?: Array<string>;
    filterPreReleaseVersionPlatform?: Array<CiBuildRunsBuildsGetToManyRelatedFilterPreReleaseVersionPlatformEnum>;
    filterPreReleaseVersionVersion?: Array<string>;
    filterProcessingState?: Array<CiBuildRunsBuildsGetToManyRelatedFilterProcessingStateEnum>;
    filterUsesNonExemptEncryption?: Array<string>;
    filterVersion?: Array<string>;
    filterApp?: Array<string>;
    filterAppStoreVersion?: Array<string>;
    filterBetaGroups?: Array<string>;
    filterPreReleaseVersion?: Array<string>;
    filterId?: Array<string>;
    sort?: Array<CiBuildRunsBuildsGetToManyRelatedSortEnum>;
    fieldsBuildBundles?: Array<CiBuildRunsBuildsGetToManyRelatedFieldsBuildBundlesEnum>;
    fieldsBuildIcons?: Array<CiBuildRunsBuildsGetToManyRelatedFieldsBuildIconsEnum>;
    fieldsBetaAppReviewSubmissions?: Array<CiBuildRunsBuildsGetToManyRelatedFieldsBetaAppReviewSubmissionsEnum>;
    fieldsBuildBetaDetails?: Array<CiBuildRunsBuildsGetToManyRelatedFieldsBuildBetaDetailsEnum>;
    fieldsBetaTesters?: Array<CiBuildRunsBuildsGetToManyRelatedFieldsBetaTestersEnum>;
    fieldsPreReleaseVersions?: Array<CiBuildRunsBuildsGetToManyRelatedFieldsPreReleaseVersionsEnum>;
    fieldsBetaBuildLocalizations?: Array<CiBuildRunsBuildsGetToManyRelatedFieldsBetaBuildLocalizationsEnum>;
    fieldsAppStoreVersions?: Array<CiBuildRunsBuildsGetToManyRelatedFieldsAppStoreVersionsEnum>;
    fieldsAppEncryptionDeclarations?: Array<CiBuildRunsBuildsGetToManyRelatedFieldsAppEncryptionDeclarationsEnum>;
    fieldsApps?: Array<CiBuildRunsBuildsGetToManyRelatedFieldsAppsEnum>;
    fieldsBuilds?: Array<CiBuildRunsBuildsGetToManyRelatedFieldsBuildsEnum>;
    fieldsBetaGroups?: Array<CiBuildRunsBuildsGetToManyRelatedFieldsBetaGroupsEnum>;
    limit?: number;
    limitIndividualTesters?: number;
    limitBetaGroups?: number;
    limitBetaBuildLocalizations?: number;
    limitIcons?: number;
    limitBuildBundles?: number;
    include?: Array<CiBuildRunsBuildsGetToManyRelatedIncludeEnum>;
}

export interface CiBuildRunsCreateInstanceRequest {
    ciBuildRunCreateRequest: CiBuildRunCreateRequest;
}

export interface CiBuildRunsGetInstanceRequest {
    id: string;
    fieldsCiBuildRuns?: Array<CiBuildRunsGetInstanceFieldsCiBuildRunsEnum>;
    include?: Array<CiBuildRunsGetInstanceIncludeEnum>;
    fieldsCiBuildActions?: Array<CiBuildRunsGetInstanceFieldsCiBuildActionsEnum>;
    fieldsBuilds?: Array<CiBuildRunsGetInstanceFieldsBuildsEnum>;
    limitBuilds?: number;
}

/**
 * 
 */
export class CiBuildRunsApi extends runtime.BaseAPI {

    /**
     */
    async ciBuildRunsActionsGetToManyRelatedRaw(requestParameters: CiBuildRunsActionsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiBuildActionsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ciBuildRunsActionsGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsCiBuildRuns) {
            queryParameters['fields[ciBuildRuns]'] = requestParameters.fieldsCiBuildRuns.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCiBuildActions) {
            queryParameters['fields[ciBuildActions]'] = requestParameters.fieldsCiBuildActions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/ciBuildRuns/{id}/actions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiBuildActionsResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciBuildRunsActionsGetToManyRelated(requestParameters: CiBuildRunsActionsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiBuildActionsResponse> {
        const response = await this.ciBuildRunsActionsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async ciBuildRunsBuildsGetToManyRelatedRaw(requestParameters: CiBuildRunsBuildsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BuildsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ciBuildRunsBuildsGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.filterBetaAppReviewSubmissionBetaReviewState) {
            queryParameters['filter[betaAppReviewSubmission.betaReviewState]'] = requestParameters.filterBetaAppReviewSubmissionBetaReviewState.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterBuildAudienceType) {
            queryParameters['filter[buildAudienceType]'] = requestParameters.filterBuildAudienceType.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterExpired) {
            queryParameters['filter[expired]'] = requestParameters.filterExpired.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterPreReleaseVersionPlatform) {
            queryParameters['filter[preReleaseVersion.platform]'] = requestParameters.filterPreReleaseVersionPlatform.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterPreReleaseVersionVersion) {
            queryParameters['filter[preReleaseVersion.version]'] = requestParameters.filterPreReleaseVersionVersion.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterProcessingState) {
            queryParameters['filter[processingState]'] = requestParameters.filterProcessingState.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterUsesNonExemptEncryption) {
            queryParameters['filter[usesNonExemptEncryption]'] = requestParameters.filterUsesNonExemptEncryption.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterVersion) {
            queryParameters['filter[version]'] = requestParameters.filterVersion.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterApp) {
            queryParameters['filter[app]'] = requestParameters.filterApp.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterAppStoreVersion) {
            queryParameters['filter[appStoreVersion]'] = requestParameters.filterAppStoreVersion.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterBetaGroups) {
            queryParameters['filter[betaGroups]'] = requestParameters.filterBetaGroups.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterPreReleaseVersion) {
            queryParameters['filter[preReleaseVersion]'] = requestParameters.filterPreReleaseVersion.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterId) {
            queryParameters['filter[id]'] = requestParameters.filterId.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.sort) {
            queryParameters['sort'] = requestParameters.sort.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBuildBundles) {
            queryParameters['fields[buildBundles]'] = requestParameters.fieldsBuildBundles.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBuildIcons) {
            queryParameters['fields[buildIcons]'] = requestParameters.fieldsBuildIcons.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBetaAppReviewSubmissions) {
            queryParameters['fields[betaAppReviewSubmissions]'] = requestParameters.fieldsBetaAppReviewSubmissions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBuildBetaDetails) {
            queryParameters['fields[buildBetaDetails]'] = requestParameters.fieldsBuildBetaDetails.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBetaTesters) {
            queryParameters['fields[betaTesters]'] = requestParameters.fieldsBetaTesters.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsPreReleaseVersions) {
            queryParameters['fields[preReleaseVersions]'] = requestParameters.fieldsPreReleaseVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBetaBuildLocalizations) {
            queryParameters['fields[betaBuildLocalizations]'] = requestParameters.fieldsBetaBuildLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppStoreVersions) {
            queryParameters['fields[appStoreVersions]'] = requestParameters.fieldsAppStoreVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppEncryptionDeclarations) {
            queryParameters['fields[appEncryptionDeclarations]'] = requestParameters.fieldsAppEncryptionDeclarations.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsApps) {
            queryParameters['fields[apps]'] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBuilds) {
            queryParameters['fields[builds]'] = requestParameters.fieldsBuilds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBetaGroups) {
            queryParameters['fields[betaGroups]'] = requestParameters.fieldsBetaGroups.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.limitIndividualTesters !== undefined) {
            queryParameters['limit[individualTesters]'] = requestParameters.limitIndividualTesters;
        }

        if (requestParameters.limitBetaGroups !== undefined) {
            queryParameters['limit[betaGroups]'] = requestParameters.limitBetaGroups;
        }

        if (requestParameters.limitBetaBuildLocalizations !== undefined) {
            queryParameters['limit[betaBuildLocalizations]'] = requestParameters.limitBetaBuildLocalizations;
        }

        if (requestParameters.limitIcons !== undefined) {
            queryParameters['limit[icons]'] = requestParameters.limitIcons;
        }

        if (requestParameters.limitBuildBundles !== undefined) {
            queryParameters['limit[buildBundles]'] = requestParameters.limitBuildBundles;
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/ciBuildRuns/{id}/builds`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BuildsResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciBuildRunsBuildsGetToManyRelated(requestParameters: CiBuildRunsBuildsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BuildsResponse> {
        const response = await this.ciBuildRunsBuildsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async ciBuildRunsCreateInstanceRaw(requestParameters: CiBuildRunsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiBuildRunResponse>> {
        if (requestParameters.ciBuildRunCreateRequest === null || requestParameters.ciBuildRunCreateRequest === undefined) {
            throw new runtime.RequiredError('ciBuildRunCreateRequest','Required parameter requestParameters.ciBuildRunCreateRequest was null or undefined when calling ciBuildRunsCreateInstance.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/ciBuildRuns`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CiBuildRunCreateRequestToJSON(requestParameters.ciBuildRunCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiBuildRunResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciBuildRunsCreateInstance(requestParameters: CiBuildRunsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiBuildRunResponse> {
        const response = await this.ciBuildRunsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async ciBuildRunsGetInstanceRaw(requestParameters: CiBuildRunsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiBuildRunResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ciBuildRunsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsCiBuildRuns) {
            queryParameters['fields[ciBuildRuns]'] = requestParameters.fieldsCiBuildRuns.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCiBuildActions) {
            queryParameters['fields[ciBuildActions]'] = requestParameters.fieldsCiBuildActions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBuilds) {
            queryParameters['fields[builds]'] = requestParameters.fieldsBuilds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitBuilds !== undefined) {
            queryParameters['limit[builds]'] = requestParameters.limitBuilds;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/ciBuildRuns/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiBuildRunResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciBuildRunsGetInstance(requestParameters: CiBuildRunsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiBuildRunResponse> {
        const response = await this.ciBuildRunsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CiBuildRunsActionsGetToManyRelatedFieldsCiBuildRunsEnum = {
    Actions: 'actions',
    BuildRun: 'buildRun',
    Builds: 'builds',
    CancelReason: 'cancelReason',
    Clean: 'clean',
    CompletionStatus: 'completionStatus',
    CreatedDate: 'createdDate',
    DestinationBranch: 'destinationBranch',
    DestinationCommit: 'destinationCommit',
    ExecutionProgress: 'executionProgress',
    FinishedDate: 'finishedDate',
    IsPullRequestBuild: 'isPullRequestBuild',
    IssueCounts: 'issueCounts',
    Number: 'number',
    Product: 'product',
    PullRequest: 'pullRequest',
    SourceBranchOrTag: 'sourceBranchOrTag',
    SourceCommit: 'sourceCommit',
    StartReason: 'startReason',
    StartedDate: 'startedDate',
    Workflow: 'workflow'
} as const;
export type CiBuildRunsActionsGetToManyRelatedFieldsCiBuildRunsEnum = typeof CiBuildRunsActionsGetToManyRelatedFieldsCiBuildRunsEnum[keyof typeof CiBuildRunsActionsGetToManyRelatedFieldsCiBuildRunsEnum];
/**
 * @export
 */
export const CiBuildRunsActionsGetToManyRelatedFieldsCiBuildActionsEnum = {
    ActionType: 'actionType',
    Artifacts: 'artifacts',
    BuildRun: 'buildRun',
    CompletionStatus: 'completionStatus',
    ExecutionProgress: 'executionProgress',
    FinishedDate: 'finishedDate',
    IsRequiredToPass: 'isRequiredToPass',
    IssueCounts: 'issueCounts',
    Issues: 'issues',
    Name: 'name',
    StartedDate: 'startedDate',
    TestResults: 'testResults'
} as const;
export type CiBuildRunsActionsGetToManyRelatedFieldsCiBuildActionsEnum = typeof CiBuildRunsActionsGetToManyRelatedFieldsCiBuildActionsEnum[keyof typeof CiBuildRunsActionsGetToManyRelatedFieldsCiBuildActionsEnum];
/**
 * @export
 */
export const CiBuildRunsActionsGetToManyRelatedIncludeEnum = {
    BuildRun: 'buildRun'
} as const;
export type CiBuildRunsActionsGetToManyRelatedIncludeEnum = typeof CiBuildRunsActionsGetToManyRelatedIncludeEnum[keyof typeof CiBuildRunsActionsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const CiBuildRunsBuildsGetToManyRelatedFilterBetaAppReviewSubmissionBetaReviewStateEnum = {
    WaitingForReview: 'WAITING_FOR_REVIEW',
    InReview: 'IN_REVIEW',
    Rejected: 'REJECTED',
    Approved: 'APPROVED'
} as const;
export type CiBuildRunsBuildsGetToManyRelatedFilterBetaAppReviewSubmissionBetaReviewStateEnum = typeof CiBuildRunsBuildsGetToManyRelatedFilterBetaAppReviewSubmissionBetaReviewStateEnum[keyof typeof CiBuildRunsBuildsGetToManyRelatedFilterBetaAppReviewSubmissionBetaReviewStateEnum];
/**
 * @export
 */
export const CiBuildRunsBuildsGetToManyRelatedFilterBuildAudienceTypeEnum = {
    InternalOnly: 'INTERNAL_ONLY',
    AppStoreEligible: 'APP_STORE_ELIGIBLE'
} as const;
export type CiBuildRunsBuildsGetToManyRelatedFilterBuildAudienceTypeEnum = typeof CiBuildRunsBuildsGetToManyRelatedFilterBuildAudienceTypeEnum[keyof typeof CiBuildRunsBuildsGetToManyRelatedFilterBuildAudienceTypeEnum];
/**
 * @export
 */
export const CiBuildRunsBuildsGetToManyRelatedFilterPreReleaseVersionPlatformEnum = {
    Ios: 'IOS',
    MacOs: 'MAC_OS',
    TvOs: 'TV_OS'
} as const;
export type CiBuildRunsBuildsGetToManyRelatedFilterPreReleaseVersionPlatformEnum = typeof CiBuildRunsBuildsGetToManyRelatedFilterPreReleaseVersionPlatformEnum[keyof typeof CiBuildRunsBuildsGetToManyRelatedFilterPreReleaseVersionPlatformEnum];
/**
 * @export
 */
export const CiBuildRunsBuildsGetToManyRelatedFilterProcessingStateEnum = {
    Processing: 'PROCESSING',
    Failed: 'FAILED',
    Invalid: 'INVALID',
    Valid: 'VALID'
} as const;
export type CiBuildRunsBuildsGetToManyRelatedFilterProcessingStateEnum = typeof CiBuildRunsBuildsGetToManyRelatedFilterProcessingStateEnum[keyof typeof CiBuildRunsBuildsGetToManyRelatedFilterProcessingStateEnum];
/**
 * @export
 */
export const CiBuildRunsBuildsGetToManyRelatedSortEnum = {
    PreReleaseVersion: 'preReleaseVersion',
    PreReleaseVersion: '-preReleaseVersion',
    UploadedDate: 'uploadedDate',
    UploadedDate: '-uploadedDate',
    Version: 'version',
    Version: '-version'
} as const;
export type CiBuildRunsBuildsGetToManyRelatedSortEnum = typeof CiBuildRunsBuildsGetToManyRelatedSortEnum[keyof typeof CiBuildRunsBuildsGetToManyRelatedSortEnum];
/**
 * @export
 */
export const CiBuildRunsBuildsGetToManyRelatedFieldsBuildBundlesEnum = {
    AppClipDomainCacheStatus: 'appClipDomainCacheStatus',
    AppClipDomainDebugStatus: 'appClipDomainDebugStatus',
    BetaAppClipInvocations: 'betaAppClipInvocations',
    BuildBundleFileSizes: 'buildBundleFileSizes',
    BundleId: 'bundleId',
    BundleType: 'bundleType',
    DSymUrl: 'dSYMUrl',
    DeviceProtocols: 'deviceProtocols',
    Entitlements: 'entitlements',
    FileName: 'fileName',
    HasOnDemandResources: 'hasOnDemandResources',
    HasPrerenderedIcon: 'hasPrerenderedIcon',
    HasSirikit: 'hasSirikit',
    IncludesSymbols: 'includesSymbols',
    IsIosBuildMacAppStoreCompatible: 'isIosBuildMacAppStoreCompatible',
    Locales: 'locales',
    PlatformBuild: 'platformBuild',
    RequiredCapabilities: 'requiredCapabilities',
    SdkBuild: 'sdkBuild',
    SupportedArchitectures: 'supportedArchitectures',
    UsesLocationServices: 'usesLocationServices'
} as const;
export type CiBuildRunsBuildsGetToManyRelatedFieldsBuildBundlesEnum = typeof CiBuildRunsBuildsGetToManyRelatedFieldsBuildBundlesEnum[keyof typeof CiBuildRunsBuildsGetToManyRelatedFieldsBuildBundlesEnum];
/**
 * @export
 */
export const CiBuildRunsBuildsGetToManyRelatedFieldsBuildIconsEnum = {
    IconAsset: 'iconAsset',
    IconType: 'iconType',
    Name: 'name'
} as const;
export type CiBuildRunsBuildsGetToManyRelatedFieldsBuildIconsEnum = typeof CiBuildRunsBuildsGetToManyRelatedFieldsBuildIconsEnum[keyof typeof CiBuildRunsBuildsGetToManyRelatedFieldsBuildIconsEnum];
/**
 * @export
 */
export const CiBuildRunsBuildsGetToManyRelatedFieldsBetaAppReviewSubmissionsEnum = {
    BetaReviewState: 'betaReviewState',
    Build: 'build',
    SubmittedDate: 'submittedDate'
} as const;
export type CiBuildRunsBuildsGetToManyRelatedFieldsBetaAppReviewSubmissionsEnum = typeof CiBuildRunsBuildsGetToManyRelatedFieldsBetaAppReviewSubmissionsEnum[keyof typeof CiBuildRunsBuildsGetToManyRelatedFieldsBetaAppReviewSubmissionsEnum];
/**
 * @export
 */
export const CiBuildRunsBuildsGetToManyRelatedFieldsBuildBetaDetailsEnum = {
    AutoNotifyEnabled: 'autoNotifyEnabled',
    Build: 'build',
    ExternalBuildState: 'externalBuildState',
    InternalBuildState: 'internalBuildState'
} as const;
export type CiBuildRunsBuildsGetToManyRelatedFieldsBuildBetaDetailsEnum = typeof CiBuildRunsBuildsGetToManyRelatedFieldsBuildBetaDetailsEnum[keyof typeof CiBuildRunsBuildsGetToManyRelatedFieldsBuildBetaDetailsEnum];
/**
 * @export
 */
export const CiBuildRunsBuildsGetToManyRelatedFieldsBetaTestersEnum = {
    Apps: 'apps',
    BetaGroups: 'betaGroups',
    Builds: 'builds',
    Email: 'email',
    FirstName: 'firstName',
    InviteType: 'inviteType',
    LastName: 'lastName'
} as const;
export type CiBuildRunsBuildsGetToManyRelatedFieldsBetaTestersEnum = typeof CiBuildRunsBuildsGetToManyRelatedFieldsBetaTestersEnum[keyof typeof CiBuildRunsBuildsGetToManyRelatedFieldsBetaTestersEnum];
/**
 * @export
 */
export const CiBuildRunsBuildsGetToManyRelatedFieldsPreReleaseVersionsEnum = {
    App: 'app',
    Builds: 'builds',
    Platform: 'platform',
    Version: 'version'
} as const;
export type CiBuildRunsBuildsGetToManyRelatedFieldsPreReleaseVersionsEnum = typeof CiBuildRunsBuildsGetToManyRelatedFieldsPreReleaseVersionsEnum[keyof typeof CiBuildRunsBuildsGetToManyRelatedFieldsPreReleaseVersionsEnum];
/**
 * @export
 */
export const CiBuildRunsBuildsGetToManyRelatedFieldsBetaBuildLocalizationsEnum = {
    Build: 'build',
    Locale: 'locale',
    WhatsNew: 'whatsNew'
} as const;
export type CiBuildRunsBuildsGetToManyRelatedFieldsBetaBuildLocalizationsEnum = typeof CiBuildRunsBuildsGetToManyRelatedFieldsBetaBuildLocalizationsEnum[keyof typeof CiBuildRunsBuildsGetToManyRelatedFieldsBetaBuildLocalizationsEnum];
/**
 * @export
 */
export const CiBuildRunsBuildsGetToManyRelatedFieldsAppStoreVersionsEnum = {
    AgeRatingDeclaration: 'ageRatingDeclaration',
    App: 'app',
    AppClipDefaultExperience: 'appClipDefaultExperience',
    AppStoreReviewDetail: 'appStoreReviewDetail',
    AppStoreState: 'appStoreState',
    AppStoreVersionExperiments: 'appStoreVersionExperiments',
    AppStoreVersionLocalizations: 'appStoreVersionLocalizations',
    AppStoreVersionPhasedRelease: 'appStoreVersionPhasedRelease',
    AppStoreVersionSubmission: 'appStoreVersionSubmission',
    Build: 'build',
    Copyright: 'copyright',
    CreatedDate: 'createdDate',
    CustomerReviews: 'customerReviews',
    Downloadable: 'downloadable',
    EarliestReleaseDate: 'earliestReleaseDate',
    Platform: 'platform',
    ReleaseType: 'releaseType',
    RoutingAppCoverage: 'routingAppCoverage',
    VersionString: 'versionString'
} as const;
export type CiBuildRunsBuildsGetToManyRelatedFieldsAppStoreVersionsEnum = typeof CiBuildRunsBuildsGetToManyRelatedFieldsAppStoreVersionsEnum[keyof typeof CiBuildRunsBuildsGetToManyRelatedFieldsAppStoreVersionsEnum];
/**
 * @export
 */
export const CiBuildRunsBuildsGetToManyRelatedFieldsAppEncryptionDeclarationsEnum = {
    App: 'app',
    AppDescription: 'appDescription',
    AppEncryptionDeclarationDocument: 'appEncryptionDeclarationDocument',
    AppEncryptionDeclarationState: 'appEncryptionDeclarationState',
    AvailableOnFrenchStore: 'availableOnFrenchStore',
    Builds: 'builds',
    CodeValue: 'codeValue',
    ContainsProprietaryCryptography: 'containsProprietaryCryptography',
    ContainsThirdPartyCryptography: 'containsThirdPartyCryptography',
    CreatedDate: 'createdDate',
    DocumentName: 'documentName',
    DocumentType: 'documentType',
    DocumentUrl: 'documentUrl',
    Exempt: 'exempt',
    Platform: 'platform',
    UploadedDate: 'uploadedDate',
    UsesEncryption: 'usesEncryption'
} as const;
export type CiBuildRunsBuildsGetToManyRelatedFieldsAppEncryptionDeclarationsEnum = typeof CiBuildRunsBuildsGetToManyRelatedFieldsAppEncryptionDeclarationsEnum[keyof typeof CiBuildRunsBuildsGetToManyRelatedFieldsAppEncryptionDeclarationsEnum];
/**
 * @export
 */
export const CiBuildRunsBuildsGetToManyRelatedFieldsAppsEnum = {
    AppClips: 'appClips',
    AppCustomProductPages: 'appCustomProductPages',
    AppEvents: 'appEvents',
    AppInfos: 'appInfos',
    AppStoreVersions: 'appStoreVersions',
    AvailableInNewTerritories: 'availableInNewTerritories',
    AvailableTerritories: 'availableTerritories',
    BetaAppLocalizations: 'betaAppLocalizations',
    BetaAppReviewDetail: 'betaAppReviewDetail',
    BetaGroups: 'betaGroups',
    BetaLicenseAgreement: 'betaLicenseAgreement',
    BetaTesters: 'betaTesters',
    Builds: 'builds',
    BundleId: 'bundleId',
    CiProduct: 'ciProduct',
    ContentRightsDeclaration: 'contentRightsDeclaration',
    CustomerReviews: 'customerReviews',
    EndUserLicenseAgreement: 'endUserLicenseAgreement',
    GameCenterEnabledVersions: 'gameCenterEnabledVersions',
    InAppPurchases: 'inAppPurchases',
    InAppPurchasesV2: 'inAppPurchasesV2',
    IsOrEverWasMadeForKids: 'isOrEverWasMadeForKids',
    Name: 'name',
    PerfPowerMetrics: 'perfPowerMetrics',
    PreOrder: 'preOrder',
    PreReleaseVersions: 'preReleaseVersions',
    PricePoints: 'pricePoints',
    Prices: 'prices',
    PrimaryLocale: 'primaryLocale',
    PromotedPurchases: 'promotedPurchases',
    ReviewSubmissions: 'reviewSubmissions',
    Sku: 'sku',
    SubscriptionGracePeriod: 'subscriptionGracePeriod',
    SubscriptionGroups: 'subscriptionGroups',
    SubscriptionStatusUrl: 'subscriptionStatusUrl',
    SubscriptionStatusUrlForSandbox: 'subscriptionStatusUrlForSandbox',
    SubscriptionStatusUrlVersion: 'subscriptionStatusUrlVersion',
    SubscriptionStatusUrlVersionForSandbox: 'subscriptionStatusUrlVersionForSandbox'
} as const;
export type CiBuildRunsBuildsGetToManyRelatedFieldsAppsEnum = typeof CiBuildRunsBuildsGetToManyRelatedFieldsAppsEnum[keyof typeof CiBuildRunsBuildsGetToManyRelatedFieldsAppsEnum];
/**
 * @export
 */
export const CiBuildRunsBuildsGetToManyRelatedFieldsBuildsEnum = {
    App: 'app',
    AppEncryptionDeclaration: 'appEncryptionDeclaration',
    AppStoreVersion: 'appStoreVersion',
    BetaAppReviewSubmission: 'betaAppReviewSubmission',
    BetaBuildLocalizations: 'betaBuildLocalizations',
    BetaGroups: 'betaGroups',
    BuildAudienceType: 'buildAudienceType',
    BuildBetaDetail: 'buildBetaDetail',
    BuildBundles: 'buildBundles',
    ComputedMinMacOsVersion: 'computedMinMacOsVersion',
    DiagnosticSignatures: 'diagnosticSignatures',
    ExpirationDate: 'expirationDate',
    Expired: 'expired',
    IconAssetToken: 'iconAssetToken',
    Icons: 'icons',
    IndividualTesters: 'individualTesters',
    LsMinimumSystemVersion: 'lsMinimumSystemVersion',
    MinOsVersion: 'minOsVersion',
    PerfPowerMetrics: 'perfPowerMetrics',
    PreReleaseVersion: 'preReleaseVersion',
    ProcessingState: 'processingState',
    UploadedDate: 'uploadedDate',
    UsesNonExemptEncryption: 'usesNonExemptEncryption',
    Version: 'version'
} as const;
export type CiBuildRunsBuildsGetToManyRelatedFieldsBuildsEnum = typeof CiBuildRunsBuildsGetToManyRelatedFieldsBuildsEnum[keyof typeof CiBuildRunsBuildsGetToManyRelatedFieldsBuildsEnum];
/**
 * @export
 */
export const CiBuildRunsBuildsGetToManyRelatedFieldsBetaGroupsEnum = {
    App: 'app',
    BetaTesters: 'betaTesters',
    Builds: 'builds',
    CreatedDate: 'createdDate',
    FeedbackEnabled: 'feedbackEnabled',
    HasAccessToAllBuilds: 'hasAccessToAllBuilds',
    IosBuildsAvailableForAppleSiliconMac: 'iosBuildsAvailableForAppleSiliconMac',
    IsInternalGroup: 'isInternalGroup',
    Name: 'name',
    PublicLink: 'publicLink',
    PublicLinkEnabled: 'publicLinkEnabled',
    PublicLinkId: 'publicLinkId',
    PublicLinkLimit: 'publicLinkLimit',
    PublicLinkLimitEnabled: 'publicLinkLimitEnabled'
} as const;
export type CiBuildRunsBuildsGetToManyRelatedFieldsBetaGroupsEnum = typeof CiBuildRunsBuildsGetToManyRelatedFieldsBetaGroupsEnum[keyof typeof CiBuildRunsBuildsGetToManyRelatedFieldsBetaGroupsEnum];
/**
 * @export
 */
export const CiBuildRunsBuildsGetToManyRelatedIncludeEnum = {
    App: 'app',
    AppEncryptionDeclaration: 'appEncryptionDeclaration',
    AppStoreVersion: 'appStoreVersion',
    BetaAppReviewSubmission: 'betaAppReviewSubmission',
    BetaBuildLocalizations: 'betaBuildLocalizations',
    BetaGroups: 'betaGroups',
    BuildBetaDetail: 'buildBetaDetail',
    BuildBundles: 'buildBundles',
    Icons: 'icons',
    IndividualTesters: 'individualTesters',
    PreReleaseVersion: 'preReleaseVersion'
} as const;
export type CiBuildRunsBuildsGetToManyRelatedIncludeEnum = typeof CiBuildRunsBuildsGetToManyRelatedIncludeEnum[keyof typeof CiBuildRunsBuildsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const CiBuildRunsGetInstanceFieldsCiBuildRunsEnum = {
    Actions: 'actions',
    BuildRun: 'buildRun',
    Builds: 'builds',
    CancelReason: 'cancelReason',
    Clean: 'clean',
    CompletionStatus: 'completionStatus',
    CreatedDate: 'createdDate',
    DestinationBranch: 'destinationBranch',
    DestinationCommit: 'destinationCommit',
    ExecutionProgress: 'executionProgress',
    FinishedDate: 'finishedDate',
    IsPullRequestBuild: 'isPullRequestBuild',
    IssueCounts: 'issueCounts',
    Number: 'number',
    Product: 'product',
    PullRequest: 'pullRequest',
    SourceBranchOrTag: 'sourceBranchOrTag',
    SourceCommit: 'sourceCommit',
    StartReason: 'startReason',
    StartedDate: 'startedDate',
    Workflow: 'workflow'
} as const;
export type CiBuildRunsGetInstanceFieldsCiBuildRunsEnum = typeof CiBuildRunsGetInstanceFieldsCiBuildRunsEnum[keyof typeof CiBuildRunsGetInstanceFieldsCiBuildRunsEnum];
/**
 * @export
 */
export const CiBuildRunsGetInstanceIncludeEnum = {
    Builds: 'builds',
    DestinationBranch: 'destinationBranch',
    Product: 'product',
    PullRequest: 'pullRequest',
    SourceBranchOrTag: 'sourceBranchOrTag',
    Workflow: 'workflow'
} as const;
export type CiBuildRunsGetInstanceIncludeEnum = typeof CiBuildRunsGetInstanceIncludeEnum[keyof typeof CiBuildRunsGetInstanceIncludeEnum];
/**
 * @export
 */
export const CiBuildRunsGetInstanceFieldsCiBuildActionsEnum = {
    ActionType: 'actionType',
    Artifacts: 'artifacts',
    BuildRun: 'buildRun',
    CompletionStatus: 'completionStatus',
    ExecutionProgress: 'executionProgress',
    FinishedDate: 'finishedDate',
    IsRequiredToPass: 'isRequiredToPass',
    IssueCounts: 'issueCounts',
    Issues: 'issues',
    Name: 'name',
    StartedDate: 'startedDate',
    TestResults: 'testResults'
} as const;
export type CiBuildRunsGetInstanceFieldsCiBuildActionsEnum = typeof CiBuildRunsGetInstanceFieldsCiBuildActionsEnum[keyof typeof CiBuildRunsGetInstanceFieldsCiBuildActionsEnum];
/**
 * @export
 */
export const CiBuildRunsGetInstanceFieldsBuildsEnum = {
    App: 'app',
    AppEncryptionDeclaration: 'appEncryptionDeclaration',
    AppStoreVersion: 'appStoreVersion',
    BetaAppReviewSubmission: 'betaAppReviewSubmission',
    BetaBuildLocalizations: 'betaBuildLocalizations',
    BetaGroups: 'betaGroups',
    BuildAudienceType: 'buildAudienceType',
    BuildBetaDetail: 'buildBetaDetail',
    BuildBundles: 'buildBundles',
    ComputedMinMacOsVersion: 'computedMinMacOsVersion',
    DiagnosticSignatures: 'diagnosticSignatures',
    ExpirationDate: 'expirationDate',
    Expired: 'expired',
    IconAssetToken: 'iconAssetToken',
    Icons: 'icons',
    IndividualTesters: 'individualTesters',
    LsMinimumSystemVersion: 'lsMinimumSystemVersion',
    MinOsVersion: 'minOsVersion',
    PerfPowerMetrics: 'perfPowerMetrics',
    PreReleaseVersion: 'preReleaseVersion',
    ProcessingState: 'processingState',
    UploadedDate: 'uploadedDate',
    UsesNonExemptEncryption: 'usesNonExemptEncryption',
    Version: 'version'
} as const;
export type CiBuildRunsGetInstanceFieldsBuildsEnum = typeof CiBuildRunsGetInstanceFieldsBuildsEnum[keyof typeof CiBuildRunsGetInstanceFieldsBuildsEnum];
