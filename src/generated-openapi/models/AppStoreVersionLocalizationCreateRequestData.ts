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
import type { AppStoreReviewDetailCreateRequestDataRelationships } from './AppStoreReviewDetailCreateRequestDataRelationships';
import {
    AppStoreReviewDetailCreateRequestDataRelationshipsFromJSON,
    AppStoreReviewDetailCreateRequestDataRelationshipsFromJSONTyped,
    AppStoreReviewDetailCreateRequestDataRelationshipsToJSON,
} from './AppStoreReviewDetailCreateRequestDataRelationships';
import type { AppStoreVersionLocalizationCreateRequestDataAttributes } from './AppStoreVersionLocalizationCreateRequestDataAttributes';
import {
    AppStoreVersionLocalizationCreateRequestDataAttributesFromJSON,
    AppStoreVersionLocalizationCreateRequestDataAttributesFromJSONTyped,
    AppStoreVersionLocalizationCreateRequestDataAttributesToJSON,
} from './AppStoreVersionLocalizationCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppStoreVersionLocalizationCreateRequestData
 */
export interface AppStoreVersionLocalizationCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionLocalizationCreateRequestData
     */
    type: AppStoreVersionLocalizationCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppStoreVersionLocalizationCreateRequestDataAttributes}
     * @memberof AppStoreVersionLocalizationCreateRequestData
     */
    attributes: AppStoreVersionLocalizationCreateRequestDataAttributes;
    /**
     * 
     * @type {AppStoreReviewDetailCreateRequestDataRelationships}
     * @memberof AppStoreVersionLocalizationCreateRequestData
     */
    relationships: AppStoreReviewDetailCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppStoreVersionLocalizationCreateRequestDataTypeEnum = {
    AppStoreVersionLocalizations: 'appStoreVersionLocalizations'
} as const;
export type AppStoreVersionLocalizationCreateRequestDataTypeEnum = typeof AppStoreVersionLocalizationCreateRequestDataTypeEnum[keyof typeof AppStoreVersionLocalizationCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionLocalizationCreateRequestData interface.
 */
export function instanceOfAppStoreVersionLocalizationCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function AppStoreVersionLocalizationCreateRequestDataFromJSON(json: any): AppStoreVersionLocalizationCreateRequestData {
    return AppStoreVersionLocalizationCreateRequestDataFromJSONTyped(json, false);
}

export function AppStoreVersionLocalizationCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionLocalizationCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppStoreVersionLocalizationCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AppStoreReviewDetailCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppStoreVersionLocalizationCreateRequestDataToJSON(value?: AppStoreVersionLocalizationCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppStoreVersionLocalizationCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': AppStoreReviewDetailCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

