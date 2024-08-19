"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelNoShowPostingRuleTypeToJSON = exports.HotelNoShowPostingRuleTypeFromJSONTyped = exports.HotelNoShowPostingRuleTypeFromJSON = exports.instanceOfHotelNoShowPostingRuleType = void 0;
const runtime_1 = require("../runtime");
const PostingRuleType_1 = require("./PostingRuleType");
/**
 * Check if a given object implements the HotelNoShowPostingRuleType interface.
 */
function instanceOfHotelNoShowPostingRuleType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelNoShowPostingRuleType = instanceOfHotelNoShowPostingRuleType;
function HotelNoShowPostingRuleTypeFromJSON(json) {
    return HotelNoShowPostingRuleTypeFromJSONTyped(json, false);
}
exports.HotelNoShowPostingRuleTypeFromJSON = HotelNoShowPostingRuleTypeFromJSON;
function HotelNoShowPostingRuleTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'postingRule': !(0, runtime_1.exists)(json, 'postingRule') ? undefined : (0, PostingRuleType_1.PostingRuleTypeFromJSON)(json['postingRule']),
        'reservationType': !(0, runtime_1.exists)(json, 'reservationType') ? undefined : json['reservationType'],
        'sourceCode': !(0, runtime_1.exists)(json, 'sourceCode') ? undefined : json['sourceCode'],
    };
}
exports.HotelNoShowPostingRuleTypeFromJSONTyped = HotelNoShowPostingRuleTypeFromJSONTyped;
function HotelNoShowPostingRuleTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelId': value.hotelId,
        'postingRule': (0, PostingRuleType_1.PostingRuleTypeToJSON)(value.postingRule),
        'reservationType': value.reservationType,
        'sourceCode': value.sourceCode,
    };
}
exports.HotelNoShowPostingRuleTypeToJSON = HotelNoShowPostingRuleTypeToJSON;
