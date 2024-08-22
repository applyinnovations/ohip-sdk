/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Tier Management based on date of transaction
 * @export
 */
export declare const PointsCalculationDateType: {
    readonly ArrivalDate: "ArrivalDate";
    readonly DepartureDate: "DepartureDate";
    readonly PostingDate: "PostingDate";
    readonly TransactionDate: "TransactionDate";
};
export type PointsCalculationDateType = typeof PointsCalculationDateType[keyof typeof PointsCalculationDateType];
export declare function PointsCalculationDateTypeFromJSON(json: any): PointsCalculationDateType;
export declare function PointsCalculationDateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PointsCalculationDateType;
export declare function PointsCalculationDateTypeToJSON(value?: PointsCalculationDateType | null): any;
