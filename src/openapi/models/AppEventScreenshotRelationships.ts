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
import type { AppEventScreenshotRelationshipsAppEventLocalization } from './AppEventScreenshotRelationshipsAppEventLocalization';
import {
    AppEventScreenshotRelationshipsAppEventLocalizationFromJSON,
    AppEventScreenshotRelationshipsAppEventLocalizationFromJSONTyped,
    AppEventScreenshotRelationshipsAppEventLocalizationToJSON,
} from './AppEventScreenshotRelationshipsAppEventLocalization';

/**
 * 
 * @export
 * @interface AppEventScreenshotRelationships
 */
export interface AppEventScreenshotRelationships {
    /**
     * 
     * @type {AppEventScreenshotRelationshipsAppEventLocalization}
     * @memberof AppEventScreenshotRelationships
     */
    appEventLocalization?: AppEventScreenshotRelationshipsAppEventLocalization;
}

/**
 * Check if a given object implements the AppEventScreenshotRelationships interface.
 */
export function instanceOfAppEventScreenshotRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppEventScreenshotRelationshipsFromJSON(json: any): AppEventScreenshotRelationships {
    return AppEventScreenshotRelationshipsFromJSONTyped(json, false);
}

export function AppEventScreenshotRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventScreenshotRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appEventLocalization': !exists(json, 'appEventLocalization') ? undefined : AppEventScreenshotRelationshipsAppEventLocalizationFromJSON(json['appEventLocalization']),
    };
}

export function AppEventScreenshotRelationshipsToJSON(value?: AppEventScreenshotRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appEventLocalization': AppEventScreenshotRelationshipsAppEventLocalizationToJSON(value.appEventLocalization),
    };
}

