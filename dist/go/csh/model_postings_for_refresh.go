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

// checks if the PostingsForRefresh type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostingsForRefresh{}

// PostingsForRefresh Response object that lists the transactions that can be refreshed when a routing instruction set is refreshed.
type PostingsForRefresh struct {
	Links []InstanceLink `json:"links,omitempty"`
	PostingsForRoomRouting *PostingsInfoType `json:"postingsForRoomRouting,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostingsForRefresh instantiates a new PostingsForRefresh object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostingsForRefresh() *PostingsForRefresh {
	this := PostingsForRefresh{}
	return &this
}

// NewPostingsForRefreshWithDefaults instantiates a new PostingsForRefresh object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostingsForRefreshWithDefaults() *PostingsForRefresh {
	this := PostingsForRefresh{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostingsForRefresh) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostingsForRefresh) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostingsForRefresh) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostingsForRefresh) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetPostingsForRoomRouting returns the PostingsForRoomRouting field value if set, zero value otherwise.
func (o *PostingsForRefresh) GetPostingsForRoomRouting() PostingsInfoType {
	if o == nil || IsNil(o.PostingsForRoomRouting) {
		var ret PostingsInfoType
		return ret
	}
	return *o.PostingsForRoomRouting
}

// GetPostingsForRoomRoutingOk returns a tuple with the PostingsForRoomRouting field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostingsForRefresh) GetPostingsForRoomRoutingOk() (*PostingsInfoType, bool) {
	if o == nil || IsNil(o.PostingsForRoomRouting) {
		return nil, false
	}
	return o.PostingsForRoomRouting, true
}

// HasPostingsForRoomRouting returns a boolean if a field has been set.
func (o *PostingsForRefresh) HasPostingsForRoomRouting() bool {
	if o != nil && !IsNil(o.PostingsForRoomRouting) {
		return true
	}

	return false
}

// SetPostingsForRoomRouting gets a reference to the given PostingsInfoType and assigns it to the PostingsForRoomRouting field.
func (o *PostingsForRefresh) SetPostingsForRoomRouting(v PostingsInfoType) {
	o.PostingsForRoomRouting = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostingsForRefresh) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostingsForRefresh) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostingsForRefresh) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostingsForRefresh) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostingsForRefresh) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostingsForRefresh) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.PostingsForRoomRouting) {
		toSerialize["postingsForRoomRouting"] = o.PostingsForRoomRouting
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostingsForRefresh struct {
	value *PostingsForRefresh
	isSet bool
}

func (v NullablePostingsForRefresh) Get() *PostingsForRefresh {
	return v.value
}

func (v *NullablePostingsForRefresh) Set(val *PostingsForRefresh) {
	v.value = val
	v.isSet = true
}

func (v NullablePostingsForRefresh) IsSet() bool {
	return v.isSet
}

func (v *NullablePostingsForRefresh) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostingsForRefresh(val *PostingsForRefresh) *NullablePostingsForRefresh {
	return &NullablePostingsForRefresh{value: val, isSet: true}
}

func (v NullablePostingsForRefresh) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostingsForRefresh) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

