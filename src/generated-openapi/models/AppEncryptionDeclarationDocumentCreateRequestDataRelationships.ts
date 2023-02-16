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
import type { AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclaration } from './AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclaration';
import {
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationFromJSON,
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationFromJSONTyped,
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationToJSON,
} from './AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclaration';

/**
 * 
 * @export
 * @interface AppEncryptionDeclarationDocumentCreateRequestDataRelationships
 */
export interface AppEncryptionDeclarationDocumentCreateRequestDataRelationships {
    /**
     * 
     * @type {AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclaration}
     * @memberof AppEncryptionDeclarationDocumentCreateRequestDataRelationships
     */
    appEncryptionDeclaration: AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclaration;
}

/**
 * Check if a given object implements the AppEncryptionDeclarationDocumentCreateRequestDataRelationships interface.
 */
export function instanceOfAppEncryptionDeclarationDocumentCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "appEncryptionDeclaration" in value;

    return isInstance;
}

export function AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsFromJSON(json: any): AppEncryptionDeclarationDocumentCreateRequestDataRelationships {
    return AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationDocumentCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appEncryptionDeclaration': AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationFromJSON(json['appEncryptionDeclaration']),
    };
}

export function AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsToJSON(value?: AppEncryptionDeclarationDocumentCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appEncryptionDeclaration': AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationToJSON(value.appEncryptionDeclaration),
    };
}

