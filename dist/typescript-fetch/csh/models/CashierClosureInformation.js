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
exports.CashierClosureInformationToJSON = exports.CashierClosureInformationFromJSONTyped = exports.CashierClosureInformationFromJSON = exports.instanceOfCashierClosureInformation = void 0;
const runtime_1 = require("../runtime");
const CashierClosureInfoTypes_1 = require("./CashierClosureInfoTypes");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the CashierClosureInformation interface.
 */
function instanceOfCashierClosureInformation(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCashierClosureInformation = instanceOfCashierClosureInformation;
function CashierClosureInformationFromJSON(json) {
    return CashierClosureInformationFromJSONTyped(json, false);
}
exports.CashierClosureInformationFromJSON = CashierClosureInformationFromJSON;
function CashierClosureInformationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cashierClosureInfo': !(0, runtime_1.exists)(json, 'cashierClosureInfo') ? undefined : (0, CashierClosureInfoTypes_1.CashierClosureInfoTypesFromJSON)(json['cashierClosureInfo']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.CashierClosureInformationFromJSONTyped = CashierClosureInformationFromJSONTyped;
function CashierClosureInformationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cashierClosureInfo': (0, CashierClosureInfoTypes_1.CashierClosureInfoTypesToJSON)(value.cashierClosureInfo),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.CashierClosureInformationToJSON = CashierClosureInformationToJSON;