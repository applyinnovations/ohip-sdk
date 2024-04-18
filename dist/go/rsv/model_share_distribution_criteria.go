/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the ShareDistributionCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ShareDistributionCriteria{}

// ShareDistributionCriteria Extended Reservation object to hold additional instructions along with the reservation. This should be used for updates on the reservation.
type ShareDistributionCriteria struct {
	DistributionType *ShareDistributionInstructionType `json:"distributionType,omitempty"`
	ShareReservations []ShareReservationType `json:"shareReservations,omitempty"`
}

// NewShareDistributionCriteria instantiates a new ShareDistributionCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewShareDistributionCriteria() *ShareDistributionCriteria {
	this := ShareDistributionCriteria{}
	return &this
}

// NewShareDistributionCriteriaWithDefaults instantiates a new ShareDistributionCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewShareDistributionCriteriaWithDefaults() *ShareDistributionCriteria {
	this := ShareDistributionCriteria{}
	return &this
}

// GetDistributionType returns the DistributionType field value if set, zero value otherwise.
func (o *ShareDistributionCriteria) GetDistributionType() ShareDistributionInstructionType {
	if o == nil || IsNil(o.DistributionType) {
		var ret ShareDistributionInstructionType
		return ret
	}
	return *o.DistributionType
}

// GetDistributionTypeOk returns a tuple with the DistributionType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ShareDistributionCriteria) GetDistributionTypeOk() (*ShareDistributionInstructionType, bool) {
	if o == nil || IsNil(o.DistributionType) {
		return nil, false
	}
	return o.DistributionType, true
}

// HasDistributionType returns a boolean if a field has been set.
func (o *ShareDistributionCriteria) HasDistributionType() bool {
	if o != nil && !IsNil(o.DistributionType) {
		return true
	}

	return false
}

// SetDistributionType gets a reference to the given ShareDistributionInstructionType and assigns it to the DistributionType field.
func (o *ShareDistributionCriteria) SetDistributionType(v ShareDistributionInstructionType) {
	o.DistributionType = &v
}

// GetShareReservations returns the ShareReservations field value if set, zero value otherwise.
func (o *ShareDistributionCriteria) GetShareReservations() []ShareReservationType {
	if o == nil || IsNil(o.ShareReservations) {
		var ret []ShareReservationType
		return ret
	}
	return o.ShareReservations
}

// GetShareReservationsOk returns a tuple with the ShareReservations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ShareDistributionCriteria) GetShareReservationsOk() ([]ShareReservationType, bool) {
	if o == nil || IsNil(o.ShareReservations) {
		return nil, false
	}
	return o.ShareReservations, true
}

// HasShareReservations returns a boolean if a field has been set.
func (o *ShareDistributionCriteria) HasShareReservations() bool {
	if o != nil && !IsNil(o.ShareReservations) {
		return true
	}

	return false
}

// SetShareReservations gets a reference to the given []ShareReservationType and assigns it to the ShareReservations field.
func (o *ShareDistributionCriteria) SetShareReservations(v []ShareReservationType) {
	o.ShareReservations = v
}

func (o ShareDistributionCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ShareDistributionCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DistributionType) {
		toSerialize["distributionType"] = o.DistributionType
	}
	if !IsNil(o.ShareReservations) {
		toSerialize["shareReservations"] = o.ShareReservations
	}
	return toSerialize, nil
}

type NullableShareDistributionCriteria struct {
	value *ShareDistributionCriteria
	isSet bool
}

func (v NullableShareDistributionCriteria) Get() *ShareDistributionCriteria {
	return v.value
}

func (v *NullableShareDistributionCriteria) Set(val *ShareDistributionCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableShareDistributionCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableShareDistributionCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableShareDistributionCriteria(val *ShareDistributionCriteria) *NullableShareDistributionCriteria {
	return &NullableShareDistributionCriteria{value: val, isSet: true}
}

func (v NullableShareDistributionCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableShareDistributionCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

