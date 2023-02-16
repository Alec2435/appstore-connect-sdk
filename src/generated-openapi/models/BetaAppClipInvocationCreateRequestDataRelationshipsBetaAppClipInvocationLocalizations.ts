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
import type { BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner } from './BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner';
import {
    BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerFromJSON,
    BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerFromJSONTyped,
    BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerToJSON,
} from './BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations
 */
export interface BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations {
    /**
     * 
     * @type {Array<BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner>}
     * @memberof BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations
     */
    data: Array<BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner>;
}

/**
 * Check if a given object implements the BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations interface.
 */
export function instanceOfBetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizationsFromJSON(json: any): BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations {
    return BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizationsFromJSONTyped(json, false);
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerFromJSON)),
    };
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizationsToJSON(value?: BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerToJSON)),
    };
}

