"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECouponTypeToJSON = exports.ECouponTypeFromJSONTyped = exports.ECouponTypeFromJSON = exports.instanceOfECouponType = void 0;
const runtime_1 = require("../runtime");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ECouponType interface.
 */
function instanceOfECouponType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfECouponType = instanceOfECouponType;
function ECouponTypeFromJSON(json) {
    return ECouponTypeFromJSONTyped(json, false);
}
exports.ECouponTypeFromJSON = ECouponTypeFromJSON;
function ECouponTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'autoAttached': !(0, runtime_1.exists)(json, 'autoAttached') ? undefined : json['autoAttached'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'eCouponId': !(0, runtime_1.exists)(json, 'eCouponId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['eCouponId']),
        'issuedQuantity': !(0, runtime_1.exists)(json, 'issuedQuantity') ? undefined : json['issuedQuantity'],
        'ratePlanCode': !(0, runtime_1.exists)(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'reason': !(0, runtime_1.exists)(json, 'reason') ? undefined : json['reason'],
        'usedQuantity': !(0, runtime_1.exists)(json, 'usedQuantity') ? undefined : json['usedQuantity'],
        'welcomeOffer': !(0, runtime_1.exists)(json, 'welcomeOffer') ? undefined : json['welcomeOffer'],
    };
}
exports.ECouponTypeFromJSONTyped = ECouponTypeFromJSONTyped;
function ECouponTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'autoAttached': value.autoAttached,
        'code': value.code,
        'description': value.description,
        'eCouponId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.eCouponId),
        'issuedQuantity': value.issuedQuantity,
        'ratePlanCode': value.ratePlanCode,
        'reason': value.reason,
        'usedQuantity': value.usedQuantity,
        'welcomeOffer': value.welcomeOffer,
    };
}
exports.ECouponTypeToJSON = ECouponTypeToJSON;