"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositPolicyCriteriaToJSON = exports.DepositPolicyCriteriaFromJSONTyped = exports.DepositPolicyCriteriaFromJSON = exports.instanceOfDepositPolicyCriteria = void 0;
const runtime_1 = require("../runtime");
const HotelConfigDepositPoliciesType_1 = require("./HotelConfigDepositPoliciesType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the DepositPolicyCriteria interface.
 */
function instanceOfDepositPolicyCriteria(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfDepositPolicyCriteria = instanceOfDepositPolicyCriteria;
function DepositPolicyCriteriaFromJSON(json) {
    return DepositPolicyCriteriaFromJSONTyped(json, false);
}
exports.DepositPolicyCriteriaFromJSON = DepositPolicyCriteriaFromJSON;
function DepositPolicyCriteriaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'depositPolicy': !(0, runtime_1.exists)(json, 'depositPolicy') ? undefined : (0, HotelConfigDepositPoliciesType_1.HotelConfigDepositPoliciesTypeFromJSON)(json['depositPolicy']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.DepositPolicyCriteriaFromJSONTyped = DepositPolicyCriteriaFromJSONTyped;
function DepositPolicyCriteriaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'depositPolicy': (0, HotelConfigDepositPoliciesType_1.HotelConfigDepositPoliciesTypeToJSON)(value.depositPolicy),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.DepositPolicyCriteriaToJSON = DepositPolicyCriteriaToJSON;
