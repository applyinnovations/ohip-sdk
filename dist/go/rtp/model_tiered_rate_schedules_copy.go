/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the TieredRateSchedulesCopy type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TieredRateSchedulesCopy{}

// TieredRateSchedulesCopy Request object to copy the specified tier 1 rate schedules into the specified tiers.
type TieredRateSchedulesCopy struct {
	AdultOffset *RateOffsetType `json:"adultOffset,omitempty"`
	ChildOffset *RateOffsetType `json:"childOffset,omitempty"`
	CopyFromTierId *int32 `json:"copyFromTierId,omitempty"`
	CopyToTierId *int32 `json:"copyToTierId,omitempty"`
	// Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
	HotelId *string `json:"hotelId,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	// Unique Id that references an object uniquely in the system.
	RatePlanSchedulesIdList []UniqueIDType `json:"ratePlanSchedulesIdList,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTieredRateSchedulesCopy instantiates a new TieredRateSchedulesCopy object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTieredRateSchedulesCopy() *TieredRateSchedulesCopy {
	this := TieredRateSchedulesCopy{}
	return &this
}

// NewTieredRateSchedulesCopyWithDefaults instantiates a new TieredRateSchedulesCopy object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTieredRateSchedulesCopyWithDefaults() *TieredRateSchedulesCopy {
	this := TieredRateSchedulesCopy{}
	return &this
}

// GetAdultOffset returns the AdultOffset field value if set, zero value otherwise.
func (o *TieredRateSchedulesCopy) GetAdultOffset() RateOffsetType {
	if o == nil || IsNil(o.AdultOffset) {
		var ret RateOffsetType
		return ret
	}
	return *o.AdultOffset
}

// GetAdultOffsetOk returns a tuple with the AdultOffset field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TieredRateSchedulesCopy) GetAdultOffsetOk() (*RateOffsetType, bool) {
	if o == nil || IsNil(o.AdultOffset) {
		return nil, false
	}
	return o.AdultOffset, true
}

// HasAdultOffset returns a boolean if a field has been set.
func (o *TieredRateSchedulesCopy) HasAdultOffset() bool {
	if o != nil && !IsNil(o.AdultOffset) {
		return true
	}

	return false
}

// SetAdultOffset gets a reference to the given RateOffsetType and assigns it to the AdultOffset field.
func (o *TieredRateSchedulesCopy) SetAdultOffset(v RateOffsetType) {
	o.AdultOffset = &v
}

// GetChildOffset returns the ChildOffset field value if set, zero value otherwise.
func (o *TieredRateSchedulesCopy) GetChildOffset() RateOffsetType {
	if o == nil || IsNil(o.ChildOffset) {
		var ret RateOffsetType
		return ret
	}
	return *o.ChildOffset
}

// GetChildOffsetOk returns a tuple with the ChildOffset field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TieredRateSchedulesCopy) GetChildOffsetOk() (*RateOffsetType, bool) {
	if o == nil || IsNil(o.ChildOffset) {
		return nil, false
	}
	return o.ChildOffset, true
}

// HasChildOffset returns a boolean if a field has been set.
func (o *TieredRateSchedulesCopy) HasChildOffset() bool {
	if o != nil && !IsNil(o.ChildOffset) {
		return true
	}

	return false
}

// SetChildOffset gets a reference to the given RateOffsetType and assigns it to the ChildOffset field.
func (o *TieredRateSchedulesCopy) SetChildOffset(v RateOffsetType) {
	o.ChildOffset = &v
}

// GetCopyFromTierId returns the CopyFromTierId field value if set, zero value otherwise.
func (o *TieredRateSchedulesCopy) GetCopyFromTierId() int32 {
	if o == nil || IsNil(o.CopyFromTierId) {
		var ret int32
		return ret
	}
	return *o.CopyFromTierId
}

// GetCopyFromTierIdOk returns a tuple with the CopyFromTierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TieredRateSchedulesCopy) GetCopyFromTierIdOk() (*int32, bool) {
	if o == nil || IsNil(o.CopyFromTierId) {
		return nil, false
	}
	return o.CopyFromTierId, true
}

// HasCopyFromTierId returns a boolean if a field has been set.
func (o *TieredRateSchedulesCopy) HasCopyFromTierId() bool {
	if o != nil && !IsNil(o.CopyFromTierId) {
		return true
	}

	return false
}

// SetCopyFromTierId gets a reference to the given int32 and assigns it to the CopyFromTierId field.
func (o *TieredRateSchedulesCopy) SetCopyFromTierId(v int32) {
	o.CopyFromTierId = &v
}

// GetCopyToTierId returns the CopyToTierId field value if set, zero value otherwise.
func (o *TieredRateSchedulesCopy) GetCopyToTierId() int32 {
	if o == nil || IsNil(o.CopyToTierId) {
		var ret int32
		return ret
	}
	return *o.CopyToTierId
}

// GetCopyToTierIdOk returns a tuple with the CopyToTierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TieredRateSchedulesCopy) GetCopyToTierIdOk() (*int32, bool) {
	if o == nil || IsNil(o.CopyToTierId) {
		return nil, false
	}
	return o.CopyToTierId, true
}

// HasCopyToTierId returns a boolean if a field has been set.
func (o *TieredRateSchedulesCopy) HasCopyToTierId() bool {
	if o != nil && !IsNil(o.CopyToTierId) {
		return true
	}

	return false
}

// SetCopyToTierId gets a reference to the given int32 and assigns it to the CopyToTierId field.
func (o *TieredRateSchedulesCopy) SetCopyToTierId(v int32) {
	o.CopyToTierId = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *TieredRateSchedulesCopy) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TieredRateSchedulesCopy) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *TieredRateSchedulesCopy) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *TieredRateSchedulesCopy) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TieredRateSchedulesCopy) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TieredRateSchedulesCopy) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TieredRateSchedulesCopy) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TieredRateSchedulesCopy) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *TieredRateSchedulesCopy) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TieredRateSchedulesCopy) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *TieredRateSchedulesCopy) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *TieredRateSchedulesCopy) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetRatePlanSchedulesIdList returns the RatePlanSchedulesIdList field value if set, zero value otherwise.
func (o *TieredRateSchedulesCopy) GetRatePlanSchedulesIdList() []UniqueIDType {
	if o == nil || IsNil(o.RatePlanSchedulesIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.RatePlanSchedulesIdList
}

// GetRatePlanSchedulesIdListOk returns a tuple with the RatePlanSchedulesIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TieredRateSchedulesCopy) GetRatePlanSchedulesIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.RatePlanSchedulesIdList) {
		return nil, false
	}
	return o.RatePlanSchedulesIdList, true
}

// HasRatePlanSchedulesIdList returns a boolean if a field has been set.
func (o *TieredRateSchedulesCopy) HasRatePlanSchedulesIdList() bool {
	if o != nil && !IsNil(o.RatePlanSchedulesIdList) {
		return true
	}

	return false
}

// SetRatePlanSchedulesIdList gets a reference to the given []UniqueIDType and assigns it to the RatePlanSchedulesIdList field.
func (o *TieredRateSchedulesCopy) SetRatePlanSchedulesIdList(v []UniqueIDType) {
	o.RatePlanSchedulesIdList = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TieredRateSchedulesCopy) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TieredRateSchedulesCopy) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TieredRateSchedulesCopy) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TieredRateSchedulesCopy) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TieredRateSchedulesCopy) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TieredRateSchedulesCopy) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AdultOffset) {
		toSerialize["adultOffset"] = o.AdultOffset
	}
	if !IsNil(o.ChildOffset) {
		toSerialize["childOffset"] = o.ChildOffset
	}
	if !IsNil(o.CopyFromTierId) {
		toSerialize["copyFromTierId"] = o.CopyFromTierId
	}
	if !IsNil(o.CopyToTierId) {
		toSerialize["copyToTierId"] = o.CopyToTierId
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.RatePlanSchedulesIdList) {
		toSerialize["ratePlanSchedulesIdList"] = o.RatePlanSchedulesIdList
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTieredRateSchedulesCopy struct {
	value *TieredRateSchedulesCopy
	isSet bool
}

func (v NullableTieredRateSchedulesCopy) Get() *TieredRateSchedulesCopy {
	return v.value
}

func (v *NullableTieredRateSchedulesCopy) Set(val *TieredRateSchedulesCopy) {
	v.value = val
	v.isSet = true
}

func (v NullableTieredRateSchedulesCopy) IsSet() bool {
	return v.isSet
}

func (v *NullableTieredRateSchedulesCopy) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTieredRateSchedulesCopy(val *TieredRateSchedulesCopy) *NullableTieredRateSchedulesCopy {
	return &NullableTieredRateSchedulesCopy{value: val, isSet: true}
}

func (v NullableTieredRateSchedulesCopy) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTieredRateSchedulesCopy) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


