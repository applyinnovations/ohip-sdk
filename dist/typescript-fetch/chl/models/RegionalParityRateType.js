"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionalParityRateTypeToJSON = exports.RegionalParityRateTypeFromJSONTyped = exports.RegionalParityRateTypeFromJSON = exports.instanceOfRegionalParityRateType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the RegionalParityRateType interface.
 */
function instanceOfRegionalParityRateType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRegionalParityRateType = instanceOfRegionalParityRateType;
function RegionalParityRateTypeFromJSON(json) {
    return RegionalParityRateTypeFromJSONTyped(json, false);
}
exports.RegionalParityRateTypeFromJSON = RegionalParityRateTypeFromJSON;
function RegionalParityRateTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'arrivalDate': !(0, runtime_1.exists)(json, 'arrivalDate') ? undefined : json['arrivalDate'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'maximumRate': !(0, runtime_1.exists)(json, 'maximumRate') ? undefined : json['maximumRate'],
        'minimumRate': !(0, runtime_1.exists)(json, 'minimumRate') ? undefined : json['minimumRate'],
        'statusCode': !(0, runtime_1.exists)(json, 'statusCode') ? undefined : json['statusCode'],
        'statusDescription': !(0, runtime_1.exists)(json, 'statusDescription') ? undefined : json['statusDescription'],
        'weekendDay': !(0, runtime_1.exists)(json, 'weekendDay') ? undefined : json['weekendDay'],
    };
}
exports.RegionalParityRateTypeFromJSONTyped = RegionalParityRateTypeFromJSONTyped;
function RegionalParityRateTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'arrivalDate': value.arrivalDate,
        'currencyCode': value.currencyCode,
        'maximumRate': value.maximumRate,
        'minimumRate': value.minimumRate,
        'statusCode': value.statusCode,
        'statusDescription': value.statusDescription,
        'weekendDay': value.weekendDay,
    };
}
exports.RegionalParityRateTypeToJSON = RegionalParityRateTypeToJSON;
