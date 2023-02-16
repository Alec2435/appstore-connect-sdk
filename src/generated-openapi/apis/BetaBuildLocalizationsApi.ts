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
  BetaBuildLocalizationCreateRequest,
  BetaBuildLocalizationResponse,
  BetaBuildLocalizationUpdateRequest,
  BetaBuildLocalizationsResponse,
  BuildResponse,
  ErrorResponse,
} from '../models';
import {
    BetaBuildLocalizationCreateRequestFromJSON,
    BetaBuildLocalizationCreateRequestToJSON,
    BetaBuildLocalizationResponseFromJSON,
    BetaBuildLocalizationResponseToJSON,
    BetaBuildLocalizationUpdateRequestFromJSON,
    BetaBuildLocalizationUpdateRequestToJSON,
    BetaBuildLocalizationsResponseFromJSON,
    BetaBuildLocalizationsResponseToJSON,
    BuildResponseFromJSON,
    BuildResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface BetaBuildLocalizationsBuildGetToOneRelatedRequest {
    id: string;
    fieldsBuilds?: Array<BetaBuildLocalizationsBuildGetToOneRelatedFieldsBuildsEnum>;
}

export interface BetaBuildLocalizationsCreateInstanceRequest {
    betaBuildLocalizationCreateRequest: BetaBuildLocalizationCreateRequest;
}

export interface BetaBuildLocalizationsDeleteInstanceRequest {
    id: string;
}

export interface BetaBuildLocalizationsGetCollectionRequest {
    filterLocale?: Array<string>;
    filterBuild?: Array<string>;
    fieldsBetaBuildLocalizations?: Array<BetaBuildLocalizationsGetCollectionFieldsBetaBuildLocalizationsEnum>;
    limit?: number;
    include?: Array<BetaBuildLocalizationsGetCollectionIncludeEnum>;
    fieldsBuilds?: Array<BetaBuildLocalizationsGetCollectionFieldsBuildsEnum>;
}

export interface BetaBuildLocalizationsGetInstanceRequest {
    id: string;
    fieldsBetaBuildLocalizations?: Array<BetaBuildLocalizationsGetInstanceFieldsBetaBuildLocalizationsEnum>;
    include?: Array<BetaBuildLocalizationsGetInstanceIncludeEnum>;
    fieldsBuilds?: Array<BetaBuildLocalizationsGetInstanceFieldsBuildsEnum>;
}

export interface BetaBuildLocalizationsUpdateInstanceRequest {
    id: string;
    betaBuildLocalizationUpdateRequest: BetaBuildLocalizationUpdateRequest;
}

/**
 * 
 */
export class BetaBuildLocalizationsApi extends runtime.BaseAPI {

    /**
     */
    async betaBuildLocalizationsBuildGetToOneRelatedRaw(requestParameters: BetaBuildLocalizationsBuildGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BuildResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling betaBuildLocalizationsBuildGetToOneRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsBuilds) {
            queryParameters['fields[builds]'] = requestParameters.fieldsBuilds.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/betaBuildLocalizations/{id}/build`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BuildResponseFromJSON(jsonValue));
    }

    /**
     */
    async betaBuildLocalizationsBuildGetToOneRelated(requestParameters: BetaBuildLocalizationsBuildGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BuildResponse> {
        const response = await this.betaBuildLocalizationsBuildGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async betaBuildLocalizationsCreateInstanceRaw(requestParameters: BetaBuildLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaBuildLocalizationResponse>> {
        if (requestParameters.betaBuildLocalizationCreateRequest === null || requestParameters.betaBuildLocalizationCreateRequest === undefined) {
            throw new runtime.RequiredError('betaBuildLocalizationCreateRequest','Required parameter requestParameters.betaBuildLocalizationCreateRequest was null or undefined when calling betaBuildLocalizationsCreateInstance.');
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
            path: `/v1/betaBuildLocalizations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BetaBuildLocalizationCreateRequestToJSON(requestParameters.betaBuildLocalizationCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BetaBuildLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async betaBuildLocalizationsCreateInstance(requestParameters: BetaBuildLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaBuildLocalizationResponse> {
        const response = await this.betaBuildLocalizationsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async betaBuildLocalizationsDeleteInstanceRaw(requestParameters: BetaBuildLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling betaBuildLocalizationsDeleteInstance.');
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
            path: `/v1/betaBuildLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async betaBuildLocalizationsDeleteInstance(requestParameters: BetaBuildLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.betaBuildLocalizationsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async betaBuildLocalizationsGetCollectionRaw(requestParameters: BetaBuildLocalizationsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaBuildLocalizationsResponse>> {
        const queryParameters: any = {};

        if (requestParameters.filterLocale) {
            queryParameters['filter[locale]'] = requestParameters.filterLocale.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterBuild) {
            queryParameters['filter[build]'] = requestParameters.filterBuild.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBetaBuildLocalizations) {
            queryParameters['fields[betaBuildLocalizations]'] = requestParameters.fieldsBetaBuildLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBuilds) {
            queryParameters['fields[builds]'] = requestParameters.fieldsBuilds.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/betaBuildLocalizations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BetaBuildLocalizationsResponseFromJSON(jsonValue));
    }

    /**
     */
    async betaBuildLocalizationsGetCollection(requestParameters: BetaBuildLocalizationsGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaBuildLocalizationsResponse> {
        const response = await this.betaBuildLocalizationsGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async betaBuildLocalizationsGetInstanceRaw(requestParameters: BetaBuildLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaBuildLocalizationResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling betaBuildLocalizationsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsBetaBuildLocalizations) {
            queryParameters['fields[betaBuildLocalizations]'] = requestParameters.fieldsBetaBuildLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBuilds) {
            queryParameters['fields[builds]'] = requestParameters.fieldsBuilds.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/betaBuildLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BetaBuildLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async betaBuildLocalizationsGetInstance(requestParameters: BetaBuildLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaBuildLocalizationResponse> {
        const response = await this.betaBuildLocalizationsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async betaBuildLocalizationsUpdateInstanceRaw(requestParameters: BetaBuildLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaBuildLocalizationResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling betaBuildLocalizationsUpdateInstance.');
        }

        if (requestParameters.betaBuildLocalizationUpdateRequest === null || requestParameters.betaBuildLocalizationUpdateRequest === undefined) {
            throw new runtime.RequiredError('betaBuildLocalizationUpdateRequest','Required parameter requestParameters.betaBuildLocalizationUpdateRequest was null or undefined when calling betaBuildLocalizationsUpdateInstance.');
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
            path: `/v1/betaBuildLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: BetaBuildLocalizationUpdateRequestToJSON(requestParameters.betaBuildLocalizationUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BetaBuildLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async betaBuildLocalizationsUpdateInstance(requestParameters: BetaBuildLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaBuildLocalizationResponse> {
        const response = await this.betaBuildLocalizationsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const BetaBuildLocalizationsBuildGetToOneRelatedFieldsBuildsEnum = {
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
export type BetaBuildLocalizationsBuildGetToOneRelatedFieldsBuildsEnum = typeof BetaBuildLocalizationsBuildGetToOneRelatedFieldsBuildsEnum[keyof typeof BetaBuildLocalizationsBuildGetToOneRelatedFieldsBuildsEnum];
/**
 * @export
 */
export const BetaBuildLocalizationsGetCollectionFieldsBetaBuildLocalizationsEnum = {
    Build: 'build',
    Locale: 'locale',
    WhatsNew: 'whatsNew'
} as const;
export type BetaBuildLocalizationsGetCollectionFieldsBetaBuildLocalizationsEnum = typeof BetaBuildLocalizationsGetCollectionFieldsBetaBuildLocalizationsEnum[keyof typeof BetaBuildLocalizationsGetCollectionFieldsBetaBuildLocalizationsEnum];
/**
 * @export
 */
export const BetaBuildLocalizationsGetCollectionIncludeEnum = {
    Build: 'build'
} as const;
export type BetaBuildLocalizationsGetCollectionIncludeEnum = typeof BetaBuildLocalizationsGetCollectionIncludeEnum[keyof typeof BetaBuildLocalizationsGetCollectionIncludeEnum];
/**
 * @export
 */
export const BetaBuildLocalizationsGetCollectionFieldsBuildsEnum = {
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
export type BetaBuildLocalizationsGetCollectionFieldsBuildsEnum = typeof BetaBuildLocalizationsGetCollectionFieldsBuildsEnum[keyof typeof BetaBuildLocalizationsGetCollectionFieldsBuildsEnum];
/**
 * @export
 */
export const BetaBuildLocalizationsGetInstanceFieldsBetaBuildLocalizationsEnum = {
    Build: 'build',
    Locale: 'locale',
    WhatsNew: 'whatsNew'
} as const;
export type BetaBuildLocalizationsGetInstanceFieldsBetaBuildLocalizationsEnum = typeof BetaBuildLocalizationsGetInstanceFieldsBetaBuildLocalizationsEnum[keyof typeof BetaBuildLocalizationsGetInstanceFieldsBetaBuildLocalizationsEnum];
/**
 * @export
 */
export const BetaBuildLocalizationsGetInstanceIncludeEnum = {
    Build: 'build'
} as const;
export type BetaBuildLocalizationsGetInstanceIncludeEnum = typeof BetaBuildLocalizationsGetInstanceIncludeEnum[keyof typeof BetaBuildLocalizationsGetInstanceIncludeEnum];
/**
 * @export
 */
export const BetaBuildLocalizationsGetInstanceFieldsBuildsEnum = {
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
export type BetaBuildLocalizationsGetInstanceFieldsBuildsEnum = typeof BetaBuildLocalizationsGetInstanceFieldsBuildsEnum[keyof typeof BetaBuildLocalizationsGetInstanceFieldsBuildsEnum];
