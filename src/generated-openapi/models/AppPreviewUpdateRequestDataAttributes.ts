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
/**
 * 
 * @export
 * @interface AppPreviewUpdateRequestDataAttributes
 */
export interface AppPreviewUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppPreviewUpdateRequestDataAttributes
     */
    sourceFileChecksum?: string;
    /**
     * 
     * @type {string}
     * @memberof AppPreviewUpdateRequestDataAttributes
     */
    previewFrameTimeCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppPreviewUpdateRequestDataAttributes
     */
    uploaded?: boolean;
}

/**
 * Check if a given object implements the AppPreviewUpdateRequestDataAttributes interface.
 */
export function instanceOfAppPreviewUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppPreviewUpdateRequestDataAttributesFromJSON(json: any): AppPreviewUpdateRequestDataAttributes {
    return AppPreviewUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppPreviewUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sourceFileChecksum': !exists(json, 'sourceFileChecksum') ? undefined : json['sourceFileChecksum'],
        'previewFrameTimeCode': !exists(json, 'previewFrameTimeCode') ? undefined : json['previewFrameTimeCode'],
        'uploaded': !exists(json, 'uploaded') ? undefined : json['uploaded'],
    };
}

export function AppPreviewUpdateRequestDataAttributesToJSON(value?: AppPreviewUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sourceFileChecksum': value.sourceFileChecksum,
        'previewFrameTimeCode': value.previewFrameTimeCode,
        'uploaded': value.uploaded,
    };
}

