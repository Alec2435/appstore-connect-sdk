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
import type { AppInfoLocalizationUpdateRequestDataAttributes } from './AppInfoLocalizationUpdateRequestDataAttributes';
import {
    AppInfoLocalizationUpdateRequestDataAttributesFromJSON,
    AppInfoLocalizationUpdateRequestDataAttributesFromJSONTyped,
    AppInfoLocalizationUpdateRequestDataAttributesToJSON,
} from './AppInfoLocalizationUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppInfoLocalizationUpdateRequestData
 */
export interface AppInfoLocalizationUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationUpdateRequestData
     */
    type: AppInfoLocalizationUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppInfoLocalizationUpdateRequestDataAttributes}
     * @memberof AppInfoLocalizationUpdateRequestData
     */
    attributes?: AppInfoLocalizationUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const AppInfoLocalizationUpdateRequestDataTypeEnum = {
    AppInfoLocalizations: 'appInfoLocalizations'
} as const;
export type AppInfoLocalizationUpdateRequestDataTypeEnum = typeof AppInfoLocalizationUpdateRequestDataTypeEnum[keyof typeof AppInfoLocalizationUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppInfoLocalizationUpdateRequestData interface.
 */
export function instanceOfAppInfoLocalizationUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppInfoLocalizationUpdateRequestDataFromJSON(json: any): AppInfoLocalizationUpdateRequestData {
    return AppInfoLocalizationUpdateRequestDataFromJSONTyped(json, false);
}

export function AppInfoLocalizationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoLocalizationUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppInfoLocalizationUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function AppInfoLocalizationUpdateRequestDataToJSON(value?: AppInfoLocalizationUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppInfoLocalizationUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

