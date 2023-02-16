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
  PromotedPurchaseImageCreateRequest,
  PromotedPurchaseImageResponse,
  PromotedPurchaseImageUpdateRequest,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    PromotedPurchaseImageCreateRequestFromJSON,
    PromotedPurchaseImageCreateRequestToJSON,
    PromotedPurchaseImageResponseFromJSON,
    PromotedPurchaseImageResponseToJSON,
    PromotedPurchaseImageUpdateRequestFromJSON,
    PromotedPurchaseImageUpdateRequestToJSON,
} from '../models';

export interface PromotedPurchaseImagesCreateInstanceRequest {
    promotedPurchaseImageCreateRequest: PromotedPurchaseImageCreateRequest;
}

export interface PromotedPurchaseImagesDeleteInstanceRequest {
    id: string;
}

export interface PromotedPurchaseImagesGetInstanceRequest {
    id: string;
    fieldsPromotedPurchaseImages?: Array<PromotedPurchaseImagesGetInstanceFieldsPromotedPurchaseImagesEnum>;
    include?: Array<PromotedPurchaseImagesGetInstanceIncludeEnum>;
}

export interface PromotedPurchaseImagesUpdateInstanceRequest {
    id: string;
    promotedPurchaseImageUpdateRequest: PromotedPurchaseImageUpdateRequest;
}

/**
 * 
 */
export class PromotedPurchaseImagesApi extends runtime.BaseAPI {

    /**
     */
    async promotedPurchaseImagesCreateInstanceRaw(requestParameters: PromotedPurchaseImagesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PromotedPurchaseImageResponse>> {
        if (requestParameters.promotedPurchaseImageCreateRequest === null || requestParameters.promotedPurchaseImageCreateRequest === undefined) {
            throw new runtime.RequiredError('promotedPurchaseImageCreateRequest','Required parameter requestParameters.promotedPurchaseImageCreateRequest was null or undefined when calling promotedPurchaseImagesCreateInstance.');
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
            path: `/v1/promotedPurchaseImages`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PromotedPurchaseImageCreateRequestToJSON(requestParameters.promotedPurchaseImageCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PromotedPurchaseImageResponseFromJSON(jsonValue));
    }

    /**
     */
    async promotedPurchaseImagesCreateInstance(requestParameters: PromotedPurchaseImagesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PromotedPurchaseImageResponse> {
        const response = await this.promotedPurchaseImagesCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async promotedPurchaseImagesDeleteInstanceRaw(requestParameters: PromotedPurchaseImagesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling promotedPurchaseImagesDeleteInstance.');
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
            path: `/v1/promotedPurchaseImages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async promotedPurchaseImagesDeleteInstance(requestParameters: PromotedPurchaseImagesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.promotedPurchaseImagesDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async promotedPurchaseImagesGetInstanceRaw(requestParameters: PromotedPurchaseImagesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PromotedPurchaseImageResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling promotedPurchaseImagesGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsPromotedPurchaseImages) {
            queryParameters['fields[promotedPurchaseImages]'] = requestParameters.fieldsPromotedPurchaseImages.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/promotedPurchaseImages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PromotedPurchaseImageResponseFromJSON(jsonValue));
    }

    /**
     */
    async promotedPurchaseImagesGetInstance(requestParameters: PromotedPurchaseImagesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PromotedPurchaseImageResponse> {
        const response = await this.promotedPurchaseImagesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async promotedPurchaseImagesUpdateInstanceRaw(requestParameters: PromotedPurchaseImagesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PromotedPurchaseImageResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling promotedPurchaseImagesUpdateInstance.');
        }

        if (requestParameters.promotedPurchaseImageUpdateRequest === null || requestParameters.promotedPurchaseImageUpdateRequest === undefined) {
            throw new runtime.RequiredError('promotedPurchaseImageUpdateRequest','Required parameter requestParameters.promotedPurchaseImageUpdateRequest was null or undefined when calling promotedPurchaseImagesUpdateInstance.');
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
            path: `/v1/promotedPurchaseImages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PromotedPurchaseImageUpdateRequestToJSON(requestParameters.promotedPurchaseImageUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PromotedPurchaseImageResponseFromJSON(jsonValue));
    }

    /**
     */
    async promotedPurchaseImagesUpdateInstance(requestParameters: PromotedPurchaseImagesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PromotedPurchaseImageResponse> {
        const response = await this.promotedPurchaseImagesUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const PromotedPurchaseImagesGetInstanceFieldsPromotedPurchaseImagesEnum = {
    AssetToken: 'assetToken',
    AssetType: 'assetType',
    FileName: 'fileName',
    FileSize: 'fileSize',
    ImageAsset: 'imageAsset',
    PromotedPurchase: 'promotedPurchase',
    SourceFileChecksum: 'sourceFileChecksum',
    State: 'state',
    UploadOperations: 'uploadOperations',
    Uploaded: 'uploaded'
} as const;
export type PromotedPurchaseImagesGetInstanceFieldsPromotedPurchaseImagesEnum = typeof PromotedPurchaseImagesGetInstanceFieldsPromotedPurchaseImagesEnum[keyof typeof PromotedPurchaseImagesGetInstanceFieldsPromotedPurchaseImagesEnum];
/**
 * @export
 */
export const PromotedPurchaseImagesGetInstanceIncludeEnum = {
    PromotedPurchase: 'promotedPurchase'
} as const;
export type PromotedPurchaseImagesGetInstanceIncludeEnum = typeof PromotedPurchaseImagesGetInstanceIncludeEnum[keyof typeof PromotedPurchaseImagesGetInstanceIncludeEnum];
