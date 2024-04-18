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

// checks if the BlockRatePlanType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockRatePlanType{}

// BlockRatePlanType The block rate plan code information.
type BlockRatePlanType struct {
	// Currency of the rate code.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// Description of the rate code.
	Description *string `json:"description,omitempty"`
	// End sell date of the rate code.
	EndSellDate *string `json:"endSellDate,omitempty"`
	// Market code associated with the rate code.
	MarketCode *string `json:"marketCode,omitempty"`
	// True if the rate plan code, is a negotiated code otherwise false.
	Negotiated *bool `json:"negotiated,omitempty"`
	// Rate code
	RateCode *string `json:"rateCode,omitempty"`
	// SellSequence for the rate code.
	SellSequence *float32 `json:"sellSequence,omitempty"`
	// True if the rate amount for the rate plan code will be visible, otherwise false.
	ShowRateAmount *bool `json:"showRateAmount,omitempty"`
	// Source code associated with the rate code.
	SourceCode *string `json:"sourceCode,omitempty"`
	// Start sell date of the rate code.
	StartSellDate *string `json:"startSellDate,omitempty"`
}

// NewBlockRatePlanType instantiates a new BlockRatePlanType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockRatePlanType() *BlockRatePlanType {
	this := BlockRatePlanType{}
	return &this
}

// NewBlockRatePlanTypeWithDefaults instantiates a new BlockRatePlanType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockRatePlanTypeWithDefaults() *BlockRatePlanType {
	this := BlockRatePlanType{}
	return &this
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *BlockRatePlanType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *BlockRatePlanType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *BlockRatePlanType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *BlockRatePlanType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *BlockRatePlanType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *BlockRatePlanType) SetDescription(v string) {
	o.Description = &v
}

// GetEndSellDate returns the EndSellDate field value if set, zero value otherwise.
func (o *BlockRatePlanType) GetEndSellDate() string {
	if o == nil || IsNil(o.EndSellDate) {
		var ret string
		return ret
	}
	return *o.EndSellDate
}

// GetEndSellDateOk returns a tuple with the EndSellDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanType) GetEndSellDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndSellDate) {
		return nil, false
	}
	return o.EndSellDate, true
}

// HasEndSellDate returns a boolean if a field has been set.
func (o *BlockRatePlanType) HasEndSellDate() bool {
	if o != nil && !IsNil(o.EndSellDate) {
		return true
	}

	return false
}

// SetEndSellDate gets a reference to the given string and assigns it to the EndSellDate field.
func (o *BlockRatePlanType) SetEndSellDate(v string) {
	o.EndSellDate = &v
}

// GetMarketCode returns the MarketCode field value if set, zero value otherwise.
func (o *BlockRatePlanType) GetMarketCode() string {
	if o == nil || IsNil(o.MarketCode) {
		var ret string
		return ret
	}
	return *o.MarketCode
}

// GetMarketCodeOk returns a tuple with the MarketCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanType) GetMarketCodeOk() (*string, bool) {
	if o == nil || IsNil(o.MarketCode) {
		return nil, false
	}
	return o.MarketCode, true
}

// HasMarketCode returns a boolean if a field has been set.
func (o *BlockRatePlanType) HasMarketCode() bool {
	if o != nil && !IsNil(o.MarketCode) {
		return true
	}

	return false
}

// SetMarketCode gets a reference to the given string and assigns it to the MarketCode field.
func (o *BlockRatePlanType) SetMarketCode(v string) {
	o.MarketCode = &v
}

// GetNegotiated returns the Negotiated field value if set, zero value otherwise.
func (o *BlockRatePlanType) GetNegotiated() bool {
	if o == nil || IsNil(o.Negotiated) {
		var ret bool
		return ret
	}
	return *o.Negotiated
}

// GetNegotiatedOk returns a tuple with the Negotiated field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanType) GetNegotiatedOk() (*bool, bool) {
	if o == nil || IsNil(o.Negotiated) {
		return nil, false
	}
	return o.Negotiated, true
}

// HasNegotiated returns a boolean if a field has been set.
func (o *BlockRatePlanType) HasNegotiated() bool {
	if o != nil && !IsNil(o.Negotiated) {
		return true
	}

	return false
}

// SetNegotiated gets a reference to the given bool and assigns it to the Negotiated field.
func (o *BlockRatePlanType) SetNegotiated(v bool) {
	o.Negotiated = &v
}

// GetRateCode returns the RateCode field value if set, zero value otherwise.
func (o *BlockRatePlanType) GetRateCode() string {
	if o == nil || IsNil(o.RateCode) {
		var ret string
		return ret
	}
	return *o.RateCode
}

// GetRateCodeOk returns a tuple with the RateCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanType) GetRateCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RateCode) {
		return nil, false
	}
	return o.RateCode, true
}

// HasRateCode returns a boolean if a field has been set.
func (o *BlockRatePlanType) HasRateCode() bool {
	if o != nil && !IsNil(o.RateCode) {
		return true
	}

	return false
}

// SetRateCode gets a reference to the given string and assigns it to the RateCode field.
func (o *BlockRatePlanType) SetRateCode(v string) {
	o.RateCode = &v
}

// GetSellSequence returns the SellSequence field value if set, zero value otherwise.
func (o *BlockRatePlanType) GetSellSequence() float32 {
	if o == nil || IsNil(o.SellSequence) {
		var ret float32
		return ret
	}
	return *o.SellSequence
}

// GetSellSequenceOk returns a tuple with the SellSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanType) GetSellSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.SellSequence) {
		return nil, false
	}
	return o.SellSequence, true
}

// HasSellSequence returns a boolean if a field has been set.
func (o *BlockRatePlanType) HasSellSequence() bool {
	if o != nil && !IsNil(o.SellSequence) {
		return true
	}

	return false
}

// SetSellSequence gets a reference to the given float32 and assigns it to the SellSequence field.
func (o *BlockRatePlanType) SetSellSequence(v float32) {
	o.SellSequence = &v
}

// GetShowRateAmount returns the ShowRateAmount field value if set, zero value otherwise.
func (o *BlockRatePlanType) GetShowRateAmount() bool {
	if o == nil || IsNil(o.ShowRateAmount) {
		var ret bool
		return ret
	}
	return *o.ShowRateAmount
}

// GetShowRateAmountOk returns a tuple with the ShowRateAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanType) GetShowRateAmountOk() (*bool, bool) {
	if o == nil || IsNil(o.ShowRateAmount) {
		return nil, false
	}
	return o.ShowRateAmount, true
}

// HasShowRateAmount returns a boolean if a field has been set.
func (o *BlockRatePlanType) HasShowRateAmount() bool {
	if o != nil && !IsNil(o.ShowRateAmount) {
		return true
	}

	return false
}

// SetShowRateAmount gets a reference to the given bool and assigns it to the ShowRateAmount field.
func (o *BlockRatePlanType) SetShowRateAmount(v bool) {
	o.ShowRateAmount = &v
}

// GetSourceCode returns the SourceCode field value if set, zero value otherwise.
func (o *BlockRatePlanType) GetSourceCode() string {
	if o == nil || IsNil(o.SourceCode) {
		var ret string
		return ret
	}
	return *o.SourceCode
}

// GetSourceCodeOk returns a tuple with the SourceCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanType) GetSourceCodeOk() (*string, bool) {
	if o == nil || IsNil(o.SourceCode) {
		return nil, false
	}
	return o.SourceCode, true
}

// HasSourceCode returns a boolean if a field has been set.
func (o *BlockRatePlanType) HasSourceCode() bool {
	if o != nil && !IsNil(o.SourceCode) {
		return true
	}

	return false
}

// SetSourceCode gets a reference to the given string and assigns it to the SourceCode field.
func (o *BlockRatePlanType) SetSourceCode(v string) {
	o.SourceCode = &v
}

// GetStartSellDate returns the StartSellDate field value if set, zero value otherwise.
func (o *BlockRatePlanType) GetStartSellDate() string {
	if o == nil || IsNil(o.StartSellDate) {
		var ret string
		return ret
	}
	return *o.StartSellDate
}

// GetStartSellDateOk returns a tuple with the StartSellDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanType) GetStartSellDateOk() (*string, bool) {
	if o == nil || IsNil(o.StartSellDate) {
		return nil, false
	}
	return o.StartSellDate, true
}

// HasStartSellDate returns a boolean if a field has been set.
func (o *BlockRatePlanType) HasStartSellDate() bool {
	if o != nil && !IsNil(o.StartSellDate) {
		return true
	}

	return false
}

// SetStartSellDate gets a reference to the given string and assigns it to the StartSellDate field.
func (o *BlockRatePlanType) SetStartSellDate(v string) {
	o.StartSellDate = &v
}

func (o BlockRatePlanType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockRatePlanType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CurrencyCode) {
		toSerialize["currencyCode"] = o.CurrencyCode
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.EndSellDate) {
		toSerialize["endSellDate"] = o.EndSellDate
	}
	if !IsNil(o.MarketCode) {
		toSerialize["marketCode"] = o.MarketCode
	}
	if !IsNil(o.Negotiated) {
		toSerialize["negotiated"] = o.Negotiated
	}
	if !IsNil(o.RateCode) {
		toSerialize["rateCode"] = o.RateCode
	}
	if !IsNil(o.SellSequence) {
		toSerialize["sellSequence"] = o.SellSequence
	}
	if !IsNil(o.ShowRateAmount) {
		toSerialize["showRateAmount"] = o.ShowRateAmount
	}
	if !IsNil(o.SourceCode) {
		toSerialize["sourceCode"] = o.SourceCode
	}
	if !IsNil(o.StartSellDate) {
		toSerialize["startSellDate"] = o.StartSellDate
	}
	return toSerialize, nil
}

type NullableBlockRatePlanType struct {
	value *BlockRatePlanType
	isSet bool
}

func (v NullableBlockRatePlanType) Get() *BlockRatePlanType {
	return v.value
}

func (v *NullableBlockRatePlanType) Set(val *BlockRatePlanType) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockRatePlanType) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockRatePlanType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockRatePlanType(val *BlockRatePlanType) *NullableBlockRatePlanType {
	return &NullableBlockRatePlanType{value: val, isSet: true}
}

func (v NullableBlockRatePlanType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockRatePlanType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

