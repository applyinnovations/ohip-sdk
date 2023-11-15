/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityTaskType } from './FacilityTaskType';
import {
    FacilityTaskTypeFromJSON,
    FacilityTaskTypeFromJSONTyped,
    FacilityTaskTypeToJSON,
} from './FacilityTaskType';
import type { HousekeepingRoomStatusType } from './HousekeepingRoomStatusType';
import {
    HousekeepingRoomStatusTypeFromJSON,
    HousekeepingRoomStatusTypeFromJSONTyped,
    HousekeepingRoomStatusTypeToJSON,
} from './HousekeepingRoomStatusType';

/**
 * Holds housekeeping turndown service information for the room.
 * @export
 * @interface ResHousekeepingType
 */
export interface ResHousekeepingType {
    /**
     * Expected Start Time for housekeeping task(s).
     * @type {string}
     * @memberof ResHousekeepingType
     */
    expectedServiceTime?: string;
    /**
     * 
     * @type {FacilityTaskType}
     * @memberof ResHousekeepingType
     */
    facilityTaskInfo?: FacilityTaskType;
    /**
     * Turndown instructions for the room.
     * @type {string}
     * @memberof ResHousekeepingType
     */
    instructions?: string;
    /**
     * Indicates if a linen change is necessary.
     * @type {boolean}
     * @memberof ResHousekeepingType
     */
    linenChange?: boolean;
    /**
     * 
     * @type {HousekeepingRoomStatusType}
     * @memberof ResHousekeepingType
     */
    roomStatus?: HousekeepingRoomStatusType;
    /**
     * This is the Turndown room service time.
     * @type {string}
     * @memberof ResHousekeepingType
     */
    serviceTime?: string;
    /**
     * Indicates whether guest wants turndown facility or not.
     * @type {boolean}
     * @memberof ResHousekeepingType
     */
    turndownRequested?: boolean;
}

/**
 * Check if a given object implements the ResHousekeepingType interface.
 */
export function instanceOfResHousekeepingType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResHousekeepingTypeFromJSON(json: any): ResHousekeepingType {
    return ResHousekeepingTypeFromJSONTyped(json, false);
}

export function ResHousekeepingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResHousekeepingType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'expectedServiceTime': !exists(json, 'expectedServiceTime') ? undefined : json['expectedServiceTime'],
        'facilityTaskInfo': !exists(json, 'facilityTaskInfo') ? undefined : FacilityTaskTypeFromJSON(json['facilityTaskInfo']),
        'instructions': !exists(json, 'instructions') ? undefined : json['instructions'],
        'linenChange': !exists(json, 'linenChange') ? undefined : json['linenChange'],
        'roomStatus': !exists(json, 'roomStatus') ? undefined : HousekeepingRoomStatusTypeFromJSON(json['roomStatus']),
        'serviceTime': !exists(json, 'serviceTime') ? undefined : json['serviceTime'],
        'turndownRequested': !exists(json, 'turndownRequested') ? undefined : json['turndownRequested'],
    };
}

export function ResHousekeepingTypeToJSON(value?: ResHousekeepingType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'expectedServiceTime': value.expectedServiceTime,
        'facilityTaskInfo': FacilityTaskTypeToJSON(value.facilityTaskInfo),
        'instructions': value.instructions,
        'linenChange': value.linenChange,
        'roomStatus': HousekeepingRoomStatusTypeToJSON(value.roomStatus),
        'serviceTime': value.serviceTime,
        'turndownRequested': value.turndownRequested,
    };
}

