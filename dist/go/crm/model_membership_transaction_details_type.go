/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the MembershipTransactionDetailsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipTransactionDetailsType{}

// MembershipTransactionDetailsType Detailed information related to a membership transaction.
type MembershipTransactionDetailsType struct {
	// Indicates if the transaction was created as an adjustment.
	Adjustment *bool `json:"adjustment,omitempty"`
	// The average cost of the room per night.
	AverageRateAmount *float32 `json:"averageRateAmount,omitempty"`
	AwardPoints *MembershipAwardPointsType `json:"awardPoints,omitempty"`
	// Base billing group the points belong to.
	BaseBillingGroup *string `json:"baseBillingGroup,omitempty"`
	// Billing group the points belong to.
	BillingGroup *string `json:"billingGroup,omitempty"`
	// Bonus billing group the points belong to.
	BonusBillingGroup *string `json:"bonusBillingGroup,omitempty"`
	// The booked room type for this transaction.
	BookedRoomLabel *string `json:"bookedRoomLabel,omitempty"`
	// The property currency at the originating PMS.
	Currency *string `json:"currency,omitempty"`
	// Indicates if the transaction was flagged as an exception.
	Exception *bool `json:"exception,omitempty"`
	// Property from which the membership stay information was received.
	HotelId *string `json:"hotelId,omitempty"`
	MemberStatementId *UniqueIDType `json:"memberStatementId,omitempty"`
	MembershipTransactionId *MembershipTransactionId `json:"membershipTransactionId,omitempty"`
	// Notes associated with this transaction.
	Notes *string `json:"notes,omitempty"`
	// Indicates if the points have been calculated on this transaction.
	PointsCalculated *bool `json:"pointsCalculated,omitempty"`
	// The total cost associated with points earned by this transaction.
	PointsCost *int32 `json:"pointsCost,omitempty"`
	// For adjustments, the date when the points are to be credited.
	PointsCreditDate *string `json:"pointsCreditDate,omitempty"`
	// Messages generated by the system during points calculation.
	ProcessingMessages *string `json:"processingMessages,omitempty"`
	ProfilePromotions []string `json:"profilePromotions,omitempty"`
	// Promotion code assigned on reservation.
	RatePromotion *string `json:"ratePromotion,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ReservationIdList []UniqueIDType `json:"reservationIdList,omitempty"`
	// The room type for this transaction.
	RoomLabel *string `json:"roomLabel,omitempty"`
	StatementId *UniqueIDType `json:"statementId,omitempty"`
	StayTimeSpan *TimeSpanType `json:"stayTimeSpan,omitempty"`
	TierPoints *MembershipTransactionTierPointsType `json:"tierPoints,omitempty"`
	// The date when the points were calculated.
	TransactionDate *string `json:"transactionDate,omitempty"`
	// The type of membership points transaction.
	TransactionType *string `json:"transactionType,omitempty"`
}

// NewMembershipTransactionDetailsType instantiates a new MembershipTransactionDetailsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipTransactionDetailsType() *MembershipTransactionDetailsType {
	this := MembershipTransactionDetailsType{}
	return &this
}

// NewMembershipTransactionDetailsTypeWithDefaults instantiates a new MembershipTransactionDetailsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipTransactionDetailsTypeWithDefaults() *MembershipTransactionDetailsType {
	this := MembershipTransactionDetailsType{}
	return &this
}

// GetAdjustment returns the Adjustment field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetAdjustment() bool {
	if o == nil || IsNil(o.Adjustment) {
		var ret bool
		return ret
	}
	return *o.Adjustment
}

// GetAdjustmentOk returns a tuple with the Adjustment field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetAdjustmentOk() (*bool, bool) {
	if o == nil || IsNil(o.Adjustment) {
		return nil, false
	}
	return o.Adjustment, true
}

// HasAdjustment returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasAdjustment() bool {
	if o != nil && !IsNil(o.Adjustment) {
		return true
	}

	return false
}

// SetAdjustment gets a reference to the given bool and assigns it to the Adjustment field.
func (o *MembershipTransactionDetailsType) SetAdjustment(v bool) {
	o.Adjustment = &v
}

// GetAverageRateAmount returns the AverageRateAmount field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetAverageRateAmount() float32 {
	if o == nil || IsNil(o.AverageRateAmount) {
		var ret float32
		return ret
	}
	return *o.AverageRateAmount
}

// GetAverageRateAmountOk returns a tuple with the AverageRateAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetAverageRateAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.AverageRateAmount) {
		return nil, false
	}
	return o.AverageRateAmount, true
}

// HasAverageRateAmount returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasAverageRateAmount() bool {
	if o != nil && !IsNil(o.AverageRateAmount) {
		return true
	}

	return false
}

// SetAverageRateAmount gets a reference to the given float32 and assigns it to the AverageRateAmount field.
func (o *MembershipTransactionDetailsType) SetAverageRateAmount(v float32) {
	o.AverageRateAmount = &v
}

// GetAwardPoints returns the AwardPoints field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetAwardPoints() MembershipAwardPointsType {
	if o == nil || IsNil(o.AwardPoints) {
		var ret MembershipAwardPointsType
		return ret
	}
	return *o.AwardPoints
}

// GetAwardPointsOk returns a tuple with the AwardPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetAwardPointsOk() (*MembershipAwardPointsType, bool) {
	if o == nil || IsNil(o.AwardPoints) {
		return nil, false
	}
	return o.AwardPoints, true
}

// HasAwardPoints returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasAwardPoints() bool {
	if o != nil && !IsNil(o.AwardPoints) {
		return true
	}

	return false
}

// SetAwardPoints gets a reference to the given MembershipAwardPointsType and assigns it to the AwardPoints field.
func (o *MembershipTransactionDetailsType) SetAwardPoints(v MembershipAwardPointsType) {
	o.AwardPoints = &v
}

// GetBaseBillingGroup returns the BaseBillingGroup field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetBaseBillingGroup() string {
	if o == nil || IsNil(o.BaseBillingGroup) {
		var ret string
		return ret
	}
	return *o.BaseBillingGroup
}

// GetBaseBillingGroupOk returns a tuple with the BaseBillingGroup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetBaseBillingGroupOk() (*string, bool) {
	if o == nil || IsNil(o.BaseBillingGroup) {
		return nil, false
	}
	return o.BaseBillingGroup, true
}

// HasBaseBillingGroup returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasBaseBillingGroup() bool {
	if o != nil && !IsNil(o.BaseBillingGroup) {
		return true
	}

	return false
}

// SetBaseBillingGroup gets a reference to the given string and assigns it to the BaseBillingGroup field.
func (o *MembershipTransactionDetailsType) SetBaseBillingGroup(v string) {
	o.BaseBillingGroup = &v
}

// GetBillingGroup returns the BillingGroup field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetBillingGroup() string {
	if o == nil || IsNil(o.BillingGroup) {
		var ret string
		return ret
	}
	return *o.BillingGroup
}

// GetBillingGroupOk returns a tuple with the BillingGroup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetBillingGroupOk() (*string, bool) {
	if o == nil || IsNil(o.BillingGroup) {
		return nil, false
	}
	return o.BillingGroup, true
}

// HasBillingGroup returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasBillingGroup() bool {
	if o != nil && !IsNil(o.BillingGroup) {
		return true
	}

	return false
}

// SetBillingGroup gets a reference to the given string and assigns it to the BillingGroup field.
func (o *MembershipTransactionDetailsType) SetBillingGroup(v string) {
	o.BillingGroup = &v
}

// GetBonusBillingGroup returns the BonusBillingGroup field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetBonusBillingGroup() string {
	if o == nil || IsNil(o.BonusBillingGroup) {
		var ret string
		return ret
	}
	return *o.BonusBillingGroup
}

// GetBonusBillingGroupOk returns a tuple with the BonusBillingGroup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetBonusBillingGroupOk() (*string, bool) {
	if o == nil || IsNil(o.BonusBillingGroup) {
		return nil, false
	}
	return o.BonusBillingGroup, true
}

// HasBonusBillingGroup returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasBonusBillingGroup() bool {
	if o != nil && !IsNil(o.BonusBillingGroup) {
		return true
	}

	return false
}

// SetBonusBillingGroup gets a reference to the given string and assigns it to the BonusBillingGroup field.
func (o *MembershipTransactionDetailsType) SetBonusBillingGroup(v string) {
	o.BonusBillingGroup = &v
}

// GetBookedRoomLabel returns the BookedRoomLabel field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetBookedRoomLabel() string {
	if o == nil || IsNil(o.BookedRoomLabel) {
		var ret string
		return ret
	}
	return *o.BookedRoomLabel
}

// GetBookedRoomLabelOk returns a tuple with the BookedRoomLabel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetBookedRoomLabelOk() (*string, bool) {
	if o == nil || IsNil(o.BookedRoomLabel) {
		return nil, false
	}
	return o.BookedRoomLabel, true
}

// HasBookedRoomLabel returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasBookedRoomLabel() bool {
	if o != nil && !IsNil(o.BookedRoomLabel) {
		return true
	}

	return false
}

// SetBookedRoomLabel gets a reference to the given string and assigns it to the BookedRoomLabel field.
func (o *MembershipTransactionDetailsType) SetBookedRoomLabel(v string) {
	o.BookedRoomLabel = &v
}

// GetCurrency returns the Currency field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetCurrency() string {
	if o == nil || IsNil(o.Currency) {
		var ret string
		return ret
	}
	return *o.Currency
}

// GetCurrencyOk returns a tuple with the Currency field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetCurrencyOk() (*string, bool) {
	if o == nil || IsNil(o.Currency) {
		return nil, false
	}
	return o.Currency, true
}

// HasCurrency returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasCurrency() bool {
	if o != nil && !IsNil(o.Currency) {
		return true
	}

	return false
}

// SetCurrency gets a reference to the given string and assigns it to the Currency field.
func (o *MembershipTransactionDetailsType) SetCurrency(v string) {
	o.Currency = &v
}

// GetException returns the Exception field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetException() bool {
	if o == nil || IsNil(o.Exception) {
		var ret bool
		return ret
	}
	return *o.Exception
}

// GetExceptionOk returns a tuple with the Exception field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetExceptionOk() (*bool, bool) {
	if o == nil || IsNil(o.Exception) {
		return nil, false
	}
	return o.Exception, true
}

// HasException returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasException() bool {
	if o != nil && !IsNil(o.Exception) {
		return true
	}

	return false
}

// SetException gets a reference to the given bool and assigns it to the Exception field.
func (o *MembershipTransactionDetailsType) SetException(v bool) {
	o.Exception = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *MembershipTransactionDetailsType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetMemberStatementId returns the MemberStatementId field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetMemberStatementId() UniqueIDType {
	if o == nil || IsNil(o.MemberStatementId) {
		var ret UniqueIDType
		return ret
	}
	return *o.MemberStatementId
}

// GetMemberStatementIdOk returns a tuple with the MemberStatementId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetMemberStatementIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.MemberStatementId) {
		return nil, false
	}
	return o.MemberStatementId, true
}

// HasMemberStatementId returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasMemberStatementId() bool {
	if o != nil && !IsNil(o.MemberStatementId) {
		return true
	}

	return false
}

// SetMemberStatementId gets a reference to the given UniqueIDType and assigns it to the MemberStatementId field.
func (o *MembershipTransactionDetailsType) SetMemberStatementId(v UniqueIDType) {
	o.MemberStatementId = &v
}

// GetMembershipTransactionId returns the MembershipTransactionId field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetMembershipTransactionId() MembershipTransactionId {
	if o == nil || IsNil(o.MembershipTransactionId) {
		var ret MembershipTransactionId
		return ret
	}
	return *o.MembershipTransactionId
}

// GetMembershipTransactionIdOk returns a tuple with the MembershipTransactionId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetMembershipTransactionIdOk() (*MembershipTransactionId, bool) {
	if o == nil || IsNil(o.MembershipTransactionId) {
		return nil, false
	}
	return o.MembershipTransactionId, true
}

// HasMembershipTransactionId returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasMembershipTransactionId() bool {
	if o != nil && !IsNil(o.MembershipTransactionId) {
		return true
	}

	return false
}

// SetMembershipTransactionId gets a reference to the given MembershipTransactionId and assigns it to the MembershipTransactionId field.
func (o *MembershipTransactionDetailsType) SetMembershipTransactionId(v MembershipTransactionId) {
	o.MembershipTransactionId = &v
}

// GetNotes returns the Notes field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetNotes() string {
	if o == nil || IsNil(o.Notes) {
		var ret string
		return ret
	}
	return *o.Notes
}

// GetNotesOk returns a tuple with the Notes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetNotesOk() (*string, bool) {
	if o == nil || IsNil(o.Notes) {
		return nil, false
	}
	return o.Notes, true
}

// HasNotes returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasNotes() bool {
	if o != nil && !IsNil(o.Notes) {
		return true
	}

	return false
}

// SetNotes gets a reference to the given string and assigns it to the Notes field.
func (o *MembershipTransactionDetailsType) SetNotes(v string) {
	o.Notes = &v
}

// GetPointsCalculated returns the PointsCalculated field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetPointsCalculated() bool {
	if o == nil || IsNil(o.PointsCalculated) {
		var ret bool
		return ret
	}
	return *o.PointsCalculated
}

// GetPointsCalculatedOk returns a tuple with the PointsCalculated field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetPointsCalculatedOk() (*bool, bool) {
	if o == nil || IsNil(o.PointsCalculated) {
		return nil, false
	}
	return o.PointsCalculated, true
}

// HasPointsCalculated returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasPointsCalculated() bool {
	if o != nil && !IsNil(o.PointsCalculated) {
		return true
	}

	return false
}

// SetPointsCalculated gets a reference to the given bool and assigns it to the PointsCalculated field.
func (o *MembershipTransactionDetailsType) SetPointsCalculated(v bool) {
	o.PointsCalculated = &v
}

// GetPointsCost returns the PointsCost field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetPointsCost() int32 {
	if o == nil || IsNil(o.PointsCost) {
		var ret int32
		return ret
	}
	return *o.PointsCost
}

// GetPointsCostOk returns a tuple with the PointsCost field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetPointsCostOk() (*int32, bool) {
	if o == nil || IsNil(o.PointsCost) {
		return nil, false
	}
	return o.PointsCost, true
}

// HasPointsCost returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasPointsCost() bool {
	if o != nil && !IsNil(o.PointsCost) {
		return true
	}

	return false
}

// SetPointsCost gets a reference to the given int32 and assigns it to the PointsCost field.
func (o *MembershipTransactionDetailsType) SetPointsCost(v int32) {
	o.PointsCost = &v
}

// GetPointsCreditDate returns the PointsCreditDate field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetPointsCreditDate() string {
	if o == nil || IsNil(o.PointsCreditDate) {
		var ret string
		return ret
	}
	return *o.PointsCreditDate
}

// GetPointsCreditDateOk returns a tuple with the PointsCreditDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetPointsCreditDateOk() (*string, bool) {
	if o == nil || IsNil(o.PointsCreditDate) {
		return nil, false
	}
	return o.PointsCreditDate, true
}

// HasPointsCreditDate returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasPointsCreditDate() bool {
	if o != nil && !IsNil(o.PointsCreditDate) {
		return true
	}

	return false
}

// SetPointsCreditDate gets a reference to the given string and assigns it to the PointsCreditDate field.
func (o *MembershipTransactionDetailsType) SetPointsCreditDate(v string) {
	o.PointsCreditDate = &v
}

// GetProcessingMessages returns the ProcessingMessages field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetProcessingMessages() string {
	if o == nil || IsNil(o.ProcessingMessages) {
		var ret string
		return ret
	}
	return *o.ProcessingMessages
}

// GetProcessingMessagesOk returns a tuple with the ProcessingMessages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetProcessingMessagesOk() (*string, bool) {
	if o == nil || IsNil(o.ProcessingMessages) {
		return nil, false
	}
	return o.ProcessingMessages, true
}

// HasProcessingMessages returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasProcessingMessages() bool {
	if o != nil && !IsNil(o.ProcessingMessages) {
		return true
	}

	return false
}

// SetProcessingMessages gets a reference to the given string and assigns it to the ProcessingMessages field.
func (o *MembershipTransactionDetailsType) SetProcessingMessages(v string) {
	o.ProcessingMessages = &v
}

// GetProfilePromotions returns the ProfilePromotions field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetProfilePromotions() []string {
	if o == nil || IsNil(o.ProfilePromotions) {
		var ret []string
		return ret
	}
	return o.ProfilePromotions
}

// GetProfilePromotionsOk returns a tuple with the ProfilePromotions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetProfilePromotionsOk() ([]string, bool) {
	if o == nil || IsNil(o.ProfilePromotions) {
		return nil, false
	}
	return o.ProfilePromotions, true
}

// HasProfilePromotions returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasProfilePromotions() bool {
	if o != nil && !IsNil(o.ProfilePromotions) {
		return true
	}

	return false
}

// SetProfilePromotions gets a reference to the given []string and assigns it to the ProfilePromotions field.
func (o *MembershipTransactionDetailsType) SetProfilePromotions(v []string) {
	o.ProfilePromotions = v
}

// GetRatePromotion returns the RatePromotion field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetRatePromotion() string {
	if o == nil || IsNil(o.RatePromotion) {
		var ret string
		return ret
	}
	return *o.RatePromotion
}

// GetRatePromotionOk returns a tuple with the RatePromotion field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetRatePromotionOk() (*string, bool) {
	if o == nil || IsNil(o.RatePromotion) {
		return nil, false
	}
	return o.RatePromotion, true
}

// HasRatePromotion returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasRatePromotion() bool {
	if o != nil && !IsNil(o.RatePromotion) {
		return true
	}

	return false
}

// SetRatePromotion gets a reference to the given string and assigns it to the RatePromotion field.
func (o *MembershipTransactionDetailsType) SetRatePromotion(v string) {
	o.RatePromotion = &v
}

// GetReservationIdList returns the ReservationIdList field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetReservationIdList() []UniqueIDType {
	if o == nil || IsNil(o.ReservationIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ReservationIdList
}

// GetReservationIdListOk returns a tuple with the ReservationIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetReservationIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ReservationIdList) {
		return nil, false
	}
	return o.ReservationIdList, true
}

// HasReservationIdList returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasReservationIdList() bool {
	if o != nil && !IsNil(o.ReservationIdList) {
		return true
	}

	return false
}

// SetReservationIdList gets a reference to the given []UniqueIDType and assigns it to the ReservationIdList field.
func (o *MembershipTransactionDetailsType) SetReservationIdList(v []UniqueIDType) {
	o.ReservationIdList = v
}

// GetRoomLabel returns the RoomLabel field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetRoomLabel() string {
	if o == nil || IsNil(o.RoomLabel) {
		var ret string
		return ret
	}
	return *o.RoomLabel
}

// GetRoomLabelOk returns a tuple with the RoomLabel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetRoomLabelOk() (*string, bool) {
	if o == nil || IsNil(o.RoomLabel) {
		return nil, false
	}
	return o.RoomLabel, true
}

// HasRoomLabel returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasRoomLabel() bool {
	if o != nil && !IsNil(o.RoomLabel) {
		return true
	}

	return false
}

// SetRoomLabel gets a reference to the given string and assigns it to the RoomLabel field.
func (o *MembershipTransactionDetailsType) SetRoomLabel(v string) {
	o.RoomLabel = &v
}

// GetStatementId returns the StatementId field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetStatementId() UniqueIDType {
	if o == nil || IsNil(o.StatementId) {
		var ret UniqueIDType
		return ret
	}
	return *o.StatementId
}

// GetStatementIdOk returns a tuple with the StatementId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetStatementIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.StatementId) {
		return nil, false
	}
	return o.StatementId, true
}

// HasStatementId returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasStatementId() bool {
	if o != nil && !IsNil(o.StatementId) {
		return true
	}

	return false
}

// SetStatementId gets a reference to the given UniqueIDType and assigns it to the StatementId field.
func (o *MembershipTransactionDetailsType) SetStatementId(v UniqueIDType) {
	o.StatementId = &v
}

// GetStayTimeSpan returns the StayTimeSpan field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetStayTimeSpan() TimeSpanType {
	if o == nil || IsNil(o.StayTimeSpan) {
		var ret TimeSpanType
		return ret
	}
	return *o.StayTimeSpan
}

// GetStayTimeSpanOk returns a tuple with the StayTimeSpan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetStayTimeSpanOk() (*TimeSpanType, bool) {
	if o == nil || IsNil(o.StayTimeSpan) {
		return nil, false
	}
	return o.StayTimeSpan, true
}

// HasStayTimeSpan returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasStayTimeSpan() bool {
	if o != nil && !IsNil(o.StayTimeSpan) {
		return true
	}

	return false
}

// SetStayTimeSpan gets a reference to the given TimeSpanType and assigns it to the StayTimeSpan field.
func (o *MembershipTransactionDetailsType) SetStayTimeSpan(v TimeSpanType) {
	o.StayTimeSpan = &v
}

// GetTierPoints returns the TierPoints field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetTierPoints() MembershipTransactionTierPointsType {
	if o == nil || IsNil(o.TierPoints) {
		var ret MembershipTransactionTierPointsType
		return ret
	}
	return *o.TierPoints
}

// GetTierPointsOk returns a tuple with the TierPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetTierPointsOk() (*MembershipTransactionTierPointsType, bool) {
	if o == nil || IsNil(o.TierPoints) {
		return nil, false
	}
	return o.TierPoints, true
}

// HasTierPoints returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasTierPoints() bool {
	if o != nil && !IsNil(o.TierPoints) {
		return true
	}

	return false
}

// SetTierPoints gets a reference to the given MembershipTransactionTierPointsType and assigns it to the TierPoints field.
func (o *MembershipTransactionDetailsType) SetTierPoints(v MembershipTransactionTierPointsType) {
	o.TierPoints = &v
}

// GetTransactionDate returns the TransactionDate field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetTransactionDate() string {
	if o == nil || IsNil(o.TransactionDate) {
		var ret string
		return ret
	}
	return *o.TransactionDate
}

// GetTransactionDateOk returns a tuple with the TransactionDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetTransactionDateOk() (*string, bool) {
	if o == nil || IsNil(o.TransactionDate) {
		return nil, false
	}
	return o.TransactionDate, true
}

// HasTransactionDate returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasTransactionDate() bool {
	if o != nil && !IsNil(o.TransactionDate) {
		return true
	}

	return false
}

// SetTransactionDate gets a reference to the given string and assigns it to the TransactionDate field.
func (o *MembershipTransactionDetailsType) SetTransactionDate(v string) {
	o.TransactionDate = &v
}

// GetTransactionType returns the TransactionType field value if set, zero value otherwise.
func (o *MembershipTransactionDetailsType) GetTransactionType() string {
	if o == nil || IsNil(o.TransactionType) {
		var ret string
		return ret
	}
	return *o.TransactionType
}

// GetTransactionTypeOk returns a tuple with the TransactionType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionDetailsType) GetTransactionTypeOk() (*string, bool) {
	if o == nil || IsNil(o.TransactionType) {
		return nil, false
	}
	return o.TransactionType, true
}

// HasTransactionType returns a boolean if a field has been set.
func (o *MembershipTransactionDetailsType) HasTransactionType() bool {
	if o != nil && !IsNil(o.TransactionType) {
		return true
	}

	return false
}

// SetTransactionType gets a reference to the given string and assigns it to the TransactionType field.
func (o *MembershipTransactionDetailsType) SetTransactionType(v string) {
	o.TransactionType = &v
}

func (o MembershipTransactionDetailsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipTransactionDetailsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Adjustment) {
		toSerialize["adjustment"] = o.Adjustment
	}
	if !IsNil(o.AverageRateAmount) {
		toSerialize["averageRateAmount"] = o.AverageRateAmount
	}
	if !IsNil(o.AwardPoints) {
		toSerialize["awardPoints"] = o.AwardPoints
	}
	if !IsNil(o.BaseBillingGroup) {
		toSerialize["baseBillingGroup"] = o.BaseBillingGroup
	}
	if !IsNil(o.BillingGroup) {
		toSerialize["billingGroup"] = o.BillingGroup
	}
	if !IsNil(o.BonusBillingGroup) {
		toSerialize["bonusBillingGroup"] = o.BonusBillingGroup
	}
	if !IsNil(o.BookedRoomLabel) {
		toSerialize["bookedRoomLabel"] = o.BookedRoomLabel
	}
	if !IsNil(o.Currency) {
		toSerialize["currency"] = o.Currency
	}
	if !IsNil(o.Exception) {
		toSerialize["exception"] = o.Exception
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.MemberStatementId) {
		toSerialize["memberStatementId"] = o.MemberStatementId
	}
	if !IsNil(o.MembershipTransactionId) {
		toSerialize["membershipTransactionId"] = o.MembershipTransactionId
	}
	if !IsNil(o.Notes) {
		toSerialize["notes"] = o.Notes
	}
	if !IsNil(o.PointsCalculated) {
		toSerialize["pointsCalculated"] = o.PointsCalculated
	}
	if !IsNil(o.PointsCost) {
		toSerialize["pointsCost"] = o.PointsCost
	}
	if !IsNil(o.PointsCreditDate) {
		toSerialize["pointsCreditDate"] = o.PointsCreditDate
	}
	if !IsNil(o.ProcessingMessages) {
		toSerialize["processingMessages"] = o.ProcessingMessages
	}
	if !IsNil(o.ProfilePromotions) {
		toSerialize["profilePromotions"] = o.ProfilePromotions
	}
	if !IsNil(o.RatePromotion) {
		toSerialize["ratePromotion"] = o.RatePromotion
	}
	if !IsNil(o.ReservationIdList) {
		toSerialize["reservationIdList"] = o.ReservationIdList
	}
	if !IsNil(o.RoomLabel) {
		toSerialize["roomLabel"] = o.RoomLabel
	}
	if !IsNil(o.StatementId) {
		toSerialize["statementId"] = o.StatementId
	}
	if !IsNil(o.StayTimeSpan) {
		toSerialize["stayTimeSpan"] = o.StayTimeSpan
	}
	if !IsNil(o.TierPoints) {
		toSerialize["tierPoints"] = o.TierPoints
	}
	if !IsNil(o.TransactionDate) {
		toSerialize["transactionDate"] = o.TransactionDate
	}
	if !IsNil(o.TransactionType) {
		toSerialize["transactionType"] = o.TransactionType
	}
	return toSerialize, nil
}

type NullableMembershipTransactionDetailsType struct {
	value *MembershipTransactionDetailsType
	isSet bool
}

func (v NullableMembershipTransactionDetailsType) Get() *MembershipTransactionDetailsType {
	return v.value
}

func (v *NullableMembershipTransactionDetailsType) Set(val *MembershipTransactionDetailsType) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipTransactionDetailsType) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipTransactionDetailsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipTransactionDetailsType(val *MembershipTransactionDetailsType) *NullableMembershipTransactionDetailsType {
	return &NullableMembershipTransactionDetailsType{value: val, isSet: true}
}

func (v NullableMembershipTransactionDetailsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipTransactionDetailsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


