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
import type { DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner } from './DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner';
import {
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerFromJSON,
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerFromJSONTyped,
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerToJSON,
} from './DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner';
import type { DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaData } from './DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaData';
import {
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataFromJSON,
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataFromJSONTyped,
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataToJSON,
} from './DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaData';

/**
 * 
 * @export
 * @interface DiagnosticLogsProductDataInnerDiagnosticLogsInner
 */
export interface DiagnosticLogsProductDataInnerDiagnosticLogsInner {
    /**
     * 
     * @type {Array<DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner>}
     * @memberof DiagnosticLogsProductDataInnerDiagnosticLogsInner
     */
    callStackTree?: Array<DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner>;
    /**
     * 
     * @type {DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaData}
     * @memberof DiagnosticLogsProductDataInnerDiagnosticLogsInner
     */
    diagnosticMetaData?: DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaData;
}

/**
 * Check if a given object implements the DiagnosticLogsProductDataInnerDiagnosticLogsInner interface.
 */
export function instanceOfDiagnosticLogsProductDataInnerDiagnosticLogsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiagnosticLogsProductDataInnerDiagnosticLogsInnerFromJSON(json: any): DiagnosticLogsProductDataInnerDiagnosticLogsInner {
    return DiagnosticLogsProductDataInnerDiagnosticLogsInnerFromJSONTyped(json, false);
}

export function DiagnosticLogsProductDataInnerDiagnosticLogsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosticLogsProductDataInnerDiagnosticLogsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'callStackTree': !exists(json, 'callStackTree') ? undefined : ((json['callStackTree'] as Array<any>).map(DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerFromJSON)),
        'diagnosticMetaData': !exists(json, 'diagnosticMetaData') ? undefined : DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataFromJSON(json['diagnosticMetaData']),
    };
}

export function DiagnosticLogsProductDataInnerDiagnosticLogsInnerToJSON(value?: DiagnosticLogsProductDataInnerDiagnosticLogsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'callStackTree': value.callStackTree === undefined ? undefined : ((value.callStackTree as Array<any>).map(DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerToJSON)),
        'diagnosticMetaData': DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataToJSON(value.diagnosticMetaData),
    };
}

