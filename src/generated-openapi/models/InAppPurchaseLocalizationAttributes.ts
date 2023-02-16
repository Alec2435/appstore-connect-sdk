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
 * @interface InAppPurchaseLocalizationAttributes
 */
export interface InAppPurchaseLocalizationAttributes {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseLocalizationAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseLocalizationAttributes
     */
    locale?: string;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseLocalizationAttributes
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseLocalizationAttributes
     */
    state?: InAppPurchaseLocalizationAttributesStateEnum;
}


/**
 * @export
 */
export const InAppPurchaseLocalizationAttributesStateEnum = {
    PrepareForSubmission: 'PREPARE_FOR_SUBMISSION',
    WaitingForReview: 'WAITING_FOR_REVIEW',
    Approved: 'APPROVED',
    Rejected: 'REJECTED'
} as const;
export type InAppPurchaseLocalizationAttributesStateEnum = typeof InAppPurchaseLocalizationAttributesStateEnum[keyof typeof InAppPurchaseLocalizationAttributesStateEnum];


/**
 * Check if a given object implements the InAppPurchaseLocalizationAttributes interface.
 */
export function instanceOfInAppPurchaseLocalizationAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchaseLocalizationAttributesFromJSON(json: any): InAppPurchaseLocalizationAttributes {
    return InAppPurchaseLocalizationAttributesFromJSONTyped(json, false);
}

export function InAppPurchaseLocalizationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseLocalizationAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function InAppPurchaseLocalizationAttributesToJSON(value?: InAppPurchaseLocalizationAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'locale': value.locale,
        'description': value.description,
        'state': value.state,
    };
}

