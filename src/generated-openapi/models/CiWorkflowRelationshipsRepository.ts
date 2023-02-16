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
import type { CiProductRelationshipsPrimaryRepositoriesDataInner } from './CiProductRelationshipsPrimaryRepositoriesDataInner';
import {
    CiProductRelationshipsPrimaryRepositoriesDataInnerFromJSON,
    CiProductRelationshipsPrimaryRepositoriesDataInnerFromJSONTyped,
    CiProductRelationshipsPrimaryRepositoriesDataInnerToJSON,
} from './CiProductRelationshipsPrimaryRepositoriesDataInner';

/**
 * 
 * @export
 * @interface CiWorkflowRelationshipsRepository
 */
export interface CiWorkflowRelationshipsRepository {
    /**
     * 
     * @type {AppCategoryRelationshipsSubcategoriesLinks}
     * @memberof CiWorkflowRelationshipsRepository
     */
    links?: AppCategoryRelationshipsSubcategoriesLinks;
    /**
     * 
     * @type {CiProductRelationshipsPrimaryRepositoriesDataInner}
     * @memberof CiWorkflowRelationshipsRepository
     */
    data?: CiProductRelationshipsPrimaryRepositoriesDataInner;
}

/**
 * Check if a given object implements the CiWorkflowRelationshipsRepository interface.
 */
export function instanceOfCiWorkflowRelationshipsRepository(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiWorkflowRelationshipsRepositoryFromJSON(json: any): CiWorkflowRelationshipsRepository {
    return CiWorkflowRelationshipsRepositoryFromJSONTyped(json, false);
}

export function CiWorkflowRelationshipsRepositoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowRelationshipsRepository {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppCategoryRelationshipsSubcategoriesLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : CiProductRelationshipsPrimaryRepositoriesDataInnerFromJSON(json['data']),
    };
}

export function CiWorkflowRelationshipsRepositoryToJSON(value?: CiWorkflowRelationshipsRepository | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppCategoryRelationshipsSubcategoriesLinksToJSON(value.links),
        'data': CiProductRelationshipsPrimaryRepositoriesDataInnerToJSON(value.data),
    };
}

