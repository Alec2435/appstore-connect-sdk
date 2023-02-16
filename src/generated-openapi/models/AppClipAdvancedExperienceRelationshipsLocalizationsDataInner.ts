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
/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceRelationshipsLocalizationsDataInner
 */
export interface AppClipAdvancedExperienceRelationshipsLocalizationsDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceRelationshipsLocalizationsDataInner
     */
    type: AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceRelationshipsLocalizationsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerTypeEnum = {
    AppClipAdvancedExperienceLocalizations: 'appClipAdvancedExperienceLocalizations'
} as const;
export type AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerTypeEnum = typeof AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerTypeEnum[keyof typeof AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerTypeEnum];


/**
 * Check if a given object implements the AppClipAdvancedExperienceRelationshipsLocalizationsDataInner interface.
 */
export function instanceOfAppClipAdvancedExperienceRelationshipsLocalizationsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerFromJSON(json: any): AppClipAdvancedExperienceRelationshipsLocalizationsDataInner {
    return AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceRelationshipsLocalizationsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerToJSON(value?: AppClipAdvancedExperienceRelationshipsLocalizationsDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

