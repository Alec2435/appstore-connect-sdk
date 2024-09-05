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
import type { AppAvailabilityV2CreateRequestDataAttributes } from './AppAvailabilityV2CreateRequestDataAttributes';
import {
    AppAvailabilityV2CreateRequestDataAttributesFromJSON,
    AppAvailabilityV2CreateRequestDataAttributesFromJSONTyped,
    AppAvailabilityV2CreateRequestDataAttributesToJSON,
} from './AppAvailabilityV2CreateRequestDataAttributes';
import type { SubscriptionAvailabilityCreateRequestDataRelationships } from './SubscriptionAvailabilityCreateRequestDataRelationships';
import {
    SubscriptionAvailabilityCreateRequestDataRelationshipsFromJSON,
    SubscriptionAvailabilityCreateRequestDataRelationshipsFromJSONTyped,
    SubscriptionAvailabilityCreateRequestDataRelationshipsToJSON,
} from './SubscriptionAvailabilityCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface SubscriptionAvailabilityCreateRequestData
 */
export interface SubscriptionAvailabilityCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionAvailabilityCreateRequestData
     */
    type: SubscriptionAvailabilityCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppAvailabilityV2CreateRequestDataAttributes}
     * @memberof SubscriptionAvailabilityCreateRequestData
     */
    attributes: AppAvailabilityV2CreateRequestDataAttributes;
    /**
     * 
     * @type {SubscriptionAvailabilityCreateRequestDataRelationships}
     * @memberof SubscriptionAvailabilityCreateRequestData
     */
    relationships: SubscriptionAvailabilityCreateRequestDataRelationships;
}


/**
 * @export
 */
export const SubscriptionAvailabilityCreateRequestDataTypeEnum = {
    SubscriptionAvailabilities: 'subscriptionAvailabilities'
} as const;
export type SubscriptionAvailabilityCreateRequestDataTypeEnum = typeof SubscriptionAvailabilityCreateRequestDataTypeEnum[keyof typeof SubscriptionAvailabilityCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionAvailabilityCreateRequestData interface.
 */
export function instanceOfSubscriptionAvailabilityCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function SubscriptionAvailabilityCreateRequestDataFromJSON(json: any): SubscriptionAvailabilityCreateRequestData {
    return SubscriptionAvailabilityCreateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionAvailabilityCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAvailabilityCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppAvailabilityV2CreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': SubscriptionAvailabilityCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function SubscriptionAvailabilityCreateRequestDataToJSON(value?: SubscriptionAvailabilityCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppAvailabilityV2CreateRequestDataAttributesToJSON(value.attributes),
        'relationships': SubscriptionAvailabilityCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

