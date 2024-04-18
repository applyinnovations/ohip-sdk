"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCommissionTypeToJSON = exports.ProfileCommissionTypeFromJSONTyped = exports.ProfileCommissionTypeFromJSON = exports.instanceOfProfileCommissionType = void 0;
const runtime_1 = require("../runtime");
const CommissionPaymentMethods_1 = require("./CommissionPaymentMethods");
/**
 * Check if a given object implements the ProfileCommissionType interface.
 */
function instanceOfProfileCommissionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileCommissionType = instanceOfProfileCommissionType;
function ProfileCommissionTypeFromJSON(json) {
    return ProfileCommissionTypeFromJSONTyped(json, false);
}
exports.ProfileCommissionTypeFromJSON = ProfileCommissionTypeFromJSON;
function ProfileCommissionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'commissionCode': !(0, runtime_1.exists)(json, 'commissionCode') ? undefined : json['commissionCode'],
        'bankAccount': !(0, runtime_1.exists)(json, 'bankAccount') ? undefined : json['bankAccount'],
        'paymentMethod': !(0, runtime_1.exists)(json, 'paymentMethod') ? undefined : (0, CommissionPaymentMethods_1.CommissionPaymentMethodsFromJSON)(json['paymentMethod']),
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'currencySymbol': !(0, runtime_1.exists)(json, 'currencySymbol') ? undefined : json['currencySymbol'],
        'decimalPlaces': !(0, runtime_1.exists)(json, 'decimalPlaces') ? undefined : json['decimalPlaces'],
    };
}
exports.ProfileCommissionTypeFromJSONTyped = ProfileCommissionTypeFromJSONTyped;
function ProfileCommissionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelId': value.hotelId,
        'commissionCode': value.commissionCode,
        'bankAccount': value.bankAccount,
        'paymentMethod': (0, CommissionPaymentMethods_1.CommissionPaymentMethodsToJSON)(value.paymentMethod),
        'currencyCode': value.currencyCode,
        'currencySymbol': value.currencySymbol,
        'decimalPlaces': value.decimalPlaces,
    };
}
exports.ProfileCommissionTypeToJSON = ProfileCommissionTypeToJSON;