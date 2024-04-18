/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the HousekeepingTaskTypeAttendant type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HousekeepingTaskTypeAttendant{}

// HousekeepingTaskTypeAttendant Information regarding Housekeeping Attendants.
type HousekeepingTaskTypeAttendant struct {
	// Indicates if the Attendant is active.
	ActiveFlag *string `json:"activeFlag,omitempty"`
	// Attendant's unique identifier.
	AttendantId *string `json:"attendantId,omitempty"`
	AttendantInstructions *string `json:"attendantInstructions,omitempty"`
	// Attendant's name.
	AttendantName *string `json:"attendantName,omitempty"`
	// The Floor which is assigned to the attendant.
	Floor *string `json:"floor,omitempty"`
	Friday *bool `json:"friday,omitempty"`
	// Property where the attendant belongs.
	HotelId *string `json:"hotelId,omitempty"`
	Monday *bool `json:"monday,omitempty"`
	Saturday *bool `json:"saturday,omitempty"`
	Section *HousekeepingSectionType `json:"section,omitempty"`
	Sunday *bool `json:"sunday,omitempty"`
	Thursday *bool `json:"thursday,omitempty"`
	Tuesday *bool `json:"tuesday,omitempty"`
	Wednesday *bool `json:"wednesday,omitempty"`
}

// NewHousekeepingTaskTypeAttendant instantiates a new HousekeepingTaskTypeAttendant object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHousekeepingTaskTypeAttendant() *HousekeepingTaskTypeAttendant {
	this := HousekeepingTaskTypeAttendant{}
	return &this
}

// NewHousekeepingTaskTypeAttendantWithDefaults instantiates a new HousekeepingTaskTypeAttendant object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHousekeepingTaskTypeAttendantWithDefaults() *HousekeepingTaskTypeAttendant {
	this := HousekeepingTaskTypeAttendant{}
	return &this
}

// GetActiveFlag returns the ActiveFlag field value if set, zero value otherwise.
func (o *HousekeepingTaskTypeAttendant) GetActiveFlag() string {
	if o == nil || IsNil(o.ActiveFlag) {
		var ret string
		return ret
	}
	return *o.ActiveFlag
}

// GetActiveFlagOk returns a tuple with the ActiveFlag field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskTypeAttendant) GetActiveFlagOk() (*string, bool) {
	if o == nil || IsNil(o.ActiveFlag) {
		return nil, false
	}
	return o.ActiveFlag, true
}

// HasActiveFlag returns a boolean if a field has been set.
func (o *HousekeepingTaskTypeAttendant) HasActiveFlag() bool {
	if o != nil && !IsNil(o.ActiveFlag) {
		return true
	}

	return false
}

// SetActiveFlag gets a reference to the given string and assigns it to the ActiveFlag field.
func (o *HousekeepingTaskTypeAttendant) SetActiveFlag(v string) {
	o.ActiveFlag = &v
}

// GetAttendantId returns the AttendantId field value if set, zero value otherwise.
func (o *HousekeepingTaskTypeAttendant) GetAttendantId() string {
	if o == nil || IsNil(o.AttendantId) {
		var ret string
		return ret
	}
	return *o.AttendantId
}

// GetAttendantIdOk returns a tuple with the AttendantId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskTypeAttendant) GetAttendantIdOk() (*string, bool) {
	if o == nil || IsNil(o.AttendantId) {
		return nil, false
	}
	return o.AttendantId, true
}

// HasAttendantId returns a boolean if a field has been set.
func (o *HousekeepingTaskTypeAttendant) HasAttendantId() bool {
	if o != nil && !IsNil(o.AttendantId) {
		return true
	}

	return false
}

// SetAttendantId gets a reference to the given string and assigns it to the AttendantId field.
func (o *HousekeepingTaskTypeAttendant) SetAttendantId(v string) {
	o.AttendantId = &v
}

// GetAttendantInstructions returns the AttendantInstructions field value if set, zero value otherwise.
func (o *HousekeepingTaskTypeAttendant) GetAttendantInstructions() string {
	if o == nil || IsNil(o.AttendantInstructions) {
		var ret string
		return ret
	}
	return *o.AttendantInstructions
}

// GetAttendantInstructionsOk returns a tuple with the AttendantInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskTypeAttendant) GetAttendantInstructionsOk() (*string, bool) {
	if o == nil || IsNil(o.AttendantInstructions) {
		return nil, false
	}
	return o.AttendantInstructions, true
}

// HasAttendantInstructions returns a boolean if a field has been set.
func (o *HousekeepingTaskTypeAttendant) HasAttendantInstructions() bool {
	if o != nil && !IsNil(o.AttendantInstructions) {
		return true
	}

	return false
}

// SetAttendantInstructions gets a reference to the given string and assigns it to the AttendantInstructions field.
func (o *HousekeepingTaskTypeAttendant) SetAttendantInstructions(v string) {
	o.AttendantInstructions = &v
}

// GetAttendantName returns the AttendantName field value if set, zero value otherwise.
func (o *HousekeepingTaskTypeAttendant) GetAttendantName() string {
	if o == nil || IsNil(o.AttendantName) {
		var ret string
		return ret
	}
	return *o.AttendantName
}

// GetAttendantNameOk returns a tuple with the AttendantName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskTypeAttendant) GetAttendantNameOk() (*string, bool) {
	if o == nil || IsNil(o.AttendantName) {
		return nil, false
	}
	return o.AttendantName, true
}

// HasAttendantName returns a boolean if a field has been set.
func (o *HousekeepingTaskTypeAttendant) HasAttendantName() bool {
	if o != nil && !IsNil(o.AttendantName) {
		return true
	}

	return false
}

// SetAttendantName gets a reference to the given string and assigns it to the AttendantName field.
func (o *HousekeepingTaskTypeAttendant) SetAttendantName(v string) {
	o.AttendantName = &v
}

// GetFloor returns the Floor field value if set, zero value otherwise.
func (o *HousekeepingTaskTypeAttendant) GetFloor() string {
	if o == nil || IsNil(o.Floor) {
		var ret string
		return ret
	}
	return *o.Floor
}

// GetFloorOk returns a tuple with the Floor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskTypeAttendant) GetFloorOk() (*string, bool) {
	if o == nil || IsNil(o.Floor) {
		return nil, false
	}
	return o.Floor, true
}

// HasFloor returns a boolean if a field has been set.
func (o *HousekeepingTaskTypeAttendant) HasFloor() bool {
	if o != nil && !IsNil(o.Floor) {
		return true
	}

	return false
}

// SetFloor gets a reference to the given string and assigns it to the Floor field.
func (o *HousekeepingTaskTypeAttendant) SetFloor(v string) {
	o.Floor = &v
}

// GetFriday returns the Friday field value if set, zero value otherwise.
func (o *HousekeepingTaskTypeAttendant) GetFriday() bool {
	if o == nil || IsNil(o.Friday) {
		var ret bool
		return ret
	}
	return *o.Friday
}

// GetFridayOk returns a tuple with the Friday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskTypeAttendant) GetFridayOk() (*bool, bool) {
	if o == nil || IsNil(o.Friday) {
		return nil, false
	}
	return o.Friday, true
}

// HasFriday returns a boolean if a field has been set.
func (o *HousekeepingTaskTypeAttendant) HasFriday() bool {
	if o != nil && !IsNil(o.Friday) {
		return true
	}

	return false
}

// SetFriday gets a reference to the given bool and assigns it to the Friday field.
func (o *HousekeepingTaskTypeAttendant) SetFriday(v bool) {
	o.Friday = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HousekeepingTaskTypeAttendant) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskTypeAttendant) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HousekeepingTaskTypeAttendant) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HousekeepingTaskTypeAttendant) SetHotelId(v string) {
	o.HotelId = &v
}

// GetMonday returns the Monday field value if set, zero value otherwise.
func (o *HousekeepingTaskTypeAttendant) GetMonday() bool {
	if o == nil || IsNil(o.Monday) {
		var ret bool
		return ret
	}
	return *o.Monday
}

// GetMondayOk returns a tuple with the Monday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskTypeAttendant) GetMondayOk() (*bool, bool) {
	if o == nil || IsNil(o.Monday) {
		return nil, false
	}
	return o.Monday, true
}

// HasMonday returns a boolean if a field has been set.
func (o *HousekeepingTaskTypeAttendant) HasMonday() bool {
	if o != nil && !IsNil(o.Monday) {
		return true
	}

	return false
}

// SetMonday gets a reference to the given bool and assigns it to the Monday field.
func (o *HousekeepingTaskTypeAttendant) SetMonday(v bool) {
	o.Monday = &v
}

// GetSaturday returns the Saturday field value if set, zero value otherwise.
func (o *HousekeepingTaskTypeAttendant) GetSaturday() bool {
	if o == nil || IsNil(o.Saturday) {
		var ret bool
		return ret
	}
	return *o.Saturday
}

// GetSaturdayOk returns a tuple with the Saturday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskTypeAttendant) GetSaturdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Saturday) {
		return nil, false
	}
	return o.Saturday, true
}

// HasSaturday returns a boolean if a field has been set.
func (o *HousekeepingTaskTypeAttendant) HasSaturday() bool {
	if o != nil && !IsNil(o.Saturday) {
		return true
	}

	return false
}

// SetSaturday gets a reference to the given bool and assigns it to the Saturday field.
func (o *HousekeepingTaskTypeAttendant) SetSaturday(v bool) {
	o.Saturday = &v
}

// GetSection returns the Section field value if set, zero value otherwise.
func (o *HousekeepingTaskTypeAttendant) GetSection() HousekeepingSectionType {
	if o == nil || IsNil(o.Section) {
		var ret HousekeepingSectionType
		return ret
	}
	return *o.Section
}

// GetSectionOk returns a tuple with the Section field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskTypeAttendant) GetSectionOk() (*HousekeepingSectionType, bool) {
	if o == nil || IsNil(o.Section) {
		return nil, false
	}
	return o.Section, true
}

// HasSection returns a boolean if a field has been set.
func (o *HousekeepingTaskTypeAttendant) HasSection() bool {
	if o != nil && !IsNil(o.Section) {
		return true
	}

	return false
}

// SetSection gets a reference to the given HousekeepingSectionType and assigns it to the Section field.
func (o *HousekeepingTaskTypeAttendant) SetSection(v HousekeepingSectionType) {
	o.Section = &v
}

// GetSunday returns the Sunday field value if set, zero value otherwise.
func (o *HousekeepingTaskTypeAttendant) GetSunday() bool {
	if o == nil || IsNil(o.Sunday) {
		var ret bool
		return ret
	}
	return *o.Sunday
}

// GetSundayOk returns a tuple with the Sunday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskTypeAttendant) GetSundayOk() (*bool, bool) {
	if o == nil || IsNil(o.Sunday) {
		return nil, false
	}
	return o.Sunday, true
}

// HasSunday returns a boolean if a field has been set.
func (o *HousekeepingTaskTypeAttendant) HasSunday() bool {
	if o != nil && !IsNil(o.Sunday) {
		return true
	}

	return false
}

// SetSunday gets a reference to the given bool and assigns it to the Sunday field.
func (o *HousekeepingTaskTypeAttendant) SetSunday(v bool) {
	o.Sunday = &v
}

// GetThursday returns the Thursday field value if set, zero value otherwise.
func (o *HousekeepingTaskTypeAttendant) GetThursday() bool {
	if o == nil || IsNil(o.Thursday) {
		var ret bool
		return ret
	}
	return *o.Thursday
}

// GetThursdayOk returns a tuple with the Thursday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskTypeAttendant) GetThursdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Thursday) {
		return nil, false
	}
	return o.Thursday, true
}

// HasThursday returns a boolean if a field has been set.
func (o *HousekeepingTaskTypeAttendant) HasThursday() bool {
	if o != nil && !IsNil(o.Thursday) {
		return true
	}

	return false
}

// SetThursday gets a reference to the given bool and assigns it to the Thursday field.
func (o *HousekeepingTaskTypeAttendant) SetThursday(v bool) {
	o.Thursday = &v
}

// GetTuesday returns the Tuesday field value if set, zero value otherwise.
func (o *HousekeepingTaskTypeAttendant) GetTuesday() bool {
	if o == nil || IsNil(o.Tuesday) {
		var ret bool
		return ret
	}
	return *o.Tuesday
}

// GetTuesdayOk returns a tuple with the Tuesday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskTypeAttendant) GetTuesdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Tuesday) {
		return nil, false
	}
	return o.Tuesday, true
}

// HasTuesday returns a boolean if a field has been set.
func (o *HousekeepingTaskTypeAttendant) HasTuesday() bool {
	if o != nil && !IsNil(o.Tuesday) {
		return true
	}

	return false
}

// SetTuesday gets a reference to the given bool and assigns it to the Tuesday field.
func (o *HousekeepingTaskTypeAttendant) SetTuesday(v bool) {
	o.Tuesday = &v
}

// GetWednesday returns the Wednesday field value if set, zero value otherwise.
func (o *HousekeepingTaskTypeAttendant) GetWednesday() bool {
	if o == nil || IsNil(o.Wednesday) {
		var ret bool
		return ret
	}
	return *o.Wednesday
}

// GetWednesdayOk returns a tuple with the Wednesday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskTypeAttendant) GetWednesdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Wednesday) {
		return nil, false
	}
	return o.Wednesday, true
}

// HasWednesday returns a boolean if a field has been set.
func (o *HousekeepingTaskTypeAttendant) HasWednesday() bool {
	if o != nil && !IsNil(o.Wednesday) {
		return true
	}

	return false
}

// SetWednesday gets a reference to the given bool and assigns it to the Wednesday field.
func (o *HousekeepingTaskTypeAttendant) SetWednesday(v bool) {
	o.Wednesday = &v
}

func (o HousekeepingTaskTypeAttendant) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HousekeepingTaskTypeAttendant) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActiveFlag) {
		toSerialize["activeFlag"] = o.ActiveFlag
	}
	if !IsNil(o.AttendantId) {
		toSerialize["attendantId"] = o.AttendantId
	}
	if !IsNil(o.AttendantInstructions) {
		toSerialize["attendantInstructions"] = o.AttendantInstructions
	}
	if !IsNil(o.AttendantName) {
		toSerialize["attendantName"] = o.AttendantName
	}
	if !IsNil(o.Floor) {
		toSerialize["floor"] = o.Floor
	}
	if !IsNil(o.Friday) {
		toSerialize["friday"] = o.Friday
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Monday) {
		toSerialize["monday"] = o.Monday
	}
	if !IsNil(o.Saturday) {
		toSerialize["saturday"] = o.Saturday
	}
	if !IsNil(o.Section) {
		toSerialize["section"] = o.Section
	}
	if !IsNil(o.Sunday) {
		toSerialize["sunday"] = o.Sunday
	}
	if !IsNil(o.Thursday) {
		toSerialize["thursday"] = o.Thursday
	}
	if !IsNil(o.Tuesday) {
		toSerialize["tuesday"] = o.Tuesday
	}
	if !IsNil(o.Wednesday) {
		toSerialize["wednesday"] = o.Wednesday
	}
	return toSerialize, nil
}

type NullableHousekeepingTaskTypeAttendant struct {
	value *HousekeepingTaskTypeAttendant
	isSet bool
}

func (v NullableHousekeepingTaskTypeAttendant) Get() *HousekeepingTaskTypeAttendant {
	return v.value
}

func (v *NullableHousekeepingTaskTypeAttendant) Set(val *HousekeepingTaskTypeAttendant) {
	v.value = val
	v.isSet = true
}

func (v NullableHousekeepingTaskTypeAttendant) IsSet() bool {
	return v.isSet
}

func (v *NullableHousekeepingTaskTypeAttendant) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHousekeepingTaskTypeAttendant(val *HousekeepingTaskTypeAttendant) *NullableHousekeepingTaskTypeAttendant {
	return &NullableHousekeepingTaskTypeAttendant{value: val, isSet: true}
}

func (v NullableHousekeepingTaskTypeAttendant) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHousekeepingTaskTypeAttendant) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

