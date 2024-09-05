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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { RoutingAppCoverage } from './RoutingAppCoverage';
import {
    RoutingAppCoverageFromJSON,
    RoutingAppCoverageFromJSONTyped,
    RoutingAppCoverageToJSON,
} from './RoutingAppCoverage';

/**
 * 
 * @export
 * @interface RoutingAppCoverageWithoutIncludesResponse
 */
export interface RoutingAppCoverageWithoutIncludesResponse {
    /**
     * 
     * @type {RoutingAppCoverage}
     * @memberof RoutingAppCoverageWithoutIncludesResponse
     */
    data: RoutingAppCoverage;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof RoutingAppCoverageWithoutIncludesResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the RoutingAppCoverageWithoutIncludesResponse interface.
 */
export function instanceOfRoutingAppCoverageWithoutIncludesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function RoutingAppCoverageWithoutIncludesResponseFromJSON(json: any): RoutingAppCoverageWithoutIncludesResponse {
    return RoutingAppCoverageWithoutIncludesResponseFromJSONTyped(json, false);
}

export function RoutingAppCoverageWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingAppCoverageWithoutIncludesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': RoutingAppCoverageFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function RoutingAppCoverageWithoutIncludesResponseToJSON(value?: RoutingAppCoverageWithoutIncludesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': RoutingAppCoverageToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

