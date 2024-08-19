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
exports.ParityRoomRateTypeToJSON = exports.ParityRoomRateTypeFromJSONTyped = exports.ParityRoomRateTypeFromJSON = exports.instanceOfParityRoomRateType = void 0;
const runtime_1 = require("../runtime");
const ParityRateType_1 = require("./ParityRateType");
/**
 * Check if a given object implements the ParityRoomRateType interface.
 */
function instanceOfParityRoomRateType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfParityRoomRateType = instanceOfParityRoomRateType;
function ParityRoomRateTypeFromJSON(json) {
    return ParityRoomRateTypeFromJSONTyped(json, false);
}
exports.ParityRoomRateTypeFromJSON = ParityRoomRateTypeFromJSON;
function ParityRoomRateTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'channelRatePlanCode': !(0, runtime_1.exists)(json, 'channelRatePlanCode') ? undefined : json['channelRatePlanCode'],
        'channelRoomType': !(0, runtime_1.exists)(json, 'channelRoomType') ? undefined : json['channelRoomType'],
        'parityRates': !(0, runtime_1.exists)(json, 'parityRates') ? undefined : (json['parityRates'].map(ParityRateType_1.ParityRateTypeFromJSON)),
        'ratePlanCode': !(0, runtime_1.exists)(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
    };
}
exports.ParityRoomRateTypeFromJSONTyped = ParityRoomRateTypeFromJSONTyped;
function ParityRoomRateTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'channelRatePlanCode': value.channelRatePlanCode,
        'channelRoomType': value.channelRoomType,
        'parityRates': value.parityRates === undefined ? undefined : (value.parityRates.map(ParityRateType_1.ParityRateTypeToJSON)),
        'ratePlanCode': value.ratePlanCode,
        'roomType': value.roomType,
    };
}
exports.ParityRoomRateTypeToJSON = ParityRoomRateTypeToJSON;
