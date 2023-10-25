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

// checks if the BudgetForecastInformationBase type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BudgetForecastInformationBase{}

// BudgetForecastInformationBase struct for BudgetForecastInformationBase
type BudgetForecastInformationBase struct {
	BudgetForecastInformation *BudgetForecastInformationBaseType `json:"budgetForecastInformation,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBudgetForecastInformationBase instantiates a new BudgetForecastInformationBase object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBudgetForecastInformationBase() *BudgetForecastInformationBase {
	this := BudgetForecastInformationBase{}
	return &this
}

// NewBudgetForecastInformationBaseWithDefaults instantiates a new BudgetForecastInformationBase object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBudgetForecastInformationBaseWithDefaults() *BudgetForecastInformationBase {
	this := BudgetForecastInformationBase{}
	return &this
}

// GetBudgetForecastInformation returns the BudgetForecastInformation field value if set, zero value otherwise.
func (o *BudgetForecastInformationBase) GetBudgetForecastInformation() BudgetForecastInformationBaseType {
	if o == nil || IsNil(o.BudgetForecastInformation) {
		var ret BudgetForecastInformationBaseType
		return ret
	}
	return *o.BudgetForecastInformation
}

// GetBudgetForecastInformationOk returns a tuple with the BudgetForecastInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BudgetForecastInformationBase) GetBudgetForecastInformationOk() (*BudgetForecastInformationBaseType, bool) {
	if o == nil || IsNil(o.BudgetForecastInformation) {
		return nil, false
	}
	return o.BudgetForecastInformation, true
}

// HasBudgetForecastInformation returns a boolean if a field has been set.
func (o *BudgetForecastInformationBase) HasBudgetForecastInformation() bool {
	if o != nil && !IsNil(o.BudgetForecastInformation) {
		return true
	}

	return false
}

// SetBudgetForecastInformation gets a reference to the given BudgetForecastInformationBaseType and assigns it to the BudgetForecastInformation field.
func (o *BudgetForecastInformationBase) SetBudgetForecastInformation(v BudgetForecastInformationBaseType) {
	o.BudgetForecastInformation = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BudgetForecastInformationBase) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BudgetForecastInformationBase) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BudgetForecastInformationBase) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BudgetForecastInformationBase) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BudgetForecastInformationBase) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BudgetForecastInformationBase) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BudgetForecastInformationBase) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BudgetForecastInformationBase) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BudgetForecastInformationBase) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BudgetForecastInformationBase) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BudgetForecastInformation) {
		toSerialize["budgetForecastInformation"] = o.BudgetForecastInformation
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBudgetForecastInformationBase struct {
	value *BudgetForecastInformationBase
	isSet bool
}

func (v NullableBudgetForecastInformationBase) Get() *BudgetForecastInformationBase {
	return v.value
}

func (v *NullableBudgetForecastInformationBase) Set(val *BudgetForecastInformationBase) {
	v.value = val
	v.isSet = true
}

func (v NullableBudgetForecastInformationBase) IsSet() bool {
	return v.isSet
}

func (v *NullableBudgetForecastInformationBase) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBudgetForecastInformationBase(val *BudgetForecastInformationBase) *NullableBudgetForecastInformationBase {
	return &NullableBudgetForecastInformationBase{value: val, isSet: true}
}

func (v NullableBudgetForecastInformationBase) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBudgetForecastInformationBase) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


