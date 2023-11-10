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
exports.FolioPrinterTypeToJSON = exports.FolioPrinterTypeFromJSONTyped = exports.FolioPrinterTypeFromJSON = exports.instanceOfFolioPrinterType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the FolioPrinterType interface.
 */
function instanceOfFolioPrinterType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFolioPrinterType = instanceOfFolioPrinterType;
function FolioPrinterTypeFromJSON(json) {
    return FolioPrinterTypeFromJSONTyped(json, false);
}
exports.FolioPrinterTypeFromJSON = FolioPrinterTypeFromJSON;
function FolioPrinterTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'device': !(0, runtime_1.exists)(json, 'device') ? undefined : json['device'],
        'folioQueueName': !(0, runtime_1.exists)(json, 'folioQueueName') ? undefined : json['folioQueueName'],
        'folioType': !(0, runtime_1.exists)(json, 'folioType') ? undefined : json['folioType'],
        'printerName': !(0, runtime_1.exists)(json, 'printerName') ? undefined : json['printerName'],
    };
}
exports.FolioPrinterTypeFromJSONTyped = FolioPrinterTypeFromJSONTyped;
function FolioPrinterTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'device': value.device,
        'folioQueueName': value.folioQueueName,
        'folioType': value.folioType,
        'printerName': value.printerName,
    };
}
exports.FolioPrinterTypeToJSON = FolioPrinterTypeToJSON;
