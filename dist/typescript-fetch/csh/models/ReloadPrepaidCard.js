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
exports.ReloadPrepaidCardToJSON = exports.ReloadPrepaidCardFromJSONTyped = exports.ReloadPrepaidCardFromJSON = exports.instanceOfReloadPrepaidCard = void 0;
const runtime_1 = require("../runtime");
const ActivatePrepaidCardCriteria_1 = require("./ActivatePrepaidCardCriteria");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the ReloadPrepaidCard interface.
 */
function instanceOfReloadPrepaidCard(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReloadPrepaidCard = instanceOfReloadPrepaidCard;
function ReloadPrepaidCardFromJSON(json) {
    return ReloadPrepaidCardFromJSONTyped(json, false);
}
exports.ReloadPrepaidCardFromJSON = ReloadPrepaidCardFromJSON;
function ReloadPrepaidCardFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'criteria': !(0, runtime_1.exists)(json, 'criteria') ? undefined : (0, ActivatePrepaidCardCriteria_1.ActivatePrepaidCardCriteriaFromJSON)(json['criteria']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.ReloadPrepaidCardFromJSONTyped = ReloadPrepaidCardFromJSONTyped;
function ReloadPrepaidCardToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'criteria': (0, ActivatePrepaidCardCriteria_1.ActivatePrepaidCardCriteriaToJSON)(value.criteria),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.ReloadPrepaidCardToJSON = ReloadPrepaidCardToJSON;
