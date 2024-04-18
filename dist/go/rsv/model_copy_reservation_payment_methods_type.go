/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the CopyReservationPaymentMethodsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyReservationPaymentMethodsType{}

// CopyReservationPaymentMethodsType A collection of Reservation Payment Methods.
type CopyReservationPaymentMethodsType struct {
	// Indicates copying of credit card payment methods. This flag will only be applied to payment method windows not sent in the collection.
	CopyCreditCards *bool `json:"copyCreditCards,omitempty"`
	// Indicates copying of other payment methods. This flag will only be applied to payment method windows not sent in the collection.
	CopyOthers *bool `json:"copyOthers,omitempty"`
	// Defines reservation payment methods.
	ReservationPaymentMethod []ReservationPaymentMethodType `json:"reservationPaymentMethod,omitempty"`
}

// NewCopyReservationPaymentMethodsType instantiates a new CopyReservationPaymentMethodsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyReservationPaymentMethodsType() *CopyReservationPaymentMethodsType {
	this := CopyReservationPaymentMethodsType{}
	return &this
}

// NewCopyReservationPaymentMethodsTypeWithDefaults instantiates a new CopyReservationPaymentMethodsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyReservationPaymentMethodsTypeWithDefaults() *CopyReservationPaymentMethodsType {
	this := CopyReservationPaymentMethodsType{}
	return &this
}

// GetCopyCreditCards returns the CopyCreditCards field value if set, zero value otherwise.
func (o *CopyReservationPaymentMethodsType) GetCopyCreditCards() bool {
	if o == nil || IsNil(o.CopyCreditCards) {
		var ret bool
		return ret
	}
	return *o.CopyCreditCards
}

// GetCopyCreditCardsOk returns a tuple with the CopyCreditCards field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyReservationPaymentMethodsType) GetCopyCreditCardsOk() (*bool, bool) {
	if o == nil || IsNil(o.CopyCreditCards) {
		return nil, false
	}
	return o.CopyCreditCards, true
}

// HasCopyCreditCards returns a boolean if a field has been set.
func (o *CopyReservationPaymentMethodsType) HasCopyCreditCards() bool {
	if o != nil && !IsNil(o.CopyCreditCards) {
		return true
	}

	return false
}

// SetCopyCreditCards gets a reference to the given bool and assigns it to the CopyCreditCards field.
func (o *CopyReservationPaymentMethodsType) SetCopyCreditCards(v bool) {
	o.CopyCreditCards = &v
}

// GetCopyOthers returns the CopyOthers field value if set, zero value otherwise.
func (o *CopyReservationPaymentMethodsType) GetCopyOthers() bool {
	if o == nil || IsNil(o.CopyOthers) {
		var ret bool
		return ret
	}
	return *o.CopyOthers
}

// GetCopyOthersOk returns a tuple with the CopyOthers field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyReservationPaymentMethodsType) GetCopyOthersOk() (*bool, bool) {
	if o == nil || IsNil(o.CopyOthers) {
		return nil, false
	}
	return o.CopyOthers, true
}

// HasCopyOthers returns a boolean if a field has been set.
func (o *CopyReservationPaymentMethodsType) HasCopyOthers() bool {
	if o != nil && !IsNil(o.CopyOthers) {
		return true
	}

	return false
}

// SetCopyOthers gets a reference to the given bool and assigns it to the CopyOthers field.
func (o *CopyReservationPaymentMethodsType) SetCopyOthers(v bool) {
	o.CopyOthers = &v
}

// GetReservationPaymentMethod returns the ReservationPaymentMethod field value if set, zero value otherwise.
func (o *CopyReservationPaymentMethodsType) GetReservationPaymentMethod() []ReservationPaymentMethodType {
	if o == nil || IsNil(o.ReservationPaymentMethod) {
		var ret []ReservationPaymentMethodType
		return ret
	}
	return o.ReservationPaymentMethod
}

// GetReservationPaymentMethodOk returns a tuple with the ReservationPaymentMethod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyReservationPaymentMethodsType) GetReservationPaymentMethodOk() ([]ReservationPaymentMethodType, bool) {
	if o == nil || IsNil(o.ReservationPaymentMethod) {
		return nil, false
	}
	return o.ReservationPaymentMethod, true
}

// HasReservationPaymentMethod returns a boolean if a field has been set.
func (o *CopyReservationPaymentMethodsType) HasReservationPaymentMethod() bool {
	if o != nil && !IsNil(o.ReservationPaymentMethod) {
		return true
	}

	return false
}

// SetReservationPaymentMethod gets a reference to the given []ReservationPaymentMethodType and assigns it to the ReservationPaymentMethod field.
func (o *CopyReservationPaymentMethodsType) SetReservationPaymentMethod(v []ReservationPaymentMethodType) {
	o.ReservationPaymentMethod = v
}

func (o CopyReservationPaymentMethodsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyReservationPaymentMethodsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CopyCreditCards) {
		toSerialize["copyCreditCards"] = o.CopyCreditCards
	}
	if !IsNil(o.CopyOthers) {
		toSerialize["copyOthers"] = o.CopyOthers
	}
	if !IsNil(o.ReservationPaymentMethod) {
		toSerialize["reservationPaymentMethod"] = o.ReservationPaymentMethod
	}
	return toSerialize, nil
}

type NullableCopyReservationPaymentMethodsType struct {
	value *CopyReservationPaymentMethodsType
	isSet bool
}

func (v NullableCopyReservationPaymentMethodsType) Get() *CopyReservationPaymentMethodsType {
	return v.value
}

func (v *NullableCopyReservationPaymentMethodsType) Set(val *CopyReservationPaymentMethodsType) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyReservationPaymentMethodsType) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyReservationPaymentMethodsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyReservationPaymentMethodsType(val *CopyReservationPaymentMethodsType) *NullableCopyReservationPaymentMethodsType {
	return &NullableCopyReservationPaymentMethodsType{value: val, isSet: true}
}

func (v NullableCopyReservationPaymentMethodsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyReservationPaymentMethodsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

