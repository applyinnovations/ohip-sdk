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

// checks if the PutRoomRelatedStatusRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PutRoomRelatedStatusRequest{}

// PutRoomRelatedStatusRequest struct for PutRoomRelatedStatusRequest
type PutRoomRelatedStatusRequest struct {
	HousekeepingRoomStatus *HousekeepingRoomStatusType `json:"housekeepingRoomStatus,omitempty"`
	HousekeepingStatus *FrontOfficeRoomStatusType `json:"housekeepingStatus,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of room numbers for which the status is to be updated.
	RoomList []RoomInformationType `json:"roomList,omitempty"`
	TurndownStatus *TurndownStatusType `json:"turndownStatus,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPutRoomRelatedStatusRequest instantiates a new PutRoomRelatedStatusRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPutRoomRelatedStatusRequest() *PutRoomRelatedStatusRequest {
	this := PutRoomRelatedStatusRequest{}
	return &this
}

// NewPutRoomRelatedStatusRequestWithDefaults instantiates a new PutRoomRelatedStatusRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPutRoomRelatedStatusRequestWithDefaults() *PutRoomRelatedStatusRequest {
	this := PutRoomRelatedStatusRequest{}
	return &this
}

// GetHousekeepingRoomStatus returns the HousekeepingRoomStatus field value if set, zero value otherwise.
func (o *PutRoomRelatedStatusRequest) GetHousekeepingRoomStatus() HousekeepingRoomStatusType {
	if o == nil || IsNil(o.HousekeepingRoomStatus) {
		var ret HousekeepingRoomStatusType
		return ret
	}
	return *o.HousekeepingRoomStatus
}

// GetHousekeepingRoomStatusOk returns a tuple with the HousekeepingRoomStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutRoomRelatedStatusRequest) GetHousekeepingRoomStatusOk() (*HousekeepingRoomStatusType, bool) {
	if o == nil || IsNil(o.HousekeepingRoomStatus) {
		return nil, false
	}
	return o.HousekeepingRoomStatus, true
}

// HasHousekeepingRoomStatus returns a boolean if a field has been set.
func (o *PutRoomRelatedStatusRequest) HasHousekeepingRoomStatus() bool {
	if o != nil && !IsNil(o.HousekeepingRoomStatus) {
		return true
	}

	return false
}

// SetHousekeepingRoomStatus gets a reference to the given HousekeepingRoomStatusType and assigns it to the HousekeepingRoomStatus field.
func (o *PutRoomRelatedStatusRequest) SetHousekeepingRoomStatus(v HousekeepingRoomStatusType) {
	o.HousekeepingRoomStatus = &v
}

// GetHousekeepingStatus returns the HousekeepingStatus field value if set, zero value otherwise.
func (o *PutRoomRelatedStatusRequest) GetHousekeepingStatus() FrontOfficeRoomStatusType {
	if o == nil || IsNil(o.HousekeepingStatus) {
		var ret FrontOfficeRoomStatusType
		return ret
	}
	return *o.HousekeepingStatus
}

// GetHousekeepingStatusOk returns a tuple with the HousekeepingStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutRoomRelatedStatusRequest) GetHousekeepingStatusOk() (*FrontOfficeRoomStatusType, bool) {
	if o == nil || IsNil(o.HousekeepingStatus) {
		return nil, false
	}
	return o.HousekeepingStatus, true
}

// HasHousekeepingStatus returns a boolean if a field has been set.
func (o *PutRoomRelatedStatusRequest) HasHousekeepingStatus() bool {
	if o != nil && !IsNil(o.HousekeepingStatus) {
		return true
	}

	return false
}

// SetHousekeepingStatus gets a reference to the given FrontOfficeRoomStatusType and assigns it to the HousekeepingStatus field.
func (o *PutRoomRelatedStatusRequest) SetHousekeepingStatus(v FrontOfficeRoomStatusType) {
	o.HousekeepingStatus = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PutRoomRelatedStatusRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutRoomRelatedStatusRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PutRoomRelatedStatusRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PutRoomRelatedStatusRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRoomList returns the RoomList field value if set, zero value otherwise.
func (o *PutRoomRelatedStatusRequest) GetRoomList() []RoomInformationType {
	if o == nil || IsNil(o.RoomList) {
		var ret []RoomInformationType
		return ret
	}
	return o.RoomList
}

// GetRoomListOk returns a tuple with the RoomList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutRoomRelatedStatusRequest) GetRoomListOk() ([]RoomInformationType, bool) {
	if o == nil || IsNil(o.RoomList) {
		return nil, false
	}
	return o.RoomList, true
}

// HasRoomList returns a boolean if a field has been set.
func (o *PutRoomRelatedStatusRequest) HasRoomList() bool {
	if o != nil && !IsNil(o.RoomList) {
		return true
	}

	return false
}

// SetRoomList gets a reference to the given []RoomInformationType and assigns it to the RoomList field.
func (o *PutRoomRelatedStatusRequest) SetRoomList(v []RoomInformationType) {
	o.RoomList = v
}

// GetTurndownStatus returns the TurndownStatus field value if set, zero value otherwise.
func (o *PutRoomRelatedStatusRequest) GetTurndownStatus() TurndownStatusType {
	if o == nil || IsNil(o.TurndownStatus) {
		var ret TurndownStatusType
		return ret
	}
	return *o.TurndownStatus
}

// GetTurndownStatusOk returns a tuple with the TurndownStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutRoomRelatedStatusRequest) GetTurndownStatusOk() (*TurndownStatusType, bool) {
	if o == nil || IsNil(o.TurndownStatus) {
		return nil, false
	}
	return o.TurndownStatus, true
}

// HasTurndownStatus returns a boolean if a field has been set.
func (o *PutRoomRelatedStatusRequest) HasTurndownStatus() bool {
	if o != nil && !IsNil(o.TurndownStatus) {
		return true
	}

	return false
}

// SetTurndownStatus gets a reference to the given TurndownStatusType and assigns it to the TurndownStatus field.
func (o *PutRoomRelatedStatusRequest) SetTurndownStatus(v TurndownStatusType) {
	o.TurndownStatus = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PutRoomRelatedStatusRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutRoomRelatedStatusRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PutRoomRelatedStatusRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PutRoomRelatedStatusRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PutRoomRelatedStatusRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PutRoomRelatedStatusRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HousekeepingRoomStatus) {
		toSerialize["housekeepingRoomStatus"] = o.HousekeepingRoomStatus
	}
	if !IsNil(o.HousekeepingStatus) {
		toSerialize["housekeepingStatus"] = o.HousekeepingStatus
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RoomList) {
		toSerialize["roomList"] = o.RoomList
	}
	if !IsNil(o.TurndownStatus) {
		toSerialize["turndownStatus"] = o.TurndownStatus
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePutRoomRelatedStatusRequest struct {
	value *PutRoomRelatedStatusRequest
	isSet bool
}

func (v NullablePutRoomRelatedStatusRequest) Get() *PutRoomRelatedStatusRequest {
	return v.value
}

func (v *NullablePutRoomRelatedStatusRequest) Set(val *PutRoomRelatedStatusRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePutRoomRelatedStatusRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePutRoomRelatedStatusRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePutRoomRelatedStatusRequest(val *PutRoomRelatedStatusRequest) *NullablePutRoomRelatedStatusRequest {
	return &NullablePutRoomRelatedStatusRequest{value: val, isSet: true}
}

func (v NullablePutRoomRelatedStatusRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePutRoomRelatedStatusRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


