/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the YieldAdjustmentCodesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &YieldAdjustmentCodesCriteria{}

// YieldAdjustmentCodesCriteria Request object for creating new Yield AdjustmentCodes Configurations.
type YieldAdjustmentCodesCriteria struct {
	// Holds Yield AdjustmentCodes details.
	YieldAdjustmentCodes []YieldAdjustmentCodeType `json:"yieldAdjustmentCodes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewYieldAdjustmentCodesCriteria instantiates a new YieldAdjustmentCodesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewYieldAdjustmentCodesCriteria() *YieldAdjustmentCodesCriteria {
	this := YieldAdjustmentCodesCriteria{}
	return &this
}

// NewYieldAdjustmentCodesCriteriaWithDefaults instantiates a new YieldAdjustmentCodesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewYieldAdjustmentCodesCriteriaWithDefaults() *YieldAdjustmentCodesCriteria {
	this := YieldAdjustmentCodesCriteria{}
	return &this
}

// GetYieldAdjustmentCodes returns the YieldAdjustmentCodes field value if set, zero value otherwise.
func (o *YieldAdjustmentCodesCriteria) GetYieldAdjustmentCodes() []YieldAdjustmentCodeType {
	if o == nil || IsNil(o.YieldAdjustmentCodes) {
		var ret []YieldAdjustmentCodeType
		return ret
	}
	return o.YieldAdjustmentCodes
}

// GetYieldAdjustmentCodesOk returns a tuple with the YieldAdjustmentCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldAdjustmentCodesCriteria) GetYieldAdjustmentCodesOk() ([]YieldAdjustmentCodeType, bool) {
	if o == nil || IsNil(o.YieldAdjustmentCodes) {
		return nil, false
	}
	return o.YieldAdjustmentCodes, true
}

// HasYieldAdjustmentCodes returns a boolean if a field has been set.
func (o *YieldAdjustmentCodesCriteria) HasYieldAdjustmentCodes() bool {
	if o != nil && !IsNil(o.YieldAdjustmentCodes) {
		return true
	}

	return false
}

// SetYieldAdjustmentCodes gets a reference to the given []YieldAdjustmentCodeType and assigns it to the YieldAdjustmentCodes field.
func (o *YieldAdjustmentCodesCriteria) SetYieldAdjustmentCodes(v []YieldAdjustmentCodeType) {
	o.YieldAdjustmentCodes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *YieldAdjustmentCodesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldAdjustmentCodesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *YieldAdjustmentCodesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *YieldAdjustmentCodesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *YieldAdjustmentCodesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldAdjustmentCodesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *YieldAdjustmentCodesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *YieldAdjustmentCodesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o YieldAdjustmentCodesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o YieldAdjustmentCodesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.YieldAdjustmentCodes) {
		toSerialize["yieldAdjustmentCodes"] = o.YieldAdjustmentCodes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableYieldAdjustmentCodesCriteria struct {
	value *YieldAdjustmentCodesCriteria
	isSet bool
}

func (v NullableYieldAdjustmentCodesCriteria) Get() *YieldAdjustmentCodesCriteria {
	return v.value
}

func (v *NullableYieldAdjustmentCodesCriteria) Set(val *YieldAdjustmentCodesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableYieldAdjustmentCodesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableYieldAdjustmentCodesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableYieldAdjustmentCodesCriteria(val *YieldAdjustmentCodesCriteria) *NullableYieldAdjustmentCodesCriteria {
	return &NullableYieldAdjustmentCodesCriteria{value: val, isSet: true}
}

func (v NullableYieldAdjustmentCodesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableYieldAdjustmentCodesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


