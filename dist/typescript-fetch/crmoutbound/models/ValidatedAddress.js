"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatedAddressToJSON = exports.ValidatedAddressFromJSONTyped = exports.ValidatedAddressFromJSON = exports.instanceOfValidatedAddress = void 0;
const runtime_1 = require("../runtime");
const AddressType_1 = require("./AddressType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the ValidatedAddress interface.
 */
function instanceOfValidatedAddress(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfValidatedAddress = instanceOfValidatedAddress;
function ValidatedAddressFromJSON(json) {
    return ValidatedAddressFromJSONTyped(json, false);
}
exports.ValidatedAddressFromJSON = ValidatedAddressFromJSON;
function ValidatedAddressFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addressValidationInfo': !(0, runtime_1.exists)(json, 'addressValidationInfo') ? undefined : (0, AddressType_1.AddressTypeFromJSON)(json['addressValidationInfo']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.ValidatedAddressFromJSONTyped = ValidatedAddressFromJSONTyped;
function ValidatedAddressToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addressValidationInfo': (0, AddressType_1.AddressTypeToJSON)(value.addressValidationInfo),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.ValidatedAddressToJSON = ValidatedAddressToJSON;
