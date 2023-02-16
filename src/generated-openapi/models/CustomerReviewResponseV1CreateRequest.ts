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

import { exists, mapValues } from '../runtime';
import type { CustomerReviewResponseV1CreateRequestData } from './CustomerReviewResponseV1CreateRequestData';
import {
    CustomerReviewResponseV1CreateRequestDataFromJSON,
    CustomerReviewResponseV1CreateRequestDataFromJSONTyped,
    CustomerReviewResponseV1CreateRequestDataToJSON,
} from './CustomerReviewResponseV1CreateRequestData';

/**
 * 
 * @export
 * @interface CustomerReviewResponseV1CreateRequest
 */
export interface CustomerReviewResponseV1CreateRequest {
    /**
     * 
     * @type {CustomerReviewResponseV1CreateRequestData}
     * @memberof CustomerReviewResponseV1CreateRequest
     */
    data: CustomerReviewResponseV1CreateRequestData;
}

/**
 * Check if a given object implements the CustomerReviewResponseV1CreateRequest interface.
 */
export function instanceOfCustomerReviewResponseV1CreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function CustomerReviewResponseV1CreateRequestFromJSON(json: any): CustomerReviewResponseV1CreateRequest {
    return CustomerReviewResponseV1CreateRequestFromJSONTyped(json, false);
}

export function CustomerReviewResponseV1CreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewResponseV1CreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CustomerReviewResponseV1CreateRequestDataFromJSON(json['data']),
    };
}

export function CustomerReviewResponseV1CreateRequestToJSON(value?: CustomerReviewResponseV1CreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CustomerReviewResponseV1CreateRequestDataToJSON(value.data),
    };
}

