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
  AppEventScreenshotCreateRequest,
  AppEventScreenshotResponse,
  AppEventScreenshotUpdateRequest,
  ErrorResponse,
} from '../models';
import {
    AppEventScreenshotCreateRequestFromJSON,
    AppEventScreenshotCreateRequestToJSON,
    AppEventScreenshotResponseFromJSON,
    AppEventScreenshotResponseToJSON,
    AppEventScreenshotUpdateRequestFromJSON,
    AppEventScreenshotUpdateRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface AppEventScreenshotsCreateInstanceRequest {
    appEventScreenshotCreateRequest: AppEventScreenshotCreateRequest;
}

export interface AppEventScreenshotsDeleteInstanceRequest {
    id: string;
}

export interface AppEventScreenshotsGetInstanceRequest {
    id: string;
    fieldsAppEventScreenshots?: Array<AppEventScreenshotsGetInstanceFieldsAppEventScreenshotsEnum>;
    include?: Array<AppEventScreenshotsGetInstanceIncludeEnum>;
}

export interface AppEventScreenshotsUpdateInstanceRequest {
    id: string;
    appEventScreenshotUpdateRequest: AppEventScreenshotUpdateRequest;
}

/**
 * 
 */
export class AppEventScreenshotsApi extends runtime.BaseAPI {

    /**
     */
    async appEventScreenshotsCreateInstanceRaw(requestParameters: AppEventScreenshotsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventScreenshotResponse>> {
        if (requestParameters.appEventScreenshotCreateRequest === null || requestParameters.appEventScreenshotCreateRequest === undefined) {
            throw new runtime.RequiredError('appEventScreenshotCreateRequest','Required parameter requestParameters.appEventScreenshotCreateRequest was null or undefined when calling appEventScreenshotsCreateInstance.');
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
            path: `/v1/appEventScreenshots`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppEventScreenshotCreateRequestToJSON(requestParameters.appEventScreenshotCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppEventScreenshotResponseFromJSON(jsonValue));
    }

    /**
     */
    async appEventScreenshotsCreateInstance(requestParameters: AppEventScreenshotsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventScreenshotResponse> {
        const response = await this.appEventScreenshotsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appEventScreenshotsDeleteInstanceRaw(requestParameters: AppEventScreenshotsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appEventScreenshotsDeleteInstance.');
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
            path: `/v1/appEventScreenshots/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async appEventScreenshotsDeleteInstance(requestParameters: AppEventScreenshotsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.appEventScreenshotsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async appEventScreenshotsGetInstanceRaw(requestParameters: AppEventScreenshotsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventScreenshotResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appEventScreenshotsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsAppEventScreenshots) {
            queryParameters['fields[appEventScreenshots]'] = requestParameters.fieldsAppEventScreenshots.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/appEventScreenshots/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppEventScreenshotResponseFromJSON(jsonValue));
    }

    /**
     */
    async appEventScreenshotsGetInstance(requestParameters: AppEventScreenshotsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventScreenshotResponse> {
        const response = await this.appEventScreenshotsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appEventScreenshotsUpdateInstanceRaw(requestParameters: AppEventScreenshotsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventScreenshotResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appEventScreenshotsUpdateInstance.');
        }

        if (requestParameters.appEventScreenshotUpdateRequest === null || requestParameters.appEventScreenshotUpdateRequest === undefined) {
            throw new runtime.RequiredError('appEventScreenshotUpdateRequest','Required parameter requestParameters.appEventScreenshotUpdateRequest was null or undefined when calling appEventScreenshotsUpdateInstance.');
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
            path: `/v1/appEventScreenshots/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppEventScreenshotUpdateRequestToJSON(requestParameters.appEventScreenshotUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppEventScreenshotResponseFromJSON(jsonValue));
    }

    /**
     */
    async appEventScreenshotsUpdateInstance(requestParameters: AppEventScreenshotsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventScreenshotResponse> {
        const response = await this.appEventScreenshotsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppEventScreenshotsGetInstanceFieldsAppEventScreenshotsEnum = {
    AppEventAssetType: 'appEventAssetType',
    AppEventLocalization: 'appEventLocalization',
    AssetDeliveryState: 'assetDeliveryState',
    AssetToken: 'assetToken',
    FileName: 'fileName',
    FileSize: 'fileSize',
    ImageAsset: 'imageAsset',
    UploadOperations: 'uploadOperations',
    Uploaded: 'uploaded'
} as const;
export type AppEventScreenshotsGetInstanceFieldsAppEventScreenshotsEnum = typeof AppEventScreenshotsGetInstanceFieldsAppEventScreenshotsEnum[keyof typeof AppEventScreenshotsGetInstanceFieldsAppEventScreenshotsEnum];
/**
 * @export
 */
export const AppEventScreenshotsGetInstanceIncludeEnum = {
    AppEventLocalization: 'appEventLocalization'
} as const;
export type AppEventScreenshotsGetInstanceIncludeEnum = typeof AppEventScreenshotsGetInstanceIncludeEnum[keyof typeof AppEventScreenshotsGetInstanceIncludeEnum];
