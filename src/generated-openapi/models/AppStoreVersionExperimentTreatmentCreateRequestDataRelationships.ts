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
import type { AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment } from './AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment';
import {
    AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentFromJSON,
    AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentFromJSONTyped,
    AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentToJSON,
} from './AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentTreatmentCreateRequestDataRelationships
 */
export interface AppStoreVersionExperimentTreatmentCreateRequestDataRelationships {
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment}
     * @memberof AppStoreVersionExperimentTreatmentCreateRequestDataRelationships
     */
    appStoreVersionExperiment: AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentCreateRequestDataRelationships interface.
 */
export function instanceOfAppStoreVersionExperimentTreatmentCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "appStoreVersionExperiment" in value;

    return isInstance;
}

export function AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsFromJSON(json: any): AppStoreVersionExperimentTreatmentCreateRequestDataRelationships {
    return AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatmentCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appStoreVersionExperiment': AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentFromJSON(json['appStoreVersionExperiment']),
    };
}

export function AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsToJSON(value?: AppStoreVersionExperimentTreatmentCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appStoreVersionExperiment': AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentToJSON(value.appStoreVersionExperiment),
    };
}

