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
/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleUpdateRequestDataAttributes
 */
export interface GameCenterMatchmakingRuleUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleUpdateRequestDataAttributes
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleUpdateRequestDataAttributes
     */
    expression?: string;
    /**
     * 
     * @type {number}
     * @memberof GameCenterMatchmakingRuleUpdateRequestDataAttributes
     */
    weight?: number;
}

/**
 * Check if a given object implements the GameCenterMatchmakingRuleUpdateRequestDataAttributes interface.
 */
export function instanceOfGameCenterMatchmakingRuleUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterMatchmakingRuleUpdateRequestDataAttributesFromJSON(json: any): GameCenterMatchmakingRuleUpdateRequestDataAttributes {
    return GameCenterMatchmakingRuleUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'expression': !exists(json, 'expression') ? undefined : json['expression'],
        'weight': !exists(json, 'weight') ? undefined : json['weight'],
    };
}

export function GameCenterMatchmakingRuleUpdateRequestDataAttributesToJSON(value?: GameCenterMatchmakingRuleUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'expression': value.expression,
        'weight': value.weight,
    };
}

