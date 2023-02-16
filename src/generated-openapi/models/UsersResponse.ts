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
import type { App } from './App';
import {
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
} from './App';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface UsersResponse
 */
export interface UsersResponse {
    /**
     * 
     * @type {Array<User>}
     * @memberof UsersResponse
     */
    data: Array<User>;
    /**
     * 
     * @type {Array<App>}
     * @memberof UsersResponse
     */
    included?: Array<App>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof UsersResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof UsersResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the UsersResponse interface.
 */
export function instanceOfUsersResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function UsersResponseFromJSON(json: any): UsersResponse {
    return UsersResponseFromJSONTyped(json, false);
}

export function UsersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(UserFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function UsersResponseToJSON(value?: UsersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(UserToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

