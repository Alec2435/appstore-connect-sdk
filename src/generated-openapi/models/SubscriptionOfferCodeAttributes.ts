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
import type { SubscriptionCustomerEligibility } from './SubscriptionCustomerEligibility';
import {
    SubscriptionCustomerEligibilityFromJSON,
    SubscriptionCustomerEligibilityFromJSONTyped,
    SubscriptionCustomerEligibilityToJSON,
} from './SubscriptionCustomerEligibility';
import type { SubscriptionOfferDuration } from './SubscriptionOfferDuration';
import {
    SubscriptionOfferDurationFromJSON,
    SubscriptionOfferDurationFromJSONTyped,
    SubscriptionOfferDurationToJSON,
} from './SubscriptionOfferDuration';
import type { SubscriptionOfferEligibility } from './SubscriptionOfferEligibility';
import {
    SubscriptionOfferEligibilityFromJSON,
    SubscriptionOfferEligibilityFromJSONTyped,
    SubscriptionOfferEligibilityToJSON,
} from './SubscriptionOfferEligibility';
import type { SubscriptionOfferMode } from './SubscriptionOfferMode';
import {
    SubscriptionOfferModeFromJSON,
    SubscriptionOfferModeFromJSONTyped,
    SubscriptionOfferModeToJSON,
} from './SubscriptionOfferMode';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeAttributes
 */
export interface SubscriptionOfferCodeAttributes {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodeAttributes
     */
    name?: string;
    /**
     * 
     * @type {Array<SubscriptionCustomerEligibility>}
     * @memberof SubscriptionOfferCodeAttributes
     */
    customerEligibilities?: Array<SubscriptionCustomerEligibility>;
    /**
     * 
     * @type {SubscriptionOfferEligibility}
     * @memberof SubscriptionOfferCodeAttributes
     */
    offerEligibility?: SubscriptionOfferEligibility;
    /**
     * 
     * @type {SubscriptionOfferDuration}
     * @memberof SubscriptionOfferCodeAttributes
     */
    duration?: SubscriptionOfferDuration;
    /**
     * 
     * @type {SubscriptionOfferMode}
     * @memberof SubscriptionOfferCodeAttributes
     */
    offerMode?: SubscriptionOfferMode;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionOfferCodeAttributes
     */
    numberOfPeriods?: number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionOfferCodeAttributes
     */
    totalNumberOfCodes?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionOfferCodeAttributes
     */
    active?: boolean;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeAttributes interface.
 */
export function instanceOfSubscriptionOfferCodeAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionOfferCodeAttributesFromJSON(json: any): SubscriptionOfferCodeAttributes {
    return SubscriptionOfferCodeAttributesFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'customerEligibilities': !exists(json, 'customerEligibilities') ? undefined : ((json['customerEligibilities'] as Array<any>).map(SubscriptionCustomerEligibilityFromJSON)),
        'offerEligibility': !exists(json, 'offerEligibility') ? undefined : SubscriptionOfferEligibilityFromJSON(json['offerEligibility']),
        'duration': !exists(json, 'duration') ? undefined : SubscriptionOfferDurationFromJSON(json['duration']),
        'offerMode': !exists(json, 'offerMode') ? undefined : SubscriptionOfferModeFromJSON(json['offerMode']),
        'numberOfPeriods': !exists(json, 'numberOfPeriods') ? undefined : json['numberOfPeriods'],
        'totalNumberOfCodes': !exists(json, 'totalNumberOfCodes') ? undefined : json['totalNumberOfCodes'],
        'active': !exists(json, 'active') ? undefined : json['active'],
    };
}

export function SubscriptionOfferCodeAttributesToJSON(value?: SubscriptionOfferCodeAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'customerEligibilities': value.customerEligibilities === undefined ? undefined : ((value.customerEligibilities as Array<any>).map(SubscriptionCustomerEligibilityToJSON)),
        'offerEligibility': SubscriptionOfferEligibilityToJSON(value.offerEligibility),
        'duration': SubscriptionOfferDurationToJSON(value.duration),
        'offerMode': SubscriptionOfferModeToJSON(value.offerMode),
        'numberOfPeriods': value.numberOfPeriods,
        'totalNumberOfCodes': value.totalNumberOfCodes,
        'active': value.active,
    };
}

