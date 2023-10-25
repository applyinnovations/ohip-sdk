/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
)

// checks if the PutPayDaysRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PutPayDaysRequest{}

// PutPayDaysRequest struct for PutPayDaysRequest
type PutPayDaysRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of Pay Days.
	PayDays []PayDayType `json:"payDays,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPutPayDaysRequest instantiates a new PutPayDaysRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPutPayDaysRequest() *PutPayDaysRequest {
	this := PutPayDaysRequest{}
	return &this
}

// NewPutPayDaysRequestWithDefaults instantiates a new PutPayDaysRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPutPayDaysRequestWithDefaults() *PutPayDaysRequest {
	this := PutPayDaysRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PutPayDaysRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutPayDaysRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PutPayDaysRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PutPayDaysRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetPayDays returns the PayDays field value if set, zero value otherwise.
func (o *PutPayDaysRequest) GetPayDays() []PayDayType {
	if o == nil || IsNil(o.PayDays) {
		var ret []PayDayType
		return ret
	}
	return o.PayDays
}

// GetPayDaysOk returns a tuple with the PayDays field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutPayDaysRequest) GetPayDaysOk() ([]PayDayType, bool) {
	if o == nil || IsNil(o.PayDays) {
		return nil, false
	}
	return o.PayDays, true
}

// HasPayDays returns a boolean if a field has been set.
func (o *PutPayDaysRequest) HasPayDays() bool {
	if o != nil && !IsNil(o.PayDays) {
		return true
	}

	return false
}

// SetPayDays gets a reference to the given []PayDayType and assigns it to the PayDays field.
func (o *PutPayDaysRequest) SetPayDays(v []PayDayType) {
	o.PayDays = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PutPayDaysRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutPayDaysRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PutPayDaysRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PutPayDaysRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PutPayDaysRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PutPayDaysRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.PayDays) {
		toSerialize["payDays"] = o.PayDays
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePutPayDaysRequest struct {
	value *PutPayDaysRequest
	isSet bool
}

func (v NullablePutPayDaysRequest) Get() *PutPayDaysRequest {
	return v.value
}

func (v *NullablePutPayDaysRequest) Set(val *PutPayDaysRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePutPayDaysRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePutPayDaysRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePutPayDaysRequest(val *PutPayDaysRequest) *NullablePutPayDaysRequest {
	return &NullablePutPayDaysRequest{value: val, isSet: true}
}

func (v NullablePutPayDaysRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePutPayDaysRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


