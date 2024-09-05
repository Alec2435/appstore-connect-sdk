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
  AlternativeDistributionPackageCreateRequest,
  AlternativeDistributionPackageResponse,
  AlternativeDistributionPackageVersionsResponse,
  ErrorResponse,
} from '../models';
import {
    AlternativeDistributionPackageCreateRequestFromJSON,
    AlternativeDistributionPackageCreateRequestToJSON,
    AlternativeDistributionPackageResponseFromJSON,
    AlternativeDistributionPackageResponseToJSON,
    AlternativeDistributionPackageVersionsResponseFromJSON,
    AlternativeDistributionPackageVersionsResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface AlternativeDistributionPackagesCreateInstanceRequest {
    alternativeDistributionPackageCreateRequest: AlternativeDistributionPackageCreateRequest;
}

export interface AlternativeDistributionPackagesGetInstanceRequest {
    id: string;
    fieldsAlternativeDistributionPackages?: Array<AlternativeDistributionPackagesGetInstanceFieldsAlternativeDistributionPackagesEnum>;
    include?: Array<AlternativeDistributionPackagesGetInstanceIncludeEnum>;
    fieldsAlternativeDistributionPackageVersions?: Array<AlternativeDistributionPackagesGetInstanceFieldsAlternativeDistributionPackageVersionsEnum>;
    limitVersions?: number;
}

export interface AlternativeDistributionPackagesVersionsGetToManyRelatedRequest {
    id: string;
    filterState?: Array<AlternativeDistributionPackagesVersionsGetToManyRelatedFilterStateEnum>;
    fieldsAlternativeDistributionPackageVariants?: Array<AlternativeDistributionPackagesVersionsGetToManyRelatedFieldsAlternativeDistributionPackageVariantsEnum>;
    fieldsAlternativeDistributionPackages?: Array<AlternativeDistributionPackagesVersionsGetToManyRelatedFieldsAlternativeDistributionPackagesEnum>;
    fieldsAlternativeDistributionPackageVersions?: Array<AlternativeDistributionPackagesVersionsGetToManyRelatedFieldsAlternativeDistributionPackageVersionsEnum>;
    fieldsAlternativeDistributionPackageDeltas?: Array<AlternativeDistributionPackagesVersionsGetToManyRelatedFieldsAlternativeDistributionPackageDeltasEnum>;
    limit?: number;
    limitVariants?: number;
    limitDeltas?: number;
    include?: Array<AlternativeDistributionPackagesVersionsGetToManyRelatedIncludeEnum>;
}

/**
 * 
 */
export class AlternativeDistributionPackagesApi extends runtime.BaseAPI {

    /**
     */
    async alternativeDistributionPackagesCreateInstanceRaw(requestParameters: AlternativeDistributionPackagesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AlternativeDistributionPackageResponse>> {
        if (requestParameters.alternativeDistributionPackageCreateRequest === null || requestParameters.alternativeDistributionPackageCreateRequest === undefined) {
            throw new runtime.RequiredError('alternativeDistributionPackageCreateRequest','Required parameter requestParameters.alternativeDistributionPackageCreateRequest was null or undefined when calling alternativeDistributionPackagesCreateInstance.');
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
            path: `/v1/alternativeDistributionPackages`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AlternativeDistributionPackageCreateRequestToJSON(requestParameters.alternativeDistributionPackageCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AlternativeDistributionPackageResponseFromJSON(jsonValue));
    }

    /**
     */
    async alternativeDistributionPackagesCreateInstance(requestParameters: AlternativeDistributionPackagesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AlternativeDistributionPackageResponse> {
        const response = await this.alternativeDistributionPackagesCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async alternativeDistributionPackagesGetInstanceRaw(requestParameters: AlternativeDistributionPackagesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AlternativeDistributionPackageResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling alternativeDistributionPackagesGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsAlternativeDistributionPackages) {
            queryParameters['fields[alternativeDistributionPackages]'] = requestParameters.fieldsAlternativeDistributionPackages.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAlternativeDistributionPackageVersions) {
            queryParameters['fields[alternativeDistributionPackageVersions]'] = requestParameters.fieldsAlternativeDistributionPackageVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitVersions !== undefined) {
            queryParameters['limit[versions]'] = requestParameters.limitVersions;
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
            path: `/v1/alternativeDistributionPackages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AlternativeDistributionPackageResponseFromJSON(jsonValue));
    }

    /**
     */
    async alternativeDistributionPackagesGetInstance(requestParameters: AlternativeDistributionPackagesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AlternativeDistributionPackageResponse> {
        const response = await this.alternativeDistributionPackagesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async alternativeDistributionPackagesVersionsGetToManyRelatedRaw(requestParameters: AlternativeDistributionPackagesVersionsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AlternativeDistributionPackageVersionsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling alternativeDistributionPackagesVersionsGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.filterState) {
            queryParameters['filter[state]'] = requestParameters.filterState.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAlternativeDistributionPackageVariants) {
            queryParameters['fields[alternativeDistributionPackageVariants]'] = requestParameters.fieldsAlternativeDistributionPackageVariants.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAlternativeDistributionPackages) {
            queryParameters['fields[alternativeDistributionPackages]'] = requestParameters.fieldsAlternativeDistributionPackages.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAlternativeDistributionPackageVersions) {
            queryParameters['fields[alternativeDistributionPackageVersions]'] = requestParameters.fieldsAlternativeDistributionPackageVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAlternativeDistributionPackageDeltas) {
            queryParameters['fields[alternativeDistributionPackageDeltas]'] = requestParameters.fieldsAlternativeDistributionPackageDeltas.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.limitVariants !== undefined) {
            queryParameters['limit[variants]'] = requestParameters.limitVariants;
        }

        if (requestParameters.limitDeltas !== undefined) {
            queryParameters['limit[deltas]'] = requestParameters.limitDeltas;
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
            path: `/v1/alternativeDistributionPackages/{id}/versions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AlternativeDistributionPackageVersionsResponseFromJSON(jsonValue));
    }

    /**
     */
    async alternativeDistributionPackagesVersionsGetToManyRelated(requestParameters: AlternativeDistributionPackagesVersionsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AlternativeDistributionPackageVersionsResponse> {
        const response = await this.alternativeDistributionPackagesVersionsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AlternativeDistributionPackagesGetInstanceFieldsAlternativeDistributionPackagesEnum = {
    AppStoreVersion: 'appStoreVersion',
    Versions: 'versions'
} as const;
export type AlternativeDistributionPackagesGetInstanceFieldsAlternativeDistributionPackagesEnum = typeof AlternativeDistributionPackagesGetInstanceFieldsAlternativeDistributionPackagesEnum[keyof typeof AlternativeDistributionPackagesGetInstanceFieldsAlternativeDistributionPackagesEnum];
/**
 * @export
 */
export const AlternativeDistributionPackagesGetInstanceIncludeEnum = {
    Versions: 'versions'
} as const;
export type AlternativeDistributionPackagesGetInstanceIncludeEnum = typeof AlternativeDistributionPackagesGetInstanceIncludeEnum[keyof typeof AlternativeDistributionPackagesGetInstanceIncludeEnum];
/**
 * @export
 */
export const AlternativeDistributionPackagesGetInstanceFieldsAlternativeDistributionPackageVersionsEnum = {
    AlternativeDistributionPackage: 'alternativeDistributionPackage',
    Deltas: 'deltas',
    FileChecksum: 'fileChecksum',
    State: 'state',
    Url: 'url',
    UrlExpirationDate: 'urlExpirationDate',
    Variants: 'variants',
    Version: 'version'
} as const;
export type AlternativeDistributionPackagesGetInstanceFieldsAlternativeDistributionPackageVersionsEnum = typeof AlternativeDistributionPackagesGetInstanceFieldsAlternativeDistributionPackageVersionsEnum[keyof typeof AlternativeDistributionPackagesGetInstanceFieldsAlternativeDistributionPackageVersionsEnum];
/**
 * @export
 */
export const AlternativeDistributionPackagesVersionsGetToManyRelatedFilterStateEnum = {
    Completed: 'COMPLETED',
    Replaced: 'REPLACED'
} as const;
export type AlternativeDistributionPackagesVersionsGetToManyRelatedFilterStateEnum = typeof AlternativeDistributionPackagesVersionsGetToManyRelatedFilterStateEnum[keyof typeof AlternativeDistributionPackagesVersionsGetToManyRelatedFilterStateEnum];
/**
 * @export
 */
export const AlternativeDistributionPackagesVersionsGetToManyRelatedFieldsAlternativeDistributionPackageVariantsEnum = {
    AlternativeDistributionKeyBlob: 'alternativeDistributionKeyBlob',
    FileChecksum: 'fileChecksum',
    Url: 'url',
    UrlExpirationDate: 'urlExpirationDate'
} as const;
export type AlternativeDistributionPackagesVersionsGetToManyRelatedFieldsAlternativeDistributionPackageVariantsEnum = typeof AlternativeDistributionPackagesVersionsGetToManyRelatedFieldsAlternativeDistributionPackageVariantsEnum[keyof typeof AlternativeDistributionPackagesVersionsGetToManyRelatedFieldsAlternativeDistributionPackageVariantsEnum];
/**
 * @export
 */
export const AlternativeDistributionPackagesVersionsGetToManyRelatedFieldsAlternativeDistributionPackagesEnum = {
    AppStoreVersion: 'appStoreVersion',
    Versions: 'versions'
} as const;
export type AlternativeDistributionPackagesVersionsGetToManyRelatedFieldsAlternativeDistributionPackagesEnum = typeof AlternativeDistributionPackagesVersionsGetToManyRelatedFieldsAlternativeDistributionPackagesEnum[keyof typeof AlternativeDistributionPackagesVersionsGetToManyRelatedFieldsAlternativeDistributionPackagesEnum];
/**
 * @export
 */
export const AlternativeDistributionPackagesVersionsGetToManyRelatedFieldsAlternativeDistributionPackageVersionsEnum = {
    AlternativeDistributionPackage: 'alternativeDistributionPackage',
    Deltas: 'deltas',
    FileChecksum: 'fileChecksum',
    State: 'state',
    Url: 'url',
    UrlExpirationDate: 'urlExpirationDate',
    Variants: 'variants',
    Version: 'version'
} as const;
export type AlternativeDistributionPackagesVersionsGetToManyRelatedFieldsAlternativeDistributionPackageVersionsEnum = typeof AlternativeDistributionPackagesVersionsGetToManyRelatedFieldsAlternativeDistributionPackageVersionsEnum[keyof typeof AlternativeDistributionPackagesVersionsGetToManyRelatedFieldsAlternativeDistributionPackageVersionsEnum];
/**
 * @export
 */
export const AlternativeDistributionPackagesVersionsGetToManyRelatedFieldsAlternativeDistributionPackageDeltasEnum = {
    AlternativeDistributionKeyBlob: 'alternativeDistributionKeyBlob',
    FileChecksum: 'fileChecksum',
    Url: 'url',
    UrlExpirationDate: 'urlExpirationDate'
} as const;
export type AlternativeDistributionPackagesVersionsGetToManyRelatedFieldsAlternativeDistributionPackageDeltasEnum = typeof AlternativeDistributionPackagesVersionsGetToManyRelatedFieldsAlternativeDistributionPackageDeltasEnum[keyof typeof AlternativeDistributionPackagesVersionsGetToManyRelatedFieldsAlternativeDistributionPackageDeltasEnum];
/**
 * @export
 */
export const AlternativeDistributionPackagesVersionsGetToManyRelatedIncludeEnum = {
    AlternativeDistributionPackage: 'alternativeDistributionPackage',
    Deltas: 'deltas',
    Variants: 'variants'
} as const;
export type AlternativeDistributionPackagesVersionsGetToManyRelatedIncludeEnum = typeof AlternativeDistributionPackagesVersionsGetToManyRelatedIncludeEnum[keyof typeof AlternativeDistributionPackagesVersionsGetToManyRelatedIncludeEnum];
