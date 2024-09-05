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
import type { AlternativeDistributionPackageVersionRelationshipsVariantsLinks } from './AlternativeDistributionPackageVersionRelationshipsVariantsLinks';
import {
    AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON,
    AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSONTyped,
    AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON,
} from './AlternativeDistributionPackageVersionRelationshipsVariantsLinks';
import type { GameCenterDetailRelationshipsLeaderboardSetReleasesDataInner } from './GameCenterDetailRelationshipsLeaderboardSetReleasesDataInner';
import {
    GameCenterDetailRelationshipsLeaderboardSetReleasesDataInnerFromJSON,
    GameCenterDetailRelationshipsLeaderboardSetReleasesDataInnerFromJSONTyped,
    GameCenterDetailRelationshipsLeaderboardSetReleasesDataInnerToJSON,
} from './GameCenterDetailRelationshipsLeaderboardSetReleasesDataInner';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface GameCenterDetailRelationshipsLeaderboardSetReleases
 */
export interface GameCenterDetailRelationshipsLeaderboardSetReleases {
    /**
     * 
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof GameCenterDetailRelationshipsLeaderboardSetReleases
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterDetailRelationshipsLeaderboardSetReleases
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<GameCenterDetailRelationshipsLeaderboardSetReleasesDataInner>}
     * @memberof GameCenterDetailRelationshipsLeaderboardSetReleases
     */
    data?: Array<GameCenterDetailRelationshipsLeaderboardSetReleasesDataInner>;
}

/**
 * Check if a given object implements the GameCenterDetailRelationshipsLeaderboardSetReleases interface.
 */
export function instanceOfGameCenterDetailRelationshipsLeaderboardSetReleases(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterDetailRelationshipsLeaderboardSetReleasesFromJSON(json: any): GameCenterDetailRelationshipsLeaderboardSetReleases {
    return GameCenterDetailRelationshipsLeaderboardSetReleasesFromJSONTyped(json, false);
}

export function GameCenterDetailRelationshipsLeaderboardSetReleasesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailRelationshipsLeaderboardSetReleases {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(GameCenterDetailRelationshipsLeaderboardSetReleasesDataInnerFromJSON)),
    };
}

export function GameCenterDetailRelationshipsLeaderboardSetReleasesToJSON(value?: GameCenterDetailRelationshipsLeaderboardSetReleases | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(GameCenterDetailRelationshipsLeaderboardSetReleasesDataInnerToJSON)),
    };
}

