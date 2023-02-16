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
import type { CiWorkflowRelationshipsMacOsVersionData } from './CiWorkflowRelationshipsMacOsVersionData';
import {
    CiWorkflowRelationshipsMacOsVersionDataFromJSON,
    CiWorkflowRelationshipsMacOsVersionDataFromJSONTyped,
    CiWorkflowRelationshipsMacOsVersionDataToJSON,
} from './CiWorkflowRelationshipsMacOsVersionData';

/**
 * 
 * @export
 * @interface CiWorkflowCreateRequestDataRelationshipsMacOsVersion
 */
export interface CiWorkflowCreateRequestDataRelationshipsMacOsVersion {
    /**
     * 
     * @type {CiWorkflowRelationshipsMacOsVersionData}
     * @memberof CiWorkflowCreateRequestDataRelationshipsMacOsVersion
     */
    data: CiWorkflowRelationshipsMacOsVersionData;
}

/**
 * Check if a given object implements the CiWorkflowCreateRequestDataRelationshipsMacOsVersion interface.
 */
export function instanceOfCiWorkflowCreateRequestDataRelationshipsMacOsVersion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function CiWorkflowCreateRequestDataRelationshipsMacOsVersionFromJSON(json: any): CiWorkflowCreateRequestDataRelationshipsMacOsVersion {
    return CiWorkflowCreateRequestDataRelationshipsMacOsVersionFromJSONTyped(json, false);
}

export function CiWorkflowCreateRequestDataRelationshipsMacOsVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowCreateRequestDataRelationshipsMacOsVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CiWorkflowRelationshipsMacOsVersionDataFromJSON(json['data']),
    };
}

export function CiWorkflowCreateRequestDataRelationshipsMacOsVersionToJSON(value?: CiWorkflowCreateRequestDataRelationshipsMacOsVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CiWorkflowRelationshipsMacOsVersionDataToJSON(value.data),
    };
}

