"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StagedProfileCommentInfoTypeToJSON = exports.StagedProfileCommentInfoTypeFromJSONTyped = exports.StagedProfileCommentInfoTypeFromJSON = exports.instanceOfStagedProfileCommentInfoType = void 0;
const runtime_1 = require("../runtime");
const CommentType_1 = require("./CommentType");
/**
 * Check if a given object implements the StagedProfileCommentInfoType interface.
 */
function instanceOfStagedProfileCommentInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfStagedProfileCommentInfoType = instanceOfStagedProfileCommentInfoType;
function StagedProfileCommentInfoTypeFromJSON(json) {
    return StagedProfileCommentInfoTypeFromJSONTyped(json, false);
}
exports.StagedProfileCommentInfoTypeFromJSON = StagedProfileCommentInfoTypeFromJSON;
function StagedProfileCommentInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'comment': !(0, runtime_1.exists)(json, 'comment') ? undefined : (0, CommentType_1.CommentTypeFromJSON)(json['comment']),
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'errorDescription': !(0, runtime_1.exists)(json, 'errorDescription') ? undefined : json['errorDescription'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'inActiveDate': !(0, runtime_1.exists)(json, 'inActiveDate') ? undefined : json['inActiveDate'],
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'lineNo': !(0, runtime_1.exists)(json, 'lineNo') ? undefined : json['lineNo'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'valid': !(0, runtime_1.exists)(json, 'valid') ? undefined : json['valid'],
    };
}
exports.StagedProfileCommentInfoTypeFromJSONTyped = StagedProfileCommentInfoTypeFromJSONTyped;
function StagedProfileCommentInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'comment': (0, CommentType_1.CommentTypeToJSON)(value.comment),
        'count': value.count,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'errorDescription': value.errorDescription,
        'hasMore': value.hasMore,
        'id': value.id,
        'inActiveDate': value.inActiveDate,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'lineNo': value.lineNo,
        'totalResults': value.totalResults,
        'type': value.type,
        'valid': value.valid,
    };
}
exports.StagedProfileCommentInfoTypeToJSON = StagedProfileCommentInfoTypeToJSON;
