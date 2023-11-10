"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourSeriesToJSON = exports.TourSeriesFromJSONTyped = exports.TourSeriesFromJSON = exports.instanceOfTourSeries = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const ResponseInstructionType_1 = require("./ResponseInstructionType");
const TourSeriesType_1 = require("./TourSeriesType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the TourSeries interface.
 */
function instanceOfTourSeries(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTourSeries = instanceOfTourSeries;
function TourSeriesFromJSON(json) {
    return TourSeriesFromJSONTyped(json, false);
}
exports.TourSeriesFromJSON = TourSeriesFromJSON;
function TourSeriesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'criteria': !(0, runtime_1.exists)(json, 'criteria') ? undefined : (0, TourSeriesType_1.TourSeriesTypeFromJSON)(json['criteria']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'responseInstruction': !(0, runtime_1.exists)(json, 'responseInstruction') ? undefined : (0, ResponseInstructionType_1.ResponseInstructionTypeFromJSON)(json['responseInstruction']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.TourSeriesFromJSONTyped = TourSeriesFromJSONTyped;
function TourSeriesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'criteria': (0, TourSeriesType_1.TourSeriesTypeToJSON)(value.criteria),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'responseInstruction': (0, ResponseInstructionType_1.ResponseInstructionTypeToJSON)(value.responseInstruction),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.TourSeriesToJSON = TourSeriesToJSON;
