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
exports.NoShowPostingRulesEditToJSON = exports.NoShowPostingRulesEditFromJSONTyped = exports.NoShowPostingRulesEditFromJSON = exports.instanceOfNoShowPostingRulesEdit = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const NoShowPostingRulesEditType_1 = require("./NoShowPostingRulesEditType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the NoShowPostingRulesEdit interface.
 */
function instanceOfNoShowPostingRulesEdit(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfNoShowPostingRulesEdit = instanceOfNoShowPostingRulesEdit;
function NoShowPostingRulesEditFromJSON(json) {
    return NoShowPostingRulesEditFromJSONTyped(json, false);
}
exports.NoShowPostingRulesEditFromJSON = NoShowPostingRulesEditFromJSON;
function NoShowPostingRulesEditFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'noShowPostingRules': !(0, runtime_1.exists)(json, 'noShowPostingRules') ? undefined : (0, NoShowPostingRulesEditType_1.NoShowPostingRulesEditTypeFromJSON)(json['noShowPostingRules']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.NoShowPostingRulesEditFromJSONTyped = NoShowPostingRulesEditFromJSONTyped;
function NoShowPostingRulesEditToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'noShowPostingRules': (0, NoShowPostingRulesEditType_1.NoShowPostingRulesEditTypeToJSON)(value.noShowPostingRules),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.NoShowPostingRulesEditToJSON = NoShowPostingRulesEditToJSON;
