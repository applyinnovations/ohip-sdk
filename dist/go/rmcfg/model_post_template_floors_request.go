/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the PostTemplateFloorsRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostTemplateFloorsRequest{}

// PostTemplateFloorsRequest struct for PostTemplateFloorsRequest
type PostTemplateFloorsRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	// This type holds a collection of floors at the template level.
	TemplateFloors []TemplateFloorType `json:"templateFloors,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostTemplateFloorsRequest instantiates a new PostTemplateFloorsRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostTemplateFloorsRequest() *PostTemplateFloorsRequest {
	this := PostTemplateFloorsRequest{}
	return &this
}

// NewPostTemplateFloorsRequestWithDefaults instantiates a new PostTemplateFloorsRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostTemplateFloorsRequestWithDefaults() *PostTemplateFloorsRequest {
	this := PostTemplateFloorsRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostTemplateFloorsRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostTemplateFloorsRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostTemplateFloorsRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostTemplateFloorsRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTemplateFloors returns the TemplateFloors field value if set, zero value otherwise.
func (o *PostTemplateFloorsRequest) GetTemplateFloors() []TemplateFloorType {
	if o == nil || IsNil(o.TemplateFloors) {
		var ret []TemplateFloorType
		return ret
	}
	return o.TemplateFloors
}

// GetTemplateFloorsOk returns a tuple with the TemplateFloors field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostTemplateFloorsRequest) GetTemplateFloorsOk() ([]TemplateFloorType, bool) {
	if o == nil || IsNil(o.TemplateFloors) {
		return nil, false
	}
	return o.TemplateFloors, true
}

// HasTemplateFloors returns a boolean if a field has been set.
func (o *PostTemplateFloorsRequest) HasTemplateFloors() bool {
	if o != nil && !IsNil(o.TemplateFloors) {
		return true
	}

	return false
}

// SetTemplateFloors gets a reference to the given []TemplateFloorType and assigns it to the TemplateFloors field.
func (o *PostTemplateFloorsRequest) SetTemplateFloors(v []TemplateFloorType) {
	o.TemplateFloors = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostTemplateFloorsRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostTemplateFloorsRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostTemplateFloorsRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostTemplateFloorsRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostTemplateFloorsRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostTemplateFloorsRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TemplateFloors) {
		toSerialize["templateFloors"] = o.TemplateFloors
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostTemplateFloorsRequest struct {
	value *PostTemplateFloorsRequest
	isSet bool
}

func (v NullablePostTemplateFloorsRequest) Get() *PostTemplateFloorsRequest {
	return v.value
}

func (v *NullablePostTemplateFloorsRequest) Set(val *PostTemplateFloorsRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostTemplateFloorsRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostTemplateFloorsRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostTemplateFloorsRequest(val *PostTemplateFloorsRequest) *NullablePostTemplateFloorsRequest {
	return &NullablePostTemplateFloorsRequest{value: val, isSet: true}
}

func (v NullablePostTemplateFloorsRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostTemplateFloorsRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


