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
import type { AppClip } from './AppClip';
import {
    AppClipFromJSON,
    AppClipFromJSONTyped,
    AppClipToJSON,
} from './AppClip';
import type { AppClipsResponseIncludedInner } from './AppClipsResponseIncludedInner';
import {
    AppClipsResponseIncludedInnerFromJSON,
    AppClipsResponseIncludedInnerFromJSONTyped,
    AppClipsResponseIncludedInnerToJSON,
} from './AppClipsResponseIncludedInner';
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
 * @interface AppClipsResponse
 */
export interface AppClipsResponse {
    /**
     * 
     * @type {Array<AppClip>}
     * @memberof AppClipsResponse
     */
    data: Array<AppClip>;
    /**
     * 
     * @type {Array<AppClipsResponseIncludedInner>}
     * @memberof AppClipsResponse
     */
    included?: Array<AppClipsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppClipsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppClipsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppClipsResponse interface.
 */
export function instanceOfAppClipsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppClipsResponseFromJSON(json: any): AppClipsResponse {
    return AppClipsResponseFromJSONTyped(json, false);
}

export function AppClipsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppClipFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppClipsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppClipsResponseToJSON(value?: AppClipsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppClipToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppClipsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

