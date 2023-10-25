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

// checks if the TemplateFloorType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplateFloorType{}

// TemplateFloorType Base details common between both template and hotel level floors.
type TemplateFloorType struct {
	// Description for the floor.
	Description *string `json:"description,omitempty"`
	// Specifies the floor code.
	Floor *string `json:"floor,omitempty"`
	// Specifies whether the floor is to be available for selection at all hotels.
	Global *bool `json:"global,omitempty"`
	// Flag to indicate if this floor should be available on the Task Sheet Workflow configuration.
	Housekeeping *bool `json:"housekeeping,omitempty"`
	// Display sequence for the floor.
	Sequence *int32 `json:"sequence,omitempty"`
}

// NewTemplateFloorType instantiates a new TemplateFloorType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplateFloorType() *TemplateFloorType {
	this := TemplateFloorType{}
	return &this
}

// NewTemplateFloorTypeWithDefaults instantiates a new TemplateFloorType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplateFloorTypeWithDefaults() *TemplateFloorType {
	this := TemplateFloorType{}
	return &this
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *TemplateFloorType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateFloorType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *TemplateFloorType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *TemplateFloorType) SetDescription(v string) {
	o.Description = &v
}

// GetFloor returns the Floor field value if set, zero value otherwise.
func (o *TemplateFloorType) GetFloor() string {
	if o == nil || IsNil(o.Floor) {
		var ret string
		return ret
	}
	return *o.Floor
}

// GetFloorOk returns a tuple with the Floor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateFloorType) GetFloorOk() (*string, bool) {
	if o == nil || IsNil(o.Floor) {
		return nil, false
	}
	return o.Floor, true
}

// HasFloor returns a boolean if a field has been set.
func (o *TemplateFloorType) HasFloor() bool {
	if o != nil && !IsNil(o.Floor) {
		return true
	}

	return false
}

// SetFloor gets a reference to the given string and assigns it to the Floor field.
func (o *TemplateFloorType) SetFloor(v string) {
	o.Floor = &v
}

// GetGlobal returns the Global field value if set, zero value otherwise.
func (o *TemplateFloorType) GetGlobal() bool {
	if o == nil || IsNil(o.Global) {
		var ret bool
		return ret
	}
	return *o.Global
}

// GetGlobalOk returns a tuple with the Global field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateFloorType) GetGlobalOk() (*bool, bool) {
	if o == nil || IsNil(o.Global) {
		return nil, false
	}
	return o.Global, true
}

// HasGlobal returns a boolean if a field has been set.
func (o *TemplateFloorType) HasGlobal() bool {
	if o != nil && !IsNil(o.Global) {
		return true
	}

	return false
}

// SetGlobal gets a reference to the given bool and assigns it to the Global field.
func (o *TemplateFloorType) SetGlobal(v bool) {
	o.Global = &v
}

// GetHousekeeping returns the Housekeeping field value if set, zero value otherwise.
func (o *TemplateFloorType) GetHousekeeping() bool {
	if o == nil || IsNil(o.Housekeeping) {
		var ret bool
		return ret
	}
	return *o.Housekeeping
}

// GetHousekeepingOk returns a tuple with the Housekeeping field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateFloorType) GetHousekeepingOk() (*bool, bool) {
	if o == nil || IsNil(o.Housekeeping) {
		return nil, false
	}
	return o.Housekeeping, true
}

// HasHousekeeping returns a boolean if a field has been set.
func (o *TemplateFloorType) HasHousekeeping() bool {
	if o != nil && !IsNil(o.Housekeeping) {
		return true
	}

	return false
}

// SetHousekeeping gets a reference to the given bool and assigns it to the Housekeeping field.
func (o *TemplateFloorType) SetHousekeeping(v bool) {
	o.Housekeeping = &v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *TemplateFloorType) GetSequence() int32 {
	if o == nil || IsNil(o.Sequence) {
		var ret int32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateFloorType) GetSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *TemplateFloorType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given int32 and assigns it to the Sequence field.
func (o *TemplateFloorType) SetSequence(v int32) {
	o.Sequence = &v
}

func (o TemplateFloorType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplateFloorType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Floor) {
		toSerialize["floor"] = o.Floor
	}
	if !IsNil(o.Global) {
		toSerialize["global"] = o.Global
	}
	if !IsNil(o.Housekeeping) {
		toSerialize["housekeeping"] = o.Housekeeping
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	return toSerialize, nil
}

type NullableTemplateFloorType struct {
	value *TemplateFloorType
	isSet bool
}

func (v NullableTemplateFloorType) Get() *TemplateFloorType {
	return v.value
}

func (v *NullableTemplateFloorType) Set(val *TemplateFloorType) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplateFloorType) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplateFloorType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplateFloorType(val *TemplateFloorType) *NullableTemplateFloorType {
	return &NullableTemplateFloorType{value: val, isSet: true}
}

func (v NullableTemplateFloorType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplateFloorType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


