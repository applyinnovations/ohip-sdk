/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { RotationPeriodFrequencyType } from './RotationPeriodFrequencyType';
/**
 * Rotation Period Frequency and Start Date Details for a Property
 * @export
 * @interface RotationPeriodType
 */
export interface RotationPeriodType {
    /**
     * Represents if Rotation points/rules recalculation job should be re-triggered.
     * @type {boolean}
     * @memberof RotationPeriodType
     */
    forceRecalculate?: boolean;
    /**
     * Hotel code for Room Rotation Period.
     * @type {string}
     * @memberof RotationPeriodType
     */
    hotelId?: string;
    /**
     *
     * @type {RotationPeriodFrequencyType}
     * @memberof RotationPeriodType
     */
    periodFrequency?: RotationPeriodFrequencyType;
    /**
     * Represents Effective start date for the Room Rotation Period Setup.
     * @type {string}
     * @memberof RotationPeriodType
     */
    startDate?: string;
}
/**
 * Check if a given object implements the RotationPeriodType interface.
 */
export declare function instanceOfRotationPeriodType(value: object): boolean;
export declare function RotationPeriodTypeFromJSON(json: any): RotationPeriodType;
export declare function RotationPeriodTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RotationPeriodType;
export declare function RotationPeriodTypeToJSON(value?: RotationPeriodType | null): any;
