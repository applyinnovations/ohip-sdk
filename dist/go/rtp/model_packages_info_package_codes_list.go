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

// checks if the PackagesInfoPackageCodesList type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PackagesInfoPackageCodesList{}

// PackagesInfoPackageCodesList List of package codes.
type PackagesInfoPackageCodesList struct {
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	// Package Codes of each hotel.
	PackageCodes []HotelPackageCodesType `json:"packageCodes,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
}

// NewPackagesInfoPackageCodesList instantiates a new PackagesInfoPackageCodesList object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPackagesInfoPackageCodesList() *PackagesInfoPackageCodesList {
	this := PackagesInfoPackageCodesList{}
	return &this
}

// NewPackagesInfoPackageCodesListWithDefaults instantiates a new PackagesInfoPackageCodesList object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPackagesInfoPackageCodesListWithDefaults() *PackagesInfoPackageCodesList {
	this := PackagesInfoPackageCodesList{}
	return &this
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *PackagesInfoPackageCodesList) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagesInfoPackageCodesList) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *PackagesInfoPackageCodesList) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *PackagesInfoPackageCodesList) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *PackagesInfoPackageCodesList) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagesInfoPackageCodesList) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *PackagesInfoPackageCodesList) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *PackagesInfoPackageCodesList) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetPackageCodes returns the PackageCodes field value if set, zero value otherwise.
func (o *PackagesInfoPackageCodesList) GetPackageCodes() []HotelPackageCodesType {
	if o == nil || IsNil(o.PackageCodes) {
		var ret []HotelPackageCodesType
		return ret
	}
	return o.PackageCodes
}

// GetPackageCodesOk returns a tuple with the PackageCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagesInfoPackageCodesList) GetPackageCodesOk() ([]HotelPackageCodesType, bool) {
	if o == nil || IsNil(o.PackageCodes) {
		return nil, false
	}
	return o.PackageCodes, true
}

// HasPackageCodes returns a boolean if a field has been set.
func (o *PackagesInfoPackageCodesList) HasPackageCodes() bool {
	if o != nil && !IsNil(o.PackageCodes) {
		return true
	}

	return false
}

// SetPackageCodes gets a reference to the given []HotelPackageCodesType and assigns it to the PackageCodes field.
func (o *PackagesInfoPackageCodesList) SetPackageCodes(v []HotelPackageCodesType) {
	o.PackageCodes = v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *PackagesInfoPackageCodesList) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackagesInfoPackageCodesList) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *PackagesInfoPackageCodesList) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *PackagesInfoPackageCodesList) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o PackagesInfoPackageCodesList) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PackagesInfoPackageCodesList) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.PackageCodes) {
		toSerialize["packageCodes"] = o.PackageCodes
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	return toSerialize, nil
}

type NullablePackagesInfoPackageCodesList struct {
	value *PackagesInfoPackageCodesList
	isSet bool
}

func (v NullablePackagesInfoPackageCodesList) Get() *PackagesInfoPackageCodesList {
	return v.value
}

func (v *NullablePackagesInfoPackageCodesList) Set(val *PackagesInfoPackageCodesList) {
	v.value = val
	v.isSet = true
}

func (v NullablePackagesInfoPackageCodesList) IsSet() bool {
	return v.isSet
}

func (v *NullablePackagesInfoPackageCodesList) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePackagesInfoPackageCodesList(val *PackagesInfoPackageCodesList) *NullablePackagesInfoPackageCodesList {
	return &NullablePackagesInfoPackageCodesList{value: val, isSet: true}
}

func (v NullablePackagesInfoPackageCodesList) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePackagesInfoPackageCodesList) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

