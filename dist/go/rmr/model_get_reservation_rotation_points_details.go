/*
OPERA Cloud Room Rotation Service API

APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmr

import (
	"encoding/json"
)

// checks if the GetReservationRotationPointsDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetReservationRotationPointsDetails{}

// GetReservationRotationPointsDetails Response object for Reservation Rotation Points Details.
type GetReservationRotationPointsDetails struct {
	AdjustmentLogList *ReservationRotationPointsAdjustmentLogListType `json:"adjustmentLogList,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	ReservationDetails *ReservationDetailsType `json:"reservationDetails,omitempty"`
	ReservationRotationPointsDetailsList *ReservationRotationPointsDetailsListType `json:"reservationRotationPointsDetailsList,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewGetReservationRotationPointsDetails instantiates a new GetReservationRotationPointsDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetReservationRotationPointsDetails() *GetReservationRotationPointsDetails {
	this := GetReservationRotationPointsDetails{}
	return &this
}

// NewGetReservationRotationPointsDetailsWithDefaults instantiates a new GetReservationRotationPointsDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetReservationRotationPointsDetailsWithDefaults() *GetReservationRotationPointsDetails {
	this := GetReservationRotationPointsDetails{}
	return &this
}

// GetAdjustmentLogList returns the AdjustmentLogList field value if set, zero value otherwise.
func (o *GetReservationRotationPointsDetails) GetAdjustmentLogList() ReservationRotationPointsAdjustmentLogListType {
	if o == nil || IsNil(o.AdjustmentLogList) {
		var ret ReservationRotationPointsAdjustmentLogListType
		return ret
	}
	return *o.AdjustmentLogList
}

// GetAdjustmentLogListOk returns a tuple with the AdjustmentLogList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetReservationRotationPointsDetails) GetAdjustmentLogListOk() (*ReservationRotationPointsAdjustmentLogListType, bool) {
	if o == nil || IsNil(o.AdjustmentLogList) {
		return nil, false
	}
	return o.AdjustmentLogList, true
}

// HasAdjustmentLogList returns a boolean if a field has been set.
func (o *GetReservationRotationPointsDetails) HasAdjustmentLogList() bool {
	if o != nil && !IsNil(o.AdjustmentLogList) {
		return true
	}

	return false
}

// SetAdjustmentLogList gets a reference to the given ReservationRotationPointsAdjustmentLogListType and assigns it to the AdjustmentLogList field.
func (o *GetReservationRotationPointsDetails) SetAdjustmentLogList(v ReservationRotationPointsAdjustmentLogListType) {
	o.AdjustmentLogList = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *GetReservationRotationPointsDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetReservationRotationPointsDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *GetReservationRotationPointsDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *GetReservationRotationPointsDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetReservationDetails returns the ReservationDetails field value if set, zero value otherwise.
func (o *GetReservationRotationPointsDetails) GetReservationDetails() ReservationDetailsType {
	if o == nil || IsNil(o.ReservationDetails) {
		var ret ReservationDetailsType
		return ret
	}
	return *o.ReservationDetails
}

// GetReservationDetailsOk returns a tuple with the ReservationDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetReservationRotationPointsDetails) GetReservationDetailsOk() (*ReservationDetailsType, bool) {
	if o == nil || IsNil(o.ReservationDetails) {
		return nil, false
	}
	return o.ReservationDetails, true
}

// HasReservationDetails returns a boolean if a field has been set.
func (o *GetReservationRotationPointsDetails) HasReservationDetails() bool {
	if o != nil && !IsNil(o.ReservationDetails) {
		return true
	}

	return false
}

// SetReservationDetails gets a reference to the given ReservationDetailsType and assigns it to the ReservationDetails field.
func (o *GetReservationRotationPointsDetails) SetReservationDetails(v ReservationDetailsType) {
	o.ReservationDetails = &v
}

// GetReservationRotationPointsDetailsList returns the ReservationRotationPointsDetailsList field value if set, zero value otherwise.
func (o *GetReservationRotationPointsDetails) GetReservationRotationPointsDetailsList() ReservationRotationPointsDetailsListType {
	if o == nil || IsNil(o.ReservationRotationPointsDetailsList) {
		var ret ReservationRotationPointsDetailsListType
		return ret
	}
	return *o.ReservationRotationPointsDetailsList
}

// GetReservationRotationPointsDetailsListOk returns a tuple with the ReservationRotationPointsDetailsList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetReservationRotationPointsDetails) GetReservationRotationPointsDetailsListOk() (*ReservationRotationPointsDetailsListType, bool) {
	if o == nil || IsNil(o.ReservationRotationPointsDetailsList) {
		return nil, false
	}
	return o.ReservationRotationPointsDetailsList, true
}

// HasReservationRotationPointsDetailsList returns a boolean if a field has been set.
func (o *GetReservationRotationPointsDetails) HasReservationRotationPointsDetailsList() bool {
	if o != nil && !IsNil(o.ReservationRotationPointsDetailsList) {
		return true
	}

	return false
}

// SetReservationRotationPointsDetailsList gets a reference to the given ReservationRotationPointsDetailsListType and assigns it to the ReservationRotationPointsDetailsList field.
func (o *GetReservationRotationPointsDetails) SetReservationRotationPointsDetailsList(v ReservationRotationPointsDetailsListType) {
	o.ReservationRotationPointsDetailsList = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *GetReservationRotationPointsDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetReservationRotationPointsDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *GetReservationRotationPointsDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *GetReservationRotationPointsDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o GetReservationRotationPointsDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetReservationRotationPointsDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AdjustmentLogList) {
		toSerialize["adjustmentLogList"] = o.AdjustmentLogList
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ReservationDetails) {
		toSerialize["reservationDetails"] = o.ReservationDetails
	}
	if !IsNil(o.ReservationRotationPointsDetailsList) {
		toSerialize["reservationRotationPointsDetailsList"] = o.ReservationRotationPointsDetailsList
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableGetReservationRotationPointsDetails struct {
	value *GetReservationRotationPointsDetails
	isSet bool
}

func (v NullableGetReservationRotationPointsDetails) Get() *GetReservationRotationPointsDetails {
	return v.value
}

func (v *NullableGetReservationRotationPointsDetails) Set(val *GetReservationRotationPointsDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableGetReservationRotationPointsDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableGetReservationRotationPointsDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetReservationRotationPointsDetails(val *GetReservationRotationPointsDetails) *NullableGetReservationRotationPointsDetails {
	return &NullableGetReservationRotationPointsDetails{value: val, isSet: true}
}

func (v NullableGetReservationRotationPointsDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetReservationRotationPointsDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


