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
import type { BlockWashScheduleType } from './BlockWashScheduleType';
import {
    BlockWashScheduleTypeFromJSON,
    BlockWashScheduleTypeFromJSONTyped,
    BlockWashScheduleTypeToJSON,
} from './BlockWashScheduleType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * The criteria based on which the block wash schedules will be created/ changed.
 * @export
 * @interface BlockWashSchedulesInfoType
 */
export interface BlockWashSchedulesInfoType {
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof BlockWashSchedulesInfoType
     */
    blockIdList?: Array<UniqueIDType>;
    /**
     * Wash Schedule attached to the block, which allows to release inventory based on selected wash schedule type.
     * @type {Array<BlockWashScheduleType>}
     * @memberof BlockWashSchedulesInfoType
     */
    blockWashSchedules?: Array<BlockWashScheduleType>;
    /**
     * Hotel Code to which the block wash schedules will be created/ changed.
     * @type {string}
     * @memberof BlockWashSchedulesInfoType
     */
    hotelId?: string;
}

/**
 * Check if a given object implements the BlockWashSchedulesInfoType interface.
 */
export function instanceOfBlockWashSchedulesInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockWashSchedulesInfoTypeFromJSON(json: any): BlockWashSchedulesInfoType {
    return BlockWashSchedulesInfoTypeFromJSONTyped(json, false);
}

export function BlockWashSchedulesInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockWashSchedulesInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockIdList': !exists(json, 'blockIdList') ? undefined : ((json['blockIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'blockWashSchedules': !exists(json, 'blockWashSchedules') ? undefined : ((json['blockWashSchedules'] as Array<any>).map(BlockWashScheduleTypeFromJSON)),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
    };
}

export function BlockWashSchedulesInfoTypeToJSON(value?: BlockWashSchedulesInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockIdList': value.blockIdList === undefined ? undefined : ((value.blockIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'blockWashSchedules': value.blockWashSchedules === undefined ? undefined : ((value.blockWashSchedules as Array<any>).map(BlockWashScheduleTypeToJSON)),
        'hotelId': value.hotelId,
    };
}
