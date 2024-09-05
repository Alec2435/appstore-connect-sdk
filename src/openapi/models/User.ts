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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';
import type { UserAttributes } from './UserAttributes';
import {
    UserAttributesFromJSON,
    UserAttributesFromJSONTyped,
    UserAttributesToJSON,
} from './UserAttributes';
import type { UserInvitationRelationships } from './UserInvitationRelationships';
import {
    UserInvitationRelationshipsFromJSON,
    UserInvitationRelationshipsFromJSONTyped,
    UserInvitationRelationshipsToJSON,
} from './UserInvitationRelationships';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    type: UserTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    id: string;
    /**
     * 
     * @type {UserAttributes}
     * @memberof User
     */
    attributes?: UserAttributes;
    /**
     * 
     * @type {UserInvitationRelationships}
     * @memberof User
     */
    relationships?: UserInvitationRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof User
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const UserTypeEnum = {
    Users: 'users'
} as const;
export type UserTypeEnum = typeof UserTypeEnum[keyof typeof UserTypeEnum];


/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : UserAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : UserInvitationRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': UserAttributesToJSON(value.attributes),
        'relationships': UserInvitationRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

