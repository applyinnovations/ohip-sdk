/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the FulfillmentExportedLogs type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FulfillmentExportedLogs{}

// FulfillmentExportedLogs Optional elements whether to update exclude extract or delivery status in membership fulfillment
type FulfillmentExportedLogs struct {
	// This type holds the export log information for the membership fulfillment record.
	FulfillmentExportLogs []FulfillmentExportInfoType `json:"fulfillmentExportLogs,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewFulfillmentExportedLogs instantiates a new FulfillmentExportedLogs object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFulfillmentExportedLogs() *FulfillmentExportedLogs {
	this := FulfillmentExportedLogs{}
	return &this
}

// NewFulfillmentExportedLogsWithDefaults instantiates a new FulfillmentExportedLogs object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFulfillmentExportedLogsWithDefaults() *FulfillmentExportedLogs {
	this := FulfillmentExportedLogs{}
	return &this
}

// GetFulfillmentExportLogs returns the FulfillmentExportLogs field value if set, zero value otherwise.
func (o *FulfillmentExportedLogs) GetFulfillmentExportLogs() []FulfillmentExportInfoType {
	if o == nil || IsNil(o.FulfillmentExportLogs) {
		var ret []FulfillmentExportInfoType
		return ret
	}
	return o.FulfillmentExportLogs
}

// GetFulfillmentExportLogsOk returns a tuple with the FulfillmentExportLogs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FulfillmentExportedLogs) GetFulfillmentExportLogsOk() ([]FulfillmentExportInfoType, bool) {
	if o == nil || IsNil(o.FulfillmentExportLogs) {
		return nil, false
	}
	return o.FulfillmentExportLogs, true
}

// HasFulfillmentExportLogs returns a boolean if a field has been set.
func (o *FulfillmentExportedLogs) HasFulfillmentExportLogs() bool {
	if o != nil && !IsNil(o.FulfillmentExportLogs) {
		return true
	}

	return false
}

// SetFulfillmentExportLogs gets a reference to the given []FulfillmentExportInfoType and assigns it to the FulfillmentExportLogs field.
func (o *FulfillmentExportedLogs) SetFulfillmentExportLogs(v []FulfillmentExportInfoType) {
	o.FulfillmentExportLogs = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *FulfillmentExportedLogs) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FulfillmentExportedLogs) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *FulfillmentExportedLogs) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *FulfillmentExportedLogs) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *FulfillmentExportedLogs) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FulfillmentExportedLogs) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *FulfillmentExportedLogs) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *FulfillmentExportedLogs) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o FulfillmentExportedLogs) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FulfillmentExportedLogs) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FulfillmentExportLogs) {
		toSerialize["fulfillmentExportLogs"] = o.FulfillmentExportLogs
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableFulfillmentExportedLogs struct {
	value *FulfillmentExportedLogs
	isSet bool
}

func (v NullableFulfillmentExportedLogs) Get() *FulfillmentExportedLogs {
	return v.value
}

func (v *NullableFulfillmentExportedLogs) Set(val *FulfillmentExportedLogs) {
	v.value = val
	v.isSet = true
}

func (v NullableFulfillmentExportedLogs) IsSet() bool {
	return v.isSet
}

func (v *NullableFulfillmentExportedLogs) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFulfillmentExportedLogs(val *FulfillmentExportedLogs) *NullableFulfillmentExportedLogs {
	return &NullableFulfillmentExportedLogs{value: val, isSet: true}
}

func (v NullableFulfillmentExportedLogs) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFulfillmentExportedLogs) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


