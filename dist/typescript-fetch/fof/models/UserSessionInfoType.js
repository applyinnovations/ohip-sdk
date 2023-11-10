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
exports.UserSessionInfoTypeToJSON = exports.UserSessionInfoTypeFromJSONTyped = exports.UserSessionInfoTypeFromJSON = exports.instanceOfUserSessionInfoType = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
const ParametersType_1 = require("./ParametersType");
const UserSessionDefaultsType_1 = require("./UserSessionDefaultsType");
/**
 * Check if a given object implements the UserSessionInfoType interface.
 */
function instanceOfUserSessionInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfUserSessionInfoType = instanceOfUserSessionInfoType;
function UserSessionInfoTypeFromJSON(json) {
    return UserSessionInfoTypeFromJSONTyped(json, false);
}
exports.UserSessionInfoTypeFromJSON = UserSessionInfoTypeFromJSON;
function UserSessionInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'businessDate': !(0, runtime_1.exists)(json, 'businessDate') ? undefined : (new Date(json['businessDate'])),
        'cROCountryCode': !(0, runtime_1.exists)(json, 'cROCountryCode') ? undefined : json['cROCountryCode'],
        'chain': !(0, runtime_1.exists)(json, 'chain') ? undefined : json['chain'],
        'cro': !(0, runtime_1.exists)(json, 'cro') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['cro']),
        'hotel': !(0, runtime_1.exists)(json, 'hotel') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['hotel']),
        'parameters': !(0, runtime_1.exists)(json, 'parameters') ? undefined : (0, ParametersType_1.ParametersTypeFromJSON)(json['parameters']),
        'runningApp': !(0, runtime_1.exists)(json, 'runningApp') ? undefined : json['runningApp'],
        'sessionDefaults': !(0, runtime_1.exists)(json, 'sessionDefaults') ? undefined : (0, UserSessionDefaultsType_1.UserSessionDefaultsTypeFromJSON)(json['sessionDefaults']),
        'shareProfiles': !(0, runtime_1.exists)(json, 'shareProfiles') ? undefined : json['shareProfiles'],
        'systemDate': !(0, runtime_1.exists)(json, 'systemDate') ? undefined : (new Date(json['systemDate'])),
        'terminal': !(0, runtime_1.exists)(json, 'terminal') ? undefined : json['terminal'],
    };
}
exports.UserSessionInfoTypeFromJSONTyped = UserSessionInfoTypeFromJSONTyped;
function UserSessionInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'businessDate': value.businessDate === undefined ? undefined : (value.businessDate.toISOString().substr(0, 10)),
        'cROCountryCode': value.cROCountryCode,
        'chain': value.chain,
        'cro': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.cro),
        'hotel': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.hotel),
        'parameters': (0, ParametersType_1.ParametersTypeToJSON)(value.parameters),
        'runningApp': value.runningApp,
        'sessionDefaults': (0, UserSessionDefaultsType_1.UserSessionDefaultsTypeToJSON)(value.sessionDefaults),
        'shareProfiles': value.shareProfiles,
        'systemDate': value.systemDate === undefined ? undefined : (value.systemDate.toISOString().substr(0, 10)),
        'terminal': value.terminal,
    };
}
exports.UserSessionInfoTypeToJSON = UserSessionInfoTypeToJSON;
