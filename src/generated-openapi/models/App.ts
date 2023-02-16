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
import type { AppAttributes } from './AppAttributes';
import {
    AppAttributesFromJSON,
    AppAttributesFromJSONTyped,
    AppAttributesToJSON,
} from './AppAttributes';
import type { AppRelationships } from './AppRelationships';
import {
    AppRelationshipsFromJSON,
    AppRelationshipsFromJSONTyped,
    AppRelationshipsToJSON,
} from './AppRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface App
 */
export interface App {
    /**
     * 
     * @type {string}
     * @memberof App
     */
    type: AppTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof App
     */
    id: string;
    /**
     * 
     * @type {AppAttributes}
     * @memberof App
     */
    attributes?: AppAttributes;
    /**
     * 
     * @type {AppRelationships}
     * @memberof App
     */
    relationships?: AppRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof App
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const AppTypeEnum = {
    Apps: 'apps'
} as const;
export type AppTypeEnum = typeof AppTypeEnum[keyof typeof AppTypeEnum];


/**
 * Check if a given object implements the App interface.
 */
export function instanceOfApp(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppFromJSON(json: any): App {
    return AppFromJSONTyped(json, false);
}

export function AppFromJSONTyped(json: any, ignoreDiscriminator: boolean): App {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function AppToJSON(value?: App | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppAttributesToJSON(value.attributes),
        'relationships': AppRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

