/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the ReservationDepositFolios type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationDepositFolios{}

// ReservationDepositFolios Deposit Posting Information for a reservation. Contains all deposit payments made for a reservation.
type ReservationDepositFolios struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Detailed information of a reservation and its deposit payment posting information.
	ReservationDepositFoliosInfo []ReservationDepositFolioInfoType `json:"reservationDepositFoliosInfo,omitempty"`
	// List of Transaction codes info.
	TrxCodesInfo []TrxInfoType `json:"trxCodesInfo,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewReservationDepositFolios instantiates a new ReservationDepositFolios object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationDepositFolios() *ReservationDepositFolios {
	this := ReservationDepositFolios{}
	return &this
}

// NewReservationDepositFoliosWithDefaults instantiates a new ReservationDepositFolios object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationDepositFoliosWithDefaults() *ReservationDepositFolios {
	this := ReservationDepositFolios{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ReservationDepositFolios) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDepositFolios) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ReservationDepositFolios) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ReservationDepositFolios) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetReservationDepositFoliosInfo returns the ReservationDepositFoliosInfo field value if set, zero value otherwise.
func (o *ReservationDepositFolios) GetReservationDepositFoliosInfo() []ReservationDepositFolioInfoType {
	if o == nil || IsNil(o.ReservationDepositFoliosInfo) {
		var ret []ReservationDepositFolioInfoType
		return ret
	}
	return o.ReservationDepositFoliosInfo
}

// GetReservationDepositFoliosInfoOk returns a tuple with the ReservationDepositFoliosInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDepositFolios) GetReservationDepositFoliosInfoOk() ([]ReservationDepositFolioInfoType, bool) {
	if o == nil || IsNil(o.ReservationDepositFoliosInfo) {
		return nil, false
	}
	return o.ReservationDepositFoliosInfo, true
}

// HasReservationDepositFoliosInfo returns a boolean if a field has been set.
func (o *ReservationDepositFolios) HasReservationDepositFoliosInfo() bool {
	if o != nil && !IsNil(o.ReservationDepositFoliosInfo) {
		return true
	}

	return false
}

// SetReservationDepositFoliosInfo gets a reference to the given []ReservationDepositFolioInfoType and assigns it to the ReservationDepositFoliosInfo field.
func (o *ReservationDepositFolios) SetReservationDepositFoliosInfo(v []ReservationDepositFolioInfoType) {
	o.ReservationDepositFoliosInfo = v
}

// GetTrxCodesInfo returns the TrxCodesInfo field value if set, zero value otherwise.
func (o *ReservationDepositFolios) GetTrxCodesInfo() []TrxInfoType {
	if o == nil || IsNil(o.TrxCodesInfo) {
		var ret []TrxInfoType
		return ret
	}
	return o.TrxCodesInfo
}

// GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDepositFolios) GetTrxCodesInfoOk() ([]TrxInfoType, bool) {
	if o == nil || IsNil(o.TrxCodesInfo) {
		return nil, false
	}
	return o.TrxCodesInfo, true
}

// HasTrxCodesInfo returns a boolean if a field has been set.
func (o *ReservationDepositFolios) HasTrxCodesInfo() bool {
	if o != nil && !IsNil(o.TrxCodesInfo) {
		return true
	}

	return false
}

// SetTrxCodesInfo gets a reference to the given []TrxInfoType and assigns it to the TrxCodesInfo field.
func (o *ReservationDepositFolios) SetTrxCodesInfo(v []TrxInfoType) {
	o.TrxCodesInfo = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ReservationDepositFolios) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationDepositFolios) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ReservationDepositFolios) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ReservationDepositFolios) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ReservationDepositFolios) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationDepositFolios) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ReservationDepositFoliosInfo) {
		toSerialize["reservationDepositFoliosInfo"] = o.ReservationDepositFoliosInfo
	}
	if !IsNil(o.TrxCodesInfo) {
		toSerialize["trxCodesInfo"] = o.TrxCodesInfo
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableReservationDepositFolios struct {
	value *ReservationDepositFolios
	isSet bool
}

func (v NullableReservationDepositFolios) Get() *ReservationDepositFolios {
	return v.value
}

func (v *NullableReservationDepositFolios) Set(val *ReservationDepositFolios) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationDepositFolios) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationDepositFolios) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationDepositFolios(val *ReservationDepositFolios) *NullableReservationDepositFolios {
	return &NullableReservationDepositFolios{value: val, isSet: true}
}

func (v NullableReservationDepositFolios) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationDepositFolios) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


