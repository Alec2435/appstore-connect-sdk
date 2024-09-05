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
import type { AppPreviewUpdateRequestData } from './AppPreviewUpdateRequestData';
import {
    AppPreviewUpdateRequestDataFromJSON,
    AppPreviewUpdateRequestDataFromJSONTyped,
    AppPreviewUpdateRequestDataToJSON,
} from './AppPreviewUpdateRequestData';

/**
 * 
 * @export
 * @interface AppPreviewUpdateRequest
 */
export interface AppPreviewUpdateRequest {
    /**
     * 
     * @type {AppPreviewUpdateRequestData}
     * @memberof AppPreviewUpdateRequest
     */
    data: AppPreviewUpdateRequestData;
}

/**
 * Check if a given object implements the AppPreviewUpdateRequest interface.
 */
export function instanceOfAppPreviewUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppPreviewUpdateRequestFromJSON(json: any): AppPreviewUpdateRequest {
    return AppPreviewUpdateRequestFromJSONTyped(json, false);
}

export function AppPreviewUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppPreviewUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppPreviewUpdateRequestToJSON(value?: AppPreviewUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppPreviewUpdateRequestDataToJSON(value.data),
    };
}

