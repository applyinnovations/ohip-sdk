/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the ConfigUpsellRuleType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ConfigUpsellRuleType{}

// ConfigUpsellRuleType This gives detailed information about an upsell rule.
type ConfigUpsellRuleType struct {
	Channels []string `json:"channels,omitempty"`
	// The currency code used in the upsell rule.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// Specifies the number of days in advance of the reservation arrival date that a reservation can be upsold using this rule. So if this field is set to 10, then the reservation must be booked at least 10 days before the arrival date, in order to be eligible for the upsell.
	DaysInAdvance *int32 `json:"daysInAdvance,omitempty"`
	// Description gives the description for the upsell rule.
	Description *string `json:"description,omitempty"`
	// This represents the end date of the date range for which the upsell rule is valid.
	EndDate *string `json:"endDate,omitempty"`
	Formula *FormulaType `json:"formula,omitempty"`
	// The \"from\" room type or room class for the upsell rule. This is the original room type/room class category.
	FromRoomTypeOrFromRoomClass *string `json:"fromRoomTypeOrFromRoomClass,omitempty"`
	// Specifies the hotel code for which the upsell rule is defined.
	HotelId *string `json:"hotelId,omitempty"`
	MarketCodes []string `json:"marketCodes,omitempty"`
	MembershipTypes []string `json:"membershipTypes,omitempty"`
	// This type holds a collection of upsell amounts by occupancy levels.
	OccupancyLevelsType []ConfigOccupancyLevelType `json:"occupancyLevelsType,omitempty"`
	RateCategories []string `json:"rateCategories,omitempty"`
	RateCodes []string `json:"rateCodes,omitempty"`
	ReservationTypes []string `json:"reservationTypes,omitempty"`
	RoundingRule *RoundingRuleType `json:"roundingRule,omitempty"`
	// This represents the begin date of the date range for which the upsell rule is valid.
	StartDate *string `json:"startDate,omitempty"`
	// The \"to\" room type or room class for the upsell rule. This is the room type that the original room type/room class will be upsold to.
	ToRoomTypeOrToRoomClass *string `json:"toRoomTypeOrToRoomClass,omitempty"`
	TransactionCode *TrxInfoType `json:"transactionCode,omitempty"`
	// Signifies the formula to apply to the rule. The formula selected is used to calculate the upsell amount that is offered.
	UpsellAmount *float32 `json:"upsellAmount,omitempty"`
	// Signifies whether upsell rule is by occupancy levels or by amount.
	UpsellByOccupancyLevels *bool `json:"upsellByOccupancyLevels,omitempty"`
	// Signifies whether upsell rule involves upselling from room type to room type or from room class to room class.
	UpsellByRoomType *bool `json:"upsellByRoomType,omitempty"`
	// Specifies the user defined code that identifies a upsell rule.
	UpsellRuleCode *string `json:"upsellRuleCode,omitempty"`
	// Signifies whether the default trx code defined for the property has to be used when posting upsell charges.
	UseDefaultTrxCode *bool `json:"useDefaultTrxCode,omitempty"`
}

// NewConfigUpsellRuleType instantiates a new ConfigUpsellRuleType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConfigUpsellRuleType() *ConfigUpsellRuleType {
	this := ConfigUpsellRuleType{}
	return &this
}

// NewConfigUpsellRuleTypeWithDefaults instantiates a new ConfigUpsellRuleType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConfigUpsellRuleTypeWithDefaults() *ConfigUpsellRuleType {
	this := ConfigUpsellRuleType{}
	return &this
}

// GetChannels returns the Channels field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetChannels() []string {
	if o == nil || IsNil(o.Channels) {
		var ret []string
		return ret
	}
	return o.Channels
}

// GetChannelsOk returns a tuple with the Channels field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetChannelsOk() ([]string, bool) {
	if o == nil || IsNil(o.Channels) {
		return nil, false
	}
	return o.Channels, true
}

// HasChannels returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasChannels() bool {
	if o != nil && !IsNil(o.Channels) {
		return true
	}

	return false
}

// SetChannels gets a reference to the given []string and assigns it to the Channels field.
func (o *ConfigUpsellRuleType) SetChannels(v []string) {
	o.Channels = v
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *ConfigUpsellRuleType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetDaysInAdvance returns the DaysInAdvance field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetDaysInAdvance() int32 {
	if o == nil || IsNil(o.DaysInAdvance) {
		var ret int32
		return ret
	}
	return *o.DaysInAdvance
}

// GetDaysInAdvanceOk returns a tuple with the DaysInAdvance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetDaysInAdvanceOk() (*int32, bool) {
	if o == nil || IsNil(o.DaysInAdvance) {
		return nil, false
	}
	return o.DaysInAdvance, true
}

// HasDaysInAdvance returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasDaysInAdvance() bool {
	if o != nil && !IsNil(o.DaysInAdvance) {
		return true
	}

	return false
}

// SetDaysInAdvance gets a reference to the given int32 and assigns it to the DaysInAdvance field.
func (o *ConfigUpsellRuleType) SetDaysInAdvance(v int32) {
	o.DaysInAdvance = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ConfigUpsellRuleType) SetDescription(v string) {
	o.Description = &v
}

// GetEndDate returns the EndDate field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetEndDate() string {
	if o == nil || IsNil(o.EndDate) {
		var ret string
		return ret
	}
	return *o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndDate) {
		return nil, false
	}
	return o.EndDate, true
}

// HasEndDate returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasEndDate() bool {
	if o != nil && !IsNil(o.EndDate) {
		return true
	}

	return false
}

// SetEndDate gets a reference to the given string and assigns it to the EndDate field.
func (o *ConfigUpsellRuleType) SetEndDate(v string) {
	o.EndDate = &v
}

// GetFormula returns the Formula field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetFormula() FormulaType {
	if o == nil || IsNil(o.Formula) {
		var ret FormulaType
		return ret
	}
	return *o.Formula
}

// GetFormulaOk returns a tuple with the Formula field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetFormulaOk() (*FormulaType, bool) {
	if o == nil || IsNil(o.Formula) {
		return nil, false
	}
	return o.Formula, true
}

// HasFormula returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasFormula() bool {
	if o != nil && !IsNil(o.Formula) {
		return true
	}

	return false
}

// SetFormula gets a reference to the given FormulaType and assigns it to the Formula field.
func (o *ConfigUpsellRuleType) SetFormula(v FormulaType) {
	o.Formula = &v
}

// GetFromRoomTypeOrFromRoomClass returns the FromRoomTypeOrFromRoomClass field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetFromRoomTypeOrFromRoomClass() string {
	if o == nil || IsNil(o.FromRoomTypeOrFromRoomClass) {
		var ret string
		return ret
	}
	return *o.FromRoomTypeOrFromRoomClass
}

// GetFromRoomTypeOrFromRoomClassOk returns a tuple with the FromRoomTypeOrFromRoomClass field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetFromRoomTypeOrFromRoomClassOk() (*string, bool) {
	if o == nil || IsNil(o.FromRoomTypeOrFromRoomClass) {
		return nil, false
	}
	return o.FromRoomTypeOrFromRoomClass, true
}

// HasFromRoomTypeOrFromRoomClass returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasFromRoomTypeOrFromRoomClass() bool {
	if o != nil && !IsNil(o.FromRoomTypeOrFromRoomClass) {
		return true
	}

	return false
}

// SetFromRoomTypeOrFromRoomClass gets a reference to the given string and assigns it to the FromRoomTypeOrFromRoomClass field.
func (o *ConfigUpsellRuleType) SetFromRoomTypeOrFromRoomClass(v string) {
	o.FromRoomTypeOrFromRoomClass = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ConfigUpsellRuleType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetMarketCodes returns the MarketCodes field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetMarketCodes() []string {
	if o == nil || IsNil(o.MarketCodes) {
		var ret []string
		return ret
	}
	return o.MarketCodes
}

// GetMarketCodesOk returns a tuple with the MarketCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetMarketCodesOk() ([]string, bool) {
	if o == nil || IsNil(o.MarketCodes) {
		return nil, false
	}
	return o.MarketCodes, true
}

// HasMarketCodes returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasMarketCodes() bool {
	if o != nil && !IsNil(o.MarketCodes) {
		return true
	}

	return false
}

// SetMarketCodes gets a reference to the given []string and assigns it to the MarketCodes field.
func (o *ConfigUpsellRuleType) SetMarketCodes(v []string) {
	o.MarketCodes = v
}

// GetMembershipTypes returns the MembershipTypes field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetMembershipTypes() []string {
	if o == nil || IsNil(o.MembershipTypes) {
		var ret []string
		return ret
	}
	return o.MembershipTypes
}

// GetMembershipTypesOk returns a tuple with the MembershipTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetMembershipTypesOk() ([]string, bool) {
	if o == nil || IsNil(o.MembershipTypes) {
		return nil, false
	}
	return o.MembershipTypes, true
}

// HasMembershipTypes returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasMembershipTypes() bool {
	if o != nil && !IsNil(o.MembershipTypes) {
		return true
	}

	return false
}

// SetMembershipTypes gets a reference to the given []string and assigns it to the MembershipTypes field.
func (o *ConfigUpsellRuleType) SetMembershipTypes(v []string) {
	o.MembershipTypes = v
}

// GetOccupancyLevelsType returns the OccupancyLevelsType field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetOccupancyLevelsType() []ConfigOccupancyLevelType {
	if o == nil || IsNil(o.OccupancyLevelsType) {
		var ret []ConfigOccupancyLevelType
		return ret
	}
	return o.OccupancyLevelsType
}

// GetOccupancyLevelsTypeOk returns a tuple with the OccupancyLevelsType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetOccupancyLevelsTypeOk() ([]ConfigOccupancyLevelType, bool) {
	if o == nil || IsNil(o.OccupancyLevelsType) {
		return nil, false
	}
	return o.OccupancyLevelsType, true
}

// HasOccupancyLevelsType returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasOccupancyLevelsType() bool {
	if o != nil && !IsNil(o.OccupancyLevelsType) {
		return true
	}

	return false
}

// SetOccupancyLevelsType gets a reference to the given []ConfigOccupancyLevelType and assigns it to the OccupancyLevelsType field.
func (o *ConfigUpsellRuleType) SetOccupancyLevelsType(v []ConfigOccupancyLevelType) {
	o.OccupancyLevelsType = v
}

// GetRateCategories returns the RateCategories field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetRateCategories() []string {
	if o == nil || IsNil(o.RateCategories) {
		var ret []string
		return ret
	}
	return o.RateCategories
}

// GetRateCategoriesOk returns a tuple with the RateCategories field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetRateCategoriesOk() ([]string, bool) {
	if o == nil || IsNil(o.RateCategories) {
		return nil, false
	}
	return o.RateCategories, true
}

// HasRateCategories returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasRateCategories() bool {
	if o != nil && !IsNil(o.RateCategories) {
		return true
	}

	return false
}

// SetRateCategories gets a reference to the given []string and assigns it to the RateCategories field.
func (o *ConfigUpsellRuleType) SetRateCategories(v []string) {
	o.RateCategories = v
}

// GetRateCodes returns the RateCodes field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetRateCodes() []string {
	if o == nil || IsNil(o.RateCodes) {
		var ret []string
		return ret
	}
	return o.RateCodes
}

// GetRateCodesOk returns a tuple with the RateCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetRateCodesOk() ([]string, bool) {
	if o == nil || IsNil(o.RateCodes) {
		return nil, false
	}
	return o.RateCodes, true
}

// HasRateCodes returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasRateCodes() bool {
	if o != nil && !IsNil(o.RateCodes) {
		return true
	}

	return false
}

// SetRateCodes gets a reference to the given []string and assigns it to the RateCodes field.
func (o *ConfigUpsellRuleType) SetRateCodes(v []string) {
	o.RateCodes = v
}

// GetReservationTypes returns the ReservationTypes field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetReservationTypes() []string {
	if o == nil || IsNil(o.ReservationTypes) {
		var ret []string
		return ret
	}
	return o.ReservationTypes
}

// GetReservationTypesOk returns a tuple with the ReservationTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetReservationTypesOk() ([]string, bool) {
	if o == nil || IsNil(o.ReservationTypes) {
		return nil, false
	}
	return o.ReservationTypes, true
}

// HasReservationTypes returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasReservationTypes() bool {
	if o != nil && !IsNil(o.ReservationTypes) {
		return true
	}

	return false
}

// SetReservationTypes gets a reference to the given []string and assigns it to the ReservationTypes field.
func (o *ConfigUpsellRuleType) SetReservationTypes(v []string) {
	o.ReservationTypes = v
}

// GetRoundingRule returns the RoundingRule field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetRoundingRule() RoundingRuleType {
	if o == nil || IsNil(o.RoundingRule) {
		var ret RoundingRuleType
		return ret
	}
	return *o.RoundingRule
}

// GetRoundingRuleOk returns a tuple with the RoundingRule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetRoundingRuleOk() (*RoundingRuleType, bool) {
	if o == nil || IsNil(o.RoundingRule) {
		return nil, false
	}
	return o.RoundingRule, true
}

// HasRoundingRule returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasRoundingRule() bool {
	if o != nil && !IsNil(o.RoundingRule) {
		return true
	}

	return false
}

// SetRoundingRule gets a reference to the given RoundingRuleType and assigns it to the RoundingRule field.
func (o *ConfigUpsellRuleType) SetRoundingRule(v RoundingRuleType) {
	o.RoundingRule = &v
}

// GetStartDate returns the StartDate field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetStartDate() string {
	if o == nil || IsNil(o.StartDate) {
		var ret string
		return ret
	}
	return *o.StartDate
}

// GetStartDateOk returns a tuple with the StartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.StartDate) {
		return nil, false
	}
	return o.StartDate, true
}

// HasStartDate returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasStartDate() bool {
	if o != nil && !IsNil(o.StartDate) {
		return true
	}

	return false
}

// SetStartDate gets a reference to the given string and assigns it to the StartDate field.
func (o *ConfigUpsellRuleType) SetStartDate(v string) {
	o.StartDate = &v
}

// GetToRoomTypeOrToRoomClass returns the ToRoomTypeOrToRoomClass field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetToRoomTypeOrToRoomClass() string {
	if o == nil || IsNil(o.ToRoomTypeOrToRoomClass) {
		var ret string
		return ret
	}
	return *o.ToRoomTypeOrToRoomClass
}

// GetToRoomTypeOrToRoomClassOk returns a tuple with the ToRoomTypeOrToRoomClass field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetToRoomTypeOrToRoomClassOk() (*string, bool) {
	if o == nil || IsNil(o.ToRoomTypeOrToRoomClass) {
		return nil, false
	}
	return o.ToRoomTypeOrToRoomClass, true
}

// HasToRoomTypeOrToRoomClass returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasToRoomTypeOrToRoomClass() bool {
	if o != nil && !IsNil(o.ToRoomTypeOrToRoomClass) {
		return true
	}

	return false
}

// SetToRoomTypeOrToRoomClass gets a reference to the given string and assigns it to the ToRoomTypeOrToRoomClass field.
func (o *ConfigUpsellRuleType) SetToRoomTypeOrToRoomClass(v string) {
	o.ToRoomTypeOrToRoomClass = &v
}

// GetTransactionCode returns the TransactionCode field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetTransactionCode() TrxInfoType {
	if o == nil || IsNil(o.TransactionCode) {
		var ret TrxInfoType
		return ret
	}
	return *o.TransactionCode
}

// GetTransactionCodeOk returns a tuple with the TransactionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetTransactionCodeOk() (*TrxInfoType, bool) {
	if o == nil || IsNil(o.TransactionCode) {
		return nil, false
	}
	return o.TransactionCode, true
}

// HasTransactionCode returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasTransactionCode() bool {
	if o != nil && !IsNil(o.TransactionCode) {
		return true
	}

	return false
}

// SetTransactionCode gets a reference to the given TrxInfoType and assigns it to the TransactionCode field.
func (o *ConfigUpsellRuleType) SetTransactionCode(v TrxInfoType) {
	o.TransactionCode = &v
}

// GetUpsellAmount returns the UpsellAmount field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetUpsellAmount() float32 {
	if o == nil || IsNil(o.UpsellAmount) {
		var ret float32
		return ret
	}
	return *o.UpsellAmount
}

// GetUpsellAmountOk returns a tuple with the UpsellAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetUpsellAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.UpsellAmount) {
		return nil, false
	}
	return o.UpsellAmount, true
}

// HasUpsellAmount returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasUpsellAmount() bool {
	if o != nil && !IsNil(o.UpsellAmount) {
		return true
	}

	return false
}

// SetUpsellAmount gets a reference to the given float32 and assigns it to the UpsellAmount field.
func (o *ConfigUpsellRuleType) SetUpsellAmount(v float32) {
	o.UpsellAmount = &v
}

// GetUpsellByOccupancyLevels returns the UpsellByOccupancyLevels field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetUpsellByOccupancyLevels() bool {
	if o == nil || IsNil(o.UpsellByOccupancyLevels) {
		var ret bool
		return ret
	}
	return *o.UpsellByOccupancyLevels
}

// GetUpsellByOccupancyLevelsOk returns a tuple with the UpsellByOccupancyLevels field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetUpsellByOccupancyLevelsOk() (*bool, bool) {
	if o == nil || IsNil(o.UpsellByOccupancyLevels) {
		return nil, false
	}
	return o.UpsellByOccupancyLevels, true
}

// HasUpsellByOccupancyLevels returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasUpsellByOccupancyLevels() bool {
	if o != nil && !IsNil(o.UpsellByOccupancyLevels) {
		return true
	}

	return false
}

// SetUpsellByOccupancyLevels gets a reference to the given bool and assigns it to the UpsellByOccupancyLevels field.
func (o *ConfigUpsellRuleType) SetUpsellByOccupancyLevels(v bool) {
	o.UpsellByOccupancyLevels = &v
}

// GetUpsellByRoomType returns the UpsellByRoomType field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetUpsellByRoomType() bool {
	if o == nil || IsNil(o.UpsellByRoomType) {
		var ret bool
		return ret
	}
	return *o.UpsellByRoomType
}

// GetUpsellByRoomTypeOk returns a tuple with the UpsellByRoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetUpsellByRoomTypeOk() (*bool, bool) {
	if o == nil || IsNil(o.UpsellByRoomType) {
		return nil, false
	}
	return o.UpsellByRoomType, true
}

// HasUpsellByRoomType returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasUpsellByRoomType() bool {
	if o != nil && !IsNil(o.UpsellByRoomType) {
		return true
	}

	return false
}

// SetUpsellByRoomType gets a reference to the given bool and assigns it to the UpsellByRoomType field.
func (o *ConfigUpsellRuleType) SetUpsellByRoomType(v bool) {
	o.UpsellByRoomType = &v
}

// GetUpsellRuleCode returns the UpsellRuleCode field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetUpsellRuleCode() string {
	if o == nil || IsNil(o.UpsellRuleCode) {
		var ret string
		return ret
	}
	return *o.UpsellRuleCode
}

// GetUpsellRuleCodeOk returns a tuple with the UpsellRuleCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetUpsellRuleCodeOk() (*string, bool) {
	if o == nil || IsNil(o.UpsellRuleCode) {
		return nil, false
	}
	return o.UpsellRuleCode, true
}

// HasUpsellRuleCode returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasUpsellRuleCode() bool {
	if o != nil && !IsNil(o.UpsellRuleCode) {
		return true
	}

	return false
}

// SetUpsellRuleCode gets a reference to the given string and assigns it to the UpsellRuleCode field.
func (o *ConfigUpsellRuleType) SetUpsellRuleCode(v string) {
	o.UpsellRuleCode = &v
}

// GetUseDefaultTrxCode returns the UseDefaultTrxCode field value if set, zero value otherwise.
func (o *ConfigUpsellRuleType) GetUseDefaultTrxCode() bool {
	if o == nil || IsNil(o.UseDefaultTrxCode) {
		var ret bool
		return ret
	}
	return *o.UseDefaultTrxCode
}

// GetUseDefaultTrxCodeOk returns a tuple with the UseDefaultTrxCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigUpsellRuleType) GetUseDefaultTrxCodeOk() (*bool, bool) {
	if o == nil || IsNil(o.UseDefaultTrxCode) {
		return nil, false
	}
	return o.UseDefaultTrxCode, true
}

// HasUseDefaultTrxCode returns a boolean if a field has been set.
func (o *ConfigUpsellRuleType) HasUseDefaultTrxCode() bool {
	if o != nil && !IsNil(o.UseDefaultTrxCode) {
		return true
	}

	return false
}

// SetUseDefaultTrxCode gets a reference to the given bool and assigns it to the UseDefaultTrxCode field.
func (o *ConfigUpsellRuleType) SetUseDefaultTrxCode(v bool) {
	o.UseDefaultTrxCode = &v
}

func (o ConfigUpsellRuleType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ConfigUpsellRuleType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Channels) {
		toSerialize["channels"] = o.Channels
	}
	if !IsNil(o.CurrencyCode) {
		toSerialize["currencyCode"] = o.CurrencyCode
	}
	if !IsNil(o.DaysInAdvance) {
		toSerialize["daysInAdvance"] = o.DaysInAdvance
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.EndDate) {
		toSerialize["endDate"] = o.EndDate
	}
	if !IsNil(o.Formula) {
		toSerialize["formula"] = o.Formula
	}
	if !IsNil(o.FromRoomTypeOrFromRoomClass) {
		toSerialize["fromRoomTypeOrFromRoomClass"] = o.FromRoomTypeOrFromRoomClass
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.MarketCodes) {
		toSerialize["marketCodes"] = o.MarketCodes
	}
	if !IsNil(o.MembershipTypes) {
		toSerialize["membershipTypes"] = o.MembershipTypes
	}
	if !IsNil(o.OccupancyLevelsType) {
		toSerialize["occupancyLevelsType"] = o.OccupancyLevelsType
	}
	if !IsNil(o.RateCategories) {
		toSerialize["rateCategories"] = o.RateCategories
	}
	if !IsNil(o.RateCodes) {
		toSerialize["rateCodes"] = o.RateCodes
	}
	if !IsNil(o.ReservationTypes) {
		toSerialize["reservationTypes"] = o.ReservationTypes
	}
	if !IsNil(o.RoundingRule) {
		toSerialize["roundingRule"] = o.RoundingRule
	}
	if !IsNil(o.StartDate) {
		toSerialize["startDate"] = o.StartDate
	}
	if !IsNil(o.ToRoomTypeOrToRoomClass) {
		toSerialize["toRoomTypeOrToRoomClass"] = o.ToRoomTypeOrToRoomClass
	}
	if !IsNil(o.TransactionCode) {
		toSerialize["transactionCode"] = o.TransactionCode
	}
	if !IsNil(o.UpsellAmount) {
		toSerialize["upsellAmount"] = o.UpsellAmount
	}
	if !IsNil(o.UpsellByOccupancyLevels) {
		toSerialize["upsellByOccupancyLevels"] = o.UpsellByOccupancyLevels
	}
	if !IsNil(o.UpsellByRoomType) {
		toSerialize["upsellByRoomType"] = o.UpsellByRoomType
	}
	if !IsNil(o.UpsellRuleCode) {
		toSerialize["upsellRuleCode"] = o.UpsellRuleCode
	}
	if !IsNil(o.UseDefaultTrxCode) {
		toSerialize["useDefaultTrxCode"] = o.UseDefaultTrxCode
	}
	return toSerialize, nil
}

type NullableConfigUpsellRuleType struct {
	value *ConfigUpsellRuleType
	isSet bool
}

func (v NullableConfigUpsellRuleType) Get() *ConfigUpsellRuleType {
	return v.value
}

func (v *NullableConfigUpsellRuleType) Set(val *ConfigUpsellRuleType) {
	v.value = val
	v.isSet = true
}

func (v NullableConfigUpsellRuleType) IsSet() bool {
	return v.isSet
}

func (v *NullableConfigUpsellRuleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConfigUpsellRuleType(val *ConfigUpsellRuleType) *NullableConfigUpsellRuleType {
	return &NullableConfigUpsellRuleType{value: val, isSet: true}
}

func (v NullableConfigUpsellRuleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConfigUpsellRuleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


