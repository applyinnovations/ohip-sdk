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
exports.TourSeriesBlockTypeToJSON = exports.TourSeriesBlockTypeFromJSONTyped = exports.TourSeriesBlockTypeFromJSON = exports.instanceOfTourSeriesBlockType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the TourSeriesBlockType interface.
 */
function instanceOfTourSeriesBlockType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTourSeriesBlockType = instanceOfTourSeriesBlockType;
function TourSeriesBlockTypeFromJSON(json) {
    return TourSeriesBlockTypeFromJSONTyped(json, false);
}
exports.TourSeriesBlockTypeFromJSON = TourSeriesBlockTypeFromJSON;
function TourSeriesBlockTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockCode': !(0, runtime_1.exists)(json, 'blockCode') ? undefined : json['blockCode'],
        'blockName': !(0, runtime_1.exists)(json, 'blockName') ? undefined : json['blockName'],
        'blockStatus': !(0, runtime_1.exists)(json, 'blockStatus') ? undefined : json['blockStatus'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'startDate': !(0, runtime_1.exists)(json, 'startDate') ? undefined : (new Date(json['startDate'])),
    };
}
exports.TourSeriesBlockTypeFromJSONTyped = TourSeriesBlockTypeFromJSONTyped;
function TourSeriesBlockTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockCode': value.blockCode,
        'blockName': value.blockName,
        'blockStatus': value.blockStatus,
        'hotelId': value.hotelId,
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substring(0, 10)),
    };
}
exports.TourSeriesBlockTypeToJSON = TourSeriesBlockTypeToJSON;