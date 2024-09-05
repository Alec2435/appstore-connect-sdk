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
 * @interface BetaGroupCreateRequestDataRelationshipsBuilds
 */
export interface BetaGroupCreateRequestDataRelationshipsBuilds {
    /**
     * 
     * @type {Array<AppEncryptionDeclarationRelationshipsBuildsDataInner>}
     * @memberof BetaGroupCreateRequestDataRelationshipsBuilds
     */
    data?: Array<AppEncryptionDeclarationRelationshipsBuildsDataInner>;
}

/**
 * Check if a given object implements the BetaGroupCreateRequestDataRelationshipsBuilds interface.
 */
export function instanceOfBetaGroupCreateRequestDataRelationshipsBuilds(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BetaGroupCreateRequestDataRelationshipsBuildsFromJSON(json: any): BetaGroupCreateRequestDataRelationshipsBuilds {
    return BetaGroupCreateRequestDataRelationshipsBuildsFromJSONTyped(json, false);
}

export function BetaGroupCreateRequestDataRelationshipsBuildsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupCreateRequestDataRelationshipsBuilds {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON)),
    };
}

export function BetaGroupCreateRequestDataRelationshipsBuildsToJSON(value?: BetaGroupCreateRequestDataRelationshipsBuilds | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON)),
    };
}

