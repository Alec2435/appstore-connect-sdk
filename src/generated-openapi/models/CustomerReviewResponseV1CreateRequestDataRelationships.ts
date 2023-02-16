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
import type { CustomerReviewResponseV1CreateRequestDataRelationshipsReview } from './CustomerReviewResponseV1CreateRequestDataRelationshipsReview';
import {
    CustomerReviewResponseV1CreateRequestDataRelationshipsReviewFromJSON,
    CustomerReviewResponseV1CreateRequestDataRelationshipsReviewFromJSONTyped,
    CustomerReviewResponseV1CreateRequestDataRelationshipsReviewToJSON,
} from './CustomerReviewResponseV1CreateRequestDataRelationshipsReview';

/**
 * 
 * @export
 * @interface CustomerReviewResponseV1CreateRequestDataRelationships
 */
export interface CustomerReviewResponseV1CreateRequestDataRelationships {
    /**
     * 
     * @type {CustomerReviewResponseV1CreateRequestDataRelationshipsReview}
     * @memberof CustomerReviewResponseV1CreateRequestDataRelationships
     */
    review: CustomerReviewResponseV1CreateRequestDataRelationshipsReview;
}

/**
 * Check if a given object implements the CustomerReviewResponseV1CreateRequestDataRelationships interface.
 */
export function instanceOfCustomerReviewResponseV1CreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "review" in value;

    return isInstance;
}

export function CustomerReviewResponseV1CreateRequestDataRelationshipsFromJSON(json: any): CustomerReviewResponseV1CreateRequestDataRelationships {
    return CustomerReviewResponseV1CreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function CustomerReviewResponseV1CreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewResponseV1CreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'review': CustomerReviewResponseV1CreateRequestDataRelationshipsReviewFromJSON(json['review']),
    };
}

export function CustomerReviewResponseV1CreateRequestDataRelationshipsToJSON(value?: CustomerReviewResponseV1CreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'review': CustomerReviewResponseV1CreateRequestDataRelationshipsReviewToJSON(value.review),
    };
}

