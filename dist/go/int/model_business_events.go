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

// checks if the BusinessEvents type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BusinessEvents{}

// BusinessEvents Provides business event message dequeued from BE queue as response
type BusinessEvents struct {
	// List of BusinessEvents dequeued for given external system
	BusinessEventData []BusinessEventDataType `json:"businessEventData,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBusinessEvents instantiates a new BusinessEvents object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBusinessEvents() *BusinessEvents {
	this := BusinessEvents{}
	return &this
}

// NewBusinessEventsWithDefaults instantiates a new BusinessEvents object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBusinessEventsWithDefaults() *BusinessEvents {
	this := BusinessEvents{}
	return &this
}

// GetBusinessEventData returns the BusinessEventData field value if set, zero value otherwise.
func (o *BusinessEvents) GetBusinessEventData() []BusinessEventDataType {
	if o == nil || IsNil(o.BusinessEventData) {
		var ret []BusinessEventDataType
		return ret
	}
	return o.BusinessEventData
}

// GetBusinessEventDataOk returns a tuple with the BusinessEventData field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BusinessEvents) GetBusinessEventDataOk() ([]BusinessEventDataType, bool) {
	if o == nil || IsNil(o.BusinessEventData) {
		return nil, false
	}
	return o.BusinessEventData, true
}

// HasBusinessEventData returns a boolean if a field has been set.
func (o *BusinessEvents) HasBusinessEventData() bool {
	if o != nil && !IsNil(o.BusinessEventData) {
		return true
	}

	return false
}

// SetBusinessEventData gets a reference to the given []BusinessEventDataType and assigns it to the BusinessEventData field.
func (o *BusinessEvents) SetBusinessEventData(v []BusinessEventDataType) {
	o.BusinessEventData = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BusinessEvents) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BusinessEvents) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BusinessEvents) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BusinessEvents) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BusinessEvents) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BusinessEvents) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BusinessEvents) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BusinessEvents) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BusinessEvents) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BusinessEvents) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BusinessEventData) {
		toSerialize["businessEventData"] = o.BusinessEventData
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBusinessEvents struct {
	value *BusinessEvents
	isSet bool
}

func (v NullableBusinessEvents) Get() *BusinessEvents {
	return v.value
}

func (v *NullableBusinessEvents) Set(val *BusinessEvents) {
	v.value = val
	v.isSet = true
}

func (v NullableBusinessEvents) IsSet() bool {
	return v.isSet
}

func (v *NullableBusinessEvents) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBusinessEvents(val *BusinessEvents) *NullableBusinessEvents {
	return &NullableBusinessEvents{value: val, isSet: true}
}

func (v NullableBusinessEvents) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBusinessEvents) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

