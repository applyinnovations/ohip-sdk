/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the ExchangeRateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExchangeRateType{}

// ExchangeRateType Exchange rate configuration type.
type ExchangeRateType struct {
	BaseCurrency *CodeDescriptionType `json:"baseCurrency,omitempty"`
	// Date on which the rate is to become active.
	BeginDate *string `json:"beginDate,omitempty"`
	// Percentage of the amount that is to be a commission for the currency buy operation.
	BuyCommission *float32 `json:"buyCommission,omitempty"`
	// Buy Rate for foreign currency.
	BuyRate *float32 `json:"buyRate,omitempty"`
	// Comments associated with the exchange rate.
	Comment *string `json:"comment,omitempty"`
	Currency *CodeDescriptionType `json:"currency,omitempty"`
	// Type for exchange calculation.
	ExchangeType []CurrencyExchangeType `json:"exchangeType,omitempty"`
	// Property where exchange rate is set.
	HotelId *string `json:"hotelId,omitempty"`
	// Percentage of the amount that is to be a commission for the currency sell operation.
	SellCommission *float32 `json:"sellCommission,omitempty"`
	// Sell Rate for foreign currency.
	SellRate *float32 `json:"sellRate,omitempty"`
	Status *StatusTypes `json:"status,omitempty"`
}

// NewExchangeRateType instantiates a new ExchangeRateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExchangeRateType() *ExchangeRateType {
	this := ExchangeRateType{}
	return &this
}

// NewExchangeRateTypeWithDefaults instantiates a new ExchangeRateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExchangeRateTypeWithDefaults() *ExchangeRateType {
	this := ExchangeRateType{}
	return &this
}

// GetBaseCurrency returns the BaseCurrency field value if set, zero value otherwise.
func (o *ExchangeRateType) GetBaseCurrency() CodeDescriptionType {
	if o == nil || IsNil(o.BaseCurrency) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.BaseCurrency
}

// GetBaseCurrencyOk returns a tuple with the BaseCurrency field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateType) GetBaseCurrencyOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.BaseCurrency) {
		return nil, false
	}
	return o.BaseCurrency, true
}

// HasBaseCurrency returns a boolean if a field has been set.
func (o *ExchangeRateType) HasBaseCurrency() bool {
	if o != nil && !IsNil(o.BaseCurrency) {
		return true
	}

	return false
}

// SetBaseCurrency gets a reference to the given CodeDescriptionType and assigns it to the BaseCurrency field.
func (o *ExchangeRateType) SetBaseCurrency(v CodeDescriptionType) {
	o.BaseCurrency = &v
}

// GetBeginDate returns the BeginDate field value if set, zero value otherwise.
func (o *ExchangeRateType) GetBeginDate() string {
	if o == nil || IsNil(o.BeginDate) {
		var ret string
		return ret
	}
	return *o.BeginDate
}

// GetBeginDateOk returns a tuple with the BeginDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateType) GetBeginDateOk() (*string, bool) {
	if o == nil || IsNil(o.BeginDate) {
		return nil, false
	}
	return o.BeginDate, true
}

// HasBeginDate returns a boolean if a field has been set.
func (o *ExchangeRateType) HasBeginDate() bool {
	if o != nil && !IsNil(o.BeginDate) {
		return true
	}

	return false
}

// SetBeginDate gets a reference to the given string and assigns it to the BeginDate field.
func (o *ExchangeRateType) SetBeginDate(v string) {
	o.BeginDate = &v
}

// GetBuyCommission returns the BuyCommission field value if set, zero value otherwise.
func (o *ExchangeRateType) GetBuyCommission() float32 {
	if o == nil || IsNil(o.BuyCommission) {
		var ret float32
		return ret
	}
	return *o.BuyCommission
}

// GetBuyCommissionOk returns a tuple with the BuyCommission field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateType) GetBuyCommissionOk() (*float32, bool) {
	if o == nil || IsNil(o.BuyCommission) {
		return nil, false
	}
	return o.BuyCommission, true
}

// HasBuyCommission returns a boolean if a field has been set.
func (o *ExchangeRateType) HasBuyCommission() bool {
	if o != nil && !IsNil(o.BuyCommission) {
		return true
	}

	return false
}

// SetBuyCommission gets a reference to the given float32 and assigns it to the BuyCommission field.
func (o *ExchangeRateType) SetBuyCommission(v float32) {
	o.BuyCommission = &v
}

// GetBuyRate returns the BuyRate field value if set, zero value otherwise.
func (o *ExchangeRateType) GetBuyRate() float32 {
	if o == nil || IsNil(o.BuyRate) {
		var ret float32
		return ret
	}
	return *o.BuyRate
}

// GetBuyRateOk returns a tuple with the BuyRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateType) GetBuyRateOk() (*float32, bool) {
	if o == nil || IsNil(o.BuyRate) {
		return nil, false
	}
	return o.BuyRate, true
}

// HasBuyRate returns a boolean if a field has been set.
func (o *ExchangeRateType) HasBuyRate() bool {
	if o != nil && !IsNil(o.BuyRate) {
		return true
	}

	return false
}

// SetBuyRate gets a reference to the given float32 and assigns it to the BuyRate field.
func (o *ExchangeRateType) SetBuyRate(v float32) {
	o.BuyRate = &v
}

// GetComment returns the Comment field value if set, zero value otherwise.
func (o *ExchangeRateType) GetComment() string {
	if o == nil || IsNil(o.Comment) {
		var ret string
		return ret
	}
	return *o.Comment
}

// GetCommentOk returns a tuple with the Comment field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateType) GetCommentOk() (*string, bool) {
	if o == nil || IsNil(o.Comment) {
		return nil, false
	}
	return o.Comment, true
}

// HasComment returns a boolean if a field has been set.
func (o *ExchangeRateType) HasComment() bool {
	if o != nil && !IsNil(o.Comment) {
		return true
	}

	return false
}

// SetComment gets a reference to the given string and assigns it to the Comment field.
func (o *ExchangeRateType) SetComment(v string) {
	o.Comment = &v
}

// GetCurrency returns the Currency field value if set, zero value otherwise.
func (o *ExchangeRateType) GetCurrency() CodeDescriptionType {
	if o == nil || IsNil(o.Currency) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.Currency
}

// GetCurrencyOk returns a tuple with the Currency field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateType) GetCurrencyOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.Currency) {
		return nil, false
	}
	return o.Currency, true
}

// HasCurrency returns a boolean if a field has been set.
func (o *ExchangeRateType) HasCurrency() bool {
	if o != nil && !IsNil(o.Currency) {
		return true
	}

	return false
}

// SetCurrency gets a reference to the given CodeDescriptionType and assigns it to the Currency field.
func (o *ExchangeRateType) SetCurrency(v CodeDescriptionType) {
	o.Currency = &v
}

// GetExchangeType returns the ExchangeType field value if set, zero value otherwise.
func (o *ExchangeRateType) GetExchangeType() []CurrencyExchangeType {
	if o == nil || IsNil(o.ExchangeType) {
		var ret []CurrencyExchangeType
		return ret
	}
	return o.ExchangeType
}

// GetExchangeTypeOk returns a tuple with the ExchangeType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateType) GetExchangeTypeOk() ([]CurrencyExchangeType, bool) {
	if o == nil || IsNil(o.ExchangeType) {
		return nil, false
	}
	return o.ExchangeType, true
}

// HasExchangeType returns a boolean if a field has been set.
func (o *ExchangeRateType) HasExchangeType() bool {
	if o != nil && !IsNil(o.ExchangeType) {
		return true
	}

	return false
}

// SetExchangeType gets a reference to the given []CurrencyExchangeType and assigns it to the ExchangeType field.
func (o *ExchangeRateType) SetExchangeType(v []CurrencyExchangeType) {
	o.ExchangeType = v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ExchangeRateType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ExchangeRateType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ExchangeRateType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetSellCommission returns the SellCommission field value if set, zero value otherwise.
func (o *ExchangeRateType) GetSellCommission() float32 {
	if o == nil || IsNil(o.SellCommission) {
		var ret float32
		return ret
	}
	return *o.SellCommission
}

// GetSellCommissionOk returns a tuple with the SellCommission field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateType) GetSellCommissionOk() (*float32, bool) {
	if o == nil || IsNil(o.SellCommission) {
		return nil, false
	}
	return o.SellCommission, true
}

// HasSellCommission returns a boolean if a field has been set.
func (o *ExchangeRateType) HasSellCommission() bool {
	if o != nil && !IsNil(o.SellCommission) {
		return true
	}

	return false
}

// SetSellCommission gets a reference to the given float32 and assigns it to the SellCommission field.
func (o *ExchangeRateType) SetSellCommission(v float32) {
	o.SellCommission = &v
}

// GetSellRate returns the SellRate field value if set, zero value otherwise.
func (o *ExchangeRateType) GetSellRate() float32 {
	if o == nil || IsNil(o.SellRate) {
		var ret float32
		return ret
	}
	return *o.SellRate
}

// GetSellRateOk returns a tuple with the SellRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateType) GetSellRateOk() (*float32, bool) {
	if o == nil || IsNil(o.SellRate) {
		return nil, false
	}
	return o.SellRate, true
}

// HasSellRate returns a boolean if a field has been set.
func (o *ExchangeRateType) HasSellRate() bool {
	if o != nil && !IsNil(o.SellRate) {
		return true
	}

	return false
}

// SetSellRate gets a reference to the given float32 and assigns it to the SellRate field.
func (o *ExchangeRateType) SetSellRate(v float32) {
	o.SellRate = &v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *ExchangeRateType) GetStatus() StatusTypes {
	if o == nil || IsNil(o.Status) {
		var ret StatusTypes
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateType) GetStatusOk() (*StatusTypes, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *ExchangeRateType) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given StatusTypes and assigns it to the Status field.
func (o *ExchangeRateType) SetStatus(v StatusTypes) {
	o.Status = &v
}

func (o ExchangeRateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExchangeRateType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BaseCurrency) {
		toSerialize["baseCurrency"] = o.BaseCurrency
	}
	if !IsNil(o.BeginDate) {
		toSerialize["beginDate"] = o.BeginDate
	}
	if !IsNil(o.BuyCommission) {
		toSerialize["buyCommission"] = o.BuyCommission
	}
	if !IsNil(o.BuyRate) {
		toSerialize["buyRate"] = o.BuyRate
	}
	if !IsNil(o.Comment) {
		toSerialize["comment"] = o.Comment
	}
	if !IsNil(o.Currency) {
		toSerialize["currency"] = o.Currency
	}
	if !IsNil(o.ExchangeType) {
		toSerialize["exchangeType"] = o.ExchangeType
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.SellCommission) {
		toSerialize["sellCommission"] = o.SellCommission
	}
	if !IsNil(o.SellRate) {
		toSerialize["sellRate"] = o.SellRate
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	return toSerialize, nil
}

type NullableExchangeRateType struct {
	value *ExchangeRateType
	isSet bool
}

func (v NullableExchangeRateType) Get() *ExchangeRateType {
	return v.value
}

func (v *NullableExchangeRateType) Set(val *ExchangeRateType) {
	v.value = val
	v.isSet = true
}

func (v NullableExchangeRateType) IsSet() bool {
	return v.isSet
}

func (v *NullableExchangeRateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExchangeRateType(val *ExchangeRateType) *NullableExchangeRateType {
	return &NullableExchangeRateType{value: val, isSet: true}
}

func (v NullableExchangeRateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExchangeRateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


