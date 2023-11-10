"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportingDocumentTypeToJSON = exports.SupportingDocumentTypeFromJSONTyped = exports.SupportingDocumentTypeFromJSON = exports.instanceOfSupportingDocumentType = void 0;
const runtime_1 = require("../runtime");
const FiscalSupportingDocumentCategory_1 = require("./FiscalSupportingDocumentCategory");
const FiscalSupportingDocumentType_1 = require("./FiscalSupportingDocumentType");
/**
 * Check if a given object implements the SupportingDocumentType interface.
 */
function instanceOfSupportingDocumentType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSupportingDocumentType = instanceOfSupportingDocumentType;
function SupportingDocumentTypeFromJSON(json) {
    return SupportingDocumentTypeFromJSONTyped(json, false);
}
exports.SupportingDocumentTypeFromJSON = SupportingDocumentTypeFromJSON;
function SupportingDocumentTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'confirmationNo': !(0, runtime_1.exists)(json, 'confirmationNo') ? undefined : json['confirmationNo'],
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'documentCategory': !(0, runtime_1.exists)(json, 'documentCategory') ? undefined : (0, FiscalSupportingDocumentCategory_1.FiscalSupportingDocumentCategoryFromJSON)(json['documentCategory']),
        'documentDate': !(0, runtime_1.exists)(json, 'documentDate') ? undefined : (new Date(json['documentDate'])),
        'documentNo': !(0, runtime_1.exists)(json, 'documentNo') ? undefined : json['documentNo'],
        'documentType': !(0, runtime_1.exists)(json, 'documentType') ? undefined : (0, FiscalSupportingDocumentType_1.FiscalSupportingDocumentTypeFromJSON)(json['documentType']),
        'fiscalStatus': !(0, runtime_1.exists)(json, 'fiscalStatus') ? undefined : json['fiscalStatus'],
        'fullName': !(0, runtime_1.exists)(json, 'fullName') ? undefined : json['fullName'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'roomId': !(0, runtime_1.exists)(json, 'roomId') ? undefined : json['roomId'],
    };
}
exports.SupportingDocumentTypeFromJSONTyped = SupportingDocumentTypeFromJSONTyped;
function SupportingDocumentTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'confirmationNo': value.confirmationNo,
        'createDateTime': value.createDateTime,
        'documentCategory': (0, FiscalSupportingDocumentCategory_1.FiscalSupportingDocumentCategoryToJSON)(value.documentCategory),
        'documentDate': value.documentDate === undefined ? undefined : (value.documentDate.toISOString().substr(0, 10)),
        'documentNo': value.documentNo,
        'documentType': (0, FiscalSupportingDocumentType_1.FiscalSupportingDocumentTypeToJSON)(value.documentType),
        'fiscalStatus': value.fiscalStatus,
        'fullName': value.fullName,
        'hotelId': value.hotelId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'roomId': value.roomId,
    };
}
exports.SupportingDocumentTypeToJSON = SupportingDocumentTypeToJSON;
