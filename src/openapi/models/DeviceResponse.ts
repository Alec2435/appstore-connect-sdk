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
import type { Device } from './Device';
import {
    DeviceFromJSON,
    DeviceFromJSONTyped,
    DeviceToJSON,
} from './Device';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface DeviceResponse
 */
export interface DeviceResponse {
    /**
     * 
     * @type {Device}
     * @memberof DeviceResponse
     */
    data: Device;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof DeviceResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the DeviceResponse interface.
 */
export function instanceOfDeviceResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function DeviceResponseFromJSON(json: any): DeviceResponse {
    return DeviceResponseFromJSONTyped(json, false);
}

export function DeviceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': DeviceFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function DeviceResponseToJSON(value?: DeviceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': DeviceToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

