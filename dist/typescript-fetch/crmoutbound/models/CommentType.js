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
exports.CommentTypeToJSON = exports.CommentTypeFromJSONTyped = exports.CommentTypeFromJSON = exports.instanceOfCommentType = void 0;
const runtime_1 = require("../runtime");
const FormattedTextTextType_1 = require("./FormattedTextTextType");
/**
 * Check if a given object implements the CommentType interface.
 */
function instanceOfCommentType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCommentType = instanceOfCommentType;
function CommentTypeFromJSON(json) {
    return CommentTypeFromJSONTyped(json, false);
}
exports.CommentTypeFromJSON = CommentTypeFromJSON;
function CommentTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'text': !(0, runtime_1.exists)(json, 'text') ? undefined : (0, FormattedTextTextType_1.FormattedTextTextTypeFromJSON)(json['text']),
        'commentTitle': !(0, runtime_1.exists)(json, 'commentTitle') ? undefined : json['commentTitle'],
        'notificationLocation': !(0, runtime_1.exists)(json, 'notificationLocation') ? undefined : json['notificationLocation'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'typeDescription': !(0, runtime_1.exists)(json, 'typeDescription') ? undefined : json['typeDescription'],
        'internal': !(0, runtime_1.exists)(json, 'internal') ? undefined : json['internal'],
        'confidential': !(0, runtime_1.exists)(json, 'confidential') ? undefined : json['confidential'],
        'overrideInternal': !(0, runtime_1.exists)(json, 'overrideInternal') ? undefined : json['overrideInternal'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
    };
}
exports.CommentTypeFromJSONTyped = CommentTypeFromJSONTyped;
function CommentTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'text': (0, FormattedTextTextType_1.FormattedTextTextTypeToJSON)(value.text),
        'commentTitle': value.commentTitle,
        'notificationLocation': value.notificationLocation,
        'type': value.type,
        'typeDescription': value.typeDescription,
        'internal': value.internal,
        'confidential': value.confidential,
        'overrideInternal': value.overrideInternal,
        'hotelId': value.hotelId,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'lastModifierId': value.lastModifierId,
    };
}
exports.CommentTypeToJSON = CommentTypeToJSON;