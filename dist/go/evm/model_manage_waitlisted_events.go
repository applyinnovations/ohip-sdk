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

// checks if the ManageWaitlistedEvents type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ManageWaitlistedEvents{}

// ManageWaitlistedEvents Request object for managing waitlisted catering events.
type ManageWaitlistedEvents struct {
	Criteria *WaitlistedEventsSearchType `json:"criteria,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	ProcessingInstructions *WaitlistedEventProcessingInstructionsType `json:"processingInstructions,omitempty"`
	// Pertain waitlisted event Information.
	WaitlistedEvents []WaitlistedEventType `json:"waitlistedEvents,omitempty"`
	// Used in conjunction with the Success elementSpace to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewManageWaitlistedEvents instantiates a new ManageWaitlistedEvents object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewManageWaitlistedEvents() *ManageWaitlistedEvents {
	this := ManageWaitlistedEvents{}
	return &this
}

// NewManageWaitlistedEventsWithDefaults instantiates a new ManageWaitlistedEvents object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewManageWaitlistedEventsWithDefaults() *ManageWaitlistedEvents {
	this := ManageWaitlistedEvents{}
	return &this
}

// GetCriteria returns the Criteria field value if set, zero value otherwise.
func (o *ManageWaitlistedEvents) GetCriteria() WaitlistedEventsSearchType {
	if o == nil || IsNil(o.Criteria) {
		var ret WaitlistedEventsSearchType
		return ret
	}
	return *o.Criteria
}

// GetCriteriaOk returns a tuple with the Criteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ManageWaitlistedEvents) GetCriteriaOk() (*WaitlistedEventsSearchType, bool) {
	if o == nil || IsNil(o.Criteria) {
		return nil, false
	}
	return o.Criteria, true
}

// HasCriteria returns a boolean if a field has been set.
func (o *ManageWaitlistedEvents) HasCriteria() bool {
	if o != nil && !IsNil(o.Criteria) {
		return true
	}

	return false
}

// SetCriteria gets a reference to the given WaitlistedEventsSearchType and assigns it to the Criteria field.
func (o *ManageWaitlistedEvents) SetCriteria(v WaitlistedEventsSearchType) {
	o.Criteria = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ManageWaitlistedEvents) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ManageWaitlistedEvents) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ManageWaitlistedEvents) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ManageWaitlistedEvents) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetProcessingInstructions returns the ProcessingInstructions field value if set, zero value otherwise.
func (o *ManageWaitlistedEvents) GetProcessingInstructions() WaitlistedEventProcessingInstructionsType {
	if o == nil || IsNil(o.ProcessingInstructions) {
		var ret WaitlistedEventProcessingInstructionsType
		return ret
	}
	return *o.ProcessingInstructions
}

// GetProcessingInstructionsOk returns a tuple with the ProcessingInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ManageWaitlistedEvents) GetProcessingInstructionsOk() (*WaitlistedEventProcessingInstructionsType, bool) {
	if o == nil || IsNil(o.ProcessingInstructions) {
		return nil, false
	}
	return o.ProcessingInstructions, true
}

// HasProcessingInstructions returns a boolean if a field has been set.
func (o *ManageWaitlistedEvents) HasProcessingInstructions() bool {
	if o != nil && !IsNil(o.ProcessingInstructions) {
		return true
	}

	return false
}

// SetProcessingInstructions gets a reference to the given WaitlistedEventProcessingInstructionsType and assigns it to the ProcessingInstructions field.
func (o *ManageWaitlistedEvents) SetProcessingInstructions(v WaitlistedEventProcessingInstructionsType) {
	o.ProcessingInstructions = &v
}

// GetWaitlistedEvents returns the WaitlistedEvents field value if set, zero value otherwise.
func (o *ManageWaitlistedEvents) GetWaitlistedEvents() []WaitlistedEventType {
	if o == nil || IsNil(o.WaitlistedEvents) {
		var ret []WaitlistedEventType
		return ret
	}
	return o.WaitlistedEvents
}

// GetWaitlistedEventsOk returns a tuple with the WaitlistedEvents field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ManageWaitlistedEvents) GetWaitlistedEventsOk() ([]WaitlistedEventType, bool) {
	if o == nil || IsNil(o.WaitlistedEvents) {
		return nil, false
	}
	return o.WaitlistedEvents, true
}

// HasWaitlistedEvents returns a boolean if a field has been set.
func (o *ManageWaitlistedEvents) HasWaitlistedEvents() bool {
	if o != nil && !IsNil(o.WaitlistedEvents) {
		return true
	}

	return false
}

// SetWaitlistedEvents gets a reference to the given []WaitlistedEventType and assigns it to the WaitlistedEvents field.
func (o *ManageWaitlistedEvents) SetWaitlistedEvents(v []WaitlistedEventType) {
	o.WaitlistedEvents = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ManageWaitlistedEvents) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ManageWaitlistedEvents) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ManageWaitlistedEvents) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ManageWaitlistedEvents) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ManageWaitlistedEvents) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ManageWaitlistedEvents) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Criteria) {
		toSerialize["criteria"] = o.Criteria
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ProcessingInstructions) {
		toSerialize["processingInstructions"] = o.ProcessingInstructions
	}
	if !IsNil(o.WaitlistedEvents) {
		toSerialize["waitlistedEvents"] = o.WaitlistedEvents
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableManageWaitlistedEvents struct {
	value *ManageWaitlistedEvents
	isSet bool
}

func (v NullableManageWaitlistedEvents) Get() *ManageWaitlistedEvents {
	return v.value
}

func (v *NullableManageWaitlistedEvents) Set(val *ManageWaitlistedEvents) {
	v.value = val
	v.isSet = true
}

func (v NullableManageWaitlistedEvents) IsSet() bool {
	return v.isSet
}

func (v *NullableManageWaitlistedEvents) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableManageWaitlistedEvents(val *ManageWaitlistedEvents) *NullableManageWaitlistedEvents {
	return &NullableManageWaitlistedEvents{value: val, isSet: true}
}

func (v NullableManageWaitlistedEvents) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableManageWaitlistedEvents) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


