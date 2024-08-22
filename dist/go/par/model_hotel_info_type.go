/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the HotelInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelInfoType{}

// HotelInfoType Contains the basic configuration information about a Hotel.
type HotelInfoType struct {
	AccommodationDetails *HotelInfoTypeAccommodationDetails `json:"accommodationDetails,omitempty"`
	Address *HotelInfoTypeAddress `json:"address,omitempty"`
	AlternateHotels []AlternateHotelType `json:"alternateHotels,omitempty"`
	Attractions []HotelAttractionType `json:"attractions,omitempty"`
	// The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the HotelCode attribute.
	ChainCode *string `json:"chainCode,omitempty"`
	// The name of the hotel chain (e.g., Hilton, Marriott, Hyatt).
	ChainName *string `json:"chainName,omitempty"`
	Communication *HotelInfoTypeCommunication `json:"communication,omitempty"`
	GeneralInformation *HotelInfoTypeGeneralInformation `json:"generalInformation,omitempty"`
	// The IATA city code; for example DCA, ORD.
	HotelCityCode *string `json:"hotelCityCode,omitempty"`
	// A text field used to communicate the context (or source of - ex Sabre, Galileo, Worldspan, Amadeus) the HotelReferenceGroup codes.
	HotelCodeContext *string `json:"hotelCodeContext,omitempty"`
	// Lists of contacts of the hotel.
	HotelContacts []HotelContactType `json:"hotelContacts,omitempty"`
	HotelCorporateInformations *HotelCorporateInformationsType `json:"hotelCorporateInformations,omitempty"`
	HotelEventSpaces *HotelEventSpacesType `json:"hotelEventSpaces,omitempty"`
	// The code that uniquely identifies a single hotel property. The hotel code is decided between vendors.
	HotelId *string `json:"hotelId,omitempty"`
	// A text field used to communicate the proper name of the hotel.
	HotelName *string `json:"hotelName,omitempty"`
	// List of Notes of the hotel.
	HotelNotes []CommentInfoType `json:"hotelNotes,omitempty"`
	// Lists of rate ranges of the hotel.
	HotelRateRanges []HotelRateRangeType `json:"hotelRateRanges,omitempty"`
	HotelRestaurants []HotelRestaurantType `json:"hotelRestaurants,omitempty"`
	// List of meeting rooms of the hotel.
	MeetingRooms []MeetingRoomType `json:"meetingRooms,omitempty"`
	PrimaryDetails *HotelInfoTypePrimaryDetails `json:"primaryDetails,omitempty"`
	PropertyControls *HotelInfoTypePropertyControls `json:"propertyControls,omitempty"`
}

// NewHotelInfoType instantiates a new HotelInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelInfoType() *HotelInfoType {
	this := HotelInfoType{}
	return &this
}

// NewHotelInfoTypeWithDefaults instantiates a new HotelInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelInfoTypeWithDefaults() *HotelInfoType {
	this := HotelInfoType{}
	return &this
}

// GetAccommodationDetails returns the AccommodationDetails field value if set, zero value otherwise.
func (o *HotelInfoType) GetAccommodationDetails() HotelInfoTypeAccommodationDetails {
	if o == nil || IsNil(o.AccommodationDetails) {
		var ret HotelInfoTypeAccommodationDetails
		return ret
	}
	return *o.AccommodationDetails
}

// GetAccommodationDetailsOk returns a tuple with the AccommodationDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetAccommodationDetailsOk() (*HotelInfoTypeAccommodationDetails, bool) {
	if o == nil || IsNil(o.AccommodationDetails) {
		return nil, false
	}
	return o.AccommodationDetails, true
}

// HasAccommodationDetails returns a boolean if a field has been set.
func (o *HotelInfoType) HasAccommodationDetails() bool {
	if o != nil && !IsNil(o.AccommodationDetails) {
		return true
	}

	return false
}

// SetAccommodationDetails gets a reference to the given HotelInfoTypeAccommodationDetails and assigns it to the AccommodationDetails field.
func (o *HotelInfoType) SetAccommodationDetails(v HotelInfoTypeAccommodationDetails) {
	o.AccommodationDetails = &v
}

// GetAddress returns the Address field value if set, zero value otherwise.
func (o *HotelInfoType) GetAddress() HotelInfoTypeAddress {
	if o == nil || IsNil(o.Address) {
		var ret HotelInfoTypeAddress
		return ret
	}
	return *o.Address
}

// GetAddressOk returns a tuple with the Address field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetAddressOk() (*HotelInfoTypeAddress, bool) {
	if o == nil || IsNil(o.Address) {
		return nil, false
	}
	return o.Address, true
}

// HasAddress returns a boolean if a field has been set.
func (o *HotelInfoType) HasAddress() bool {
	if o != nil && !IsNil(o.Address) {
		return true
	}

	return false
}

// SetAddress gets a reference to the given HotelInfoTypeAddress and assigns it to the Address field.
func (o *HotelInfoType) SetAddress(v HotelInfoTypeAddress) {
	o.Address = &v
}

// GetAlternateHotels returns the AlternateHotels field value if set, zero value otherwise.
func (o *HotelInfoType) GetAlternateHotels() []AlternateHotelType {
	if o == nil || IsNil(o.AlternateHotels) {
		var ret []AlternateHotelType
		return ret
	}
	return o.AlternateHotels
}

// GetAlternateHotelsOk returns a tuple with the AlternateHotels field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetAlternateHotelsOk() ([]AlternateHotelType, bool) {
	if o == nil || IsNil(o.AlternateHotels) {
		return nil, false
	}
	return o.AlternateHotels, true
}

// HasAlternateHotels returns a boolean if a field has been set.
func (o *HotelInfoType) HasAlternateHotels() bool {
	if o != nil && !IsNil(o.AlternateHotels) {
		return true
	}

	return false
}

// SetAlternateHotels gets a reference to the given []AlternateHotelType and assigns it to the AlternateHotels field.
func (o *HotelInfoType) SetAlternateHotels(v []AlternateHotelType) {
	o.AlternateHotels = v
}

// GetAttractions returns the Attractions field value if set, zero value otherwise.
func (o *HotelInfoType) GetAttractions() []HotelAttractionType {
	if o == nil || IsNil(o.Attractions) {
		var ret []HotelAttractionType
		return ret
	}
	return o.Attractions
}

// GetAttractionsOk returns a tuple with the Attractions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetAttractionsOk() ([]HotelAttractionType, bool) {
	if o == nil || IsNil(o.Attractions) {
		return nil, false
	}
	return o.Attractions, true
}

// HasAttractions returns a boolean if a field has been set.
func (o *HotelInfoType) HasAttractions() bool {
	if o != nil && !IsNil(o.Attractions) {
		return true
	}

	return false
}

// SetAttractions gets a reference to the given []HotelAttractionType and assigns it to the Attractions field.
func (o *HotelInfoType) SetAttractions(v []HotelAttractionType) {
	o.Attractions = v
}

// GetChainCode returns the ChainCode field value if set, zero value otherwise.
func (o *HotelInfoType) GetChainCode() string {
	if o == nil || IsNil(o.ChainCode) {
		var ret string
		return ret
	}
	return *o.ChainCode
}

// GetChainCodeOk returns a tuple with the ChainCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetChainCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ChainCode) {
		return nil, false
	}
	return o.ChainCode, true
}

// HasChainCode returns a boolean if a field has been set.
func (o *HotelInfoType) HasChainCode() bool {
	if o != nil && !IsNil(o.ChainCode) {
		return true
	}

	return false
}

// SetChainCode gets a reference to the given string and assigns it to the ChainCode field.
func (o *HotelInfoType) SetChainCode(v string) {
	o.ChainCode = &v
}

// GetChainName returns the ChainName field value if set, zero value otherwise.
func (o *HotelInfoType) GetChainName() string {
	if o == nil || IsNil(o.ChainName) {
		var ret string
		return ret
	}
	return *o.ChainName
}

// GetChainNameOk returns a tuple with the ChainName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetChainNameOk() (*string, bool) {
	if o == nil || IsNil(o.ChainName) {
		return nil, false
	}
	return o.ChainName, true
}

// HasChainName returns a boolean if a field has been set.
func (o *HotelInfoType) HasChainName() bool {
	if o != nil && !IsNil(o.ChainName) {
		return true
	}

	return false
}

// SetChainName gets a reference to the given string and assigns it to the ChainName field.
func (o *HotelInfoType) SetChainName(v string) {
	o.ChainName = &v
}

// GetCommunication returns the Communication field value if set, zero value otherwise.
func (o *HotelInfoType) GetCommunication() HotelInfoTypeCommunication {
	if o == nil || IsNil(o.Communication) {
		var ret HotelInfoTypeCommunication
		return ret
	}
	return *o.Communication
}

// GetCommunicationOk returns a tuple with the Communication field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetCommunicationOk() (*HotelInfoTypeCommunication, bool) {
	if o == nil || IsNil(o.Communication) {
		return nil, false
	}
	return o.Communication, true
}

// HasCommunication returns a boolean if a field has been set.
func (o *HotelInfoType) HasCommunication() bool {
	if o != nil && !IsNil(o.Communication) {
		return true
	}

	return false
}

// SetCommunication gets a reference to the given HotelInfoTypeCommunication and assigns it to the Communication field.
func (o *HotelInfoType) SetCommunication(v HotelInfoTypeCommunication) {
	o.Communication = &v
}

// GetGeneralInformation returns the GeneralInformation field value if set, zero value otherwise.
func (o *HotelInfoType) GetGeneralInformation() HotelInfoTypeGeneralInformation {
	if o == nil || IsNil(o.GeneralInformation) {
		var ret HotelInfoTypeGeneralInformation
		return ret
	}
	return *o.GeneralInformation
}

// GetGeneralInformationOk returns a tuple with the GeneralInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetGeneralInformationOk() (*HotelInfoTypeGeneralInformation, bool) {
	if o == nil || IsNil(o.GeneralInformation) {
		return nil, false
	}
	return o.GeneralInformation, true
}

// HasGeneralInformation returns a boolean if a field has been set.
func (o *HotelInfoType) HasGeneralInformation() bool {
	if o != nil && !IsNil(o.GeneralInformation) {
		return true
	}

	return false
}

// SetGeneralInformation gets a reference to the given HotelInfoTypeGeneralInformation and assigns it to the GeneralInformation field.
func (o *HotelInfoType) SetGeneralInformation(v HotelInfoTypeGeneralInformation) {
	o.GeneralInformation = &v
}

// GetHotelCityCode returns the HotelCityCode field value if set, zero value otherwise.
func (o *HotelInfoType) GetHotelCityCode() string {
	if o == nil || IsNil(o.HotelCityCode) {
		var ret string
		return ret
	}
	return *o.HotelCityCode
}

// GetHotelCityCodeOk returns a tuple with the HotelCityCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetHotelCityCodeOk() (*string, bool) {
	if o == nil || IsNil(o.HotelCityCode) {
		return nil, false
	}
	return o.HotelCityCode, true
}

// HasHotelCityCode returns a boolean if a field has been set.
func (o *HotelInfoType) HasHotelCityCode() bool {
	if o != nil && !IsNil(o.HotelCityCode) {
		return true
	}

	return false
}

// SetHotelCityCode gets a reference to the given string and assigns it to the HotelCityCode field.
func (o *HotelInfoType) SetHotelCityCode(v string) {
	o.HotelCityCode = &v
}

// GetHotelCodeContext returns the HotelCodeContext field value if set, zero value otherwise.
func (o *HotelInfoType) GetHotelCodeContext() string {
	if o == nil || IsNil(o.HotelCodeContext) {
		var ret string
		return ret
	}
	return *o.HotelCodeContext
}

// GetHotelCodeContextOk returns a tuple with the HotelCodeContext field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetHotelCodeContextOk() (*string, bool) {
	if o == nil || IsNil(o.HotelCodeContext) {
		return nil, false
	}
	return o.HotelCodeContext, true
}

// HasHotelCodeContext returns a boolean if a field has been set.
func (o *HotelInfoType) HasHotelCodeContext() bool {
	if o != nil && !IsNil(o.HotelCodeContext) {
		return true
	}

	return false
}

// SetHotelCodeContext gets a reference to the given string and assigns it to the HotelCodeContext field.
func (o *HotelInfoType) SetHotelCodeContext(v string) {
	o.HotelCodeContext = &v
}

// GetHotelContacts returns the HotelContacts field value if set, zero value otherwise.
func (o *HotelInfoType) GetHotelContacts() []HotelContactType {
	if o == nil || IsNil(o.HotelContacts) {
		var ret []HotelContactType
		return ret
	}
	return o.HotelContacts
}

// GetHotelContactsOk returns a tuple with the HotelContacts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetHotelContactsOk() ([]HotelContactType, bool) {
	if o == nil || IsNil(o.HotelContacts) {
		return nil, false
	}
	return o.HotelContacts, true
}

// HasHotelContacts returns a boolean if a field has been set.
func (o *HotelInfoType) HasHotelContacts() bool {
	if o != nil && !IsNil(o.HotelContacts) {
		return true
	}

	return false
}

// SetHotelContacts gets a reference to the given []HotelContactType and assigns it to the HotelContacts field.
func (o *HotelInfoType) SetHotelContacts(v []HotelContactType) {
	o.HotelContacts = v
}

// GetHotelCorporateInformations returns the HotelCorporateInformations field value if set, zero value otherwise.
func (o *HotelInfoType) GetHotelCorporateInformations() HotelCorporateInformationsType {
	if o == nil || IsNil(o.HotelCorporateInformations) {
		var ret HotelCorporateInformationsType
		return ret
	}
	return *o.HotelCorporateInformations
}

// GetHotelCorporateInformationsOk returns a tuple with the HotelCorporateInformations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetHotelCorporateInformationsOk() (*HotelCorporateInformationsType, bool) {
	if o == nil || IsNil(o.HotelCorporateInformations) {
		return nil, false
	}
	return o.HotelCorporateInformations, true
}

// HasHotelCorporateInformations returns a boolean if a field has been set.
func (o *HotelInfoType) HasHotelCorporateInformations() bool {
	if o != nil && !IsNil(o.HotelCorporateInformations) {
		return true
	}

	return false
}

// SetHotelCorporateInformations gets a reference to the given HotelCorporateInformationsType and assigns it to the HotelCorporateInformations field.
func (o *HotelInfoType) SetHotelCorporateInformations(v HotelCorporateInformationsType) {
	o.HotelCorporateInformations = &v
}

// GetHotelEventSpaces returns the HotelEventSpaces field value if set, zero value otherwise.
func (o *HotelInfoType) GetHotelEventSpaces() HotelEventSpacesType {
	if o == nil || IsNil(o.HotelEventSpaces) {
		var ret HotelEventSpacesType
		return ret
	}
	return *o.HotelEventSpaces
}

// GetHotelEventSpacesOk returns a tuple with the HotelEventSpaces field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetHotelEventSpacesOk() (*HotelEventSpacesType, bool) {
	if o == nil || IsNil(o.HotelEventSpaces) {
		return nil, false
	}
	return o.HotelEventSpaces, true
}

// HasHotelEventSpaces returns a boolean if a field has been set.
func (o *HotelInfoType) HasHotelEventSpaces() bool {
	if o != nil && !IsNil(o.HotelEventSpaces) {
		return true
	}

	return false
}

// SetHotelEventSpaces gets a reference to the given HotelEventSpacesType and assigns it to the HotelEventSpaces field.
func (o *HotelInfoType) SetHotelEventSpaces(v HotelEventSpacesType) {
	o.HotelEventSpaces = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HotelInfoType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HotelInfoType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HotelInfoType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetHotelName returns the HotelName field value if set, zero value otherwise.
func (o *HotelInfoType) GetHotelName() string {
	if o == nil || IsNil(o.HotelName) {
		var ret string
		return ret
	}
	return *o.HotelName
}

// GetHotelNameOk returns a tuple with the HotelName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetHotelNameOk() (*string, bool) {
	if o == nil || IsNil(o.HotelName) {
		return nil, false
	}
	return o.HotelName, true
}

// HasHotelName returns a boolean if a field has been set.
func (o *HotelInfoType) HasHotelName() bool {
	if o != nil && !IsNil(o.HotelName) {
		return true
	}

	return false
}

// SetHotelName gets a reference to the given string and assigns it to the HotelName field.
func (o *HotelInfoType) SetHotelName(v string) {
	o.HotelName = &v
}

// GetHotelNotes returns the HotelNotes field value if set, zero value otherwise.
func (o *HotelInfoType) GetHotelNotes() []CommentInfoType {
	if o == nil || IsNil(o.HotelNotes) {
		var ret []CommentInfoType
		return ret
	}
	return o.HotelNotes
}

// GetHotelNotesOk returns a tuple with the HotelNotes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetHotelNotesOk() ([]CommentInfoType, bool) {
	if o == nil || IsNil(o.HotelNotes) {
		return nil, false
	}
	return o.HotelNotes, true
}

// HasHotelNotes returns a boolean if a field has been set.
func (o *HotelInfoType) HasHotelNotes() bool {
	if o != nil && !IsNil(o.HotelNotes) {
		return true
	}

	return false
}

// SetHotelNotes gets a reference to the given []CommentInfoType and assigns it to the HotelNotes field.
func (o *HotelInfoType) SetHotelNotes(v []CommentInfoType) {
	o.HotelNotes = v
}

// GetHotelRateRanges returns the HotelRateRanges field value if set, zero value otherwise.
func (o *HotelInfoType) GetHotelRateRanges() []HotelRateRangeType {
	if o == nil || IsNil(o.HotelRateRanges) {
		var ret []HotelRateRangeType
		return ret
	}
	return o.HotelRateRanges
}

// GetHotelRateRangesOk returns a tuple with the HotelRateRanges field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetHotelRateRangesOk() ([]HotelRateRangeType, bool) {
	if o == nil || IsNil(o.HotelRateRanges) {
		return nil, false
	}
	return o.HotelRateRanges, true
}

// HasHotelRateRanges returns a boolean if a field has been set.
func (o *HotelInfoType) HasHotelRateRanges() bool {
	if o != nil && !IsNil(o.HotelRateRanges) {
		return true
	}

	return false
}

// SetHotelRateRanges gets a reference to the given []HotelRateRangeType and assigns it to the HotelRateRanges field.
func (o *HotelInfoType) SetHotelRateRanges(v []HotelRateRangeType) {
	o.HotelRateRanges = v
}

// GetHotelRestaurants returns the HotelRestaurants field value if set, zero value otherwise.
func (o *HotelInfoType) GetHotelRestaurants() []HotelRestaurantType {
	if o == nil || IsNil(o.HotelRestaurants) {
		var ret []HotelRestaurantType
		return ret
	}
	return o.HotelRestaurants
}

// GetHotelRestaurantsOk returns a tuple with the HotelRestaurants field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetHotelRestaurantsOk() ([]HotelRestaurantType, bool) {
	if o == nil || IsNil(o.HotelRestaurants) {
		return nil, false
	}
	return o.HotelRestaurants, true
}

// HasHotelRestaurants returns a boolean if a field has been set.
func (o *HotelInfoType) HasHotelRestaurants() bool {
	if o != nil && !IsNil(o.HotelRestaurants) {
		return true
	}

	return false
}

// SetHotelRestaurants gets a reference to the given []HotelRestaurantType and assigns it to the HotelRestaurants field.
func (o *HotelInfoType) SetHotelRestaurants(v []HotelRestaurantType) {
	o.HotelRestaurants = v
}

// GetMeetingRooms returns the MeetingRooms field value if set, zero value otherwise.
func (o *HotelInfoType) GetMeetingRooms() []MeetingRoomType {
	if o == nil || IsNil(o.MeetingRooms) {
		var ret []MeetingRoomType
		return ret
	}
	return o.MeetingRooms
}

// GetMeetingRoomsOk returns a tuple with the MeetingRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetMeetingRoomsOk() ([]MeetingRoomType, bool) {
	if o == nil || IsNil(o.MeetingRooms) {
		return nil, false
	}
	return o.MeetingRooms, true
}

// HasMeetingRooms returns a boolean if a field has been set.
func (o *HotelInfoType) HasMeetingRooms() bool {
	if o != nil && !IsNil(o.MeetingRooms) {
		return true
	}

	return false
}

// SetMeetingRooms gets a reference to the given []MeetingRoomType and assigns it to the MeetingRooms field.
func (o *HotelInfoType) SetMeetingRooms(v []MeetingRoomType) {
	o.MeetingRooms = v
}

// GetPrimaryDetails returns the PrimaryDetails field value if set, zero value otherwise.
func (o *HotelInfoType) GetPrimaryDetails() HotelInfoTypePrimaryDetails {
	if o == nil || IsNil(o.PrimaryDetails) {
		var ret HotelInfoTypePrimaryDetails
		return ret
	}
	return *o.PrimaryDetails
}

// GetPrimaryDetailsOk returns a tuple with the PrimaryDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetPrimaryDetailsOk() (*HotelInfoTypePrimaryDetails, bool) {
	if o == nil || IsNil(o.PrimaryDetails) {
		return nil, false
	}
	return o.PrimaryDetails, true
}

// HasPrimaryDetails returns a boolean if a field has been set.
func (o *HotelInfoType) HasPrimaryDetails() bool {
	if o != nil && !IsNil(o.PrimaryDetails) {
		return true
	}

	return false
}

// SetPrimaryDetails gets a reference to the given HotelInfoTypePrimaryDetails and assigns it to the PrimaryDetails field.
func (o *HotelInfoType) SetPrimaryDetails(v HotelInfoTypePrimaryDetails) {
	o.PrimaryDetails = &v
}

// GetPropertyControls returns the PropertyControls field value if set, zero value otherwise.
func (o *HotelInfoType) GetPropertyControls() HotelInfoTypePropertyControls {
	if o == nil || IsNil(o.PropertyControls) {
		var ret HotelInfoTypePropertyControls
		return ret
	}
	return *o.PropertyControls
}

// GetPropertyControlsOk returns a tuple with the PropertyControls field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInfoType) GetPropertyControlsOk() (*HotelInfoTypePropertyControls, bool) {
	if o == nil || IsNil(o.PropertyControls) {
		return nil, false
	}
	return o.PropertyControls, true
}

// HasPropertyControls returns a boolean if a field has been set.
func (o *HotelInfoType) HasPropertyControls() bool {
	if o != nil && !IsNil(o.PropertyControls) {
		return true
	}

	return false
}

// SetPropertyControls gets a reference to the given HotelInfoTypePropertyControls and assigns it to the PropertyControls field.
func (o *HotelInfoType) SetPropertyControls(v HotelInfoTypePropertyControls) {
	o.PropertyControls = &v
}

func (o HotelInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AccommodationDetails) {
		toSerialize["accommodationDetails"] = o.AccommodationDetails
	}
	if !IsNil(o.Address) {
		toSerialize["address"] = o.Address
	}
	if !IsNil(o.AlternateHotels) {
		toSerialize["alternateHotels"] = o.AlternateHotels
	}
	if !IsNil(o.Attractions) {
		toSerialize["attractions"] = o.Attractions
	}
	if !IsNil(o.ChainCode) {
		toSerialize["chainCode"] = o.ChainCode
	}
	if !IsNil(o.ChainName) {
		toSerialize["chainName"] = o.ChainName
	}
	if !IsNil(o.Communication) {
		toSerialize["communication"] = o.Communication
	}
	if !IsNil(o.GeneralInformation) {
		toSerialize["generalInformation"] = o.GeneralInformation
	}
	if !IsNil(o.HotelCityCode) {
		toSerialize["hotelCityCode"] = o.HotelCityCode
	}
	if !IsNil(o.HotelCodeContext) {
		toSerialize["hotelCodeContext"] = o.HotelCodeContext
	}
	if !IsNil(o.HotelContacts) {
		toSerialize["hotelContacts"] = o.HotelContacts
	}
	if !IsNil(o.HotelCorporateInformations) {
		toSerialize["hotelCorporateInformations"] = o.HotelCorporateInformations
	}
	if !IsNil(o.HotelEventSpaces) {
		toSerialize["hotelEventSpaces"] = o.HotelEventSpaces
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.HotelName) {
		toSerialize["hotelName"] = o.HotelName
	}
	if !IsNil(o.HotelNotes) {
		toSerialize["hotelNotes"] = o.HotelNotes
	}
	if !IsNil(o.HotelRateRanges) {
		toSerialize["hotelRateRanges"] = o.HotelRateRanges
	}
	if !IsNil(o.HotelRestaurants) {
		toSerialize["hotelRestaurants"] = o.HotelRestaurants
	}
	if !IsNil(o.MeetingRooms) {
		toSerialize["meetingRooms"] = o.MeetingRooms
	}
	if !IsNil(o.PrimaryDetails) {
		toSerialize["primaryDetails"] = o.PrimaryDetails
	}
	if !IsNil(o.PropertyControls) {
		toSerialize["propertyControls"] = o.PropertyControls
	}
	return toSerialize, nil
}

type NullableHotelInfoType struct {
	value *HotelInfoType
	isSet bool
}

func (v NullableHotelInfoType) Get() *HotelInfoType {
	return v.value
}

func (v *NullableHotelInfoType) Set(val *HotelInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelInfoType(val *HotelInfoType) *NullableHotelInfoType {
	return &NullableHotelInfoType{value: val, isSet: true}
}

func (v NullableHotelInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


