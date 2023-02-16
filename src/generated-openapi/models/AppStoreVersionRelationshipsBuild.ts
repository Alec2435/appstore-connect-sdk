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
import type { AppCategoryRelationshipsSubcategoriesLinks } from './AppCategoryRelationshipsSubcategoriesLinks';
import {
    AppCategoryRelationshipsSubcategoriesLinksFromJSON,
    AppCategoryRelationshipsSubcategoriesLinksFromJSONTyped,
    AppCategoryRelationshipsSubcategoriesLinksToJSON,
} from './AppCategoryRelationshipsSubcategoriesLinks';
import type { AppEncryptionDeclarationRelationshipsBuildsDataInner } from './AppEncryptionDeclarationRelationshipsBuildsDataInner';
import {
    AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON,
    AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSONTyped,
    AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON,
} from './AppEncryptionDeclarationRelationshipsBuildsDataInner';

/**
 * 
 * @export
 * @interface AppStoreVersionRelationshipsBuild
 */
export interface AppStoreVersionRelationshipsBuild {
    /**
     * 
     * @type {AppCategoryRelationshipsSubcategoriesLinks}
     * @memberof AppStoreVersionRelationshipsBuild
     */
    links?: AppCategoryRelationshipsSubcategoriesLinks;
    /**
     * 
     * @type {AppEncryptionDeclarationRelationshipsBuildsDataInner}
     * @memberof AppStoreVersionRelationshipsBuild
     */
    data?: AppEncryptionDeclarationRelationshipsBuildsDataInner;
}

/**
 * Check if a given object implements the AppStoreVersionRelationshipsBuild interface.
 */
export function instanceOfAppStoreVersionRelationshipsBuild(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreVersionRelationshipsBuildFromJSON(json: any): AppStoreVersionRelationshipsBuild {
    return AppStoreVersionRelationshipsBuildFromJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsBuildFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionRelationshipsBuild {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppCategoryRelationshipsSubcategoriesLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON(json['data']),
    };
}

export function AppStoreVersionRelationshipsBuildToJSON(value?: AppStoreVersionRelationshipsBuild | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppCategoryRelationshipsSubcategoriesLinksToJSON(value.links),
        'data': AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON(value.data),
    };
}

