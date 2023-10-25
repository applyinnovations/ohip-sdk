/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';

/**
 * This is a room type and its tasks count.
 * @export
 * @interface RoomTypeTaskType
 */
export interface RoomTypeTaskType {
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof RoomTypeTaskType
     */
    roomType?: CodeDescriptionType;
    /**
     * This is a room type and its tasks count.
     * @type {number}
     * @memberof RoomTypeTaskType
     */
    tasksQuantity?: number;
}

/**
 * Check if a given object implements the RoomTypeTaskType interface.
 */
export function instanceOfRoomTypeTaskType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomTypeTaskTypeFromJSON(json: any): RoomTypeTaskType {
    return RoomTypeTaskTypeFromJSONTyped(json, false);
}

export function RoomTypeTaskTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomTypeTaskType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'roomType': !exists(json, 'roomType') ? undefined : CodeDescriptionTypeFromJSON(json['roomType']),
        'tasksQuantity': !exists(json, 'tasksQuantity') ? undefined : json['tasksQuantity'],
    };
}

export function RoomTypeTaskTypeToJSON(value?: RoomTypeTaskType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'roomType': CodeDescriptionTypeToJSON(value.roomType),
        'tasksQuantity': value.tasksQuantity,
    };
}

