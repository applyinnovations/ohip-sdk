/*
OPERA Cloud Integration Configuration API

APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package intcfg

import (
	"encoding/json"
)

// checks if the ExternalDatabaseAssociatedHotelType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExternalDatabaseAssociatedHotelType{}

// ExternalDatabaseAssociatedHotelType struct for ExternalDatabaseAssociatedHotelType
type ExternalDatabaseAssociatedHotelType struct {
	// Pertain associated hotel code for external database.
	HotelId *string `json:"hotelId,omitempty"`
	// Pertain associated hotel code for external database.
	HotelName *string `json:"hotelName,omitempty"`
}

// NewExternalDatabaseAssociatedHotelType instantiates a new ExternalDatabaseAssociatedHotelType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExternalDatabaseAssociatedHotelType() *ExternalDatabaseAssociatedHotelType {
	this := ExternalDatabaseAssociatedHotelType{}
	return &this
}

// NewExternalDatabaseAssociatedHotelTypeWithDefaults instantiates a new ExternalDatabaseAssociatedHotelType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExternalDatabaseAssociatedHotelTypeWithDefaults() *ExternalDatabaseAssociatedHotelType {
	this := ExternalDatabaseAssociatedHotelType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ExternalDatabaseAssociatedHotelType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExternalDatabaseAssociatedHotelType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ExternalDatabaseAssociatedHotelType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ExternalDatabaseAssociatedHotelType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetHotelName returns the HotelName field value if set, zero value otherwise.
func (o *ExternalDatabaseAssociatedHotelType) GetHotelName() string {
	if o == nil || IsNil(o.HotelName) {
		var ret string
		return ret
	}
	return *o.HotelName
}

// GetHotelNameOk returns a tuple with the HotelName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExternalDatabaseAssociatedHotelType) GetHotelNameOk() (*string, bool) {
	if o == nil || IsNil(o.HotelName) {
		return nil, false
	}
	return o.HotelName, true
}

// HasHotelName returns a boolean if a field has been set.
func (o *ExternalDatabaseAssociatedHotelType) HasHotelName() bool {
	if o != nil && !IsNil(o.HotelName) {
		return true
	}

	return false
}

// SetHotelName gets a reference to the given string and assigns it to the HotelName field.
func (o *ExternalDatabaseAssociatedHotelType) SetHotelName(v string) {
	o.HotelName = &v
}

func (o ExternalDatabaseAssociatedHotelType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExternalDatabaseAssociatedHotelType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.HotelName) {
		toSerialize["hotelName"] = o.HotelName
	}
	return toSerialize, nil
}

type NullableExternalDatabaseAssociatedHotelType struct {
	value *ExternalDatabaseAssociatedHotelType
	isSet bool
}

func (v NullableExternalDatabaseAssociatedHotelType) Get() *ExternalDatabaseAssociatedHotelType {
	return v.value
}

func (v *NullableExternalDatabaseAssociatedHotelType) Set(val *ExternalDatabaseAssociatedHotelType) {
	v.value = val
	v.isSet = true
}

func (v NullableExternalDatabaseAssociatedHotelType) IsSet() bool {
	return v.isSet
}

func (v *NullableExternalDatabaseAssociatedHotelType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExternalDatabaseAssociatedHotelType(val *ExternalDatabaseAssociatedHotelType) *NullableExternalDatabaseAssociatedHotelType {
	return &NullableExternalDatabaseAssociatedHotelType{value: val, isSet: true}
}

func (v NullableExternalDatabaseAssociatedHotelType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExternalDatabaseAssociatedHotelType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


