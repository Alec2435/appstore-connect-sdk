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
import type { CiProduct } from './CiProduct';
import {
    CiProductFromJSON,
    CiProductFromJSONTyped,
    CiProductToJSON,
} from './CiProduct';
import type { CiProductsResponseIncludedInner } from './CiProductsResponseIncludedInner';
import {
    CiProductsResponseIncludedInnerFromJSON,
    CiProductsResponseIncludedInnerFromJSONTyped,
    CiProductsResponseIncludedInnerToJSON,
} from './CiProductsResponseIncludedInner';
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
 * @interface CiProductsResponse
 */
export interface CiProductsResponse {
    /**
     * 
     * @type {Array<CiProduct>}
     * @memberof CiProductsResponse
     */
    data: Array<CiProduct>;
    /**
     * 
     * @type {Array<CiProductsResponseIncludedInner>}
     * @memberof CiProductsResponse
     */
    included?: Array<CiProductsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof CiProductsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof CiProductsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the CiProductsResponse interface.
 */
export function instanceOfCiProductsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function CiProductsResponseFromJSON(json: any): CiProductsResponse {
    return CiProductsResponseFromJSONTyped(json, false);
}

export function CiProductsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiProductsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(CiProductFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(CiProductsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function CiProductsResponseToJSON(value?: CiProductsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(CiProductToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(CiProductsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

