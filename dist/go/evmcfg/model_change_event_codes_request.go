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

// checks if the ChangeEventCodesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeEventCodesRequest{}

// ChangeEventCodesRequest struct for ChangeEventCodesRequest
type ChangeEventCodesRequest struct {
	// Details for Event Code at hotel level.
	EventCodes []EventCodeType `json:"eventCodes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChangeEventCodesRequest instantiates a new ChangeEventCodesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeEventCodesRequest() *ChangeEventCodesRequest {
	this := ChangeEventCodesRequest{}
	return &this
}

// NewChangeEventCodesRequestWithDefaults instantiates a new ChangeEventCodesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeEventCodesRequestWithDefaults() *ChangeEventCodesRequest {
	this := ChangeEventCodesRequest{}
	return &this
}

// GetEventCodes returns the EventCodes field value if set, zero value otherwise.
func (o *ChangeEventCodesRequest) GetEventCodes() []EventCodeType {
	if o == nil || IsNil(o.EventCodes) {
		var ret []EventCodeType
		return ret
	}
	return o.EventCodes
}

// GetEventCodesOk returns a tuple with the EventCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeEventCodesRequest) GetEventCodesOk() ([]EventCodeType, bool) {
	if o == nil || IsNil(o.EventCodes) {
		return nil, false
	}
	return o.EventCodes, true
}

// HasEventCodes returns a boolean if a field has been set.
func (o *ChangeEventCodesRequest) HasEventCodes() bool {
	if o != nil && !IsNil(o.EventCodes) {
		return true
	}

	return false
}

// SetEventCodes gets a reference to the given []EventCodeType and assigns it to the EventCodes field.
func (o *ChangeEventCodesRequest) SetEventCodes(v []EventCodeType) {
	o.EventCodes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChangeEventCodesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeEventCodesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChangeEventCodesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChangeEventCodesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChangeEventCodesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeEventCodesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChangeEventCodesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChangeEventCodesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChangeEventCodesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeEventCodesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.EventCodes) {
		toSerialize["eventCodes"] = o.EventCodes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChangeEventCodesRequest struct {
	value *ChangeEventCodesRequest
	isSet bool
}

func (v NullableChangeEventCodesRequest) Get() *ChangeEventCodesRequest {
	return v.value
}

func (v *NullableChangeEventCodesRequest) Set(val *ChangeEventCodesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeEventCodesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeEventCodesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeEventCodesRequest(val *ChangeEventCodesRequest) *NullableChangeEventCodesRequest {
	return &NullableChangeEventCodesRequest{value: val, isSet: true}
}

func (v NullableChangeEventCodesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeEventCodesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


