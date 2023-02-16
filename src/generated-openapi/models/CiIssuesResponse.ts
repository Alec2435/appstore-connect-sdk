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
import type { CiIssue } from './CiIssue';
import {
    CiIssueFromJSON,
    CiIssueFromJSONTyped,
    CiIssueToJSON,
} from './CiIssue';
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
 * @interface CiIssuesResponse
 */
export interface CiIssuesResponse {
    /**
     * 
     * @type {Array<CiIssue>}
     * @memberof CiIssuesResponse
     */
    data: Array<CiIssue>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof CiIssuesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof CiIssuesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the CiIssuesResponse interface.
 */
export function instanceOfCiIssuesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function CiIssuesResponseFromJSON(json: any): CiIssuesResponse {
    return CiIssuesResponseFromJSONTyped(json, false);
}

export function CiIssuesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiIssuesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(CiIssueFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function CiIssuesResponseToJSON(value?: CiIssuesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(CiIssueToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

