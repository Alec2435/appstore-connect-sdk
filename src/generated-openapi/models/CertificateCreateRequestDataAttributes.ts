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
import type { CertificateType } from './CertificateType';
import {
    CertificateTypeFromJSON,
    CertificateTypeFromJSONTyped,
    CertificateTypeToJSON,
} from './CertificateType';

/**
 * 
 * @export
 * @interface CertificateCreateRequestDataAttributes
 */
export interface CertificateCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof CertificateCreateRequestDataAttributes
     */
    csrContent: string;
    /**
     * 
     * @type {CertificateType}
     * @memberof CertificateCreateRequestDataAttributes
     */
    certificateType: CertificateType;
}

/**
 * Check if a given object implements the CertificateCreateRequestDataAttributes interface.
 */
export function instanceOfCertificateCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "csrContent" in value;
    isInstance = isInstance && "certificateType" in value;

    return isInstance;
}

export function CertificateCreateRequestDataAttributesFromJSON(json: any): CertificateCreateRequestDataAttributes {
    return CertificateCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function CertificateCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificateCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'csrContent': json['csrContent'],
        'certificateType': CertificateTypeFromJSON(json['certificateType']),
    };
}

export function CertificateCreateRequestDataAttributesToJSON(value?: CertificateCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'csrContent': value.csrContent,
        'certificateType': CertificateTypeToJSON(value.certificateType),
    };
}

