/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TranslationTextType2000 } from './TranslationTextType2000';
import {
    TranslationTextType2000FromJSON,
    TranslationTextType2000FromJSONTyped,
    TranslationTextType2000ToJSON,
} from './TranslationTextType2000';

/**
 * Defines Rotation Override Reason Details.
 * @export
 * @interface RoomRotationOverrideReasonType
 */
export interface RoomRotationOverrideReasonType {
    /**
     * Defines the Rotation Override Reason Code.
     * @type {string}
     * @memberof RoomRotationOverrideReasonType
     */
    code?: string;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof RoomRotationOverrideReasonType
     */
    description?: TranslationTextType2000;
    /**
     * Rotation Override Reason sequence number.
     * @type {number}
     * @memberof RoomRotationOverrideReasonType
     */
    displayOrder?: number;
}

/**
 * Check if a given object implements the RoomRotationOverrideReasonType interface.
 */
export function instanceOfRoomRotationOverrideReasonType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomRotationOverrideReasonTypeFromJSON(json: any): RoomRotationOverrideReasonType {
    return RoomRotationOverrideReasonTypeFromJSONTyped(json, false);
}

export function RoomRotationOverrideReasonTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomRotationOverrideReasonType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : TranslationTextType2000FromJSON(json['description']),
        'displayOrder': !exists(json, 'displayOrder') ? undefined : json['displayOrder'],
    };
}

export function RoomRotationOverrideReasonTypeToJSON(value?: RoomRotationOverrideReasonType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': TranslationTextType2000ToJSON(value.description),
        'displayOrder': value.displayOrder,
    };
}

