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
    SubscriptionPricePoint,
    instanceOfSubscriptionPricePoint,
    SubscriptionPricePointFromJSON,
    SubscriptionPricePointFromJSONTyped,
    SubscriptionPricePointToJSON,
} from './SubscriptionPricePoint';
import {
    Territory,
    instanceOfTerritory,
    TerritoryFromJSON,
    TerritoryFromJSONTyped,
    TerritoryToJSON,
} from './Territory';

/**
 * @type SubscriptionIntroductoryOffersResponseIncludedInner
 * 
 * @export
 */
export type SubscriptionIntroductoryOffersResponseIncludedInner = Subscription | SubscriptionPricePoint | Territory;

export function SubscriptionIntroductoryOffersResponseIncludedInnerFromJSON(json: any): SubscriptionIntroductoryOffersResponseIncludedInner {
    return SubscriptionIntroductoryOffersResponseIncludedInnerFromJSONTyped(json, false);
}

export function SubscriptionIntroductoryOffersResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionIntroductoryOffersResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...SubscriptionFromJSONTyped(json, true), ...SubscriptionPricePointFromJSONTyped(json, true), ...TerritoryFromJSONTyped(json, true) };
}

export function SubscriptionIntroductoryOffersResponseIncludedInnerToJSON(value?: SubscriptionIntroductoryOffersResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfSubscription(value)) {
        return SubscriptionToJSON(value as Subscription);
    }
    if (instanceOfSubscriptionPricePoint(value)) {
        return SubscriptionPricePointToJSON(value as SubscriptionPricePoint);
    }
    if (instanceOfTerritory(value)) {
        return TerritoryToJSON(value as Territory);
    }

    return {};
}

