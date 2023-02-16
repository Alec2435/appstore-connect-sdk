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
import type { AppInfoLocalizationRelationshipsAppInfo } from './AppInfoLocalizationRelationshipsAppInfo';
import {
    AppInfoLocalizationRelationshipsAppInfoFromJSON,
    AppInfoLocalizationRelationshipsAppInfoFromJSONTyped,
    AppInfoLocalizationRelationshipsAppInfoToJSON,
} from './AppInfoLocalizationRelationshipsAppInfo';

/**
 * 
 * @export
 * @interface AppInfoLocalizationRelationships
 */
export interface AppInfoLocalizationRelationships {
    /**
     * 
     * @type {AppInfoLocalizationRelationshipsAppInfo}
     * @memberof AppInfoLocalizationRelationships
     */
    appInfo?: AppInfoLocalizationRelationshipsAppInfo;
}

/**
 * Check if a given object implements the AppInfoLocalizationRelationships interface.
 */
export function instanceOfAppInfoLocalizationRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppInfoLocalizationRelationshipsFromJSON(json: any): AppInfoLocalizationRelationships {
    return AppInfoLocalizationRelationshipsFromJSONTyped(json, false);
}

export function AppInfoLocalizationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoLocalizationRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appInfo': !exists(json, 'appInfo') ? undefined : AppInfoLocalizationRelationshipsAppInfoFromJSON(json['appInfo']),
    };
}

export function AppInfoLocalizationRelationshipsToJSON(value?: AppInfoLocalizationRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appInfo': AppInfoLocalizationRelationshipsAppInfoToJSON(value.appInfo),
    };
}

