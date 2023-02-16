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
import type { BundleId } from './BundleId';
import {
    BundleIdFromJSON,
    BundleIdFromJSONTyped,
    BundleIdToJSON,
} from './BundleId';
import type { BundleIdsResponseIncludedInner } from './BundleIdsResponseIncludedInner';
import {
    BundleIdsResponseIncludedInnerFromJSON,
    BundleIdsResponseIncludedInnerFromJSONTyped,
    BundleIdsResponseIncludedInnerToJSON,
} from './BundleIdsResponseIncludedInner';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface BundleIdsResponse
 */
export interface BundleIdsResponse {
    /**
     * 
     * @type {Array<BundleId>}
     * @memberof BundleIdsResponse
     */
    data: Array<BundleId>;
    /**
     * 
     * @type {Array<BundleIdsResponseIncludedInner>}
     * @memberof BundleIdsResponse
     */
    included?: Array<BundleIdsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BundleIdsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BundleIdsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BundleIdsResponse interface.
 */
export function instanceOfBundleIdsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BundleIdsResponseFromJSON(json: any): BundleIdsResponse {
    return BundleIdsResponseFromJSONTyped(json, false);
}

export function BundleIdsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BundleIdFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(BundleIdsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BundleIdsResponseToJSON(value?: BundleIdsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(BundleIdToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(BundleIdsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

