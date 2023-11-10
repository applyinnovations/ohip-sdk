/**
 * OPERA Cloud Export Configuration API
 * APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Enumeration  of Types allowed for Export Mapping
 * @export
 */
export declare const ExportMappingConfigType: {
    readonly TransactionCodes: "TransactionCodes";
    readonly MarketCodes: "MarketCodes";
    readonly PackageCodes: "PackageCodes";
    readonly PaymentMethods: "PaymentMethods";
    readonly ProfileIdTypes: "ProfileIdTypes";
    readonly StatisticCodes: "StatisticCodes";
    readonly PropertyCodes: "PropertyCodes";
    readonly CountryCodes: "CountryCodes";
    readonly NationalityCodes: "NationalityCodes";
    readonly StateCodes: "StateCodes";
    readonly DistrictCodes: "DistrictCodes";
    readonly CityCodes: "CityCodes";
    readonly CountryCities: "CountryCities";
    readonly PurposeOfStayCodes: "PurposeOfStayCodes";
    readonly TransportationCodes: "TransportationCodes";
    readonly CancelReasons: "CancelReasons";
    readonly Gender: "Gender";
    readonly RoomTypes: "RoomTypes";
    readonly IdCountryCodes: "IdCountryCodes";
};
export type ExportMappingConfigType = typeof ExportMappingConfigType[keyof typeof ExportMappingConfigType];
export declare function ExportMappingConfigTypeFromJSON(json: any): ExportMappingConfigType;
export declare function ExportMappingConfigTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportMappingConfigType;
export declare function ExportMappingConfigTypeToJSON(value?: ExportMappingConfigType | null): any;
