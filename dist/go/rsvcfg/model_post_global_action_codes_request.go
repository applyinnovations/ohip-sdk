/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the PostGlobalActionCodesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostGlobalActionCodesRequest{}

// PostGlobalActionCodesRequest struct for PostGlobalActionCodesRequest
type PostGlobalActionCodesRequest struct {
	// List of Global Action Codes.
	GlobalActionCodes []GlobalActionCodeType `json:"globalActionCodes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostGlobalActionCodesRequest instantiates a new PostGlobalActionCodesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostGlobalActionCodesRequest() *PostGlobalActionCodesRequest {
	this := PostGlobalActionCodesRequest{}
	return &this
}

// NewPostGlobalActionCodesRequestWithDefaults instantiates a new PostGlobalActionCodesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostGlobalActionCodesRequestWithDefaults() *PostGlobalActionCodesRequest {
	this := PostGlobalActionCodesRequest{}
	return &this
}

// GetGlobalActionCodes returns the GlobalActionCodes field value if set, zero value otherwise.
func (o *PostGlobalActionCodesRequest) GetGlobalActionCodes() []GlobalActionCodeType {
	if o == nil || IsNil(o.GlobalActionCodes) {
		var ret []GlobalActionCodeType
		return ret
	}
	return o.GlobalActionCodes
}

// GetGlobalActionCodesOk returns a tuple with the GlobalActionCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostGlobalActionCodesRequest) GetGlobalActionCodesOk() ([]GlobalActionCodeType, bool) {
	if o == nil || IsNil(o.GlobalActionCodes) {
		return nil, false
	}
	return o.GlobalActionCodes, true
}

// HasGlobalActionCodes returns a boolean if a field has been set.
func (o *PostGlobalActionCodesRequest) HasGlobalActionCodes() bool {
	if o != nil && !IsNil(o.GlobalActionCodes) {
		return true
	}

	return false
}

// SetGlobalActionCodes gets a reference to the given []GlobalActionCodeType and assigns it to the GlobalActionCodes field.
func (o *PostGlobalActionCodesRequest) SetGlobalActionCodes(v []GlobalActionCodeType) {
	o.GlobalActionCodes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostGlobalActionCodesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostGlobalActionCodesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostGlobalActionCodesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostGlobalActionCodesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostGlobalActionCodesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostGlobalActionCodesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostGlobalActionCodesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostGlobalActionCodesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostGlobalActionCodesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostGlobalActionCodesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GlobalActionCodes) {
		toSerialize["globalActionCodes"] = o.GlobalActionCodes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostGlobalActionCodesRequest struct {
	value *PostGlobalActionCodesRequest
	isSet bool
}

func (v NullablePostGlobalActionCodesRequest) Get() *PostGlobalActionCodesRequest {
	return v.value
}

func (v *NullablePostGlobalActionCodesRequest) Set(val *PostGlobalActionCodesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostGlobalActionCodesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostGlobalActionCodesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostGlobalActionCodesRequest(val *PostGlobalActionCodesRequest) *NullablePostGlobalActionCodesRequest {
	return &NullablePostGlobalActionCodesRequest{value: val, isSet: true}
}

func (v NullablePostGlobalActionCodesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostGlobalActionCodesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


