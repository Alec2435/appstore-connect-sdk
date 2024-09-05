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
import type { AnalyticsReportInstance } from './AnalyticsReportInstance';
import {
    AnalyticsReportInstanceFromJSON,
    AnalyticsReportInstanceFromJSONTyped,
    AnalyticsReportInstanceToJSON,
} from './AnalyticsReportInstance';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface AnalyticsReportInstancesResponse
 */
export interface AnalyticsReportInstancesResponse {
    /**
     * 
     * @type {Array<AnalyticsReportInstance>}
     * @memberof AnalyticsReportInstancesResponse
     */
    data: Array<AnalyticsReportInstance>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AnalyticsReportInstancesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AnalyticsReportInstancesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AnalyticsReportInstancesResponse interface.
 */
export function instanceOfAnalyticsReportInstancesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AnalyticsReportInstancesResponseFromJSON(json: any): AnalyticsReportInstancesResponse {
    return AnalyticsReportInstancesResponseFromJSONTyped(json, false);
}

export function AnalyticsReportInstancesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportInstancesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AnalyticsReportInstanceFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AnalyticsReportInstancesResponseToJSON(value?: AnalyticsReportInstancesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AnalyticsReportInstanceToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

