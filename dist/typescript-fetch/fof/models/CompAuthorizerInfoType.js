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
exports.CompAuthorizerInfoTypeToJSON = exports.CompAuthorizerInfoTypeFromJSONTyped = exports.CompAuthorizerInfoTypeFromJSON = exports.instanceOfCompAuthorizerInfoType = void 0;
const runtime_1 = require("../runtime");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the CompAuthorizerInfoType interface.
 */
function instanceOfCompAuthorizerInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCompAuthorizerInfoType = instanceOfCompAuthorizerInfoType;
function CompAuthorizerInfoTypeFromJSON(json) {
    return CompAuthorizerInfoTypeFromJSONTyped(json, false);
}
exports.CompAuthorizerInfoTypeFromJSON = CompAuthorizerInfoTypeFromJSON;
function CompAuthorizerInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'authorizerId': !(0, runtime_1.exists)(json, 'authorizerId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['authorizerId']),
        'authorizerName': !(0, runtime_1.exists)(json, 'authorizerName') ? undefined : json['authorizerName'],
        'authorizerUserName': !(0, runtime_1.exists)(json, 'authorizerUserName') ? undefined : json['authorizerUserName'],
    };
}
exports.CompAuthorizerInfoTypeFromJSONTyped = CompAuthorizerInfoTypeFromJSONTyped;
function CompAuthorizerInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'authorizerId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.authorizerId),
        'authorizerName': value.authorizerName,
        'authorizerUserName': value.authorizerUserName,
    };
}
exports.CompAuthorizerInfoTypeToJSON = CompAuthorizerInfoTypeToJSON;