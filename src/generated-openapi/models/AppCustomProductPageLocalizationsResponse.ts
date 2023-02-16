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
import type { AppCustomProductPageLocalization } from './AppCustomProductPageLocalization';
import {
    AppCustomProductPageLocalizationFromJSON,
    AppCustomProductPageLocalizationFromJSONTyped,
    AppCustomProductPageLocalizationToJSON,
} from './AppCustomProductPageLocalization';
import type { AppCustomProductPageLocalizationsResponseIncludedInner } from './AppCustomProductPageLocalizationsResponseIncludedInner';
import {
    AppCustomProductPageLocalizationsResponseIncludedInnerFromJSON,
    AppCustomProductPageLocalizationsResponseIncludedInnerFromJSONTyped,
    AppCustomProductPageLocalizationsResponseIncludedInnerToJSON,
} from './AppCustomProductPageLocalizationsResponseIncludedInner';
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
 * @interface AppCustomProductPageLocalizationsResponse
 */
export interface AppCustomProductPageLocalizationsResponse {
    /**
     * 
     * @type {Array<AppCustomProductPageLocalization>}
     * @memberof AppCustomProductPageLocalizationsResponse
     */
    data: Array<AppCustomProductPageLocalization>;
    /**
     * 
     * @type {Array<AppCustomProductPageLocalizationsResponseIncludedInner>}
     * @memberof AppCustomProductPageLocalizationsResponse
     */
    included?: Array<AppCustomProductPageLocalizationsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppCustomProductPageLocalizationsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppCustomProductPageLocalizationsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppCustomProductPageLocalizationsResponse interface.
 */
export function instanceOfAppCustomProductPageLocalizationsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppCustomProductPageLocalizationsResponseFromJSON(json: any): AppCustomProductPageLocalizationsResponse {
    return AppCustomProductPageLocalizationsResponseFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppCustomProductPageLocalizationFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppCustomProductPageLocalizationsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppCustomProductPageLocalizationsResponseToJSON(value?: AppCustomProductPageLocalizationsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppCustomProductPageLocalizationToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppCustomProductPageLocalizationsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

