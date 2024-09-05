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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppStoreVersionBuildLinkageResponse
 */
export interface AppStoreVersionBuildLinkageResponse {
    /**
     * 
     * @type {AppEncryptionDeclarationRelationshipsBuildsDataInner}
     * @memberof AppStoreVersionBuildLinkageResponse
     */
    data: AppEncryptionDeclarationRelationshipsBuildsDataInner;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppStoreVersionBuildLinkageResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppStoreVersionBuildLinkageResponse interface.
 */
export function instanceOfAppStoreVersionBuildLinkageResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppStoreVersionBuildLinkageResponseFromJSON(json: any): AppStoreVersionBuildLinkageResponse {
    return AppStoreVersionBuildLinkageResponseFromJSONTyped(json, false);
}

export function AppStoreVersionBuildLinkageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionBuildLinkageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppStoreVersionBuildLinkageResponseToJSON(value?: AppStoreVersionBuildLinkageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

