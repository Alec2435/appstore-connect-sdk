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
import type { BetaTesterInvitationCreateRequestData } from './BetaTesterInvitationCreateRequestData';
import {
    BetaTesterInvitationCreateRequestDataFromJSON,
    BetaTesterInvitationCreateRequestDataFromJSONTyped,
    BetaTesterInvitationCreateRequestDataToJSON,
} from './BetaTesterInvitationCreateRequestData';

/**
 * 
 * @export
 * @interface BetaTesterInvitationCreateRequest
 */
export interface BetaTesterInvitationCreateRequest {
    /**
     * 
     * @type {BetaTesterInvitationCreateRequestData}
     * @memberof BetaTesterInvitationCreateRequest
     */
    data: BetaTesterInvitationCreateRequestData;
}

/**
 * Check if a given object implements the BetaTesterInvitationCreateRequest interface.
 */
export function instanceOfBetaTesterInvitationCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BetaTesterInvitationCreateRequestFromJSON(json: any): BetaTesterInvitationCreateRequest {
    return BetaTesterInvitationCreateRequestFromJSONTyped(json, false);
}

export function BetaTesterInvitationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterInvitationCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BetaTesterInvitationCreateRequestDataFromJSON(json['data']),
    };
}

export function BetaTesterInvitationCreateRequestToJSON(value?: BetaTesterInvitationCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BetaTesterInvitationCreateRequestDataToJSON(value.data),
    };
}

