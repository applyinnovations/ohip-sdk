/*
OPERA Cloud Activity Management API

APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package actcfg

import (
	"encoding/json"
)

// checks if the ActivityConfigTypeDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ActivityConfigTypeDetailType{}

// ActivityConfigTypeDetailType Activity Type detail information.
type ActivityConfigTypeDetailType struct {
	// Element to hold Activity Class value.
	ActivityClassList []ActivityConfigClassType `json:"activityClassList,omitempty"`
	// Type for the activity Type.
	ActivityTypeCode *string `json:"activityTypeCode,omitempty"`
	// To create an iCal file (.ics) automatically and send it to the email address of the activity owner on activity creation, update, and deletion.
	AutoiCalendar *bool `json:"autoiCalendar,omitempty"`
	// Description for the Activity Type.
	Description *string `json:"description,omitempty"`
	// The hotel code where the activity type to be created.
	HotelId *string `json:"hotelId,omitempty"`
	// When checked,the activity type will still be valid for existing activities and traces,but it cannot be selected for new activities and traces
	Inactive *bool `json:"inactive,omitempty"`
	// Check for whether to consider the activity type is internal.
	Internal *bool `json:"internal,omitempty"`
	// Defines the number of minutes before the start time of an activity of this activity type, an alert should be issued.
	MinutesBeforeAlert *int32 `json:"minutesBeforeAlert,omitempty"`
	// Display sequence for the activity code type.
	Sequence *int32 `json:"sequence,omitempty"`
}

// NewActivityConfigTypeDetailType instantiates a new ActivityConfigTypeDetailType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewActivityConfigTypeDetailType() *ActivityConfigTypeDetailType {
	this := ActivityConfigTypeDetailType{}
	return &this
}

// NewActivityConfigTypeDetailTypeWithDefaults instantiates a new ActivityConfigTypeDetailType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewActivityConfigTypeDetailTypeWithDefaults() *ActivityConfigTypeDetailType {
	this := ActivityConfigTypeDetailType{}
	return &this
}

// GetActivityClassList returns the ActivityClassList field value if set, zero value otherwise.
func (o *ActivityConfigTypeDetailType) GetActivityClassList() []ActivityConfigClassType {
	if o == nil || IsNil(o.ActivityClassList) {
		var ret []ActivityConfigClassType
		return ret
	}
	return o.ActivityClassList
}

// GetActivityClassListOk returns a tuple with the ActivityClassList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityConfigTypeDetailType) GetActivityClassListOk() ([]ActivityConfigClassType, bool) {
	if o == nil || IsNil(o.ActivityClassList) {
		return nil, false
	}
	return o.ActivityClassList, true
}

// HasActivityClassList returns a boolean if a field has been set.
func (o *ActivityConfigTypeDetailType) HasActivityClassList() bool {
	if o != nil && !IsNil(o.ActivityClassList) {
		return true
	}

	return false
}

// SetActivityClassList gets a reference to the given []ActivityConfigClassType and assigns it to the ActivityClassList field.
func (o *ActivityConfigTypeDetailType) SetActivityClassList(v []ActivityConfigClassType) {
	o.ActivityClassList = v
}

// GetActivityTypeCode returns the ActivityTypeCode field value if set, zero value otherwise.
func (o *ActivityConfigTypeDetailType) GetActivityTypeCode() string {
	if o == nil || IsNil(o.ActivityTypeCode) {
		var ret string
		return ret
	}
	return *o.ActivityTypeCode
}

// GetActivityTypeCodeOk returns a tuple with the ActivityTypeCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityConfigTypeDetailType) GetActivityTypeCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ActivityTypeCode) {
		return nil, false
	}
	return o.ActivityTypeCode, true
}

// HasActivityTypeCode returns a boolean if a field has been set.
func (o *ActivityConfigTypeDetailType) HasActivityTypeCode() bool {
	if o != nil && !IsNil(o.ActivityTypeCode) {
		return true
	}

	return false
}

// SetActivityTypeCode gets a reference to the given string and assigns it to the ActivityTypeCode field.
func (o *ActivityConfigTypeDetailType) SetActivityTypeCode(v string) {
	o.ActivityTypeCode = &v
}

// GetAutoiCalendar returns the AutoiCalendar field value if set, zero value otherwise.
func (o *ActivityConfigTypeDetailType) GetAutoiCalendar() bool {
	if o == nil || IsNil(o.AutoiCalendar) {
		var ret bool
		return ret
	}
	return *o.AutoiCalendar
}

// GetAutoiCalendarOk returns a tuple with the AutoiCalendar field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityConfigTypeDetailType) GetAutoiCalendarOk() (*bool, bool) {
	if o == nil || IsNil(o.AutoiCalendar) {
		return nil, false
	}
	return o.AutoiCalendar, true
}

// HasAutoiCalendar returns a boolean if a field has been set.
func (o *ActivityConfigTypeDetailType) HasAutoiCalendar() bool {
	if o != nil && !IsNil(o.AutoiCalendar) {
		return true
	}

	return false
}

// SetAutoiCalendar gets a reference to the given bool and assigns it to the AutoiCalendar field.
func (o *ActivityConfigTypeDetailType) SetAutoiCalendar(v bool) {
	o.AutoiCalendar = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ActivityConfigTypeDetailType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityConfigTypeDetailType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ActivityConfigTypeDetailType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ActivityConfigTypeDetailType) SetDescription(v string) {
	o.Description = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ActivityConfigTypeDetailType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityConfigTypeDetailType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ActivityConfigTypeDetailType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ActivityConfigTypeDetailType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *ActivityConfigTypeDetailType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityConfigTypeDetailType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *ActivityConfigTypeDetailType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *ActivityConfigTypeDetailType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetInternal returns the Internal field value if set, zero value otherwise.
func (o *ActivityConfigTypeDetailType) GetInternal() bool {
	if o == nil || IsNil(o.Internal) {
		var ret bool
		return ret
	}
	return *o.Internal
}

// GetInternalOk returns a tuple with the Internal field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityConfigTypeDetailType) GetInternalOk() (*bool, bool) {
	if o == nil || IsNil(o.Internal) {
		return nil, false
	}
	return o.Internal, true
}

// HasInternal returns a boolean if a field has been set.
func (o *ActivityConfigTypeDetailType) HasInternal() bool {
	if o != nil && !IsNil(o.Internal) {
		return true
	}

	return false
}

// SetInternal gets a reference to the given bool and assigns it to the Internal field.
func (o *ActivityConfigTypeDetailType) SetInternal(v bool) {
	o.Internal = &v
}

// GetMinutesBeforeAlert returns the MinutesBeforeAlert field value if set, zero value otherwise.
func (o *ActivityConfigTypeDetailType) GetMinutesBeforeAlert() int32 {
	if o == nil || IsNil(o.MinutesBeforeAlert) {
		var ret int32
		return ret
	}
	return *o.MinutesBeforeAlert
}

// GetMinutesBeforeAlertOk returns a tuple with the MinutesBeforeAlert field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityConfigTypeDetailType) GetMinutesBeforeAlertOk() (*int32, bool) {
	if o == nil || IsNil(o.MinutesBeforeAlert) {
		return nil, false
	}
	return o.MinutesBeforeAlert, true
}

// HasMinutesBeforeAlert returns a boolean if a field has been set.
func (o *ActivityConfigTypeDetailType) HasMinutesBeforeAlert() bool {
	if o != nil && !IsNil(o.MinutesBeforeAlert) {
		return true
	}

	return false
}

// SetMinutesBeforeAlert gets a reference to the given int32 and assigns it to the MinutesBeforeAlert field.
func (o *ActivityConfigTypeDetailType) SetMinutesBeforeAlert(v int32) {
	o.MinutesBeforeAlert = &v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *ActivityConfigTypeDetailType) GetSequence() int32 {
	if o == nil || IsNil(o.Sequence) {
		var ret int32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityConfigTypeDetailType) GetSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *ActivityConfigTypeDetailType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given int32 and assigns it to the Sequence field.
func (o *ActivityConfigTypeDetailType) SetSequence(v int32) {
	o.Sequence = &v
}

func (o ActivityConfigTypeDetailType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ActivityConfigTypeDetailType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActivityClassList) {
		toSerialize["activityClassList"] = o.ActivityClassList
	}
	if !IsNil(o.ActivityTypeCode) {
		toSerialize["activityTypeCode"] = o.ActivityTypeCode
	}
	if !IsNil(o.AutoiCalendar) {
		toSerialize["autoiCalendar"] = o.AutoiCalendar
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.Internal) {
		toSerialize["internal"] = o.Internal
	}
	if !IsNil(o.MinutesBeforeAlert) {
		toSerialize["minutesBeforeAlert"] = o.MinutesBeforeAlert
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	return toSerialize, nil
}

type NullableActivityConfigTypeDetailType struct {
	value *ActivityConfigTypeDetailType
	isSet bool
}

func (v NullableActivityConfigTypeDetailType) Get() *ActivityConfigTypeDetailType {
	return v.value
}

func (v *NullableActivityConfigTypeDetailType) Set(val *ActivityConfigTypeDetailType) {
	v.value = val
	v.isSet = true
}

func (v NullableActivityConfigTypeDetailType) IsSet() bool {
	return v.isSet
}

func (v *NullableActivityConfigTypeDetailType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableActivityConfigTypeDetailType(val *ActivityConfigTypeDetailType) *NullableActivityConfigTypeDetailType {
	return &NullableActivityConfigTypeDetailType{value: val, isSet: true}
}

func (v NullableActivityConfigTypeDetailType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableActivityConfigTypeDetailType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

