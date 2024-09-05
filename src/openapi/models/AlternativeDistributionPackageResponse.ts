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
import type { AlternativeDistributionPackage } from './AlternativeDistributionPackage';
import {
    AlternativeDistributionPackageFromJSON,
    AlternativeDistributionPackageFromJSONTyped,
    AlternativeDistributionPackageToJSON,
} from './AlternativeDistributionPackage';
import type { AlternativeDistributionPackageVersion } from './AlternativeDistributionPackageVersion';
import {
    AlternativeDistributionPackageVersionFromJSON,
    AlternativeDistributionPackageVersionFromJSONTyped,
    AlternativeDistributionPackageVersionToJSON,
} from './AlternativeDistributionPackageVersion';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AlternativeDistributionPackageResponse
 */
export interface AlternativeDistributionPackageResponse {
    /**
     * 
     * @type {AlternativeDistributionPackage}
     * @memberof AlternativeDistributionPackageResponse
     */
    data: AlternativeDistributionPackage;
    /**
     * 
     * @type {Array<AlternativeDistributionPackageVersion>}
     * @memberof AlternativeDistributionPackageResponse
     */
    included?: Array<AlternativeDistributionPackageVersion>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AlternativeDistributionPackageResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AlternativeDistributionPackageResponse interface.
 */
export function instanceOfAlternativeDistributionPackageResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AlternativeDistributionPackageResponseFromJSON(json: any): AlternativeDistributionPackageResponse {
    return AlternativeDistributionPackageResponseFromJSONTyped(json, false);
}

export function AlternativeDistributionPackageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AlternativeDistributionPackageFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AlternativeDistributionPackageVersionFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AlternativeDistributionPackageResponseToJSON(value?: AlternativeDistributionPackageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AlternativeDistributionPackageToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AlternativeDistributionPackageVersionToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

