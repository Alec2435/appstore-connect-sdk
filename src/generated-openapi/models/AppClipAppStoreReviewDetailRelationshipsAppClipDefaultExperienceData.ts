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
 * @interface AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData
 */
export interface AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData {
    /**
     * 
     * @type {string}
     * @memberof AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData
     */
    type: AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData
     */
    id: string;
}


/**
 * @export
 */
export const AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataTypeEnum = {
    AppClipDefaultExperiences: 'appClipDefaultExperiences'
} as const;
export type AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataTypeEnum = typeof AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataTypeEnum[keyof typeof AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataTypeEnum];


/**
 * Check if a given object implements the AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData interface.
 */
export function instanceOfAppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSON(json: any): AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData {
    return AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSONTyped(json, false);
}

export function AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataToJSON(value?: AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData | null): any {
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

