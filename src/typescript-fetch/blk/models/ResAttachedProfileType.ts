/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ResProfileTypeType } from './ResProfileTypeType';
import {
    ResProfileTypeTypeFromJSON,
    ResProfileTypeTypeFromJSONTyped,
    ResProfileTypeTypeToJSON,
} from './ResProfileTypeType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * 
 * @export
 * @interface ResAttachedProfileType
 */
export interface ResAttachedProfileType {
    /**
     * Attached profile name
     * @type {string}
     * @memberof ResAttachedProfileType
     */
    name?: string;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof ResAttachedProfileType
     */
    profileIdList?: Array<UniqueIDType>;
    /**
     * 
     * @type {ResProfileTypeType}
     * @memberof ResAttachedProfileType
     */
    reservationProfileType?: ResProfileTypeType;
}

/**
 * Check if a given object implements the ResAttachedProfileType interface.
 */
export function instanceOfResAttachedProfileType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResAttachedProfileTypeFromJSON(json: any): ResAttachedProfileType {
    return ResAttachedProfileTypeFromJSONTyped(json, false);
}

export function ResAttachedProfileTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResAttachedProfileType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'profileIdList': !exists(json, 'profileIdList') ? undefined : ((json['profileIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'reservationProfileType': !exists(json, 'reservationProfileType') ? undefined : ResProfileTypeTypeFromJSON(json['reservationProfileType']),
    };
}

export function ResAttachedProfileTypeToJSON(value?: ResAttachedProfileType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'profileIdList': value.profileIdList === undefined ? undefined : ((value.profileIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'reservationProfileType': ResProfileTypeTypeToJSON(value.reservationProfileType),
    };
}

