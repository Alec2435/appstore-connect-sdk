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
import type { AppCustomProductPageLocalizationCreateRequestDataRelationships } from './AppCustomProductPageLocalizationCreateRequestDataRelationships';
import {
    AppCustomProductPageLocalizationCreateRequestDataRelationshipsFromJSON,
    AppCustomProductPageLocalizationCreateRequestDataRelationshipsFromJSONTyped,
    AppCustomProductPageLocalizationCreateRequestDataRelationshipsToJSON,
} from './AppCustomProductPageLocalizationCreateRequestDataRelationships';
import type { AppCustomProductPageLocalizationInlineCreateAttributes } from './AppCustomProductPageLocalizationInlineCreateAttributes';
import {
    AppCustomProductPageLocalizationInlineCreateAttributesFromJSON,
    AppCustomProductPageLocalizationInlineCreateAttributesFromJSONTyped,
    AppCustomProductPageLocalizationInlineCreateAttributesToJSON,
} from './AppCustomProductPageLocalizationInlineCreateAttributes';

/**
 * 
 * @export
 * @interface AppCustomProductPageLocalizationCreateRequestData
 */
export interface AppCustomProductPageLocalizationCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageLocalizationCreateRequestData
     */
    type: AppCustomProductPageLocalizationCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppCustomProductPageLocalizationInlineCreateAttributes}
     * @memberof AppCustomProductPageLocalizationCreateRequestData
     */
    attributes: AppCustomProductPageLocalizationInlineCreateAttributes;
    /**
     * 
     * @type {AppCustomProductPageLocalizationCreateRequestDataRelationships}
     * @memberof AppCustomProductPageLocalizationCreateRequestData
     */
    relationships: AppCustomProductPageLocalizationCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppCustomProductPageLocalizationCreateRequestDataTypeEnum = {
    AppCustomProductPageLocalizations: 'appCustomProductPageLocalizations'
} as const;
export type AppCustomProductPageLocalizationCreateRequestDataTypeEnum = typeof AppCustomProductPageLocalizationCreateRequestDataTypeEnum[keyof typeof AppCustomProductPageLocalizationCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppCustomProductPageLocalizationCreateRequestData interface.
 */
export function instanceOfAppCustomProductPageLocalizationCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function AppCustomProductPageLocalizationCreateRequestDataFromJSON(json: any): AppCustomProductPageLocalizationCreateRequestData {
    return AppCustomProductPageLocalizationCreateRequestDataFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppCustomProductPageLocalizationInlineCreateAttributesFromJSON(json['attributes']),
        'relationships': AppCustomProductPageLocalizationCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppCustomProductPageLocalizationCreateRequestDataToJSON(value?: AppCustomProductPageLocalizationCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppCustomProductPageLocalizationInlineCreateAttributesToJSON(value.attributes),
        'relationships': AppCustomProductPageLocalizationCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

