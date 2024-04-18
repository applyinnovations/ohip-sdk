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

// checks if the RevenueBucketTypesCopy type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RevenueBucketTypesCopy{}

// RevenueBucketTypesCopy struct for RevenueBucketTypesCopy
type RevenueBucketTypesCopy struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of the Revenue Bucket Types to be copied.
	RevenueBucketTypes []CopyConfigurationCodeType `json:"revenueBucketTypes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRevenueBucketTypesCopy instantiates a new RevenueBucketTypesCopy object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRevenueBucketTypesCopy() *RevenueBucketTypesCopy {
	this := RevenueBucketTypesCopy{}
	return &this
}

// NewRevenueBucketTypesCopyWithDefaults instantiates a new RevenueBucketTypesCopy object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRevenueBucketTypesCopyWithDefaults() *RevenueBucketTypesCopy {
	this := RevenueBucketTypesCopy{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RevenueBucketTypesCopy) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueBucketTypesCopy) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RevenueBucketTypesCopy) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RevenueBucketTypesCopy) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRevenueBucketTypes returns the RevenueBucketTypes field value if set, zero value otherwise.
func (o *RevenueBucketTypesCopy) GetRevenueBucketTypes() []CopyConfigurationCodeType {
	if o == nil || IsNil(o.RevenueBucketTypes) {
		var ret []CopyConfigurationCodeType
		return ret
	}
	return o.RevenueBucketTypes
}

// GetRevenueBucketTypesOk returns a tuple with the RevenueBucketTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueBucketTypesCopy) GetRevenueBucketTypesOk() ([]CopyConfigurationCodeType, bool) {
	if o == nil || IsNil(o.RevenueBucketTypes) {
		return nil, false
	}
	return o.RevenueBucketTypes, true
}

// HasRevenueBucketTypes returns a boolean if a field has been set.
func (o *RevenueBucketTypesCopy) HasRevenueBucketTypes() bool {
	if o != nil && !IsNil(o.RevenueBucketTypes) {
		return true
	}

	return false
}

// SetRevenueBucketTypes gets a reference to the given []CopyConfigurationCodeType and assigns it to the RevenueBucketTypes field.
func (o *RevenueBucketTypesCopy) SetRevenueBucketTypes(v []CopyConfigurationCodeType) {
	o.RevenueBucketTypes = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RevenueBucketTypesCopy) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueBucketTypesCopy) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RevenueBucketTypesCopy) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RevenueBucketTypesCopy) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RevenueBucketTypesCopy) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RevenueBucketTypesCopy) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RevenueBucketTypes) {
		toSerialize["revenueBucketTypes"] = o.RevenueBucketTypes
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRevenueBucketTypesCopy struct {
	value *RevenueBucketTypesCopy
	isSet bool
}

func (v NullableRevenueBucketTypesCopy) Get() *RevenueBucketTypesCopy {
	return v.value
}

func (v *NullableRevenueBucketTypesCopy) Set(val *RevenueBucketTypesCopy) {
	v.value = val
	v.isSet = true
}

func (v NullableRevenueBucketTypesCopy) IsSet() bool {
	return v.isSet
}

func (v *NullableRevenueBucketTypesCopy) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRevenueBucketTypesCopy(val *RevenueBucketTypesCopy) *NullableRevenueBucketTypesCopy {
	return &NullableRevenueBucketTypesCopy{value: val, isSet: true}
}

func (v NullableRevenueBucketTypesCopy) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRevenueBucketTypesCopy) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

