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
import type { InAppPurchaseLocalization } from './InAppPurchaseLocalization';
import {
    InAppPurchaseLocalizationFromJSON,
    InAppPurchaseLocalizationFromJSONTyped,
    InAppPurchaseLocalizationToJSON,
} from './InAppPurchaseLocalization';
import type { InAppPurchaseV2 } from './InAppPurchaseV2';
import {
    InAppPurchaseV2FromJSON,
    InAppPurchaseV2FromJSONTyped,
    InAppPurchaseV2ToJSON,
} from './InAppPurchaseV2';
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
 * @interface InAppPurchaseLocalizationsResponse
 */
export interface InAppPurchaseLocalizationsResponse {
    /**
     * 
     * @type {Array<InAppPurchaseLocalization>}
     * @memberof InAppPurchaseLocalizationsResponse
     */
    data: Array<InAppPurchaseLocalization>;
    /**
     * 
     * @type {Array<InAppPurchaseV2>}
     * @memberof InAppPurchaseLocalizationsResponse
     */
    included?: Array<InAppPurchaseV2>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof InAppPurchaseLocalizationsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof InAppPurchaseLocalizationsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the InAppPurchaseLocalizationsResponse interface.
 */
export function instanceOfInAppPurchaseLocalizationsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function InAppPurchaseLocalizationsResponseFromJSON(json: any): InAppPurchaseLocalizationsResponse {
    return InAppPurchaseLocalizationsResponseFromJSONTyped(json, false);
}

export function InAppPurchaseLocalizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseLocalizationsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(InAppPurchaseLocalizationFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(InAppPurchaseV2FromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function InAppPurchaseLocalizationsResponseToJSON(value?: InAppPurchaseLocalizationsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(InAppPurchaseLocalizationToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(InAppPurchaseV2ToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

