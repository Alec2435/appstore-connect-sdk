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
import type { Platform } from './Platform';
import {
    PlatformFromJSON,
    PlatformFromJSONTyped,
    PlatformToJSON,
} from './Platform';

/**
 * 
 * @export
 * @interface PrereleaseVersionAttributes
 */
export interface PrereleaseVersionAttributes {
    /**
     * 
     * @type {string}
     * @memberof PrereleaseVersionAttributes
     */
    version?: string;
    /**
     * 
     * @type {Platform}
     * @memberof PrereleaseVersionAttributes
     */
    platform?: Platform;
}

/**
 * Check if a given object implements the PrereleaseVersionAttributes interface.
 */
export function instanceOfPrereleaseVersionAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PrereleaseVersionAttributesFromJSON(json: any): PrereleaseVersionAttributes {
    return PrereleaseVersionAttributesFromJSONTyped(json, false);
}

export function PrereleaseVersionAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrereleaseVersionAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'platform': !exists(json, 'platform') ? undefined : PlatformFromJSON(json['platform']),
    };
}

export function PrereleaseVersionAttributesToJSON(value?: PrereleaseVersionAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'platform': PlatformToJSON(value.platform),
    };
}

