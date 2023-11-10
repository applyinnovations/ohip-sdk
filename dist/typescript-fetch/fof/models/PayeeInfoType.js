"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayeeInfoTypeToJSON = exports.PayeeInfoTypeFromJSONTyped = exports.PayeeInfoTypeFromJSON = exports.instanceOfPayeeInfoType = void 0;
const runtime_1 = require("../runtime");
const ARAccountShortInfoType_1 = require("./ARAccountShortInfoType");
const AddressInfoType_1 = require("./AddressInfoType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the PayeeInfoType interface.
 */
function instanceOfPayeeInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPayeeInfoType = instanceOfPayeeInfoType;
function PayeeInfoTypeFromJSON(json) {
    return PayeeInfoTypeFromJSONTyped(json, false);
}
exports.PayeeInfoTypeFromJSON = PayeeInfoTypeFromJSON;
function PayeeInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'payeeAccountInfo': !(0, runtime_1.exists)(json, 'payeeAccountInfo') ? undefined : (0, ARAccountShortInfoType_1.ARAccountShortInfoTypeFromJSON)(json['payeeAccountInfo']),
        'payeeAddress': !(0, runtime_1.exists)(json, 'payeeAddress') ? undefined : (0, AddressInfoType_1.AddressInfoTypeFromJSON)(json['payeeAddress']),
        'payeeAddressCount': !(0, runtime_1.exists)(json, 'payeeAddressCount') ? undefined : json['payeeAddressCount'],
        'payeeId': !(0, runtime_1.exists)(json, 'payeeId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['payeeId']),
        'payeeName': !(0, runtime_1.exists)(json, 'payeeName') ? undefined : json['payeeName'],
        'payeeReferenceCurrency': !(0, runtime_1.exists)(json, 'payeeReferenceCurrency') ? undefined : json['payeeReferenceCurrency'],
        'payeeTaxNumber': !(0, runtime_1.exists)(json, 'payeeTaxNumber') ? undefined : json['payeeTaxNumber'],
    };
}
exports.PayeeInfoTypeFromJSONTyped = PayeeInfoTypeFromJSONTyped;
function PayeeInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'payeeAccountInfo': (0, ARAccountShortInfoType_1.ARAccountShortInfoTypeToJSON)(value.payeeAccountInfo),
        'payeeAddress': (0, AddressInfoType_1.AddressInfoTypeToJSON)(value.payeeAddress),
        'payeeAddressCount': value.payeeAddressCount,
        'payeeId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.payeeId),
        'payeeName': value.payeeName,
        'payeeReferenceCurrency': value.payeeReferenceCurrency,
        'payeeTaxNumber': value.payeeTaxNumber,
    };
}
exports.PayeeInfoTypeToJSON = PayeeInfoTypeToJSON;
