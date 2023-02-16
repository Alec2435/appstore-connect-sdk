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
import type { BundleIdCapability } from './BundleIdCapability';
import {
    BundleIdCapabilityFromJSON,
    BundleIdCapabilityFromJSONTyped,
    BundleIdCapabilityToJSON,
} from './BundleIdCapability';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface BundleIdCapabilityResponse
 */
export interface BundleIdCapabilityResponse {
    /**
     * 
     * @type {BundleIdCapability}
     * @memberof BundleIdCapabilityResponse
     */
    data: BundleIdCapability;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof BundleIdCapabilityResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the BundleIdCapabilityResponse interface.
 */
export function instanceOfBundleIdCapabilityResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BundleIdCapabilityResponseFromJSON(json: any): BundleIdCapabilityResponse {
    return BundleIdCapabilityResponseFromJSONTyped(json, false);
}

export function BundleIdCapabilityResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdCapabilityResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BundleIdCapabilityFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function BundleIdCapabilityResponseToJSON(value?: BundleIdCapabilityResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BundleIdCapabilityToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

