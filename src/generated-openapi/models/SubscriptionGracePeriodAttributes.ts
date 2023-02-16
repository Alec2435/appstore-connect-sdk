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
import type { SubscriptionGracePeriodDuration } from './SubscriptionGracePeriodDuration';
import {
    SubscriptionGracePeriodDurationFromJSON,
    SubscriptionGracePeriodDurationFromJSONTyped,
    SubscriptionGracePeriodDurationToJSON,
} from './SubscriptionGracePeriodDuration';

/**
 * 
 * @export
 * @interface SubscriptionGracePeriodAttributes
 */
export interface SubscriptionGracePeriodAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionGracePeriodAttributes
     */
    optIn?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionGracePeriodAttributes
     */
    sandboxOptIn?: boolean;
    /**
     * 
     * @type {SubscriptionGracePeriodDuration}
     * @memberof SubscriptionGracePeriodAttributes
     */
    duration?: SubscriptionGracePeriodDuration;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGracePeriodAttributes
     */
    renewalType?: SubscriptionGracePeriodAttributesRenewalTypeEnum;
}


/**
 * @export
 */
export const SubscriptionGracePeriodAttributesRenewalTypeEnum = {
    AllRenewals: 'ALL_RENEWALS',
    PaidToPaidOnly: 'PAID_TO_PAID_ONLY'
} as const;
export type SubscriptionGracePeriodAttributesRenewalTypeEnum = typeof SubscriptionGracePeriodAttributesRenewalTypeEnum[keyof typeof SubscriptionGracePeriodAttributesRenewalTypeEnum];


/**
 * Check if a given object implements the SubscriptionGracePeriodAttributes interface.
 */
export function instanceOfSubscriptionGracePeriodAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionGracePeriodAttributesFromJSON(json: any): SubscriptionGracePeriodAttributes {
    return SubscriptionGracePeriodAttributesFromJSONTyped(json, false);
}

export function SubscriptionGracePeriodAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGracePeriodAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'optIn': !exists(json, 'optIn') ? undefined : json['optIn'],
        'sandboxOptIn': !exists(json, 'sandboxOptIn') ? undefined : json['sandboxOptIn'],
        'duration': !exists(json, 'duration') ? undefined : SubscriptionGracePeriodDurationFromJSON(json['duration']),
        'renewalType': !exists(json, 'renewalType') ? undefined : json['renewalType'],
    };
}

export function SubscriptionGracePeriodAttributesToJSON(value?: SubscriptionGracePeriodAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'optIn': value.optIn,
        'sandboxOptIn': value.sandboxOptIn,
        'duration': SubscriptionGracePeriodDurationToJSON(value.duration),
        'renewalType': value.renewalType,
    };
}

