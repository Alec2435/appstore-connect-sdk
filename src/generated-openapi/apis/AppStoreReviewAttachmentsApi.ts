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
  AppStoreReviewAttachmentCreateRequest,
  AppStoreReviewAttachmentResponse,
  AppStoreReviewAttachmentUpdateRequest,
  ErrorResponse,
} from '../models';
import {
    AppStoreReviewAttachmentCreateRequestFromJSON,
    AppStoreReviewAttachmentCreateRequestToJSON,
    AppStoreReviewAttachmentResponseFromJSON,
    AppStoreReviewAttachmentResponseToJSON,
    AppStoreReviewAttachmentUpdateRequestFromJSON,
    AppStoreReviewAttachmentUpdateRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface AppStoreReviewAttachmentsCreateInstanceRequest {
    appStoreReviewAttachmentCreateRequest: AppStoreReviewAttachmentCreateRequest;
}

export interface AppStoreReviewAttachmentsDeleteInstanceRequest {
    id: string;
}

export interface AppStoreReviewAttachmentsGetInstanceRequest {
    id: string;
    fieldsAppStoreReviewAttachments?: Array<AppStoreReviewAttachmentsGetInstanceFieldsAppStoreReviewAttachmentsEnum>;
    include?: Array<AppStoreReviewAttachmentsGetInstanceIncludeEnum>;
}

export interface AppStoreReviewAttachmentsUpdateInstanceRequest {
    id: string;
    appStoreReviewAttachmentUpdateRequest: AppStoreReviewAttachmentUpdateRequest;
}

/**
 * 
 */
export class AppStoreReviewAttachmentsApi extends runtime.BaseAPI {

    /**
     */
    async appStoreReviewAttachmentsCreateInstanceRaw(requestParameters: AppStoreReviewAttachmentsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreReviewAttachmentResponse>> {
        if (requestParameters.appStoreReviewAttachmentCreateRequest === null || requestParameters.appStoreReviewAttachmentCreateRequest === undefined) {
            throw new runtime.RequiredError('appStoreReviewAttachmentCreateRequest','Required parameter requestParameters.appStoreReviewAttachmentCreateRequest was null or undefined when calling appStoreReviewAttachmentsCreateInstance.');
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
            path: `/v1/appStoreReviewAttachments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppStoreReviewAttachmentCreateRequestToJSON(requestParameters.appStoreReviewAttachmentCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreReviewAttachmentResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreReviewAttachmentsCreateInstance(requestParameters: AppStoreReviewAttachmentsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreReviewAttachmentResponse> {
        const response = await this.appStoreReviewAttachmentsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appStoreReviewAttachmentsDeleteInstanceRaw(requestParameters: AppStoreReviewAttachmentsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appStoreReviewAttachmentsDeleteInstance.');
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
            path: `/v1/appStoreReviewAttachments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async appStoreReviewAttachmentsDeleteInstance(requestParameters: AppStoreReviewAttachmentsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.appStoreReviewAttachmentsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async appStoreReviewAttachmentsGetInstanceRaw(requestParameters: AppStoreReviewAttachmentsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreReviewAttachmentResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appStoreReviewAttachmentsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsAppStoreReviewAttachments) {
            queryParameters['fields[appStoreReviewAttachments]'] = requestParameters.fieldsAppStoreReviewAttachments.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/appStoreReviewAttachments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreReviewAttachmentResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreReviewAttachmentsGetInstance(requestParameters: AppStoreReviewAttachmentsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreReviewAttachmentResponse> {
        const response = await this.appStoreReviewAttachmentsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appStoreReviewAttachmentsUpdateInstanceRaw(requestParameters: AppStoreReviewAttachmentsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreReviewAttachmentResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appStoreReviewAttachmentsUpdateInstance.');
        }

        if (requestParameters.appStoreReviewAttachmentUpdateRequest === null || requestParameters.appStoreReviewAttachmentUpdateRequest === undefined) {
            throw new runtime.RequiredError('appStoreReviewAttachmentUpdateRequest','Required parameter requestParameters.appStoreReviewAttachmentUpdateRequest was null or undefined when calling appStoreReviewAttachmentsUpdateInstance.');
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
            path: `/v1/appStoreReviewAttachments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppStoreReviewAttachmentUpdateRequestToJSON(requestParameters.appStoreReviewAttachmentUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreReviewAttachmentResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreReviewAttachmentsUpdateInstance(requestParameters: AppStoreReviewAttachmentsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreReviewAttachmentResponse> {
        const response = await this.appStoreReviewAttachmentsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppStoreReviewAttachmentsGetInstanceFieldsAppStoreReviewAttachmentsEnum = {
    AppStoreReviewDetail: 'appStoreReviewDetail',
    AssetDeliveryState: 'assetDeliveryState',
    FileName: 'fileName',
    FileSize: 'fileSize',
    SourceFileChecksum: 'sourceFileChecksum',
    UploadOperations: 'uploadOperations',
    Uploaded: 'uploaded'
} as const;
export type AppStoreReviewAttachmentsGetInstanceFieldsAppStoreReviewAttachmentsEnum = typeof AppStoreReviewAttachmentsGetInstanceFieldsAppStoreReviewAttachmentsEnum[keyof typeof AppStoreReviewAttachmentsGetInstanceFieldsAppStoreReviewAttachmentsEnum];
/**
 * @export
 */
export const AppStoreReviewAttachmentsGetInstanceIncludeEnum = {
    AppStoreReviewDetail: 'appStoreReviewDetail'
} as const;
export type AppStoreReviewAttachmentsGetInstanceIncludeEnum = typeof AppStoreReviewAttachmentsGetInstanceIncludeEnum[keyof typeof AppStoreReviewAttachmentsGetInstanceIncludeEnum];
