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
import type { SubscriptionIntroductoryOffer } from './SubscriptionIntroductoryOffer';
import {
    SubscriptionIntroductoryOfferFromJSON,
    SubscriptionIntroductoryOfferFromJSONTyped,
    SubscriptionIntroductoryOfferToJSON,
} from './SubscriptionIntroductoryOffer';
import type { SubscriptionIntroductoryOffersResponseIncludedInner } from './SubscriptionIntroductoryOffersResponseIncludedInner';
import {
    SubscriptionIntroductoryOffersResponseIncludedInnerFromJSON,
    SubscriptionIntroductoryOffersResponseIncludedInnerFromJSONTyped,
    SubscriptionIntroductoryOffersResponseIncludedInnerToJSON,
} from './SubscriptionIntroductoryOffersResponseIncludedInner';

/**
 * 
 * @export
 * @interface SubscriptionIntroductoryOfferResponse
 */
export interface SubscriptionIntroductoryOfferResponse {
    /**
     * 
     * @type {SubscriptionIntroductoryOffer}
     * @memberof SubscriptionIntroductoryOfferResponse
     */
    data: SubscriptionIntroductoryOffer;
    /**
     * 
     * @type {Array<SubscriptionIntroductoryOffersResponseIncludedInner>}
     * @memberof SubscriptionIntroductoryOfferResponse
     */
    included?: Array<SubscriptionIntroductoryOffersResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof SubscriptionIntroductoryOfferResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the SubscriptionIntroductoryOfferResponse interface.
 */
export function instanceOfSubscriptionIntroductoryOfferResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionIntroductoryOfferResponseFromJSON(json: any): SubscriptionIntroductoryOfferResponse {
    return SubscriptionIntroductoryOfferResponseFromJSONTyped(json, false);
}

export function SubscriptionIntroductoryOfferResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionIntroductoryOfferResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionIntroductoryOfferFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(SubscriptionIntroductoryOffersResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function SubscriptionIntroductoryOfferResponseToJSON(value?: SubscriptionIntroductoryOfferResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionIntroductoryOfferToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(SubscriptionIntroductoryOffersResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

