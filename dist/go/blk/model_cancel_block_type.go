/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the CancelBlockType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CancelBlockType{}

// CancelBlockType ID information of the cancelled Block.
type CancelBlockType struct {
	// Unique Id that references an object uniquely in the system.
	BlockIdList []UniqueIDType `json:"blockIdList,omitempty"`
	CancellationDetails *CancellationDetailsType `json:"cancellationDetails,omitempty"`
	// Opera Hotel code for the cancel block operation.
	HotelId *string `json:"hotelId,omitempty"`
	PMReservationsCancellationDetails *CancellationDetailsType `json:"pMReservationsCancellationDetails,omitempty"`
	// Start date of the block to be cancelled.
	StartDate *string `json:"startDate,omitempty"`
}

// NewCancelBlockType instantiates a new CancelBlockType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCancelBlockType() *CancelBlockType {
	this := CancelBlockType{}
	return &this
}

// NewCancelBlockTypeWithDefaults instantiates a new CancelBlockType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCancelBlockTypeWithDefaults() *CancelBlockType {
	this := CancelBlockType{}
	return &this
}

// GetBlockIdList returns the BlockIdList field value if set, zero value otherwise.
func (o *CancelBlockType) GetBlockIdList() []UniqueIDType {
	if o == nil || IsNil(o.BlockIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.BlockIdList
}

// GetBlockIdListOk returns a tuple with the BlockIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancelBlockType) GetBlockIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.BlockIdList) {
		return nil, false
	}
	return o.BlockIdList, true
}

// HasBlockIdList returns a boolean if a field has been set.
func (o *CancelBlockType) HasBlockIdList() bool {
	if o != nil && !IsNil(o.BlockIdList) {
		return true
	}

	return false
}

// SetBlockIdList gets a reference to the given []UniqueIDType and assigns it to the BlockIdList field.
func (o *CancelBlockType) SetBlockIdList(v []UniqueIDType) {
	o.BlockIdList = v
}

// GetCancellationDetails returns the CancellationDetails field value if set, zero value otherwise.
func (o *CancelBlockType) GetCancellationDetails() CancellationDetailsType {
	if o == nil || IsNil(o.CancellationDetails) {
		var ret CancellationDetailsType
		return ret
	}
	return *o.CancellationDetails
}

// GetCancellationDetailsOk returns a tuple with the CancellationDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancelBlockType) GetCancellationDetailsOk() (*CancellationDetailsType, bool) {
	if o == nil || IsNil(o.CancellationDetails) {
		return nil, false
	}
	return o.CancellationDetails, true
}

// HasCancellationDetails returns a boolean if a field has been set.
func (o *CancelBlockType) HasCancellationDetails() bool {
	if o != nil && !IsNil(o.CancellationDetails) {
		return true
	}

	return false
}

// SetCancellationDetails gets a reference to the given CancellationDetailsType and assigns it to the CancellationDetails field.
func (o *CancelBlockType) SetCancellationDetails(v CancellationDetailsType) {
	o.CancellationDetails = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *CancelBlockType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancelBlockType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *CancelBlockType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *CancelBlockType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetPMReservationsCancellationDetails returns the PMReservationsCancellationDetails field value if set, zero value otherwise.
func (o *CancelBlockType) GetPMReservationsCancellationDetails() CancellationDetailsType {
	if o == nil || IsNil(o.PMReservationsCancellationDetails) {
		var ret CancellationDetailsType
		return ret
	}
	return *o.PMReservationsCancellationDetails
}

// GetPMReservationsCancellationDetailsOk returns a tuple with the PMReservationsCancellationDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancelBlockType) GetPMReservationsCancellationDetailsOk() (*CancellationDetailsType, bool) {
	if o == nil || IsNil(o.PMReservationsCancellationDetails) {
		return nil, false
	}
	return o.PMReservationsCancellationDetails, true
}

// HasPMReservationsCancellationDetails returns a boolean if a field has been set.
func (o *CancelBlockType) HasPMReservationsCancellationDetails() bool {
	if o != nil && !IsNil(o.PMReservationsCancellationDetails) {
		return true
	}

	return false
}

// SetPMReservationsCancellationDetails gets a reference to the given CancellationDetailsType and assigns it to the PMReservationsCancellationDetails field.
func (o *CancelBlockType) SetPMReservationsCancellationDetails(v CancellationDetailsType) {
	o.PMReservationsCancellationDetails = &v
}

// GetStartDate returns the StartDate field value if set, zero value otherwise.
func (o *CancelBlockType) GetStartDate() string {
	if o == nil || IsNil(o.StartDate) {
		var ret string
		return ret
	}
	return *o.StartDate
}

// GetStartDateOk returns a tuple with the StartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancelBlockType) GetStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.StartDate) {
		return nil, false
	}
	return o.StartDate, true
}

// HasStartDate returns a boolean if a field has been set.
func (o *CancelBlockType) HasStartDate() bool {
	if o != nil && !IsNil(o.StartDate) {
		return true
	}

	return false
}

// SetStartDate gets a reference to the given string and assigns it to the StartDate field.
func (o *CancelBlockType) SetStartDate(v string) {
	o.StartDate = &v
}

func (o CancelBlockType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CancelBlockType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockIdList) {
		toSerialize["blockIdList"] = o.BlockIdList
	}
	if !IsNil(o.CancellationDetails) {
		toSerialize["cancellationDetails"] = o.CancellationDetails
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.PMReservationsCancellationDetails) {
		toSerialize["pMReservationsCancellationDetails"] = o.PMReservationsCancellationDetails
	}
	if !IsNil(o.StartDate) {
		toSerialize["startDate"] = o.StartDate
	}
	return toSerialize, nil
}

type NullableCancelBlockType struct {
	value *CancelBlockType
	isSet bool
}

func (v NullableCancelBlockType) Get() *CancelBlockType {
	return v.value
}

func (v *NullableCancelBlockType) Set(val *CancelBlockType) {
	v.value = val
	v.isSet = true
}

func (v NullableCancelBlockType) IsSet() bool {
	return v.isSet
}

func (v *NullableCancelBlockType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCancelBlockType(val *CancelBlockType) *NullableCancelBlockType {
	return &NullableCancelBlockType{value: val, isSet: true}
}

func (v NullableCancelBlockType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCancelBlockType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

