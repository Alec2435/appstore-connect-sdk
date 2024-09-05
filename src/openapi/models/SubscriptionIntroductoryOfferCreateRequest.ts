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
import type { SubscriptionIntroductoryOfferCreateRequestData } from './SubscriptionIntroductoryOfferCreateRequestData';
import {
    SubscriptionIntroductoryOfferCreateRequestDataFromJSON,
    SubscriptionIntroductoryOfferCreateRequestDataFromJSONTyped,
    SubscriptionIntroductoryOfferCreateRequestDataToJSON,
} from './SubscriptionIntroductoryOfferCreateRequestData';
import type { SubscriptionPricePointInlineCreate } from './SubscriptionPricePointInlineCreate';
import {
    SubscriptionPricePointInlineCreateFromJSON,
    SubscriptionPricePointInlineCreateFromJSONTyped,
    SubscriptionPricePointInlineCreateToJSON,
} from './SubscriptionPricePointInlineCreate';

/**
 * 
 * @export
 * @interface SubscriptionIntroductoryOfferCreateRequest
 */
export interface SubscriptionIntroductoryOfferCreateRequest {
    /**
     * 
     * @type {SubscriptionIntroductoryOfferCreateRequestData}
     * @memberof SubscriptionIntroductoryOfferCreateRequest
     */
    data: SubscriptionIntroductoryOfferCreateRequestData;
    /**
     * 
     * @type {Array<SubscriptionPricePointInlineCreate>}
     * @memberof SubscriptionIntroductoryOfferCreateRequest
     */
    included?: Array<SubscriptionPricePointInlineCreate>;
}

/**
 * Check if a given object implements the SubscriptionIntroductoryOfferCreateRequest interface.
 */
export function instanceOfSubscriptionIntroductoryOfferCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SubscriptionIntroductoryOfferCreateRequestFromJSON(json: any): SubscriptionIntroductoryOfferCreateRequest {
    return SubscriptionIntroductoryOfferCreateRequestFromJSONTyped(json, false);
}

export function SubscriptionIntroductoryOfferCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionIntroductoryOfferCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionIntroductoryOfferCreateRequestDataFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(SubscriptionPricePointInlineCreateFromJSON)),
    };
}

export function SubscriptionIntroductoryOfferCreateRequestToJSON(value?: SubscriptionIntroductoryOfferCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionIntroductoryOfferCreateRequestDataToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(SubscriptionPricePointInlineCreateToJSON)),
    };
}

