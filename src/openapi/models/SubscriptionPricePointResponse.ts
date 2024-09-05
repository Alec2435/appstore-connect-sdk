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
import type { SubscriptionPricePoint } from './SubscriptionPricePoint';
import {
    SubscriptionPricePointFromJSON,
    SubscriptionPricePointFromJSONTyped,
    SubscriptionPricePointToJSON,
} from './SubscriptionPricePoint';
import type { Territory } from './Territory';
import {
    TerritoryFromJSON,
    TerritoryFromJSONTyped,
    TerritoryToJSON,
} from './Territory';

/**
 * 
 * @export
 * @interface SubscriptionPricePointResponse
 */
export interface SubscriptionPricePointResponse {
    /**
     * 
     * @type {SubscriptionPricePoint}
     * @memberof SubscriptionPricePointResponse
     */
    data: SubscriptionPricePoint;
    /**
     * 
     * @type {Array<Territory>}
     * @memberof SubscriptionPricePointResponse
     */
    included?: Array<Territory>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof SubscriptionPricePointResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the SubscriptionPricePointResponse interface.
 */
export function instanceOfSubscriptionPricePointResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionPricePointResponseFromJSON(json: any): SubscriptionPricePointResponse {
    return SubscriptionPricePointResponseFromJSONTyped(json, false);
}

export function SubscriptionPricePointResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPricePointResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionPricePointFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(TerritoryFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function SubscriptionPricePointResponseToJSON(value?: SubscriptionPricePointResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionPricePointToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(TerritoryToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

