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
 * @interface AppStoreVersionLocalizationUpdateRequestDataAttributes
 */
export interface AppStoreVersionLocalizationUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionLocalizationUpdateRequestDataAttributes
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionLocalizationUpdateRequestDataAttributes
     */
    keywords?: string;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionLocalizationUpdateRequestDataAttributes
     */
    marketingUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionLocalizationUpdateRequestDataAttributes
     */
    promotionalText?: string;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionLocalizationUpdateRequestDataAttributes
     */
    supportUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionLocalizationUpdateRequestDataAttributes
     */
    whatsNew?: string;
}

/**
 * Check if a given object implements the AppStoreVersionLocalizationUpdateRequestDataAttributes interface.
 */
export function instanceOfAppStoreVersionLocalizationUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreVersionLocalizationUpdateRequestDataAttributesFromJSON(json: any): AppStoreVersionLocalizationUpdateRequestDataAttributes {
    return AppStoreVersionLocalizationUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppStoreVersionLocalizationUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionLocalizationUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'keywords': !exists(json, 'keywords') ? undefined : json['keywords'],
        'marketingUrl': !exists(json, 'marketingUrl') ? undefined : json['marketingUrl'],
        'promotionalText': !exists(json, 'promotionalText') ? undefined : json['promotionalText'],
        'supportUrl': !exists(json, 'supportUrl') ? undefined : json['supportUrl'],
        'whatsNew': !exists(json, 'whatsNew') ? undefined : json['whatsNew'],
    };
}

export function AppStoreVersionLocalizationUpdateRequestDataAttributesToJSON(value?: AppStoreVersionLocalizationUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'keywords': value.keywords,
        'marketingUrl': value.marketingUrl,
        'promotionalText': value.promotionalText,
        'supportUrl': value.supportUrl,
        'whatsNew': value.whatsNew,
    };
}

