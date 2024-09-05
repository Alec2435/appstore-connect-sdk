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
import type { AppEncryptionDeclarationRelationshipsBuildsDataInner } from './AppEncryptionDeclarationRelationshipsBuildsDataInner';
import {
    AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON,
    AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSONTyped,
    AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON,
} from './AppEncryptionDeclarationRelationshipsBuildsDataInner';

/**
 * 
 * @export
 * @interface BetaGroupBuildsLinkagesRequest
 */
export interface BetaGroupBuildsLinkagesRequest {
    /**
     * 
     * @type {Array<AppEncryptionDeclarationRelationshipsBuildsDataInner>}
     * @memberof BetaGroupBuildsLinkagesRequest
     */
    data: Array<AppEncryptionDeclarationRelationshipsBuildsDataInner>;
}

/**
 * Check if a given object implements the BetaGroupBuildsLinkagesRequest interface.
 */
export function instanceOfBetaGroupBuildsLinkagesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BetaGroupBuildsLinkagesRequestFromJSON(json: any): BetaGroupBuildsLinkagesRequest {
    return BetaGroupBuildsLinkagesRequestFromJSONTyped(json, false);
}

export function BetaGroupBuildsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupBuildsLinkagesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON)),
    };
}

export function BetaGroupBuildsLinkagesRequestToJSON(value?: BetaGroupBuildsLinkagesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON)),
    };
}

