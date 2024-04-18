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

// checks if the ChangeEventsResourcesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeEventsResourcesRequest{}

// ChangeEventsResourcesRequest struct for ChangeEventsResourcesRequest
type ChangeEventsResourcesRequest struct {
	// Pertain event information.
	EventDetails []EventInfoType `json:"eventDetails,omitempty"`
	EventItems *EventItemsType `json:"eventItems,omitempty"`
	EventMenus *EventMenusType `json:"eventMenus,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success elementSpace to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChangeEventsResourcesRequest instantiates a new ChangeEventsResourcesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeEventsResourcesRequest() *ChangeEventsResourcesRequest {
	this := ChangeEventsResourcesRequest{}
	return &this
}

// NewChangeEventsResourcesRequestWithDefaults instantiates a new ChangeEventsResourcesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeEventsResourcesRequestWithDefaults() *ChangeEventsResourcesRequest {
	this := ChangeEventsResourcesRequest{}
	return &this
}

// GetEventDetails returns the EventDetails field value if set, zero value otherwise.
func (o *ChangeEventsResourcesRequest) GetEventDetails() []EventInfoType {
	if o == nil || IsNil(o.EventDetails) {
		var ret []EventInfoType
		return ret
	}
	return o.EventDetails
}

// GetEventDetailsOk returns a tuple with the EventDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeEventsResourcesRequest) GetEventDetailsOk() ([]EventInfoType, bool) {
	if o == nil || IsNil(o.EventDetails) {
		return nil, false
	}
	return o.EventDetails, true
}

// HasEventDetails returns a boolean if a field has been set.
func (o *ChangeEventsResourcesRequest) HasEventDetails() bool {
	if o != nil && !IsNil(o.EventDetails) {
		return true
	}

	return false
}

// SetEventDetails gets a reference to the given []EventInfoType and assigns it to the EventDetails field.
func (o *ChangeEventsResourcesRequest) SetEventDetails(v []EventInfoType) {
	o.EventDetails = v
}

// GetEventItems returns the EventItems field value if set, zero value otherwise.
func (o *ChangeEventsResourcesRequest) GetEventItems() EventItemsType {
	if o == nil || IsNil(o.EventItems) {
		var ret EventItemsType
		return ret
	}
	return *o.EventItems
}

// GetEventItemsOk returns a tuple with the EventItems field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeEventsResourcesRequest) GetEventItemsOk() (*EventItemsType, bool) {
	if o == nil || IsNil(o.EventItems) {
		return nil, false
	}
	return o.EventItems, true
}

// HasEventItems returns a boolean if a field has been set.
func (o *ChangeEventsResourcesRequest) HasEventItems() bool {
	if o != nil && !IsNil(o.EventItems) {
		return true
	}

	return false
}

// SetEventItems gets a reference to the given EventItemsType and assigns it to the EventItems field.
func (o *ChangeEventsResourcesRequest) SetEventItems(v EventItemsType) {
	o.EventItems = &v
}

// GetEventMenus returns the EventMenus field value if set, zero value otherwise.
func (o *ChangeEventsResourcesRequest) GetEventMenus() EventMenusType {
	if o == nil || IsNil(o.EventMenus) {
		var ret EventMenusType
		return ret
	}
	return *o.EventMenus
}

// GetEventMenusOk returns a tuple with the EventMenus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeEventsResourcesRequest) GetEventMenusOk() (*EventMenusType, bool) {
	if o == nil || IsNil(o.EventMenus) {
		return nil, false
	}
	return o.EventMenus, true
}

// HasEventMenus returns a boolean if a field has been set.
func (o *ChangeEventsResourcesRequest) HasEventMenus() bool {
	if o != nil && !IsNil(o.EventMenus) {
		return true
	}

	return false
}

// SetEventMenus gets a reference to the given EventMenusType and assigns it to the EventMenus field.
func (o *ChangeEventsResourcesRequest) SetEventMenus(v EventMenusType) {
	o.EventMenus = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChangeEventsResourcesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeEventsResourcesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChangeEventsResourcesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChangeEventsResourcesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChangeEventsResourcesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeEventsResourcesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChangeEventsResourcesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChangeEventsResourcesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChangeEventsResourcesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeEventsResourcesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.EventDetails) {
		toSerialize["eventDetails"] = o.EventDetails
	}
	if !IsNil(o.EventItems) {
		toSerialize["eventItems"] = o.EventItems
	}
	if !IsNil(o.EventMenus) {
		toSerialize["eventMenus"] = o.EventMenus
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChangeEventsResourcesRequest struct {
	value *ChangeEventsResourcesRequest
	isSet bool
}

func (v NullableChangeEventsResourcesRequest) Get() *ChangeEventsResourcesRequest {
	return v.value
}

func (v *NullableChangeEventsResourcesRequest) Set(val *ChangeEventsResourcesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeEventsResourcesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeEventsResourcesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeEventsResourcesRequest(val *ChangeEventsResourcesRequest) *NullableChangeEventsResourcesRequest {
	return &NullableChangeEventsResourcesRequest{value: val, isSet: true}
}

func (v NullableChangeEventsResourcesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeEventsResourcesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

