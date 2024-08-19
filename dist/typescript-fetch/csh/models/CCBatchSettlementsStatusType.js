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
exports.CCBatchSettlementsStatusTypeToJSON = exports.CCBatchSettlementsStatusTypeFromJSONTyped = exports.CCBatchSettlementsStatusTypeFromJSON = exports.instanceOfCCBatchSettlementsStatusType = void 0;
const runtime_1 = require("../runtime");
const CCBatchSettlementStatusType_1 = require("./CCBatchSettlementStatusType");
/**
 * Check if a given object implements the CCBatchSettlementsStatusType interface.
 */
function instanceOfCCBatchSettlementsStatusType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCCBatchSettlementsStatusType = instanceOfCCBatchSettlementsStatusType;
function CCBatchSettlementsStatusTypeFromJSON(json) {
    return CCBatchSettlementsStatusTypeFromJSONTyped(json, false);
}
exports.CCBatchSettlementsStatusTypeFromJSON = CCBatchSettlementsStatusTypeFromJSON;
function CCBatchSettlementsStatusTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'batchId': !(0, runtime_1.exists)(json, 'batchId') ? undefined : json['batchId'],
        'cCBatchSettlementsStatus': !(0, runtime_1.exists)(json, 'cCBatchSettlementsStatus') ? undefined : (json['cCBatchSettlementsStatus'].map(CCBatchSettlementStatusType_1.CCBatchSettlementStatusTypeFromJSON)),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
    };
}
exports.CCBatchSettlementsStatusTypeFromJSONTyped = CCBatchSettlementsStatusTypeFromJSONTyped;
function CCBatchSettlementsStatusTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'batchId': value.batchId,
        'cCBatchSettlementsStatus': value.cCBatchSettlementsStatus === undefined ? undefined : (value.cCBatchSettlementsStatus.map(CCBatchSettlementStatusType_1.CCBatchSettlementStatusTypeToJSON)),
        'hotelId': value.hotelId,
    };
}
exports.CCBatchSettlementsStatusTypeToJSON = CCBatchSettlementsStatusTypeToJSON;
