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

// checks if the LinkedReservationInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &LinkedReservationInfoType{}

// LinkedReservationInfoType struct for LinkedReservationInfoType
type LinkedReservationInfoType struct {
	// Allowed action.
	AllowedActions []ReservationAllowedActionType `json:"allowedActions,omitempty"`
	Balance *CurrencyAmountType `json:"balance,omitempty"`
	DisplayColor *string `json:"displayColor,omitempty"`
	GivenName *string `json:"givenName,omitempty"`
	Guarantee *ResGuaranteeType `json:"guarantee,omitempty"`
	HotelId *string `json:"hotelId,omitempty"`
	LinkReservationType *LinkedReservationType `json:"linkReservationType,omitempty"`
	Rate *CurrencyAmountType `json:"rate,omitempty"`
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	ReservationBlock *ReservationBlockType `json:"reservationBlock,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ReservationIdList []UniqueIDType `json:"reservationIdList,omitempty"`
	ReservationStatus *PMSResStatusType `json:"reservationStatus,omitempty"`
	// This attribute is to verify if reverse check-in is allowed for the reservation.
	ReverseCheckInAllowed *bool `json:"reverseCheckInAllowed,omitempty"`
	Room *string `json:"room,omitempty"`
	// This attribute is to verify if room number is locked for the reservation. When true the room number cannot be changed
	RoomNumberLocked *bool `json:"roomNumberLocked,omitempty"`
	RoomType *string `json:"roomType,omitempty"`
	// This attribute checks if rate is suppressed or not in order to properly show strike through.
	SuppressRate *bool `json:"suppressRate,omitempty"`
	Surname *string `json:"surname,omitempty"`
	TimeSpan *TimeSpanType `json:"timeSpan,omitempty"`
	Title *string `json:"title,omitempty"`
}

// NewLinkedReservationInfoType instantiates a new LinkedReservationInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewLinkedReservationInfoType() *LinkedReservationInfoType {
	this := LinkedReservationInfoType{}
	return &this
}

// NewLinkedReservationInfoTypeWithDefaults instantiates a new LinkedReservationInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewLinkedReservationInfoTypeWithDefaults() *LinkedReservationInfoType {
	this := LinkedReservationInfoType{}
	return &this
}

// GetAllowedActions returns the AllowedActions field value if set, zero value otherwise.
func (o *LinkedReservationInfoType) GetAllowedActions() []ReservationAllowedActionType {
	if o == nil || IsNil(o.AllowedActions) {
		var ret []ReservationAllowedActionType
		return ret
	}
	return o.AllowedActions
}

// GetAllowedActionsOk returns a tuple with the AllowedActions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkedReservationInfoType) GetAllowedActionsOk() ([]ReservationAllowedActionType, bool) {
	if o == nil || IsNil(o.AllowedActions) {
		return nil, false
	}
	return o.AllowedActions, true
}

// HasAllowedActions returns a boolean if a field has been set.
func (o *LinkedReservationInfoType) HasAllowedActions() bool {
	if o != nil && !IsNil(o.AllowedActions) {
		return true
	}

	return false
}

// SetAllowedActions gets a reference to the given []ReservationAllowedActionType and assigns it to the AllowedActions field.
func (o *LinkedReservationInfoType) SetAllowedActions(v []ReservationAllowedActionType) {
	o.AllowedActions = v
}

// GetBalance returns the Balance field value if set, zero value otherwise.
func (o *LinkedReservationInfoType) GetBalance() CurrencyAmountType {
	if o == nil || IsNil(o.Balance) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Balance
}

// GetBalanceOk returns a tuple with the Balance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkedReservationInfoType) GetBalanceOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Balance) {
		return nil, false
	}
	return o.Balance, true
}

// HasBalance returns a boolean if a field has been set.
func (o *LinkedReservationInfoType) HasBalance() bool {
	if o != nil && !IsNil(o.Balance) {
		return true
	}

	return false
}

// SetBalance gets a reference to the given CurrencyAmountType and assigns it to the Balance field.
func (o *LinkedReservationInfoType) SetBalance(v CurrencyAmountType) {
	o.Balance = &v
}

// GetDisplayColor returns the DisplayColor field value if set, zero value otherwise.
func (o *LinkedReservationInfoType) GetDisplayColor() string {
	if o == nil || IsNil(o.DisplayColor) {
		var ret string
		return ret
	}
	return *o.DisplayColor
}

// GetDisplayColorOk returns a tuple with the DisplayColor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkedReservationInfoType) GetDisplayColorOk() (*string, bool) {
	if o == nil || IsNil(o.DisplayColor) {
		return nil, false
	}
	return o.DisplayColor, true
}

// HasDisplayColor returns a boolean if a field has been set.
func (o *LinkedReservationInfoType) HasDisplayColor() bool {
	if o != nil && !IsNil(o.DisplayColor) {
		return true
	}

	return false
}

// SetDisplayColor gets a reference to the given string and assigns it to the DisplayColor field.
func (o *LinkedReservationInfoType) SetDisplayColor(v string) {
	o.DisplayColor = &v
}

// GetGivenName returns the GivenName field value if set, zero value otherwise.
func (o *LinkedReservationInfoType) GetGivenName() string {
	if o == nil || IsNil(o.GivenName) {
		var ret string
		return ret
	}
	return *o.GivenName
}

// GetGivenNameOk returns a tuple with the GivenName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkedReservationInfoType) GetGivenNameOk() (*string, bool) {
	if o == nil || IsNil(o.GivenName) {
		return nil, false
	}
	return o.GivenName, true
}

// HasGivenName returns a boolean if a field has been set.
func (o *LinkedReservationInfoType) HasGivenName() bool {
	if o != nil && !IsNil(o.GivenName) {
		return true
	}

	return false
}

// SetGivenName gets a reference to the given string and assigns it to the GivenName field.
func (o *LinkedReservationInfoType) SetGivenName(v string) {
	o.GivenName = &v
}

// GetGuarantee returns the Guarantee field value if set, zero value otherwise.
func (o *LinkedReservationInfoType) GetGuarantee() ResGuaranteeType {
	if o == nil || IsNil(o.Guarantee) {
		var ret ResGuaranteeType
		return ret
	}
	return *o.Guarantee
}

// GetGuaranteeOk returns a tuple with the Guarantee field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkedReservationInfoType) GetGuaranteeOk() (*ResGuaranteeType, bool) {
	if o == nil || IsNil(o.Guarantee) {
		return nil, false
	}
	return o.Guarantee, true
}

// HasGuarantee returns a boolean if a field has been set.
func (o *LinkedReservationInfoType) HasGuarantee() bool {
	if o != nil && !IsNil(o.Guarantee) {
		return true
	}

	return false
}

// SetGuarantee gets a reference to the given ResGuaranteeType and assigns it to the Guarantee field.
func (o *LinkedReservationInfoType) SetGuarantee(v ResGuaranteeType) {
	o.Guarantee = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *LinkedReservationInfoType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkedReservationInfoType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *LinkedReservationInfoType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *LinkedReservationInfoType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLinkReservationType returns the LinkReservationType field value if set, zero value otherwise.
func (o *LinkedReservationInfoType) GetLinkReservationType() LinkedReservationType {
	if o == nil || IsNil(o.LinkReservationType) {
		var ret LinkedReservationType
		return ret
	}
	return *o.LinkReservationType
}

// GetLinkReservationTypeOk returns a tuple with the LinkReservationType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkedReservationInfoType) GetLinkReservationTypeOk() (*LinkedReservationType, bool) {
	if o == nil || IsNil(o.LinkReservationType) {
		return nil, false
	}
	return o.LinkReservationType, true
}

// HasLinkReservationType returns a boolean if a field has been set.
func (o *LinkedReservationInfoType) HasLinkReservationType() bool {
	if o != nil && !IsNil(o.LinkReservationType) {
		return true
	}

	return false
}

// SetLinkReservationType gets a reference to the given LinkedReservationType and assigns it to the LinkReservationType field.
func (o *LinkedReservationInfoType) SetLinkReservationType(v LinkedReservationType) {
	o.LinkReservationType = &v
}

// GetRate returns the Rate field value if set, zero value otherwise.
func (o *LinkedReservationInfoType) GetRate() CurrencyAmountType {
	if o == nil || IsNil(o.Rate) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Rate
}

// GetRateOk returns a tuple with the Rate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkedReservationInfoType) GetRateOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Rate) {
		return nil, false
	}
	return o.Rate, true
}

// HasRate returns a boolean if a field has been set.
func (o *LinkedReservationInfoType) HasRate() bool {
	if o != nil && !IsNil(o.Rate) {
		return true
	}

	return false
}

// SetRate gets a reference to the given CurrencyAmountType and assigns it to the Rate field.
func (o *LinkedReservationInfoType) SetRate(v CurrencyAmountType) {
	o.Rate = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *LinkedReservationInfoType) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkedReservationInfoType) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *LinkedReservationInfoType) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *LinkedReservationInfoType) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetReservationBlock returns the ReservationBlock field value if set, zero value otherwise.
func (o *LinkedReservationInfoType) GetReservationBlock() ReservationBlockType {
	if o == nil || IsNil(o.ReservationBlock) {
		var ret ReservationBlockType
		return ret
	}
	return *o.ReservationBlock
}

// GetReservationBlockOk returns a tuple with the ReservationBlock field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkedReservationInfoType) GetReservationBlockOk() (*ReservationBlockType, bool) {
	if o == nil || IsNil(o.ReservationBlock) {
		return nil, false
	}
	return o.ReservationBlock, true
}

// HasReservationBlock returns a boolean if a field has been set.
func (o *LinkedReservationInfoType) HasReservationBlock() bool {
	if o != nil && !IsNil(o.ReservationBlock) {
		return true
	}

	return false
}

// SetReservationBlock gets a reference to the given ReservationBlockType and assigns it to the ReservationBlock field.
func (o *LinkedReservationInfoType) SetReservationBlock(v ReservationBlockType) {
	o.ReservationBlock = &v
}

// GetReservationIdList returns the ReservationIdList field value if set, zero value otherwise.
func (o *LinkedReservationInfoType) GetReservationIdList() []UniqueIDType {
	if o == nil || IsNil(o.ReservationIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ReservationIdList
}

// GetReservationIdListOk returns a tuple with the ReservationIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkedReservationInfoType) GetReservationIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ReservationIdList) {
		return nil, false
	}
	return o.ReservationIdList, true
}

// HasReservationIdList returns a boolean if a field has been set.
func (o *LinkedReservationInfoType) HasReservationIdList() bool {
	if o != nil && !IsNil(o.ReservationIdList) {
		return true
	}

	return false
}

// SetReservationIdList gets a reference to the given []UniqueIDType and assigns it to the ReservationIdList field.
func (o *LinkedReservationInfoType) SetReservationIdList(v []UniqueIDType) {
	o.ReservationIdList = v
}

// GetReservationStatus returns the ReservationStatus field value if set, zero value otherwise.
func (o *LinkedReservationInfoType) GetReservationStatus() PMSResStatusType {
	if o == nil || IsNil(o.ReservationStatus) {
		var ret PMSResStatusType
		return ret
	}
	return *o.ReservationStatus
}

// GetReservationStatusOk returns a tuple with the ReservationStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkedReservationInfoType) GetReservationStatusOk() (*PMSResStatusType, bool) {
	if o == nil || IsNil(o.ReservationStatus) {
		return nil, false
	}
	return o.ReservationStatus, true
}

// HasReservationStatus returns a boolean if a field has been set.
func (o *LinkedReservationInfoType) HasReservationStatus() bool {
	if o != nil && !IsNil(o.ReservationStatus) {
		return true
	}

	return false
}

// SetReservationStatus gets a reference to the given PMSResStatusType and assigns it to the ReservationStatus field.
func (o *LinkedReservationInfoType) SetReservationStatus(v PMSResStatusType) {
	o.ReservationStatus = &v
}

// GetReverseCheckInAllowed returns the ReverseCheckInAllowed field value if set, zero value otherwise.
func (o *LinkedReservationInfoType) GetReverseCheckInAllowed() bool {
	if o == nil || IsNil(o.ReverseCheckInAllowed) {
		var ret bool
		return ret
	}
	return *o.ReverseCheckInAllowed
}

// GetReverseCheckInAllowedOk returns a tuple with the ReverseCheckInAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkedReservationInfoType) GetReverseCheckInAllowedOk() (*bool, bool) {
	if o == nil || IsNil(o.ReverseCheckInAllowed) {
		return nil, false
	}
	return o.ReverseCheckInAllowed, true
}

// HasReverseCheckInAllowed returns a boolean if a field has been set.
func (o *LinkedReservationInfoType) HasReverseCheckInAllowed() bool {
	if o != nil && !IsNil(o.ReverseCheckInAllowed) {
		return true
	}

	return false
}

// SetReverseCheckInAllowed gets a reference to the given bool and assigns it to the ReverseCheckInAllowed field.
func (o *LinkedReservationInfoType) SetReverseCheckInAllowed(v bool) {
	o.ReverseCheckInAllowed = &v
}

// GetRoom returns the Room field value if set, zero value otherwise.
func (o *LinkedReservationInfoType) GetRoom() string {
	if o == nil || IsNil(o.Room) {
		var ret string
		return ret
	}
	return *o.Room
}

// GetRoomOk returns a tuple with the Room field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkedReservationInfoType) GetRoomOk() (*string, bool) {
	if o == nil || IsNil(o.Room) {
		return nil, false
	}
	return o.Room, true
}

// HasRoom returns a boolean if a field has been set.
func (o *LinkedReservationInfoType) HasRoom() bool {
	if o != nil && !IsNil(o.Room) {
		return true
	}

	return false
}

// SetRoom gets a reference to the given string and assigns it to the Room field.
func (o *LinkedReservationInfoType) SetRoom(v string) {
	o.Room = &v
}

// GetRoomNumberLocked returns the RoomNumberLocked field value if set, zero value otherwise.
func (o *LinkedReservationInfoType) GetRoomNumberLocked() bool {
	if o == nil || IsNil(o.RoomNumberLocked) {
		var ret bool
		return ret
	}
	return *o.RoomNumberLocked
}

// GetRoomNumberLockedOk returns a tuple with the RoomNumberLocked field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkedReservationInfoType) GetRoomNumberLockedOk() (*bool, bool) {
	if o == nil || IsNil(o.RoomNumberLocked) {
		return nil, false
	}
	return o.RoomNumberLocked, true
}

// HasRoomNumberLocked returns a boolean if a field has been set.
func (o *LinkedReservationInfoType) HasRoomNumberLocked() bool {
	if o != nil && !IsNil(o.RoomNumberLocked) {
		return true
	}

	return false
}

// SetRoomNumberLocked gets a reference to the given bool and assigns it to the RoomNumberLocked field.
func (o *LinkedReservationInfoType) SetRoomNumberLocked(v bool) {
	o.RoomNumberLocked = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *LinkedReservationInfoType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkedReservationInfoType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *LinkedReservationInfoType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *LinkedReservationInfoType) SetRoomType(v string) {
	o.RoomType = &v
}

// GetSuppressRate returns the SuppressRate field value if set, zero value otherwise.
func (o *LinkedReservationInfoType) GetSuppressRate() bool {
	if o == nil || IsNil(o.SuppressRate) {
		var ret bool
		return ret
	}
	return *o.SuppressRate
}

// GetSuppressRateOk returns a tuple with the SuppressRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkedReservationInfoType) GetSuppressRateOk() (*bool, bool) {
	if o == nil || IsNil(o.SuppressRate) {
		return nil, false
	}
	return o.SuppressRate, true
}

// HasSuppressRate returns a boolean if a field has been set.
func (o *LinkedReservationInfoType) HasSuppressRate() bool {
	if o != nil && !IsNil(o.SuppressRate) {
		return true
	}

	return false
}

// SetSuppressRate gets a reference to the given bool and assigns it to the SuppressRate field.
func (o *LinkedReservationInfoType) SetSuppressRate(v bool) {
	o.SuppressRate = &v
}

// GetSurname returns the Surname field value if set, zero value otherwise.
func (o *LinkedReservationInfoType) GetSurname() string {
	if o == nil || IsNil(o.Surname) {
		var ret string
		return ret
	}
	return *o.Surname
}

// GetSurnameOk returns a tuple with the Surname field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkedReservationInfoType) GetSurnameOk() (*string, bool) {
	if o == nil || IsNil(o.Surname) {
		return nil, false
	}
	return o.Surname, true
}

// HasSurname returns a boolean if a field has been set.
func (o *LinkedReservationInfoType) HasSurname() bool {
	if o != nil && !IsNil(o.Surname) {
		return true
	}

	return false
}

// SetSurname gets a reference to the given string and assigns it to the Surname field.
func (o *LinkedReservationInfoType) SetSurname(v string) {
	o.Surname = &v
}

// GetTimeSpan returns the TimeSpan field value if set, zero value otherwise.
func (o *LinkedReservationInfoType) GetTimeSpan() TimeSpanType {
	if o == nil || IsNil(o.TimeSpan) {
		var ret TimeSpanType
		return ret
	}
	return *o.TimeSpan
}

// GetTimeSpanOk returns a tuple with the TimeSpan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkedReservationInfoType) GetTimeSpanOk() (*TimeSpanType, bool) {
	if o == nil || IsNil(o.TimeSpan) {
		return nil, false
	}
	return o.TimeSpan, true
}

// HasTimeSpan returns a boolean if a field has been set.
func (o *LinkedReservationInfoType) HasTimeSpan() bool {
	if o != nil && !IsNil(o.TimeSpan) {
		return true
	}

	return false
}

// SetTimeSpan gets a reference to the given TimeSpanType and assigns it to the TimeSpan field.
func (o *LinkedReservationInfoType) SetTimeSpan(v TimeSpanType) {
	o.TimeSpan = &v
}

// GetTitle returns the Title field value if set, zero value otherwise.
func (o *LinkedReservationInfoType) GetTitle() string {
	if o == nil || IsNil(o.Title) {
		var ret string
		return ret
	}
	return *o.Title
}

// GetTitleOk returns a tuple with the Title field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinkedReservationInfoType) GetTitleOk() (*string, bool) {
	if o == nil || IsNil(o.Title) {
		return nil, false
	}
	return o.Title, true
}

// HasTitle returns a boolean if a field has been set.
func (o *LinkedReservationInfoType) HasTitle() bool {
	if o != nil && !IsNil(o.Title) {
		return true
	}

	return false
}

// SetTitle gets a reference to the given string and assigns it to the Title field.
func (o *LinkedReservationInfoType) SetTitle(v string) {
	o.Title = &v
}

func (o LinkedReservationInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o LinkedReservationInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AllowedActions) {
		toSerialize["allowedActions"] = o.AllowedActions
	}
	if !IsNil(o.Balance) {
		toSerialize["balance"] = o.Balance
	}
	if !IsNil(o.DisplayColor) {
		toSerialize["displayColor"] = o.DisplayColor
	}
	if !IsNil(o.GivenName) {
		toSerialize["givenName"] = o.GivenName
	}
	if !IsNil(o.Guarantee) {
		toSerialize["guarantee"] = o.Guarantee
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.LinkReservationType) {
		toSerialize["linkReservationType"] = o.LinkReservationType
	}
	if !IsNil(o.Rate) {
		toSerialize["rate"] = o.Rate
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.ReservationBlock) {
		toSerialize["reservationBlock"] = o.ReservationBlock
	}
	if !IsNil(o.ReservationIdList) {
		toSerialize["reservationIdList"] = o.ReservationIdList
	}
	if !IsNil(o.ReservationStatus) {
		toSerialize["reservationStatus"] = o.ReservationStatus
	}
	if !IsNil(o.ReverseCheckInAllowed) {
		toSerialize["reverseCheckInAllowed"] = o.ReverseCheckInAllowed
	}
	if !IsNil(o.Room) {
		toSerialize["room"] = o.Room
	}
	if !IsNil(o.RoomNumberLocked) {
		toSerialize["roomNumberLocked"] = o.RoomNumberLocked
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.SuppressRate) {
		toSerialize["suppressRate"] = o.SuppressRate
	}
	if !IsNil(o.Surname) {
		toSerialize["surname"] = o.Surname
	}
	if !IsNil(o.TimeSpan) {
		toSerialize["timeSpan"] = o.TimeSpan
	}
	if !IsNil(o.Title) {
		toSerialize["title"] = o.Title
	}
	return toSerialize, nil
}

type NullableLinkedReservationInfoType struct {
	value *LinkedReservationInfoType
	isSet bool
}

func (v NullableLinkedReservationInfoType) Get() *LinkedReservationInfoType {
	return v.value
}

func (v *NullableLinkedReservationInfoType) Set(val *LinkedReservationInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableLinkedReservationInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableLinkedReservationInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableLinkedReservationInfoType(val *LinkedReservationInfoType) *NullableLinkedReservationInfoType {
	return &NullableLinkedReservationInfoType{value: val, isSet: true}
}

func (v NullableLinkedReservationInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableLinkedReservationInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

