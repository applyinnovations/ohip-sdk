/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the HousekeepingAttendantType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HousekeepingAttendantType{}

// HousekeepingAttendantType Housekeeping Attendant Information.
type HousekeepingAttendantType struct {
	// Application User ID assigned for the attendant.
	AppUser *string `json:"appUser,omitempty"`
	// An attendant ID.
	AttendantId *string `json:"attendantId,omitempty"`
	// Floor where the attendant is assigned.
	Floor *string `json:"floor,omitempty"`
	// Resort Code
	HotelId *string `json:"hotelId,omitempty"`
	// Indicates whether the attendant is active or not.
	Inactive *bool `json:"inactive,omitempty"`
	// Job which the attendant is assigned.
	Job *string `json:"job,omitempty"`
	// An attendant ID.
	Name *string `json:"name,omitempty"`
	// An attendant's phone No.
	PhoneNo *string `json:"phoneNo,omitempty"`
	// Section where the attendant is assigned.
	Section *string `json:"section,omitempty"`
	WorkingDays *DaysOfWeekAttrType `json:"workingDays,omitempty"`
}

// NewHousekeepingAttendantType instantiates a new HousekeepingAttendantType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHousekeepingAttendantType() *HousekeepingAttendantType {
	this := HousekeepingAttendantType{}
	return &this
}

// NewHousekeepingAttendantTypeWithDefaults instantiates a new HousekeepingAttendantType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHousekeepingAttendantTypeWithDefaults() *HousekeepingAttendantType {
	this := HousekeepingAttendantType{}
	return &this
}

// GetAppUser returns the AppUser field value if set, zero value otherwise.
func (o *HousekeepingAttendantType) GetAppUser() string {
	if o == nil || IsNil(o.AppUser) {
		var ret string
		return ret
	}
	return *o.AppUser
}

// GetAppUserOk returns a tuple with the AppUser field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingAttendantType) GetAppUserOk() (*string, bool) {
	if o == nil || IsNil(o.AppUser) {
		return nil, false
	}
	return o.AppUser, true
}

// HasAppUser returns a boolean if a field has been set.
func (o *HousekeepingAttendantType) HasAppUser() bool {
	if o != nil && !IsNil(o.AppUser) {
		return true
	}

	return false
}

// SetAppUser gets a reference to the given string and assigns it to the AppUser field.
func (o *HousekeepingAttendantType) SetAppUser(v string) {
	o.AppUser = &v
}

// GetAttendantId returns the AttendantId field value if set, zero value otherwise.
func (o *HousekeepingAttendantType) GetAttendantId() string {
	if o == nil || IsNil(o.AttendantId) {
		var ret string
		return ret
	}
	return *o.AttendantId
}

// GetAttendantIdOk returns a tuple with the AttendantId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingAttendantType) GetAttendantIdOk() (*string, bool) {
	if o == nil || IsNil(o.AttendantId) {
		return nil, false
	}
	return o.AttendantId, true
}

// HasAttendantId returns a boolean if a field has been set.
func (o *HousekeepingAttendantType) HasAttendantId() bool {
	if o != nil && !IsNil(o.AttendantId) {
		return true
	}

	return false
}

// SetAttendantId gets a reference to the given string and assigns it to the AttendantId field.
func (o *HousekeepingAttendantType) SetAttendantId(v string) {
	o.AttendantId = &v
}

// GetFloor returns the Floor field value if set, zero value otherwise.
func (o *HousekeepingAttendantType) GetFloor() string {
	if o == nil || IsNil(o.Floor) {
		var ret string
		return ret
	}
	return *o.Floor
}

// GetFloorOk returns a tuple with the Floor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingAttendantType) GetFloorOk() (*string, bool) {
	if o == nil || IsNil(o.Floor) {
		return nil, false
	}
	return o.Floor, true
}

// HasFloor returns a boolean if a field has been set.
func (o *HousekeepingAttendantType) HasFloor() bool {
	if o != nil && !IsNil(o.Floor) {
		return true
	}

	return false
}

// SetFloor gets a reference to the given string and assigns it to the Floor field.
func (o *HousekeepingAttendantType) SetFloor(v string) {
	o.Floor = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HousekeepingAttendantType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingAttendantType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HousekeepingAttendantType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HousekeepingAttendantType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *HousekeepingAttendantType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingAttendantType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *HousekeepingAttendantType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *HousekeepingAttendantType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetJob returns the Job field value if set, zero value otherwise.
func (o *HousekeepingAttendantType) GetJob() string {
	if o == nil || IsNil(o.Job) {
		var ret string
		return ret
	}
	return *o.Job
}

// GetJobOk returns a tuple with the Job field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingAttendantType) GetJobOk() (*string, bool) {
	if o == nil || IsNil(o.Job) {
		return nil, false
	}
	return o.Job, true
}

// HasJob returns a boolean if a field has been set.
func (o *HousekeepingAttendantType) HasJob() bool {
	if o != nil && !IsNil(o.Job) {
		return true
	}

	return false
}

// SetJob gets a reference to the given string and assigns it to the Job field.
func (o *HousekeepingAttendantType) SetJob(v string) {
	o.Job = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *HousekeepingAttendantType) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingAttendantType) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *HousekeepingAttendantType) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *HousekeepingAttendantType) SetName(v string) {
	o.Name = &v
}

// GetPhoneNo returns the PhoneNo field value if set, zero value otherwise.
func (o *HousekeepingAttendantType) GetPhoneNo() string {
	if o == nil || IsNil(o.PhoneNo) {
		var ret string
		return ret
	}
	return *o.PhoneNo
}

// GetPhoneNoOk returns a tuple with the PhoneNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingAttendantType) GetPhoneNoOk() (*string, bool) {
	if o == nil || IsNil(o.PhoneNo) {
		return nil, false
	}
	return o.PhoneNo, true
}

// HasPhoneNo returns a boolean if a field has been set.
func (o *HousekeepingAttendantType) HasPhoneNo() bool {
	if o != nil && !IsNil(o.PhoneNo) {
		return true
	}

	return false
}

// SetPhoneNo gets a reference to the given string and assigns it to the PhoneNo field.
func (o *HousekeepingAttendantType) SetPhoneNo(v string) {
	o.PhoneNo = &v
}

// GetSection returns the Section field value if set, zero value otherwise.
func (o *HousekeepingAttendantType) GetSection() string {
	if o == nil || IsNil(o.Section) {
		var ret string
		return ret
	}
	return *o.Section
}

// GetSectionOk returns a tuple with the Section field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingAttendantType) GetSectionOk() (*string, bool) {
	if o == nil || IsNil(o.Section) {
		return nil, false
	}
	return o.Section, true
}

// HasSection returns a boolean if a field has been set.
func (o *HousekeepingAttendantType) HasSection() bool {
	if o != nil && !IsNil(o.Section) {
		return true
	}

	return false
}

// SetSection gets a reference to the given string and assigns it to the Section field.
func (o *HousekeepingAttendantType) SetSection(v string) {
	o.Section = &v
}

// GetWorkingDays returns the WorkingDays field value if set, zero value otherwise.
func (o *HousekeepingAttendantType) GetWorkingDays() DaysOfWeekAttrType {
	if o == nil || IsNil(o.WorkingDays) {
		var ret DaysOfWeekAttrType
		return ret
	}
	return *o.WorkingDays
}

// GetWorkingDaysOk returns a tuple with the WorkingDays field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingAttendantType) GetWorkingDaysOk() (*DaysOfWeekAttrType, bool) {
	if o == nil || IsNil(o.WorkingDays) {
		return nil, false
	}
	return o.WorkingDays, true
}

// HasWorkingDays returns a boolean if a field has been set.
func (o *HousekeepingAttendantType) HasWorkingDays() bool {
	if o != nil && !IsNil(o.WorkingDays) {
		return true
	}

	return false
}

// SetWorkingDays gets a reference to the given DaysOfWeekAttrType and assigns it to the WorkingDays field.
func (o *HousekeepingAttendantType) SetWorkingDays(v DaysOfWeekAttrType) {
	o.WorkingDays = &v
}

func (o HousekeepingAttendantType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HousekeepingAttendantType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AppUser) {
		toSerialize["appUser"] = o.AppUser
	}
	if !IsNil(o.AttendantId) {
		toSerialize["attendantId"] = o.AttendantId
	}
	if !IsNil(o.Floor) {
		toSerialize["floor"] = o.Floor
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.Job) {
		toSerialize["job"] = o.Job
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.PhoneNo) {
		toSerialize["phoneNo"] = o.PhoneNo
	}
	if !IsNil(o.Section) {
		toSerialize["section"] = o.Section
	}
	if !IsNil(o.WorkingDays) {
		toSerialize["workingDays"] = o.WorkingDays
	}
	return toSerialize, nil
}

type NullableHousekeepingAttendantType struct {
	value *HousekeepingAttendantType
	isSet bool
}

func (v NullableHousekeepingAttendantType) Get() *HousekeepingAttendantType {
	return v.value
}

func (v *NullableHousekeepingAttendantType) Set(val *HousekeepingAttendantType) {
	v.value = val
	v.isSet = true
}

func (v NullableHousekeepingAttendantType) IsSet() bool {
	return v.isSet
}

func (v *NullableHousekeepingAttendantType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHousekeepingAttendantType(val *HousekeepingAttendantType) *NullableHousekeepingAttendantType {
	return &NullableHousekeepingAttendantType{value: val, isSet: true}
}

func (v NullableHousekeepingAttendantType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHousekeepingAttendantType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

