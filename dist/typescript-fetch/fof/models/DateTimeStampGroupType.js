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
exports.DateTimeStampGroupTypeToJSON = exports.DateTimeStampGroupTypeFromJSONTyped = exports.DateTimeStampGroupTypeFromJSON = exports.instanceOfDateTimeStampGroupType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the DateTimeStampGroupType interface.
 */
function instanceOfDateTimeStampGroupType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfDateTimeStampGroupType = instanceOfDateTimeStampGroupType;
function DateTimeStampGroupTypeFromJSON(json) {
    return DateTimeStampGroupTypeFromJSONTyped(json, false);
}
exports.DateTimeStampGroupTypeFromJSON = DateTimeStampGroupTypeFromJSON;
function DateTimeStampGroupTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'purgeDate': !(0, runtime_1.exists)(json, 'purgeDate') ? undefined : (new Date(json['purgeDate'])),
    };
}
exports.DateTimeStampGroupTypeFromJSONTyped = DateTimeStampGroupTypeFromJSONTyped;
function DateTimeStampGroupTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'purgeDate': value.purgeDate === undefined ? undefined : (value.purgeDate.toISOString().substr(0, 10)),
    };
}
exports.DateTimeStampGroupTypeToJSON = DateTimeStampGroupTypeToJSON;
