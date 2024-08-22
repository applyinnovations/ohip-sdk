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
exports.TransportationTypeToJSON = exports.TransportationTypeFromJSONTyped = exports.TransportationTypeFromJSON = exports.instanceOfTransportationType = void 0;
const runtime_1 = require("../runtime");
const RelativePositionType_1 = require("./RelativePositionType");
const TelephoneType_1 = require("./TelephoneType");
const URLType_1 = require("./URLType");
/**
 * Check if a given object implements the TransportationType interface.
 */
function instanceOfTransportationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTransportationType = instanceOfTransportationType;
function TransportationTypeFromJSON(json) {
    return TransportationTypeFromJSONTyped(json, false);
}
exports.TransportationTypeFromJSON = TransportationTypeFromJSON;
function TransportationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'phoneNumber': !(0, runtime_1.exists)(json, 'phoneNumber') ? undefined : (0, TelephoneType_1.TelephoneTypeFromJSON)(json['phoneNumber']),
        'relativePosition': !(0, runtime_1.exists)(json, 'relativePosition') ? undefined : (0, RelativePositionType_1.RelativePositionTypeFromJSON)(json['relativePosition']),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'comments': !(0, runtime_1.exists)(json, 'comments') ? undefined : json['comments'],
        'priceRange': !(0, runtime_1.exists)(json, 'priceRange') ? undefined : json['priceRange'],
        'website': !(0, runtime_1.exists)(json, 'website') ? undefined : (0, URLType_1.URLTypeFromJSON)(json['website']),
        'keyOptions': !(0, runtime_1.exists)(json, 'keyOptions') ? undefined : json['keyOptions'],
        'transportationCode': !(0, runtime_1.exists)(json, 'transportationCode') ? undefined : json['transportationCode'],
        'label': !(0, runtime_1.exists)(json, 'label') ? undefined : json['label'],
        'orderBy': !(0, runtime_1.exists)(json, 'orderBy') ? undefined : json['orderBy'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
    };
}
exports.TransportationTypeFromJSONTyped = TransportationTypeFromJSONTyped;
function TransportationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'phoneNumber': (0, TelephoneType_1.TelephoneTypeToJSON)(value.phoneNumber),
        'relativePosition': (0, RelativePositionType_1.RelativePositionTypeToJSON)(value.relativePosition),
        'description': value.description,
        'comments': value.comments,
        'priceRange': value.priceRange,
        'website': (0, URLType_1.URLTypeToJSON)(value.website),
        'keyOptions': value.keyOptions,
        'transportationCode': value.transportationCode,
        'label': value.label,
        'orderBy': value.orderBy,
        'hotelId': value.hotelId,
    };
}
exports.TransportationTypeToJSON = TransportationTypeToJSON;
