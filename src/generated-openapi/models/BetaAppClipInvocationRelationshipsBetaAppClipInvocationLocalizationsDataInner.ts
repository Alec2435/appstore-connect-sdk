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
/**
 * 
 * @export
 * @interface BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner
 */
export interface BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner {
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner
     */
    type: BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerTypeEnum = {
    BetaAppClipInvocationLocalizations: 'betaAppClipInvocationLocalizations'
} as const;
export type BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerTypeEnum = typeof BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerTypeEnum[keyof typeof BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerTypeEnum];


/**
 * Check if a given object implements the BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner interface.
 */
export function instanceOfBetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerFromJSON(json: any): BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner {
    return BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerFromJSONTyped(json, false);
}

export function BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerToJSON(value?: BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

