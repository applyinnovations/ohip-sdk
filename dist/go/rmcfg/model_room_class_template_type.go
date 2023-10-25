/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the RoomClassTemplateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomClassTemplateType{}

// RoomClassTemplateType Common code type for code, description, seq and inactive
type RoomClassTemplateType struct {
	// Code for the code type.
	Code *string `json:"code,omitempty"`
	Description *TranslationTextType50 `json:"description,omitempty"`
	// Indicates the code type is inactive or not.
	Inactive *bool `json:"inactive,omitempty"`
	// Display sequence for the code type.
	Sequence *int32 `json:"sequence,omitempty"`
}

// NewRoomClassTemplateType instantiates a new RoomClassTemplateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomClassTemplateType() *RoomClassTemplateType {
	this := RoomClassTemplateType{}
	return &this
}

// NewRoomClassTemplateTypeWithDefaults instantiates a new RoomClassTemplateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomClassTemplateTypeWithDefaults() *RoomClassTemplateType {
	this := RoomClassTemplateType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *RoomClassTemplateType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomClassTemplateType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *RoomClassTemplateType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *RoomClassTemplateType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *RoomClassTemplateType) GetDescription() TranslationTextType50 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType50
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomClassTemplateType) GetDescriptionOk() (*TranslationTextType50, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *RoomClassTemplateType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType50 and assigns it to the Description field.
func (o *RoomClassTemplateType) SetDescription(v TranslationTextType50) {
	o.Description = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *RoomClassTemplateType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomClassTemplateType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *RoomClassTemplateType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *RoomClassTemplateType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *RoomClassTemplateType) GetSequence() int32 {
	if o == nil || IsNil(o.Sequence) {
		var ret int32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomClassTemplateType) GetSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *RoomClassTemplateType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given int32 and assigns it to the Sequence field.
func (o *RoomClassTemplateType) SetSequence(v int32) {
	o.Sequence = &v
}

func (o RoomClassTemplateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomClassTemplateType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	return toSerialize, nil
}

type NullableRoomClassTemplateType struct {
	value *RoomClassTemplateType
	isSet bool
}

func (v NullableRoomClassTemplateType) Get() *RoomClassTemplateType {
	return v.value
}

func (v *NullableRoomClassTemplateType) Set(val *RoomClassTemplateType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomClassTemplateType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomClassTemplateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomClassTemplateType(val *RoomClassTemplateType) *NullableRoomClassTemplateType {
	return &NullableRoomClassTemplateType{value: val, isSet: true}
}

func (v NullableRoomClassTemplateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomClassTemplateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


