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
import type { BundleIdCreateRequestDataAttributes } from './BundleIdCreateRequestDataAttributes';
import {
    BundleIdCreateRequestDataAttributesFromJSON,
    BundleIdCreateRequestDataAttributesFromJSONTyped,
    BundleIdCreateRequestDataAttributesToJSON,
} from './BundleIdCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface BundleIdCreateRequestData
 */
export interface BundleIdCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BundleIdCreateRequestData
     */
    type: BundleIdCreateRequestDataTypeEnum;
    /**
     * 
     * @type {BundleIdCreateRequestDataAttributes}
     * @memberof BundleIdCreateRequestData
     */
    attributes: BundleIdCreateRequestDataAttributes;
}


/**
 * @export
 */
export const BundleIdCreateRequestDataTypeEnum = {
    BundleIds: 'bundleIds'
} as const;
export type BundleIdCreateRequestDataTypeEnum = typeof BundleIdCreateRequestDataTypeEnum[keyof typeof BundleIdCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the BundleIdCreateRequestData interface.
 */
export function instanceOfBundleIdCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function BundleIdCreateRequestDataFromJSON(json: any): BundleIdCreateRequestData {
    return BundleIdCreateRequestDataFromJSONTyped(json, false);
}

export function BundleIdCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': BundleIdCreateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function BundleIdCreateRequestDataToJSON(value?: BundleIdCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': BundleIdCreateRequestDataAttributesToJSON(value.attributes),
    };
}

