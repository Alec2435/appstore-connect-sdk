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
 * @interface BetaGroupCreateRequestDataRelationshipsBetaTesters
 */
export interface BetaGroupCreateRequestDataRelationshipsBetaTesters {
    /**
     * 
     * @type {Array<BetaGroupRelationshipsBetaTestersDataInner>}
     * @memberof BetaGroupCreateRequestDataRelationshipsBetaTesters
     */
    data?: Array<BetaGroupRelationshipsBetaTestersDataInner>;
}

/**
 * Check if a given object implements the BetaGroupCreateRequestDataRelationshipsBetaTesters interface.
 */
export function instanceOfBetaGroupCreateRequestDataRelationshipsBetaTesters(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BetaGroupCreateRequestDataRelationshipsBetaTestersFromJSON(json: any): BetaGroupCreateRequestDataRelationshipsBetaTesters {
    return BetaGroupCreateRequestDataRelationshipsBetaTestersFromJSONTyped(json, false);
}

export function BetaGroupCreateRequestDataRelationshipsBetaTestersFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupCreateRequestDataRelationshipsBetaTesters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(BetaGroupRelationshipsBetaTestersDataInnerFromJSON)),
    };
}

export function BetaGroupCreateRequestDataRelationshipsBetaTestersToJSON(value?: BetaGroupCreateRequestDataRelationshipsBetaTesters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(BetaGroupRelationshipsBetaTestersDataInnerToJSON)),
    };
}

