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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { Territory } from './Territory';
import {
    TerritoryFromJSON,
    TerritoryFromJSONTyped,
    TerritoryToJSON,
} from './Territory';

/**
 * 
 * @export
 * @interface TerritoryResponse
 */
export interface TerritoryResponse {
    /**
     * 
     * @type {Territory}
     * @memberof TerritoryResponse
     */
    data: Territory;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof TerritoryResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the TerritoryResponse interface.
 */
export function instanceOfTerritoryResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function TerritoryResponseFromJSON(json: any): TerritoryResponse {
    return TerritoryResponseFromJSONTyped(json, false);
}

export function TerritoryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerritoryResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': TerritoryFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function TerritoryResponseToJSON(value?: TerritoryResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': TerritoryToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

