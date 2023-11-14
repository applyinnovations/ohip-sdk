"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingCheckChargesCriteriaToJSON = exports.BillingCheckChargesCriteriaFromJSONTyped = exports.BillingCheckChargesCriteriaFromJSON = exports.instanceOfBillingCheckChargesCriteria = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const PostBillingCheckChargesCriteriaType_1 = require("./PostBillingCheckChargesCriteriaType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the BillingCheckChargesCriteria interface.
 */
function instanceOfBillingCheckChargesCriteria(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBillingCheckChargesCriteria = instanceOfBillingCheckChargesCriteria;
function BillingCheckChargesCriteriaFromJSON(json) {
    return BillingCheckChargesCriteriaFromJSONTyped(json, false);
}
exports.BillingCheckChargesCriteriaFromJSON = BillingCheckChargesCriteriaFromJSON;
function BillingCheckChargesCriteriaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'check': !(0, runtime_1.exists)(json, 'check') ? undefined : (0, PostBillingCheckChargesCriteriaType_1.PostBillingCheckChargesCriteriaTypeFromJSON)(json['check']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.BillingCheckChargesCriteriaFromJSONTyped = BillingCheckChargesCriteriaFromJSONTyped;
function BillingCheckChargesCriteriaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'check': (0, PostBillingCheckChargesCriteriaType_1.PostBillingCheckChargesCriteriaTypeToJSON)(value.check),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.BillingCheckChargesCriteriaToJSON = BillingCheckChargesCriteriaToJSON;