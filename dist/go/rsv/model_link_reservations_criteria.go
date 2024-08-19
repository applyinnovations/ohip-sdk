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

// checks if the LinkReservationsCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &LinkReservationsCriteria{}

// LinkReservationsCriteria Request to link a list of reservations with another existing reservation.
type LinkReservationsCriteria struct {
	LinkToReservationId *UniqueIDType `json:"linkToReservationId,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ReservationIdList []UniqueIDType `json:"reservationIdList,omitempty"`
	ResponseInstruction *LinkReservationsCriteriaResponseInstruction `json:"responseInstruction,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewLinkReservationsCriteria instantiates a new LinkReservationsCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewLinkReservationsCriteria() *LinkReservationsCriteria {
	this := LinkReservationsCriteria{}
	return &this
}

// NewLinkReservationsCriteriaWithDefaults instantiates a new LinkReservationsCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewLinkReservationsCriteriaWithDefaults() *LinkReservationsCriteria {
	this := LinkReservationsCriteria{}
	return &this
}

// GetLinkToReservationId returns the LinkToReservationId field value if set, zero value otherwise.
func (o *LinkReservationsCriteria) GetLinkToReservationId() UniqueIDType {
	if o == nil || IsNil(o.LinkToReservationId) {
		var ret UniqueIDType
		return ret
	}
	return *o.LinkToReservationId
}

// GetLinkToReservationIdOk returns a tuple with the LinkToReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkReservationsCriteria) GetLinkToReservationIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.LinkToReservationId) {
		return nil, false
	}
	return o.LinkToReservationId, true
}

// HasLinkToReservationId returns a boolean if a field has been set.
func (o *LinkReservationsCriteria) HasLinkToReservationId() bool {
	if o != nil && !IsNil(o.LinkToReservationId) {
		return true
	}

	return false
}

// SetLinkToReservationId gets a reference to the given UniqueIDType and assigns it to the LinkToReservationId field.
func (o *LinkReservationsCriteria) SetLinkToReservationId(v UniqueIDType) {
	o.LinkToReservationId = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *LinkReservationsCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkReservationsCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *LinkReservationsCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *LinkReservationsCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetReservationIdList returns the ReservationIdList field value if set, zero value otherwise.
func (o *LinkReservationsCriteria) GetReservationIdList() []UniqueIDType {
	if o == nil || IsNil(o.ReservationIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ReservationIdList
}

// GetReservationIdListOk returns a tuple with the ReservationIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkReservationsCriteria) GetReservationIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ReservationIdList) {
		return nil, false
	}
	return o.ReservationIdList, true
}

// HasReservationIdList returns a boolean if a field has been set.
func (o *LinkReservationsCriteria) HasReservationIdList() bool {
	if o != nil && !IsNil(o.ReservationIdList) {
		return true
	}

	return false
}

// SetReservationIdList gets a reference to the given []UniqueIDType and assigns it to the ReservationIdList field.
func (o *LinkReservationsCriteria) SetReservationIdList(v []UniqueIDType) {
	o.ReservationIdList = v
}

// GetResponseInstruction returns the ResponseInstruction field value if set, zero value otherwise.
func (o *LinkReservationsCriteria) GetResponseInstruction() LinkReservationsCriteriaResponseInstruction {
	if o == nil || IsNil(o.ResponseInstruction) {
		var ret LinkReservationsCriteriaResponseInstruction
		return ret
	}
	return *o.ResponseInstruction
}

// GetResponseInstructionOk returns a tuple with the ResponseInstruction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkReservationsCriteria) GetResponseInstructionOk() (*LinkReservationsCriteriaResponseInstruction, bool) {
	if o == nil || IsNil(o.ResponseInstruction) {
		return nil, false
	}
	return o.ResponseInstruction, true
}

// HasResponseInstruction returns a boolean if a field has been set.
func (o *LinkReservationsCriteria) HasResponseInstruction() bool {
	if o != nil && !IsNil(o.ResponseInstruction) {
		return true
	}

	return false
}

// SetResponseInstruction gets a reference to the given LinkReservationsCriteriaResponseInstruction and assigns it to the ResponseInstruction field.
func (o *LinkReservationsCriteria) SetResponseInstruction(v LinkReservationsCriteriaResponseInstruction) {
	o.ResponseInstruction = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *LinkReservationsCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkReservationsCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *LinkReservationsCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *LinkReservationsCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o LinkReservationsCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o LinkReservationsCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.LinkToReservationId) {
		toSerialize["linkToReservationId"] = o.LinkToReservationId
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ReservationIdList) {
		toSerialize["reservationIdList"] = o.ReservationIdList
	}
	if !IsNil(o.ResponseInstruction) {
		toSerialize["responseInstruction"] = o.ResponseInstruction
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableLinkReservationsCriteria struct {
	value *LinkReservationsCriteria
	isSet bool
}

func (v NullableLinkReservationsCriteria) Get() *LinkReservationsCriteria {
	return v.value
}

func (v *NullableLinkReservationsCriteria) Set(val *LinkReservationsCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableLinkReservationsCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableLinkReservationsCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableLinkReservationsCriteria(val *LinkReservationsCriteria) *NullableLinkReservationsCriteria {
	return &NullableLinkReservationsCriteria{value: val, isSet: true}
}

func (v NullableLinkReservationsCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableLinkReservationsCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


