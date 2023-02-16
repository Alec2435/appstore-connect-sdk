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
import type { AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData } from './AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData';
import {
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataFromJSON,
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataFromJSONTyped,
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataToJSON,
} from './AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData';

/**
 * 
 * @export
 * @interface AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion
 */
export interface AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion {
    /**
     * 
     * @type {AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData}
     * @memberof AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion
     */
    data: AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData;
}

/**
 * Check if a given object implements the AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion interface.
 */
export function instanceOfAppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionFromJSON(json: any): AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion {
    return AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionFromJSONTyped(json, false);
}

export function AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataFromJSON(json['data']),
    };
}

export function AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionToJSON(value?: AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataToJSON(value.data),
    };
}

