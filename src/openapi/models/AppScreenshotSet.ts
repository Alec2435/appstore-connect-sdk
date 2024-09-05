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
import type { AppScreenshotSetAttributes } from './AppScreenshotSetAttributes';
import {
    AppScreenshotSetAttributesFromJSON,
    AppScreenshotSetAttributesFromJSONTyped,
    AppScreenshotSetAttributesToJSON,
} from './AppScreenshotSetAttributes';
import type { AppScreenshotSetRelationships } from './AppScreenshotSetRelationships';
import {
    AppScreenshotSetRelationshipsFromJSON,
    AppScreenshotSetRelationshipsFromJSONTyped,
    AppScreenshotSetRelationshipsToJSON,
} from './AppScreenshotSetRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppScreenshotSet
 */
export interface AppScreenshotSet {
    /**
     * 
     * @type {string}
     * @memberof AppScreenshotSet
     */
    type: AppScreenshotSetTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppScreenshotSet
     */
    id: string;
    /**
     * 
     * @type {AppScreenshotSetAttributes}
     * @memberof AppScreenshotSet
     */
    attributes?: AppScreenshotSetAttributes;
    /**
     * 
     * @type {AppScreenshotSetRelationships}
     * @memberof AppScreenshotSet
     */
    relationships?: AppScreenshotSetRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppScreenshotSet
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppScreenshotSetTypeEnum = {
    AppScreenshotSets: 'appScreenshotSets'
} as const;
export type AppScreenshotSetTypeEnum = typeof AppScreenshotSetTypeEnum[keyof typeof AppScreenshotSetTypeEnum];


/**
 * Check if a given object implements the AppScreenshotSet interface.
 */
export function instanceOfAppScreenshotSet(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppScreenshotSetFromJSON(json: any): AppScreenshotSet {
    return AppScreenshotSetFromJSONTyped(json, false);
}

export function AppScreenshotSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppScreenshotSetAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppScreenshotSetRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppScreenshotSetToJSON(value?: AppScreenshotSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppScreenshotSetAttributesToJSON(value.attributes),
        'relationships': AppScreenshotSetRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

