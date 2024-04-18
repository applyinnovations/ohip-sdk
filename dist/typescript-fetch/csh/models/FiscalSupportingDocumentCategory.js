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
exports.FiscalSupportingDocumentCategoryToJSON = exports.FiscalSupportingDocumentCategoryFromJSONTyped = exports.FiscalSupportingDocumentCategoryFromJSON = exports.FiscalSupportingDocumentCategory = void 0;
/**
 * Supporting document category.
 * @export
 */
exports.FiscalSupportingDocumentCategory = {
    Financial: 'Financial',
    Reservation: 'Reservation'
};
function FiscalSupportingDocumentCategoryFromJSON(json) {
    return FiscalSupportingDocumentCategoryFromJSONTyped(json, false);
}
exports.FiscalSupportingDocumentCategoryFromJSON = FiscalSupportingDocumentCategoryFromJSON;
function FiscalSupportingDocumentCategoryFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.FiscalSupportingDocumentCategoryFromJSONTyped = FiscalSupportingDocumentCategoryFromJSONTyped;
function FiscalSupportingDocumentCategoryToJSON(value) {
    return value;
}
exports.FiscalSupportingDocumentCategoryToJSON = FiscalSupportingDocumentCategoryToJSON;