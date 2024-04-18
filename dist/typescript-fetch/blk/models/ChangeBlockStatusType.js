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
exports.ChangeBlockStatusTypeToJSON = exports.ChangeBlockStatusTypeFromJSONTyped = exports.ChangeBlockStatusTypeFromJSON = exports.instanceOfChangeBlockStatusType = void 0;
const runtime_1 = require("../runtime");
const BlockId_1 = require("./BlockId");
const CancellationDetailsType_1 = require("./CancellationDetailsType");
const MasterBlockInfoType_1 = require("./MasterBlockInfoType");
/**
 * Check if a given object implements the ChangeBlockStatusType interface.
 */
function instanceOfChangeBlockStatusType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChangeBlockStatusType = instanceOfChangeBlockStatusType;
function ChangeBlockStatusTypeFromJSON(json) {
    return ChangeBlockStatusTypeFromJSONTyped(json, false);
}
exports.ChangeBlockStatusTypeFromJSON = ChangeBlockStatusTypeFromJSON;
function ChangeBlockStatusTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'applyChangesToCateringSatus': !(0, runtime_1.exists)(json, 'applyChangesToCateringSatus') ? undefined : json['applyChangesToCateringSatus'],
        'blockId': !(0, runtime_1.exists)(json, 'blockId') ? undefined : (0, BlockId_1.BlockIdFromJSON)(json['blockId']),
        'cancelAllPMReservations': !(0, runtime_1.exists)(json, 'cancelAllPMReservations') ? undefined : json['cancelAllPMReservations'],
        'cancellationDetails': !(0, runtime_1.exists)(json, 'cancellationDetails') ? undefined : (0, CancellationDetailsType_1.CancellationDetailsTypeFromJSON)(json['cancellationDetails']),
        'currentBlockStatus': !(0, runtime_1.exists)(json, 'currentBlockStatus') ? undefined : json['currentBlockStatus'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'masterSubBlockInfo': !(0, runtime_1.exists)(json, 'masterSubBlockInfo') ? undefined : (0, MasterBlockInfoType_1.MasterBlockInfoTypeFromJSON)(json['masterSubBlockInfo']),
        'newBlockStatus': !(0, runtime_1.exists)(json, 'newBlockStatus') ? undefined : json['newBlockStatus'],
        'overbookAll': !(0, runtime_1.exists)(json, 'overbookAll') ? undefined : json['overbookAll'],
        'overrideEventsProcessingWarnings': !(0, runtime_1.exists)(json, 'overrideEventsProcessingWarnings') ? undefined : json['overrideEventsProcessingWarnings'],
        'pMReservationsCancellationDetails': !(0, runtime_1.exists)(json, 'pMReservationsCancellationDetails') ? undefined : (0, CancellationDetailsType_1.CancellationDetailsTypeFromJSON)(json['pMReservationsCancellationDetails']),
        'reservationType': !(0, runtime_1.exists)(json, 'reservationType') ? undefined : json['reservationType'],
    };
}
exports.ChangeBlockStatusTypeFromJSONTyped = ChangeBlockStatusTypeFromJSONTyped;
function ChangeBlockStatusTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'applyChangesToCateringSatus': value.applyChangesToCateringSatus,
        'blockId': (0, BlockId_1.BlockIdToJSON)(value.blockId),
        'cancelAllPMReservations': value.cancelAllPMReservations,
        'cancellationDetails': (0, CancellationDetailsType_1.CancellationDetailsTypeToJSON)(value.cancellationDetails),
        'currentBlockStatus': value.currentBlockStatus,
        'hotelId': value.hotelId,
        'masterSubBlockInfo': (0, MasterBlockInfoType_1.MasterBlockInfoTypeToJSON)(value.masterSubBlockInfo),
        'newBlockStatus': value.newBlockStatus,
        'overbookAll': value.overbookAll,
        'overrideEventsProcessingWarnings': value.overrideEventsProcessingWarnings,
        'pMReservationsCancellationDetails': (0, CancellationDetailsType_1.CancellationDetailsTypeToJSON)(value.pMReservationsCancellationDetails),
        'reservationType': value.reservationType,
    };
}
exports.ChangeBlockStatusTypeToJSON = ChangeBlockStatusTypeToJSON;