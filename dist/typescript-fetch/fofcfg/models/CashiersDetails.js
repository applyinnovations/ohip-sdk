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
exports.CashiersDetailsToJSON = exports.CashiersDetailsFromJSONTyped = exports.CashiersDetailsFromJSON = exports.instanceOfCashiersDetails = void 0;
const runtime_1 = require("../runtime");
const CashierType_1 = require("./CashierType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the CashiersDetails interface.
 */
function instanceOfCashiersDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCashiersDetails = instanceOfCashiersDetails;
function CashiersDetailsFromJSON(json) {
    return CashiersDetailsFromJSONTyped(json, false);
}
exports.CashiersDetailsFromJSON = CashiersDetailsFromJSON;
function CashiersDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cashiers': !(0, runtime_1.exists)(json, 'cashiers') ? undefined : (json['cashiers'].map(CashierType_1.CashierTypeFromJSON)),
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !(0, runtime_1.exists)(json, 'limit') ? undefined : json['limit'],
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'offset': !(0, runtime_1.exists)(json, 'offset') ? undefined : json['offset'],
        'totalPages': !(0, runtime_1.exists)(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.CashiersDetailsFromJSONTyped = CashiersDetailsFromJSONTyped;
function CashiersDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cashiers': value.cashiers === undefined ? undefined : (value.cashiers.map(CashierType_1.CashierTypeToJSON)),
        'count': value.count,
        'hasMore': value.hasMore,
        'limit': value.limit,
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'offset': value.offset,
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.CashiersDetailsToJSON = CashiersDetailsToJSON;
