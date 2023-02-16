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
import type { CiActionType } from './CiActionType';
import {
    CiActionTypeFromJSON,
    CiActionTypeFromJSONTyped,
    CiActionTypeToJSON,
} from './CiActionType';
import type { CiCompletionStatus } from './CiCompletionStatus';
import {
    CiCompletionStatusFromJSON,
    CiCompletionStatusFromJSONTyped,
    CiCompletionStatusToJSON,
} from './CiCompletionStatus';
import type { CiExecutionProgress } from './CiExecutionProgress';
import {
    CiExecutionProgressFromJSON,
    CiExecutionProgressFromJSONTyped,
    CiExecutionProgressToJSON,
} from './CiExecutionProgress';
import type { CiIssueCounts } from './CiIssueCounts';
import {
    CiIssueCountsFromJSON,
    CiIssueCountsFromJSONTyped,
    CiIssueCountsToJSON,
} from './CiIssueCounts';

/**
 * 
 * @export
 * @interface CiBuildActionAttributes
 */
export interface CiBuildActionAttributes {
    /**
     * 
     * @type {string}
     * @memberof CiBuildActionAttributes
     */
    name?: string;
    /**
     * 
     * @type {CiActionType}
     * @memberof CiBuildActionAttributes
     */
    actionType?: CiActionType;
    /**
     * 
     * @type {Date}
     * @memberof CiBuildActionAttributes
     */
    startedDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CiBuildActionAttributes
     */
    finishedDate?: Date;
    /**
     * 
     * @type {CiIssueCounts}
     * @memberof CiBuildActionAttributes
     */
    issueCounts?: CiIssueCounts;
    /**
     * 
     * @type {CiExecutionProgress}
     * @memberof CiBuildActionAttributes
     */
    executionProgress?: CiExecutionProgress;
    /**
     * 
     * @type {CiCompletionStatus}
     * @memberof CiBuildActionAttributes
     */
    completionStatus?: CiCompletionStatus;
    /**
     * 
     * @type {boolean}
     * @memberof CiBuildActionAttributes
     */
    isRequiredToPass?: boolean;
}

/**
 * Check if a given object implements the CiBuildActionAttributes interface.
 */
export function instanceOfCiBuildActionAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiBuildActionAttributesFromJSON(json: any): CiBuildActionAttributes {
    return CiBuildActionAttributesFromJSONTyped(json, false);
}

export function CiBuildActionAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildActionAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'actionType': !exists(json, 'actionType') ? undefined : CiActionTypeFromJSON(json['actionType']),
        'startedDate': !exists(json, 'startedDate') ? undefined : (new Date(json['startedDate'])),
        'finishedDate': !exists(json, 'finishedDate') ? undefined : (new Date(json['finishedDate'])),
        'issueCounts': !exists(json, 'issueCounts') ? undefined : CiIssueCountsFromJSON(json['issueCounts']),
        'executionProgress': !exists(json, 'executionProgress') ? undefined : CiExecutionProgressFromJSON(json['executionProgress']),
        'completionStatus': !exists(json, 'completionStatus') ? undefined : CiCompletionStatusFromJSON(json['completionStatus']),
        'isRequiredToPass': !exists(json, 'isRequiredToPass') ? undefined : json['isRequiredToPass'],
    };
}

export function CiBuildActionAttributesToJSON(value?: CiBuildActionAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'actionType': CiActionTypeToJSON(value.actionType),
        'startedDate': value.startedDate === undefined ? undefined : (value.startedDate.toISOString()),
        'finishedDate': value.finishedDate === undefined ? undefined : (value.finishedDate.toISOString()),
        'issueCounts': CiIssueCountsToJSON(value.issueCounts),
        'executionProgress': CiExecutionProgressToJSON(value.executionProgress),
        'completionStatus': CiCompletionStatusToJSON(value.completionStatus),
        'isRequiredToPass': value.isRequiredToPass,
    };
}

