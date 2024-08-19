"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationStayHistoryFutureInfoTypeToJSON = exports.ReservationStayHistoryFutureInfoTypeFromJSONTyped = exports.ReservationStayHistoryFutureInfoTypeFromJSON = exports.instanceOfReservationStayHistoryFutureInfoType = void 0;
const runtime_1 = require("../runtime");
const StayFutureListType_1 = require("./StayFutureListType");
const StayHistoryListType_1 = require("./StayHistoryListType");
/**
 * Check if a given object implements the ReservationStayHistoryFutureInfoType interface.
 */
function instanceOfReservationStayHistoryFutureInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationStayHistoryFutureInfoType = instanceOfReservationStayHistoryFutureInfoType;
function ReservationStayHistoryFutureInfoTypeFromJSON(json) {
    return ReservationStayHistoryFutureInfoTypeFromJSONTyped(json, false);
}
exports.ReservationStayHistoryFutureInfoTypeFromJSON = ReservationStayHistoryFutureInfoTypeFromJSON;
function ReservationStayHistoryFutureInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'futureList': !(0, runtime_1.exists)(json, 'futureList') ? undefined : (0, StayFutureListType_1.StayFutureListTypeFromJSON)(json['futureList']),
        'historyList': !(0, runtime_1.exists)(json, 'historyList') ? undefined : (0, StayHistoryListType_1.StayHistoryListTypeFromJSON)(json['historyList']),
    };
}
exports.ReservationStayHistoryFutureInfoTypeFromJSONTyped = ReservationStayHistoryFutureInfoTypeFromJSONTyped;
function ReservationStayHistoryFutureInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'futureList': (0, StayFutureListType_1.StayFutureListTypeToJSON)(value.futureList),
        'historyList': (0, StayHistoryListType_1.StayHistoryListTypeToJSON)(value.historyList),
    };
}
exports.ReservationStayHistoryFutureInfoTypeToJSON = ReservationStayHistoryFutureInfoTypeToJSON;
