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
 * @interface CustomerReviewRelationshipsResponseData
 */
export interface CustomerReviewRelationshipsResponseData {
    /**
     * 
     * @type {string}
     * @memberof CustomerReviewRelationshipsResponseData
     */
    type: CustomerReviewRelationshipsResponseDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CustomerReviewRelationshipsResponseData
     */
    id: string;
}


/**
 * @export
 */
export const CustomerReviewRelationshipsResponseDataTypeEnum = {
    CustomerReviewResponses: 'customerReviewResponses'
} as const;
export type CustomerReviewRelationshipsResponseDataTypeEnum = typeof CustomerReviewRelationshipsResponseDataTypeEnum[keyof typeof CustomerReviewRelationshipsResponseDataTypeEnum];


/**
 * Check if a given object implements the CustomerReviewRelationshipsResponseData interface.
 */
export function instanceOfCustomerReviewRelationshipsResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function CustomerReviewRelationshipsResponseDataFromJSON(json: any): CustomerReviewRelationshipsResponseData {
    return CustomerReviewRelationshipsResponseDataFromJSONTyped(json, false);
}

export function CustomerReviewRelationshipsResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewRelationshipsResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function CustomerReviewRelationshipsResponseDataToJSON(value?: CustomerReviewRelationshipsResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

