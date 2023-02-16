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
import type { CustomerReviewResponseV1Attributes } from './CustomerReviewResponseV1Attributes';
import {
    CustomerReviewResponseV1AttributesFromJSON,
    CustomerReviewResponseV1AttributesFromJSONTyped,
    CustomerReviewResponseV1AttributesToJSON,
} from './CustomerReviewResponseV1Attributes';
import type { CustomerReviewResponseV1Relationships } from './CustomerReviewResponseV1Relationships';
import {
    CustomerReviewResponseV1RelationshipsFromJSON,
    CustomerReviewResponseV1RelationshipsFromJSONTyped,
    CustomerReviewResponseV1RelationshipsToJSON,
} from './CustomerReviewResponseV1Relationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface CustomerReviewResponseV1
 */
export interface CustomerReviewResponseV1 {
    /**
     * 
     * @type {string}
     * @memberof CustomerReviewResponseV1
     */
    type: CustomerReviewResponseV1TypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CustomerReviewResponseV1
     */
    id: string;
    /**
     * 
     * @type {CustomerReviewResponseV1Attributes}
     * @memberof CustomerReviewResponseV1
     */
    attributes?: CustomerReviewResponseV1Attributes;
    /**
     * 
     * @type {CustomerReviewResponseV1Relationships}
     * @memberof CustomerReviewResponseV1
     */
    relationships?: CustomerReviewResponseV1Relationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof CustomerReviewResponseV1
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const CustomerReviewResponseV1TypeEnum = {
    CustomerReviewResponses: 'customerReviewResponses'
} as const;
export type CustomerReviewResponseV1TypeEnum = typeof CustomerReviewResponseV1TypeEnum[keyof typeof CustomerReviewResponseV1TypeEnum];


/**
 * Check if a given object implements the CustomerReviewResponseV1 interface.
 */
export function instanceOfCustomerReviewResponseV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function CustomerReviewResponseV1FromJSON(json: any): CustomerReviewResponseV1 {
    return CustomerReviewResponseV1FromJSONTyped(json, false);
}

export function CustomerReviewResponseV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewResponseV1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : CustomerReviewResponseV1AttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : CustomerReviewResponseV1RelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function CustomerReviewResponseV1ToJSON(value?: CustomerReviewResponseV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': CustomerReviewResponseV1AttributesToJSON(value.attributes),
        'relationships': CustomerReviewResponseV1RelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

