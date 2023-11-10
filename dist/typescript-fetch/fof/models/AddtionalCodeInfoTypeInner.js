"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddtionalCodeInfoTypeInnerToJSON = exports.AddtionalCodeInfoTypeInnerFromJSONTyped = exports.AddtionalCodeInfoTypeInnerFromJSON = exports.instanceOfAddtionalCodeInfoTypeInner = void 0;
const runtime_1 = require("../runtime");
const MasterInfoCodeDetailType_1 = require("./MasterInfoCodeDetailType");
/**
 * Check if a given object implements the AddtionalCodeInfoTypeInner interface.
 */
function instanceOfAddtionalCodeInfoTypeInner(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAddtionalCodeInfoTypeInner = instanceOfAddtionalCodeInfoTypeInner;
function AddtionalCodeInfoTypeInnerFromJSON(json) {
    return AddtionalCodeInfoTypeInnerFromJSONTyped(json, false);
}
exports.AddtionalCodeInfoTypeInnerFromJSON = AddtionalCodeInfoTypeInnerFromJSON;
function AddtionalCodeInfoTypeInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : (0, MasterInfoCodeDetailType_1.MasterInfoCodeDetailTypeFromJSON)(json['name']),
        'value': !(0, runtime_1.exists)(json, 'value') ? undefined : json['value'],
    };
}
exports.AddtionalCodeInfoTypeInnerFromJSONTyped = AddtionalCodeInfoTypeInnerFromJSONTyped;
function AddtionalCodeInfoTypeInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': (0, MasterInfoCodeDetailType_1.MasterInfoCodeDetailTypeToJSON)(value.name),
        'value': value.value,
    };
}
exports.AddtionalCodeInfoTypeInnerToJSON = AddtionalCodeInfoTypeInnerToJSON;
