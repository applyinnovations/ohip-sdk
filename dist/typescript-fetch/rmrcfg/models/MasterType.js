"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterTypeToJSON = exports.MasterTypeFromJSONTyped = exports.MasterTypeFromJSON = exports.MasterType = void 0;
/**
 *
 * @export
 */
exports.MasterType = {
    Country: 'Country',
    State: 'State',
    AddressType: 'AddressType',
    PhoneType: 'PhoneType',
    RateCategory: 'RateCategory',
    CalculationRule: 'CalculationRule',
    PostingRythym: 'PostingRythym',
    BillingInstruction: 'BillingInstruction',
    TransactionCode: 'TransactionCode',
    DisplaySet: 'DisplaySet',
    MailingActions: 'MailingActions',
    DistanceType: 'DistanceType',
    District: 'District',
    Territory: 'Territory',
    FiscalRegion: 'FiscalRegion',
    InventoryItem: 'InventoryItem',
    Package: 'Package',
    RoomFeaturePreference: 'RoomFeaturePreference',
    SpecialPreference: 'SpecialPreference',
    Promotion: 'Promotion',
    Department: 'Department',
    ReservationPreference: 'ReservationPreference',
    FacilityTask: 'FacilityTask',
    RoomType: 'RoomType',
    RateCode: 'RateCode',
    OutOfOrderReason: 'OutOfOrderReason',
    Block: 'Block'
};
function MasterTypeFromJSON(json) {
    return MasterTypeFromJSONTyped(json, false);
}
exports.MasterTypeFromJSON = MasterTypeFromJSON;
function MasterTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.MasterTypeFromJSONTyped = MasterTypeFromJSONTyped;
function MasterTypeToJSON(value) {
    return value;
}
exports.MasterTypeToJSON = MasterTypeToJSON;