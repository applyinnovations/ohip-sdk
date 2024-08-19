"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingInfoTypeToJSON = exports.RoutingInfoTypeFromJSONTyped = exports.RoutingInfoTypeFromJSON = exports.instanceOfRoutingInfoType = void 0;
const runtime_1 = require("../runtime");
const RoutingInfoTypeComp_1 = require("./RoutingInfoTypeComp");
const RoutingInfoTypeFolio_1 = require("./RoutingInfoTypeFolio");
const RoutingInfoTypeRequest_1 = require("./RoutingInfoTypeRequest");
const RoutingInfoTypeRoom_1 = require("./RoutingInfoTypeRoom");
/**
 * Check if a given object implements the RoutingInfoType interface.
 */
function instanceOfRoutingInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoutingInfoType = instanceOfRoutingInfoType;
function RoutingInfoTypeFromJSON(json) {
    return RoutingInfoTypeFromJSONTyped(json, false);
}
exports.RoutingInfoTypeFromJSON = RoutingInfoTypeFromJSON;
function RoutingInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'comp': !(0, runtime_1.exists)(json, 'comp') ? undefined : (0, RoutingInfoTypeComp_1.RoutingInfoTypeCompFromJSON)(json['comp']),
        'folio': !(0, runtime_1.exists)(json, 'folio') ? undefined : (0, RoutingInfoTypeFolio_1.RoutingInfoTypeFolioFromJSON)(json['folio']),
        'refreshFolio': !(0, runtime_1.exists)(json, 'refreshFolio') ? undefined : json['refreshFolio'],
        'request': !(0, runtime_1.exists)(json, 'request') ? undefined : (0, RoutingInfoTypeRequest_1.RoutingInfoTypeRequestFromJSON)(json['request']),
        'room': !(0, runtime_1.exists)(json, 'room') ? undefined : (0, RoutingInfoTypeRoom_1.RoutingInfoTypeRoomFromJSON)(json['room']),
    };
}
exports.RoutingInfoTypeFromJSONTyped = RoutingInfoTypeFromJSONTyped;
function RoutingInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'comp': (0, RoutingInfoTypeComp_1.RoutingInfoTypeCompToJSON)(value.comp),
        'folio': (0, RoutingInfoTypeFolio_1.RoutingInfoTypeFolioToJSON)(value.folio),
        'refreshFolio': value.refreshFolio,
        'request': (0, RoutingInfoTypeRequest_1.RoutingInfoTypeRequestToJSON)(value.request),
        'room': (0, RoutingInfoTypeRoom_1.RoutingInfoTypeRoomToJSON)(value.room),
    };
}
exports.RoutingInfoTypeToJSON = RoutingInfoTypeToJSON;
