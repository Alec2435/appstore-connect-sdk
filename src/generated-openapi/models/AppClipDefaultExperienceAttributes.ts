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
import type { AppClipAction } from './AppClipAction';
import {
    AppClipActionFromJSON,
    AppClipActionFromJSONTyped,
    AppClipActionToJSON,
} from './AppClipAction';

/**
 * 
 * @export
 * @interface AppClipDefaultExperienceAttributes
 */
export interface AppClipDefaultExperienceAttributes {
    /**
     * 
     * @type {AppClipAction}
     * @memberof AppClipDefaultExperienceAttributes
     */
    action?: AppClipAction;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceAttributes interface.
 */
export function instanceOfAppClipDefaultExperienceAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppClipDefaultExperienceAttributesFromJSON(json: any): AppClipDefaultExperienceAttributes {
    return AppClipDefaultExperienceAttributesFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : AppClipActionFromJSON(json['action']),
    };
}

export function AppClipDefaultExperienceAttributesToJSON(value?: AppClipDefaultExperienceAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': AppClipActionToJSON(value.action),
    };
}

