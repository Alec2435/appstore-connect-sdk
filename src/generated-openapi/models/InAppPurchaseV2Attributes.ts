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
import type { InAppPurchaseState } from './InAppPurchaseState';
import {
    InAppPurchaseStateFromJSON,
    InAppPurchaseStateFromJSONTyped,
    InAppPurchaseStateToJSON,
} from './InAppPurchaseState';
import type { InAppPurchaseType } from './InAppPurchaseType';
import {
    InAppPurchaseTypeFromJSON,
    InAppPurchaseTypeFromJSONTyped,
    InAppPurchaseTypeToJSON,
} from './InAppPurchaseType';

/**
 * 
 * @export
 * @interface InAppPurchaseV2Attributes
 */
export interface InAppPurchaseV2Attributes {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseV2Attributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseV2Attributes
     */
    productId?: string;
    /**
     * 
     * @type {InAppPurchaseType}
     * @memberof InAppPurchaseV2Attributes
     */
    inAppPurchaseType?: InAppPurchaseType;
    /**
     * 
     * @type {InAppPurchaseState}
     * @memberof InAppPurchaseV2Attributes
     */
    state?: InAppPurchaseState;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseV2Attributes
     */
    reviewNote?: string;
    /**
     * 
     * @type {boolean}
     * @memberof InAppPurchaseV2Attributes
     */
    familySharable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof InAppPurchaseV2Attributes
     */
    contentHosting?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof InAppPurchaseV2Attributes
     */
    availableInAllTerritories?: boolean;
}

/**
 * Check if a given object implements the InAppPurchaseV2Attributes interface.
 */
export function instanceOfInAppPurchaseV2Attributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchaseV2AttributesFromJSON(json: any): InAppPurchaseV2Attributes {
    return InAppPurchaseV2AttributesFromJSONTyped(json, false);
}

export function InAppPurchaseV2AttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2Attributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'productId': !exists(json, 'productId') ? undefined : json['productId'],
        'inAppPurchaseType': !exists(json, 'inAppPurchaseType') ? undefined : InAppPurchaseTypeFromJSON(json['inAppPurchaseType']),
        'state': !exists(json, 'state') ? undefined : InAppPurchaseStateFromJSON(json['state']),
        'reviewNote': !exists(json, 'reviewNote') ? undefined : json['reviewNote'],
        'familySharable': !exists(json, 'familySharable') ? undefined : json['familySharable'],
        'contentHosting': !exists(json, 'contentHosting') ? undefined : json['contentHosting'],
        'availableInAllTerritories': !exists(json, 'availableInAllTerritories') ? undefined : json['availableInAllTerritories'],
    };
}

export function InAppPurchaseV2AttributesToJSON(value?: InAppPurchaseV2Attributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'productId': value.productId,
        'inAppPurchaseType': InAppPurchaseTypeToJSON(value.inAppPurchaseType),
        'state': InAppPurchaseStateToJSON(value.state),
        'reviewNote': value.reviewNote,
        'familySharable': value.familySharable,
        'contentHosting': value.contentHosting,
        'availableInAllTerritories': value.availableInAllTerritories,
    };
}

