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

// checks if the ChangeHotelContactsRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeHotelContactsRequest{}

// ChangeHotelContactsRequest struct for ChangeHotelContactsRequest
type ChangeHotelContactsRequest struct {
	// Lists of contacts of the hotel.
	HotelContacts []HotelContactType `json:"hotelContacts,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChangeHotelContactsRequest instantiates a new ChangeHotelContactsRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeHotelContactsRequest() *ChangeHotelContactsRequest {
	this := ChangeHotelContactsRequest{}
	return &this
}

// NewChangeHotelContactsRequestWithDefaults instantiates a new ChangeHotelContactsRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeHotelContactsRequestWithDefaults() *ChangeHotelContactsRequest {
	this := ChangeHotelContactsRequest{}
	return &this
}

// GetHotelContacts returns the HotelContacts field value if set, zero value otherwise.
func (o *ChangeHotelContactsRequest) GetHotelContacts() []HotelContactType {
	if o == nil || IsNil(o.HotelContacts) {
		var ret []HotelContactType
		return ret
	}
	return o.HotelContacts
}

// GetHotelContactsOk returns a tuple with the HotelContacts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeHotelContactsRequest) GetHotelContactsOk() ([]HotelContactType, bool) {
	if o == nil || IsNil(o.HotelContacts) {
		return nil, false
	}
	return o.HotelContacts, true
}

// HasHotelContacts returns a boolean if a field has been set.
func (o *ChangeHotelContactsRequest) HasHotelContacts() bool {
	if o != nil && !IsNil(o.HotelContacts) {
		return true
	}

	return false
}

// SetHotelContacts gets a reference to the given []HotelContactType and assigns it to the HotelContacts field.
func (o *ChangeHotelContactsRequest) SetHotelContacts(v []HotelContactType) {
	o.HotelContacts = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChangeHotelContactsRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeHotelContactsRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChangeHotelContactsRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChangeHotelContactsRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChangeHotelContactsRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeHotelContactsRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChangeHotelContactsRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChangeHotelContactsRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChangeHotelContactsRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeHotelContactsRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelContacts) {
		toSerialize["hotelContacts"] = o.HotelContacts
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChangeHotelContactsRequest struct {
	value *ChangeHotelContactsRequest
	isSet bool
}

func (v NullableChangeHotelContactsRequest) Get() *ChangeHotelContactsRequest {
	return v.value
}

func (v *NullableChangeHotelContactsRequest) Set(val *ChangeHotelContactsRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeHotelContactsRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeHotelContactsRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeHotelContactsRequest(val *ChangeHotelContactsRequest) *NullableChangeHotelContactsRequest {
	return &NullableChangeHotelContactsRequest{value: val, isSet: true}
}

func (v NullableChangeHotelContactsRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeHotelContactsRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


