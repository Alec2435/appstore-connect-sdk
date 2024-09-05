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
import type { AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail } from './AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail';
import {
    AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailFromJSON,
    AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailFromJSONTyped,
    AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailToJSON,
} from './AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail';

/**
 * 
 * @export
 * @interface AppStoreReviewAttachmentRelationships
 */
export interface AppStoreReviewAttachmentRelationships {
    /**
     * 
     * @type {AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail}
     * @memberof AppStoreReviewAttachmentRelationships
     */
    appStoreReviewDetail?: AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail;
}

/**
 * Check if a given object implements the AppStoreReviewAttachmentRelationships interface.
 */
export function instanceOfAppStoreReviewAttachmentRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreReviewAttachmentRelationshipsFromJSON(json: any): AppStoreReviewAttachmentRelationships {
    return AppStoreReviewAttachmentRelationshipsFromJSONTyped(json, false);
}

export function AppStoreReviewAttachmentRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appStoreReviewDetail': !exists(json, 'appStoreReviewDetail') ? undefined : AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailFromJSON(json['appStoreReviewDetail']),
    };
}

export function AppStoreReviewAttachmentRelationshipsToJSON(value?: AppStoreReviewAttachmentRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appStoreReviewDetail': AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailToJSON(value.appStoreReviewDetail),
    };
}

