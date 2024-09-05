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
import type { AppStoreVersionReleaseRequest } from './AppStoreVersionReleaseRequest';
import {
    AppStoreVersionReleaseRequestFromJSON,
    AppStoreVersionReleaseRequestFromJSONTyped,
    AppStoreVersionReleaseRequestToJSON,
} from './AppStoreVersionReleaseRequest';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppStoreVersionReleaseRequestResponse
 */
export interface AppStoreVersionReleaseRequestResponse {
    /**
     * 
     * @type {AppStoreVersionReleaseRequest}
     * @memberof AppStoreVersionReleaseRequestResponse
     */
    data: AppStoreVersionReleaseRequest;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppStoreVersionReleaseRequestResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppStoreVersionReleaseRequestResponse interface.
 */
export function instanceOfAppStoreVersionReleaseRequestResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppStoreVersionReleaseRequestResponseFromJSON(json: any): AppStoreVersionReleaseRequestResponse {
    return AppStoreVersionReleaseRequestResponseFromJSONTyped(json, false);
}

export function AppStoreVersionReleaseRequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionReleaseRequestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppStoreVersionReleaseRequestFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppStoreVersionReleaseRequestResponseToJSON(value?: AppStoreVersionReleaseRequestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppStoreVersionReleaseRequestToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

