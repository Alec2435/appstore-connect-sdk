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
import type { AppAvailabilityRelationshipsApp } from './AppAvailabilityRelationshipsApp';
import {
    AppAvailabilityRelationshipsAppFromJSON,
    AppAvailabilityRelationshipsAppFromJSONTyped,
    AppAvailabilityRelationshipsAppToJSON,
} from './AppAvailabilityRelationshipsApp';
import type { AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion } from './AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion';
import {
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionFromJSON,
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionFromJSONTyped,
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionToJSON,
} from './AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion';
import type { ReviewSubmissionRelationshipsItems } from './ReviewSubmissionRelationshipsItems';
import {
    ReviewSubmissionRelationshipsItemsFromJSON,
    ReviewSubmissionRelationshipsItemsFromJSONTyped,
    ReviewSubmissionRelationshipsItemsToJSON,
} from './ReviewSubmissionRelationshipsItems';
import type { ReviewSubmissionRelationshipsSubmittedByActor } from './ReviewSubmissionRelationshipsSubmittedByActor';
import {
    ReviewSubmissionRelationshipsSubmittedByActorFromJSON,
    ReviewSubmissionRelationshipsSubmittedByActorFromJSONTyped,
    ReviewSubmissionRelationshipsSubmittedByActorToJSON,
} from './ReviewSubmissionRelationshipsSubmittedByActor';

/**
 * 
 * @export
 * @interface ReviewSubmissionRelationships
 */
export interface ReviewSubmissionRelationships {
    /**
     * 
     * @type {AppAvailabilityRelationshipsApp}
     * @memberof ReviewSubmissionRelationships
     */
    app?: AppAvailabilityRelationshipsApp;
    /**
     * 
     * @type {ReviewSubmissionRelationshipsItems}
     * @memberof ReviewSubmissionRelationships
     */
    items?: ReviewSubmissionRelationshipsItems;
    /**
     * 
     * @type {AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion}
     * @memberof ReviewSubmissionRelationships
     */
    appStoreVersionForReview?: AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion;
    /**
     * 
     * @type {ReviewSubmissionRelationshipsSubmittedByActor}
     * @memberof ReviewSubmissionRelationships
     */
    submittedByActor?: ReviewSubmissionRelationshipsSubmittedByActor;
    /**
     * 
     * @type {ReviewSubmissionRelationshipsSubmittedByActor}
     * @memberof ReviewSubmissionRelationships
     */
    lastUpdatedByActor?: ReviewSubmissionRelationshipsSubmittedByActor;
}

/**
 * Check if a given object implements the ReviewSubmissionRelationships interface.
 */
export function instanceOfReviewSubmissionRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReviewSubmissionRelationshipsFromJSON(json: any): ReviewSubmissionRelationships {
    return ReviewSubmissionRelationshipsFromJSONTyped(json, false);
}

export function ReviewSubmissionRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'app': !exists(json, 'app') ? undefined : AppAvailabilityRelationshipsAppFromJSON(json['app']),
        'items': !exists(json, 'items') ? undefined : ReviewSubmissionRelationshipsItemsFromJSON(json['items']),
        'appStoreVersionForReview': !exists(json, 'appStoreVersionForReview') ? undefined : AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionFromJSON(json['appStoreVersionForReview']),
        'submittedByActor': !exists(json, 'submittedByActor') ? undefined : ReviewSubmissionRelationshipsSubmittedByActorFromJSON(json['submittedByActor']),
        'lastUpdatedByActor': !exists(json, 'lastUpdatedByActor') ? undefined : ReviewSubmissionRelationshipsSubmittedByActorFromJSON(json['lastUpdatedByActor']),
    };
}

export function ReviewSubmissionRelationshipsToJSON(value?: ReviewSubmissionRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'app': AppAvailabilityRelationshipsAppToJSON(value.app),
        'items': ReviewSubmissionRelationshipsItemsToJSON(value.items),
        'appStoreVersionForReview': AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionToJSON(value.appStoreVersionForReview),
        'submittedByActor': ReviewSubmissionRelationshipsSubmittedByActorToJSON(value.submittedByActor),
        'lastUpdatedByActor': ReviewSubmissionRelationshipsSubmittedByActorToJSON(value.lastUpdatedByActor),
    };
}

