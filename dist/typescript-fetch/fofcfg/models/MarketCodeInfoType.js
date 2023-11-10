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
exports.MarketCodeInfoTypeToJSON = exports.MarketCodeInfoTypeFromJSONTyped = exports.MarketCodeInfoTypeFromJSON = exports.instanceOfMarketCodeInfoType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the MarketCodeInfoType interface.
 */
function instanceOfMarketCodeInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMarketCodeInfoType = instanceOfMarketCodeInfoType;
function MarketCodeInfoTypeFromJSON(json) {
    return MarketCodeInfoTypeFromJSONTyped(json, false);
}
exports.MarketCodeInfoTypeFromJSON = MarketCodeInfoTypeFromJSON;
function MarketCodeInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'marketCode': !(0, runtime_1.exists)(json, 'marketCode') ? undefined : json['marketCode'],
        'marketGroup': !(0, runtime_1.exists)(json, 'marketGroup') ? undefined : json['marketGroup'],
    };
}
exports.MarketCodeInfoTypeFromJSONTyped = MarketCodeInfoTypeFromJSONTyped;
function MarketCodeInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'hotelId': value.hotelId,
        'marketCode': value.marketCode,
        'marketGroup': value.marketGroup,
    };
}
exports.MarketCodeInfoTypeToJSON = MarketCodeInfoTypeToJSON;
