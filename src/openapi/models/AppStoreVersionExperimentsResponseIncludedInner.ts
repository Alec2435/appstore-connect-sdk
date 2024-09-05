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

import {
    AppStoreVersion,
    instanceOfAppStoreVersion,
    AppStoreVersionFromJSON,
    AppStoreVersionFromJSONTyped,
    AppStoreVersionToJSON,
} from './AppStoreVersion';
import {
    AppStoreVersionExperimentTreatment,
    instanceOfAppStoreVersionExperimentTreatment,
    AppStoreVersionExperimentTreatmentFromJSON,
    AppStoreVersionExperimentTreatmentFromJSONTyped,
    AppStoreVersionExperimentTreatmentToJSON,
} from './AppStoreVersionExperimentTreatment';

/**
 * @type AppStoreVersionExperimentsResponseIncludedInner
 * 
 * @export
 */
export type AppStoreVersionExperimentsResponseIncludedInner = AppStoreVersion | AppStoreVersionExperimentTreatment;

export function AppStoreVersionExperimentsResponseIncludedInnerFromJSON(json: any): AppStoreVersionExperimentsResponseIncludedInner {
    return AppStoreVersionExperimentsResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentsResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...AppStoreVersionFromJSONTyped(json, true), ...AppStoreVersionExperimentTreatmentFromJSONTyped(json, true) };
}

export function AppStoreVersionExperimentsResponseIncludedInnerToJSON(value?: AppStoreVersionExperimentsResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfAppStoreVersion(value)) {
        return AppStoreVersionToJSON(value as AppStoreVersion);
    }
    if (instanceOfAppStoreVersionExperimentTreatment(value)) {
        return AppStoreVersionExperimentTreatmentToJSON(value as AppStoreVersionExperimentTreatment);
    }

    return {};
}

