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
import type { AppPriceTierRelationshipsPricePoints } from './AppPriceTierRelationshipsPricePoints';
import {
    AppPriceTierRelationshipsPricePointsFromJSON,
    AppPriceTierRelationshipsPricePointsFromJSONTyped,
    AppPriceTierRelationshipsPricePointsToJSON,
} from './AppPriceTierRelationshipsPricePoints';

/**
 * 
 * @export
 * @interface AppPriceTierRelationships
 */
export interface AppPriceTierRelationships {
    /**
     * 
     * @type {AppPriceTierRelationshipsPricePoints}
     * @memberof AppPriceTierRelationships
     * @deprecated
     */
    pricePoints?: AppPriceTierRelationshipsPricePoints;
}

/**
 * Check if a given object implements the AppPriceTierRelationships interface.
 */
export function instanceOfAppPriceTierRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppPriceTierRelationshipsFromJSON(json: any): AppPriceTierRelationships {
    return AppPriceTierRelationshipsFromJSONTyped(json, false);
}

export function AppPriceTierRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceTierRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pricePoints': !exists(json, 'pricePoints') ? undefined : AppPriceTierRelationshipsPricePointsFromJSON(json['pricePoints']),
    };
}

export function AppPriceTierRelationshipsToJSON(value?: AppPriceTierRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pricePoints': AppPriceTierRelationshipsPricePointsToJSON(value.pricePoints),
    };
}

