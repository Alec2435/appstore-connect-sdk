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
import type { SubscriptionOfferDuration } from './SubscriptionOfferDuration';
import {
    SubscriptionOfferDurationFromJSON,
    SubscriptionOfferDurationFromJSONTyped,
    SubscriptionOfferDurationToJSON,
} from './SubscriptionOfferDuration';
import type { SubscriptionOfferMode } from './SubscriptionOfferMode';
import {
    SubscriptionOfferModeFromJSON,
    SubscriptionOfferModeFromJSONTyped,
    SubscriptionOfferModeToJSON,
} from './SubscriptionOfferMode';

/**
 * 
 * @export
 * @interface SubscriptionPromotionalOfferInlineCreateAttributes
 */
export interface SubscriptionPromotionalOfferInlineCreateAttributes {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPromotionalOfferInlineCreateAttributes
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPromotionalOfferInlineCreateAttributes
     */
    offerCode: string;
    /**
     * 
     * @type {SubscriptionOfferDuration}
     * @memberof SubscriptionPromotionalOfferInlineCreateAttributes
     */
    duration: SubscriptionOfferDuration;
    /**
     * 
     * @type {SubscriptionOfferMode}
     * @memberof SubscriptionPromotionalOfferInlineCreateAttributes
     */
    offerMode: SubscriptionOfferMode;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionPromotionalOfferInlineCreateAttributes
     */
    numberOfPeriods: number;
}

/**
 * Check if a given object implements the SubscriptionPromotionalOfferInlineCreateAttributes interface.
 */
export function instanceOfSubscriptionPromotionalOfferInlineCreateAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "offerCode" in value;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "offerMode" in value;
    isInstance = isInstance && "numberOfPeriods" in value;

    return isInstance;
}

export function SubscriptionPromotionalOfferInlineCreateAttributesFromJSON(json: any): SubscriptionPromotionalOfferInlineCreateAttributes {
    return SubscriptionPromotionalOfferInlineCreateAttributesFromJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferInlineCreateAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferInlineCreateAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'offerCode': json['offerCode'],
        'duration': SubscriptionOfferDurationFromJSON(json['duration']),
        'offerMode': SubscriptionOfferModeFromJSON(json['offerMode']),
        'numberOfPeriods': json['numberOfPeriods'],
    };
}

export function SubscriptionPromotionalOfferInlineCreateAttributesToJSON(value?: SubscriptionPromotionalOfferInlineCreateAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'offerCode': value.offerCode,
        'duration': SubscriptionOfferDurationToJSON(value.duration),
        'offerMode': SubscriptionOfferModeToJSON(value.offerMode),
        'numberOfPeriods': value.numberOfPeriods,
    };
}

