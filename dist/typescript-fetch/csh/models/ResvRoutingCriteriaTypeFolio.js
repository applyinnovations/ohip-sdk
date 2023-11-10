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
exports.ResvRoutingCriteriaTypeFolioToJSON = exports.ResvRoutingCriteriaTypeFolioFromJSONTyped = exports.ResvRoutingCriteriaTypeFolioFromJSON = exports.instanceOfResvRoutingCriteriaTypeFolio = void 0;
const runtime_1 = require("../runtime");
const PayeeInfoType_1 = require("./PayeeInfoType");
const ResvRoutingCriteriaTypeFolioGuestInfo_1 = require("./ResvRoutingCriteriaTypeFolioGuestInfo");
const RoutingInstructionType_1 = require("./RoutingInstructionType");
/**
 * Check if a given object implements the ResvRoutingCriteriaTypeFolio interface.
 */
function instanceOfResvRoutingCriteriaTypeFolio(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResvRoutingCriteriaTypeFolio = instanceOfResvRoutingCriteriaTypeFolio;
function ResvRoutingCriteriaTypeFolioFromJSON(json) {
    return ResvRoutingCriteriaTypeFolioFromJSONTyped(json, false);
}
exports.ResvRoutingCriteriaTypeFolioFromJSON = ResvRoutingCriteriaTypeFolioFromJSON;
function ResvRoutingCriteriaTypeFolioFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'aRNumber': !(0, runtime_1.exists)(json, 'aRNumber') ? undefined : json['aRNumber'],
        'folioWindowNo': !(0, runtime_1.exists)(json, 'folioWindowNo') ? undefined : json['folioWindowNo'],
        'guestInfo': !(0, runtime_1.exists)(json, 'guestInfo') ? undefined : (0, ResvRoutingCriteriaTypeFolioGuestInfo_1.ResvRoutingCriteriaTypeFolioGuestInfoFromJSON)(json['guestInfo']),
        'instructions': !(0, runtime_1.exists)(json, 'instructions') ? undefined : (json['instructions'].map(RoutingInstructionType_1.RoutingInstructionTypeFromJSON)),
        'payeeInfo': !(0, runtime_1.exists)(json, 'payeeInfo') ? undefined : (0, PayeeInfoType_1.PayeeInfoTypeFromJSON)(json['payeeInfo']),
        'paymentMethod': !(0, runtime_1.exists)(json, 'paymentMethod') ? undefined : json['paymentMethod'],
    };
}
exports.ResvRoutingCriteriaTypeFolioFromJSONTyped = ResvRoutingCriteriaTypeFolioFromJSONTyped;
function ResvRoutingCriteriaTypeFolioToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'aRNumber': value.aRNumber,
        'folioWindowNo': value.folioWindowNo,
        'guestInfo': (0, ResvRoutingCriteriaTypeFolioGuestInfo_1.ResvRoutingCriteriaTypeFolioGuestInfoToJSON)(value.guestInfo),
        'instructions': value.instructions === undefined ? undefined : (value.instructions.map(RoutingInstructionType_1.RoutingInstructionTypeToJSON)),
        'payeeInfo': (0, PayeeInfoType_1.PayeeInfoTypeToJSON)(value.payeeInfo),
        'paymentMethod': value.paymentMethod,
    };
}
exports.ResvRoutingCriteriaTypeFolioToJSON = ResvRoutingCriteriaTypeFolioToJSON;
