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
/**
 * Contains adjustment reason code and description.
 * @export
 * @interface ReservationRotationPointsAdjustmentReasonType
 */
export interface ReservationRotationPointsAdjustmentReasonType {
    /**
     * Code.
     * @type {string}
     * @memberof ReservationRotationPointsAdjustmentReasonType
     */
    code?: string;
    /**
     * Description of the code.
     * @type {string}
     * @memberof ReservationRotationPointsAdjustmentReasonType
     */
    description?: string;
}
/**
 * Check if a given object implements the ReservationRotationPointsAdjustmentReasonType interface.
 */
export declare function instanceOfReservationRotationPointsAdjustmentReasonType(value: object): boolean;
export declare function ReservationRotationPointsAdjustmentReasonTypeFromJSON(json: any): ReservationRotationPointsAdjustmentReasonType;
export declare function ReservationRotationPointsAdjustmentReasonTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationRotationPointsAdjustmentReasonType;
export declare function ReservationRotationPointsAdjustmentReasonTypeToJSON(value?: ReservationRotationPointsAdjustmentReasonType | null): any;
