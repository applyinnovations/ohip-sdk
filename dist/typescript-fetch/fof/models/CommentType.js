"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
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
        'actionDate': !(0, runtime_1.exists)(json, 'actionDate') ? undefined : (new Date(json['actionDate'])),
        'actionType': !(0, runtime_1.exists)(json, 'actionType') ? undefined : json['actionType'],
        'commentTitle': !(0, runtime_1.exists)(json, 'commentTitle') ? undefined : json['commentTitle'],
        'confidential': !(0, runtime_1.exists)(json, 'confidential') ? undefined : json['confidential'],
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'image': !(0, runtime_1.exists)(json, 'image') ? undefined : json['image'],
        'internal': !(0, runtime_1.exists)(json, 'internal') ? undefined : json['internal'],
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'notificationLocation': !(0, runtime_1.exists)(json, 'notificationLocation') ? undefined : json['notificationLocation'],
        'overrideInternal': !(0, runtime_1.exists)(json, 'overrideInternal') ? undefined : json['overrideInternal'],
        'protectDescription': !(0, runtime_1.exists)(json, 'protectDescription') ? undefined : json['protectDescription'],
        'purgeDate': !(0, runtime_1.exists)(json, 'purgeDate') ? undefined : (new Date(json['purgeDate'])),
        'text': !(0, runtime_1.exists)(json, 'text') ? undefined : (0, FormattedTextTextType_1.FormattedTextTextTypeFromJSON)(json['text']),
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'typeDescription': !(0, runtime_1.exists)(json, 'typeDescription') ? undefined : json['typeDescription'],
        'url': !(0, runtime_1.exists)(json, 'url') ? undefined : json['url'],
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
        'actionDate': value.actionDate === undefined ? undefined : (value.actionDate.toISOString().substr(0, 10)),
        'actionType': value.actionType,
        'commentTitle': value.commentTitle,
        'confidential': value.confidential,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'hotelId': value.hotelId,
        'image': value.image,
        'internal': value.internal,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'notificationLocation': value.notificationLocation,
        'overrideInternal': value.overrideInternal,
        'protectDescription': value.protectDescription,
        'purgeDate': value.purgeDate === undefined ? undefined : (value.purgeDate.toISOString().substr(0, 10)),
        'text': (0, FormattedTextTextType_1.FormattedTextTextTypeToJSON)(value.text),
        'type': value.type,
        'typeDescription': value.typeDescription,
        'url': value.url,
    };
}
exports.CommentTypeToJSON = CommentTypeToJSON;
