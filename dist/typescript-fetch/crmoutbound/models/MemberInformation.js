"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberInformationToJSON = exports.MemberInformationFromJSONTyped = exports.MemberInformationFromJSON = exports.instanceOfMemberInformation = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const MemberInfoRSType_1 = require("./MemberInfoRSType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the MemberInformation interface.
 */
function instanceOfMemberInformation(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMemberInformation = instanceOfMemberInformation;
function MemberInformationFromJSON(json) {
    return MemberInformationFromJSONTyped(json, false);
}
exports.MemberInformationFromJSON = MemberInformationFromJSON;
function MemberInformationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'memberInfo': !(0, runtime_1.exists)(json, 'memberInfo') ? undefined : (0, MemberInfoRSType_1.MemberInfoRSTypeFromJSON)(json['memberInfo']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.MemberInformationFromJSONTyped = MemberInformationFromJSONTyped;
function MemberInformationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'memberInfo': (0, MemberInfoRSType_1.MemberInfoRSTypeToJSON)(value.memberInfo),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.MemberInformationToJSON = MemberInformationToJSON;
