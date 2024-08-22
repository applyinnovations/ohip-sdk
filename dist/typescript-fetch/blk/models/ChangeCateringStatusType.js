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
exports.ChangeCateringStatusTypeToJSON = exports.ChangeCateringStatusTypeFromJSONTyped = exports.ChangeCateringStatusTypeFromJSON = exports.instanceOfChangeCateringStatusType = void 0;
const runtime_1 = require("../runtime");
const BlockId_1 = require("./BlockId");
const CancellationDetailsType_1 = require("./CancellationDetailsType");
const EventAttendeesType_1 = require("./EventAttendeesType");
const MasterBlockInfoType_1 = require("./MasterBlockInfoType");
/**
 * Check if a given object implements the ChangeCateringStatusType interface.
 */
function instanceOfChangeCateringStatusType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChangeCateringStatusType = instanceOfChangeCateringStatusType;
function ChangeCateringStatusTypeFromJSON(json) {
    return ChangeCateringStatusTypeFromJSONTyped(json, false);
}
exports.ChangeCateringStatusTypeFromJSON = ChangeCateringStatusTypeFromJSON;
function ChangeCateringStatusTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockId': !(0, runtime_1.exists)(json, 'blockId') ? undefined : (0, BlockId_1.BlockIdFromJSON)(json['blockId']),
        'cancellationDetails': !(0, runtime_1.exists)(json, 'cancellationDetails') ? undefined : (0, CancellationDetailsType_1.CancellationDetailsTypeFromJSON)(json['cancellationDetails']),
        'currentCateringStatus': !(0, runtime_1.exists)(json, 'currentCateringStatus') ? undefined : json['currentCateringStatus'],
        'eventAttendees': !(0, runtime_1.exists)(json, 'eventAttendees') ? undefined : (0, EventAttendeesType_1.EventAttendeesTypeFromJSON)(json['eventAttendees']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'masterSubBlockInfo': !(0, runtime_1.exists)(json, 'masterSubBlockInfo') ? undefined : (0, MasterBlockInfoType_1.MasterBlockInfoTypeFromJSON)(json['masterSubBlockInfo']),
        'newCateringStatus': !(0, runtime_1.exists)(json, 'newCateringStatus') ? undefined : json['newCateringStatus'],
        'overrideEventsProcessingWarnings': !(0, runtime_1.exists)(json, 'overrideEventsProcessingWarnings') ? undefined : json['overrideEventsProcessingWarnings'],
    };
}
exports.ChangeCateringStatusTypeFromJSONTyped = ChangeCateringStatusTypeFromJSONTyped;
function ChangeCateringStatusTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockId': (0, BlockId_1.BlockIdToJSON)(value.blockId),
        'cancellationDetails': (0, CancellationDetailsType_1.CancellationDetailsTypeToJSON)(value.cancellationDetails),
        'currentCateringStatus': value.currentCateringStatus,
        'eventAttendees': (0, EventAttendeesType_1.EventAttendeesTypeToJSON)(value.eventAttendees),
        'hotelId': value.hotelId,
        'masterSubBlockInfo': (0, MasterBlockInfoType_1.MasterBlockInfoTypeToJSON)(value.masterSubBlockInfo),
        'newCateringStatus': value.newCateringStatus,
        'overrideEventsProcessingWarnings': value.overrideEventsProcessingWarnings,
    };
}
exports.ChangeCateringStatusTypeToJSON = ChangeCateringStatusTypeToJSON;
