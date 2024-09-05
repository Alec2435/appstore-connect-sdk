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
import type { GameCenterLeaderboardLocalizationAttributes } from './GameCenterLeaderboardLocalizationAttributes';
import {
    GameCenterLeaderboardLocalizationAttributesFromJSON,
    GameCenterLeaderboardLocalizationAttributesFromJSONTyped,
    GameCenterLeaderboardLocalizationAttributesToJSON,
} from './GameCenterLeaderboardLocalizationAttributes';
import type { GameCenterLeaderboardLocalizationRelationships } from './GameCenterLeaderboardLocalizationRelationships';
import {
    GameCenterLeaderboardLocalizationRelationshipsFromJSON,
    GameCenterLeaderboardLocalizationRelationshipsFromJSONTyped,
    GameCenterLeaderboardLocalizationRelationshipsToJSON,
} from './GameCenterLeaderboardLocalizationRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardLocalization
 */
export interface GameCenterLeaderboardLocalization {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardLocalization
     */
    type: GameCenterLeaderboardLocalizationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardLocalization
     */
    id: string;
    /**
     * 
     * @type {GameCenterLeaderboardLocalizationAttributes}
     * @memberof GameCenterLeaderboardLocalization
     */
    attributes?: GameCenterLeaderboardLocalizationAttributes;
    /**
     * 
     * @type {GameCenterLeaderboardLocalizationRelationships}
     * @memberof GameCenterLeaderboardLocalization
     */
    relationships?: GameCenterLeaderboardLocalizationRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterLeaderboardLocalization
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterLeaderboardLocalizationTypeEnum = {
    GameCenterLeaderboardLocalizations: 'gameCenterLeaderboardLocalizations'
} as const;
export type GameCenterLeaderboardLocalizationTypeEnum = typeof GameCenterLeaderboardLocalizationTypeEnum[keyof typeof GameCenterLeaderboardLocalizationTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardLocalization interface.
 */
export function instanceOfGameCenterLeaderboardLocalization(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterLeaderboardLocalizationFromJSON(json: any): GameCenterLeaderboardLocalization {
    return GameCenterLeaderboardLocalizationFromJSONTyped(json, false);
}

export function GameCenterLeaderboardLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardLocalization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : GameCenterLeaderboardLocalizationAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : GameCenterLeaderboardLocalizationRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterLeaderboardLocalizationToJSON(value?: GameCenterLeaderboardLocalization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GameCenterLeaderboardLocalizationAttributesToJSON(value.attributes),
        'relationships': GameCenterLeaderboardLocalizationRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

