"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemVendorTypeToJSON = exports.ItemVendorTypeFromJSONTyped = exports.ItemVendorTypeFromJSON = exports.instanceOfItemVendorType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const ProfileId_1 = require("./ProfileId");
/**
 * Check if a given object implements the ItemVendorType interface.
 */
function instanceOfItemVendorType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfItemVendorType = instanceOfItemVendorType;
function ItemVendorTypeFromJSON(json) {
    return ItemVendorTypeFromJSONTyped(json, false);
}
exports.ItemVendorTypeFromJSON = ItemVendorTypeFromJSON;
function ItemVendorTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : json['email'],
        'fax': !(0, runtime_1.exists)(json, 'fax') ? undefined : json['fax'],
        'leadTime': !(0, runtime_1.exists)(json, 'leadTime') ? undefined : json['leadTime'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'phone': !(0, runtime_1.exists)(json, 'phone') ? undefined : json['phone'],
        'price': !(0, runtime_1.exists)(json, 'price') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['price']),
        'priority': !(0, runtime_1.exists)(json, 'priority') ? undefined : json['priority'],
        'profileId': !(0, runtime_1.exists)(json, 'profileId') ? undefined : (0, ProfileId_1.ProfileIdFromJSON)(json['profileId']),
    };
}
exports.ItemVendorTypeFromJSONTyped = ItemVendorTypeFromJSONTyped;
function ItemVendorTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'email': value.email,
        'fax': value.fax,
        'leadTime': value.leadTime,
        'name': value.name,
        'phone': value.phone,
        'price': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.price),
        'priority': value.priority,
        'profileId': (0, ProfileId_1.ProfileIdToJSON)(value.profileId),
    };
}
exports.ItemVendorTypeToJSON = ItemVendorTypeToJSON;
