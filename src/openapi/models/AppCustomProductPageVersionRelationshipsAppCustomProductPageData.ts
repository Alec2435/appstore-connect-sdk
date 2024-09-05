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
 * @interface AppCustomProductPageVersionRelationshipsAppCustomProductPageData
 */
export interface AppCustomProductPageVersionRelationshipsAppCustomProductPageData {
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageVersionRelationshipsAppCustomProductPageData
     */
    type: AppCustomProductPageVersionRelationshipsAppCustomProductPageDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageVersionRelationshipsAppCustomProductPageData
     */
    id: string;
}


/**
 * @export
 */
export const AppCustomProductPageVersionRelationshipsAppCustomProductPageDataTypeEnum = {
    AppCustomProductPages: 'appCustomProductPages'
} as const;
export type AppCustomProductPageVersionRelationshipsAppCustomProductPageDataTypeEnum = typeof AppCustomProductPageVersionRelationshipsAppCustomProductPageDataTypeEnum[keyof typeof AppCustomProductPageVersionRelationshipsAppCustomProductPageDataTypeEnum];


/**
 * Check if a given object implements the AppCustomProductPageVersionRelationshipsAppCustomProductPageData interface.
 */
export function instanceOfAppCustomProductPageVersionRelationshipsAppCustomProductPageData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppCustomProductPageVersionRelationshipsAppCustomProductPageDataFromJSON(json: any): AppCustomProductPageVersionRelationshipsAppCustomProductPageData {
    return AppCustomProductPageVersionRelationshipsAppCustomProductPageDataFromJSONTyped(json, false);
}

export function AppCustomProductPageVersionRelationshipsAppCustomProductPageDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageVersionRelationshipsAppCustomProductPageData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppCustomProductPageVersionRelationshipsAppCustomProductPageDataToJSON(value?: AppCustomProductPageVersionRelationshipsAppCustomProductPageData | null): any {
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

