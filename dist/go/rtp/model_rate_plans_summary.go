/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the RatePlansSummary type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RatePlansSummary{}

// RatePlansSummary Response object to fetch rate plans summary information.
type RatePlansSummary struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Refer to Generic common types document.
	MasterInfoList []MasterInfoType `json:"masterInfoList,omitempty"`
	RatePlanShortInfoList *RatePlansSummaryRatePlanShortInfoList `json:"ratePlanShortInfoList,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRatePlansSummary instantiates a new RatePlansSummary object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRatePlansSummary() *RatePlansSummary {
	this := RatePlansSummary{}
	return &this
}

// NewRatePlansSummaryWithDefaults instantiates a new RatePlansSummary object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatePlansSummaryWithDefaults() *RatePlansSummary {
	this := RatePlansSummary{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RatePlansSummary) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlansSummary) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RatePlansSummary) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RatePlansSummary) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMasterInfoList returns the MasterInfoList field value if set, zero value otherwise.
func (o *RatePlansSummary) GetMasterInfoList() []MasterInfoType {
	if o == nil || IsNil(o.MasterInfoList) {
		var ret []MasterInfoType
		return ret
	}
	return o.MasterInfoList
}

// GetMasterInfoListOk returns a tuple with the MasterInfoList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlansSummary) GetMasterInfoListOk() ([]MasterInfoType, bool) {
	if o == nil || IsNil(o.MasterInfoList) {
		return nil, false
	}
	return o.MasterInfoList, true
}

// HasMasterInfoList returns a boolean if a field has been set.
func (o *RatePlansSummary) HasMasterInfoList() bool {
	if o != nil && !IsNil(o.MasterInfoList) {
		return true
	}

	return false
}

// SetMasterInfoList gets a reference to the given []MasterInfoType and assigns it to the MasterInfoList field.
func (o *RatePlansSummary) SetMasterInfoList(v []MasterInfoType) {
	o.MasterInfoList = v
}

// GetRatePlanShortInfoList returns the RatePlanShortInfoList field value if set, zero value otherwise.
func (o *RatePlansSummary) GetRatePlanShortInfoList() RatePlansSummaryRatePlanShortInfoList {
	if o == nil || IsNil(o.RatePlanShortInfoList) {
		var ret RatePlansSummaryRatePlanShortInfoList
		return ret
	}
	return *o.RatePlanShortInfoList
}

// GetRatePlanShortInfoListOk returns a tuple with the RatePlanShortInfoList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlansSummary) GetRatePlanShortInfoListOk() (*RatePlansSummaryRatePlanShortInfoList, bool) {
	if o == nil || IsNil(o.RatePlanShortInfoList) {
		return nil, false
	}
	return o.RatePlanShortInfoList, true
}

// HasRatePlanShortInfoList returns a boolean if a field has been set.
func (o *RatePlansSummary) HasRatePlanShortInfoList() bool {
	if o != nil && !IsNil(o.RatePlanShortInfoList) {
		return true
	}

	return false
}

// SetRatePlanShortInfoList gets a reference to the given RatePlansSummaryRatePlanShortInfoList and assigns it to the RatePlanShortInfoList field.
func (o *RatePlansSummary) SetRatePlanShortInfoList(v RatePlansSummaryRatePlanShortInfoList) {
	o.RatePlanShortInfoList = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RatePlansSummary) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlansSummary) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RatePlansSummary) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RatePlansSummary) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RatePlansSummary) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RatePlansSummary) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MasterInfoList) {
		toSerialize["masterInfoList"] = o.MasterInfoList
	}
	if !IsNil(o.RatePlanShortInfoList) {
		toSerialize["ratePlanShortInfoList"] = o.RatePlanShortInfoList
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRatePlansSummary struct {
	value *RatePlansSummary
	isSet bool
}

func (v NullableRatePlansSummary) Get() *RatePlansSummary {
	return v.value
}

func (v *NullableRatePlansSummary) Set(val *RatePlansSummary) {
	v.value = val
	v.isSet = true
}

func (v NullableRatePlansSummary) IsSet() bool {
	return v.isSet
}

func (v *NullableRatePlansSummary) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRatePlansSummary(val *RatePlansSummary) *NullableRatePlansSummary {
	return &NullableRatePlansSummary{value: val, isSet: true}
}

func (v NullableRatePlansSummary) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRatePlansSummary) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

