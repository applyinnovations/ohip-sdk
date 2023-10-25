/*
OPERA Cloud Activity API

APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package act

import (
	"encoding/json"
)

// checks if the ResGuaranteeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResGuaranteeType{}

// ResGuaranteeType Validations type record returned after Validations are done.
type ResGuaranteeType struct {
	// Guarantee Code.
	GuaranteeCode *string `json:"guaranteeCode,omitempty"`
	// Guarantee Code.
	OnHold *bool `json:"onHold,omitempty"`
	// Guarantee Code.
	ShortDescription *string `json:"shortDescription,omitempty"`
}

// NewResGuaranteeType instantiates a new ResGuaranteeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResGuaranteeType() *ResGuaranteeType {
	this := ResGuaranteeType{}
	return &this
}

// NewResGuaranteeTypeWithDefaults instantiates a new ResGuaranteeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResGuaranteeTypeWithDefaults() *ResGuaranteeType {
	this := ResGuaranteeType{}
	return &this
}

// GetGuaranteeCode returns the GuaranteeCode field value if set, zero value otherwise.
func (o *ResGuaranteeType) GetGuaranteeCode() string {
	if o == nil || IsNil(o.GuaranteeCode) {
		var ret string
		return ret
	}
	return *o.GuaranteeCode
}

// GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuaranteeType) GetGuaranteeCodeOk() (*string, bool) {
	if o == nil || IsNil(o.GuaranteeCode) {
		return nil, false
	}
	return o.GuaranteeCode, true
}

// HasGuaranteeCode returns a boolean if a field has been set.
func (o *ResGuaranteeType) HasGuaranteeCode() bool {
	if o != nil && !IsNil(o.GuaranteeCode) {
		return true
	}

	return false
}

// SetGuaranteeCode gets a reference to the given string and assigns it to the GuaranteeCode field.
func (o *ResGuaranteeType) SetGuaranteeCode(v string) {
	o.GuaranteeCode = &v
}

// GetOnHold returns the OnHold field value if set, zero value otherwise.
func (o *ResGuaranteeType) GetOnHold() bool {
	if o == nil || IsNil(o.OnHold) {
		var ret bool
		return ret
	}
	return *o.OnHold
}

// GetOnHoldOk returns a tuple with the OnHold field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuaranteeType) GetOnHoldOk() (*bool, bool) {
	if o == nil || IsNil(o.OnHold) {
		return nil, false
	}
	return o.OnHold, true
}

// HasOnHold returns a boolean if a field has been set.
func (o *ResGuaranteeType) HasOnHold() bool {
	if o != nil && !IsNil(o.OnHold) {
		return true
	}

	return false
}

// SetOnHold gets a reference to the given bool and assigns it to the OnHold field.
func (o *ResGuaranteeType) SetOnHold(v bool) {
	o.OnHold = &v
}

// GetShortDescription returns the ShortDescription field value if set, zero value otherwise.
func (o *ResGuaranteeType) GetShortDescription() string {
	if o == nil || IsNil(o.ShortDescription) {
		var ret string
		return ret
	}
	return *o.ShortDescription
}

// GetShortDescriptionOk returns a tuple with the ShortDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuaranteeType) GetShortDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.ShortDescription) {
		return nil, false
	}
	return o.ShortDescription, true
}

// HasShortDescription returns a boolean if a field has been set.
func (o *ResGuaranteeType) HasShortDescription() bool {
	if o != nil && !IsNil(o.ShortDescription) {
		return true
	}

	return false
}

// SetShortDescription gets a reference to the given string and assigns it to the ShortDescription field.
func (o *ResGuaranteeType) SetShortDescription(v string) {
	o.ShortDescription = &v
}

func (o ResGuaranteeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResGuaranteeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GuaranteeCode) {
		toSerialize["guaranteeCode"] = o.GuaranteeCode
	}
	if !IsNil(o.OnHold) {
		toSerialize["onHold"] = o.OnHold
	}
	if !IsNil(o.ShortDescription) {
		toSerialize["shortDescription"] = o.ShortDescription
	}
	return toSerialize, nil
}

type NullableResGuaranteeType struct {
	value *ResGuaranteeType
	isSet bool
}

func (v NullableResGuaranteeType) Get() *ResGuaranteeType {
	return v.value
}

func (v *NullableResGuaranteeType) Set(val *ResGuaranteeType) {
	v.value = val
	v.isSet = true
}

func (v NullableResGuaranteeType) IsSet() bool {
	return v.isSet
}

func (v *NullableResGuaranteeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResGuaranteeType(val *ResGuaranteeType) *NullableResGuaranteeType {
	return &NullableResGuaranteeType{value: val, isSet: true}
}

func (v NullableResGuaranteeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResGuaranteeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


