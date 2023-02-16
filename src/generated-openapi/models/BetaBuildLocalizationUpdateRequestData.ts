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
import type { BetaBuildLocalizationUpdateRequestDataAttributes } from './BetaBuildLocalizationUpdateRequestDataAttributes';
import {
    BetaBuildLocalizationUpdateRequestDataAttributesFromJSON,
    BetaBuildLocalizationUpdateRequestDataAttributesFromJSONTyped,
    BetaBuildLocalizationUpdateRequestDataAttributesToJSON,
} from './BetaBuildLocalizationUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface BetaBuildLocalizationUpdateRequestData
 */
export interface BetaBuildLocalizationUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BetaBuildLocalizationUpdateRequestData
     */
    type: BetaBuildLocalizationUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaBuildLocalizationUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {BetaBuildLocalizationUpdateRequestDataAttributes}
     * @memberof BetaBuildLocalizationUpdateRequestData
     */
    attributes?: BetaBuildLocalizationUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const BetaBuildLocalizationUpdateRequestDataTypeEnum = {
    BetaBuildLocalizations: 'betaBuildLocalizations'
} as const;
export type BetaBuildLocalizationUpdateRequestDataTypeEnum = typeof BetaBuildLocalizationUpdateRequestDataTypeEnum[keyof typeof BetaBuildLocalizationUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the BetaBuildLocalizationUpdateRequestData interface.
 */
export function instanceOfBetaBuildLocalizationUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BetaBuildLocalizationUpdateRequestDataFromJSON(json: any): BetaBuildLocalizationUpdateRequestData {
    return BetaBuildLocalizationUpdateRequestDataFromJSONTyped(json, false);
}

export function BetaBuildLocalizationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaBuildLocalizationUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BetaBuildLocalizationUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function BetaBuildLocalizationUpdateRequestDataToJSON(value?: BetaBuildLocalizationUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BetaBuildLocalizationUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

