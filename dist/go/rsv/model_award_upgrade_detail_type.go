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

// checks if the AwardUpgradeDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AwardUpgradeDetailType{}

// AwardUpgradeDetailType struct for AwardUpgradeDetailType
type AwardUpgradeDetailType struct {
	// Date on which the award details like points required and penalty points are applicable.
	Date *string `json:"date,omitempty"`
	// Penalty Points applicable for the award detail date.
	PenaltyPoints *int32 `json:"penaltyPoints,omitempty"`
	// Points required for the award detail date.
	PointsRequired *int32 `json:"pointsRequired,omitempty"`
}

// NewAwardUpgradeDetailType instantiates a new AwardUpgradeDetailType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAwardUpgradeDetailType() *AwardUpgradeDetailType {
	this := AwardUpgradeDetailType{}
	return &this
}

// NewAwardUpgradeDetailTypeWithDefaults instantiates a new AwardUpgradeDetailType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAwardUpgradeDetailTypeWithDefaults() *AwardUpgradeDetailType {
	this := AwardUpgradeDetailType{}
	return &this
}

// GetDate returns the Date field value if set, zero value otherwise.
func (o *AwardUpgradeDetailType) GetDate() string {
	if o == nil || IsNil(o.Date) {
		var ret string
		return ret
	}
	return *o.Date
}

// GetDateOk returns a tuple with the Date field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardUpgradeDetailType) GetDateOk() (*string, bool) {
	if o == nil || IsNil(o.Date) {
		return nil, false
	}
	return o.Date, true
}

// HasDate returns a boolean if a field has been set.
func (o *AwardUpgradeDetailType) HasDate() bool {
	if o != nil && !IsNil(o.Date) {
		return true
	}

	return false
}

// SetDate gets a reference to the given string and assigns it to the Date field.
func (o *AwardUpgradeDetailType) SetDate(v string) {
	o.Date = &v
}

// GetPenaltyPoints returns the PenaltyPoints field value if set, zero value otherwise.
func (o *AwardUpgradeDetailType) GetPenaltyPoints() int32 {
	if o == nil || IsNil(o.PenaltyPoints) {
		var ret int32
		return ret
	}
	return *o.PenaltyPoints
}

// GetPenaltyPointsOk returns a tuple with the PenaltyPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardUpgradeDetailType) GetPenaltyPointsOk() (*int32, bool) {
	if o == nil || IsNil(o.PenaltyPoints) {
		return nil, false
	}
	return o.PenaltyPoints, true
}

// HasPenaltyPoints returns a boolean if a field has been set.
func (o *AwardUpgradeDetailType) HasPenaltyPoints() bool {
	if o != nil && !IsNil(o.PenaltyPoints) {
		return true
	}

	return false
}

// SetPenaltyPoints gets a reference to the given int32 and assigns it to the PenaltyPoints field.
func (o *AwardUpgradeDetailType) SetPenaltyPoints(v int32) {
	o.PenaltyPoints = &v
}

// GetPointsRequired returns the PointsRequired field value if set, zero value otherwise.
func (o *AwardUpgradeDetailType) GetPointsRequired() int32 {
	if o == nil || IsNil(o.PointsRequired) {
		var ret int32
		return ret
	}
	return *o.PointsRequired
}

// GetPointsRequiredOk returns a tuple with the PointsRequired field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardUpgradeDetailType) GetPointsRequiredOk() (*int32, bool) {
	if o == nil || IsNil(o.PointsRequired) {
		return nil, false
	}
	return o.PointsRequired, true
}

// HasPointsRequired returns a boolean if a field has been set.
func (o *AwardUpgradeDetailType) HasPointsRequired() bool {
	if o != nil && !IsNil(o.PointsRequired) {
		return true
	}

	return false
}

// SetPointsRequired gets a reference to the given int32 and assigns it to the PointsRequired field.
func (o *AwardUpgradeDetailType) SetPointsRequired(v int32) {
	o.PointsRequired = &v
}

func (o AwardUpgradeDetailType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AwardUpgradeDetailType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Date) {
		toSerialize["date"] = o.Date
	}
	if !IsNil(o.PenaltyPoints) {
		toSerialize["penaltyPoints"] = o.PenaltyPoints
	}
	if !IsNil(o.PointsRequired) {
		toSerialize["pointsRequired"] = o.PointsRequired
	}
	return toSerialize, nil
}

type NullableAwardUpgradeDetailType struct {
	value *AwardUpgradeDetailType
	isSet bool
}

func (v NullableAwardUpgradeDetailType) Get() *AwardUpgradeDetailType {
	return v.value
}

func (v *NullableAwardUpgradeDetailType) Set(val *AwardUpgradeDetailType) {
	v.value = val
	v.isSet = true
}

func (v NullableAwardUpgradeDetailType) IsSet() bool {
	return v.isSet
}

func (v *NullableAwardUpgradeDetailType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAwardUpgradeDetailType(val *AwardUpgradeDetailType) *NullableAwardUpgradeDetailType {
	return &NullableAwardUpgradeDetailType{value: val, isSet: true}
}

func (v NullableAwardUpgradeDetailType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAwardUpgradeDetailType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


