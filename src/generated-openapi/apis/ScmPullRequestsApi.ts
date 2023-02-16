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
  ScmPullRequestResponse,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ScmPullRequestResponseFromJSON,
    ScmPullRequestResponseToJSON,
} from '../models';

export interface ScmPullRequestsGetInstanceRequest {
    id: string;
    fieldsScmPullRequests?: Array<ScmPullRequestsGetInstanceFieldsScmPullRequestsEnum>;
    include?: Array<ScmPullRequestsGetInstanceIncludeEnum>;
}

/**
 * 
 */
export class ScmPullRequestsApi extends runtime.BaseAPI {

    /**
     */
    async scmPullRequestsGetInstanceRaw(requestParameters: ScmPullRequestsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScmPullRequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling scmPullRequestsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsScmPullRequests) {
            queryParameters['fields[scmPullRequests]'] = requestParameters.fieldsScmPullRequests.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/scmPullRequests/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScmPullRequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async scmPullRequestsGetInstance(requestParameters: ScmPullRequestsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScmPullRequestResponse> {
        const response = await this.scmPullRequestsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ScmPullRequestsGetInstanceFieldsScmPullRequestsEnum = {
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
export type ScmPullRequestsGetInstanceFieldsScmPullRequestsEnum = typeof ScmPullRequestsGetInstanceFieldsScmPullRequestsEnum[keyof typeof ScmPullRequestsGetInstanceFieldsScmPullRequestsEnum];
/**
 * @export
 */
export const ScmPullRequestsGetInstanceIncludeEnum = {
    Repository: 'repository'
} as const;
export type ScmPullRequestsGetInstanceIncludeEnum = typeof ScmPullRequestsGetInstanceIncludeEnum[keyof typeof ScmPullRequestsGetInstanceIncludeEnum];
