"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelAccountCommunicationTypeAddressesToJSON = exports.ChannelAccountCommunicationTypeAddressesFromJSONTyped = exports.ChannelAccountCommunicationTypeAddressesFromJSON = exports.instanceOfChannelAccountCommunicationTypeAddresses = void 0;
const runtime_1 = require("../runtime");
const AddressInfoType_1 = require("./AddressInfoType");
/**
 * Check if a given object implements the ChannelAccountCommunicationTypeAddresses interface.
 */
function instanceOfChannelAccountCommunicationTypeAddresses(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelAccountCommunicationTypeAddresses = instanceOfChannelAccountCommunicationTypeAddresses;
function ChannelAccountCommunicationTypeAddressesFromJSON(json) {
    return ChannelAccountCommunicationTypeAddressesFromJSONTyped(json, false);
}
exports.ChannelAccountCommunicationTypeAddressesFromJSON = ChannelAccountCommunicationTypeAddressesFromJSON;
function ChannelAccountCommunicationTypeAddressesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addressInfo': !(0, runtime_1.exists)(json, 'addressInfo') ? undefined : (json['addressInfo'].map(AddressInfoType_1.AddressInfoTypeFromJSON)),
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
    };
}
exports.ChannelAccountCommunicationTypeAddressesFromJSONTyped = ChannelAccountCommunicationTypeAddressesFromJSONTyped;
function ChannelAccountCommunicationTypeAddressesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addressInfo': value.addressInfo === undefined ? undefined : (value.addressInfo.map(AddressInfoType_1.AddressInfoTypeToJSON)),
        'count': value.count,
        'hasMore': value.hasMore,
        'totalResults': value.totalResults,
    };
}
exports.ChannelAccountCommunicationTypeAddressesToJSON = ChannelAccountCommunicationTypeAddressesToJSON;