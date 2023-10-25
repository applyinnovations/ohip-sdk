/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the BlockGridInvType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockGridInvType{}

// BlockGridInvType Indicates the inventory values ( occupancy or availability ) per person occupancy.
type BlockGridInvType struct {
	// Indicates the cutoff date.Date when inventory left in the block will be cut-off.
	CutoffDate *string `json:"cutoffDate,omitempty"`
	// Indicates the four person inventory value ( occupancy or availability ).
	FourPerson *int32 `json:"fourPerson,omitempty"`
	// Indicates the one person inventory value ( occupancy or availability ).
	OnePerson *int32 `json:"onePerson,omitempty"`
	// Indicates the sell limit
	SellLimit *int32 `json:"sellLimit,omitempty"`
	// Indicates the three person inventory value ( occupancy or availability ).
	ThreePerson *int32 `json:"threePerson,omitempty"`
	// Indicates the two person inventory value ( occupancy or availability ).
	TwoPerson *int32 `json:"twoPerson,omitempty"`
}

// NewBlockGridInvType instantiates a new BlockGridInvType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockGridInvType() *BlockGridInvType {
	this := BlockGridInvType{}
	return &this
}

// NewBlockGridInvTypeWithDefaults instantiates a new BlockGridInvType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockGridInvTypeWithDefaults() *BlockGridInvType {
	this := BlockGridInvType{}
	return &this
}

// GetCutoffDate returns the CutoffDate field value if set, zero value otherwise.
func (o *BlockGridInvType) GetCutoffDate() string {
	if o == nil || IsNil(o.CutoffDate) {
		var ret string
		return ret
	}
	return *o.CutoffDate
}

// GetCutoffDateOk returns a tuple with the CutoffDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockGridInvType) GetCutoffDateOk() (*string, bool) {
	if o == nil || IsNil(o.CutoffDate) {
		return nil, false
	}
	return o.CutoffDate, true
}

// HasCutoffDate returns a boolean if a field has been set.
func (o *BlockGridInvType) HasCutoffDate() bool {
	if o != nil && !IsNil(o.CutoffDate) {
		return true
	}

	return false
}

// SetCutoffDate gets a reference to the given string and assigns it to the CutoffDate field.
func (o *BlockGridInvType) SetCutoffDate(v string) {
	o.CutoffDate = &v
}

// GetFourPerson returns the FourPerson field value if set, zero value otherwise.
func (o *BlockGridInvType) GetFourPerson() int32 {
	if o == nil || IsNil(o.FourPerson) {
		var ret int32
		return ret
	}
	return *o.FourPerson
}

// GetFourPersonOk returns a tuple with the FourPerson field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockGridInvType) GetFourPersonOk() (*int32, bool) {
	if o == nil || IsNil(o.FourPerson) {
		return nil, false
	}
	return o.FourPerson, true
}

// HasFourPerson returns a boolean if a field has been set.
func (o *BlockGridInvType) HasFourPerson() bool {
	if o != nil && !IsNil(o.FourPerson) {
		return true
	}

	return false
}

// SetFourPerson gets a reference to the given int32 and assigns it to the FourPerson field.
func (o *BlockGridInvType) SetFourPerson(v int32) {
	o.FourPerson = &v
}

// GetOnePerson returns the OnePerson field value if set, zero value otherwise.
func (o *BlockGridInvType) GetOnePerson() int32 {
	if o == nil || IsNil(o.OnePerson) {
		var ret int32
		return ret
	}
	return *o.OnePerson
}

// GetOnePersonOk returns a tuple with the OnePerson field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockGridInvType) GetOnePersonOk() (*int32, bool) {
	if o == nil || IsNil(o.OnePerson) {
		return nil, false
	}
	return o.OnePerson, true
}

// HasOnePerson returns a boolean if a field has been set.
func (o *BlockGridInvType) HasOnePerson() bool {
	if o != nil && !IsNil(o.OnePerson) {
		return true
	}

	return false
}

// SetOnePerson gets a reference to the given int32 and assigns it to the OnePerson field.
func (o *BlockGridInvType) SetOnePerson(v int32) {
	o.OnePerson = &v
}

// GetSellLimit returns the SellLimit field value if set, zero value otherwise.
func (o *BlockGridInvType) GetSellLimit() int32 {
	if o == nil || IsNil(o.SellLimit) {
		var ret int32
		return ret
	}
	return *o.SellLimit
}

// GetSellLimitOk returns a tuple with the SellLimit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockGridInvType) GetSellLimitOk() (*int32, bool) {
	if o == nil || IsNil(o.SellLimit) {
		return nil, false
	}
	return o.SellLimit, true
}

// HasSellLimit returns a boolean if a field has been set.
func (o *BlockGridInvType) HasSellLimit() bool {
	if o != nil && !IsNil(o.SellLimit) {
		return true
	}

	return false
}

// SetSellLimit gets a reference to the given int32 and assigns it to the SellLimit field.
func (o *BlockGridInvType) SetSellLimit(v int32) {
	o.SellLimit = &v
}

// GetThreePerson returns the ThreePerson field value if set, zero value otherwise.
func (o *BlockGridInvType) GetThreePerson() int32 {
	if o == nil || IsNil(o.ThreePerson) {
		var ret int32
		return ret
	}
	return *o.ThreePerson
}

// GetThreePersonOk returns a tuple with the ThreePerson field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockGridInvType) GetThreePersonOk() (*int32, bool) {
	if o == nil || IsNil(o.ThreePerson) {
		return nil, false
	}
	return o.ThreePerson, true
}

// HasThreePerson returns a boolean if a field has been set.
func (o *BlockGridInvType) HasThreePerson() bool {
	if o != nil && !IsNil(o.ThreePerson) {
		return true
	}

	return false
}

// SetThreePerson gets a reference to the given int32 and assigns it to the ThreePerson field.
func (o *BlockGridInvType) SetThreePerson(v int32) {
	o.ThreePerson = &v
}

// GetTwoPerson returns the TwoPerson field value if set, zero value otherwise.
func (o *BlockGridInvType) GetTwoPerson() int32 {
	if o == nil || IsNil(o.TwoPerson) {
		var ret int32
		return ret
	}
	return *o.TwoPerson
}

// GetTwoPersonOk returns a tuple with the TwoPerson field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockGridInvType) GetTwoPersonOk() (*int32, bool) {
	if o == nil || IsNil(o.TwoPerson) {
		return nil, false
	}
	return o.TwoPerson, true
}

// HasTwoPerson returns a boolean if a field has been set.
func (o *BlockGridInvType) HasTwoPerson() bool {
	if o != nil && !IsNil(o.TwoPerson) {
		return true
	}

	return false
}

// SetTwoPerson gets a reference to the given int32 and assigns it to the TwoPerson field.
func (o *BlockGridInvType) SetTwoPerson(v int32) {
	o.TwoPerson = &v
}

func (o BlockGridInvType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockGridInvType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CutoffDate) {
		toSerialize["cutoffDate"] = o.CutoffDate
	}
	if !IsNil(o.FourPerson) {
		toSerialize["fourPerson"] = o.FourPerson
	}
	if !IsNil(o.OnePerson) {
		toSerialize["onePerson"] = o.OnePerson
	}
	if !IsNil(o.SellLimit) {
		toSerialize["sellLimit"] = o.SellLimit
	}
	if !IsNil(o.ThreePerson) {
		toSerialize["threePerson"] = o.ThreePerson
	}
	if !IsNil(o.TwoPerson) {
		toSerialize["twoPerson"] = o.TwoPerson
	}
	return toSerialize, nil
}

type NullableBlockGridInvType struct {
	value *BlockGridInvType
	isSet bool
}

func (v NullableBlockGridInvType) Get() *BlockGridInvType {
	return v.value
}

func (v *NullableBlockGridInvType) Set(val *BlockGridInvType) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockGridInvType) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockGridInvType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockGridInvType(val *BlockGridInvType) *NullableBlockGridInvType {
	return &NullableBlockGridInvType{value: val, isSet: true}
}

func (v NullableBlockGridInvType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockGridInvType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


