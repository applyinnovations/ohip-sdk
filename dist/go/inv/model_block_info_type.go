/*
OPERA Cloud Inventory API

APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package inv

import (
	"encoding/json"
)

// checks if the BlockInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockInfoType{}

// BlockInfoType Contains information of the business block .
type BlockInfoType struct {
	AccountId *UniqueIDType `json:"accountId,omitempty"`
	// Account name attached to the business block.
	AccountName *string `json:"accountName,omitempty"`
	// Average room rate of the business block.
	AverageRoomRate *float32 `json:"averageRoomRate,omitempty"`
	BlockClassification *BlockClassificationType `json:"blockClassification,omitempty"`
	// Block code for the block.
	BlockCode *string `json:"blockCode,omitempty"`
	BlockId *UniqueIDType `json:"blockId,omitempty"`
	// Name of the business block.
	BlockName *string `json:"blockName,omitempty"`
	BlockStatus *CodeDescriptionType `json:"blockStatus,omitempty"`
	BlockStatusColor *StatusColorType `json:"blockStatusColor,omitempty"`
	ContactId *UniqueIDType `json:"contactId,omitempty"`
	// Contact name attached to the business block.
	ContactName *string `json:"contactName,omitempty"`
	// Indicates the likelihood of the block moving to the next active block status.
	ConversionCode *string `json:"conversionCode,omitempty"`
	// Currency Code attached to the business block.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// Date after which unused block rooms should be returned to house.
	CutOffDate *string `json:"cutOffDate,omitempty"`
	// End date for this block.
	EndDate *string `json:"endDate,omitempty"`
	// Guarantee Code for the block.
	GuaranteeCode *string `json:"guaranteeCode,omitempty"`
	// The hotel code of the business block.
	HotelId *string `json:"hotelId,omitempty"`
	NonCompeteDetails *BlockNonCompeteType `json:"nonCompeteDetails,omitempty"`
	// Indicates the ranking of the block.
	RankingCode *string `json:"rankingCode,omitempty"`
	RateProtectionDetails *BlockRateProtectionType `json:"rateProtectionDetails,omitempty"`
	RoomSalesManager *CodeDescriptionType `json:"roomSalesManager,omitempty"`
	// Start date for this block.
	StartDate *string `json:"startDate,omitempty"`
}

// NewBlockInfoType instantiates a new BlockInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockInfoType() *BlockInfoType {
	this := BlockInfoType{}
	return &this
}

// NewBlockInfoTypeWithDefaults instantiates a new BlockInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockInfoTypeWithDefaults() *BlockInfoType {
	this := BlockInfoType{}
	return &this
}

// GetAccountId returns the AccountId field value if set, zero value otherwise.
func (o *BlockInfoType) GetAccountId() UniqueIDType {
	if o == nil || IsNil(o.AccountId) {
		var ret UniqueIDType
		return ret
	}
	return *o.AccountId
}

// GetAccountIdOk returns a tuple with the AccountId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetAccountIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.AccountId) {
		return nil, false
	}
	return o.AccountId, true
}

// HasAccountId returns a boolean if a field has been set.
func (o *BlockInfoType) HasAccountId() bool {
	if o != nil && !IsNil(o.AccountId) {
		return true
	}

	return false
}

// SetAccountId gets a reference to the given UniqueIDType and assigns it to the AccountId field.
func (o *BlockInfoType) SetAccountId(v UniqueIDType) {
	o.AccountId = &v
}

// GetAccountName returns the AccountName field value if set, zero value otherwise.
func (o *BlockInfoType) GetAccountName() string {
	if o == nil || IsNil(o.AccountName) {
		var ret string
		return ret
	}
	return *o.AccountName
}

// GetAccountNameOk returns a tuple with the AccountName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetAccountNameOk() (*string, bool) {
	if o == nil || IsNil(o.AccountName) {
		return nil, false
	}
	return o.AccountName, true
}

// HasAccountName returns a boolean if a field has been set.
func (o *BlockInfoType) HasAccountName() bool {
	if o != nil && !IsNil(o.AccountName) {
		return true
	}

	return false
}

// SetAccountName gets a reference to the given string and assigns it to the AccountName field.
func (o *BlockInfoType) SetAccountName(v string) {
	o.AccountName = &v
}

// GetAverageRoomRate returns the AverageRoomRate field value if set, zero value otherwise.
func (o *BlockInfoType) GetAverageRoomRate() float32 {
	if o == nil || IsNil(o.AverageRoomRate) {
		var ret float32
		return ret
	}
	return *o.AverageRoomRate
}

// GetAverageRoomRateOk returns a tuple with the AverageRoomRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetAverageRoomRateOk() (*float32, bool) {
	if o == nil || IsNil(o.AverageRoomRate) {
		return nil, false
	}
	return o.AverageRoomRate, true
}

// HasAverageRoomRate returns a boolean if a field has been set.
func (o *BlockInfoType) HasAverageRoomRate() bool {
	if o != nil && !IsNil(o.AverageRoomRate) {
		return true
	}

	return false
}

// SetAverageRoomRate gets a reference to the given float32 and assigns it to the AverageRoomRate field.
func (o *BlockInfoType) SetAverageRoomRate(v float32) {
	o.AverageRoomRate = &v
}

// GetBlockClassification returns the BlockClassification field value if set, zero value otherwise.
func (o *BlockInfoType) GetBlockClassification() BlockClassificationType {
	if o == nil || IsNil(o.BlockClassification) {
		var ret BlockClassificationType
		return ret
	}
	return *o.BlockClassification
}

// GetBlockClassificationOk returns a tuple with the BlockClassification field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetBlockClassificationOk() (*BlockClassificationType, bool) {
	if o == nil || IsNil(o.BlockClassification) {
		return nil, false
	}
	return o.BlockClassification, true
}

// HasBlockClassification returns a boolean if a field has been set.
func (o *BlockInfoType) HasBlockClassification() bool {
	if o != nil && !IsNil(o.BlockClassification) {
		return true
	}

	return false
}

// SetBlockClassification gets a reference to the given BlockClassificationType and assigns it to the BlockClassification field.
func (o *BlockInfoType) SetBlockClassification(v BlockClassificationType) {
	o.BlockClassification = &v
}

// GetBlockCode returns the BlockCode field value if set, zero value otherwise.
func (o *BlockInfoType) GetBlockCode() string {
	if o == nil || IsNil(o.BlockCode) {
		var ret string
		return ret
	}
	return *o.BlockCode
}

// GetBlockCodeOk returns a tuple with the BlockCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetBlockCodeOk() (*string, bool) {
	if o == nil || IsNil(o.BlockCode) {
		return nil, false
	}
	return o.BlockCode, true
}

// HasBlockCode returns a boolean if a field has been set.
func (o *BlockInfoType) HasBlockCode() bool {
	if o != nil && !IsNil(o.BlockCode) {
		return true
	}

	return false
}

// SetBlockCode gets a reference to the given string and assigns it to the BlockCode field.
func (o *BlockInfoType) SetBlockCode(v string) {
	o.BlockCode = &v
}

// GetBlockId returns the BlockId field value if set, zero value otherwise.
func (o *BlockInfoType) GetBlockId() UniqueIDType {
	if o == nil || IsNil(o.BlockId) {
		var ret UniqueIDType
		return ret
	}
	return *o.BlockId
}

// GetBlockIdOk returns a tuple with the BlockId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetBlockIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.BlockId) {
		return nil, false
	}
	return o.BlockId, true
}

// HasBlockId returns a boolean if a field has been set.
func (o *BlockInfoType) HasBlockId() bool {
	if o != nil && !IsNil(o.BlockId) {
		return true
	}

	return false
}

// SetBlockId gets a reference to the given UniqueIDType and assigns it to the BlockId field.
func (o *BlockInfoType) SetBlockId(v UniqueIDType) {
	o.BlockId = &v
}

// GetBlockName returns the BlockName field value if set, zero value otherwise.
func (o *BlockInfoType) GetBlockName() string {
	if o == nil || IsNil(o.BlockName) {
		var ret string
		return ret
	}
	return *o.BlockName
}

// GetBlockNameOk returns a tuple with the BlockName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetBlockNameOk() (*string, bool) {
	if o == nil || IsNil(o.BlockName) {
		return nil, false
	}
	return o.BlockName, true
}

// HasBlockName returns a boolean if a field has been set.
func (o *BlockInfoType) HasBlockName() bool {
	if o != nil && !IsNil(o.BlockName) {
		return true
	}

	return false
}

// SetBlockName gets a reference to the given string and assigns it to the BlockName field.
func (o *BlockInfoType) SetBlockName(v string) {
	o.BlockName = &v
}

// GetBlockStatus returns the BlockStatus field value if set, zero value otherwise.
func (o *BlockInfoType) GetBlockStatus() CodeDescriptionType {
	if o == nil || IsNil(o.BlockStatus) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.BlockStatus
}

// GetBlockStatusOk returns a tuple with the BlockStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetBlockStatusOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.BlockStatus) {
		return nil, false
	}
	return o.BlockStatus, true
}

// HasBlockStatus returns a boolean if a field has been set.
func (o *BlockInfoType) HasBlockStatus() bool {
	if o != nil && !IsNil(o.BlockStatus) {
		return true
	}

	return false
}

// SetBlockStatus gets a reference to the given CodeDescriptionType and assigns it to the BlockStatus field.
func (o *BlockInfoType) SetBlockStatus(v CodeDescriptionType) {
	o.BlockStatus = &v
}

// GetBlockStatusColor returns the BlockStatusColor field value if set, zero value otherwise.
func (o *BlockInfoType) GetBlockStatusColor() StatusColorType {
	if o == nil || IsNil(o.BlockStatusColor) {
		var ret StatusColorType
		return ret
	}
	return *o.BlockStatusColor
}

// GetBlockStatusColorOk returns a tuple with the BlockStatusColor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetBlockStatusColorOk() (*StatusColorType, bool) {
	if o == nil || IsNil(o.BlockStatusColor) {
		return nil, false
	}
	return o.BlockStatusColor, true
}

// HasBlockStatusColor returns a boolean if a field has been set.
func (o *BlockInfoType) HasBlockStatusColor() bool {
	if o != nil && !IsNil(o.BlockStatusColor) {
		return true
	}

	return false
}

// SetBlockStatusColor gets a reference to the given StatusColorType and assigns it to the BlockStatusColor field.
func (o *BlockInfoType) SetBlockStatusColor(v StatusColorType) {
	o.BlockStatusColor = &v
}

// GetContactId returns the ContactId field value if set, zero value otherwise.
func (o *BlockInfoType) GetContactId() UniqueIDType {
	if o == nil || IsNil(o.ContactId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ContactId
}

// GetContactIdOk returns a tuple with the ContactId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetContactIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ContactId) {
		return nil, false
	}
	return o.ContactId, true
}

// HasContactId returns a boolean if a field has been set.
func (o *BlockInfoType) HasContactId() bool {
	if o != nil && !IsNil(o.ContactId) {
		return true
	}

	return false
}

// SetContactId gets a reference to the given UniqueIDType and assigns it to the ContactId field.
func (o *BlockInfoType) SetContactId(v UniqueIDType) {
	o.ContactId = &v
}

// GetContactName returns the ContactName field value if set, zero value otherwise.
func (o *BlockInfoType) GetContactName() string {
	if o == nil || IsNil(o.ContactName) {
		var ret string
		return ret
	}
	return *o.ContactName
}

// GetContactNameOk returns a tuple with the ContactName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetContactNameOk() (*string, bool) {
	if o == nil || IsNil(o.ContactName) {
		return nil, false
	}
	return o.ContactName, true
}

// HasContactName returns a boolean if a field has been set.
func (o *BlockInfoType) HasContactName() bool {
	if o != nil && !IsNil(o.ContactName) {
		return true
	}

	return false
}

// SetContactName gets a reference to the given string and assigns it to the ContactName field.
func (o *BlockInfoType) SetContactName(v string) {
	o.ContactName = &v
}

// GetConversionCode returns the ConversionCode field value if set, zero value otherwise.
func (o *BlockInfoType) GetConversionCode() string {
	if o == nil || IsNil(o.ConversionCode) {
		var ret string
		return ret
	}
	return *o.ConversionCode
}

// GetConversionCodeOk returns a tuple with the ConversionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetConversionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ConversionCode) {
		return nil, false
	}
	return o.ConversionCode, true
}

// HasConversionCode returns a boolean if a field has been set.
func (o *BlockInfoType) HasConversionCode() bool {
	if o != nil && !IsNil(o.ConversionCode) {
		return true
	}

	return false
}

// SetConversionCode gets a reference to the given string and assigns it to the ConversionCode field.
func (o *BlockInfoType) SetConversionCode(v string) {
	o.ConversionCode = &v
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *BlockInfoType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *BlockInfoType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *BlockInfoType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetCutOffDate returns the CutOffDate field value if set, zero value otherwise.
func (o *BlockInfoType) GetCutOffDate() string {
	if o == nil || IsNil(o.CutOffDate) {
		var ret string
		return ret
	}
	return *o.CutOffDate
}

// GetCutOffDateOk returns a tuple with the CutOffDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetCutOffDateOk() (*string, bool) {
	if o == nil || IsNil(o.CutOffDate) {
		return nil, false
	}
	return o.CutOffDate, true
}

// HasCutOffDate returns a boolean if a field has been set.
func (o *BlockInfoType) HasCutOffDate() bool {
	if o != nil && !IsNil(o.CutOffDate) {
		return true
	}

	return false
}

// SetCutOffDate gets a reference to the given string and assigns it to the CutOffDate field.
func (o *BlockInfoType) SetCutOffDate(v string) {
	o.CutOffDate = &v
}

// GetEndDate returns the EndDate field value if set, zero value otherwise.
func (o *BlockInfoType) GetEndDate() string {
	if o == nil || IsNil(o.EndDate) {
		var ret string
		return ret
	}
	return *o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndDate) {
		return nil, false
	}
	return o.EndDate, true
}

// HasEndDate returns a boolean if a field has been set.
func (o *BlockInfoType) HasEndDate() bool {
	if o != nil && !IsNil(o.EndDate) {
		return true
	}

	return false
}

// SetEndDate gets a reference to the given string and assigns it to the EndDate field.
func (o *BlockInfoType) SetEndDate(v string) {
	o.EndDate = &v
}

// GetGuaranteeCode returns the GuaranteeCode field value if set, zero value otherwise.
func (o *BlockInfoType) GetGuaranteeCode() string {
	if o == nil || IsNil(o.GuaranteeCode) {
		var ret string
		return ret
	}
	return *o.GuaranteeCode
}

// GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetGuaranteeCodeOk() (*string, bool) {
	if o == nil || IsNil(o.GuaranteeCode) {
		return nil, false
	}
	return o.GuaranteeCode, true
}

// HasGuaranteeCode returns a boolean if a field has been set.
func (o *BlockInfoType) HasGuaranteeCode() bool {
	if o != nil && !IsNil(o.GuaranteeCode) {
		return true
	}

	return false
}

// SetGuaranteeCode gets a reference to the given string and assigns it to the GuaranteeCode field.
func (o *BlockInfoType) SetGuaranteeCode(v string) {
	o.GuaranteeCode = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *BlockInfoType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *BlockInfoType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *BlockInfoType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetNonCompeteDetails returns the NonCompeteDetails field value if set, zero value otherwise.
func (o *BlockInfoType) GetNonCompeteDetails() BlockNonCompeteType {
	if o == nil || IsNil(o.NonCompeteDetails) {
		var ret BlockNonCompeteType
		return ret
	}
	return *o.NonCompeteDetails
}

// GetNonCompeteDetailsOk returns a tuple with the NonCompeteDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetNonCompeteDetailsOk() (*BlockNonCompeteType, bool) {
	if o == nil || IsNil(o.NonCompeteDetails) {
		return nil, false
	}
	return o.NonCompeteDetails, true
}

// HasNonCompeteDetails returns a boolean if a field has been set.
func (o *BlockInfoType) HasNonCompeteDetails() bool {
	if o != nil && !IsNil(o.NonCompeteDetails) {
		return true
	}

	return false
}

// SetNonCompeteDetails gets a reference to the given BlockNonCompeteType and assigns it to the NonCompeteDetails field.
func (o *BlockInfoType) SetNonCompeteDetails(v BlockNonCompeteType) {
	o.NonCompeteDetails = &v
}

// GetRankingCode returns the RankingCode field value if set, zero value otherwise.
func (o *BlockInfoType) GetRankingCode() string {
	if o == nil || IsNil(o.RankingCode) {
		var ret string
		return ret
	}
	return *o.RankingCode
}

// GetRankingCodeOk returns a tuple with the RankingCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetRankingCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RankingCode) {
		return nil, false
	}
	return o.RankingCode, true
}

// HasRankingCode returns a boolean if a field has been set.
func (o *BlockInfoType) HasRankingCode() bool {
	if o != nil && !IsNil(o.RankingCode) {
		return true
	}

	return false
}

// SetRankingCode gets a reference to the given string and assigns it to the RankingCode field.
func (o *BlockInfoType) SetRankingCode(v string) {
	o.RankingCode = &v
}

// GetRateProtectionDetails returns the RateProtectionDetails field value if set, zero value otherwise.
func (o *BlockInfoType) GetRateProtectionDetails() BlockRateProtectionType {
	if o == nil || IsNil(o.RateProtectionDetails) {
		var ret BlockRateProtectionType
		return ret
	}
	return *o.RateProtectionDetails
}

// GetRateProtectionDetailsOk returns a tuple with the RateProtectionDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetRateProtectionDetailsOk() (*BlockRateProtectionType, bool) {
	if o == nil || IsNil(o.RateProtectionDetails) {
		return nil, false
	}
	return o.RateProtectionDetails, true
}

// HasRateProtectionDetails returns a boolean if a field has been set.
func (o *BlockInfoType) HasRateProtectionDetails() bool {
	if o != nil && !IsNil(o.RateProtectionDetails) {
		return true
	}

	return false
}

// SetRateProtectionDetails gets a reference to the given BlockRateProtectionType and assigns it to the RateProtectionDetails field.
func (o *BlockInfoType) SetRateProtectionDetails(v BlockRateProtectionType) {
	o.RateProtectionDetails = &v
}

// GetRoomSalesManager returns the RoomSalesManager field value if set, zero value otherwise.
func (o *BlockInfoType) GetRoomSalesManager() CodeDescriptionType {
	if o == nil || IsNil(o.RoomSalesManager) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.RoomSalesManager
}

// GetRoomSalesManagerOk returns a tuple with the RoomSalesManager field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetRoomSalesManagerOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.RoomSalesManager) {
		return nil, false
	}
	return o.RoomSalesManager, true
}

// HasRoomSalesManager returns a boolean if a field has been set.
func (o *BlockInfoType) HasRoomSalesManager() bool {
	if o != nil && !IsNil(o.RoomSalesManager) {
		return true
	}

	return false
}

// SetRoomSalesManager gets a reference to the given CodeDescriptionType and assigns it to the RoomSalesManager field.
func (o *BlockInfoType) SetRoomSalesManager(v CodeDescriptionType) {
	o.RoomSalesManager = &v
}

// GetStartDate returns the StartDate field value if set, zero value otherwise.
func (o *BlockInfoType) GetStartDate() string {
	if o == nil || IsNil(o.StartDate) {
		var ret string
		return ret
	}
	return *o.StartDate
}

// GetStartDateOk returns a tuple with the StartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInfoType) GetStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.StartDate) {
		return nil, false
	}
	return o.StartDate, true
}

// HasStartDate returns a boolean if a field has been set.
func (o *BlockInfoType) HasStartDate() bool {
	if o != nil && !IsNil(o.StartDate) {
		return true
	}

	return false
}

// SetStartDate gets a reference to the given string and assigns it to the StartDate field.
func (o *BlockInfoType) SetStartDate(v string) {
	o.StartDate = &v
}

func (o BlockInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AccountId) {
		toSerialize["accountId"] = o.AccountId
	}
	if !IsNil(o.AccountName) {
		toSerialize["accountName"] = o.AccountName
	}
	if !IsNil(o.AverageRoomRate) {
		toSerialize["averageRoomRate"] = o.AverageRoomRate
	}
	if !IsNil(o.BlockClassification) {
		toSerialize["blockClassification"] = o.BlockClassification
	}
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
	if !IsNil(o.BlockStatusColor) {
		toSerialize["blockStatusColor"] = o.BlockStatusColor
	}
	if !IsNil(o.ContactId) {
		toSerialize["contactId"] = o.ContactId
	}
	if !IsNil(o.ContactName) {
		toSerialize["contactName"] = o.ContactName
	}
	if !IsNil(o.ConversionCode) {
		toSerialize["conversionCode"] = o.ConversionCode
	}
	if !IsNil(o.CurrencyCode) {
		toSerialize["currencyCode"] = o.CurrencyCode
	}
	if !IsNil(o.CutOffDate) {
		toSerialize["cutOffDate"] = o.CutOffDate
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
	if !IsNil(o.NonCompeteDetails) {
		toSerialize["nonCompeteDetails"] = o.NonCompeteDetails
	}
	if !IsNil(o.RankingCode) {
		toSerialize["rankingCode"] = o.RankingCode
	}
	if !IsNil(o.RateProtectionDetails) {
		toSerialize["rateProtectionDetails"] = o.RateProtectionDetails
	}
	if !IsNil(o.RoomSalesManager) {
		toSerialize["roomSalesManager"] = o.RoomSalesManager
	}
	if !IsNil(o.StartDate) {
		toSerialize["startDate"] = o.StartDate
	}
	return toSerialize, nil
}

type NullableBlockInfoType struct {
	value *BlockInfoType
	isSet bool
}

func (v NullableBlockInfoType) Get() *BlockInfoType {
	return v.value
}

func (v *NullableBlockInfoType) Set(val *BlockInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockInfoType(val *BlockInfoType) *NullableBlockInfoType {
	return &NullableBlockInfoType{value: val, isSet: true}
}

func (v NullableBlockInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

