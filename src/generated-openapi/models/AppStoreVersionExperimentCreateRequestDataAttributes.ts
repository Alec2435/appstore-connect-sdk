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
/**
 * 
 * @export
 * @interface AppStoreVersionExperimentCreateRequestDataAttributes
 */
export interface AppStoreVersionExperimentCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentCreateRequestDataAttributes
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof AppStoreVersionExperimentCreateRequestDataAttributes
     */
    trafficProportion: number;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentCreateRequestDataAttributes interface.
 */
export function instanceOfAppStoreVersionExperimentCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "trafficProportion" in value;

    return isInstance;
}

export function AppStoreVersionExperimentCreateRequestDataAttributesFromJSON(json: any): AppStoreVersionExperimentCreateRequestDataAttributes {
    return AppStoreVersionExperimentCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'trafficProportion': json['trafficProportion'],
    };
}

export function AppStoreVersionExperimentCreateRequestDataAttributesToJSON(value?: AppStoreVersionExperimentCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'trafficProportion': value.trafficProportion,
    };
}

