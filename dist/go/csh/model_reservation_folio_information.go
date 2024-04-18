/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the ReservationFolioInformation type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationFolioInformation{}

// ReservationFolioInformation Response for the Create Proforma WS. After the proforma is created by this request, the Opera Proforma report should be called to generate the actual physical Proforma report. The response can have the summary of the Guests Proforma Folio, if requested.
type ReservationFolioInformation struct {
	Links []InstanceLink `json:"links,omitempty"`
	ReservationFolioInformation *ReservationFolioInfoType `json:"reservationFolioInformation,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewReservationFolioInformation instantiates a new ReservationFolioInformation object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationFolioInformation() *ReservationFolioInformation {
	this := ReservationFolioInformation{}
	return &this
}

// NewReservationFolioInformationWithDefaults instantiates a new ReservationFolioInformation object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationFolioInformationWithDefaults() *ReservationFolioInformation {
	this := ReservationFolioInformation{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ReservationFolioInformation) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationFolioInformation) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ReservationFolioInformation) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ReservationFolioInformation) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetReservationFolioInformation returns the ReservationFolioInformation field value if set, zero value otherwise.
func (o *ReservationFolioInformation) GetReservationFolioInformation() ReservationFolioInfoType {
	if o == nil || IsNil(o.ReservationFolioInformation) {
		var ret ReservationFolioInfoType
		return ret
	}
	return *o.ReservationFolioInformation
}

// GetReservationFolioInformationOk returns a tuple with the ReservationFolioInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationFolioInformation) GetReservationFolioInformationOk() (*ReservationFolioInfoType, bool) {
	if o == nil || IsNil(o.ReservationFolioInformation) {
		return nil, false
	}
	return o.ReservationFolioInformation, true
}

// HasReservationFolioInformation returns a boolean if a field has been set.
func (o *ReservationFolioInformation) HasReservationFolioInformation() bool {
	if o != nil && !IsNil(o.ReservationFolioInformation) {
		return true
	}

	return false
}

// SetReservationFolioInformation gets a reference to the given ReservationFolioInfoType and assigns it to the ReservationFolioInformation field.
func (o *ReservationFolioInformation) SetReservationFolioInformation(v ReservationFolioInfoType) {
	o.ReservationFolioInformation = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ReservationFolioInformation) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationFolioInformation) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ReservationFolioInformation) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ReservationFolioInformation) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ReservationFolioInformation) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationFolioInformation) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ReservationFolioInformation) {
		toSerialize["reservationFolioInformation"] = o.ReservationFolioInformation
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableReservationFolioInformation struct {
	value *ReservationFolioInformation
	isSet bool
}

func (v NullableReservationFolioInformation) Get() *ReservationFolioInformation {
	return v.value
}

func (v *NullableReservationFolioInformation) Set(val *ReservationFolioInformation) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationFolioInformation) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationFolioInformation) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationFolioInformation(val *ReservationFolioInformation) *NullableReservationFolioInformation {
	return &NullableReservationFolioInformation{value: val, isSet: true}
}

func (v NullableReservationFolioInformation) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationFolioInformation) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

