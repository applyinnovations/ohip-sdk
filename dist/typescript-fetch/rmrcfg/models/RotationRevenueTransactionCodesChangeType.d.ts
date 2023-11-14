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
import type { TransactionCodesType } from './TransactionCodesType';
/**
 * Two collections of transaction codes for a resort. One collection lists codes to be changed to Rotation Revenue transaction codes and the other to be changed to non Rotation Revenue Transaction codes.
 * @export
 * @interface RotationRevenueTransactionCodesChangeType
 */
export interface RotationRevenueTransactionCodesChangeType {
    /**
     * Hotel code of revenue transaction code.
     * @type {string}
     * @memberof RotationRevenueTransactionCodesChangeType
     */
    hotelId?: string;
    /**
     *
     * @type {TransactionCodesType}
     * @memberof RotationRevenueTransactionCodesChangeType
     */
    nonRotationRevenueTransactionCodes?: TransactionCodesType;
    /**
     *
     * @type {TransactionCodesType}
     * @memberof RotationRevenueTransactionCodesChangeType
     */
    rotationRevenueTransactionCodes?: TransactionCodesType;
}
/**
 * Check if a given object implements the RotationRevenueTransactionCodesChangeType interface.
 */
export declare function instanceOfRotationRevenueTransactionCodesChangeType(value: object): boolean;
export declare function RotationRevenueTransactionCodesChangeTypeFromJSON(json: any): RotationRevenueTransactionCodesChangeType;
export declare function RotationRevenueTransactionCodesChangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RotationRevenueTransactionCodesChangeType;
export declare function RotationRevenueTransactionCodesChangeTypeToJSON(value?: RotationRevenueTransactionCodesChangeType | null): any;