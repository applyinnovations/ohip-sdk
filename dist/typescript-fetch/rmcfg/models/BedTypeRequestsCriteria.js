"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BedTypeRequestsCriteriaToJSON = exports.BedTypeRequestsCriteriaFromJSONTyped = exports.BedTypeRequestsCriteriaFromJSON = exports.instanceOfBedTypeRequestsCriteria = void 0;
const runtime_1 = require("../runtime");
const BedTypeRequestsType_1 = require("./BedTypeRequestsType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the BedTypeRequestsCriteria interface.
 */
function instanceOfBedTypeRequestsCriteria(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBedTypeRequestsCriteria = instanceOfBedTypeRequestsCriteria;
function BedTypeRequestsCriteriaFromJSON(json) {
    return BedTypeRequestsCriteriaFromJSONTyped(json, false);
}
exports.BedTypeRequestsCriteriaFromJSON = BedTypeRequestsCriteriaFromJSON;
function BedTypeRequestsCriteriaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bedTypeRequests': !(0, runtime_1.exists)(json, 'bedTypeRequests') ? undefined : (0, BedTypeRequestsType_1.BedTypeRequestsTypeFromJSON)(json['bedTypeRequests']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.BedTypeRequestsCriteriaFromJSONTyped = BedTypeRequestsCriteriaFromJSONTyped;
function BedTypeRequestsCriteriaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bedTypeRequests': (0, BedTypeRequestsType_1.BedTypeRequestsTypeToJSON)(value.bedTypeRequests),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.BedTypeRequestsCriteriaToJSON = BedTypeRequestsCriteriaToJSON;
