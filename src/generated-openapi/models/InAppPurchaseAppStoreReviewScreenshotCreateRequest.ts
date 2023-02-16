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
import type { InAppPurchaseAppStoreReviewScreenshotCreateRequestData } from './InAppPurchaseAppStoreReviewScreenshotCreateRequestData';
import {
    InAppPurchaseAppStoreReviewScreenshotCreateRequestDataFromJSON,
    InAppPurchaseAppStoreReviewScreenshotCreateRequestDataFromJSONTyped,
    InAppPurchaseAppStoreReviewScreenshotCreateRequestDataToJSON,
} from './InAppPurchaseAppStoreReviewScreenshotCreateRequestData';

/**
 * 
 * @export
 * @interface InAppPurchaseAppStoreReviewScreenshotCreateRequest
 */
export interface InAppPurchaseAppStoreReviewScreenshotCreateRequest {
    /**
     * 
     * @type {InAppPurchaseAppStoreReviewScreenshotCreateRequestData}
     * @memberof InAppPurchaseAppStoreReviewScreenshotCreateRequest
     */
    data: InAppPurchaseAppStoreReviewScreenshotCreateRequestData;
}

/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshotCreateRequest interface.
 */
export function instanceOfInAppPurchaseAppStoreReviewScreenshotCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function InAppPurchaseAppStoreReviewScreenshotCreateRequestFromJSON(json: any): InAppPurchaseAppStoreReviewScreenshotCreateRequest {
    return InAppPurchaseAppStoreReviewScreenshotCreateRequestFromJSONTyped(json, false);
}

export function InAppPurchaseAppStoreReviewScreenshotCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAppStoreReviewScreenshotCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': InAppPurchaseAppStoreReviewScreenshotCreateRequestDataFromJSON(json['data']),
    };
}

export function InAppPurchaseAppStoreReviewScreenshotCreateRequestToJSON(value?: InAppPurchaseAppStoreReviewScreenshotCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': InAppPurchaseAppStoreReviewScreenshotCreateRequestDataToJSON(value.data),
    };
}

