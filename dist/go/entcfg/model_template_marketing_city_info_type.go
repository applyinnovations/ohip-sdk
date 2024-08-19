/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the TemplateMarketingCityInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplateMarketingCityInfoType{}

// TemplateMarketingCityInfoType Template marketing city details.
type TemplateMarketingCityInfoType struct {
	// Marketing city code.
	MarketingCity *string `json:"marketingCity,omitempty"`
	// Region code the marketing city belongs to.
	RegionCode *string `json:"regionCode,omitempty"`
}

// NewTemplateMarketingCityInfoType instantiates a new TemplateMarketingCityInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplateMarketingCityInfoType() *TemplateMarketingCityInfoType {
	this := TemplateMarketingCityInfoType{}
	return &this
}

// NewTemplateMarketingCityInfoTypeWithDefaults instantiates a new TemplateMarketingCityInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplateMarketingCityInfoTypeWithDefaults() *TemplateMarketingCityInfoType {
	this := TemplateMarketingCityInfoType{}
	return &this
}

// GetMarketingCity returns the MarketingCity field value if set, zero value otherwise.
func (o *TemplateMarketingCityInfoType) GetMarketingCity() string {
	if o == nil || IsNil(o.MarketingCity) {
		var ret string
		return ret
	}
	return *o.MarketingCity
}

// GetMarketingCityOk returns a tuple with the MarketingCity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateMarketingCityInfoType) GetMarketingCityOk() (*string, bool) {
	if o == nil || IsNil(o.MarketingCity) {
		return nil, false
	}
	return o.MarketingCity, true
}

// HasMarketingCity returns a boolean if a field has been set.
func (o *TemplateMarketingCityInfoType) HasMarketingCity() bool {
	if o != nil && !IsNil(o.MarketingCity) {
		return true
	}

	return false
}

// SetMarketingCity gets a reference to the given string and assigns it to the MarketingCity field.
func (o *TemplateMarketingCityInfoType) SetMarketingCity(v string) {
	o.MarketingCity = &v
}

// GetRegionCode returns the RegionCode field value if set, zero value otherwise.
func (o *TemplateMarketingCityInfoType) GetRegionCode() string {
	if o == nil || IsNil(o.RegionCode) {
		var ret string
		return ret
	}
	return *o.RegionCode
}

// GetRegionCodeOk returns a tuple with the RegionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateMarketingCityInfoType) GetRegionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RegionCode) {
		return nil, false
	}
	return o.RegionCode, true
}

// HasRegionCode returns a boolean if a field has been set.
func (o *TemplateMarketingCityInfoType) HasRegionCode() bool {
	if o != nil && !IsNil(o.RegionCode) {
		return true
	}

	return false
}

// SetRegionCode gets a reference to the given string and assigns it to the RegionCode field.
func (o *TemplateMarketingCityInfoType) SetRegionCode(v string) {
	o.RegionCode = &v
}

func (o TemplateMarketingCityInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplateMarketingCityInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.MarketingCity) {
		toSerialize["marketingCity"] = o.MarketingCity
	}
	if !IsNil(o.RegionCode) {
		toSerialize["regionCode"] = o.RegionCode
	}
	return toSerialize, nil
}

type NullableTemplateMarketingCityInfoType struct {
	value *TemplateMarketingCityInfoType
	isSet bool
}

func (v NullableTemplateMarketingCityInfoType) Get() *TemplateMarketingCityInfoType {
	return v.value
}

func (v *NullableTemplateMarketingCityInfoType) Set(val *TemplateMarketingCityInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplateMarketingCityInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplateMarketingCityInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplateMarketingCityInfoType(val *TemplateMarketingCityInfoType) *NullableTemplateMarketingCityInfoType {
	return &NullableTemplateMarketingCityInfoType{value: val, isSet: true}
}

func (v NullableTemplateMarketingCityInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplateMarketingCityInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


