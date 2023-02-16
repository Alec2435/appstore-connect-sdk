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
 * @interface AppStoreVersionExperimentTreatmentUpdateRequestDataAttributes
 */
export interface AppStoreVersionExperimentTreatmentUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentTreatmentUpdateRequestDataAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentTreatmentUpdateRequestDataAttributes
     */
    appIconName?: string;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentUpdateRequestDataAttributes interface.
 */
export function instanceOfAppStoreVersionExperimentTreatmentUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreVersionExperimentTreatmentUpdateRequestDataAttributesFromJSON(json: any): AppStoreVersionExperimentTreatmentUpdateRequestDataAttributes {
    return AppStoreVersionExperimentTreatmentUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatmentUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'appIconName': !exists(json, 'appIconName') ? undefined : json['appIconName'],
    };
}

export function AppStoreVersionExperimentTreatmentUpdateRequestDataAttributesToJSON(value?: AppStoreVersionExperimentTreatmentUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'appIconName': value.appIconName,
    };
}

