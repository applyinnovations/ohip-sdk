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
import type { ReservationDetailsType } from './ReservationDetailsType';
import {
    ReservationDetailsTypeFromJSON,
    ReservationDetailsTypeFromJSONTyped,
    ReservationDetailsTypeToJSON,
} from './ReservationDetailsType';
import type { ReservationRotationPointsAdjustmentLogListType } from './ReservationRotationPointsAdjustmentLogListType';
import {
    ReservationRotationPointsAdjustmentLogListTypeFromJSON,
    ReservationRotationPointsAdjustmentLogListTypeFromJSONTyped,
    ReservationRotationPointsAdjustmentLogListTypeToJSON,
} from './ReservationRotationPointsAdjustmentLogListType';
import type { ReservationRotationPointsDetailsListType } from './ReservationRotationPointsDetailsListType';
import {
    ReservationRotationPointsDetailsListTypeFromJSON,
    ReservationRotationPointsDetailsListTypeFromJSONTyped,
    ReservationRotationPointsDetailsListTypeToJSON,
} from './ReservationRotationPointsDetailsListType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for Reservation Rotation Points Details.
 * @export
 * @interface GetReservationRotationPointsDetails
 */
export interface GetReservationRotationPointsDetails {
    /**
     * 
     * @type {ReservationRotationPointsAdjustmentLogListType}
     * @memberof GetReservationRotationPointsDetails
     */
    adjustmentLogList?: ReservationRotationPointsAdjustmentLogListType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof GetReservationRotationPointsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {ReservationDetailsType}
     * @memberof GetReservationRotationPointsDetails
     */
    reservationDetails?: ReservationDetailsType;
    /**
     * 
     * @type {ReservationRotationPointsDetailsListType}
     * @memberof GetReservationRotationPointsDetails
     */
    reservationRotationPointsDetailsList?: ReservationRotationPointsDetailsListType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof GetReservationRotationPointsDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the GetReservationRotationPointsDetails interface.
 */
export function instanceOfGetReservationRotationPointsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetReservationRotationPointsDetailsFromJSON(json: any): GetReservationRotationPointsDetails {
    return GetReservationRotationPointsDetailsFromJSONTyped(json, false);
}

export function GetReservationRotationPointsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetReservationRotationPointsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adjustmentLogList': !exists(json, 'adjustmentLogList') ? undefined : ReservationRotationPointsAdjustmentLogListTypeFromJSON(json['adjustmentLogList']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'reservationDetails': !exists(json, 'reservationDetails') ? undefined : ReservationDetailsTypeFromJSON(json['reservationDetails']),
        'reservationRotationPointsDetailsList': !exists(json, 'reservationRotationPointsDetailsList') ? undefined : ReservationRotationPointsDetailsListTypeFromJSON(json['reservationRotationPointsDetailsList']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function GetReservationRotationPointsDetailsToJSON(value?: GetReservationRotationPointsDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adjustmentLogList': ReservationRotationPointsAdjustmentLogListTypeToJSON(value.adjustmentLogList),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'reservationDetails': ReservationDetailsTypeToJSON(value.reservationDetails),
        'reservationRotationPointsDetailsList': ReservationRotationPointsDetailsListTypeToJSON(value.reservationRotationPointsDetailsList),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

