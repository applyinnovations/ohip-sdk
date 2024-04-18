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

// checks if the TurnawayDetailsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TurnawayDetailsType{}

// TurnawayDetailsType Holds detailed information of a prospect reservation to be turned away.
type TurnawayDetailsType struct {
	GuestCounts *GuestCountsType `json:"guestCounts,omitempty"`
	// Holds Opera Hotel/Resort code of turn away reservation.
	HotelId *string `json:"hotelId,omitempty"`
	// Holds the code that relates to the market being sold to (e.g., the corporate market, packages).
	MarketCode *string `json:"marketCode,omitempty"`
	// Holds the number of rooms.
	NumberOfRooms *int32 `json:"numberOfRooms,omitempty"`
	RateAmount *CurrencyAmountType `json:"rateAmount,omitempty"`
	// Holds the Rate Code.
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	// Holds the Room Type.
	RoomType *string `json:"roomType,omitempty"`
	TimeSpan *TimeSpanType `json:"timeSpan,omitempty"`
	// Holds the Yield Market Code.
	YieldMarketCode *string `json:"yieldMarketCode,omitempty"`
}

// NewTurnawayDetailsType instantiates a new TurnawayDetailsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTurnawayDetailsType() *TurnawayDetailsType {
	this := TurnawayDetailsType{}
	return &this
}

// NewTurnawayDetailsTypeWithDefaults instantiates a new TurnawayDetailsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTurnawayDetailsTypeWithDefaults() *TurnawayDetailsType {
	this := TurnawayDetailsType{}
	return &this
}

// GetGuestCounts returns the GuestCounts field value if set, zero value otherwise.
func (o *TurnawayDetailsType) GetGuestCounts() GuestCountsType {
	if o == nil || IsNil(o.GuestCounts) {
		var ret GuestCountsType
		return ret
	}
	return *o.GuestCounts
}

// GetGuestCountsOk returns a tuple with the GuestCounts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TurnawayDetailsType) GetGuestCountsOk() (*GuestCountsType, bool) {
	if o == nil || IsNil(o.GuestCounts) {
		return nil, false
	}
	return o.GuestCounts, true
}

// HasGuestCounts returns a boolean if a field has been set.
func (o *TurnawayDetailsType) HasGuestCounts() bool {
	if o != nil && !IsNil(o.GuestCounts) {
		return true
	}

	return false
}

// SetGuestCounts gets a reference to the given GuestCountsType and assigns it to the GuestCounts field.
func (o *TurnawayDetailsType) SetGuestCounts(v GuestCountsType) {
	o.GuestCounts = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *TurnawayDetailsType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TurnawayDetailsType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *TurnawayDetailsType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *TurnawayDetailsType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetMarketCode returns the MarketCode field value if set, zero value otherwise.
func (o *TurnawayDetailsType) GetMarketCode() string {
	if o == nil || IsNil(o.MarketCode) {
		var ret string
		return ret
	}
	return *o.MarketCode
}

// GetMarketCodeOk returns a tuple with the MarketCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TurnawayDetailsType) GetMarketCodeOk() (*string, bool) {
	if o == nil || IsNil(o.MarketCode) {
		return nil, false
	}
	return o.MarketCode, true
}

// HasMarketCode returns a boolean if a field has been set.
func (o *TurnawayDetailsType) HasMarketCode() bool {
	if o != nil && !IsNil(o.MarketCode) {
		return true
	}

	return false
}

// SetMarketCode gets a reference to the given string and assigns it to the MarketCode field.
func (o *TurnawayDetailsType) SetMarketCode(v string) {
	o.MarketCode = &v
}

// GetNumberOfRooms returns the NumberOfRooms field value if set, zero value otherwise.
func (o *TurnawayDetailsType) GetNumberOfRooms() int32 {
	if o == nil || IsNil(o.NumberOfRooms) {
		var ret int32
		return ret
	}
	return *o.NumberOfRooms
}

// GetNumberOfRoomsOk returns a tuple with the NumberOfRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TurnawayDetailsType) GetNumberOfRoomsOk() (*int32, bool) {
	if o == nil || IsNil(o.NumberOfRooms) {
		return nil, false
	}
	return o.NumberOfRooms, true
}

// HasNumberOfRooms returns a boolean if a field has been set.
func (o *TurnawayDetailsType) HasNumberOfRooms() bool {
	if o != nil && !IsNil(o.NumberOfRooms) {
		return true
	}

	return false
}

// SetNumberOfRooms gets a reference to the given int32 and assigns it to the NumberOfRooms field.
func (o *TurnawayDetailsType) SetNumberOfRooms(v int32) {
	o.NumberOfRooms = &v
}

// GetRateAmount returns the RateAmount field value if set, zero value otherwise.
func (o *TurnawayDetailsType) GetRateAmount() CurrencyAmountType {
	if o == nil || IsNil(o.RateAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.RateAmount
}

// GetRateAmountOk returns a tuple with the RateAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TurnawayDetailsType) GetRateAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.RateAmount) {
		return nil, false
	}
	return o.RateAmount, true
}

// HasRateAmount returns a boolean if a field has been set.
func (o *TurnawayDetailsType) HasRateAmount() bool {
	if o != nil && !IsNil(o.RateAmount) {
		return true
	}

	return false
}

// SetRateAmount gets a reference to the given CurrencyAmountType and assigns it to the RateAmount field.
func (o *TurnawayDetailsType) SetRateAmount(v CurrencyAmountType) {
	o.RateAmount = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *TurnawayDetailsType) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TurnawayDetailsType) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *TurnawayDetailsType) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *TurnawayDetailsType) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *TurnawayDetailsType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TurnawayDetailsType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *TurnawayDetailsType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *TurnawayDetailsType) SetRoomType(v string) {
	o.RoomType = &v
}

// GetTimeSpan returns the TimeSpan field value if set, zero value otherwise.
func (o *TurnawayDetailsType) GetTimeSpan() TimeSpanType {
	if o == nil || IsNil(o.TimeSpan) {
		var ret TimeSpanType
		return ret
	}
	return *o.TimeSpan
}

// GetTimeSpanOk returns a tuple with the TimeSpan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TurnawayDetailsType) GetTimeSpanOk() (*TimeSpanType, bool) {
	if o == nil || IsNil(o.TimeSpan) {
		return nil, false
	}
	return o.TimeSpan, true
}

// HasTimeSpan returns a boolean if a field has been set.
func (o *TurnawayDetailsType) HasTimeSpan() bool {
	if o != nil && !IsNil(o.TimeSpan) {
		return true
	}

	return false
}

// SetTimeSpan gets a reference to the given TimeSpanType and assigns it to the TimeSpan field.
func (o *TurnawayDetailsType) SetTimeSpan(v TimeSpanType) {
	o.TimeSpan = &v
}

// GetYieldMarketCode returns the YieldMarketCode field value if set, zero value otherwise.
func (o *TurnawayDetailsType) GetYieldMarketCode() string {
	if o == nil || IsNil(o.YieldMarketCode) {
		var ret string
		return ret
	}
	return *o.YieldMarketCode
}

// GetYieldMarketCodeOk returns a tuple with the YieldMarketCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TurnawayDetailsType) GetYieldMarketCodeOk() (*string, bool) {
	if o == nil || IsNil(o.YieldMarketCode) {
		return nil, false
	}
	return o.YieldMarketCode, true
}

// HasYieldMarketCode returns a boolean if a field has been set.
func (o *TurnawayDetailsType) HasYieldMarketCode() bool {
	if o != nil && !IsNil(o.YieldMarketCode) {
		return true
	}

	return false
}

// SetYieldMarketCode gets a reference to the given string and assigns it to the YieldMarketCode field.
func (o *TurnawayDetailsType) SetYieldMarketCode(v string) {
	o.YieldMarketCode = &v
}

func (o TurnawayDetailsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TurnawayDetailsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GuestCounts) {
		toSerialize["guestCounts"] = o.GuestCounts
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.MarketCode) {
		toSerialize["marketCode"] = o.MarketCode
	}
	if !IsNil(o.NumberOfRooms) {
		toSerialize["numberOfRooms"] = o.NumberOfRooms
	}
	if !IsNil(o.RateAmount) {
		toSerialize["rateAmount"] = o.RateAmount
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.TimeSpan) {
		toSerialize["timeSpan"] = o.TimeSpan
	}
	if !IsNil(o.YieldMarketCode) {
		toSerialize["yieldMarketCode"] = o.YieldMarketCode
	}
	return toSerialize, nil
}

type NullableTurnawayDetailsType struct {
	value *TurnawayDetailsType
	isSet bool
}

func (v NullableTurnawayDetailsType) Get() *TurnawayDetailsType {
	return v.value
}

func (v *NullableTurnawayDetailsType) Set(val *TurnawayDetailsType) {
	v.value = val
	v.isSet = true
}

func (v NullableTurnawayDetailsType) IsSet() bool {
	return v.isSet
}

func (v *NullableTurnawayDetailsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTurnawayDetailsType(val *TurnawayDetailsType) *NullableTurnawayDetailsType {
	return &NullableTurnawayDetailsType{value: val, isSet: true}
}

func (v NullableTurnawayDetailsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTurnawayDetailsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

