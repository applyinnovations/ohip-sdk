/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the BlockRatePlanInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockRatePlanInfoType{}

// BlockRatePlanInfoType Rate Plan info type extension for block.
type BlockRatePlanInfoType struct {
	CancelPenalty *CancelPenaltyType `json:"cancelPenalty,omitempty"`
	// Currency Code of the rate code.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// Description of the Rate Code.
	Description *string `json:"description,omitempty"`
	Guarantee *GuaranteeType `json:"guarantee,omitempty"`
	HotelId *string `json:"hotelId,omitempty"`
	// Detail Information of the Rate Code.
	LongInfo *string `json:"longInfo,omitempty"`
	// Market Code associated with the RatePlanCode.
	MarketCode *string `json:"marketCode,omitempty"`
	// Meal plan codes associated with the rate codes.
	MealPlans []MealPlanCodeType `json:"mealPlans,omitempty"`
	// Indicates if the rate code is a negotiated rate code
	Negotiated *bool `json:"negotiated,omitempty"`
	// Is it a primary rate plan?
	Primary *bool `json:"primary,omitempty"`
	RatePlanCategory *string `json:"ratePlanCategory,omitempty"`
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	// All rate codes are associated with rate plan level ( or rate category )for Channels. So if rate plans are given in the request, get all rate codes associated with the rate plan level.
	RatePlanLevel *string `json:"ratePlanLevel,omitempty"`
	// Indicates if service fee is included in the rate code amount.
	ServiceFeeInclusive *bool `json:"serviceFeeInclusive,omitempty"`
	// Brief Information of the Rate Code.
	ShortInfo *string `json:"shortInfo,omitempty"`
	// Is the rate amount to be shown?
	ShowRateAmount *bool `json:"showRateAmount,omitempty"`
	// Source Code associated with the RatePlanCode.
	SourceCode *string `json:"sourceCode,omitempty"`
	// Indicates if tax is included in the rate code amount.
	TaxInclusive *bool `json:"taxInclusive,omitempty"`
	// URL providing more information about the Rate Code.
	WebPage *string `json:"webPage,omitempty"`
}

// NewBlockRatePlanInfoType instantiates a new BlockRatePlanInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockRatePlanInfoType() *BlockRatePlanInfoType {
	this := BlockRatePlanInfoType{}
	return &this
}

// NewBlockRatePlanInfoTypeWithDefaults instantiates a new BlockRatePlanInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockRatePlanInfoTypeWithDefaults() *BlockRatePlanInfoType {
	this := BlockRatePlanInfoType{}
	return &this
}

// GetCancelPenalty returns the CancelPenalty field value if set, zero value otherwise.
func (o *BlockRatePlanInfoType) GetCancelPenalty() CancelPenaltyType {
	if o == nil || IsNil(o.CancelPenalty) {
		var ret CancelPenaltyType
		return ret
	}
	return *o.CancelPenalty
}

// GetCancelPenaltyOk returns a tuple with the CancelPenalty field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanInfoType) GetCancelPenaltyOk() (*CancelPenaltyType, bool) {
	if o == nil || IsNil(o.CancelPenalty) {
		return nil, false
	}
	return o.CancelPenalty, true
}

// HasCancelPenalty returns a boolean if a field has been set.
func (o *BlockRatePlanInfoType) HasCancelPenalty() bool {
	if o != nil && !IsNil(o.CancelPenalty) {
		return true
	}

	return false
}

// SetCancelPenalty gets a reference to the given CancelPenaltyType and assigns it to the CancelPenalty field.
func (o *BlockRatePlanInfoType) SetCancelPenalty(v CancelPenaltyType) {
	o.CancelPenalty = &v
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *BlockRatePlanInfoType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanInfoType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *BlockRatePlanInfoType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *BlockRatePlanInfoType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *BlockRatePlanInfoType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanInfoType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *BlockRatePlanInfoType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *BlockRatePlanInfoType) SetDescription(v string) {
	o.Description = &v
}

// GetGuarantee returns the Guarantee field value if set, zero value otherwise.
func (o *BlockRatePlanInfoType) GetGuarantee() GuaranteeType {
	if o == nil || IsNil(o.Guarantee) {
		var ret GuaranteeType
		return ret
	}
	return *o.Guarantee
}

// GetGuaranteeOk returns a tuple with the Guarantee field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanInfoType) GetGuaranteeOk() (*GuaranteeType, bool) {
	if o == nil || IsNil(o.Guarantee) {
		return nil, false
	}
	return o.Guarantee, true
}

// HasGuarantee returns a boolean if a field has been set.
func (o *BlockRatePlanInfoType) HasGuarantee() bool {
	if o != nil && !IsNil(o.Guarantee) {
		return true
	}

	return false
}

// SetGuarantee gets a reference to the given GuaranteeType and assigns it to the Guarantee field.
func (o *BlockRatePlanInfoType) SetGuarantee(v GuaranteeType) {
	o.Guarantee = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *BlockRatePlanInfoType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanInfoType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *BlockRatePlanInfoType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *BlockRatePlanInfoType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLongInfo returns the LongInfo field value if set, zero value otherwise.
func (o *BlockRatePlanInfoType) GetLongInfo() string {
	if o == nil || IsNil(o.LongInfo) {
		var ret string
		return ret
	}
	return *o.LongInfo
}

// GetLongInfoOk returns a tuple with the LongInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanInfoType) GetLongInfoOk() (*string, bool) {
	if o == nil || IsNil(o.LongInfo) {
		return nil, false
	}
	return o.LongInfo, true
}

// HasLongInfo returns a boolean if a field has been set.
func (o *BlockRatePlanInfoType) HasLongInfo() bool {
	if o != nil && !IsNil(o.LongInfo) {
		return true
	}

	return false
}

// SetLongInfo gets a reference to the given string and assigns it to the LongInfo field.
func (o *BlockRatePlanInfoType) SetLongInfo(v string) {
	o.LongInfo = &v
}

// GetMarketCode returns the MarketCode field value if set, zero value otherwise.
func (o *BlockRatePlanInfoType) GetMarketCode() string {
	if o == nil || IsNil(o.MarketCode) {
		var ret string
		return ret
	}
	return *o.MarketCode
}

// GetMarketCodeOk returns a tuple with the MarketCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanInfoType) GetMarketCodeOk() (*string, bool) {
	if o == nil || IsNil(o.MarketCode) {
		return nil, false
	}
	return o.MarketCode, true
}

// HasMarketCode returns a boolean if a field has been set.
func (o *BlockRatePlanInfoType) HasMarketCode() bool {
	if o != nil && !IsNil(o.MarketCode) {
		return true
	}

	return false
}

// SetMarketCode gets a reference to the given string and assigns it to the MarketCode field.
func (o *BlockRatePlanInfoType) SetMarketCode(v string) {
	o.MarketCode = &v
}

// GetMealPlans returns the MealPlans field value if set, zero value otherwise.
func (o *BlockRatePlanInfoType) GetMealPlans() []MealPlanCodeType {
	if o == nil || IsNil(o.MealPlans) {
		var ret []MealPlanCodeType
		return ret
	}
	return o.MealPlans
}

// GetMealPlansOk returns a tuple with the MealPlans field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanInfoType) GetMealPlansOk() ([]MealPlanCodeType, bool) {
	if o == nil || IsNil(o.MealPlans) {
		return nil, false
	}
	return o.MealPlans, true
}

// HasMealPlans returns a boolean if a field has been set.
func (o *BlockRatePlanInfoType) HasMealPlans() bool {
	if o != nil && !IsNil(o.MealPlans) {
		return true
	}

	return false
}

// SetMealPlans gets a reference to the given []MealPlanCodeType and assigns it to the MealPlans field.
func (o *BlockRatePlanInfoType) SetMealPlans(v []MealPlanCodeType) {
	o.MealPlans = v
}

// GetNegotiated returns the Negotiated field value if set, zero value otherwise.
func (o *BlockRatePlanInfoType) GetNegotiated() bool {
	if o == nil || IsNil(o.Negotiated) {
		var ret bool
		return ret
	}
	return *o.Negotiated
}

// GetNegotiatedOk returns a tuple with the Negotiated field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanInfoType) GetNegotiatedOk() (*bool, bool) {
	if o == nil || IsNil(o.Negotiated) {
		return nil, false
	}
	return o.Negotiated, true
}

// HasNegotiated returns a boolean if a field has been set.
func (o *BlockRatePlanInfoType) HasNegotiated() bool {
	if o != nil && !IsNil(o.Negotiated) {
		return true
	}

	return false
}

// SetNegotiated gets a reference to the given bool and assigns it to the Negotiated field.
func (o *BlockRatePlanInfoType) SetNegotiated(v bool) {
	o.Negotiated = &v
}

// GetPrimary returns the Primary field value if set, zero value otherwise.
func (o *BlockRatePlanInfoType) GetPrimary() bool {
	if o == nil || IsNil(o.Primary) {
		var ret bool
		return ret
	}
	return *o.Primary
}

// GetPrimaryOk returns a tuple with the Primary field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanInfoType) GetPrimaryOk() (*bool, bool) {
	if o == nil || IsNil(o.Primary) {
		return nil, false
	}
	return o.Primary, true
}

// HasPrimary returns a boolean if a field has been set.
func (o *BlockRatePlanInfoType) HasPrimary() bool {
	if o != nil && !IsNil(o.Primary) {
		return true
	}

	return false
}

// SetPrimary gets a reference to the given bool and assigns it to the Primary field.
func (o *BlockRatePlanInfoType) SetPrimary(v bool) {
	o.Primary = &v
}

// GetRatePlanCategory returns the RatePlanCategory field value if set, zero value otherwise.
func (o *BlockRatePlanInfoType) GetRatePlanCategory() string {
	if o == nil || IsNil(o.RatePlanCategory) {
		var ret string
		return ret
	}
	return *o.RatePlanCategory
}

// GetRatePlanCategoryOk returns a tuple with the RatePlanCategory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanInfoType) GetRatePlanCategoryOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCategory) {
		return nil, false
	}
	return o.RatePlanCategory, true
}

// HasRatePlanCategory returns a boolean if a field has been set.
func (o *BlockRatePlanInfoType) HasRatePlanCategory() bool {
	if o != nil && !IsNil(o.RatePlanCategory) {
		return true
	}

	return false
}

// SetRatePlanCategory gets a reference to the given string and assigns it to the RatePlanCategory field.
func (o *BlockRatePlanInfoType) SetRatePlanCategory(v string) {
	o.RatePlanCategory = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *BlockRatePlanInfoType) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanInfoType) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *BlockRatePlanInfoType) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *BlockRatePlanInfoType) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetRatePlanLevel returns the RatePlanLevel field value if set, zero value otherwise.
func (o *BlockRatePlanInfoType) GetRatePlanLevel() string {
	if o == nil || IsNil(o.RatePlanLevel) {
		var ret string
		return ret
	}
	return *o.RatePlanLevel
}

// GetRatePlanLevelOk returns a tuple with the RatePlanLevel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanInfoType) GetRatePlanLevelOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanLevel) {
		return nil, false
	}
	return o.RatePlanLevel, true
}

// HasRatePlanLevel returns a boolean if a field has been set.
func (o *BlockRatePlanInfoType) HasRatePlanLevel() bool {
	if o != nil && !IsNil(o.RatePlanLevel) {
		return true
	}

	return false
}

// SetRatePlanLevel gets a reference to the given string and assigns it to the RatePlanLevel field.
func (o *BlockRatePlanInfoType) SetRatePlanLevel(v string) {
	o.RatePlanLevel = &v
}

// GetServiceFeeInclusive returns the ServiceFeeInclusive field value if set, zero value otherwise.
func (o *BlockRatePlanInfoType) GetServiceFeeInclusive() bool {
	if o == nil || IsNil(o.ServiceFeeInclusive) {
		var ret bool
		return ret
	}
	return *o.ServiceFeeInclusive
}

// GetServiceFeeInclusiveOk returns a tuple with the ServiceFeeInclusive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanInfoType) GetServiceFeeInclusiveOk() (*bool, bool) {
	if o == nil || IsNil(o.ServiceFeeInclusive) {
		return nil, false
	}
	return o.ServiceFeeInclusive, true
}

// HasServiceFeeInclusive returns a boolean if a field has been set.
func (o *BlockRatePlanInfoType) HasServiceFeeInclusive() bool {
	if o != nil && !IsNil(o.ServiceFeeInclusive) {
		return true
	}

	return false
}

// SetServiceFeeInclusive gets a reference to the given bool and assigns it to the ServiceFeeInclusive field.
func (o *BlockRatePlanInfoType) SetServiceFeeInclusive(v bool) {
	o.ServiceFeeInclusive = &v
}

// GetShortInfo returns the ShortInfo field value if set, zero value otherwise.
func (o *BlockRatePlanInfoType) GetShortInfo() string {
	if o == nil || IsNil(o.ShortInfo) {
		var ret string
		return ret
	}
	return *o.ShortInfo
}

// GetShortInfoOk returns a tuple with the ShortInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanInfoType) GetShortInfoOk() (*string, bool) {
	if o == nil || IsNil(o.ShortInfo) {
		return nil, false
	}
	return o.ShortInfo, true
}

// HasShortInfo returns a boolean if a field has been set.
func (o *BlockRatePlanInfoType) HasShortInfo() bool {
	if o != nil && !IsNil(o.ShortInfo) {
		return true
	}

	return false
}

// SetShortInfo gets a reference to the given string and assigns it to the ShortInfo field.
func (o *BlockRatePlanInfoType) SetShortInfo(v string) {
	o.ShortInfo = &v
}

// GetShowRateAmount returns the ShowRateAmount field value if set, zero value otherwise.
func (o *BlockRatePlanInfoType) GetShowRateAmount() bool {
	if o == nil || IsNil(o.ShowRateAmount) {
		var ret bool
		return ret
	}
	return *o.ShowRateAmount
}

// GetShowRateAmountOk returns a tuple with the ShowRateAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanInfoType) GetShowRateAmountOk() (*bool, bool) {
	if o == nil || IsNil(o.ShowRateAmount) {
		return nil, false
	}
	return o.ShowRateAmount, true
}

// HasShowRateAmount returns a boolean if a field has been set.
func (o *BlockRatePlanInfoType) HasShowRateAmount() bool {
	if o != nil && !IsNil(o.ShowRateAmount) {
		return true
	}

	return false
}

// SetShowRateAmount gets a reference to the given bool and assigns it to the ShowRateAmount field.
func (o *BlockRatePlanInfoType) SetShowRateAmount(v bool) {
	o.ShowRateAmount = &v
}

// GetSourceCode returns the SourceCode field value if set, zero value otherwise.
func (o *BlockRatePlanInfoType) GetSourceCode() string {
	if o == nil || IsNil(o.SourceCode) {
		var ret string
		return ret
	}
	return *o.SourceCode
}

// GetSourceCodeOk returns a tuple with the SourceCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanInfoType) GetSourceCodeOk() (*string, bool) {
	if o == nil || IsNil(o.SourceCode) {
		return nil, false
	}
	return o.SourceCode, true
}

// HasSourceCode returns a boolean if a field has been set.
func (o *BlockRatePlanInfoType) HasSourceCode() bool {
	if o != nil && !IsNil(o.SourceCode) {
		return true
	}

	return false
}

// SetSourceCode gets a reference to the given string and assigns it to the SourceCode field.
func (o *BlockRatePlanInfoType) SetSourceCode(v string) {
	o.SourceCode = &v
}

// GetTaxInclusive returns the TaxInclusive field value if set, zero value otherwise.
func (o *BlockRatePlanInfoType) GetTaxInclusive() bool {
	if o == nil || IsNil(o.TaxInclusive) {
		var ret bool
		return ret
	}
	return *o.TaxInclusive
}

// GetTaxInclusiveOk returns a tuple with the TaxInclusive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanInfoType) GetTaxInclusiveOk() (*bool, bool) {
	if o == nil || IsNil(o.TaxInclusive) {
		return nil, false
	}
	return o.TaxInclusive, true
}

// HasTaxInclusive returns a boolean if a field has been set.
func (o *BlockRatePlanInfoType) HasTaxInclusive() bool {
	if o != nil && !IsNil(o.TaxInclusive) {
		return true
	}

	return false
}

// SetTaxInclusive gets a reference to the given bool and assigns it to the TaxInclusive field.
func (o *BlockRatePlanInfoType) SetTaxInclusive(v bool) {
	o.TaxInclusive = &v
}

// GetWebPage returns the WebPage field value if set, zero value otherwise.
func (o *BlockRatePlanInfoType) GetWebPage() string {
	if o == nil || IsNil(o.WebPage) {
		var ret string
		return ret
	}
	return *o.WebPage
}

// GetWebPageOk returns a tuple with the WebPage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockRatePlanInfoType) GetWebPageOk() (*string, bool) {
	if o == nil || IsNil(o.WebPage) {
		return nil, false
	}
	return o.WebPage, true
}

// HasWebPage returns a boolean if a field has been set.
func (o *BlockRatePlanInfoType) HasWebPage() bool {
	if o != nil && !IsNil(o.WebPage) {
		return true
	}

	return false
}

// SetWebPage gets a reference to the given string and assigns it to the WebPage field.
func (o *BlockRatePlanInfoType) SetWebPage(v string) {
	o.WebPage = &v
}

func (o BlockRatePlanInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockRatePlanInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CancelPenalty) {
		toSerialize["cancelPenalty"] = o.CancelPenalty
	}
	if !IsNil(o.CurrencyCode) {
		toSerialize["currencyCode"] = o.CurrencyCode
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Guarantee) {
		toSerialize["guarantee"] = o.Guarantee
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.LongInfo) {
		toSerialize["longInfo"] = o.LongInfo
	}
	if !IsNil(o.MarketCode) {
		toSerialize["marketCode"] = o.MarketCode
	}
	if !IsNil(o.MealPlans) {
		toSerialize["mealPlans"] = o.MealPlans
	}
	if !IsNil(o.Negotiated) {
		toSerialize["negotiated"] = o.Negotiated
	}
	if !IsNil(o.Primary) {
		toSerialize["primary"] = o.Primary
	}
	if !IsNil(o.RatePlanCategory) {
		toSerialize["ratePlanCategory"] = o.RatePlanCategory
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.RatePlanLevel) {
		toSerialize["ratePlanLevel"] = o.RatePlanLevel
	}
	if !IsNil(o.ServiceFeeInclusive) {
		toSerialize["serviceFeeInclusive"] = o.ServiceFeeInclusive
	}
	if !IsNil(o.ShortInfo) {
		toSerialize["shortInfo"] = o.ShortInfo
	}
	if !IsNil(o.ShowRateAmount) {
		toSerialize["showRateAmount"] = o.ShowRateAmount
	}
	if !IsNil(o.SourceCode) {
		toSerialize["sourceCode"] = o.SourceCode
	}
	if !IsNil(o.TaxInclusive) {
		toSerialize["taxInclusive"] = o.TaxInclusive
	}
	if !IsNil(o.WebPage) {
		toSerialize["webPage"] = o.WebPage
	}
	return toSerialize, nil
}

type NullableBlockRatePlanInfoType struct {
	value *BlockRatePlanInfoType
	isSet bool
}

func (v NullableBlockRatePlanInfoType) Get() *BlockRatePlanInfoType {
	return v.value
}

func (v *NullableBlockRatePlanInfoType) Set(val *BlockRatePlanInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockRatePlanInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockRatePlanInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockRatePlanInfoType(val *BlockRatePlanInfoType) *NullableBlockRatePlanInfoType {
	return &NullableBlockRatePlanInfoType{value: val, isSet: true}
}

func (v NullableBlockRatePlanInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockRatePlanInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


