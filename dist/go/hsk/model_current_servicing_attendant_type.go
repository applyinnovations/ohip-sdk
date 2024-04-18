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

// checks if the CurrentServicingAttendantType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CurrentServicingAttendantType{}

// CurrentServicingAttendantType The Attendant Name and ID of the attendant servicing the room.
type CurrentServicingAttendantType struct {
	// Indicates if the Attendant is active.
	ActiveFlag *string `json:"activeFlag,omitempty"`
	AppUser *ApplicationUserType `json:"appUser,omitempty"`
	// Attendant's unique identifier.
	AttendantId *string `json:"attendantId,omitempty"`
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
	// The start time of the service.
	StartTime *string `json:"startTime,omitempty"`
	Status *ServicingAttendantStatusType `json:"status,omitempty"`
	Sunday *bool `json:"sunday,omitempty"`
	Thursday *bool `json:"thursday,omitempty"`
	Tuesday *bool `json:"tuesday,omitempty"`
	Wednesday *bool `json:"wednesday,omitempty"`
}

// NewCurrentServicingAttendantType instantiates a new CurrentServicingAttendantType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCurrentServicingAttendantType() *CurrentServicingAttendantType {
	this := CurrentServicingAttendantType{}
	return &this
}

// NewCurrentServicingAttendantTypeWithDefaults instantiates a new CurrentServicingAttendantType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCurrentServicingAttendantTypeWithDefaults() *CurrentServicingAttendantType {
	this := CurrentServicingAttendantType{}
	return &this
}

// GetActiveFlag returns the ActiveFlag field value if set, zero value otherwise.
func (o *CurrentServicingAttendantType) GetActiveFlag() string {
	if o == nil || IsNil(o.ActiveFlag) {
		var ret string
		return ret
	}
	return *o.ActiveFlag
}

// GetActiveFlagOk returns a tuple with the ActiveFlag field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrentServicingAttendantType) GetActiveFlagOk() (*string, bool) {
	if o == nil || IsNil(o.ActiveFlag) {
		return nil, false
	}
	return o.ActiveFlag, true
}

// HasActiveFlag returns a boolean if a field has been set.
func (o *CurrentServicingAttendantType) HasActiveFlag() bool {
	if o != nil && !IsNil(o.ActiveFlag) {
		return true
	}

	return false
}

// SetActiveFlag gets a reference to the given string and assigns it to the ActiveFlag field.
func (o *CurrentServicingAttendantType) SetActiveFlag(v string) {
	o.ActiveFlag = &v
}

// GetAppUser returns the AppUser field value if set, zero value otherwise.
func (o *CurrentServicingAttendantType) GetAppUser() ApplicationUserType {
	if o == nil || IsNil(o.AppUser) {
		var ret ApplicationUserType
		return ret
	}
	return *o.AppUser
}

// GetAppUserOk returns a tuple with the AppUser field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrentServicingAttendantType) GetAppUserOk() (*ApplicationUserType, bool) {
	if o == nil || IsNil(o.AppUser) {
		return nil, false
	}
	return o.AppUser, true
}

// HasAppUser returns a boolean if a field has been set.
func (o *CurrentServicingAttendantType) HasAppUser() bool {
	if o != nil && !IsNil(o.AppUser) {
		return true
	}

	return false
}

// SetAppUser gets a reference to the given ApplicationUserType and assigns it to the AppUser field.
func (o *CurrentServicingAttendantType) SetAppUser(v ApplicationUserType) {
	o.AppUser = &v
}

// GetAttendantId returns the AttendantId field value if set, zero value otherwise.
func (o *CurrentServicingAttendantType) GetAttendantId() string {
	if o == nil || IsNil(o.AttendantId) {
		var ret string
		return ret
	}
	return *o.AttendantId
}

// GetAttendantIdOk returns a tuple with the AttendantId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrentServicingAttendantType) GetAttendantIdOk() (*string, bool) {
	if o == nil || IsNil(o.AttendantId) {
		return nil, false
	}
	return o.AttendantId, true
}

// HasAttendantId returns a boolean if a field has been set.
func (o *CurrentServicingAttendantType) HasAttendantId() bool {
	if o != nil && !IsNil(o.AttendantId) {
		return true
	}

	return false
}

// SetAttendantId gets a reference to the given string and assigns it to the AttendantId field.
func (o *CurrentServicingAttendantType) SetAttendantId(v string) {
	o.AttendantId = &v
}

// GetAttendantName returns the AttendantName field value if set, zero value otherwise.
func (o *CurrentServicingAttendantType) GetAttendantName() string {
	if o == nil || IsNil(o.AttendantName) {
		var ret string
		return ret
	}
	return *o.AttendantName
}

// GetAttendantNameOk returns a tuple with the AttendantName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrentServicingAttendantType) GetAttendantNameOk() (*string, bool) {
	if o == nil || IsNil(o.AttendantName) {
		return nil, false
	}
	return o.AttendantName, true
}

// HasAttendantName returns a boolean if a field has been set.
func (o *CurrentServicingAttendantType) HasAttendantName() bool {
	if o != nil && !IsNil(o.AttendantName) {
		return true
	}

	return false
}

// SetAttendantName gets a reference to the given string and assigns it to the AttendantName field.
func (o *CurrentServicingAttendantType) SetAttendantName(v string) {
	o.AttendantName = &v
}

// GetFloor returns the Floor field value if set, zero value otherwise.
func (o *CurrentServicingAttendantType) GetFloor() string {
	if o == nil || IsNil(o.Floor) {
		var ret string
		return ret
	}
	return *o.Floor
}

// GetFloorOk returns a tuple with the Floor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrentServicingAttendantType) GetFloorOk() (*string, bool) {
	if o == nil || IsNil(o.Floor) {
		return nil, false
	}
	return o.Floor, true
}

// HasFloor returns a boolean if a field has been set.
func (o *CurrentServicingAttendantType) HasFloor() bool {
	if o != nil && !IsNil(o.Floor) {
		return true
	}

	return false
}

// SetFloor gets a reference to the given string and assigns it to the Floor field.
func (o *CurrentServicingAttendantType) SetFloor(v string) {
	o.Floor = &v
}

// GetFriday returns the Friday field value if set, zero value otherwise.
func (o *CurrentServicingAttendantType) GetFriday() bool {
	if o == nil || IsNil(o.Friday) {
		var ret bool
		return ret
	}
	return *o.Friday
}

// GetFridayOk returns a tuple with the Friday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrentServicingAttendantType) GetFridayOk() (*bool, bool) {
	if o == nil || IsNil(o.Friday) {
		return nil, false
	}
	return o.Friday, true
}

// HasFriday returns a boolean if a field has been set.
func (o *CurrentServicingAttendantType) HasFriday() bool {
	if o != nil && !IsNil(o.Friday) {
		return true
	}

	return false
}

// SetFriday gets a reference to the given bool and assigns it to the Friday field.
func (o *CurrentServicingAttendantType) SetFriday(v bool) {
	o.Friday = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *CurrentServicingAttendantType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrentServicingAttendantType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *CurrentServicingAttendantType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *CurrentServicingAttendantType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetMonday returns the Monday field value if set, zero value otherwise.
func (o *CurrentServicingAttendantType) GetMonday() bool {
	if o == nil || IsNil(o.Monday) {
		var ret bool
		return ret
	}
	return *o.Monday
}

// GetMondayOk returns a tuple with the Monday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrentServicingAttendantType) GetMondayOk() (*bool, bool) {
	if o == nil || IsNil(o.Monday) {
		return nil, false
	}
	return o.Monday, true
}

// HasMonday returns a boolean if a field has been set.
func (o *CurrentServicingAttendantType) HasMonday() bool {
	if o != nil && !IsNil(o.Monday) {
		return true
	}

	return false
}

// SetMonday gets a reference to the given bool and assigns it to the Monday field.
func (o *CurrentServicingAttendantType) SetMonday(v bool) {
	o.Monday = &v
}

// GetSaturday returns the Saturday field value if set, zero value otherwise.
func (o *CurrentServicingAttendantType) GetSaturday() bool {
	if o == nil || IsNil(o.Saturday) {
		var ret bool
		return ret
	}
	return *o.Saturday
}

// GetSaturdayOk returns a tuple with the Saturday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrentServicingAttendantType) GetSaturdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Saturday) {
		return nil, false
	}
	return o.Saturday, true
}

// HasSaturday returns a boolean if a field has been set.
func (o *CurrentServicingAttendantType) HasSaturday() bool {
	if o != nil && !IsNil(o.Saturday) {
		return true
	}

	return false
}

// SetSaturday gets a reference to the given bool and assigns it to the Saturday field.
func (o *CurrentServicingAttendantType) SetSaturday(v bool) {
	o.Saturday = &v
}

// GetSection returns the Section field value if set, zero value otherwise.
func (o *CurrentServicingAttendantType) GetSection() HousekeepingSectionType {
	if o == nil || IsNil(o.Section) {
		var ret HousekeepingSectionType
		return ret
	}
	return *o.Section
}

// GetSectionOk returns a tuple with the Section field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrentServicingAttendantType) GetSectionOk() (*HousekeepingSectionType, bool) {
	if o == nil || IsNil(o.Section) {
		return nil, false
	}
	return o.Section, true
}

// HasSection returns a boolean if a field has been set.
func (o *CurrentServicingAttendantType) HasSection() bool {
	if o != nil && !IsNil(o.Section) {
		return true
	}

	return false
}

// SetSection gets a reference to the given HousekeepingSectionType and assigns it to the Section field.
func (o *CurrentServicingAttendantType) SetSection(v HousekeepingSectionType) {
	o.Section = &v
}

// GetStartTime returns the StartTime field value if set, zero value otherwise.
func (o *CurrentServicingAttendantType) GetStartTime() string {
	if o == nil || IsNil(o.StartTime) {
		var ret string
		return ret
	}
	return *o.StartTime
}

// GetStartTimeOk returns a tuple with the StartTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrentServicingAttendantType) GetStartTimeOk() (*string, bool) {
	if o == nil || IsNil(o.StartTime) {
		return nil, false
	}
	return o.StartTime, true
}

// HasStartTime returns a boolean if a field has been set.
func (o *CurrentServicingAttendantType) HasStartTime() bool {
	if o != nil && !IsNil(o.StartTime) {
		return true
	}

	return false
}

// SetStartTime gets a reference to the given string and assigns it to the StartTime field.
func (o *CurrentServicingAttendantType) SetStartTime(v string) {
	o.StartTime = &v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *CurrentServicingAttendantType) GetStatus() ServicingAttendantStatusType {
	if o == nil || IsNil(o.Status) {
		var ret ServicingAttendantStatusType
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrentServicingAttendantType) GetStatusOk() (*ServicingAttendantStatusType, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *CurrentServicingAttendantType) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given ServicingAttendantStatusType and assigns it to the Status field.
func (o *CurrentServicingAttendantType) SetStatus(v ServicingAttendantStatusType) {
	o.Status = &v
}

// GetSunday returns the Sunday field value if set, zero value otherwise.
func (o *CurrentServicingAttendantType) GetSunday() bool {
	if o == nil || IsNil(o.Sunday) {
		var ret bool
		return ret
	}
	return *o.Sunday
}

// GetSundayOk returns a tuple with the Sunday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrentServicingAttendantType) GetSundayOk() (*bool, bool) {
	if o == nil || IsNil(o.Sunday) {
		return nil, false
	}
	return o.Sunday, true
}

// HasSunday returns a boolean if a field has been set.
func (o *CurrentServicingAttendantType) HasSunday() bool {
	if o != nil && !IsNil(o.Sunday) {
		return true
	}

	return false
}

// SetSunday gets a reference to the given bool and assigns it to the Sunday field.
func (o *CurrentServicingAttendantType) SetSunday(v bool) {
	o.Sunday = &v
}

// GetThursday returns the Thursday field value if set, zero value otherwise.
func (o *CurrentServicingAttendantType) GetThursday() bool {
	if o == nil || IsNil(o.Thursday) {
		var ret bool
		return ret
	}
	return *o.Thursday
}

// GetThursdayOk returns a tuple with the Thursday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrentServicingAttendantType) GetThursdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Thursday) {
		return nil, false
	}
	return o.Thursday, true
}

// HasThursday returns a boolean if a field has been set.
func (o *CurrentServicingAttendantType) HasThursday() bool {
	if o != nil && !IsNil(o.Thursday) {
		return true
	}

	return false
}

// SetThursday gets a reference to the given bool and assigns it to the Thursday field.
func (o *CurrentServicingAttendantType) SetThursday(v bool) {
	o.Thursday = &v
}

// GetTuesday returns the Tuesday field value if set, zero value otherwise.
func (o *CurrentServicingAttendantType) GetTuesday() bool {
	if o == nil || IsNil(o.Tuesday) {
		var ret bool
		return ret
	}
	return *o.Tuesday
}

// GetTuesdayOk returns a tuple with the Tuesday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrentServicingAttendantType) GetTuesdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Tuesday) {
		return nil, false
	}
	return o.Tuesday, true
}

// HasTuesday returns a boolean if a field has been set.
func (o *CurrentServicingAttendantType) HasTuesday() bool {
	if o != nil && !IsNil(o.Tuesday) {
		return true
	}

	return false
}

// SetTuesday gets a reference to the given bool and assigns it to the Tuesday field.
func (o *CurrentServicingAttendantType) SetTuesday(v bool) {
	o.Tuesday = &v
}

// GetWednesday returns the Wednesday field value if set, zero value otherwise.
func (o *CurrentServicingAttendantType) GetWednesday() bool {
	if o == nil || IsNil(o.Wednesday) {
		var ret bool
		return ret
	}
	return *o.Wednesday
}

// GetWednesdayOk returns a tuple with the Wednesday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrentServicingAttendantType) GetWednesdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Wednesday) {
		return nil, false
	}
	return o.Wednesday, true
}

// HasWednesday returns a boolean if a field has been set.
func (o *CurrentServicingAttendantType) HasWednesday() bool {
	if o != nil && !IsNil(o.Wednesday) {
		return true
	}

	return false
}

// SetWednesday gets a reference to the given bool and assigns it to the Wednesday field.
func (o *CurrentServicingAttendantType) SetWednesday(v bool) {
	o.Wednesday = &v
}

func (o CurrentServicingAttendantType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CurrentServicingAttendantType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActiveFlag) {
		toSerialize["activeFlag"] = o.ActiveFlag
	}
	if !IsNil(o.AppUser) {
		toSerialize["appUser"] = o.AppUser
	}
	if !IsNil(o.AttendantId) {
		toSerialize["attendantId"] = o.AttendantId
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
	if !IsNil(o.StartTime) {
		toSerialize["startTime"] = o.StartTime
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
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

type NullableCurrentServicingAttendantType struct {
	value *CurrentServicingAttendantType
	isSet bool
}

func (v NullableCurrentServicingAttendantType) Get() *CurrentServicingAttendantType {
	return v.value
}

func (v *NullableCurrentServicingAttendantType) Set(val *CurrentServicingAttendantType) {
	v.value = val
	v.isSet = true
}

func (v NullableCurrentServicingAttendantType) IsSet() bool {
	return v.isSet
}

func (v *NullableCurrentServicingAttendantType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCurrentServicingAttendantType(val *CurrentServicingAttendantType) *NullableCurrentServicingAttendantType {
	return &NullableCurrentServicingAttendantType{value: val, isSet: true}
}

func (v NullableCurrentServicingAttendantType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCurrentServicingAttendantType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

