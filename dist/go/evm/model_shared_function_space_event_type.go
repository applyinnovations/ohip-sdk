/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the SharedFunctionSpaceEventType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SharedFunctionSpaceEventType{}

// SharedFunctionSpaceEventType Pertain shared event Information.
type SharedFunctionSpaceEventType struct {
	// Number of event attendees.
	Attendees *int32 `json:"attendees,omitempty"`
	BlockId *UniqueIDType `json:"blockId,omitempty"`
	// Block Name.
	BlockName *string `json:"blockName,omitempty"`
	// Indicates if catering event's spaces are deducted from inventory
	CateringDeductInventory *bool `json:"cateringDeductInventory,omitempty"`
	EventId *EventId `json:"eventId,omitempty"`
	// Name of event.
	EventName *string `json:"eventName,omitempty"`
	EventStatus *BookingStatusType `json:"eventStatus,omitempty"`
	// Type of event.
	EventType *string `json:"eventType,omitempty"`
	// Function space of event.
	FunctionSpaceCode *string `json:"functionSpaceCode,omitempty"`
	// Indicates if catering event is shared or not
	IsShared *bool `json:"isShared,omitempty"`
}

// NewSharedFunctionSpaceEventType instantiates a new SharedFunctionSpaceEventType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSharedFunctionSpaceEventType() *SharedFunctionSpaceEventType {
	this := SharedFunctionSpaceEventType{}
	return &this
}

// NewSharedFunctionSpaceEventTypeWithDefaults instantiates a new SharedFunctionSpaceEventType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSharedFunctionSpaceEventTypeWithDefaults() *SharedFunctionSpaceEventType {
	this := SharedFunctionSpaceEventType{}
	return &this
}

// GetAttendees returns the Attendees field value if set, zero value otherwise.
func (o *SharedFunctionSpaceEventType) GetAttendees() int32 {
	if o == nil || IsNil(o.Attendees) {
		var ret int32
		return ret
	}
	return *o.Attendees
}

// GetAttendeesOk returns a tuple with the Attendees field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SharedFunctionSpaceEventType) GetAttendeesOk() (*int32, bool) {
	if o == nil || IsNil(o.Attendees) {
		return nil, false
	}
	return o.Attendees, true
}

// HasAttendees returns a boolean if a field has been set.
func (o *SharedFunctionSpaceEventType) HasAttendees() bool {
	if o != nil && !IsNil(o.Attendees) {
		return true
	}

	return false
}

// SetAttendees gets a reference to the given int32 and assigns it to the Attendees field.
func (o *SharedFunctionSpaceEventType) SetAttendees(v int32) {
	o.Attendees = &v
}

// GetBlockId returns the BlockId field value if set, zero value otherwise.
func (o *SharedFunctionSpaceEventType) GetBlockId() UniqueIDType {
	if o == nil || IsNil(o.BlockId) {
		var ret UniqueIDType
		return ret
	}
	return *o.BlockId
}

// GetBlockIdOk returns a tuple with the BlockId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SharedFunctionSpaceEventType) GetBlockIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.BlockId) {
		return nil, false
	}
	return o.BlockId, true
}

// HasBlockId returns a boolean if a field has been set.
func (o *SharedFunctionSpaceEventType) HasBlockId() bool {
	if o != nil && !IsNil(o.BlockId) {
		return true
	}

	return false
}

// SetBlockId gets a reference to the given UniqueIDType and assigns it to the BlockId field.
func (o *SharedFunctionSpaceEventType) SetBlockId(v UniqueIDType) {
	o.BlockId = &v
}

// GetBlockName returns the BlockName field value if set, zero value otherwise.
func (o *SharedFunctionSpaceEventType) GetBlockName() string {
	if o == nil || IsNil(o.BlockName) {
		var ret string
		return ret
	}
	return *o.BlockName
}

// GetBlockNameOk returns a tuple with the BlockName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SharedFunctionSpaceEventType) GetBlockNameOk() (*string, bool) {
	if o == nil || IsNil(o.BlockName) {
		return nil, false
	}
	return o.BlockName, true
}

// HasBlockName returns a boolean if a field has been set.
func (o *SharedFunctionSpaceEventType) HasBlockName() bool {
	if o != nil && !IsNil(o.BlockName) {
		return true
	}

	return false
}

// SetBlockName gets a reference to the given string and assigns it to the BlockName field.
func (o *SharedFunctionSpaceEventType) SetBlockName(v string) {
	o.BlockName = &v
}

// GetCateringDeductInventory returns the CateringDeductInventory field value if set, zero value otherwise.
func (o *SharedFunctionSpaceEventType) GetCateringDeductInventory() bool {
	if o == nil || IsNil(o.CateringDeductInventory) {
		var ret bool
		return ret
	}
	return *o.CateringDeductInventory
}

// GetCateringDeductInventoryOk returns a tuple with the CateringDeductInventory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SharedFunctionSpaceEventType) GetCateringDeductInventoryOk() (*bool, bool) {
	if o == nil || IsNil(o.CateringDeductInventory) {
		return nil, false
	}
	return o.CateringDeductInventory, true
}

// HasCateringDeductInventory returns a boolean if a field has been set.
func (o *SharedFunctionSpaceEventType) HasCateringDeductInventory() bool {
	if o != nil && !IsNil(o.CateringDeductInventory) {
		return true
	}

	return false
}

// SetCateringDeductInventory gets a reference to the given bool and assigns it to the CateringDeductInventory field.
func (o *SharedFunctionSpaceEventType) SetCateringDeductInventory(v bool) {
	o.CateringDeductInventory = &v
}

// GetEventId returns the EventId field value if set, zero value otherwise.
func (o *SharedFunctionSpaceEventType) GetEventId() EventId {
	if o == nil || IsNil(o.EventId) {
		var ret EventId
		return ret
	}
	return *o.EventId
}

// GetEventIdOk returns a tuple with the EventId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SharedFunctionSpaceEventType) GetEventIdOk() (*EventId, bool) {
	if o == nil || IsNil(o.EventId) {
		return nil, false
	}
	return o.EventId, true
}

// HasEventId returns a boolean if a field has been set.
func (o *SharedFunctionSpaceEventType) HasEventId() bool {
	if o != nil && !IsNil(o.EventId) {
		return true
	}

	return false
}

// SetEventId gets a reference to the given EventId and assigns it to the EventId field.
func (o *SharedFunctionSpaceEventType) SetEventId(v EventId) {
	o.EventId = &v
}

// GetEventName returns the EventName field value if set, zero value otherwise.
func (o *SharedFunctionSpaceEventType) GetEventName() string {
	if o == nil || IsNil(o.EventName) {
		var ret string
		return ret
	}
	return *o.EventName
}

// GetEventNameOk returns a tuple with the EventName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SharedFunctionSpaceEventType) GetEventNameOk() (*string, bool) {
	if o == nil || IsNil(o.EventName) {
		return nil, false
	}
	return o.EventName, true
}

// HasEventName returns a boolean if a field has been set.
func (o *SharedFunctionSpaceEventType) HasEventName() bool {
	if o != nil && !IsNil(o.EventName) {
		return true
	}

	return false
}

// SetEventName gets a reference to the given string and assigns it to the EventName field.
func (o *SharedFunctionSpaceEventType) SetEventName(v string) {
	o.EventName = &v
}

// GetEventStatus returns the EventStatus field value if set, zero value otherwise.
func (o *SharedFunctionSpaceEventType) GetEventStatus() BookingStatusType {
	if o == nil || IsNil(o.EventStatus) {
		var ret BookingStatusType
		return ret
	}
	return *o.EventStatus
}

// GetEventStatusOk returns a tuple with the EventStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SharedFunctionSpaceEventType) GetEventStatusOk() (*BookingStatusType, bool) {
	if o == nil || IsNil(o.EventStatus) {
		return nil, false
	}
	return o.EventStatus, true
}

// HasEventStatus returns a boolean if a field has been set.
func (o *SharedFunctionSpaceEventType) HasEventStatus() bool {
	if o != nil && !IsNil(o.EventStatus) {
		return true
	}

	return false
}

// SetEventStatus gets a reference to the given BookingStatusType and assigns it to the EventStatus field.
func (o *SharedFunctionSpaceEventType) SetEventStatus(v BookingStatusType) {
	o.EventStatus = &v
}

// GetEventType returns the EventType field value if set, zero value otherwise.
func (o *SharedFunctionSpaceEventType) GetEventType() string {
	if o == nil || IsNil(o.EventType) {
		var ret string
		return ret
	}
	return *o.EventType
}

// GetEventTypeOk returns a tuple with the EventType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SharedFunctionSpaceEventType) GetEventTypeOk() (*string, bool) {
	if o == nil || IsNil(o.EventType) {
		return nil, false
	}
	return o.EventType, true
}

// HasEventType returns a boolean if a field has been set.
func (o *SharedFunctionSpaceEventType) HasEventType() bool {
	if o != nil && !IsNil(o.EventType) {
		return true
	}

	return false
}

// SetEventType gets a reference to the given string and assigns it to the EventType field.
func (o *SharedFunctionSpaceEventType) SetEventType(v string) {
	o.EventType = &v
}

// GetFunctionSpaceCode returns the FunctionSpaceCode field value if set, zero value otherwise.
func (o *SharedFunctionSpaceEventType) GetFunctionSpaceCode() string {
	if o == nil || IsNil(o.FunctionSpaceCode) {
		var ret string
		return ret
	}
	return *o.FunctionSpaceCode
}

// GetFunctionSpaceCodeOk returns a tuple with the FunctionSpaceCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SharedFunctionSpaceEventType) GetFunctionSpaceCodeOk() (*string, bool) {
	if o == nil || IsNil(o.FunctionSpaceCode) {
		return nil, false
	}
	return o.FunctionSpaceCode, true
}

// HasFunctionSpaceCode returns a boolean if a field has been set.
func (o *SharedFunctionSpaceEventType) HasFunctionSpaceCode() bool {
	if o != nil && !IsNil(o.FunctionSpaceCode) {
		return true
	}

	return false
}

// SetFunctionSpaceCode gets a reference to the given string and assigns it to the FunctionSpaceCode field.
func (o *SharedFunctionSpaceEventType) SetFunctionSpaceCode(v string) {
	o.FunctionSpaceCode = &v
}

// GetIsShared returns the IsShared field value if set, zero value otherwise.
func (o *SharedFunctionSpaceEventType) GetIsShared() bool {
	if o == nil || IsNil(o.IsShared) {
		var ret bool
		return ret
	}
	return *o.IsShared
}

// GetIsSharedOk returns a tuple with the IsShared field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SharedFunctionSpaceEventType) GetIsSharedOk() (*bool, bool) {
	if o == nil || IsNil(o.IsShared) {
		return nil, false
	}
	return o.IsShared, true
}

// HasIsShared returns a boolean if a field has been set.
func (o *SharedFunctionSpaceEventType) HasIsShared() bool {
	if o != nil && !IsNil(o.IsShared) {
		return true
	}

	return false
}

// SetIsShared gets a reference to the given bool and assigns it to the IsShared field.
func (o *SharedFunctionSpaceEventType) SetIsShared(v bool) {
	o.IsShared = &v
}

func (o SharedFunctionSpaceEventType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SharedFunctionSpaceEventType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Attendees) {
		toSerialize["attendees"] = o.Attendees
	}
	if !IsNil(o.BlockId) {
		toSerialize["blockId"] = o.BlockId
	}
	if !IsNil(o.BlockName) {
		toSerialize["blockName"] = o.BlockName
	}
	if !IsNil(o.CateringDeductInventory) {
		toSerialize["cateringDeductInventory"] = o.CateringDeductInventory
	}
	if !IsNil(o.EventId) {
		toSerialize["eventId"] = o.EventId
	}
	if !IsNil(o.EventName) {
		toSerialize["eventName"] = o.EventName
	}
	if !IsNil(o.EventStatus) {
		toSerialize["eventStatus"] = o.EventStatus
	}
	if !IsNil(o.EventType) {
		toSerialize["eventType"] = o.EventType
	}
	if !IsNil(o.FunctionSpaceCode) {
		toSerialize["functionSpaceCode"] = o.FunctionSpaceCode
	}
	if !IsNil(o.IsShared) {
		toSerialize["isShared"] = o.IsShared
	}
	return toSerialize, nil
}

type NullableSharedFunctionSpaceEventType struct {
	value *SharedFunctionSpaceEventType
	isSet bool
}

func (v NullableSharedFunctionSpaceEventType) Get() *SharedFunctionSpaceEventType {
	return v.value
}

func (v *NullableSharedFunctionSpaceEventType) Set(val *SharedFunctionSpaceEventType) {
	v.value = val
	v.isSet = true
}

func (v NullableSharedFunctionSpaceEventType) IsSet() bool {
	return v.isSet
}

func (v *NullableSharedFunctionSpaceEventType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSharedFunctionSpaceEventType(val *SharedFunctionSpaceEventType) *NullableSharedFunctionSpaceEventType {
	return &NullableSharedFunctionSpaceEventType{value: val, isSet: true}
}

func (v NullableSharedFunctionSpaceEventType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSharedFunctionSpaceEventType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

