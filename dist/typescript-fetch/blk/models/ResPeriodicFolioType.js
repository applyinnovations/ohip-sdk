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
exports.ResPeriodicFolioTypeToJSON = exports.ResPeriodicFolioTypeFromJSONTyped = exports.ResPeriodicFolioTypeFromJSON = exports.instanceOfResPeriodicFolioType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ResPeriodicFolioType interface.
 */
function instanceOfResPeriodicFolioType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResPeriodicFolioType = instanceOfResPeriodicFolioType;
function ResPeriodicFolioTypeFromJSON(json) {
    return ResPeriodicFolioTypeFromJSONTyped(json, false);
}
exports.ResPeriodicFolioTypeFromJSON = ResPeriodicFolioTypeFromJSON;
function ResPeriodicFolioTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'frequency': !(0, runtime_1.exists)(json, 'frequency') ? undefined : json['frequency'],
        'lastFolioDate': !(0, runtime_1.exists)(json, 'lastFolioDate') ? undefined : (new Date(json['lastFolioDate'])),
        'lastSettlementDate': !(0, runtime_1.exists)(json, 'lastSettlementDate') ? undefined : (new Date(json['lastSettlementDate'])),
    };
}
exports.ResPeriodicFolioTypeFromJSONTyped = ResPeriodicFolioTypeFromJSONTyped;
function ResPeriodicFolioTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'frequency': value.frequency,
        'lastFolioDate': value.lastFolioDate === undefined ? undefined : (value.lastFolioDate.toISOString().substr(0, 10)),
        'lastSettlementDate': value.lastSettlementDate === undefined ? undefined : (value.lastSettlementDate.toISOString().substr(0, 10)),
    };
}
exports.ResPeriodicFolioTypeToJSON = ResPeriodicFolioTypeToJSON;
