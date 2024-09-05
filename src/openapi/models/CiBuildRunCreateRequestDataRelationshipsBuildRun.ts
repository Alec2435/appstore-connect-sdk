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
import type { CiBuildActionRelationshipsBuildRunData } from './CiBuildActionRelationshipsBuildRunData';
import {
    CiBuildActionRelationshipsBuildRunDataFromJSON,
    CiBuildActionRelationshipsBuildRunDataFromJSONTyped,
    CiBuildActionRelationshipsBuildRunDataToJSON,
} from './CiBuildActionRelationshipsBuildRunData';

/**
 * 
 * @export
 * @interface CiBuildRunCreateRequestDataRelationshipsBuildRun
 */
export interface CiBuildRunCreateRequestDataRelationshipsBuildRun {
    /**
     * 
     * @type {CiBuildActionRelationshipsBuildRunData}
     * @memberof CiBuildRunCreateRequestDataRelationshipsBuildRun
     */
    data?: CiBuildActionRelationshipsBuildRunData;
}

/**
 * Check if a given object implements the CiBuildRunCreateRequestDataRelationshipsBuildRun interface.
 */
export function instanceOfCiBuildRunCreateRequestDataRelationshipsBuildRun(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiBuildRunCreateRequestDataRelationshipsBuildRunFromJSON(json: any): CiBuildRunCreateRequestDataRelationshipsBuildRun {
    return CiBuildRunCreateRequestDataRelationshipsBuildRunFromJSONTyped(json, false);
}

export function CiBuildRunCreateRequestDataRelationshipsBuildRunFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunCreateRequestDataRelationshipsBuildRun {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : CiBuildActionRelationshipsBuildRunDataFromJSON(json['data']),
    };
}

export function CiBuildRunCreateRequestDataRelationshipsBuildRunToJSON(value?: CiBuildRunCreateRequestDataRelationshipsBuildRun | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CiBuildActionRelationshipsBuildRunDataToJSON(value.data),
    };
}

