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
import type { BetaAppClipInvocationUpdateRequestData } from './BetaAppClipInvocationUpdateRequestData';
import {
    BetaAppClipInvocationUpdateRequestDataFromJSON,
    BetaAppClipInvocationUpdateRequestDataFromJSONTyped,
    BetaAppClipInvocationUpdateRequestDataToJSON,
} from './BetaAppClipInvocationUpdateRequestData';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationUpdateRequest
 */
export interface BetaAppClipInvocationUpdateRequest {
    /**
     * 
     * @type {BetaAppClipInvocationUpdateRequestData}
     * @memberof BetaAppClipInvocationUpdateRequest
     */
    data: BetaAppClipInvocationUpdateRequestData;
}

/**
 * Check if a given object implements the BetaAppClipInvocationUpdateRequest interface.
 */
export function instanceOfBetaAppClipInvocationUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BetaAppClipInvocationUpdateRequestFromJSON(json: any): BetaAppClipInvocationUpdateRequest {
    return BetaAppClipInvocationUpdateRequestFromJSONTyped(json, false);
}

export function BetaAppClipInvocationUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BetaAppClipInvocationUpdateRequestDataFromJSON(json['data']),
    };
}

export function BetaAppClipInvocationUpdateRequestToJSON(value?: BetaAppClipInvocationUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BetaAppClipInvocationUpdateRequestDataToJSON(value.data),
    };
}

