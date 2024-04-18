/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the ShiftBlockCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ShiftBlockCriteriaType{}

// ShiftBlockCriteriaType struct for ShiftBlockCriteriaType
type ShiftBlockCriteriaType struct {
	BlockId *BlockId `json:"blockId,omitempty"`
	// Hotel code of the business block.
	HotelId *string `json:"hotelId,omitempty"`
	// When true, this will shift the block even if there are rooms pre-allocated.
	IgnorePreAllocatedRooms *bool `json:"ignorePreAllocatedRooms,omitempty"`
	// When true, this will shift the block even if there are active traces.
	IgnoreTraces *bool `json:"ignoreTraces,omitempty"`
	// New start date of the business block.
	NewStartDate *string `json:"newStartDate,omitempty"`
	// When true, this will overbook allocated rooms if needed.
	OverbookAll *bool `json:"overbookAll,omitempty"`
	// Indicates whether to ignore any warning during applying the changes to the events associated with the current block.
	OverrideEventsProcessingWarnings *bool `json:"overrideEventsProcessingWarnings,omitempty"`
	// When true, this will remove alternate dates for this block before shifting dates.
	RemoveAlternateDates *bool `json:"removeAlternateDates,omitempty"`
	// When true, this will validate alternate dates for this block before shifting dates.
	ValidateAlternateDates *bool `json:"validateAlternateDates,omitempty"`
}

// NewShiftBlockCriteriaType instantiates a new ShiftBlockCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewShiftBlockCriteriaType() *ShiftBlockCriteriaType {
	this := ShiftBlockCriteriaType{}
	return &this
}

// NewShiftBlockCriteriaTypeWithDefaults instantiates a new ShiftBlockCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewShiftBlockCriteriaTypeWithDefaults() *ShiftBlockCriteriaType {
	this := ShiftBlockCriteriaType{}
	return &this
}

// GetBlockId returns the BlockId field value if set, zero value otherwise.
func (o *ShiftBlockCriteriaType) GetBlockId() BlockId {
	if o == nil || IsNil(o.BlockId) {
		var ret BlockId
		return ret
	}
	return *o.BlockId
}

// GetBlockIdOk returns a tuple with the BlockId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ShiftBlockCriteriaType) GetBlockIdOk() (*BlockId, bool) {
	if o == nil || IsNil(o.BlockId) {
		return nil, false
	}
	return o.BlockId, true
}

// HasBlockId returns a boolean if a field has been set.
func (o *ShiftBlockCriteriaType) HasBlockId() bool {
	if o != nil && !IsNil(o.BlockId) {
		return true
	}

	return false
}

// SetBlockId gets a reference to the given BlockId and assigns it to the BlockId field.
func (o *ShiftBlockCriteriaType) SetBlockId(v BlockId) {
	o.BlockId = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ShiftBlockCriteriaType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ShiftBlockCriteriaType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ShiftBlockCriteriaType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ShiftBlockCriteriaType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetIgnorePreAllocatedRooms returns the IgnorePreAllocatedRooms field value if set, zero value otherwise.
func (o *ShiftBlockCriteriaType) GetIgnorePreAllocatedRooms() bool {
	if o == nil || IsNil(o.IgnorePreAllocatedRooms) {
		var ret bool
		return ret
	}
	return *o.IgnorePreAllocatedRooms
}

// GetIgnorePreAllocatedRoomsOk returns a tuple with the IgnorePreAllocatedRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ShiftBlockCriteriaType) GetIgnorePreAllocatedRoomsOk() (*bool, bool) {
	if o == nil || IsNil(o.IgnorePreAllocatedRooms) {
		return nil, false
	}
	return o.IgnorePreAllocatedRooms, true
}

// HasIgnorePreAllocatedRooms returns a boolean if a field has been set.
func (o *ShiftBlockCriteriaType) HasIgnorePreAllocatedRooms() bool {
	if o != nil && !IsNil(o.IgnorePreAllocatedRooms) {
		return true
	}

	return false
}

// SetIgnorePreAllocatedRooms gets a reference to the given bool and assigns it to the IgnorePreAllocatedRooms field.
func (o *ShiftBlockCriteriaType) SetIgnorePreAllocatedRooms(v bool) {
	o.IgnorePreAllocatedRooms = &v
}

// GetIgnoreTraces returns the IgnoreTraces field value if set, zero value otherwise.
func (o *ShiftBlockCriteriaType) GetIgnoreTraces() bool {
	if o == nil || IsNil(o.IgnoreTraces) {
		var ret bool
		return ret
	}
	return *o.IgnoreTraces
}

// GetIgnoreTracesOk returns a tuple with the IgnoreTraces field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ShiftBlockCriteriaType) GetIgnoreTracesOk() (*bool, bool) {
	if o == nil || IsNil(o.IgnoreTraces) {
		return nil, false
	}
	return o.IgnoreTraces, true
}

// HasIgnoreTraces returns a boolean if a field has been set.
func (o *ShiftBlockCriteriaType) HasIgnoreTraces() bool {
	if o != nil && !IsNil(o.IgnoreTraces) {
		return true
	}

	return false
}

// SetIgnoreTraces gets a reference to the given bool and assigns it to the IgnoreTraces field.
func (o *ShiftBlockCriteriaType) SetIgnoreTraces(v bool) {
	o.IgnoreTraces = &v
}

// GetNewStartDate returns the NewStartDate field value if set, zero value otherwise.
func (o *ShiftBlockCriteriaType) GetNewStartDate() string {
	if o == nil || IsNil(o.NewStartDate) {
		var ret string
		return ret
	}
	return *o.NewStartDate
}

// GetNewStartDateOk returns a tuple with the NewStartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ShiftBlockCriteriaType) GetNewStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.NewStartDate) {
		return nil, false
	}
	return o.NewStartDate, true
}

// HasNewStartDate returns a boolean if a field has been set.
func (o *ShiftBlockCriteriaType) HasNewStartDate() bool {
	if o != nil && !IsNil(o.NewStartDate) {
		return true
	}

	return false
}

// SetNewStartDate gets a reference to the given string and assigns it to the NewStartDate field.
func (o *ShiftBlockCriteriaType) SetNewStartDate(v string) {
	o.NewStartDate = &v
}

// GetOverbookAll returns the OverbookAll field value if set, zero value otherwise.
func (o *ShiftBlockCriteriaType) GetOverbookAll() bool {
	if o == nil || IsNil(o.OverbookAll) {
		var ret bool
		return ret
	}
	return *o.OverbookAll
}

// GetOverbookAllOk returns a tuple with the OverbookAll field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ShiftBlockCriteriaType) GetOverbookAllOk() (*bool, bool) {
	if o == nil || IsNil(o.OverbookAll) {
		return nil, false
	}
	return o.OverbookAll, true
}

// HasOverbookAll returns a boolean if a field has been set.
func (o *ShiftBlockCriteriaType) HasOverbookAll() bool {
	if o != nil && !IsNil(o.OverbookAll) {
		return true
	}

	return false
}

// SetOverbookAll gets a reference to the given bool and assigns it to the OverbookAll field.
func (o *ShiftBlockCriteriaType) SetOverbookAll(v bool) {
	o.OverbookAll = &v
}

// GetOverrideEventsProcessingWarnings returns the OverrideEventsProcessingWarnings field value if set, zero value otherwise.
func (o *ShiftBlockCriteriaType) GetOverrideEventsProcessingWarnings() bool {
	if o == nil || IsNil(o.OverrideEventsProcessingWarnings) {
		var ret bool
		return ret
	}
	return *o.OverrideEventsProcessingWarnings
}

// GetOverrideEventsProcessingWarningsOk returns a tuple with the OverrideEventsProcessingWarnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ShiftBlockCriteriaType) GetOverrideEventsProcessingWarningsOk() (*bool, bool) {
	if o == nil || IsNil(o.OverrideEventsProcessingWarnings) {
		return nil, false
	}
	return o.OverrideEventsProcessingWarnings, true
}

// HasOverrideEventsProcessingWarnings returns a boolean if a field has been set.
func (o *ShiftBlockCriteriaType) HasOverrideEventsProcessingWarnings() bool {
	if o != nil && !IsNil(o.OverrideEventsProcessingWarnings) {
		return true
	}

	return false
}

// SetOverrideEventsProcessingWarnings gets a reference to the given bool and assigns it to the OverrideEventsProcessingWarnings field.
func (o *ShiftBlockCriteriaType) SetOverrideEventsProcessingWarnings(v bool) {
	o.OverrideEventsProcessingWarnings = &v
}

// GetRemoveAlternateDates returns the RemoveAlternateDates field value if set, zero value otherwise.
func (o *ShiftBlockCriteriaType) GetRemoveAlternateDates() bool {
	if o == nil || IsNil(o.RemoveAlternateDates) {
		var ret bool
		return ret
	}
	return *o.RemoveAlternateDates
}

// GetRemoveAlternateDatesOk returns a tuple with the RemoveAlternateDates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ShiftBlockCriteriaType) GetRemoveAlternateDatesOk() (*bool, bool) {
	if o == nil || IsNil(o.RemoveAlternateDates) {
		return nil, false
	}
	return o.RemoveAlternateDates, true
}

// HasRemoveAlternateDates returns a boolean if a field has been set.
func (o *ShiftBlockCriteriaType) HasRemoveAlternateDates() bool {
	if o != nil && !IsNil(o.RemoveAlternateDates) {
		return true
	}

	return false
}

// SetRemoveAlternateDates gets a reference to the given bool and assigns it to the RemoveAlternateDates field.
func (o *ShiftBlockCriteriaType) SetRemoveAlternateDates(v bool) {
	o.RemoveAlternateDates = &v
}

// GetValidateAlternateDates returns the ValidateAlternateDates field value if set, zero value otherwise.
func (o *ShiftBlockCriteriaType) GetValidateAlternateDates() bool {
	if o == nil || IsNil(o.ValidateAlternateDates) {
		var ret bool
		return ret
	}
	return *o.ValidateAlternateDates
}

// GetValidateAlternateDatesOk returns a tuple with the ValidateAlternateDates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ShiftBlockCriteriaType) GetValidateAlternateDatesOk() (*bool, bool) {
	if o == nil || IsNil(o.ValidateAlternateDates) {
		return nil, false
	}
	return o.ValidateAlternateDates, true
}

// HasValidateAlternateDates returns a boolean if a field has been set.
func (o *ShiftBlockCriteriaType) HasValidateAlternateDates() bool {
	if o != nil && !IsNil(o.ValidateAlternateDates) {
		return true
	}

	return false
}

// SetValidateAlternateDates gets a reference to the given bool and assigns it to the ValidateAlternateDates field.
func (o *ShiftBlockCriteriaType) SetValidateAlternateDates(v bool) {
	o.ValidateAlternateDates = &v
}

func (o ShiftBlockCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ShiftBlockCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockId) {
		toSerialize["blockId"] = o.BlockId
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.IgnorePreAllocatedRooms) {
		toSerialize["ignorePreAllocatedRooms"] = o.IgnorePreAllocatedRooms
	}
	if !IsNil(o.IgnoreTraces) {
		toSerialize["ignoreTraces"] = o.IgnoreTraces
	}
	if !IsNil(o.NewStartDate) {
		toSerialize["newStartDate"] = o.NewStartDate
	}
	if !IsNil(o.OverbookAll) {
		toSerialize["overbookAll"] = o.OverbookAll
	}
	if !IsNil(o.OverrideEventsProcessingWarnings) {
		toSerialize["overrideEventsProcessingWarnings"] = o.OverrideEventsProcessingWarnings
	}
	if !IsNil(o.RemoveAlternateDates) {
		toSerialize["removeAlternateDates"] = o.RemoveAlternateDates
	}
	if !IsNil(o.ValidateAlternateDates) {
		toSerialize["validateAlternateDates"] = o.ValidateAlternateDates
	}
	return toSerialize, nil
}

type NullableShiftBlockCriteriaType struct {
	value *ShiftBlockCriteriaType
	isSet bool
}

func (v NullableShiftBlockCriteriaType) Get() *ShiftBlockCriteriaType {
	return v.value
}

func (v *NullableShiftBlockCriteriaType) Set(val *ShiftBlockCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableShiftBlockCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableShiftBlockCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableShiftBlockCriteriaType(val *ShiftBlockCriteriaType) *NullableShiftBlockCriteriaType {
	return &NullableShiftBlockCriteriaType{value: val, isSet: true}
}

func (v NullableShiftBlockCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableShiftBlockCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

