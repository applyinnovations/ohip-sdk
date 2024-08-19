/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the HotelNoShowPostingRuleType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelNoShowPostingRuleType{}

// HotelNoShowPostingRuleType Provides information about No Show Posting Rule Configuration.
type HotelNoShowPostingRuleType struct {
	// Indicates for which hotel this posting rule apply to.
	HotelId *string `json:"hotelId,omitempty"`
	PostingRule *PostingRuleType `json:"postingRule,omitempty"`
	// Type of the reservation.
	ReservationType *string `json:"reservationType,omitempty"`
	// Source code of the reservation.
	SourceCode *string `json:"sourceCode,omitempty"`
}

// NewHotelNoShowPostingRuleType instantiates a new HotelNoShowPostingRuleType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelNoShowPostingRuleType() *HotelNoShowPostingRuleType {
	this := HotelNoShowPostingRuleType{}
	return &this
}

// NewHotelNoShowPostingRuleTypeWithDefaults instantiates a new HotelNoShowPostingRuleType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelNoShowPostingRuleTypeWithDefaults() *HotelNoShowPostingRuleType {
	this := HotelNoShowPostingRuleType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HotelNoShowPostingRuleType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelNoShowPostingRuleType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HotelNoShowPostingRuleType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HotelNoShowPostingRuleType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetPostingRule returns the PostingRule field value if set, zero value otherwise.
func (o *HotelNoShowPostingRuleType) GetPostingRule() PostingRuleType {
	if o == nil || IsNil(o.PostingRule) {
		var ret PostingRuleType
		return ret
	}
	return *o.PostingRule
}

// GetPostingRuleOk returns a tuple with the PostingRule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelNoShowPostingRuleType) GetPostingRuleOk() (*PostingRuleType, bool) {
	if o == nil || IsNil(o.PostingRule) {
		return nil, false
	}
	return o.PostingRule, true
}

// HasPostingRule returns a boolean if a field has been set.
func (o *HotelNoShowPostingRuleType) HasPostingRule() bool {
	if o != nil && !IsNil(o.PostingRule) {
		return true
	}

	return false
}

// SetPostingRule gets a reference to the given PostingRuleType and assigns it to the PostingRule field.
func (o *HotelNoShowPostingRuleType) SetPostingRule(v PostingRuleType) {
	o.PostingRule = &v
}

// GetReservationType returns the ReservationType field value if set, zero value otherwise.
func (o *HotelNoShowPostingRuleType) GetReservationType() string {
	if o == nil || IsNil(o.ReservationType) {
		var ret string
		return ret
	}
	return *o.ReservationType
}

// GetReservationTypeOk returns a tuple with the ReservationType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelNoShowPostingRuleType) GetReservationTypeOk() (*string, bool) {
	if o == nil || IsNil(o.ReservationType) {
		return nil, false
	}
	return o.ReservationType, true
}

// HasReservationType returns a boolean if a field has been set.
func (o *HotelNoShowPostingRuleType) HasReservationType() bool {
	if o != nil && !IsNil(o.ReservationType) {
		return true
	}

	return false
}

// SetReservationType gets a reference to the given string and assigns it to the ReservationType field.
func (o *HotelNoShowPostingRuleType) SetReservationType(v string) {
	o.ReservationType = &v
}

// GetSourceCode returns the SourceCode field value if set, zero value otherwise.
func (o *HotelNoShowPostingRuleType) GetSourceCode() string {
	if o == nil || IsNil(o.SourceCode) {
		var ret string
		return ret
	}
	return *o.SourceCode
}

// GetSourceCodeOk returns a tuple with the SourceCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelNoShowPostingRuleType) GetSourceCodeOk() (*string, bool) {
	if o == nil || IsNil(o.SourceCode) {
		return nil, false
	}
	return o.SourceCode, true
}

// HasSourceCode returns a boolean if a field has been set.
func (o *HotelNoShowPostingRuleType) HasSourceCode() bool {
	if o != nil && !IsNil(o.SourceCode) {
		return true
	}

	return false
}

// SetSourceCode gets a reference to the given string and assigns it to the SourceCode field.
func (o *HotelNoShowPostingRuleType) SetSourceCode(v string) {
	o.SourceCode = &v
}

func (o HotelNoShowPostingRuleType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelNoShowPostingRuleType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.PostingRule) {
		toSerialize["postingRule"] = o.PostingRule
	}
	if !IsNil(o.ReservationType) {
		toSerialize["reservationType"] = o.ReservationType
	}
	if !IsNil(o.SourceCode) {
		toSerialize["sourceCode"] = o.SourceCode
	}
	return toSerialize, nil
}

type NullableHotelNoShowPostingRuleType struct {
	value *HotelNoShowPostingRuleType
	isSet bool
}

func (v NullableHotelNoShowPostingRuleType) Get() *HotelNoShowPostingRuleType {
	return v.value
}

func (v *NullableHotelNoShowPostingRuleType) Set(val *HotelNoShowPostingRuleType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelNoShowPostingRuleType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelNoShowPostingRuleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelNoShowPostingRuleType(val *HotelNoShowPostingRuleType) *NullableHotelNoShowPostingRuleType {
	return &NullableHotelNoShowPostingRuleType{value: val, isSet: true}
}

func (v NullableHotelNoShowPostingRuleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelNoShowPostingRuleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


