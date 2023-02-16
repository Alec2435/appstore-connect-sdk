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
import type { PromotedPurchaseRelationshipsPromotionImagesDataInner } from './PromotedPurchaseRelationshipsPromotionImagesDataInner';
import {
    PromotedPurchaseRelationshipsPromotionImagesDataInnerFromJSON,
    PromotedPurchaseRelationshipsPromotionImagesDataInnerFromJSONTyped,
    PromotedPurchaseRelationshipsPromotionImagesDataInnerToJSON,
} from './PromotedPurchaseRelationshipsPromotionImagesDataInner';

/**
 * 
 * @export
 * @interface PromotedPurchaseRelationshipsPromotionImages
 */
export interface PromotedPurchaseRelationshipsPromotionImages {
    /**
     * 
     * @type {AppCategoryRelationshipsSubcategoriesLinks}
     * @memberof PromotedPurchaseRelationshipsPromotionImages
     */
    links?: AppCategoryRelationshipsSubcategoriesLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof PromotedPurchaseRelationshipsPromotionImages
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<PromotedPurchaseRelationshipsPromotionImagesDataInner>}
     * @memberof PromotedPurchaseRelationshipsPromotionImages
     */
    data?: Array<PromotedPurchaseRelationshipsPromotionImagesDataInner>;
}

/**
 * Check if a given object implements the PromotedPurchaseRelationshipsPromotionImages interface.
 */
export function instanceOfPromotedPurchaseRelationshipsPromotionImages(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PromotedPurchaseRelationshipsPromotionImagesFromJSON(json: any): PromotedPurchaseRelationshipsPromotionImages {
    return PromotedPurchaseRelationshipsPromotionImagesFromJSONTyped(json, false);
}

export function PromotedPurchaseRelationshipsPromotionImagesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseRelationshipsPromotionImages {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppCategoryRelationshipsSubcategoriesLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(PromotedPurchaseRelationshipsPromotionImagesDataInnerFromJSON)),
    };
}

export function PromotedPurchaseRelationshipsPromotionImagesToJSON(value?: PromotedPurchaseRelationshipsPromotionImages | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppCategoryRelationshipsSubcategoriesLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(PromotedPurchaseRelationshipsPromotionImagesDataInnerToJSON)),
    };
}

