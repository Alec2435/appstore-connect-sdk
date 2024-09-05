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
import type { AlternativeDistributionPackageCreateRequestDataRelationships } from './AlternativeDistributionPackageCreateRequestDataRelationships';
import {
    AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON,
    AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSONTyped,
    AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON,
} from './AlternativeDistributionPackageCreateRequestDataRelationships';
import type { AppStoreVersionExperimentCreateRequestDataAttributes } from './AppStoreVersionExperimentCreateRequestDataAttributes';
import {
    AppStoreVersionExperimentCreateRequestDataAttributesFromJSON,
    AppStoreVersionExperimentCreateRequestDataAttributesFromJSONTyped,
    AppStoreVersionExperimentCreateRequestDataAttributesToJSON,
} from './AppStoreVersionExperimentCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentCreateRequestData
 */
export interface AppStoreVersionExperimentCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentCreateRequestData
     */
    type: AppStoreVersionExperimentCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppStoreVersionExperimentCreateRequestDataAttributes}
     * @memberof AppStoreVersionExperimentCreateRequestData
     */
    attributes: AppStoreVersionExperimentCreateRequestDataAttributes;
    /**
     * 
     * @type {AlternativeDistributionPackageCreateRequestDataRelationships}
     * @memberof AppStoreVersionExperimentCreateRequestData
     */
    relationships: AlternativeDistributionPackageCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppStoreVersionExperimentCreateRequestDataTypeEnum = {
    AppStoreVersionExperiments: 'appStoreVersionExperiments'
} as const;
export type AppStoreVersionExperimentCreateRequestDataTypeEnum = typeof AppStoreVersionExperimentCreateRequestDataTypeEnum[keyof typeof AppStoreVersionExperimentCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionExperimentCreateRequestData interface.
 */
export function instanceOfAppStoreVersionExperimentCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function AppStoreVersionExperimentCreateRequestDataFromJSON(json: any): AppStoreVersionExperimentCreateRequestData {
    return AppStoreVersionExperimentCreateRequestDataFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppStoreVersionExperimentCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppStoreVersionExperimentCreateRequestDataToJSON(value?: AppStoreVersionExperimentCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppStoreVersionExperimentCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

