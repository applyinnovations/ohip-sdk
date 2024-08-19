/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { TranslationTextType2000 } from './TranslationTextType2000';
/**
 * Defines Rotation Adjustment Reason Details.
 * @export
 * @interface RoomRotationAdjustmentReasonType
 */
export interface RoomRotationAdjustmentReasonType {
    /**
     * Defines the Rotation Adjustment Reason Code.
     * @type {string}
     * @memberof RoomRotationAdjustmentReasonType
     */
    code?: string;
    /**
     *
     * @type {TranslationTextType2000}
     * @memberof RoomRotationAdjustmentReasonType
     */
    description?: TranslationTextType2000;
    /**
     * Rotation Adjustment Reason sequence number.
     * @type {number}
     * @memberof RoomRotationAdjustmentReasonType
     */
    displayOrder?: number;
}
/**
 * Check if a given object implements the RoomRotationAdjustmentReasonType interface.
 */
export declare function instanceOfRoomRotationAdjustmentReasonType(value: object): boolean;
export declare function RoomRotationAdjustmentReasonTypeFromJSON(json: any): RoomRotationAdjustmentReasonType;
export declare function RoomRotationAdjustmentReasonTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomRotationAdjustmentReasonType;
export declare function RoomRotationAdjustmentReasonTypeToJSON(value?: RoomRotationAdjustmentReasonType | null): any;
