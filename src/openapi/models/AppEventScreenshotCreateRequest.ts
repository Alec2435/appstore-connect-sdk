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
import type { AppEventScreenshotCreateRequestData } from './AppEventScreenshotCreateRequestData';
import {
    AppEventScreenshotCreateRequestDataFromJSON,
    AppEventScreenshotCreateRequestDataFromJSONTyped,
    AppEventScreenshotCreateRequestDataToJSON,
} from './AppEventScreenshotCreateRequestData';

/**
 * 
 * @export
 * @interface AppEventScreenshotCreateRequest
 */
export interface AppEventScreenshotCreateRequest {
    /**
     * 
     * @type {AppEventScreenshotCreateRequestData}
     * @memberof AppEventScreenshotCreateRequest
     */
    data: AppEventScreenshotCreateRequestData;
}

/**
 * Check if a given object implements the AppEventScreenshotCreateRequest interface.
 */
export function instanceOfAppEventScreenshotCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppEventScreenshotCreateRequestFromJSON(json: any): AppEventScreenshotCreateRequest {
    return AppEventScreenshotCreateRequestFromJSONTyped(json, false);
}

export function AppEventScreenshotCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventScreenshotCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppEventScreenshotCreateRequestDataFromJSON(json['data']),
    };
}

export function AppEventScreenshotCreateRequestToJSON(value?: AppEventScreenshotCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppEventScreenshotCreateRequestDataToJSON(value.data),
    };
}

