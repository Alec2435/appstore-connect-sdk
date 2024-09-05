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
import type { AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionData } from './AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionData';
import {
    AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionDataFromJSON,
    AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionDataFromJSONTyped,
    AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionDataToJSON,
} from './AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionData';

/**
 * 
 * @export
 * @interface AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion
 */
export interface AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion {
    /**
     * 
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     * 
     * @type {AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionData}
     * @memberof AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion
     */
    data?: AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionData;
}

/**
 * Check if a given object implements the AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion interface.
 */
export function instanceOfAppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionFromJSON(json: any): AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion {
    return AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionDataFromJSON(json['data']),
    };
}

export function AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionToJSON(value?: AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        'data': AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionDataToJSON(value.data),
    };
}

