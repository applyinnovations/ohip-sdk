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
exports.TaxTypeGenerateScheduleTypeToJSON = exports.TaxTypeGenerateScheduleTypeFromJSONTyped = exports.TaxTypeGenerateScheduleTypeFromJSON = exports.instanceOfTaxTypeGenerateScheduleType = void 0;
const runtime_1 = require("../runtime");
const TaxTypeCalcRuleType_1 = require("./TaxTypeCalcRuleType");
/**
 * Check if a given object implements the TaxTypeGenerateScheduleType interface.
 */
function instanceOfTaxTypeGenerateScheduleType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTaxTypeGenerateScheduleType = instanceOfTaxTypeGenerateScheduleType;
function TaxTypeGenerateScheduleTypeFromJSON(json) {
    return TaxTypeGenerateScheduleTypeFromJSONTyped(json, false);
}
exports.TaxTypeGenerateScheduleTypeFromJSON = TaxTypeGenerateScheduleTypeFromJSON;
function TaxTypeGenerateScheduleTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'rule': !(0, runtime_1.exists)(json, 'rule') ? undefined : (0, TaxTypeCalcRuleType_1.TaxTypeCalcRuleTypeFromJSON)(json['rule']),
        'startDate': !(0, runtime_1.exists)(json, 'startDate') ? undefined : (new Date(json['startDate'])),
    };
}
exports.TaxTypeGenerateScheduleTypeFromJSONTyped = TaxTypeGenerateScheduleTypeFromJSONTyped;
function TaxTypeGenerateScheduleTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'rule': (0, TaxTypeCalcRuleType_1.TaxTypeCalcRuleTypeToJSON)(value.rule),
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substr(0, 10)),
    };
}
exports.TaxTypeGenerateScheduleTypeToJSON = TaxTypeGenerateScheduleTypeToJSON;
