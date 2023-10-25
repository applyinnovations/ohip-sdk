/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the GlobalAlertsInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GlobalAlertsInfo{}

// GlobalAlertsInfo Response object for fetching Global Alerts.
type GlobalAlertsInfo struct {
	// Collection of property level global alert details with attached global alert types.
	GlobalAlerts []GlobalAlertType `json:"globalAlerts,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewGlobalAlertsInfo instantiates a new GlobalAlertsInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGlobalAlertsInfo() *GlobalAlertsInfo {
	this := GlobalAlertsInfo{}
	return &this
}

// NewGlobalAlertsInfoWithDefaults instantiates a new GlobalAlertsInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGlobalAlertsInfoWithDefaults() *GlobalAlertsInfo {
	this := GlobalAlertsInfo{}
	return &this
}

// GetGlobalAlerts returns the GlobalAlerts field value if set, zero value otherwise.
func (o *GlobalAlertsInfo) GetGlobalAlerts() []GlobalAlertType {
	if o == nil || IsNil(o.GlobalAlerts) {
		var ret []GlobalAlertType
		return ret
	}
	return o.GlobalAlerts
}

// GetGlobalAlertsOk returns a tuple with the GlobalAlerts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GlobalAlertsInfo) GetGlobalAlertsOk() ([]GlobalAlertType, bool) {
	if o == nil || IsNil(o.GlobalAlerts) {
		return nil, false
	}
	return o.GlobalAlerts, true
}

// HasGlobalAlerts returns a boolean if a field has been set.
func (o *GlobalAlertsInfo) HasGlobalAlerts() bool {
	if o != nil && !IsNil(o.GlobalAlerts) {
		return true
	}

	return false
}

// SetGlobalAlerts gets a reference to the given []GlobalAlertType and assigns it to the GlobalAlerts field.
func (o *GlobalAlertsInfo) SetGlobalAlerts(v []GlobalAlertType) {
	o.GlobalAlerts = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *GlobalAlertsInfo) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GlobalAlertsInfo) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *GlobalAlertsInfo) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *GlobalAlertsInfo) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *GlobalAlertsInfo) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GlobalAlertsInfo) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *GlobalAlertsInfo) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *GlobalAlertsInfo) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o GlobalAlertsInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GlobalAlertsInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GlobalAlerts) {
		toSerialize["globalAlerts"] = o.GlobalAlerts
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableGlobalAlertsInfo struct {
	value *GlobalAlertsInfo
	isSet bool
}

func (v NullableGlobalAlertsInfo) Get() *GlobalAlertsInfo {
	return v.value
}

func (v *NullableGlobalAlertsInfo) Set(val *GlobalAlertsInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableGlobalAlertsInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableGlobalAlertsInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGlobalAlertsInfo(val *GlobalAlertsInfo) *NullableGlobalAlertsInfo {
	return &NullableGlobalAlertsInfo{value: val, isSet: true}
}

func (v NullableGlobalAlertsInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGlobalAlertsInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


