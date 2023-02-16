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
 * @interface AppCustomProductPageCreateRequestDataAttributes
 */
export interface AppCustomProductPageCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageCreateRequestDataAttributes
     */
    name: string;
}

/**
 * Check if a given object implements the AppCustomProductPageCreateRequestDataAttributes interface.
 */
export function instanceOfAppCustomProductPageCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function AppCustomProductPageCreateRequestDataAttributesFromJSON(json: any): AppCustomProductPageCreateRequestDataAttributes {
    return AppCustomProductPageCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppCustomProductPageCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function AppCustomProductPageCreateRequestDataAttributesToJSON(value?: AppCustomProductPageCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

