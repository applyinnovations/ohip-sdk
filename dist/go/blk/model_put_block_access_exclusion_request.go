/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the PutBlockAccessExclusionRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PutBlockAccessExclusionRequest{}

// PutBlockAccessExclusionRequest struct for PutBlockAccessExclusionRequest
type PutBlockAccessExclusionRequest struct {
	BlockAccessExclusions *BlockAccessExclusionBlockAccessExclusions `json:"blockAccessExclusions,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPutBlockAccessExclusionRequest instantiates a new PutBlockAccessExclusionRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPutBlockAccessExclusionRequest() *PutBlockAccessExclusionRequest {
	this := PutBlockAccessExclusionRequest{}
	return &this
}

// NewPutBlockAccessExclusionRequestWithDefaults instantiates a new PutBlockAccessExclusionRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPutBlockAccessExclusionRequestWithDefaults() *PutBlockAccessExclusionRequest {
	this := PutBlockAccessExclusionRequest{}
	return &this
}

// GetBlockAccessExclusions returns the BlockAccessExclusions field value if set, zero value otherwise.
func (o *PutBlockAccessExclusionRequest) GetBlockAccessExclusions() BlockAccessExclusionBlockAccessExclusions {
	if o == nil || IsNil(o.BlockAccessExclusions) {
		var ret BlockAccessExclusionBlockAccessExclusions
		return ret
	}
	return *o.BlockAccessExclusions
}

// GetBlockAccessExclusionsOk returns a tuple with the BlockAccessExclusions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutBlockAccessExclusionRequest) GetBlockAccessExclusionsOk() (*BlockAccessExclusionBlockAccessExclusions, bool) {
	if o == nil || IsNil(o.BlockAccessExclusions) {
		return nil, false
	}
	return o.BlockAccessExclusions, true
}

// HasBlockAccessExclusions returns a boolean if a field has been set.
func (o *PutBlockAccessExclusionRequest) HasBlockAccessExclusions() bool {
	if o != nil && !IsNil(o.BlockAccessExclusions) {
		return true
	}

	return false
}

// SetBlockAccessExclusions gets a reference to the given BlockAccessExclusionBlockAccessExclusions and assigns it to the BlockAccessExclusions field.
func (o *PutBlockAccessExclusionRequest) SetBlockAccessExclusions(v BlockAccessExclusionBlockAccessExclusions) {
	o.BlockAccessExclusions = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PutBlockAccessExclusionRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutBlockAccessExclusionRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PutBlockAccessExclusionRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PutBlockAccessExclusionRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PutBlockAccessExclusionRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutBlockAccessExclusionRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PutBlockAccessExclusionRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PutBlockAccessExclusionRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PutBlockAccessExclusionRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PutBlockAccessExclusionRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockAccessExclusions) {
		toSerialize["blockAccessExclusions"] = o.BlockAccessExclusions
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePutBlockAccessExclusionRequest struct {
	value *PutBlockAccessExclusionRequest
	isSet bool
}

func (v NullablePutBlockAccessExclusionRequest) Get() *PutBlockAccessExclusionRequest {
	return v.value
}

func (v *NullablePutBlockAccessExclusionRequest) Set(val *PutBlockAccessExclusionRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePutBlockAccessExclusionRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePutBlockAccessExclusionRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePutBlockAccessExclusionRequest(val *PutBlockAccessExclusionRequest) *NullablePutBlockAccessExclusionRequest {
	return &NullablePutBlockAccessExclusionRequest{value: val, isSet: true}
}

func (v NullablePutBlockAccessExclusionRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePutBlockAccessExclusionRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


