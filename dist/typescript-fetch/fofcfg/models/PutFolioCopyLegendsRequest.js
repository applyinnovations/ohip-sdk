"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutFolioCopyLegendsRequestToJSON = exports.PutFolioCopyLegendsRequestFromJSONTyped = exports.PutFolioCopyLegendsRequestFromJSON = exports.instanceOfPutFolioCopyLegendsRequest = void 0;
const runtime_1 = require("../runtime");
const FolioCopyLegendType_1 = require("./FolioCopyLegendType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the PutFolioCopyLegendsRequest interface.
 */
function instanceOfPutFolioCopyLegendsRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPutFolioCopyLegendsRequest = instanceOfPutFolioCopyLegendsRequest;
function PutFolioCopyLegendsRequestFromJSON(json) {
    return PutFolioCopyLegendsRequestFromJSONTyped(json, false);
}
exports.PutFolioCopyLegendsRequestFromJSON = PutFolioCopyLegendsRequestFromJSON;
function PutFolioCopyLegendsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'criteria': !(0, runtime_1.exists)(json, 'criteria') ? undefined : (0, FolioCopyLegendType_1.FolioCopyLegendTypeFromJSON)(json['criteria']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.PutFolioCopyLegendsRequestFromJSONTyped = PutFolioCopyLegendsRequestFromJSONTyped;
function PutFolioCopyLegendsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'criteria': (0, FolioCopyLegendType_1.FolioCopyLegendTypeToJSON)(value.criteria),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.PutFolioCopyLegendsRequestToJSON = PutFolioCopyLegendsRequestToJSON;
