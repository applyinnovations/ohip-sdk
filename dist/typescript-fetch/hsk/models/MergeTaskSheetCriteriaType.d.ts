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
/**
 * Criteria to merge task sheets.
 * @export
 * @interface MergeTaskSheetCriteriaType
 */
export interface MergeTaskSheetCriteriaType {
    /**
     * Source task sequence number of the task sheet.
     * @type {number}
     * @memberof MergeTaskSheetCriteriaType
     */
    fromTaskSeqNo?: number;
    /**
     * Break out id of the task sheet.
     * @type {number}
     * @memberof MergeTaskSheetCriteriaType
     */
    hkBreakOutId?: number;
    /**
     * Property code which the task sheets belong.
     * @type {string}
     * @memberof MergeTaskSheetCriteriaType
     */
    hotelId?: string;
    /**
     * Destination task sequence number of the task sheet.
     * @type {number}
     * @memberof MergeTaskSheetCriteriaType
     */
    toTaskSeqNo?: number;
}
/**
 * Check if a given object implements the MergeTaskSheetCriteriaType interface.
 */
export declare function instanceOfMergeTaskSheetCriteriaType(value: object): boolean;
export declare function MergeTaskSheetCriteriaTypeFromJSON(json: any): MergeTaskSheetCriteriaType;
export declare function MergeTaskSheetCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MergeTaskSheetCriteriaType;
export declare function MergeTaskSheetCriteriaTypeToJSON(value?: MergeTaskSheetCriteriaType | null): any;