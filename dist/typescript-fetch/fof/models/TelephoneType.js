"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelephoneTypeToJSON = exports.TelephoneTypeFromJSONTyped = exports.TelephoneTypeFromJSON = exports.instanceOfTelephoneType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the TelephoneType interface.
 */
function instanceOfTelephoneType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTelephoneType = instanceOfTelephoneType;
function TelephoneTypeFromJSON(json) {
    return TelephoneTypeFromJSONTyped(json, false);
}
exports.TelephoneTypeFromJSON = TelephoneTypeFromJSON;
function TelephoneTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'extension': !(0, runtime_1.exists)(json, 'extension') ? undefined : json['extension'],
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'orderSequence': !(0, runtime_1.exists)(json, 'orderSequence') ? undefined : json['orderSequence'],
        'phoneNumber': !(0, runtime_1.exists)(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'phoneTechType': !(0, runtime_1.exists)(json, 'phoneTechType') ? undefined : json['phoneTechType'],
        'phoneUseType': !(0, runtime_1.exists)(json, 'phoneUseType') ? undefined : json['phoneUseType'],
        'phoneUseTypeDescription': !(0, runtime_1.exists)(json, 'phoneUseTypeDescription') ? undefined : json['phoneUseTypeDescription'],
        'primaryInd': !(0, runtime_1.exists)(json, 'primaryInd') ? undefined : json['primaryInd'],
        'purgeDate': !(0, runtime_1.exists)(json, 'purgeDate') ? undefined : json['purgeDate'],
    };
}
exports.TelephoneTypeFromJSONTyped = TelephoneTypeFromJSONTyped;
function TelephoneTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'extension': value.extension,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'orderSequence': value.orderSequence,
        'phoneNumber': value.phoneNumber,
        'phoneTechType': value.phoneTechType,
        'phoneUseType': value.phoneUseType,
        'phoneUseTypeDescription': value.phoneUseTypeDescription,
        'primaryInd': value.primaryInd,
        'purgeDate': value.purgeDate,
    };
}
exports.TelephoneTypeToJSON = TelephoneTypeToJSON;
