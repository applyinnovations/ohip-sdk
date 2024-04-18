/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the RoomOutOfOrderType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomOutOfOrderType{}

// RoomOutOfOrderType Out Of Order and Out Of Service Room information.
type RoomOutOfOrderType struct {
	// The ending value of the date range.
	End *string `json:"end,omitempty"`
	HousekeepingRoomStatus *HousekeepingRoomStatusType `json:"housekeepingRoomStatus,omitempty"`
	NewDateRange *DateRangeType `json:"newDateRange,omitempty"`
	// Reason Code why the room is OO/OS.
	ReasonCode *string `json:"reasonCode,omitempty"`
	// Reason Description why the room is OO/OS.
	ReasonDescription *string `json:"reasonDescription,omitempty"`
	// Notes or Remarks on the OO/OS room
	RepairRemarks *string `json:"repairRemarks,omitempty"`
	ReturnStatus *HousekeepingRoomStatusType `json:"returnStatus,omitempty"`
	// The starting value of the date range.
	Start *string `json:"start,omitempty"`
}

// NewRoomOutOfOrderType instantiates a new RoomOutOfOrderType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomOutOfOrderType() *RoomOutOfOrderType {
	this := RoomOutOfOrderType{}
	return &this
}

// NewRoomOutOfOrderTypeWithDefaults instantiates a new RoomOutOfOrderType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomOutOfOrderTypeWithDefaults() *RoomOutOfOrderType {
	this := RoomOutOfOrderType{}
	return &this
}

// GetEnd returns the End field value if set, zero value otherwise.
func (o *RoomOutOfOrderType) GetEnd() string {
	if o == nil || IsNil(o.End) {
		var ret string
		return ret
	}
	return *o.End
}

// GetEndOk returns a tuple with the End field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOutOfOrderType) GetEndOk() (*string, bool) {
	if o == nil || IsNil(o.End) {
		return nil, false
	}
	return o.End, true
}

// HasEnd returns a boolean if a field has been set.
func (o *RoomOutOfOrderType) HasEnd() bool {
	if o != nil && !IsNil(o.End) {
		return true
	}

	return false
}

// SetEnd gets a reference to the given string and assigns it to the End field.
func (o *RoomOutOfOrderType) SetEnd(v string) {
	o.End = &v
}

// GetHousekeepingRoomStatus returns the HousekeepingRoomStatus field value if set, zero value otherwise.
func (o *RoomOutOfOrderType) GetHousekeepingRoomStatus() HousekeepingRoomStatusType {
	if o == nil || IsNil(o.HousekeepingRoomStatus) {
		var ret HousekeepingRoomStatusType
		return ret
	}
	return *o.HousekeepingRoomStatus
}

// GetHousekeepingRoomStatusOk returns a tuple with the HousekeepingRoomStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOutOfOrderType) GetHousekeepingRoomStatusOk() (*HousekeepingRoomStatusType, bool) {
	if o == nil || IsNil(o.HousekeepingRoomStatus) {
		return nil, false
	}
	return o.HousekeepingRoomStatus, true
}

// HasHousekeepingRoomStatus returns a boolean if a field has been set.
func (o *RoomOutOfOrderType) HasHousekeepingRoomStatus() bool {
	if o != nil && !IsNil(o.HousekeepingRoomStatus) {
		return true
	}

	return false
}

// SetHousekeepingRoomStatus gets a reference to the given HousekeepingRoomStatusType and assigns it to the HousekeepingRoomStatus field.
func (o *RoomOutOfOrderType) SetHousekeepingRoomStatus(v HousekeepingRoomStatusType) {
	o.HousekeepingRoomStatus = &v
}

// GetNewDateRange returns the NewDateRange field value if set, zero value otherwise.
func (o *RoomOutOfOrderType) GetNewDateRange() DateRangeType {
	if o == nil || IsNil(o.NewDateRange) {
		var ret DateRangeType
		return ret
	}
	return *o.NewDateRange
}

// GetNewDateRangeOk returns a tuple with the NewDateRange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOutOfOrderType) GetNewDateRangeOk() (*DateRangeType, bool) {
	if o == nil || IsNil(o.NewDateRange) {
		return nil, false
	}
	return o.NewDateRange, true
}

// HasNewDateRange returns a boolean if a field has been set.
func (o *RoomOutOfOrderType) HasNewDateRange() bool {
	if o != nil && !IsNil(o.NewDateRange) {
		return true
	}

	return false
}

// SetNewDateRange gets a reference to the given DateRangeType and assigns it to the NewDateRange field.
func (o *RoomOutOfOrderType) SetNewDateRange(v DateRangeType) {
	o.NewDateRange = &v
}

// GetReasonCode returns the ReasonCode field value if set, zero value otherwise.
func (o *RoomOutOfOrderType) GetReasonCode() string {
	if o == nil || IsNil(o.ReasonCode) {
		var ret string
		return ret
	}
	return *o.ReasonCode
}

// GetReasonCodeOk returns a tuple with the ReasonCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOutOfOrderType) GetReasonCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ReasonCode) {
		return nil, false
	}
	return o.ReasonCode, true
}

// HasReasonCode returns a boolean if a field has been set.
func (o *RoomOutOfOrderType) HasReasonCode() bool {
	if o != nil && !IsNil(o.ReasonCode) {
		return true
	}

	return false
}

// SetReasonCode gets a reference to the given string and assigns it to the ReasonCode field.
func (o *RoomOutOfOrderType) SetReasonCode(v string) {
	o.ReasonCode = &v
}

// GetReasonDescription returns the ReasonDescription field value if set, zero value otherwise.
func (o *RoomOutOfOrderType) GetReasonDescription() string {
	if o == nil || IsNil(o.ReasonDescription) {
		var ret string
		return ret
	}
	return *o.ReasonDescription
}

// GetReasonDescriptionOk returns a tuple with the ReasonDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOutOfOrderType) GetReasonDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.ReasonDescription) {
		return nil, false
	}
	return o.ReasonDescription, true
}

// HasReasonDescription returns a boolean if a field has been set.
func (o *RoomOutOfOrderType) HasReasonDescription() bool {
	if o != nil && !IsNil(o.ReasonDescription) {
		return true
	}

	return false
}

// SetReasonDescription gets a reference to the given string and assigns it to the ReasonDescription field.
func (o *RoomOutOfOrderType) SetReasonDescription(v string) {
	o.ReasonDescription = &v
}

// GetRepairRemarks returns the RepairRemarks field value if set, zero value otherwise.
func (o *RoomOutOfOrderType) GetRepairRemarks() string {
	if o == nil || IsNil(o.RepairRemarks) {
		var ret string
		return ret
	}
	return *o.RepairRemarks
}

// GetRepairRemarksOk returns a tuple with the RepairRemarks field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOutOfOrderType) GetRepairRemarksOk() (*string, bool) {
	if o == nil || IsNil(o.RepairRemarks) {
		return nil, false
	}
	return o.RepairRemarks, true
}

// HasRepairRemarks returns a boolean if a field has been set.
func (o *RoomOutOfOrderType) HasRepairRemarks() bool {
	if o != nil && !IsNil(o.RepairRemarks) {
		return true
	}

	return false
}

// SetRepairRemarks gets a reference to the given string and assigns it to the RepairRemarks field.
func (o *RoomOutOfOrderType) SetRepairRemarks(v string) {
	o.RepairRemarks = &v
}

// GetReturnStatus returns the ReturnStatus field value if set, zero value otherwise.
func (o *RoomOutOfOrderType) GetReturnStatus() HousekeepingRoomStatusType {
	if o == nil || IsNil(o.ReturnStatus) {
		var ret HousekeepingRoomStatusType
		return ret
	}
	return *o.ReturnStatus
}

// GetReturnStatusOk returns a tuple with the ReturnStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOutOfOrderType) GetReturnStatusOk() (*HousekeepingRoomStatusType, bool) {
	if o == nil || IsNil(o.ReturnStatus) {
		return nil, false
	}
	return o.ReturnStatus, true
}

// HasReturnStatus returns a boolean if a field has been set.
func (o *RoomOutOfOrderType) HasReturnStatus() bool {
	if o != nil && !IsNil(o.ReturnStatus) {
		return true
	}

	return false
}

// SetReturnStatus gets a reference to the given HousekeepingRoomStatusType and assigns it to the ReturnStatus field.
func (o *RoomOutOfOrderType) SetReturnStatus(v HousekeepingRoomStatusType) {
	o.ReturnStatus = &v
}

// GetStart returns the Start field value if set, zero value otherwise.
func (o *RoomOutOfOrderType) GetStart() string {
	if o == nil || IsNil(o.Start) {
		var ret string
		return ret
	}
	return *o.Start
}

// GetStartOk returns a tuple with the Start field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomOutOfOrderType) GetStartOk() (*string, bool) {
	if o == nil || IsNil(o.Start) {
		return nil, false
	}
	return o.Start, true
}

// HasStart returns a boolean if a field has been set.
func (o *RoomOutOfOrderType) HasStart() bool {
	if o != nil && !IsNil(o.Start) {
		return true
	}

	return false
}

// SetStart gets a reference to the given string and assigns it to the Start field.
func (o *RoomOutOfOrderType) SetStart(v string) {
	o.Start = &v
}

func (o RoomOutOfOrderType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomOutOfOrderType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.End) {
		toSerialize["end"] = o.End
	}
	if !IsNil(o.HousekeepingRoomStatus) {
		toSerialize["housekeepingRoomStatus"] = o.HousekeepingRoomStatus
	}
	if !IsNil(o.NewDateRange) {
		toSerialize["newDateRange"] = o.NewDateRange
	}
	if !IsNil(o.ReasonCode) {
		toSerialize["reasonCode"] = o.ReasonCode
	}
	if !IsNil(o.ReasonDescription) {
		toSerialize["reasonDescription"] = o.ReasonDescription
	}
	if !IsNil(o.RepairRemarks) {
		toSerialize["repairRemarks"] = o.RepairRemarks
	}
	if !IsNil(o.ReturnStatus) {
		toSerialize["returnStatus"] = o.ReturnStatus
	}
	if !IsNil(o.Start) {
		toSerialize["start"] = o.Start
	}
	return toSerialize, nil
}

type NullableRoomOutOfOrderType struct {
	value *RoomOutOfOrderType
	isSet bool
}

func (v NullableRoomOutOfOrderType) Get() *RoomOutOfOrderType {
	return v.value
}

func (v *NullableRoomOutOfOrderType) Set(val *RoomOutOfOrderType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomOutOfOrderType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomOutOfOrderType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomOutOfOrderType(val *RoomOutOfOrderType) *NullableRoomOutOfOrderType {
	return &NullableRoomOutOfOrderType{value: val, isSet: true}
}

func (v NullableRoomOutOfOrderType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomOutOfOrderType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

