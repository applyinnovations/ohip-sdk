"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiscalSupportingDocumentCriteriaTypeToJSON = exports.FiscalSupportingDocumentCriteriaTypeFromJSONTyped = exports.FiscalSupportingDocumentCriteriaTypeFromJSON = exports.instanceOfFiscalSupportingDocumentCriteriaType = void 0;
const runtime_1 = require("../runtime");
const FiscalSupportingDocumentType_1 = require("./FiscalSupportingDocumentType");
/**
 * Check if a given object implements the FiscalSupportingDocumentCriteriaType interface.
 */
function instanceOfFiscalSupportingDocumentCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFiscalSupportingDocumentCriteriaType = instanceOfFiscalSupportingDocumentCriteriaType;
function FiscalSupportingDocumentCriteriaTypeFromJSON(json) {
    return FiscalSupportingDocumentCriteriaTypeFromJSONTyped(json, false);
}
exports.FiscalSupportingDocumentCriteriaTypeFromJSON = FiscalSupportingDocumentCriteriaTypeFromJSON;
function FiscalSupportingDocumentCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'documentNo': !(0, runtime_1.exists)(json, 'documentNo') ? undefined : json['documentNo'],
        'documentType': !(0, runtime_1.exists)(json, 'documentType') ? undefined : (0, FiscalSupportingDocumentType_1.FiscalSupportingDocumentTypeFromJSON)(json['documentType']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
    };
}
exports.FiscalSupportingDocumentCriteriaTypeFromJSONTyped = FiscalSupportingDocumentCriteriaTypeFromJSONTyped;
function FiscalSupportingDocumentCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'documentNo': value.documentNo,
        'documentType': (0, FiscalSupportingDocumentType_1.FiscalSupportingDocumentTypeToJSON)(value.documentType),
        'hotelId': value.hotelId,
    };
}
exports.FiscalSupportingDocumentCriteriaTypeToJSON = FiscalSupportingDocumentCriteriaTypeToJSON;
