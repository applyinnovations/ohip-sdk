/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Indicates room type is a suite.
 * @export
 * @interface RoomTypeTypeSuite
 */
export interface RoomTypeTypeSuite {
    /**
     * Indicates if room type Room Components may be changed.
     * @type {boolean}
     * @memberof RoomTypeTypeSuite
     */
    editable?: boolean;
    /**
     * Property Value
     * @type {boolean}
     * @memberof RoomTypeTypeSuite
     */
    value?: boolean;
}

/**
 * Check if a given object implements the RoomTypeTypeSuite interface.
 */
export function instanceOfRoomTypeTypeSuite(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomTypeTypeSuiteFromJSON(json: any): RoomTypeTypeSuite {
    return RoomTypeTypeSuiteFromJSONTyped(json, false);
}

export function RoomTypeTypeSuiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomTypeTypeSuite {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'editable': !exists(json, 'editable') ? undefined : json['editable'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function RoomTypeTypeSuiteToJSON(value?: RoomTypeTypeSuite | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'editable': value.editable,
        'value': value.value,
    };
}

