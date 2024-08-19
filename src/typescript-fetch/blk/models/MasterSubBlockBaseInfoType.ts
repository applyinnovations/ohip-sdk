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
import type { BlockClassificationType } from './BlockClassificationType';
import {
    BlockClassificationTypeFromJSON,
    BlockClassificationTypeFromJSONTyped,
    BlockClassificationTypeToJSON,
} from './BlockClassificationType';
import type { BookingStatusType } from './BookingStatusType';
import {
    BookingStatusTypeFromJSON,
    BookingStatusTypeFromJSONTyped,
    BookingStatusTypeToJSON,
} from './BookingStatusType';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * 
 * @export
 * @interface MasterSubBlockBaseInfoType
 */
export interface MasterSubBlockBaseInfoType {
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof MasterSubBlockBaseInfoType
     */
    blockIdList?: Array<UniqueIDType>;
    /**
     * Block description.
     * @type {string}
     * @memberof MasterSubBlockBaseInfoType
     */
    blockName?: string;
    /**
     * 
     * @type {BookingStatusType}
     * @memberof MasterSubBlockBaseInfoType
     */
    blockStatus?: BookingStatusType;
    /**
     * 
     * @type {BlockClassificationType}
     * @memberof MasterSubBlockBaseInfoType
     */
    blockType?: BlockClassificationType;
    /**
     * 
     * @type {BookingStatusType}
     * @memberof MasterSubBlockBaseInfoType
     */
    cateringStatus?: BookingStatusType;
    /**
     * Master/Sub Block's Hotel Code.
     * @type {string}
     * @memberof MasterSubBlockBaseInfoType
     */
    hotelId?: string;
    /**
     * Pertain value for blocked rooms for a block.
     * @type {number}
     * @memberof MasterSubBlockBaseInfoType
     */
    roomNights?: number;
    /**
     * Pertain value for reserved rooms for a block.
     * @type {number}
     * @memberof MasterSubBlockBaseInfoType
     */
    roomNightsPickedup?: number;
    /**
     * Indicates to check if Block Dates to be in sync.
     * @type {boolean}
     * @memberof MasterSubBlockBaseInfoType
     */
    syncBlockDates?: boolean;
    /**
     * Indicates if Block Status Details to be in sync.
     * @type {boolean}
     * @memberof MasterSubBlockBaseInfoType
     */
    syncBlockStatusDetails?: boolean;
    /**
     * Indicates whether other BlockDetails to be in Sync.
     * @type {boolean}
     * @memberof MasterSubBlockBaseInfoType
     */
    syncOtherBlockDetails?: boolean;
    /**
     * Indicates if packages to be in Sync.
     * @type {boolean}
     * @memberof MasterSubBlockBaseInfoType
     */
    syncPackages?: boolean;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof MasterSubBlockBaseInfoType
     */
    timeSpan?: TimeSpanType;
}

/**
 * Check if a given object implements the MasterSubBlockBaseInfoType interface.
 */
export function instanceOfMasterSubBlockBaseInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MasterSubBlockBaseInfoTypeFromJSON(json: any): MasterSubBlockBaseInfoType {
    return MasterSubBlockBaseInfoTypeFromJSONTyped(json, false);
}

export function MasterSubBlockBaseInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MasterSubBlockBaseInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockIdList': !exists(json, 'blockIdList') ? undefined : ((json['blockIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'blockName': !exists(json, 'blockName') ? undefined : json['blockName'],
        'blockStatus': !exists(json, 'blockStatus') ? undefined : BookingStatusTypeFromJSON(json['blockStatus']),
        'blockType': !exists(json, 'blockType') ? undefined : BlockClassificationTypeFromJSON(json['blockType']),
        'cateringStatus': !exists(json, 'cateringStatus') ? undefined : BookingStatusTypeFromJSON(json['cateringStatus']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'roomNights': !exists(json, 'roomNights') ? undefined : json['roomNights'],
        'roomNightsPickedup': !exists(json, 'roomNightsPickedup') ? undefined : json['roomNightsPickedup'],
        'syncBlockDates': !exists(json, 'syncBlockDates') ? undefined : json['syncBlockDates'],
        'syncBlockStatusDetails': !exists(json, 'syncBlockStatusDetails') ? undefined : json['syncBlockStatusDetails'],
        'syncOtherBlockDetails': !exists(json, 'syncOtherBlockDetails') ? undefined : json['syncOtherBlockDetails'],
        'syncPackages': !exists(json, 'syncPackages') ? undefined : json['syncPackages'],
        'timeSpan': !exists(json, 'timeSpan') ? undefined : TimeSpanTypeFromJSON(json['timeSpan']),
    };
}

export function MasterSubBlockBaseInfoTypeToJSON(value?: MasterSubBlockBaseInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockIdList': value.blockIdList === undefined ? undefined : ((value.blockIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'blockName': value.blockName,
        'blockStatus': BookingStatusTypeToJSON(value.blockStatus),
        'blockType': BlockClassificationTypeToJSON(value.blockType),
        'cateringStatus': BookingStatusTypeToJSON(value.cateringStatus),
        'hotelId': value.hotelId,
        'roomNights': value.roomNights,
        'roomNightsPickedup': value.roomNightsPickedup,
        'syncBlockDates': value.syncBlockDates,
        'syncBlockStatusDetails': value.syncBlockStatusDetails,
        'syncOtherBlockDetails': value.syncOtherBlockDetails,
        'syncPackages': value.syncPackages,
        'timeSpan': TimeSpanTypeToJSON(value.timeSpan),
    };
}

