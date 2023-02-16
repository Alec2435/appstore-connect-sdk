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
import type { AppEventVideoClipCreateRequestData } from './AppEventVideoClipCreateRequestData';
import {
    AppEventVideoClipCreateRequestDataFromJSON,
    AppEventVideoClipCreateRequestDataFromJSONTyped,
    AppEventVideoClipCreateRequestDataToJSON,
} from './AppEventVideoClipCreateRequestData';

/**
 * 
 * @export
 * @interface AppEventVideoClipCreateRequest
 */
export interface AppEventVideoClipCreateRequest {
    /**
     * 
     * @type {AppEventVideoClipCreateRequestData}
     * @memberof AppEventVideoClipCreateRequest
     */
    data: AppEventVideoClipCreateRequestData;
}

/**
 * Check if a given object implements the AppEventVideoClipCreateRequest interface.
 */
export function instanceOfAppEventVideoClipCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppEventVideoClipCreateRequestFromJSON(json: any): AppEventVideoClipCreateRequest {
    return AppEventVideoClipCreateRequestFromJSONTyped(json, false);
}

export function AppEventVideoClipCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventVideoClipCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppEventVideoClipCreateRequestDataFromJSON(json['data']),
    };
}

export function AppEventVideoClipCreateRequestToJSON(value?: AppEventVideoClipCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppEventVideoClipCreateRequestDataToJSON(value.data),
    };
}

