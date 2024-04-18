/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the CreateProformaCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CreateProformaCriteriaType{}

// CreateProformaCriteriaType Criteria for creating Proforma transactions for a reservation. These transactions will be used by the Opera Proforma Report.
type CreateProformaCriteriaType struct {
	// Property code.
	HotelId *string `json:"hotelId,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ReservationIdList []UniqueIDType `json:"reservationIdList,omitempty"`
	ResponseInstruction *ProformaResponseInstructionType `json:"responseInstruction,omitempty"`
}

// NewCreateProformaCriteriaType instantiates a new CreateProformaCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCreateProformaCriteriaType() *CreateProformaCriteriaType {
	this := CreateProformaCriteriaType{}
	return &this
}

// NewCreateProformaCriteriaTypeWithDefaults instantiates a new CreateProformaCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCreateProformaCriteriaTypeWithDefaults() *CreateProformaCriteriaType {
	this := CreateProformaCriteriaType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *CreateProformaCriteriaType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateProformaCriteriaType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *CreateProformaCriteriaType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *CreateProformaCriteriaType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetReservationIdList returns the ReservationIdList field value if set, zero value otherwise.
func (o *CreateProformaCriteriaType) GetReservationIdList() []UniqueIDType {
	if o == nil || IsNil(o.ReservationIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ReservationIdList
}

// GetReservationIdListOk returns a tuple with the ReservationIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateProformaCriteriaType) GetReservationIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ReservationIdList) {
		return nil, false
	}
	return o.ReservationIdList, true
}

// HasReservationIdList returns a boolean if a field has been set.
func (o *CreateProformaCriteriaType) HasReservationIdList() bool {
	if o != nil && !IsNil(o.ReservationIdList) {
		return true
	}

	return false
}

// SetReservationIdList gets a reference to the given []UniqueIDType and assigns it to the ReservationIdList field.
func (o *CreateProformaCriteriaType) SetReservationIdList(v []UniqueIDType) {
	o.ReservationIdList = v
}

// GetResponseInstruction returns the ResponseInstruction field value if set, zero value otherwise.
func (o *CreateProformaCriteriaType) GetResponseInstruction() ProformaResponseInstructionType {
	if o == nil || IsNil(o.ResponseInstruction) {
		var ret ProformaResponseInstructionType
		return ret
	}
	return *o.ResponseInstruction
}

// GetResponseInstructionOk returns a tuple with the ResponseInstruction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateProformaCriteriaType) GetResponseInstructionOk() (*ProformaResponseInstructionType, bool) {
	if o == nil || IsNil(o.ResponseInstruction) {
		return nil, false
	}
	return o.ResponseInstruction, true
}

// HasResponseInstruction returns a boolean if a field has been set.
func (o *CreateProformaCriteriaType) HasResponseInstruction() bool {
	if o != nil && !IsNil(o.ResponseInstruction) {
		return true
	}

	return false
}

// SetResponseInstruction gets a reference to the given ProformaResponseInstructionType and assigns it to the ResponseInstruction field.
func (o *CreateProformaCriteriaType) SetResponseInstruction(v ProformaResponseInstructionType) {
	o.ResponseInstruction = &v
}

func (o CreateProformaCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CreateProformaCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.ReservationIdList) {
		toSerialize["reservationIdList"] = o.ReservationIdList
	}
	if !IsNil(o.ResponseInstruction) {
		toSerialize["responseInstruction"] = o.ResponseInstruction
	}
	return toSerialize, nil
}

type NullableCreateProformaCriteriaType struct {
	value *CreateProformaCriteriaType
	isSet bool
}

func (v NullableCreateProformaCriteriaType) Get() *CreateProformaCriteriaType {
	return v.value
}

func (v *NullableCreateProformaCriteriaType) Set(val *CreateProformaCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableCreateProformaCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableCreateProformaCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCreateProformaCriteriaType(val *CreateProformaCriteriaType) *NullableCreateProformaCriteriaType {
	return &NullableCreateProformaCriteriaType{value: val, isSet: true}
}

func (v NullableCreateProformaCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCreateProformaCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

