"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodsToJSON = exports.PaymentMethodsFromJSONTyped = exports.PaymentMethodsFromJSON = exports.instanceOfPaymentMethods = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const PaymentMethodsType_1 = require("./PaymentMethodsType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the PaymentMethods interface.
 */
function instanceOfPaymentMethods(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPaymentMethods = instanceOfPaymentMethods;
function PaymentMethodsFromJSON(json) {
    return PaymentMethodsFromJSONTyped(json, false);
}
exports.PaymentMethodsFromJSON = PaymentMethodsFromJSON;
function PaymentMethodsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'paymentMethods': !(0, runtime_1.exists)(json, 'paymentMethods') ? undefined : (0, PaymentMethodsType_1.PaymentMethodsTypeFromJSON)(json['paymentMethods']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.PaymentMethodsFromJSONTyped = PaymentMethodsFromJSONTyped;
function PaymentMethodsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'paymentMethods': (0, PaymentMethodsType_1.PaymentMethodsTypeToJSON)(value.paymentMethods),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.PaymentMethodsToJSON = PaymentMethodsToJSON;