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
exports.TaxTypesToJSON = exports.TaxTypesFromJSONTyped = exports.TaxTypesFromJSON = exports.instanceOfTaxTypes = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const TaxTypeType_1 = require("./TaxTypeType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the TaxTypes interface.
 */
function instanceOfTaxTypes(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTaxTypes = instanceOfTaxTypes;
function TaxTypesFromJSON(json) {
    return TaxTypesFromJSONTyped(json, false);
}
exports.TaxTypesFromJSON = TaxTypesFromJSON;
function TaxTypesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'taxTypes': !(0, runtime_1.exists)(json, 'taxTypes') ? undefined : (json['taxTypes'].map(TaxTypeType_1.TaxTypeTypeFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.TaxTypesFromJSONTyped = TaxTypesFromJSONTyped;
function TaxTypesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'taxTypes': value.taxTypes === undefined ? undefined : (value.taxTypes.map(TaxTypeType_1.TaxTypeTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.TaxTypesToJSON = TaxTypesToJSON;
