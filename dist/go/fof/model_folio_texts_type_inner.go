/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the FolioTextsTypeInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FolioTextsTypeInner{}

// FolioTextsTypeInner struct for FolioTextsTypeInner
type FolioTextsTypeInner struct {
	// Row number of the additional text.
	Row *int32 `json:"row,omitempty"`
	// Additional text field to display on the folio.
	Text *string `json:"text,omitempty"`
}

// NewFolioTextsTypeInner instantiates a new FolioTextsTypeInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFolioTextsTypeInner() *FolioTextsTypeInner {
	this := FolioTextsTypeInner{}
	return &this
}

// NewFolioTextsTypeInnerWithDefaults instantiates a new FolioTextsTypeInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFolioTextsTypeInnerWithDefaults() *FolioTextsTypeInner {
	this := FolioTextsTypeInner{}
	return &this
}

// GetRow returns the Row field value if set, zero value otherwise.
func (o *FolioTextsTypeInner) GetRow() int32 {
	if o == nil || IsNil(o.Row) {
		var ret int32
		return ret
	}
	return *o.Row
}

// GetRowOk returns a tuple with the Row field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTextsTypeInner) GetRowOk() (*int32, bool) {
	if o == nil || IsNil(o.Row) {
		return nil, false
	}
	return o.Row, true
}

// HasRow returns a boolean if a field has been set.
func (o *FolioTextsTypeInner) HasRow() bool {
	if o != nil && !IsNil(o.Row) {
		return true
	}

	return false
}

// SetRow gets a reference to the given int32 and assigns it to the Row field.
func (o *FolioTextsTypeInner) SetRow(v int32) {
	o.Row = &v
}

// GetText returns the Text field value if set, zero value otherwise.
func (o *FolioTextsTypeInner) GetText() string {
	if o == nil || IsNil(o.Text) {
		var ret string
		return ret
	}
	return *o.Text
}

// GetTextOk returns a tuple with the Text field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTextsTypeInner) GetTextOk() (*string, bool) {
	if o == nil || IsNil(o.Text) {
		return nil, false
	}
	return o.Text, true
}

// HasText returns a boolean if a field has been set.
func (o *FolioTextsTypeInner) HasText() bool {
	if o != nil && !IsNil(o.Text) {
		return true
	}

	return false
}

// SetText gets a reference to the given string and assigns it to the Text field.
func (o *FolioTextsTypeInner) SetText(v string) {
	o.Text = &v
}

func (o FolioTextsTypeInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FolioTextsTypeInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Row) {
		toSerialize["row"] = o.Row
	}
	if !IsNil(o.Text) {
		toSerialize["text"] = o.Text
	}
	return toSerialize, nil
}

type NullableFolioTextsTypeInner struct {
	value *FolioTextsTypeInner
	isSet bool
}

func (v NullableFolioTextsTypeInner) Get() *FolioTextsTypeInner {
	return v.value
}

func (v *NullableFolioTextsTypeInner) Set(val *FolioTextsTypeInner) {
	v.value = val
	v.isSet = true
}

func (v NullableFolioTextsTypeInner) IsSet() bool {
	return v.isSet
}

func (v *NullableFolioTextsTypeInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFolioTextsTypeInner(val *FolioTextsTypeInner) *NullableFolioTextsTypeInner {
	return &NullableFolioTextsTypeInner{value: val, isSet: true}
}

func (v NullableFolioTextsTypeInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFolioTextsTypeInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


