/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BundleIdCapabilityAttributes } from './BundleIdCapabilityAttributes';
import {
    BundleIdCapabilityAttributesFromJSON,
    BundleIdCapabilityAttributesFromJSONTyped,
    BundleIdCapabilityAttributesToJSON,
} from './BundleIdCapabilityAttributes';

/**
 * 
 * @export
 * @interface BundleIdCapabilityUpdateRequestData
 */
export interface BundleIdCapabilityUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BundleIdCapabilityUpdateRequestData
     */
    type: BundleIdCapabilityUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BundleIdCapabilityUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {BundleIdCapabilityAttributes}
     * @memberof BundleIdCapabilityUpdateRequestData
     */
    attributes?: BundleIdCapabilityAttributes;
}


/**
 * @export
 */
export const BundleIdCapabilityUpdateRequestDataTypeEnum = {
    BundleIdCapabilities: 'bundleIdCapabilities'
} as const;
export type BundleIdCapabilityUpdateRequestDataTypeEnum = typeof BundleIdCapabilityUpdateRequestDataTypeEnum[keyof typeof BundleIdCapabilityUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the BundleIdCapabilityUpdateRequestData interface.
 */
export function instanceOfBundleIdCapabilityUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BundleIdCapabilityUpdateRequestDataFromJSON(json: any): BundleIdCapabilityUpdateRequestData {
    return BundleIdCapabilityUpdateRequestDataFromJSONTyped(json, false);
}

export function BundleIdCapabilityUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdCapabilityUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BundleIdCapabilityAttributesFromJSON(json['attributes']),
    };
}

export function BundleIdCapabilityUpdateRequestDataToJSON(value?: BundleIdCapabilityUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BundleIdCapabilityAttributesToJSON(value.attributes),
    };
}

