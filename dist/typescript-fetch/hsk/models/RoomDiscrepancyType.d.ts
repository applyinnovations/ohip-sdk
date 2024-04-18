/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Simple type for discrepant room status instructions to be used in requests for fetching housekeeping and front office room discrepancy. Valid values are Sleep, Skip, Person Discrepancy, Due Out Only.
 * @export
 */
export declare const RoomDiscrepancyType: {
    readonly Sleep: "Sleep";
    readonly Skip: "Skip";
    readonly PersonDiscrepancy: "PersonDiscrepancy";
};
export type RoomDiscrepancyType = typeof RoomDiscrepancyType[keyof typeof RoomDiscrepancyType];
export declare function RoomDiscrepancyTypeFromJSON(json: any): RoomDiscrepancyType;
export declare function RoomDiscrepancyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomDiscrepancyType;
export declare function RoomDiscrepancyTypeToJSON(value?: RoomDiscrepancyType | null): any;