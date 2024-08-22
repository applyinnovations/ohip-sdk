/*
OPERA Cloud Block Reservation Asynchronous API

APIs to cater Block Reservation related asynchronous functionality in OPERA.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blkasync

import (
	"encoding/json"
)

// checks if the BlockGridRatesType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockGridRatesType{}

// BlockGridRatesType Indicates the rate amount values per person occupancy.
type BlockGridRatesType struct {
	// Indicates the extra person occupancy rate amount.
	ExtraPerson *float32 `json:"extraPerson,omitempty"`
	// Indicates the four person occupancy rate amount.
	FourPerson *float32 `json:"fourPerson,omitempty"`
	// Indicates the one person occupancy rate amount.
	OnePerson *float32 `json:"onePerson,omitempty"`
	// Indicates the three person occupancy rate amount.
	ThreePerson *float32 `json:"threePerson,omitempty"`
	// Indicates the two person occupancy rate amount.
	TwoPerson *float32 `json:"twoPerson,omitempty"`
}

// NewBlockGridRatesType instantiates a new BlockGridRatesType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockGridRatesType() *BlockGridRatesType {
	this := BlockGridRatesType{}
	return &this
}

// NewBlockGridRatesTypeWithDefaults instantiates a new BlockGridRatesType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockGridRatesTypeWithDefaults() *BlockGridRatesType {
	this := BlockGridRatesType{}
	return &this
}

// GetExtraPerson returns the ExtraPerson field value if set, zero value otherwise.
func (o *BlockGridRatesType) GetExtraPerson() float32 {
	if o == nil || IsNil(o.ExtraPerson) {
		var ret float32
		return ret
	}
	return *o.ExtraPerson
}

// GetExtraPersonOk returns a tuple with the ExtraPerson field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockGridRatesType) GetExtraPersonOk() (*float32, bool) {
	if o == nil || IsNil(o.ExtraPerson) {
		return nil, false
	}
	return o.ExtraPerson, true
}

// HasExtraPerson returns a boolean if a field has been set.
func (o *BlockGridRatesType) HasExtraPerson() bool {
	if o != nil && !IsNil(o.ExtraPerson) {
		return true
	}

	return false
}

// SetExtraPerson gets a reference to the given float32 and assigns it to the ExtraPerson field.
func (o *BlockGridRatesType) SetExtraPerson(v float32) {
	o.ExtraPerson = &v
}

// GetFourPerson returns the FourPerson field value if set, zero value otherwise.
func (o *BlockGridRatesType) GetFourPerson() float32 {
	if o == nil || IsNil(o.FourPerson) {
		var ret float32
		return ret
	}
	return *o.FourPerson
}

// GetFourPersonOk returns a tuple with the FourPerson field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockGridRatesType) GetFourPersonOk() (*float32, bool) {
	if o == nil || IsNil(o.FourPerson) {
		return nil, false
	}
	return o.FourPerson, true
}

// HasFourPerson returns a boolean if a field has been set.
func (o *BlockGridRatesType) HasFourPerson() bool {
	if o != nil && !IsNil(o.FourPerson) {
		return true
	}

	return false
}

// SetFourPerson gets a reference to the given float32 and assigns it to the FourPerson field.
func (o *BlockGridRatesType) SetFourPerson(v float32) {
	o.FourPerson = &v
}

// GetOnePerson returns the OnePerson field value if set, zero value otherwise.
func (o *BlockGridRatesType) GetOnePerson() float32 {
	if o == nil || IsNil(o.OnePerson) {
		var ret float32
		return ret
	}
	return *o.OnePerson
}

// GetOnePersonOk returns a tuple with the OnePerson field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockGridRatesType) GetOnePersonOk() (*float32, bool) {
	if o == nil || IsNil(o.OnePerson) {
		return nil, false
	}
	return o.OnePerson, true
}

// HasOnePerson returns a boolean if a field has been set.
func (o *BlockGridRatesType) HasOnePerson() bool {
	if o != nil && !IsNil(o.OnePerson) {
		return true
	}

	return false
}

// SetOnePerson gets a reference to the given float32 and assigns it to the OnePerson field.
func (o *BlockGridRatesType) SetOnePerson(v float32) {
	o.OnePerson = &v
}

// GetThreePerson returns the ThreePerson field value if set, zero value otherwise.
func (o *BlockGridRatesType) GetThreePerson() float32 {
	if o == nil || IsNil(o.ThreePerson) {
		var ret float32
		return ret
	}
	return *o.ThreePerson
}

// GetThreePersonOk returns a tuple with the ThreePerson field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockGridRatesType) GetThreePersonOk() (*float32, bool) {
	if o == nil || IsNil(o.ThreePerson) {
		return nil, false
	}
	return o.ThreePerson, true
}

// HasThreePerson returns a boolean if a field has been set.
func (o *BlockGridRatesType) HasThreePerson() bool {
	if o != nil && !IsNil(o.ThreePerson) {
		return true
	}

	return false
}

// SetThreePerson gets a reference to the given float32 and assigns it to the ThreePerson field.
func (o *BlockGridRatesType) SetThreePerson(v float32) {
	o.ThreePerson = &v
}

// GetTwoPerson returns the TwoPerson field value if set, zero value otherwise.
func (o *BlockGridRatesType) GetTwoPerson() float32 {
	if o == nil || IsNil(o.TwoPerson) {
		var ret float32
		return ret
	}
	return *o.TwoPerson
}

// GetTwoPersonOk returns a tuple with the TwoPerson field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockGridRatesType) GetTwoPersonOk() (*float32, bool) {
	if o == nil || IsNil(o.TwoPerson) {
		return nil, false
	}
	return o.TwoPerson, true
}

// HasTwoPerson returns a boolean if a field has been set.
func (o *BlockGridRatesType) HasTwoPerson() bool {
	if o != nil && !IsNil(o.TwoPerson) {
		return true
	}

	return false
}

// SetTwoPerson gets a reference to the given float32 and assigns it to the TwoPerson field.
func (o *BlockGridRatesType) SetTwoPerson(v float32) {
	o.TwoPerson = &v
}

func (o BlockGridRatesType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockGridRatesType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ExtraPerson) {
		toSerialize["extraPerson"] = o.ExtraPerson
	}
	if !IsNil(o.FourPerson) {
		toSerialize["fourPerson"] = o.FourPerson
	}
	if !IsNil(o.OnePerson) {
		toSerialize["onePerson"] = o.OnePerson
	}
	if !IsNil(o.ThreePerson) {
		toSerialize["threePerson"] = o.ThreePerson
	}
	if !IsNil(o.TwoPerson) {
		toSerialize["twoPerson"] = o.TwoPerson
	}
	return toSerialize, nil
}

type NullableBlockGridRatesType struct {
	value *BlockGridRatesType
	isSet bool
}

func (v NullableBlockGridRatesType) Get() *BlockGridRatesType {
	return v.value
}

func (v *NullableBlockGridRatesType) Set(val *BlockGridRatesType) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockGridRatesType) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockGridRatesType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockGridRatesType(val *BlockGridRatesType) *NullableBlockGridRatesType {
	return &NullableBlockGridRatesType{value: val, isSet: true}
}

func (v NullableBlockGridRatesType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockGridRatesType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


