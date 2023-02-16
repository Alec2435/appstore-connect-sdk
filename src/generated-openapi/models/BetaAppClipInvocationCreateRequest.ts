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
import type { BetaAppClipInvocationCreateRequestData } from './BetaAppClipInvocationCreateRequestData';
import {
    BetaAppClipInvocationCreateRequestDataFromJSON,
    BetaAppClipInvocationCreateRequestDataFromJSONTyped,
    BetaAppClipInvocationCreateRequestDataToJSON,
} from './BetaAppClipInvocationCreateRequestData';
import type { BetaAppClipInvocationLocalizationInlineCreate } from './BetaAppClipInvocationLocalizationInlineCreate';
import {
    BetaAppClipInvocationLocalizationInlineCreateFromJSON,
    BetaAppClipInvocationLocalizationInlineCreateFromJSONTyped,
    BetaAppClipInvocationLocalizationInlineCreateToJSON,
} from './BetaAppClipInvocationLocalizationInlineCreate';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationCreateRequest
 */
export interface BetaAppClipInvocationCreateRequest {
    /**
     * 
     * @type {BetaAppClipInvocationCreateRequestData}
     * @memberof BetaAppClipInvocationCreateRequest
     */
    data: BetaAppClipInvocationCreateRequestData;
    /**
     * 
     * @type {Array<BetaAppClipInvocationLocalizationInlineCreate>}
     * @memberof BetaAppClipInvocationCreateRequest
     */
    included?: Array<BetaAppClipInvocationLocalizationInlineCreate>;
}

/**
 * Check if a given object implements the BetaAppClipInvocationCreateRequest interface.
 */
export function instanceOfBetaAppClipInvocationCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BetaAppClipInvocationCreateRequestFromJSON(json: any): BetaAppClipInvocationCreateRequest {
    return BetaAppClipInvocationCreateRequestFromJSONTyped(json, false);
}

export function BetaAppClipInvocationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BetaAppClipInvocationCreateRequestDataFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(BetaAppClipInvocationLocalizationInlineCreateFromJSON)),
    };
}

export function BetaAppClipInvocationCreateRequestToJSON(value?: BetaAppClipInvocationCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BetaAppClipInvocationCreateRequestDataToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(BetaAppClipInvocationLocalizationInlineCreateToJSON)),
    };
}

