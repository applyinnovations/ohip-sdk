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

// checks if the CopyCateringMenuItemsRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyCateringMenuItemsRequest{}

// CopyCateringMenuItemsRequest struct for CopyCateringMenuItemsRequest
type CopyCateringMenuItemsRequest struct {
	CopyMenuItems *CopyMenuItemsType `json:"copyMenuItems,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCopyCateringMenuItemsRequest instantiates a new CopyCateringMenuItemsRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyCateringMenuItemsRequest() *CopyCateringMenuItemsRequest {
	this := CopyCateringMenuItemsRequest{}
	return &this
}

// NewCopyCateringMenuItemsRequestWithDefaults instantiates a new CopyCateringMenuItemsRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyCateringMenuItemsRequestWithDefaults() *CopyCateringMenuItemsRequest {
	this := CopyCateringMenuItemsRequest{}
	return &this
}

// GetCopyMenuItems returns the CopyMenuItems field value if set, zero value otherwise.
func (o *CopyCateringMenuItemsRequest) GetCopyMenuItems() CopyMenuItemsType {
	if o == nil || IsNil(o.CopyMenuItems) {
		var ret CopyMenuItemsType
		return ret
	}
	return *o.CopyMenuItems
}

// GetCopyMenuItemsOk returns a tuple with the CopyMenuItems field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyCateringMenuItemsRequest) GetCopyMenuItemsOk() (*CopyMenuItemsType, bool) {
	if o == nil || IsNil(o.CopyMenuItems) {
		return nil, false
	}
	return o.CopyMenuItems, true
}

// HasCopyMenuItems returns a boolean if a field has been set.
func (o *CopyCateringMenuItemsRequest) HasCopyMenuItems() bool {
	if o != nil && !IsNil(o.CopyMenuItems) {
		return true
	}

	return false
}

// SetCopyMenuItems gets a reference to the given CopyMenuItemsType and assigns it to the CopyMenuItems field.
func (o *CopyCateringMenuItemsRequest) SetCopyMenuItems(v CopyMenuItemsType) {
	o.CopyMenuItems = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CopyCateringMenuItemsRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyCateringMenuItemsRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CopyCateringMenuItemsRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CopyCateringMenuItemsRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CopyCateringMenuItemsRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyCateringMenuItemsRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CopyCateringMenuItemsRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CopyCateringMenuItemsRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CopyCateringMenuItemsRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyCateringMenuItemsRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CopyMenuItems) {
		toSerialize["copyMenuItems"] = o.CopyMenuItems
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCopyCateringMenuItemsRequest struct {
	value *CopyCateringMenuItemsRequest
	isSet bool
}

func (v NullableCopyCateringMenuItemsRequest) Get() *CopyCateringMenuItemsRequest {
	return v.value
}

func (v *NullableCopyCateringMenuItemsRequest) Set(val *CopyCateringMenuItemsRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyCateringMenuItemsRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyCateringMenuItemsRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyCateringMenuItemsRequest(val *CopyCateringMenuItemsRequest) *NullableCopyCateringMenuItemsRequest {
	return &NullableCopyCateringMenuItemsRequest{value: val, isSet: true}
}

func (v NullableCopyCateringMenuItemsRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyCateringMenuItemsRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


