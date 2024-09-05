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
import type { SubscriptionGroupLocalizationCreateRequestData } from './SubscriptionGroupLocalizationCreateRequestData';
import {
    SubscriptionGroupLocalizationCreateRequestDataFromJSON,
    SubscriptionGroupLocalizationCreateRequestDataFromJSONTyped,
    SubscriptionGroupLocalizationCreateRequestDataToJSON,
} from './SubscriptionGroupLocalizationCreateRequestData';

/**
 * 
 * @export
 * @interface SubscriptionGroupLocalizationCreateRequest
 */
export interface SubscriptionGroupLocalizationCreateRequest {
    /**
     * 
     * @type {SubscriptionGroupLocalizationCreateRequestData}
     * @memberof SubscriptionGroupLocalizationCreateRequest
     */
    data: SubscriptionGroupLocalizationCreateRequestData;
}

/**
 * Check if a given object implements the SubscriptionGroupLocalizationCreateRequest interface.
 */
export function instanceOfSubscriptionGroupLocalizationCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SubscriptionGroupLocalizationCreateRequestFromJSON(json: any): SubscriptionGroupLocalizationCreateRequest {
    return SubscriptionGroupLocalizationCreateRequestFromJSONTyped(json, false);
}

export function SubscriptionGroupLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupLocalizationCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionGroupLocalizationCreateRequestDataFromJSON(json['data']),
    };
}

export function SubscriptionGroupLocalizationCreateRequestToJSON(value?: SubscriptionGroupLocalizationCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionGroupLocalizationCreateRequestDataToJSON(value.data),
    };
}

