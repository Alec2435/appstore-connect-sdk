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
import type { AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData } from './AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData';
import {
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataFromJSON,
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataFromJSONTyped,
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataToJSON,
} from './AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface AppRelationshipsAppStoreVersions
 */
export interface AppRelationshipsAppStoreVersions {
    /**
     * 
     * @type {AppCategoryRelationshipsSubcategoriesLinks}
     * @memberof AppRelationshipsAppStoreVersions
     */
    links?: AppCategoryRelationshipsSubcategoriesLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppRelationshipsAppStoreVersions
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData>}
     * @memberof AppRelationshipsAppStoreVersions
     */
    data?: Array<AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData>;
}

/**
 * Check if a given object implements the AppRelationshipsAppStoreVersions interface.
 */
export function instanceOfAppRelationshipsAppStoreVersions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppRelationshipsAppStoreVersionsFromJSON(json: any): AppRelationshipsAppStoreVersions {
    return AppRelationshipsAppStoreVersionsFromJSONTyped(json, false);
}

export function AppRelationshipsAppStoreVersionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsAppStoreVersions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppCategoryRelationshipsSubcategoriesLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataFromJSON)),
    };
}

export function AppRelationshipsAppStoreVersionsToJSON(value?: AppRelationshipsAppStoreVersions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppCategoryRelationshipsSubcategoriesLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataToJSON)),
    };
}

