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
import type { DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInner } from './DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInner';
import {
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInnerFromJSON,
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInnerFromJSONTyped,
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInnerToJSON,
} from './DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInner';

/**
 * 
 * @export
 * @interface DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner
 */
export interface DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner {
    /**
     * 
     * @type {boolean}
     * @memberof DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner
     */
    callStackPerThread?: boolean;
    /**
     * 
     * @type {Array<DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInner>}
     * @memberof DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner
     */
    callStacks?: Array<DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInner>;
}

/**
 * Check if a given object implements the DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner interface.
 */
export function instanceOfDiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerFromJSON(json: any): DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner {
    return DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerFromJSONTyped(json, false);
}

export function DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'callStackPerThread': !exists(json, 'callStackPerThread') ? undefined : json['callStackPerThread'],
        'callStacks': !exists(json, 'callStacks') ? undefined : ((json['callStacks'] as Array<any>).map(DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInnerFromJSON)),
    };
}

export function DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerToJSON(value?: DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'callStackPerThread': value.callStackPerThread,
        'callStacks': value.callStacks === undefined ? undefined : ((value.callStacks as Array<any>).map(DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInnerToJSON)),
    };
}

