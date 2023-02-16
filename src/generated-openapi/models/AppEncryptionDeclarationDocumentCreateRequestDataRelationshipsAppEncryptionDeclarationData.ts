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
 * @interface AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData
 */
export interface AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData {
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData
     */
    type: AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData
     */
    id: string;
}


/**
 * @export
 */
export const AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataTypeEnum = {
    AppEncryptionDeclarations: 'appEncryptionDeclarations'
} as const;
export type AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataTypeEnum = typeof AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataTypeEnum[keyof typeof AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataTypeEnum];


/**
 * Check if a given object implements the AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData interface.
 */
export function instanceOfAppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataFromJSON(json: any): AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData {
    return AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataToJSON(value?: AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData | null): any {
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

