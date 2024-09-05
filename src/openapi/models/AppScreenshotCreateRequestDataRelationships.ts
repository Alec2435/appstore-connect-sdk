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
import type { AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet } from './AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet';
import {
    AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetFromJSON,
    AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetFromJSONTyped,
    AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetToJSON,
} from './AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet';

/**
 * 
 * @export
 * @interface AppScreenshotCreateRequestDataRelationships
 */
export interface AppScreenshotCreateRequestDataRelationships {
    /**
     * 
     * @type {AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet}
     * @memberof AppScreenshotCreateRequestDataRelationships
     */
    appScreenshotSet: AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet;
}

/**
 * Check if a given object implements the AppScreenshotCreateRequestDataRelationships interface.
 */
export function instanceOfAppScreenshotCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "appScreenshotSet" in value;

    return isInstance;
}

export function AppScreenshotCreateRequestDataRelationshipsFromJSON(json: any): AppScreenshotCreateRequestDataRelationships {
    return AppScreenshotCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppScreenshotCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appScreenshotSet': AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetFromJSON(json['appScreenshotSet']),
    };
}

export function AppScreenshotCreateRequestDataRelationshipsToJSON(value?: AppScreenshotCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appScreenshotSet': AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetToJSON(value.appScreenshotSet),
    };
}

