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

import {
    AppCustomProductPageLocalizationInlineCreate,
    instanceOfAppCustomProductPageLocalizationInlineCreate,
    AppCustomProductPageLocalizationInlineCreateFromJSON,
    AppCustomProductPageLocalizationInlineCreateFromJSONTyped,
    AppCustomProductPageLocalizationInlineCreateToJSON,
} from './AppCustomProductPageLocalizationInlineCreate';
import {
    AppCustomProductPageVersionInlineCreate,
    instanceOfAppCustomProductPageVersionInlineCreate,
    AppCustomProductPageVersionInlineCreateFromJSON,
    AppCustomProductPageVersionInlineCreateFromJSONTyped,
    AppCustomProductPageVersionInlineCreateToJSON,
} from './AppCustomProductPageVersionInlineCreate';

/**
 * @type AppCustomProductPageCreateRequestIncludedInner
 * 
 * @export
 */
export type AppCustomProductPageCreateRequestIncludedInner = AppCustomProductPageLocalizationInlineCreate | AppCustomProductPageVersionInlineCreate;

export function AppCustomProductPageCreateRequestIncludedInnerFromJSON(json: any): AppCustomProductPageCreateRequestIncludedInner {
    return AppCustomProductPageCreateRequestIncludedInnerFromJSONTyped(json, false);
}

export function AppCustomProductPageCreateRequestIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageCreateRequestIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...AppCustomProductPageLocalizationInlineCreateFromJSONTyped(json, true),
        //TODO!!
        // ...AppCustomProductPageVersionInlineCreateFromJSONTyped(json, true)
    };
}

export function AppCustomProductPageCreateRequestIncludedInnerToJSON(value?: AppCustomProductPageCreateRequestIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfAppCustomProductPageLocalizationInlineCreate(value)) {
        return AppCustomProductPageLocalizationInlineCreateToJSON(value as AppCustomProductPageLocalizationInlineCreate);
    }
    if (instanceOfAppCustomProductPageVersionInlineCreate(value)) {
        return AppCustomProductPageVersionInlineCreateToJSON(value as AppCustomProductPageVersionInlineCreate);
    }

    return {};
}

