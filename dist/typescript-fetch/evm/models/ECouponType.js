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