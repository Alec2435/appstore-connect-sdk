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
import type { AppScreenshotAttributes } from './AppScreenshotAttributes';
import {
    AppScreenshotAttributesFromJSON,
    AppScreenshotAttributesFromJSONTyped,
    AppScreenshotAttributesToJSON,
} from './AppScreenshotAttributes';
import type { InAppPurchaseAppStoreReviewScreenshotRelationships } from './InAppPurchaseAppStoreReviewScreenshotRelationships';
import {
    InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSON,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSONTyped,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsToJSON,
} from './InAppPurchaseAppStoreReviewScreenshotRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface InAppPurchaseAppStoreReviewScreenshot
 */
export interface InAppPurchaseAppStoreReviewScreenshot {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseAppStoreReviewScreenshot
     */
    type: InAppPurchaseAppStoreReviewScreenshotTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseAppStoreReviewScreenshot
     */
    id: string;
    /**
     * 
     * @type {AppScreenshotAttributes}
     * @memberof InAppPurchaseAppStoreReviewScreenshot
     */
    attributes?: AppScreenshotAttributes;
    /**
     * 
     * @type {InAppPurchaseAppStoreReviewScreenshotRelationships}
     * @memberof InAppPurchaseAppStoreReviewScreenshot
     */
    relationships?: InAppPurchaseAppStoreReviewScreenshotRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof InAppPurchaseAppStoreReviewScreenshot
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const InAppPurchaseAppStoreReviewScreenshotTypeEnum = {
    InAppPurchaseAppStoreReviewScreenshots: 'inAppPurchaseAppStoreReviewScreenshots'
} as const;
export type InAppPurchaseAppStoreReviewScreenshotTypeEnum = typeof InAppPurchaseAppStoreReviewScreenshotTypeEnum[keyof typeof InAppPurchaseAppStoreReviewScreenshotTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshot interface.
 */
export function instanceOfInAppPurchaseAppStoreReviewScreenshot(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function InAppPurchaseAppStoreReviewScreenshotFromJSON(json: any): InAppPurchaseAppStoreReviewScreenshot {
    return InAppPurchaseAppStoreReviewScreenshotFromJSONTyped(json, false);
}

export function InAppPurchaseAppStoreReviewScreenshotFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAppStoreReviewScreenshot {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppScreenshotAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function InAppPurchaseAppStoreReviewScreenshotToJSON(value?: InAppPurchaseAppStoreReviewScreenshot | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppScreenshotAttributesToJSON(value.attributes),
        'relationships': InAppPurchaseAppStoreReviewScreenshotRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

