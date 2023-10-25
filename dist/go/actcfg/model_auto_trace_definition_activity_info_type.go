/*
OPERA Cloud Activity Management API

APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package actcfg

import (
	"encoding/json"
)

// checks if the AutoTraceDefinitionActivityInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AutoTraceDefinitionActivityInfoType{}

// AutoTraceDefinitionActivityInfoType Activity Related Information of Auto Trace.
type AutoTraceDefinitionActivityInfoType struct {
	ActivityClass *ActivityConfigClassType `json:"activityClass,omitempty"`
	// Start Date of the Activity.Input for this field is selected from the list.
	ActivityStartDate *string `json:"activityStartDate,omitempty"`
	// Start Time of the Activity.
	ActivityStartTime *string `json:"activityStartTime,omitempty"`
	// Type for the Activity.
	ActivityTypeCode *string `json:"activityTypeCode,omitempty"`
	// Number of days from activity start date
	DaysFromActivityStartDate *int32 `json:"daysFromActivityStartDate,omitempty"`
	// Purpose for the Activity.
	Purpose *string `json:"purpose,omitempty"`
}

// NewAutoTraceDefinitionActivityInfoType instantiates a new AutoTraceDefinitionActivityInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAutoTraceDefinitionActivityInfoType() *AutoTraceDefinitionActivityInfoType {
	this := AutoTraceDefinitionActivityInfoType{}
	return &this
}

// NewAutoTraceDefinitionActivityInfoTypeWithDefaults instantiates a new AutoTraceDefinitionActivityInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAutoTraceDefinitionActivityInfoTypeWithDefaults() *AutoTraceDefinitionActivityInfoType {
	this := AutoTraceDefinitionActivityInfoType{}
	return &this
}

// GetActivityClass returns the ActivityClass field value if set, zero value otherwise.
func (o *AutoTraceDefinitionActivityInfoType) GetActivityClass() ActivityConfigClassType {
	if o == nil || IsNil(o.ActivityClass) {
		var ret ActivityConfigClassType
		return ret
	}
	return *o.ActivityClass
}

// GetActivityClassOk returns a tuple with the ActivityClass field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoTraceDefinitionActivityInfoType) GetActivityClassOk() (*ActivityConfigClassType, bool) {
	if o == nil || IsNil(o.ActivityClass) {
		return nil, false
	}
	return o.ActivityClass, true
}

// HasActivityClass returns a boolean if a field has been set.
func (o *AutoTraceDefinitionActivityInfoType) HasActivityClass() bool {
	if o != nil && !IsNil(o.ActivityClass) {
		return true
	}

	return false
}

// SetActivityClass gets a reference to the given ActivityConfigClassType and assigns it to the ActivityClass field.
func (o *AutoTraceDefinitionActivityInfoType) SetActivityClass(v ActivityConfigClassType) {
	o.ActivityClass = &v
}

// GetActivityStartDate returns the ActivityStartDate field value if set, zero value otherwise.
func (o *AutoTraceDefinitionActivityInfoType) GetActivityStartDate() string {
	if o == nil || IsNil(o.ActivityStartDate) {
		var ret string
		return ret
	}
	return *o.ActivityStartDate
}

// GetActivityStartDateOk returns a tuple with the ActivityStartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoTraceDefinitionActivityInfoType) GetActivityStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.ActivityStartDate) {
		return nil, false
	}
	return o.ActivityStartDate, true
}

// HasActivityStartDate returns a boolean if a field has been set.
func (o *AutoTraceDefinitionActivityInfoType) HasActivityStartDate() bool {
	if o != nil && !IsNil(o.ActivityStartDate) {
		return true
	}

	return false
}

// SetActivityStartDate gets a reference to the given string and assigns it to the ActivityStartDate field.
func (o *AutoTraceDefinitionActivityInfoType) SetActivityStartDate(v string) {
	o.ActivityStartDate = &v
}

// GetActivityStartTime returns the ActivityStartTime field value if set, zero value otherwise.
func (o *AutoTraceDefinitionActivityInfoType) GetActivityStartTime() string {
	if o == nil || IsNil(o.ActivityStartTime) {
		var ret string
		return ret
	}
	return *o.ActivityStartTime
}

// GetActivityStartTimeOk returns a tuple with the ActivityStartTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoTraceDefinitionActivityInfoType) GetActivityStartTimeOk() (*string, bool) {
	if o == nil || IsNil(o.ActivityStartTime) {
		return nil, false
	}
	return o.ActivityStartTime, true
}

// HasActivityStartTime returns a boolean if a field has been set.
func (o *AutoTraceDefinitionActivityInfoType) HasActivityStartTime() bool {
	if o != nil && !IsNil(o.ActivityStartTime) {
		return true
	}

	return false
}

// SetActivityStartTime gets a reference to the given string and assigns it to the ActivityStartTime field.
func (o *AutoTraceDefinitionActivityInfoType) SetActivityStartTime(v string) {
	o.ActivityStartTime = &v
}

// GetActivityTypeCode returns the ActivityTypeCode field value if set, zero value otherwise.
func (o *AutoTraceDefinitionActivityInfoType) GetActivityTypeCode() string {
	if o == nil || IsNil(o.ActivityTypeCode) {
		var ret string
		return ret
	}
	return *o.ActivityTypeCode
}

// GetActivityTypeCodeOk returns a tuple with the ActivityTypeCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoTraceDefinitionActivityInfoType) GetActivityTypeCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ActivityTypeCode) {
		return nil, false
	}
	return o.ActivityTypeCode, true
}

// HasActivityTypeCode returns a boolean if a field has been set.
func (o *AutoTraceDefinitionActivityInfoType) HasActivityTypeCode() bool {
	if o != nil && !IsNil(o.ActivityTypeCode) {
		return true
	}

	return false
}

// SetActivityTypeCode gets a reference to the given string and assigns it to the ActivityTypeCode field.
func (o *AutoTraceDefinitionActivityInfoType) SetActivityTypeCode(v string) {
	o.ActivityTypeCode = &v
}

// GetDaysFromActivityStartDate returns the DaysFromActivityStartDate field value if set, zero value otherwise.
func (o *AutoTraceDefinitionActivityInfoType) GetDaysFromActivityStartDate() int32 {
	if o == nil || IsNil(o.DaysFromActivityStartDate) {
		var ret int32
		return ret
	}
	return *o.DaysFromActivityStartDate
}

// GetDaysFromActivityStartDateOk returns a tuple with the DaysFromActivityStartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoTraceDefinitionActivityInfoType) GetDaysFromActivityStartDateOk() (*int32, bool) {
	if o == nil || IsNil(o.DaysFromActivityStartDate) {
		return nil, false
	}
	return o.DaysFromActivityStartDate, true
}

// HasDaysFromActivityStartDate returns a boolean if a field has been set.
func (o *AutoTraceDefinitionActivityInfoType) HasDaysFromActivityStartDate() bool {
	if o != nil && !IsNil(o.DaysFromActivityStartDate) {
		return true
	}

	return false
}

// SetDaysFromActivityStartDate gets a reference to the given int32 and assigns it to the DaysFromActivityStartDate field.
func (o *AutoTraceDefinitionActivityInfoType) SetDaysFromActivityStartDate(v int32) {
	o.DaysFromActivityStartDate = &v
}

// GetPurpose returns the Purpose field value if set, zero value otherwise.
func (o *AutoTraceDefinitionActivityInfoType) GetPurpose() string {
	if o == nil || IsNil(o.Purpose) {
		var ret string
		return ret
	}
	return *o.Purpose
}

// GetPurposeOk returns a tuple with the Purpose field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoTraceDefinitionActivityInfoType) GetPurposeOk() (*string, bool) {
	if o == nil || IsNil(o.Purpose) {
		return nil, false
	}
	return o.Purpose, true
}

// HasPurpose returns a boolean if a field has been set.
func (o *AutoTraceDefinitionActivityInfoType) HasPurpose() bool {
	if o != nil && !IsNil(o.Purpose) {
		return true
	}

	return false
}

// SetPurpose gets a reference to the given string and assigns it to the Purpose field.
func (o *AutoTraceDefinitionActivityInfoType) SetPurpose(v string) {
	o.Purpose = &v
}

func (o AutoTraceDefinitionActivityInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AutoTraceDefinitionActivityInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActivityClass) {
		toSerialize["activityClass"] = o.ActivityClass
	}
	if !IsNil(o.ActivityStartDate) {
		toSerialize["activityStartDate"] = o.ActivityStartDate
	}
	if !IsNil(o.ActivityStartTime) {
		toSerialize["activityStartTime"] = o.ActivityStartTime
	}
	if !IsNil(o.ActivityTypeCode) {
		toSerialize["activityTypeCode"] = o.ActivityTypeCode
	}
	if !IsNil(o.DaysFromActivityStartDate) {
		toSerialize["daysFromActivityStartDate"] = o.DaysFromActivityStartDate
	}
	if !IsNil(o.Purpose) {
		toSerialize["purpose"] = o.Purpose
	}
	return toSerialize, nil
}

type NullableAutoTraceDefinitionActivityInfoType struct {
	value *AutoTraceDefinitionActivityInfoType
	isSet bool
}

func (v NullableAutoTraceDefinitionActivityInfoType) Get() *AutoTraceDefinitionActivityInfoType {
	return v.value
}

func (v *NullableAutoTraceDefinitionActivityInfoType) Set(val *AutoTraceDefinitionActivityInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableAutoTraceDefinitionActivityInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableAutoTraceDefinitionActivityInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAutoTraceDefinitionActivityInfoType(val *AutoTraceDefinitionActivityInfoType) *NullableAutoTraceDefinitionActivityInfoType {
	return &NullableAutoTraceDefinitionActivityInfoType{value: val, isSet: true}
}

func (v NullableAutoTraceDefinitionActivityInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAutoTraceDefinitionActivityInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


