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
 * @interface BetaAppClipInvocationLocalizationInlineCreateAttributes
 */
export interface BetaAppClipInvocationLocalizationInlineCreateAttributes {
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationLocalizationInlineCreateAttributes
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationLocalizationInlineCreateAttributes
     */
    locale: string;
}

/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationInlineCreateAttributes interface.
 */
export function instanceOfBetaAppClipInvocationLocalizationInlineCreateAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "locale" in value;

    return isInstance;
}

export function BetaAppClipInvocationLocalizationInlineCreateAttributesFromJSON(json: any): BetaAppClipInvocationLocalizationInlineCreateAttributes {
    return BetaAppClipInvocationLocalizationInlineCreateAttributesFromJSONTyped(json, false);
}

export function BetaAppClipInvocationLocalizationInlineCreateAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationLocalizationInlineCreateAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'locale': json['locale'],
    };
}

export function BetaAppClipInvocationLocalizationInlineCreateAttributesToJSON(value?: BetaAppClipInvocationLocalizationInlineCreateAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'locale': value.locale,
    };
}

