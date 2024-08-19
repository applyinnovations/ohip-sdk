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
exports.BlockGridInvTypeToJSON = exports.BlockGridInvTypeFromJSONTyped = exports.BlockGridInvTypeFromJSON = exports.instanceOfBlockGridInvType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BlockGridInvType interface.
 */
function instanceOfBlockGridInvType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockGridInvType = instanceOfBlockGridInvType;
function BlockGridInvTypeFromJSON(json) {
    return BlockGridInvTypeFromJSONTyped(json, false);
}
exports.BlockGridInvTypeFromJSON = BlockGridInvTypeFromJSON;
function BlockGridInvTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cutoffDate': !(0, runtime_1.exists)(json, 'cutoffDate') ? undefined : json['cutoffDate'],
        'fourPerson': !(0, runtime_1.exists)(json, 'fourPerson') ? undefined : json['fourPerson'],
        'onePerson': !(0, runtime_1.exists)(json, 'onePerson') ? undefined : json['onePerson'],
        'sellLimit': !(0, runtime_1.exists)(json, 'sellLimit') ? undefined : json['sellLimit'],
        'threePerson': !(0, runtime_1.exists)(json, 'threePerson') ? undefined : json['threePerson'],
        'twoPerson': !(0, runtime_1.exists)(json, 'twoPerson') ? undefined : json['twoPerson'],
    };
}
exports.BlockGridInvTypeFromJSONTyped = BlockGridInvTypeFromJSONTyped;
function BlockGridInvTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cutoffDate': value.cutoffDate,
        'fourPerson': value.fourPerson,
        'onePerson': value.onePerson,
        'sellLimit': value.sellLimit,
        'threePerson': value.threePerson,
        'twoPerson': value.twoPerson,
    };
}
exports.BlockGridInvTypeToJSON = BlockGridInvTypeToJSON;
