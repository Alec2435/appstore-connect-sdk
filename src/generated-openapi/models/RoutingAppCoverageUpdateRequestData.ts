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
import type { AppClipAdvancedExperienceImageUpdateRequestDataAttributes } from './AppClipAdvancedExperienceImageUpdateRequestDataAttributes';
import {
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON,
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSONTyped,
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON,
} from './AppClipAdvancedExperienceImageUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface RoutingAppCoverageUpdateRequestData
 */
export interface RoutingAppCoverageUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof RoutingAppCoverageUpdateRequestData
     */
    type: RoutingAppCoverageUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RoutingAppCoverageUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageUpdateRequestDataAttributes}
     * @memberof RoutingAppCoverageUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const RoutingAppCoverageUpdateRequestDataTypeEnum = {
    RoutingAppCoverages: 'routingAppCoverages'
} as const;
export type RoutingAppCoverageUpdateRequestDataTypeEnum = typeof RoutingAppCoverageUpdateRequestDataTypeEnum[keyof typeof RoutingAppCoverageUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the RoutingAppCoverageUpdateRequestData interface.
 */
export function instanceOfRoutingAppCoverageUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function RoutingAppCoverageUpdateRequestDataFromJSON(json: any): RoutingAppCoverageUpdateRequestData {
    return RoutingAppCoverageUpdateRequestDataFromJSONTyped(json, false);
}

export function RoutingAppCoverageUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingAppCoverageUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function RoutingAppCoverageUpdateRequestDataToJSON(value?: RoutingAppCoverageUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

