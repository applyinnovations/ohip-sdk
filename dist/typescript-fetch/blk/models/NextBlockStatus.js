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
exports.NextBlockStatusToJSON = exports.NextBlockStatusFromJSONTyped = exports.NextBlockStatusFromJSON = exports.instanceOfNextBlockStatus = void 0;
const runtime_1 = require("../runtime");
const BookingStatusDetailType_1 = require("./BookingStatusDetailType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the NextBlockStatus interface.
 */
function instanceOfNextBlockStatus(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfNextBlockStatus = instanceOfNextBlockStatus;
function NextBlockStatusFromJSON(json) {
    return NextBlockStatusFromJSONTyped(json, false);
}
exports.NextBlockStatusFromJSON = NextBlockStatusFromJSON;
function NextBlockStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockNextStatusList': !(0, runtime_1.exists)(json, 'blockNextStatusList') ? undefined : (json['blockNextStatusList'].map(BookingStatusDetailType_1.BookingStatusDetailTypeFromJSON)),
        'cateringNextStatusList': !(0, runtime_1.exists)(json, 'cateringNextStatusList') ? undefined : (json['cateringNextStatusList'].map(BookingStatusDetailType_1.BookingStatusDetailTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.NextBlockStatusFromJSONTyped = NextBlockStatusFromJSONTyped;
function NextBlockStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockNextStatusList': value.blockNextStatusList === undefined ? undefined : (value.blockNextStatusList.map(BookingStatusDetailType_1.BookingStatusDetailTypeToJSON)),
        'cateringNextStatusList': value.cateringNextStatusList === undefined ? undefined : (value.cateringNextStatusList.map(BookingStatusDetailType_1.BookingStatusDetailTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.NextBlockStatusToJSON = NextBlockStatusToJSON;
