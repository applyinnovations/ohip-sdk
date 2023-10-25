/*
OPERA Cloud Event Configuration API

This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evmcfg

import (
	"encoding/json"
)

// checks if the RevenueTypeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RevenueTypeType{}

// RevenueTypeType Base type provides information about Catering Revenue Types Configuration.
type RevenueTypeType struct {
	// Code is used to identify a Catering Revenue Type/Code.
	Code *string `json:"code,omitempty"`
	// Revenue Types display sequence Number
	DisplaySequence *float32 `json:"displaySequence,omitempty"`
	// Flag for Food and Beverages.
	FoodAndBeverage *bool `json:"foodAndBeverage,omitempty"`
	// Indicates if the Revenue type Code is inactive.
	Inactive *bool `json:"inactive,omitempty"`
	// List of Revenue details assoicated to a Revenue Type (Additional Details)
	RevenueDetails []RevenueTypeDetailType `json:"revenueDetails,omitempty"`
	// Revenue Group
	RevenueGroup *string `json:"revenueGroup,omitempty"`
	TranslatableDescription *TranslationTextType200 `json:"translatableDescription,omitempty"`
}

// NewRevenueTypeType instantiates a new RevenueTypeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRevenueTypeType() *RevenueTypeType {
	this := RevenueTypeType{}
	return &this
}

// NewRevenueTypeTypeWithDefaults instantiates a new RevenueTypeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRevenueTypeTypeWithDefaults() *RevenueTypeType {
	this := RevenueTypeType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *RevenueTypeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueTypeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *RevenueTypeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *RevenueTypeType) SetCode(v string) {
	o.Code = &v
}

// GetDisplaySequence returns the DisplaySequence field value if set, zero value otherwise.
func (o *RevenueTypeType) GetDisplaySequence() float32 {
	if o == nil || IsNil(o.DisplaySequence) {
		var ret float32
		return ret
	}
	return *o.DisplaySequence
}

// GetDisplaySequenceOk returns a tuple with the DisplaySequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueTypeType) GetDisplaySequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.DisplaySequence) {
		return nil, false
	}
	return o.DisplaySequence, true
}

// HasDisplaySequence returns a boolean if a field has been set.
func (o *RevenueTypeType) HasDisplaySequence() bool {
	if o != nil && !IsNil(o.DisplaySequence) {
		return true
	}

	return false
}

// SetDisplaySequence gets a reference to the given float32 and assigns it to the DisplaySequence field.
func (o *RevenueTypeType) SetDisplaySequence(v float32) {
	o.DisplaySequence = &v
}

// GetFoodAndBeverage returns the FoodAndBeverage field value if set, zero value otherwise.
func (o *RevenueTypeType) GetFoodAndBeverage() bool {
	if o == nil || IsNil(o.FoodAndBeverage) {
		var ret bool
		return ret
	}
	return *o.FoodAndBeverage
}

// GetFoodAndBeverageOk returns a tuple with the FoodAndBeverage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueTypeType) GetFoodAndBeverageOk() (*bool, bool) {
	if o == nil || IsNil(o.FoodAndBeverage) {
		return nil, false
	}
	return o.FoodAndBeverage, true
}

// HasFoodAndBeverage returns a boolean if a field has been set.
func (o *RevenueTypeType) HasFoodAndBeverage() bool {
	if o != nil && !IsNil(o.FoodAndBeverage) {
		return true
	}

	return false
}

// SetFoodAndBeverage gets a reference to the given bool and assigns it to the FoodAndBeverage field.
func (o *RevenueTypeType) SetFoodAndBeverage(v bool) {
	o.FoodAndBeverage = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *RevenueTypeType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueTypeType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *RevenueTypeType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *RevenueTypeType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetRevenueDetails returns the RevenueDetails field value if set, zero value otherwise.
func (o *RevenueTypeType) GetRevenueDetails() []RevenueTypeDetailType {
	if o == nil || IsNil(o.RevenueDetails) {
		var ret []RevenueTypeDetailType
		return ret
	}
	return o.RevenueDetails
}

// GetRevenueDetailsOk returns a tuple with the RevenueDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueTypeType) GetRevenueDetailsOk() ([]RevenueTypeDetailType, bool) {
	if o == nil || IsNil(o.RevenueDetails) {
		return nil, false
	}
	return o.RevenueDetails, true
}

// HasRevenueDetails returns a boolean if a field has been set.
func (o *RevenueTypeType) HasRevenueDetails() bool {
	if o != nil && !IsNil(o.RevenueDetails) {
		return true
	}

	return false
}

// SetRevenueDetails gets a reference to the given []RevenueTypeDetailType and assigns it to the RevenueDetails field.
func (o *RevenueTypeType) SetRevenueDetails(v []RevenueTypeDetailType) {
	o.RevenueDetails = v
}

// GetRevenueGroup returns the RevenueGroup field value if set, zero value otherwise.
func (o *RevenueTypeType) GetRevenueGroup() string {
	if o == nil || IsNil(o.RevenueGroup) {
		var ret string
		return ret
	}
	return *o.RevenueGroup
}

// GetRevenueGroupOk returns a tuple with the RevenueGroup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueTypeType) GetRevenueGroupOk() (*string, bool) {
	if o == nil || IsNil(o.RevenueGroup) {
		return nil, false
	}
	return o.RevenueGroup, true
}

// HasRevenueGroup returns a boolean if a field has been set.
func (o *RevenueTypeType) HasRevenueGroup() bool {
	if o != nil && !IsNil(o.RevenueGroup) {
		return true
	}

	return false
}

// SetRevenueGroup gets a reference to the given string and assigns it to the RevenueGroup field.
func (o *RevenueTypeType) SetRevenueGroup(v string) {
	o.RevenueGroup = &v
}

// GetTranslatableDescription returns the TranslatableDescription field value if set, zero value otherwise.
func (o *RevenueTypeType) GetTranslatableDescription() TranslationTextType200 {
	if o == nil || IsNil(o.TranslatableDescription) {
		var ret TranslationTextType200
		return ret
	}
	return *o.TranslatableDescription
}

// GetTranslatableDescriptionOk returns a tuple with the TranslatableDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueTypeType) GetTranslatableDescriptionOk() (*TranslationTextType200, bool) {
	if o == nil || IsNil(o.TranslatableDescription) {
		return nil, false
	}
	return o.TranslatableDescription, true
}

// HasTranslatableDescription returns a boolean if a field has been set.
func (o *RevenueTypeType) HasTranslatableDescription() bool {
	if o != nil && !IsNil(o.TranslatableDescription) {
		return true
	}

	return false
}

// SetTranslatableDescription gets a reference to the given TranslationTextType200 and assigns it to the TranslatableDescription field.
func (o *RevenueTypeType) SetTranslatableDescription(v TranslationTextType200) {
	o.TranslatableDescription = &v
}

func (o RevenueTypeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RevenueTypeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.DisplaySequence) {
		toSerialize["displaySequence"] = o.DisplaySequence
	}
	if !IsNil(o.FoodAndBeverage) {
		toSerialize["foodAndBeverage"] = o.FoodAndBeverage
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.RevenueDetails) {
		toSerialize["revenueDetails"] = o.RevenueDetails
	}
	if !IsNil(o.RevenueGroup) {
		toSerialize["revenueGroup"] = o.RevenueGroup
	}
	if !IsNil(o.TranslatableDescription) {
		toSerialize["translatableDescription"] = o.TranslatableDescription
	}
	return toSerialize, nil
}

type NullableRevenueTypeType struct {
	value *RevenueTypeType
	isSet bool
}

func (v NullableRevenueTypeType) Get() *RevenueTypeType {
	return v.value
}

func (v *NullableRevenueTypeType) Set(val *RevenueTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableRevenueTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableRevenueTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRevenueTypeType(val *RevenueTypeType) *NullableRevenueTypeType {
	return &NullableRevenueTypeType{value: val, isSet: true}
}

func (v NullableRevenueTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRevenueTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


