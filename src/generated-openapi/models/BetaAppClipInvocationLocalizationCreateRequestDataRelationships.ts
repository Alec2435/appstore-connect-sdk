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
import type { BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation } from './BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation';
import {
    BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationFromJSON,
    BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationFromJSONTyped,
    BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationToJSON,
} from './BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationLocalizationCreateRequestDataRelationships
 */
export interface BetaAppClipInvocationLocalizationCreateRequestDataRelationships {
    /**
     * 
     * @type {BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation}
     * @memberof BetaAppClipInvocationLocalizationCreateRequestDataRelationships
     */
    betaAppClipInvocation: BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation;
}

/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationCreateRequestDataRelationships interface.
 */
export function instanceOfBetaAppClipInvocationLocalizationCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "betaAppClipInvocation" in value;

    return isInstance;
}

export function BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsFromJSON(json: any): BetaAppClipInvocationLocalizationCreateRequestDataRelationships {
    return BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationLocalizationCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'betaAppClipInvocation': BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationFromJSON(json['betaAppClipInvocation']),
    };
}

export function BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsToJSON(value?: BetaAppClipInvocationLocalizationCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'betaAppClipInvocation': BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationToJSON(value.betaAppClipInvocation),
    };
}

