/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the PostingSummaryList type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostingSummaryList{}

// PostingSummaryList Response object to fetch daily summary charges from Opera which are posted in Opera by external system.
type PostingSummaryList struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Summary of the postings by external system.
	PostingSummaries []PostingSummaryType `json:"postingSummaries,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostingSummaryList instantiates a new PostingSummaryList object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostingSummaryList() *PostingSummaryList {
	this := PostingSummaryList{}
	return &this
}

// NewPostingSummaryListWithDefaults instantiates a new PostingSummaryList object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostingSummaryListWithDefaults() *PostingSummaryList {
	this := PostingSummaryList{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostingSummaryList) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostingSummaryList) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostingSummaryList) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostingSummaryList) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetPostingSummaries returns the PostingSummaries field value if set, zero value otherwise.
func (o *PostingSummaryList) GetPostingSummaries() []PostingSummaryType {
	if o == nil || IsNil(o.PostingSummaries) {
		var ret []PostingSummaryType
		return ret
	}
	return o.PostingSummaries
}

// GetPostingSummariesOk returns a tuple with the PostingSummaries field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostingSummaryList) GetPostingSummariesOk() ([]PostingSummaryType, bool) {
	if o == nil || IsNil(o.PostingSummaries) {
		return nil, false
	}
	return o.PostingSummaries, true
}

// HasPostingSummaries returns a boolean if a field has been set.
func (o *PostingSummaryList) HasPostingSummaries() bool {
	if o != nil && !IsNil(o.PostingSummaries) {
		return true
	}

	return false
}

// SetPostingSummaries gets a reference to the given []PostingSummaryType and assigns it to the PostingSummaries field.
func (o *PostingSummaryList) SetPostingSummaries(v []PostingSummaryType) {
	o.PostingSummaries = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostingSummaryList) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostingSummaryList) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostingSummaryList) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostingSummaryList) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostingSummaryList) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostingSummaryList) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.PostingSummaries) {
		toSerialize["postingSummaries"] = o.PostingSummaries
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostingSummaryList struct {
	value *PostingSummaryList
	isSet bool
}

func (v NullablePostingSummaryList) Get() *PostingSummaryList {
	return v.value
}

func (v *NullablePostingSummaryList) Set(val *PostingSummaryList) {
	v.value = val
	v.isSet = true
}

func (v NullablePostingSummaryList) IsSet() bool {
	return v.isSet
}

func (v *NullablePostingSummaryList) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostingSummaryList(val *PostingSummaryList) *NullablePostingSummaryList {
	return &NullablePostingSummaryList{value: val, isSet: true}
}

func (v NullablePostingSummaryList) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostingSummaryList) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


