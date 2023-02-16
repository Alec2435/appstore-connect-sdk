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
import type { PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase } from './PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase';
import {
    PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseFromJSON,
    PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseFromJSONTyped,
    PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseToJSON,
} from './PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase';

/**
 * 
 * @export
 * @interface PromotedPurchaseImageCreateRequestDataRelationships
 */
export interface PromotedPurchaseImageCreateRequestDataRelationships {
    /**
     * 
     * @type {PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase}
     * @memberof PromotedPurchaseImageCreateRequestDataRelationships
     */
    promotedPurchase: PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase;
}

/**
 * Check if a given object implements the PromotedPurchaseImageCreateRequestDataRelationships interface.
 */
export function instanceOfPromotedPurchaseImageCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "promotedPurchase" in value;

    return isInstance;
}

export function PromotedPurchaseImageCreateRequestDataRelationshipsFromJSON(json: any): PromotedPurchaseImageCreateRequestDataRelationships {
    return PromotedPurchaseImageCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function PromotedPurchaseImageCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImageCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'promotedPurchase': PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseFromJSON(json['promotedPurchase']),
    };
}

export function PromotedPurchaseImageCreateRequestDataRelationshipsToJSON(value?: PromotedPurchaseImageCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'promotedPurchase': PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseToJSON(value.promotedPurchase),
    };
}

