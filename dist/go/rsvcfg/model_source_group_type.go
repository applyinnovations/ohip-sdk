/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the SourceGroupType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SourceGroupType{}

// SourceGroupType Common code type for code, description, seq and inactive
type SourceGroupType struct {
	// Code for the code type.
	Code *string `json:"code,omitempty"`
	Description *TranslationTextType50 `json:"description,omitempty"`
	// Hotel code for the code type.
	HotelId *string `json:"hotelId,omitempty"`
	// Indicates the code type is inactive or not.
	Inactive *bool `json:"inactive,omitempty"`
	// Display sequence for the code type.
	Sequence *int32 `json:"sequence,omitempty"`
	// Collection of Source Codes.
	SourceCodes []SourceCodeType `json:"sourceCodes,omitempty"`
}

// NewSourceGroupType instantiates a new SourceGroupType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSourceGroupType() *SourceGroupType {
	this := SourceGroupType{}
	return &this
}

// NewSourceGroupTypeWithDefaults instantiates a new SourceGroupType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSourceGroupTypeWithDefaults() *SourceGroupType {
	this := SourceGroupType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *SourceGroupType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SourceGroupType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *SourceGroupType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *SourceGroupType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *SourceGroupType) GetDescription() TranslationTextType50 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType50
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SourceGroupType) GetDescriptionOk() (*TranslationTextType50, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *SourceGroupType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType50 and assigns it to the Description field.
func (o *SourceGroupType) SetDescription(v TranslationTextType50) {
	o.Description = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *SourceGroupType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SourceGroupType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *SourceGroupType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *SourceGroupType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *SourceGroupType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SourceGroupType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *SourceGroupType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *SourceGroupType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *SourceGroupType) GetSequence() int32 {
	if o == nil || IsNil(o.Sequence) {
		var ret int32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SourceGroupType) GetSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *SourceGroupType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given int32 and assigns it to the Sequence field.
func (o *SourceGroupType) SetSequence(v int32) {
	o.Sequence = &v
}

// GetSourceCodes returns the SourceCodes field value if set, zero value otherwise.
func (o *SourceGroupType) GetSourceCodes() []SourceCodeType {
	if o == nil || IsNil(o.SourceCodes) {
		var ret []SourceCodeType
		return ret
	}
	return o.SourceCodes
}

// GetSourceCodesOk returns a tuple with the SourceCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SourceGroupType) GetSourceCodesOk() ([]SourceCodeType, bool) {
	if o == nil || IsNil(o.SourceCodes) {
		return nil, false
	}
	return o.SourceCodes, true
}

// HasSourceCodes returns a boolean if a field has been set.
func (o *SourceGroupType) HasSourceCodes() bool {
	if o != nil && !IsNil(o.SourceCodes) {
		return true
	}

	return false
}

// SetSourceCodes gets a reference to the given []SourceCodeType and assigns it to the SourceCodes field.
func (o *SourceGroupType) SetSourceCodes(v []SourceCodeType) {
	o.SourceCodes = v
}

func (o SourceGroupType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SourceGroupType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	if !IsNil(o.SourceCodes) {
		toSerialize["sourceCodes"] = o.SourceCodes
	}
	return toSerialize, nil
}

type NullableSourceGroupType struct {
	value *SourceGroupType
	isSet bool
}

func (v NullableSourceGroupType) Get() *SourceGroupType {
	return v.value
}

func (v *NullableSourceGroupType) Set(val *SourceGroupType) {
	v.value = val
	v.isSet = true
}

func (v NullableSourceGroupType) IsSet() bool {
	return v.isSet
}

func (v *NullableSourceGroupType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSourceGroupType(val *SourceGroupType) *NullableSourceGroupType {
	return &NullableSourceGroupType{value: val, isSet: true}
}

func (v NullableSourceGroupType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSourceGroupType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


