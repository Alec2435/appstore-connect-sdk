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
import type { GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization } from './GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization';
import {
    GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationFromJSON,
    GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationFromJSONTyped,
    GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationToJSON,
} from './GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetImageRelationships
 */
export interface GameCenterLeaderboardSetImageRelationships {
    /**
     * 
     * @type {GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization}
     * @memberof GameCenterLeaderboardSetImageRelationships
     */
    gameCenterLeaderboardSetLocalization?: GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetImageRelationships interface.
 */
export function instanceOfGameCenterLeaderboardSetImageRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterLeaderboardSetImageRelationshipsFromJSON(json: any): GameCenterLeaderboardSetImageRelationships {
    return GameCenterLeaderboardSetImageRelationshipsFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetImageRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetImageRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gameCenterLeaderboardSetLocalization': !exists(json, 'gameCenterLeaderboardSetLocalization') ? undefined : GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationFromJSON(json['gameCenterLeaderboardSetLocalization']),
    };
}

export function GameCenterLeaderboardSetImageRelationshipsToJSON(value?: GameCenterLeaderboardSetImageRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gameCenterLeaderboardSetLocalization': GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationToJSON(value.gameCenterLeaderboardSetLocalization),
    };
}

