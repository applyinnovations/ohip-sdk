"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalReferenceTypeToJSON = exports.ExternalReferenceTypeFromJSONTyped = exports.ExternalReferenceTypeFromJSON = exports.instanceOfExternalReferenceType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ExternalReferenceType interface.
 */
function instanceOfExternalReferenceType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfExternalReferenceType = instanceOfExternalReferenceType;
function ExternalReferenceTypeFromJSON(json) {
    return ExternalReferenceTypeFromJSONTyped(json, false);
}
exports.ExternalReferenceTypeFromJSON = ExternalReferenceTypeFromJSON;
function ExternalReferenceTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'idContext': !(0, runtime_1.exists)(json, 'idContext') ? undefined : json['idContext'],
        'idExtension': !(0, runtime_1.exists)(json, 'idExtension') ? undefined : json['idExtension'],
    };
}
exports.ExternalReferenceTypeFromJSONTyped = ExternalReferenceTypeFromJSONTyped;
function ExternalReferenceTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'idContext': value.idContext,
        'idExtension': value.idExtension,
    };
}
exports.ExternalReferenceTypeToJSON = ExternalReferenceTypeToJSON;
