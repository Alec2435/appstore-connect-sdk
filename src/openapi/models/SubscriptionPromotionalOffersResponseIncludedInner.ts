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

import {
    Subscription,
    instanceOfSubscription,
    SubscriptionFromJSON,
    SubscriptionFromJSONTyped,
    SubscriptionToJSON,
} from './Subscription';
import {
    SubscriptionPromotionalOfferPrice,
    instanceOfSubscriptionPromotionalOfferPrice,
    SubscriptionPromotionalOfferPriceFromJSON,
    SubscriptionPromotionalOfferPriceFromJSONTyped,
    SubscriptionPromotionalOfferPriceToJSON,
} from './SubscriptionPromotionalOfferPrice';

/**
 * @type SubscriptionPromotionalOffersResponseIncludedInner
 * 
 * @export
 */
export type SubscriptionPromotionalOffersResponseIncludedInner = Subscription | SubscriptionPromotionalOfferPrice;

export function SubscriptionPromotionalOffersResponseIncludedInnerFromJSON(json: any): SubscriptionPromotionalOffersResponseIncludedInner {
    return SubscriptionPromotionalOffersResponseIncludedInnerFromJSONTyped(json, false);
}

export function SubscriptionPromotionalOffersResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOffersResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...SubscriptionFromJSONTyped(json, true), ...SubscriptionPromotionalOfferPriceFromJSONTyped(json, true) };
}

export function SubscriptionPromotionalOffersResponseIncludedInnerToJSON(value?: SubscriptionPromotionalOffersResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfSubscription(value)) {
        return SubscriptionToJSON(value as Subscription);
    }
    if (instanceOfSubscriptionPromotionalOfferPrice(value)) {
        return SubscriptionPromotionalOfferPriceToJSON(value as SubscriptionPromotionalOfferPrice);
    }

    return {};
}

