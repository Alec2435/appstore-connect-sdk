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
import type { AppEventScreenshotRelationshipsAppEventLocalizationData } from './AppEventScreenshotRelationshipsAppEventLocalizationData';
import {
    AppEventScreenshotRelationshipsAppEventLocalizationDataFromJSON,
    AppEventScreenshotRelationshipsAppEventLocalizationDataFromJSONTyped,
    AppEventScreenshotRelationshipsAppEventLocalizationDataToJSON,
} from './AppEventScreenshotRelationshipsAppEventLocalizationData';

/**
 * 
 * @export
 * @interface AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization
 */
export interface AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization {
    /**
     * 
     * @type {AppEventScreenshotRelationshipsAppEventLocalizationData}
     * @memberof AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization
     */
    data: AppEventScreenshotRelationshipsAppEventLocalizationData;
}

/**
 * Check if a given object implements the AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization interface.
 */
export function instanceOfAppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationFromJSON(json: any): AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization {
    return AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationFromJSONTyped(json, false);
}

export function AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppEventScreenshotRelationshipsAppEventLocalizationDataFromJSON(json['data']),
    };
}

export function AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationToJSON(value?: AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppEventScreenshotRelationshipsAppEventLocalizationDataToJSON(value.data),
    };
}

