/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the DistributeChannelRateMappingType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DistributeChannelRateMappingType{}

// DistributeChannelRateMappingType Basic details of a hotel-channel rate code mapping.
type DistributeChannelRateMappingType struct {
	// Indicates if Rate updates to Channel are allowed.
	AllowRateUpdate *bool `json:"allowRateUpdate,omitempty"`
	// Indicates if Rate Restrictions are sent to an ADS, GDS, or ODS partner, such as Expedia, via the AVH messaging functionality.
	AllowRestrictionUpdate *bool `json:"allowRestrictionUpdate,omitempty"`
	// Begin date of the channel rate code mapping.
	BeginDate *string `json:"beginDate,omitempty"`
	// Block Rate Indicator.
	BlockRateIndicator *string `json:"blockRateIndicator,omitempty"`
	CarrierInfo *CarrierInfoType `json:"carrierInfo,omitempty"`
	// Channel rate category of hotel-channel rate code mapping.
	ChannelRatePlanCategory *string `json:"channelRatePlanCategory,omitempty"`
	// Order of the channel rate type mapping.
	ChannelRatePlanOrder *float32 `json:"channelRatePlanOrder,omitempty"`
	// Name of channel rate plan code to display on web.
	ChannelRatePlanWebName *string `json:"channelRatePlanWebName,omitempty"`
	Description *ChannelRateMappingDescriptionType `json:"description,omitempty"`
	// End date of the channel rate code mapping.
	EndDate *string `json:"endDate,omitempty"`
	// True if the mapping has channel negotiated rates, otherwise false.
	HasChannelNegotiatedRates *bool `json:"hasChannelNegotiatedRates,omitempty"`
	// True if this channel rate plan code has negotiated rates, otherwise false
	HasNegotiatedRates *bool `json:"hasNegotiatedRates,omitempty"`
	// New Channel Rate Plan Code of the mapping. Used only to change the Channel Rate Plan Code.
	NewChannelRatePlanCode *string `json:"newChannelRatePlanCode,omitempty"`
	// Promotion Code.
	PromotionCode *string `json:"promotionCode,omitempty"`
	// Rate Level.
	RateLevel *string `json:"rateLevel,omitempty"`
	// Rate Plan Code.
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	RatePlanInfo *RatePlanPrimaryDetailsType `json:"ratePlanInfo,omitempty"`
	RateTierAttr *ChannelRateMappingTypeRateTierAttr `json:"rateTierAttr,omitempty"`
	RegionalAvailAttr *ChannelRateMappingTypeRegionalAvailAttr `json:"regionalAvailAttr,omitempty"`
	RoomTypes []string `json:"roomTypes,omitempty"`
}

// NewDistributeChannelRateMappingType instantiates a new DistributeChannelRateMappingType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDistributeChannelRateMappingType() *DistributeChannelRateMappingType {
	this := DistributeChannelRateMappingType{}
	return &this
}

// NewDistributeChannelRateMappingTypeWithDefaults instantiates a new DistributeChannelRateMappingType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDistributeChannelRateMappingTypeWithDefaults() *DistributeChannelRateMappingType {
	this := DistributeChannelRateMappingType{}
	return &this
}

// GetAllowRateUpdate returns the AllowRateUpdate field value if set, zero value otherwise.
func (o *DistributeChannelRateMappingType) GetAllowRateUpdate() bool {
	if o == nil || IsNil(o.AllowRateUpdate) {
		var ret bool
		return ret
	}
	return *o.AllowRateUpdate
}

// GetAllowRateUpdateOk returns a tuple with the AllowRateUpdate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributeChannelRateMappingType) GetAllowRateUpdateOk() (*bool, bool) {
	if o == nil || IsNil(o.AllowRateUpdate) {
		return nil, false
	}
	return o.AllowRateUpdate, true
}

// HasAllowRateUpdate returns a boolean if a field has been set.
func (o *DistributeChannelRateMappingType) HasAllowRateUpdate() bool {
	if o != nil && !IsNil(o.AllowRateUpdate) {
		return true
	}

	return false
}

// SetAllowRateUpdate gets a reference to the given bool and assigns it to the AllowRateUpdate field.
func (o *DistributeChannelRateMappingType) SetAllowRateUpdate(v bool) {
	o.AllowRateUpdate = &v
}

// GetAllowRestrictionUpdate returns the AllowRestrictionUpdate field value if set, zero value otherwise.
func (o *DistributeChannelRateMappingType) GetAllowRestrictionUpdate() bool {
	if o == nil || IsNil(o.AllowRestrictionUpdate) {
		var ret bool
		return ret
	}
	return *o.AllowRestrictionUpdate
}

// GetAllowRestrictionUpdateOk returns a tuple with the AllowRestrictionUpdate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributeChannelRateMappingType) GetAllowRestrictionUpdateOk() (*bool, bool) {
	if o == nil || IsNil(o.AllowRestrictionUpdate) {
		return nil, false
	}
	return o.AllowRestrictionUpdate, true
}

// HasAllowRestrictionUpdate returns a boolean if a field has been set.
func (o *DistributeChannelRateMappingType) HasAllowRestrictionUpdate() bool {
	if o != nil && !IsNil(o.AllowRestrictionUpdate) {
		return true
	}

	return false
}

// SetAllowRestrictionUpdate gets a reference to the given bool and assigns it to the AllowRestrictionUpdate field.
func (o *DistributeChannelRateMappingType) SetAllowRestrictionUpdate(v bool) {
	o.AllowRestrictionUpdate = &v
}

// GetBeginDate returns the BeginDate field value if set, zero value otherwise.
func (o *DistributeChannelRateMappingType) GetBeginDate() string {
	if o == nil || IsNil(o.BeginDate) {
		var ret string
		return ret
	}
	return *o.BeginDate
}

// GetBeginDateOk returns a tuple with the BeginDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributeChannelRateMappingType) GetBeginDateOk() (*string, bool) {
	if o == nil || IsNil(o.BeginDate) {
		return nil, false
	}
	return o.BeginDate, true
}

// HasBeginDate returns a boolean if a field has been set.
func (o *DistributeChannelRateMappingType) HasBeginDate() bool {
	if o != nil && !IsNil(o.BeginDate) {
		return true
	}

	return false
}

// SetBeginDate gets a reference to the given string and assigns it to the BeginDate field.
func (o *DistributeChannelRateMappingType) SetBeginDate(v string) {
	o.BeginDate = &v
}

// GetBlockRateIndicator returns the BlockRateIndicator field value if set, zero value otherwise.
func (o *DistributeChannelRateMappingType) GetBlockRateIndicator() string {
	if o == nil || IsNil(o.BlockRateIndicator) {
		var ret string
		return ret
	}
	return *o.BlockRateIndicator
}

// GetBlockRateIndicatorOk returns a tuple with the BlockRateIndicator field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributeChannelRateMappingType) GetBlockRateIndicatorOk() (*string, bool) {
	if o == nil || IsNil(o.BlockRateIndicator) {
		return nil, false
	}
	return o.BlockRateIndicator, true
}

// HasBlockRateIndicator returns a boolean if a field has been set.
func (o *DistributeChannelRateMappingType) HasBlockRateIndicator() bool {
	if o != nil && !IsNil(o.BlockRateIndicator) {
		return true
	}

	return false
}

// SetBlockRateIndicator gets a reference to the given string and assigns it to the BlockRateIndicator field.
func (o *DistributeChannelRateMappingType) SetBlockRateIndicator(v string) {
	o.BlockRateIndicator = &v
}

// GetCarrierInfo returns the CarrierInfo field value if set, zero value otherwise.
func (o *DistributeChannelRateMappingType) GetCarrierInfo() CarrierInfoType {
	if o == nil || IsNil(o.CarrierInfo) {
		var ret CarrierInfoType
		return ret
	}
	return *o.CarrierInfo
}

// GetCarrierInfoOk returns a tuple with the CarrierInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributeChannelRateMappingType) GetCarrierInfoOk() (*CarrierInfoType, bool) {
	if o == nil || IsNil(o.CarrierInfo) {
		return nil, false
	}
	return o.CarrierInfo, true
}

// HasCarrierInfo returns a boolean if a field has been set.
func (o *DistributeChannelRateMappingType) HasCarrierInfo() bool {
	if o != nil && !IsNil(o.CarrierInfo) {
		return true
	}

	return false
}

// SetCarrierInfo gets a reference to the given CarrierInfoType and assigns it to the CarrierInfo field.
func (o *DistributeChannelRateMappingType) SetCarrierInfo(v CarrierInfoType) {
	o.CarrierInfo = &v
}

// GetChannelRatePlanCategory returns the ChannelRatePlanCategory field value if set, zero value otherwise.
func (o *DistributeChannelRateMappingType) GetChannelRatePlanCategory() string {
	if o == nil || IsNil(o.ChannelRatePlanCategory) {
		var ret string
		return ret
	}
	return *o.ChannelRatePlanCategory
}

// GetChannelRatePlanCategoryOk returns a tuple with the ChannelRatePlanCategory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributeChannelRateMappingType) GetChannelRatePlanCategoryOk() (*string, bool) {
	if o == nil || IsNil(o.ChannelRatePlanCategory) {
		return nil, false
	}
	return o.ChannelRatePlanCategory, true
}

// HasChannelRatePlanCategory returns a boolean if a field has been set.
func (o *DistributeChannelRateMappingType) HasChannelRatePlanCategory() bool {
	if o != nil && !IsNil(o.ChannelRatePlanCategory) {
		return true
	}

	return false
}

// SetChannelRatePlanCategory gets a reference to the given string and assigns it to the ChannelRatePlanCategory field.
func (o *DistributeChannelRateMappingType) SetChannelRatePlanCategory(v string) {
	o.ChannelRatePlanCategory = &v
}

// GetChannelRatePlanOrder returns the ChannelRatePlanOrder field value if set, zero value otherwise.
func (o *DistributeChannelRateMappingType) GetChannelRatePlanOrder() float32 {
	if o == nil || IsNil(o.ChannelRatePlanOrder) {
		var ret float32
		return ret
	}
	return *o.ChannelRatePlanOrder
}

// GetChannelRatePlanOrderOk returns a tuple with the ChannelRatePlanOrder field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributeChannelRateMappingType) GetChannelRatePlanOrderOk() (*float32, bool) {
	if o == nil || IsNil(o.ChannelRatePlanOrder) {
		return nil, false
	}
	return o.ChannelRatePlanOrder, true
}

// HasChannelRatePlanOrder returns a boolean if a field has been set.
func (o *DistributeChannelRateMappingType) HasChannelRatePlanOrder() bool {
	if o != nil && !IsNil(o.ChannelRatePlanOrder) {
		return true
	}

	return false
}

// SetChannelRatePlanOrder gets a reference to the given float32 and assigns it to the ChannelRatePlanOrder field.
func (o *DistributeChannelRateMappingType) SetChannelRatePlanOrder(v float32) {
	o.ChannelRatePlanOrder = &v
}

// GetChannelRatePlanWebName returns the ChannelRatePlanWebName field value if set, zero value otherwise.
func (o *DistributeChannelRateMappingType) GetChannelRatePlanWebName() string {
	if o == nil || IsNil(o.ChannelRatePlanWebName) {
		var ret string
		return ret
	}
	return *o.ChannelRatePlanWebName
}

// GetChannelRatePlanWebNameOk returns a tuple with the ChannelRatePlanWebName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributeChannelRateMappingType) GetChannelRatePlanWebNameOk() (*string, bool) {
	if o == nil || IsNil(o.ChannelRatePlanWebName) {
		return nil, false
	}
	return o.ChannelRatePlanWebName, true
}

// HasChannelRatePlanWebName returns a boolean if a field has been set.
func (o *DistributeChannelRateMappingType) HasChannelRatePlanWebName() bool {
	if o != nil && !IsNil(o.ChannelRatePlanWebName) {
		return true
	}

	return false
}

// SetChannelRatePlanWebName gets a reference to the given string and assigns it to the ChannelRatePlanWebName field.
func (o *DistributeChannelRateMappingType) SetChannelRatePlanWebName(v string) {
	o.ChannelRatePlanWebName = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *DistributeChannelRateMappingType) GetDescription() ChannelRateMappingDescriptionType {
	if o == nil || IsNil(o.Description) {
		var ret ChannelRateMappingDescriptionType
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributeChannelRateMappingType) GetDescriptionOk() (*ChannelRateMappingDescriptionType, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *DistributeChannelRateMappingType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given ChannelRateMappingDescriptionType and assigns it to the Description field.
func (o *DistributeChannelRateMappingType) SetDescription(v ChannelRateMappingDescriptionType) {
	o.Description = &v
}

// GetEndDate returns the EndDate field value if set, zero value otherwise.
func (o *DistributeChannelRateMappingType) GetEndDate() string {
	if o == nil || IsNil(o.EndDate) {
		var ret string
		return ret
	}
	return *o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributeChannelRateMappingType) GetEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndDate) {
		return nil, false
	}
	return o.EndDate, true
}

// HasEndDate returns a boolean if a field has been set.
func (o *DistributeChannelRateMappingType) HasEndDate() bool {
	if o != nil && !IsNil(o.EndDate) {
		return true
	}

	return false
}

// SetEndDate gets a reference to the given string and assigns it to the EndDate field.
func (o *DistributeChannelRateMappingType) SetEndDate(v string) {
	o.EndDate = &v
}

// GetHasChannelNegotiatedRates returns the HasChannelNegotiatedRates field value if set, zero value otherwise.
func (o *DistributeChannelRateMappingType) GetHasChannelNegotiatedRates() bool {
	if o == nil || IsNil(o.HasChannelNegotiatedRates) {
		var ret bool
		return ret
	}
	return *o.HasChannelNegotiatedRates
}

// GetHasChannelNegotiatedRatesOk returns a tuple with the HasChannelNegotiatedRates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributeChannelRateMappingType) GetHasChannelNegotiatedRatesOk() (*bool, bool) {
	if o == nil || IsNil(o.HasChannelNegotiatedRates) {
		return nil, false
	}
	return o.HasChannelNegotiatedRates, true
}

// HasHasChannelNegotiatedRates returns a boolean if a field has been set.
func (o *DistributeChannelRateMappingType) HasHasChannelNegotiatedRates() bool {
	if o != nil && !IsNil(o.HasChannelNegotiatedRates) {
		return true
	}

	return false
}

// SetHasChannelNegotiatedRates gets a reference to the given bool and assigns it to the HasChannelNegotiatedRates field.
func (o *DistributeChannelRateMappingType) SetHasChannelNegotiatedRates(v bool) {
	o.HasChannelNegotiatedRates = &v
}

// GetHasNegotiatedRates returns the HasNegotiatedRates field value if set, zero value otherwise.
func (o *DistributeChannelRateMappingType) GetHasNegotiatedRates() bool {
	if o == nil || IsNil(o.HasNegotiatedRates) {
		var ret bool
		return ret
	}
	return *o.HasNegotiatedRates
}

// GetHasNegotiatedRatesOk returns a tuple with the HasNegotiatedRates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributeChannelRateMappingType) GetHasNegotiatedRatesOk() (*bool, bool) {
	if o == nil || IsNil(o.HasNegotiatedRates) {
		return nil, false
	}
	return o.HasNegotiatedRates, true
}

// HasHasNegotiatedRates returns a boolean if a field has been set.
func (o *DistributeChannelRateMappingType) HasHasNegotiatedRates() bool {
	if o != nil && !IsNil(o.HasNegotiatedRates) {
		return true
	}

	return false
}

// SetHasNegotiatedRates gets a reference to the given bool and assigns it to the HasNegotiatedRates field.
func (o *DistributeChannelRateMappingType) SetHasNegotiatedRates(v bool) {
	o.HasNegotiatedRates = &v
}

// GetNewChannelRatePlanCode returns the NewChannelRatePlanCode field value if set, zero value otherwise.
func (o *DistributeChannelRateMappingType) GetNewChannelRatePlanCode() string {
	if o == nil || IsNil(o.NewChannelRatePlanCode) {
		var ret string
		return ret
	}
	return *o.NewChannelRatePlanCode
}

// GetNewChannelRatePlanCodeOk returns a tuple with the NewChannelRatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributeChannelRateMappingType) GetNewChannelRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.NewChannelRatePlanCode) {
		return nil, false
	}
	return o.NewChannelRatePlanCode, true
}

// HasNewChannelRatePlanCode returns a boolean if a field has been set.
func (o *DistributeChannelRateMappingType) HasNewChannelRatePlanCode() bool {
	if o != nil && !IsNil(o.NewChannelRatePlanCode) {
		return true
	}

	return false
}

// SetNewChannelRatePlanCode gets a reference to the given string and assigns it to the NewChannelRatePlanCode field.
func (o *DistributeChannelRateMappingType) SetNewChannelRatePlanCode(v string) {
	o.NewChannelRatePlanCode = &v
}

// GetPromotionCode returns the PromotionCode field value if set, zero value otherwise.
func (o *DistributeChannelRateMappingType) GetPromotionCode() string {
	if o == nil || IsNil(o.PromotionCode) {
		var ret string
		return ret
	}
	return *o.PromotionCode
}

// GetPromotionCodeOk returns a tuple with the PromotionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributeChannelRateMappingType) GetPromotionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.PromotionCode) {
		return nil, false
	}
	return o.PromotionCode, true
}

// HasPromotionCode returns a boolean if a field has been set.
func (o *DistributeChannelRateMappingType) HasPromotionCode() bool {
	if o != nil && !IsNil(o.PromotionCode) {
		return true
	}

	return false
}

// SetPromotionCode gets a reference to the given string and assigns it to the PromotionCode field.
func (o *DistributeChannelRateMappingType) SetPromotionCode(v string) {
	o.PromotionCode = &v
}

// GetRateLevel returns the RateLevel field value if set, zero value otherwise.
func (o *DistributeChannelRateMappingType) GetRateLevel() string {
	if o == nil || IsNil(o.RateLevel) {
		var ret string
		return ret
	}
	return *o.RateLevel
}

// GetRateLevelOk returns a tuple with the RateLevel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributeChannelRateMappingType) GetRateLevelOk() (*string, bool) {
	if o == nil || IsNil(o.RateLevel) {
		return nil, false
	}
	return o.RateLevel, true
}

// HasRateLevel returns a boolean if a field has been set.
func (o *DistributeChannelRateMappingType) HasRateLevel() bool {
	if o != nil && !IsNil(o.RateLevel) {
		return true
	}

	return false
}

// SetRateLevel gets a reference to the given string and assigns it to the RateLevel field.
func (o *DistributeChannelRateMappingType) SetRateLevel(v string) {
	o.RateLevel = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *DistributeChannelRateMappingType) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributeChannelRateMappingType) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *DistributeChannelRateMappingType) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *DistributeChannelRateMappingType) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetRatePlanInfo returns the RatePlanInfo field value if set, zero value otherwise.
func (o *DistributeChannelRateMappingType) GetRatePlanInfo() RatePlanPrimaryDetailsType {
	if o == nil || IsNil(o.RatePlanInfo) {
		var ret RatePlanPrimaryDetailsType
		return ret
	}
	return *o.RatePlanInfo
}

// GetRatePlanInfoOk returns a tuple with the RatePlanInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributeChannelRateMappingType) GetRatePlanInfoOk() (*RatePlanPrimaryDetailsType, bool) {
	if o == nil || IsNil(o.RatePlanInfo) {
		return nil, false
	}
	return o.RatePlanInfo, true
}

// HasRatePlanInfo returns a boolean if a field has been set.
func (o *DistributeChannelRateMappingType) HasRatePlanInfo() bool {
	if o != nil && !IsNil(o.RatePlanInfo) {
		return true
	}

	return false
}

// SetRatePlanInfo gets a reference to the given RatePlanPrimaryDetailsType and assigns it to the RatePlanInfo field.
func (o *DistributeChannelRateMappingType) SetRatePlanInfo(v RatePlanPrimaryDetailsType) {
	o.RatePlanInfo = &v
}

// GetRateTierAttr returns the RateTierAttr field value if set, zero value otherwise.
func (o *DistributeChannelRateMappingType) GetRateTierAttr() ChannelRateMappingTypeRateTierAttr {
	if o == nil || IsNil(o.RateTierAttr) {
		var ret ChannelRateMappingTypeRateTierAttr
		return ret
	}
	return *o.RateTierAttr
}

// GetRateTierAttrOk returns a tuple with the RateTierAttr field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributeChannelRateMappingType) GetRateTierAttrOk() (*ChannelRateMappingTypeRateTierAttr, bool) {
	if o == nil || IsNil(o.RateTierAttr) {
		return nil, false
	}
	return o.RateTierAttr, true
}

// HasRateTierAttr returns a boolean if a field has been set.
func (o *DistributeChannelRateMappingType) HasRateTierAttr() bool {
	if o != nil && !IsNil(o.RateTierAttr) {
		return true
	}

	return false
}

// SetRateTierAttr gets a reference to the given ChannelRateMappingTypeRateTierAttr and assigns it to the RateTierAttr field.
func (o *DistributeChannelRateMappingType) SetRateTierAttr(v ChannelRateMappingTypeRateTierAttr) {
	o.RateTierAttr = &v
}

// GetRegionalAvailAttr returns the RegionalAvailAttr field value if set, zero value otherwise.
func (o *DistributeChannelRateMappingType) GetRegionalAvailAttr() ChannelRateMappingTypeRegionalAvailAttr {
	if o == nil || IsNil(o.RegionalAvailAttr) {
		var ret ChannelRateMappingTypeRegionalAvailAttr
		return ret
	}
	return *o.RegionalAvailAttr
}

// GetRegionalAvailAttrOk returns a tuple with the RegionalAvailAttr field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributeChannelRateMappingType) GetRegionalAvailAttrOk() (*ChannelRateMappingTypeRegionalAvailAttr, bool) {
	if o == nil || IsNil(o.RegionalAvailAttr) {
		return nil, false
	}
	return o.RegionalAvailAttr, true
}

// HasRegionalAvailAttr returns a boolean if a field has been set.
func (o *DistributeChannelRateMappingType) HasRegionalAvailAttr() bool {
	if o != nil && !IsNil(o.RegionalAvailAttr) {
		return true
	}

	return false
}

// SetRegionalAvailAttr gets a reference to the given ChannelRateMappingTypeRegionalAvailAttr and assigns it to the RegionalAvailAttr field.
func (o *DistributeChannelRateMappingType) SetRegionalAvailAttr(v ChannelRateMappingTypeRegionalAvailAttr) {
	o.RegionalAvailAttr = &v
}

// GetRoomTypes returns the RoomTypes field value if set, zero value otherwise.
func (o *DistributeChannelRateMappingType) GetRoomTypes() []string {
	if o == nil || IsNil(o.RoomTypes) {
		var ret []string
		return ret
	}
	return o.RoomTypes
}

// GetRoomTypesOk returns a tuple with the RoomTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistributeChannelRateMappingType) GetRoomTypesOk() ([]string, bool) {
	if o == nil || IsNil(o.RoomTypes) {
		return nil, false
	}
	return o.RoomTypes, true
}

// HasRoomTypes returns a boolean if a field has been set.
func (o *DistributeChannelRateMappingType) HasRoomTypes() bool {
	if o != nil && !IsNil(o.RoomTypes) {
		return true
	}

	return false
}

// SetRoomTypes gets a reference to the given []string and assigns it to the RoomTypes field.
func (o *DistributeChannelRateMappingType) SetRoomTypes(v []string) {
	o.RoomTypes = v
}

func (o DistributeChannelRateMappingType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DistributeChannelRateMappingType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AllowRateUpdate) {
		toSerialize["allowRateUpdate"] = o.AllowRateUpdate
	}
	if !IsNil(o.AllowRestrictionUpdate) {
		toSerialize["allowRestrictionUpdate"] = o.AllowRestrictionUpdate
	}
	if !IsNil(o.BeginDate) {
		toSerialize["beginDate"] = o.BeginDate
	}
	if !IsNil(o.BlockRateIndicator) {
		toSerialize["blockRateIndicator"] = o.BlockRateIndicator
	}
	if !IsNil(o.CarrierInfo) {
		toSerialize["carrierInfo"] = o.CarrierInfo
	}
	if !IsNil(o.ChannelRatePlanCategory) {
		toSerialize["channelRatePlanCategory"] = o.ChannelRatePlanCategory
	}
	if !IsNil(o.ChannelRatePlanOrder) {
		toSerialize["channelRatePlanOrder"] = o.ChannelRatePlanOrder
	}
	if !IsNil(o.ChannelRatePlanWebName) {
		toSerialize["channelRatePlanWebName"] = o.ChannelRatePlanWebName
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.EndDate) {
		toSerialize["endDate"] = o.EndDate
	}
	if !IsNil(o.HasChannelNegotiatedRates) {
		toSerialize["hasChannelNegotiatedRates"] = o.HasChannelNegotiatedRates
	}
	if !IsNil(o.HasNegotiatedRates) {
		toSerialize["hasNegotiatedRates"] = o.HasNegotiatedRates
	}
	if !IsNil(o.NewChannelRatePlanCode) {
		toSerialize["newChannelRatePlanCode"] = o.NewChannelRatePlanCode
	}
	if !IsNil(o.PromotionCode) {
		toSerialize["promotionCode"] = o.PromotionCode
	}
	if !IsNil(o.RateLevel) {
		toSerialize["rateLevel"] = o.RateLevel
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.RatePlanInfo) {
		toSerialize["ratePlanInfo"] = o.RatePlanInfo
	}
	if !IsNil(o.RateTierAttr) {
		toSerialize["rateTierAttr"] = o.RateTierAttr
	}
	if !IsNil(o.RegionalAvailAttr) {
		toSerialize["regionalAvailAttr"] = o.RegionalAvailAttr
	}
	if !IsNil(o.RoomTypes) {
		toSerialize["roomTypes"] = o.RoomTypes
	}
	return toSerialize, nil
}

type NullableDistributeChannelRateMappingType struct {
	value *DistributeChannelRateMappingType
	isSet bool
}

func (v NullableDistributeChannelRateMappingType) Get() *DistributeChannelRateMappingType {
	return v.value
}

func (v *NullableDistributeChannelRateMappingType) Set(val *DistributeChannelRateMappingType) {
	v.value = val
	v.isSet = true
}

func (v NullableDistributeChannelRateMappingType) IsSet() bool {
	return v.isSet
}

func (v *NullableDistributeChannelRateMappingType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDistributeChannelRateMappingType(val *DistributeChannelRateMappingType) *NullableDistributeChannelRateMappingType {
	return &NullableDistributeChannelRateMappingType{value: val, isSet: true}
}

func (v NullableDistributeChannelRateMappingType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDistributeChannelRateMappingType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


