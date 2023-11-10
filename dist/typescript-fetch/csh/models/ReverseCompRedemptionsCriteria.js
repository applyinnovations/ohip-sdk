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
exports.ReverseCompRedemptionsCriteriaToJSON = exports.ReverseCompRedemptionsCriteriaFromJSONTyped = exports.ReverseCompRedemptionsCriteriaFromJSON = exports.instanceOfReverseCompRedemptionsCriteria = void 0;
const runtime_1 = require("../runtime");
const CompRedemptionsType_1 = require("./CompRedemptionsType");
/**
 * Check if a given object implements the ReverseCompRedemptionsCriteria interface.
 */
function instanceOfReverseCompRedemptionsCriteria(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReverseCompRedemptionsCriteria = instanceOfReverseCompRedemptionsCriteria;
function ReverseCompRedemptionsCriteriaFromJSON(json) {
    return ReverseCompRedemptionsCriteriaFromJSONTyped(json, false);
}
exports.ReverseCompRedemptionsCriteriaFromJSON = ReverseCompRedemptionsCriteriaFromJSON;
function ReverseCompRedemptionsCriteriaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cashierId': !(0, runtime_1.exists)(json, 'cashierId') ? undefined : json['cashierId'],
        'compRedemptions': !(0, runtime_1.exists)(json, 'compRedemptions') ? undefined : (0, CompRedemptionsType_1.CompRedemptionsTypeFromJSON)(json['compRedemptions']),
        'folioView': !(0, runtime_1.exists)(json, 'folioView') ? undefined : json['folioView'],
        'membershipId': !(0, runtime_1.exists)(json, 'membershipId') ? undefined : json['membershipId'],
    };
}
exports.ReverseCompRedemptionsCriteriaFromJSONTyped = ReverseCompRedemptionsCriteriaFromJSONTyped;
function ReverseCompRedemptionsCriteriaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cashierId': value.cashierId,
        'compRedemptions': (0, CompRedemptionsType_1.CompRedemptionsTypeToJSON)(value.compRedemptions),
        'folioView': value.folioView,
        'membershipId': value.membershipId,
    };
}
exports.ReverseCompRedemptionsCriteriaToJSON = ReverseCompRedemptionsCriteriaToJSON;
