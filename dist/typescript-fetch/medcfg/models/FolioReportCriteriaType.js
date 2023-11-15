"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Content Service
 * Opera Content Service offers capability to manage large content such as images and files.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolioReportCriteriaTypeToJSON = exports.FolioReportCriteriaTypeFromJSONTyped = exports.FolioReportCriteriaTypeFromJSON = exports.instanceOfFolioReportCriteriaType = void 0;
const runtime_1 = require("../runtime");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the FolioReportCriteriaType interface.
 */
function instanceOfFolioReportCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFolioReportCriteriaType = instanceOfFolioReportCriteriaType;
function FolioReportCriteriaTypeFromJSON(json) {
    return FolioReportCriteriaTypeFromJSONTyped(json, false);
}
exports.FolioReportCriteriaTypeFromJSON = FolioReportCriteriaTypeFromJSON;
function FolioReportCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'billNumber': !(0, runtime_1.exists)(json, 'billNumber') ? undefined : json['billNumber'],
        'folioDate': !(0, runtime_1.exists)(json, 'folioDate') ? undefined : json['folioDate'],
        'folioType': !(0, runtime_1.exists)(json, 'folioType') ? undefined : json['folioType'],
        'folioWindowNo': !(0, runtime_1.exists)(json, 'folioWindowNo') ? undefined : json['folioWindowNo'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'referenceCurrency': !(0, runtime_1.exists)(json, 'referenceCurrency') ? undefined : json['referenceCurrency'],
        'reservationId': !(0, runtime_1.exists)(json, 'reservationId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['reservationId']),
    };
}
exports.FolioReportCriteriaTypeFromJSONTyped = FolioReportCriteriaTypeFromJSONTyped;
function FolioReportCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'billNumber': value.billNumber,
        'folioDate': value.folioDate,
        'folioType': value.folioType,
        'folioWindowNo': value.folioWindowNo,
        'hotelId': value.hotelId,
        'referenceCurrency': value.referenceCurrency,
        'reservationId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.reservationId),
    };
}
exports.FolioReportCriteriaTypeToJSON = FolioReportCriteriaTypeToJSON;
