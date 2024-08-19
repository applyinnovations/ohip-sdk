"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnonymizationTypeToJSON = exports.AnonymizationTypeFromJSONTyped = exports.AnonymizationTypeFromJSON = exports.instanceOfAnonymizationType = void 0;
const runtime_1 = require("../runtime");
const AnonymizationStatusType_1 = require("./AnonymizationStatusType");
/**
 * Check if a given object implements the AnonymizationType interface.
 */
function instanceOfAnonymizationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAnonymizationType = instanceOfAnonymizationType;
function AnonymizationTypeFromJSON(json) {
    return AnonymizationTypeFromJSONTyped(json, false);
}
exports.AnonymizationTypeFromJSON = AnonymizationTypeFromJSON;
function AnonymizationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'anonymizationDate': !(0, runtime_1.exists)(json, 'anonymizationDate') ? undefined : json['anonymizationDate'],
        'anonymizationStatus': !(0, runtime_1.exists)(json, 'anonymizationStatus') ? undefined : (0, AnonymizationStatusType_1.AnonymizationStatusTypeFromJSON)(json['anonymizationStatus']),
    };
}
exports.AnonymizationTypeFromJSONTyped = AnonymizationTypeFromJSONTyped;
function AnonymizationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'anonymizationDate': value.anonymizationDate,
        'anonymizationStatus': (0, AnonymizationStatusType_1.AnonymizationStatusTypeToJSON)(value.anonymizationStatus),
    };
}
exports.AnonymizationTypeToJSON = AnonymizationTypeToJSON;
