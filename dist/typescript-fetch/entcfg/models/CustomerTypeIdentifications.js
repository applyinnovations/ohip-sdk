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
exports.CustomerTypeIdentificationsToJSON = exports.CustomerTypeIdentificationsFromJSONTyped = exports.CustomerTypeIdentificationsFromJSON = exports.instanceOfCustomerTypeIdentifications = void 0;
const runtime_1 = require("../runtime");
const IdentificationInfoType_1 = require("./IdentificationInfoType");
/**
 * Check if a given object implements the CustomerTypeIdentifications interface.
 */
function instanceOfCustomerTypeIdentifications(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCustomerTypeIdentifications = instanceOfCustomerTypeIdentifications;
function CustomerTypeIdentificationsFromJSON(json) {
    return CustomerTypeIdentificationsFromJSONTyped(json, false);
}
exports.CustomerTypeIdentificationsFromJSON = CustomerTypeIdentificationsFromJSON;
function CustomerTypeIdentificationsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'identificationInfo': !(0, runtime_1.exists)(json, 'identificationInfo') ? undefined : (json['identificationInfo'].map(IdentificationInfoType_1.IdentificationInfoTypeFromJSON)),
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
    };
}
exports.CustomerTypeIdentificationsFromJSONTyped = CustomerTypeIdentificationsFromJSONTyped;
function CustomerTypeIdentificationsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'identificationInfo': value.identificationInfo === undefined ? undefined : (value.identificationInfo.map(IdentificationInfoType_1.IdentificationInfoTypeToJSON)),
        'hasMore': value.hasMore,
        'totalResults': value.totalResults,
        'count': value.count,
    };
}
exports.CustomerTypeIdentificationsToJSON = CustomerTypeIdentificationsToJSON;