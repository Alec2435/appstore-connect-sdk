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
 * @interface AppClipDefaultExperienceLocalizationCreateRequestDataAttributes
 */
export interface AppClipDefaultExperienceLocalizationCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperienceLocalizationCreateRequestDataAttributes
     */
    locale: string;
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperienceLocalizationCreateRequestDataAttributes
     */
    subtitle?: string;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationCreateRequestDataAttributes interface.
 */
export function instanceOfAppClipDefaultExperienceLocalizationCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "locale" in value;

    return isInstance;
}

export function AppClipDefaultExperienceLocalizationCreateRequestDataAttributesFromJSON(json: any): AppClipDefaultExperienceLocalizationCreateRequestDataAttributes {
    return AppClipDefaultExperienceLocalizationCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalizationCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'locale': json['locale'],
        'subtitle': !exists(json, 'subtitle') ? undefined : json['subtitle'],
    };
}

export function AppClipDefaultExperienceLocalizationCreateRequestDataAttributesToJSON(value?: AppClipDefaultExperienceLocalizationCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'locale': value.locale,
        'subtitle': value.subtitle,
    };
}

