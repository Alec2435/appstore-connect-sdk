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
 * @interface AppPreviewSetRelationshipsAppStoreVersionLocalizationData
 */
export interface AppPreviewSetRelationshipsAppStoreVersionLocalizationData {
    /**
     * 
     * @type {string}
     * @memberof AppPreviewSetRelationshipsAppStoreVersionLocalizationData
     */
    type: AppPreviewSetRelationshipsAppStoreVersionLocalizationDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppPreviewSetRelationshipsAppStoreVersionLocalizationData
     */
    id: string;
}


/**
 * @export
 */
export const AppPreviewSetRelationshipsAppStoreVersionLocalizationDataTypeEnum = {
    AppStoreVersionLocalizations: 'appStoreVersionLocalizations'
} as const;
export type AppPreviewSetRelationshipsAppStoreVersionLocalizationDataTypeEnum = typeof AppPreviewSetRelationshipsAppStoreVersionLocalizationDataTypeEnum[keyof typeof AppPreviewSetRelationshipsAppStoreVersionLocalizationDataTypeEnum];


/**
 * Check if a given object implements the AppPreviewSetRelationshipsAppStoreVersionLocalizationData interface.
 */
export function instanceOfAppPreviewSetRelationshipsAppStoreVersionLocalizationData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSON(json: any): AppPreviewSetRelationshipsAppStoreVersionLocalizationData {
    return AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSONTyped(json, false);
}

export function AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetRelationshipsAppStoreVersionLocalizationData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppPreviewSetRelationshipsAppStoreVersionLocalizationDataToJSON(value?: AppPreviewSetRelationshipsAppStoreVersionLocalizationData | null): any {
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

