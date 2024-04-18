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
exports.DistributeChannelRatesTypeToJSON = exports.DistributeChannelRatesTypeFromJSONTyped = exports.DistributeChannelRatesTypeFromJSON = exports.instanceOfDistributeChannelRatesType = void 0;
const runtime_1 = require("../runtime");
const DistributeChannelRateType_1 = require("./DistributeChannelRateType");
/**
 * Check if a given object implements the DistributeChannelRatesType interface.
 */
function instanceOfDistributeChannelRatesType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfDistributeChannelRatesType = instanceOfDistributeChannelRatesType;
function DistributeChannelRatesTypeFromJSON(json) {
    return DistributeChannelRatesTypeFromJSONTyped(json, false);
}
exports.DistributeChannelRatesTypeFromJSON = DistributeChannelRatesTypeFromJSON;
function DistributeChannelRatesTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'distributeChannelRate': !(0, runtime_1.exists)(json, 'distributeChannelRate') ? undefined : (json['distributeChannelRate'].map(DistributeChannelRateType_1.DistributeChannelRateTypeFromJSON)),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
    };
}
exports.DistributeChannelRatesTypeFromJSONTyped = DistributeChannelRatesTypeFromJSONTyped;
function DistributeChannelRatesTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'distributeChannelRate': value.distributeChannelRate === undefined ? undefined : (value.distributeChannelRate.map(DistributeChannelRateType_1.DistributeChannelRateTypeToJSON)),
        'hotelId': value.hotelId,
    };
}
exports.DistributeChannelRatesTypeToJSON = DistributeChannelRatesTypeToJSON;