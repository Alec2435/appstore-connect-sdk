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
import type { InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2 } from './InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2';
import {
    InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSON,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSONTyped,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2ToJSON,
} from './InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2';
import type { InAppPurchasePriceScheduleRelationshipsManualPrices } from './InAppPurchasePriceScheduleRelationshipsManualPrices';
import {
    InAppPurchasePriceScheduleRelationshipsManualPricesFromJSON,
    InAppPurchasePriceScheduleRelationshipsManualPricesFromJSONTyped,
    InAppPurchasePriceScheduleRelationshipsManualPricesToJSON,
} from './InAppPurchasePriceScheduleRelationshipsManualPrices';

/**
 * 
 * @export
 * @interface InAppPurchasePriceScheduleRelationships
 */
export interface InAppPurchasePriceScheduleRelationships {
    /**
     * 
     * @type {InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2}
     * @memberof InAppPurchasePriceScheduleRelationships
     */
    inAppPurchase?: InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2;
    /**
     * 
     * @type {InAppPurchasePriceScheduleRelationshipsManualPrices}
     * @memberof InAppPurchasePriceScheduleRelationships
     */
    manualPrices?: InAppPurchasePriceScheduleRelationshipsManualPrices;
}

/**
 * Check if a given object implements the InAppPurchasePriceScheduleRelationships interface.
 */
export function instanceOfInAppPurchasePriceScheduleRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchasePriceScheduleRelationshipsFromJSON(json: any): InAppPurchasePriceScheduleRelationships {
    return InAppPurchasePriceScheduleRelationshipsFromJSONTyped(json, false);
}

export function InAppPurchasePriceScheduleRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceScheduleRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inAppPurchase': !exists(json, 'inAppPurchase') ? undefined : InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSON(json['inAppPurchase']),
        'manualPrices': !exists(json, 'manualPrices') ? undefined : InAppPurchasePriceScheduleRelationshipsManualPricesFromJSON(json['manualPrices']),
    };
}

export function InAppPurchasePriceScheduleRelationshipsToJSON(value?: InAppPurchasePriceScheduleRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inAppPurchase': InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2ToJSON(value.inAppPurchase),
        'manualPrices': InAppPurchasePriceScheduleRelationshipsManualPricesToJSON(value.manualPrices),
    };
}

