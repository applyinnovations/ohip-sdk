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

// checks if the EventCalendarType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EventCalendarType{}

// EventCalendarType Collection of the Events Booked/Scheduled for the function spaces in the Hotel for the particular time period.
type EventCalendarType struct {
	// Collection of the Event Codes in a Property for a particular time period.
	EventCodes []EventCodeDetailType `json:"eventCodes,omitempty"`
	// Collection of the Events Booked/Scheduled for the function space/functionSpaceDetails for the particular time period.
	EventSpace []EventSpaceScheduleType `json:"eventSpace,omitempty"`
	// Current Page the group of Rooms is included in.
	PageIndex *int32 `json:"pageIndex,omitempty"`
	// Number of records per page.
	RecordsPerPage *int32 `json:"recordsPerPage,omitempty"`
	SellMessages *SellMessagesType `json:"sellMessages,omitempty"`
	// Total Number of Rooms.
	TotalRooms *int32 `json:"totalRooms,omitempty"`
}

// NewEventCalendarType instantiates a new EventCalendarType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEventCalendarType() *EventCalendarType {
	this := EventCalendarType{}
	return &this
}

// NewEventCalendarTypeWithDefaults instantiates a new EventCalendarType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEventCalendarTypeWithDefaults() *EventCalendarType {
	this := EventCalendarType{}
	return &this
}

// GetEventCodes returns the EventCodes field value if set, zero value otherwise.
func (o *EventCalendarType) GetEventCodes() []EventCodeDetailType {
	if o == nil || IsNil(o.EventCodes) {
		var ret []EventCodeDetailType
		return ret
	}
	return o.EventCodes
}

// GetEventCodesOk returns a tuple with the EventCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventCalendarType) GetEventCodesOk() ([]EventCodeDetailType, bool) {
	if o == nil || IsNil(o.EventCodes) {
		return nil, false
	}
	return o.EventCodes, true
}

// HasEventCodes returns a boolean if a field has been set.
func (o *EventCalendarType) HasEventCodes() bool {
	if o != nil && !IsNil(o.EventCodes) {
		return true
	}

	return false
}

// SetEventCodes gets a reference to the given []EventCodeDetailType and assigns it to the EventCodes field.
func (o *EventCalendarType) SetEventCodes(v []EventCodeDetailType) {
	o.EventCodes = v
}

// GetEventSpace returns the EventSpace field value if set, zero value otherwise.
func (o *EventCalendarType) GetEventSpace() []EventSpaceScheduleType {
	if o == nil || IsNil(o.EventSpace) {
		var ret []EventSpaceScheduleType
		return ret
	}
	return o.EventSpace
}

// GetEventSpaceOk returns a tuple with the EventSpace field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventCalendarType) GetEventSpaceOk() ([]EventSpaceScheduleType, bool) {
	if o == nil || IsNil(o.EventSpace) {
		return nil, false
	}
	return o.EventSpace, true
}

// HasEventSpace returns a boolean if a field has been set.
func (o *EventCalendarType) HasEventSpace() bool {
	if o != nil && !IsNil(o.EventSpace) {
		return true
	}

	return false
}

// SetEventSpace gets a reference to the given []EventSpaceScheduleType and assigns it to the EventSpace field.
func (o *EventCalendarType) SetEventSpace(v []EventSpaceScheduleType) {
	o.EventSpace = v
}

// GetPageIndex returns the PageIndex field value if set, zero value otherwise.
func (o *EventCalendarType) GetPageIndex() int32 {
	if o == nil || IsNil(o.PageIndex) {
		var ret int32
		return ret
	}
	return *o.PageIndex
}

// GetPageIndexOk returns a tuple with the PageIndex field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventCalendarType) GetPageIndexOk() (*int32, bool) {
	if o == nil || IsNil(o.PageIndex) {
		return nil, false
	}
	return o.PageIndex, true
}

// HasPageIndex returns a boolean if a field has been set.
func (o *EventCalendarType) HasPageIndex() bool {
	if o != nil && !IsNil(o.PageIndex) {
		return true
	}

	return false
}

// SetPageIndex gets a reference to the given int32 and assigns it to the PageIndex field.
func (o *EventCalendarType) SetPageIndex(v int32) {
	o.PageIndex = &v
}

// GetRecordsPerPage returns the RecordsPerPage field value if set, zero value otherwise.
func (o *EventCalendarType) GetRecordsPerPage() int32 {
	if o == nil || IsNil(o.RecordsPerPage) {
		var ret int32
		return ret
	}
	return *o.RecordsPerPage
}

// GetRecordsPerPageOk returns a tuple with the RecordsPerPage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventCalendarType) GetRecordsPerPageOk() (*int32, bool) {
	if o == nil || IsNil(o.RecordsPerPage) {
		return nil, false
	}
	return o.RecordsPerPage, true
}

// HasRecordsPerPage returns a boolean if a field has been set.
func (o *EventCalendarType) HasRecordsPerPage() bool {
	if o != nil && !IsNil(o.RecordsPerPage) {
		return true
	}

	return false
}

// SetRecordsPerPage gets a reference to the given int32 and assigns it to the RecordsPerPage field.
func (o *EventCalendarType) SetRecordsPerPage(v int32) {
	o.RecordsPerPage = &v
}

// GetSellMessages returns the SellMessages field value if set, zero value otherwise.
func (o *EventCalendarType) GetSellMessages() SellMessagesType {
	if o == nil || IsNil(o.SellMessages) {
		var ret SellMessagesType
		return ret
	}
	return *o.SellMessages
}

// GetSellMessagesOk returns a tuple with the SellMessages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventCalendarType) GetSellMessagesOk() (*SellMessagesType, bool) {
	if o == nil || IsNil(o.SellMessages) {
		return nil, false
	}
	return o.SellMessages, true
}

// HasSellMessages returns a boolean if a field has been set.
func (o *EventCalendarType) HasSellMessages() bool {
	if o != nil && !IsNil(o.SellMessages) {
		return true
	}

	return false
}

// SetSellMessages gets a reference to the given SellMessagesType and assigns it to the SellMessages field.
func (o *EventCalendarType) SetSellMessages(v SellMessagesType) {
	o.SellMessages = &v
}

// GetTotalRooms returns the TotalRooms field value if set, zero value otherwise.
func (o *EventCalendarType) GetTotalRooms() int32 {
	if o == nil || IsNil(o.TotalRooms) {
		var ret int32
		return ret
	}
	return *o.TotalRooms
}

// GetTotalRoomsOk returns a tuple with the TotalRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventCalendarType) GetTotalRoomsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalRooms) {
		return nil, false
	}
	return o.TotalRooms, true
}

// HasTotalRooms returns a boolean if a field has been set.
func (o *EventCalendarType) HasTotalRooms() bool {
	if o != nil && !IsNil(o.TotalRooms) {
		return true
	}

	return false
}

// SetTotalRooms gets a reference to the given int32 and assigns it to the TotalRooms field.
func (o *EventCalendarType) SetTotalRooms(v int32) {
	o.TotalRooms = &v
}

func (o EventCalendarType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EventCalendarType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.EventCodes) {
		toSerialize["eventCodes"] = o.EventCodes
	}
	if !IsNil(o.EventSpace) {
		toSerialize["eventSpace"] = o.EventSpace
	}
	if !IsNil(o.PageIndex) {
		toSerialize["pageIndex"] = o.PageIndex
	}
	if !IsNil(o.RecordsPerPage) {
		toSerialize["recordsPerPage"] = o.RecordsPerPage
	}
	if !IsNil(o.SellMessages) {
		toSerialize["sellMessages"] = o.SellMessages
	}
	if !IsNil(o.TotalRooms) {
		toSerialize["totalRooms"] = o.TotalRooms
	}
	return toSerialize, nil
}

type NullableEventCalendarType struct {
	value *EventCalendarType
	isSet bool
}

func (v NullableEventCalendarType) Get() *EventCalendarType {
	return v.value
}

func (v *NullableEventCalendarType) Set(val *EventCalendarType) {
	v.value = val
	v.isSet = true
}

func (v NullableEventCalendarType) IsSet() bool {
	return v.isSet
}

func (v *NullableEventCalendarType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEventCalendarType(val *EventCalendarType) *NullableEventCalendarType {
	return &NullableEventCalendarType{value: val, isSet: true}
}

func (v NullableEventCalendarType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEventCalendarType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


