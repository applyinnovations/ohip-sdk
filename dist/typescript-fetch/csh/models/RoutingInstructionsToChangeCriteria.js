"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingInstructionsToChangeCriteriaToJSON = exports.RoutingInstructionsToChangeCriteriaFromJSONTyped = exports.RoutingInstructionsToChangeCriteriaFromJSON = exports.instanceOfRoutingInstructionsToChangeCriteria = void 0;
const runtime_1 = require("../runtime");
const ReservationId_1 = require("./ReservationId");
const RoutingInfoType_1 = require("./RoutingInfoType");
const RoutingInstructionsToChangeCriteriaComp_1 = require("./RoutingInstructionsToChangeCriteriaComp");
const RoutingInstructionsToChangeCriteriaFolio_1 = require("./RoutingInstructionsToChangeCriteriaFolio");
const RoutingInstructionsToChangeCriteriaRequest_1 = require("./RoutingInstructionsToChangeCriteriaRequest");
const RoutingInstructionsToChangeCriteriaRoom_1 = require("./RoutingInstructionsToChangeCriteriaRoom");
/**
 * Check if a given object implements the RoutingInstructionsToChangeCriteria interface.
 */
function instanceOfRoutingInstructionsToChangeCriteria(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoutingInstructionsToChangeCriteria = instanceOfRoutingInstructionsToChangeCriteria;
function RoutingInstructionsToChangeCriteriaFromJSON(json) {
    return RoutingInstructionsToChangeCriteriaFromJSONTyped(json, false);
}
exports.RoutingInstructionsToChangeCriteriaFromJSON = RoutingInstructionsToChangeCriteriaFromJSON;
function RoutingInstructionsToChangeCriteriaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'comp': !(0, runtime_1.exists)(json, 'comp') ? undefined : (0, RoutingInstructionsToChangeCriteriaComp_1.RoutingInstructionsToChangeCriteriaCompFromJSON)(json['comp']),
        'folio': !(0, runtime_1.exists)(json, 'folio') ? undefined : (0, RoutingInstructionsToChangeCriteriaFolio_1.RoutingInstructionsToChangeCriteriaFolioFromJSON)(json['folio']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'newRoutingInfo': !(0, runtime_1.exists)(json, 'newRoutingInfo') ? undefined : (0, RoutingInfoType_1.RoutingInfoTypeFromJSON)(json['newRoutingInfo']),
        'refreshFolio': !(0, runtime_1.exists)(json, 'refreshFolio') ? undefined : json['refreshFolio'],
        'request': !(0, runtime_1.exists)(json, 'request') ? undefined : (0, RoutingInstructionsToChangeCriteriaRequest_1.RoutingInstructionsToChangeCriteriaRequestFromJSON)(json['request']),
        'reservationId': !(0, runtime_1.exists)(json, 'reservationId') ? undefined : (0, ReservationId_1.ReservationIdFromJSON)(json['reservationId']),
        'retrievePostingsForRoomRouting': !(0, runtime_1.exists)(json, 'retrievePostingsForRoomRouting') ? undefined : json['retrievePostingsForRoomRouting'],
        'room': !(0, runtime_1.exists)(json, 'room') ? undefined : (0, RoutingInstructionsToChangeCriteriaRoom_1.RoutingInstructionsToChangeCriteriaRoomFromJSON)(json['room']),
    };
}
exports.RoutingInstructionsToChangeCriteriaFromJSONTyped = RoutingInstructionsToChangeCriteriaFromJSONTyped;
function RoutingInstructionsToChangeCriteriaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'comp': (0, RoutingInstructionsToChangeCriteriaComp_1.RoutingInstructionsToChangeCriteriaCompToJSON)(value.comp),
        'folio': (0, RoutingInstructionsToChangeCriteriaFolio_1.RoutingInstructionsToChangeCriteriaFolioToJSON)(value.folio),
        'hotelId': value.hotelId,
        'newRoutingInfo': (0, RoutingInfoType_1.RoutingInfoTypeToJSON)(value.newRoutingInfo),
        'refreshFolio': value.refreshFolio,
        'request': (0, RoutingInstructionsToChangeCriteriaRequest_1.RoutingInstructionsToChangeCriteriaRequestToJSON)(value.request),
        'reservationId': (0, ReservationId_1.ReservationIdToJSON)(value.reservationId),
        'retrievePostingsForRoomRouting': value.retrievePostingsForRoomRouting,
        'room': (0, RoutingInstructionsToChangeCriteriaRoom_1.RoutingInstructionsToChangeCriteriaRoomToJSON)(value.room),
    };
}
exports.RoutingInstructionsToChangeCriteriaToJSON = RoutingInstructionsToChangeCriteriaToJSON;
