"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyEventResourcesRequestToJSON = exports.CopyEventResourcesRequestFromJSONTyped = exports.CopyEventResourcesRequestFromJSON = exports.instanceOfCopyEventResourcesRequest = void 0;
const runtime_1 = require("../runtime");
const CopyAndMoveEventResourcesType_1 = require("./CopyAndMoveEventResourcesType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the CopyEventResourcesRequest interface.
 */
function instanceOfCopyEventResourcesRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCopyEventResourcesRequest = instanceOfCopyEventResourcesRequest;
function CopyEventResourcesRequestFromJSON(json) {
    return CopyEventResourcesRequestFromJSONTyped(json, false);
}
exports.CopyEventResourcesRequestFromJSON = CopyEventResourcesRequestFromJSON;
function CopyEventResourcesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'criteria': !(0, runtime_1.exists)(json, 'criteria') ? undefined : (0, CopyAndMoveEventResourcesType_1.CopyAndMoveEventResourcesTypeFromJSON)(json['criteria']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.CopyEventResourcesRequestFromJSONTyped = CopyEventResourcesRequestFromJSONTyped;
function CopyEventResourcesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'criteria': (0, CopyAndMoveEventResourcesType_1.CopyAndMoveEventResourcesTypeToJSON)(value.criteria),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.CopyEventResourcesRequestToJSON = CopyEventResourcesRequestToJSON;
