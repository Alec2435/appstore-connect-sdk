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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { EndUserLicenseAgreement } from './EndUserLicenseAgreement';
import {
    EndUserLicenseAgreementFromJSON,
    EndUserLicenseAgreementFromJSONTyped,
    EndUserLicenseAgreementToJSON,
} from './EndUserLicenseAgreement';
import type { EndUserLicenseAgreementResponseIncludedInner } from './EndUserLicenseAgreementResponseIncludedInner';
import {
    EndUserLicenseAgreementResponseIncludedInnerFromJSON,
    EndUserLicenseAgreementResponseIncludedInnerFromJSONTyped,
    EndUserLicenseAgreementResponseIncludedInnerToJSON,
} from './EndUserLicenseAgreementResponseIncludedInner';

/**
 * 
 * @export
 * @interface EndUserLicenseAgreementResponse
 */
export interface EndUserLicenseAgreementResponse {
    /**
     * 
     * @type {EndUserLicenseAgreement}
     * @memberof EndUserLicenseAgreementResponse
     */
    data: EndUserLicenseAgreement;
    /**
     * 
     * @type {Array<EndUserLicenseAgreementResponseIncludedInner>}
     * @memberof EndUserLicenseAgreementResponse
     */
    included?: Array<EndUserLicenseAgreementResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof EndUserLicenseAgreementResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the EndUserLicenseAgreementResponse interface.
 */
export function instanceOfEndUserLicenseAgreementResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function EndUserLicenseAgreementResponseFromJSON(json: any): EndUserLicenseAgreementResponse {
    return EndUserLicenseAgreementResponseFromJSONTyped(json, false);
}

export function EndUserLicenseAgreementResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLicenseAgreementResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': EndUserLicenseAgreementFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(EndUserLicenseAgreementResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function EndUserLicenseAgreementResponseToJSON(value?: EndUserLicenseAgreementResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': EndUserLicenseAgreementToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(EndUserLicenseAgreementResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

