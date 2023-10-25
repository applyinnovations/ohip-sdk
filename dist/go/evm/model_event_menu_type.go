/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the EventMenuType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EventMenuType{}

// EventMenuType Information about event menu.
type EventMenuType struct {
	BasicInfo *EventMenuBasicInfoType `json:"basicInfo,omitempty"`
	// Hotel code of the Resource.
	HotelId *string `json:"hotelId,omitempty"`
	MenuItems []EventMenuItemType `json:"menuItems,omitempty"`
	Revenues []EventMenuRevenueType `json:"revenues,omitempty"`
}

// NewEventMenuType instantiates a new EventMenuType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEventMenuType() *EventMenuType {
	this := EventMenuType{}
	return &this
}

// NewEventMenuTypeWithDefaults instantiates a new EventMenuType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEventMenuTypeWithDefaults() *EventMenuType {
	this := EventMenuType{}
	return &this
}

// GetBasicInfo returns the BasicInfo field value if set, zero value otherwise.
func (o *EventMenuType) GetBasicInfo() EventMenuBasicInfoType {
	if o == nil || IsNil(o.BasicInfo) {
		var ret EventMenuBasicInfoType
		return ret
	}
	return *o.BasicInfo
}

// GetBasicInfoOk returns a tuple with the BasicInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventMenuType) GetBasicInfoOk() (*EventMenuBasicInfoType, bool) {
	if o == nil || IsNil(o.BasicInfo) {
		return nil, false
	}
	return o.BasicInfo, true
}

// HasBasicInfo returns a boolean if a field has been set.
func (o *EventMenuType) HasBasicInfo() bool {
	if o != nil && !IsNil(o.BasicInfo) {
		return true
	}

	return false
}

// SetBasicInfo gets a reference to the given EventMenuBasicInfoType and assigns it to the BasicInfo field.
func (o *EventMenuType) SetBasicInfo(v EventMenuBasicInfoType) {
	o.BasicInfo = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *EventMenuType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventMenuType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *EventMenuType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *EventMenuType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetMenuItems returns the MenuItems field value if set, zero value otherwise.
func (o *EventMenuType) GetMenuItems() []EventMenuItemType {
	if o == nil || IsNil(o.MenuItems) {
		var ret []EventMenuItemType
		return ret
	}
	return o.MenuItems
}

// GetMenuItemsOk returns a tuple with the MenuItems field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventMenuType) GetMenuItemsOk() ([]EventMenuItemType, bool) {
	if o == nil || IsNil(o.MenuItems) {
		return nil, false
	}
	return o.MenuItems, true
}

// HasMenuItems returns a boolean if a field has been set.
func (o *EventMenuType) HasMenuItems() bool {
	if o != nil && !IsNil(o.MenuItems) {
		return true
	}

	return false
}

// SetMenuItems gets a reference to the given []EventMenuItemType and assigns it to the MenuItems field.
func (o *EventMenuType) SetMenuItems(v []EventMenuItemType) {
	o.MenuItems = v
}

// GetRevenues returns the Revenues field value if set, zero value otherwise.
func (o *EventMenuType) GetRevenues() []EventMenuRevenueType {
	if o == nil || IsNil(o.Revenues) {
		var ret []EventMenuRevenueType
		return ret
	}
	return o.Revenues
}

// GetRevenuesOk returns a tuple with the Revenues field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventMenuType) GetRevenuesOk() ([]EventMenuRevenueType, bool) {
	if o == nil || IsNil(o.Revenues) {
		return nil, false
	}
	return o.Revenues, true
}

// HasRevenues returns a boolean if a field has been set.
func (o *EventMenuType) HasRevenues() bool {
	if o != nil && !IsNil(o.Revenues) {
		return true
	}

	return false
}

// SetRevenues gets a reference to the given []EventMenuRevenueType and assigns it to the Revenues field.
func (o *EventMenuType) SetRevenues(v []EventMenuRevenueType) {
	o.Revenues = v
}

func (o EventMenuType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EventMenuType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BasicInfo) {
		toSerialize["basicInfo"] = o.BasicInfo
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.MenuItems) {
		toSerialize["menuItems"] = o.MenuItems
	}
	if !IsNil(o.Revenues) {
		toSerialize["revenues"] = o.Revenues
	}
	return toSerialize, nil
}

type NullableEventMenuType struct {
	value *EventMenuType
	isSet bool
}

func (v NullableEventMenuType) Get() *EventMenuType {
	return v.value
}

func (v *NullableEventMenuType) Set(val *EventMenuType) {
	v.value = val
	v.isSet = true
}

func (v NullableEventMenuType) IsSet() bool {
	return v.isSet
}

func (v *NullableEventMenuType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEventMenuType(val *EventMenuType) *NullableEventMenuType {
	return &NullableEventMenuType{value: val, isSet: true}
}

func (v NullableEventMenuType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEventMenuType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


