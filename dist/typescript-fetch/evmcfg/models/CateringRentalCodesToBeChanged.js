"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CateringRentalCodesToBeChangedToJSON = exports.CateringRentalCodesToBeChangedFromJSONTyped = exports.CateringRentalCodesToBeChangedFromJSON = exports.instanceOfCateringRentalCodesToBeChanged = void 0;
const runtime_1 = require("../runtime");
const CateringCodeType_1 = require("./CateringCodeType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the CateringRentalCodesToBeChanged interface.
 */
function instanceOfCateringRentalCodesToBeChanged(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCateringRentalCodesToBeChanged = instanceOfCateringRentalCodesToBeChanged;
function CateringRentalCodesToBeChangedFromJSON(json) {
    return CateringRentalCodesToBeChangedFromJSONTyped(json, false);
}
exports.CateringRentalCodesToBeChangedFromJSON = CateringRentalCodesToBeChangedFromJSON;
function CateringRentalCodesToBeChangedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'rentalCodes': !(0, runtime_1.exists)(json, 'rentalCodes') ? undefined : (json['rentalCodes'].map(CateringCodeType_1.CateringCodeTypeFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.CateringRentalCodesToBeChangedFromJSONTyped = CateringRentalCodesToBeChangedFromJSONTyped;
function CateringRentalCodesToBeChangedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'rentalCodes': value.rentalCodes === undefined ? undefined : (value.rentalCodes.map(CateringCodeType_1.CateringCodeTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.CateringRentalCodesToBeChangedToJSON = CateringRentalCodesToBeChangedToJSON;
