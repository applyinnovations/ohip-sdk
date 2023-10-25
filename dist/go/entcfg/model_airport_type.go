/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the AirportType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AirportType{}

// AirportType Base details of the airport.
type AirportType struct {
	// Airport code identifying the airport.
	Code *string `json:"code,omitempty"`
	// Description of the airport.
	Description *string `json:"description,omitempty"`
	// Direction of the airport in relation to the hotel.
	Direction *string `json:"direction,omitempty"`
	// Distance from the hotel to the airport.
	Distance *float32 `json:"distance,omitempty"`
	// Unit of distance for the Distance measurement.
	DistanceType *string `json:"distanceType,omitempty"`
	// Driving time from the hotel to the airport.
	DrivingTime *string `json:"drivingTime,omitempty"`
	// Hotel code that the airport belongs to.
	HotelId *string `json:"hotelId,omitempty"`
	// Sequence number for displaying the airport.
	Sequence *int32 `json:"sequence,omitempty"`
	// Transportation option available for the airport.
	TransportationOptions []TransportationInfoType `json:"transportationOptions,omitempty"`
	// URL of the airport's website.
	Website *string `json:"website,omitempty"`
}

// NewAirportType instantiates a new AirportType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAirportType() *AirportType {
	this := AirportType{}
	return &this
}

// NewAirportTypeWithDefaults instantiates a new AirportType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAirportTypeWithDefaults() *AirportType {
	this := AirportType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *AirportType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirportType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *AirportType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *AirportType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *AirportType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirportType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *AirportType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *AirportType) SetDescription(v string) {
	o.Description = &v
}

// GetDirection returns the Direction field value if set, zero value otherwise.
func (o *AirportType) GetDirection() string {
	if o == nil || IsNil(o.Direction) {
		var ret string
		return ret
	}
	return *o.Direction
}

// GetDirectionOk returns a tuple with the Direction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirportType) GetDirectionOk() (*string, bool) {
	if o == nil || IsNil(o.Direction) {
		return nil, false
	}
	return o.Direction, true
}

// HasDirection returns a boolean if a field has been set.
func (o *AirportType) HasDirection() bool {
	if o != nil && !IsNil(o.Direction) {
		return true
	}

	return false
}

// SetDirection gets a reference to the given string and assigns it to the Direction field.
func (o *AirportType) SetDirection(v string) {
	o.Direction = &v
}

// GetDistance returns the Distance field value if set, zero value otherwise.
func (o *AirportType) GetDistance() float32 {
	if o == nil || IsNil(o.Distance) {
		var ret float32
		return ret
	}
	return *o.Distance
}

// GetDistanceOk returns a tuple with the Distance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirportType) GetDistanceOk() (*float32, bool) {
	if o == nil || IsNil(o.Distance) {
		return nil, false
	}
	return o.Distance, true
}

// HasDistance returns a boolean if a field has been set.
func (o *AirportType) HasDistance() bool {
	if o != nil && !IsNil(o.Distance) {
		return true
	}

	return false
}

// SetDistance gets a reference to the given float32 and assigns it to the Distance field.
func (o *AirportType) SetDistance(v float32) {
	o.Distance = &v
}

// GetDistanceType returns the DistanceType field value if set, zero value otherwise.
func (o *AirportType) GetDistanceType() string {
	if o == nil || IsNil(o.DistanceType) {
		var ret string
		return ret
	}
	return *o.DistanceType
}

// GetDistanceTypeOk returns a tuple with the DistanceType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirportType) GetDistanceTypeOk() (*string, bool) {
	if o == nil || IsNil(o.DistanceType) {
		return nil, false
	}
	return o.DistanceType, true
}

// HasDistanceType returns a boolean if a field has been set.
func (o *AirportType) HasDistanceType() bool {
	if o != nil && !IsNil(o.DistanceType) {
		return true
	}

	return false
}

// SetDistanceType gets a reference to the given string and assigns it to the DistanceType field.
func (o *AirportType) SetDistanceType(v string) {
	o.DistanceType = &v
}

// GetDrivingTime returns the DrivingTime field value if set, zero value otherwise.
func (o *AirportType) GetDrivingTime() string {
	if o == nil || IsNil(o.DrivingTime) {
		var ret string
		return ret
	}
	return *o.DrivingTime
}

// GetDrivingTimeOk returns a tuple with the DrivingTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirportType) GetDrivingTimeOk() (*string, bool) {
	if o == nil || IsNil(o.DrivingTime) {
		return nil, false
	}
	return o.DrivingTime, true
}

// HasDrivingTime returns a boolean if a field has been set.
func (o *AirportType) HasDrivingTime() bool {
	if o != nil && !IsNil(o.DrivingTime) {
		return true
	}

	return false
}

// SetDrivingTime gets a reference to the given string and assigns it to the DrivingTime field.
func (o *AirportType) SetDrivingTime(v string) {
	o.DrivingTime = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *AirportType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirportType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *AirportType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *AirportType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *AirportType) GetSequence() int32 {
	if o == nil || IsNil(o.Sequence) {
		var ret int32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirportType) GetSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *AirportType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given int32 and assigns it to the Sequence field.
func (o *AirportType) SetSequence(v int32) {
	o.Sequence = &v
}

// GetTransportationOptions returns the TransportationOptions field value if set, zero value otherwise.
func (o *AirportType) GetTransportationOptions() []TransportationInfoType {
	if o == nil || IsNil(o.TransportationOptions) {
		var ret []TransportationInfoType
		return ret
	}
	return o.TransportationOptions
}

// GetTransportationOptionsOk returns a tuple with the TransportationOptions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirportType) GetTransportationOptionsOk() ([]TransportationInfoType, bool) {
	if o == nil || IsNil(o.TransportationOptions) {
		return nil, false
	}
	return o.TransportationOptions, true
}

// HasTransportationOptions returns a boolean if a field has been set.
func (o *AirportType) HasTransportationOptions() bool {
	if o != nil && !IsNil(o.TransportationOptions) {
		return true
	}

	return false
}

// SetTransportationOptions gets a reference to the given []TransportationInfoType and assigns it to the TransportationOptions field.
func (o *AirportType) SetTransportationOptions(v []TransportationInfoType) {
	o.TransportationOptions = v
}

// GetWebsite returns the Website field value if set, zero value otherwise.
func (o *AirportType) GetWebsite() string {
	if o == nil || IsNil(o.Website) {
		var ret string
		return ret
	}
	return *o.Website
}

// GetWebsiteOk returns a tuple with the Website field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirportType) GetWebsiteOk() (*string, bool) {
	if o == nil || IsNil(o.Website) {
		return nil, false
	}
	return o.Website, true
}

// HasWebsite returns a boolean if a field has been set.
func (o *AirportType) HasWebsite() bool {
	if o != nil && !IsNil(o.Website) {
		return true
	}

	return false
}

// SetWebsite gets a reference to the given string and assigns it to the Website field.
func (o *AirportType) SetWebsite(v string) {
	o.Website = &v
}

func (o AirportType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AirportType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Direction) {
		toSerialize["direction"] = o.Direction
	}
	if !IsNil(o.Distance) {
		toSerialize["distance"] = o.Distance
	}
	if !IsNil(o.DistanceType) {
		toSerialize["distanceType"] = o.DistanceType
	}
	if !IsNil(o.DrivingTime) {
		toSerialize["drivingTime"] = o.DrivingTime
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	if !IsNil(o.TransportationOptions) {
		toSerialize["transportationOptions"] = o.TransportationOptions
	}
	if !IsNil(o.Website) {
		toSerialize["website"] = o.Website
	}
	return toSerialize, nil
}

type NullableAirportType struct {
	value *AirportType
	isSet bool
}

func (v NullableAirportType) Get() *AirportType {
	return v.value
}

func (v *NullableAirportType) Set(val *AirportType) {
	v.value = val
	v.isSet = true
}

func (v NullableAirportType) IsSet() bool {
	return v.isSet
}

func (v *NullableAirportType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAirportType(val *AirportType) *NullableAirportType {
	return &NullableAirportType{value: val, isSet: true}
}

func (v NullableAirportType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAirportType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


