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
import type { BetaGroupRelationshipsBetaTestersDataInner } from './BetaGroupRelationshipsBetaTestersDataInner';
import {
    BetaGroupRelationshipsBetaTestersDataInnerFromJSON,
    BetaGroupRelationshipsBetaTestersDataInnerFromJSONTyped,
    BetaGroupRelationshipsBetaTestersDataInnerToJSON,
} from './BetaGroupRelationshipsBetaTestersDataInner';

/**
 * 
 * @export
 * @interface BetaGroupBetaTestersLinkagesRequest
 */
export interface BetaGroupBetaTestersLinkagesRequest {
    /**
     * 
     * @type {Array<BetaGroupRelationshipsBetaTestersDataInner>}
     * @memberof BetaGroupBetaTestersLinkagesRequest
     */
    data: Array<BetaGroupRelationshipsBetaTestersDataInner>;
}

/**
 * Check if a given object implements the BetaGroupBetaTestersLinkagesRequest interface.
 */
export function instanceOfBetaGroupBetaTestersLinkagesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BetaGroupBetaTestersLinkagesRequestFromJSON(json: any): BetaGroupBetaTestersLinkagesRequest {
    return BetaGroupBetaTestersLinkagesRequestFromJSONTyped(json, false);
}

export function BetaGroupBetaTestersLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupBetaTestersLinkagesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BetaGroupRelationshipsBetaTestersDataInnerFromJSON)),
    };
}

export function BetaGroupBetaTestersLinkagesRequestToJSON(value?: BetaGroupBetaTestersLinkagesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(BetaGroupRelationshipsBetaTestersDataInnerToJSON)),
    };
}

