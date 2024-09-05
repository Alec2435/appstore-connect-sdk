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
import type { GameCenterAchievementUpdateRequestDataAttributes } from './GameCenterAchievementUpdateRequestDataAttributes';
import {
    GameCenterAchievementUpdateRequestDataAttributesFromJSON,
    GameCenterAchievementUpdateRequestDataAttributesFromJSONTyped,
    GameCenterAchievementUpdateRequestDataAttributesToJSON,
} from './GameCenterAchievementUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface GameCenterAchievementUpdateRequestData
 */
export interface GameCenterAchievementUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementUpdateRequestData
     */
    type: GameCenterAchievementUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {GameCenterAchievementUpdateRequestDataAttributes}
     * @memberof GameCenterAchievementUpdateRequestData
     */
    attributes?: GameCenterAchievementUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const GameCenterAchievementUpdateRequestDataTypeEnum = {
    GameCenterAchievements: 'gameCenterAchievements'
} as const;
export type GameCenterAchievementUpdateRequestDataTypeEnum = typeof GameCenterAchievementUpdateRequestDataTypeEnum[keyof typeof GameCenterAchievementUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterAchievementUpdateRequestData interface.
 */
export function instanceOfGameCenterAchievementUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterAchievementUpdateRequestDataFromJSON(json: any): GameCenterAchievementUpdateRequestData {
    return GameCenterAchievementUpdateRequestDataFromJSONTyped(json, false);
}

export function GameCenterAchievementUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : GameCenterAchievementUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function GameCenterAchievementUpdateRequestDataToJSON(value?: GameCenterAchievementUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GameCenterAchievementUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

