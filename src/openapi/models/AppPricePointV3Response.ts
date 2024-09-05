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
import type { AppAvailabilityResponseIncludedInner } from './AppAvailabilityResponseIncludedInner';
import {
    AppAvailabilityResponseIncludedInnerFromJSON,
    AppAvailabilityResponseIncludedInnerFromJSONTyped,
    AppAvailabilityResponseIncludedInnerToJSON,
} from './AppAvailabilityResponseIncludedInner';
import type { AppPricePointV3 } from './AppPricePointV3';
import {
    AppPricePointV3FromJSON,
    AppPricePointV3FromJSONTyped,
    AppPricePointV3ToJSON,
} from './AppPricePointV3';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppPricePointV3Response
 */
export interface AppPricePointV3Response {
    /**
     * 
     * @type {AppPricePointV3}
     * @memberof AppPricePointV3Response
     */
    data: AppPricePointV3;
    /**
     * 
     * @type {Array<AppAvailabilityResponseIncludedInner>}
     * @memberof AppPricePointV3Response
     */
    included?: Array<AppAvailabilityResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppPricePointV3Response
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppPricePointV3Response interface.
 */
export function instanceOfAppPricePointV3Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppPricePointV3ResponseFromJSON(json: any): AppPricePointV3Response {
    return AppPricePointV3ResponseFromJSONTyped(json, false);
}

export function AppPricePointV3ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPricePointV3Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppPricePointV3FromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppAvailabilityResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppPricePointV3ResponseToJSON(value?: AppPricePointV3Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppPricePointV3ToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppAvailabilityResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

