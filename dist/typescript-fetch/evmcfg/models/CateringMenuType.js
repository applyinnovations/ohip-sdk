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
exports.CateringMenuTypeToJSON = exports.CateringMenuTypeFromJSONTyped = exports.CateringMenuTypeFromJSON = exports.instanceOfCateringMenuType = void 0;
const runtime_1 = require("../runtime");
const CateringMenuDetailListType_1 = require("./CateringMenuDetailListType");
const CateringMenuInfoType_1 = require("./CateringMenuInfoType");
const CateringMenuRevListType_1 = require("./CateringMenuRevListType");
const CateringMultiChoiceMenuListType_1 = require("./CateringMultiChoiceMenuListType");
const EventResourceNotesType_1 = require("./EventResourceNotesType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the CateringMenuType interface.
 */
function instanceOfCateringMenuType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCateringMenuType = instanceOfCateringMenuType;
function CateringMenuTypeFromJSON(json) {
    return CateringMenuTypeFromJSONTyped(json, false);
}
exports.CateringMenuTypeFromJSON = CateringMenuTypeFromJSON;
function CateringMenuTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'classId': !(0, runtime_1.exists)(json, 'classId') ? undefined : json['classId'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['id']),
        'info': !(0, runtime_1.exists)(json, 'info') ? undefined : (0, CateringMenuInfoType_1.CateringMenuInfoTypeFromJSON)(json['info']),
        'menuDetailList': !(0, runtime_1.exists)(json, 'menuDetailList') ? undefined : (0, CateringMenuDetailListType_1.CateringMenuDetailListTypeFromJSON)(json['menuDetailList']),
        'menuNoteList': !(0, runtime_1.exists)(json, 'menuNoteList') ? undefined : (0, EventResourceNotesType_1.EventResourceNotesTypeFromJSON)(json['menuNoteList']),
        'multiChoiceList': !(0, runtime_1.exists)(json, 'multiChoiceList') ? undefined : (0, CateringMultiChoiceMenuListType_1.CateringMultiChoiceMenuListTypeFromJSON)(json['multiChoiceList']),
        'revenueList': !(0, runtime_1.exists)(json, 'revenueList') ? undefined : (0, CateringMenuRevListType_1.CateringMenuRevListTypeFromJSON)(json['revenueList']),
    };
}
exports.CateringMenuTypeFromJSONTyped = CateringMenuTypeFromJSONTyped;
function CateringMenuTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'classId': value.classId,
        'hotelId': value.hotelId,
        'id': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.id),
        'info': (0, CateringMenuInfoType_1.CateringMenuInfoTypeToJSON)(value.info),
        'menuDetailList': (0, CateringMenuDetailListType_1.CateringMenuDetailListTypeToJSON)(value.menuDetailList),
        'menuNoteList': (0, EventResourceNotesType_1.EventResourceNotesTypeToJSON)(value.menuNoteList),
        'multiChoiceList': (0, CateringMultiChoiceMenuListType_1.CateringMultiChoiceMenuListTypeToJSON)(value.multiChoiceList),
        'revenueList': (0, CateringMenuRevListType_1.CateringMenuRevListTypeToJSON)(value.revenueList),
    };
}
exports.CateringMenuTypeToJSON = CateringMenuTypeToJSON;
