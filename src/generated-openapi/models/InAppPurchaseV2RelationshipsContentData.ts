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
 * @interface InAppPurchaseV2RelationshipsContentData
 */
export interface InAppPurchaseV2RelationshipsContentData {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseV2RelationshipsContentData
     */
    type: InAppPurchaseV2RelationshipsContentDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseV2RelationshipsContentData
     */
    id: string;
}


/**
 * @export
 */
export const InAppPurchaseV2RelationshipsContentDataTypeEnum = {
    InAppPurchaseContents: 'inAppPurchaseContents'
} as const;
export type InAppPurchaseV2RelationshipsContentDataTypeEnum = typeof InAppPurchaseV2RelationshipsContentDataTypeEnum[keyof typeof InAppPurchaseV2RelationshipsContentDataTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseV2RelationshipsContentData interface.
 */
export function instanceOfInAppPurchaseV2RelationshipsContentData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function InAppPurchaseV2RelationshipsContentDataFromJSON(json: any): InAppPurchaseV2RelationshipsContentData {
    return InAppPurchaseV2RelationshipsContentDataFromJSONTyped(json, false);
}

export function InAppPurchaseV2RelationshipsContentDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2RelationshipsContentData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function InAppPurchaseV2RelationshipsContentDataToJSON(value?: InAppPurchaseV2RelationshipsContentData | null): any {
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

