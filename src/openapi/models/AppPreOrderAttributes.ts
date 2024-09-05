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
 * @interface AppPreOrderAttributes
 */
export interface AppPreOrderAttributes {
    /**
     * 
     * @type {Date}
     * @memberof AppPreOrderAttributes
     */
    preOrderAvailableDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AppPreOrderAttributes
     */
    appReleaseDate?: Date;
}

/**
 * Check if a given object implements the AppPreOrderAttributes interface.
 */
export function instanceOfAppPreOrderAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppPreOrderAttributesFromJSON(json: any): AppPreOrderAttributes {
    return AppPreOrderAttributesFromJSONTyped(json, false);
}

export function AppPreOrderAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreOrderAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'preOrderAvailableDate': !exists(json, 'preOrderAvailableDate') ? undefined : (new Date(json['preOrderAvailableDate'])),
        'appReleaseDate': !exists(json, 'appReleaseDate') ? undefined : (new Date(json['appReleaseDate'])),
    };
}

export function AppPreOrderAttributesToJSON(value?: AppPreOrderAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'preOrderAvailableDate': value.preOrderAvailableDate === undefined ? undefined : (value.preOrderAvailableDate.toISOString().substr(0,10)),
        'appReleaseDate': value.appReleaseDate === undefined ? undefined : (value.appReleaseDate.toISOString().substr(0,10)),
    };
}

