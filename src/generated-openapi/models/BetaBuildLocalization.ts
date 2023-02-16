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
import type { BetaAppReviewSubmissionRelationships } from './BetaAppReviewSubmissionRelationships';
import {
    BetaAppReviewSubmissionRelationshipsFromJSON,
    BetaAppReviewSubmissionRelationshipsFromJSONTyped,
    BetaAppReviewSubmissionRelationshipsToJSON,
} from './BetaAppReviewSubmissionRelationships';
import type { BetaBuildLocalizationAttributes } from './BetaBuildLocalizationAttributes';
import {
    BetaBuildLocalizationAttributesFromJSON,
    BetaBuildLocalizationAttributesFromJSONTyped,
    BetaBuildLocalizationAttributesToJSON,
} from './BetaBuildLocalizationAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface BetaBuildLocalization
 */
export interface BetaBuildLocalization {
    /**
     * 
     * @type {string}
     * @memberof BetaBuildLocalization
     */
    type: BetaBuildLocalizationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaBuildLocalization
     */
    id: string;
    /**
     * 
     * @type {BetaBuildLocalizationAttributes}
     * @memberof BetaBuildLocalization
     */
    attributes?: BetaBuildLocalizationAttributes;
    /**
     * 
     * @type {BetaAppReviewSubmissionRelationships}
     * @memberof BetaBuildLocalization
     */
    relationships?: BetaAppReviewSubmissionRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof BetaBuildLocalization
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const BetaBuildLocalizationTypeEnum = {
    BetaBuildLocalizations: 'betaBuildLocalizations'
} as const;
export type BetaBuildLocalizationTypeEnum = typeof BetaBuildLocalizationTypeEnum[keyof typeof BetaBuildLocalizationTypeEnum];


/**
 * Check if a given object implements the BetaBuildLocalization interface.
 */
export function instanceOfBetaBuildLocalization(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BetaBuildLocalizationFromJSON(json: any): BetaBuildLocalization {
    return BetaBuildLocalizationFromJSONTyped(json, false);
}

export function BetaBuildLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaBuildLocalization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BetaBuildLocalizationAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : BetaAppReviewSubmissionRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function BetaBuildLocalizationToJSON(value?: BetaBuildLocalization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BetaBuildLocalizationAttributesToJSON(value.attributes),
        'relationships': BetaAppReviewSubmissionRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

