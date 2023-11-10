"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentRoomInfoTypeToJSON = exports.CurrentRoomInfoTypeFromJSONTyped = exports.CurrentRoomInfoTypeFromJSON = exports.instanceOfCurrentRoomInfoType = void 0;
const runtime_1 = require("../runtime");
const CodeListType_1 = require("./CodeListType");
/**
 * Check if a given object implements the CurrentRoomInfoType interface.
 */
function instanceOfCurrentRoomInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCurrentRoomInfoType = instanceOfCurrentRoomInfoType;
function CurrentRoomInfoTypeFromJSON(json) {
    return CurrentRoomInfoTypeFromJSONTyped(json, false);
}
exports.CurrentRoomInfoTypeFromJSON = CurrentRoomInfoTypeFromJSON;
function CurrentRoomInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'assignedByAI': !(0, runtime_1.exists)(json, 'assignedByAI') ? undefined : json['assignedByAI'],
        'roomDescription': !(0, runtime_1.exists)(json, 'roomDescription') ? undefined : json['roomDescription'],
        'roomId': !(0, runtime_1.exists)(json, 'roomId') ? undefined : json['roomId'],
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'roomViewCode': !(0, runtime_1.exists)(json, 'roomViewCode') ? undefined : json['roomViewCode'],
        'suggestedRoomNumbers': !(0, runtime_1.exists)(json, 'suggestedRoomNumbers') ? undefined : (0, CodeListType_1.CodeListTypeFromJSON)(json['suggestedRoomNumbers']),
        'upgradedByAI': !(0, runtime_1.exists)(json, 'upgradedByAI') ? undefined : json['upgradedByAI'],
    };
}
exports.CurrentRoomInfoTypeFromJSONTyped = CurrentRoomInfoTypeFromJSONTyped;
function CurrentRoomInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'assignedByAI': value.assignedByAI,
        'roomDescription': value.roomDescription,
        'roomId': value.roomId,
        'roomType': value.roomType,
        'roomViewCode': value.roomViewCode,
        'suggestedRoomNumbers': (0, CodeListType_1.CodeListTypeToJSON)(value.suggestedRoomNumbers),
        'upgradedByAI': value.upgradedByAI,
    };
}
exports.CurrentRoomInfoTypeToJSON = CurrentRoomInfoTypeToJSON;
