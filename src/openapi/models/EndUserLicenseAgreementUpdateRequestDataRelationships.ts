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
import type { EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories } from './EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories';
import {
    EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritoriesFromJSON,
    EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritoriesFromJSONTyped,
    EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritoriesToJSON,
} from './EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories';

/**
 * 
 * @export
 * @interface EndUserLicenseAgreementUpdateRequestDataRelationships
 */
export interface EndUserLicenseAgreementUpdateRequestDataRelationships {
    /**
     * 
     * @type {EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories}
     * @memberof EndUserLicenseAgreementUpdateRequestDataRelationships
     */
    territories?: EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories;
}

/**
 * Check if a given object implements the EndUserLicenseAgreementUpdateRequestDataRelationships interface.
 */
export function instanceOfEndUserLicenseAgreementUpdateRequestDataRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EndUserLicenseAgreementUpdateRequestDataRelationshipsFromJSON(json: any): EndUserLicenseAgreementUpdateRequestDataRelationships {
    return EndUserLicenseAgreementUpdateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function EndUserLicenseAgreementUpdateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLicenseAgreementUpdateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'territories': !exists(json, 'territories') ? undefined : EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritoriesFromJSON(json['territories']),
    };
}

export function EndUserLicenseAgreementUpdateRequestDataRelationshipsToJSON(value?: EndUserLicenseAgreementUpdateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'territories': EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritoriesToJSON(value.territories),
    };
}

