"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockSummaryTypeToJSON = exports.BlockSummaryTypeFromJSONTyped = exports.BlockSummaryTypeFromJSON = exports.instanceOfBlockSummaryType = void 0;
const runtime_1 = require("../runtime");
const BlockClassificationType_1 = require("./BlockClassificationType");
const BlockInventoryControlType_1 = require("./BlockInventoryControlType");
const BlockOwnersType_1 = require("./BlockOwnersType");
const BookingStatusType_1 = require("./BookingStatusType");
const CustomFieldsType_1 = require("./CustomFieldsType");
const HotelUseType_1 = require("./HotelUseType");
const IndicatorType_1 = require("./IndicatorType");
const SearchMatchType_1 = require("./SearchMatchType");
/**
 * Check if a given object implements the BlockSummaryType interface.
 */
function instanceOfBlockSummaryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockSummaryType = instanceOfBlockSummaryType;
function BlockSummaryTypeFromJSON(json) {
    return BlockSummaryTypeFromJSONTyped(json, false);
}
exports.BlockSummaryTypeFromJSON = BlockSummaryTypeFromJSON;
function BlockSummaryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'actualRooms': !(0, runtime_1.exists)(json, 'actualRooms') ? undefined : json['actualRooms'],
        'blockClassification': !(0, runtime_1.exists)(json, 'blockClassification') ? undefined : (0, BlockClassificationType_1.BlockClassificationTypeFromJSON)(json['blockClassification']),
        'blockCode': !(0, runtime_1.exists)(json, 'blockCode') ? undefined : json['blockCode'],
        'blockIndicators': !(0, runtime_1.exists)(json, 'blockIndicators') ? undefined : (json['blockIndicators'].map(IndicatorType_1.IndicatorTypeFromJSON)),
        'blockName': !(0, runtime_1.exists)(json, 'blockName') ? undefined : json['blockName'],
        'blockStatus': !(0, runtime_1.exists)(json, 'blockStatus') ? undefined : (0, BookingStatusType_1.BookingStatusTypeFromJSON)(json['blockStatus']),
        'cateringAttendees': !(0, runtime_1.exists)(json, 'cateringAttendees') ? undefined : json['cateringAttendees'],
        'cateringDeductInventory': !(0, runtime_1.exists)(json, 'cateringDeductInventory') ? undefined : json['cateringDeductInventory'],
        'cateringOnlyBlock': !(0, runtime_1.exists)(json, 'cateringOnlyBlock') ? undefined : json['cateringOnlyBlock'],
        'cateringStatus': !(0, runtime_1.exists)(json, 'cateringStatus') ? undefined : (0, BookingStatusType_1.BookingStatusTypeFromJSON)(json['cateringStatus']),
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'customFields': !(0, runtime_1.exists)(json, 'customFields') ? undefined : (0, CustomFieldsType_1.CustomFieldsTypeFromJSON)(json['customFields']),
        'cutoffDate': !(0, runtime_1.exists)(json, 'cutoffDate') ? undefined : json['cutoffDate'],
        'decisionDate': !(0, runtime_1.exists)(json, 'decisionDate') ? undefined : json['decisionDate'],
        'deductInventory': !(0, runtime_1.exists)(json, 'deductInventory') ? undefined : json['deductInventory'],
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : json['endDate'],
        'flexibleDates': !(0, runtime_1.exists)(json, 'flexibleDates') ? undefined : json['flexibleDates'],
        'followupDate': !(0, runtime_1.exists)(json, 'followupDate') ? undefined : json['followupDate'],
        'groupName': !(0, runtime_1.exists)(json, 'groupName') ? undefined : json['groupName'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'hotelUse': !(0, runtime_1.exists)(json, 'hotelUse') ? undefined : (0, HotelUseType_1.HotelUseTypeFromJSON)(json['hotelUse']),
        'inventoryControl': !(0, runtime_1.exists)(json, 'inventoryControl') ? undefined : (0, BlockInventoryControlType_1.BlockInventoryControlTypeFromJSON)(json['inventoryControl']),
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'primaryOwners': !(0, runtime_1.exists)(json, 'primaryOwners') ? undefined : (0, BlockOwnersType_1.BlockOwnersTypeFromJSON)(json['primaryOwners']),
        'rateCode': !(0, runtime_1.exists)(json, 'rateCode') ? undefined : json['rateCode'],
        'reservationType': !(0, runtime_1.exists)(json, 'reservationType') ? undefined : json['reservationType'],
        'rooms': !(0, runtime_1.exists)(json, 'rooms') ? undefined : json['rooms'],
        'searchMatches': !(0, runtime_1.exists)(json, 'searchMatches') ? undefined : (json['searchMatches'].map(SearchMatchType_1.SearchMatchTypeFromJSON)),
        'shoulderEndDate': !(0, runtime_1.exists)(json, 'shoulderEndDate') ? undefined : json['shoulderEndDate'],
        'shoulderStartDate': !(0, runtime_1.exists)(json, 'shoulderStartDate') ? undefined : json['shoulderStartDate'],
        'startDate': !(0, runtime_1.exists)(json, 'startDate') ? undefined : json['startDate'],
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        '_synchronized': !(0, runtime_1.exists)(json, 'synchronized') ? undefined : json['synchronized'],
        'tentativeBlock': !(0, runtime_1.exists)(json, 'tentativeBlock') ? undefined : json['tentativeBlock'],
        'tourCode': !(0, runtime_1.exists)(json, 'tourCode') ? undefined : json['tourCode'],
    };
}
exports.BlockSummaryTypeFromJSONTyped = BlockSummaryTypeFromJSONTyped;
function BlockSummaryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'actualRooms': value.actualRooms,
        'blockClassification': (0, BlockClassificationType_1.BlockClassificationTypeToJSON)(value.blockClassification),
        'blockCode': value.blockCode,
        'blockIndicators': value.blockIndicators === undefined ? undefined : (value.blockIndicators.map(IndicatorType_1.IndicatorTypeToJSON)),
        'blockName': value.blockName,
        'blockStatus': (0, BookingStatusType_1.BookingStatusTypeToJSON)(value.blockStatus),
        'cateringAttendees': value.cateringAttendees,
        'cateringDeductInventory': value.cateringDeductInventory,
        'cateringOnlyBlock': value.cateringOnlyBlock,
        'cateringStatus': (0, BookingStatusType_1.BookingStatusTypeToJSON)(value.cateringStatus),
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'customFields': (0, CustomFieldsType_1.CustomFieldsTypeToJSON)(value.customFields),
        'cutoffDate': value.cutoffDate,
        'decisionDate': value.decisionDate,
        'deductInventory': value.deductInventory,
        'endDate': value.endDate,
        'flexibleDates': value.flexibleDates,
        'followupDate': value.followupDate,
        'groupName': value.groupName,
        'hotelId': value.hotelId,
        'hotelUse': (0, HotelUseType_1.HotelUseTypeToJSON)(value.hotelUse),
        'inventoryControl': (0, BlockInventoryControlType_1.BlockInventoryControlTypeToJSON)(value.inventoryControl),
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'primaryOwners': (0, BlockOwnersType_1.BlockOwnersTypeToJSON)(value.primaryOwners),
        'rateCode': value.rateCode,
        'reservationType': value.reservationType,
        'rooms': value.rooms,
        'searchMatches': value.searchMatches === undefined ? undefined : (value.searchMatches.map(SearchMatchType_1.SearchMatchTypeToJSON)),
        'shoulderEndDate': value.shoulderEndDate,
        'shoulderStartDate': value.shoulderStartDate,
        'startDate': value.startDate,
        'status': value.status,
        'synchronized': value._synchronized,
        'tentativeBlock': value.tentativeBlock,
        'tourCode': value.tourCode,
    };
}
exports.BlockSummaryTypeToJSON = BlockSummaryTypeToJSON;