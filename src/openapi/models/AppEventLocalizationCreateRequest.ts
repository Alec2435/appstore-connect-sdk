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
import type { AppEventLocalizationCreateRequestData } from './AppEventLocalizationCreateRequestData';
import {
    AppEventLocalizationCreateRequestDataFromJSON,
    AppEventLocalizationCreateRequestDataFromJSONTyped,
    AppEventLocalizationCreateRequestDataToJSON,
} from './AppEventLocalizationCreateRequestData';

/**
 * 
 * @export
 * @interface AppEventLocalizationCreateRequest
 */
export interface AppEventLocalizationCreateRequest {
    /**
     * 
     * @type {AppEventLocalizationCreateRequestData}
     * @memberof AppEventLocalizationCreateRequest
     */
    data: AppEventLocalizationCreateRequestData;
}

/**
 * Check if a given object implements the AppEventLocalizationCreateRequest interface.
 */
export function instanceOfAppEventLocalizationCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppEventLocalizationCreateRequestFromJSON(json: any): AppEventLocalizationCreateRequest {
    return AppEventLocalizationCreateRequestFromJSONTyped(json, false);
}

export function AppEventLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppEventLocalizationCreateRequestDataFromJSON(json['data']),
    };
}

export function AppEventLocalizationCreateRequestToJSON(value?: AppEventLocalizationCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppEventLocalizationCreateRequestDataToJSON(value.data),
    };
}

