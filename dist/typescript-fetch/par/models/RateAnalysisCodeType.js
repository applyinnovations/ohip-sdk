"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateAnalysisCodeTypeToJSON = exports.RateAnalysisCodeTypeFromJSONTyped = exports.RateAnalysisCodeTypeFromJSON = exports.RateAnalysisCodeType = void 0;
/**
 *
 * @export
 */
exports.RateAnalysisCodeType = {
    Closed: 'Closed',
    ClosedForArrival: 'ClosedForArrival',
    ClosedForDeparture: 'ClosedForDeparture',
    MinimumStayThrough: 'MinimumStayThrough',
    MaximumStayThrough: 'MaximumStayThrough',
    MinimumLengthOfStay: 'MinimumLengthOfStay',
    MaximumLengthOfStay: 'MaximumLengthOfStay',
    LosNotAvailable: 'LOSNotAvailable',
    MinimumAdvanceBooking: 'MinimumAdvanceBooking',
    MaximumAdvanceBooking: 'MaximumAdvanceBooking',
    Open: 'Open',
    OpenForArrival: 'OpenForArrival',
    OpenForDeparture: 'OpenForDeparture',
    Hurdle: 'Hurdle',
    MinimumOccupancy: 'MinimumOccupancy',
    MaximumOccupancy: 'MaximumOccupancy',
    RateStrategy: 'RateStrategy',
    RateDetailsNotSet: 'RateDetailsNotSet',
    InventoryItemNotAvailable: 'InventoryItemNotAvailable',
    RankRestriction: 'RankRestriction',
    MaximumAuth: 'MaximumAuth',
    InventoryNotAvailable: 'InventoryNotAvailable',
    RoomClassNotAvailable: 'RoomClassNotAvailable',
    RoomTypeNotAvailable: 'RoomTypeNotAvailable',
    BlockSellLimit: 'BlockSellLimit'
};
function RateAnalysisCodeTypeFromJSON(json) {
    return RateAnalysisCodeTypeFromJSONTyped(json, false);
}
exports.RateAnalysisCodeTypeFromJSON = RateAnalysisCodeTypeFromJSON;
function RateAnalysisCodeTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.RateAnalysisCodeTypeFromJSONTyped = RateAnalysisCodeTypeFromJSONTyped;
function RateAnalysisCodeTypeToJSON(value) {
    return value;
}
exports.RateAnalysisCodeTypeToJSON = RateAnalysisCodeTypeToJSON;
