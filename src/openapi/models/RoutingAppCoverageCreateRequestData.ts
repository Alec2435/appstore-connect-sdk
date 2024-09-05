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
import type { AppClipAdvancedExperienceImageCreateRequestDataAttributes } from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';
import {
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSONTyped,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON,
} from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface RoutingAppCoverageCreateRequestData
 */
export interface RoutingAppCoverageCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof RoutingAppCoverageCreateRequestData
     */
    type: RoutingAppCoverageCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageCreateRequestDataAttributes}
     * @memberof RoutingAppCoverageCreateRequestData
     */
    attributes: AppClipAdvancedExperienceImageCreateRequestDataAttributes;
    /**
     * 
     * @type {AlternativeDistributionPackageCreateRequestDataRelationships}
     * @memberof RoutingAppCoverageCreateRequestData
     */
    relationships: AlternativeDistributionPackageCreateRequestDataRelationships;
}


/**
 * @export
 */
export const RoutingAppCoverageCreateRequestDataTypeEnum = {
    RoutingAppCoverages: 'routingAppCoverages'
} as const;
export type RoutingAppCoverageCreateRequestDataTypeEnum = typeof RoutingAppCoverageCreateRequestDataTypeEnum[keyof typeof RoutingAppCoverageCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the RoutingAppCoverageCreateRequestData interface.
 */
export function instanceOfRoutingAppCoverageCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function RoutingAppCoverageCreateRequestDataFromJSON(json: any): RoutingAppCoverageCreateRequestData {
    return RoutingAppCoverageCreateRequestDataFromJSONTyped(json, false);
}

export function RoutingAppCoverageCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingAppCoverageCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function RoutingAppCoverageCreateRequestDataToJSON(value?: RoutingAppCoverageCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

