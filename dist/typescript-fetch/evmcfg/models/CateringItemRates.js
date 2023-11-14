"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CateringItemRatesToJSON = exports.CateringItemRatesFromJSONTyped = exports.CateringItemRatesFromJSON = exports.instanceOfCateringItemRates = void 0;
const runtime_1 = require("../runtime");
const CateringCodesType_1 = require("./CateringCodesType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the CateringItemRates interface.
 */
function instanceOfCateringItemRates(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCateringItemRates = instanceOfCateringItemRates;
function CateringItemRatesFromJSON(json) {
    return CateringItemRatesFromJSONTyped(json, false);
}
exports.CateringItemRatesFromJSON = CateringItemRatesFromJSON;
function CateringItemRatesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'itemRates': !(0, runtime_1.exists)(json, 'itemRates') ? undefined : (0, CateringCodesType_1.CateringCodesTypeFromJSON)(json['itemRates']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.CateringItemRatesFromJSONTyped = CateringItemRatesFromJSONTyped;
function CateringItemRatesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'itemRates': (0, CateringCodesType_1.CateringCodesTypeToJSON)(value.itemRates),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.CateringItemRatesToJSON = CateringItemRatesToJSON;