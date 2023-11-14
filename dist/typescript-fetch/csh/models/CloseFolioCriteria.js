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
exports.CloseFolioCriteriaToJSON = exports.CloseFolioCriteriaFromJSONTyped = exports.CloseFolioCriteriaFromJSON = exports.instanceOfCloseFolioCriteria = void 0;
const runtime_1 = require("../runtime");
const CloseFolioCriteriaType_1 = require("./CloseFolioCriteriaType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the CloseFolioCriteria interface.
 */
function instanceOfCloseFolioCriteria(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCloseFolioCriteria = instanceOfCloseFolioCriteria;
function CloseFolioCriteriaFromJSON(json) {
    return CloseFolioCriteriaFromJSONTyped(json, false);
}
exports.CloseFolioCriteriaFromJSON = CloseFolioCriteriaFromJSON;
function CloseFolioCriteriaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'criteria': !(0, runtime_1.exists)(json, 'criteria') ? undefined : (0, CloseFolioCriteriaType_1.CloseFolioCriteriaTypeFromJSON)(json['criteria']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.CloseFolioCriteriaFromJSONTyped = CloseFolioCriteriaFromJSONTyped;
function CloseFolioCriteriaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'criteria': (0, CloseFolioCriteriaType_1.CloseFolioCriteriaTypeToJSON)(value.criteria),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.CloseFolioCriteriaToJSON = CloseFolioCriteriaToJSON;