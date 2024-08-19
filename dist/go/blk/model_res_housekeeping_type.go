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

// checks if the ResHousekeepingType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResHousekeepingType{}

// ResHousekeepingType Holds housekeeping turndown service information for the room.
type ResHousekeepingType struct {
	// Expected Start Time for housekeeping task(s).
	ExpectedServiceTime *string `json:"expectedServiceTime,omitempty"`
	FacilityTaskInfo *FacilityTaskType `json:"facilityTaskInfo,omitempty"`
	// Turndown instructions for the room.
	Instructions *string `json:"instructions,omitempty"`
	// Indicates if a linen change is necessary.
	LinenChange *bool `json:"linenChange,omitempty"`
	RoomStatus *HousekeepingRoomStatusType `json:"roomStatus,omitempty"`
	// This is the Turndown room service time.
	ServiceTime *string `json:"serviceTime,omitempty"`
	// Indicates whether guest wants turndown facility or not.
	TurndownRequested *bool `json:"turndownRequested,omitempty"`
}

// NewResHousekeepingType instantiates a new ResHousekeepingType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResHousekeepingType() *ResHousekeepingType {
	this := ResHousekeepingType{}
	return &this
}

// NewResHousekeepingTypeWithDefaults instantiates a new ResHousekeepingType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResHousekeepingTypeWithDefaults() *ResHousekeepingType {
	this := ResHousekeepingType{}
	return &this
}

// GetExpectedServiceTime returns the ExpectedServiceTime field value if set, zero value otherwise.
func (o *ResHousekeepingType) GetExpectedServiceTime() string {
	if o == nil || IsNil(o.ExpectedServiceTime) {
		var ret string
		return ret
	}
	return *o.ExpectedServiceTime
}

// GetExpectedServiceTimeOk returns a tuple with the ExpectedServiceTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResHousekeepingType) GetExpectedServiceTimeOk() (*string, bool) {
	if o == nil || IsNil(o.ExpectedServiceTime) {
		return nil, false
	}
	return o.ExpectedServiceTime, true
}

// HasExpectedServiceTime returns a boolean if a field has been set.
func (o *ResHousekeepingType) HasExpectedServiceTime() bool {
	if o != nil && !IsNil(o.ExpectedServiceTime) {
		return true
	}

	return false
}

// SetExpectedServiceTime gets a reference to the given string and assigns it to the ExpectedServiceTime field.
func (o *ResHousekeepingType) SetExpectedServiceTime(v string) {
	o.ExpectedServiceTime = &v
}

// GetFacilityTaskInfo returns the FacilityTaskInfo field value if set, zero value otherwise.
func (o *ResHousekeepingType) GetFacilityTaskInfo() FacilityTaskType {
	if o == nil || IsNil(o.FacilityTaskInfo) {
		var ret FacilityTaskType
		return ret
	}
	return *o.FacilityTaskInfo
}

// GetFacilityTaskInfoOk returns a tuple with the FacilityTaskInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResHousekeepingType) GetFacilityTaskInfoOk() (*FacilityTaskType, bool) {
	if o == nil || IsNil(o.FacilityTaskInfo) {
		return nil, false
	}
	return o.FacilityTaskInfo, true
}

// HasFacilityTaskInfo returns a boolean if a field has been set.
func (o *ResHousekeepingType) HasFacilityTaskInfo() bool {
	if o != nil && !IsNil(o.FacilityTaskInfo) {
		return true
	}

	return false
}

// SetFacilityTaskInfo gets a reference to the given FacilityTaskType and assigns it to the FacilityTaskInfo field.
func (o *ResHousekeepingType) SetFacilityTaskInfo(v FacilityTaskType) {
	o.FacilityTaskInfo = &v
}

// GetInstructions returns the Instructions field value if set, zero value otherwise.
func (o *ResHousekeepingType) GetInstructions() string {
	if o == nil || IsNil(o.Instructions) {
		var ret string
		return ret
	}
	return *o.Instructions
}

// GetInstructionsOk returns a tuple with the Instructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResHousekeepingType) GetInstructionsOk() (*string, bool) {
	if o == nil || IsNil(o.Instructions) {
		return nil, false
	}
	return o.Instructions, true
}

// HasInstructions returns a boolean if a field has been set.
func (o *ResHousekeepingType) HasInstructions() bool {
	if o != nil && !IsNil(o.Instructions) {
		return true
	}

	return false
}

// SetInstructions gets a reference to the given string and assigns it to the Instructions field.
func (o *ResHousekeepingType) SetInstructions(v string) {
	o.Instructions = &v
}

// GetLinenChange returns the LinenChange field value if set, zero value otherwise.
func (o *ResHousekeepingType) GetLinenChange() bool {
	if o == nil || IsNil(o.LinenChange) {
		var ret bool
		return ret
	}
	return *o.LinenChange
}

// GetLinenChangeOk returns a tuple with the LinenChange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResHousekeepingType) GetLinenChangeOk() (*bool, bool) {
	if o == nil || IsNil(o.LinenChange) {
		return nil, false
	}
	return o.LinenChange, true
}

// HasLinenChange returns a boolean if a field has been set.
func (o *ResHousekeepingType) HasLinenChange() bool {
	if o != nil && !IsNil(o.LinenChange) {
		return true
	}

	return false
}

// SetLinenChange gets a reference to the given bool and assigns it to the LinenChange field.
func (o *ResHousekeepingType) SetLinenChange(v bool) {
	o.LinenChange = &v
}

// GetRoomStatus returns the RoomStatus field value if set, zero value otherwise.
func (o *ResHousekeepingType) GetRoomStatus() HousekeepingRoomStatusType {
	if o == nil || IsNil(o.RoomStatus) {
		var ret HousekeepingRoomStatusType
		return ret
	}
	return *o.RoomStatus
}

// GetRoomStatusOk returns a tuple with the RoomStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResHousekeepingType) GetRoomStatusOk() (*HousekeepingRoomStatusType, bool) {
	if o == nil || IsNil(o.RoomStatus) {
		return nil, false
	}
	return o.RoomStatus, true
}

// HasRoomStatus returns a boolean if a field has been set.
func (o *ResHousekeepingType) HasRoomStatus() bool {
	if o != nil && !IsNil(o.RoomStatus) {
		return true
	}

	return false
}

// SetRoomStatus gets a reference to the given HousekeepingRoomStatusType and assigns it to the RoomStatus field.
func (o *ResHousekeepingType) SetRoomStatus(v HousekeepingRoomStatusType) {
	o.RoomStatus = &v
}

// GetServiceTime returns the ServiceTime field value if set, zero value otherwise.
func (o *ResHousekeepingType) GetServiceTime() string {
	if o == nil || IsNil(o.ServiceTime) {
		var ret string
		return ret
	}
	return *o.ServiceTime
}

// GetServiceTimeOk returns a tuple with the ServiceTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResHousekeepingType) GetServiceTimeOk() (*string, bool) {
	if o == nil || IsNil(o.ServiceTime) {
		return nil, false
	}
	return o.ServiceTime, true
}

// HasServiceTime returns a boolean if a field has been set.
func (o *ResHousekeepingType) HasServiceTime() bool {
	if o != nil && !IsNil(o.ServiceTime) {
		return true
	}

	return false
}

// SetServiceTime gets a reference to the given string and assigns it to the ServiceTime field.
func (o *ResHousekeepingType) SetServiceTime(v string) {
	o.ServiceTime = &v
}

// GetTurndownRequested returns the TurndownRequested field value if set, zero value otherwise.
func (o *ResHousekeepingType) GetTurndownRequested() bool {
	if o == nil || IsNil(o.TurndownRequested) {
		var ret bool
		return ret
	}
	return *o.TurndownRequested
}

// GetTurndownRequestedOk returns a tuple with the TurndownRequested field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResHousekeepingType) GetTurndownRequestedOk() (*bool, bool) {
	if o == nil || IsNil(o.TurndownRequested) {
		return nil, false
	}
	return o.TurndownRequested, true
}

// HasTurndownRequested returns a boolean if a field has been set.
func (o *ResHousekeepingType) HasTurndownRequested() bool {
	if o != nil && !IsNil(o.TurndownRequested) {
		return true
	}

	return false
}

// SetTurndownRequested gets a reference to the given bool and assigns it to the TurndownRequested field.
func (o *ResHousekeepingType) SetTurndownRequested(v bool) {
	o.TurndownRequested = &v
}

func (o ResHousekeepingType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResHousekeepingType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ExpectedServiceTime) {
		toSerialize["expectedServiceTime"] = o.ExpectedServiceTime
	}
	if !IsNil(o.FacilityTaskInfo) {
		toSerialize["facilityTaskInfo"] = o.FacilityTaskInfo
	}
	if !IsNil(o.Instructions) {
		toSerialize["instructions"] = o.Instructions
	}
	if !IsNil(o.LinenChange) {
		toSerialize["linenChange"] = o.LinenChange
	}
	if !IsNil(o.RoomStatus) {
		toSerialize["roomStatus"] = o.RoomStatus
	}
	if !IsNil(o.ServiceTime) {
		toSerialize["serviceTime"] = o.ServiceTime
	}
	if !IsNil(o.TurndownRequested) {
		toSerialize["turndownRequested"] = o.TurndownRequested
	}
	return toSerialize, nil
}

type NullableResHousekeepingType struct {
	value *ResHousekeepingType
	isSet bool
}

func (v NullableResHousekeepingType) Get() *ResHousekeepingType {
	return v.value
}

func (v *NullableResHousekeepingType) Set(val *ResHousekeepingType) {
	v.value = val
	v.isSet = true
}

func (v NullableResHousekeepingType) IsSet() bool {
	return v.isSet
}

func (v *NullableResHousekeepingType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResHousekeepingType(val *ResHousekeepingType) *NullableResHousekeepingType {
	return &NullableResHousekeepingType{value: val, isSet: true}
}

func (v NullableResHousekeepingType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResHousekeepingType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


