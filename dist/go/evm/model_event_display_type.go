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

// checks if the EventDisplayType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EventDisplayType{}

// EventDisplayType Display Information for the Function Diary Event.
type EventDisplayType struct {
	AlternateMasterYn *string `json:"alternateMasterYn,omitempty"`
	BookingName *string `json:"bookingName,omitempty"`
	CateringOnlyYn *string `json:"cateringOnlyYn,omitempty"`
	DontMoveYn *string `json:"dontMoveYn,omitempty"`
	ExclusiveYn *string `json:"exclusiveYn,omitempty"`
	LoudEventYn *string `json:"loudEventYn,omitempty"`
	MasterYn *string `json:"masterYn,omitempty"`
	SharedYn *string `json:"sharedYn,omitempty"`
	WaitlistedYn *string `json:"waitlistedYn,omitempty"`
}

// NewEventDisplayType instantiates a new EventDisplayType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEventDisplayType() *EventDisplayType {
	this := EventDisplayType{}
	return &this
}

// NewEventDisplayTypeWithDefaults instantiates a new EventDisplayType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEventDisplayTypeWithDefaults() *EventDisplayType {
	this := EventDisplayType{}
	return &this
}

// GetAlternateMasterYn returns the AlternateMasterYn field value if set, zero value otherwise.
func (o *EventDisplayType) GetAlternateMasterYn() string {
	if o == nil || IsNil(o.AlternateMasterYn) {
		var ret string
		return ret
	}
	return *o.AlternateMasterYn
}

// GetAlternateMasterYnOk returns a tuple with the AlternateMasterYn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDisplayType) GetAlternateMasterYnOk() (*string, bool) {
	if o == nil || IsNil(o.AlternateMasterYn) {
		return nil, false
	}
	return o.AlternateMasterYn, true
}

// HasAlternateMasterYn returns a boolean if a field has been set.
func (o *EventDisplayType) HasAlternateMasterYn() bool {
	if o != nil && !IsNil(o.AlternateMasterYn) {
		return true
	}

	return false
}

// SetAlternateMasterYn gets a reference to the given string and assigns it to the AlternateMasterYn field.
func (o *EventDisplayType) SetAlternateMasterYn(v string) {
	o.AlternateMasterYn = &v
}

// GetBookingName returns the BookingName field value if set, zero value otherwise.
func (o *EventDisplayType) GetBookingName() string {
	if o == nil || IsNil(o.BookingName) {
		var ret string
		return ret
	}
	return *o.BookingName
}

// GetBookingNameOk returns a tuple with the BookingName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDisplayType) GetBookingNameOk() (*string, bool) {
	if o == nil || IsNil(o.BookingName) {
		return nil, false
	}
	return o.BookingName, true
}

// HasBookingName returns a boolean if a field has been set.
func (o *EventDisplayType) HasBookingName() bool {
	if o != nil && !IsNil(o.BookingName) {
		return true
	}

	return false
}

// SetBookingName gets a reference to the given string and assigns it to the BookingName field.
func (o *EventDisplayType) SetBookingName(v string) {
	o.BookingName = &v
}

// GetCateringOnlyYn returns the CateringOnlyYn field value if set, zero value otherwise.
func (o *EventDisplayType) GetCateringOnlyYn() string {
	if o == nil || IsNil(o.CateringOnlyYn) {
		var ret string
		return ret
	}
	return *o.CateringOnlyYn
}

// GetCateringOnlyYnOk returns a tuple with the CateringOnlyYn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDisplayType) GetCateringOnlyYnOk() (*string, bool) {
	if o == nil || IsNil(o.CateringOnlyYn) {
		return nil, false
	}
	return o.CateringOnlyYn, true
}

// HasCateringOnlyYn returns a boolean if a field has been set.
func (o *EventDisplayType) HasCateringOnlyYn() bool {
	if o != nil && !IsNil(o.CateringOnlyYn) {
		return true
	}

	return false
}

// SetCateringOnlyYn gets a reference to the given string and assigns it to the CateringOnlyYn field.
func (o *EventDisplayType) SetCateringOnlyYn(v string) {
	o.CateringOnlyYn = &v
}

// GetDontMoveYn returns the DontMoveYn field value if set, zero value otherwise.
func (o *EventDisplayType) GetDontMoveYn() string {
	if o == nil || IsNil(o.DontMoveYn) {
		var ret string
		return ret
	}
	return *o.DontMoveYn
}

// GetDontMoveYnOk returns a tuple with the DontMoveYn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDisplayType) GetDontMoveYnOk() (*string, bool) {
	if o == nil || IsNil(o.DontMoveYn) {
		return nil, false
	}
	return o.DontMoveYn, true
}

// HasDontMoveYn returns a boolean if a field has been set.
func (o *EventDisplayType) HasDontMoveYn() bool {
	if o != nil && !IsNil(o.DontMoveYn) {
		return true
	}

	return false
}

// SetDontMoveYn gets a reference to the given string and assigns it to the DontMoveYn field.
func (o *EventDisplayType) SetDontMoveYn(v string) {
	o.DontMoveYn = &v
}

// GetExclusiveYn returns the ExclusiveYn field value if set, zero value otherwise.
func (o *EventDisplayType) GetExclusiveYn() string {
	if o == nil || IsNil(o.ExclusiveYn) {
		var ret string
		return ret
	}
	return *o.ExclusiveYn
}

// GetExclusiveYnOk returns a tuple with the ExclusiveYn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDisplayType) GetExclusiveYnOk() (*string, bool) {
	if o == nil || IsNil(o.ExclusiveYn) {
		return nil, false
	}
	return o.ExclusiveYn, true
}

// HasExclusiveYn returns a boolean if a field has been set.
func (o *EventDisplayType) HasExclusiveYn() bool {
	if o != nil && !IsNil(o.ExclusiveYn) {
		return true
	}

	return false
}

// SetExclusiveYn gets a reference to the given string and assigns it to the ExclusiveYn field.
func (o *EventDisplayType) SetExclusiveYn(v string) {
	o.ExclusiveYn = &v
}

// GetLoudEventYn returns the LoudEventYn field value if set, zero value otherwise.
func (o *EventDisplayType) GetLoudEventYn() string {
	if o == nil || IsNil(o.LoudEventYn) {
		var ret string
		return ret
	}
	return *o.LoudEventYn
}

// GetLoudEventYnOk returns a tuple with the LoudEventYn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDisplayType) GetLoudEventYnOk() (*string, bool) {
	if o == nil || IsNil(o.LoudEventYn) {
		return nil, false
	}
	return o.LoudEventYn, true
}

// HasLoudEventYn returns a boolean if a field has been set.
func (o *EventDisplayType) HasLoudEventYn() bool {
	if o != nil && !IsNil(o.LoudEventYn) {
		return true
	}

	return false
}

// SetLoudEventYn gets a reference to the given string and assigns it to the LoudEventYn field.
func (o *EventDisplayType) SetLoudEventYn(v string) {
	o.LoudEventYn = &v
}

// GetMasterYn returns the MasterYn field value if set, zero value otherwise.
func (o *EventDisplayType) GetMasterYn() string {
	if o == nil || IsNil(o.MasterYn) {
		var ret string
		return ret
	}
	return *o.MasterYn
}

// GetMasterYnOk returns a tuple with the MasterYn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDisplayType) GetMasterYnOk() (*string, bool) {
	if o == nil || IsNil(o.MasterYn) {
		return nil, false
	}
	return o.MasterYn, true
}

// HasMasterYn returns a boolean if a field has been set.
func (o *EventDisplayType) HasMasterYn() bool {
	if o != nil && !IsNil(o.MasterYn) {
		return true
	}

	return false
}

// SetMasterYn gets a reference to the given string and assigns it to the MasterYn field.
func (o *EventDisplayType) SetMasterYn(v string) {
	o.MasterYn = &v
}

// GetSharedYn returns the SharedYn field value if set, zero value otherwise.
func (o *EventDisplayType) GetSharedYn() string {
	if o == nil || IsNil(o.SharedYn) {
		var ret string
		return ret
	}
	return *o.SharedYn
}

// GetSharedYnOk returns a tuple with the SharedYn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDisplayType) GetSharedYnOk() (*string, bool) {
	if o == nil || IsNil(o.SharedYn) {
		return nil, false
	}
	return o.SharedYn, true
}

// HasSharedYn returns a boolean if a field has been set.
func (o *EventDisplayType) HasSharedYn() bool {
	if o != nil && !IsNil(o.SharedYn) {
		return true
	}

	return false
}

// SetSharedYn gets a reference to the given string and assigns it to the SharedYn field.
func (o *EventDisplayType) SetSharedYn(v string) {
	o.SharedYn = &v
}

// GetWaitlistedYn returns the WaitlistedYn field value if set, zero value otherwise.
func (o *EventDisplayType) GetWaitlistedYn() string {
	if o == nil || IsNil(o.WaitlistedYn) {
		var ret string
		return ret
	}
	return *o.WaitlistedYn
}

// GetWaitlistedYnOk returns a tuple with the WaitlistedYn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDisplayType) GetWaitlistedYnOk() (*string, bool) {
	if o == nil || IsNil(o.WaitlistedYn) {
		return nil, false
	}
	return o.WaitlistedYn, true
}

// HasWaitlistedYn returns a boolean if a field has been set.
func (o *EventDisplayType) HasWaitlistedYn() bool {
	if o != nil && !IsNil(o.WaitlistedYn) {
		return true
	}

	return false
}

// SetWaitlistedYn gets a reference to the given string and assigns it to the WaitlistedYn field.
func (o *EventDisplayType) SetWaitlistedYn(v string) {
	o.WaitlistedYn = &v
}

func (o EventDisplayType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EventDisplayType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AlternateMasterYn) {
		toSerialize["alternateMasterYn"] = o.AlternateMasterYn
	}
	if !IsNil(o.BookingName) {
		toSerialize["bookingName"] = o.BookingName
	}
	if !IsNil(o.CateringOnlyYn) {
		toSerialize["cateringOnlyYn"] = o.CateringOnlyYn
	}
	if !IsNil(o.DontMoveYn) {
		toSerialize["dontMoveYn"] = o.DontMoveYn
	}
	if !IsNil(o.ExclusiveYn) {
		toSerialize["exclusiveYn"] = o.ExclusiveYn
	}
	if !IsNil(o.LoudEventYn) {
		toSerialize["loudEventYn"] = o.LoudEventYn
	}
	if !IsNil(o.MasterYn) {
		toSerialize["masterYn"] = o.MasterYn
	}
	if !IsNil(o.SharedYn) {
		toSerialize["sharedYn"] = o.SharedYn
	}
	if !IsNil(o.WaitlistedYn) {
		toSerialize["waitlistedYn"] = o.WaitlistedYn
	}
	return toSerialize, nil
}

type NullableEventDisplayType struct {
	value *EventDisplayType
	isSet bool
}

func (v NullableEventDisplayType) Get() *EventDisplayType {
	return v.value
}

func (v *NullableEventDisplayType) Set(val *EventDisplayType) {
	v.value = val
	v.isSet = true
}

func (v NullableEventDisplayType) IsSet() bool {
	return v.isSet
}

func (v *NullableEventDisplayType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEventDisplayType(val *EventDisplayType) *NullableEventDisplayType {
	return &NullableEventDisplayType{value: val, isSet: true}
}

func (v NullableEventDisplayType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEventDisplayType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


