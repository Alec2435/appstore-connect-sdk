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
import type { AppStoreVersionLocalizationCreateRequestData } from './AppStoreVersionLocalizationCreateRequestData';
import {
    AppStoreVersionLocalizationCreateRequestDataFromJSON,
    AppStoreVersionLocalizationCreateRequestDataFromJSONTyped,
    AppStoreVersionLocalizationCreateRequestDataToJSON,
} from './AppStoreVersionLocalizationCreateRequestData';

/**
 * 
 * @export
 * @interface AppStoreVersionLocalizationCreateRequest
 */
export interface AppStoreVersionLocalizationCreateRequest {
    /**
     * 
     * @type {AppStoreVersionLocalizationCreateRequestData}
     * @memberof AppStoreVersionLocalizationCreateRequest
     */
    data: AppStoreVersionLocalizationCreateRequestData;
}

/**
 * Check if a given object implements the AppStoreVersionLocalizationCreateRequest interface.
 */
export function instanceOfAppStoreVersionLocalizationCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppStoreVersionLocalizationCreateRequestFromJSON(json: any): AppStoreVersionLocalizationCreateRequest {
    return AppStoreVersionLocalizationCreateRequestFromJSONTyped(json, false);
}

export function AppStoreVersionLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionLocalizationCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppStoreVersionLocalizationCreateRequestDataFromJSON(json['data']),
    };
}

export function AppStoreVersionLocalizationCreateRequestToJSON(value?: AppStoreVersionLocalizationCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppStoreVersionLocalizationCreateRequestDataToJSON(value.data),
    };
}

