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
exports.TemplateTransactionSubgroupIDTypeToJSON = exports.TemplateTransactionSubgroupIDTypeFromJSONTyped = exports.TemplateTransactionSubgroupIDTypeFromJSON = exports.instanceOfTemplateTransactionSubgroupIDType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the TemplateTransactionSubgroupIDType interface.
 */
function instanceOfTemplateTransactionSubgroupIDType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTemplateTransactionSubgroupIDType = instanceOfTemplateTransactionSubgroupIDType;
function TemplateTransactionSubgroupIDTypeFromJSON(json) {
    return TemplateTransactionSubgroupIDTypeFromJSONTyped(json, false);
}
exports.TemplateTransactionSubgroupIDTypeFromJSON = TemplateTransactionSubgroupIDTypeFromJSON;
function TemplateTransactionSubgroupIDTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'group': !(0, runtime_1.exists)(json, 'group') ? undefined : json['group'],
        'subgroup': !(0, runtime_1.exists)(json, 'subgroup') ? undefined : json['subgroup'],
    };
}
exports.TemplateTransactionSubgroupIDTypeFromJSONTyped = TemplateTransactionSubgroupIDTypeFromJSONTyped;
function TemplateTransactionSubgroupIDTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'group': value.group,
        'subgroup': value.subgroup,
    };
}
exports.TemplateTransactionSubgroupIDTypeToJSON = TemplateTransactionSubgroupIDTypeToJSON;
