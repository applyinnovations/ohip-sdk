/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the ResourceCopyAndMoveType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResourceCopyAndMoveType{}

// ResourceCopyAndMoveType Holds Resource Type and its UniqueID
type ResourceCopyAndMoveType struct {
	ResourceId *ResourceId `json:"resourceId,omitempty"`
	ResourceType *ResourceType `json:"resourceType,omitempty"`
}

// NewResourceCopyAndMoveType instantiates a new ResourceCopyAndMoveType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResourceCopyAndMoveType() *ResourceCopyAndMoveType {
	this := ResourceCopyAndMoveType{}
	return &this
}

// NewResourceCopyAndMoveTypeWithDefaults instantiates a new ResourceCopyAndMoveType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResourceCopyAndMoveTypeWithDefaults() *ResourceCopyAndMoveType {
	this := ResourceCopyAndMoveType{}
	return &this
}

// GetResourceId returns the ResourceId field value if set, zero value otherwise.
func (o *ResourceCopyAndMoveType) GetResourceId() ResourceId {
	if o == nil || IsNil(o.ResourceId) {
		var ret ResourceId
		return ret
	}
	return *o.ResourceId
}

// GetResourceIdOk returns a tuple with the ResourceId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResourceCopyAndMoveType) GetResourceIdOk() (*ResourceId, bool) {
	if o == nil || IsNil(o.ResourceId) {
		return nil, false
	}
	return o.ResourceId, true
}

// HasResourceId returns a boolean if a field has been set.
func (o *ResourceCopyAndMoveType) HasResourceId() bool {
	if o != nil && !IsNil(o.ResourceId) {
		return true
	}

	return false
}

// SetResourceId gets a reference to the given ResourceId and assigns it to the ResourceId field.
func (o *ResourceCopyAndMoveType) SetResourceId(v ResourceId) {
	o.ResourceId = &v
}

// GetResourceType returns the ResourceType field value if set, zero value otherwise.
func (o *ResourceCopyAndMoveType) GetResourceType() ResourceType {
	if o == nil || IsNil(o.ResourceType) {
		var ret ResourceType
		return ret
	}
	return *o.ResourceType
}

// GetResourceTypeOk returns a tuple with the ResourceType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResourceCopyAndMoveType) GetResourceTypeOk() (*ResourceType, bool) {
	if o == nil || IsNil(o.ResourceType) {
		return nil, false
	}
	return o.ResourceType, true
}

// HasResourceType returns a boolean if a field has been set.
func (o *ResourceCopyAndMoveType) HasResourceType() bool {
	if o != nil && !IsNil(o.ResourceType) {
		return true
	}

	return false
}

// SetResourceType gets a reference to the given ResourceType and assigns it to the ResourceType field.
func (o *ResourceCopyAndMoveType) SetResourceType(v ResourceType) {
	o.ResourceType = &v
}

func (o ResourceCopyAndMoveType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResourceCopyAndMoveType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ResourceId) {
		toSerialize["resourceId"] = o.ResourceId
	}
	if !IsNil(o.ResourceType) {
		toSerialize["resourceType"] = o.ResourceType
	}
	return toSerialize, nil
}

type NullableResourceCopyAndMoveType struct {
	value *ResourceCopyAndMoveType
	isSet bool
}

func (v NullableResourceCopyAndMoveType) Get() *ResourceCopyAndMoveType {
	return v.value
}

func (v *NullableResourceCopyAndMoveType) Set(val *ResourceCopyAndMoveType) {
	v.value = val
	v.isSet = true
}

func (v NullableResourceCopyAndMoveType) IsSet() bool {
	return v.isSet
}

func (v *NullableResourceCopyAndMoveType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResourceCopyAndMoveType(val *ResourceCopyAndMoveType) *NullableResourceCopyAndMoveType {
	return &NullableResourceCopyAndMoveType{value: val, isSet: true}
}

func (v NullableResourceCopyAndMoveType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResourceCopyAndMoveType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

