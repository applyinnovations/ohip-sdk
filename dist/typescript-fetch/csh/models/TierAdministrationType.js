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
exports.TierAdministrationTypeToJSON = exports.TierAdministrationTypeFromJSONTyped = exports.TierAdministrationTypeFromJSON = exports.TierAdministrationType = void 0;
/**
 * Do not upgrade membership. The membership may be downgraded.
 * @export
 */
exports.TierAdministrationType = {
    Disabled: 'Disabled',
    NoUpgrade: 'NoUpgrade'
};
function TierAdministrationTypeFromJSON(json) {
    return TierAdministrationTypeFromJSONTyped(json, false);
}
exports.TierAdministrationTypeFromJSON = TierAdministrationTypeFromJSON;
function TierAdministrationTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.TierAdministrationTypeFromJSONTyped = TierAdministrationTypeFromJSONTyped;
function TierAdministrationTypeToJSON(value) {
    return value;
}
exports.TierAdministrationTypeToJSON = TierAdministrationTypeToJSON;
