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
import type { AppClipAdvancedExperienceImageUpdateRequestDataAttributes } from './AppClipAdvancedExperienceImageUpdateRequestDataAttributes';
import {
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON,
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSONTyped,
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON,
} from './AppClipAdvancedExperienceImageUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppEncryptionDeclarationDocumentUpdateRequestData
 */
export interface AppEncryptionDeclarationDocumentUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclarationDocumentUpdateRequestData
     */
    type: AppEncryptionDeclarationDocumentUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclarationDocumentUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageUpdateRequestDataAttributes}
     * @memberof AppEncryptionDeclarationDocumentUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const AppEncryptionDeclarationDocumentUpdateRequestDataTypeEnum = {
    AppEncryptionDeclarationDocuments: 'appEncryptionDeclarationDocuments'
} as const;
export type AppEncryptionDeclarationDocumentUpdateRequestDataTypeEnum = typeof AppEncryptionDeclarationDocumentUpdateRequestDataTypeEnum[keyof typeof AppEncryptionDeclarationDocumentUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppEncryptionDeclarationDocumentUpdateRequestData interface.
 */
export function instanceOfAppEncryptionDeclarationDocumentUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppEncryptionDeclarationDocumentUpdateRequestDataFromJSON(json: any): AppEncryptionDeclarationDocumentUpdateRequestData {
    return AppEncryptionDeclarationDocumentUpdateRequestDataFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationDocumentUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationDocumentUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function AppEncryptionDeclarationDocumentUpdateRequestDataToJSON(value?: AppEncryptionDeclarationDocumentUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

