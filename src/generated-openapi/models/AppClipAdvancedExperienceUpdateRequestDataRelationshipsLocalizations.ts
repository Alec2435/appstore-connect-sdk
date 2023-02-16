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
import type { AppClipAdvancedExperienceRelationshipsLocalizationsDataInner } from './AppClipAdvancedExperienceRelationshipsLocalizationsDataInner';
import {
    AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerFromJSON,
    AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerFromJSONTyped,
    AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerToJSON,
} from './AppClipAdvancedExperienceRelationshipsLocalizationsDataInner';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations
 */
export interface AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations {
    /**
     * 
     * @type {Array<AppClipAdvancedExperienceRelationshipsLocalizationsDataInner>}
     * @memberof AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations
     */
    data?: Array<AppClipAdvancedExperienceRelationshipsLocalizationsDataInner>;
}

/**
 * Check if a given object implements the AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations interface.
 */
export function instanceOfAppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizationsFromJSON(json: any): AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations {
    return AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizationsFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerFromJSON)),
    };
}

export function AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizationsToJSON(value?: AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerToJSON)),
    };
}

