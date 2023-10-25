/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the ReservationPaymentMethodTypeEmailFolioInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationPaymentMethodTypeEmailFolioInfo{}

// ReservationPaymentMethodTypeEmailFolioInfo Information on an email for the customer.
type ReservationPaymentMethodTypeEmailFolioInfo struct {
	Email *EmailType `json:"email,omitempty"`
	EmailFolio *bool `json:"emailFolio,omitempty"`
	// A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
	Id *string `json:"id,omitempty"`
	// A reference to the type of object defined by the UniqueID element.
	Type *string `json:"type,omitempty"`
}

// NewReservationPaymentMethodTypeEmailFolioInfo instantiates a new ReservationPaymentMethodTypeEmailFolioInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationPaymentMethodTypeEmailFolioInfo() *ReservationPaymentMethodTypeEmailFolioInfo {
	this := ReservationPaymentMethodTypeEmailFolioInfo{}
	return &this
}

// NewReservationPaymentMethodTypeEmailFolioInfoWithDefaults instantiates a new ReservationPaymentMethodTypeEmailFolioInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationPaymentMethodTypeEmailFolioInfoWithDefaults() *ReservationPaymentMethodTypeEmailFolioInfo {
	this := ReservationPaymentMethodTypeEmailFolioInfo{}
	return &this
}

// GetEmail returns the Email field value if set, zero value otherwise.
func (o *ReservationPaymentMethodTypeEmailFolioInfo) GetEmail() EmailType {
	if o == nil || IsNil(o.Email) {
		var ret EmailType
		return ret
	}
	return *o.Email
}

// GetEmailOk returns a tuple with the Email field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPaymentMethodTypeEmailFolioInfo) GetEmailOk() (*EmailType, bool) {
	if o == nil || IsNil(o.Email) {
		return nil, false
	}
	return o.Email, true
}

// HasEmail returns a boolean if a field has been set.
func (o *ReservationPaymentMethodTypeEmailFolioInfo) HasEmail() bool {
	if o != nil && !IsNil(o.Email) {
		return true
	}

	return false
}

// SetEmail gets a reference to the given EmailType and assigns it to the Email field.
func (o *ReservationPaymentMethodTypeEmailFolioInfo) SetEmail(v EmailType) {
	o.Email = &v
}

// GetEmailFolio returns the EmailFolio field value if set, zero value otherwise.
func (o *ReservationPaymentMethodTypeEmailFolioInfo) GetEmailFolio() bool {
	if o == nil || IsNil(o.EmailFolio) {
		var ret bool
		return ret
	}
	return *o.EmailFolio
}

// GetEmailFolioOk returns a tuple with the EmailFolio field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPaymentMethodTypeEmailFolioInfo) GetEmailFolioOk() (*bool, bool) {
	if o == nil || IsNil(o.EmailFolio) {
		return nil, false
	}
	return o.EmailFolio, true
}

// HasEmailFolio returns a boolean if a field has been set.
func (o *ReservationPaymentMethodTypeEmailFolioInfo) HasEmailFolio() bool {
	if o != nil && !IsNil(o.EmailFolio) {
		return true
	}

	return false
}

// SetEmailFolio gets a reference to the given bool and assigns it to the EmailFolio field.
func (o *ReservationPaymentMethodTypeEmailFolioInfo) SetEmailFolio(v bool) {
	o.EmailFolio = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *ReservationPaymentMethodTypeEmailFolioInfo) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPaymentMethodTypeEmailFolioInfo) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *ReservationPaymentMethodTypeEmailFolioInfo) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *ReservationPaymentMethodTypeEmailFolioInfo) SetId(v string) {
	o.Id = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *ReservationPaymentMethodTypeEmailFolioInfo) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPaymentMethodTypeEmailFolioInfo) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *ReservationPaymentMethodTypeEmailFolioInfo) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *ReservationPaymentMethodTypeEmailFolioInfo) SetType(v string) {
	o.Type = &v
}

func (o ReservationPaymentMethodTypeEmailFolioInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationPaymentMethodTypeEmailFolioInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Email) {
		toSerialize["email"] = o.Email
	}
	if !IsNil(o.EmailFolio) {
		toSerialize["emailFolio"] = o.EmailFolio
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	return toSerialize, nil
}

type NullableReservationPaymentMethodTypeEmailFolioInfo struct {
	value *ReservationPaymentMethodTypeEmailFolioInfo
	isSet bool
}

func (v NullableReservationPaymentMethodTypeEmailFolioInfo) Get() *ReservationPaymentMethodTypeEmailFolioInfo {
	return v.value
}

func (v *NullableReservationPaymentMethodTypeEmailFolioInfo) Set(val *ReservationPaymentMethodTypeEmailFolioInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationPaymentMethodTypeEmailFolioInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationPaymentMethodTypeEmailFolioInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationPaymentMethodTypeEmailFolioInfo(val *ReservationPaymentMethodTypeEmailFolioInfo) *NullableReservationPaymentMethodTypeEmailFolioInfo {
	return &NullableReservationPaymentMethodTypeEmailFolioInfo{value: val, isSet: true}
}

func (v NullableReservationPaymentMethodTypeEmailFolioInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationPaymentMethodTypeEmailFolioInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


