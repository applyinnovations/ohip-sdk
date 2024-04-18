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

// checks if the MarketingCityType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MarketingCityType{}

// MarketingCityType struct for MarketingCityType
type MarketingCityType struct {
	// Hotels under this Marketing City.
	CityHotels []CityHotelInfoType `json:"cityHotels,omitempty"`
	// Hotels under this Marketing City.
	MarketingCity *string `json:"marketingCity,omitempty"`
	// Description of the Marketing City
	Description *string `json:"description,omitempty"`
}

// NewMarketingCityType instantiates a new MarketingCityType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMarketingCityType() *MarketingCityType {
	this := MarketingCityType{}
	return &this
}

// NewMarketingCityTypeWithDefaults instantiates a new MarketingCityType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMarketingCityTypeWithDefaults() *MarketingCityType {
	this := MarketingCityType{}
	return &this
}

// GetCityHotels returns the CityHotels field value if set, zero value otherwise.
func (o *MarketingCityType) GetCityHotels() []CityHotelInfoType {
	if o == nil || IsNil(o.CityHotels) {
		var ret []CityHotelInfoType
		return ret
	}
	return o.CityHotels
}

// GetCityHotelsOk returns a tuple with the CityHotels field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketingCityType) GetCityHotelsOk() ([]CityHotelInfoType, bool) {
	if o == nil || IsNil(o.CityHotels) {
		return nil, false
	}
	return o.CityHotels, true
}

// HasCityHotels returns a boolean if a field has been set.
func (o *MarketingCityType) HasCityHotels() bool {
	if o != nil && !IsNil(o.CityHotels) {
		return true
	}

	return false
}

// SetCityHotels gets a reference to the given []CityHotelInfoType and assigns it to the CityHotels field.
func (o *MarketingCityType) SetCityHotels(v []CityHotelInfoType) {
	o.CityHotels = v
}

// GetMarketingCity returns the MarketingCity field value if set, zero value otherwise.
func (o *MarketingCityType) GetMarketingCity() string {
	if o == nil || IsNil(o.MarketingCity) {
		var ret string
		return ret
	}
	return *o.MarketingCity
}

// GetMarketingCityOk returns a tuple with the MarketingCity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketingCityType) GetMarketingCityOk() (*string, bool) {
	if o == nil || IsNil(o.MarketingCity) {
		return nil, false
	}
	return o.MarketingCity, true
}

// HasMarketingCity returns a boolean if a field has been set.
func (o *MarketingCityType) HasMarketingCity() bool {
	if o != nil && !IsNil(o.MarketingCity) {
		return true
	}

	return false
}

// SetMarketingCity gets a reference to the given string and assigns it to the MarketingCity field.
func (o *MarketingCityType) SetMarketingCity(v string) {
	o.MarketingCity = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *MarketingCityType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketingCityType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *MarketingCityType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *MarketingCityType) SetDescription(v string) {
	o.Description = &v
}

func (o MarketingCityType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MarketingCityType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CityHotels) {
		toSerialize["cityHotels"] = o.CityHotels
	}
	if !IsNil(o.MarketingCity) {
		toSerialize["marketingCity"] = o.MarketingCity
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	return toSerialize, nil
}

type NullableMarketingCityType struct {
	value *MarketingCityType
	isSet bool
}

func (v NullableMarketingCityType) Get() *MarketingCityType {
	return v.value
}

func (v *NullableMarketingCityType) Set(val *MarketingCityType) {
	v.value = val
	v.isSet = true
}

func (v NullableMarketingCityType) IsSet() bool {
	return v.isSet
}

func (v *NullableMarketingCityType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMarketingCityType(val *MarketingCityType) *NullableMarketingCityType {
	return &NullableMarketingCityType{value: val, isSet: true}
}

func (v NullableMarketingCityType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMarketingCityType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

