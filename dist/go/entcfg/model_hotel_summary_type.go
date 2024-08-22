/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the HotelSummaryType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelSummaryType{}

// HotelSummaryType A brief summary of information about a hotel.
type HotelSummaryType struct {
	// Code identifying the hotel.
	HotelId *string `json:"hotelId,omitempty"`
	// The name of the hotel.
	HotelName *string `json:"hotelName,omitempty"`
	// Date when the hotel becomes valid for use.
	ActiveDate *string `json:"activeDate,omitempty"`
	// Date when the hotel becomes invalid for use.
	InactiveDate *string `json:"inactiveDate,omitempty"`
	// Hotels Chain Code. This attribute uniquely assign Hotel to a single chain.
	ChainCode *string `json:"chainCode,omitempty"`
	// Property Type Description. The property type defined for the hotel
	PropertyType *string `json:"propertyType,omitempty"`
}

// NewHotelSummaryType instantiates a new HotelSummaryType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelSummaryType() *HotelSummaryType {
	this := HotelSummaryType{}
	return &this
}

// NewHotelSummaryTypeWithDefaults instantiates a new HotelSummaryType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelSummaryTypeWithDefaults() *HotelSummaryType {
	this := HotelSummaryType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HotelSummaryType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HotelSummaryType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HotelSummaryType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetHotelName returns the HotelName field value if set, zero value otherwise.
func (o *HotelSummaryType) GetHotelName() string {
	if o == nil || IsNil(o.HotelName) {
		var ret string
		return ret
	}
	return *o.HotelName
}

// GetHotelNameOk returns a tuple with the HotelName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryType) GetHotelNameOk() (*string, bool) {
	if o == nil || IsNil(o.HotelName) {
		return nil, false
	}
	return o.HotelName, true
}

// HasHotelName returns a boolean if a field has been set.
func (o *HotelSummaryType) HasHotelName() bool {
	if o != nil && !IsNil(o.HotelName) {
		return true
	}

	return false
}

// SetHotelName gets a reference to the given string and assigns it to the HotelName field.
func (o *HotelSummaryType) SetHotelName(v string) {
	o.HotelName = &v
}

// GetActiveDate returns the ActiveDate field value if set, zero value otherwise.
func (o *HotelSummaryType) GetActiveDate() string {
	if o == nil || IsNil(o.ActiveDate) {
		var ret string
		return ret
	}
	return *o.ActiveDate
}

// GetActiveDateOk returns a tuple with the ActiveDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryType) GetActiveDateOk() (*string, bool) {
	if o == nil || IsNil(o.ActiveDate) {
		return nil, false
	}
	return o.ActiveDate, true
}

// HasActiveDate returns a boolean if a field has been set.
func (o *HotelSummaryType) HasActiveDate() bool {
	if o != nil && !IsNil(o.ActiveDate) {
		return true
	}

	return false
}

// SetActiveDate gets a reference to the given string and assigns it to the ActiveDate field.
func (o *HotelSummaryType) SetActiveDate(v string) {
	o.ActiveDate = &v
}

// GetInactiveDate returns the InactiveDate field value if set, zero value otherwise.
func (o *HotelSummaryType) GetInactiveDate() string {
	if o == nil || IsNil(o.InactiveDate) {
		var ret string
		return ret
	}
	return *o.InactiveDate
}

// GetInactiveDateOk returns a tuple with the InactiveDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryType) GetInactiveDateOk() (*string, bool) {
	if o == nil || IsNil(o.InactiveDate) {
		return nil, false
	}
	return o.InactiveDate, true
}

// HasInactiveDate returns a boolean if a field has been set.
func (o *HotelSummaryType) HasInactiveDate() bool {
	if o != nil && !IsNil(o.InactiveDate) {
		return true
	}

	return false
}

// SetInactiveDate gets a reference to the given string and assigns it to the InactiveDate field.
func (o *HotelSummaryType) SetInactiveDate(v string) {
	o.InactiveDate = &v
}

// GetChainCode returns the ChainCode field value if set, zero value otherwise.
func (o *HotelSummaryType) GetChainCode() string {
	if o == nil || IsNil(o.ChainCode) {
		var ret string
		return ret
	}
	return *o.ChainCode
}

// GetChainCodeOk returns a tuple with the ChainCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryType) GetChainCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ChainCode) {
		return nil, false
	}
	return o.ChainCode, true
}

// HasChainCode returns a boolean if a field has been set.
func (o *HotelSummaryType) HasChainCode() bool {
	if o != nil && !IsNil(o.ChainCode) {
		return true
	}

	return false
}

// SetChainCode gets a reference to the given string and assigns it to the ChainCode field.
func (o *HotelSummaryType) SetChainCode(v string) {
	o.ChainCode = &v
}

// GetPropertyType returns the PropertyType field value if set, zero value otherwise.
func (o *HotelSummaryType) GetPropertyType() string {
	if o == nil || IsNil(o.PropertyType) {
		var ret string
		return ret
	}
	return *o.PropertyType
}

// GetPropertyTypeOk returns a tuple with the PropertyType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryType) GetPropertyTypeOk() (*string, bool) {
	if o == nil || IsNil(o.PropertyType) {
		return nil, false
	}
	return o.PropertyType, true
}

// HasPropertyType returns a boolean if a field has been set.
func (o *HotelSummaryType) HasPropertyType() bool {
	if o != nil && !IsNil(o.PropertyType) {
		return true
	}

	return false
}

// SetPropertyType gets a reference to the given string and assigns it to the PropertyType field.
func (o *HotelSummaryType) SetPropertyType(v string) {
	o.PropertyType = &v
}

func (o HotelSummaryType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelSummaryType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.HotelName) {
		toSerialize["hotelName"] = o.HotelName
	}
	if !IsNil(o.ActiveDate) {
		toSerialize["activeDate"] = o.ActiveDate
	}
	if !IsNil(o.InactiveDate) {
		toSerialize["inactiveDate"] = o.InactiveDate
	}
	if !IsNil(o.ChainCode) {
		toSerialize["chainCode"] = o.ChainCode
	}
	if !IsNil(o.PropertyType) {
		toSerialize["propertyType"] = o.PropertyType
	}
	return toSerialize, nil
}

type NullableHotelSummaryType struct {
	value *HotelSummaryType
	isSet bool
}

func (v NullableHotelSummaryType) Get() *HotelSummaryType {
	return v.value
}

func (v *NullableHotelSummaryType) Set(val *HotelSummaryType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelSummaryType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelSummaryType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelSummaryType(val *HotelSummaryType) *NullableHotelSummaryType {
	return &NullableHotelSummaryType{value: val, isSet: true}
}

func (v NullableHotelSummaryType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelSummaryType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


