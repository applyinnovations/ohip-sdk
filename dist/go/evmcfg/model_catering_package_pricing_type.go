/*
OPERA Cloud Event Configuration API

This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evmcfg

import (
	"encoding/json"
)

// checks if the CateringPackagePricingType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CateringPackagePricingType{}

// CateringPackagePricingType Type used for managing Pricing Details associated with a particular Catering Package.
type CateringPackagePricingType struct {
	BlockDate *DateTimeSpanType `json:"blockDate,omitempty"`
	// Collection of configured Booking Types for the package property.
	BookingType *string `json:"bookingType,omitempty"`
	// Title of the Catering Package Event Note.
	Description *string `json:"description,omitempty"`
	// Defines if Flat Rate is applicable.
	FlatRate *bool `json:"flatRate,omitempty"`
	Id *UniqueIDType `json:"id,omitempty"`
	// Market Code associated with the Price Details.
	MarketCode *string `json:"marketCode,omitempty"`
	// Maximum Attendees.
	MaxAttendees *int32 `json:"maxAttendees,omitempty"`
	// Minimum Attendees.
	MinAttendees *int32 `json:"minAttendees,omitempty"`
	// Price Code.
	PriceCode *string `json:"priceCode,omitempty"`
	// Collection of multiple Revenue Details associated with a particular Catering Package Price Code.
	RevenueDetails []CateringPackageRevenueType `json:"revenueDetails,omitempty"`
	SellDate *DateTimeSpanType `json:"sellDate,omitempty"`
	TotalPrice *CurrencyAmountType `json:"totalPrice,omitempty"`
	// Defines if web booking is allowed.
	WebBookable *bool `json:"webBookable,omitempty"`
}

// NewCateringPackagePricingType instantiates a new CateringPackagePricingType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCateringPackagePricingType() *CateringPackagePricingType {
	this := CateringPackagePricingType{}
	return &this
}

// NewCateringPackagePricingTypeWithDefaults instantiates a new CateringPackagePricingType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCateringPackagePricingTypeWithDefaults() *CateringPackagePricingType {
	this := CateringPackagePricingType{}
	return &this
}

// GetBlockDate returns the BlockDate field value if set, zero value otherwise.
func (o *CateringPackagePricingType) GetBlockDate() DateTimeSpanType {
	if o == nil || IsNil(o.BlockDate) {
		var ret DateTimeSpanType
		return ret
	}
	return *o.BlockDate
}

// GetBlockDateOk returns a tuple with the BlockDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackagePricingType) GetBlockDateOk() (*DateTimeSpanType, bool) {
	if o == nil || IsNil(o.BlockDate) {
		return nil, false
	}
	return o.BlockDate, true
}

// HasBlockDate returns a boolean if a field has been set.
func (o *CateringPackagePricingType) HasBlockDate() bool {
	if o != nil && !IsNil(o.BlockDate) {
		return true
	}

	return false
}

// SetBlockDate gets a reference to the given DateTimeSpanType and assigns it to the BlockDate field.
func (o *CateringPackagePricingType) SetBlockDate(v DateTimeSpanType) {
	o.BlockDate = &v
}

// GetBookingType returns the BookingType field value if set, zero value otherwise.
func (o *CateringPackagePricingType) GetBookingType() string {
	if o == nil || IsNil(o.BookingType) {
		var ret string
		return ret
	}
	return *o.BookingType
}

// GetBookingTypeOk returns a tuple with the BookingType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackagePricingType) GetBookingTypeOk() (*string, bool) {
	if o == nil || IsNil(o.BookingType) {
		return nil, false
	}
	return o.BookingType, true
}

// HasBookingType returns a boolean if a field has been set.
func (o *CateringPackagePricingType) HasBookingType() bool {
	if o != nil && !IsNil(o.BookingType) {
		return true
	}

	return false
}

// SetBookingType gets a reference to the given string and assigns it to the BookingType field.
func (o *CateringPackagePricingType) SetBookingType(v string) {
	o.BookingType = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *CateringPackagePricingType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackagePricingType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *CateringPackagePricingType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *CateringPackagePricingType) SetDescription(v string) {
	o.Description = &v
}

// GetFlatRate returns the FlatRate field value if set, zero value otherwise.
func (o *CateringPackagePricingType) GetFlatRate() bool {
	if o == nil || IsNil(o.FlatRate) {
		var ret bool
		return ret
	}
	return *o.FlatRate
}

// GetFlatRateOk returns a tuple with the FlatRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackagePricingType) GetFlatRateOk() (*bool, bool) {
	if o == nil || IsNil(o.FlatRate) {
		return nil, false
	}
	return o.FlatRate, true
}

// HasFlatRate returns a boolean if a field has been set.
func (o *CateringPackagePricingType) HasFlatRate() bool {
	if o != nil && !IsNil(o.FlatRate) {
		return true
	}

	return false
}

// SetFlatRate gets a reference to the given bool and assigns it to the FlatRate field.
func (o *CateringPackagePricingType) SetFlatRate(v bool) {
	o.FlatRate = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *CateringPackagePricingType) GetId() UniqueIDType {
	if o == nil || IsNil(o.Id) {
		var ret UniqueIDType
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackagePricingType) GetIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *CateringPackagePricingType) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given UniqueIDType and assigns it to the Id field.
func (o *CateringPackagePricingType) SetId(v UniqueIDType) {
	o.Id = &v
}

// GetMarketCode returns the MarketCode field value if set, zero value otherwise.
func (o *CateringPackagePricingType) GetMarketCode() string {
	if o == nil || IsNil(o.MarketCode) {
		var ret string
		return ret
	}
	return *o.MarketCode
}

// GetMarketCodeOk returns a tuple with the MarketCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackagePricingType) GetMarketCodeOk() (*string, bool) {
	if o == nil || IsNil(o.MarketCode) {
		return nil, false
	}
	return o.MarketCode, true
}

// HasMarketCode returns a boolean if a field has been set.
func (o *CateringPackagePricingType) HasMarketCode() bool {
	if o != nil && !IsNil(o.MarketCode) {
		return true
	}

	return false
}

// SetMarketCode gets a reference to the given string and assigns it to the MarketCode field.
func (o *CateringPackagePricingType) SetMarketCode(v string) {
	o.MarketCode = &v
}

// GetMaxAttendees returns the MaxAttendees field value if set, zero value otherwise.
func (o *CateringPackagePricingType) GetMaxAttendees() int32 {
	if o == nil || IsNil(o.MaxAttendees) {
		var ret int32
		return ret
	}
	return *o.MaxAttendees
}

// GetMaxAttendeesOk returns a tuple with the MaxAttendees field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackagePricingType) GetMaxAttendeesOk() (*int32, bool) {
	if o == nil || IsNil(o.MaxAttendees) {
		return nil, false
	}
	return o.MaxAttendees, true
}

// HasMaxAttendees returns a boolean if a field has been set.
func (o *CateringPackagePricingType) HasMaxAttendees() bool {
	if o != nil && !IsNil(o.MaxAttendees) {
		return true
	}

	return false
}

// SetMaxAttendees gets a reference to the given int32 and assigns it to the MaxAttendees field.
func (o *CateringPackagePricingType) SetMaxAttendees(v int32) {
	o.MaxAttendees = &v
}

// GetMinAttendees returns the MinAttendees field value if set, zero value otherwise.
func (o *CateringPackagePricingType) GetMinAttendees() int32 {
	if o == nil || IsNil(o.MinAttendees) {
		var ret int32
		return ret
	}
	return *o.MinAttendees
}

// GetMinAttendeesOk returns a tuple with the MinAttendees field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackagePricingType) GetMinAttendeesOk() (*int32, bool) {
	if o == nil || IsNil(o.MinAttendees) {
		return nil, false
	}
	return o.MinAttendees, true
}

// HasMinAttendees returns a boolean if a field has been set.
func (o *CateringPackagePricingType) HasMinAttendees() bool {
	if o != nil && !IsNil(o.MinAttendees) {
		return true
	}

	return false
}

// SetMinAttendees gets a reference to the given int32 and assigns it to the MinAttendees field.
func (o *CateringPackagePricingType) SetMinAttendees(v int32) {
	o.MinAttendees = &v
}

// GetPriceCode returns the PriceCode field value if set, zero value otherwise.
func (o *CateringPackagePricingType) GetPriceCode() string {
	if o == nil || IsNil(o.PriceCode) {
		var ret string
		return ret
	}
	return *o.PriceCode
}

// GetPriceCodeOk returns a tuple with the PriceCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackagePricingType) GetPriceCodeOk() (*string, bool) {
	if o == nil || IsNil(o.PriceCode) {
		return nil, false
	}
	return o.PriceCode, true
}

// HasPriceCode returns a boolean if a field has been set.
func (o *CateringPackagePricingType) HasPriceCode() bool {
	if o != nil && !IsNil(o.PriceCode) {
		return true
	}

	return false
}

// SetPriceCode gets a reference to the given string and assigns it to the PriceCode field.
func (o *CateringPackagePricingType) SetPriceCode(v string) {
	o.PriceCode = &v
}

// GetRevenueDetails returns the RevenueDetails field value if set, zero value otherwise.
func (o *CateringPackagePricingType) GetRevenueDetails() []CateringPackageRevenueType {
	if o == nil || IsNil(o.RevenueDetails) {
		var ret []CateringPackageRevenueType
		return ret
	}
	return o.RevenueDetails
}

// GetRevenueDetailsOk returns a tuple with the RevenueDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackagePricingType) GetRevenueDetailsOk() ([]CateringPackageRevenueType, bool) {
	if o == nil || IsNil(o.RevenueDetails) {
		return nil, false
	}
	return o.RevenueDetails, true
}

// HasRevenueDetails returns a boolean if a field has been set.
func (o *CateringPackagePricingType) HasRevenueDetails() bool {
	if o != nil && !IsNil(o.RevenueDetails) {
		return true
	}

	return false
}

// SetRevenueDetails gets a reference to the given []CateringPackageRevenueType and assigns it to the RevenueDetails field.
func (o *CateringPackagePricingType) SetRevenueDetails(v []CateringPackageRevenueType) {
	o.RevenueDetails = v
}

// GetSellDate returns the SellDate field value if set, zero value otherwise.
func (o *CateringPackagePricingType) GetSellDate() DateTimeSpanType {
	if o == nil || IsNil(o.SellDate) {
		var ret DateTimeSpanType
		return ret
	}
	return *o.SellDate
}

// GetSellDateOk returns a tuple with the SellDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackagePricingType) GetSellDateOk() (*DateTimeSpanType, bool) {
	if o == nil || IsNil(o.SellDate) {
		return nil, false
	}
	return o.SellDate, true
}

// HasSellDate returns a boolean if a field has been set.
func (o *CateringPackagePricingType) HasSellDate() bool {
	if o != nil && !IsNil(o.SellDate) {
		return true
	}

	return false
}

// SetSellDate gets a reference to the given DateTimeSpanType and assigns it to the SellDate field.
func (o *CateringPackagePricingType) SetSellDate(v DateTimeSpanType) {
	o.SellDate = &v
}

// GetTotalPrice returns the TotalPrice field value if set, zero value otherwise.
func (o *CateringPackagePricingType) GetTotalPrice() CurrencyAmountType {
	if o == nil || IsNil(o.TotalPrice) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.TotalPrice
}

// GetTotalPriceOk returns a tuple with the TotalPrice field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackagePricingType) GetTotalPriceOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.TotalPrice) {
		return nil, false
	}
	return o.TotalPrice, true
}

// HasTotalPrice returns a boolean if a field has been set.
func (o *CateringPackagePricingType) HasTotalPrice() bool {
	if o != nil && !IsNil(o.TotalPrice) {
		return true
	}

	return false
}

// SetTotalPrice gets a reference to the given CurrencyAmountType and assigns it to the TotalPrice field.
func (o *CateringPackagePricingType) SetTotalPrice(v CurrencyAmountType) {
	o.TotalPrice = &v
}

// GetWebBookable returns the WebBookable field value if set, zero value otherwise.
func (o *CateringPackagePricingType) GetWebBookable() bool {
	if o == nil || IsNil(o.WebBookable) {
		var ret bool
		return ret
	}
	return *o.WebBookable
}

// GetWebBookableOk returns a tuple with the WebBookable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackagePricingType) GetWebBookableOk() (*bool, bool) {
	if o == nil || IsNil(o.WebBookable) {
		return nil, false
	}
	return o.WebBookable, true
}

// HasWebBookable returns a boolean if a field has been set.
func (o *CateringPackagePricingType) HasWebBookable() bool {
	if o != nil && !IsNil(o.WebBookable) {
		return true
	}

	return false
}

// SetWebBookable gets a reference to the given bool and assigns it to the WebBookable field.
func (o *CateringPackagePricingType) SetWebBookable(v bool) {
	o.WebBookable = &v
}

func (o CateringPackagePricingType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CateringPackagePricingType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockDate) {
		toSerialize["blockDate"] = o.BlockDate
	}
	if !IsNil(o.BookingType) {
		toSerialize["bookingType"] = o.BookingType
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.FlatRate) {
		toSerialize["flatRate"] = o.FlatRate
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.MarketCode) {
		toSerialize["marketCode"] = o.MarketCode
	}
	if !IsNil(o.MaxAttendees) {
		toSerialize["maxAttendees"] = o.MaxAttendees
	}
	if !IsNil(o.MinAttendees) {
		toSerialize["minAttendees"] = o.MinAttendees
	}
	if !IsNil(o.PriceCode) {
		toSerialize["priceCode"] = o.PriceCode
	}
	if !IsNil(o.RevenueDetails) {
		toSerialize["revenueDetails"] = o.RevenueDetails
	}
	if !IsNil(o.SellDate) {
		toSerialize["sellDate"] = o.SellDate
	}
	if !IsNil(o.TotalPrice) {
		toSerialize["totalPrice"] = o.TotalPrice
	}
	if !IsNil(o.WebBookable) {
		toSerialize["webBookable"] = o.WebBookable
	}
	return toSerialize, nil
}

type NullableCateringPackagePricingType struct {
	value *CateringPackagePricingType
	isSet bool
}

func (v NullableCateringPackagePricingType) Get() *CateringPackagePricingType {
	return v.value
}

func (v *NullableCateringPackagePricingType) Set(val *CateringPackagePricingType) {
	v.value = val
	v.isSet = true
}

func (v NullableCateringPackagePricingType) IsSet() bool {
	return v.isSet
}

func (v *NullableCateringPackagePricingType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCateringPackagePricingType(val *CateringPackagePricingType) *NullableCateringPackagePricingType {
	return &NullableCateringPackagePricingType{value: val, isSet: true}
}

func (v NullableCateringPackagePricingType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCateringPackagePricingType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


