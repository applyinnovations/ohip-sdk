"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunityBlockInfoTypeToJSON = exports.OpportunityBlockInfoTypeFromJSONTyped = exports.OpportunityBlockInfoTypeFromJSON = exports.instanceOfOpportunityBlockInfoType = void 0;
const runtime_1 = require("../runtime");
const DateTimeSpanType_1 = require("./DateTimeSpanType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the OpportunityBlockInfoType interface.
 */
function instanceOfOpportunityBlockInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfOpportunityBlockInfoType = instanceOfOpportunityBlockInfoType;
function OpportunityBlockInfoTypeFromJSON(json) {
    return OpportunityBlockInfoTypeFromJSONTyped(json, false);
}
exports.OpportunityBlockInfoTypeFromJSON = OpportunityBlockInfoTypeFromJSON;
function OpportunityBlockInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockId': !(0, runtime_1.exists)(json, 'blockId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['blockId']),
        'blockTimeSpan': !(0, runtime_1.exists)(json, 'blockTimeSpan') ? undefined : (0, DateTimeSpanType_1.DateTimeSpanTypeFromJSON)(json['blockTimeSpan']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
    };
}
exports.OpportunityBlockInfoTypeFromJSONTyped = OpportunityBlockInfoTypeFromJSONTyped;
function OpportunityBlockInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.blockId),
        'blockTimeSpan': (0, DateTimeSpanType_1.DateTimeSpanTypeToJSON)(value.blockTimeSpan),
        'hotelId': value.hotelId,
    };
}
exports.OpportunityBlockInfoTypeToJSON = OpportunityBlockInfoTypeToJSON;
