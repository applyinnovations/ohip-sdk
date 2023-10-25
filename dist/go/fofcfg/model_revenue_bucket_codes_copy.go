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

// checks if the RevenueBucketCodesCopy type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RevenueBucketCodesCopy{}

// RevenueBucketCodesCopy struct for RevenueBucketCodesCopy
type RevenueBucketCodesCopy struct {
	Links []InstanceLink `json:"links,omitempty"`
	RevenueBucketCodes *ConfigCopyRevenueBucketCodeType `json:"revenueBucketCodes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRevenueBucketCodesCopy instantiates a new RevenueBucketCodesCopy object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRevenueBucketCodesCopy() *RevenueBucketCodesCopy {
	this := RevenueBucketCodesCopy{}
	return &this
}

// NewRevenueBucketCodesCopyWithDefaults instantiates a new RevenueBucketCodesCopy object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRevenueBucketCodesCopyWithDefaults() *RevenueBucketCodesCopy {
	this := RevenueBucketCodesCopy{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RevenueBucketCodesCopy) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueBucketCodesCopy) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RevenueBucketCodesCopy) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RevenueBucketCodesCopy) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRevenueBucketCodes returns the RevenueBucketCodes field value if set, zero value otherwise.
func (o *RevenueBucketCodesCopy) GetRevenueBucketCodes() ConfigCopyRevenueBucketCodeType {
	if o == nil || IsNil(o.RevenueBucketCodes) {
		var ret ConfigCopyRevenueBucketCodeType
		return ret
	}
	return *o.RevenueBucketCodes
}

// GetRevenueBucketCodesOk returns a tuple with the RevenueBucketCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueBucketCodesCopy) GetRevenueBucketCodesOk() (*ConfigCopyRevenueBucketCodeType, bool) {
	if o == nil || IsNil(o.RevenueBucketCodes) {
		return nil, false
	}
	return o.RevenueBucketCodes, true
}

// HasRevenueBucketCodes returns a boolean if a field has been set.
func (o *RevenueBucketCodesCopy) HasRevenueBucketCodes() bool {
	if o != nil && !IsNil(o.RevenueBucketCodes) {
		return true
	}

	return false
}

// SetRevenueBucketCodes gets a reference to the given ConfigCopyRevenueBucketCodeType and assigns it to the RevenueBucketCodes field.
func (o *RevenueBucketCodesCopy) SetRevenueBucketCodes(v ConfigCopyRevenueBucketCodeType) {
	o.RevenueBucketCodes = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RevenueBucketCodesCopy) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueBucketCodesCopy) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RevenueBucketCodesCopy) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RevenueBucketCodesCopy) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RevenueBucketCodesCopy) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RevenueBucketCodesCopy) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RevenueBucketCodes) {
		toSerialize["revenueBucketCodes"] = o.RevenueBucketCodes
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRevenueBucketCodesCopy struct {
	value *RevenueBucketCodesCopy
	isSet bool
}

func (v NullableRevenueBucketCodesCopy) Get() *RevenueBucketCodesCopy {
	return v.value
}

func (v *NullableRevenueBucketCodesCopy) Set(val *RevenueBucketCodesCopy) {
	v.value = val
	v.isSet = true
}

func (v NullableRevenueBucketCodesCopy) IsSet() bool {
	return v.isSet
}

func (v *NullableRevenueBucketCodesCopy) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRevenueBucketCodesCopy(val *RevenueBucketCodesCopy) *NullableRevenueBucketCodesCopy {
	return &NullableRevenueBucketCodesCopy{value: val, isSet: true}
}

func (v NullableRevenueBucketCodesCopy) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRevenueBucketCodesCopy) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


