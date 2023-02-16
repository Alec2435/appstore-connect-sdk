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
  ErrorResponse,
  ScmGitReferencesResponse,
  ScmPullRequestsResponse,
  ScmRepositoriesResponse,
  ScmRepositoryResponse,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ScmGitReferencesResponseFromJSON,
    ScmGitReferencesResponseToJSON,
    ScmPullRequestsResponseFromJSON,
    ScmPullRequestsResponseToJSON,
    ScmRepositoriesResponseFromJSON,
    ScmRepositoriesResponseToJSON,
    ScmRepositoryResponseFromJSON,
    ScmRepositoryResponseToJSON,
} from '../models';

export interface ScmRepositoriesGetCollectionRequest {
    filterId?: Array<string>;
    fieldsScmRepositories?: Array<ScmRepositoriesGetCollectionFieldsScmRepositoriesEnum>;
    limit?: number;
    include?: Array<ScmRepositoriesGetCollectionIncludeEnum>;
    fieldsScmGitReferences?: Array<ScmRepositoriesGetCollectionFieldsScmGitReferencesEnum>;
    fieldsScmPullRequests?: Array<ScmRepositoriesGetCollectionFieldsScmPullRequestsEnum>;
}

export interface ScmRepositoriesGetInstanceRequest {
    id: string;
    fieldsScmRepositories?: Array<ScmRepositoriesGetInstanceFieldsScmRepositoriesEnum>;
    include?: Array<ScmRepositoriesGetInstanceIncludeEnum>;
    fieldsScmGitReferences?: Array<ScmRepositoriesGetInstanceFieldsScmGitReferencesEnum>;
    fieldsScmPullRequests?: Array<ScmRepositoriesGetInstanceFieldsScmPullRequestsEnum>;
}

export interface ScmRepositoriesGitReferencesGetToManyRelatedRequest {
    id: string;
    fieldsScmGitReferences?: Array<ScmRepositoriesGitReferencesGetToManyRelatedFieldsScmGitReferencesEnum>;
    fieldsScmRepositories?: Array<ScmRepositoriesGitReferencesGetToManyRelatedFieldsScmRepositoriesEnum>;
    limit?: number;
    include?: Array<ScmRepositoriesGitReferencesGetToManyRelatedIncludeEnum>;
}

export interface ScmRepositoriesPullRequestsGetToManyRelatedRequest {
    id: string;
    fieldsScmPullRequests?: Array<ScmRepositoriesPullRequestsGetToManyRelatedFieldsScmPullRequestsEnum>;
    fieldsScmRepositories?: Array<ScmRepositoriesPullRequestsGetToManyRelatedFieldsScmRepositoriesEnum>;
    limit?: number;
    include?: Array<ScmRepositoriesPullRequestsGetToManyRelatedIncludeEnum>;
}

/**
 * 
 */
export class ScmRepositoriesApi extends runtime.BaseAPI {

    /**
     */
    async scmRepositoriesGetCollectionRaw(requestParameters: ScmRepositoriesGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScmRepositoriesResponse>> {
        const queryParameters: any = {};

        if (requestParameters.filterId) {
            queryParameters['filter[id]'] = requestParameters.filterId.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsScmRepositories) {
            queryParameters['fields[scmRepositories]'] = requestParameters.fieldsScmRepositories.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsScmGitReferences) {
            queryParameters['fields[scmGitReferences]'] = requestParameters.fieldsScmGitReferences.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsScmPullRequests) {
            queryParameters['fields[scmPullRequests]'] = requestParameters.fieldsScmPullRequests.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/scmRepositories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScmRepositoriesResponseFromJSON(jsonValue));
    }

    /**
     */
    async scmRepositoriesGetCollection(requestParameters: ScmRepositoriesGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScmRepositoriesResponse> {
        const response = await this.scmRepositoriesGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async scmRepositoriesGetInstanceRaw(requestParameters: ScmRepositoriesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScmRepositoryResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling scmRepositoriesGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsScmRepositories) {
            queryParameters['fields[scmRepositories]'] = requestParameters.fieldsScmRepositories.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsScmGitReferences) {
            queryParameters['fields[scmGitReferences]'] = requestParameters.fieldsScmGitReferences.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsScmPullRequests) {
            queryParameters['fields[scmPullRequests]'] = requestParameters.fieldsScmPullRequests.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/scmRepositories/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScmRepositoryResponseFromJSON(jsonValue));
    }

    /**
     */
    async scmRepositoriesGetInstance(requestParameters: ScmRepositoriesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScmRepositoryResponse> {
        const response = await this.scmRepositoriesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async scmRepositoriesGitReferencesGetToManyRelatedRaw(requestParameters: ScmRepositoriesGitReferencesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScmGitReferencesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling scmRepositoriesGitReferencesGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsScmGitReferences) {
            queryParameters['fields[scmGitReferences]'] = requestParameters.fieldsScmGitReferences.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsScmRepositories) {
            queryParameters['fields[scmRepositories]'] = requestParameters.fieldsScmRepositories.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/scmRepositories/{id}/gitReferences`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScmGitReferencesResponseFromJSON(jsonValue));
    }

    /**
     */
    async scmRepositoriesGitReferencesGetToManyRelated(requestParameters: ScmRepositoriesGitReferencesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScmGitReferencesResponse> {
        const response = await this.scmRepositoriesGitReferencesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async scmRepositoriesPullRequestsGetToManyRelatedRaw(requestParameters: ScmRepositoriesPullRequestsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScmPullRequestsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling scmRepositoriesPullRequestsGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsScmPullRequests) {
            queryParameters['fields[scmPullRequests]'] = requestParameters.fieldsScmPullRequests.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsScmRepositories) {
            queryParameters['fields[scmRepositories]'] = requestParameters.fieldsScmRepositories.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/scmRepositories/{id}/pullRequests`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScmPullRequestsResponseFromJSON(jsonValue));
    }

    /**
     */
    async scmRepositoriesPullRequestsGetToManyRelated(requestParameters: ScmRepositoriesPullRequestsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScmPullRequestsResponse> {
        const response = await this.scmRepositoriesPullRequestsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ScmRepositoriesGetCollectionFieldsScmRepositoriesEnum = {
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
export type ScmRepositoriesGetCollectionFieldsScmRepositoriesEnum = typeof ScmRepositoriesGetCollectionFieldsScmRepositoriesEnum[keyof typeof ScmRepositoriesGetCollectionFieldsScmRepositoriesEnum];
/**
 * @export
 */
export const ScmRepositoriesGetCollectionIncludeEnum = {
    DefaultBranch: 'defaultBranch',
    ScmProvider: 'scmProvider'
} as const;
export type ScmRepositoriesGetCollectionIncludeEnum = typeof ScmRepositoriesGetCollectionIncludeEnum[keyof typeof ScmRepositoriesGetCollectionIncludeEnum];
/**
 * @export
 */
export const ScmRepositoriesGetCollectionFieldsScmGitReferencesEnum = {
    CanonicalName: 'canonicalName',
    IsDeleted: 'isDeleted',
    Kind: 'kind',
    Name: 'name',
    Repository: 'repository'
} as const;
export type ScmRepositoriesGetCollectionFieldsScmGitReferencesEnum = typeof ScmRepositoriesGetCollectionFieldsScmGitReferencesEnum[keyof typeof ScmRepositoriesGetCollectionFieldsScmGitReferencesEnum];
/**
 * @export
 */
export const ScmRepositoriesGetCollectionFieldsScmPullRequestsEnum = {
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
export type ScmRepositoriesGetCollectionFieldsScmPullRequestsEnum = typeof ScmRepositoriesGetCollectionFieldsScmPullRequestsEnum[keyof typeof ScmRepositoriesGetCollectionFieldsScmPullRequestsEnum];
/**
 * @export
 */
export const ScmRepositoriesGetInstanceFieldsScmRepositoriesEnum = {
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
export type ScmRepositoriesGetInstanceFieldsScmRepositoriesEnum = typeof ScmRepositoriesGetInstanceFieldsScmRepositoriesEnum[keyof typeof ScmRepositoriesGetInstanceFieldsScmRepositoriesEnum];
/**
 * @export
 */
export const ScmRepositoriesGetInstanceIncludeEnum = {
    DefaultBranch: 'defaultBranch',
    ScmProvider: 'scmProvider'
} as const;
export type ScmRepositoriesGetInstanceIncludeEnum = typeof ScmRepositoriesGetInstanceIncludeEnum[keyof typeof ScmRepositoriesGetInstanceIncludeEnum];
/**
 * @export
 */
export const ScmRepositoriesGetInstanceFieldsScmGitReferencesEnum = {
    CanonicalName: 'canonicalName',
    IsDeleted: 'isDeleted',
    Kind: 'kind',
    Name: 'name',
    Repository: 'repository'
} as const;
export type ScmRepositoriesGetInstanceFieldsScmGitReferencesEnum = typeof ScmRepositoriesGetInstanceFieldsScmGitReferencesEnum[keyof typeof ScmRepositoriesGetInstanceFieldsScmGitReferencesEnum];
/**
 * @export
 */
export const ScmRepositoriesGetInstanceFieldsScmPullRequestsEnum = {
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
export type ScmRepositoriesGetInstanceFieldsScmPullRequestsEnum = typeof ScmRepositoriesGetInstanceFieldsScmPullRequestsEnum[keyof typeof ScmRepositoriesGetInstanceFieldsScmPullRequestsEnum];
/**
 * @export
 */
export const ScmRepositoriesGitReferencesGetToManyRelatedFieldsScmGitReferencesEnum = {
    CanonicalName: 'canonicalName',
    IsDeleted: 'isDeleted',
    Kind: 'kind',
    Name: 'name',
    Repository: 'repository'
} as const;
export type ScmRepositoriesGitReferencesGetToManyRelatedFieldsScmGitReferencesEnum = typeof ScmRepositoriesGitReferencesGetToManyRelatedFieldsScmGitReferencesEnum[keyof typeof ScmRepositoriesGitReferencesGetToManyRelatedFieldsScmGitReferencesEnum];
/**
 * @export
 */
export const ScmRepositoriesGitReferencesGetToManyRelatedFieldsScmRepositoriesEnum = {
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
export type ScmRepositoriesGitReferencesGetToManyRelatedFieldsScmRepositoriesEnum = typeof ScmRepositoriesGitReferencesGetToManyRelatedFieldsScmRepositoriesEnum[keyof typeof ScmRepositoriesGitReferencesGetToManyRelatedFieldsScmRepositoriesEnum];
/**
 * @export
 */
export const ScmRepositoriesGitReferencesGetToManyRelatedIncludeEnum = {
    Repository: 'repository'
} as const;
export type ScmRepositoriesGitReferencesGetToManyRelatedIncludeEnum = typeof ScmRepositoriesGitReferencesGetToManyRelatedIncludeEnum[keyof typeof ScmRepositoriesGitReferencesGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const ScmRepositoriesPullRequestsGetToManyRelatedFieldsScmPullRequestsEnum = {
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
export type ScmRepositoriesPullRequestsGetToManyRelatedFieldsScmPullRequestsEnum = typeof ScmRepositoriesPullRequestsGetToManyRelatedFieldsScmPullRequestsEnum[keyof typeof ScmRepositoriesPullRequestsGetToManyRelatedFieldsScmPullRequestsEnum];
/**
 * @export
 */
export const ScmRepositoriesPullRequestsGetToManyRelatedFieldsScmRepositoriesEnum = {
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
export type ScmRepositoriesPullRequestsGetToManyRelatedFieldsScmRepositoriesEnum = typeof ScmRepositoriesPullRequestsGetToManyRelatedFieldsScmRepositoriesEnum[keyof typeof ScmRepositoriesPullRequestsGetToManyRelatedFieldsScmRepositoriesEnum];
/**
 * @export
 */
export const ScmRepositoriesPullRequestsGetToManyRelatedIncludeEnum = {
    Repository: 'repository'
} as const;
export type ScmRepositoriesPullRequestsGetToManyRelatedIncludeEnum = typeof ScmRepositoriesPullRequestsGetToManyRelatedIncludeEnum[keyof typeof ScmRepositoriesPullRequestsGetToManyRelatedIncludeEnum];
