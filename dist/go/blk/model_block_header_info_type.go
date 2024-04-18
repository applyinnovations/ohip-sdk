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

// checks if the BlockHeaderInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockHeaderInfoType{}

// BlockHeaderInfoType Holds block header details.
type BlockHeaderInfoType struct {
	// Unique code for the block.
	BlockCode *string `json:"blockCode,omitempty"`
	BlockId *BlockId `json:"blockId,omitempty"`
	// Block description.
	BlockName *string `json:"blockName,omitempty"`
	BlockStatus *CodeDescriptionType `json:"blockStatus,omitempty"`
	// Default currency code of the block.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// End date of the block.
	EndDate *string `json:"endDate,omitempty"`
	// Guarantee Code for the block.
	GuaranteeCode *string `json:"guaranteeCode,omitempty"`
	// Hotel code to which the block belongs to.
	HotelId *string `json:"hotelId,omitempty"`
	// Name of the hotel.
	HotelName *string `json:"hotelName,omitempty"`
	InventoryControl *BlockInventoryControlType `json:"inventoryControl,omitempty"`
	// Market code for the block.
	MarketCode *string `json:"marketCode,omitempty"`
	// Primary rate code of the block.
	RateCode *string `json:"rateCode,omitempty"`
	// Shoulder end date of the block, applicable if the block is elastic.
	ShoulderEndDate *string `json:"shoulderEndDate,omitempty"`
	// Shoulder start date of the block, applicable if the block is elastic.
	ShoulderStartDate *string `json:"shoulderStartDate,omitempty"`
	SourceOfSale *BlockSourceOfSaleType `json:"sourceOfSale,omitempty"`
	// Start date of the block.
	StartDate *string `json:"startDate,omitempty"`
	// Indicates whether rates are suppressed.
	SuppressRate *bool `json:"suppressRate,omitempty"`
}

// NewBlockHeaderInfoType instantiates a new BlockHeaderInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockHeaderInfoType() *BlockHeaderInfoType {
	this := BlockHeaderInfoType{}
	return &this
}

// NewBlockHeaderInfoTypeWithDefaults instantiates a new BlockHeaderInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockHeaderInfoTypeWithDefaults() *BlockHeaderInfoType {
	this := BlockHeaderInfoType{}
	return &this
}

// GetBlockCode returns the BlockCode field value if set, zero value otherwise.
func (o *BlockHeaderInfoType) GetBlockCode() string {
	if o == nil || IsNil(o.BlockCode) {
		var ret string
		return ret
	}
	return *o.BlockCode
}

// GetBlockCodeOk returns a tuple with the BlockCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockHeaderInfoType) GetBlockCodeOk() (*string, bool) {
	if o == nil || IsNil(o.BlockCode) {
		return nil, false
	}
	return o.BlockCode, true
}

// HasBlockCode returns a boolean if a field has been set.
func (o *BlockHeaderInfoType) HasBlockCode() bool {
	if o != nil && !IsNil(o.BlockCode) {
		return true
	}

	return false
}

// SetBlockCode gets a reference to the given string and assigns it to the BlockCode field.
func (o *BlockHeaderInfoType) SetBlockCode(v string) {
	o.BlockCode = &v
}

// GetBlockId returns the BlockId field value if set, zero value otherwise.
func (o *BlockHeaderInfoType) GetBlockId() BlockId {
	if o == nil || IsNil(o.BlockId) {
		var ret BlockId
		return ret
	}
	return *o.BlockId
}

// GetBlockIdOk returns a tuple with the BlockId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockHeaderInfoType) GetBlockIdOk() (*BlockId, bool) {
	if o == nil || IsNil(o.BlockId) {
		return nil, false
	}
	return o.BlockId, true
}

// HasBlockId returns a boolean if a field has been set.
func (o *BlockHeaderInfoType) HasBlockId() bool {
	if o != nil && !IsNil(o.BlockId) {
		return true
	}

	return false
}

// SetBlockId gets a reference to the given BlockId and assigns it to the BlockId field.
func (o *BlockHeaderInfoType) SetBlockId(v BlockId) {
	o.BlockId = &v
}

// GetBlockName returns the BlockName field value if set, zero value otherwise.
func (o *BlockHeaderInfoType) GetBlockName() string {
	if o == nil || IsNil(o.BlockName) {
		var ret string
		return ret
	}
	return *o.BlockName
}

// GetBlockNameOk returns a tuple with the BlockName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockHeaderInfoType) GetBlockNameOk() (*string, bool) {
	if o == nil || IsNil(o.BlockName) {
		return nil, false
	}
	return o.BlockName, true
}

// HasBlockName returns a boolean if a field has been set.
func (o *BlockHeaderInfoType) HasBlockName() bool {
	if o != nil && !IsNil(o.BlockName) {
		return true
	}

	return false
}

// SetBlockName gets a reference to the given string and assigns it to the BlockName field.
func (o *BlockHeaderInfoType) SetBlockName(v string) {
	o.BlockName = &v
}

// GetBlockStatus returns the BlockStatus field value if set, zero value otherwise.
func (o *BlockHeaderInfoType) GetBlockStatus() CodeDescriptionType {
	if o == nil || IsNil(o.BlockStatus) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.BlockStatus
}

// GetBlockStatusOk returns a tuple with the BlockStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockHeaderInfoType) GetBlockStatusOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.BlockStatus) {
		return nil, false
	}
	return o.BlockStatus, true
}

// HasBlockStatus returns a boolean if a field has been set.
func (o *BlockHeaderInfoType) HasBlockStatus() bool {
	if o != nil && !IsNil(o.BlockStatus) {
		return true
	}

	return false
}

// SetBlockStatus gets a reference to the given CodeDescriptionType and assigns it to the BlockStatus field.
func (o *BlockHeaderInfoType) SetBlockStatus(v CodeDescriptionType) {
	o.BlockStatus = &v
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *BlockHeaderInfoType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockHeaderInfoType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *BlockHeaderInfoType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *BlockHeaderInfoType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetEndDate returns the EndDate field value if set, zero value otherwise.
func (o *BlockHeaderInfoType) GetEndDate() string {
	if o == nil || IsNil(o.EndDate) {
		var ret string
		return ret
	}
	return *o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockHeaderInfoType) GetEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndDate) {
		return nil, false
	}
	return o.EndDate, true
}

// HasEndDate returns a boolean if a field has been set.
func (o *BlockHeaderInfoType) HasEndDate() bool {
	if o != nil && !IsNil(o.EndDate) {
		return true
	}

	return false
}

// SetEndDate gets a reference to the given string and assigns it to the EndDate field.
func (o *BlockHeaderInfoType) SetEndDate(v string) {
	o.EndDate = &v
}

// GetGuaranteeCode returns the GuaranteeCode field value if set, zero value otherwise.
func (o *BlockHeaderInfoType) GetGuaranteeCode() string {
	if o == nil || IsNil(o.GuaranteeCode) {
		var ret string
		return ret
	}
	return *o.GuaranteeCode
}

// GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockHeaderInfoType) GetGuaranteeCodeOk() (*string, bool) {
	if o == nil || IsNil(o.GuaranteeCode) {
		return nil, false
	}
	return o.GuaranteeCode, true
}

// HasGuaranteeCode returns a boolean if a field has been set.
func (o *BlockHeaderInfoType) HasGuaranteeCode() bool {
	if o != nil && !IsNil(o.GuaranteeCode) {
		return true
	}

	return false
}

// SetGuaranteeCode gets a reference to the given string and assigns it to the GuaranteeCode field.
func (o *BlockHeaderInfoType) SetGuaranteeCode(v string) {
	o.GuaranteeCode = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *BlockHeaderInfoType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockHeaderInfoType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *BlockHeaderInfoType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *BlockHeaderInfoType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetHotelName returns the HotelName field value if set, zero value otherwise.
func (o *BlockHeaderInfoType) GetHotelName() string {
	if o == nil || IsNil(o.HotelName) {
		var ret string
		return ret
	}
	return *o.HotelName
}

// GetHotelNameOk returns a tuple with the HotelName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockHeaderInfoType) GetHotelNameOk() (*string, bool) {
	if o == nil || IsNil(o.HotelName) {
		return nil, false
	}
	return o.HotelName, true
}

// HasHotelName returns a boolean if a field has been set.
func (o *BlockHeaderInfoType) HasHotelName() bool {
	if o != nil && !IsNil(o.HotelName) {
		return true
	}

	return false
}

// SetHotelName gets a reference to the given string and assigns it to the HotelName field.
func (o *BlockHeaderInfoType) SetHotelName(v string) {
	o.HotelName = &v
}

// GetInventoryControl returns the InventoryControl field value if set, zero value otherwise.
func (o *BlockHeaderInfoType) GetInventoryControl() BlockInventoryControlType {
	if o == nil || IsNil(o.InventoryControl) {
		var ret BlockInventoryControlType
		return ret
	}
	return *o.InventoryControl
}

// GetInventoryControlOk returns a tuple with the InventoryControl field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockHeaderInfoType) GetInventoryControlOk() (*BlockInventoryControlType, bool) {
	if o == nil || IsNil(o.InventoryControl) {
		return nil, false
	}
	return o.InventoryControl, true
}

// HasInventoryControl returns a boolean if a field has been set.
func (o *BlockHeaderInfoType) HasInventoryControl() bool {
	if o != nil && !IsNil(o.InventoryControl) {
		return true
	}

	return false
}

// SetInventoryControl gets a reference to the given BlockInventoryControlType and assigns it to the InventoryControl field.
func (o *BlockHeaderInfoType) SetInventoryControl(v BlockInventoryControlType) {
	o.InventoryControl = &v
}

// GetMarketCode returns the MarketCode field value if set, zero value otherwise.
func (o *BlockHeaderInfoType) GetMarketCode() string {
	if o == nil || IsNil(o.MarketCode) {
		var ret string
		return ret
	}
	return *o.MarketCode
}

// GetMarketCodeOk returns a tuple with the MarketCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockHeaderInfoType) GetMarketCodeOk() (*string, bool) {
	if o == nil || IsNil(o.MarketCode) {
		return nil, false
	}
	return o.MarketCode, true
}

// HasMarketCode returns a boolean if a field has been set.
func (o *BlockHeaderInfoType) HasMarketCode() bool {
	if o != nil && !IsNil(o.MarketCode) {
		return true
	}

	return false
}

// SetMarketCode gets a reference to the given string and assigns it to the MarketCode field.
func (o *BlockHeaderInfoType) SetMarketCode(v string) {
	o.MarketCode = &v
}

// GetRateCode returns the RateCode field value if set, zero value otherwise.
func (o *BlockHeaderInfoType) GetRateCode() string {
	if o == nil || IsNil(o.RateCode) {
		var ret string
		return ret
	}
	return *o.RateCode
}

// GetRateCodeOk returns a tuple with the RateCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockHeaderInfoType) GetRateCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RateCode) {
		return nil, false
	}
	return o.RateCode, true
}

// HasRateCode returns a boolean if a field has been set.
func (o *BlockHeaderInfoType) HasRateCode() bool {
	if o != nil && !IsNil(o.RateCode) {
		return true
	}

	return false
}

// SetRateCode gets a reference to the given string and assigns it to the RateCode field.
func (o *BlockHeaderInfoType) SetRateCode(v string) {
	o.RateCode = &v
}

// GetShoulderEndDate returns the ShoulderEndDate field value if set, zero value otherwise.
func (o *BlockHeaderInfoType) GetShoulderEndDate() string {
	if o == nil || IsNil(o.ShoulderEndDate) {
		var ret string
		return ret
	}
	return *o.ShoulderEndDate
}

// GetShoulderEndDateOk returns a tuple with the ShoulderEndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockHeaderInfoType) GetShoulderEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.ShoulderEndDate) {
		return nil, false
	}
	return o.ShoulderEndDate, true
}

// HasShoulderEndDate returns a boolean if a field has been set.
func (o *BlockHeaderInfoType) HasShoulderEndDate() bool {
	if o != nil && !IsNil(o.ShoulderEndDate) {
		return true
	}

	return false
}

// SetShoulderEndDate gets a reference to the given string and assigns it to the ShoulderEndDate field.
func (o *BlockHeaderInfoType) SetShoulderEndDate(v string) {
	o.ShoulderEndDate = &v
}

// GetShoulderStartDate returns the ShoulderStartDate field value if set, zero value otherwise.
func (o *BlockHeaderInfoType) GetShoulderStartDate() string {
	if o == nil || IsNil(o.ShoulderStartDate) {
		var ret string
		return ret
	}
	return *o.ShoulderStartDate
}

// GetShoulderStartDateOk returns a tuple with the ShoulderStartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockHeaderInfoType) GetShoulderStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.ShoulderStartDate) {
		return nil, false
	}
	return o.ShoulderStartDate, true
}

// HasShoulderStartDate returns a boolean if a field has been set.
func (o *BlockHeaderInfoType) HasShoulderStartDate() bool {
	if o != nil && !IsNil(o.ShoulderStartDate) {
		return true
	}

	return false
}

// SetShoulderStartDate gets a reference to the given string and assigns it to the ShoulderStartDate field.
func (o *BlockHeaderInfoType) SetShoulderStartDate(v string) {
	o.ShoulderStartDate = &v
}

// GetSourceOfSale returns the SourceOfSale field value if set, zero value otherwise.
func (o *BlockHeaderInfoType) GetSourceOfSale() BlockSourceOfSaleType {
	if o == nil || IsNil(o.SourceOfSale) {
		var ret BlockSourceOfSaleType
		return ret
	}
	return *o.SourceOfSale
}

// GetSourceOfSaleOk returns a tuple with the SourceOfSale field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockHeaderInfoType) GetSourceOfSaleOk() (*BlockSourceOfSaleType, bool) {
	if o == nil || IsNil(o.SourceOfSale) {
		return nil, false
	}
	return o.SourceOfSale, true
}

// HasSourceOfSale returns a boolean if a field has been set.
func (o *BlockHeaderInfoType) HasSourceOfSale() bool {
	if o != nil && !IsNil(o.SourceOfSale) {
		return true
	}

	return false
}

// SetSourceOfSale gets a reference to the given BlockSourceOfSaleType and assigns it to the SourceOfSale field.
func (o *BlockHeaderInfoType) SetSourceOfSale(v BlockSourceOfSaleType) {
	o.SourceOfSale = &v
}

// GetStartDate returns the StartDate field value if set, zero value otherwise.
func (o *BlockHeaderInfoType) GetStartDate() string {
	if o == nil || IsNil(o.StartDate) {
		var ret string
		return ret
	}
	return *o.StartDate
}

// GetStartDateOk returns a tuple with the StartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockHeaderInfoType) GetStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.StartDate) {
		return nil, false
	}
	return o.StartDate, true
}

// HasStartDate returns a boolean if a field has been set.
func (o *BlockHeaderInfoType) HasStartDate() bool {
	if o != nil && !IsNil(o.StartDate) {
		return true
	}

	return false
}

// SetStartDate gets a reference to the given string and assigns it to the StartDate field.
func (o *BlockHeaderInfoType) SetStartDate(v string) {
	o.StartDate = &v
}

// GetSuppressRate returns the SuppressRate field value if set, zero value otherwise.
func (o *BlockHeaderInfoType) GetSuppressRate() bool {
	if o == nil || IsNil(o.SuppressRate) {
		var ret bool
		return ret
	}
	return *o.SuppressRate
}

// GetSuppressRateOk returns a tuple with the SuppressRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockHeaderInfoType) GetSuppressRateOk() (*bool, bool) {
	if o == nil || IsNil(o.SuppressRate) {
		return nil, false
	}
	return o.SuppressRate, true
}

// HasSuppressRate returns a boolean if a field has been set.
func (o *BlockHeaderInfoType) HasSuppressRate() bool {
	if o != nil && !IsNil(o.SuppressRate) {
		return true
	}

	return false
}

// SetSuppressRate gets a reference to the given bool and assigns it to the SuppressRate field.
func (o *BlockHeaderInfoType) SetSuppressRate(v bool) {
	o.SuppressRate = &v
}

func (o BlockHeaderInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockHeaderInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockCode) {
		toSerialize["blockCode"] = o.BlockCode
	}
	if !IsNil(o.BlockId) {
		toSerialize["blockId"] = o.BlockId
	}
	if !IsNil(o.BlockName) {
		toSerialize["blockName"] = o.BlockName
	}
	if !IsNil(o.BlockStatus) {
		toSerialize["blockStatus"] = o.BlockStatus
	}
	if !IsNil(o.CurrencyCode) {
		toSerialize["currencyCode"] = o.CurrencyCode
	}
	if !IsNil(o.EndDate) {
		toSerialize["endDate"] = o.EndDate
	}
	if !IsNil(o.GuaranteeCode) {
		toSerialize["guaranteeCode"] = o.GuaranteeCode
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.HotelName) {
		toSerialize["hotelName"] = o.HotelName
	}
	if !IsNil(o.InventoryControl) {
		toSerialize["inventoryControl"] = o.InventoryControl
	}
	if !IsNil(o.MarketCode) {
		toSerialize["marketCode"] = o.MarketCode
	}
	if !IsNil(o.RateCode) {
		toSerialize["rateCode"] = o.RateCode
	}
	if !IsNil(o.ShoulderEndDate) {
		toSerialize["shoulderEndDate"] = o.ShoulderEndDate
	}
	if !IsNil(o.ShoulderStartDate) {
		toSerialize["shoulderStartDate"] = o.ShoulderStartDate
	}
	if !IsNil(o.SourceOfSale) {
		toSerialize["sourceOfSale"] = o.SourceOfSale
	}
	if !IsNil(o.StartDate) {
		toSerialize["startDate"] = o.StartDate
	}
	if !IsNil(o.SuppressRate) {
		toSerialize["suppressRate"] = o.SuppressRate
	}
	return toSerialize, nil
}

type NullableBlockHeaderInfoType struct {
	value *BlockHeaderInfoType
	isSet bool
}

func (v NullableBlockHeaderInfoType) Get() *BlockHeaderInfoType {
	return v.value
}

func (v *NullableBlockHeaderInfoType) Set(val *BlockHeaderInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockHeaderInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockHeaderInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockHeaderInfoType(val *BlockHeaderInfoType) *NullableBlockHeaderInfoType {
	return &NullableBlockHeaderInfoType{value: val, isSet: true}
}

func (v NullableBlockHeaderInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockHeaderInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

