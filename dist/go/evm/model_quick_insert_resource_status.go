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

// checks if the QuickInsertResourceStatus type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &QuickInsertResourceStatus{}

// QuickInsertResourceStatus Status/Info of the processed resource(s).
type QuickInsertResourceStatus struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Status/Info of the processed events.
	QuickinsertResourcesProcessedInfo []CateringEventsProcessedInfoType `json:"quickinsertResourcesProcessedInfo,omitempty"`
	// Used in conjunction with the Success elementSpace to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewQuickInsertResourceStatus instantiates a new QuickInsertResourceStatus object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewQuickInsertResourceStatus() *QuickInsertResourceStatus {
	this := QuickInsertResourceStatus{}
	return &this
}

// NewQuickInsertResourceStatusWithDefaults instantiates a new QuickInsertResourceStatus object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewQuickInsertResourceStatusWithDefaults() *QuickInsertResourceStatus {
	this := QuickInsertResourceStatus{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *QuickInsertResourceStatus) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *QuickInsertResourceStatus) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *QuickInsertResourceStatus) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *QuickInsertResourceStatus) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetQuickinsertResourcesProcessedInfo returns the QuickinsertResourcesProcessedInfo field value if set, zero value otherwise.
func (o *QuickInsertResourceStatus) GetQuickinsertResourcesProcessedInfo() []CateringEventsProcessedInfoType {
	if o == nil || IsNil(o.QuickinsertResourcesProcessedInfo) {
		var ret []CateringEventsProcessedInfoType
		return ret
	}
	return o.QuickinsertResourcesProcessedInfo
}

// GetQuickinsertResourcesProcessedInfoOk returns a tuple with the QuickinsertResourcesProcessedInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *QuickInsertResourceStatus) GetQuickinsertResourcesProcessedInfoOk() ([]CateringEventsProcessedInfoType, bool) {
	if o == nil || IsNil(o.QuickinsertResourcesProcessedInfo) {
		return nil, false
	}
	return o.QuickinsertResourcesProcessedInfo, true
}

// HasQuickinsertResourcesProcessedInfo returns a boolean if a field has been set.
func (o *QuickInsertResourceStatus) HasQuickinsertResourcesProcessedInfo() bool {
	if o != nil && !IsNil(o.QuickinsertResourcesProcessedInfo) {
		return true
	}

	return false
}

// SetQuickinsertResourcesProcessedInfo gets a reference to the given []CateringEventsProcessedInfoType and assigns it to the QuickinsertResourcesProcessedInfo field.
func (o *QuickInsertResourceStatus) SetQuickinsertResourcesProcessedInfo(v []CateringEventsProcessedInfoType) {
	o.QuickinsertResourcesProcessedInfo = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *QuickInsertResourceStatus) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *QuickInsertResourceStatus) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *QuickInsertResourceStatus) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *QuickInsertResourceStatus) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o QuickInsertResourceStatus) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o QuickInsertResourceStatus) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.QuickinsertResourcesProcessedInfo) {
		toSerialize["quickinsertResourcesProcessedInfo"] = o.QuickinsertResourcesProcessedInfo
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableQuickInsertResourceStatus struct {
	value *QuickInsertResourceStatus
	isSet bool
}

func (v NullableQuickInsertResourceStatus) Get() *QuickInsertResourceStatus {
	return v.value
}

func (v *NullableQuickInsertResourceStatus) Set(val *QuickInsertResourceStatus) {
	v.value = val
	v.isSet = true
}

func (v NullableQuickInsertResourceStatus) IsSet() bool {
	return v.isSet
}

func (v *NullableQuickInsertResourceStatus) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableQuickInsertResourceStatus(val *QuickInsertResourceStatus) *NullableQuickInsertResourceStatus {
	return &NullableQuickInsertResourceStatus{value: val, isSet: true}
}

func (v NullableQuickInsertResourceStatus) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableQuickInsertResourceStatus) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


