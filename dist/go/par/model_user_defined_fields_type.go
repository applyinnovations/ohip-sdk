/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the UserDefinedFieldsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UserDefinedFieldsType{}

// UserDefinedFieldsType A common type used to hold user defined fields(UDFs). This type should be used to handle UDFs on RReservation, Profiles, etc.
type UserDefinedFieldsType struct {
	// Used to hold collection of user defined fields of Character/String Type.
	CharacterUDFs []CharacterUDFType `json:"characterUDFs,omitempty"`
	// Used to hold collection of user defined fields of Date Type.
	DateUDFs []DateUDFType `json:"dateUDFs,omitempty"`
	// Used to hold collection of user defined fields of Numeric Type.
	NumericUDFs []NumericUDFType `json:"numericUDFs,omitempty"`
}

// NewUserDefinedFieldsType instantiates a new UserDefinedFieldsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUserDefinedFieldsType() *UserDefinedFieldsType {
	this := UserDefinedFieldsType{}
	return &this
}

// NewUserDefinedFieldsTypeWithDefaults instantiates a new UserDefinedFieldsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUserDefinedFieldsTypeWithDefaults() *UserDefinedFieldsType {
	this := UserDefinedFieldsType{}
	return &this
}

// GetCharacterUDFs returns the CharacterUDFs field value if set, zero value otherwise.
func (o *UserDefinedFieldsType) GetCharacterUDFs() []CharacterUDFType {
	if o == nil || IsNil(o.CharacterUDFs) {
		var ret []CharacterUDFType
		return ret
	}
	return o.CharacterUDFs
}

// GetCharacterUDFsOk returns a tuple with the CharacterUDFs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserDefinedFieldsType) GetCharacterUDFsOk() ([]CharacterUDFType, bool) {
	if o == nil || IsNil(o.CharacterUDFs) {
		return nil, false
	}
	return o.CharacterUDFs, true
}

// HasCharacterUDFs returns a boolean if a field has been set.
func (o *UserDefinedFieldsType) HasCharacterUDFs() bool {
	if o != nil && !IsNil(o.CharacterUDFs) {
		return true
	}

	return false
}

// SetCharacterUDFs gets a reference to the given []CharacterUDFType and assigns it to the CharacterUDFs field.
func (o *UserDefinedFieldsType) SetCharacterUDFs(v []CharacterUDFType) {
	o.CharacterUDFs = v
}

// GetDateUDFs returns the DateUDFs field value if set, zero value otherwise.
func (o *UserDefinedFieldsType) GetDateUDFs() []DateUDFType {
	if o == nil || IsNil(o.DateUDFs) {
		var ret []DateUDFType
		return ret
	}
	return o.DateUDFs
}

// GetDateUDFsOk returns a tuple with the DateUDFs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserDefinedFieldsType) GetDateUDFsOk() ([]DateUDFType, bool) {
	if o == nil || IsNil(o.DateUDFs) {
		return nil, false
	}
	return o.DateUDFs, true
}

// HasDateUDFs returns a boolean if a field has been set.
func (o *UserDefinedFieldsType) HasDateUDFs() bool {
	if o != nil && !IsNil(o.DateUDFs) {
		return true
	}

	return false
}

// SetDateUDFs gets a reference to the given []DateUDFType and assigns it to the DateUDFs field.
func (o *UserDefinedFieldsType) SetDateUDFs(v []DateUDFType) {
	o.DateUDFs = v
}

// GetNumericUDFs returns the NumericUDFs field value if set, zero value otherwise.
func (o *UserDefinedFieldsType) GetNumericUDFs() []NumericUDFType {
	if o == nil || IsNil(o.NumericUDFs) {
		var ret []NumericUDFType
		return ret
	}
	return o.NumericUDFs
}

// GetNumericUDFsOk returns a tuple with the NumericUDFs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserDefinedFieldsType) GetNumericUDFsOk() ([]NumericUDFType, bool) {
	if o == nil || IsNil(o.NumericUDFs) {
		return nil, false
	}
	return o.NumericUDFs, true
}

// HasNumericUDFs returns a boolean if a field has been set.
func (o *UserDefinedFieldsType) HasNumericUDFs() bool {
	if o != nil && !IsNil(o.NumericUDFs) {
		return true
	}

	return false
}

// SetNumericUDFs gets a reference to the given []NumericUDFType and assigns it to the NumericUDFs field.
func (o *UserDefinedFieldsType) SetNumericUDFs(v []NumericUDFType) {
	o.NumericUDFs = v
}

func (o UserDefinedFieldsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UserDefinedFieldsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CharacterUDFs) {
		toSerialize["characterUDFs"] = o.CharacterUDFs
	}
	if !IsNil(o.DateUDFs) {
		toSerialize["dateUDFs"] = o.DateUDFs
	}
	if !IsNil(o.NumericUDFs) {
		toSerialize["numericUDFs"] = o.NumericUDFs
	}
	return toSerialize, nil
}

type NullableUserDefinedFieldsType struct {
	value *UserDefinedFieldsType
	isSet bool
}

func (v NullableUserDefinedFieldsType) Get() *UserDefinedFieldsType {
	return v.value
}

func (v *NullableUserDefinedFieldsType) Set(val *UserDefinedFieldsType) {
	v.value = val
	v.isSet = true
}

func (v NullableUserDefinedFieldsType) IsSet() bool {
	return v.isSet
}

func (v *NullableUserDefinedFieldsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUserDefinedFieldsType(val *UserDefinedFieldsType) *NullableUserDefinedFieldsType {
	return &NullableUserDefinedFieldsType{value: val, isSet: true}
}

func (v NullableUserDefinedFieldsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUserDefinedFieldsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


