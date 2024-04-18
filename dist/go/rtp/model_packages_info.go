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

// checks if the PackagesInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PackagesInfo{}

// PackagesInfo Response object to fetch list of packages.
type PackagesInfo struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Refer to Generic common types document.
	MasterInfoList []MasterInfoType `json:"masterInfoList,omitempty"`
	PackageCodesList *PackagesInfoPackageCodesList `json:"packageCodesList,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPackagesInfo instantiates a new PackagesInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPackagesInfo() *PackagesInfo {
	this := PackagesInfo{}
	return &this
}

// NewPackagesInfoWithDefaults instantiates a new PackagesInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPackagesInfoWithDefaults() *PackagesInfo {
	this := PackagesInfo{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PackagesInfo) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagesInfo) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PackagesInfo) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PackagesInfo) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMasterInfoList returns the MasterInfoList field value if set, zero value otherwise.
func (o *PackagesInfo) GetMasterInfoList() []MasterInfoType {
	if o == nil || IsNil(o.MasterInfoList) {
		var ret []MasterInfoType
		return ret
	}
	return o.MasterInfoList
}

// GetMasterInfoListOk returns a tuple with the MasterInfoList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagesInfo) GetMasterInfoListOk() ([]MasterInfoType, bool) {
	if o == nil || IsNil(o.MasterInfoList) {
		return nil, false
	}
	return o.MasterInfoList, true
}

// HasMasterInfoList returns a boolean if a field has been set.
func (o *PackagesInfo) HasMasterInfoList() bool {
	if o != nil && !IsNil(o.MasterInfoList) {
		return true
	}

	return false
}

// SetMasterInfoList gets a reference to the given []MasterInfoType and assigns it to the MasterInfoList field.
func (o *PackagesInfo) SetMasterInfoList(v []MasterInfoType) {
	o.MasterInfoList = v
}

// GetPackageCodesList returns the PackageCodesList field value if set, zero value otherwise.
func (o *PackagesInfo) GetPackageCodesList() PackagesInfoPackageCodesList {
	if o == nil || IsNil(o.PackageCodesList) {
		var ret PackagesInfoPackageCodesList
		return ret
	}
	return *o.PackageCodesList
}

// GetPackageCodesListOk returns a tuple with the PackageCodesList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagesInfo) GetPackageCodesListOk() (*PackagesInfoPackageCodesList, bool) {
	if o == nil || IsNil(o.PackageCodesList) {
		return nil, false
	}
	return o.PackageCodesList, true
}

// HasPackageCodesList returns a boolean if a field has been set.
func (o *PackagesInfo) HasPackageCodesList() bool {
	if o != nil && !IsNil(o.PackageCodesList) {
		return true
	}

	return false
}

// SetPackageCodesList gets a reference to the given PackagesInfoPackageCodesList and assigns it to the PackageCodesList field.
func (o *PackagesInfo) SetPackageCodesList(v PackagesInfoPackageCodesList) {
	o.PackageCodesList = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PackagesInfo) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagesInfo) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PackagesInfo) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PackagesInfo) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PackagesInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PackagesInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MasterInfoList) {
		toSerialize["masterInfoList"] = o.MasterInfoList
	}
	if !IsNil(o.PackageCodesList) {
		toSerialize["packageCodesList"] = o.PackageCodesList
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePackagesInfo struct {
	value *PackagesInfo
	isSet bool
}

func (v NullablePackagesInfo) Get() *PackagesInfo {
	return v.value
}

func (v *NullablePackagesInfo) Set(val *PackagesInfo) {
	v.value = val
	v.isSet = true
}

func (v NullablePackagesInfo) IsSet() bool {
	return v.isSet
}

func (v *NullablePackagesInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePackagesInfo(val *PackagesInfo) *NullablePackagesInfo {
	return &NullablePackagesInfo{value: val, isSet: true}
}

func (v NullablePackagesInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePackagesInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

