/**
 * OPERA Cloud Room Rotation Service API
 * APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ReservationRotationPointsAdjustmentReasonType } from './ReservationRotationPointsAdjustmentReasonType';
import type { RotationRuleCalculationRuleType } from './RotationRuleCalculationRuleType';
/**
 * Rotation Points Details of a reservation
 * @export
 * @interface ReservationRotationPointsDetailsType
 */
export interface ReservationRotationPointsDetailsType {
    /**
     * Override the current points and enter a new value for the respective calculation rule up to 5 decimal places.
     * @type {number}
     * @memberof ReservationRotationPointsDetailsType
     */
    adjustPointsTo?: number;
    /**
     *
     * @type {ReservationRotationPointsAdjustmentReasonType}
     * @memberof ReservationRotationPointsDetailsType
     */
    adjustmentReason?: ReservationRotationPointsAdjustmentReasonType;
    /**
     * Current applicable points for the shown calculation rule for the reservation.
     * @type {number}
     * @memberof ReservationRotationPointsDetailsType
     */
    currentPoints?: number;
    /**
     * End date of reservation
     * @type {string}
     * @memberof ReservationRotationPointsDetailsType
     */
    endDate?: string;
    /**
     * Start date of reservation
     * @type {string}
     * @memberof ReservationRotationPointsDetailsType
     */
    startDate?: string;
    /**
     *
     * @type {RotationRuleCalculationRuleType}
     * @memberof ReservationRotationPointsDetailsType
     */
    type?: RotationRuleCalculationRuleType;
}
/**
 * Check if a given object implements the ReservationRotationPointsDetailsType interface.
 */
export declare function instanceOfReservationRotationPointsDetailsType(value: object): boolean;
export declare function ReservationRotationPointsDetailsTypeFromJSON(json: any): ReservationRotationPointsDetailsType;
export declare function ReservationRotationPointsDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationRotationPointsDetailsType;
export declare function ReservationRotationPointsDetailsTypeToJSON(value?: ReservationRotationPointsDetailsType | null): any;
