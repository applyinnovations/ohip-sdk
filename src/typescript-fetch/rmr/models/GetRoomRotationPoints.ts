/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Service API
 * APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { RoomRotationPointsInfoType } from './RoomRotationPointsInfoType';
import {
    RoomRotationPointsInfoTypeFromJSON,
    RoomRotationPointsInfoTypeFromJSONTyped,
    RoomRotationPointsInfoTypeToJSON,
} from './RoomRotationPointsInfoType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface GetRoomRotationPoints
 */
export interface GetRoomRotationPoints {
    /**
     * Indicates whether the balance forward is active
     * @type {boolean}
     * @memberof GetRoomRotationPoints
     */
    balanceForwardActive?: boolean;
    /**
     * Indicates whether the user is allowed to edit balance forward points
     * @type {boolean}
     * @memberof GetRoomRotationPoints
     */
    balanceForwardEditable?: boolean;
    /**
     * Indicates number of records the API has returned actually as per the API request criteria.
     * @type {number}
     * @memberof GetRoomRotationPoints
     */
    count?: number;
    /**
     * End date of the Room Rotation Period
     * @type {string}
     * @memberof GetRoomRotationPoints
     */
    endRoomRotationPeriodDate?: string;
    /**
     * Indicates whether there are more records available to be returned as per the API request criteria or not.
     * @type {boolean}
     * @memberof GetRoomRotationPoints
     */
    hasMore?: boolean;
    /**
     * Indicates number of records the API can return as per the API request limit sent.
     * @type {number}
     * @memberof GetRoomRotationPoints
     */
    limit?: number;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof GetRoomRotationPoints
     */
    links?: Array<InstanceLink>;
    /**
     * Indicates the index of the next applicable set(page).
     * @type {number}
     * @memberof GetRoomRotationPoints
     */
    offset?: number;
    /**
     * Indicates whether Out of Order/ Out of Service Room Rotation Points is active
     * @type {boolean}
     * @memberof GetRoomRotationPoints
     */
    outOfOrderServiceActive?: boolean;
    /**
     * List of Room Rotation Points Information.
     * @type {Array<RoomRotationPointsInfoType>}
     * @memberof GetRoomRotationPoints
     */
    roomRotationPointsInfoList?: Array<RoomRotationPointsInfoType>;
    /**
     * Start date of the Room Rotation Period
     * @type {string}
     * @memberof GetRoomRotationPoints
     */
    startRoomRotationPeriodDate?: string;
    /**
     * Indicates total number of records available that can be returned as per the API request criteria.
     * @type {number}
     * @memberof GetRoomRotationPoints
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof GetRoomRotationPoints
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the GetRoomRotationPoints interface.
 */
export function instanceOfGetRoomRotationPoints(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetRoomRotationPointsFromJSON(json: any): GetRoomRotationPoints {
    return GetRoomRotationPointsFromJSONTyped(json, false);
}

export function GetRoomRotationPointsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRoomRotationPoints {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'balanceForwardActive': !exists(json, 'balanceForwardActive') ? undefined : json['balanceForwardActive'],
        'balanceForwardEditable': !exists(json, 'balanceForwardEditable') ? undefined : json['balanceForwardEditable'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'endRoomRotationPeriodDate': !exists(json, 'endRoomRotationPeriodDate') ? undefined : json['endRoomRotationPeriodDate'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'outOfOrderServiceActive': !exists(json, 'outOfOrderServiceActive') ? undefined : json['outOfOrderServiceActive'],
        'roomRotationPointsInfoList': !exists(json, 'roomRotationPointsInfoList') ? undefined : ((json['roomRotationPointsInfoList'] as Array<any>).map(RoomRotationPointsInfoTypeFromJSON)),
        'startRoomRotationPeriodDate': !exists(json, 'startRoomRotationPeriodDate') ? undefined : json['startRoomRotationPeriodDate'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function GetRoomRotationPointsToJSON(value?: GetRoomRotationPoints | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'balanceForwardActive': value.balanceForwardActive,
        'balanceForwardEditable': value.balanceForwardEditable,
        'count': value.count,
        'endRoomRotationPeriodDate': value.endRoomRotationPeriodDate,
        'hasMore': value.hasMore,
        'limit': value.limit,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'offset': value.offset,
        'outOfOrderServiceActive': value.outOfOrderServiceActive,
        'roomRotationPointsInfoList': value.roomRotationPointsInfoList === undefined ? undefined : ((value.roomRotationPointsInfoList as Array<any>).map(RoomRotationPointsInfoTypeToJSON)),
        'startRoomRotationPeriodDate': value.startRoomRotationPeriodDate,
        'totalResults': value.totalResults,
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

