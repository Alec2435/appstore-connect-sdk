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
import type { AppRelationshipsPromotedPurchasesDataInner } from './AppRelationshipsPromotedPurchasesDataInner';
import {
    AppRelationshipsPromotedPurchasesDataInnerFromJSON,
    AppRelationshipsPromotedPurchasesDataInnerFromJSONTyped,
    AppRelationshipsPromotedPurchasesDataInnerToJSON,
} from './AppRelationshipsPromotedPurchasesDataInner';

/**
 * 
 * @export
 * @interface PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase
 */
export interface PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase {
    /**
     * 
     * @type {AppRelationshipsPromotedPurchasesDataInner}
     * @memberof PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase
     */
    data: AppRelationshipsPromotedPurchasesDataInner;
}

/**
 * Check if a given object implements the PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase interface.
 */
export function instanceOfPromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseFromJSON(json: any): PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase {
    return PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseFromJSONTyped(json, false);
}

export function PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppRelationshipsPromotedPurchasesDataInnerFromJSON(json['data']),
    };
}

export function PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseToJSON(value?: PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppRelationshipsPromotedPurchasesDataInnerToJSON(value.data),
    };
}

