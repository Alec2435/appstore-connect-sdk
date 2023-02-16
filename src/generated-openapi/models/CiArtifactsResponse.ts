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
import type { CiArtifact } from './CiArtifact';
import {
    CiArtifactFromJSON,
    CiArtifactFromJSONTyped,
    CiArtifactToJSON,
} from './CiArtifact';
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
 * @interface CiArtifactsResponse
 */
export interface CiArtifactsResponse {
    /**
     * 
     * @type {Array<CiArtifact>}
     * @memberof CiArtifactsResponse
     */
    data: Array<CiArtifact>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof CiArtifactsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof CiArtifactsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the CiArtifactsResponse interface.
 */
export function instanceOfCiArtifactsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function CiArtifactsResponseFromJSON(json: any): CiArtifactsResponse {
    return CiArtifactsResponseFromJSONTyped(json, false);
}

export function CiArtifactsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiArtifactsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(CiArtifactFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function CiArtifactsResponseToJSON(value?: CiArtifactsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(CiArtifactToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

