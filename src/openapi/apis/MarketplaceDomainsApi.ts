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
  ErrorResponse,
  MarketplaceDomainCreateRequest,
  MarketplaceDomainResponse,
  MarketplaceDomainsResponse,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    MarketplaceDomainCreateRequestFromJSON,
    MarketplaceDomainCreateRequestToJSON,
    MarketplaceDomainResponseFromJSON,
    MarketplaceDomainResponseToJSON,
    MarketplaceDomainsResponseFromJSON,
    MarketplaceDomainsResponseToJSON,
} from '../models';

export interface MarketplaceDomainsCreateInstanceRequest {
    marketplaceDomainCreateRequest: MarketplaceDomainCreateRequest;
}

export interface MarketplaceDomainsDeleteInstanceRequest {
    id: string;
}

export interface MarketplaceDomainsGetCollectionRequest {
    fieldsMarketplaceDomains?: Array<MarketplaceDomainsGetCollectionFieldsMarketplaceDomainsEnum>;
    limit?: number;
}

export interface MarketplaceDomainsGetInstanceRequest {
    id: string;
    fieldsMarketplaceDomains?: Array<MarketplaceDomainsGetInstanceFieldsMarketplaceDomainsEnum>;
}

/**
 * 
 */
export class MarketplaceDomainsApi extends runtime.BaseAPI {

    /**
     */
    async marketplaceDomainsCreateInstanceRaw(requestParameters: MarketplaceDomainsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MarketplaceDomainResponse>> {
        if (requestParameters.marketplaceDomainCreateRequest === null || requestParameters.marketplaceDomainCreateRequest === undefined) {
            throw new runtime.RequiredError('marketplaceDomainCreateRequest','Required parameter requestParameters.marketplaceDomainCreateRequest was null or undefined when calling marketplaceDomainsCreateInstance.');
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
            path: `/v1/marketplaceDomains`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MarketplaceDomainCreateRequestToJSON(requestParameters.marketplaceDomainCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MarketplaceDomainResponseFromJSON(jsonValue));
    }

    /**
     */
    async marketplaceDomainsCreateInstance(requestParameters: MarketplaceDomainsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MarketplaceDomainResponse> {
        const response = await this.marketplaceDomainsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async marketplaceDomainsDeleteInstanceRaw(requestParameters: MarketplaceDomainsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling marketplaceDomainsDeleteInstance.');
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
            path: `/v1/marketplaceDomains/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async marketplaceDomainsDeleteInstance(requestParameters: MarketplaceDomainsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.marketplaceDomainsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async marketplaceDomainsGetCollectionRaw(requestParameters: MarketplaceDomainsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MarketplaceDomainsResponse>> {
        const queryParameters: any = {};

        if (requestParameters.fieldsMarketplaceDomains) {
            queryParameters['fields[marketplaceDomains]'] = requestParameters.fieldsMarketplaceDomains.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/marketplaceDomains`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MarketplaceDomainsResponseFromJSON(jsonValue));
    }

    /**
     */
    async marketplaceDomainsGetCollection(requestParameters: MarketplaceDomainsGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MarketplaceDomainsResponse> {
        const response = await this.marketplaceDomainsGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async marketplaceDomainsGetInstanceRaw(requestParameters: MarketplaceDomainsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MarketplaceDomainResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling marketplaceDomainsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsMarketplaceDomains) {
            queryParameters['fields[marketplaceDomains]'] = requestParameters.fieldsMarketplaceDomains.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/marketplaceDomains/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MarketplaceDomainResponseFromJSON(jsonValue));
    }

    /**
     */
    async marketplaceDomainsGetInstance(requestParameters: MarketplaceDomainsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MarketplaceDomainResponse> {
        const response = await this.marketplaceDomainsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const MarketplaceDomainsGetCollectionFieldsMarketplaceDomainsEnum = {
    CreatedDate: 'createdDate',
    Domain: 'domain',
    ReferenceName: 'referenceName'
} as const;
export type MarketplaceDomainsGetCollectionFieldsMarketplaceDomainsEnum = typeof MarketplaceDomainsGetCollectionFieldsMarketplaceDomainsEnum[keyof typeof MarketplaceDomainsGetCollectionFieldsMarketplaceDomainsEnum];
/**
 * @export
 */
export const MarketplaceDomainsGetInstanceFieldsMarketplaceDomainsEnum = {
    CreatedDate: 'createdDate',
    Domain: 'domain',
    ReferenceName: 'referenceName'
} as const;
export type MarketplaceDomainsGetInstanceFieldsMarketplaceDomainsEnum = typeof MarketplaceDomainsGetInstanceFieldsMarketplaceDomainsEnum[keyof typeof MarketplaceDomainsGetInstanceFieldsMarketplaceDomainsEnum];
