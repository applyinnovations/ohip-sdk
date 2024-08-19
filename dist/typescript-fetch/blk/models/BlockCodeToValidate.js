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
exports.BlockCodeToValidateToJSON = exports.BlockCodeToValidateFromJSONTyped = exports.BlockCodeToValidateFromJSON = exports.instanceOfBlockCodeToValidate = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const UniqueIDType_1 = require("./UniqueIDType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the BlockCodeToValidate interface.
 */
function instanceOfBlockCodeToValidate(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockCodeToValidate = instanceOfBlockCodeToValidate;
function BlockCodeToValidateFromJSON(json) {
    return BlockCodeToValidateFromJSONTyped(json, false);
}
exports.BlockCodeToValidateFromJSON = BlockCodeToValidateFromJSON;
function BlockCodeToValidateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockIdList': !(0, runtime_1.exists)(json, 'blockIdList') ? undefined : (json['blockIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : json['endDate'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'startDate': !(0, runtime_1.exists)(json, 'startDate') ? undefined : json['startDate'],
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.BlockCodeToValidateFromJSONTyped = BlockCodeToValidateFromJSONTyped;
function BlockCodeToValidateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockIdList': value.blockIdList === undefined ? undefined : (value.blockIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
        'endDate': value.endDate,
        'hotelId': value.hotelId,
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'startDate': value.startDate,
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.BlockCodeToValidateToJSON = BlockCodeToValidateToJSON;
