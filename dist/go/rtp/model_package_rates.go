/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the PackageRates type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PackageRates{}

// PackageRates Response object to fetch rate plan codes associated for a package. It contains package's short information.
type PackageRates struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Refer to Generic common types document.
	MasterInfoList []MasterInfoType `json:"masterInfoList,omitempty"`
	RatePlanList *PackageRatesRatePlanList `json:"ratePlanList,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPackageRates instantiates a new PackageRates object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPackageRates() *PackageRates {
	this := PackageRates{}
	return &this
}

// NewPackageRatesWithDefaults instantiates a new PackageRates object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPackageRatesWithDefaults() *PackageRates {
	this := PackageRates{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PackageRates) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageRates) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PackageRates) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PackageRates) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMasterInfoList returns the MasterInfoList field value if set, zero value otherwise.
func (o *PackageRates) GetMasterInfoList() []MasterInfoType {
	if o == nil || IsNil(o.MasterInfoList) {
		var ret []MasterInfoType
		return ret
	}
	return o.MasterInfoList
}

// GetMasterInfoListOk returns a tuple with the MasterInfoList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageRates) GetMasterInfoListOk() ([]MasterInfoType, bool) {
	if o == nil || IsNil(o.MasterInfoList) {
		return nil, false
	}
	return o.MasterInfoList, true
}

// HasMasterInfoList returns a boolean if a field has been set.
func (o *PackageRates) HasMasterInfoList() bool {
	if o != nil && !IsNil(o.MasterInfoList) {
		return true
	}

	return false
}

// SetMasterInfoList gets a reference to the given []MasterInfoType and assigns it to the MasterInfoList field.
func (o *PackageRates) SetMasterInfoList(v []MasterInfoType) {
	o.MasterInfoList = v
}

// GetRatePlanList returns the RatePlanList field value if set, zero value otherwise.
func (o *PackageRates) GetRatePlanList() PackageRatesRatePlanList {
	if o == nil || IsNil(o.RatePlanList) {
		var ret PackageRatesRatePlanList
		return ret
	}
	return *o.RatePlanList
}

// GetRatePlanListOk returns a tuple with the RatePlanList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageRates) GetRatePlanListOk() (*PackageRatesRatePlanList, bool) {
	if o == nil || IsNil(o.RatePlanList) {
		return nil, false
	}
	return o.RatePlanList, true
}

// HasRatePlanList returns a boolean if a field has been set.
func (o *PackageRates) HasRatePlanList() bool {
	if o != nil && !IsNil(o.RatePlanList) {
		return true
	}

	return false
}

// SetRatePlanList gets a reference to the given PackageRatesRatePlanList and assigns it to the RatePlanList field.
func (o *PackageRates) SetRatePlanList(v PackageRatesRatePlanList) {
	o.RatePlanList = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PackageRates) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageRates) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PackageRates) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PackageRates) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PackageRates) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PackageRates) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MasterInfoList) {
		toSerialize["masterInfoList"] = o.MasterInfoList
	}
	if !IsNil(o.RatePlanList) {
		toSerialize["ratePlanList"] = o.RatePlanList
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePackageRates struct {
	value *PackageRates
	isSet bool
}

func (v NullablePackageRates) Get() *PackageRates {
	return v.value
}

func (v *NullablePackageRates) Set(val *PackageRates) {
	v.value = val
	v.isSet = true
}

func (v NullablePackageRates) IsSet() bool {
	return v.isSet
}

func (v *NullablePackageRates) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePackageRates(val *PackageRates) *NullablePackageRates {
	return &NullablePackageRates{value: val, isSet: true}
}

func (v NullablePackageRates) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePackageRates) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

