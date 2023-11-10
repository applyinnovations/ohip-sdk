"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionSpaceConfigTypeSetupStylesInnerToJSON = exports.FunctionSpaceConfigTypeSetupStylesInnerFromJSONTyped = exports.FunctionSpaceConfigTypeSetupStylesInnerFromJSON = exports.instanceOfFunctionSpaceConfigTypeSetupStylesInner = void 0;
const runtime_1 = require("../runtime");
const TranslationTextType200_1 = require("./TranslationTextType200");
/**
 * Check if a given object implements the FunctionSpaceConfigTypeSetupStylesInner interface.
 */
function instanceOfFunctionSpaceConfigTypeSetupStylesInner(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFunctionSpaceConfigTypeSetupStylesInner = instanceOfFunctionSpaceConfigTypeSetupStylesInner;
function FunctionSpaceConfigTypeSetupStylesInnerFromJSON(json) {
    return FunctionSpaceConfigTypeSetupStylesInnerFromJSONTyped(json, false);
}
exports.FunctionSpaceConfigTypeSetupStylesInnerFromJSON = FunctionSpaceConfigTypeSetupStylesInnerFromJSON;
function FunctionSpaceConfigTypeSetupStylesInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'codeId': !(0, runtime_1.exists)(json, 'codeId') ? undefined : json['codeId'],
        '_default': !(0, runtime_1.exists)(json, 'default') ? undefined : json['default'],
        'directory': !(0, runtime_1.exists)(json, 'directory') ? undefined : json['directory'],
        'displaySequence': !(0, runtime_1.exists)(json, 'displaySequence') ? undefined : json['displaySequence'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'maxCapacity': !(0, runtime_1.exists)(json, 'maxCapacity') ? undefined : json['maxCapacity'],
        'minCapacity': !(0, runtime_1.exists)(json, 'minCapacity') ? undefined : json['minCapacity'],
        'translatableDescription': !(0, runtime_1.exists)(json, 'translatableDescription') ? undefined : (0, TranslationTextType200_1.TranslationTextType200FromJSON)(json['translatableDescription']),
        'webBooking': !(0, runtime_1.exists)(json, 'webBooking') ? undefined : json['webBooking'],
        'webSetdown': !(0, runtime_1.exists)(json, 'webSetdown') ? undefined : json['webSetdown'],
        'webSetup': !(0, runtime_1.exists)(json, 'webSetup') ? undefined : json['webSetup'],
    };
}
exports.FunctionSpaceConfigTypeSetupStylesInnerFromJSONTyped = FunctionSpaceConfigTypeSetupStylesInnerFromJSONTyped;
function FunctionSpaceConfigTypeSetupStylesInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'codeId': value.codeId,
        'default': value._default,
        'directory': value.directory,
        'displaySequence': value.displaySequence,
        'inactive': value.inactive,
        'maxCapacity': value.maxCapacity,
        'minCapacity': value.minCapacity,
        'translatableDescription': (0, TranslationTextType200_1.TranslationTextType200ToJSON)(value.translatableDescription),
        'webBooking': value.webBooking,
        'webSetdown': value.webSetdown,
        'webSetup': value.webSetup,
    };
}
exports.FunctionSpaceConfigTypeSetupStylesInnerToJSON = FunctionSpaceConfigTypeSetupStylesInnerToJSON;
