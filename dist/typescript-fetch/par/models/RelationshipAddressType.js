"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipAddressTypeToJSON = exports.RelationshipAddressTypeFromJSONTyped = exports.RelationshipAddressTypeFromJSON = exports.instanceOfRelationshipAddressType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the RelationshipAddressType interface.
 */
function instanceOfRelationshipAddressType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRelationshipAddressType = instanceOfRelationshipAddressType;
function RelationshipAddressTypeFromJSON(json) {
    return RelationshipAddressTypeFromJSONTyped(json, false);
}
exports.RelationshipAddressTypeFromJSON = RelationshipAddressTypeFromJSON;
function RelationshipAddressTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addressLine': !(0, runtime_1.exists)(json, 'addressLine') ? undefined : json['addressLine'],
        'city': !(0, runtime_1.exists)(json, 'city') ? undefined : json['city'],
        'country': !(0, runtime_1.exists)(json, 'country') ? undefined : json['country'],
        'postalCode': !(0, runtime_1.exists)(json, 'postalCode') ? undefined : json['postalCode'],
        'state': !(0, runtime_1.exists)(json, 'state') ? undefined : json['state'],
    };
}
exports.RelationshipAddressTypeFromJSONTyped = RelationshipAddressTypeFromJSONTyped;
function RelationshipAddressTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addressLine': value.addressLine,
        'city': value.city,
        'country': value.country,
        'postalCode': value.postalCode,
        'state': value.state,
    };
}
exports.RelationshipAddressTypeToJSON = RelationshipAddressTypeToJSON;
