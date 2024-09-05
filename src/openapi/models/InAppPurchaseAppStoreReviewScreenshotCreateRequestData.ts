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
import type { AppClipAdvancedExperienceImageCreateRequestDataAttributes } from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';
import {
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSONTyped,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON,
} from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';
import type { InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationships } from './InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationships';
import {
    InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSON,
    InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSONTyped,
    InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsToJSON,
} from './InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface InAppPurchaseAppStoreReviewScreenshotCreateRequestData
 */
export interface InAppPurchaseAppStoreReviewScreenshotCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseAppStoreReviewScreenshotCreateRequestData
     */
    type: InAppPurchaseAppStoreReviewScreenshotCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageCreateRequestDataAttributes}
     * @memberof InAppPurchaseAppStoreReviewScreenshotCreateRequestData
     */
    attributes: AppClipAdvancedExperienceImageCreateRequestDataAttributes;
    /**
     * 
     * @type {InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationships}
     * @memberof InAppPurchaseAppStoreReviewScreenshotCreateRequestData
     */
    relationships: InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationships;
}


/**
 * @export
 */
export const InAppPurchaseAppStoreReviewScreenshotCreateRequestDataTypeEnum = {
    InAppPurchaseAppStoreReviewScreenshots: 'inAppPurchaseAppStoreReviewScreenshots'
} as const;
export type InAppPurchaseAppStoreReviewScreenshotCreateRequestDataTypeEnum = typeof InAppPurchaseAppStoreReviewScreenshotCreateRequestDataTypeEnum[keyof typeof InAppPurchaseAppStoreReviewScreenshotCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshotCreateRequestData interface.
 */
export function instanceOfInAppPurchaseAppStoreReviewScreenshotCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function InAppPurchaseAppStoreReviewScreenshotCreateRequestDataFromJSON(json: any): InAppPurchaseAppStoreReviewScreenshotCreateRequestData {
    return InAppPurchaseAppStoreReviewScreenshotCreateRequestDataFromJSONTyped(json, false);
}

export function InAppPurchaseAppStoreReviewScreenshotCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAppStoreReviewScreenshotCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function InAppPurchaseAppStoreReviewScreenshotCreateRequestDataToJSON(value?: InAppPurchaseAppStoreReviewScreenshotCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

