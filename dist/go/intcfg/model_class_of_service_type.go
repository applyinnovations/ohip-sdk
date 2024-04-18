/*
OPERA Cloud Integration Configuration API

APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package intcfg

import (
	"encoding/json"
)

// checks if the ClassOfServiceType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ClassOfServiceType{}

// ClassOfServiceType struct for ClassOfServiceType
type ClassOfServiceType struct {
	// 
	CosMsgLmpRg *string `json:"cosMsgLmpRg,omitempty"`
	// 
	CosChkRg *string `json:"cosChkRg,omitempty"`
	// 
	CosMsgCmdRg *string `json:"cosMsgCmdRg,omitempty"`
	// 
	RoomEquipCi *bool `json:"roomEquipCi,omitempty"`
	// 
	RoomEquipCo *bool `json:"roomEquipCo,omitempty"`
	// 
	GuestDataChangeCo *bool `json:"guestDataChangeCo,omitempty"`
	// Standard name format in the class of service.
	StandardNameFormat *string `json:"standardNameFormat,omitempty"`
	// Defined name format in the class of service.
	DefinedNameFormat []DefinedNameFormatType `json:"definedNameFormat,omitempty"`
	// Indicates whethe a message will be triggered when a room/reservation is placed on QUEUE
	ResvInQueue *bool `json:"resvInQueue,omitempty"`
}

// NewClassOfServiceType instantiates a new ClassOfServiceType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewClassOfServiceType() *ClassOfServiceType {
	this := ClassOfServiceType{}
	return &this
}

// NewClassOfServiceTypeWithDefaults instantiates a new ClassOfServiceType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewClassOfServiceTypeWithDefaults() *ClassOfServiceType {
	this := ClassOfServiceType{}
	return &this
}

// GetCosMsgLmpRg returns the CosMsgLmpRg field value if set, zero value otherwise.
func (o *ClassOfServiceType) GetCosMsgLmpRg() string {
	if o == nil || IsNil(o.CosMsgLmpRg) {
		var ret string
		return ret
	}
	return *o.CosMsgLmpRg
}

// GetCosMsgLmpRgOk returns a tuple with the CosMsgLmpRg field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClassOfServiceType) GetCosMsgLmpRgOk() (*string, bool) {
	if o == nil || IsNil(o.CosMsgLmpRg) {
		return nil, false
	}
	return o.CosMsgLmpRg, true
}

// HasCosMsgLmpRg returns a boolean if a field has been set.
func (o *ClassOfServiceType) HasCosMsgLmpRg() bool {
	if o != nil && !IsNil(o.CosMsgLmpRg) {
		return true
	}

	return false
}

// SetCosMsgLmpRg gets a reference to the given string and assigns it to the CosMsgLmpRg field.
func (o *ClassOfServiceType) SetCosMsgLmpRg(v string) {
	o.CosMsgLmpRg = &v
}

// GetCosChkRg returns the CosChkRg field value if set, zero value otherwise.
func (o *ClassOfServiceType) GetCosChkRg() string {
	if o == nil || IsNil(o.CosChkRg) {
		var ret string
		return ret
	}
	return *o.CosChkRg
}

// GetCosChkRgOk returns a tuple with the CosChkRg field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClassOfServiceType) GetCosChkRgOk() (*string, bool) {
	if o == nil || IsNil(o.CosChkRg) {
		return nil, false
	}
	return o.CosChkRg, true
}

// HasCosChkRg returns a boolean if a field has been set.
func (o *ClassOfServiceType) HasCosChkRg() bool {
	if o != nil && !IsNil(o.CosChkRg) {
		return true
	}

	return false
}

// SetCosChkRg gets a reference to the given string and assigns it to the CosChkRg field.
func (o *ClassOfServiceType) SetCosChkRg(v string) {
	o.CosChkRg = &v
}

// GetCosMsgCmdRg returns the CosMsgCmdRg field value if set, zero value otherwise.
func (o *ClassOfServiceType) GetCosMsgCmdRg() string {
	if o == nil || IsNil(o.CosMsgCmdRg) {
		var ret string
		return ret
	}
	return *o.CosMsgCmdRg
}

// GetCosMsgCmdRgOk returns a tuple with the CosMsgCmdRg field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClassOfServiceType) GetCosMsgCmdRgOk() (*string, bool) {
	if o == nil || IsNil(o.CosMsgCmdRg) {
		return nil, false
	}
	return o.CosMsgCmdRg, true
}

// HasCosMsgCmdRg returns a boolean if a field has been set.
func (o *ClassOfServiceType) HasCosMsgCmdRg() bool {
	if o != nil && !IsNil(o.CosMsgCmdRg) {
		return true
	}

	return false
}

// SetCosMsgCmdRg gets a reference to the given string and assigns it to the CosMsgCmdRg field.
func (o *ClassOfServiceType) SetCosMsgCmdRg(v string) {
	o.CosMsgCmdRg = &v
}

// GetRoomEquipCi returns the RoomEquipCi field value if set, zero value otherwise.
func (o *ClassOfServiceType) GetRoomEquipCi() bool {
	if o == nil || IsNil(o.RoomEquipCi) {
		var ret bool
		return ret
	}
	return *o.RoomEquipCi
}

// GetRoomEquipCiOk returns a tuple with the RoomEquipCi field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClassOfServiceType) GetRoomEquipCiOk() (*bool, bool) {
	if o == nil || IsNil(o.RoomEquipCi) {
		return nil, false
	}
	return o.RoomEquipCi, true
}

// HasRoomEquipCi returns a boolean if a field has been set.
func (o *ClassOfServiceType) HasRoomEquipCi() bool {
	if o != nil && !IsNil(o.RoomEquipCi) {
		return true
	}

	return false
}

// SetRoomEquipCi gets a reference to the given bool and assigns it to the RoomEquipCi field.
func (o *ClassOfServiceType) SetRoomEquipCi(v bool) {
	o.RoomEquipCi = &v
}

// GetRoomEquipCo returns the RoomEquipCo field value if set, zero value otherwise.
func (o *ClassOfServiceType) GetRoomEquipCo() bool {
	if o == nil || IsNil(o.RoomEquipCo) {
		var ret bool
		return ret
	}
	return *o.RoomEquipCo
}

// GetRoomEquipCoOk returns a tuple with the RoomEquipCo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClassOfServiceType) GetRoomEquipCoOk() (*bool, bool) {
	if o == nil || IsNil(o.RoomEquipCo) {
		return nil, false
	}
	return o.RoomEquipCo, true
}

// HasRoomEquipCo returns a boolean if a field has been set.
func (o *ClassOfServiceType) HasRoomEquipCo() bool {
	if o != nil && !IsNil(o.RoomEquipCo) {
		return true
	}

	return false
}

// SetRoomEquipCo gets a reference to the given bool and assigns it to the RoomEquipCo field.
func (o *ClassOfServiceType) SetRoomEquipCo(v bool) {
	o.RoomEquipCo = &v
}

// GetGuestDataChangeCo returns the GuestDataChangeCo field value if set, zero value otherwise.
func (o *ClassOfServiceType) GetGuestDataChangeCo() bool {
	if o == nil || IsNil(o.GuestDataChangeCo) {
		var ret bool
		return ret
	}
	return *o.GuestDataChangeCo
}

// GetGuestDataChangeCoOk returns a tuple with the GuestDataChangeCo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClassOfServiceType) GetGuestDataChangeCoOk() (*bool, bool) {
	if o == nil || IsNil(o.GuestDataChangeCo) {
		return nil, false
	}
	return o.GuestDataChangeCo, true
}

// HasGuestDataChangeCo returns a boolean if a field has been set.
func (o *ClassOfServiceType) HasGuestDataChangeCo() bool {
	if o != nil && !IsNil(o.GuestDataChangeCo) {
		return true
	}

	return false
}

// SetGuestDataChangeCo gets a reference to the given bool and assigns it to the GuestDataChangeCo field.
func (o *ClassOfServiceType) SetGuestDataChangeCo(v bool) {
	o.GuestDataChangeCo = &v
}

// GetStandardNameFormat returns the StandardNameFormat field value if set, zero value otherwise.
func (o *ClassOfServiceType) GetStandardNameFormat() string {
	if o == nil || IsNil(o.StandardNameFormat) {
		var ret string
		return ret
	}
	return *o.StandardNameFormat
}

// GetStandardNameFormatOk returns a tuple with the StandardNameFormat field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClassOfServiceType) GetStandardNameFormatOk() (*string, bool) {
	if o == nil || IsNil(o.StandardNameFormat) {
		return nil, false
	}
	return o.StandardNameFormat, true
}

// HasStandardNameFormat returns a boolean if a field has been set.
func (o *ClassOfServiceType) HasStandardNameFormat() bool {
	if o != nil && !IsNil(o.StandardNameFormat) {
		return true
	}

	return false
}

// SetStandardNameFormat gets a reference to the given string and assigns it to the StandardNameFormat field.
func (o *ClassOfServiceType) SetStandardNameFormat(v string) {
	o.StandardNameFormat = &v
}

// GetDefinedNameFormat returns the DefinedNameFormat field value if set, zero value otherwise.
func (o *ClassOfServiceType) GetDefinedNameFormat() []DefinedNameFormatType {
	if o == nil || IsNil(o.DefinedNameFormat) {
		var ret []DefinedNameFormatType
		return ret
	}
	return o.DefinedNameFormat
}

// GetDefinedNameFormatOk returns a tuple with the DefinedNameFormat field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClassOfServiceType) GetDefinedNameFormatOk() ([]DefinedNameFormatType, bool) {
	if o == nil || IsNil(o.DefinedNameFormat) {
		return nil, false
	}
	return o.DefinedNameFormat, true
}

// HasDefinedNameFormat returns a boolean if a field has been set.
func (o *ClassOfServiceType) HasDefinedNameFormat() bool {
	if o != nil && !IsNil(o.DefinedNameFormat) {
		return true
	}

	return false
}

// SetDefinedNameFormat gets a reference to the given []DefinedNameFormatType and assigns it to the DefinedNameFormat field.
func (o *ClassOfServiceType) SetDefinedNameFormat(v []DefinedNameFormatType) {
	o.DefinedNameFormat = v
}

// GetResvInQueue returns the ResvInQueue field value if set, zero value otherwise.
func (o *ClassOfServiceType) GetResvInQueue() bool {
	if o == nil || IsNil(o.ResvInQueue) {
		var ret bool
		return ret
	}
	return *o.ResvInQueue
}

// GetResvInQueueOk returns a tuple with the ResvInQueue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ClassOfServiceType) GetResvInQueueOk() (*bool, bool) {
	if o == nil || IsNil(o.ResvInQueue) {
		return nil, false
	}
	return o.ResvInQueue, true
}

// HasResvInQueue returns a boolean if a field has been set.
func (o *ClassOfServiceType) HasResvInQueue() bool {
	if o != nil && !IsNil(o.ResvInQueue) {
		return true
	}

	return false
}

// SetResvInQueue gets a reference to the given bool and assigns it to the ResvInQueue field.
func (o *ClassOfServiceType) SetResvInQueue(v bool) {
	o.ResvInQueue = &v
}

func (o ClassOfServiceType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ClassOfServiceType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CosMsgLmpRg) {
		toSerialize["cosMsgLmpRg"] = o.CosMsgLmpRg
	}
	if !IsNil(o.CosChkRg) {
		toSerialize["cosChkRg"] = o.CosChkRg
	}
	if !IsNil(o.CosMsgCmdRg) {
		toSerialize["cosMsgCmdRg"] = o.CosMsgCmdRg
	}
	if !IsNil(o.RoomEquipCi) {
		toSerialize["roomEquipCi"] = o.RoomEquipCi
	}
	if !IsNil(o.RoomEquipCo) {
		toSerialize["roomEquipCo"] = o.RoomEquipCo
	}
	if !IsNil(o.GuestDataChangeCo) {
		toSerialize["guestDataChangeCo"] = o.GuestDataChangeCo
	}
	if !IsNil(o.StandardNameFormat) {
		toSerialize["standardNameFormat"] = o.StandardNameFormat
	}
	if !IsNil(o.DefinedNameFormat) {
		toSerialize["definedNameFormat"] = o.DefinedNameFormat
	}
	if !IsNil(o.ResvInQueue) {
		toSerialize["resvInQueue"] = o.ResvInQueue
	}
	return toSerialize, nil
}

type NullableClassOfServiceType struct {
	value *ClassOfServiceType
	isSet bool
}

func (v NullableClassOfServiceType) Get() *ClassOfServiceType {
	return v.value
}

func (v *NullableClassOfServiceType) Set(val *ClassOfServiceType) {
	v.value = val
	v.isSet = true
}

func (v NullableClassOfServiceType) IsSet() bool {
	return v.isSet
}

func (v *NullableClassOfServiceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableClassOfServiceType(val *ClassOfServiceType) *NullableClassOfServiceType {
	return &NullableClassOfServiceType{value: val, isSet: true}
}

func (v NullableClassOfServiceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableClassOfServiceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

