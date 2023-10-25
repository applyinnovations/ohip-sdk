/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the HotelPackageType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelPackageType{}

// HotelPackageType Information about the packages of the hotel.
type HotelPackageType struct {
	// The begin date of the package.
	BeginDate *string `json:"beginDate,omitempty"`
	// The end date of the package.
	EndDate *string `json:"endDate,omitempty"`
	PackageCode *string `json:"packageCode,omitempty"`
	// The name of the package.
	PackageName *string `json:"packageName,omitempty"`
	// The price of the package.
	PackagePrice *float32 `json:"packagePrice,omitempty"`
	// Indicates the required membership points for the package.
	PointsRequired *float32 `json:"pointsRequired,omitempty"`
	// Indicates the rate code for the package.
	RateCode *string `json:"rateCode,omitempty"`
}

// NewHotelPackageType instantiates a new HotelPackageType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelPackageType() *HotelPackageType {
	this := HotelPackageType{}
	return &this
}

// NewHotelPackageTypeWithDefaults instantiates a new HotelPackageType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelPackageTypeWithDefaults() *HotelPackageType {
	this := HotelPackageType{}
	return &this
}

// GetBeginDate returns the BeginDate field value if set, zero value otherwise.
func (o *HotelPackageType) GetBeginDate() string {
	if o == nil || IsNil(o.BeginDate) {
		var ret string
		return ret
	}
	return *o.BeginDate
}

// GetBeginDateOk returns a tuple with the BeginDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelPackageType) GetBeginDateOk() (*string, bool) {
	if o == nil || IsNil(o.BeginDate) {
		return nil, false
	}
	return o.BeginDate, true
}

// HasBeginDate returns a boolean if a field has been set.
func (o *HotelPackageType) HasBeginDate() bool {
	if o != nil && !IsNil(o.BeginDate) {
		return true
	}

	return false
}

// SetBeginDate gets a reference to the given string and assigns it to the BeginDate field.
func (o *HotelPackageType) SetBeginDate(v string) {
	o.BeginDate = &v
}

// GetEndDate returns the EndDate field value if set, zero value otherwise.
func (o *HotelPackageType) GetEndDate() string {
	if o == nil || IsNil(o.EndDate) {
		var ret string
		return ret
	}
	return *o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelPackageType) GetEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndDate) {
		return nil, false
	}
	return o.EndDate, true
}

// HasEndDate returns a boolean if a field has been set.
func (o *HotelPackageType) HasEndDate() bool {
	if o != nil && !IsNil(o.EndDate) {
		return true
	}

	return false
}

// SetEndDate gets a reference to the given string and assigns it to the EndDate field.
func (o *HotelPackageType) SetEndDate(v string) {
	o.EndDate = &v
}

// GetPackageCode returns the PackageCode field value if set, zero value otherwise.
func (o *HotelPackageType) GetPackageCode() string {
	if o == nil || IsNil(o.PackageCode) {
		var ret string
		return ret
	}
	return *o.PackageCode
}

// GetPackageCodeOk returns a tuple with the PackageCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelPackageType) GetPackageCodeOk() (*string, bool) {
	if o == nil || IsNil(o.PackageCode) {
		return nil, false
	}
	return o.PackageCode, true
}

// HasPackageCode returns a boolean if a field has been set.
func (o *HotelPackageType) HasPackageCode() bool {
	if o != nil && !IsNil(o.PackageCode) {
		return true
	}

	return false
}

// SetPackageCode gets a reference to the given string and assigns it to the PackageCode field.
func (o *HotelPackageType) SetPackageCode(v string) {
	o.PackageCode = &v
}

// GetPackageName returns the PackageName field value if set, zero value otherwise.
func (o *HotelPackageType) GetPackageName() string {
	if o == nil || IsNil(o.PackageName) {
		var ret string
		return ret
	}
	return *o.PackageName
}

// GetPackageNameOk returns a tuple with the PackageName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelPackageType) GetPackageNameOk() (*string, bool) {
	if o == nil || IsNil(o.PackageName) {
		return nil, false
	}
	return o.PackageName, true
}

// HasPackageName returns a boolean if a field has been set.
func (o *HotelPackageType) HasPackageName() bool {
	if o != nil && !IsNil(o.PackageName) {
		return true
	}

	return false
}

// SetPackageName gets a reference to the given string and assigns it to the PackageName field.
func (o *HotelPackageType) SetPackageName(v string) {
	o.PackageName = &v
}

// GetPackagePrice returns the PackagePrice field value if set, zero value otherwise.
func (o *HotelPackageType) GetPackagePrice() float32 {
	if o == nil || IsNil(o.PackagePrice) {
		var ret float32
		return ret
	}
	return *o.PackagePrice
}

// GetPackagePriceOk returns a tuple with the PackagePrice field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelPackageType) GetPackagePriceOk() (*float32, bool) {
	if o == nil || IsNil(o.PackagePrice) {
		return nil, false
	}
	return o.PackagePrice, true
}

// HasPackagePrice returns a boolean if a field has been set.
func (o *HotelPackageType) HasPackagePrice() bool {
	if o != nil && !IsNil(o.PackagePrice) {
		return true
	}

	return false
}

// SetPackagePrice gets a reference to the given float32 and assigns it to the PackagePrice field.
func (o *HotelPackageType) SetPackagePrice(v float32) {
	o.PackagePrice = &v
}

// GetPointsRequired returns the PointsRequired field value if set, zero value otherwise.
func (o *HotelPackageType) GetPointsRequired() float32 {
	if o == nil || IsNil(o.PointsRequired) {
		var ret float32
		return ret
	}
	return *o.PointsRequired
}

// GetPointsRequiredOk returns a tuple with the PointsRequired field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelPackageType) GetPointsRequiredOk() (*float32, bool) {
	if o == nil || IsNil(o.PointsRequired) {
		return nil, false
	}
	return o.PointsRequired, true
}

// HasPointsRequired returns a boolean if a field has been set.
func (o *HotelPackageType) HasPointsRequired() bool {
	if o != nil && !IsNil(o.PointsRequired) {
		return true
	}

	return false
}

// SetPointsRequired gets a reference to the given float32 and assigns it to the PointsRequired field.
func (o *HotelPackageType) SetPointsRequired(v float32) {
	o.PointsRequired = &v
}

// GetRateCode returns the RateCode field value if set, zero value otherwise.
func (o *HotelPackageType) GetRateCode() string {
	if o == nil || IsNil(o.RateCode) {
		var ret string
		return ret
	}
	return *o.RateCode
}

// GetRateCodeOk returns a tuple with the RateCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelPackageType) GetRateCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RateCode) {
		return nil, false
	}
	return o.RateCode, true
}

// HasRateCode returns a boolean if a field has been set.
func (o *HotelPackageType) HasRateCode() bool {
	if o != nil && !IsNil(o.RateCode) {
		return true
	}

	return false
}

// SetRateCode gets a reference to the given string and assigns it to the RateCode field.
func (o *HotelPackageType) SetRateCode(v string) {
	o.RateCode = &v
}

func (o HotelPackageType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelPackageType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BeginDate) {
		toSerialize["beginDate"] = o.BeginDate
	}
	if !IsNil(o.EndDate) {
		toSerialize["endDate"] = o.EndDate
	}
	if !IsNil(o.PackageCode) {
		toSerialize["packageCode"] = o.PackageCode
	}
	if !IsNil(o.PackageName) {
		toSerialize["packageName"] = o.PackageName
	}
	if !IsNil(o.PackagePrice) {
		toSerialize["packagePrice"] = o.PackagePrice
	}
	if !IsNil(o.PointsRequired) {
		toSerialize["pointsRequired"] = o.PointsRequired
	}
	if !IsNil(o.RateCode) {
		toSerialize["rateCode"] = o.RateCode
	}
	return toSerialize, nil
}

type NullableHotelPackageType struct {
	value *HotelPackageType
	isSet bool
}

func (v NullableHotelPackageType) Get() *HotelPackageType {
	return v.value
}

func (v *NullableHotelPackageType) Set(val *HotelPackageType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelPackageType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelPackageType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelPackageType(val *HotelPackageType) *NullableHotelPackageType {
	return &NullableHotelPackageType{value: val, isSet: true}
}

func (v NullableHotelPackageType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelPackageType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


