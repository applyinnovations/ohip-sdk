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

// checks if the RestrictionStatusType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RestrictionStatusType{}

// RestrictionStatusType The RestrictionStatusType is used to indicate the type of restriction applied. An enumerated restriction type is defined in the attribute group.
type RestrictionStatusType struct {
	Code *RestrictionStatusesType `json:"code,omitempty"`
	// Indicates Length of Stay 1 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable.
	LOS1 *bool `json:"lOS1,omitempty"`
	// Indicates Length of Stay 2 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable.
	LOS2 *bool `json:"lOS2,omitempty"`
	// Indicates Length of Stay 3 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable.
	LOS3 *bool `json:"lOS3,omitempty"`
	// Indicates Length of Stay 4 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable.
	LOS4 *bool `json:"lOS4,omitempty"`
	// Indicates Length of Stay 5 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable.
	LOS5 *bool `json:"lOS5,omitempty"`
	// Indicates Length of Stay 6 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable.
	LOS6 *bool `json:"lOS6,omitempty"`
	// Indicates Length of Stay 7 or more is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable.
	LOS7 *bool `json:"lOS7,omitempty"`
	// Defines restriction in conjunction with Restriction Code. Value must be specified for Restriction Codes MinimumStayThrough, MaximumStayThrough, MinimumLengthOfStay, MaximumLengthOfStay, MinimumAdvanceBooking, MaximumAdvanceBooking.
	Unit *int32 `json:"unit,omitempty"`
}

// NewRestrictionStatusType instantiates a new RestrictionStatusType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRestrictionStatusType() *RestrictionStatusType {
	this := RestrictionStatusType{}
	return &this
}

// NewRestrictionStatusTypeWithDefaults instantiates a new RestrictionStatusType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRestrictionStatusTypeWithDefaults() *RestrictionStatusType {
	this := RestrictionStatusType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *RestrictionStatusType) GetCode() RestrictionStatusesType {
	if o == nil || IsNil(o.Code) {
		var ret RestrictionStatusesType
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RestrictionStatusType) GetCodeOk() (*RestrictionStatusesType, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *RestrictionStatusType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given RestrictionStatusesType and assigns it to the Code field.
func (o *RestrictionStatusType) SetCode(v RestrictionStatusesType) {
	o.Code = &v
}

// GetLOS1 returns the LOS1 field value if set, zero value otherwise.
func (o *RestrictionStatusType) GetLOS1() bool {
	if o == nil || IsNil(o.LOS1) {
		var ret bool
		return ret
	}
	return *o.LOS1
}

// GetLOS1Ok returns a tuple with the LOS1 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RestrictionStatusType) GetLOS1Ok() (*bool, bool) {
	if o == nil || IsNil(o.LOS1) {
		return nil, false
	}
	return o.LOS1, true
}

// HasLOS1 returns a boolean if a field has been set.
func (o *RestrictionStatusType) HasLOS1() bool {
	if o != nil && !IsNil(o.LOS1) {
		return true
	}

	return false
}

// SetLOS1 gets a reference to the given bool and assigns it to the LOS1 field.
func (o *RestrictionStatusType) SetLOS1(v bool) {
	o.LOS1 = &v
}

// GetLOS2 returns the LOS2 field value if set, zero value otherwise.
func (o *RestrictionStatusType) GetLOS2() bool {
	if o == nil || IsNil(o.LOS2) {
		var ret bool
		return ret
	}
	return *o.LOS2
}

// GetLOS2Ok returns a tuple with the LOS2 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RestrictionStatusType) GetLOS2Ok() (*bool, bool) {
	if o == nil || IsNil(o.LOS2) {
		return nil, false
	}
	return o.LOS2, true
}

// HasLOS2 returns a boolean if a field has been set.
func (o *RestrictionStatusType) HasLOS2() bool {
	if o != nil && !IsNil(o.LOS2) {
		return true
	}

	return false
}

// SetLOS2 gets a reference to the given bool and assigns it to the LOS2 field.
func (o *RestrictionStatusType) SetLOS2(v bool) {
	o.LOS2 = &v
}

// GetLOS3 returns the LOS3 field value if set, zero value otherwise.
func (o *RestrictionStatusType) GetLOS3() bool {
	if o == nil || IsNil(o.LOS3) {
		var ret bool
		return ret
	}
	return *o.LOS3
}

// GetLOS3Ok returns a tuple with the LOS3 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RestrictionStatusType) GetLOS3Ok() (*bool, bool) {
	if o == nil || IsNil(o.LOS3) {
		return nil, false
	}
	return o.LOS3, true
}

// HasLOS3 returns a boolean if a field has been set.
func (o *RestrictionStatusType) HasLOS3() bool {
	if o != nil && !IsNil(o.LOS3) {
		return true
	}

	return false
}

// SetLOS3 gets a reference to the given bool and assigns it to the LOS3 field.
func (o *RestrictionStatusType) SetLOS3(v bool) {
	o.LOS3 = &v
}

// GetLOS4 returns the LOS4 field value if set, zero value otherwise.
func (o *RestrictionStatusType) GetLOS4() bool {
	if o == nil || IsNil(o.LOS4) {
		var ret bool
		return ret
	}
	return *o.LOS4
}

// GetLOS4Ok returns a tuple with the LOS4 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RestrictionStatusType) GetLOS4Ok() (*bool, bool) {
	if o == nil || IsNil(o.LOS4) {
		return nil, false
	}
	return o.LOS4, true
}

// HasLOS4 returns a boolean if a field has been set.
func (o *RestrictionStatusType) HasLOS4() bool {
	if o != nil && !IsNil(o.LOS4) {
		return true
	}

	return false
}

// SetLOS4 gets a reference to the given bool and assigns it to the LOS4 field.
func (o *RestrictionStatusType) SetLOS4(v bool) {
	o.LOS4 = &v
}

// GetLOS5 returns the LOS5 field value if set, zero value otherwise.
func (o *RestrictionStatusType) GetLOS5() bool {
	if o == nil || IsNil(o.LOS5) {
		var ret bool
		return ret
	}
	return *o.LOS5
}

// GetLOS5Ok returns a tuple with the LOS5 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RestrictionStatusType) GetLOS5Ok() (*bool, bool) {
	if o == nil || IsNil(o.LOS5) {
		return nil, false
	}
	return o.LOS5, true
}

// HasLOS5 returns a boolean if a field has been set.
func (o *RestrictionStatusType) HasLOS5() bool {
	if o != nil && !IsNil(o.LOS5) {
		return true
	}

	return false
}

// SetLOS5 gets a reference to the given bool and assigns it to the LOS5 field.
func (o *RestrictionStatusType) SetLOS5(v bool) {
	o.LOS5 = &v
}

// GetLOS6 returns the LOS6 field value if set, zero value otherwise.
func (o *RestrictionStatusType) GetLOS6() bool {
	if o == nil || IsNil(o.LOS6) {
		var ret bool
		return ret
	}
	return *o.LOS6
}

// GetLOS6Ok returns a tuple with the LOS6 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RestrictionStatusType) GetLOS6Ok() (*bool, bool) {
	if o == nil || IsNil(o.LOS6) {
		return nil, false
	}
	return o.LOS6, true
}

// HasLOS6 returns a boolean if a field has been set.
func (o *RestrictionStatusType) HasLOS6() bool {
	if o != nil && !IsNil(o.LOS6) {
		return true
	}

	return false
}

// SetLOS6 gets a reference to the given bool and assigns it to the LOS6 field.
func (o *RestrictionStatusType) SetLOS6(v bool) {
	o.LOS6 = &v
}

// GetLOS7 returns the LOS7 field value if set, zero value otherwise.
func (o *RestrictionStatusType) GetLOS7() bool {
	if o == nil || IsNil(o.LOS7) {
		var ret bool
		return ret
	}
	return *o.LOS7
}

// GetLOS7Ok returns a tuple with the LOS7 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RestrictionStatusType) GetLOS7Ok() (*bool, bool) {
	if o == nil || IsNil(o.LOS7) {
		return nil, false
	}
	return o.LOS7, true
}

// HasLOS7 returns a boolean if a field has been set.
func (o *RestrictionStatusType) HasLOS7() bool {
	if o != nil && !IsNil(o.LOS7) {
		return true
	}

	return false
}

// SetLOS7 gets a reference to the given bool and assigns it to the LOS7 field.
func (o *RestrictionStatusType) SetLOS7(v bool) {
	o.LOS7 = &v
}

// GetUnit returns the Unit field value if set, zero value otherwise.
func (o *RestrictionStatusType) GetUnit() int32 {
	if o == nil || IsNil(o.Unit) {
		var ret int32
		return ret
	}
	return *o.Unit
}

// GetUnitOk returns a tuple with the Unit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RestrictionStatusType) GetUnitOk() (*int32, bool) {
	if o == nil || IsNil(o.Unit) {
		return nil, false
	}
	return o.Unit, true
}

// HasUnit returns a boolean if a field has been set.
func (o *RestrictionStatusType) HasUnit() bool {
	if o != nil && !IsNil(o.Unit) {
		return true
	}

	return false
}

// SetUnit gets a reference to the given int32 and assigns it to the Unit field.
func (o *RestrictionStatusType) SetUnit(v int32) {
	o.Unit = &v
}

func (o RestrictionStatusType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RestrictionStatusType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.LOS1) {
		toSerialize["lOS1"] = o.LOS1
	}
	if !IsNil(o.LOS2) {
		toSerialize["lOS2"] = o.LOS2
	}
	if !IsNil(o.LOS3) {
		toSerialize["lOS3"] = o.LOS3
	}
	if !IsNil(o.LOS4) {
		toSerialize["lOS4"] = o.LOS4
	}
	if !IsNil(o.LOS5) {
		toSerialize["lOS5"] = o.LOS5
	}
	if !IsNil(o.LOS6) {
		toSerialize["lOS6"] = o.LOS6
	}
	if !IsNil(o.LOS7) {
		toSerialize["lOS7"] = o.LOS7
	}
	if !IsNil(o.Unit) {
		toSerialize["unit"] = o.Unit
	}
	return toSerialize, nil
}

type NullableRestrictionStatusType struct {
	value *RestrictionStatusType
	isSet bool
}

func (v NullableRestrictionStatusType) Get() *RestrictionStatusType {
	return v.value
}

func (v *NullableRestrictionStatusType) Set(val *RestrictionStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableRestrictionStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableRestrictionStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRestrictionStatusType(val *RestrictionStatusType) *NullableRestrictionStatusType {
	return &NullableRestrictionStatusType{value: val, isSet: true}
}

func (v NullableRestrictionStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRestrictionStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


