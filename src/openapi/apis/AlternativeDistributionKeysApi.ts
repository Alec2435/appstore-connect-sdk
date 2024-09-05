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
  AlternativeDistributionKeyCreateRequest,
  AlternativeDistributionKeyResponse,
  AlternativeDistributionKeysResponse,
  ErrorResponse,
} from '../models';
import {
    AlternativeDistributionKeyCreateRequestFromJSON,
    AlternativeDistributionKeyCreateRequestToJSON,
    AlternativeDistributionKeyResponseFromJSON,
    AlternativeDistributionKeyResponseToJSON,
    AlternativeDistributionKeysResponseFromJSON,
    AlternativeDistributionKeysResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface AlternativeDistributionKeysCreateInstanceRequest {
    alternativeDistributionKeyCreateRequest: AlternativeDistributionKeyCreateRequest;
}

export interface AlternativeDistributionKeysDeleteInstanceRequest {
    id: string;
}

export interface AlternativeDistributionKeysGetCollectionRequest {
    existsApp?: boolean;
    fieldsAlternativeDistributionKeys?: Array<AlternativeDistributionKeysGetCollectionFieldsAlternativeDistributionKeysEnum>;
    limit?: number;
}

export interface AlternativeDistributionKeysGetInstanceRequest {
    id: string;
    fieldsAlternativeDistributionKeys?: Array<AlternativeDistributionKeysGetInstanceFieldsAlternativeDistributionKeysEnum>;
}

/**
 * 
 */
export class AlternativeDistributionKeysApi extends runtime.BaseAPI {

    /**
     */
    async alternativeDistributionKeysCreateInstanceRaw(requestParameters: AlternativeDistributionKeysCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AlternativeDistributionKeyResponse>> {
        if (requestParameters.alternativeDistributionKeyCreateRequest === null || requestParameters.alternativeDistributionKeyCreateRequest === undefined) {
            throw new runtime.RequiredError('alternativeDistributionKeyCreateRequest','Required parameter requestParameters.alternativeDistributionKeyCreateRequest was null or undefined when calling alternativeDistributionKeysCreateInstance.');
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
            path: `/v1/alternativeDistributionKeys`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AlternativeDistributionKeyCreateRequestToJSON(requestParameters.alternativeDistributionKeyCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AlternativeDistributionKeyResponseFromJSON(jsonValue));
    }

    /**
     */
    async alternativeDistributionKeysCreateInstance(requestParameters: AlternativeDistributionKeysCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AlternativeDistributionKeyResponse> {
        const response = await this.alternativeDistributionKeysCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async alternativeDistributionKeysDeleteInstanceRaw(requestParameters: AlternativeDistributionKeysDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling alternativeDistributionKeysDeleteInstance.');
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
            path: `/v1/alternativeDistributionKeys/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async alternativeDistributionKeysDeleteInstance(requestParameters: AlternativeDistributionKeysDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.alternativeDistributionKeysDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async alternativeDistributionKeysGetCollectionRaw(requestParameters: AlternativeDistributionKeysGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AlternativeDistributionKeysResponse>> {
        const queryParameters: any = {};

        if (requestParameters.existsApp !== undefined) {
            queryParameters['exists[app]'] = requestParameters.existsApp;
        }

        if (requestParameters.fieldsAlternativeDistributionKeys) {
            queryParameters['fields[alternativeDistributionKeys]'] = requestParameters.fieldsAlternativeDistributionKeys.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
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
            path: `/v1/alternativeDistributionKeys`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AlternativeDistributionKeysResponseFromJSON(jsonValue));
    }

    /**
     */
    async alternativeDistributionKeysGetCollection(requestParameters: AlternativeDistributionKeysGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AlternativeDistributionKeysResponse> {
        const response = await this.alternativeDistributionKeysGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async alternativeDistributionKeysGetInstanceRaw(requestParameters: AlternativeDistributionKeysGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AlternativeDistributionKeyResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling alternativeDistributionKeysGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsAlternativeDistributionKeys) {
            queryParameters['fields[alternativeDistributionKeys]'] = requestParameters.fieldsAlternativeDistributionKeys.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/alternativeDistributionKeys/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AlternativeDistributionKeyResponseFromJSON(jsonValue));
    }

    /**
     */
    async alternativeDistributionKeysGetInstance(requestParameters: AlternativeDistributionKeysGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AlternativeDistributionKeyResponse> {
        const response = await this.alternativeDistributionKeysGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AlternativeDistributionKeysGetCollectionFieldsAlternativeDistributionKeysEnum = {
    App: 'app',
    PublicKey: 'publicKey'
} as const;
export type AlternativeDistributionKeysGetCollectionFieldsAlternativeDistributionKeysEnum = typeof AlternativeDistributionKeysGetCollectionFieldsAlternativeDistributionKeysEnum[keyof typeof AlternativeDistributionKeysGetCollectionFieldsAlternativeDistributionKeysEnum];
/**
 * @export
 */
export const AlternativeDistributionKeysGetInstanceFieldsAlternativeDistributionKeysEnum = {
    App: 'app',
    PublicKey: 'publicKey'
} as const;
export type AlternativeDistributionKeysGetInstanceFieldsAlternativeDistributionKeysEnum = typeof AlternativeDistributionKeysGetInstanceFieldsAlternativeDistributionKeysEnum[keyof typeof AlternativeDistributionKeysGetInstanceFieldsAlternativeDistributionKeysEnum];
