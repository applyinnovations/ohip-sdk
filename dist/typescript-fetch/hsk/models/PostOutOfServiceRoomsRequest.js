"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostOutOfServiceRoomsRequestToJSON = exports.PostOutOfServiceRoomsRequestFromJSONTyped = exports.PostOutOfServiceRoomsRequestFromJSON = exports.instanceOfPostOutOfServiceRoomsRequest = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const RoomRepairOutOfServiceCriteria_1 = require("./RoomRepairOutOfServiceCriteria");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the PostOutOfServiceRoomsRequest interface.
 */
function instanceOfPostOutOfServiceRoomsRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPostOutOfServiceRoomsRequest = instanceOfPostOutOfServiceRoomsRequest;
function PostOutOfServiceRoomsRequestFromJSON(json) {
    return PostOutOfServiceRoomsRequestFromJSONTyped(json, false);
}
exports.PostOutOfServiceRoomsRequestFromJSON = PostOutOfServiceRoomsRequestFromJSON;
function PostOutOfServiceRoomsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'criteria': !(0, runtime_1.exists)(json, 'criteria') ? undefined : (0, RoomRepairOutOfServiceCriteria_1.RoomRepairOutOfServiceCriteriaFromJSON)(json['criteria']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.PostOutOfServiceRoomsRequestFromJSONTyped = PostOutOfServiceRoomsRequestFromJSONTyped;
function PostOutOfServiceRoomsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'criteria': (0, RoomRepairOutOfServiceCriteria_1.RoomRepairOutOfServiceCriteriaToJSON)(value.criteria),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.PostOutOfServiceRoomsRequestToJSON = PostOutOfServiceRoomsRequestToJSON;
