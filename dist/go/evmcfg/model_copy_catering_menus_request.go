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

// checks if the CopyCateringMenusRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyCateringMenusRequest{}

// CopyCateringMenusRequest struct for CopyCateringMenusRequest
type CopyCateringMenusRequest struct {
	CopyCateringMenus *CopyCateringMenuType `json:"copyCateringMenus,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCopyCateringMenusRequest instantiates a new CopyCateringMenusRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyCateringMenusRequest() *CopyCateringMenusRequest {
	this := CopyCateringMenusRequest{}
	return &this
}

// NewCopyCateringMenusRequestWithDefaults instantiates a new CopyCateringMenusRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyCateringMenusRequestWithDefaults() *CopyCateringMenusRequest {
	this := CopyCateringMenusRequest{}
	return &this
}

// GetCopyCateringMenus returns the CopyCateringMenus field value if set, zero value otherwise.
func (o *CopyCateringMenusRequest) GetCopyCateringMenus() CopyCateringMenuType {
	if o == nil || IsNil(o.CopyCateringMenus) {
		var ret CopyCateringMenuType
		return ret
	}
	return *o.CopyCateringMenus
}

// GetCopyCateringMenusOk returns a tuple with the CopyCateringMenus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyCateringMenusRequest) GetCopyCateringMenusOk() (*CopyCateringMenuType, bool) {
	if o == nil || IsNil(o.CopyCateringMenus) {
		return nil, false
	}
	return o.CopyCateringMenus, true
}

// HasCopyCateringMenus returns a boolean if a field has been set.
func (o *CopyCateringMenusRequest) HasCopyCateringMenus() bool {
	if o != nil && !IsNil(o.CopyCateringMenus) {
		return true
	}

	return false
}

// SetCopyCateringMenus gets a reference to the given CopyCateringMenuType and assigns it to the CopyCateringMenus field.
func (o *CopyCateringMenusRequest) SetCopyCateringMenus(v CopyCateringMenuType) {
	o.CopyCateringMenus = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CopyCateringMenusRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyCateringMenusRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CopyCateringMenusRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CopyCateringMenusRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CopyCateringMenusRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyCateringMenusRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CopyCateringMenusRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CopyCateringMenusRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CopyCateringMenusRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyCateringMenusRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CopyCateringMenus) {
		toSerialize["copyCateringMenus"] = o.CopyCateringMenus
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCopyCateringMenusRequest struct {
	value *CopyCateringMenusRequest
	isSet bool
}

func (v NullableCopyCateringMenusRequest) Get() *CopyCateringMenusRequest {
	return v.value
}

func (v *NullableCopyCateringMenusRequest) Set(val *CopyCateringMenusRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyCateringMenusRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyCateringMenusRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyCateringMenusRequest(val *CopyCateringMenusRequest) *NullableCopyCateringMenusRequest {
	return &NullableCopyCateringMenusRequest{value: val, isSet: true}
}

func (v NullableCopyCateringMenusRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyCateringMenusRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


