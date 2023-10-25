/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the ExchangeRateCalculationType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExchangeRateCalculationType{}

// ExchangeRateCalculationType Currency conversion calculation type.
type ExchangeRateCalculationType struct {
	// Buy commission for the foreign currency.
	BuyCommission *float32 `json:"buyCommission,omitempty"`
	// Pure calculated amount.
	CalculatedAmount *float32 `json:"calculatedAmount,omitempty"`
	// Date on which the exchange is to take place.
	Date *string `json:"date,omitempty"`
	// Amount in Euro for the exchange.
	EuroAmount *float32 `json:"euroAmount,omitempty"`
	// Exchange rate against Euro.
	EuroExchangeRate *float32 `json:"euroExchangeRate,omitempty"`
	// Date on which exchange rate was obtained.
	ExchangeDate *string `json:"exchangeDate,omitempty"`
	// Exchange Information - text presentation of the exchange operation including formula, buy rate, etc.
	ExchangeInformation *string `json:"exchangeInformation,omitempty"`
	// Exchange Rate.
	ExchangeRate *float32 `json:"exchangeRate,omitempty"`
	ExchangeRateCalculationTax *ExchangeRateCalculationTaxType `json:"exchangeRateCalculationTax,omitempty"`
	// Exchange references.
	ExchangeReference *string `json:"exchangeReference,omitempty"`
	ExchangeType *CurrencyExchangeType `json:"exchangeType,omitempty"`
	FromCurrencyAmount *CurrencyAmountType `json:"fromCurrencyAmount,omitempty"`
	// Property code where the currency is being converted.
	HotelId *string `json:"hotelId,omitempty"`
	// Amount by which the exchange was rounded.
	RoundingAmount *float32 `json:"roundingAmount,omitempty"`
	// Buy or Sell for calculation.
	Sell *bool `json:"sell,omitempty"`
	ServiceTax *CurrencyAmountType `json:"serviceTax,omitempty"`
	ToCurrencyAmount *CurrencyAmountType `json:"toCurrencyAmount,omitempty"`
}

// NewExchangeRateCalculationType instantiates a new ExchangeRateCalculationType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExchangeRateCalculationType() *ExchangeRateCalculationType {
	this := ExchangeRateCalculationType{}
	return &this
}

// NewExchangeRateCalculationTypeWithDefaults instantiates a new ExchangeRateCalculationType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExchangeRateCalculationTypeWithDefaults() *ExchangeRateCalculationType {
	this := ExchangeRateCalculationType{}
	return &this
}

// GetBuyCommission returns the BuyCommission field value if set, zero value otherwise.
func (o *ExchangeRateCalculationType) GetBuyCommission() float32 {
	if o == nil || IsNil(o.BuyCommission) {
		var ret float32
		return ret
	}
	return *o.BuyCommission
}

// GetBuyCommissionOk returns a tuple with the BuyCommission field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationType) GetBuyCommissionOk() (*float32, bool) {
	if o == nil || IsNil(o.BuyCommission) {
		return nil, false
	}
	return o.BuyCommission, true
}

// HasBuyCommission returns a boolean if a field has been set.
func (o *ExchangeRateCalculationType) HasBuyCommission() bool {
	if o != nil && !IsNil(o.BuyCommission) {
		return true
	}

	return false
}

// SetBuyCommission gets a reference to the given float32 and assigns it to the BuyCommission field.
func (o *ExchangeRateCalculationType) SetBuyCommission(v float32) {
	o.BuyCommission = &v
}

// GetCalculatedAmount returns the CalculatedAmount field value if set, zero value otherwise.
func (o *ExchangeRateCalculationType) GetCalculatedAmount() float32 {
	if o == nil || IsNil(o.CalculatedAmount) {
		var ret float32
		return ret
	}
	return *o.CalculatedAmount
}

// GetCalculatedAmountOk returns a tuple with the CalculatedAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationType) GetCalculatedAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.CalculatedAmount) {
		return nil, false
	}
	return o.CalculatedAmount, true
}

// HasCalculatedAmount returns a boolean if a field has been set.
func (o *ExchangeRateCalculationType) HasCalculatedAmount() bool {
	if o != nil && !IsNil(o.CalculatedAmount) {
		return true
	}

	return false
}

// SetCalculatedAmount gets a reference to the given float32 and assigns it to the CalculatedAmount field.
func (o *ExchangeRateCalculationType) SetCalculatedAmount(v float32) {
	o.CalculatedAmount = &v
}

// GetDate returns the Date field value if set, zero value otherwise.
func (o *ExchangeRateCalculationType) GetDate() string {
	if o == nil || IsNil(o.Date) {
		var ret string
		return ret
	}
	return *o.Date
}

// GetDateOk returns a tuple with the Date field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationType) GetDateOk() (*string, bool) {
	if o == nil || IsNil(o.Date) {
		return nil, false
	}
	return o.Date, true
}

// HasDate returns a boolean if a field has been set.
func (o *ExchangeRateCalculationType) HasDate() bool {
	if o != nil && !IsNil(o.Date) {
		return true
	}

	return false
}

// SetDate gets a reference to the given string and assigns it to the Date field.
func (o *ExchangeRateCalculationType) SetDate(v string) {
	o.Date = &v
}

// GetEuroAmount returns the EuroAmount field value if set, zero value otherwise.
func (o *ExchangeRateCalculationType) GetEuroAmount() float32 {
	if o == nil || IsNil(o.EuroAmount) {
		var ret float32
		return ret
	}
	return *o.EuroAmount
}

// GetEuroAmountOk returns a tuple with the EuroAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationType) GetEuroAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.EuroAmount) {
		return nil, false
	}
	return o.EuroAmount, true
}

// HasEuroAmount returns a boolean if a field has been set.
func (o *ExchangeRateCalculationType) HasEuroAmount() bool {
	if o != nil && !IsNil(o.EuroAmount) {
		return true
	}

	return false
}

// SetEuroAmount gets a reference to the given float32 and assigns it to the EuroAmount field.
func (o *ExchangeRateCalculationType) SetEuroAmount(v float32) {
	o.EuroAmount = &v
}

// GetEuroExchangeRate returns the EuroExchangeRate field value if set, zero value otherwise.
func (o *ExchangeRateCalculationType) GetEuroExchangeRate() float32 {
	if o == nil || IsNil(o.EuroExchangeRate) {
		var ret float32
		return ret
	}
	return *o.EuroExchangeRate
}

// GetEuroExchangeRateOk returns a tuple with the EuroExchangeRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationType) GetEuroExchangeRateOk() (*float32, bool) {
	if o == nil || IsNil(o.EuroExchangeRate) {
		return nil, false
	}
	return o.EuroExchangeRate, true
}

// HasEuroExchangeRate returns a boolean if a field has been set.
func (o *ExchangeRateCalculationType) HasEuroExchangeRate() bool {
	if o != nil && !IsNil(o.EuroExchangeRate) {
		return true
	}

	return false
}

// SetEuroExchangeRate gets a reference to the given float32 and assigns it to the EuroExchangeRate field.
func (o *ExchangeRateCalculationType) SetEuroExchangeRate(v float32) {
	o.EuroExchangeRate = &v
}

// GetExchangeDate returns the ExchangeDate field value if set, zero value otherwise.
func (o *ExchangeRateCalculationType) GetExchangeDate() string {
	if o == nil || IsNil(o.ExchangeDate) {
		var ret string
		return ret
	}
	return *o.ExchangeDate
}

// GetExchangeDateOk returns a tuple with the ExchangeDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationType) GetExchangeDateOk() (*string, bool) {
	if o == nil || IsNil(o.ExchangeDate) {
		return nil, false
	}
	return o.ExchangeDate, true
}

// HasExchangeDate returns a boolean if a field has been set.
func (o *ExchangeRateCalculationType) HasExchangeDate() bool {
	if o != nil && !IsNil(o.ExchangeDate) {
		return true
	}

	return false
}

// SetExchangeDate gets a reference to the given string and assigns it to the ExchangeDate field.
func (o *ExchangeRateCalculationType) SetExchangeDate(v string) {
	o.ExchangeDate = &v
}

// GetExchangeInformation returns the ExchangeInformation field value if set, zero value otherwise.
func (o *ExchangeRateCalculationType) GetExchangeInformation() string {
	if o == nil || IsNil(o.ExchangeInformation) {
		var ret string
		return ret
	}
	return *o.ExchangeInformation
}

// GetExchangeInformationOk returns a tuple with the ExchangeInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationType) GetExchangeInformationOk() (*string, bool) {
	if o == nil || IsNil(o.ExchangeInformation) {
		return nil, false
	}
	return o.ExchangeInformation, true
}

// HasExchangeInformation returns a boolean if a field has been set.
func (o *ExchangeRateCalculationType) HasExchangeInformation() bool {
	if o != nil && !IsNil(o.ExchangeInformation) {
		return true
	}

	return false
}

// SetExchangeInformation gets a reference to the given string and assigns it to the ExchangeInformation field.
func (o *ExchangeRateCalculationType) SetExchangeInformation(v string) {
	o.ExchangeInformation = &v
}

// GetExchangeRate returns the ExchangeRate field value if set, zero value otherwise.
func (o *ExchangeRateCalculationType) GetExchangeRate() float32 {
	if o == nil || IsNil(o.ExchangeRate) {
		var ret float32
		return ret
	}
	return *o.ExchangeRate
}

// GetExchangeRateOk returns a tuple with the ExchangeRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationType) GetExchangeRateOk() (*float32, bool) {
	if o == nil || IsNil(o.ExchangeRate) {
		return nil, false
	}
	return o.ExchangeRate, true
}

// HasExchangeRate returns a boolean if a field has been set.
func (o *ExchangeRateCalculationType) HasExchangeRate() bool {
	if o != nil && !IsNil(o.ExchangeRate) {
		return true
	}

	return false
}

// SetExchangeRate gets a reference to the given float32 and assigns it to the ExchangeRate field.
func (o *ExchangeRateCalculationType) SetExchangeRate(v float32) {
	o.ExchangeRate = &v
}

// GetExchangeRateCalculationTax returns the ExchangeRateCalculationTax field value if set, zero value otherwise.
func (o *ExchangeRateCalculationType) GetExchangeRateCalculationTax() ExchangeRateCalculationTaxType {
	if o == nil || IsNil(o.ExchangeRateCalculationTax) {
		var ret ExchangeRateCalculationTaxType
		return ret
	}
	return *o.ExchangeRateCalculationTax
}

// GetExchangeRateCalculationTaxOk returns a tuple with the ExchangeRateCalculationTax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationType) GetExchangeRateCalculationTaxOk() (*ExchangeRateCalculationTaxType, bool) {
	if o == nil || IsNil(o.ExchangeRateCalculationTax) {
		return nil, false
	}
	return o.ExchangeRateCalculationTax, true
}

// HasExchangeRateCalculationTax returns a boolean if a field has been set.
func (o *ExchangeRateCalculationType) HasExchangeRateCalculationTax() bool {
	if o != nil && !IsNil(o.ExchangeRateCalculationTax) {
		return true
	}

	return false
}

// SetExchangeRateCalculationTax gets a reference to the given ExchangeRateCalculationTaxType and assigns it to the ExchangeRateCalculationTax field.
func (o *ExchangeRateCalculationType) SetExchangeRateCalculationTax(v ExchangeRateCalculationTaxType) {
	o.ExchangeRateCalculationTax = &v
}

// GetExchangeReference returns the ExchangeReference field value if set, zero value otherwise.
func (o *ExchangeRateCalculationType) GetExchangeReference() string {
	if o == nil || IsNil(o.ExchangeReference) {
		var ret string
		return ret
	}
	return *o.ExchangeReference
}

// GetExchangeReferenceOk returns a tuple with the ExchangeReference field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationType) GetExchangeReferenceOk() (*string, bool) {
	if o == nil || IsNil(o.ExchangeReference) {
		return nil, false
	}
	return o.ExchangeReference, true
}

// HasExchangeReference returns a boolean if a field has been set.
func (o *ExchangeRateCalculationType) HasExchangeReference() bool {
	if o != nil && !IsNil(o.ExchangeReference) {
		return true
	}

	return false
}

// SetExchangeReference gets a reference to the given string and assigns it to the ExchangeReference field.
func (o *ExchangeRateCalculationType) SetExchangeReference(v string) {
	o.ExchangeReference = &v
}

// GetExchangeType returns the ExchangeType field value if set, zero value otherwise.
func (o *ExchangeRateCalculationType) GetExchangeType() CurrencyExchangeType {
	if o == nil || IsNil(o.ExchangeType) {
		var ret CurrencyExchangeType
		return ret
	}
	return *o.ExchangeType
}

// GetExchangeTypeOk returns a tuple with the ExchangeType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationType) GetExchangeTypeOk() (*CurrencyExchangeType, bool) {
	if o == nil || IsNil(o.ExchangeType) {
		return nil, false
	}
	return o.ExchangeType, true
}

// HasExchangeType returns a boolean if a field has been set.
func (o *ExchangeRateCalculationType) HasExchangeType() bool {
	if o != nil && !IsNil(o.ExchangeType) {
		return true
	}

	return false
}

// SetExchangeType gets a reference to the given CurrencyExchangeType and assigns it to the ExchangeType field.
func (o *ExchangeRateCalculationType) SetExchangeType(v CurrencyExchangeType) {
	o.ExchangeType = &v
}

// GetFromCurrencyAmount returns the FromCurrencyAmount field value if set, zero value otherwise.
func (o *ExchangeRateCalculationType) GetFromCurrencyAmount() CurrencyAmountType {
	if o == nil || IsNil(o.FromCurrencyAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.FromCurrencyAmount
}

// GetFromCurrencyAmountOk returns a tuple with the FromCurrencyAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationType) GetFromCurrencyAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.FromCurrencyAmount) {
		return nil, false
	}
	return o.FromCurrencyAmount, true
}

// HasFromCurrencyAmount returns a boolean if a field has been set.
func (o *ExchangeRateCalculationType) HasFromCurrencyAmount() bool {
	if o != nil && !IsNil(o.FromCurrencyAmount) {
		return true
	}

	return false
}

// SetFromCurrencyAmount gets a reference to the given CurrencyAmountType and assigns it to the FromCurrencyAmount field.
func (o *ExchangeRateCalculationType) SetFromCurrencyAmount(v CurrencyAmountType) {
	o.FromCurrencyAmount = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ExchangeRateCalculationType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ExchangeRateCalculationType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ExchangeRateCalculationType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRoundingAmount returns the RoundingAmount field value if set, zero value otherwise.
func (o *ExchangeRateCalculationType) GetRoundingAmount() float32 {
	if o == nil || IsNil(o.RoundingAmount) {
		var ret float32
		return ret
	}
	return *o.RoundingAmount
}

// GetRoundingAmountOk returns a tuple with the RoundingAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationType) GetRoundingAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.RoundingAmount) {
		return nil, false
	}
	return o.RoundingAmount, true
}

// HasRoundingAmount returns a boolean if a field has been set.
func (o *ExchangeRateCalculationType) HasRoundingAmount() bool {
	if o != nil && !IsNil(o.RoundingAmount) {
		return true
	}

	return false
}

// SetRoundingAmount gets a reference to the given float32 and assigns it to the RoundingAmount field.
func (o *ExchangeRateCalculationType) SetRoundingAmount(v float32) {
	o.RoundingAmount = &v
}

// GetSell returns the Sell field value if set, zero value otherwise.
func (o *ExchangeRateCalculationType) GetSell() bool {
	if o == nil || IsNil(o.Sell) {
		var ret bool
		return ret
	}
	return *o.Sell
}

// GetSellOk returns a tuple with the Sell field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationType) GetSellOk() (*bool, bool) {
	if o == nil || IsNil(o.Sell) {
		return nil, false
	}
	return o.Sell, true
}

// HasSell returns a boolean if a field has been set.
func (o *ExchangeRateCalculationType) HasSell() bool {
	if o != nil && !IsNil(o.Sell) {
		return true
	}

	return false
}

// SetSell gets a reference to the given bool and assigns it to the Sell field.
func (o *ExchangeRateCalculationType) SetSell(v bool) {
	o.Sell = &v
}

// GetServiceTax returns the ServiceTax field value if set, zero value otherwise.
func (o *ExchangeRateCalculationType) GetServiceTax() CurrencyAmountType {
	if o == nil || IsNil(o.ServiceTax) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.ServiceTax
}

// GetServiceTaxOk returns a tuple with the ServiceTax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationType) GetServiceTaxOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.ServiceTax) {
		return nil, false
	}
	return o.ServiceTax, true
}

// HasServiceTax returns a boolean if a field has been set.
func (o *ExchangeRateCalculationType) HasServiceTax() bool {
	if o != nil && !IsNil(o.ServiceTax) {
		return true
	}

	return false
}

// SetServiceTax gets a reference to the given CurrencyAmountType and assigns it to the ServiceTax field.
func (o *ExchangeRateCalculationType) SetServiceTax(v CurrencyAmountType) {
	o.ServiceTax = &v
}

// GetToCurrencyAmount returns the ToCurrencyAmount field value if set, zero value otherwise.
func (o *ExchangeRateCalculationType) GetToCurrencyAmount() CurrencyAmountType {
	if o == nil || IsNil(o.ToCurrencyAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.ToCurrencyAmount
}

// GetToCurrencyAmountOk returns a tuple with the ToCurrencyAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExchangeRateCalculationType) GetToCurrencyAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.ToCurrencyAmount) {
		return nil, false
	}
	return o.ToCurrencyAmount, true
}

// HasToCurrencyAmount returns a boolean if a field has been set.
func (o *ExchangeRateCalculationType) HasToCurrencyAmount() bool {
	if o != nil && !IsNil(o.ToCurrencyAmount) {
		return true
	}

	return false
}

// SetToCurrencyAmount gets a reference to the given CurrencyAmountType and assigns it to the ToCurrencyAmount field.
func (o *ExchangeRateCalculationType) SetToCurrencyAmount(v CurrencyAmountType) {
	o.ToCurrencyAmount = &v
}

func (o ExchangeRateCalculationType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExchangeRateCalculationType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BuyCommission) {
		toSerialize["buyCommission"] = o.BuyCommission
	}
	if !IsNil(o.CalculatedAmount) {
		toSerialize["calculatedAmount"] = o.CalculatedAmount
	}
	if !IsNil(o.Date) {
		toSerialize["date"] = o.Date
	}
	if !IsNil(o.EuroAmount) {
		toSerialize["euroAmount"] = o.EuroAmount
	}
	if !IsNil(o.EuroExchangeRate) {
		toSerialize["euroExchangeRate"] = o.EuroExchangeRate
	}
	if !IsNil(o.ExchangeDate) {
		toSerialize["exchangeDate"] = o.ExchangeDate
	}
	if !IsNil(o.ExchangeInformation) {
		toSerialize["exchangeInformation"] = o.ExchangeInformation
	}
	if !IsNil(o.ExchangeRate) {
		toSerialize["exchangeRate"] = o.ExchangeRate
	}
	if !IsNil(o.ExchangeRateCalculationTax) {
		toSerialize["exchangeRateCalculationTax"] = o.ExchangeRateCalculationTax
	}
	if !IsNil(o.ExchangeReference) {
		toSerialize["exchangeReference"] = o.ExchangeReference
	}
	if !IsNil(o.ExchangeType) {
		toSerialize["exchangeType"] = o.ExchangeType
	}
	if !IsNil(o.FromCurrencyAmount) {
		toSerialize["fromCurrencyAmount"] = o.FromCurrencyAmount
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.RoundingAmount) {
		toSerialize["roundingAmount"] = o.RoundingAmount
	}
	if !IsNil(o.Sell) {
		toSerialize["sell"] = o.Sell
	}
	if !IsNil(o.ServiceTax) {
		toSerialize["serviceTax"] = o.ServiceTax
	}
	if !IsNil(o.ToCurrencyAmount) {
		toSerialize["toCurrencyAmount"] = o.ToCurrencyAmount
	}
	return toSerialize, nil
}

type NullableExchangeRateCalculationType struct {
	value *ExchangeRateCalculationType
	isSet bool
}

func (v NullableExchangeRateCalculationType) Get() *ExchangeRateCalculationType {
	return v.value
}

func (v *NullableExchangeRateCalculationType) Set(val *ExchangeRateCalculationType) {
	v.value = val
	v.isSet = true
}

func (v NullableExchangeRateCalculationType) IsSet() bool {
	return v.isSet
}

func (v *NullableExchangeRateCalculationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExchangeRateCalculationType(val *ExchangeRateCalculationType) *NullableExchangeRateCalculationType {
	return &NullableExchangeRateCalculationType{value: val, isSet: true}
}

func (v NullableExchangeRateCalculationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExchangeRateCalculationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


