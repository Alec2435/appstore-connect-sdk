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
import type { AppStoreReviewDetailAttributes } from './AppStoreReviewDetailAttributes';
import {
    AppStoreReviewDetailAttributesFromJSON,
    AppStoreReviewDetailAttributesFromJSONTyped,
    AppStoreReviewDetailAttributesToJSON,
} from './AppStoreReviewDetailAttributes';
import type { AppStoreReviewDetailRelationships } from './AppStoreReviewDetailRelationships';
import {
    AppStoreReviewDetailRelationshipsFromJSON,
    AppStoreReviewDetailRelationshipsFromJSONTyped,
    AppStoreReviewDetailRelationshipsToJSON,
} from './AppStoreReviewDetailRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppStoreReviewDetail
 */
export interface AppStoreReviewDetail {
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewDetail
     */
    type: AppStoreReviewDetailTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewDetail
     */
    id: string;
    /**
     * 
     * @type {AppStoreReviewDetailAttributes}
     * @memberof AppStoreReviewDetail
     */
    attributes?: AppStoreReviewDetailAttributes;
    /**
     * 
     * @type {AppStoreReviewDetailRelationships}
     * @memberof AppStoreReviewDetail
     */
    relationships?: AppStoreReviewDetailRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppStoreReviewDetail
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const AppStoreReviewDetailTypeEnum = {
    AppStoreReviewDetails: 'appStoreReviewDetails'
} as const;
export type AppStoreReviewDetailTypeEnum = typeof AppStoreReviewDetailTypeEnum[keyof typeof AppStoreReviewDetailTypeEnum];


/**
 * Check if a given object implements the AppStoreReviewDetail interface.
 */
export function instanceOfAppStoreReviewDetail(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppStoreReviewDetailFromJSON(json: any): AppStoreReviewDetail {
    return AppStoreReviewDetailFromJSONTyped(json, false);
}

export function AppStoreReviewDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppStoreReviewDetailAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppStoreReviewDetailRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function AppStoreReviewDetailToJSON(value?: AppStoreReviewDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppStoreReviewDetailAttributesToJSON(value.attributes),
        'relationships': AppStoreReviewDetailRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

