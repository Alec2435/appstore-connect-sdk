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
    App,
    instanceOfApp,
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
} from './App';
import {
    AppPriceTier,
    instanceOfAppPriceTier,
    AppPriceTierFromJSON,
    AppPriceTierFromJSONTyped,
    AppPriceTierToJSON,
} from './AppPriceTier';

/**
 * @type AppPricesResponseIncludedInner
 * 
 * @export
 */
export type AppPricesResponseIncludedInner = App | AppPriceTier;

export function AppPricesResponseIncludedInnerFromJSON(json: any): AppPricesResponseIncludedInner {
    return AppPricesResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppPricesResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPricesResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...AppFromJSONTyped(json, true), ...AppPriceTierFromJSONTyped(json, true) };
}

export function AppPricesResponseIncludedInnerToJSON(value?: AppPricesResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfApp(value)) {
        return AppToJSON(value as App);
    }
    if (instanceOfAppPriceTier(value)) {
        return AppPriceTierToJSON(value as AppPriceTier);
    }

    return {};
}

