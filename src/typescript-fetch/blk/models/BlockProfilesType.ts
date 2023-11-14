/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlockProfileTypeType } from './BlockProfileTypeType';
import {
    BlockProfileTypeTypeFromJSON,
    BlockProfileTypeTypeFromJSONTyped,
    BlockProfileTypeTypeToJSON,
} from './BlockProfileTypeType';
import type { ProfileType } from './ProfileType';
import {
    ProfileTypeFromJSON,
    ProfileTypeFromJSONTyped,
    ProfileTypeToJSON,
} from './ProfileType';
import type { UniqueIDListType } from './UniqueIDListType';
import {
    UniqueIDListTypeFromJSON,
    UniqueIDListTypeFromJSONTyped,
    UniqueIDListTypeToJSON,
} from './UniqueIDListType';

/**
 * A collection of Profile objects or Unique IDs of Profiles.
 * @export
 * @interface BlockProfilesType
 */
export interface BlockProfilesType {
    /**
     * 
     * @type {BlockProfileTypeType}
     * @memberof BlockProfilesType
     */
    blockProfileType?: BlockProfileTypeType;
    /**
     * Indicates if profile is printable to customer reports by default.
     * @type {boolean}
     * @memberof BlockProfilesType
     */
    defaultPrint?: boolean;
    /**
     * Is this profile attached to block is primary?
     * @type {boolean}
     * @memberof BlockProfilesType
     */
    primary?: boolean;
    /**
     * 
     * @type {ProfileType}
     * @memberof BlockProfilesType
     */
    profile?: ProfileType;
    /**
     * 
     * @type {UniqueIDListType}
     * @memberof BlockProfilesType
     */
    profileIdList?: UniqueIDListType;
}

/**
 * Check if a given object implements the BlockProfilesType interface.
 */
export function instanceOfBlockProfilesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockProfilesTypeFromJSON(json: any): BlockProfilesType {
    return BlockProfilesTypeFromJSONTyped(json, false);
}

export function BlockProfilesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockProfilesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockProfileType': !exists(json, 'blockProfileType') ? undefined : BlockProfileTypeTypeFromJSON(json['blockProfileType']),
        'defaultPrint': !exists(json, 'defaultPrint') ? undefined : json['defaultPrint'],
        'primary': !exists(json, 'primary') ? undefined : json['primary'],
        'profile': !exists(json, 'profile') ? undefined : ProfileTypeFromJSON(json['profile']),
        'profileIdList': !exists(json, 'profileIdList') ? undefined : UniqueIDListTypeFromJSON(json['profileIdList']),
    };
}

export function BlockProfilesTypeToJSON(value?: BlockProfilesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockProfileType': BlockProfileTypeTypeToJSON(value.blockProfileType),
        'defaultPrint': value.defaultPrint,
        'primary': value.primary,
        'profile': ProfileTypeToJSON(value.profile),
        'profileIdList': UniqueIDListTypeToJSON(value.profileIdList),
    };
}
