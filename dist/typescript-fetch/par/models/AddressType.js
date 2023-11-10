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
exports.AddressTypeToJSON = exports.AddressTypeFromJSONTyped = exports.AddressTypeFromJSON = exports.instanceOfAddressType = void 0;
const runtime_1 = require("../runtime");
const CountryNameType_1 = require("./CountryNameType");
/**
 * Check if a given object implements the AddressType interface.
 */
function instanceOfAddressType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAddressType = instanceOfAddressType;
function AddressTypeFromJSON(json) {
    return AddressTypeFromJSONTyped(json, false);
}
exports.AddressTypeFromJSON = AddressTypeFromJSON;
function AddressTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addressLine': !(0, runtime_1.exists)(json, 'addressLine') ? undefined : json['addressLine'],
        'barCode': !(0, runtime_1.exists)(json, 'barCode') ? undefined : json['barCode'],
        'cityExtension': !(0, runtime_1.exists)(json, 'cityExtension') ? undefined : json['cityExtension'],
        'cityName': !(0, runtime_1.exists)(json, 'cityName') ? undefined : json['cityName'],
        'country': !(0, runtime_1.exists)(json, 'country') ? undefined : (0, CountryNameType_1.CountryNameTypeFromJSON)(json['country']),
        'county': !(0, runtime_1.exists)(json, 'county') ? undefined : json['county'],
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'isValidated': !(0, runtime_1.exists)(json, 'isValidated') ? undefined : json['isValidated'],
        'language': !(0, runtime_1.exists)(json, 'language') ? undefined : json['language'],
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'postalCode': !(0, runtime_1.exists)(json, 'postalCode') ? undefined : json['postalCode'],
        'primaryInd': !(0, runtime_1.exists)(json, 'primaryInd') ? undefined : json['primaryInd'],
        'purgeDate': !(0, runtime_1.exists)(json, 'purgeDate') ? undefined : (new Date(json['purgeDate'])),
        'state': !(0, runtime_1.exists)(json, 'state') ? undefined : json['state'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'typeDescription': !(0, runtime_1.exists)(json, 'typeDescription') ? undefined : json['typeDescription'],
        'updateReservations': !(0, runtime_1.exists)(json, 'updateReservations') ? undefined : json['updateReservations'],
    };
}
exports.AddressTypeFromJSONTyped = AddressTypeFromJSONTyped;
function AddressTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addressLine': value.addressLine,
        'barCode': value.barCode,
        'cityExtension': value.cityExtension,
        'cityName': value.cityName,
        'country': (0, CountryNameType_1.CountryNameTypeToJSON)(value.country),
        'county': value.county,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'isValidated': value.isValidated,
        'language': value.language,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'postalCode': value.postalCode,
        'primaryInd': value.primaryInd,
        'purgeDate': value.purgeDate === undefined ? undefined : (value.purgeDate.toISOString().substr(0, 10)),
        'state': value.state,
        'type': value.type,
        'typeDescription': value.typeDescription,
        'updateReservations': value.updateReservations,
    };
}
exports.AddressTypeToJSON = AddressTypeToJSON;
