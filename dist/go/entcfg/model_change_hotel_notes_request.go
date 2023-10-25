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

// checks if the ChangeHotelNotesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeHotelNotesRequest{}

// ChangeHotelNotesRequest struct for ChangeHotelNotesRequest
type ChangeHotelNotesRequest struct {
	// List of Notes of the hotel.
	HotelNotes []CommentInfoType `json:"hotelNotes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChangeHotelNotesRequest instantiates a new ChangeHotelNotesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeHotelNotesRequest() *ChangeHotelNotesRequest {
	this := ChangeHotelNotesRequest{}
	return &this
}

// NewChangeHotelNotesRequestWithDefaults instantiates a new ChangeHotelNotesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeHotelNotesRequestWithDefaults() *ChangeHotelNotesRequest {
	this := ChangeHotelNotesRequest{}
	return &this
}

// GetHotelNotes returns the HotelNotes field value if set, zero value otherwise.
func (o *ChangeHotelNotesRequest) GetHotelNotes() []CommentInfoType {
	if o == nil || IsNil(o.HotelNotes) {
		var ret []CommentInfoType
		return ret
	}
	return o.HotelNotes
}

// GetHotelNotesOk returns a tuple with the HotelNotes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeHotelNotesRequest) GetHotelNotesOk() ([]CommentInfoType, bool) {
	if o == nil || IsNil(o.HotelNotes) {
		return nil, false
	}
	return o.HotelNotes, true
}

// HasHotelNotes returns a boolean if a field has been set.
func (o *ChangeHotelNotesRequest) HasHotelNotes() bool {
	if o != nil && !IsNil(o.HotelNotes) {
		return true
	}

	return false
}

// SetHotelNotes gets a reference to the given []CommentInfoType and assigns it to the HotelNotes field.
func (o *ChangeHotelNotesRequest) SetHotelNotes(v []CommentInfoType) {
	o.HotelNotes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChangeHotelNotesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeHotelNotesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChangeHotelNotesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChangeHotelNotesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChangeHotelNotesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeHotelNotesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChangeHotelNotesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChangeHotelNotesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChangeHotelNotesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeHotelNotesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelNotes) {
		toSerialize["hotelNotes"] = o.HotelNotes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChangeHotelNotesRequest struct {
	value *ChangeHotelNotesRequest
	isSet bool
}

func (v NullableChangeHotelNotesRequest) Get() *ChangeHotelNotesRequest {
	return v.value
}

func (v *NullableChangeHotelNotesRequest) Set(val *ChangeHotelNotesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeHotelNotesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeHotelNotesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeHotelNotesRequest(val *ChangeHotelNotesRequest) *NullableChangeHotelNotesRequest {
	return &NullableChangeHotelNotesRequest{value: val, isSet: true}
}

func (v NullableChangeHotelNotesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeHotelNotesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


