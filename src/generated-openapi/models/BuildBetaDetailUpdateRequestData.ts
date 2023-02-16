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
import type { BuildBetaDetailUpdateRequestDataAttributes } from './BuildBetaDetailUpdateRequestDataAttributes';
import {
    BuildBetaDetailUpdateRequestDataAttributesFromJSON,
    BuildBetaDetailUpdateRequestDataAttributesFromJSONTyped,
    BuildBetaDetailUpdateRequestDataAttributesToJSON,
} from './BuildBetaDetailUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface BuildBetaDetailUpdateRequestData
 */
export interface BuildBetaDetailUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BuildBetaDetailUpdateRequestData
     */
    type: BuildBetaDetailUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BuildBetaDetailUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {BuildBetaDetailUpdateRequestDataAttributes}
     * @memberof BuildBetaDetailUpdateRequestData
     */
    attributes?: BuildBetaDetailUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const BuildBetaDetailUpdateRequestDataTypeEnum = {
    BuildBetaDetails: 'buildBetaDetails'
} as const;
export type BuildBetaDetailUpdateRequestDataTypeEnum = typeof BuildBetaDetailUpdateRequestDataTypeEnum[keyof typeof BuildBetaDetailUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the BuildBetaDetailUpdateRequestData interface.
 */
export function instanceOfBuildBetaDetailUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BuildBetaDetailUpdateRequestDataFromJSON(json: any): BuildBetaDetailUpdateRequestData {
    return BuildBetaDetailUpdateRequestDataFromJSONTyped(json, false);
}

export function BuildBetaDetailUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBetaDetailUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BuildBetaDetailUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function BuildBetaDetailUpdateRequestDataToJSON(value?: BuildBetaDetailUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BuildBetaDetailUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

