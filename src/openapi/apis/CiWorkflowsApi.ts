/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CiBuildRunsResponse,
  CiWorkflowCreateRequest,
  CiWorkflowResponse,
  CiWorkflowUpdateRequest,
  ErrorResponse,
  ScmRepositoryResponse,
} from '../models';
import {
    CiBuildRunsResponseFromJSON,
    CiBuildRunsResponseToJSON,
    CiWorkflowCreateRequestFromJSON,
    CiWorkflowCreateRequestToJSON,
    CiWorkflowResponseFromJSON,
    CiWorkflowResponseToJSON,
    CiWorkflowUpdateRequestFromJSON,
    CiWorkflowUpdateRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ScmRepositoryResponseFromJSON,
    ScmRepositoryResponseToJSON,
} from '../models';

export interface CiWorkflowsBuildRunsGetToManyRelatedRequest {
    id: string;
    filterBuilds?: Array<string>;
    sort?: Array<CiWorkflowsBuildRunsGetToManyRelatedSortEnum>;
    fieldsScmGitReferences?: Array<CiWorkflowsBuildRunsGetToManyRelatedFieldsScmGitReferencesEnum>;
    fieldsCiBuildRuns?: Array<CiWorkflowsBuildRunsGetToManyRelatedFieldsCiBuildRunsEnum>;
    fieldsCiWorkflows?: Array<CiWorkflowsBuildRunsGetToManyRelatedFieldsCiWorkflowsEnum>;
    fieldsScmPullRequests?: Array<CiWorkflowsBuildRunsGetToManyRelatedFieldsScmPullRequestsEnum>;
    fieldsCiProducts?: Array<CiWorkflowsBuildRunsGetToManyRelatedFieldsCiProductsEnum>;
    fieldsBuilds?: Array<CiWorkflowsBuildRunsGetToManyRelatedFieldsBuildsEnum>;
    limit?: number;
    limitBuilds?: number;
    include?: Array<CiWorkflowsBuildRunsGetToManyRelatedIncludeEnum>;
}

export interface CiWorkflowsCreateInstanceRequest {
    ciWorkflowCreateRequest: CiWorkflowCreateRequest;
}

export interface CiWorkflowsDeleteInstanceRequest {
    id: string;
}

export interface CiWorkflowsGetInstanceRequest {
    id: string;
    fieldsCiWorkflows?: Array<CiWorkflowsGetInstanceFieldsCiWorkflowsEnum>;
    include?: Array<CiWorkflowsGetInstanceIncludeEnum>;
    fieldsCiBuildRuns?: Array<CiWorkflowsGetInstanceFieldsCiBuildRunsEnum>;
    fieldsScmRepositories?: Array<CiWorkflowsGetInstanceFieldsScmRepositoriesEnum>;
}

export interface CiWorkflowsRepositoryGetToOneRelatedRequest {
    id: string;
    fieldsScmGitReferences?: Array<CiWorkflowsRepositoryGetToOneRelatedFieldsScmGitReferencesEnum>;
    fieldsScmProviders?: Array<CiWorkflowsRepositoryGetToOneRelatedFieldsScmProvidersEnum>;
    fieldsScmRepositories?: Array<CiWorkflowsRepositoryGetToOneRelatedFieldsScmRepositoriesEnum>;
    include?: Array<CiWorkflowsRepositoryGetToOneRelatedIncludeEnum>;
}

export interface CiWorkflowsUpdateInstanceRequest {
    id: string;
    ciWorkflowUpdateRequest: CiWorkflowUpdateRequest;
}

/**
 * 
 */
export class CiWorkflowsApi extends runtime.BaseAPI {

    /**
     */
    async ciWorkflowsBuildRunsGetToManyRelatedRaw(requestParameters: CiWorkflowsBuildRunsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiBuildRunsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ciWorkflowsBuildRunsGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.filterBuilds) {
            queryParameters['filter[builds]'] = requestParameters.filterBuilds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.sort) {
            queryParameters['sort'] = requestParameters.sort.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsScmGitReferences) {
            queryParameters['fields[scmGitReferences]'] = requestParameters.fieldsScmGitReferences.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCiBuildRuns) {
            queryParameters['fields[ciBuildRuns]'] = requestParameters.fieldsCiBuildRuns.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCiWorkflows) {
            queryParameters['fields[ciWorkflows]'] = requestParameters.fieldsCiWorkflows.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsScmPullRequests) {
            queryParameters['fields[scmPullRequests]'] = requestParameters.fieldsScmPullRequests.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCiProducts) {
            queryParameters['fields[ciProducts]'] = requestParameters.fieldsCiProducts.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBuilds) {
            queryParameters['fields[builds]'] = requestParameters.fieldsBuilds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.limitBuilds !== undefined) {
            queryParameters['limit[builds]'] = requestParameters.limitBuilds;
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
            path: `/v1/ciWorkflows/{id}/buildRuns`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiBuildRunsResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciWorkflowsBuildRunsGetToManyRelated(requestParameters: CiWorkflowsBuildRunsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiBuildRunsResponse> {
        const response = await this.ciWorkflowsBuildRunsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async ciWorkflowsCreateInstanceRaw(requestParameters: CiWorkflowsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiWorkflowResponse>> {
        if (requestParameters.ciWorkflowCreateRequest === null || requestParameters.ciWorkflowCreateRequest === undefined) {
            throw new runtime.RequiredError('ciWorkflowCreateRequest','Required parameter requestParameters.ciWorkflowCreateRequest was null or undefined when calling ciWorkflowsCreateInstance.');
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
            path: `/v1/ciWorkflows`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CiWorkflowCreateRequestToJSON(requestParameters.ciWorkflowCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiWorkflowResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciWorkflowsCreateInstance(requestParameters: CiWorkflowsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiWorkflowResponse> {
        const response = await this.ciWorkflowsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async ciWorkflowsDeleteInstanceRaw(requestParameters: CiWorkflowsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ciWorkflowsDeleteInstance.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/ciWorkflows/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async ciWorkflowsDeleteInstance(requestParameters: CiWorkflowsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.ciWorkflowsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async ciWorkflowsGetInstanceRaw(requestParameters: CiWorkflowsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiWorkflowResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ciWorkflowsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsCiWorkflows) {
            queryParameters['fields[ciWorkflows]'] = requestParameters.fieldsCiWorkflows.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCiBuildRuns) {
            queryParameters['fields[ciBuildRuns]'] = requestParameters.fieldsCiBuildRuns.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsScmRepositories) {
            queryParameters['fields[scmRepositories]'] = requestParameters.fieldsScmRepositories.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/ciWorkflows/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiWorkflowResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciWorkflowsGetInstance(requestParameters: CiWorkflowsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiWorkflowResponse> {
        const response = await this.ciWorkflowsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async ciWorkflowsRepositoryGetToOneRelatedRaw(requestParameters: CiWorkflowsRepositoryGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScmRepositoryResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ciWorkflowsRepositoryGetToOneRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsScmGitReferences) {
            queryParameters['fields[scmGitReferences]'] = requestParameters.fieldsScmGitReferences.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsScmProviders) {
            queryParameters['fields[scmProviders]'] = requestParameters.fieldsScmProviders.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsScmRepositories) {
            queryParameters['fields[scmRepositories]'] = requestParameters.fieldsScmRepositories.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/ciWorkflows/{id}/repository`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScmRepositoryResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciWorkflowsRepositoryGetToOneRelated(requestParameters: CiWorkflowsRepositoryGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScmRepositoryResponse> {
        const response = await this.ciWorkflowsRepositoryGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async ciWorkflowsUpdateInstanceRaw(requestParameters: CiWorkflowsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiWorkflowResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ciWorkflowsUpdateInstance.');
        }

        if (requestParameters.ciWorkflowUpdateRequest === null || requestParameters.ciWorkflowUpdateRequest === undefined) {
            throw new runtime.RequiredError('ciWorkflowUpdateRequest','Required parameter requestParameters.ciWorkflowUpdateRequest was null or undefined when calling ciWorkflowsUpdateInstance.');
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
            path: `/v1/ciWorkflows/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CiWorkflowUpdateRequestToJSON(requestParameters.ciWorkflowUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiWorkflowResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciWorkflowsUpdateInstance(requestParameters: CiWorkflowsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiWorkflowResponse> {
        const response = await this.ciWorkflowsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CiWorkflowsBuildRunsGetToManyRelatedSortEnum = {
    Number: 'number',
    Number: '-number'
} as const;
export type CiWorkflowsBuildRunsGetToManyRelatedSortEnum = typeof CiWorkflowsBuildRunsGetToManyRelatedSortEnum[keyof typeof CiWorkflowsBuildRunsGetToManyRelatedSortEnum];
/**
 * @export
 */
export const CiWorkflowsBuildRunsGetToManyRelatedFieldsScmGitReferencesEnum = {
    CanonicalName: 'canonicalName',
    IsDeleted: 'isDeleted',
    Kind: 'kind',
    Name: 'name',
    Repository: 'repository'
} as const;
export type CiWorkflowsBuildRunsGetToManyRelatedFieldsScmGitReferencesEnum = typeof CiWorkflowsBuildRunsGetToManyRelatedFieldsScmGitReferencesEnum[keyof typeof CiWorkflowsBuildRunsGetToManyRelatedFieldsScmGitReferencesEnum];
/**
 * @export
 */
export const CiWorkflowsBuildRunsGetToManyRelatedFieldsCiBuildRunsEnum = {
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
export type CiWorkflowsBuildRunsGetToManyRelatedFieldsCiBuildRunsEnum = typeof CiWorkflowsBuildRunsGetToManyRelatedFieldsCiBuildRunsEnum[keyof typeof CiWorkflowsBuildRunsGetToManyRelatedFieldsCiBuildRunsEnum];
/**
 * @export
 */
export const CiWorkflowsBuildRunsGetToManyRelatedFieldsCiWorkflowsEnum = {
    Actions: 'actions',
    BranchStartCondition: 'branchStartCondition',
    BuildRuns: 'buildRuns',
    Clean: 'clean',
    ContainerFilePath: 'containerFilePath',
    Description: 'description',
    IsEnabled: 'isEnabled',
    IsLockedForEditing: 'isLockedForEditing',
    LastModifiedDate: 'lastModifiedDate',
    MacOsVersion: 'macOsVersion',
    ManualBranchStartCondition: 'manualBranchStartCondition',
    ManualPullRequestStartCondition: 'manualPullRequestStartCondition',
    ManualTagStartCondition: 'manualTagStartCondition',
    Name: 'name',
    Product: 'product',
    PullRequestStartCondition: 'pullRequestStartCondition',
    Repository: 'repository',
    ScheduledStartCondition: 'scheduledStartCondition',
    TagStartCondition: 'tagStartCondition',
    XcodeVersion: 'xcodeVersion'
} as const;
export type CiWorkflowsBuildRunsGetToManyRelatedFieldsCiWorkflowsEnum = typeof CiWorkflowsBuildRunsGetToManyRelatedFieldsCiWorkflowsEnum[keyof typeof CiWorkflowsBuildRunsGetToManyRelatedFieldsCiWorkflowsEnum];
/**
 * @export
 */
export const CiWorkflowsBuildRunsGetToManyRelatedFieldsScmPullRequestsEnum = {
    DestinationBranchName: 'destinationBranchName',
    DestinationRepositoryName: 'destinationRepositoryName',
    DestinationRepositoryOwner: 'destinationRepositoryOwner',
    IsClosed: 'isClosed',
    IsCrossRepository: 'isCrossRepository',
    Number: 'number',
    Repository: 'repository',
    SourceBranchName: 'sourceBranchName',
    SourceRepositoryName: 'sourceRepositoryName',
    SourceRepositoryOwner: 'sourceRepositoryOwner',
    Title: 'title',
    WebUrl: 'webUrl'
} as const;
export type CiWorkflowsBuildRunsGetToManyRelatedFieldsScmPullRequestsEnum = typeof CiWorkflowsBuildRunsGetToManyRelatedFieldsScmPullRequestsEnum[keyof typeof CiWorkflowsBuildRunsGetToManyRelatedFieldsScmPullRequestsEnum];
/**
 * @export
 */
export const CiWorkflowsBuildRunsGetToManyRelatedFieldsCiProductsEnum = {
    AdditionalRepositories: 'additionalRepositories',
    App: 'app',
    BuildRuns: 'buildRuns',
    BundleId: 'bundleId',
    CreatedDate: 'createdDate',
    Name: 'name',
    PrimaryRepositories: 'primaryRepositories',
    ProductType: 'productType',
    Workflows: 'workflows'
} as const;
export type CiWorkflowsBuildRunsGetToManyRelatedFieldsCiProductsEnum = typeof CiWorkflowsBuildRunsGetToManyRelatedFieldsCiProductsEnum[keyof typeof CiWorkflowsBuildRunsGetToManyRelatedFieldsCiProductsEnum];
/**
 * @export
 */
export const CiWorkflowsBuildRunsGetToManyRelatedFieldsBuildsEnum = {
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
export type CiWorkflowsBuildRunsGetToManyRelatedFieldsBuildsEnum = typeof CiWorkflowsBuildRunsGetToManyRelatedFieldsBuildsEnum[keyof typeof CiWorkflowsBuildRunsGetToManyRelatedFieldsBuildsEnum];
/**
 * @export
 */
export const CiWorkflowsBuildRunsGetToManyRelatedIncludeEnum = {
    Builds: 'builds',
    DestinationBranch: 'destinationBranch',
    Product: 'product',
    PullRequest: 'pullRequest',
    SourceBranchOrTag: 'sourceBranchOrTag',
    Workflow: 'workflow'
} as const;
export type CiWorkflowsBuildRunsGetToManyRelatedIncludeEnum = typeof CiWorkflowsBuildRunsGetToManyRelatedIncludeEnum[keyof typeof CiWorkflowsBuildRunsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const CiWorkflowsGetInstanceFieldsCiWorkflowsEnum = {
    Actions: 'actions',
    BranchStartCondition: 'branchStartCondition',
    BuildRuns: 'buildRuns',
    Clean: 'clean',
    ContainerFilePath: 'containerFilePath',
    Description: 'description',
    IsEnabled: 'isEnabled',
    IsLockedForEditing: 'isLockedForEditing',
    LastModifiedDate: 'lastModifiedDate',
    MacOsVersion: 'macOsVersion',
    ManualBranchStartCondition: 'manualBranchStartCondition',
    ManualPullRequestStartCondition: 'manualPullRequestStartCondition',
    ManualTagStartCondition: 'manualTagStartCondition',
    Name: 'name',
    Product: 'product',
    PullRequestStartCondition: 'pullRequestStartCondition',
    Repository: 'repository',
    ScheduledStartCondition: 'scheduledStartCondition',
    TagStartCondition: 'tagStartCondition',
    XcodeVersion: 'xcodeVersion'
} as const;
export type CiWorkflowsGetInstanceFieldsCiWorkflowsEnum = typeof CiWorkflowsGetInstanceFieldsCiWorkflowsEnum[keyof typeof CiWorkflowsGetInstanceFieldsCiWorkflowsEnum];
/**
 * @export
 */
export const CiWorkflowsGetInstanceIncludeEnum = {
    MacOsVersion: 'macOsVersion',
    Product: 'product',
    Repository: 'repository',
    XcodeVersion: 'xcodeVersion'
} as const;
export type CiWorkflowsGetInstanceIncludeEnum = typeof CiWorkflowsGetInstanceIncludeEnum[keyof typeof CiWorkflowsGetInstanceIncludeEnum];
/**
 * @export
 */
export const CiWorkflowsGetInstanceFieldsCiBuildRunsEnum = {
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
export type CiWorkflowsGetInstanceFieldsCiBuildRunsEnum = typeof CiWorkflowsGetInstanceFieldsCiBuildRunsEnum[keyof typeof CiWorkflowsGetInstanceFieldsCiBuildRunsEnum];
/**
 * @export
 */
export const CiWorkflowsGetInstanceFieldsScmRepositoriesEnum = {
    DefaultBranch: 'defaultBranch',
    GitReferences: 'gitReferences',
    HttpCloneUrl: 'httpCloneUrl',
    LastAccessedDate: 'lastAccessedDate',
    OwnerName: 'ownerName',
    PullRequests: 'pullRequests',
    RepositoryName: 'repositoryName',
    ScmProvider: 'scmProvider',
    SshCloneUrl: 'sshCloneUrl'
} as const;
export type CiWorkflowsGetInstanceFieldsScmRepositoriesEnum = typeof CiWorkflowsGetInstanceFieldsScmRepositoriesEnum[keyof typeof CiWorkflowsGetInstanceFieldsScmRepositoriesEnum];
/**
 * @export
 */
export const CiWorkflowsRepositoryGetToOneRelatedFieldsScmGitReferencesEnum = {
    CanonicalName: 'canonicalName',
    IsDeleted: 'isDeleted',
    Kind: 'kind',
    Name: 'name',
    Repository: 'repository'
} as const;
export type CiWorkflowsRepositoryGetToOneRelatedFieldsScmGitReferencesEnum = typeof CiWorkflowsRepositoryGetToOneRelatedFieldsScmGitReferencesEnum[keyof typeof CiWorkflowsRepositoryGetToOneRelatedFieldsScmGitReferencesEnum];
/**
 * @export
 */
export const CiWorkflowsRepositoryGetToOneRelatedFieldsScmProvidersEnum = {
    Repositories: 'repositories',
    ScmProviderType: 'scmProviderType',
    Url: 'url'
} as const;
export type CiWorkflowsRepositoryGetToOneRelatedFieldsScmProvidersEnum = typeof CiWorkflowsRepositoryGetToOneRelatedFieldsScmProvidersEnum[keyof typeof CiWorkflowsRepositoryGetToOneRelatedFieldsScmProvidersEnum];
/**
 * @export
 */
export const CiWorkflowsRepositoryGetToOneRelatedFieldsScmRepositoriesEnum = {
    DefaultBranch: 'defaultBranch',
    GitReferences: 'gitReferences',
    HttpCloneUrl: 'httpCloneUrl',
    LastAccessedDate: 'lastAccessedDate',
    OwnerName: 'ownerName',
    PullRequests: 'pullRequests',
    RepositoryName: 'repositoryName',
    ScmProvider: 'scmProvider',
    SshCloneUrl: 'sshCloneUrl'
} as const;
export type CiWorkflowsRepositoryGetToOneRelatedFieldsScmRepositoriesEnum = typeof CiWorkflowsRepositoryGetToOneRelatedFieldsScmRepositoriesEnum[keyof typeof CiWorkflowsRepositoryGetToOneRelatedFieldsScmRepositoriesEnum];
/**
 * @export
 */
export const CiWorkflowsRepositoryGetToOneRelatedIncludeEnum = {
    DefaultBranch: 'defaultBranch',
    ScmProvider: 'scmProvider'
} as const;
export type CiWorkflowsRepositoryGetToOneRelatedIncludeEnum = typeof CiWorkflowsRepositoryGetToOneRelatedIncludeEnum[keyof typeof CiWorkflowsRepositoryGetToOneRelatedIncludeEnum];
