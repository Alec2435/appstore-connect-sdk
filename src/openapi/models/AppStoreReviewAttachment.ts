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
import type { AppStoreReviewAttachmentAttributes } from './AppStoreReviewAttachmentAttributes';
import {
    AppStoreReviewAttachmentAttributesFromJSON,
    AppStoreReviewAttachmentAttributesFromJSONTyped,
    AppStoreReviewAttachmentAttributesToJSON,
} from './AppStoreReviewAttachmentAttributes';
import type { AppStoreReviewAttachmentRelationships } from './AppStoreReviewAttachmentRelationships';
import {
    AppStoreReviewAttachmentRelationshipsFromJSON,
    AppStoreReviewAttachmentRelationshipsFromJSONTyped,
    AppStoreReviewAttachmentRelationshipsToJSON,
} from './AppStoreReviewAttachmentRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppStoreReviewAttachment
 */
export interface AppStoreReviewAttachment {
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewAttachment
     */
    type: AppStoreReviewAttachmentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewAttachment
     */
    id: string;
    /**
     * 
     * @type {AppStoreReviewAttachmentAttributes}
     * @memberof AppStoreReviewAttachment
     */
    attributes?: AppStoreReviewAttachmentAttributes;
    /**
     * 
     * @type {AppStoreReviewAttachmentRelationships}
     * @memberof AppStoreReviewAttachment
     */
    relationships?: AppStoreReviewAttachmentRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppStoreReviewAttachment
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppStoreReviewAttachmentTypeEnum = {
    AppStoreReviewAttachments: 'appStoreReviewAttachments'
} as const;
export type AppStoreReviewAttachmentTypeEnum = typeof AppStoreReviewAttachmentTypeEnum[keyof typeof AppStoreReviewAttachmentTypeEnum];


/**
 * Check if a given object implements the AppStoreReviewAttachment interface.
 */
export function instanceOfAppStoreReviewAttachment(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppStoreReviewAttachmentFromJSON(json: any): AppStoreReviewAttachment {
    return AppStoreReviewAttachmentFromJSONTyped(json, false);
}

export function AppStoreReviewAttachmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppStoreReviewAttachmentAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppStoreReviewAttachmentRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppStoreReviewAttachmentToJSON(value?: AppStoreReviewAttachment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppStoreReviewAttachmentAttributesToJSON(value.attributes),
        'relationships': AppStoreReviewAttachmentRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

