/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the PutAlternateDatesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PutAlternateDatesRequest{}

// PutAlternateDatesRequest struct for PutAlternateDatesRequest
type PutAlternateDatesRequest struct {
	// Contains a list of Block Alternate Dates.
	BlockAlternateDates []BlockAlternateDateType `json:"blockAlternateDates,omitempty"`
	// Unique Id that references an object uniquely in the system.
	BlockIdList []UniqueIDType `json:"blockIdList,omitempty"`
	// Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
	HotelId *string `json:"hotelId,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPutAlternateDatesRequest instantiates a new PutAlternateDatesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPutAlternateDatesRequest() *PutAlternateDatesRequest {
	this := PutAlternateDatesRequest{}
	return &this
}

// NewPutAlternateDatesRequestWithDefaults instantiates a new PutAlternateDatesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPutAlternateDatesRequestWithDefaults() *PutAlternateDatesRequest {
	this := PutAlternateDatesRequest{}
	return &this
}

// GetBlockAlternateDates returns the BlockAlternateDates field value if set, zero value otherwise.
func (o *PutAlternateDatesRequest) GetBlockAlternateDates() []BlockAlternateDateType {
	if o == nil || IsNil(o.BlockAlternateDates) {
		var ret []BlockAlternateDateType
		return ret
	}
	return o.BlockAlternateDates
}

// GetBlockAlternateDatesOk returns a tuple with the BlockAlternateDates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutAlternateDatesRequest) GetBlockAlternateDatesOk() ([]BlockAlternateDateType, bool) {
	if o == nil || IsNil(o.BlockAlternateDates) {
		return nil, false
	}
	return o.BlockAlternateDates, true
}

// HasBlockAlternateDates returns a boolean if a field has been set.
func (o *PutAlternateDatesRequest) HasBlockAlternateDates() bool {
	if o != nil && !IsNil(o.BlockAlternateDates) {
		return true
	}

	return false
}

// SetBlockAlternateDates gets a reference to the given []BlockAlternateDateType and assigns it to the BlockAlternateDates field.
func (o *PutAlternateDatesRequest) SetBlockAlternateDates(v []BlockAlternateDateType) {
	o.BlockAlternateDates = v
}

// GetBlockIdList returns the BlockIdList field value if set, zero value otherwise.
func (o *PutAlternateDatesRequest) GetBlockIdList() []UniqueIDType {
	if o == nil || IsNil(o.BlockIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.BlockIdList
}

// GetBlockIdListOk returns a tuple with the BlockIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutAlternateDatesRequest) GetBlockIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.BlockIdList) {
		return nil, false
	}
	return o.BlockIdList, true
}

// HasBlockIdList returns a boolean if a field has been set.
func (o *PutAlternateDatesRequest) HasBlockIdList() bool {
	if o != nil && !IsNil(o.BlockIdList) {
		return true
	}

	return false
}

// SetBlockIdList gets a reference to the given []UniqueIDType and assigns it to the BlockIdList field.
func (o *PutAlternateDatesRequest) SetBlockIdList(v []UniqueIDType) {
	o.BlockIdList = v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *PutAlternateDatesRequest) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutAlternateDatesRequest) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *PutAlternateDatesRequest) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *PutAlternateDatesRequest) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PutAlternateDatesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutAlternateDatesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PutAlternateDatesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PutAlternateDatesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PutAlternateDatesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutAlternateDatesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PutAlternateDatesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PutAlternateDatesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PutAlternateDatesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PutAlternateDatesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockAlternateDates) {
		toSerialize["blockAlternateDates"] = o.BlockAlternateDates
	}
	if !IsNil(o.BlockIdList) {
		toSerialize["blockIdList"] = o.BlockIdList
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePutAlternateDatesRequest struct {
	value *PutAlternateDatesRequest
	isSet bool
}

func (v NullablePutAlternateDatesRequest) Get() *PutAlternateDatesRequest {
	return v.value
}

func (v *NullablePutAlternateDatesRequest) Set(val *PutAlternateDatesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePutAlternateDatesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePutAlternateDatesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePutAlternateDatesRequest(val *PutAlternateDatesRequest) *NullablePutAlternateDatesRequest {
	return &NullablePutAlternateDatesRequest{value: val, isSet: true}
}

func (v NullablePutAlternateDatesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePutAlternateDatesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


