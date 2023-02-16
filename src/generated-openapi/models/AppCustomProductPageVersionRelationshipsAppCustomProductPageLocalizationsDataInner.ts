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
 * @interface AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner
 */
export interface AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner
     */
    type: AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerTypeEnum = {
    AppCustomProductPageLocalizations: 'appCustomProductPageLocalizations'
} as const;
export type AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerTypeEnum = typeof AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerTypeEnum[keyof typeof AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerTypeEnum];


/**
 * Check if a given object implements the AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner interface.
 */
export function instanceOfAppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerFromJSON(json: any): AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner {
    return AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerFromJSONTyped(json, false);
}

export function AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerToJSON(value?: AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

