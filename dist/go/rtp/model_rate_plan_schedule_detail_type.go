/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the RatePlanScheduleDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RatePlanScheduleDetailType{}

// RatePlanScheduleDetailType Details of rate plan schedule including room type list and days of week of the schedule.
type RatePlanScheduleDetailType struct {
	// The list of adjustment codes for the rate plan schedule.
	AdjustmentDetails []AdjustmentDetailType `json:"adjustmentDetails,omitempty"`
	AdvancedBaseRateOffset *AdvancedBaseRateOffsetType `json:"advancedBaseRateOffset,omitempty"`
	// The Base Rate Plan Code which will be used to look up for and configure the Pricing Schedule for the main Rate Plan Code
	AdvancedDailyBaseRatePlanCode *string `json:"advancedDailyBaseRatePlanCode,omitempty"`
	Classifications *RatePlanScheduleClassificationsType `json:"classifications,omitempty"`
	// The ending value of the date range.
	End *string `json:"end,omitempty"`
	Friday *bool `json:"friday,omitempty"`
	Monday *bool `json:"monday,omitempty"`
	OccupantThresholdPricing *OccupantThresholdPricingType `json:"occupantThresholdPricing,omitempty"`
	RateAmountBoundaries *RateAmountBoundariesType `json:"rateAmountBoundaries,omitempty"`
	RateAmounts *ScheduleRateAmountsType `json:"rateAmounts,omitempty"`
	RateSchedulePackages *RatePackagesType `json:"rateSchedulePackages,omitempty"`
	// Room Type.
	RoomTypeList []string `json:"roomTypeList,omitempty"`
	Saturday *bool `json:"saturday,omitempty"`
	// Season code attached to the rate plan schedule that defines the start and end dates. When creating a rate plan schedule, if a season code is provided the start and end dates will be ignored. These values will be pulled from the season code record.
	SeasonCode *string `json:"seasonCode,omitempty"`
	// The starting value of the date range.
	Start *string `json:"start,omitempty"`
	Sunday *bool `json:"sunday,omitempty"`
	Thursday *bool `json:"thursday,omitempty"`
	TierID *int32 `json:"tierID,omitempty"`
	Tuesday *bool `json:"tuesday,omitempty"`
	Wednesday *bool `json:"wednesday,omitempty"`
}

// NewRatePlanScheduleDetailType instantiates a new RatePlanScheduleDetailType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRatePlanScheduleDetailType() *RatePlanScheduleDetailType {
	this := RatePlanScheduleDetailType{}
	return &this
}

// NewRatePlanScheduleDetailTypeWithDefaults instantiates a new RatePlanScheduleDetailType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatePlanScheduleDetailTypeWithDefaults() *RatePlanScheduleDetailType {
	this := RatePlanScheduleDetailType{}
	return &this
}

// GetAdjustmentDetails returns the AdjustmentDetails field value if set, zero value otherwise.
func (o *RatePlanScheduleDetailType) GetAdjustmentDetails() []AdjustmentDetailType {
	if o == nil || IsNil(o.AdjustmentDetails) {
		var ret []AdjustmentDetailType
		return ret
	}
	return o.AdjustmentDetails
}

// GetAdjustmentDetailsOk returns a tuple with the AdjustmentDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleDetailType) GetAdjustmentDetailsOk() ([]AdjustmentDetailType, bool) {
	if o == nil || IsNil(o.AdjustmentDetails) {
		return nil, false
	}
	return o.AdjustmentDetails, true
}

// HasAdjustmentDetails returns a boolean if a field has been set.
func (o *RatePlanScheduleDetailType) HasAdjustmentDetails() bool {
	if o != nil && !IsNil(o.AdjustmentDetails) {
		return true
	}

	return false
}

// SetAdjustmentDetails gets a reference to the given []AdjustmentDetailType and assigns it to the AdjustmentDetails field.
func (o *RatePlanScheduleDetailType) SetAdjustmentDetails(v []AdjustmentDetailType) {
	o.AdjustmentDetails = v
}

// GetAdvancedBaseRateOffset returns the AdvancedBaseRateOffset field value if set, zero value otherwise.
func (o *RatePlanScheduleDetailType) GetAdvancedBaseRateOffset() AdvancedBaseRateOffsetType {
	if o == nil || IsNil(o.AdvancedBaseRateOffset) {
		var ret AdvancedBaseRateOffsetType
		return ret
	}
	return *o.AdvancedBaseRateOffset
}

// GetAdvancedBaseRateOffsetOk returns a tuple with the AdvancedBaseRateOffset field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleDetailType) GetAdvancedBaseRateOffsetOk() (*AdvancedBaseRateOffsetType, bool) {
	if o == nil || IsNil(o.AdvancedBaseRateOffset) {
		return nil, false
	}
	return o.AdvancedBaseRateOffset, true
}

// HasAdvancedBaseRateOffset returns a boolean if a field has been set.
func (o *RatePlanScheduleDetailType) HasAdvancedBaseRateOffset() bool {
	if o != nil && !IsNil(o.AdvancedBaseRateOffset) {
		return true
	}

	return false
}

// SetAdvancedBaseRateOffset gets a reference to the given AdvancedBaseRateOffsetType and assigns it to the AdvancedBaseRateOffset field.
func (o *RatePlanScheduleDetailType) SetAdvancedBaseRateOffset(v AdvancedBaseRateOffsetType) {
	o.AdvancedBaseRateOffset = &v
}

// GetAdvancedDailyBaseRatePlanCode returns the AdvancedDailyBaseRatePlanCode field value if set, zero value otherwise.
func (o *RatePlanScheduleDetailType) GetAdvancedDailyBaseRatePlanCode() string {
	if o == nil || IsNil(o.AdvancedDailyBaseRatePlanCode) {
		var ret string
		return ret
	}
	return *o.AdvancedDailyBaseRatePlanCode
}

// GetAdvancedDailyBaseRatePlanCodeOk returns a tuple with the AdvancedDailyBaseRatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleDetailType) GetAdvancedDailyBaseRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.AdvancedDailyBaseRatePlanCode) {
		return nil, false
	}
	return o.AdvancedDailyBaseRatePlanCode, true
}

// HasAdvancedDailyBaseRatePlanCode returns a boolean if a field has been set.
func (o *RatePlanScheduleDetailType) HasAdvancedDailyBaseRatePlanCode() bool {
	if o != nil && !IsNil(o.AdvancedDailyBaseRatePlanCode) {
		return true
	}

	return false
}

// SetAdvancedDailyBaseRatePlanCode gets a reference to the given string and assigns it to the AdvancedDailyBaseRatePlanCode field.
func (o *RatePlanScheduleDetailType) SetAdvancedDailyBaseRatePlanCode(v string) {
	o.AdvancedDailyBaseRatePlanCode = &v
}

// GetClassifications returns the Classifications field value if set, zero value otherwise.
func (o *RatePlanScheduleDetailType) GetClassifications() RatePlanScheduleClassificationsType {
	if o == nil || IsNil(o.Classifications) {
		var ret RatePlanScheduleClassificationsType
		return ret
	}
	return *o.Classifications
}

// GetClassificationsOk returns a tuple with the Classifications field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleDetailType) GetClassificationsOk() (*RatePlanScheduleClassificationsType, bool) {
	if o == nil || IsNil(o.Classifications) {
		return nil, false
	}
	return o.Classifications, true
}

// HasClassifications returns a boolean if a field has been set.
func (o *RatePlanScheduleDetailType) HasClassifications() bool {
	if o != nil && !IsNil(o.Classifications) {
		return true
	}

	return false
}

// SetClassifications gets a reference to the given RatePlanScheduleClassificationsType and assigns it to the Classifications field.
func (o *RatePlanScheduleDetailType) SetClassifications(v RatePlanScheduleClassificationsType) {
	o.Classifications = &v
}

// GetEnd returns the End field value if set, zero value otherwise.
func (o *RatePlanScheduleDetailType) GetEnd() string {
	if o == nil || IsNil(o.End) {
		var ret string
		return ret
	}
	return *o.End
}

// GetEndOk returns a tuple with the End field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleDetailType) GetEndOk() (*string, bool) {
	if o == nil || IsNil(o.End) {
		return nil, false
	}
	return o.End, true
}

// HasEnd returns a boolean if a field has been set.
func (o *RatePlanScheduleDetailType) HasEnd() bool {
	if o != nil && !IsNil(o.End) {
		return true
	}

	return false
}

// SetEnd gets a reference to the given string and assigns it to the End field.
func (o *RatePlanScheduleDetailType) SetEnd(v string) {
	o.End = &v
}

// GetFriday returns the Friday field value if set, zero value otherwise.
func (o *RatePlanScheduleDetailType) GetFriday() bool {
	if o == nil || IsNil(o.Friday) {
		var ret bool
		return ret
	}
	return *o.Friday
}

// GetFridayOk returns a tuple with the Friday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleDetailType) GetFridayOk() (*bool, bool) {
	if o == nil || IsNil(o.Friday) {
		return nil, false
	}
	return o.Friday, true
}

// HasFriday returns a boolean if a field has been set.
func (o *RatePlanScheduleDetailType) HasFriday() bool {
	if o != nil && !IsNil(o.Friday) {
		return true
	}

	return false
}

// SetFriday gets a reference to the given bool and assigns it to the Friday field.
func (o *RatePlanScheduleDetailType) SetFriday(v bool) {
	o.Friday = &v
}

// GetMonday returns the Monday field value if set, zero value otherwise.
func (o *RatePlanScheduleDetailType) GetMonday() bool {
	if o == nil || IsNil(o.Monday) {
		var ret bool
		return ret
	}
	return *o.Monday
}

// GetMondayOk returns a tuple with the Monday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleDetailType) GetMondayOk() (*bool, bool) {
	if o == nil || IsNil(o.Monday) {
		return nil, false
	}
	return o.Monday, true
}

// HasMonday returns a boolean if a field has been set.
func (o *RatePlanScheduleDetailType) HasMonday() bool {
	if o != nil && !IsNil(o.Monday) {
		return true
	}

	return false
}

// SetMonday gets a reference to the given bool and assigns it to the Monday field.
func (o *RatePlanScheduleDetailType) SetMonday(v bool) {
	o.Monday = &v
}

// GetOccupantThresholdPricing returns the OccupantThresholdPricing field value if set, zero value otherwise.
func (o *RatePlanScheduleDetailType) GetOccupantThresholdPricing() OccupantThresholdPricingType {
	if o == nil || IsNil(o.OccupantThresholdPricing) {
		var ret OccupantThresholdPricingType
		return ret
	}
	return *o.OccupantThresholdPricing
}

// GetOccupantThresholdPricingOk returns a tuple with the OccupantThresholdPricing field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleDetailType) GetOccupantThresholdPricingOk() (*OccupantThresholdPricingType, bool) {
	if o == nil || IsNil(o.OccupantThresholdPricing) {
		return nil, false
	}
	return o.OccupantThresholdPricing, true
}

// HasOccupantThresholdPricing returns a boolean if a field has been set.
func (o *RatePlanScheduleDetailType) HasOccupantThresholdPricing() bool {
	if o != nil && !IsNil(o.OccupantThresholdPricing) {
		return true
	}

	return false
}

// SetOccupantThresholdPricing gets a reference to the given OccupantThresholdPricingType and assigns it to the OccupantThresholdPricing field.
func (o *RatePlanScheduleDetailType) SetOccupantThresholdPricing(v OccupantThresholdPricingType) {
	o.OccupantThresholdPricing = &v
}

// GetRateAmountBoundaries returns the RateAmountBoundaries field value if set, zero value otherwise.
func (o *RatePlanScheduleDetailType) GetRateAmountBoundaries() RateAmountBoundariesType {
	if o == nil || IsNil(o.RateAmountBoundaries) {
		var ret RateAmountBoundariesType
		return ret
	}
	return *o.RateAmountBoundaries
}

// GetRateAmountBoundariesOk returns a tuple with the RateAmountBoundaries field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleDetailType) GetRateAmountBoundariesOk() (*RateAmountBoundariesType, bool) {
	if o == nil || IsNil(o.RateAmountBoundaries) {
		return nil, false
	}
	return o.RateAmountBoundaries, true
}

// HasRateAmountBoundaries returns a boolean if a field has been set.
func (o *RatePlanScheduleDetailType) HasRateAmountBoundaries() bool {
	if o != nil && !IsNil(o.RateAmountBoundaries) {
		return true
	}

	return false
}

// SetRateAmountBoundaries gets a reference to the given RateAmountBoundariesType and assigns it to the RateAmountBoundaries field.
func (o *RatePlanScheduleDetailType) SetRateAmountBoundaries(v RateAmountBoundariesType) {
	o.RateAmountBoundaries = &v
}

// GetRateAmounts returns the RateAmounts field value if set, zero value otherwise.
func (o *RatePlanScheduleDetailType) GetRateAmounts() ScheduleRateAmountsType {
	if o == nil || IsNil(o.RateAmounts) {
		var ret ScheduleRateAmountsType
		return ret
	}
	return *o.RateAmounts
}

// GetRateAmountsOk returns a tuple with the RateAmounts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleDetailType) GetRateAmountsOk() (*ScheduleRateAmountsType, bool) {
	if o == nil || IsNil(o.RateAmounts) {
		return nil, false
	}
	return o.RateAmounts, true
}

// HasRateAmounts returns a boolean if a field has been set.
func (o *RatePlanScheduleDetailType) HasRateAmounts() bool {
	if o != nil && !IsNil(o.RateAmounts) {
		return true
	}

	return false
}

// SetRateAmounts gets a reference to the given ScheduleRateAmountsType and assigns it to the RateAmounts field.
func (o *RatePlanScheduleDetailType) SetRateAmounts(v ScheduleRateAmountsType) {
	o.RateAmounts = &v
}

// GetRateSchedulePackages returns the RateSchedulePackages field value if set, zero value otherwise.
func (o *RatePlanScheduleDetailType) GetRateSchedulePackages() RatePackagesType {
	if o == nil || IsNil(o.RateSchedulePackages) {
		var ret RatePackagesType
		return ret
	}
	return *o.RateSchedulePackages
}

// GetRateSchedulePackagesOk returns a tuple with the RateSchedulePackages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleDetailType) GetRateSchedulePackagesOk() (*RatePackagesType, bool) {
	if o == nil || IsNil(o.RateSchedulePackages) {
		return nil, false
	}
	return o.RateSchedulePackages, true
}

// HasRateSchedulePackages returns a boolean if a field has been set.
func (o *RatePlanScheduleDetailType) HasRateSchedulePackages() bool {
	if o != nil && !IsNil(o.RateSchedulePackages) {
		return true
	}

	return false
}

// SetRateSchedulePackages gets a reference to the given RatePackagesType and assigns it to the RateSchedulePackages field.
func (o *RatePlanScheduleDetailType) SetRateSchedulePackages(v RatePackagesType) {
	o.RateSchedulePackages = &v
}

// GetRoomTypeList returns the RoomTypeList field value if set, zero value otherwise.
func (o *RatePlanScheduleDetailType) GetRoomTypeList() []string {
	if o == nil || IsNil(o.RoomTypeList) {
		var ret []string
		return ret
	}
	return o.RoomTypeList
}

// GetRoomTypeListOk returns a tuple with the RoomTypeList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleDetailType) GetRoomTypeListOk() ([]string, bool) {
	if o == nil || IsNil(o.RoomTypeList) {
		return nil, false
	}
	return o.RoomTypeList, true
}

// HasRoomTypeList returns a boolean if a field has been set.
func (o *RatePlanScheduleDetailType) HasRoomTypeList() bool {
	if o != nil && !IsNil(o.RoomTypeList) {
		return true
	}

	return false
}

// SetRoomTypeList gets a reference to the given []string and assigns it to the RoomTypeList field.
func (o *RatePlanScheduleDetailType) SetRoomTypeList(v []string) {
	o.RoomTypeList = v
}

// GetSaturday returns the Saturday field value if set, zero value otherwise.
func (o *RatePlanScheduleDetailType) GetSaturday() bool {
	if o == nil || IsNil(o.Saturday) {
		var ret bool
		return ret
	}
	return *o.Saturday
}

// GetSaturdayOk returns a tuple with the Saturday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleDetailType) GetSaturdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Saturday) {
		return nil, false
	}
	return o.Saturday, true
}

// HasSaturday returns a boolean if a field has been set.
func (o *RatePlanScheduleDetailType) HasSaturday() bool {
	if o != nil && !IsNil(o.Saturday) {
		return true
	}

	return false
}

// SetSaturday gets a reference to the given bool and assigns it to the Saturday field.
func (o *RatePlanScheduleDetailType) SetSaturday(v bool) {
	o.Saturday = &v
}

// GetSeasonCode returns the SeasonCode field value if set, zero value otherwise.
func (o *RatePlanScheduleDetailType) GetSeasonCode() string {
	if o == nil || IsNil(o.SeasonCode) {
		var ret string
		return ret
	}
	return *o.SeasonCode
}

// GetSeasonCodeOk returns a tuple with the SeasonCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleDetailType) GetSeasonCodeOk() (*string, bool) {
	if o == nil || IsNil(o.SeasonCode) {
		return nil, false
	}
	return o.SeasonCode, true
}

// HasSeasonCode returns a boolean if a field has been set.
func (o *RatePlanScheduleDetailType) HasSeasonCode() bool {
	if o != nil && !IsNil(o.SeasonCode) {
		return true
	}

	return false
}

// SetSeasonCode gets a reference to the given string and assigns it to the SeasonCode field.
func (o *RatePlanScheduleDetailType) SetSeasonCode(v string) {
	o.SeasonCode = &v
}

// GetStart returns the Start field value if set, zero value otherwise.
func (o *RatePlanScheduleDetailType) GetStart() string {
	if o == nil || IsNil(o.Start) {
		var ret string
		return ret
	}
	return *o.Start
}

// GetStartOk returns a tuple with the Start field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleDetailType) GetStartOk() (*string, bool) {
	if o == nil || IsNil(o.Start) {
		return nil, false
	}
	return o.Start, true
}

// HasStart returns a boolean if a field has been set.
func (o *RatePlanScheduleDetailType) HasStart() bool {
	if o != nil && !IsNil(o.Start) {
		return true
	}

	return false
}

// SetStart gets a reference to the given string and assigns it to the Start field.
func (o *RatePlanScheduleDetailType) SetStart(v string) {
	o.Start = &v
}

// GetSunday returns the Sunday field value if set, zero value otherwise.
func (o *RatePlanScheduleDetailType) GetSunday() bool {
	if o == nil || IsNil(o.Sunday) {
		var ret bool
		return ret
	}
	return *o.Sunday
}

// GetSundayOk returns a tuple with the Sunday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleDetailType) GetSundayOk() (*bool, bool) {
	if o == nil || IsNil(o.Sunday) {
		return nil, false
	}
	return o.Sunday, true
}

// HasSunday returns a boolean if a field has been set.
func (o *RatePlanScheduleDetailType) HasSunday() bool {
	if o != nil && !IsNil(o.Sunday) {
		return true
	}

	return false
}

// SetSunday gets a reference to the given bool and assigns it to the Sunday field.
func (o *RatePlanScheduleDetailType) SetSunday(v bool) {
	o.Sunday = &v
}

// GetThursday returns the Thursday field value if set, zero value otherwise.
func (o *RatePlanScheduleDetailType) GetThursday() bool {
	if o == nil || IsNil(o.Thursday) {
		var ret bool
		return ret
	}
	return *o.Thursday
}

// GetThursdayOk returns a tuple with the Thursday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleDetailType) GetThursdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Thursday) {
		return nil, false
	}
	return o.Thursday, true
}

// HasThursday returns a boolean if a field has been set.
func (o *RatePlanScheduleDetailType) HasThursday() bool {
	if o != nil && !IsNil(o.Thursday) {
		return true
	}

	return false
}

// SetThursday gets a reference to the given bool and assigns it to the Thursday field.
func (o *RatePlanScheduleDetailType) SetThursday(v bool) {
	o.Thursday = &v
}

// GetTierID returns the TierID field value if set, zero value otherwise.
func (o *RatePlanScheduleDetailType) GetTierID() int32 {
	if o == nil || IsNil(o.TierID) {
		var ret int32
		return ret
	}
	return *o.TierID
}

// GetTierIDOk returns a tuple with the TierID field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleDetailType) GetTierIDOk() (*int32, bool) {
	if o == nil || IsNil(o.TierID) {
		return nil, false
	}
	return o.TierID, true
}

// HasTierID returns a boolean if a field has been set.
func (o *RatePlanScheduleDetailType) HasTierID() bool {
	if o != nil && !IsNil(o.TierID) {
		return true
	}

	return false
}

// SetTierID gets a reference to the given int32 and assigns it to the TierID field.
func (o *RatePlanScheduleDetailType) SetTierID(v int32) {
	o.TierID = &v
}

// GetTuesday returns the Tuesday field value if set, zero value otherwise.
func (o *RatePlanScheduleDetailType) GetTuesday() bool {
	if o == nil || IsNil(o.Tuesday) {
		var ret bool
		return ret
	}
	return *o.Tuesday
}

// GetTuesdayOk returns a tuple with the Tuesday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleDetailType) GetTuesdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Tuesday) {
		return nil, false
	}
	return o.Tuesday, true
}

// HasTuesday returns a boolean if a field has been set.
func (o *RatePlanScheduleDetailType) HasTuesday() bool {
	if o != nil && !IsNil(o.Tuesday) {
		return true
	}

	return false
}

// SetTuesday gets a reference to the given bool and assigns it to the Tuesday field.
func (o *RatePlanScheduleDetailType) SetTuesday(v bool) {
	o.Tuesday = &v
}

// GetWednesday returns the Wednesday field value if set, zero value otherwise.
func (o *RatePlanScheduleDetailType) GetWednesday() bool {
	if o == nil || IsNil(o.Wednesday) {
		var ret bool
		return ret
	}
	return *o.Wednesday
}

// GetWednesdayOk returns a tuple with the Wednesday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanScheduleDetailType) GetWednesdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Wednesday) {
		return nil, false
	}
	return o.Wednesday, true
}

// HasWednesday returns a boolean if a field has been set.
func (o *RatePlanScheduleDetailType) HasWednesday() bool {
	if o != nil && !IsNil(o.Wednesday) {
		return true
	}

	return false
}

// SetWednesday gets a reference to the given bool and assigns it to the Wednesday field.
func (o *RatePlanScheduleDetailType) SetWednesday(v bool) {
	o.Wednesday = &v
}

func (o RatePlanScheduleDetailType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RatePlanScheduleDetailType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AdjustmentDetails) {
		toSerialize["adjustmentDetails"] = o.AdjustmentDetails
	}
	if !IsNil(o.AdvancedBaseRateOffset) {
		toSerialize["advancedBaseRateOffset"] = o.AdvancedBaseRateOffset
	}
	if !IsNil(o.AdvancedDailyBaseRatePlanCode) {
		toSerialize["advancedDailyBaseRatePlanCode"] = o.AdvancedDailyBaseRatePlanCode
	}
	if !IsNil(o.Classifications) {
		toSerialize["classifications"] = o.Classifications
	}
	if !IsNil(o.End) {
		toSerialize["end"] = o.End
	}
	if !IsNil(o.Friday) {
		toSerialize["friday"] = o.Friday
	}
	if !IsNil(o.Monday) {
		toSerialize["monday"] = o.Monday
	}
	if !IsNil(o.OccupantThresholdPricing) {
		toSerialize["occupantThresholdPricing"] = o.OccupantThresholdPricing
	}
	if !IsNil(o.RateAmountBoundaries) {
		toSerialize["rateAmountBoundaries"] = o.RateAmountBoundaries
	}
	if !IsNil(o.RateAmounts) {
		toSerialize["rateAmounts"] = o.RateAmounts
	}
	if !IsNil(o.RateSchedulePackages) {
		toSerialize["rateSchedulePackages"] = o.RateSchedulePackages
	}
	if !IsNil(o.RoomTypeList) {
		toSerialize["roomTypeList"] = o.RoomTypeList
	}
	if !IsNil(o.Saturday) {
		toSerialize["saturday"] = o.Saturday
	}
	if !IsNil(o.SeasonCode) {
		toSerialize["seasonCode"] = o.SeasonCode
	}
	if !IsNil(o.Start) {
		toSerialize["start"] = o.Start
	}
	if !IsNil(o.Sunday) {
		toSerialize["sunday"] = o.Sunday
	}
	if !IsNil(o.Thursday) {
		toSerialize["thursday"] = o.Thursday
	}
	if !IsNil(o.TierID) {
		toSerialize["tierID"] = o.TierID
	}
	if !IsNil(o.Tuesday) {
		toSerialize["tuesday"] = o.Tuesday
	}
	if !IsNil(o.Wednesday) {
		toSerialize["wednesday"] = o.Wednesday
	}
	return toSerialize, nil
}

type NullableRatePlanScheduleDetailType struct {
	value *RatePlanScheduleDetailType
	isSet bool
}

func (v NullableRatePlanScheduleDetailType) Get() *RatePlanScheduleDetailType {
	return v.value
}

func (v *NullableRatePlanScheduleDetailType) Set(val *RatePlanScheduleDetailType) {
	v.value = val
	v.isSet = true
}

func (v NullableRatePlanScheduleDetailType) IsSet() bool {
	return v.isSet
}

func (v *NullableRatePlanScheduleDetailType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRatePlanScheduleDetailType(val *RatePlanScheduleDetailType) *NullableRatePlanScheduleDetailType {
	return &NullableRatePlanScheduleDetailType{value: val, isSet: true}
}

func (v NullableRatePlanScheduleDetailType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRatePlanScheduleDetailType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


