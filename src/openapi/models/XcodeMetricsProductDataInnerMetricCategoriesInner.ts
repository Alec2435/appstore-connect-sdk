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
import type { MetricCategory } from './MetricCategory';
import {
    MetricCategoryFromJSON,
    MetricCategoryFromJSONTyped,
    MetricCategoryToJSON,
} from './MetricCategory';
import type { XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner } from './XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner';
import {
    XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerFromJSON,
    XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerFromJSONTyped,
    XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerToJSON,
} from './XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner';

/**
 * 
 * @export
 * @interface XcodeMetricsProductDataInnerMetricCategoriesInner
 */
export interface XcodeMetricsProductDataInnerMetricCategoriesInner {
    /**
     * 
     * @type {MetricCategory}
     * @memberof XcodeMetricsProductDataInnerMetricCategoriesInner
     */
    identifier?: MetricCategory;
    /**
     * 
     * @type {Array<XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner>}
     * @memberof XcodeMetricsProductDataInnerMetricCategoriesInner
     */
    metrics?: Array<XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner>;
}

/**
 * Check if a given object implements the XcodeMetricsProductDataInnerMetricCategoriesInner interface.
 */
export function instanceOfXcodeMetricsProductDataInnerMetricCategoriesInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerFromJSON(json: any): XcodeMetricsProductDataInnerMetricCategoriesInner {
    return XcodeMetricsProductDataInnerMetricCategoriesInnerFromJSONTyped(json, false);
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): XcodeMetricsProductDataInnerMetricCategoriesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'identifier': !exists(json, 'identifier') ? undefined : MetricCategoryFromJSON(json['identifier']),
        'metrics': !exists(json, 'metrics') ? undefined : ((json['metrics'] as Array<any>).map(XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerFromJSON)),
    };
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerToJSON(value?: XcodeMetricsProductDataInnerMetricCategoriesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'identifier': MetricCategoryToJSON(value.identifier),
        'metrics': value.metrics === undefined ? undefined : ((value.metrics as Array<any>).map(XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerToJSON)),
    };
}

