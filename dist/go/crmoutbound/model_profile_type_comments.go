/*
OPERA Cloud Customer Relationship Management Outbound API

APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 20.99.99.99
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmoutbound

import (
	"encoding/json"
)

// checks if the ProfileTypeComments type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileTypeComments{}

// ProfileTypeComments List of Notes for the customer.
type ProfileTypeComments struct {
	// Collection of Detailed information on comments for the customer.
	CommentInfo []CommentInfoType `json:"commentInfo,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	AllRowsFetched *bool `json:"allRowsFetched,omitempty"`
	// Total number of rows queried
	TotalRows *int32 `json:"totalRows,omitempty"`
}

// NewProfileTypeComments instantiates a new ProfileTypeComments object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileTypeComments() *ProfileTypeComments {
	this := ProfileTypeComments{}
	return &this
}

// NewProfileTypeCommentsWithDefaults instantiates a new ProfileTypeComments object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileTypeCommentsWithDefaults() *ProfileTypeComments {
	this := ProfileTypeComments{}
	return &this
}

// GetCommentInfo returns the CommentInfo field value if set, zero value otherwise.
func (o *ProfileTypeComments) GetCommentInfo() []CommentInfoType {
	if o == nil || IsNil(o.CommentInfo) {
		var ret []CommentInfoType
		return ret
	}
	return o.CommentInfo
}

// GetCommentInfoOk returns a tuple with the CommentInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypeComments) GetCommentInfoOk() ([]CommentInfoType, bool) {
	if o == nil || IsNil(o.CommentInfo) {
		return nil, false
	}
	return o.CommentInfo, true
}

// HasCommentInfo returns a boolean if a field has been set.
func (o *ProfileTypeComments) HasCommentInfo() bool {
	if o != nil && !IsNil(o.CommentInfo) {
		return true
	}

	return false
}

// SetCommentInfo gets a reference to the given []CommentInfoType and assigns it to the CommentInfo field.
func (o *ProfileTypeComments) SetCommentInfo(v []CommentInfoType) {
	o.CommentInfo = v
}

// GetAllRowsFetched returns the AllRowsFetched field value if set, zero value otherwise.
func (o *ProfileTypeComments) GetAllRowsFetched() bool {
	if o == nil || IsNil(o.AllRowsFetched) {
		var ret bool
		return ret
	}
	return *o.AllRowsFetched
}

// GetAllRowsFetchedOk returns a tuple with the AllRowsFetched field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypeComments) GetAllRowsFetchedOk() (*bool, bool) {
	if o == nil || IsNil(o.AllRowsFetched) {
		return nil, false
	}
	return o.AllRowsFetched, true
}

// HasAllRowsFetched returns a boolean if a field has been set.
func (o *ProfileTypeComments) HasAllRowsFetched() bool {
	if o != nil && !IsNil(o.AllRowsFetched) {
		return true
	}

	return false
}

// SetAllRowsFetched gets a reference to the given bool and assigns it to the AllRowsFetched field.
func (o *ProfileTypeComments) SetAllRowsFetched(v bool) {
	o.AllRowsFetched = &v
}

// GetTotalRows returns the TotalRows field value if set, zero value otherwise.
func (o *ProfileTypeComments) GetTotalRows() int32 {
	if o == nil || IsNil(o.TotalRows) {
		var ret int32
		return ret
	}
	return *o.TotalRows
}

// GetTotalRowsOk returns a tuple with the TotalRows field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypeComments) GetTotalRowsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalRows) {
		return nil, false
	}
	return o.TotalRows, true
}

// HasTotalRows returns a boolean if a field has been set.
func (o *ProfileTypeComments) HasTotalRows() bool {
	if o != nil && !IsNil(o.TotalRows) {
		return true
	}

	return false
}

// SetTotalRows gets a reference to the given int32 and assigns it to the TotalRows field.
func (o *ProfileTypeComments) SetTotalRows(v int32) {
	o.TotalRows = &v
}

func (o ProfileTypeComments) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileTypeComments) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CommentInfo) {
		toSerialize["commentInfo"] = o.CommentInfo
	}
	if !IsNil(o.AllRowsFetched) {
		toSerialize["allRowsFetched"] = o.AllRowsFetched
	}
	if !IsNil(o.TotalRows) {
		toSerialize["totalRows"] = o.TotalRows
	}
	return toSerialize, nil
}

type NullableProfileTypeComments struct {
	value *ProfileTypeComments
	isSet bool
}

func (v NullableProfileTypeComments) Get() *ProfileTypeComments {
	return v.value
}

func (v *NullableProfileTypeComments) Set(val *ProfileTypeComments) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileTypeComments) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileTypeComments) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileTypeComments(val *ProfileTypeComments) *NullableProfileTypeComments {
	return &NullableProfileTypeComments{value: val, isSet: true}
}

func (v NullableProfileTypeComments) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileTypeComments) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


