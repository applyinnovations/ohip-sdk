/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the AvailableRatePlanType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AvailableRatePlanType{}

// AvailableRatePlanType Room Type and Room Rate combination.
type AvailableRatePlanType struct {
	AvailableRooms []AvailableRoomType `json:"availableRooms,omitempty"`
	Currency *string `json:"currency,omitempty"`
	MarketingInfo *string `json:"marketingInfo,omitempty"`
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	RatePlanDesc *string `json:"ratePlanDesc,omitempty"`
	TaxInfo *string `json:"taxInfo,omitempty"`
}

// NewAvailableRatePlanType instantiates a new AvailableRatePlanType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAvailableRatePlanType() *AvailableRatePlanType {
	this := AvailableRatePlanType{}
	return &this
}

// NewAvailableRatePlanTypeWithDefaults instantiates a new AvailableRatePlanType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAvailableRatePlanTypeWithDefaults() *AvailableRatePlanType {
	this := AvailableRatePlanType{}
	return &this
}

// GetAvailableRooms returns the AvailableRooms field value if set, zero value otherwise.
func (o *AvailableRatePlanType) GetAvailableRooms() []AvailableRoomType {
	if o == nil || IsNil(o.AvailableRooms) {
		var ret []AvailableRoomType
		return ret
	}
	return o.AvailableRooms
}

// GetAvailableRoomsOk returns a tuple with the AvailableRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailableRatePlanType) GetAvailableRoomsOk() ([]AvailableRoomType, bool) {
	if o == nil || IsNil(o.AvailableRooms) {
		return nil, false
	}
	return o.AvailableRooms, true
}

// HasAvailableRooms returns a boolean if a field has been set.
func (o *AvailableRatePlanType) HasAvailableRooms() bool {
	if o != nil && !IsNil(o.AvailableRooms) {
		return true
	}

	return false
}

// SetAvailableRooms gets a reference to the given []AvailableRoomType and assigns it to the AvailableRooms field.
func (o *AvailableRatePlanType) SetAvailableRooms(v []AvailableRoomType) {
	o.AvailableRooms = v
}

// GetCurrency returns the Currency field value if set, zero value otherwise.
func (o *AvailableRatePlanType) GetCurrency() string {
	if o == nil || IsNil(o.Currency) {
		var ret string
		return ret
	}
	return *o.Currency
}

// GetCurrencyOk returns a tuple with the Currency field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailableRatePlanType) GetCurrencyOk() (*string, bool) {
	if o == nil || IsNil(o.Currency) {
		return nil, false
	}
	return o.Currency, true
}

// HasCurrency returns a boolean if a field has been set.
func (o *AvailableRatePlanType) HasCurrency() bool {
	if o != nil && !IsNil(o.Currency) {
		return true
	}

	return false
}

// SetCurrency gets a reference to the given string and assigns it to the Currency field.
func (o *AvailableRatePlanType) SetCurrency(v string) {
	o.Currency = &v
}

// GetMarketingInfo returns the MarketingInfo field value if set, zero value otherwise.
func (o *AvailableRatePlanType) GetMarketingInfo() string {
	if o == nil || IsNil(o.MarketingInfo) {
		var ret string
		return ret
	}
	return *o.MarketingInfo
}

// GetMarketingInfoOk returns a tuple with the MarketingInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailableRatePlanType) GetMarketingInfoOk() (*string, bool) {
	if o == nil || IsNil(o.MarketingInfo) {
		return nil, false
	}
	return o.MarketingInfo, true
}

// HasMarketingInfo returns a boolean if a field has been set.
func (o *AvailableRatePlanType) HasMarketingInfo() bool {
	if o != nil && !IsNil(o.MarketingInfo) {
		return true
	}

	return false
}

// SetMarketingInfo gets a reference to the given string and assigns it to the MarketingInfo field.
func (o *AvailableRatePlanType) SetMarketingInfo(v string) {
	o.MarketingInfo = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *AvailableRatePlanType) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailableRatePlanType) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *AvailableRatePlanType) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *AvailableRatePlanType) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetRatePlanDesc returns the RatePlanDesc field value if set, zero value otherwise.
func (o *AvailableRatePlanType) GetRatePlanDesc() string {
	if o == nil || IsNil(o.RatePlanDesc) {
		var ret string
		return ret
	}
	return *o.RatePlanDesc
}

// GetRatePlanDescOk returns a tuple with the RatePlanDesc field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailableRatePlanType) GetRatePlanDescOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanDesc) {
		return nil, false
	}
	return o.RatePlanDesc, true
}

// HasRatePlanDesc returns a boolean if a field has been set.
func (o *AvailableRatePlanType) HasRatePlanDesc() bool {
	if o != nil && !IsNil(o.RatePlanDesc) {
		return true
	}

	return false
}

// SetRatePlanDesc gets a reference to the given string and assigns it to the RatePlanDesc field.
func (o *AvailableRatePlanType) SetRatePlanDesc(v string) {
	o.RatePlanDesc = &v
}

// GetTaxInfo returns the TaxInfo field value if set, zero value otherwise.
func (o *AvailableRatePlanType) GetTaxInfo() string {
	if o == nil || IsNil(o.TaxInfo) {
		var ret string
		return ret
	}
	return *o.TaxInfo
}

// GetTaxInfoOk returns a tuple with the TaxInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailableRatePlanType) GetTaxInfoOk() (*string, bool) {
	if o == nil || IsNil(o.TaxInfo) {
		return nil, false
	}
	return o.TaxInfo, true
}

// HasTaxInfo returns a boolean if a field has been set.
func (o *AvailableRatePlanType) HasTaxInfo() bool {
	if o != nil && !IsNil(o.TaxInfo) {
		return true
	}

	return false
}

// SetTaxInfo gets a reference to the given string and assigns it to the TaxInfo field.
func (o *AvailableRatePlanType) SetTaxInfo(v string) {
	o.TaxInfo = &v
}

func (o AvailableRatePlanType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AvailableRatePlanType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AvailableRooms) {
		toSerialize["availableRooms"] = o.AvailableRooms
	}
	if !IsNil(o.Currency) {
		toSerialize["currency"] = o.Currency
	}
	if !IsNil(o.MarketingInfo) {
		toSerialize["marketingInfo"] = o.MarketingInfo
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.RatePlanDesc) {
		toSerialize["ratePlanDesc"] = o.RatePlanDesc
	}
	if !IsNil(o.TaxInfo) {
		toSerialize["taxInfo"] = o.TaxInfo
	}
	return toSerialize, nil
}

type NullableAvailableRatePlanType struct {
	value *AvailableRatePlanType
	isSet bool
}

func (v NullableAvailableRatePlanType) Get() *AvailableRatePlanType {
	return v.value
}

func (v *NullableAvailableRatePlanType) Set(val *AvailableRatePlanType) {
	v.value = val
	v.isSet = true
}

func (v NullableAvailableRatePlanType) IsSet() bool {
	return v.isSet
}

func (v *NullableAvailableRatePlanType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAvailableRatePlanType(val *AvailableRatePlanType) *NullableAvailableRatePlanType {
	return &NullableAvailableRatePlanType{value: val, isSet: true}
}

func (v NullableAvailableRatePlanType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAvailableRatePlanType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


