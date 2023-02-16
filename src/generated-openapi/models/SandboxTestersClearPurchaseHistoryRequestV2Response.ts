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
import type { SandboxTestersClearPurchaseHistoryRequestV2 } from './SandboxTestersClearPurchaseHistoryRequestV2';
import {
    SandboxTestersClearPurchaseHistoryRequestV2FromJSON,
    SandboxTestersClearPurchaseHistoryRequestV2FromJSONTyped,
    SandboxTestersClearPurchaseHistoryRequestV2ToJSON,
} from './SandboxTestersClearPurchaseHistoryRequestV2';

/**
 * 
 * @export
 * @interface SandboxTestersClearPurchaseHistoryRequestV2Response
 */
export interface SandboxTestersClearPurchaseHistoryRequestV2Response {
    /**
     * 
     * @type {SandboxTestersClearPurchaseHistoryRequestV2}
     * @memberof SandboxTestersClearPurchaseHistoryRequestV2Response
     */
    data: SandboxTestersClearPurchaseHistoryRequestV2;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof SandboxTestersClearPurchaseHistoryRequestV2Response
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the SandboxTestersClearPurchaseHistoryRequestV2Response interface.
 */
export function instanceOfSandboxTestersClearPurchaseHistoryRequestV2Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SandboxTestersClearPurchaseHistoryRequestV2ResponseFromJSON(json: any): SandboxTestersClearPurchaseHistoryRequestV2Response {
    return SandboxTestersClearPurchaseHistoryRequestV2ResponseFromJSONTyped(json, false);
}

export function SandboxTestersClearPurchaseHistoryRequestV2ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTestersClearPurchaseHistoryRequestV2Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SandboxTestersClearPurchaseHistoryRequestV2FromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function SandboxTestersClearPurchaseHistoryRequestV2ResponseToJSON(value?: SandboxTestersClearPurchaseHistoryRequestV2Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SandboxTestersClearPurchaseHistoryRequestV2ToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

