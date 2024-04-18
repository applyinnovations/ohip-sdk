"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSettingTypeToJSON = exports.ApplicationSettingTypeFromJSONTyped = exports.ApplicationSettingTypeFromJSON = exports.instanceOfApplicationSettingType = exports.ApplicationSettingTypeValueTypeEnum = exports.ApplicationSettingTypeScopeEnum = void 0;
const runtime_1 = require("../runtime");
const ApplicationSettingConversionType_1 = require("./ApplicationSettingConversionType");
const ApplicationSettingLevelType_1 = require("./ApplicationSettingLevelType");
const ApplicationSettingTypeType_1 = require("./ApplicationSettingTypeType");
const BaseApplicationSettingType_1 = require("./BaseApplicationSettingType");
/**
 * @export
 */
exports.ApplicationSettingTypeScopeEnum = {
    P: 'P',
    G: 'G',
    Ch: 'Ch',
    C: 'C'
};
/**
 * @export
 */
exports.ApplicationSettingTypeValueTypeEnum = {
    Yn: 'Yn',
    Integer: 'Integer',
    String: 'String',
    SingleSelectLov: 'SingleSelectLov',
    MultiSelectLov: 'MultiSelectLov',
    ShuttleLov: 'ShuttleLov',
    Custom: 'Custom',
    Double: 'Double',
    Secure: 'Secure'
};
/**
 * Check if a given object implements the ApplicationSettingType interface.
 */
function instanceOfApplicationSettingType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfApplicationSettingType = instanceOfApplicationSettingType;
function ApplicationSettingTypeFromJSON(json) {
    return ApplicationSettingTypeFromJSONTyped(json, false);
}
exports.ApplicationSettingTypeFromJSON = ApplicationSettingTypeFromJSON;
function ApplicationSettingTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'shortDescription': !(0, runtime_1.exists)(json, 'shortDescription') ? undefined : json['shortDescription'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'wildCardMatch': !(0, runtime_1.exists)(json, 'wildCardMatch') ? undefined : json['wildCardMatch'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'displayName': !(0, runtime_1.exists)(json, 'displayName') ? undefined : json['displayName'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : (0, ApplicationSettingTypeType_1.ApplicationSettingTypeTypeFromJSON)(json['type']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'sequence': !(0, runtime_1.exists)(json, 'sequence') ? undefined : json['sequence'],
        'editAllowed': !(0, runtime_1.exists)(json, 'editAllowed') ? undefined : json['editAllowed'],
        'value': !(0, runtime_1.exists)(json, 'value') ? undefined : json['value'],
        'scope': !(0, runtime_1.exists)(json, 'scope') ? undefined : json['scope'],
        'valueType': !(0, runtime_1.exists)(json, 'valueType') ? undefined : json['valueType'],
        'conversionType': !(0, runtime_1.exists)(json, 'conversionType') ? undefined : (0, ApplicationSettingConversionType_1.ApplicationSettingConversionTypeFromJSON)(json['conversionType']),
        'settings': !(0, runtime_1.exists)(json, 'settings') ? undefined : (json['settings'].map(BaseApplicationSettingType_1.BaseApplicationSettingTypeFromJSON)),
        'levelType': !(0, runtime_1.exists)(json, 'levelType') ? undefined : (0, ApplicationSettingLevelType_1.ApplicationSettingLevelTypeFromJSON)(json['levelType']),
        'levelCode': !(0, runtime_1.exists)(json, 'levelCode') ? undefined : json['levelCode'],
        'subscriptionCountEligible': !(0, runtime_1.exists)(json, 'subscriptionCountEligible') ? undefined : json['subscriptionCountEligible'],
    };
}
exports.ApplicationSettingTypeFromJSONTyped = ApplicationSettingTypeFromJSONTyped;
function ApplicationSettingTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'shortDescription': value.shortDescription,
        'description': value.description,
        'wildCardMatch': value.wildCardMatch,
        'name': value.name,
        'displayName': value.displayName,
        'type': (0, ApplicationSettingTypeType_1.ApplicationSettingTypeTypeToJSON)(value.type),
        'hotelId': value.hotelId,
        'sequence': value.sequence,
        'editAllowed': value.editAllowed,
        'value': value.value,
        'scope': value.scope,
        'valueType': value.valueType,
        'conversionType': (0, ApplicationSettingConversionType_1.ApplicationSettingConversionTypeToJSON)(value.conversionType),
        'settings': value.settings === undefined ? undefined : (value.settings.map(BaseApplicationSettingType_1.BaseApplicationSettingTypeToJSON)),
        'levelType': (0, ApplicationSettingLevelType_1.ApplicationSettingLevelTypeToJSON)(value.levelType),
        'levelCode': value.levelCode,
        'subscriptionCountEligible': value.subscriptionCountEligible,
    };
}
exports.ApplicationSettingTypeToJSON = ApplicationSettingTypeToJSON;