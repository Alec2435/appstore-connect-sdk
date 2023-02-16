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
import type { BetaTesterInvitationCreateRequestDataRelationships } from './BetaTesterInvitationCreateRequestDataRelationships';
import {
    BetaTesterInvitationCreateRequestDataRelationshipsFromJSON,
    BetaTesterInvitationCreateRequestDataRelationshipsFromJSONTyped,
    BetaTesterInvitationCreateRequestDataRelationshipsToJSON,
} from './BetaTesterInvitationCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface BetaTesterInvitationCreateRequestData
 */
export interface BetaTesterInvitationCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BetaTesterInvitationCreateRequestData
     */
    type: BetaTesterInvitationCreateRequestDataTypeEnum;
    /**
     * 
     * @type {BetaTesterInvitationCreateRequestDataRelationships}
     * @memberof BetaTesterInvitationCreateRequestData
     */
    relationships: BetaTesterInvitationCreateRequestDataRelationships;
}


/**
 * @export
 */
export const BetaTesterInvitationCreateRequestDataTypeEnum = {
    BetaTesterInvitations: 'betaTesterInvitations'
} as const;
export type BetaTesterInvitationCreateRequestDataTypeEnum = typeof BetaTesterInvitationCreateRequestDataTypeEnum[keyof typeof BetaTesterInvitationCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the BetaTesterInvitationCreateRequestData interface.
 */
export function instanceOfBetaTesterInvitationCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function BetaTesterInvitationCreateRequestDataFromJSON(json: any): BetaTesterInvitationCreateRequestData {
    return BetaTesterInvitationCreateRequestDataFromJSONTyped(json, false);
}

export function BetaTesterInvitationCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterInvitationCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relationships': BetaTesterInvitationCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function BetaTesterInvitationCreateRequestDataToJSON(value?: BetaTesterInvitationCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'relationships': BetaTesterInvitationCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

