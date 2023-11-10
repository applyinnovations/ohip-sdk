"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECertificateGenerationTypeToJSON = exports.ECertificateGenerationTypeFromJSONTyped = exports.ECertificateGenerationTypeFromJSON = exports.instanceOfECertificateGenerationType = void 0;
const runtime_1 = require("../runtime");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ECertificateGenerationType interface.
 */
function instanceOfECertificateGenerationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfECertificateGenerationType = instanceOfECertificateGenerationType;
function ECertificateGenerationTypeFromJSON(json) {
    return ECertificateGenerationTypeFromJSONTyped(json, false);
}
exports.ECertificateGenerationTypeFromJSON = ECertificateGenerationTypeFromJSON;
function ECertificateGenerationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'generationDetail': !(0, runtime_1.exists)(json, 'generationDetail') ? undefined : json['generationDetail'],
        'referenceValue': !(0, runtime_1.exists)(json, 'referenceValue') ? undefined : json['referenceValue'],
        'ruleId': !(0, runtime_1.exists)(json, 'ruleId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['ruleId']),
    };
}
exports.ECertificateGenerationTypeFromJSONTyped = ECertificateGenerationTypeFromJSONTyped;
function ECertificateGenerationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'generationDetail': value.generationDetail,
        'referenceValue': value.referenceValue,
        'ruleId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.ruleId),
    };
}
exports.ECertificateGenerationTypeToJSON = ECertificateGenerationTypeToJSON;
