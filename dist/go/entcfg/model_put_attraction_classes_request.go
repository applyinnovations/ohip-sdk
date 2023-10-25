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

// checks if the PutAttractionClassesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PutAttractionClassesRequest{}

// PutAttractionClassesRequest struct for PutAttractionClassesRequest
type PutAttractionClassesRequest struct {
	// List of Attraction Classes.
	AttractionClasses []AttractionClassType `json:"attractionClasses,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPutAttractionClassesRequest instantiates a new PutAttractionClassesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPutAttractionClassesRequest() *PutAttractionClassesRequest {
	this := PutAttractionClassesRequest{}
	return &this
}

// NewPutAttractionClassesRequestWithDefaults instantiates a new PutAttractionClassesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPutAttractionClassesRequestWithDefaults() *PutAttractionClassesRequest {
	this := PutAttractionClassesRequest{}
	return &this
}

// GetAttractionClasses returns the AttractionClasses field value if set, zero value otherwise.
func (o *PutAttractionClassesRequest) GetAttractionClasses() []AttractionClassType {
	if o == nil || IsNil(o.AttractionClasses) {
		var ret []AttractionClassType
		return ret
	}
	return o.AttractionClasses
}

// GetAttractionClassesOk returns a tuple with the AttractionClasses field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutAttractionClassesRequest) GetAttractionClassesOk() ([]AttractionClassType, bool) {
	if o == nil || IsNil(o.AttractionClasses) {
		return nil, false
	}
	return o.AttractionClasses, true
}

// HasAttractionClasses returns a boolean if a field has been set.
func (o *PutAttractionClassesRequest) HasAttractionClasses() bool {
	if o != nil && !IsNil(o.AttractionClasses) {
		return true
	}

	return false
}

// SetAttractionClasses gets a reference to the given []AttractionClassType and assigns it to the AttractionClasses field.
func (o *PutAttractionClassesRequest) SetAttractionClasses(v []AttractionClassType) {
	o.AttractionClasses = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PutAttractionClassesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutAttractionClassesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PutAttractionClassesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PutAttractionClassesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PutAttractionClassesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutAttractionClassesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PutAttractionClassesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PutAttractionClassesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PutAttractionClassesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PutAttractionClassesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AttractionClasses) {
		toSerialize["attractionClasses"] = o.AttractionClasses
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePutAttractionClassesRequest struct {
	value *PutAttractionClassesRequest
	isSet bool
}

func (v NullablePutAttractionClassesRequest) Get() *PutAttractionClassesRequest {
	return v.value
}

func (v *NullablePutAttractionClassesRequest) Set(val *PutAttractionClassesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePutAttractionClassesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePutAttractionClassesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePutAttractionClassesRequest(val *PutAttractionClassesRequest) *NullablePutAttractionClassesRequest {
	return &NullablePutAttractionClassesRequest{value: val, isSet: true}
}

func (v NullablePutAttractionClassesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePutAttractionClassesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


