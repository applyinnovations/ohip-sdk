"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportMappingConfigTypeToJSON = exports.ExportMappingConfigTypeFromJSONTyped = exports.ExportMappingConfigTypeFromJSON = exports.ExportMappingConfigType = void 0;
/**
 * Enumeration  of Types allowed for Export Mapping
 * @export
 */
exports.ExportMappingConfigType = {
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
};
function ExportMappingConfigTypeFromJSON(json) {
    return ExportMappingConfigTypeFromJSONTyped(json, false);
}
exports.ExportMappingConfigTypeFromJSON = ExportMappingConfigTypeFromJSON;
function ExportMappingConfigTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.ExportMappingConfigTypeFromJSONTyped = ExportMappingConfigTypeFromJSONTyped;
function ExportMappingConfigTypeToJSON(value) {
    return value;
}
exports.ExportMappingConfigTypeToJSON = ExportMappingConfigTypeToJSON;
