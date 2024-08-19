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
exports.RestrictionInfoStatusTypeToJSON = exports.RestrictionInfoStatusTypeFromJSONTyped = exports.RestrictionInfoStatusTypeFromJSON = exports.instanceOfRestrictionInfoStatusType = void 0;
const runtime_1 = require("../runtime");
const RestrictionStatusesType_1 = require("./RestrictionStatusesType");
/**
 * Check if a given object implements the RestrictionInfoStatusType interface.
 */
function instanceOfRestrictionInfoStatusType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRestrictionInfoStatusType = instanceOfRestrictionInfoStatusType;
function RestrictionInfoStatusTypeFromJSON(json) {
    return RestrictionInfoStatusTypeFromJSONTyped(json, false);
}
exports.RestrictionInfoStatusTypeFromJSON = RestrictionInfoStatusTypeFromJSON;
function RestrictionInfoStatusTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bookingChannelCode': !(0, runtime_1.exists)(json, 'bookingChannelCode') ? undefined : json['bookingChannelCode'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : (0, RestrictionStatusesType_1.RestrictionStatusesTypeFromJSON)(json['code']),
        'lOS1': !(0, runtime_1.exists)(json, 'lOS1') ? undefined : json['lOS1'],
        'lOS2': !(0, runtime_1.exists)(json, 'lOS2') ? undefined : json['lOS2'],
        'lOS3': !(0, runtime_1.exists)(json, 'lOS3') ? undefined : json['lOS3'],
        'lOS4': !(0, runtime_1.exists)(json, 'lOS4') ? undefined : json['lOS4'],
        'lOS5': !(0, runtime_1.exists)(json, 'lOS5') ? undefined : json['lOS5'],
        'lOS6': !(0, runtime_1.exists)(json, 'lOS6') ? undefined : json['lOS6'],
        'lOS7': !(0, runtime_1.exists)(json, 'lOS7') ? undefined : json['lOS7'],
        'rateCategory': !(0, runtime_1.exists)(json, 'rateCategory') ? undefined : json['rateCategory'],
        'rateCode': !(0, runtime_1.exists)(json, 'rateCode') ? undefined : json['rateCode'],
        'roomClass': !(0, runtime_1.exists)(json, 'roomClass') ? undefined : json['roomClass'],
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'unit': !(0, runtime_1.exists)(json, 'unit') ? undefined : json['unit'],
    };
}
exports.RestrictionInfoStatusTypeFromJSONTyped = RestrictionInfoStatusTypeFromJSONTyped;
function RestrictionInfoStatusTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bookingChannelCode': value.bookingChannelCode,
        'code': (0, RestrictionStatusesType_1.RestrictionStatusesTypeToJSON)(value.code),
        'lOS1': value.lOS1,
        'lOS2': value.lOS2,
        'lOS3': value.lOS3,
        'lOS4': value.lOS4,
        'lOS5': value.lOS5,
        'lOS6': value.lOS6,
        'lOS7': value.lOS7,
        'rateCategory': value.rateCategory,
        'rateCode': value.rateCode,
        'roomClass': value.roomClass,
        'roomType': value.roomType,
        'unit': value.unit,
    };
}
exports.RestrictionInfoStatusTypeToJSON = RestrictionInfoStatusTypeToJSON;
