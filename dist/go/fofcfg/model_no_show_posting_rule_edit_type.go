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

// checks if the NoShowPostingRuleEditType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &NoShowPostingRuleEditType{}

// NoShowPostingRuleEditType Provides information about No Show Posting Rule Configuration.
type NoShowPostingRuleEditType struct {
	// Indicates for which hotel this posting rule apply to.
	HotelId *string `json:"hotelId,omitempty"`
	NewRule *NoShowPostingRuleType `json:"newRule,omitempty"`
	PostingRule *PostingRuleType `json:"postingRule,omitempty"`
	// Type of the reservation.
	ReservationType *string `json:"reservationType,omitempty"`
	// Source code of the reservation.
	SourceCode *string `json:"sourceCode,omitempty"`
}

// NewNoShowPostingRuleEditType instantiates a new NoShowPostingRuleEditType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewNoShowPostingRuleEditType() *NoShowPostingRuleEditType {
	this := NoShowPostingRuleEditType{}
	return &this
}

// NewNoShowPostingRuleEditTypeWithDefaults instantiates a new NoShowPostingRuleEditType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewNoShowPostingRuleEditTypeWithDefaults() *NoShowPostingRuleEditType {
	this := NoShowPostingRuleEditType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *NoShowPostingRuleEditType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoShowPostingRuleEditType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *NoShowPostingRuleEditType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *NoShowPostingRuleEditType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetNewRule returns the NewRule field value if set, zero value otherwise.
func (o *NoShowPostingRuleEditType) GetNewRule() NoShowPostingRuleType {
	if o == nil || IsNil(o.NewRule) {
		var ret NoShowPostingRuleType
		return ret
	}
	return *o.NewRule
}

// GetNewRuleOk returns a tuple with the NewRule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoShowPostingRuleEditType) GetNewRuleOk() (*NoShowPostingRuleType, bool) {
	if o == nil || IsNil(o.NewRule) {
		return nil, false
	}
	return o.NewRule, true
}

// HasNewRule returns a boolean if a field has been set.
func (o *NoShowPostingRuleEditType) HasNewRule() bool {
	if o != nil && !IsNil(o.NewRule) {
		return true
	}

	return false
}

// SetNewRule gets a reference to the given NoShowPostingRuleType and assigns it to the NewRule field.
func (o *NoShowPostingRuleEditType) SetNewRule(v NoShowPostingRuleType) {
	o.NewRule = &v
}

// GetPostingRule returns the PostingRule field value if set, zero value otherwise.
func (o *NoShowPostingRuleEditType) GetPostingRule() PostingRuleType {
	if o == nil || IsNil(o.PostingRule) {
		var ret PostingRuleType
		return ret
	}
	return *o.PostingRule
}

// GetPostingRuleOk returns a tuple with the PostingRule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoShowPostingRuleEditType) GetPostingRuleOk() (*PostingRuleType, bool) {
	if o == nil || IsNil(o.PostingRule) {
		return nil, false
	}
	return o.PostingRule, true
}

// HasPostingRule returns a boolean if a field has been set.
func (o *NoShowPostingRuleEditType) HasPostingRule() bool {
	if o != nil && !IsNil(o.PostingRule) {
		return true
	}

	return false
}

// SetPostingRule gets a reference to the given PostingRuleType and assigns it to the PostingRule field.
func (o *NoShowPostingRuleEditType) SetPostingRule(v PostingRuleType) {
	o.PostingRule = &v
}

// GetReservationType returns the ReservationType field value if set, zero value otherwise.
func (o *NoShowPostingRuleEditType) GetReservationType() string {
	if o == nil || IsNil(o.ReservationType) {
		var ret string
		return ret
	}
	return *o.ReservationType
}

// GetReservationTypeOk returns a tuple with the ReservationType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoShowPostingRuleEditType) GetReservationTypeOk() (*string, bool) {
	if o == nil || IsNil(o.ReservationType) {
		return nil, false
	}
	return o.ReservationType, true
}

// HasReservationType returns a boolean if a field has been set.
func (o *NoShowPostingRuleEditType) HasReservationType() bool {
	if o != nil && !IsNil(o.ReservationType) {
		return true
	}

	return false
}

// SetReservationType gets a reference to the given string and assigns it to the ReservationType field.
func (o *NoShowPostingRuleEditType) SetReservationType(v string) {
	o.ReservationType = &v
}

// GetSourceCode returns the SourceCode field value if set, zero value otherwise.
func (o *NoShowPostingRuleEditType) GetSourceCode() string {
	if o == nil || IsNil(o.SourceCode) {
		var ret string
		return ret
	}
	return *o.SourceCode
}

// GetSourceCodeOk returns a tuple with the SourceCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoShowPostingRuleEditType) GetSourceCodeOk() (*string, bool) {
	if o == nil || IsNil(o.SourceCode) {
		return nil, false
	}
	return o.SourceCode, true
}

// HasSourceCode returns a boolean if a field has been set.
func (o *NoShowPostingRuleEditType) HasSourceCode() bool {
	if o != nil && !IsNil(o.SourceCode) {
		return true
	}

	return false
}

// SetSourceCode gets a reference to the given string and assigns it to the SourceCode field.
func (o *NoShowPostingRuleEditType) SetSourceCode(v string) {
	o.SourceCode = &v
}

func (o NoShowPostingRuleEditType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o NoShowPostingRuleEditType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.NewRule) {
		toSerialize["newRule"] = o.NewRule
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

type NullableNoShowPostingRuleEditType struct {
	value *NoShowPostingRuleEditType
	isSet bool
}

func (v NullableNoShowPostingRuleEditType) Get() *NoShowPostingRuleEditType {
	return v.value
}

func (v *NullableNoShowPostingRuleEditType) Set(val *NoShowPostingRuleEditType) {
	v.value = val
	v.isSet = true
}

func (v NullableNoShowPostingRuleEditType) IsSet() bool {
	return v.isSet
}

func (v *NullableNoShowPostingRuleEditType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableNoShowPostingRuleEditType(val *NoShowPostingRuleEditType) *NullableNoShowPostingRuleEditType {
	return &NullableNoShowPostingRuleEditType{value: val, isSet: true}
}

func (v NullableNoShowPostingRuleEditType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableNoShowPostingRuleEditType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


