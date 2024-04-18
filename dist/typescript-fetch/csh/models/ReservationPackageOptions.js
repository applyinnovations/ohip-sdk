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
exports.ReservationPackageOptionsToJSON = exports.ReservationPackageOptionsFromJSONTyped = exports.ReservationPackageOptionsFromJSON = exports.instanceOfReservationPackageOptions = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const LinkedAllowanceReservationsInfoType_1 = require("./LinkedAllowanceReservationsInfoType");
const PackagePostingType_1 = require("./PackagePostingType");
const TrxInfoType_1 = require("./TrxInfoType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the ReservationPackageOptions interface.
 */
function instanceOfReservationPackageOptions(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationPackageOptions = instanceOfReservationPackageOptions;
function ReservationPackageOptionsFromJSON(json) {
    return ReservationPackageOptionsFromJSONTyped(json, false);
}
exports.ReservationPackageOptionsFromJSON = ReservationPackageOptionsFromJSON;
function ReservationPackageOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'linkedAllowanceReservationsInfo': !(0, runtime_1.exists)(json, 'linkedAllowanceReservationsInfo') ? undefined : (0, LinkedAllowanceReservationsInfoType_1.LinkedAllowanceReservationsInfoTypeFromJSON)(json['linkedAllowanceReservationsInfo']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'packagePostings': !(0, runtime_1.exists)(json, 'packagePostings') ? undefined : (json['packagePostings'].map(PackagePostingType_1.PackagePostingTypeFromJSON)),
        'trxCodesInfo': !(0, runtime_1.exists)(json, 'trxCodesInfo') ? undefined : (json['trxCodesInfo'].map(TrxInfoType_1.TrxInfoTypeFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.ReservationPackageOptionsFromJSONTyped = ReservationPackageOptionsFromJSONTyped;
function ReservationPackageOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'linkedAllowanceReservationsInfo': (0, LinkedAllowanceReservationsInfoType_1.LinkedAllowanceReservationsInfoTypeToJSON)(value.linkedAllowanceReservationsInfo),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'packagePostings': value.packagePostings === undefined ? undefined : (value.packagePostings.map(PackagePostingType_1.PackagePostingTypeToJSON)),
        'trxCodesInfo': value.trxCodesInfo === undefined ? undefined : (value.trxCodesInfo.map(TrxInfoType_1.TrxInfoTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.ReservationPackageOptionsToJSON = ReservationPackageOptionsToJSON;