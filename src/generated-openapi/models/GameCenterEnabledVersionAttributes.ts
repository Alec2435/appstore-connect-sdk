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
import type { ImageAsset } from './ImageAsset';
import {
    ImageAssetFromJSON,
    ImageAssetFromJSONTyped,
    ImageAssetToJSON,
} from './ImageAsset';
import type { Platform } from './Platform';
import {
    PlatformFromJSON,
    PlatformFromJSONTyped,
    PlatformToJSON,
} from './Platform';

/**
 * 
 * @export
 * @interface GameCenterEnabledVersionAttributes
 */
export interface GameCenterEnabledVersionAttributes {
    /**
     * 
     * @type {Platform}
     * @memberof GameCenterEnabledVersionAttributes
     */
    platform?: Platform;
    /**
     * 
     * @type {string}
     * @memberof GameCenterEnabledVersionAttributes
     */
    versionString?: string;
    /**
     * 
     * @type {ImageAsset}
     * @memberof GameCenterEnabledVersionAttributes
     */
    iconAsset?: ImageAsset;
}

/**
 * Check if a given object implements the GameCenterEnabledVersionAttributes interface.
 */
export function instanceOfGameCenterEnabledVersionAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterEnabledVersionAttributesFromJSON(json: any): GameCenterEnabledVersionAttributes {
    return GameCenterEnabledVersionAttributesFromJSONTyped(json, false);
}

export function GameCenterEnabledVersionAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterEnabledVersionAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'platform': !exists(json, 'platform') ? undefined : PlatformFromJSON(json['platform']),
        'versionString': !exists(json, 'versionString') ? undefined : json['versionString'],
        'iconAsset': !exists(json, 'iconAsset') ? undefined : ImageAssetFromJSON(json['iconAsset']),
    };
}

export function GameCenterEnabledVersionAttributesToJSON(value?: GameCenterEnabledVersionAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'platform': PlatformToJSON(value.platform),
        'versionString': value.versionString,
        'iconAsset': ImageAssetToJSON(value.iconAsset),
    };
}

