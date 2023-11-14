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
exports.HotelInfoTypeToJSON = exports.HotelInfoTypeFromJSONTyped = exports.HotelInfoTypeFromJSON = exports.instanceOfHotelInfoType = void 0;
const runtime_1 = require("../runtime");
const AlternateHotelsType_1 = require("./AlternateHotelsType");
const HotelAttractionsType_1 = require("./HotelAttractionsType");
const HotelContactsType_1 = require("./HotelContactsType");
const HotelCorporateInformationsType_1 = require("./HotelCorporateInformationsType");
const HotelEventSpacesType_1 = require("./HotelEventSpacesType");
const HotelInfoTypeAccommodationDetails_1 = require("./HotelInfoTypeAccommodationDetails");
const HotelInfoTypeAddress_1 = require("./HotelInfoTypeAddress");
const HotelInfoTypeCommunication_1 = require("./HotelInfoTypeCommunication");
const HotelInfoTypeGeneralInformation_1 = require("./HotelInfoTypeGeneralInformation");
const HotelInfoTypePrimaryDetails_1 = require("./HotelInfoTypePrimaryDetails");
const HotelInfoTypePropertyControls_1 = require("./HotelInfoTypePropertyControls");
const HotelNotesType_1 = require("./HotelNotesType");
const HotelRateRangesType_1 = require("./HotelRateRangesType");
const HotelRestaurantsType_1 = require("./HotelRestaurantsType");
const MeetingRoomsType_1 = require("./MeetingRoomsType");
/**
 * Check if a given object implements the HotelInfoType interface.
 */
function instanceOfHotelInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelInfoType = instanceOfHotelInfoType;
function HotelInfoTypeFromJSON(json) {
    return HotelInfoTypeFromJSONTyped(json, false);
}
exports.HotelInfoTypeFromJSON = HotelInfoTypeFromJSON;
function HotelInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accommodationDetails': !(0, runtime_1.exists)(json, 'accommodationDetails') ? undefined : (0, HotelInfoTypeAccommodationDetails_1.HotelInfoTypeAccommodationDetailsFromJSON)(json['accommodationDetails']),
        'address': !(0, runtime_1.exists)(json, 'address') ? undefined : (0, HotelInfoTypeAddress_1.HotelInfoTypeAddressFromJSON)(json['address']),
        'alternateHotels': !(0, runtime_1.exists)(json, 'alternateHotels') ? undefined : (0, AlternateHotelsType_1.AlternateHotelsTypeFromJSON)(json['alternateHotels']),
        'attractions': !(0, runtime_1.exists)(json, 'attractions') ? undefined : (0, HotelAttractionsType_1.HotelAttractionsTypeFromJSON)(json['attractions']),
        'chainCode': !(0, runtime_1.exists)(json, 'chainCode') ? undefined : json['chainCode'],
        'chainName': !(0, runtime_1.exists)(json, 'chainName') ? undefined : json['chainName'],
        'communication': !(0, runtime_1.exists)(json, 'communication') ? undefined : (0, HotelInfoTypeCommunication_1.HotelInfoTypeCommunicationFromJSON)(json['communication']),
        'generalInformation': !(0, runtime_1.exists)(json, 'generalInformation') ? undefined : (0, HotelInfoTypeGeneralInformation_1.HotelInfoTypeGeneralInformationFromJSON)(json['generalInformation']),
        'hotelCityCode': !(0, runtime_1.exists)(json, 'hotelCityCode') ? undefined : json['hotelCityCode'],
        'hotelCodeContext': !(0, runtime_1.exists)(json, 'hotelCodeContext') ? undefined : json['hotelCodeContext'],
        'hotelContacts': !(0, runtime_1.exists)(json, 'hotelContacts') ? undefined : (0, HotelContactsType_1.HotelContactsTypeFromJSON)(json['hotelContacts']),
        'hotelCorporateInformations': !(0, runtime_1.exists)(json, 'hotelCorporateInformations') ? undefined : (0, HotelCorporateInformationsType_1.HotelCorporateInformationsTypeFromJSON)(json['hotelCorporateInformations']),
        'hotelEventSpaces': !(0, runtime_1.exists)(json, 'hotelEventSpaces') ? undefined : (0, HotelEventSpacesType_1.HotelEventSpacesTypeFromJSON)(json['hotelEventSpaces']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'hotelName': !(0, runtime_1.exists)(json, 'hotelName') ? undefined : json['hotelName'],
        'hotelNotes': !(0, runtime_1.exists)(json, 'hotelNotes') ? undefined : (0, HotelNotesType_1.HotelNotesTypeFromJSON)(json['hotelNotes']),
        'hotelRateRanges': !(0, runtime_1.exists)(json, 'hotelRateRanges') ? undefined : (0, HotelRateRangesType_1.HotelRateRangesTypeFromJSON)(json['hotelRateRanges']),
        'hotelRestaurants': !(0, runtime_1.exists)(json, 'hotelRestaurants') ? undefined : (0, HotelRestaurantsType_1.HotelRestaurantsTypeFromJSON)(json['hotelRestaurants']),
        'meetingRooms': !(0, runtime_1.exists)(json, 'meetingRooms') ? undefined : (0, MeetingRoomsType_1.MeetingRoomsTypeFromJSON)(json['meetingRooms']),
        'primaryDetails': !(0, runtime_1.exists)(json, 'primaryDetails') ? undefined : (0, HotelInfoTypePrimaryDetails_1.HotelInfoTypePrimaryDetailsFromJSON)(json['primaryDetails']),
        'propertyControls': !(0, runtime_1.exists)(json, 'propertyControls') ? undefined : (0, HotelInfoTypePropertyControls_1.HotelInfoTypePropertyControlsFromJSON)(json['propertyControls']),
    };
}
exports.HotelInfoTypeFromJSONTyped = HotelInfoTypeFromJSONTyped;
function HotelInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accommodationDetails': (0, HotelInfoTypeAccommodationDetails_1.HotelInfoTypeAccommodationDetailsToJSON)(value.accommodationDetails),
        'address': (0, HotelInfoTypeAddress_1.HotelInfoTypeAddressToJSON)(value.address),
        'alternateHotels': (0, AlternateHotelsType_1.AlternateHotelsTypeToJSON)(value.alternateHotels),
        'attractions': (0, HotelAttractionsType_1.HotelAttractionsTypeToJSON)(value.attractions),
        'chainCode': value.chainCode,
        'chainName': value.chainName,
        'communication': (0, HotelInfoTypeCommunication_1.HotelInfoTypeCommunicationToJSON)(value.communication),
        'generalInformation': (0, HotelInfoTypeGeneralInformation_1.HotelInfoTypeGeneralInformationToJSON)(value.generalInformation),
        'hotelCityCode': value.hotelCityCode,
        'hotelCodeContext': value.hotelCodeContext,
        'hotelContacts': (0, HotelContactsType_1.HotelContactsTypeToJSON)(value.hotelContacts),
        'hotelCorporateInformations': (0, HotelCorporateInformationsType_1.HotelCorporateInformationsTypeToJSON)(value.hotelCorporateInformations),
        'hotelEventSpaces': (0, HotelEventSpacesType_1.HotelEventSpacesTypeToJSON)(value.hotelEventSpaces),
        'hotelId': value.hotelId,
        'hotelName': value.hotelName,
        'hotelNotes': (0, HotelNotesType_1.HotelNotesTypeToJSON)(value.hotelNotes),
        'hotelRateRanges': (0, HotelRateRangesType_1.HotelRateRangesTypeToJSON)(value.hotelRateRanges),
        'hotelRestaurants': (0, HotelRestaurantsType_1.HotelRestaurantsTypeToJSON)(value.hotelRestaurants),
        'meetingRooms': (0, MeetingRoomsType_1.MeetingRoomsTypeToJSON)(value.meetingRooms),
        'primaryDetails': (0, HotelInfoTypePrimaryDetails_1.HotelInfoTypePrimaryDetailsToJSON)(value.primaryDetails),
        'propertyControls': (0, HotelInfoTypePropertyControls_1.HotelInfoTypePropertyControlsToJSON)(value.propertyControls),
    };
}
exports.HotelInfoTypeToJSON = HotelInfoTypeToJSON;