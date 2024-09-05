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
import type { AppPreOrderRelationships } from './AppPreOrderRelationships';
import {
    AppPreOrderRelationshipsFromJSON,
    AppPreOrderRelationshipsFromJSONTyped,
    AppPreOrderRelationshipsToJSON,
} from './AppPreOrderRelationships';
import type { BetaAppLocalizationAttributes } from './BetaAppLocalizationAttributes';
import {
    BetaAppLocalizationAttributesFromJSON,
    BetaAppLocalizationAttributesFromJSONTyped,
    BetaAppLocalizationAttributesToJSON,
} from './BetaAppLocalizationAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface BetaAppLocalization
 */
export interface BetaAppLocalization {
    /**
     * 
     * @type {string}
     * @memberof BetaAppLocalization
     */
    type: BetaAppLocalizationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaAppLocalization
     */
    id: string;
    /**
     * 
     * @type {BetaAppLocalizationAttributes}
     * @memberof BetaAppLocalization
     */
    attributes?: BetaAppLocalizationAttributes;
    /**
     * 
     * @type {AppPreOrderRelationships}
     * @memberof BetaAppLocalization
     */
    relationships?: AppPreOrderRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof BetaAppLocalization
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const BetaAppLocalizationTypeEnum = {
    BetaAppLocalizations: 'betaAppLocalizations'
} as const;
export type BetaAppLocalizationTypeEnum = typeof BetaAppLocalizationTypeEnum[keyof typeof BetaAppLocalizationTypeEnum];


/**
 * Check if a given object implements the BetaAppLocalization interface.
 */
export function instanceOfBetaAppLocalization(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BetaAppLocalizationFromJSON(json: any): BetaAppLocalization {
    return BetaAppLocalizationFromJSONTyped(json, false);
}

export function BetaAppLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppLocalization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BetaAppLocalizationAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppPreOrderRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function BetaAppLocalizationToJSON(value?: BetaAppLocalization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BetaAppLocalizationAttributesToJSON(value.attributes),
        'relationships': AppPreOrderRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

