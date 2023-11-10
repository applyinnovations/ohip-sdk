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
/**
 * Reminder letters will be generated at the end of each month if user specifies this element
 * @export
 * @interface AREndOfMonthCycleType
 */
export interface AREndOfMonthCycleType {
    /**
     * Reminder letter file name for the reminder letter to be generated at the end of month
     * @type {string}
     * @memberof AREndOfMonthCycleType
     */
    reportName?: string;
    /**
     * Description associated with reminder letter.
     * @type {string}
     * @memberof AREndOfMonthCycleType
     */
    reportNameDesc?: string;
}
/**
 * Check if a given object implements the AREndOfMonthCycleType interface.
 */
export declare function instanceOfAREndOfMonthCycleType(value: object): boolean;
export declare function AREndOfMonthCycleTypeFromJSON(json: any): AREndOfMonthCycleType;
export declare function AREndOfMonthCycleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AREndOfMonthCycleType;
export declare function AREndOfMonthCycleTypeToJSON(value?: AREndOfMonthCycleType | null): any;
