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

// checks if the HousekeepingTaskConfigType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HousekeepingTaskConfigType{}

// HousekeepingTaskConfigType Common code type for code, description
type HousekeepingTaskConfigType struct {
	// Percentage of Credits that will be used for this task. Used when the Housekeeping Credits functionality is set to use ROOM_TASK_RULE. The default value is 100.
	AppliedCreditsPercentage *float32 `json:"appliedCreditsPercentage,omitempty"`
	// Code for the code type.
	Code *string `json:"code,omitempty"`
	Color *ColorType `json:"color,omitempty"`
	// Signifies that task is a default task for the checked out room.
	DefaultDepartureTask *bool `json:"defaultDepartureTask,omitempty"`
	// Description for the code type.
	Description *string `json:"description,omitempty"`
	// Signifies whether housekeeping task is a guest requested task.
	GuestRequested *bool `json:"guestRequested,omitempty"`
	// Hotel Code for a housekeeping task.
	HotelId *string `json:"hotelId,omitempty"`
	// Indicates if the task is inactive.
	Inactive *bool `json:"inactive,omitempty"`
	// Instructions of the housekeeping task.
	Instructions *string `json:"instructions,omitempty"`
	// Signifies whether housekeeping task requires linen change.
	LinenChange *bool `json:"linenChange,omitempty"`
	// Flag that determines whether this record is protected from removing or not
	Protected *bool `json:"protected,omitempty"`
	// Display sequence for the housekeeping task.
	Sequence *float32 `json:"sequence,omitempty"`
}

// NewHousekeepingTaskConfigType instantiates a new HousekeepingTaskConfigType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHousekeepingTaskConfigType() *HousekeepingTaskConfigType {
	this := HousekeepingTaskConfigType{}
	return &this
}

// NewHousekeepingTaskConfigTypeWithDefaults instantiates a new HousekeepingTaskConfigType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHousekeepingTaskConfigTypeWithDefaults() *HousekeepingTaskConfigType {
	this := HousekeepingTaskConfigType{}
	return &this
}

// GetAppliedCreditsPercentage returns the AppliedCreditsPercentage field value if set, zero value otherwise.
func (o *HousekeepingTaskConfigType) GetAppliedCreditsPercentage() float32 {
	if o == nil || IsNil(o.AppliedCreditsPercentage) {
		var ret float32
		return ret
	}
	return *o.AppliedCreditsPercentage
}

// GetAppliedCreditsPercentageOk returns a tuple with the AppliedCreditsPercentage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskConfigType) GetAppliedCreditsPercentageOk() (*float32, bool) {
	if o == nil || IsNil(o.AppliedCreditsPercentage) {
		return nil, false
	}
	return o.AppliedCreditsPercentage, true
}

// HasAppliedCreditsPercentage returns a boolean if a field has been set.
func (o *HousekeepingTaskConfigType) HasAppliedCreditsPercentage() bool {
	if o != nil && !IsNil(o.AppliedCreditsPercentage) {
		return true
	}

	return false
}

// SetAppliedCreditsPercentage gets a reference to the given float32 and assigns it to the AppliedCreditsPercentage field.
func (o *HousekeepingTaskConfigType) SetAppliedCreditsPercentage(v float32) {
	o.AppliedCreditsPercentage = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *HousekeepingTaskConfigType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskConfigType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *HousekeepingTaskConfigType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *HousekeepingTaskConfigType) SetCode(v string) {
	o.Code = &v
}

// GetColor returns the Color field value if set, zero value otherwise.
func (o *HousekeepingTaskConfigType) GetColor() ColorType {
	if o == nil || IsNil(o.Color) {
		var ret ColorType
		return ret
	}
	return *o.Color
}

// GetColorOk returns a tuple with the Color field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskConfigType) GetColorOk() (*ColorType, bool) {
	if o == nil || IsNil(o.Color) {
		return nil, false
	}
	return o.Color, true
}

// HasColor returns a boolean if a field has been set.
func (o *HousekeepingTaskConfigType) HasColor() bool {
	if o != nil && !IsNil(o.Color) {
		return true
	}

	return false
}

// SetColor gets a reference to the given ColorType and assigns it to the Color field.
func (o *HousekeepingTaskConfigType) SetColor(v ColorType) {
	o.Color = &v
}

// GetDefaultDepartureTask returns the DefaultDepartureTask field value if set, zero value otherwise.
func (o *HousekeepingTaskConfigType) GetDefaultDepartureTask() bool {
	if o == nil || IsNil(o.DefaultDepartureTask) {
		var ret bool
		return ret
	}
	return *o.DefaultDepartureTask
}

// GetDefaultDepartureTaskOk returns a tuple with the DefaultDepartureTask field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskConfigType) GetDefaultDepartureTaskOk() (*bool, bool) {
	if o == nil || IsNil(o.DefaultDepartureTask) {
		return nil, false
	}
	return o.DefaultDepartureTask, true
}

// HasDefaultDepartureTask returns a boolean if a field has been set.
func (o *HousekeepingTaskConfigType) HasDefaultDepartureTask() bool {
	if o != nil && !IsNil(o.DefaultDepartureTask) {
		return true
	}

	return false
}

// SetDefaultDepartureTask gets a reference to the given bool and assigns it to the DefaultDepartureTask field.
func (o *HousekeepingTaskConfigType) SetDefaultDepartureTask(v bool) {
	o.DefaultDepartureTask = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *HousekeepingTaskConfigType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskConfigType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *HousekeepingTaskConfigType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *HousekeepingTaskConfigType) SetDescription(v string) {
	o.Description = &v
}

// GetGuestRequested returns the GuestRequested field value if set, zero value otherwise.
func (o *HousekeepingTaskConfigType) GetGuestRequested() bool {
	if o == nil || IsNil(o.GuestRequested) {
		var ret bool
		return ret
	}
	return *o.GuestRequested
}

// GetGuestRequestedOk returns a tuple with the GuestRequested field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskConfigType) GetGuestRequestedOk() (*bool, bool) {
	if o == nil || IsNil(o.GuestRequested) {
		return nil, false
	}
	return o.GuestRequested, true
}

// HasGuestRequested returns a boolean if a field has been set.
func (o *HousekeepingTaskConfigType) HasGuestRequested() bool {
	if o != nil && !IsNil(o.GuestRequested) {
		return true
	}

	return false
}

// SetGuestRequested gets a reference to the given bool and assigns it to the GuestRequested field.
func (o *HousekeepingTaskConfigType) SetGuestRequested(v bool) {
	o.GuestRequested = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HousekeepingTaskConfigType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskConfigType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HousekeepingTaskConfigType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HousekeepingTaskConfigType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *HousekeepingTaskConfigType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskConfigType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *HousekeepingTaskConfigType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *HousekeepingTaskConfigType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetInstructions returns the Instructions field value if set, zero value otherwise.
func (o *HousekeepingTaskConfigType) GetInstructions() string {
	if o == nil || IsNil(o.Instructions) {
		var ret string
		return ret
	}
	return *o.Instructions
}

// GetInstructionsOk returns a tuple with the Instructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskConfigType) GetInstructionsOk() (*string, bool) {
	if o == nil || IsNil(o.Instructions) {
		return nil, false
	}
	return o.Instructions, true
}

// HasInstructions returns a boolean if a field has been set.
func (o *HousekeepingTaskConfigType) HasInstructions() bool {
	if o != nil && !IsNil(o.Instructions) {
		return true
	}

	return false
}

// SetInstructions gets a reference to the given string and assigns it to the Instructions field.
func (o *HousekeepingTaskConfigType) SetInstructions(v string) {
	o.Instructions = &v
}

// GetLinenChange returns the LinenChange field value if set, zero value otherwise.
func (o *HousekeepingTaskConfigType) GetLinenChange() bool {
	if o == nil || IsNil(o.LinenChange) {
		var ret bool
		return ret
	}
	return *o.LinenChange
}

// GetLinenChangeOk returns a tuple with the LinenChange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskConfigType) GetLinenChangeOk() (*bool, bool) {
	if o == nil || IsNil(o.LinenChange) {
		return nil, false
	}
	return o.LinenChange, true
}

// HasLinenChange returns a boolean if a field has been set.
func (o *HousekeepingTaskConfigType) HasLinenChange() bool {
	if o != nil && !IsNil(o.LinenChange) {
		return true
	}

	return false
}

// SetLinenChange gets a reference to the given bool and assigns it to the LinenChange field.
func (o *HousekeepingTaskConfigType) SetLinenChange(v bool) {
	o.LinenChange = &v
}

// GetProtected returns the Protected field value if set, zero value otherwise.
func (o *HousekeepingTaskConfigType) GetProtected() bool {
	if o == nil || IsNil(o.Protected) {
		var ret bool
		return ret
	}
	return *o.Protected
}

// GetProtectedOk returns a tuple with the Protected field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskConfigType) GetProtectedOk() (*bool, bool) {
	if o == nil || IsNil(o.Protected) {
		return nil, false
	}
	return o.Protected, true
}

// HasProtected returns a boolean if a field has been set.
func (o *HousekeepingTaskConfigType) HasProtected() bool {
	if o != nil && !IsNil(o.Protected) {
		return true
	}

	return false
}

// SetProtected gets a reference to the given bool and assigns it to the Protected field.
func (o *HousekeepingTaskConfigType) SetProtected(v bool) {
	o.Protected = &v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *HousekeepingTaskConfigType) GetSequence() float32 {
	if o == nil || IsNil(o.Sequence) {
		var ret float32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskConfigType) GetSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *HousekeepingTaskConfigType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given float32 and assigns it to the Sequence field.
func (o *HousekeepingTaskConfigType) SetSequence(v float32) {
	o.Sequence = &v
}

func (o HousekeepingTaskConfigType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HousekeepingTaskConfigType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AppliedCreditsPercentage) {
		toSerialize["appliedCreditsPercentage"] = o.AppliedCreditsPercentage
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Color) {
		toSerialize["color"] = o.Color
	}
	if !IsNil(o.DefaultDepartureTask) {
		toSerialize["defaultDepartureTask"] = o.DefaultDepartureTask
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.GuestRequested) {
		toSerialize["guestRequested"] = o.GuestRequested
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.Instructions) {
		toSerialize["instructions"] = o.Instructions
	}
	if !IsNil(o.LinenChange) {
		toSerialize["linenChange"] = o.LinenChange
	}
	if !IsNil(o.Protected) {
		toSerialize["protected"] = o.Protected
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	return toSerialize, nil
}

type NullableHousekeepingTaskConfigType struct {
	value *HousekeepingTaskConfigType
	isSet bool
}

func (v NullableHousekeepingTaskConfigType) Get() *HousekeepingTaskConfigType {
	return v.value
}

func (v *NullableHousekeepingTaskConfigType) Set(val *HousekeepingTaskConfigType) {
	v.value = val
	v.isSet = true
}

func (v NullableHousekeepingTaskConfigType) IsSet() bool {
	return v.isSet
}

func (v *NullableHousekeepingTaskConfigType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHousekeepingTaskConfigType(val *HousekeepingTaskConfigType) *NullableHousekeepingTaskConfigType {
	return &NullableHousekeepingTaskConfigType{value: val, isSet: true}
}

func (v NullableHousekeepingTaskConfigType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHousekeepingTaskConfigType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


