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
/**
 * 
 * @export
 * @interface AppPricePointV2RelationshipsTerritoryData
 */
export interface AppPricePointV2RelationshipsTerritoryData {
    /**
     * 
     * @type {string}
     * @memberof AppPricePointV2RelationshipsTerritoryData
     */
    type: AppPricePointV2RelationshipsTerritoryDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppPricePointV2RelationshipsTerritoryData
     */
    id: string;
}


/**
 * @export
 */
export const AppPricePointV2RelationshipsTerritoryDataTypeEnum = {
    Territories: 'territories'
} as const;
export type AppPricePointV2RelationshipsTerritoryDataTypeEnum = typeof AppPricePointV2RelationshipsTerritoryDataTypeEnum[keyof typeof AppPricePointV2RelationshipsTerritoryDataTypeEnum];


/**
 * Check if a given object implements the AppPricePointV2RelationshipsTerritoryData interface.
 */
export function instanceOfAppPricePointV2RelationshipsTerritoryData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppPricePointV2RelationshipsTerritoryDataFromJSON(json: any): AppPricePointV2RelationshipsTerritoryData {
    return AppPricePointV2RelationshipsTerritoryDataFromJSONTyped(json, false);
}

export function AppPricePointV2RelationshipsTerritoryDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPricePointV2RelationshipsTerritoryData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppPricePointV2RelationshipsTerritoryDataToJSON(value?: AppPricePointV2RelationshipsTerritoryData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

