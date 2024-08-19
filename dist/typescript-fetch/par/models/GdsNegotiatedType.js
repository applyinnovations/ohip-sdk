"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GdsNegotiatedTypeToJSON = exports.GdsNegotiatedTypeFromJSONTyped = exports.GdsNegotiatedTypeFromJSON = exports.instanceOfGdsNegotiatedType = void 0;
const runtime_1 = require("../runtime");
const GdsNegotiatedInfoType_1 = require("./GdsNegotiatedInfoType");
/**
 * Check if a given object implements the GdsNegotiatedType interface.
 */
function instanceOfGdsNegotiatedType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGdsNegotiatedType = instanceOfGdsNegotiatedType;
function GdsNegotiatedTypeFromJSON(json) {
    return GdsNegotiatedTypeFromJSONTyped(json, false);
}
exports.GdsNegotiatedTypeFromJSON = GdsNegotiatedTypeFromJSON;
function GdsNegotiatedTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bookingChannelCode': !(0, runtime_1.exists)(json, 'bookingChannelCode') ? undefined : json['bookingChannelCode'],
        'channelRatePlanCode': !(0, runtime_1.exists)(json, 'channelRatePlanCode') ? undefined : json['channelRatePlanCode'],
        'gdsNegotiatedInfoList': !(0, runtime_1.exists)(json, 'gdsNegotiatedInfoList') ? undefined : (json['gdsNegotiatedInfoList'].map(GdsNegotiatedInfoType_1.GdsNegotiatedInfoTypeFromJSON)),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
    };
}
exports.GdsNegotiatedTypeFromJSONTyped = GdsNegotiatedTypeFromJSONTyped;
function GdsNegotiatedTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bookingChannelCode': value.bookingChannelCode,
        'channelRatePlanCode': value.channelRatePlanCode,
        'gdsNegotiatedInfoList': value.gdsNegotiatedInfoList === undefined ? undefined : (value.gdsNegotiatedInfoList.map(GdsNegotiatedInfoType_1.GdsNegotiatedInfoTypeToJSON)),
        'hotelId': value.hotelId,
    };
}
exports.GdsNegotiatedTypeToJSON = GdsNegotiatedTypeToJSON;
