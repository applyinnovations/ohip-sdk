"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelBrochureTypeToJSON = exports.HotelBrochureTypeFromJSONTyped = exports.HotelBrochureTypeFromJSON = exports.instanceOfHotelBrochureType = void 0;
const runtime_1 = require("../runtime");
const AlternateHotelType_1 = require("./AlternateHotelType");
const CommentInfoType_1 = require("./CommentInfoType");
const DirectionType_1 = require("./DirectionType");
const GeneralNoteType_1 = require("./GeneralNoteType");
const HotelAirportType_1 = require("./HotelAirportType");
const HotelAttractionType_1 = require("./HotelAttractionType");
const HotelConferenceFacilitiesType_1 = require("./HotelConferenceFacilitiesType");
const HotelContactType_1 = require("./HotelContactType");
const HotelCorporateInformationsType_1 = require("./HotelCorporateInformationsType");
const HotelEventSpacesType_1 = require("./HotelEventSpacesType");
const HotelFeatureType_1 = require("./HotelFeatureType");
const HotelInfoTypeAccommodationDetails_1 = require("./HotelInfoTypeAccommodationDetails");
const HotelInfoTypeAddress_1 = require("./HotelInfoTypeAddress");
const HotelInfoTypeCommunication_1 = require("./HotelInfoTypeCommunication");
const HotelInfoTypeGeneralInformation_1 = require("./HotelInfoTypeGeneralInformation");
const HotelInfoTypePrimaryDetails_1 = require("./HotelInfoTypePrimaryDetails");
const HotelInfoTypePropertyControls_1 = require("./HotelInfoTypePropertyControls");
const HotelPackageType_1 = require("./HotelPackageType");
const HotelRateRangeType_1 = require("./HotelRateRangeType");
const HotelRestaurantType_1 = require("./HotelRestaurantType");
const HotelTransportationType_1 = require("./HotelTransportationType");
const HotelUserDefinedFieldType_1 = require("./HotelUserDefinedFieldType");
const MeetingRoomType_1 = require("./MeetingRoomType");
/**
 * Check if a given object implements the HotelBrochureType interface.
 */
function instanceOfHotelBrochureType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelBrochureType = instanceOfHotelBrochureType;
function HotelBrochureTypeFromJSON(json) {
    return HotelBrochureTypeFromJSONTyped(json, false);
}
exports.HotelBrochureTypeFromJSON = HotelBrochureTypeFromJSON;
function HotelBrochureTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'primaryDetails': !(0, runtime_1.exists)(json, 'primaryDetails') ? undefined : (0, HotelInfoTypePrimaryDetails_1.HotelInfoTypePrimaryDetailsFromJSON)(json['primaryDetails']),
        'generalInformation': !(0, runtime_1.exists)(json, 'generalInformation') ? undefined : (0, HotelInfoTypeGeneralInformation_1.HotelInfoTypeGeneralInformationFromJSON)(json['generalInformation']),
        'accommodationDetails': !(0, runtime_1.exists)(json, 'accommodationDetails') ? undefined : (0, HotelInfoTypeAccommodationDetails_1.HotelInfoTypeAccommodationDetailsFromJSON)(json['accommodationDetails']),
        'propertyControls': !(0, runtime_1.exists)(json, 'propertyControls') ? undefined : (0, HotelInfoTypePropertyControls_1.HotelInfoTypePropertyControlsFromJSON)(json['propertyControls']),
        'communication': !(0, runtime_1.exists)(json, 'communication') ? undefined : (0, HotelInfoTypeCommunication_1.HotelInfoTypeCommunicationFromJSON)(json['communication']),
        'address': !(0, runtime_1.exists)(json, 'address') ? undefined : (0, HotelInfoTypeAddress_1.HotelInfoTypeAddressFromJSON)(json['address']),
        'hotelRestaurants': !(0, runtime_1.exists)(json, 'hotelRestaurants') ? undefined : (json['hotelRestaurants'].map(HotelRestaurantType_1.HotelRestaurantTypeFromJSON)),
        'hotelRateRanges': !(0, runtime_1.exists)(json, 'hotelRateRanges') ? undefined : (json['hotelRateRanges'].map(HotelRateRangeType_1.HotelRateRangeTypeFromJSON)),
        'alternateHotels': !(0, runtime_1.exists)(json, 'alternateHotels') ? undefined : (json['alternateHotels'].map(AlternateHotelType_1.AlternateHotelTypeFromJSON)),
        'hotelContacts': !(0, runtime_1.exists)(json, 'hotelContacts') ? undefined : (json['hotelContacts'].map(HotelContactType_1.HotelContactTypeFromJSON)),
        'hotelEventSpaces': !(0, runtime_1.exists)(json, 'hotelEventSpaces') ? undefined : (0, HotelEventSpacesType_1.HotelEventSpacesTypeFromJSON)(json['hotelEventSpaces']),
        'hotelNotes': !(0, runtime_1.exists)(json, 'hotelNotes') ? undefined : (json['hotelNotes'].map(CommentInfoType_1.CommentInfoTypeFromJSON)),
        'hotelCorporateInformations': !(0, runtime_1.exists)(json, 'hotelCorporateInformations') ? undefined : (0, HotelCorporateInformationsType_1.HotelCorporateInformationsTypeFromJSON)(json['hotelCorporateInformations']),
        'attractions': !(0, runtime_1.exists)(json, 'attractions') ? undefined : (json['attractions'].map(HotelAttractionType_1.HotelAttractionTypeFromJSON)),
        'meetingRooms': !(0, runtime_1.exists)(json, 'meetingRooms') ? undefined : (json['meetingRooms'].map(MeetingRoomType_1.MeetingRoomTypeFromJSON)),
        'chainCode': !(0, runtime_1.exists)(json, 'chainCode') ? undefined : json['chainCode'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'hotelCityCode': !(0, runtime_1.exists)(json, 'hotelCityCode') ? undefined : json['hotelCityCode'],
        'hotelName': !(0, runtime_1.exists)(json, 'hotelName') ? undefined : json['hotelName'],
        'hotelCodeContext': !(0, runtime_1.exists)(json, 'hotelCodeContext') ? undefined : json['hotelCodeContext'],
        'chainName': !(0, runtime_1.exists)(json, 'chainName') ? undefined : json['chainName'],
        'baseLanguage': !(0, runtime_1.exists)(json, 'baseLanguage') ? undefined : json['baseLanguage'],
        'currentTime': !(0, runtime_1.exists)(json, 'currentTime') ? undefined : json['currentTime'],
        'hotelAttractions': !(0, runtime_1.exists)(json, 'hotelAttractions') ? undefined : (json['hotelAttractions'].map(HotelAttractionType_1.HotelAttractionTypeFromJSON)),
        'hotelPackages': !(0, runtime_1.exists)(json, 'hotelPackages') ? undefined : (json['hotelPackages'].map(HotelPackageType_1.HotelPackageTypeFromJSON)),
        'hotelTransportations': !(0, runtime_1.exists)(json, 'hotelTransportations') ? undefined : (json['hotelTransportations'].map(HotelTransportationType_1.HotelTransportationTypeFromJSON)),
        'hotelConferenceFacilities': !(0, runtime_1.exists)(json, 'hotelConferenceFacilities') ? undefined : (0, HotelConferenceFacilitiesType_1.HotelConferenceFacilitiesTypeFromJSON)(json['hotelConferenceFacilities']),
        'hotelFeatures': !(0, runtime_1.exists)(json, 'hotelFeatures') ? undefined : (json['hotelFeatures'].map(HotelFeatureType_1.HotelFeatureTypeFromJSON)),
        'directions': !(0, runtime_1.exists)(json, 'directions') ? undefined : (json['directions'].map(DirectionType_1.DirectionTypeFromJSON)),
        'generalNotes': !(0, runtime_1.exists)(json, 'generalNotes') ? undefined : (json['generalNotes'].map(GeneralNoteType_1.GeneralNoteTypeFromJSON)),
        'hotelAirports': !(0, runtime_1.exists)(json, 'hotelAirports') ? undefined : (json['hotelAirports'].map(HotelAirportType_1.HotelAirportTypeFromJSON)),
        'hotelMiscellaneousInformation': !(0, runtime_1.exists)(json, 'hotelMiscellaneousInformation') ? undefined : (json['hotelMiscellaneousInformation'].map(HotelUserDefinedFieldType_1.HotelUserDefinedFieldTypeFromJSON)),
    };
}
exports.HotelBrochureTypeFromJSONTyped = HotelBrochureTypeFromJSONTyped;
function HotelBrochureTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'primaryDetails': (0, HotelInfoTypePrimaryDetails_1.HotelInfoTypePrimaryDetailsToJSON)(value.primaryDetails),
        'generalInformation': (0, HotelInfoTypeGeneralInformation_1.HotelInfoTypeGeneralInformationToJSON)(value.generalInformation),
        'accommodationDetails': (0, HotelInfoTypeAccommodationDetails_1.HotelInfoTypeAccommodationDetailsToJSON)(value.accommodationDetails),
        'propertyControls': (0, HotelInfoTypePropertyControls_1.HotelInfoTypePropertyControlsToJSON)(value.propertyControls),
        'communication': (0, HotelInfoTypeCommunication_1.HotelInfoTypeCommunicationToJSON)(value.communication),
        'address': (0, HotelInfoTypeAddress_1.HotelInfoTypeAddressToJSON)(value.address),
        'hotelRestaurants': value.hotelRestaurants === undefined ? undefined : (value.hotelRestaurants.map(HotelRestaurantType_1.HotelRestaurantTypeToJSON)),
        'hotelRateRanges': value.hotelRateRanges === undefined ? undefined : (value.hotelRateRanges.map(HotelRateRangeType_1.HotelRateRangeTypeToJSON)),
        'alternateHotels': value.alternateHotels === undefined ? undefined : (value.alternateHotels.map(AlternateHotelType_1.AlternateHotelTypeToJSON)),
        'hotelContacts': value.hotelContacts === undefined ? undefined : (value.hotelContacts.map(HotelContactType_1.HotelContactTypeToJSON)),
        'hotelEventSpaces': (0, HotelEventSpacesType_1.HotelEventSpacesTypeToJSON)(value.hotelEventSpaces),
        'hotelNotes': value.hotelNotes === undefined ? undefined : (value.hotelNotes.map(CommentInfoType_1.CommentInfoTypeToJSON)),
        'hotelCorporateInformations': (0, HotelCorporateInformationsType_1.HotelCorporateInformationsTypeToJSON)(value.hotelCorporateInformations),
        'attractions': value.attractions === undefined ? undefined : (value.attractions.map(HotelAttractionType_1.HotelAttractionTypeToJSON)),
        'meetingRooms': value.meetingRooms === undefined ? undefined : (value.meetingRooms.map(MeetingRoomType_1.MeetingRoomTypeToJSON)),
        'chainCode': value.chainCode,
        'hotelId': value.hotelId,
        'hotelCityCode': value.hotelCityCode,
        'hotelName': value.hotelName,
        'hotelCodeContext': value.hotelCodeContext,
        'chainName': value.chainName,
        'baseLanguage': value.baseLanguage,
        'currentTime': value.currentTime,
        'hotelAttractions': value.hotelAttractions === undefined ? undefined : (value.hotelAttractions.map(HotelAttractionType_1.HotelAttractionTypeToJSON)),
        'hotelPackages': value.hotelPackages === undefined ? undefined : (value.hotelPackages.map(HotelPackageType_1.HotelPackageTypeToJSON)),
        'hotelTransportations': value.hotelTransportations === undefined ? undefined : (value.hotelTransportations.map(HotelTransportationType_1.HotelTransportationTypeToJSON)),
        'hotelConferenceFacilities': (0, HotelConferenceFacilitiesType_1.HotelConferenceFacilitiesTypeToJSON)(value.hotelConferenceFacilities),
        'hotelFeatures': value.hotelFeatures === undefined ? undefined : (value.hotelFeatures.map(HotelFeatureType_1.HotelFeatureTypeToJSON)),
        'directions': value.directions === undefined ? undefined : (value.directions.map(DirectionType_1.DirectionTypeToJSON)),
        'generalNotes': value.generalNotes === undefined ? undefined : (value.generalNotes.map(GeneralNoteType_1.GeneralNoteTypeToJSON)),
        'hotelAirports': value.hotelAirports === undefined ? undefined : (value.hotelAirports.map(HotelAirportType_1.HotelAirportTypeToJSON)),
        'hotelMiscellaneousInformation': value.hotelMiscellaneousInformation === undefined ? undefined : (value.hotelMiscellaneousInformation.map(HotelUserDefinedFieldType_1.HotelUserDefinedFieldTypeToJSON)),
    };
}
exports.HotelBrochureTypeToJSON = HotelBrochureTypeToJSON;
