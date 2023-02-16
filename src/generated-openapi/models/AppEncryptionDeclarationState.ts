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


/**
 * 
 * @export
 */
export const AppEncryptionDeclarationState = {
    Created: 'CREATED',
    InReview: 'IN_REVIEW',
    Approved: 'APPROVED',
    Rejected: 'REJECTED',
    Invalid: 'INVALID',
    Expired: 'EXPIRED'
} as const;
export type AppEncryptionDeclarationState = typeof AppEncryptionDeclarationState[keyof typeof AppEncryptionDeclarationState];


export function AppEncryptionDeclarationStateFromJSON(json: any): AppEncryptionDeclarationState {
    return AppEncryptionDeclarationStateFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationState {
    return json as AppEncryptionDeclarationState;
}

export function AppEncryptionDeclarationStateToJSON(value?: AppEncryptionDeclarationState | null): any {
    return value as any;
}

