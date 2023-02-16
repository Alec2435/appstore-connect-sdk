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
/**
 * 
 * @export
 * @interface PagedDocumentLinks
 */
export interface PagedDocumentLinks {
    /**
     * 
     * @type {string}
     * @memberof PagedDocumentLinks
     */
    self: string;
    /**
     * 
     * @type {string}
     * @memberof PagedDocumentLinks
     */
    first?: string;
    /**
     * 
     * @type {string}
     * @memberof PagedDocumentLinks
     */
    next?: string;
}

/**
 * Check if a given object implements the PagedDocumentLinks interface.
 */
export function instanceOfPagedDocumentLinks(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "self" in value;

    return isInstance;
}

export function PagedDocumentLinksFromJSON(json: any): PagedDocumentLinks {
    return PagedDocumentLinksFromJSONTyped(json, false);
}

export function PagedDocumentLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedDocumentLinks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'self': json['self'],
        'first': !exists(json, 'first') ? undefined : json['first'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function PagedDocumentLinksToJSON(value?: PagedDocumentLinks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'self': value.self,
        'first': value.first,
        'next': value.next,
    };
}

