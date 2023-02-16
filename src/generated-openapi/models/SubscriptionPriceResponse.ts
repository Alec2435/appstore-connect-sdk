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
import type { SubscriptionOfferCodePricesResponseIncludedInner } from './SubscriptionOfferCodePricesResponseIncludedInner';
import {
    SubscriptionOfferCodePricesResponseIncludedInnerFromJSON,
    SubscriptionOfferCodePricesResponseIncludedInnerFromJSONTyped,
    SubscriptionOfferCodePricesResponseIncludedInnerToJSON,
} from './SubscriptionOfferCodePricesResponseIncludedInner';
import type { SubscriptionPrice } from './SubscriptionPrice';
import {
    SubscriptionPriceFromJSON,
    SubscriptionPriceFromJSONTyped,
    SubscriptionPriceToJSON,
} from './SubscriptionPrice';

/**
 * 
 * @export
 * @interface SubscriptionPriceResponse
 */
export interface SubscriptionPriceResponse {
    /**
     * 
     * @type {SubscriptionPrice}
     * @memberof SubscriptionPriceResponse
     */
    data: SubscriptionPrice;
    /**
     * 
     * @type {Array<SubscriptionOfferCodePricesResponseIncludedInner>}
     * @memberof SubscriptionPriceResponse
     */
    included?: Array<SubscriptionOfferCodePricesResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof SubscriptionPriceResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the SubscriptionPriceResponse interface.
 */
export function instanceOfSubscriptionPriceResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionPriceResponseFromJSON(json: any): SubscriptionPriceResponse {
    return SubscriptionPriceResponseFromJSONTyped(json, false);
}

export function SubscriptionPriceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPriceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionPriceFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(SubscriptionOfferCodePricesResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function SubscriptionPriceResponseToJSON(value?: SubscriptionPriceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionPriceToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(SubscriptionOfferCodePricesResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

