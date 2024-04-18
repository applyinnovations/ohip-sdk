/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the EventCodeDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EventCodeDetailType{}

// EventCodeDetailType Event Code details for a given date.
type EventCodeDetailType struct {
	// Block Name.
	BlockName *string `json:"blockName,omitempty"`
	// Status of the catering block
	BlockStatus *string `json:"blockStatus,omitempty"`
	Color *StatusColorType `json:"color,omitempty"`
	// Date for which the event code is applicable.
	Date *string `json:"date,omitempty"`
	Event *CodeDescriptionType `json:"event,omitempty"`
	EventCodeType *EventCodeTypeType `json:"eventCodeType,omitempty"`
	// Hotel Code associated with the Event Code.
	HotelId *string `json:"hotelId,omitempty"`
	// Holds the industry description.
	NonCompeteIndustry *string `json:"nonCompeteIndustry,omitempty"`
}

// NewEventCodeDetailType instantiates a new EventCodeDetailType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEventCodeDetailType() *EventCodeDetailType {
	this := EventCodeDetailType{}
	return &this
}

// NewEventCodeDetailTypeWithDefaults instantiates a new EventCodeDetailType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEventCodeDetailTypeWithDefaults() *EventCodeDetailType {
	this := EventCodeDetailType{}
	return &this
}

// GetBlockName returns the BlockName field value if set, zero value otherwise.
func (o *EventCodeDetailType) GetBlockName() string {
	if o == nil || IsNil(o.BlockName) {
		var ret string
		return ret
	}
	return *o.BlockName
}

// GetBlockNameOk returns a tuple with the BlockName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventCodeDetailType) GetBlockNameOk() (*string, bool) {
	if o == nil || IsNil(o.BlockName) {
		return nil, false
	}
	return o.BlockName, true
}

// HasBlockName returns a boolean if a field has been set.
func (o *EventCodeDetailType) HasBlockName() bool {
	if o != nil && !IsNil(o.BlockName) {
		return true
	}

	return false
}

// SetBlockName gets a reference to the given string and assigns it to the BlockName field.
func (o *EventCodeDetailType) SetBlockName(v string) {
	o.BlockName = &v
}

// GetBlockStatus returns the BlockStatus field value if set, zero value otherwise.
func (o *EventCodeDetailType) GetBlockStatus() string {
	if o == nil || IsNil(o.BlockStatus) {
		var ret string
		return ret
	}
	return *o.BlockStatus
}

// GetBlockStatusOk returns a tuple with the BlockStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventCodeDetailType) GetBlockStatusOk() (*string, bool) {
	if o == nil || IsNil(o.BlockStatus) {
		return nil, false
	}
	return o.BlockStatus, true
}

// HasBlockStatus returns a boolean if a field has been set.
func (o *EventCodeDetailType) HasBlockStatus() bool {
	if o != nil && !IsNil(o.BlockStatus) {
		return true
	}

	return false
}

// SetBlockStatus gets a reference to the given string and assigns it to the BlockStatus field.
func (o *EventCodeDetailType) SetBlockStatus(v string) {
	o.BlockStatus = &v
}

// GetColor returns the Color field value if set, zero value otherwise.
func (o *EventCodeDetailType) GetColor() StatusColorType {
	if o == nil || IsNil(o.Color) {
		var ret StatusColorType
		return ret
	}
	return *o.Color
}

// GetColorOk returns a tuple with the Color field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventCodeDetailType) GetColorOk() (*StatusColorType, bool) {
	if o == nil || IsNil(o.Color) {
		return nil, false
	}
	return o.Color, true
}

// HasColor returns a boolean if a field has been set.
func (o *EventCodeDetailType) HasColor() bool {
	if o != nil && !IsNil(o.Color) {
		return true
	}

	return false
}

// SetColor gets a reference to the given StatusColorType and assigns it to the Color field.
func (o *EventCodeDetailType) SetColor(v StatusColorType) {
	o.Color = &v
}

// GetDate returns the Date field value if set, zero value otherwise.
func (o *EventCodeDetailType) GetDate() string {
	if o == nil || IsNil(o.Date) {
		var ret string
		return ret
	}
	return *o.Date
}

// GetDateOk returns a tuple with the Date field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventCodeDetailType) GetDateOk() (*string, bool) {
	if o == nil || IsNil(o.Date) {
		return nil, false
	}
	return o.Date, true
}

// HasDate returns a boolean if a field has been set.
func (o *EventCodeDetailType) HasDate() bool {
	if o != nil && !IsNil(o.Date) {
		return true
	}

	return false
}

// SetDate gets a reference to the given string and assigns it to the Date field.
func (o *EventCodeDetailType) SetDate(v string) {
	o.Date = &v
}

// GetEvent returns the Event field value if set, zero value otherwise.
func (o *EventCodeDetailType) GetEvent() CodeDescriptionType {
	if o == nil || IsNil(o.Event) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.Event
}

// GetEventOk returns a tuple with the Event field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventCodeDetailType) GetEventOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.Event) {
		return nil, false
	}
	return o.Event, true
}

// HasEvent returns a boolean if a field has been set.
func (o *EventCodeDetailType) HasEvent() bool {
	if o != nil && !IsNil(o.Event) {
		return true
	}

	return false
}

// SetEvent gets a reference to the given CodeDescriptionType and assigns it to the Event field.
func (o *EventCodeDetailType) SetEvent(v CodeDescriptionType) {
	o.Event = &v
}

// GetEventCodeType returns the EventCodeType field value if set, zero value otherwise.
func (o *EventCodeDetailType) GetEventCodeType() EventCodeTypeType {
	if o == nil || IsNil(o.EventCodeType) {
		var ret EventCodeTypeType
		return ret
	}
	return *o.EventCodeType
}

// GetEventCodeTypeOk returns a tuple with the EventCodeType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventCodeDetailType) GetEventCodeTypeOk() (*EventCodeTypeType, bool) {
	if o == nil || IsNil(o.EventCodeType) {
		return nil, false
	}
	return o.EventCodeType, true
}

// HasEventCodeType returns a boolean if a field has been set.
func (o *EventCodeDetailType) HasEventCodeType() bool {
	if o != nil && !IsNil(o.EventCodeType) {
		return true
	}

	return false
}

// SetEventCodeType gets a reference to the given EventCodeTypeType and assigns it to the EventCodeType field.
func (o *EventCodeDetailType) SetEventCodeType(v EventCodeTypeType) {
	o.EventCodeType = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *EventCodeDetailType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventCodeDetailType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *EventCodeDetailType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *EventCodeDetailType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetNonCompeteIndustry returns the NonCompeteIndustry field value if set, zero value otherwise.
func (o *EventCodeDetailType) GetNonCompeteIndustry() string {
	if o == nil || IsNil(o.NonCompeteIndustry) {
		var ret string
		return ret
	}
	return *o.NonCompeteIndustry
}

// GetNonCompeteIndustryOk returns a tuple with the NonCompeteIndustry field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventCodeDetailType) GetNonCompeteIndustryOk() (*string, bool) {
	if o == nil || IsNil(o.NonCompeteIndustry) {
		return nil, false
	}
	return o.NonCompeteIndustry, true
}

// HasNonCompeteIndustry returns a boolean if a field has been set.
func (o *EventCodeDetailType) HasNonCompeteIndustry() bool {
	if o != nil && !IsNil(o.NonCompeteIndustry) {
		return true
	}

	return false
}

// SetNonCompeteIndustry gets a reference to the given string and assigns it to the NonCompeteIndustry field.
func (o *EventCodeDetailType) SetNonCompeteIndustry(v string) {
	o.NonCompeteIndustry = &v
}

func (o EventCodeDetailType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EventCodeDetailType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockName) {
		toSerialize["blockName"] = o.BlockName
	}
	if !IsNil(o.BlockStatus) {
		toSerialize["blockStatus"] = o.BlockStatus
	}
	if !IsNil(o.Color) {
		toSerialize["color"] = o.Color
	}
	if !IsNil(o.Date) {
		toSerialize["date"] = o.Date
	}
	if !IsNil(o.Event) {
		toSerialize["event"] = o.Event
	}
	if !IsNil(o.EventCodeType) {
		toSerialize["eventCodeType"] = o.EventCodeType
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.NonCompeteIndustry) {
		toSerialize["nonCompeteIndustry"] = o.NonCompeteIndustry
	}
	return toSerialize, nil
}

type NullableEventCodeDetailType struct {
	value *EventCodeDetailType
	isSet bool
}

func (v NullableEventCodeDetailType) Get() *EventCodeDetailType {
	return v.value
}

func (v *NullableEventCodeDetailType) Set(val *EventCodeDetailType) {
	v.value = val
	v.isSet = true
}

func (v NullableEventCodeDetailType) IsSet() bool {
	return v.isSet
}

func (v *NullableEventCodeDetailType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEventCodeDetailType(val *EventCodeDetailType) *NullableEventCodeDetailType {
	return &NullableEventCodeDetailType{value: val, isSet: true}
}

func (v NullableEventCodeDetailType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEventCodeDetailType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

