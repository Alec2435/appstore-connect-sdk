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
import type { AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage } from './AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage';
import {
    AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageFromJSON,
    AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageFromJSONTyped,
    AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageToJSON,
} from './AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage';
import type { AlternativeDistributionPackageVersionRelationshipsDeltas } from './AlternativeDistributionPackageVersionRelationshipsDeltas';
import {
    AlternativeDistributionPackageVersionRelationshipsDeltasFromJSON,
    AlternativeDistributionPackageVersionRelationshipsDeltasFromJSONTyped,
    AlternativeDistributionPackageVersionRelationshipsDeltasToJSON,
} from './AlternativeDistributionPackageVersionRelationshipsDeltas';
import type { AlternativeDistributionPackageVersionRelationshipsVariants } from './AlternativeDistributionPackageVersionRelationshipsVariants';
import {
    AlternativeDistributionPackageVersionRelationshipsVariantsFromJSON,
    AlternativeDistributionPackageVersionRelationshipsVariantsFromJSONTyped,
    AlternativeDistributionPackageVersionRelationshipsVariantsToJSON,
} from './AlternativeDistributionPackageVersionRelationshipsVariants';

/**
 * 
 * @export
 * @interface AlternativeDistributionPackageVersionRelationships
 */
export interface AlternativeDistributionPackageVersionRelationships {
    /**
     * 
     * @type {AlternativeDistributionPackageVersionRelationshipsVariants}
     * @memberof AlternativeDistributionPackageVersionRelationships
     */
    variants?: AlternativeDistributionPackageVersionRelationshipsVariants;
    /**
     * 
     * @type {AlternativeDistributionPackageVersionRelationshipsDeltas}
     * @memberof AlternativeDistributionPackageVersionRelationships
     */
    deltas?: AlternativeDistributionPackageVersionRelationshipsDeltas;
    /**
     * 
     * @type {AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage}
     * @memberof AlternativeDistributionPackageVersionRelationships
     */
    alternativeDistributionPackage?: AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage;
}

/**
 * Check if a given object implements the AlternativeDistributionPackageVersionRelationships interface.
 */
export function instanceOfAlternativeDistributionPackageVersionRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AlternativeDistributionPackageVersionRelationshipsFromJSON(json: any): AlternativeDistributionPackageVersionRelationships {
    return AlternativeDistributionPackageVersionRelationshipsFromJSONTyped(json, false);
}

export function AlternativeDistributionPackageVersionRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageVersionRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'variants': !exists(json, 'variants') ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsFromJSON(json['variants']),
        'deltas': !exists(json, 'deltas') ? undefined : AlternativeDistributionPackageVersionRelationshipsDeltasFromJSON(json['deltas']),
        'alternativeDistributionPackage': !exists(json, 'alternativeDistributionPackage') ? undefined : AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageFromJSON(json['alternativeDistributionPackage']),
    };
}

export function AlternativeDistributionPackageVersionRelationshipsToJSON(value?: AlternativeDistributionPackageVersionRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'variants': AlternativeDistributionPackageVersionRelationshipsVariantsToJSON(value.variants),
        'deltas': AlternativeDistributionPackageVersionRelationshipsDeltasToJSON(value.deltas),
        'alternativeDistributionPackage': AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageToJSON(value.alternativeDistributionPackage),
    };
}

