"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelSummaryInfoTypeToJSON = exports.HotelSummaryInfoTypeFromJSONTyped = exports.HotelSummaryInfoTypeFromJSON = exports.instanceOfHotelSummaryInfoType = void 0;
const runtime_1 = require("../runtime");
const AddressType_1 = require("./AddressType");
const ChannelSummaryInfoType_1 = require("./ChannelSummaryInfoType");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const CurrencyExchangeRatesType_1 = require("./CurrencyExchangeRatesType");
const HotelAmenityType_1 = require("./HotelAmenityType");
const RateRoomDetailsType_1 = require("./RateRoomDetailsType");
const RelativePositionType_1 = require("./RelativePositionType");
const SellMessagesType_1 = require("./SellMessagesType");
const TelephoneType_1 = require("./TelephoneType");
/**
 * Check if a given object implements the HotelSummaryInfoType interface.
 */
function instanceOfHotelSummaryInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelSummaryInfoType = instanceOfHotelSummaryInfoType;
function HotelSummaryInfoTypeFromJSON(json) {
    return HotelSummaryInfoTypeFromJSONTyped(json, false);
}
exports.HotelSummaryInfoTypeFromJSON = HotelSummaryInfoTypeFromJSON;
function HotelSummaryInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': !(0, runtime_1.exists)(json, 'address') ? undefined : (0, AddressType_1.AddressTypeFromJSON)(json['address']),
        'alternate': !(0, runtime_1.exists)(json, 'alternate') ? undefined : json['alternate'],
        'availableRooms': !(0, runtime_1.exists)(json, 'availableRooms') ? undefined : json['availableRooms'],
        'chainCode': !(0, runtime_1.exists)(json, 'chainCode') ? undefined : json['chainCode'],
        'chainName': !(0, runtime_1.exists)(json, 'chainName') ? undefined : json['chainName'],
        'channelSummaryInfo': !(0, runtime_1.exists)(json, 'channelSummaryInfo') ? undefined : (0, ChannelSummaryInfoType_1.ChannelSummaryInfoTypeFromJSON)(json['channelSummaryInfo']),
        'checkInTime': !(0, runtime_1.exists)(json, 'checkInTime') ? undefined : json['checkInTime'],
        'checkOutTime': !(0, runtime_1.exists)(json, 'checkOutTime') ? undefined : json['checkOutTime'],
        'contactNumbers': !(0, runtime_1.exists)(json, 'contactNumbers') ? undefined : (json['contactNumbers'].map(TelephoneType_1.TelephoneTypeFromJSON)),
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'currencyExchangeRates': !(0, runtime_1.exists)(json, 'currencyExchangeRates') ? undefined : (0, CurrencyExchangeRatesType_1.CurrencyExchangeRatesTypeFromJSON)(json['currencyExchangeRates']),
        'displayOrder': !(0, runtime_1.exists)(json, 'displayOrder') ? undefined : json['displayOrder'],
        'event': !(0, runtime_1.exists)(json, 'event') ? undefined : json['event'],
        'hotelAmenities': !(0, runtime_1.exists)(json, 'hotelAmenities') ? undefined : (json['hotelAmenities'].map(HotelAmenityType_1.HotelAmenityTypeFromJSON)),
        'hotelCityCode': !(0, runtime_1.exists)(json, 'hotelCityCode') ? undefined : json['hotelCityCode'],
        'hotelCodeContext': !(0, runtime_1.exists)(json, 'hotelCodeContext') ? undefined : json['hotelCodeContext'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'hotelName': !(0, runtime_1.exists)(json, 'hotelName') ? undefined : json['hotelName'],
        'hotelType': !(0, runtime_1.exists)(json, 'hotelType') ? undefined : json['hotelType'],
        'inventoryRooms': !(0, runtime_1.exists)(json, 'inventoryRooms') ? undefined : json['inventoryRooms'],
        'maxRate': !(0, runtime_1.exists)(json, 'maxRate') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['maxRate']),
        'minRate': !(0, runtime_1.exists)(json, 'minRate') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['minRate']),
        'negotiated': !(0, runtime_1.exists)(json, 'negotiated') ? undefined : json['negotiated'],
        'numberOfEvents': !(0, runtime_1.exists)(json, 'numberOfEvents') ? undefined : json['numberOfEvents'],
        'rateRoomDetails': !(0, runtime_1.exists)(json, 'rateRoomDetails') ? undefined : (0, RateRoomDetailsType_1.RateRoomDetailsTypeFromJSON)(json['rateRoomDetails']),
        'relativePosition': !(0, runtime_1.exists)(json, 'relativePosition') ? undefined : (0, RelativePositionType_1.RelativePositionTypeFromJSON)(json['relativePosition']),
        'sellMessages': !(0, runtime_1.exists)(json, 'sellMessages') ? undefined : (0, SellMessagesType_1.SellMessagesTypeFromJSON)(json['sellMessages']),
        'timeZoneRegion': !(0, runtime_1.exists)(json, 'timeZoneRegion') ? undefined : json['timeZoneRegion'],
    };
}
exports.HotelSummaryInfoTypeFromJSONTyped = HotelSummaryInfoTypeFromJSONTyped;
function HotelSummaryInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': (0, AddressType_1.AddressTypeToJSON)(value.address),
        'alternate': value.alternate,
        'availableRooms': value.availableRooms,
        'chainCode': value.chainCode,
        'chainName': value.chainName,
        'channelSummaryInfo': (0, ChannelSummaryInfoType_1.ChannelSummaryInfoTypeToJSON)(value.channelSummaryInfo),
        'checkInTime': value.checkInTime,
        'checkOutTime': value.checkOutTime,
        'contactNumbers': value.contactNumbers === undefined ? undefined : (value.contactNumbers.map(TelephoneType_1.TelephoneTypeToJSON)),
        'currencyCode': value.currencyCode,
        'currencyExchangeRates': (0, CurrencyExchangeRatesType_1.CurrencyExchangeRatesTypeToJSON)(value.currencyExchangeRates),
        'displayOrder': value.displayOrder,
        'event': value.event,
        'hotelAmenities': value.hotelAmenities === undefined ? undefined : (value.hotelAmenities.map(HotelAmenityType_1.HotelAmenityTypeToJSON)),
        'hotelCityCode': value.hotelCityCode,
        'hotelCodeContext': value.hotelCodeContext,
        'hotelId': value.hotelId,
        'hotelName': value.hotelName,
        'hotelType': value.hotelType,
        'inventoryRooms': value.inventoryRooms,
        'maxRate': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.maxRate),
        'minRate': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.minRate),
        'negotiated': value.negotiated,
        'numberOfEvents': value.numberOfEvents,
        'rateRoomDetails': (0, RateRoomDetailsType_1.RateRoomDetailsTypeToJSON)(value.rateRoomDetails),
        'relativePosition': (0, RelativePositionType_1.RelativePositionTypeToJSON)(value.relativePosition),
        'sellMessages': (0, SellMessagesType_1.SellMessagesTypeToJSON)(value.sellMessages),
        'timeZoneRegion': value.timeZoneRegion,
    };
}
exports.HotelSummaryInfoTypeToJSON = HotelSummaryInfoTypeToJSON;
