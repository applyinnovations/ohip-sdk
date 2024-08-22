"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelAccountSetupDetailsTypeToJSON = exports.ChannelAccountSetupDetailsTypeFromJSONTyped = exports.ChannelAccountSetupDetailsTypeFromJSON = exports.instanceOfChannelAccountSetupDetailsType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ChannelAccountSetupDetailsType interface.
 */
function instanceOfChannelAccountSetupDetailsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelAccountSetupDetailsType = instanceOfChannelAccountSetupDetailsType;
function ChannelAccountSetupDetailsTypeFromJSON(json) {
    return ChannelAccountSetupDetailsTypeFromJSONTyped(json, false);
}
exports.ChannelAccountSetupDetailsTypeFromJSON = ChannelAccountSetupDetailsTypeFromJSON;
function ChannelAccountSetupDetailsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chainCode': !(0, runtime_1.exists)(json, 'chainCode') ? undefined : json['chainCode'],
        'contractEndsOn': !(0, runtime_1.exists)(json, 'contractEndsOn') ? undefined : json['contractEndsOn'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'hotelCodes': !(0, runtime_1.exists)(json, 'hotelCodes') ? undefined : json['hotelCodes'],
        'inactiveDate': !(0, runtime_1.exists)(json, 'inactiveDate') ? undefined : json['inactiveDate'],
        'instances': !(0, runtime_1.exists)(json, 'instances') ? undefined : json['instances'],
        'rebateDate': !(0, runtime_1.exists)(json, 'rebateDate') ? undefined : json['rebateDate'],
        'registeredHotel': !(0, runtime_1.exists)(json, 'registeredHotel') ? undefined : json['registeredHotel'],
    };
}
exports.ChannelAccountSetupDetailsTypeFromJSONTyped = ChannelAccountSetupDetailsTypeFromJSONTyped;
function ChannelAccountSetupDetailsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chainCode': value.chainCode,
        'contractEndsOn': value.contractEndsOn,
        'currencyCode': value.currencyCode,
        'hotelCodes': value.hotelCodes,
        'inactiveDate': value.inactiveDate,
        'instances': value.instances,
        'rebateDate': value.rebateDate,
        'registeredHotel': value.registeredHotel,
    };
}
exports.ChannelAccountSetupDetailsTypeToJSON = ChannelAccountSetupDetailsTypeToJSON;
