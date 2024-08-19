"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingInfoTypeFolioToJSON = exports.RoutingInfoTypeFolioFromJSONTyped = exports.RoutingInfoTypeFolioFromJSON = exports.instanceOfRoutingInfoTypeFolio = void 0;
const runtime_1 = require("../runtime");
const PayeeInfoType_1 = require("./PayeeInfoType");
const RoutingInfoTypeFolioGuestInfo_1 = require("./RoutingInfoTypeFolioGuestInfo");
const RoutingInstructionType_1 = require("./RoutingInstructionType");
/**
 * Check if a given object implements the RoutingInfoTypeFolio interface.
 */
function instanceOfRoutingInfoTypeFolio(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoutingInfoTypeFolio = instanceOfRoutingInfoTypeFolio;
function RoutingInfoTypeFolioFromJSON(json) {
    return RoutingInfoTypeFolioFromJSONTyped(json, false);
}
exports.RoutingInfoTypeFolioFromJSON = RoutingInfoTypeFolioFromJSON;
function RoutingInfoTypeFolioFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'aRNumber': !(0, runtime_1.exists)(json, 'aRNumber') ? undefined : json['aRNumber'],
        'folioWindowNo': !(0, runtime_1.exists)(json, 'folioWindowNo') ? undefined : json['folioWindowNo'],
        'guestInfo': !(0, runtime_1.exists)(json, 'guestInfo') ? undefined : (0, RoutingInfoTypeFolioGuestInfo_1.RoutingInfoTypeFolioGuestInfoFromJSON)(json['guestInfo']),
        'instructions': !(0, runtime_1.exists)(json, 'instructions') ? undefined : (json['instructions'].map(RoutingInstructionType_1.RoutingInstructionTypeFromJSON)),
        'payeeInfo': !(0, runtime_1.exists)(json, 'payeeInfo') ? undefined : (0, PayeeInfoType_1.PayeeInfoTypeFromJSON)(json['payeeInfo']),
        'paymentMethod': !(0, runtime_1.exists)(json, 'paymentMethod') ? undefined : json['paymentMethod'],
    };
}
exports.RoutingInfoTypeFolioFromJSONTyped = RoutingInfoTypeFolioFromJSONTyped;
function RoutingInfoTypeFolioToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'aRNumber': value.aRNumber,
        'folioWindowNo': value.folioWindowNo,
        'guestInfo': (0, RoutingInfoTypeFolioGuestInfo_1.RoutingInfoTypeFolioGuestInfoToJSON)(value.guestInfo),
        'instructions': value.instructions === undefined ? undefined : (value.instructions.map(RoutingInstructionType_1.RoutingInstructionTypeToJSON)),
        'payeeInfo': (0, PayeeInfoType_1.PayeeInfoTypeToJSON)(value.payeeInfo),
        'paymentMethod': value.paymentMethod,
    };
}
exports.RoutingInfoTypeFolioToJSON = RoutingInfoTypeFolioToJSON;
