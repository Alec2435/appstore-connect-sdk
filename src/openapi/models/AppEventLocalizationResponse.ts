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
import type { AppEventLocalization } from './AppEventLocalization';
import {
    AppEventLocalizationFromJSON,
    AppEventLocalizationFromJSONTyped,
    AppEventLocalizationToJSON,
} from './AppEventLocalization';
import type { AppEventLocalizationsResponseIncludedInner } from './AppEventLocalizationsResponseIncludedInner';
import {
    AppEventLocalizationsResponseIncludedInnerFromJSON,
    AppEventLocalizationsResponseIncludedInnerFromJSONTyped,
    AppEventLocalizationsResponseIncludedInnerToJSON,
} from './AppEventLocalizationsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppEventLocalizationResponse
 */
export interface AppEventLocalizationResponse {
    /**
     * 
     * @type {AppEventLocalization}
     * @memberof AppEventLocalizationResponse
     */
    data: AppEventLocalization;
    /**
     * 
     * @type {Array<AppEventLocalizationsResponseIncludedInner>}
     * @memberof AppEventLocalizationResponse
     */
    included?: Array<AppEventLocalizationsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppEventLocalizationResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppEventLocalizationResponse interface.
 */
export function instanceOfAppEventLocalizationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppEventLocalizationResponseFromJSON(json: any): AppEventLocalizationResponse {
    return AppEventLocalizationResponseFromJSONTyped(json, false);
}

export function AppEventLocalizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppEventLocalizationFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppEventLocalizationsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppEventLocalizationResponseToJSON(value?: AppEventLocalizationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppEventLocalizationToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppEventLocalizationsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

