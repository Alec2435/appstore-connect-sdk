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
import type { CiBuildRunCreateRequestDataAttributes } from './CiBuildRunCreateRequestDataAttributes';
import {
    CiBuildRunCreateRequestDataAttributesFromJSON,
    CiBuildRunCreateRequestDataAttributesFromJSONTyped,
    CiBuildRunCreateRequestDataAttributesToJSON,
} from './CiBuildRunCreateRequestDataAttributes';
import type { CiBuildRunCreateRequestDataRelationships } from './CiBuildRunCreateRequestDataRelationships';
import {
    CiBuildRunCreateRequestDataRelationshipsFromJSON,
    CiBuildRunCreateRequestDataRelationshipsFromJSONTyped,
    CiBuildRunCreateRequestDataRelationshipsToJSON,
} from './CiBuildRunCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface CiBuildRunCreateRequestData
 */
export interface CiBuildRunCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof CiBuildRunCreateRequestData
     */
    type: CiBuildRunCreateRequestDataTypeEnum;
    /**
     * 
     * @type {CiBuildRunCreateRequestDataAttributes}
     * @memberof CiBuildRunCreateRequestData
     */
    attributes?: CiBuildRunCreateRequestDataAttributes;
    /**
     * 
     * @type {CiBuildRunCreateRequestDataRelationships}
     * @memberof CiBuildRunCreateRequestData
     */
    relationships?: CiBuildRunCreateRequestDataRelationships;
}


/**
 * @export
 */
export const CiBuildRunCreateRequestDataTypeEnum = {
    CiBuildRuns: 'ciBuildRuns'
} as const;
export type CiBuildRunCreateRequestDataTypeEnum = typeof CiBuildRunCreateRequestDataTypeEnum[keyof typeof CiBuildRunCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the CiBuildRunCreateRequestData interface.
 */
export function instanceOfCiBuildRunCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function CiBuildRunCreateRequestDataFromJSON(json: any): CiBuildRunCreateRequestData {
    return CiBuildRunCreateRequestDataFromJSONTyped(json, false);
}

export function CiBuildRunCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': !exists(json, 'attributes') ? undefined : CiBuildRunCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : CiBuildRunCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function CiBuildRunCreateRequestDataToJSON(value?: CiBuildRunCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': CiBuildRunCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': CiBuildRunCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

