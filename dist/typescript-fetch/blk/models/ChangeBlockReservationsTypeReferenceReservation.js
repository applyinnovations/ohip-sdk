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
exports.ChangeBlockReservationsTypeReferenceReservationToJSON = exports.ChangeBlockReservationsTypeReferenceReservationFromJSONTyped = exports.ChangeBlockReservationsTypeReferenceReservationFromJSON = exports.instanceOfChangeBlockReservationsTypeReferenceReservation = void 0;
const runtime_1 = require("../runtime");
const ReservationSnapshotType_1 = require("./ReservationSnapshotType");
/**
 * Check if a given object implements the ChangeBlockReservationsTypeReferenceReservation interface.
 */
function instanceOfChangeBlockReservationsTypeReferenceReservation(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChangeBlockReservationsTypeReferenceReservation = instanceOfChangeBlockReservationsTypeReferenceReservation;
function ChangeBlockReservationsTypeReferenceReservationFromJSON(json) {
    return ChangeBlockReservationsTypeReferenceReservationFromJSONTyped(json, false);
}
exports.ChangeBlockReservationsTypeReferenceReservationFromJSON = ChangeBlockReservationsTypeReferenceReservationFromJSON;
function ChangeBlockReservationsTypeReferenceReservationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'postChangeSnapshot': !(0, runtime_1.exists)(json, 'postChangeSnapshot') ? undefined : (0, ReservationSnapshotType_1.ReservationSnapshotTypeFromJSON)(json['postChangeSnapshot']),
        'preChangeSnapshot': !(0, runtime_1.exists)(json, 'preChangeSnapshot') ? undefined : (0, ReservationSnapshotType_1.ReservationSnapshotTypeFromJSON)(json['preChangeSnapshot']),
    };
}
exports.ChangeBlockReservationsTypeReferenceReservationFromJSONTyped = ChangeBlockReservationsTypeReferenceReservationFromJSONTyped;
function ChangeBlockReservationsTypeReferenceReservationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'postChangeSnapshot': (0, ReservationSnapshotType_1.ReservationSnapshotTypeToJSON)(value.postChangeSnapshot),
        'preChangeSnapshot': (0, ReservationSnapshotType_1.ReservationSnapshotTypeToJSON)(value.preChangeSnapshot),
    };
}
exports.ChangeBlockReservationsTypeReferenceReservationToJSON = ChangeBlockReservationsTypeReferenceReservationToJSON;
