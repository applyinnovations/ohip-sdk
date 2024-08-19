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
exports.RoutingInfoTypeToJSON = exports.RoutingInfoTypeFromJSONTyped = exports.RoutingInfoTypeFromJSON = exports.instanceOfRoutingInfoType = void 0;
const runtime_1 = require("../runtime");
const ResvRoutingCriteriaTypeComp_1 = require("./ResvRoutingCriteriaTypeComp");
const ResvRoutingCriteriaTypeFolio_1 = require("./ResvRoutingCriteriaTypeFolio");
const ResvRoutingCriteriaTypeRequest_1 = require("./ResvRoutingCriteriaTypeRequest");
const ResvRoutingCriteriaTypeRoom_1 = require("./ResvRoutingCriteriaTypeRoom");
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
        'comp': !(0, runtime_1.exists)(json, 'comp') ? undefined : (0, ResvRoutingCriteriaTypeComp_1.ResvRoutingCriteriaTypeCompFromJSON)(json['comp']),
        'folio': !(0, runtime_1.exists)(json, 'folio') ? undefined : (0, ResvRoutingCriteriaTypeFolio_1.ResvRoutingCriteriaTypeFolioFromJSON)(json['folio']),
        'refreshFolio': !(0, runtime_1.exists)(json, 'refreshFolio') ? undefined : json['refreshFolio'],
        'request': !(0, runtime_1.exists)(json, 'request') ? undefined : (0, ResvRoutingCriteriaTypeRequest_1.ResvRoutingCriteriaTypeRequestFromJSON)(json['request']),
        'room': !(0, runtime_1.exists)(json, 'room') ? undefined : (0, ResvRoutingCriteriaTypeRoom_1.ResvRoutingCriteriaTypeRoomFromJSON)(json['room']),
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
        'comp': (0, ResvRoutingCriteriaTypeComp_1.ResvRoutingCriteriaTypeCompToJSON)(value.comp),
        'folio': (0, ResvRoutingCriteriaTypeFolio_1.ResvRoutingCriteriaTypeFolioToJSON)(value.folio),
        'refreshFolio': value.refreshFolio,
        'request': (0, ResvRoutingCriteriaTypeRequest_1.ResvRoutingCriteriaTypeRequestToJSON)(value.request),
        'room': (0, ResvRoutingCriteriaTypeRoom_1.ResvRoutingCriteriaTypeRoomToJSON)(value.room),
    };
}
exports.RoutingInfoTypeToJSON = RoutingInfoTypeToJSON;
