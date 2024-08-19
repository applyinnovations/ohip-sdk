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

// checks if the DailyRateDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DailyRateDetailType{}

// DailyRateDetailType Rate details for the different dates of a reservation.
type DailyRateDetailType struct {
	// Indicates if all the share reservations will be changed. This is returned in the response after validation, indicating whether all shares will be changed (in the case of room type change or date change).
	ChangeAllSharers *bool `json:"changeAllSharers,omitempty"`
	// The Commission Code used for the reservation.
	CommissionCode *string `json:"commissionCode,omitempty"`
	// Indicates if the Rate Code is discountable i.e discounts are allowed on the rate code.
	DiscountAllowed *bool `json:"discountAllowed,omitempty"`
	// The date of the reservation stay. If the same details need to be applied to a date range of the stay, then the Start Date and End Date would specify the range.
	EndDate *string `json:"endDate,omitempty"`
	// Indicates if the rate is fixed and could be different from the default rate amount of the rate code.
	FixedRate *bool `json:"fixedRate,omitempty"`
	GuestCounts *GuestCountsType `json:"guestCounts,omitempty"`
	// Market Code of the reservation.
	MarketCode *string `json:"marketCode,omitempty"`
	// Type to specify a rate promotion. Usually attached to a reservation to indicate a specific promotion is applied to the reservation.
	Promotions []PromotionType `json:"promotions,omitempty"`
	Rate *AmountType `json:"rate,omitempty"`
	// The Rate Code of the reservation.
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	// Room number of the reservation.
	RoomId *string `json:"roomId,omitempty"`
	// Room Type of the reservation.
	RoomType *string `json:"roomType,omitempty"`
	// The Room Type on which the rate is based on. The reservation may use a different room type but is charged based on a different room type.
	RoomTypeToCharge *string `json:"roomTypeToCharge,omitempty"`
	// Source Code of the reservation.
	SourceCode *string `json:"sourceCode,omitempty"`
	// The date of the reservation stay.
	StartDate *string `json:"startDate,omitempty"`
}

// NewDailyRateDetailType instantiates a new DailyRateDetailType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDailyRateDetailType() *DailyRateDetailType {
	this := DailyRateDetailType{}
	return &this
}

// NewDailyRateDetailTypeWithDefaults instantiates a new DailyRateDetailType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDailyRateDetailTypeWithDefaults() *DailyRateDetailType {
	this := DailyRateDetailType{}
	return &this
}

// GetChangeAllSharers returns the ChangeAllSharers field value if set, zero value otherwise.
func (o *DailyRateDetailType) GetChangeAllSharers() bool {
	if o == nil || IsNil(o.ChangeAllSharers) {
		var ret bool
		return ret
	}
	return *o.ChangeAllSharers
}

// GetChangeAllSharersOk returns a tuple with the ChangeAllSharers field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateDetailType) GetChangeAllSharersOk() (*bool, bool) {
	if o == nil || IsNil(o.ChangeAllSharers) {
		return nil, false
	}
	return o.ChangeAllSharers, true
}

// HasChangeAllSharers returns a boolean if a field has been set.
func (o *DailyRateDetailType) HasChangeAllSharers() bool {
	if o != nil && !IsNil(o.ChangeAllSharers) {
		return true
	}

	return false
}

// SetChangeAllSharers gets a reference to the given bool and assigns it to the ChangeAllSharers field.
func (o *DailyRateDetailType) SetChangeAllSharers(v bool) {
	o.ChangeAllSharers = &v
}

// GetCommissionCode returns the CommissionCode field value if set, zero value otherwise.
func (o *DailyRateDetailType) GetCommissionCode() string {
	if o == nil || IsNil(o.CommissionCode) {
		var ret string
		return ret
	}
	return *o.CommissionCode
}

// GetCommissionCodeOk returns a tuple with the CommissionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateDetailType) GetCommissionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CommissionCode) {
		return nil, false
	}
	return o.CommissionCode, true
}

// HasCommissionCode returns a boolean if a field has been set.
func (o *DailyRateDetailType) HasCommissionCode() bool {
	if o != nil && !IsNil(o.CommissionCode) {
		return true
	}

	return false
}

// SetCommissionCode gets a reference to the given string and assigns it to the CommissionCode field.
func (o *DailyRateDetailType) SetCommissionCode(v string) {
	o.CommissionCode = &v
}

// GetDiscountAllowed returns the DiscountAllowed field value if set, zero value otherwise.
func (o *DailyRateDetailType) GetDiscountAllowed() bool {
	if o == nil || IsNil(o.DiscountAllowed) {
		var ret bool
		return ret
	}
	return *o.DiscountAllowed
}

// GetDiscountAllowedOk returns a tuple with the DiscountAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateDetailType) GetDiscountAllowedOk() (*bool, bool) {
	if o == nil || IsNil(o.DiscountAllowed) {
		return nil, false
	}
	return o.DiscountAllowed, true
}

// HasDiscountAllowed returns a boolean if a field has been set.
func (o *DailyRateDetailType) HasDiscountAllowed() bool {
	if o != nil && !IsNil(o.DiscountAllowed) {
		return true
	}

	return false
}

// SetDiscountAllowed gets a reference to the given bool and assigns it to the DiscountAllowed field.
func (o *DailyRateDetailType) SetDiscountAllowed(v bool) {
	o.DiscountAllowed = &v
}

// GetEndDate returns the EndDate field value if set, zero value otherwise.
func (o *DailyRateDetailType) GetEndDate() string {
	if o == nil || IsNil(o.EndDate) {
		var ret string
		return ret
	}
	return *o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateDetailType) GetEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndDate) {
		return nil, false
	}
	return o.EndDate, true
}

// HasEndDate returns a boolean if a field has been set.
func (o *DailyRateDetailType) HasEndDate() bool {
	if o != nil && !IsNil(o.EndDate) {
		return true
	}

	return false
}

// SetEndDate gets a reference to the given string and assigns it to the EndDate field.
func (o *DailyRateDetailType) SetEndDate(v string) {
	o.EndDate = &v
}

// GetFixedRate returns the FixedRate field value if set, zero value otherwise.
func (o *DailyRateDetailType) GetFixedRate() bool {
	if o == nil || IsNil(o.FixedRate) {
		var ret bool
		return ret
	}
	return *o.FixedRate
}

// GetFixedRateOk returns a tuple with the FixedRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateDetailType) GetFixedRateOk() (*bool, bool) {
	if o == nil || IsNil(o.FixedRate) {
		return nil, false
	}
	return o.FixedRate, true
}

// HasFixedRate returns a boolean if a field has been set.
func (o *DailyRateDetailType) HasFixedRate() bool {
	if o != nil && !IsNil(o.FixedRate) {
		return true
	}

	return false
}

// SetFixedRate gets a reference to the given bool and assigns it to the FixedRate field.
func (o *DailyRateDetailType) SetFixedRate(v bool) {
	o.FixedRate = &v
}

// GetGuestCounts returns the GuestCounts field value if set, zero value otherwise.
func (o *DailyRateDetailType) GetGuestCounts() GuestCountsType {
	if o == nil || IsNil(o.GuestCounts) {
		var ret GuestCountsType
		return ret
	}
	return *o.GuestCounts
}

// GetGuestCountsOk returns a tuple with the GuestCounts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateDetailType) GetGuestCountsOk() (*GuestCountsType, bool) {
	if o == nil || IsNil(o.GuestCounts) {
		return nil, false
	}
	return o.GuestCounts, true
}

// HasGuestCounts returns a boolean if a field has been set.
func (o *DailyRateDetailType) HasGuestCounts() bool {
	if o != nil && !IsNil(o.GuestCounts) {
		return true
	}

	return false
}

// SetGuestCounts gets a reference to the given GuestCountsType and assigns it to the GuestCounts field.
func (o *DailyRateDetailType) SetGuestCounts(v GuestCountsType) {
	o.GuestCounts = &v
}

// GetMarketCode returns the MarketCode field value if set, zero value otherwise.
func (o *DailyRateDetailType) GetMarketCode() string {
	if o == nil || IsNil(o.MarketCode) {
		var ret string
		return ret
	}
	return *o.MarketCode
}

// GetMarketCodeOk returns a tuple with the MarketCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateDetailType) GetMarketCodeOk() (*string, bool) {
	if o == nil || IsNil(o.MarketCode) {
		return nil, false
	}
	return o.MarketCode, true
}

// HasMarketCode returns a boolean if a field has been set.
func (o *DailyRateDetailType) HasMarketCode() bool {
	if o != nil && !IsNil(o.MarketCode) {
		return true
	}

	return false
}

// SetMarketCode gets a reference to the given string and assigns it to the MarketCode field.
func (o *DailyRateDetailType) SetMarketCode(v string) {
	o.MarketCode = &v
}

// GetPromotions returns the Promotions field value if set, zero value otherwise.
func (o *DailyRateDetailType) GetPromotions() []PromotionType {
	if o == nil || IsNil(o.Promotions) {
		var ret []PromotionType
		return ret
	}
	return o.Promotions
}

// GetPromotionsOk returns a tuple with the Promotions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateDetailType) GetPromotionsOk() ([]PromotionType, bool) {
	if o == nil || IsNil(o.Promotions) {
		return nil, false
	}
	return o.Promotions, true
}

// HasPromotions returns a boolean if a field has been set.
func (o *DailyRateDetailType) HasPromotions() bool {
	if o != nil && !IsNil(o.Promotions) {
		return true
	}

	return false
}

// SetPromotions gets a reference to the given []PromotionType and assigns it to the Promotions field.
func (o *DailyRateDetailType) SetPromotions(v []PromotionType) {
	o.Promotions = v
}

// GetRate returns the Rate field value if set, zero value otherwise.
func (o *DailyRateDetailType) GetRate() AmountType {
	if o == nil || IsNil(o.Rate) {
		var ret AmountType
		return ret
	}
	return *o.Rate
}

// GetRateOk returns a tuple with the Rate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateDetailType) GetRateOk() (*AmountType, bool) {
	if o == nil || IsNil(o.Rate) {
		return nil, false
	}
	return o.Rate, true
}

// HasRate returns a boolean if a field has been set.
func (o *DailyRateDetailType) HasRate() bool {
	if o != nil && !IsNil(o.Rate) {
		return true
	}

	return false
}

// SetRate gets a reference to the given AmountType and assigns it to the Rate field.
func (o *DailyRateDetailType) SetRate(v AmountType) {
	o.Rate = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *DailyRateDetailType) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateDetailType) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *DailyRateDetailType) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *DailyRateDetailType) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetRoomId returns the RoomId field value if set, zero value otherwise.
func (o *DailyRateDetailType) GetRoomId() string {
	if o == nil || IsNil(o.RoomId) {
		var ret string
		return ret
	}
	return *o.RoomId
}

// GetRoomIdOk returns a tuple with the RoomId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateDetailType) GetRoomIdOk() (*string, bool) {
	if o == nil || IsNil(o.RoomId) {
		return nil, false
	}
	return o.RoomId, true
}

// HasRoomId returns a boolean if a field has been set.
func (o *DailyRateDetailType) HasRoomId() bool {
	if o != nil && !IsNil(o.RoomId) {
		return true
	}

	return false
}

// SetRoomId gets a reference to the given string and assigns it to the RoomId field.
func (o *DailyRateDetailType) SetRoomId(v string) {
	o.RoomId = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *DailyRateDetailType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateDetailType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *DailyRateDetailType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *DailyRateDetailType) SetRoomType(v string) {
	o.RoomType = &v
}

// GetRoomTypeToCharge returns the RoomTypeToCharge field value if set, zero value otherwise.
func (o *DailyRateDetailType) GetRoomTypeToCharge() string {
	if o == nil || IsNil(o.RoomTypeToCharge) {
		var ret string
		return ret
	}
	return *o.RoomTypeToCharge
}

// GetRoomTypeToChargeOk returns a tuple with the RoomTypeToCharge field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateDetailType) GetRoomTypeToChargeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomTypeToCharge) {
		return nil, false
	}
	return o.RoomTypeToCharge, true
}

// HasRoomTypeToCharge returns a boolean if a field has been set.
func (o *DailyRateDetailType) HasRoomTypeToCharge() bool {
	if o != nil && !IsNil(o.RoomTypeToCharge) {
		return true
	}

	return false
}

// SetRoomTypeToCharge gets a reference to the given string and assigns it to the RoomTypeToCharge field.
func (o *DailyRateDetailType) SetRoomTypeToCharge(v string) {
	o.RoomTypeToCharge = &v
}

// GetSourceCode returns the SourceCode field value if set, zero value otherwise.
func (o *DailyRateDetailType) GetSourceCode() string {
	if o == nil || IsNil(o.SourceCode) {
		var ret string
		return ret
	}
	return *o.SourceCode
}

// GetSourceCodeOk returns a tuple with the SourceCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateDetailType) GetSourceCodeOk() (*string, bool) {
	if o == nil || IsNil(o.SourceCode) {
		return nil, false
	}
	return o.SourceCode, true
}

// HasSourceCode returns a boolean if a field has been set.
func (o *DailyRateDetailType) HasSourceCode() bool {
	if o != nil && !IsNil(o.SourceCode) {
		return true
	}

	return false
}

// SetSourceCode gets a reference to the given string and assigns it to the SourceCode field.
func (o *DailyRateDetailType) SetSourceCode(v string) {
	o.SourceCode = &v
}

// GetStartDate returns the StartDate field value if set, zero value otherwise.
func (o *DailyRateDetailType) GetStartDate() string {
	if o == nil || IsNil(o.StartDate) {
		var ret string
		return ret
	}
	return *o.StartDate
}

// GetStartDateOk returns a tuple with the StartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DailyRateDetailType) GetStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.StartDate) {
		return nil, false
	}
	return o.StartDate, true
}

// HasStartDate returns a boolean if a field has been set.
func (o *DailyRateDetailType) HasStartDate() bool {
	if o != nil && !IsNil(o.StartDate) {
		return true
	}

	return false
}

// SetStartDate gets a reference to the given string and assigns it to the StartDate field.
func (o *DailyRateDetailType) SetStartDate(v string) {
	o.StartDate = &v
}

func (o DailyRateDetailType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DailyRateDetailType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ChangeAllSharers) {
		toSerialize["changeAllSharers"] = o.ChangeAllSharers
	}
	if !IsNil(o.CommissionCode) {
		toSerialize["commissionCode"] = o.CommissionCode
	}
	if !IsNil(o.DiscountAllowed) {
		toSerialize["discountAllowed"] = o.DiscountAllowed
	}
	if !IsNil(o.EndDate) {
		toSerialize["endDate"] = o.EndDate
	}
	if !IsNil(o.FixedRate) {
		toSerialize["fixedRate"] = o.FixedRate
	}
	if !IsNil(o.GuestCounts) {
		toSerialize["guestCounts"] = o.GuestCounts
	}
	if !IsNil(o.MarketCode) {
		toSerialize["marketCode"] = o.MarketCode
	}
	if !IsNil(o.Promotions) {
		toSerialize["promotions"] = o.Promotions
	}
	if !IsNil(o.Rate) {
		toSerialize["rate"] = o.Rate
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.RoomId) {
		toSerialize["roomId"] = o.RoomId
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.RoomTypeToCharge) {
		toSerialize["roomTypeToCharge"] = o.RoomTypeToCharge
	}
	if !IsNil(o.SourceCode) {
		toSerialize["sourceCode"] = o.SourceCode
	}
	if !IsNil(o.StartDate) {
		toSerialize["startDate"] = o.StartDate
	}
	return toSerialize, nil
}

type NullableDailyRateDetailType struct {
	value *DailyRateDetailType
	isSet bool
}

func (v NullableDailyRateDetailType) Get() *DailyRateDetailType {
	return v.value
}

func (v *NullableDailyRateDetailType) Set(val *DailyRateDetailType) {
	v.value = val
	v.isSet = true
}

func (v NullableDailyRateDetailType) IsSet() bool {
	return v.isSet
}

func (v *NullableDailyRateDetailType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDailyRateDetailType(val *DailyRateDetailType) *NullableDailyRateDetailType {
	return &NullableDailyRateDetailType{value: val, isSet: true}
}

func (v NullableDailyRateDetailType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDailyRateDetailType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


