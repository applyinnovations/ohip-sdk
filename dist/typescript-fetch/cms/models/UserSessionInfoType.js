"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud API for Customer Management Service
 * This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
const ParameterType_1 = require("./ParameterType");
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
        'businessDate': !(0, runtime_1.exists)(json, 'businessDate') ? undefined : json['businessDate'],
        'cROCountryCode': !(0, runtime_1.exists)(json, 'cROCountryCode') ? undefined : json['cROCountryCode'],
        'chain': !(0, runtime_1.exists)(json, 'chain') ? undefined : json['chain'],
        'cro': !(0, runtime_1.exists)(json, 'cro') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['cro']),
        'hotel': !(0, runtime_1.exists)(json, 'hotel') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['hotel']),
        'parameters': !(0, runtime_1.exists)(json, 'parameters') ? undefined : (json['parameters'].map(ParameterType_1.ParameterTypeFromJSON)),
        'runningApp': !(0, runtime_1.exists)(json, 'runningApp') ? undefined : json['runningApp'],
        'sessionDefaults': !(0, runtime_1.exists)(json, 'sessionDefaults') ? undefined : (0, UserSessionDefaultsType_1.UserSessionDefaultsTypeFromJSON)(json['sessionDefaults']),
        'shareProfiles': !(0, runtime_1.exists)(json, 'shareProfiles') ? undefined : json['shareProfiles'],
        'systemDate': !(0, runtime_1.exists)(json, 'systemDate') ? undefined : json['systemDate'],
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
        'businessDate': value.businessDate,
        'cROCountryCode': value.cROCountryCode,
        'chain': value.chain,
        'cro': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.cro),
        'hotel': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.hotel),
        'parameters': value.parameters === undefined ? undefined : (value.parameters.map(ParameterType_1.ParameterTypeToJSON)),
        'runningApp': value.runningApp,
        'sessionDefaults': (0, UserSessionDefaultsType_1.UserSessionDefaultsTypeToJSON)(value.sessionDefaults),
        'shareProfiles': value.shareProfiles,
        'systemDate': value.systemDate,
        'terminal': value.terminal,
    };
}
exports.UserSessionInfoTypeToJSON = UserSessionInfoTypeToJSON;
