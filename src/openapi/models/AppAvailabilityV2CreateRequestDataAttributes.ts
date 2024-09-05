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
/**
 * 
 * @export
 * @interface AppAvailabilityV2CreateRequestDataAttributes
 */
export interface AppAvailabilityV2CreateRequestDataAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof AppAvailabilityV2CreateRequestDataAttributes
     */
    availableInNewTerritories: boolean;
}

/**
 * Check if a given object implements the AppAvailabilityV2CreateRequestDataAttributes interface.
 */
export function instanceOfAppAvailabilityV2CreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "availableInNewTerritories" in value;

    return isInstance;
}

export function AppAvailabilityV2CreateRequestDataAttributesFromJSON(json: any): AppAvailabilityV2CreateRequestDataAttributes {
    return AppAvailabilityV2CreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppAvailabilityV2CreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityV2CreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'availableInNewTerritories': json['availableInNewTerritories'],
    };
}

export function AppAvailabilityV2CreateRequestDataAttributesToJSON(value?: AppAvailabilityV2CreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'availableInNewTerritories': value.availableInNewTerritories,
    };
}

