/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.5
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
 * @interface AppEventLocalizationUpdateRequestDataAttributes
 */
export interface AppEventLocalizationUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationUpdateRequestDataAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationUpdateRequestDataAttributes
     */
    shortDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationUpdateRequestDataAttributes
     */
    longDescription?: string;
}

/**
 * Check if a given object implements the AppEventLocalizationUpdateRequestDataAttributes interface.
 */
export function instanceOfAppEventLocalizationUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppEventLocalizationUpdateRequestDataAttributesFromJSON(json: any): AppEventLocalizationUpdateRequestDataAttributes {
    return AppEventLocalizationUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppEventLocalizationUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : json['shortDescription'],
        'longDescription': !exists(json, 'longDescription') ? undefined : json['longDescription'],
    };
}

export function AppEventLocalizationUpdateRequestDataAttributesToJSON(value?: AppEventLocalizationUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'shortDescription': value.shortDescription,
        'longDescription': value.longDescription,
    };
}

