"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetBlockGridInvTypeToJSON = exports.SetBlockGridInvTypeFromJSONTyped = exports.SetBlockGridInvTypeFromJSON = exports.instanceOfSetBlockGridInvType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the SetBlockGridInvType interface.
 */
function instanceOfSetBlockGridInvType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSetBlockGridInvType = instanceOfSetBlockGridInvType;
function SetBlockGridInvTypeFromJSON(json) {
    return SetBlockGridInvTypeFromJSONTyped(json, false);
}
exports.SetBlockGridInvTypeFromJSON = SetBlockGridInvTypeFromJSON;
function SetBlockGridInvTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cutoffDate': !(0, runtime_1.exists)(json, 'cutoffDate') ? undefined : (new Date(json['cutoffDate'])),
        'forceOverbook': !(0, runtime_1.exists)(json, 'forceOverbook') ? undefined : json['forceOverbook'],
        'fourPerson': !(0, runtime_1.exists)(json, 'fourPerson') ? undefined : json['fourPerson'],
        'onePerson': !(0, runtime_1.exists)(json, 'onePerson') ? undefined : json['onePerson'],
        'sellLimit': !(0, runtime_1.exists)(json, 'sellLimit') ? undefined : json['sellLimit'],
        'threePerson': !(0, runtime_1.exists)(json, 'threePerson') ? undefined : json['threePerson'],
        'twoPerson': !(0, runtime_1.exists)(json, 'twoPerson') ? undefined : json['twoPerson'],
    };
}
exports.SetBlockGridInvTypeFromJSONTyped = SetBlockGridInvTypeFromJSONTyped;
function SetBlockGridInvTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cutoffDate': value.cutoffDate === undefined ? undefined : (value.cutoffDate.toISOString().substring(0, 10)),
        'forceOverbook': value.forceOverbook,
        'fourPerson': value.fourPerson,
        'onePerson': value.onePerson,
        'sellLimit': value.sellLimit,
        'threePerson': value.threePerson,
        'twoPerson': value.twoPerson,
    };
}
exports.SetBlockGridInvTypeToJSON = SetBlockGridInvTypeToJSON;