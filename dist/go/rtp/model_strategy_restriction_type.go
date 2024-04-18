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

// checks if the StrategyRestrictionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StrategyRestrictionType{}

// StrategyRestrictionType The Rate strategy restriction details.
type StrategyRestrictionType struct {
	// Number of rooms for this room type.
	NumberOfRooms *int32 `json:"numberOfRooms,omitempty"`
	// Rate category for the strategy.
	RateCategory *string `json:"rateCategory,omitempty"`
	// Rate class for the strategy.
	RateClass *string `json:"rateClass,omitempty"`
	// Rate code for the strategy.
	RateCode *string `json:"rateCode,omitempty"`
	RestrictionRange *TimeSpanDaysOfWeekType `json:"restrictionRange,omitempty"`
	// Room class for the strategy.
	RoomClass *string `json:"roomClass,omitempty"`
	// Room Type for the strategy.
	RoomType *string `json:"roomType,omitempty"`
	Status *StrategyRestrictionStatusesType `json:"status,omitempty"`
	// Defines restriction in conjunction with Status. Value must be specified for Status MinimumStayThrough, MaximumStayThrough, MinimumLengthOfStay, MaximumLengthOfStay, MinimumAdvanceBooking, MaximumAdvanceBooking.
	Unit *int32 `json:"unit,omitempty"`
}

// NewStrategyRestrictionType instantiates a new StrategyRestrictionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStrategyRestrictionType() *StrategyRestrictionType {
	this := StrategyRestrictionType{}
	return &this
}

// NewStrategyRestrictionTypeWithDefaults instantiates a new StrategyRestrictionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStrategyRestrictionTypeWithDefaults() *StrategyRestrictionType {
	this := StrategyRestrictionType{}
	return &this
}

// GetNumberOfRooms returns the NumberOfRooms field value if set, zero value otherwise.
func (o *StrategyRestrictionType) GetNumberOfRooms() int32 {
	if o == nil || IsNil(o.NumberOfRooms) {
		var ret int32
		return ret
	}
	return *o.NumberOfRooms
}

// GetNumberOfRoomsOk returns a tuple with the NumberOfRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StrategyRestrictionType) GetNumberOfRoomsOk() (*int32, bool) {
	if o == nil || IsNil(o.NumberOfRooms) {
		return nil, false
	}
	return o.NumberOfRooms, true
}

// HasNumberOfRooms returns a boolean if a field has been set.
func (o *StrategyRestrictionType) HasNumberOfRooms() bool {
	if o != nil && !IsNil(o.NumberOfRooms) {
		return true
	}

	return false
}

// SetNumberOfRooms gets a reference to the given int32 and assigns it to the NumberOfRooms field.
func (o *StrategyRestrictionType) SetNumberOfRooms(v int32) {
	o.NumberOfRooms = &v
}

// GetRateCategory returns the RateCategory field value if set, zero value otherwise.
func (o *StrategyRestrictionType) GetRateCategory() string {
	if o == nil || IsNil(o.RateCategory) {
		var ret string
		return ret
	}
	return *o.RateCategory
}

// GetRateCategoryOk returns a tuple with the RateCategory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StrategyRestrictionType) GetRateCategoryOk() (*string, bool) {
	if o == nil || IsNil(o.RateCategory) {
		return nil, false
	}
	return o.RateCategory, true
}

// HasRateCategory returns a boolean if a field has been set.
func (o *StrategyRestrictionType) HasRateCategory() bool {
	if o != nil && !IsNil(o.RateCategory) {
		return true
	}

	return false
}

// SetRateCategory gets a reference to the given string and assigns it to the RateCategory field.
func (o *StrategyRestrictionType) SetRateCategory(v string) {
	o.RateCategory = &v
}

// GetRateClass returns the RateClass field value if set, zero value otherwise.
func (o *StrategyRestrictionType) GetRateClass() string {
	if o == nil || IsNil(o.RateClass) {
		var ret string
		return ret
	}
	return *o.RateClass
}

// GetRateClassOk returns a tuple with the RateClass field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StrategyRestrictionType) GetRateClassOk() (*string, bool) {
	if o == nil || IsNil(o.RateClass) {
		return nil, false
	}
	return o.RateClass, true
}

// HasRateClass returns a boolean if a field has been set.
func (o *StrategyRestrictionType) HasRateClass() bool {
	if o != nil && !IsNil(o.RateClass) {
		return true
	}

	return false
}

// SetRateClass gets a reference to the given string and assigns it to the RateClass field.
func (o *StrategyRestrictionType) SetRateClass(v string) {
	o.RateClass = &v
}

// GetRateCode returns the RateCode field value if set, zero value otherwise.
func (o *StrategyRestrictionType) GetRateCode() string {
	if o == nil || IsNil(o.RateCode) {
		var ret string
		return ret
	}
	return *o.RateCode
}

// GetRateCodeOk returns a tuple with the RateCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StrategyRestrictionType) GetRateCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RateCode) {
		return nil, false
	}
	return o.RateCode, true
}

// HasRateCode returns a boolean if a field has been set.
func (o *StrategyRestrictionType) HasRateCode() bool {
	if o != nil && !IsNil(o.RateCode) {
		return true
	}

	return false
}

// SetRateCode gets a reference to the given string and assigns it to the RateCode field.
func (o *StrategyRestrictionType) SetRateCode(v string) {
	o.RateCode = &v
}

// GetRestrictionRange returns the RestrictionRange field value if set, zero value otherwise.
func (o *StrategyRestrictionType) GetRestrictionRange() TimeSpanDaysOfWeekType {
	if o == nil || IsNil(o.RestrictionRange) {
		var ret TimeSpanDaysOfWeekType
		return ret
	}
	return *o.RestrictionRange
}

// GetRestrictionRangeOk returns a tuple with the RestrictionRange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StrategyRestrictionType) GetRestrictionRangeOk() (*TimeSpanDaysOfWeekType, bool) {
	if o == nil || IsNil(o.RestrictionRange) {
		return nil, false
	}
	return o.RestrictionRange, true
}

// HasRestrictionRange returns a boolean if a field has been set.
func (o *StrategyRestrictionType) HasRestrictionRange() bool {
	if o != nil && !IsNil(o.RestrictionRange) {
		return true
	}

	return false
}

// SetRestrictionRange gets a reference to the given TimeSpanDaysOfWeekType and assigns it to the RestrictionRange field.
func (o *StrategyRestrictionType) SetRestrictionRange(v TimeSpanDaysOfWeekType) {
	o.RestrictionRange = &v
}

// GetRoomClass returns the RoomClass field value if set, zero value otherwise.
func (o *StrategyRestrictionType) GetRoomClass() string {
	if o == nil || IsNil(o.RoomClass) {
		var ret string
		return ret
	}
	return *o.RoomClass
}

// GetRoomClassOk returns a tuple with the RoomClass field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StrategyRestrictionType) GetRoomClassOk() (*string, bool) {
	if o == nil || IsNil(o.RoomClass) {
		return nil, false
	}
	return o.RoomClass, true
}

// HasRoomClass returns a boolean if a field has been set.
func (o *StrategyRestrictionType) HasRoomClass() bool {
	if o != nil && !IsNil(o.RoomClass) {
		return true
	}

	return false
}

// SetRoomClass gets a reference to the given string and assigns it to the RoomClass field.
func (o *StrategyRestrictionType) SetRoomClass(v string) {
	o.RoomClass = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *StrategyRestrictionType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StrategyRestrictionType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *StrategyRestrictionType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *StrategyRestrictionType) SetRoomType(v string) {
	o.RoomType = &v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *StrategyRestrictionType) GetStatus() StrategyRestrictionStatusesType {
	if o == nil || IsNil(o.Status) {
		var ret StrategyRestrictionStatusesType
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StrategyRestrictionType) GetStatusOk() (*StrategyRestrictionStatusesType, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *StrategyRestrictionType) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given StrategyRestrictionStatusesType and assigns it to the Status field.
func (o *StrategyRestrictionType) SetStatus(v StrategyRestrictionStatusesType) {
	o.Status = &v
}

// GetUnit returns the Unit field value if set, zero value otherwise.
func (o *StrategyRestrictionType) GetUnit() int32 {
	if o == nil || IsNil(o.Unit) {
		var ret int32
		return ret
	}
	return *o.Unit
}

// GetUnitOk returns a tuple with the Unit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StrategyRestrictionType) GetUnitOk() (*int32, bool) {
	if o == nil || IsNil(o.Unit) {
		return nil, false
	}
	return o.Unit, true
}

// HasUnit returns a boolean if a field has been set.
func (o *StrategyRestrictionType) HasUnit() bool {
	if o != nil && !IsNil(o.Unit) {
		return true
	}

	return false
}

// SetUnit gets a reference to the given int32 and assigns it to the Unit field.
func (o *StrategyRestrictionType) SetUnit(v int32) {
	o.Unit = &v
}

func (o StrategyRestrictionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StrategyRestrictionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.NumberOfRooms) {
		toSerialize["numberOfRooms"] = o.NumberOfRooms
	}
	if !IsNil(o.RateCategory) {
		toSerialize["rateCategory"] = o.RateCategory
	}
	if !IsNil(o.RateClass) {
		toSerialize["rateClass"] = o.RateClass
	}
	if !IsNil(o.RateCode) {
		toSerialize["rateCode"] = o.RateCode
	}
	if !IsNil(o.RestrictionRange) {
		toSerialize["restrictionRange"] = o.RestrictionRange
	}
	if !IsNil(o.RoomClass) {
		toSerialize["roomClass"] = o.RoomClass
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	if !IsNil(o.Unit) {
		toSerialize["unit"] = o.Unit
	}
	return toSerialize, nil
}

type NullableStrategyRestrictionType struct {
	value *StrategyRestrictionType
	isSet bool
}

func (v NullableStrategyRestrictionType) Get() *StrategyRestrictionType {
	return v.value
}

func (v *NullableStrategyRestrictionType) Set(val *StrategyRestrictionType) {
	v.value = val
	v.isSet = true
}

func (v NullableStrategyRestrictionType) IsSet() bool {
	return v.isSet
}

func (v *NullableStrategyRestrictionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStrategyRestrictionType(val *StrategyRestrictionType) *NullableStrategyRestrictionType {
	return &NullableStrategyRestrictionType{value: val, isSet: true}
}

func (v NullableStrategyRestrictionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStrategyRestrictionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

