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
exports.AwardToJSON = exports.AwardFromJSONTyped = exports.AwardFromJSON = exports.instanceOfAward = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const MemberAwardType_1 = require("./MemberAwardType");
/**
 * Check if a given object implements the Award interface.
 */
function instanceOfAward(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAward = instanceOfAward;
function AwardFromJSON(json) {
    return AwardFromJSONTyped(json, false);
}
exports.AwardFromJSON = AwardFromJSON;
function AwardFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'memberAward': !(0, runtime_1.exists)(json, 'memberAward') ? undefined : (0, MemberAwardType_1.MemberAwardTypeFromJSON)(json['memberAward']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
    };
}
exports.AwardFromJSONTyped = AwardFromJSONTyped;
function AwardToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'memberAward': (0, MemberAwardType_1.MemberAwardTypeToJSON)(value.memberAward),
        'links': (0, Links_1.LinksToJSON)(value.links),
    };
}
exports.AwardToJSON = AwardToJSON;
