/*
OPERA Cloud Availability Extension API

APIs to provide extended features for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br />Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p>This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p><br /><br /> Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2.0.0
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package parext

import (
	"encoding/json"
)

// checks if the PostMultiRoomRateAvailabilityRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostMultiRoomRateAvailabilityRequest{}

// PostMultiRoomRateAvailabilityRequest struct for PostMultiRoomRateAvailabilityRequest
type PostMultiRoomRateAvailabilityRequest struct {
	// Arrival/Check-in Date
	ArrivalDate string `json:"arrivalDate"`
	// Departure/Check-out Date
	DepartureDate string `json:"departureDate"`
	// List of hotelIds for search criteria.
	HotelIds []string `json:"hotelIds"`
	Rates RatesSearchType `json:"rates"`
	// Multi room search criteria with occupancy and quantity.
	Rooms []RoomsSearchType `json:"rooms"`
}

// NewPostMultiRoomRateAvailabilityRequest instantiates a new PostMultiRoomRateAvailabilityRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostMultiRoomRateAvailabilityRequest(arrivalDate string, departureDate string, hotelIds []string, rates RatesSearchType, rooms []RoomsSearchType) *PostMultiRoomRateAvailabilityRequest {
	this := PostMultiRoomRateAvailabilityRequest{}
	this.ArrivalDate = arrivalDate
	this.DepartureDate = departureDate
	this.HotelIds = hotelIds
	this.Rates = rates
	this.Rooms = rooms
	return &this
}

// NewPostMultiRoomRateAvailabilityRequestWithDefaults instantiates a new PostMultiRoomRateAvailabilityRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostMultiRoomRateAvailabilityRequestWithDefaults() *PostMultiRoomRateAvailabilityRequest {
	this := PostMultiRoomRateAvailabilityRequest{}
	return &this
}

// GetArrivalDate returns the ArrivalDate field value
func (o *PostMultiRoomRateAvailabilityRequest) GetArrivalDate() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ArrivalDate
}

// GetArrivalDateOk returns a tuple with the ArrivalDate field value
// and a boolean to check if the value has been set.
func (o *PostMultiRoomRateAvailabilityRequest) GetArrivalDateOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ArrivalDate, true
}

// SetArrivalDate sets field value
func (o *PostMultiRoomRateAvailabilityRequest) SetArrivalDate(v string) {
	o.ArrivalDate = v
}

// GetDepartureDate returns the DepartureDate field value
func (o *PostMultiRoomRateAvailabilityRequest) GetDepartureDate() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.DepartureDate
}

// GetDepartureDateOk returns a tuple with the DepartureDate field value
// and a boolean to check if the value has been set.
func (o *PostMultiRoomRateAvailabilityRequest) GetDepartureDateOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.DepartureDate, true
}

// SetDepartureDate sets field value
func (o *PostMultiRoomRateAvailabilityRequest) SetDepartureDate(v string) {
	o.DepartureDate = v
}

// GetHotelIds returns the HotelIds field value
func (o *PostMultiRoomRateAvailabilityRequest) GetHotelIds() []string {
	if o == nil {
		var ret []string
		return ret
	}

	return o.HotelIds
}

// GetHotelIdsOk returns a tuple with the HotelIds field value
// and a boolean to check if the value has been set.
func (o *PostMultiRoomRateAvailabilityRequest) GetHotelIdsOk() ([]string, bool) {
	if o == nil {
		return nil, false
	}
	return o.HotelIds, true
}

// SetHotelIds sets field value
func (o *PostMultiRoomRateAvailabilityRequest) SetHotelIds(v []string) {
	o.HotelIds = v
}

// GetRates returns the Rates field value
func (o *PostMultiRoomRateAvailabilityRequest) GetRates() RatesSearchType {
	if o == nil {
		var ret RatesSearchType
		return ret
	}

	return o.Rates
}

// GetRatesOk returns a tuple with the Rates field value
// and a boolean to check if the value has been set.
func (o *PostMultiRoomRateAvailabilityRequest) GetRatesOk() (*RatesSearchType, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Rates, true
}

// SetRates sets field value
func (o *PostMultiRoomRateAvailabilityRequest) SetRates(v RatesSearchType) {
	o.Rates = v
}

// GetRooms returns the Rooms field value
func (o *PostMultiRoomRateAvailabilityRequest) GetRooms() []RoomsSearchType {
	if o == nil {
		var ret []RoomsSearchType
		return ret
	}

	return o.Rooms
}

// GetRoomsOk returns a tuple with the Rooms field value
// and a boolean to check if the value has been set.
func (o *PostMultiRoomRateAvailabilityRequest) GetRoomsOk() ([]RoomsSearchType, bool) {
	if o == nil {
		return nil, false
	}
	return o.Rooms, true
}

// SetRooms sets field value
func (o *PostMultiRoomRateAvailabilityRequest) SetRooms(v []RoomsSearchType) {
	o.Rooms = v
}

func (o PostMultiRoomRateAvailabilityRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostMultiRoomRateAvailabilityRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["arrivalDate"] = o.ArrivalDate
	toSerialize["departureDate"] = o.DepartureDate
	toSerialize["hotelIds"] = o.HotelIds
	toSerialize["rates"] = o.Rates
	toSerialize["rooms"] = o.Rooms
	return toSerialize, nil
}

type NullablePostMultiRoomRateAvailabilityRequest struct {
	value *PostMultiRoomRateAvailabilityRequest
	isSet bool
}

func (v NullablePostMultiRoomRateAvailabilityRequest) Get() *PostMultiRoomRateAvailabilityRequest {
	return v.value
}

func (v *NullablePostMultiRoomRateAvailabilityRequest) Set(val *PostMultiRoomRateAvailabilityRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostMultiRoomRateAvailabilityRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostMultiRoomRateAvailabilityRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostMultiRoomRateAvailabilityRequest(val *PostMultiRoomRateAvailabilityRequest) *NullablePostMultiRoomRateAvailabilityRequest {
	return &NullablePostMultiRoomRateAvailabilityRequest{value: val, isSet: true}
}

func (v NullablePostMultiRoomRateAvailabilityRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostMultiRoomRateAvailabilityRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


