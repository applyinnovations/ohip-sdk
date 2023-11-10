"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeChannelSellLimitsByDateRequestToJSON = exports.ChangeChannelSellLimitsByDateRequestFromJSONTyped = exports.ChangeChannelSellLimitsByDateRequestFromJSON = exports.instanceOfChangeChannelSellLimitsByDateRequest = void 0;
const runtime_1 = require("../runtime");
const ChannelSellLimitsByDateType_1 = require("./ChannelSellLimitsByDateType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the ChangeChannelSellLimitsByDateRequest interface.
 */
function instanceOfChangeChannelSellLimitsByDateRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChangeChannelSellLimitsByDateRequest = instanceOfChangeChannelSellLimitsByDateRequest;
function ChangeChannelSellLimitsByDateRequestFromJSON(json) {
    return ChangeChannelSellLimitsByDateRequestFromJSONTyped(json, false);
}
exports.ChangeChannelSellLimitsByDateRequestFromJSON = ChangeChannelSellLimitsByDateRequestFromJSON;
function ChangeChannelSellLimitsByDateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'adjustOverlappingSchedules': !(0, runtime_1.exists)(json, 'adjustOverlappingSchedules') ? undefined : json['adjustOverlappingSchedules'],
        'sellLimits': !(0, runtime_1.exists)(json, 'sellLimits') ? undefined : (0, ChannelSellLimitsByDateType_1.ChannelSellLimitsByDateTypeFromJSON)(json['sellLimits']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.ChangeChannelSellLimitsByDateRequestFromJSONTyped = ChangeChannelSellLimitsByDateRequestFromJSONTyped;
function ChangeChannelSellLimitsByDateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'adjustOverlappingSchedules': value.adjustOverlappingSchedules,
        'sellLimits': (0, ChannelSellLimitsByDateType_1.ChannelSellLimitsByDateTypeToJSON)(value.sellLimits),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.ChangeChannelSellLimitsByDateRequestToJSON = ChangeChannelSellLimitsByDateRequestToJSON;
