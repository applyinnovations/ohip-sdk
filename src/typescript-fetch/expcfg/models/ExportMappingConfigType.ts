/* tslint:disable */
/* eslint-disable */
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
 * Enumeration  of Types allowed for Export Mapping
 * @export
 */
export const ExportMappingConfigType = {
    TransactionCodes: 'TransactionCodes',
    MarketCodes: 'MarketCodes',
    PackageCodes: 'PackageCodes',
    PaymentMethods: 'PaymentMethods',
    ProfileIdTypes: 'ProfileIdTypes',
    StatisticCodes: 'StatisticCodes',
    PropertyCodes: 'PropertyCodes',
    CountryCodes: 'CountryCodes',
    NationalityCodes: 'NationalityCodes',
    StateCodes: 'StateCodes',
    DistrictCodes: 'DistrictCodes',
    CityCodes: 'CityCodes',
    CountryCities: 'CountryCities',
    PurposeOfStayCodes: 'PurposeOfStayCodes',
    TransportationCodes: 'TransportationCodes',
    CancelReasons: 'CancelReasons',
    Gender: 'Gender',
    RoomTypes: 'RoomTypes',
    IdCountryCodes: 'IdCountryCodes'
} as const;
export type ExportMappingConfigType = typeof ExportMappingConfigType[keyof typeof ExportMappingConfigType];


export function ExportMappingConfigTypeFromJSON(json: any): ExportMappingConfigType {
    return ExportMappingConfigTypeFromJSONTyped(json, false);
}

export function ExportMappingConfigTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportMappingConfigType {
    return json as ExportMappingConfigType;
}

export function ExportMappingConfigTypeToJSON(value?: ExportMappingConfigType | null): any {
    return value as any;
}

