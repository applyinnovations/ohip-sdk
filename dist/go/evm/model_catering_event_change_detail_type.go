/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the CateringEventChangeDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CateringEventChangeDetailType{}

// CateringEventChangeDetailType struct for CateringEventChangeDetailType
type CateringEventChangeDetailType struct {
	ChangeId *UniqueIDType `json:"changeId,omitempty"`
	// List of Field Names for the Type(s) Selection
	FieldName *string `json:"fieldName,omitempty"`
	// New Value of the respective field
	NewValue *string `json:"newValue,omitempty"`
	// Old Value of the respective field
	OldValue *string `json:"oldValue,omitempty"`
}

// NewCateringEventChangeDetailType instantiates a new CateringEventChangeDetailType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCateringEventChangeDetailType() *CateringEventChangeDetailType {
	this := CateringEventChangeDetailType{}
	return &this
}

// NewCateringEventChangeDetailTypeWithDefaults instantiates a new CateringEventChangeDetailType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCateringEventChangeDetailTypeWithDefaults() *CateringEventChangeDetailType {
	this := CateringEventChangeDetailType{}
	return &this
}

// GetChangeId returns the ChangeId field value if set, zero value otherwise.
func (o *CateringEventChangeDetailType) GetChangeId() UniqueIDType {
	if o == nil || IsNil(o.ChangeId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ChangeId
}

// GetChangeIdOk returns a tuple with the ChangeId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventChangeDetailType) GetChangeIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ChangeId) {
		return nil, false
	}
	return o.ChangeId, true
}

// HasChangeId returns a boolean if a field has been set.
func (o *CateringEventChangeDetailType) HasChangeId() bool {
	if o != nil && !IsNil(o.ChangeId) {
		return true
	}

	return false
}

// SetChangeId gets a reference to the given UniqueIDType and assigns it to the ChangeId field.
func (o *CateringEventChangeDetailType) SetChangeId(v UniqueIDType) {
	o.ChangeId = &v
}

// GetFieldName returns the FieldName field value if set, zero value otherwise.
func (o *CateringEventChangeDetailType) GetFieldName() string {
	if o == nil || IsNil(o.FieldName) {
		var ret string
		return ret
	}
	return *o.FieldName
}

// GetFieldNameOk returns a tuple with the FieldName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventChangeDetailType) GetFieldNameOk() (*string, bool) {
	if o == nil || IsNil(o.FieldName) {
		return nil, false
	}
	return o.FieldName, true
}

// HasFieldName returns a boolean if a field has been set.
func (o *CateringEventChangeDetailType) HasFieldName() bool {
	if o != nil && !IsNil(o.FieldName) {
		return true
	}

	return false
}

// SetFieldName gets a reference to the given string and assigns it to the FieldName field.
func (o *CateringEventChangeDetailType) SetFieldName(v string) {
	o.FieldName = &v
}

// GetNewValue returns the NewValue field value if set, zero value otherwise.
func (o *CateringEventChangeDetailType) GetNewValue() string {
	if o == nil || IsNil(o.NewValue) {
		var ret string
		return ret
	}
	return *o.NewValue
}

// GetNewValueOk returns a tuple with the NewValue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventChangeDetailType) GetNewValueOk() (*string, bool) {
	if o == nil || IsNil(o.NewValue) {
		return nil, false
	}
	return o.NewValue, true
}

// HasNewValue returns a boolean if a field has been set.
func (o *CateringEventChangeDetailType) HasNewValue() bool {
	if o != nil && !IsNil(o.NewValue) {
		return true
	}

	return false
}

// SetNewValue gets a reference to the given string and assigns it to the NewValue field.
func (o *CateringEventChangeDetailType) SetNewValue(v string) {
	o.NewValue = &v
}

// GetOldValue returns the OldValue field value if set, zero value otherwise.
func (o *CateringEventChangeDetailType) GetOldValue() string {
	if o == nil || IsNil(o.OldValue) {
		var ret string
		return ret
	}
	return *o.OldValue
}

// GetOldValueOk returns a tuple with the OldValue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventChangeDetailType) GetOldValueOk() (*string, bool) {
	if o == nil || IsNil(o.OldValue) {
		return nil, false
	}
	return o.OldValue, true
}

// HasOldValue returns a boolean if a field has been set.
func (o *CateringEventChangeDetailType) HasOldValue() bool {
	if o != nil && !IsNil(o.OldValue) {
		return true
	}

	return false
}

// SetOldValue gets a reference to the given string and assigns it to the OldValue field.
func (o *CateringEventChangeDetailType) SetOldValue(v string) {
	o.OldValue = &v
}

func (o CateringEventChangeDetailType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CateringEventChangeDetailType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ChangeId) {
		toSerialize["changeId"] = o.ChangeId
	}
	if !IsNil(o.FieldName) {
		toSerialize["fieldName"] = o.FieldName
	}
	if !IsNil(o.NewValue) {
		toSerialize["newValue"] = o.NewValue
	}
	if !IsNil(o.OldValue) {
		toSerialize["oldValue"] = o.OldValue
	}
	return toSerialize, nil
}

type NullableCateringEventChangeDetailType struct {
	value *CateringEventChangeDetailType
	isSet bool
}

func (v NullableCateringEventChangeDetailType) Get() *CateringEventChangeDetailType {
	return v.value
}

func (v *NullableCateringEventChangeDetailType) Set(val *CateringEventChangeDetailType) {
	v.value = val
	v.isSet = true
}

func (v NullableCateringEventChangeDetailType) IsSet() bool {
	return v.isSet
}

func (v *NullableCateringEventChangeDetailType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCateringEventChangeDetailType(val *CateringEventChangeDetailType) *NullableCateringEventChangeDetailType {
	return &NullableCateringEventChangeDetailType{value: val, isSet: true}
}

func (v NullableCateringEventChangeDetailType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCateringEventChangeDetailType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


