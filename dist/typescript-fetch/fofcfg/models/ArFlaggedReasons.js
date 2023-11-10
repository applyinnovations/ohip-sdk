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
exports.ArFlaggedReasonsToJSON = exports.ArFlaggedReasonsFromJSONTyped = exports.ArFlaggedReasonsFromJSON = exports.instanceOfArFlaggedReasons = void 0;
const runtime_1 = require("../runtime");
const ARFlaggedReasonsType_1 = require("./ARFlaggedReasonsType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the ArFlaggedReasons interface.
 */
function instanceOfArFlaggedReasons(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfArFlaggedReasons = instanceOfArFlaggedReasons;
function ArFlaggedReasonsFromJSON(json) {
    return ArFlaggedReasonsFromJSONTyped(json, false);
}
exports.ArFlaggedReasonsFromJSON = ArFlaggedReasonsFromJSON;
function ArFlaggedReasonsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'aRFlaggedReasons': !(0, runtime_1.exists)(json, 'aRFlaggedReasons') ? undefined : (0, ARFlaggedReasonsType_1.ARFlaggedReasonsTypeFromJSON)(json['aRFlaggedReasons']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.ArFlaggedReasonsFromJSONTyped = ArFlaggedReasonsFromJSONTyped;
function ArFlaggedReasonsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'aRFlaggedReasons': (0, ARFlaggedReasonsType_1.ARFlaggedReasonsTypeToJSON)(value.aRFlaggedReasons),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.ArFlaggedReasonsToJSON = ArFlaggedReasonsToJSON;
