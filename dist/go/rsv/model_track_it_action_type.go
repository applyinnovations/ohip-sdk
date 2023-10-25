/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the TrackItActionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TrackItActionType{}

// TrackItActionType Identifies the response expected from staff or other parties relative to a Track It ticket.
type TrackItActionType struct {
	Status *ActionStatusType `json:"status,omitempty"`
	TrackItAction *CodeDescriptionType `json:"trackItAction,omitempty"`
}

// NewTrackItActionType instantiates a new TrackItActionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTrackItActionType() *TrackItActionType {
	this := TrackItActionType{}
	return &this
}

// NewTrackItActionTypeWithDefaults instantiates a new TrackItActionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTrackItActionTypeWithDefaults() *TrackItActionType {
	this := TrackItActionType{}
	return &this
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *TrackItActionType) GetStatus() ActionStatusType {
	if o == nil || IsNil(o.Status) {
		var ret ActionStatusType
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItActionType) GetStatusOk() (*ActionStatusType, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *TrackItActionType) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given ActionStatusType and assigns it to the Status field.
func (o *TrackItActionType) SetStatus(v ActionStatusType) {
	o.Status = &v
}

// GetTrackItAction returns the TrackItAction field value if set, zero value otherwise.
func (o *TrackItActionType) GetTrackItAction() CodeDescriptionType {
	if o == nil || IsNil(o.TrackItAction) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.TrackItAction
}

// GetTrackItActionOk returns a tuple with the TrackItAction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItActionType) GetTrackItActionOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.TrackItAction) {
		return nil, false
	}
	return o.TrackItAction, true
}

// HasTrackItAction returns a boolean if a field has been set.
func (o *TrackItActionType) HasTrackItAction() bool {
	if o != nil && !IsNil(o.TrackItAction) {
		return true
	}

	return false
}

// SetTrackItAction gets a reference to the given CodeDescriptionType and assigns it to the TrackItAction field.
func (o *TrackItActionType) SetTrackItAction(v CodeDescriptionType) {
	o.TrackItAction = &v
}

func (o TrackItActionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TrackItActionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	if !IsNil(o.TrackItAction) {
		toSerialize["trackItAction"] = o.TrackItAction
	}
	return toSerialize, nil
}

type NullableTrackItActionType struct {
	value *TrackItActionType
	isSet bool
}

func (v NullableTrackItActionType) Get() *TrackItActionType {
	return v.value
}

func (v *NullableTrackItActionType) Set(val *TrackItActionType) {
	v.value = val
	v.isSet = true
}

func (v NullableTrackItActionType) IsSet() bool {
	return v.isSet
}

func (v *NullableTrackItActionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTrackItActionType(val *TrackItActionType) *NullableTrackItActionType {
	return &NullableTrackItActionType{value: val, isSet: true}
}

func (v NullableTrackItActionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTrackItActionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


