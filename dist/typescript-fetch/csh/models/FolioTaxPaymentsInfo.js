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
exports.FolioTaxPaymentsInfoToJSON = exports.FolioTaxPaymentsInfoFromJSONTyped = exports.FolioTaxPaymentsInfoFromJSON = exports.instanceOfFolioTaxPaymentsInfo = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const PaymentTaxInfoType_1 = require("./PaymentTaxInfoType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the FolioTaxPaymentsInfo interface.
 */
function instanceOfFolioTaxPaymentsInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFolioTaxPaymentsInfo = instanceOfFolioTaxPaymentsInfo;
function FolioTaxPaymentsInfoFromJSON(json) {
    return FolioTaxPaymentsInfoFromJSONTyped(json, false);
}
exports.FolioTaxPaymentsInfoFromJSON = FolioTaxPaymentsInfoFromJSON;
function FolioTaxPaymentsInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'paymentTaxInfo': !(0, runtime_1.exists)(json, 'paymentTaxInfo') ? undefined : (0, PaymentTaxInfoType_1.PaymentTaxInfoTypeFromJSON)(json['paymentTaxInfo']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.FolioTaxPaymentsInfoFromJSONTyped = FolioTaxPaymentsInfoFromJSONTyped;
function FolioTaxPaymentsInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'paymentTaxInfo': (0, PaymentTaxInfoType_1.PaymentTaxInfoTypeToJSON)(value.paymentTaxInfo),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.FolioTaxPaymentsInfoToJSON = FolioTaxPaymentsInfoToJSON;