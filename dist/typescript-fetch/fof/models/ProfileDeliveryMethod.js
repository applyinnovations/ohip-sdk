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
exports.ProfileDeliveryMethodToJSON = exports.ProfileDeliveryMethodFromJSONTyped = exports.ProfileDeliveryMethodFromJSON = exports.instanceOfProfileDeliveryMethod = void 0;
const runtime_1 = require("../runtime");
const ProfileDeliveryModuleType_1 = require("./ProfileDeliveryModuleType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ProfileDeliveryMethod interface.
 */
function instanceOfProfileDeliveryMethod(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileDeliveryMethod = instanceOfProfileDeliveryMethod;
function ProfileDeliveryMethodFromJSON(json) {
    return ProfileDeliveryMethodFromJSONTyped(json, false);
}
exports.ProfileDeliveryMethodFromJSON = ProfileDeliveryMethodFromJSON;
function ProfileDeliveryMethodFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'deliveryId': !(0, runtime_1.exists)(json, 'deliveryId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['deliveryId']),
        'deliveryModule': !(0, runtime_1.exists)(json, 'deliveryModule') ? undefined : (0, ProfileDeliveryModuleType_1.ProfileDeliveryModuleTypeFromJSON)(json['deliveryModule']),
        'deliveryType': !(0, runtime_1.exists)(json, 'deliveryType') ? undefined : json['deliveryType'],
        'deliveryValue': !(0, runtime_1.exists)(json, 'deliveryValue') ? undefined : json['deliveryValue'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'orderSequence': !(0, runtime_1.exists)(json, 'orderSequence') ? undefined : json['orderSequence'],
        'primaryInd': !(0, runtime_1.exists)(json, 'primaryInd') ? undefined : json['primaryInd'],
    };
}
exports.ProfileDeliveryMethodFromJSONTyped = ProfileDeliveryMethodFromJSONTyped;
function ProfileDeliveryMethodToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'deliveryId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.deliveryId),
        'deliveryModule': (0, ProfileDeliveryModuleType_1.ProfileDeliveryModuleTypeToJSON)(value.deliveryModule),
        'deliveryType': value.deliveryType,
        'deliveryValue': value.deliveryValue,
        'hotelId': value.hotelId,
        'orderSequence': value.orderSequence,
        'primaryInd': value.primaryInd,
    };
}
exports.ProfileDeliveryMethodToJSON = ProfileDeliveryMethodToJSON;
