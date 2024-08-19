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

// checks if the ActivityLogType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ActivityLogType{}

// ActivityLogType struct for ActivityLogType
type ActivityLogType struct {
	ActionDescription *string `json:"actionDescription,omitempty"`
	ActionType *string `json:"actionType,omitempty"`
	CroCode *string `json:"croCode,omitempty"`
	HotelId *string `json:"hotelId,omitempty"`
	// The IP Address of the machine that performed the activity
	IPAddress *string `json:"iPAddress,omitempty"`
	LogDate *string `json:"logDate,omitempty"`
	LogUserId *int32 `json:"logUserId,omitempty"`
	LogUserName *string `json:"logUserName,omitempty"`
	MachineStation *string `json:"machineStation,omitempty"`
	Module *string `json:"module,omitempty"`
	RefActionId *float32 `json:"refActionId,omitempty"`
}

// NewActivityLogType instantiates a new ActivityLogType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewActivityLogType() *ActivityLogType {
	this := ActivityLogType{}
	return &this
}

// NewActivityLogTypeWithDefaults instantiates a new ActivityLogType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewActivityLogTypeWithDefaults() *ActivityLogType {
	this := ActivityLogType{}
	return &this
}

// GetActionDescription returns the ActionDescription field value if set, zero value otherwise.
func (o *ActivityLogType) GetActionDescription() string {
	if o == nil || IsNil(o.ActionDescription) {
		var ret string
		return ret
	}
	return *o.ActionDescription
}

// GetActionDescriptionOk returns a tuple with the ActionDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityLogType) GetActionDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.ActionDescription) {
		return nil, false
	}
	return o.ActionDescription, true
}

// HasActionDescription returns a boolean if a field has been set.
func (o *ActivityLogType) HasActionDescription() bool {
	if o != nil && !IsNil(o.ActionDescription) {
		return true
	}

	return false
}

// SetActionDescription gets a reference to the given string and assigns it to the ActionDescription field.
func (o *ActivityLogType) SetActionDescription(v string) {
	o.ActionDescription = &v
}

// GetActionType returns the ActionType field value if set, zero value otherwise.
func (o *ActivityLogType) GetActionType() string {
	if o == nil || IsNil(o.ActionType) {
		var ret string
		return ret
	}
	return *o.ActionType
}

// GetActionTypeOk returns a tuple with the ActionType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityLogType) GetActionTypeOk() (*string, bool) {
	if o == nil || IsNil(o.ActionType) {
		return nil, false
	}
	return o.ActionType, true
}

// HasActionType returns a boolean if a field has been set.
func (o *ActivityLogType) HasActionType() bool {
	if o != nil && !IsNil(o.ActionType) {
		return true
	}

	return false
}

// SetActionType gets a reference to the given string and assigns it to the ActionType field.
func (o *ActivityLogType) SetActionType(v string) {
	o.ActionType = &v
}

// GetCroCode returns the CroCode field value if set, zero value otherwise.
func (o *ActivityLogType) GetCroCode() string {
	if o == nil || IsNil(o.CroCode) {
		var ret string
		return ret
	}
	return *o.CroCode
}

// GetCroCodeOk returns a tuple with the CroCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityLogType) GetCroCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CroCode) {
		return nil, false
	}
	return o.CroCode, true
}

// HasCroCode returns a boolean if a field has been set.
func (o *ActivityLogType) HasCroCode() bool {
	if o != nil && !IsNil(o.CroCode) {
		return true
	}

	return false
}

// SetCroCode gets a reference to the given string and assigns it to the CroCode field.
func (o *ActivityLogType) SetCroCode(v string) {
	o.CroCode = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ActivityLogType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityLogType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ActivityLogType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ActivityLogType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetIPAddress returns the IPAddress field value if set, zero value otherwise.
func (o *ActivityLogType) GetIPAddress() string {
	if o == nil || IsNil(o.IPAddress) {
		var ret string
		return ret
	}
	return *o.IPAddress
}

// GetIPAddressOk returns a tuple with the IPAddress field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityLogType) GetIPAddressOk() (*string, bool) {
	if o == nil || IsNil(o.IPAddress) {
		return nil, false
	}
	return o.IPAddress, true
}

// HasIPAddress returns a boolean if a field has been set.
func (o *ActivityLogType) HasIPAddress() bool {
	if o != nil && !IsNil(o.IPAddress) {
		return true
	}

	return false
}

// SetIPAddress gets a reference to the given string and assigns it to the IPAddress field.
func (o *ActivityLogType) SetIPAddress(v string) {
	o.IPAddress = &v
}

// GetLogDate returns the LogDate field value if set, zero value otherwise.
func (o *ActivityLogType) GetLogDate() string {
	if o == nil || IsNil(o.LogDate) {
		var ret string
		return ret
	}
	return *o.LogDate
}

// GetLogDateOk returns a tuple with the LogDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityLogType) GetLogDateOk() (*string, bool) {
	if o == nil || IsNil(o.LogDate) {
		return nil, false
	}
	return o.LogDate, true
}

// HasLogDate returns a boolean if a field has been set.
func (o *ActivityLogType) HasLogDate() bool {
	if o != nil && !IsNil(o.LogDate) {
		return true
	}

	return false
}

// SetLogDate gets a reference to the given string and assigns it to the LogDate field.
func (o *ActivityLogType) SetLogDate(v string) {
	o.LogDate = &v
}

// GetLogUserId returns the LogUserId field value if set, zero value otherwise.
func (o *ActivityLogType) GetLogUserId() int32 {
	if o == nil || IsNil(o.LogUserId) {
		var ret int32
		return ret
	}
	return *o.LogUserId
}

// GetLogUserIdOk returns a tuple with the LogUserId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityLogType) GetLogUserIdOk() (*int32, bool) {
	if o == nil || IsNil(o.LogUserId) {
		return nil, false
	}
	return o.LogUserId, true
}

// HasLogUserId returns a boolean if a field has been set.
func (o *ActivityLogType) HasLogUserId() bool {
	if o != nil && !IsNil(o.LogUserId) {
		return true
	}

	return false
}

// SetLogUserId gets a reference to the given int32 and assigns it to the LogUserId field.
func (o *ActivityLogType) SetLogUserId(v int32) {
	o.LogUserId = &v
}

// GetLogUserName returns the LogUserName field value if set, zero value otherwise.
func (o *ActivityLogType) GetLogUserName() string {
	if o == nil || IsNil(o.LogUserName) {
		var ret string
		return ret
	}
	return *o.LogUserName
}

// GetLogUserNameOk returns a tuple with the LogUserName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityLogType) GetLogUserNameOk() (*string, bool) {
	if o == nil || IsNil(o.LogUserName) {
		return nil, false
	}
	return o.LogUserName, true
}

// HasLogUserName returns a boolean if a field has been set.
func (o *ActivityLogType) HasLogUserName() bool {
	if o != nil && !IsNil(o.LogUserName) {
		return true
	}

	return false
}

// SetLogUserName gets a reference to the given string and assigns it to the LogUserName field.
func (o *ActivityLogType) SetLogUserName(v string) {
	o.LogUserName = &v
}

// GetMachineStation returns the MachineStation field value if set, zero value otherwise.
func (o *ActivityLogType) GetMachineStation() string {
	if o == nil || IsNil(o.MachineStation) {
		var ret string
		return ret
	}
	return *o.MachineStation
}

// GetMachineStationOk returns a tuple with the MachineStation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityLogType) GetMachineStationOk() (*string, bool) {
	if o == nil || IsNil(o.MachineStation) {
		return nil, false
	}
	return o.MachineStation, true
}

// HasMachineStation returns a boolean if a field has been set.
func (o *ActivityLogType) HasMachineStation() bool {
	if o != nil && !IsNil(o.MachineStation) {
		return true
	}

	return false
}

// SetMachineStation gets a reference to the given string and assigns it to the MachineStation field.
func (o *ActivityLogType) SetMachineStation(v string) {
	o.MachineStation = &v
}

// GetModule returns the Module field value if set, zero value otherwise.
func (o *ActivityLogType) GetModule() string {
	if o == nil || IsNil(o.Module) {
		var ret string
		return ret
	}
	return *o.Module
}

// GetModuleOk returns a tuple with the Module field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityLogType) GetModuleOk() (*string, bool) {
	if o == nil || IsNil(o.Module) {
		return nil, false
	}
	return o.Module, true
}

// HasModule returns a boolean if a field has been set.
func (o *ActivityLogType) HasModule() bool {
	if o != nil && !IsNil(o.Module) {
		return true
	}

	return false
}

// SetModule gets a reference to the given string and assigns it to the Module field.
func (o *ActivityLogType) SetModule(v string) {
	o.Module = &v
}

// GetRefActionId returns the RefActionId field value if set, zero value otherwise.
func (o *ActivityLogType) GetRefActionId() float32 {
	if o == nil || IsNil(o.RefActionId) {
		var ret float32
		return ret
	}
	return *o.RefActionId
}

// GetRefActionIdOk returns a tuple with the RefActionId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityLogType) GetRefActionIdOk() (*float32, bool) {
	if o == nil || IsNil(o.RefActionId) {
		return nil, false
	}
	return o.RefActionId, true
}

// HasRefActionId returns a boolean if a field has been set.
func (o *ActivityLogType) HasRefActionId() bool {
	if o != nil && !IsNil(o.RefActionId) {
		return true
	}

	return false
}

// SetRefActionId gets a reference to the given float32 and assigns it to the RefActionId field.
func (o *ActivityLogType) SetRefActionId(v float32) {
	o.RefActionId = &v
}

func (o ActivityLogType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ActivityLogType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActionDescription) {
		toSerialize["actionDescription"] = o.ActionDescription
	}
	if !IsNil(o.ActionType) {
		toSerialize["actionType"] = o.ActionType
	}
	if !IsNil(o.CroCode) {
		toSerialize["croCode"] = o.CroCode
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.IPAddress) {
		toSerialize["iPAddress"] = o.IPAddress
	}
	if !IsNil(o.LogDate) {
		toSerialize["logDate"] = o.LogDate
	}
	if !IsNil(o.LogUserId) {
		toSerialize["logUserId"] = o.LogUserId
	}
	if !IsNil(o.LogUserName) {
		toSerialize["logUserName"] = o.LogUserName
	}
	if !IsNil(o.MachineStation) {
		toSerialize["machineStation"] = o.MachineStation
	}
	if !IsNil(o.Module) {
		toSerialize["module"] = o.Module
	}
	if !IsNil(o.RefActionId) {
		toSerialize["refActionId"] = o.RefActionId
	}
	return toSerialize, nil
}

type NullableActivityLogType struct {
	value *ActivityLogType
	isSet bool
}

func (v NullableActivityLogType) Get() *ActivityLogType {
	return v.value
}

func (v *NullableActivityLogType) Set(val *ActivityLogType) {
	v.value = val
	v.isSet = true
}

func (v NullableActivityLogType) IsSet() bool {
	return v.isSet
}

func (v *NullableActivityLogType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableActivityLogType(val *ActivityLogType) *NullableActivityLogType {
	return &NullableActivityLogType{value: val, isSet: true}
}

func (v NullableActivityLogType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableActivityLogType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


