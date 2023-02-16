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
import type { ImageAsset } from './ImageAsset';
import {
    ImageAssetFromJSON,
    ImageAssetFromJSONTyped,
    ImageAssetToJSON,
} from './ImageAsset';
import type { UploadOperation } from './UploadOperation';
import {
    UploadOperationFromJSON,
    UploadOperationFromJSONTyped,
    UploadOperationToJSON,
} from './UploadOperation';

/**
 * 
 * @export
 * @interface PromotedPurchaseImageAttributes
 */
export interface PromotedPurchaseImageAttributes {
    /**
     * 
     * @type {number}
     * @memberof PromotedPurchaseImageAttributes
     */
    fileSize?: number;
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseImageAttributes
     */
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseImageAttributes
     */
    sourceFileChecksum?: string;
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseImageAttributes
     */
    assetToken?: string;
    /**
     * 
     * @type {ImageAsset}
     * @memberof PromotedPurchaseImageAttributes
     */
    imageAsset?: ImageAsset;
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseImageAttributes
     */
    assetType?: string;
    /**
     * 
     * @type {Array<UploadOperation>}
     * @memberof PromotedPurchaseImageAttributes
     */
    uploadOperations?: Array<UploadOperation>;
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseImageAttributes
     */
    state?: PromotedPurchaseImageAttributesStateEnum;
}


/**
 * @export
 */
export const PromotedPurchaseImageAttributesStateEnum = {
    AwaitingUpload: 'AWAITING_UPLOAD',
    UploadComplete: 'UPLOAD_COMPLETE',
    Failed: 'FAILED',
    PrepareForSubmission: 'PREPARE_FOR_SUBMISSION',
    WaitingForReview: 'WAITING_FOR_REVIEW',
    Approved: 'APPROVED',
    Rejected: 'REJECTED'
} as const;
export type PromotedPurchaseImageAttributesStateEnum = typeof PromotedPurchaseImageAttributesStateEnum[keyof typeof PromotedPurchaseImageAttributesStateEnum];


/**
 * Check if a given object implements the PromotedPurchaseImageAttributes interface.
 */
export function instanceOfPromotedPurchaseImageAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PromotedPurchaseImageAttributesFromJSON(json: any): PromotedPurchaseImageAttributes {
    return PromotedPurchaseImageAttributesFromJSONTyped(json, false);
}

export function PromotedPurchaseImageAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImageAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fileSize': !exists(json, 'fileSize') ? undefined : json['fileSize'],
        'fileName': !exists(json, 'fileName') ? undefined : json['fileName'],
        'sourceFileChecksum': !exists(json, 'sourceFileChecksum') ? undefined : json['sourceFileChecksum'],
        'assetToken': !exists(json, 'assetToken') ? undefined : json['assetToken'],
        'imageAsset': !exists(json, 'imageAsset') ? undefined : ImageAssetFromJSON(json['imageAsset']),
        'assetType': !exists(json, 'assetType') ? undefined : json['assetType'],
        'uploadOperations': !exists(json, 'uploadOperations') ? undefined : ((json['uploadOperations'] as Array<any>).map(UploadOperationFromJSON)),
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function PromotedPurchaseImageAttributesToJSON(value?: PromotedPurchaseImageAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fileSize': value.fileSize,
        'fileName': value.fileName,
        'sourceFileChecksum': value.sourceFileChecksum,
        'assetToken': value.assetToken,
        'imageAsset': ImageAssetToJSON(value.imageAsset),
        'assetType': value.assetType,
        'uploadOperations': value.uploadOperations === undefined ? undefined : ((value.uploadOperations as Array<any>).map(UploadOperationToJSON)),
        'state': value.state,
    };
}

