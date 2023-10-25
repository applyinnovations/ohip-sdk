/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the PostUserDefinedFieldValuesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostUserDefinedFieldValuesRequest{}

// PostUserDefinedFieldValuesRequest struct for PostUserDefinedFieldValuesRequest
type PostUserDefinedFieldValuesRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	// A recurring element that identifies the User Defined Field Value.
	UserDefinedFieldValues []UserDefinedFieldValueType `json:"userDefinedFieldValues,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostUserDefinedFieldValuesRequest instantiates a new PostUserDefinedFieldValuesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostUserDefinedFieldValuesRequest() *PostUserDefinedFieldValuesRequest {
	this := PostUserDefinedFieldValuesRequest{}
	return &this
}

// NewPostUserDefinedFieldValuesRequestWithDefaults instantiates a new PostUserDefinedFieldValuesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostUserDefinedFieldValuesRequestWithDefaults() *PostUserDefinedFieldValuesRequest {
	this := PostUserDefinedFieldValuesRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostUserDefinedFieldValuesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostUserDefinedFieldValuesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostUserDefinedFieldValuesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostUserDefinedFieldValuesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetUserDefinedFieldValues returns the UserDefinedFieldValues field value if set, zero value otherwise.
func (o *PostUserDefinedFieldValuesRequest) GetUserDefinedFieldValues() []UserDefinedFieldValueType {
	if o == nil || IsNil(o.UserDefinedFieldValues) {
		var ret []UserDefinedFieldValueType
		return ret
	}
	return o.UserDefinedFieldValues
}

// GetUserDefinedFieldValuesOk returns a tuple with the UserDefinedFieldValues field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostUserDefinedFieldValuesRequest) GetUserDefinedFieldValuesOk() ([]UserDefinedFieldValueType, bool) {
	if o == nil || IsNil(o.UserDefinedFieldValues) {
		return nil, false
	}
	return o.UserDefinedFieldValues, true
}

// HasUserDefinedFieldValues returns a boolean if a field has been set.
func (o *PostUserDefinedFieldValuesRequest) HasUserDefinedFieldValues() bool {
	if o != nil && !IsNil(o.UserDefinedFieldValues) {
		return true
	}

	return false
}

// SetUserDefinedFieldValues gets a reference to the given []UserDefinedFieldValueType and assigns it to the UserDefinedFieldValues field.
func (o *PostUserDefinedFieldValuesRequest) SetUserDefinedFieldValues(v []UserDefinedFieldValueType) {
	o.UserDefinedFieldValues = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostUserDefinedFieldValuesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostUserDefinedFieldValuesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostUserDefinedFieldValuesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostUserDefinedFieldValuesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostUserDefinedFieldValuesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostUserDefinedFieldValuesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.UserDefinedFieldValues) {
		toSerialize["userDefinedFieldValues"] = o.UserDefinedFieldValues
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostUserDefinedFieldValuesRequest struct {
	value *PostUserDefinedFieldValuesRequest
	isSet bool
}

func (v NullablePostUserDefinedFieldValuesRequest) Get() *PostUserDefinedFieldValuesRequest {
	return v.value
}

func (v *NullablePostUserDefinedFieldValuesRequest) Set(val *PostUserDefinedFieldValuesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostUserDefinedFieldValuesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostUserDefinedFieldValuesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostUserDefinedFieldValuesRequest(val *PostUserDefinedFieldValuesRequest) *NullablePostUserDefinedFieldValuesRequest {
	return &NullablePostUserDefinedFieldValuesRequest{value: val, isSet: true}
}

func (v NullablePostUserDefinedFieldValuesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostUserDefinedFieldValuesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


