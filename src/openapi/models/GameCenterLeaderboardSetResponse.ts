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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { GameCenterLeaderboardSet } from './GameCenterLeaderboardSet';
import {
    GameCenterLeaderboardSetFromJSON,
    GameCenterLeaderboardSetFromJSONTyped,
    GameCenterLeaderboardSetToJSON,
} from './GameCenterLeaderboardSet';
import type { GameCenterLeaderboardSetsResponseIncludedInner } from './GameCenterLeaderboardSetsResponseIncludedInner';
import {
    GameCenterLeaderboardSetsResponseIncludedInnerFromJSON,
    GameCenterLeaderboardSetsResponseIncludedInnerFromJSONTyped,
    GameCenterLeaderboardSetsResponseIncludedInnerToJSON,
} from './GameCenterLeaderboardSetsResponseIncludedInner';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetResponse
 */
export interface GameCenterLeaderboardSetResponse {
    /**
     * 
     * @type {GameCenterLeaderboardSet}
     * @memberof GameCenterLeaderboardSetResponse
     */
    data: GameCenterLeaderboardSet;
    /**
     * 
     * @type {Array<GameCenterLeaderboardSetsResponseIncludedInner>}
     * @memberof GameCenterLeaderboardSetResponse
     */
    included?: Array<GameCenterLeaderboardSetsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof GameCenterLeaderboardSetResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetResponse interface.
 */
export function instanceOfGameCenterLeaderboardSetResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetResponseFromJSON(json: any): GameCenterLeaderboardSetResponse {
    return GameCenterLeaderboardSetResponseFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterLeaderboardSetFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(GameCenterLeaderboardSetsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function GameCenterLeaderboardSetResponseToJSON(value?: GameCenterLeaderboardSetResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterLeaderboardSetToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(GameCenterLeaderboardSetsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

