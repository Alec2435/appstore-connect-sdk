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
import type { AppEventLocalizationCreateRequestDataAttributes } from './AppEventLocalizationCreateRequestDataAttributes';
import {
    AppEventLocalizationCreateRequestDataAttributesFromJSON,
    AppEventLocalizationCreateRequestDataAttributesFromJSONTyped,
    AppEventLocalizationCreateRequestDataAttributesToJSON,
} from './AppEventLocalizationCreateRequestDataAttributes';
import type { AppEventLocalizationCreateRequestDataRelationships } from './AppEventLocalizationCreateRequestDataRelationships';
import {
    AppEventLocalizationCreateRequestDataRelationshipsFromJSON,
    AppEventLocalizationCreateRequestDataRelationshipsFromJSONTyped,
    AppEventLocalizationCreateRequestDataRelationshipsToJSON,
} from './AppEventLocalizationCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface AppEventLocalizationCreateRequestData
 */
export interface AppEventLocalizationCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationCreateRequestData
     */
    type: AppEventLocalizationCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppEventLocalizationCreateRequestDataAttributes}
     * @memberof AppEventLocalizationCreateRequestData
     */
    attributes: AppEventLocalizationCreateRequestDataAttributes;
    /**
     * 
     * @type {AppEventLocalizationCreateRequestDataRelationships}
     * @memberof AppEventLocalizationCreateRequestData
     */
    relationships: AppEventLocalizationCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppEventLocalizationCreateRequestDataTypeEnum = {
    AppEventLocalizations: 'appEventLocalizations'
} as const;
export type AppEventLocalizationCreateRequestDataTypeEnum = typeof AppEventLocalizationCreateRequestDataTypeEnum[keyof typeof AppEventLocalizationCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppEventLocalizationCreateRequestData interface.
 */
export function instanceOfAppEventLocalizationCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function AppEventLocalizationCreateRequestDataFromJSON(json: any): AppEventLocalizationCreateRequestData {
    return AppEventLocalizationCreateRequestDataFromJSONTyped(json, false);
}

export function AppEventLocalizationCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppEventLocalizationCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AppEventLocalizationCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppEventLocalizationCreateRequestDataToJSON(value?: AppEventLocalizationCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppEventLocalizationCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': AppEventLocalizationCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

