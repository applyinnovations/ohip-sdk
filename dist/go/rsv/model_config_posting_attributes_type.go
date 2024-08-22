/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the ConfigPostingAttributesType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ConfigPostingAttributesType{}

// ConfigPostingAttributesType A config Package posting attributes type.
type ConfigPostingAttributesType struct {
	// The package price is added to the room rate.
	AddToRate *bool `json:"addToRate,omitempty"`
	// Calculated Package Price based from Number of Adults, Children and Calculation Rule.
	CalculatedPrice *float32 `json:"calculatedPrice,omitempty"`
	// Is package used for catering?
	Catering *bool `json:"catering,omitempty"`
	// End time the package is valid.
	EndTime *string `json:"endTime,omitempty"`
	// Package will be forecasted for consumption the next business day.
	ForecastNextDay *bool `json:"forecastNextDay,omitempty"`
	// The custom formula used for this package, if any.
	Formula *string `json:"formula,omitempty"`
	// Package Code Inventory Items type.
	InventoryItems []PkgInventoryItemType `json:"inventoryItems,omitempty"`
	// package charges will be posted next business day.
	PostNextDay *bool `json:"postNextDay,omitempty"`
	PostingRhythm *PackagePostingRhythmType `json:"postingRhythm,omitempty"`
	PriceCalculationRule *PackageCalculationRuleType `json:"priceCalculationRule,omitempty"`
	// The package price is printed on separate line of the folio.
	PrintSeparateLine *bool `json:"printSeparateLine,omitempty"`
	// Can the package be sold separate from rate plan code?
	SellSeparate *bool `json:"sellSeparate,omitempty"`
	// Start time the package is valid.
	StartTime *string `json:"startTime,omitempty"`
	// Indicates whether a package is configured as a ticket or not.
	Ticket *bool `json:"ticket,omitempty"`
}

// NewConfigPostingAttributesType instantiates a new ConfigPostingAttributesType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConfigPostingAttributesType() *ConfigPostingAttributesType {
	this := ConfigPostingAttributesType{}
	return &this
}

// NewConfigPostingAttributesTypeWithDefaults instantiates a new ConfigPostingAttributesType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConfigPostingAttributesTypeWithDefaults() *ConfigPostingAttributesType {
	this := ConfigPostingAttributesType{}
	return &this
}

// GetAddToRate returns the AddToRate field value if set, zero value otherwise.
func (o *ConfigPostingAttributesType) GetAddToRate() bool {
	if o == nil || IsNil(o.AddToRate) {
		var ret bool
		return ret
	}
	return *o.AddToRate
}

// GetAddToRateOk returns a tuple with the AddToRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPostingAttributesType) GetAddToRateOk() (*bool, bool) {
	if o == nil || IsNil(o.AddToRate) {
		return nil, false
	}
	return o.AddToRate, true
}

// HasAddToRate returns a boolean if a field has been set.
func (o *ConfigPostingAttributesType) HasAddToRate() bool {
	if o != nil && !IsNil(o.AddToRate) {
		return true
	}

	return false
}

// SetAddToRate gets a reference to the given bool and assigns it to the AddToRate field.
func (o *ConfigPostingAttributesType) SetAddToRate(v bool) {
	o.AddToRate = &v
}

// GetCalculatedPrice returns the CalculatedPrice field value if set, zero value otherwise.
func (o *ConfigPostingAttributesType) GetCalculatedPrice() float32 {
	if o == nil || IsNil(o.CalculatedPrice) {
		var ret float32
		return ret
	}
	return *o.CalculatedPrice
}

// GetCalculatedPriceOk returns a tuple with the CalculatedPrice field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPostingAttributesType) GetCalculatedPriceOk() (*float32, bool) {
	if o == nil || IsNil(o.CalculatedPrice) {
		return nil, false
	}
	return o.CalculatedPrice, true
}

// HasCalculatedPrice returns a boolean if a field has been set.
func (o *ConfigPostingAttributesType) HasCalculatedPrice() bool {
	if o != nil && !IsNil(o.CalculatedPrice) {
		return true
	}

	return false
}

// SetCalculatedPrice gets a reference to the given float32 and assigns it to the CalculatedPrice field.
func (o *ConfigPostingAttributesType) SetCalculatedPrice(v float32) {
	o.CalculatedPrice = &v
}

// GetCatering returns the Catering field value if set, zero value otherwise.
func (o *ConfigPostingAttributesType) GetCatering() bool {
	if o == nil || IsNil(o.Catering) {
		var ret bool
		return ret
	}
	return *o.Catering
}

// GetCateringOk returns a tuple with the Catering field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPostingAttributesType) GetCateringOk() (*bool, bool) {
	if o == nil || IsNil(o.Catering) {
		return nil, false
	}
	return o.Catering, true
}

// HasCatering returns a boolean if a field has been set.
func (o *ConfigPostingAttributesType) HasCatering() bool {
	if o != nil && !IsNil(o.Catering) {
		return true
	}

	return false
}

// SetCatering gets a reference to the given bool and assigns it to the Catering field.
func (o *ConfigPostingAttributesType) SetCatering(v bool) {
	o.Catering = &v
}

// GetEndTime returns the EndTime field value if set, zero value otherwise.
func (o *ConfigPostingAttributesType) GetEndTime() string {
	if o == nil || IsNil(o.EndTime) {
		var ret string
		return ret
	}
	return *o.EndTime
}

// GetEndTimeOk returns a tuple with the EndTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPostingAttributesType) GetEndTimeOk() (*string, bool) {
	if o == nil || IsNil(o.EndTime) {
		return nil, false
	}
	return o.EndTime, true
}

// HasEndTime returns a boolean if a field has been set.
func (o *ConfigPostingAttributesType) HasEndTime() bool {
	if o != nil && !IsNil(o.EndTime) {
		return true
	}

	return false
}

// SetEndTime gets a reference to the given string and assigns it to the EndTime field.
func (o *ConfigPostingAttributesType) SetEndTime(v string) {
	o.EndTime = &v
}

// GetForecastNextDay returns the ForecastNextDay field value if set, zero value otherwise.
func (o *ConfigPostingAttributesType) GetForecastNextDay() bool {
	if o == nil || IsNil(o.ForecastNextDay) {
		var ret bool
		return ret
	}
	return *o.ForecastNextDay
}

// GetForecastNextDayOk returns a tuple with the ForecastNextDay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPostingAttributesType) GetForecastNextDayOk() (*bool, bool) {
	if o == nil || IsNil(o.ForecastNextDay) {
		return nil, false
	}
	return o.ForecastNextDay, true
}

// HasForecastNextDay returns a boolean if a field has been set.
func (o *ConfigPostingAttributesType) HasForecastNextDay() bool {
	if o != nil && !IsNil(o.ForecastNextDay) {
		return true
	}

	return false
}

// SetForecastNextDay gets a reference to the given bool and assigns it to the ForecastNextDay field.
func (o *ConfigPostingAttributesType) SetForecastNextDay(v bool) {
	o.ForecastNextDay = &v
}

// GetFormula returns the Formula field value if set, zero value otherwise.
func (o *ConfigPostingAttributesType) GetFormula() string {
	if o == nil || IsNil(o.Formula) {
		var ret string
		return ret
	}
	return *o.Formula
}

// GetFormulaOk returns a tuple with the Formula field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPostingAttributesType) GetFormulaOk() (*string, bool) {
	if o == nil || IsNil(o.Formula) {
		return nil, false
	}
	return o.Formula, true
}

// HasFormula returns a boolean if a field has been set.
func (o *ConfigPostingAttributesType) HasFormula() bool {
	if o != nil && !IsNil(o.Formula) {
		return true
	}

	return false
}

// SetFormula gets a reference to the given string and assigns it to the Formula field.
func (o *ConfigPostingAttributesType) SetFormula(v string) {
	o.Formula = &v
}

// GetInventoryItems returns the InventoryItems field value if set, zero value otherwise.
func (o *ConfigPostingAttributesType) GetInventoryItems() []PkgInventoryItemType {
	if o == nil || IsNil(o.InventoryItems) {
		var ret []PkgInventoryItemType
		return ret
	}
	return o.InventoryItems
}

// GetInventoryItemsOk returns a tuple with the InventoryItems field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPostingAttributesType) GetInventoryItemsOk() ([]PkgInventoryItemType, bool) {
	if o == nil || IsNil(o.InventoryItems) {
		return nil, false
	}
	return o.InventoryItems, true
}

// HasInventoryItems returns a boolean if a field has been set.
func (o *ConfigPostingAttributesType) HasInventoryItems() bool {
	if o != nil && !IsNil(o.InventoryItems) {
		return true
	}

	return false
}

// SetInventoryItems gets a reference to the given []PkgInventoryItemType and assigns it to the InventoryItems field.
func (o *ConfigPostingAttributesType) SetInventoryItems(v []PkgInventoryItemType) {
	o.InventoryItems = v
}

// GetPostNextDay returns the PostNextDay field value if set, zero value otherwise.
func (o *ConfigPostingAttributesType) GetPostNextDay() bool {
	if o == nil || IsNil(o.PostNextDay) {
		var ret bool
		return ret
	}
	return *o.PostNextDay
}

// GetPostNextDayOk returns a tuple with the PostNextDay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPostingAttributesType) GetPostNextDayOk() (*bool, bool) {
	if o == nil || IsNil(o.PostNextDay) {
		return nil, false
	}
	return o.PostNextDay, true
}

// HasPostNextDay returns a boolean if a field has been set.
func (o *ConfigPostingAttributesType) HasPostNextDay() bool {
	if o != nil && !IsNil(o.PostNextDay) {
		return true
	}

	return false
}

// SetPostNextDay gets a reference to the given bool and assigns it to the PostNextDay field.
func (o *ConfigPostingAttributesType) SetPostNextDay(v bool) {
	o.PostNextDay = &v
}

// GetPostingRhythm returns the PostingRhythm field value if set, zero value otherwise.
func (o *ConfigPostingAttributesType) GetPostingRhythm() PackagePostingRhythmType {
	if o == nil || IsNil(o.PostingRhythm) {
		var ret PackagePostingRhythmType
		return ret
	}
	return *o.PostingRhythm
}

// GetPostingRhythmOk returns a tuple with the PostingRhythm field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPostingAttributesType) GetPostingRhythmOk() (*PackagePostingRhythmType, bool) {
	if o == nil || IsNil(o.PostingRhythm) {
		return nil, false
	}
	return o.PostingRhythm, true
}

// HasPostingRhythm returns a boolean if a field has been set.
func (o *ConfigPostingAttributesType) HasPostingRhythm() bool {
	if o != nil && !IsNil(o.PostingRhythm) {
		return true
	}

	return false
}

// SetPostingRhythm gets a reference to the given PackagePostingRhythmType and assigns it to the PostingRhythm field.
func (o *ConfigPostingAttributesType) SetPostingRhythm(v PackagePostingRhythmType) {
	o.PostingRhythm = &v
}

// GetPriceCalculationRule returns the PriceCalculationRule field value if set, zero value otherwise.
func (o *ConfigPostingAttributesType) GetPriceCalculationRule() PackageCalculationRuleType {
	if o == nil || IsNil(o.PriceCalculationRule) {
		var ret PackageCalculationRuleType
		return ret
	}
	return *o.PriceCalculationRule
}

// GetPriceCalculationRuleOk returns a tuple with the PriceCalculationRule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPostingAttributesType) GetPriceCalculationRuleOk() (*PackageCalculationRuleType, bool) {
	if o == nil || IsNil(o.PriceCalculationRule) {
		return nil, false
	}
	return o.PriceCalculationRule, true
}

// HasPriceCalculationRule returns a boolean if a field has been set.
func (o *ConfigPostingAttributesType) HasPriceCalculationRule() bool {
	if o != nil && !IsNil(o.PriceCalculationRule) {
		return true
	}

	return false
}

// SetPriceCalculationRule gets a reference to the given PackageCalculationRuleType and assigns it to the PriceCalculationRule field.
func (o *ConfigPostingAttributesType) SetPriceCalculationRule(v PackageCalculationRuleType) {
	o.PriceCalculationRule = &v
}

// GetPrintSeparateLine returns the PrintSeparateLine field value if set, zero value otherwise.
func (o *ConfigPostingAttributesType) GetPrintSeparateLine() bool {
	if o == nil || IsNil(o.PrintSeparateLine) {
		var ret bool
		return ret
	}
	return *o.PrintSeparateLine
}

// GetPrintSeparateLineOk returns a tuple with the PrintSeparateLine field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPostingAttributesType) GetPrintSeparateLineOk() (*bool, bool) {
	if o == nil || IsNil(o.PrintSeparateLine) {
		return nil, false
	}
	return o.PrintSeparateLine, true
}

// HasPrintSeparateLine returns a boolean if a field has been set.
func (o *ConfigPostingAttributesType) HasPrintSeparateLine() bool {
	if o != nil && !IsNil(o.PrintSeparateLine) {
		return true
	}

	return false
}

// SetPrintSeparateLine gets a reference to the given bool and assigns it to the PrintSeparateLine field.
func (o *ConfigPostingAttributesType) SetPrintSeparateLine(v bool) {
	o.PrintSeparateLine = &v
}

// GetSellSeparate returns the SellSeparate field value if set, zero value otherwise.
func (o *ConfigPostingAttributesType) GetSellSeparate() bool {
	if o == nil || IsNil(o.SellSeparate) {
		var ret bool
		return ret
	}
	return *o.SellSeparate
}

// GetSellSeparateOk returns a tuple with the SellSeparate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPostingAttributesType) GetSellSeparateOk() (*bool, bool) {
	if o == nil || IsNil(o.SellSeparate) {
		return nil, false
	}
	return o.SellSeparate, true
}

// HasSellSeparate returns a boolean if a field has been set.
func (o *ConfigPostingAttributesType) HasSellSeparate() bool {
	if o != nil && !IsNil(o.SellSeparate) {
		return true
	}

	return false
}

// SetSellSeparate gets a reference to the given bool and assigns it to the SellSeparate field.
func (o *ConfigPostingAttributesType) SetSellSeparate(v bool) {
	o.SellSeparate = &v
}

// GetStartTime returns the StartTime field value if set, zero value otherwise.
func (o *ConfigPostingAttributesType) GetStartTime() string {
	if o == nil || IsNil(o.StartTime) {
		var ret string
		return ret
	}
	return *o.StartTime
}

// GetStartTimeOk returns a tuple with the StartTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPostingAttributesType) GetStartTimeOk() (*string, bool) {
	if o == nil || IsNil(o.StartTime) {
		return nil, false
	}
	return o.StartTime, true
}

// HasStartTime returns a boolean if a field has been set.
func (o *ConfigPostingAttributesType) HasStartTime() bool {
	if o != nil && !IsNil(o.StartTime) {
		return true
	}

	return false
}

// SetStartTime gets a reference to the given string and assigns it to the StartTime field.
func (o *ConfigPostingAttributesType) SetStartTime(v string) {
	o.StartTime = &v
}

// GetTicket returns the Ticket field value if set, zero value otherwise.
func (o *ConfigPostingAttributesType) GetTicket() bool {
	if o == nil || IsNil(o.Ticket) {
		var ret bool
		return ret
	}
	return *o.Ticket
}

// GetTicketOk returns a tuple with the Ticket field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigPostingAttributesType) GetTicketOk() (*bool, bool) {
	if o == nil || IsNil(o.Ticket) {
		return nil, false
	}
	return o.Ticket, true
}

// HasTicket returns a boolean if a field has been set.
func (o *ConfigPostingAttributesType) HasTicket() bool {
	if o != nil && !IsNil(o.Ticket) {
		return true
	}

	return false
}

// SetTicket gets a reference to the given bool and assigns it to the Ticket field.
func (o *ConfigPostingAttributesType) SetTicket(v bool) {
	o.Ticket = &v
}

func (o ConfigPostingAttributesType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ConfigPostingAttributesType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AddToRate) {
		toSerialize["addToRate"] = o.AddToRate
	}
	if !IsNil(o.CalculatedPrice) {
		toSerialize["calculatedPrice"] = o.CalculatedPrice
	}
	if !IsNil(o.Catering) {
		toSerialize["catering"] = o.Catering
	}
	if !IsNil(o.EndTime) {
		toSerialize["endTime"] = o.EndTime
	}
	if !IsNil(o.ForecastNextDay) {
		toSerialize["forecastNextDay"] = o.ForecastNextDay
	}
	if !IsNil(o.Formula) {
		toSerialize["formula"] = o.Formula
	}
	if !IsNil(o.InventoryItems) {
		toSerialize["inventoryItems"] = o.InventoryItems
	}
	if !IsNil(o.PostNextDay) {
		toSerialize["postNextDay"] = o.PostNextDay
	}
	if !IsNil(o.PostingRhythm) {
		toSerialize["postingRhythm"] = o.PostingRhythm
	}
	if !IsNil(o.PriceCalculationRule) {
		toSerialize["priceCalculationRule"] = o.PriceCalculationRule
	}
	if !IsNil(o.PrintSeparateLine) {
		toSerialize["printSeparateLine"] = o.PrintSeparateLine
	}
	if !IsNil(o.SellSeparate) {
		toSerialize["sellSeparate"] = o.SellSeparate
	}
	if !IsNil(o.StartTime) {
		toSerialize["startTime"] = o.StartTime
	}
	if !IsNil(o.Ticket) {
		toSerialize["ticket"] = o.Ticket
	}
	return toSerialize, nil
}

type NullableConfigPostingAttributesType struct {
	value *ConfigPostingAttributesType
	isSet bool
}

func (v NullableConfigPostingAttributesType) Get() *ConfigPostingAttributesType {
	return v.value
}

func (v *NullableConfigPostingAttributesType) Set(val *ConfigPostingAttributesType) {
	v.value = val
	v.isSet = true
}

func (v NullableConfigPostingAttributesType) IsSet() bool {
	return v.isSet
}

func (v *NullableConfigPostingAttributesType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConfigPostingAttributesType(val *ConfigPostingAttributesType) *NullableConfigPostingAttributesType {
	return &NullableConfigPostingAttributesType{value: val, isSet: true}
}

func (v NullableConfigPostingAttributesType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConfigPostingAttributesType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


