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
import type { RoomTypeType } from './RoomTypeType';
import {
    RoomTypeTypeFromJSON,
    RoomTypeTypeFromJSONTyped,
    RoomTypeTypeToJSON,
} from './RoomTypeType';

/**
 * Room Type template details to be changed.
 * @export
 * @interface RoomTypeTemplatesToBeChangedRoomTypeTemplate
 */
export interface RoomTypeTemplatesToBeChangedRoomTypeTemplate {
    /**
     * 
     * @type {RoomTypeType}
     * @memberof RoomTypeTemplatesToBeChangedRoomTypeTemplate
     */
    roomTypeTemplateDetails?: RoomTypeType;
}

/**
 * Check if a given object implements the RoomTypeTemplatesToBeChangedRoomTypeTemplate interface.
 */
export function instanceOfRoomTypeTemplatesToBeChangedRoomTypeTemplate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomTypeTemplatesToBeChangedRoomTypeTemplateFromJSON(json: any): RoomTypeTemplatesToBeChangedRoomTypeTemplate {
    return RoomTypeTemplatesToBeChangedRoomTypeTemplateFromJSONTyped(json, false);
}

export function RoomTypeTemplatesToBeChangedRoomTypeTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomTypeTemplatesToBeChangedRoomTypeTemplate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'roomTypeTemplateDetails': !exists(json, 'roomTypeTemplateDetails') ? undefined : RoomTypeTypeFromJSON(json['roomTypeTemplateDetails']),
    };
}

export function RoomTypeTemplatesToBeChangedRoomTypeTemplateToJSON(value?: RoomTypeTemplatesToBeChangedRoomTypeTemplate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'roomTypeTemplateDetails': RoomTypeTypeToJSON(value.roomTypeTemplateDetails),
    };
}
