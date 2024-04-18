/*
OPERA Cloud Integration Processor API

APIs to get Business Events generated in OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package int

import (
	"encoding/json"
)

// checks if the BusinessEventDataType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BusinessEventDataType{}

// BusinessEventDataType struct for BusinessEventDataType
type BusinessEventDataType struct {
	BusinessEvent *BusinessEventType `json:"businessEvent,omitempty"`
	BusinessEventId *BusinessEventIDType `json:"businessEventId,omitempty"`
}

// NewBusinessEventDataType instantiates a new BusinessEventDataType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBusinessEventDataType() *BusinessEventDataType {
	this := BusinessEventDataType{}
	return &this
}

// NewBusinessEventDataTypeWithDefaults instantiates a new BusinessEventDataType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBusinessEventDataTypeWithDefaults() *BusinessEventDataType {
	this := BusinessEventDataType{}
	return &this
}

// GetBusinessEvent returns the BusinessEvent field value if set, zero value otherwise.
func (o *BusinessEventDataType) GetBusinessEvent() BusinessEventType {
	if o == nil || IsNil(o.BusinessEvent) {
		var ret BusinessEventType
		return ret
	}
	return *o.BusinessEvent
}

// GetBusinessEventOk returns a tuple with the BusinessEvent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BusinessEventDataType) GetBusinessEventOk() (*BusinessEventType, bool) {
	if o == nil || IsNil(o.BusinessEvent) {
		return nil, false
	}
	return o.BusinessEvent, true
}

// HasBusinessEvent returns a boolean if a field has been set.
func (o *BusinessEventDataType) HasBusinessEvent() bool {
	if o != nil && !IsNil(o.BusinessEvent) {
		return true
	}

	return false
}

// SetBusinessEvent gets a reference to the given BusinessEventType and assigns it to the BusinessEvent field.
func (o *BusinessEventDataType) SetBusinessEvent(v BusinessEventType) {
	o.BusinessEvent = &v
}

// GetBusinessEventId returns the BusinessEventId field value if set, zero value otherwise.
func (o *BusinessEventDataType) GetBusinessEventId() BusinessEventIDType {
	if o == nil || IsNil(o.BusinessEventId) {
		var ret BusinessEventIDType
		return ret
	}
	return *o.BusinessEventId
}

// GetBusinessEventIdOk returns a tuple with the BusinessEventId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BusinessEventDataType) GetBusinessEventIdOk() (*BusinessEventIDType, bool) {
	if o == nil || IsNil(o.BusinessEventId) {
		return nil, false
	}
	return o.BusinessEventId, true
}

// HasBusinessEventId returns a boolean if a field has been set.
func (o *BusinessEventDataType) HasBusinessEventId() bool {
	if o != nil && !IsNil(o.BusinessEventId) {
		return true
	}

	return false
}

// SetBusinessEventId gets a reference to the given BusinessEventIDType and assigns it to the BusinessEventId field.
func (o *BusinessEventDataType) SetBusinessEventId(v BusinessEventIDType) {
	o.BusinessEventId = &v
}

func (o BusinessEventDataType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BusinessEventDataType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BusinessEvent) {
		toSerialize["businessEvent"] = o.BusinessEvent
	}
	if !IsNil(o.BusinessEventId) {
		toSerialize["businessEventId"] = o.BusinessEventId
	}
	return toSerialize, nil
}

type NullableBusinessEventDataType struct {
	value *BusinessEventDataType
	isSet bool
}

func (v NullableBusinessEventDataType) Get() *BusinessEventDataType {
	return v.value
}

func (v *NullableBusinessEventDataType) Set(val *BusinessEventDataType) {
	v.value = val
	v.isSet = true
}

func (v NullableBusinessEventDataType) IsSet() bool {
	return v.isSet
}

func (v *NullableBusinessEventDataType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBusinessEventDataType(val *BusinessEventDataType) *NullableBusinessEventDataType {
	return &NullableBusinessEventDataType{value: val, isSet: true}
}

func (v NullableBusinessEventDataType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBusinessEventDataType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

