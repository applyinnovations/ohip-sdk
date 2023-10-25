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

// checks if the CardRangeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CardRangeType{}

// CardRangeType Card number start and end range.
type CardRangeType struct {
	// Starting range of the card.
	From *string `json:"from,omitempty"`
	// End range of the card.
	To *string `json:"to,omitempty"`
}

// NewCardRangeType instantiates a new CardRangeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCardRangeType() *CardRangeType {
	this := CardRangeType{}
	return &this
}

// NewCardRangeTypeWithDefaults instantiates a new CardRangeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCardRangeTypeWithDefaults() *CardRangeType {
	this := CardRangeType{}
	return &this
}

// GetFrom returns the From field value if set, zero value otherwise.
func (o *CardRangeType) GetFrom() string {
	if o == nil || IsNil(o.From) {
		var ret string
		return ret
	}
	return *o.From
}

// GetFromOk returns a tuple with the From field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CardRangeType) GetFromOk() (*string, bool) {
	if o == nil || IsNil(o.From) {
		return nil, false
	}
	return o.From, true
}

// HasFrom returns a boolean if a field has been set.
func (o *CardRangeType) HasFrom() bool {
	if o != nil && !IsNil(o.From) {
		return true
	}

	return false
}

// SetFrom gets a reference to the given string and assigns it to the From field.
func (o *CardRangeType) SetFrom(v string) {
	o.From = &v
}

// GetTo returns the To field value if set, zero value otherwise.
func (o *CardRangeType) GetTo() string {
	if o == nil || IsNil(o.To) {
		var ret string
		return ret
	}
	return *o.To
}

// GetToOk returns a tuple with the To field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CardRangeType) GetToOk() (*string, bool) {
	if o == nil || IsNil(o.To) {
		return nil, false
	}
	return o.To, true
}

// HasTo returns a boolean if a field has been set.
func (o *CardRangeType) HasTo() bool {
	if o != nil && !IsNil(o.To) {
		return true
	}

	return false
}

// SetTo gets a reference to the given string and assigns it to the To field.
func (o *CardRangeType) SetTo(v string) {
	o.To = &v
}

func (o CardRangeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CardRangeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.From) {
		toSerialize["from"] = o.From
	}
	if !IsNil(o.To) {
		toSerialize["to"] = o.To
	}
	return toSerialize, nil
}

type NullableCardRangeType struct {
	value *CardRangeType
	isSet bool
}

func (v NullableCardRangeType) Get() *CardRangeType {
	return v.value
}

func (v *NullableCardRangeType) Set(val *CardRangeType) {
	v.value = val
	v.isSet = true
}

func (v NullableCardRangeType) IsSet() bool {
	return v.isSet
}

func (v *NullableCardRangeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCardRangeType(val *CardRangeType) *NullableCardRangeType {
	return &NullableCardRangeType{value: val, isSet: true}
}

func (v NullableCardRangeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCardRangeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


