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
import type { AlternativeDistributionPackageVersionRelationshipsVariantsLinks } from './AlternativeDistributionPackageVersionRelationshipsVariantsLinks';
import {
    AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON,
    AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSONTyped,
    AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON,
} from './AlternativeDistributionPackageVersionRelationshipsVariantsLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';
import type { SubscriptionRelationshipsPricesDataInner } from './SubscriptionRelationshipsPricesDataInner';
import {
    SubscriptionRelationshipsPricesDataInnerFromJSON,
    SubscriptionRelationshipsPricesDataInnerFromJSONTyped,
    SubscriptionRelationshipsPricesDataInnerToJSON,
} from './SubscriptionRelationshipsPricesDataInner';

/**
 * 
 * @export
 * @interface SubscriptionRelationshipsPrices
 */
export interface SubscriptionRelationshipsPrices {
    /**
     * 
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof SubscriptionRelationshipsPrices
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionRelationshipsPrices
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<SubscriptionRelationshipsPricesDataInner>}
     * @memberof SubscriptionRelationshipsPrices
     */
    data?: Array<SubscriptionRelationshipsPricesDataInner>;
}

/**
 * Check if a given object implements the SubscriptionRelationshipsPrices interface.
 */
export function instanceOfSubscriptionRelationshipsPrices(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionRelationshipsPricesFromJSON(json: any): SubscriptionRelationshipsPrices {
    return SubscriptionRelationshipsPricesFromJSONTyped(json, false);
}

export function SubscriptionRelationshipsPricesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionRelationshipsPrices {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(SubscriptionRelationshipsPricesDataInnerFromJSON)),
    };
}

export function SubscriptionRelationshipsPricesToJSON(value?: SubscriptionRelationshipsPrices | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(SubscriptionRelationshipsPricesDataInnerToJSON)),
    };
}

