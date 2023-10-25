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

// checks if the PostTraceTextsRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostTraceTextsRequest{}

// PostTraceTextsRequest struct for PostTraceTextsRequest
type PostTraceTextsRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of trace texts.
	TraceTexts []TraceTextType `json:"traceTexts,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostTraceTextsRequest instantiates a new PostTraceTextsRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostTraceTextsRequest() *PostTraceTextsRequest {
	this := PostTraceTextsRequest{}
	return &this
}

// NewPostTraceTextsRequestWithDefaults instantiates a new PostTraceTextsRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostTraceTextsRequestWithDefaults() *PostTraceTextsRequest {
	this := PostTraceTextsRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostTraceTextsRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostTraceTextsRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostTraceTextsRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostTraceTextsRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTraceTexts returns the TraceTexts field value if set, zero value otherwise.
func (o *PostTraceTextsRequest) GetTraceTexts() []TraceTextType {
	if o == nil || IsNil(o.TraceTexts) {
		var ret []TraceTextType
		return ret
	}
	return o.TraceTexts
}

// GetTraceTextsOk returns a tuple with the TraceTexts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostTraceTextsRequest) GetTraceTextsOk() ([]TraceTextType, bool) {
	if o == nil || IsNil(o.TraceTexts) {
		return nil, false
	}
	return o.TraceTexts, true
}

// HasTraceTexts returns a boolean if a field has been set.
func (o *PostTraceTextsRequest) HasTraceTexts() bool {
	if o != nil && !IsNil(o.TraceTexts) {
		return true
	}

	return false
}

// SetTraceTexts gets a reference to the given []TraceTextType and assigns it to the TraceTexts field.
func (o *PostTraceTextsRequest) SetTraceTexts(v []TraceTextType) {
	o.TraceTexts = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostTraceTextsRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostTraceTextsRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostTraceTextsRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostTraceTextsRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostTraceTextsRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostTraceTextsRequest) ToMap() (map[string]interface{}, error) {
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

type NullablePostTraceTextsRequest struct {
	value *PostTraceTextsRequest
	isSet bool
}

func (v NullablePostTraceTextsRequest) Get() *PostTraceTextsRequest {
	return v.value
}

func (v *NullablePostTraceTextsRequest) Set(val *PostTraceTextsRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostTraceTextsRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostTraceTextsRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostTraceTextsRequest(val *PostTraceTextsRequest) *NullablePostTraceTextsRequest {
	return &NullablePostTraceTextsRequest{value: val, isSet: true}
}

func (v NullablePostTraceTextsRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostTraceTextsRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


