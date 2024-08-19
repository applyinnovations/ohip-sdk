/*
Opera Cloud Inventory Asynchronous API

APIs to cater for Inventory related asynchronous functionality in OPERA Cloud. This includes viewing inventory data along with its revenue and updating inventory&apos;s sell limits for date ranges. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package invasync

import (
	"encoding/json"
)

// checks if the SellLimitByDateStatus type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SellLimitByDateStatus{}

// SellLimitByDateStatus Response for sell limits status 
type SellLimitByDateStatus struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewSellLimitByDateStatus instantiates a new SellLimitByDateStatus object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSellLimitByDateStatus() *SellLimitByDateStatus {
	this := SellLimitByDateStatus{}
	return &this
}

// NewSellLimitByDateStatusWithDefaults instantiates a new SellLimitByDateStatus object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSellLimitByDateStatusWithDefaults() *SellLimitByDateStatus {
	this := SellLimitByDateStatus{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *SellLimitByDateStatus) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitByDateStatus) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *SellLimitByDateStatus) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *SellLimitByDateStatus) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *SellLimitByDateStatus) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitByDateStatus) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *SellLimitByDateStatus) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *SellLimitByDateStatus) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o SellLimitByDateStatus) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SellLimitByDateStatus) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableSellLimitByDateStatus struct {
	value *SellLimitByDateStatus
	isSet bool
}

func (v NullableSellLimitByDateStatus) Get() *SellLimitByDateStatus {
	return v.value
}

func (v *NullableSellLimitByDateStatus) Set(val *SellLimitByDateStatus) {
	v.value = val
	v.isSet = true
}

func (v NullableSellLimitByDateStatus) IsSet() bool {
	return v.isSet
}

func (v *NullableSellLimitByDateStatus) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSellLimitByDateStatus(val *SellLimitByDateStatus) *NullableSellLimitByDateStatus {
	return &NullableSellLimitByDateStatus{value: val, isSet: true}
}

func (v NullableSellLimitByDateStatus) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSellLimitByDateStatus) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


