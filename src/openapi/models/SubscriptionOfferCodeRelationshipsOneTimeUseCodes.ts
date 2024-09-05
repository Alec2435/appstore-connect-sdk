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
import type { SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner } from './SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner';
import {
    SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerFromJSON,
    SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerFromJSONTyped,
    SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerToJSON,
} from './SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeRelationshipsOneTimeUseCodes
 */
export interface SubscriptionOfferCodeRelationshipsOneTimeUseCodes {
    /**
     * 
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof SubscriptionOfferCodeRelationshipsOneTimeUseCodes
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionOfferCodeRelationshipsOneTimeUseCodes
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner>}
     * @memberof SubscriptionOfferCodeRelationshipsOneTimeUseCodes
     */
    data?: Array<SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner>;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeRelationshipsOneTimeUseCodes interface.
 */
export function instanceOfSubscriptionOfferCodeRelationshipsOneTimeUseCodes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionOfferCodeRelationshipsOneTimeUseCodesFromJSON(json: any): SubscriptionOfferCodeRelationshipsOneTimeUseCodes {
    return SubscriptionOfferCodeRelationshipsOneTimeUseCodesFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeRelationshipsOneTimeUseCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeRelationshipsOneTimeUseCodes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerFromJSON)),
    };
}

export function SubscriptionOfferCodeRelationshipsOneTimeUseCodesToJSON(value?: SubscriptionOfferCodeRelationshipsOneTimeUseCodes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerToJSON)),
    };
}

