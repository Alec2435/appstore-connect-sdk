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
import type { AppStoreVersionSubmissionCreateRequestData } from './AppStoreVersionSubmissionCreateRequestData';
import {
    AppStoreVersionSubmissionCreateRequestDataFromJSON,
    AppStoreVersionSubmissionCreateRequestDataFromJSONTyped,
    AppStoreVersionSubmissionCreateRequestDataToJSON,
} from './AppStoreVersionSubmissionCreateRequestData';

/**
 * 
 * @export
 * @interface AppStoreVersionSubmissionCreateRequest
 */
export interface AppStoreVersionSubmissionCreateRequest {
    /**
     * 
     * @type {AppStoreVersionSubmissionCreateRequestData}
     * @memberof AppStoreVersionSubmissionCreateRequest
     */
    data: AppStoreVersionSubmissionCreateRequestData;
}

/**
 * Check if a given object implements the AppStoreVersionSubmissionCreateRequest interface.
 */
export function instanceOfAppStoreVersionSubmissionCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppStoreVersionSubmissionCreateRequestFromJSON(json: any): AppStoreVersionSubmissionCreateRequest {
    return AppStoreVersionSubmissionCreateRequestFromJSONTyped(json, false);
}

export function AppStoreVersionSubmissionCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionSubmissionCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppStoreVersionSubmissionCreateRequestDataFromJSON(json['data']),
    };
}

export function AppStoreVersionSubmissionCreateRequestToJSON(value?: AppStoreVersionSubmissionCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppStoreVersionSubmissionCreateRequestDataToJSON(value.data),
    };
}

