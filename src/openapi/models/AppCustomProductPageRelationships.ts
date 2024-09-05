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
import type { AppAvailabilityRelationshipsApp } from './AppAvailabilityRelationshipsApp';
import {
    AppAvailabilityRelationshipsAppFromJSON,
    AppAvailabilityRelationshipsAppFromJSONTyped,
    AppAvailabilityRelationshipsAppToJSON,
} from './AppAvailabilityRelationshipsApp';
import type { AppCustomProductPageRelationshipsAppCustomProductPageVersions } from './AppCustomProductPageRelationshipsAppCustomProductPageVersions';
import {
    AppCustomProductPageRelationshipsAppCustomProductPageVersionsFromJSON,
    AppCustomProductPageRelationshipsAppCustomProductPageVersionsFromJSONTyped,
    AppCustomProductPageRelationshipsAppCustomProductPageVersionsToJSON,
} from './AppCustomProductPageRelationshipsAppCustomProductPageVersions';

/**
 * 
 * @export
 * @interface AppCustomProductPageRelationships
 */
export interface AppCustomProductPageRelationships {
    /**
     * 
     * @type {AppAvailabilityRelationshipsApp}
     * @memberof AppCustomProductPageRelationships
     */
    app?: AppAvailabilityRelationshipsApp;
    /**
     * 
     * @type {AppCustomProductPageRelationshipsAppCustomProductPageVersions}
     * @memberof AppCustomProductPageRelationships
     */
    appCustomProductPageVersions?: AppCustomProductPageRelationshipsAppCustomProductPageVersions;
}

/**
 * Check if a given object implements the AppCustomProductPageRelationships interface.
 */
export function instanceOfAppCustomProductPageRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppCustomProductPageRelationshipsFromJSON(json: any): AppCustomProductPageRelationships {
    return AppCustomProductPageRelationshipsFromJSONTyped(json, false);
}

export function AppCustomProductPageRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'app': !exists(json, 'app') ? undefined : AppAvailabilityRelationshipsAppFromJSON(json['app']),
        'appCustomProductPageVersions': !exists(json, 'appCustomProductPageVersions') ? undefined : AppCustomProductPageRelationshipsAppCustomProductPageVersionsFromJSON(json['appCustomProductPageVersions']),
    };
}

export function AppCustomProductPageRelationshipsToJSON(value?: AppCustomProductPageRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'app': AppAvailabilityRelationshipsAppToJSON(value.app),
        'appCustomProductPageVersions': AppCustomProductPageRelationshipsAppCustomProductPageVersionsToJSON(value.appCustomProductPageVersions),
    };
}

