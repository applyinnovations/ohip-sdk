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

// checks if the PutTraceTextsRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PutTraceTextsRequest{}

// PutTraceTextsRequest struct for PutTraceTextsRequest
type PutTraceTextsRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of trace texts that will be modified.
	TraceTexts []TraceTextChangeType `json:"traceTexts,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPutTraceTextsRequest instantiates a new PutTraceTextsRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPutTraceTextsRequest() *PutTraceTextsRequest {
	this := PutTraceTextsRequest{}
	return &this
}

// NewPutTraceTextsRequestWithDefaults instantiates a new PutTraceTextsRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPutTraceTextsRequestWithDefaults() *PutTraceTextsRequest {
	this := PutTraceTextsRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PutTraceTextsRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutTraceTextsRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PutTraceTextsRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PutTraceTextsRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTraceTexts returns the TraceTexts field value if set, zero value otherwise.
func (o *PutTraceTextsRequest) GetTraceTexts() []TraceTextChangeType {
	if o == nil || IsNil(o.TraceTexts) {
		var ret []TraceTextChangeType
		return ret
	}
	return o.TraceTexts
}

// GetTraceTextsOk returns a tuple with the TraceTexts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutTraceTextsRequest) GetTraceTextsOk() ([]TraceTextChangeType, bool) {
	if o == nil || IsNil(o.TraceTexts) {
		return nil, false
	}
	return o.TraceTexts, true
}

// HasTraceTexts returns a boolean if a field has been set.
func (o *PutTraceTextsRequest) HasTraceTexts() bool {
	if o != nil && !IsNil(o.TraceTexts) {
		return true
	}

	return false
}

// SetTraceTexts gets a reference to the given []TraceTextChangeType and assigns it to the TraceTexts field.
func (o *PutTraceTextsRequest) SetTraceTexts(v []TraceTextChangeType) {
	o.TraceTexts = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PutTraceTextsRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutTraceTextsRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PutTraceTextsRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PutTraceTextsRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PutTraceTextsRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PutTraceTextsRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TraceTexts) {
		toSerialize["traceTexts"] = o.TraceTexts
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePutTraceTextsRequest struct {
	value *PutTraceTextsRequest
	isSet bool
}

func (v NullablePutTraceTextsRequest) Get() *PutTraceTextsRequest {
	return v.value
}

func (v *NullablePutTraceTextsRequest) Set(val *PutTraceTextsRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePutTraceTextsRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePutTraceTextsRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePutTraceTextsRequest(val *PutTraceTextsRequest) *NullablePutTraceTextsRequest {
	return &NullablePutTraceTextsRequest{value: val, isSet: true}
}

func (v NullablePutTraceTextsRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePutTraceTextsRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


