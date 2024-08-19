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
exports.ProjectedRevenueTypeToJSON = exports.ProjectedRevenueTypeFromJSONTyped = exports.ProjectedRevenueTypeFromJSON = exports.instanceOfProjectedRevenueType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
/**
 * Check if a given object implements the ProjectedRevenueType interface.
 */
function instanceOfProjectedRevenueType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProjectedRevenueType = instanceOfProjectedRevenueType;
function ProjectedRevenueTypeFromJSON(json) {
    return ProjectedRevenueTypeFromJSONTyped(json, false);
}
exports.ProjectedRevenueTypeFromJSON = ProjectedRevenueTypeFromJSON;
function ProjectedRevenueTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'projectedCateringRevenue': !(0, runtime_1.exists)(json, 'projectedCateringRevenue') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['projectedCateringRevenue']),
        'projectedRoomRevenue': !(0, runtime_1.exists)(json, 'projectedRoomRevenue') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['projectedRoomRevenue']),
        'roomNights': !(0, runtime_1.exists)(json, 'roomNights') ? undefined : json['roomNights'],
    };
}
exports.ProjectedRevenueTypeFromJSONTyped = ProjectedRevenueTypeFromJSONTyped;
function ProjectedRevenueTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'projectedCateringRevenue': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.projectedCateringRevenue),
        'projectedRoomRevenue': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.projectedRoomRevenue),
        'roomNights': value.roomNights,
    };
}
exports.ProjectedRevenueTypeToJSON = ProjectedRevenueTypeToJSON;
