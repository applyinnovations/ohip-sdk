/*
OPERA Cloud Accounts Receivables API

APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package ars

import (
	"encoding/json"
)

// checks if the HotelInterfaceType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelInterfaceType{}

// HotelInterfaceType struct for HotelInterfaceType
type HotelInterfaceType struct {
	// Indicator if the Hotel Interface is active or not. This is different from the Interface Status, which is either STOPPED or RUNNING.
	ActiveFlag *bool `json:"activeFlag,omitempty"`
	// Hotel Code
	HotelId *string `json:"hotelId,omitempty"`
	InterfaceId *UniqueIDType `json:"interfaceId,omitempty"`
	// Name of the Hotel Interface
	InterfaceName *string `json:"interfaceName,omitempty"`
	InterfaceType *HotelInterfaceTypeType `json:"interfaceType,omitempty"`
	// Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create.
	Logo *string `json:"logo,omitempty"`
	// Unique machine name of the running IFC.
	MachineName *string `json:"machineName,omitempty"`
	Status *HotelInterfaceStatusType `json:"status,omitempty"`
}

// NewHotelInterfaceType instantiates a new HotelInterfaceType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelInterfaceType() *HotelInterfaceType {
	this := HotelInterfaceType{}
	return &this
}

// NewHotelInterfaceTypeWithDefaults instantiates a new HotelInterfaceType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelInterfaceTypeWithDefaults() *HotelInterfaceType {
	this := HotelInterfaceType{}
	return &this
}

// GetActiveFlag returns the ActiveFlag field value if set, zero value otherwise.
func (o *HotelInterfaceType) GetActiveFlag() bool {
	if o == nil || IsNil(o.ActiveFlag) {
		var ret bool
		return ret
	}
	return *o.ActiveFlag
}

// GetActiveFlagOk returns a tuple with the ActiveFlag field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInterfaceType) GetActiveFlagOk() (*bool, bool) {
	if o == nil || IsNil(o.ActiveFlag) {
		return nil, false
	}
	return o.ActiveFlag, true
}

// HasActiveFlag returns a boolean if a field has been set.
func (o *HotelInterfaceType) HasActiveFlag() bool {
	if o != nil && !IsNil(o.ActiveFlag) {
		return true
	}

	return false
}

// SetActiveFlag gets a reference to the given bool and assigns it to the ActiveFlag field.
func (o *HotelInterfaceType) SetActiveFlag(v bool) {
	o.ActiveFlag = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HotelInterfaceType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInterfaceType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HotelInterfaceType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HotelInterfaceType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInterfaceId returns the InterfaceId field value if set, zero value otherwise.
func (o *HotelInterfaceType) GetInterfaceId() UniqueIDType {
	if o == nil || IsNil(o.InterfaceId) {
		var ret UniqueIDType
		return ret
	}
	return *o.InterfaceId
}

// GetInterfaceIdOk returns a tuple with the InterfaceId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInterfaceType) GetInterfaceIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.InterfaceId) {
		return nil, false
	}
	return o.InterfaceId, true
}

// HasInterfaceId returns a boolean if a field has been set.
func (o *HotelInterfaceType) HasInterfaceId() bool {
	if o != nil && !IsNil(o.InterfaceId) {
		return true
	}

	return false
}

// SetInterfaceId gets a reference to the given UniqueIDType and assigns it to the InterfaceId field.
func (o *HotelInterfaceType) SetInterfaceId(v UniqueIDType) {
	o.InterfaceId = &v
}

// GetInterfaceName returns the InterfaceName field value if set, zero value otherwise.
func (o *HotelInterfaceType) GetInterfaceName() string {
	if o == nil || IsNil(o.InterfaceName) {
		var ret string
		return ret
	}
	return *o.InterfaceName
}

// GetInterfaceNameOk returns a tuple with the InterfaceName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInterfaceType) GetInterfaceNameOk() (*string, bool) {
	if o == nil || IsNil(o.InterfaceName) {
		return nil, false
	}
	return o.InterfaceName, true
}

// HasInterfaceName returns a boolean if a field has been set.
func (o *HotelInterfaceType) HasInterfaceName() bool {
	if o != nil && !IsNil(o.InterfaceName) {
		return true
	}

	return false
}

// SetInterfaceName gets a reference to the given string and assigns it to the InterfaceName field.
func (o *HotelInterfaceType) SetInterfaceName(v string) {
	o.InterfaceName = &v
}

// GetInterfaceType returns the InterfaceType field value if set, zero value otherwise.
func (o *HotelInterfaceType) GetInterfaceType() HotelInterfaceTypeType {
	if o == nil || IsNil(o.InterfaceType) {
		var ret HotelInterfaceTypeType
		return ret
	}
	return *o.InterfaceType
}

// GetInterfaceTypeOk returns a tuple with the InterfaceType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInterfaceType) GetInterfaceTypeOk() (*HotelInterfaceTypeType, bool) {
	if o == nil || IsNil(o.InterfaceType) {
		return nil, false
	}
	return o.InterfaceType, true
}

// HasInterfaceType returns a boolean if a field has been set.
func (o *HotelInterfaceType) HasInterfaceType() bool {
	if o != nil && !IsNil(o.InterfaceType) {
		return true
	}

	return false
}

// SetInterfaceType gets a reference to the given HotelInterfaceTypeType and assigns it to the InterfaceType field.
func (o *HotelInterfaceType) SetInterfaceType(v HotelInterfaceTypeType) {
	o.InterfaceType = &v
}

// GetLogo returns the Logo field value if set, zero value otherwise.
func (o *HotelInterfaceType) GetLogo() string {
	if o == nil || IsNil(o.Logo) {
		var ret string
		return ret
	}
	return *o.Logo
}

// GetLogoOk returns a tuple with the Logo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInterfaceType) GetLogoOk() (*string, bool) {
	if o == nil || IsNil(o.Logo) {
		return nil, false
	}
	return o.Logo, true
}

// HasLogo returns a boolean if a field has been set.
func (o *HotelInterfaceType) HasLogo() bool {
	if o != nil && !IsNil(o.Logo) {
		return true
	}

	return false
}

// SetLogo gets a reference to the given string and assigns it to the Logo field.
func (o *HotelInterfaceType) SetLogo(v string) {
	o.Logo = &v
}

// GetMachineName returns the MachineName field value if set, zero value otherwise.
func (o *HotelInterfaceType) GetMachineName() string {
	if o == nil || IsNil(o.MachineName) {
		var ret string
		return ret
	}
	return *o.MachineName
}

// GetMachineNameOk returns a tuple with the MachineName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInterfaceType) GetMachineNameOk() (*string, bool) {
	if o == nil || IsNil(o.MachineName) {
		return nil, false
	}
	return o.MachineName, true
}

// HasMachineName returns a boolean if a field has been set.
func (o *HotelInterfaceType) HasMachineName() bool {
	if o != nil && !IsNil(o.MachineName) {
		return true
	}

	return false
}

// SetMachineName gets a reference to the given string and assigns it to the MachineName field.
func (o *HotelInterfaceType) SetMachineName(v string) {
	o.MachineName = &v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *HotelInterfaceType) GetStatus() HotelInterfaceStatusType {
	if o == nil || IsNil(o.Status) {
		var ret HotelInterfaceStatusType
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelInterfaceType) GetStatusOk() (*HotelInterfaceStatusType, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *HotelInterfaceType) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given HotelInterfaceStatusType and assigns it to the Status field.
func (o *HotelInterfaceType) SetStatus(v HotelInterfaceStatusType) {
	o.Status = &v
}

func (o HotelInterfaceType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelInterfaceType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActiveFlag) {
		toSerialize["activeFlag"] = o.ActiveFlag
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.InterfaceId) {
		toSerialize["interfaceId"] = o.InterfaceId
	}
	if !IsNil(o.InterfaceName) {
		toSerialize["interfaceName"] = o.InterfaceName
	}
	if !IsNil(o.InterfaceType) {
		toSerialize["interfaceType"] = o.InterfaceType
	}
	if !IsNil(o.Logo) {
		toSerialize["logo"] = o.Logo
	}
	if !IsNil(o.MachineName) {
		toSerialize["machineName"] = o.MachineName
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	return toSerialize, nil
}

type NullableHotelInterfaceType struct {
	value *HotelInterfaceType
	isSet bool
}

func (v NullableHotelInterfaceType) Get() *HotelInterfaceType {
	return v.value
}

func (v *NullableHotelInterfaceType) Set(val *HotelInterfaceType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelInterfaceType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelInterfaceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelInterfaceType(val *HotelInterfaceType) *NullableHotelInterfaceType {
	return &NullableHotelInterfaceType{value: val, isSet: true}
}

func (v NullableHotelInterfaceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelInterfaceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


