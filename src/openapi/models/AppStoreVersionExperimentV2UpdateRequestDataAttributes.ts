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
 * @interface AppStoreVersionExperimentV2UpdateRequestDataAttributes
 */
export interface AppStoreVersionExperimentV2UpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentV2UpdateRequestDataAttributes
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof AppStoreVersionExperimentV2UpdateRequestDataAttributes
     */
    trafficProportion?: number;
    /**
     * 
     * @type {boolean}
     * @memberof AppStoreVersionExperimentV2UpdateRequestDataAttributes
     */
    started?: boolean;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentV2UpdateRequestDataAttributes interface.
 */
export function instanceOfAppStoreVersionExperimentV2UpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreVersionExperimentV2UpdateRequestDataAttributesFromJSON(json: any): AppStoreVersionExperimentV2UpdateRequestDataAttributes {
    return AppStoreVersionExperimentV2UpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentV2UpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentV2UpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'trafficProportion': !exists(json, 'trafficProportion') ? undefined : json['trafficProportion'],
        'started': !exists(json, 'started') ? undefined : json['started'],
    };
}

export function AppStoreVersionExperimentV2UpdateRequestDataAttributesToJSON(value?: AppStoreVersionExperimentV2UpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'trafficProportion': value.trafficProportion,
        'started': value.started,
    };
}

