/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the EventOrderType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EventOrderType{}

// EventOrderType Event order distribution information.
type EventOrderType struct {
	// Indicates if the Banquet Event Orders have been distributed.
	Distributed *bool `json:"distributed,omitempty"`
	// This indicates which exchange rate date will be used for blocks when printing Banquet Event Orders. When the Distributed attribute is true this contains the date stamp of when the Distributed attribute was updated. When Distributed attribute is false, this is left blank. This date can also be taken into consideration as the 'Exchange Rate Date' when, for instance, converting catering revenue to base currency.
	DistributedDate *string `json:"distributedDate,omitempty"`
	// This indicates which exchange rate date will be used for blocks when printing Banquet Event Orders. When the Distributed attribute is true this contains the date/time stamp of when the Distributed attribute was updated. When Distributed attribute is false, this is left blank. This date can also be taken into consideration as the 'Exchange Rate Date' when, for instance, converting catering revenue to base currency.
	DistributedDateTime *string `json:"distributedDateTime,omitempty"`
}

// NewEventOrderType instantiates a new EventOrderType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEventOrderType() *EventOrderType {
	this := EventOrderType{}
	return &this
}

// NewEventOrderTypeWithDefaults instantiates a new EventOrderType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEventOrderTypeWithDefaults() *EventOrderType {
	this := EventOrderType{}
	return &this
}

// GetDistributed returns the Distributed field value if set, zero value otherwise.
func (o *EventOrderType) GetDistributed() bool {
	if o == nil || IsNil(o.Distributed) {
		var ret bool
		return ret
	}
	return *o.Distributed
}

// GetDistributedOk returns a tuple with the Distributed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventOrderType) GetDistributedOk() (*bool, bool) {
	if o == nil || IsNil(o.Distributed) {
		return nil, false
	}
	return o.Distributed, true
}

// HasDistributed returns a boolean if a field has been set.
func (o *EventOrderType) HasDistributed() bool {
	if o != nil && !IsNil(o.Distributed) {
		return true
	}

	return false
}

// SetDistributed gets a reference to the given bool and assigns it to the Distributed field.
func (o *EventOrderType) SetDistributed(v bool) {
	o.Distributed = &v
}

// GetDistributedDate returns the DistributedDate field value if set, zero value otherwise.
func (o *EventOrderType) GetDistributedDate() string {
	if o == nil || IsNil(o.DistributedDate) {
		var ret string
		return ret
	}
	return *o.DistributedDate
}

// GetDistributedDateOk returns a tuple with the DistributedDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventOrderType) GetDistributedDateOk() (*string, bool) {
	if o == nil || IsNil(o.DistributedDate) {
		return nil, false
	}
	return o.DistributedDate, true
}

// HasDistributedDate returns a boolean if a field has been set.
func (o *EventOrderType) HasDistributedDate() bool {
	if o != nil && !IsNil(o.DistributedDate) {
		return true
	}

	return false
}

// SetDistributedDate gets a reference to the given string and assigns it to the DistributedDate field.
func (o *EventOrderType) SetDistributedDate(v string) {
	o.DistributedDate = &v
}

// GetDistributedDateTime returns the DistributedDateTime field value if set, zero value otherwise.
func (o *EventOrderType) GetDistributedDateTime() string {
	if o == nil || IsNil(o.DistributedDateTime) {
		var ret string
		return ret
	}
	return *o.DistributedDateTime
}

// GetDistributedDateTimeOk returns a tuple with the DistributedDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventOrderType) GetDistributedDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.DistributedDateTime) {
		return nil, false
	}
	return o.DistributedDateTime, true
}

// HasDistributedDateTime returns a boolean if a field has been set.
func (o *EventOrderType) HasDistributedDateTime() bool {
	if o != nil && !IsNil(o.DistributedDateTime) {
		return true
	}

	return false
}

// SetDistributedDateTime gets a reference to the given string and assigns it to the DistributedDateTime field.
func (o *EventOrderType) SetDistributedDateTime(v string) {
	o.DistributedDateTime = &v
}

func (o EventOrderType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EventOrderType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Distributed) {
		toSerialize["distributed"] = o.Distributed
	}
	if !IsNil(o.DistributedDate) {
		toSerialize["distributedDate"] = o.DistributedDate
	}
	if !IsNil(o.DistributedDateTime) {
		toSerialize["distributedDateTime"] = o.DistributedDateTime
	}
	return toSerialize, nil
}

type NullableEventOrderType struct {
	value *EventOrderType
	isSet bool
}

func (v NullableEventOrderType) Get() *EventOrderType {
	return v.value
}

func (v *NullableEventOrderType) Set(val *EventOrderType) {
	v.value = val
	v.isSet = true
}

func (v NullableEventOrderType) IsSet() bool {
	return v.isSet
}

func (v *NullableEventOrderType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEventOrderType(val *EventOrderType) *NullableEventOrderType {
	return &NullableEventOrderType{value: val, isSet: true}
}

func (v NullableEventOrderType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEventOrderType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


