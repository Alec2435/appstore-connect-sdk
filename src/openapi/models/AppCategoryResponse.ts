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
import type { AppCategory } from './AppCategory';
import {
    AppCategoryFromJSON,
    AppCategoryFromJSONTyped,
    AppCategoryToJSON,
} from './AppCategory';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppCategoryResponse
 */
export interface AppCategoryResponse {
    /**
     * 
     * @type {AppCategory}
     * @memberof AppCategoryResponse
     */
    data: AppCategory;
    /**
     * 
     * @type {Array<AppCategory>}
     * @memberof AppCategoryResponse
     */
    included?: Array<AppCategory>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppCategoryResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppCategoryResponse interface.
 */
export function instanceOfAppCategoryResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppCategoryResponseFromJSON(json: any): AppCategoryResponse {
    return AppCategoryResponseFromJSONTyped(json, false);
}

export function AppCategoryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCategoryResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppCategoryFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppCategoryFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppCategoryResponseToJSON(value?: AppCategoryResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppCategoryToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppCategoryToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

