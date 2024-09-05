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
import type { SubscriptionOfferCode } from './SubscriptionOfferCode';
import {
    SubscriptionOfferCodeFromJSON,
    SubscriptionOfferCodeFromJSONTyped,
    SubscriptionOfferCodeToJSON,
} from './SubscriptionOfferCode';
import type { SubscriptionOfferCodeCustomCode } from './SubscriptionOfferCodeCustomCode';
import {
    SubscriptionOfferCodeCustomCodeFromJSON,
    SubscriptionOfferCodeCustomCodeFromJSONTyped,
    SubscriptionOfferCodeCustomCodeToJSON,
} from './SubscriptionOfferCodeCustomCode';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeCustomCodesResponse
 */
export interface SubscriptionOfferCodeCustomCodesResponse {
    /**
     * 
     * @type {Array<SubscriptionOfferCodeCustomCode>}
     * @memberof SubscriptionOfferCodeCustomCodesResponse
     */
    data: Array<SubscriptionOfferCodeCustomCode>;
    /**
     * 
     * @type {Array<SubscriptionOfferCode>}
     * @memberof SubscriptionOfferCodeCustomCodesResponse
     */
    included?: Array<SubscriptionOfferCode>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof SubscriptionOfferCodeCustomCodesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionOfferCodeCustomCodesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeCustomCodesResponse interface.
 */
export function instanceOfSubscriptionOfferCodeCustomCodesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionOfferCodeCustomCodesResponseFromJSON(json: any): SubscriptionOfferCodeCustomCodesResponse {
    return SubscriptionOfferCodeCustomCodesResponseFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeCustomCodesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeCustomCodesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SubscriptionOfferCodeCustomCodeFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(SubscriptionOfferCodeFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function SubscriptionOfferCodeCustomCodesResponseToJSON(value?: SubscriptionOfferCodeCustomCodesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(SubscriptionOfferCodeCustomCodeToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(SubscriptionOfferCodeToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

