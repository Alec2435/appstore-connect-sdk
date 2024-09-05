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
import type { SubscriptionGroupLocalizationRelationshipsSubscriptionGroup } from './SubscriptionGroupLocalizationRelationshipsSubscriptionGroup';
import {
    SubscriptionGroupLocalizationRelationshipsSubscriptionGroupFromJSON,
    SubscriptionGroupLocalizationRelationshipsSubscriptionGroupFromJSONTyped,
    SubscriptionGroupLocalizationRelationshipsSubscriptionGroupToJSON,
} from './SubscriptionGroupLocalizationRelationshipsSubscriptionGroup';

/**
 * 
 * @export
 * @interface SubscriptionGroupLocalizationRelationships
 */
export interface SubscriptionGroupLocalizationRelationships {
    /**
     * 
     * @type {SubscriptionGroupLocalizationRelationshipsSubscriptionGroup}
     * @memberof SubscriptionGroupLocalizationRelationships
     */
    subscriptionGroup?: SubscriptionGroupLocalizationRelationshipsSubscriptionGroup;
}

/**
 * Check if a given object implements the SubscriptionGroupLocalizationRelationships interface.
 */
export function instanceOfSubscriptionGroupLocalizationRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionGroupLocalizationRelationshipsFromJSON(json: any): SubscriptionGroupLocalizationRelationships {
    return SubscriptionGroupLocalizationRelationshipsFromJSONTyped(json, false);
}

export function SubscriptionGroupLocalizationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupLocalizationRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subscriptionGroup': !exists(json, 'subscriptionGroup') ? undefined : SubscriptionGroupLocalizationRelationshipsSubscriptionGroupFromJSON(json['subscriptionGroup']),
    };
}

export function SubscriptionGroupLocalizationRelationshipsToJSON(value?: SubscriptionGroupLocalizationRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subscriptionGroup': SubscriptionGroupLocalizationRelationshipsSubscriptionGroupToJSON(value.subscriptionGroup),
    };
}

