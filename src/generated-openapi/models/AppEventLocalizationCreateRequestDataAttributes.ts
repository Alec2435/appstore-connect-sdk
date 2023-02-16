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
 * @interface AppEventLocalizationCreateRequestDataAttributes
 */
export interface AppEventLocalizationCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationCreateRequestDataAttributes
     */
    locale: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationCreateRequestDataAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationCreateRequestDataAttributes
     */
    shortDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationCreateRequestDataAttributes
     */
    longDescription?: string;
}

/**
 * Check if a given object implements the AppEventLocalizationCreateRequestDataAttributes interface.
 */
export function instanceOfAppEventLocalizationCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "locale" in value;

    return isInstance;
}

export function AppEventLocalizationCreateRequestDataAttributesFromJSON(json: any): AppEventLocalizationCreateRequestDataAttributes {
    return AppEventLocalizationCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppEventLocalizationCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'locale': json['locale'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : json['shortDescription'],
        'longDescription': !exists(json, 'longDescription') ? undefined : json['longDescription'],
    };
}

export function AppEventLocalizationCreateRequestDataAttributesToJSON(value?: AppEventLocalizationCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'locale': value.locale,
        'name': value.name,
        'shortDescription': value.shortDescription,
        'longDescription': value.longDescription,
    };
}

