/*
OPERA Cloud Integration Configuration API

APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package intcfg

import (
	"encoding/json"
)

// checks if the HotelInterfaceControllerRegType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelInterfaceControllerRegType{}

// HotelInterfaceControllerRegType struct for HotelInterfaceControllerRegType
type HotelInterfaceControllerRegType struct {
	// Controller Registry Setting
	CntrlRegSetting *string `json:"cntrlRegSetting,omitempty"`
	// Data
	Data *string `json:"data,omitempty"`
	// Description
	Description *string `json:"description,omitempty"`
	// Internal ID to reference the records.
	Id *float32 `json:"id,omitempty"`
	// Machine Name
	Machine *string `json:"machine,omitempty"`
}

// NewHotelInterfaceControllerRegType instantiates a new HotelInterfaceControllerRegType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelInterfaceControllerRegType() *HotelInterfaceControllerRegType {
	this := HotelInterfaceControllerRegType{}
	return &this
}

// NewHotelInterfaceControllerRegTypeWithDefaults instantiates a new HotelInterfaceControllerRegType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelInterfaceControllerRegTypeWithDefaults() *HotelInterfaceControllerRegType {
	this := HotelInterfaceControllerRegType{}
	return &this
}

// GetCntrlRegSetting returns the CntrlRegSetting field value if set, zero value otherwise.
func (o *HotelInterfaceControllerRegType) GetCntrlRegSetting() string {
	if o == nil || IsNil(o.CntrlRegSetting) {
		var ret string
		return ret
	}
	return *o.CntrlRegSetting
}

// GetCntrlRegSettingOk returns a tuple with the CntrlRegSetting field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInterfaceControllerRegType) GetCntrlRegSettingOk() (*string, bool) {
	if o == nil || IsNil(o.CntrlRegSetting) {
		return nil, false
	}
	return o.CntrlRegSetting, true
}

// HasCntrlRegSetting returns a boolean if a field has been set.
func (o *HotelInterfaceControllerRegType) HasCntrlRegSetting() bool {
	if o != nil && !IsNil(o.CntrlRegSetting) {
		return true
	}

	return false
}

// SetCntrlRegSetting gets a reference to the given string and assigns it to the CntrlRegSetting field.
func (o *HotelInterfaceControllerRegType) SetCntrlRegSetting(v string) {
	o.CntrlRegSetting = &v
}

// GetData returns the Data field value if set, zero value otherwise.
func (o *HotelInterfaceControllerRegType) GetData() string {
	if o == nil || IsNil(o.Data) {
		var ret string
		return ret
	}
	return *o.Data
}

// GetDataOk returns a tuple with the Data field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInterfaceControllerRegType) GetDataOk() (*string, bool) {
	if o == nil || IsNil(o.Data) {
		return nil, false
	}
	return o.Data, true
}

// HasData returns a boolean if a field has been set.
func (o *HotelInterfaceControllerRegType) HasData() bool {
	if o != nil && !IsNil(o.Data) {
		return true
	}

	return false
}

// SetData gets a reference to the given string and assigns it to the Data field.
func (o *HotelInterfaceControllerRegType) SetData(v string) {
	o.Data = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *HotelInterfaceControllerRegType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInterfaceControllerRegType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *HotelInterfaceControllerRegType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *HotelInterfaceControllerRegType) SetDescription(v string) {
	o.Description = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *HotelInterfaceControllerRegType) GetId() float32 {
	if o == nil || IsNil(o.Id) {
		var ret float32
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInterfaceControllerRegType) GetIdOk() (*float32, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *HotelInterfaceControllerRegType) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given float32 and assigns it to the Id field.
func (o *HotelInterfaceControllerRegType) SetId(v float32) {
	o.Id = &v
}

// GetMachine returns the Machine field value if set, zero value otherwise.
func (o *HotelInterfaceControllerRegType) GetMachine() string {
	if o == nil || IsNil(o.Machine) {
		var ret string
		return ret
	}
	return *o.Machine
}

// GetMachineOk returns a tuple with the Machine field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInterfaceControllerRegType) GetMachineOk() (*string, bool) {
	if o == nil || IsNil(o.Machine) {
		return nil, false
	}
	return o.Machine, true
}

// HasMachine returns a boolean if a field has been set.
func (o *HotelInterfaceControllerRegType) HasMachine() bool {
	if o != nil && !IsNil(o.Machine) {
		return true
	}

	return false
}

// SetMachine gets a reference to the given string and assigns it to the Machine field.
func (o *HotelInterfaceControllerRegType) SetMachine(v string) {
	o.Machine = &v
}

func (o HotelInterfaceControllerRegType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelInterfaceControllerRegType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CntrlRegSetting) {
		toSerialize["cntrlRegSetting"] = o.CntrlRegSetting
	}
	if !IsNil(o.Data) {
		toSerialize["data"] = o.Data
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.Machine) {
		toSerialize["machine"] = o.Machine
	}
	return toSerialize, nil
}

type NullableHotelInterfaceControllerRegType struct {
	value *HotelInterfaceControllerRegType
	isSet bool
}

func (v NullableHotelInterfaceControllerRegType) Get() *HotelInterfaceControllerRegType {
	return v.value
}

func (v *NullableHotelInterfaceControllerRegType) Set(val *HotelInterfaceControllerRegType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelInterfaceControllerRegType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelInterfaceControllerRegType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelInterfaceControllerRegType(val *HotelInterfaceControllerRegType) *NullableHotelInterfaceControllerRegType {
	return &NullableHotelInterfaceControllerRegType{value: val, isSet: true}
}

func (v NullableHotelInterfaceControllerRegType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelInterfaceControllerRegType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


