/*
OPERA Cloud Accounts Receivables API

APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package ars

import (
	"encoding/json"
)

// checks if the NameValueType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &NameValueType{}

// NameValueType Contains name value pair.
type NameValueType struct {
	DataType *NameValueDataTypeType `json:"dataType,omitempty"`
	// Contains format string for values.
	FormatString *string `json:"formatString,omitempty"`
	// Contains unique key which represents for record field.
	Name *string `json:"name,omitempty"`
	Origin *NameValueOriginType `json:"origin,omitempty"`
	UsageInstruction []string `json:"usageInstruction,omitempty"`
	// Contains value for the record/column.
	Value *string `json:"value,omitempty"`
}

// NewNameValueType instantiates a new NameValueType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewNameValueType() *NameValueType {
	this := NameValueType{}
	return &this
}

// NewNameValueTypeWithDefaults instantiates a new NameValueType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewNameValueTypeWithDefaults() *NameValueType {
	this := NameValueType{}
	return &this
}

// GetDataType returns the DataType field value if set, zero value otherwise.
func (o *NameValueType) GetDataType() NameValueDataTypeType {
	if o == nil || IsNil(o.DataType) {
		var ret NameValueDataTypeType
		return ret
	}
	return *o.DataType
}

// GetDataTypeOk returns a tuple with the DataType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NameValueType) GetDataTypeOk() (*NameValueDataTypeType, bool) {
	if o == nil || IsNil(o.DataType) {
		return nil, false
	}
	return o.DataType, true
}

// HasDataType returns a boolean if a field has been set.
func (o *NameValueType) HasDataType() bool {
	if o != nil && !IsNil(o.DataType) {
		return true
	}

	return false
}

// SetDataType gets a reference to the given NameValueDataTypeType and assigns it to the DataType field.
func (o *NameValueType) SetDataType(v NameValueDataTypeType) {
	o.DataType = &v
}

// GetFormatString returns the FormatString field value if set, zero value otherwise.
func (o *NameValueType) GetFormatString() string {
	if o == nil || IsNil(o.FormatString) {
		var ret string
		return ret
	}
	return *o.FormatString
}

// GetFormatStringOk returns a tuple with the FormatString field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NameValueType) GetFormatStringOk() (*string, bool) {
	if o == nil || IsNil(o.FormatString) {
		return nil, false
	}
	return o.FormatString, true
}

// HasFormatString returns a boolean if a field has been set.
func (o *NameValueType) HasFormatString() bool {
	if o != nil && !IsNil(o.FormatString) {
		return true
	}

	return false
}

// SetFormatString gets a reference to the given string and assigns it to the FormatString field.
func (o *NameValueType) SetFormatString(v string) {
	o.FormatString = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *NameValueType) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NameValueType) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *NameValueType) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *NameValueType) SetName(v string) {
	o.Name = &v
}

// GetOrigin returns the Origin field value if set, zero value otherwise.
func (o *NameValueType) GetOrigin() NameValueOriginType {
	if o == nil || IsNil(o.Origin) {
		var ret NameValueOriginType
		return ret
	}
	return *o.Origin
}

// GetOriginOk returns a tuple with the Origin field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NameValueType) GetOriginOk() (*NameValueOriginType, bool) {
	if o == nil || IsNil(o.Origin) {
		return nil, false
	}
	return o.Origin, true
}

// HasOrigin returns a boolean if a field has been set.
func (o *NameValueType) HasOrigin() bool {
	if o != nil && !IsNil(o.Origin) {
		return true
	}

	return false
}

// SetOrigin gets a reference to the given NameValueOriginType and assigns it to the Origin field.
func (o *NameValueType) SetOrigin(v NameValueOriginType) {
	o.Origin = &v
}

// GetUsageInstruction returns the UsageInstruction field value if set, zero value otherwise.
func (o *NameValueType) GetUsageInstruction() []string {
	if o == nil || IsNil(o.UsageInstruction) {
		var ret []string
		return ret
	}
	return o.UsageInstruction
}

// GetUsageInstructionOk returns a tuple with the UsageInstruction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NameValueType) GetUsageInstructionOk() ([]string, bool) {
	if o == nil || IsNil(o.UsageInstruction) {
		return nil, false
	}
	return o.UsageInstruction, true
}

// HasUsageInstruction returns a boolean if a field has been set.
func (o *NameValueType) HasUsageInstruction() bool {
	if o != nil && !IsNil(o.UsageInstruction) {
		return true
	}

	return false
}

// SetUsageInstruction gets a reference to the given []string and assigns it to the UsageInstruction field.
func (o *NameValueType) SetUsageInstruction(v []string) {
	o.UsageInstruction = v
}

// GetValue returns the Value field value if set, zero value otherwise.
func (o *NameValueType) GetValue() string {
	if o == nil || IsNil(o.Value) {
		var ret string
		return ret
	}
	return *o.Value
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NameValueType) GetValueOk() (*string, bool) {
	if o == nil || IsNil(o.Value) {
		return nil, false
	}
	return o.Value, true
}

// HasValue returns a boolean if a field has been set.
func (o *NameValueType) HasValue() bool {
	if o != nil && !IsNil(o.Value) {
		return true
	}

	return false
}

// SetValue gets a reference to the given string and assigns it to the Value field.
func (o *NameValueType) SetValue(v string) {
	o.Value = &v
}

func (o NameValueType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o NameValueType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DataType) {
		toSerialize["dataType"] = o.DataType
	}
	if !IsNil(o.FormatString) {
		toSerialize["formatString"] = o.FormatString
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.Origin) {
		toSerialize["origin"] = o.Origin
	}
	if !IsNil(o.UsageInstruction) {
		toSerialize["usageInstruction"] = o.UsageInstruction
	}
	if !IsNil(o.Value) {
		toSerialize["value"] = o.Value
	}
	return toSerialize, nil
}

type NullableNameValueType struct {
	value *NameValueType
	isSet bool
}

func (v NullableNameValueType) Get() *NameValueType {
	return v.value
}

func (v *NullableNameValueType) Set(val *NameValueType) {
	v.value = val
	v.isSet = true
}

func (v NullableNameValueType) IsSet() bool {
	return v.isSet
}

func (v *NullableNameValueType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableNameValueType(val *NameValueType) *NullableNameValueType {
	return &NullableNameValueType{value: val, isSet: true}
}

func (v NullableNameValueType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableNameValueType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


