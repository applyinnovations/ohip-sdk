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
exports.CollectingAgentTaxesTypeToJSON = exports.CollectingAgentTaxesTypeFromJSONTyped = exports.CollectingAgentTaxesTypeFromJSON = exports.instanceOfCollectingAgentTaxesType = void 0;
const runtime_1 = require("../runtime");
const CollectingAgentTaxType_1 = require("./CollectingAgentTaxType");
/**
 * Check if a given object implements the CollectingAgentTaxesType interface.
 */
function instanceOfCollectingAgentTaxesType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCollectingAgentTaxesType = instanceOfCollectingAgentTaxesType;
function CollectingAgentTaxesTypeFromJSON(json) {
    return CollectingAgentTaxesTypeFromJSONTyped(json, false);
}
exports.CollectingAgentTaxesTypeFromJSON = CollectingAgentTaxesTypeFromJSON;
function CollectingAgentTaxesTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'collectingAgentTax': !(0, runtime_1.exists)(json, 'collectingAgentTax') ? undefined : (json['collectingAgentTax'].map(CollectingAgentTaxType_1.CollectingAgentTaxTypeFromJSON)),
        'overrideCollectingAgentTaxes': !(0, runtime_1.exists)(json, 'overrideCollectingAgentTaxes') ? undefined : json['overrideCollectingAgentTaxes'],
    };
}
exports.CollectingAgentTaxesTypeFromJSONTyped = CollectingAgentTaxesTypeFromJSONTyped;
function CollectingAgentTaxesTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'collectingAgentTax': value.collectingAgentTax === undefined ? undefined : (value.collectingAgentTax.map(CollectingAgentTaxType_1.CollectingAgentTaxTypeToJSON)),
        'overrideCollectingAgentTaxes': value.overrideCollectingAgentTaxes,
    };
}
exports.CollectingAgentTaxesTypeToJSON = CollectingAgentTaxesTypeToJSON;
