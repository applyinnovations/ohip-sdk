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

// checks if the Events type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &Events{}

// Events Response object for fetching events.
type Events struct {
	BlockInfo *BlocksType `json:"blockInfo,omitempty"`
	EventSummaries *EventSummariesInfoType `json:"eventSummaries,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Refer to Generic common types document
	MasterInfoList []MasterInfoType `json:"masterInfoList,omitempty"`
	// Used in conjunction with the Success elementSpace to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewEvents instantiates a new Events object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEvents() *Events {
	this := Events{}
	return &this
}

// NewEventsWithDefaults instantiates a new Events object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEventsWithDefaults() *Events {
	this := Events{}
	return &this
}

// GetBlockInfo returns the BlockInfo field value if set, zero value otherwise.
func (o *Events) GetBlockInfo() BlocksType {
	if o == nil || IsNil(o.BlockInfo) {
		var ret BlocksType
		return ret
	}
	return *o.BlockInfo
}

// GetBlockInfoOk returns a tuple with the BlockInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Events) GetBlockInfoOk() (*BlocksType, bool) {
	if o == nil || IsNil(o.BlockInfo) {
		return nil, false
	}
	return o.BlockInfo, true
}

// HasBlockInfo returns a boolean if a field has been set.
func (o *Events) HasBlockInfo() bool {
	if o != nil && !IsNil(o.BlockInfo) {
		return true
	}

	return false
}

// SetBlockInfo gets a reference to the given BlocksType and assigns it to the BlockInfo field.
func (o *Events) SetBlockInfo(v BlocksType) {
	o.BlockInfo = &v
}

// GetEventSummaries returns the EventSummaries field value if set, zero value otherwise.
func (o *Events) GetEventSummaries() EventSummariesInfoType {
	if o == nil || IsNil(o.EventSummaries) {
		var ret EventSummariesInfoType
		return ret
	}
	return *o.EventSummaries
}

// GetEventSummariesOk returns a tuple with the EventSummaries field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Events) GetEventSummariesOk() (*EventSummariesInfoType, bool) {
	if o == nil || IsNil(o.EventSummaries) {
		return nil, false
	}
	return o.EventSummaries, true
}

// HasEventSummaries returns a boolean if a field has been set.
func (o *Events) HasEventSummaries() bool {
	if o != nil && !IsNil(o.EventSummaries) {
		return true
	}

	return false
}

// SetEventSummaries gets a reference to the given EventSummariesInfoType and assigns it to the EventSummaries field.
func (o *Events) SetEventSummaries(v EventSummariesInfoType) {
	o.EventSummaries = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *Events) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Events) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *Events) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *Events) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMasterInfoList returns the MasterInfoList field value if set, zero value otherwise.
func (o *Events) GetMasterInfoList() []MasterInfoType {
	if o == nil || IsNil(o.MasterInfoList) {
		var ret []MasterInfoType
		return ret
	}
	return o.MasterInfoList
}

// GetMasterInfoListOk returns a tuple with the MasterInfoList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Events) GetMasterInfoListOk() ([]MasterInfoType, bool) {
	if o == nil || IsNil(o.MasterInfoList) {
		return nil, false
	}
	return o.MasterInfoList, true
}

// HasMasterInfoList returns a boolean if a field has been set.
func (o *Events) HasMasterInfoList() bool {
	if o != nil && !IsNil(o.MasterInfoList) {
		return true
	}

	return false
}

// SetMasterInfoList gets a reference to the given []MasterInfoType and assigns it to the MasterInfoList field.
func (o *Events) SetMasterInfoList(v []MasterInfoType) {
	o.MasterInfoList = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *Events) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Events) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *Events) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *Events) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o Events) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o Events) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockInfo) {
		toSerialize["blockInfo"] = o.BlockInfo
	}
	if !IsNil(o.EventSummaries) {
		toSerialize["eventSummaries"] = o.EventSummaries
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MasterInfoList) {
		toSerialize["masterInfoList"] = o.MasterInfoList
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableEvents struct {
	value *Events
	isSet bool
}

func (v NullableEvents) Get() *Events {
	return v.value
}

func (v *NullableEvents) Set(val *Events) {
	v.value = val
	v.isSet = true
}

func (v NullableEvents) IsSet() bool {
	return v.isSet
}

func (v *NullableEvents) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEvents(val *Events) *NullableEvents {
	return &NullableEvents{value: val, isSet: true}
}

func (v NullableEvents) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEvents) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


