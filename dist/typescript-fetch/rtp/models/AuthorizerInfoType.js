"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizerInfoTypeToJSON = exports.AuthorizerInfoTypeFromJSONTyped = exports.AuthorizerInfoTypeFromJSON = exports.instanceOfAuthorizerInfoType = void 0;
const runtime_1 = require("../runtime");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the AuthorizerInfoType interface.
 */
function instanceOfAuthorizerInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAuthorizerInfoType = instanceOfAuthorizerInfoType;
function AuthorizerInfoTypeFromJSON(json) {
    return AuthorizerInfoTypeFromJSONTyped(json, false);
}
exports.AuthorizerInfoTypeFromJSON = AuthorizerInfoTypeFromJSON;
function AuthorizerInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'authorizerId': !(0, runtime_1.exists)(json, 'authorizerId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['authorizerId']),
        'authorizerName': !(0, runtime_1.exists)(json, 'authorizerName') ? undefined : json['authorizerName'],
        'authorizerRateCode': !(0, runtime_1.exists)(json, 'authorizerRateCode') ? undefined : json['authorizerRateCode'],
        'authorizerUserName': !(0, runtime_1.exists)(json, 'authorizerUserName') ? undefined : json['authorizerUserName'],
        'inheritAuthorizerRateCode': !(0, runtime_1.exists)(json, 'inheritAuthorizerRateCode') ? undefined : json['inheritAuthorizerRateCode'],
    };
}
exports.AuthorizerInfoTypeFromJSONTyped = AuthorizerInfoTypeFromJSONTyped;
function AuthorizerInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'authorizerId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.authorizerId),
        'authorizerName': value.authorizerName,
        'authorizerRateCode': value.authorizerRateCode,
        'authorizerUserName': value.authorizerUserName,
        'inheritAuthorizerRateCode': value.inheritAuthorizerRateCode,
    };
}
exports.AuthorizerInfoTypeToJSON = AuthorizerInfoTypeToJSON;
