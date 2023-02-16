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
import type { AppClipAppStoreReviewDetailAttributes } from './AppClipAppStoreReviewDetailAttributes';
import {
    AppClipAppStoreReviewDetailAttributesFromJSON,
    AppClipAppStoreReviewDetailAttributesFromJSONTyped,
    AppClipAppStoreReviewDetailAttributesToJSON,
} from './AppClipAppStoreReviewDetailAttributes';

/**
 * 
 * @export
 * @interface AppClipAppStoreReviewDetailUpdateRequestData
 */
export interface AppClipAppStoreReviewDetailUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppClipAppStoreReviewDetailUpdateRequestData
     */
    type: AppClipAppStoreReviewDetailUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipAppStoreReviewDetailUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppClipAppStoreReviewDetailAttributes}
     * @memberof AppClipAppStoreReviewDetailUpdateRequestData
     */
    attributes?: AppClipAppStoreReviewDetailAttributes;
}


/**
 * @export
 */
export const AppClipAppStoreReviewDetailUpdateRequestDataTypeEnum = {
    AppClipAppStoreReviewDetails: 'appClipAppStoreReviewDetails'
} as const;
export type AppClipAppStoreReviewDetailUpdateRequestDataTypeEnum = typeof AppClipAppStoreReviewDetailUpdateRequestDataTypeEnum[keyof typeof AppClipAppStoreReviewDetailUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppClipAppStoreReviewDetailUpdateRequestData interface.
 */
export function instanceOfAppClipAppStoreReviewDetailUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppClipAppStoreReviewDetailUpdateRequestDataFromJSON(json: any): AppClipAppStoreReviewDetailUpdateRequestData {
    return AppClipAppStoreReviewDetailUpdateRequestDataFromJSONTyped(json, false);
}

export function AppClipAppStoreReviewDetailUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAppStoreReviewDetailUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppClipAppStoreReviewDetailAttributesFromJSON(json['attributes']),
    };
}

export function AppClipAppStoreReviewDetailUpdateRequestDataToJSON(value?: AppClipAppStoreReviewDetailUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppClipAppStoreReviewDetailAttributesToJSON(value.attributes),
    };
}

