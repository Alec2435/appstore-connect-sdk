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


/**
 * 
 * @export
 */
export const CiExecutionProgress = {
    Pending: 'PENDING',
    Running: 'RUNNING',
    Complete: 'COMPLETE'
} as const;
export type CiExecutionProgress = typeof CiExecutionProgress[keyof typeof CiExecutionProgress];


export function CiExecutionProgressFromJSON(json: any): CiExecutionProgress {
    return CiExecutionProgressFromJSONTyped(json, false);
}

export function CiExecutionProgressFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiExecutionProgress {
    return json as CiExecutionProgress;
}

export function CiExecutionProgressToJSON(value?: CiExecutionProgress | null): any {
    return value as any;
}

