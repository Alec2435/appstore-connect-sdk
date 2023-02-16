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
/**
 * 
 * @export
 * @interface CustomerReviewResponseV1CreateRequestDataAttributes
 */
export interface CustomerReviewResponseV1CreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof CustomerReviewResponseV1CreateRequestDataAttributes
     */
    responseBody: string;
}

/**
 * Check if a given object implements the CustomerReviewResponseV1CreateRequestDataAttributes interface.
 */
export function instanceOfCustomerReviewResponseV1CreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "responseBody" in value;

    return isInstance;
}

export function CustomerReviewResponseV1CreateRequestDataAttributesFromJSON(json: any): CustomerReviewResponseV1CreateRequestDataAttributes {
    return CustomerReviewResponseV1CreateRequestDataAttributesFromJSONTyped(json, false);
}

export function CustomerReviewResponseV1CreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewResponseV1CreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'responseBody': json['responseBody'],
    };
}

export function CustomerReviewResponseV1CreateRequestDataAttributesToJSON(value?: CustomerReviewResponseV1CreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'responseBody': value.responseBody,
    };
}

