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
import type { AppCategoryRelationshipsSubcategoriesLinks } from './AppCategoryRelationshipsSubcategoriesLinks';
import {
    AppCategoryRelationshipsSubcategoriesLinksFromJSON,
    AppCategoryRelationshipsSubcategoriesLinksFromJSONTyped,
    AppCategoryRelationshipsSubcategoriesLinksToJSON,
} from './AppCategoryRelationshipsSubcategoriesLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';
import type { SubscriptionPromotionalOfferRelationshipsPricesDataInner } from './SubscriptionPromotionalOfferRelationshipsPricesDataInner';
import {
    SubscriptionPromotionalOfferRelationshipsPricesDataInnerFromJSON,
    SubscriptionPromotionalOfferRelationshipsPricesDataInnerFromJSONTyped,
    SubscriptionPromotionalOfferRelationshipsPricesDataInnerToJSON,
} from './SubscriptionPromotionalOfferRelationshipsPricesDataInner';

/**
 * 
 * @export
 * @interface SubscriptionPromotionalOfferRelationshipsPrices
 */
export interface SubscriptionPromotionalOfferRelationshipsPrices {
    /**
     * 
     * @type {AppCategoryRelationshipsSubcategoriesLinks}
     * @memberof SubscriptionPromotionalOfferRelationshipsPrices
     */
    links?: AppCategoryRelationshipsSubcategoriesLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionPromotionalOfferRelationshipsPrices
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<SubscriptionPromotionalOfferRelationshipsPricesDataInner>}
     * @memberof SubscriptionPromotionalOfferRelationshipsPrices
     */
    data?: Array<SubscriptionPromotionalOfferRelationshipsPricesDataInner>;
}

/**
 * Check if a given object implements the SubscriptionPromotionalOfferRelationshipsPrices interface.
 */
export function instanceOfSubscriptionPromotionalOfferRelationshipsPrices(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionPromotionalOfferRelationshipsPricesFromJSON(json: any): SubscriptionPromotionalOfferRelationshipsPrices {
    return SubscriptionPromotionalOfferRelationshipsPricesFromJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferRelationshipsPricesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferRelationshipsPrices {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppCategoryRelationshipsSubcategoriesLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(SubscriptionPromotionalOfferRelationshipsPricesDataInnerFromJSON)),
    };
}

export function SubscriptionPromotionalOfferRelationshipsPricesToJSON(value?: SubscriptionPromotionalOfferRelationshipsPrices | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppCategoryRelationshipsSubcategoriesLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(SubscriptionPromotionalOfferRelationshipsPricesDataInnerToJSON)),
    };
}

