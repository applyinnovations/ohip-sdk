"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutHurdleRatesRequestToJSON = exports.PutHurdleRatesRequestFromJSONTyped = exports.PutHurdleRatesRequestFromJSON = exports.instanceOfPutHurdleRatesRequest = void 0;
const runtime_1 = require("../runtime");
const HurdleRatesEditType_1 = require("./HurdleRatesEditType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the PutHurdleRatesRequest interface.
 */
function instanceOfPutHurdleRatesRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPutHurdleRatesRequest = instanceOfPutHurdleRatesRequest;
function PutHurdleRatesRequestFromJSON(json) {
    return PutHurdleRatesRequestFromJSONTyped(json, false);
}
exports.PutHurdleRatesRequestFromJSON = PutHurdleRatesRequestFromJSON;
function PutHurdleRatesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hurdleRates': !(0, runtime_1.exists)(json, 'hurdleRates') ? undefined : (0, HurdleRatesEditType_1.HurdleRatesEditTypeFromJSON)(json['hurdleRates']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.PutHurdleRatesRequestFromJSONTyped = PutHurdleRatesRequestFromJSONTyped;
function PutHurdleRatesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hurdleRates': (0, HurdleRatesEditType_1.HurdleRatesEditTypeToJSON)(value.hurdleRates),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.PutHurdleRatesRequestToJSON = PutHurdleRatesRequestToJSON;
