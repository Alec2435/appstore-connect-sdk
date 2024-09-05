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
import type { AlternativeDistributionPackageVersionRelationshipsVariantsLinks } from './AlternativeDistributionPackageVersionRelationshipsVariantsLinks';
import {
    AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON,
    AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSONTyped,
    AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON,
} from './AlternativeDistributionPackageVersionRelationshipsVariantsLinks';
import type { CiBuildActionRelationshipsBuildRunData } from './CiBuildActionRelationshipsBuildRunData';
import {
    CiBuildActionRelationshipsBuildRunDataFromJSON,
    CiBuildActionRelationshipsBuildRunDataFromJSONTyped,
    CiBuildActionRelationshipsBuildRunDataToJSON,
} from './CiBuildActionRelationshipsBuildRunData';

/**
 * 
 * @export
 * @interface CiBuildActionRelationshipsBuildRun
 */
export interface CiBuildActionRelationshipsBuildRun {
    /**
     * 
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof CiBuildActionRelationshipsBuildRun
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     * 
     * @type {CiBuildActionRelationshipsBuildRunData}
     * @memberof CiBuildActionRelationshipsBuildRun
     */
    data?: CiBuildActionRelationshipsBuildRunData;
}

/**
 * Check if a given object implements the CiBuildActionRelationshipsBuildRun interface.
 */
export function instanceOfCiBuildActionRelationshipsBuildRun(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiBuildActionRelationshipsBuildRunFromJSON(json: any): CiBuildActionRelationshipsBuildRun {
    return CiBuildActionRelationshipsBuildRunFromJSONTyped(json, false);
}

export function CiBuildActionRelationshipsBuildRunFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildActionRelationshipsBuildRun {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : CiBuildActionRelationshipsBuildRunDataFromJSON(json['data']),
    };
}

export function CiBuildActionRelationshipsBuildRunToJSON(value?: CiBuildActionRelationshipsBuildRun | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        'data': CiBuildActionRelationshipsBuildRunDataToJSON(value.data),
    };
}

