/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the StagedProfileUserDefinedFieldsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StagedProfileUserDefinedFieldsType{}

// StagedProfileUserDefinedFieldsType Used to hold user defined fields(UDFs) for staged profile.
type StagedProfileUserDefinedFieldsType struct {
	// Used to hold collection of user defined fields of Character/String Type.
	CharacterUDFs []StagedProfileCharacterUDFType `json:"characterUDFs,omitempty"`
	// Used to hold collection of user defined fields of Date Type.
	DateUDFs []StagedProfileDateUDFType `json:"dateUDFs,omitempty"`
	// Used to hold collection of user defined fields of Numeric Type.
	NumericUDFs []StagedProfileNumericUDFType `json:"numericUDFs,omitempty"`
}

// NewStagedProfileUserDefinedFieldsType instantiates a new StagedProfileUserDefinedFieldsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStagedProfileUserDefinedFieldsType() *StagedProfileUserDefinedFieldsType {
	this := StagedProfileUserDefinedFieldsType{}
	return &this
}

// NewStagedProfileUserDefinedFieldsTypeWithDefaults instantiates a new StagedProfileUserDefinedFieldsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStagedProfileUserDefinedFieldsTypeWithDefaults() *StagedProfileUserDefinedFieldsType {
	this := StagedProfileUserDefinedFieldsType{}
	return &this
}

// GetCharacterUDFs returns the CharacterUDFs field value if set, zero value otherwise.
func (o *StagedProfileUserDefinedFieldsType) GetCharacterUDFs() []StagedProfileCharacterUDFType {
	if o == nil || IsNil(o.CharacterUDFs) {
		var ret []StagedProfileCharacterUDFType
		return ret
	}
	return o.CharacterUDFs
}

// GetCharacterUDFsOk returns a tuple with the CharacterUDFs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileUserDefinedFieldsType) GetCharacterUDFsOk() ([]StagedProfileCharacterUDFType, bool) {
	if o == nil || IsNil(o.CharacterUDFs) {
		return nil, false
	}
	return o.CharacterUDFs, true
}

// HasCharacterUDFs returns a boolean if a field has been set.
func (o *StagedProfileUserDefinedFieldsType) HasCharacterUDFs() bool {
	if o != nil && !IsNil(o.CharacterUDFs) {
		return true
	}

	return false
}

// SetCharacterUDFs gets a reference to the given []StagedProfileCharacterUDFType and assigns it to the CharacterUDFs field.
func (o *StagedProfileUserDefinedFieldsType) SetCharacterUDFs(v []StagedProfileCharacterUDFType) {
	o.CharacterUDFs = v
}

// GetDateUDFs returns the DateUDFs field value if set, zero value otherwise.
func (o *StagedProfileUserDefinedFieldsType) GetDateUDFs() []StagedProfileDateUDFType {
	if o == nil || IsNil(o.DateUDFs) {
		var ret []StagedProfileDateUDFType
		return ret
	}
	return o.DateUDFs
}

// GetDateUDFsOk returns a tuple with the DateUDFs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileUserDefinedFieldsType) GetDateUDFsOk() ([]StagedProfileDateUDFType, bool) {
	if o == nil || IsNil(o.DateUDFs) {
		return nil, false
	}
	return o.DateUDFs, true
}

// HasDateUDFs returns a boolean if a field has been set.
func (o *StagedProfileUserDefinedFieldsType) HasDateUDFs() bool {
	if o != nil && !IsNil(o.DateUDFs) {
		return true
	}

	return false
}

// SetDateUDFs gets a reference to the given []StagedProfileDateUDFType and assigns it to the DateUDFs field.
func (o *StagedProfileUserDefinedFieldsType) SetDateUDFs(v []StagedProfileDateUDFType) {
	o.DateUDFs = v
}

// GetNumericUDFs returns the NumericUDFs field value if set, zero value otherwise.
func (o *StagedProfileUserDefinedFieldsType) GetNumericUDFs() []StagedProfileNumericUDFType {
	if o == nil || IsNil(o.NumericUDFs) {
		var ret []StagedProfileNumericUDFType
		return ret
	}
	return o.NumericUDFs
}

// GetNumericUDFsOk returns a tuple with the NumericUDFs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileUserDefinedFieldsType) GetNumericUDFsOk() ([]StagedProfileNumericUDFType, bool) {
	if o == nil || IsNil(o.NumericUDFs) {
		return nil, false
	}
	return o.NumericUDFs, true
}

// HasNumericUDFs returns a boolean if a field has been set.
func (o *StagedProfileUserDefinedFieldsType) HasNumericUDFs() bool {
	if o != nil && !IsNil(o.NumericUDFs) {
		return true
	}

	return false
}

// SetNumericUDFs gets a reference to the given []StagedProfileNumericUDFType and assigns it to the NumericUDFs field.
func (o *StagedProfileUserDefinedFieldsType) SetNumericUDFs(v []StagedProfileNumericUDFType) {
	o.NumericUDFs = v
}

func (o StagedProfileUserDefinedFieldsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StagedProfileUserDefinedFieldsType) ToMap() (map[string]interface{}, error) {
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

type NullableStagedProfileUserDefinedFieldsType struct {
	value *StagedProfileUserDefinedFieldsType
	isSet bool
}

func (v NullableStagedProfileUserDefinedFieldsType) Get() *StagedProfileUserDefinedFieldsType {
	return v.value
}

func (v *NullableStagedProfileUserDefinedFieldsType) Set(val *StagedProfileUserDefinedFieldsType) {
	v.value = val
	v.isSet = true
}

func (v NullableStagedProfileUserDefinedFieldsType) IsSet() bool {
	return v.isSet
}

func (v *NullableStagedProfileUserDefinedFieldsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStagedProfileUserDefinedFieldsType(val *StagedProfileUserDefinedFieldsType) *NullableStagedProfileUserDefinedFieldsType {
	return &NullableStagedProfileUserDefinedFieldsType{value: val, isSet: true}
}

func (v NullableStagedProfileUserDefinedFieldsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStagedProfileUserDefinedFieldsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


