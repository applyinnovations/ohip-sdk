"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARAccountRefTypeToJSON = exports.ARAccountRefTypeFromJSONTyped = exports.ARAccountRefTypeFromJSON = exports.instanceOfARAccountRefType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ARAccountRefType interface.
 */
function instanceOfARAccountRefType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfARAccountRefType = instanceOfARAccountRefType;
function ARAccountRefTypeFromJSON(json) {
    return ARAccountRefTypeFromJSONTyped(json, false);
}
exports.ARAccountRefTypeFromJSON = ARAccountRefTypeFromJSON;
function ARAccountRefTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountNo': !(0, runtime_1.exists)(json, 'accountNo') ? undefined : json['accountNo'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'idContext': !(0, runtime_1.exists)(json, 'idContext') ? undefined : json['idContext'],
        'idExtension': !(0, runtime_1.exists)(json, 'idExtension') ? undefined : json['idExtension'],
        'instance': !(0, runtime_1.exists)(json, 'instance') ? undefined : json['instance'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'url': !(0, runtime_1.exists)(json, 'url') ? undefined : json['url'],
    };
}
exports.ARAccountRefTypeFromJSONTyped = ARAccountRefTypeFromJSONTyped;
function ARAccountRefTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountNo': value.accountNo,
        'id': value.id,
        'idContext': value.idContext,
        'idExtension': value.idExtension,
        'instance': value.instance,
        'name': value.name,
        'type': value.type,
        'url': value.url,
    };
}
exports.ARAccountRefTypeToJSON = ARAccountRefTypeToJSON;
