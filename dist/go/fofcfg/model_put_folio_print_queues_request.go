/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the PutFolioPrintQueuesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PutFolioPrintQueuesRequest{}

// PutFolioPrintQueuesRequest struct for PutFolioPrintQueuesRequest
type PutFolioPrintQueuesRequest struct {
	// List of folio print queues
	FolioPrintQueues []FolioPrintQueueType `json:"folioPrintQueues,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPutFolioPrintQueuesRequest instantiates a new PutFolioPrintQueuesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPutFolioPrintQueuesRequest() *PutFolioPrintQueuesRequest {
	this := PutFolioPrintQueuesRequest{}
	return &this
}

// NewPutFolioPrintQueuesRequestWithDefaults instantiates a new PutFolioPrintQueuesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPutFolioPrintQueuesRequestWithDefaults() *PutFolioPrintQueuesRequest {
	this := PutFolioPrintQueuesRequest{}
	return &this
}

// GetFolioPrintQueues returns the FolioPrintQueues field value if set, zero value otherwise.
func (o *PutFolioPrintQueuesRequest) GetFolioPrintQueues() []FolioPrintQueueType {
	if o == nil || IsNil(o.FolioPrintQueues) {
		var ret []FolioPrintQueueType
		return ret
	}
	return o.FolioPrintQueues
}

// GetFolioPrintQueuesOk returns a tuple with the FolioPrintQueues field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutFolioPrintQueuesRequest) GetFolioPrintQueuesOk() ([]FolioPrintQueueType, bool) {
	if o == nil || IsNil(o.FolioPrintQueues) {
		return nil, false
	}
	return o.FolioPrintQueues, true
}

// HasFolioPrintQueues returns a boolean if a field has been set.
func (o *PutFolioPrintQueuesRequest) HasFolioPrintQueues() bool {
	if o != nil && !IsNil(o.FolioPrintQueues) {
		return true
	}

	return false
}

// SetFolioPrintQueues gets a reference to the given []FolioPrintQueueType and assigns it to the FolioPrintQueues field.
func (o *PutFolioPrintQueuesRequest) SetFolioPrintQueues(v []FolioPrintQueueType) {
	o.FolioPrintQueues = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PutFolioPrintQueuesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutFolioPrintQueuesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PutFolioPrintQueuesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PutFolioPrintQueuesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PutFolioPrintQueuesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutFolioPrintQueuesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PutFolioPrintQueuesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PutFolioPrintQueuesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PutFolioPrintQueuesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PutFolioPrintQueuesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FolioPrintQueues) {
		toSerialize["folioPrintQueues"] = o.FolioPrintQueues
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePutFolioPrintQueuesRequest struct {
	value *PutFolioPrintQueuesRequest
	isSet bool
}

func (v NullablePutFolioPrintQueuesRequest) Get() *PutFolioPrintQueuesRequest {
	return v.value
}

func (v *NullablePutFolioPrintQueuesRequest) Set(val *PutFolioPrintQueuesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePutFolioPrintQueuesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePutFolioPrintQueuesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePutFolioPrintQueuesRequest(val *PutFolioPrintQueuesRequest) *NullablePutFolioPrintQueuesRequest {
	return &NullablePutFolioPrintQueuesRequest{value: val, isSet: true}
}

func (v NullablePutFolioPrintQueuesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePutFolioPrintQueuesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


