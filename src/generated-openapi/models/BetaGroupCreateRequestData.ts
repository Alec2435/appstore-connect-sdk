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
import type { BetaGroupCreateRequestDataAttributes } from './BetaGroupCreateRequestDataAttributes';
import {
    BetaGroupCreateRequestDataAttributesFromJSON,
    BetaGroupCreateRequestDataAttributesFromJSONTyped,
    BetaGroupCreateRequestDataAttributesToJSON,
} from './BetaGroupCreateRequestDataAttributes';
import type { BetaGroupCreateRequestDataRelationships } from './BetaGroupCreateRequestDataRelationships';
import {
    BetaGroupCreateRequestDataRelationshipsFromJSON,
    BetaGroupCreateRequestDataRelationshipsFromJSONTyped,
    BetaGroupCreateRequestDataRelationshipsToJSON,
} from './BetaGroupCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface BetaGroupCreateRequestData
 */
export interface BetaGroupCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BetaGroupCreateRequestData
     */
    type: BetaGroupCreateRequestDataTypeEnum;
    /**
     * 
     * @type {BetaGroupCreateRequestDataAttributes}
     * @memberof BetaGroupCreateRequestData
     */
    attributes: BetaGroupCreateRequestDataAttributes;
    /**
     * 
     * @type {BetaGroupCreateRequestDataRelationships}
     * @memberof BetaGroupCreateRequestData
     */
    relationships: BetaGroupCreateRequestDataRelationships;
}


/**
 * @export
 */
export const BetaGroupCreateRequestDataTypeEnum = {
    BetaGroups: 'betaGroups'
} as const;
export type BetaGroupCreateRequestDataTypeEnum = typeof BetaGroupCreateRequestDataTypeEnum[keyof typeof BetaGroupCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the BetaGroupCreateRequestData interface.
 */
export function instanceOfBetaGroupCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function BetaGroupCreateRequestDataFromJSON(json: any): BetaGroupCreateRequestData {
    return BetaGroupCreateRequestDataFromJSONTyped(json, false);
}

export function BetaGroupCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': BetaGroupCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': BetaGroupCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function BetaGroupCreateRequestDataToJSON(value?: BetaGroupCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': BetaGroupCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': BetaGroupCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

