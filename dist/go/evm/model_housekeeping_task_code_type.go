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

// checks if the HousekeepingTaskCodeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HousekeepingTaskCodeType{}

// HousekeepingTaskCodeType Information related to a Task Code. Task Codes are used to generate task sheets in Rooms Management.
type HousekeepingTaskCodeType struct {
	// The Code for the task.
	Code *string `json:"code,omitempty"`
	// Description of the Task Code.
	Description *string `json:"description,omitempty"`
	// Indicates if this task code is the default departure task for Facility Tasks. This requires
	FacilityDepartureTask *bool `json:"facilityDepartureTask,omitempty"`
	// Property where this task code is configured.
	HotelId *string `json:"hotelId,omitempty"`
	// Instructions for this Task Code.
	Instructions *string `json:"instructions,omitempty"`
	// Indicates if a linen change is necessary.
	LinenChange *bool `json:"linenChange,omitempty"`
	// Ordering sequence for display.
	Sequence *int32 `json:"sequence,omitempty"`
}

// NewHousekeepingTaskCodeType instantiates a new HousekeepingTaskCodeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHousekeepingTaskCodeType() *HousekeepingTaskCodeType {
	this := HousekeepingTaskCodeType{}
	return &this
}

// NewHousekeepingTaskCodeTypeWithDefaults instantiates a new HousekeepingTaskCodeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHousekeepingTaskCodeTypeWithDefaults() *HousekeepingTaskCodeType {
	this := HousekeepingTaskCodeType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *HousekeepingTaskCodeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskCodeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *HousekeepingTaskCodeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *HousekeepingTaskCodeType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *HousekeepingTaskCodeType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskCodeType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *HousekeepingTaskCodeType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *HousekeepingTaskCodeType) SetDescription(v string) {
	o.Description = &v
}

// GetFacilityDepartureTask returns the FacilityDepartureTask field value if set, zero value otherwise.
func (o *HousekeepingTaskCodeType) GetFacilityDepartureTask() bool {
	if o == nil || IsNil(o.FacilityDepartureTask) {
		var ret bool
		return ret
	}
	return *o.FacilityDepartureTask
}

// GetFacilityDepartureTaskOk returns a tuple with the FacilityDepartureTask field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskCodeType) GetFacilityDepartureTaskOk() (*bool, bool) {
	if o == nil || IsNil(o.FacilityDepartureTask) {
		return nil, false
	}
	return o.FacilityDepartureTask, true
}

// HasFacilityDepartureTask returns a boolean if a field has been set.
func (o *HousekeepingTaskCodeType) HasFacilityDepartureTask() bool {
	if o != nil && !IsNil(o.FacilityDepartureTask) {
		return true
	}

	return false
}

// SetFacilityDepartureTask gets a reference to the given bool and assigns it to the FacilityDepartureTask field.
func (o *HousekeepingTaskCodeType) SetFacilityDepartureTask(v bool) {
	o.FacilityDepartureTask = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HousekeepingTaskCodeType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskCodeType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HousekeepingTaskCodeType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HousekeepingTaskCodeType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInstructions returns the Instructions field value if set, zero value otherwise.
func (o *HousekeepingTaskCodeType) GetInstructions() string {
	if o == nil || IsNil(o.Instructions) {
		var ret string
		return ret
	}
	return *o.Instructions
}

// GetInstructionsOk returns a tuple with the Instructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskCodeType) GetInstructionsOk() (*string, bool) {
	if o == nil || IsNil(o.Instructions) {
		return nil, false
	}
	return o.Instructions, true
}

// HasInstructions returns a boolean if a field has been set.
func (o *HousekeepingTaskCodeType) HasInstructions() bool {
	if o != nil && !IsNil(o.Instructions) {
		return true
	}

	return false
}

// SetInstructions gets a reference to the given string and assigns it to the Instructions field.
func (o *HousekeepingTaskCodeType) SetInstructions(v string) {
	o.Instructions = &v
}

// GetLinenChange returns the LinenChange field value if set, zero value otherwise.
func (o *HousekeepingTaskCodeType) GetLinenChange() bool {
	if o == nil || IsNil(o.LinenChange) {
		var ret bool
		return ret
	}
	return *o.LinenChange
}

// GetLinenChangeOk returns a tuple with the LinenChange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskCodeType) GetLinenChangeOk() (*bool, bool) {
	if o == nil || IsNil(o.LinenChange) {
		return nil, false
	}
	return o.LinenChange, true
}

// HasLinenChange returns a boolean if a field has been set.
func (o *HousekeepingTaskCodeType) HasLinenChange() bool {
	if o != nil && !IsNil(o.LinenChange) {
		return true
	}

	return false
}

// SetLinenChange gets a reference to the given bool and assigns it to the LinenChange field.
func (o *HousekeepingTaskCodeType) SetLinenChange(v bool) {
	o.LinenChange = &v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *HousekeepingTaskCodeType) GetSequence() int32 {
	if o == nil || IsNil(o.Sequence) {
		var ret int32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskCodeType) GetSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *HousekeepingTaskCodeType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given int32 and assigns it to the Sequence field.
func (o *HousekeepingTaskCodeType) SetSequence(v int32) {
	o.Sequence = &v
}

func (o HousekeepingTaskCodeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HousekeepingTaskCodeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.FacilityDepartureTask) {
		toSerialize["facilityDepartureTask"] = o.FacilityDepartureTask
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Instructions) {
		toSerialize["instructions"] = o.Instructions
	}
	if !IsNil(o.LinenChange) {
		toSerialize["linenChange"] = o.LinenChange
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	return toSerialize, nil
}

type NullableHousekeepingTaskCodeType struct {
	value *HousekeepingTaskCodeType
	isSet bool
}

func (v NullableHousekeepingTaskCodeType) Get() *HousekeepingTaskCodeType {
	return v.value
}

func (v *NullableHousekeepingTaskCodeType) Set(val *HousekeepingTaskCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullableHousekeepingTaskCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullableHousekeepingTaskCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHousekeepingTaskCodeType(val *HousekeepingTaskCodeType) *NullableHousekeepingTaskCodeType {
	return &NullableHousekeepingTaskCodeType{value: val, isSet: true}
}

func (v NullableHousekeepingTaskCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHousekeepingTaskCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


