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
import type { GameCenterMatchmakingQueueRelationshipsRuleSetData } from './GameCenterMatchmakingQueueRelationshipsRuleSetData';
import {
    GameCenterMatchmakingQueueRelationshipsRuleSetDataFromJSON,
    GameCenterMatchmakingQueueRelationshipsRuleSetDataFromJSONTyped,
    GameCenterMatchmakingQueueRelationshipsRuleSetDataToJSON,
} from './GameCenterMatchmakingQueueRelationshipsRuleSetData';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet
 */
export interface GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet {
    /**
     * 
     * @type {GameCenterMatchmakingQueueRelationshipsRuleSetData}
     * @memberof GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet
     */
    data: GameCenterMatchmakingQueueRelationshipsRuleSetData;
}

/**
 * Check if a given object implements the GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet interface.
 */
export function instanceOfGameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetFromJSON(json: any): GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet {
    return GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetFromJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterMatchmakingQueueRelationshipsRuleSetDataFromJSON(json['data']),
    };
}

export function GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetToJSON(value?: GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterMatchmakingQueueRelationshipsRuleSetDataToJSON(value.data),
    };
}

