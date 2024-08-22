"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmountEligibleToJSON = exports.AmountEligibleFromJSONTyped = exports.AmountEligibleFromJSON = exports.instanceOfAmountEligible = void 0;
const runtime_1 = require("../runtime");
const AwardFolioInfo_1 = require("./AwardFolioInfo");
/**
 * Check if a given object implements the AmountEligible interface.
 */
function instanceOfAmountEligible(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAmountEligible = instanceOfAmountEligible;
function AmountEligibleFromJSON(json) {
    return AmountEligibleFromJSONTyped(json, false);
}
exports.AmountEligibleFromJSON = AmountEligibleFromJSON;
function AmountEligibleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amountEligibleInfo': !(0, runtime_1.exists)(json, 'amountEligibleInfo') ? undefined : (json['amountEligibleInfo'].map(AwardFolioInfo_1.AwardFolioInfoFromJSON)),
    };
}
exports.AmountEligibleFromJSONTyped = AmountEligibleFromJSONTyped;
function AmountEligibleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amountEligibleInfo': value.amountEligibleInfo === undefined ? undefined : (value.amountEligibleInfo.map(AwardFolioInfo_1.AwardFolioInfoToJSON)),
    };
}
exports.AmountEligibleToJSON = AmountEligibleToJSON;
