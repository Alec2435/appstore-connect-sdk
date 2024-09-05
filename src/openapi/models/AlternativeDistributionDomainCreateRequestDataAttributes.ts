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
/**
 * 
 * @export
 * @interface AlternativeDistributionDomainCreateRequestDataAttributes
 */
export interface AlternativeDistributionDomainCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AlternativeDistributionDomainCreateRequestDataAttributes
     */
    domain: string;
    /**
     * 
     * @type {string}
     * @memberof AlternativeDistributionDomainCreateRequestDataAttributes
     */
    referenceName: string;
}

/**
 * Check if a given object implements the AlternativeDistributionDomainCreateRequestDataAttributes interface.
 */
export function instanceOfAlternativeDistributionDomainCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "domain" in value;
    isInstance = isInstance && "referenceName" in value;

    return isInstance;
}

export function AlternativeDistributionDomainCreateRequestDataAttributesFromJSON(json: any): AlternativeDistributionDomainCreateRequestDataAttributes {
    return AlternativeDistributionDomainCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AlternativeDistributionDomainCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionDomainCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'domain': json['domain'],
        'referenceName': json['referenceName'],
    };
}

export function AlternativeDistributionDomainCreateRequestDataAttributesToJSON(value?: AlternativeDistributionDomainCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'domain': value.domain,
        'referenceName': value.referenceName,
    };
}

