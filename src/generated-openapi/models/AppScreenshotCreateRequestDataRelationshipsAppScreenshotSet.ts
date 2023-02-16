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
import type { AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner } from './AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner';
import {
    AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerFromJSON,
    AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerFromJSONTyped,
    AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerToJSON,
} from './AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner';

/**
 * 
 * @export
 * @interface AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet
 */
export interface AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet {
    /**
     * 
     * @type {AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner}
     * @memberof AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet
     */
    data: AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner;
}

/**
 * Check if a given object implements the AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet interface.
 */
export function instanceOfAppScreenshotCreateRequestDataRelationshipsAppScreenshotSet(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetFromJSON(json: any): AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet {
    return AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetFromJSONTyped(json, false);
}

export function AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerFromJSON(json['data']),
    };
}

export function AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetToJSON(value?: AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerToJSON(value.data),
    };
}

