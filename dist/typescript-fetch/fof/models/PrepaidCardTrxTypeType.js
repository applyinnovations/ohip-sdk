"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrepaidCardTrxTypeTypeToJSON = exports.PrepaidCardTrxTypeTypeFromJSONTyped = exports.PrepaidCardTrxTypeTypeFromJSON = exports.PrepaidCardTrxTypeType = void 0;
/**
 * Reload transaction.
 * @export
 */
exports.PrepaidCardTrxTypeType = {
    Activate: 'Activate',
    Cancel: 'Cancel',
    Cashout: 'Cashout',
    Inquiry: 'Inquiry',
    Issue: 'Issue',
    Redeem: 'Redeem',
    Reload: 'Reload'
};
function PrepaidCardTrxTypeTypeFromJSON(json) {
    return PrepaidCardTrxTypeTypeFromJSONTyped(json, false);
}
exports.PrepaidCardTrxTypeTypeFromJSON = PrepaidCardTrxTypeTypeFromJSON;
function PrepaidCardTrxTypeTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.PrepaidCardTrxTypeTypeFromJSONTyped = PrepaidCardTrxTypeTypeFromJSONTyped;
function PrepaidCardTrxTypeTypeToJSON(value) {
    return value;
}
exports.PrepaidCardTrxTypeTypeToJSON = PrepaidCardTrxTypeTypeToJSON;