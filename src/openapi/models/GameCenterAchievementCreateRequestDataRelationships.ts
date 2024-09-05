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
import type { GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetail } from './GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetail';
import {
    GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetailFromJSON,
    GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetailFromJSONTyped,
    GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetailToJSON,
} from './GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetail';
import type { GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup } from './GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup';
import {
    GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroupFromJSON,
    GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroupFromJSONTyped,
    GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroupToJSON,
} from './GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup';

/**
 * 
 * @export
 * @interface GameCenterAchievementCreateRequestDataRelationships
 */
export interface GameCenterAchievementCreateRequestDataRelationships {
    /**
     * 
     * @type {GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetail}
     * @memberof GameCenterAchievementCreateRequestDataRelationships
     */
    gameCenterDetail?: GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetail;
    /**
     * 
     * @type {GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup}
     * @memberof GameCenterAchievementCreateRequestDataRelationships
     */
    gameCenterGroup?: GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup;
}

/**
 * Check if a given object implements the GameCenterAchievementCreateRequestDataRelationships interface.
 */
export function instanceOfGameCenterAchievementCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterAchievementCreateRequestDataRelationshipsFromJSON(json: any): GameCenterAchievementCreateRequestDataRelationships {
    return GameCenterAchievementCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function GameCenterAchievementCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gameCenterDetail': !exists(json, 'gameCenterDetail') ? undefined : GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetailFromJSON(json['gameCenterDetail']),
        'gameCenterGroup': !exists(json, 'gameCenterGroup') ? undefined : GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroupFromJSON(json['gameCenterGroup']),
    };
}

export function GameCenterAchievementCreateRequestDataRelationshipsToJSON(value?: GameCenterAchievementCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gameCenterDetail': GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetailToJSON(value.gameCenterDetail),
        'gameCenterGroup': GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroupToJSON(value.gameCenterGroup),
    };
}

