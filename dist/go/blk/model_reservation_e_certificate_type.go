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

// checks if the ReservationECertificateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationECertificateType{}

// ReservationECertificateType Reservation ECertificate Type Information.
type ReservationECertificateType struct {
	ActionType *RequestActionType `json:"actionType,omitempty"`
	// ECertificate Number for the reservation.
	ECertificateNo *string `json:"eCertificateNo,omitempty"`
	ECertificateType *ECertificateClassficationType `json:"eCertificateType,omitempty"`
}

// NewReservationECertificateType instantiates a new ReservationECertificateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationECertificateType() *ReservationECertificateType {
	this := ReservationECertificateType{}
	return &this
}

// NewReservationECertificateTypeWithDefaults instantiates a new ReservationECertificateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationECertificateTypeWithDefaults() *ReservationECertificateType {
	this := ReservationECertificateType{}
	return &this
}

// GetActionType returns the ActionType field value if set, zero value otherwise.
func (o *ReservationECertificateType) GetActionType() RequestActionType {
	if o == nil || IsNil(o.ActionType) {
		var ret RequestActionType
		return ret
	}
	return *o.ActionType
}

// GetActionTypeOk returns a tuple with the ActionType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationECertificateType) GetActionTypeOk() (*RequestActionType, bool) {
	if o == nil || IsNil(o.ActionType) {
		return nil, false
	}
	return o.ActionType, true
}

// HasActionType returns a boolean if a field has been set.
func (o *ReservationECertificateType) HasActionType() bool {
	if o != nil && !IsNil(o.ActionType) {
		return true
	}

	return false
}

// SetActionType gets a reference to the given RequestActionType and assigns it to the ActionType field.
func (o *ReservationECertificateType) SetActionType(v RequestActionType) {
	o.ActionType = &v
}

// GetECertificateNo returns the ECertificateNo field value if set, zero value otherwise.
func (o *ReservationECertificateType) GetECertificateNo() string {
	if o == nil || IsNil(o.ECertificateNo) {
		var ret string
		return ret
	}
	return *o.ECertificateNo
}

// GetECertificateNoOk returns a tuple with the ECertificateNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationECertificateType) GetECertificateNoOk() (*string, bool) {
	if o == nil || IsNil(o.ECertificateNo) {
		return nil, false
	}
	return o.ECertificateNo, true
}

// HasECertificateNo returns a boolean if a field has been set.
func (o *ReservationECertificateType) HasECertificateNo() bool {
	if o != nil && !IsNil(o.ECertificateNo) {
		return true
	}

	return false
}

// SetECertificateNo gets a reference to the given string and assigns it to the ECertificateNo field.
func (o *ReservationECertificateType) SetECertificateNo(v string) {
	o.ECertificateNo = &v
}

// GetECertificateType returns the ECertificateType field value if set, zero value otherwise.
func (o *ReservationECertificateType) GetECertificateType() ECertificateClassficationType {
	if o == nil || IsNil(o.ECertificateType) {
		var ret ECertificateClassficationType
		return ret
	}
	return *o.ECertificateType
}

// GetECertificateTypeOk returns a tuple with the ECertificateType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationECertificateType) GetECertificateTypeOk() (*ECertificateClassficationType, bool) {
	if o == nil || IsNil(o.ECertificateType) {
		return nil, false
	}
	return o.ECertificateType, true
}

// HasECertificateType returns a boolean if a field has been set.
func (o *ReservationECertificateType) HasECertificateType() bool {
	if o != nil && !IsNil(o.ECertificateType) {
		return true
	}

	return false
}

// SetECertificateType gets a reference to the given ECertificateClassficationType and assigns it to the ECertificateType field.
func (o *ReservationECertificateType) SetECertificateType(v ECertificateClassficationType) {
	o.ECertificateType = &v
}

func (o ReservationECertificateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationECertificateType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActionType) {
		toSerialize["actionType"] = o.ActionType
	}
	if !IsNil(o.ECertificateNo) {
		toSerialize["eCertificateNo"] = o.ECertificateNo
	}
	if !IsNil(o.ECertificateType) {
		toSerialize["eCertificateType"] = o.ECertificateType
	}
	return toSerialize, nil
}

type NullableReservationECertificateType struct {
	value *ReservationECertificateType
	isSet bool
}

func (v NullableReservationECertificateType) Get() *ReservationECertificateType {
	return v.value
}

func (v *NullableReservationECertificateType) Set(val *ReservationECertificateType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationECertificateType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationECertificateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationECertificateType(val *ReservationECertificateType) *NullableReservationECertificateType {
	return &NullableReservationECertificateType{value: val, isSet: true}
}

func (v NullableReservationECertificateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationECertificateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


