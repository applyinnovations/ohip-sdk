"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutReservationMethodsRequestToJSON = exports.PutReservationMethodsRequestFromJSONTyped = exports.PutReservationMethodsRequestFromJSON = exports.instanceOfPutReservationMethodsRequest = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const ReservationMethodsType_1 = require("./ReservationMethodsType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the PutReservationMethodsRequest interface.
 */
function instanceOfPutReservationMethodsRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPutReservationMethodsRequest = instanceOfPutReservationMethodsRequest;
function PutReservationMethodsRequestFromJSON(json) {
    return PutReservationMethodsRequestFromJSONTyped(json, false);
}
exports.PutReservationMethodsRequestFromJSON = PutReservationMethodsRequestFromJSON;
function PutReservationMethodsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'reservationMethods': !(0, runtime_1.exists)(json, 'reservationMethods') ? undefined : (0, ReservationMethodsType_1.ReservationMethodsTypeFromJSON)(json['reservationMethods']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.PutReservationMethodsRequestFromJSONTyped = PutReservationMethodsRequestFromJSONTyped;
function PutReservationMethodsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'reservationMethods': (0, ReservationMethodsType_1.ReservationMethodsTypeToJSON)(value.reservationMethods),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.PutReservationMethodsRequestToJSON = PutReservationMethodsRequestToJSON;
