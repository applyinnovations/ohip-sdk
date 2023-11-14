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
import type { CompleteRoomRepairCriteriaRoomRangeList } from './CompleteRoomRepairCriteriaRoomRangeList';
import {
    CompleteRoomRepairCriteriaRoomRangeListFromJSON,
    CompleteRoomRepairCriteriaRoomRangeListFromJSONTyped,
    CompleteRoomRepairCriteriaRoomRangeListToJSON,
} from './CompleteRoomRepairCriteriaRoomRangeList';
import type { CompleteRoomRepairCriteriaRoomRepairByRoomNumberInner } from './CompleteRoomRepairCriteriaRoomRepairByRoomNumberInner';
import {
    CompleteRoomRepairCriteriaRoomRepairByRoomNumberInnerFromJSON,
    CompleteRoomRepairCriteriaRoomRepairByRoomNumberInnerFromJSONTyped,
    CompleteRoomRepairCriteriaRoomRepairByRoomNumberInnerToJSON,
} from './CompleteRoomRepairCriteriaRoomRepairByRoomNumberInner';

/**
 * Criteria to complete the out of order status of a room and bring the room back into rotation. A list or range of rooms can be provided.
 * @export
 * @interface CompleteRoomRepairCriteria
 */
export interface CompleteRoomRepairCriteria {
    /**
     * 
     * @type {CompleteRoomRepairCriteriaRoomRangeList}
     * @memberof CompleteRoomRepairCriteria
     */
    roomRangeList?: CompleteRoomRepairCriteriaRoomRangeList;
    /**
     * Completing an existing OO/OS room by room number.
     * @type {Array<CompleteRoomRepairCriteriaRoomRepairByRoomNumberInner>}
     * @memberof CompleteRoomRepairCriteria
     */
    roomRepairByRoomNumber?: Array<CompleteRoomRepairCriteriaRoomRepairByRoomNumberInner>;
}

/**
 * Check if a given object implements the CompleteRoomRepairCriteria interface.
 */
export function instanceOfCompleteRoomRepairCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CompleteRoomRepairCriteriaFromJSON(json: any): CompleteRoomRepairCriteria {
    return CompleteRoomRepairCriteriaFromJSONTyped(json, false);
}

export function CompleteRoomRepairCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompleteRoomRepairCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'roomRangeList': !exists(json, 'roomRangeList') ? undefined : CompleteRoomRepairCriteriaRoomRangeListFromJSON(json['roomRangeList']),
        'roomRepairByRoomNumber': !exists(json, 'roomRepairByRoomNumber') ? undefined : ((json['roomRepairByRoomNumber'] as Array<any>).map(CompleteRoomRepairCriteriaRoomRepairByRoomNumberInnerFromJSON)),
    };
}

export function CompleteRoomRepairCriteriaToJSON(value?: CompleteRoomRepairCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'roomRangeList': CompleteRoomRepairCriteriaRoomRangeListToJSON(value.roomRangeList),
        'roomRepairByRoomNumber': value.roomRepairByRoomNumber === undefined ? undefined : ((value.roomRepairByRoomNumber as Array<any>).map(CompleteRoomRepairCriteriaRoomRepairByRoomNumberInnerToJSON)),
    };
}
