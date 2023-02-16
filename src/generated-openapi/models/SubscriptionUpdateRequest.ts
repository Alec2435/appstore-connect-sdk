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
import type { SubscriptionUpdateRequestData } from './SubscriptionUpdateRequestData';
import {
    SubscriptionUpdateRequestDataFromJSON,
    SubscriptionUpdateRequestDataFromJSONTyped,
    SubscriptionUpdateRequestDataToJSON,
} from './SubscriptionUpdateRequestData';
import type { SubscriptionUpdateRequestIncludedInner } from './SubscriptionUpdateRequestIncludedInner';
import {
    SubscriptionUpdateRequestIncludedInnerFromJSON,
    SubscriptionUpdateRequestIncludedInnerFromJSONTyped,
    SubscriptionUpdateRequestIncludedInnerToJSON,
} from './SubscriptionUpdateRequestIncludedInner';

/**
 * 
 * @export
 * @interface SubscriptionUpdateRequest
 */
export interface SubscriptionUpdateRequest {
    /**
     * 
     * @type {SubscriptionUpdateRequestData}
     * @memberof SubscriptionUpdateRequest
     */
    data: SubscriptionUpdateRequestData;
    /**
     * 
     * @type {Array<SubscriptionUpdateRequestIncludedInner>}
     * @memberof SubscriptionUpdateRequest
     */
    included?: Array<SubscriptionUpdateRequestIncludedInner>;
}

/**
 * Check if a given object implements the SubscriptionUpdateRequest interface.
 */
export function instanceOfSubscriptionUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SubscriptionUpdateRequestFromJSON(json: any): SubscriptionUpdateRequest {
    return SubscriptionUpdateRequestFromJSONTyped(json, false);
}

export function SubscriptionUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionUpdateRequestDataFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(SubscriptionUpdateRequestIncludedInnerFromJSON)),
    };
}

export function SubscriptionUpdateRequestToJSON(value?: SubscriptionUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionUpdateRequestDataToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(SubscriptionUpdateRequestIncludedInnerToJSON)),
    };
}

