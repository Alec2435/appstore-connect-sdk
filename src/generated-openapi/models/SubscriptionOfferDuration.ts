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


/**
 * 
 * @export
 */
export const SubscriptionOfferDuration = {
    OneDay: 'ONE_DAY',
    ThreeDays: 'THREE_DAYS',
    OneWeek: 'ONE_WEEK',
    TwoWeeks: 'TWO_WEEKS',
    OneMonth: 'ONE_MONTH',
    TwoMonths: 'TWO_MONTHS',
    ThreeMonths: 'THREE_MONTHS',
    SixMonths: 'SIX_MONTHS',
    OneYear: 'ONE_YEAR'
} as const;
export type SubscriptionOfferDuration = typeof SubscriptionOfferDuration[keyof typeof SubscriptionOfferDuration];


export function SubscriptionOfferDurationFromJSON(json: any): SubscriptionOfferDuration {
    return SubscriptionOfferDurationFromJSONTyped(json, false);
}

export function SubscriptionOfferDurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferDuration {
    return json as SubscriptionOfferDuration;
}

export function SubscriptionOfferDurationToJSON(value?: SubscriptionOfferDuration | null): any {
    return value as any;
}

