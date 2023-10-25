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

// checks if the MarketCodeToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MarketCodeToBeChanged{}

// MarketCodeToBeChanged Request object that holds the details of Market Code to be changed.
type MarketCodeToBeChanged struct {
	Links []InstanceLink `json:"links,omitempty"`
	MarketCode *MarketCodeType `json:"marketCode,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewMarketCodeToBeChanged instantiates a new MarketCodeToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMarketCodeToBeChanged() *MarketCodeToBeChanged {
	this := MarketCodeToBeChanged{}
	return &this
}

// NewMarketCodeToBeChangedWithDefaults instantiates a new MarketCodeToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMarketCodeToBeChangedWithDefaults() *MarketCodeToBeChanged {
	this := MarketCodeToBeChanged{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *MarketCodeToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketCodeToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *MarketCodeToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *MarketCodeToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMarketCode returns the MarketCode field value if set, zero value otherwise.
func (o *MarketCodeToBeChanged) GetMarketCode() MarketCodeType {
	if o == nil || IsNil(o.MarketCode) {
		var ret MarketCodeType
		return ret
	}
	return *o.MarketCode
}

// GetMarketCodeOk returns a tuple with the MarketCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketCodeToBeChanged) GetMarketCodeOk() (*MarketCodeType, bool) {
	if o == nil || IsNil(o.MarketCode) {
		return nil, false
	}
	return o.MarketCode, true
}

// HasMarketCode returns a boolean if a field has been set.
func (o *MarketCodeToBeChanged) HasMarketCode() bool {
	if o != nil && !IsNil(o.MarketCode) {
		return true
	}

	return false
}

// SetMarketCode gets a reference to the given MarketCodeType and assigns it to the MarketCode field.
func (o *MarketCodeToBeChanged) SetMarketCode(v MarketCodeType) {
	o.MarketCode = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *MarketCodeToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketCodeToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *MarketCodeToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *MarketCodeToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o MarketCodeToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MarketCodeToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MarketCode) {
		toSerialize["marketCode"] = o.MarketCode
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableMarketCodeToBeChanged struct {
	value *MarketCodeToBeChanged
	isSet bool
}

func (v NullableMarketCodeToBeChanged) Get() *MarketCodeToBeChanged {
	return v.value
}

func (v *NullableMarketCodeToBeChanged) Set(val *MarketCodeToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableMarketCodeToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableMarketCodeToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMarketCodeToBeChanged(val *MarketCodeToBeChanged) *NullableMarketCodeToBeChanged {
	return &NullableMarketCodeToBeChanged{value: val, isSet: true}
}

func (v NullableMarketCodeToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMarketCodeToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


