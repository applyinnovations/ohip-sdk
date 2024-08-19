/**
 * OPERA Cloud Export Configuration API
 * APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Enumeration of export file groups.
 * @export
 */
export declare const ExportType: {
    readonly Miscellaneous: "Miscellaneous";
    readonly Memberships: "Memberships";
    readonly Country: "Country";
    readonly Delphi: "Delphi";
    readonly BackOffice: "BackOffice";
    readonly BackOfficeRevenue: "BackOfficeRevenue";
    readonly BackOfficeCityLedger: "BackOfficeCityLedger";
    readonly BackOfficeMarketStatistics: "BackOfficeMarketStatistics";
    readonly BackOfficeDailyStatistics: "BackOfficeDailyStatistics";
    readonly CommissionEft: "CommissionEft";
};
export type ExportType = typeof ExportType[keyof typeof ExportType];
export declare function ExportTypeFromJSON(json: any): ExportType;
export declare function ExportTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportType;
export declare function ExportTypeToJSON(value?: ExportType | null): any;
