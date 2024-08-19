/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the RoomStayType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomStayType{}

// RoomStayType struct for RoomStayType
type RoomStayType struct {
	RegistrationNumber *UniqueIDType `json:"registrationNumber,omitempty"`
	CurrentRoomInfo *CurrentRoomInfoType `json:"currentRoomInfo,omitempty"`
	// A collection of Room Rates associated with a particular Room Stay. Each Room Rate combination can have multiple rates. Example King room, Rack rate plan, Monday through Thursday, weekday amount, Friday and Saturday, weekend amount.
	RoomRates []RoomRateType `json:"roomRates,omitempty"`
	GuestCounts *GuestCountsType `json:"guestCounts,omitempty"`
	ArrivalDate *string `json:"arrivalDate,omitempty"`
	DepartureDate *string `json:"departureDate,omitempty"`
	ExpectedTimes *ResExpectedTimesType `json:"expectedTimes,omitempty"`
	OriginalTimeSpan *TimeSpanType `json:"originalTimeSpan,omitempty"`
	Guarantee *ResGuaranteeType `json:"guarantee,omitempty"`
	Promotion *PromotionType `json:"promotion,omitempty"`
	// Connecting Rooms.
	SuiteWith *string `json:"suiteWith,omitempty"`
	Total *TotalType `json:"total,omitempty"`
	TotalPoints *PointsType `json:"totalPoints,omitempty"`
	// Informative indicators indicating different values of an attribute exists over the stay.
	MultiValueAttrs []string `json:"multiValueAttrs,omitempty"`
	UpsellInfo *UpsellInfoType `json:"upsellInfo,omitempty"`
	MobileNotifications *ResMobileNotificationsType `json:"mobileNotifications,omitempty"`
	// When true, indicates a room number cannot be changed. When false, indicates a room number may be changed.
	RoomNumberLocked *bool `json:"roomNumberLocked,omitempty"`
	// This control whether rate info will be printed in confirmation letter.
	PrintRate *bool `json:"printRate,omitempty"`
	OwnerReservationType *OwnerResTypeType `json:"ownerReservationType,omitempty"`
	PrimaryShareType *PrimaryShareTypeType `json:"primaryShareType,omitempty"`
	// Indicates whether the reservation is pre-registered for internet check-in or not.
	RemoteCheckInAllowed *bool `json:"remoteCheckInAllowed,omitempty"`
	// Classifies the medium(Channel field on reservation screen) through which the reservation is made.
	BookingMedium *string `json:"bookingMedium,omitempty"`
	// Description of the booking medium.
	BookingMediumDescription *string `json:"bookingMediumDescription,omitempty"`
	// Number of Upsell Offers Available for this stay. This will only be populated if the Upsell Instruction is included in the Allowed Instruction request
	AvailableUpsellOfferCount *int32 `json:"availableUpsellOfferCount,omitempty"`
}

// NewRoomStayType instantiates a new RoomStayType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomStayType() *RoomStayType {
	this := RoomStayType{}
	return &this
}

// NewRoomStayTypeWithDefaults instantiates a new RoomStayType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomStayTypeWithDefaults() *RoomStayType {
	this := RoomStayType{}
	return &this
}

// GetRegistrationNumber returns the RegistrationNumber field value if set, zero value otherwise.
func (o *RoomStayType) GetRegistrationNumber() UniqueIDType {
	if o == nil || IsNil(o.RegistrationNumber) {
		var ret UniqueIDType
		return ret
	}
	return *o.RegistrationNumber
}

// GetRegistrationNumberOk returns a tuple with the RegistrationNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetRegistrationNumberOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.RegistrationNumber) {
		return nil, false
	}
	return o.RegistrationNumber, true
}

// HasRegistrationNumber returns a boolean if a field has been set.
func (o *RoomStayType) HasRegistrationNumber() bool {
	if o != nil && !IsNil(o.RegistrationNumber) {
		return true
	}

	return false
}

// SetRegistrationNumber gets a reference to the given UniqueIDType and assigns it to the RegistrationNumber field.
func (o *RoomStayType) SetRegistrationNumber(v UniqueIDType) {
	o.RegistrationNumber = &v
}

// GetCurrentRoomInfo returns the CurrentRoomInfo field value if set, zero value otherwise.
func (o *RoomStayType) GetCurrentRoomInfo() CurrentRoomInfoType {
	if o == nil || IsNil(o.CurrentRoomInfo) {
		var ret CurrentRoomInfoType
		return ret
	}
	return *o.CurrentRoomInfo
}

// GetCurrentRoomInfoOk returns a tuple with the CurrentRoomInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetCurrentRoomInfoOk() (*CurrentRoomInfoType, bool) {
	if o == nil || IsNil(o.CurrentRoomInfo) {
		return nil, false
	}
	return o.CurrentRoomInfo, true
}

// HasCurrentRoomInfo returns a boolean if a field has been set.
func (o *RoomStayType) HasCurrentRoomInfo() bool {
	if o != nil && !IsNil(o.CurrentRoomInfo) {
		return true
	}

	return false
}

// SetCurrentRoomInfo gets a reference to the given CurrentRoomInfoType and assigns it to the CurrentRoomInfo field.
func (o *RoomStayType) SetCurrentRoomInfo(v CurrentRoomInfoType) {
	o.CurrentRoomInfo = &v
}

// GetRoomRates returns the RoomRates field value if set, zero value otherwise.
func (o *RoomStayType) GetRoomRates() []RoomRateType {
	if o == nil || IsNil(o.RoomRates) {
		var ret []RoomRateType
		return ret
	}
	return o.RoomRates
}

// GetRoomRatesOk returns a tuple with the RoomRates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetRoomRatesOk() ([]RoomRateType, bool) {
	if o == nil || IsNil(o.RoomRates) {
		return nil, false
	}
	return o.RoomRates, true
}

// HasRoomRates returns a boolean if a field has been set.
func (o *RoomStayType) HasRoomRates() bool {
	if o != nil && !IsNil(o.RoomRates) {
		return true
	}

	return false
}

// SetRoomRates gets a reference to the given []RoomRateType and assigns it to the RoomRates field.
func (o *RoomStayType) SetRoomRates(v []RoomRateType) {
	o.RoomRates = v
}

// GetGuestCounts returns the GuestCounts field value if set, zero value otherwise.
func (o *RoomStayType) GetGuestCounts() GuestCountsType {
	if o == nil || IsNil(o.GuestCounts) {
		var ret GuestCountsType
		return ret
	}
	return *o.GuestCounts
}

// GetGuestCountsOk returns a tuple with the GuestCounts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetGuestCountsOk() (*GuestCountsType, bool) {
	if o == nil || IsNil(o.GuestCounts) {
		return nil, false
	}
	return o.GuestCounts, true
}

// HasGuestCounts returns a boolean if a field has been set.
func (o *RoomStayType) HasGuestCounts() bool {
	if o != nil && !IsNil(o.GuestCounts) {
		return true
	}

	return false
}

// SetGuestCounts gets a reference to the given GuestCountsType and assigns it to the GuestCounts field.
func (o *RoomStayType) SetGuestCounts(v GuestCountsType) {
	o.GuestCounts = &v
}

// GetArrivalDate returns the ArrivalDate field value if set, zero value otherwise.
func (o *RoomStayType) GetArrivalDate() string {
	if o == nil || IsNil(o.ArrivalDate) {
		var ret string
		return ret
	}
	return *o.ArrivalDate
}

// GetArrivalDateOk returns a tuple with the ArrivalDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetArrivalDateOk() (*string, bool) {
	if o == nil || IsNil(o.ArrivalDate) {
		return nil, false
	}
	return o.ArrivalDate, true
}

// HasArrivalDate returns a boolean if a field has been set.
func (o *RoomStayType) HasArrivalDate() bool {
	if o != nil && !IsNil(o.ArrivalDate) {
		return true
	}

	return false
}

// SetArrivalDate gets a reference to the given string and assigns it to the ArrivalDate field.
func (o *RoomStayType) SetArrivalDate(v string) {
	o.ArrivalDate = &v
}

// GetDepartureDate returns the DepartureDate field value if set, zero value otherwise.
func (o *RoomStayType) GetDepartureDate() string {
	if o == nil || IsNil(o.DepartureDate) {
		var ret string
		return ret
	}
	return *o.DepartureDate
}

// GetDepartureDateOk returns a tuple with the DepartureDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetDepartureDateOk() (*string, bool) {
	if o == nil || IsNil(o.DepartureDate) {
		return nil, false
	}
	return o.DepartureDate, true
}

// HasDepartureDate returns a boolean if a field has been set.
func (o *RoomStayType) HasDepartureDate() bool {
	if o != nil && !IsNil(o.DepartureDate) {
		return true
	}

	return false
}

// SetDepartureDate gets a reference to the given string and assigns it to the DepartureDate field.
func (o *RoomStayType) SetDepartureDate(v string) {
	o.DepartureDate = &v
}

// GetExpectedTimes returns the ExpectedTimes field value if set, zero value otherwise.
func (o *RoomStayType) GetExpectedTimes() ResExpectedTimesType {
	if o == nil || IsNil(o.ExpectedTimes) {
		var ret ResExpectedTimesType
		return ret
	}
	return *o.ExpectedTimes
}

// GetExpectedTimesOk returns a tuple with the ExpectedTimes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetExpectedTimesOk() (*ResExpectedTimesType, bool) {
	if o == nil || IsNil(o.ExpectedTimes) {
		return nil, false
	}
	return o.ExpectedTimes, true
}

// HasExpectedTimes returns a boolean if a field has been set.
func (o *RoomStayType) HasExpectedTimes() bool {
	if o != nil && !IsNil(o.ExpectedTimes) {
		return true
	}

	return false
}

// SetExpectedTimes gets a reference to the given ResExpectedTimesType and assigns it to the ExpectedTimes field.
func (o *RoomStayType) SetExpectedTimes(v ResExpectedTimesType) {
	o.ExpectedTimes = &v
}

// GetOriginalTimeSpan returns the OriginalTimeSpan field value if set, zero value otherwise.
func (o *RoomStayType) GetOriginalTimeSpan() TimeSpanType {
	if o == nil || IsNil(o.OriginalTimeSpan) {
		var ret TimeSpanType
		return ret
	}
	return *o.OriginalTimeSpan
}

// GetOriginalTimeSpanOk returns a tuple with the OriginalTimeSpan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetOriginalTimeSpanOk() (*TimeSpanType, bool) {
	if o == nil || IsNil(o.OriginalTimeSpan) {
		return nil, false
	}
	return o.OriginalTimeSpan, true
}

// HasOriginalTimeSpan returns a boolean if a field has been set.
func (o *RoomStayType) HasOriginalTimeSpan() bool {
	if o != nil && !IsNil(o.OriginalTimeSpan) {
		return true
	}

	return false
}

// SetOriginalTimeSpan gets a reference to the given TimeSpanType and assigns it to the OriginalTimeSpan field.
func (o *RoomStayType) SetOriginalTimeSpan(v TimeSpanType) {
	o.OriginalTimeSpan = &v
}

// GetGuarantee returns the Guarantee field value if set, zero value otherwise.
func (o *RoomStayType) GetGuarantee() ResGuaranteeType {
	if o == nil || IsNil(o.Guarantee) {
		var ret ResGuaranteeType
		return ret
	}
	return *o.Guarantee
}

// GetGuaranteeOk returns a tuple with the Guarantee field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetGuaranteeOk() (*ResGuaranteeType, bool) {
	if o == nil || IsNil(o.Guarantee) {
		return nil, false
	}
	return o.Guarantee, true
}

// HasGuarantee returns a boolean if a field has been set.
func (o *RoomStayType) HasGuarantee() bool {
	if o != nil && !IsNil(o.Guarantee) {
		return true
	}

	return false
}

// SetGuarantee gets a reference to the given ResGuaranteeType and assigns it to the Guarantee field.
func (o *RoomStayType) SetGuarantee(v ResGuaranteeType) {
	o.Guarantee = &v
}

// GetPromotion returns the Promotion field value if set, zero value otherwise.
func (o *RoomStayType) GetPromotion() PromotionType {
	if o == nil || IsNil(o.Promotion) {
		var ret PromotionType
		return ret
	}
	return *o.Promotion
}

// GetPromotionOk returns a tuple with the Promotion field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetPromotionOk() (*PromotionType, bool) {
	if o == nil || IsNil(o.Promotion) {
		return nil, false
	}
	return o.Promotion, true
}

// HasPromotion returns a boolean if a field has been set.
func (o *RoomStayType) HasPromotion() bool {
	if o != nil && !IsNil(o.Promotion) {
		return true
	}

	return false
}

// SetPromotion gets a reference to the given PromotionType and assigns it to the Promotion field.
func (o *RoomStayType) SetPromotion(v PromotionType) {
	o.Promotion = &v
}

// GetSuiteWith returns the SuiteWith field value if set, zero value otherwise.
func (o *RoomStayType) GetSuiteWith() string {
	if o == nil || IsNil(o.SuiteWith) {
		var ret string
		return ret
	}
	return *o.SuiteWith
}

// GetSuiteWithOk returns a tuple with the SuiteWith field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetSuiteWithOk() (*string, bool) {
	if o == nil || IsNil(o.SuiteWith) {
		return nil, false
	}
	return o.SuiteWith, true
}

// HasSuiteWith returns a boolean if a field has been set.
func (o *RoomStayType) HasSuiteWith() bool {
	if o != nil && !IsNil(o.SuiteWith) {
		return true
	}

	return false
}

// SetSuiteWith gets a reference to the given string and assigns it to the SuiteWith field.
func (o *RoomStayType) SetSuiteWith(v string) {
	o.SuiteWith = &v
}

// GetTotal returns the Total field value if set, zero value otherwise.
func (o *RoomStayType) GetTotal() TotalType {
	if o == nil || IsNil(o.Total) {
		var ret TotalType
		return ret
	}
	return *o.Total
}

// GetTotalOk returns a tuple with the Total field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetTotalOk() (*TotalType, bool) {
	if o == nil || IsNil(o.Total) {
		return nil, false
	}
	return o.Total, true
}

// HasTotal returns a boolean if a field has been set.
func (o *RoomStayType) HasTotal() bool {
	if o != nil && !IsNil(o.Total) {
		return true
	}

	return false
}

// SetTotal gets a reference to the given TotalType and assigns it to the Total field.
func (o *RoomStayType) SetTotal(v TotalType) {
	o.Total = &v
}

// GetTotalPoints returns the TotalPoints field value if set, zero value otherwise.
func (o *RoomStayType) GetTotalPoints() PointsType {
	if o == nil || IsNil(o.TotalPoints) {
		var ret PointsType
		return ret
	}
	return *o.TotalPoints
}

// GetTotalPointsOk returns a tuple with the TotalPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetTotalPointsOk() (*PointsType, bool) {
	if o == nil || IsNil(o.TotalPoints) {
		return nil, false
	}
	return o.TotalPoints, true
}

// HasTotalPoints returns a boolean if a field has been set.
func (o *RoomStayType) HasTotalPoints() bool {
	if o != nil && !IsNil(o.TotalPoints) {
		return true
	}

	return false
}

// SetTotalPoints gets a reference to the given PointsType and assigns it to the TotalPoints field.
func (o *RoomStayType) SetTotalPoints(v PointsType) {
	o.TotalPoints = &v
}

// GetMultiValueAttrs returns the MultiValueAttrs field value if set, zero value otherwise.
func (o *RoomStayType) GetMultiValueAttrs() []string {
	if o == nil || IsNil(o.MultiValueAttrs) {
		var ret []string
		return ret
	}
	return o.MultiValueAttrs
}

// GetMultiValueAttrsOk returns a tuple with the MultiValueAttrs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetMultiValueAttrsOk() ([]string, bool) {
	if o == nil || IsNil(o.MultiValueAttrs) {
		return nil, false
	}
	return o.MultiValueAttrs, true
}

// HasMultiValueAttrs returns a boolean if a field has been set.
func (o *RoomStayType) HasMultiValueAttrs() bool {
	if o != nil && !IsNil(o.MultiValueAttrs) {
		return true
	}

	return false
}

// SetMultiValueAttrs gets a reference to the given []string and assigns it to the MultiValueAttrs field.
func (o *RoomStayType) SetMultiValueAttrs(v []string) {
	o.MultiValueAttrs = v
}

// GetUpsellInfo returns the UpsellInfo field value if set, zero value otherwise.
func (o *RoomStayType) GetUpsellInfo() UpsellInfoType {
	if o == nil || IsNil(o.UpsellInfo) {
		var ret UpsellInfoType
		return ret
	}
	return *o.UpsellInfo
}

// GetUpsellInfoOk returns a tuple with the UpsellInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetUpsellInfoOk() (*UpsellInfoType, bool) {
	if o == nil || IsNil(o.UpsellInfo) {
		return nil, false
	}
	return o.UpsellInfo, true
}

// HasUpsellInfo returns a boolean if a field has been set.
func (o *RoomStayType) HasUpsellInfo() bool {
	if o != nil && !IsNil(o.UpsellInfo) {
		return true
	}

	return false
}

// SetUpsellInfo gets a reference to the given UpsellInfoType and assigns it to the UpsellInfo field.
func (o *RoomStayType) SetUpsellInfo(v UpsellInfoType) {
	o.UpsellInfo = &v
}

// GetMobileNotifications returns the MobileNotifications field value if set, zero value otherwise.
func (o *RoomStayType) GetMobileNotifications() ResMobileNotificationsType {
	if o == nil || IsNil(o.MobileNotifications) {
		var ret ResMobileNotificationsType
		return ret
	}
	return *o.MobileNotifications
}

// GetMobileNotificationsOk returns a tuple with the MobileNotifications field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetMobileNotificationsOk() (*ResMobileNotificationsType, bool) {
	if o == nil || IsNil(o.MobileNotifications) {
		return nil, false
	}
	return o.MobileNotifications, true
}

// HasMobileNotifications returns a boolean if a field has been set.
func (o *RoomStayType) HasMobileNotifications() bool {
	if o != nil && !IsNil(o.MobileNotifications) {
		return true
	}

	return false
}

// SetMobileNotifications gets a reference to the given ResMobileNotificationsType and assigns it to the MobileNotifications field.
func (o *RoomStayType) SetMobileNotifications(v ResMobileNotificationsType) {
	o.MobileNotifications = &v
}

// GetRoomNumberLocked returns the RoomNumberLocked field value if set, zero value otherwise.
func (o *RoomStayType) GetRoomNumberLocked() bool {
	if o == nil || IsNil(o.RoomNumberLocked) {
		var ret bool
		return ret
	}
	return *o.RoomNumberLocked
}

// GetRoomNumberLockedOk returns a tuple with the RoomNumberLocked field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetRoomNumberLockedOk() (*bool, bool) {
	if o == nil || IsNil(o.RoomNumberLocked) {
		return nil, false
	}
	return o.RoomNumberLocked, true
}

// HasRoomNumberLocked returns a boolean if a field has been set.
func (o *RoomStayType) HasRoomNumberLocked() bool {
	if o != nil && !IsNil(o.RoomNumberLocked) {
		return true
	}

	return false
}

// SetRoomNumberLocked gets a reference to the given bool and assigns it to the RoomNumberLocked field.
func (o *RoomStayType) SetRoomNumberLocked(v bool) {
	o.RoomNumberLocked = &v
}

// GetPrintRate returns the PrintRate field value if set, zero value otherwise.
func (o *RoomStayType) GetPrintRate() bool {
	if o == nil || IsNil(o.PrintRate) {
		var ret bool
		return ret
	}
	return *o.PrintRate
}

// GetPrintRateOk returns a tuple with the PrintRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetPrintRateOk() (*bool, bool) {
	if o == nil || IsNil(o.PrintRate) {
		return nil, false
	}
	return o.PrintRate, true
}

// HasPrintRate returns a boolean if a field has been set.
func (o *RoomStayType) HasPrintRate() bool {
	if o != nil && !IsNil(o.PrintRate) {
		return true
	}

	return false
}

// SetPrintRate gets a reference to the given bool and assigns it to the PrintRate field.
func (o *RoomStayType) SetPrintRate(v bool) {
	o.PrintRate = &v
}

// GetOwnerReservationType returns the OwnerReservationType field value if set, zero value otherwise.
func (o *RoomStayType) GetOwnerReservationType() OwnerResTypeType {
	if o == nil || IsNil(o.OwnerReservationType) {
		var ret OwnerResTypeType
		return ret
	}
	return *o.OwnerReservationType
}

// GetOwnerReservationTypeOk returns a tuple with the OwnerReservationType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetOwnerReservationTypeOk() (*OwnerResTypeType, bool) {
	if o == nil || IsNil(o.OwnerReservationType) {
		return nil, false
	}
	return o.OwnerReservationType, true
}

// HasOwnerReservationType returns a boolean if a field has been set.
func (o *RoomStayType) HasOwnerReservationType() bool {
	if o != nil && !IsNil(o.OwnerReservationType) {
		return true
	}

	return false
}

// SetOwnerReservationType gets a reference to the given OwnerResTypeType and assigns it to the OwnerReservationType field.
func (o *RoomStayType) SetOwnerReservationType(v OwnerResTypeType) {
	o.OwnerReservationType = &v
}

// GetPrimaryShareType returns the PrimaryShareType field value if set, zero value otherwise.
func (o *RoomStayType) GetPrimaryShareType() PrimaryShareTypeType {
	if o == nil || IsNil(o.PrimaryShareType) {
		var ret PrimaryShareTypeType
		return ret
	}
	return *o.PrimaryShareType
}

// GetPrimaryShareTypeOk returns a tuple with the PrimaryShareType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetPrimaryShareTypeOk() (*PrimaryShareTypeType, bool) {
	if o == nil || IsNil(o.PrimaryShareType) {
		return nil, false
	}
	return o.PrimaryShareType, true
}

// HasPrimaryShareType returns a boolean if a field has been set.
func (o *RoomStayType) HasPrimaryShareType() bool {
	if o != nil && !IsNil(o.PrimaryShareType) {
		return true
	}

	return false
}

// SetPrimaryShareType gets a reference to the given PrimaryShareTypeType and assigns it to the PrimaryShareType field.
func (o *RoomStayType) SetPrimaryShareType(v PrimaryShareTypeType) {
	o.PrimaryShareType = &v
}

// GetRemoteCheckInAllowed returns the RemoteCheckInAllowed field value if set, zero value otherwise.
func (o *RoomStayType) GetRemoteCheckInAllowed() bool {
	if o == nil || IsNil(o.RemoteCheckInAllowed) {
		var ret bool
		return ret
	}
	return *o.RemoteCheckInAllowed
}

// GetRemoteCheckInAllowedOk returns a tuple with the RemoteCheckInAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetRemoteCheckInAllowedOk() (*bool, bool) {
	if o == nil || IsNil(o.RemoteCheckInAllowed) {
		return nil, false
	}
	return o.RemoteCheckInAllowed, true
}

// HasRemoteCheckInAllowed returns a boolean if a field has been set.
func (o *RoomStayType) HasRemoteCheckInAllowed() bool {
	if o != nil && !IsNil(o.RemoteCheckInAllowed) {
		return true
	}

	return false
}

// SetRemoteCheckInAllowed gets a reference to the given bool and assigns it to the RemoteCheckInAllowed field.
func (o *RoomStayType) SetRemoteCheckInAllowed(v bool) {
	o.RemoteCheckInAllowed = &v
}

// GetBookingMedium returns the BookingMedium field value if set, zero value otherwise.
func (o *RoomStayType) GetBookingMedium() string {
	if o == nil || IsNil(o.BookingMedium) {
		var ret string
		return ret
	}
	return *o.BookingMedium
}

// GetBookingMediumOk returns a tuple with the BookingMedium field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetBookingMediumOk() (*string, bool) {
	if o == nil || IsNil(o.BookingMedium) {
		return nil, false
	}
	return o.BookingMedium, true
}

// HasBookingMedium returns a boolean if a field has been set.
func (o *RoomStayType) HasBookingMedium() bool {
	if o != nil && !IsNil(o.BookingMedium) {
		return true
	}

	return false
}

// SetBookingMedium gets a reference to the given string and assigns it to the BookingMedium field.
func (o *RoomStayType) SetBookingMedium(v string) {
	o.BookingMedium = &v
}

// GetBookingMediumDescription returns the BookingMediumDescription field value if set, zero value otherwise.
func (o *RoomStayType) GetBookingMediumDescription() string {
	if o == nil || IsNil(o.BookingMediumDescription) {
		var ret string
		return ret
	}
	return *o.BookingMediumDescription
}

// GetBookingMediumDescriptionOk returns a tuple with the BookingMediumDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetBookingMediumDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.BookingMediumDescription) {
		return nil, false
	}
	return o.BookingMediumDescription, true
}

// HasBookingMediumDescription returns a boolean if a field has been set.
func (o *RoomStayType) HasBookingMediumDescription() bool {
	if o != nil && !IsNil(o.BookingMediumDescription) {
		return true
	}

	return false
}

// SetBookingMediumDescription gets a reference to the given string and assigns it to the BookingMediumDescription field.
func (o *RoomStayType) SetBookingMediumDescription(v string) {
	o.BookingMediumDescription = &v
}

// GetAvailableUpsellOfferCount returns the AvailableUpsellOfferCount field value if set, zero value otherwise.
func (o *RoomStayType) GetAvailableUpsellOfferCount() int32 {
	if o == nil || IsNil(o.AvailableUpsellOfferCount) {
		var ret int32
		return ret
	}
	return *o.AvailableUpsellOfferCount
}

// GetAvailableUpsellOfferCountOk returns a tuple with the AvailableUpsellOfferCount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomStayType) GetAvailableUpsellOfferCountOk() (*int32, bool) {
	if o == nil || IsNil(o.AvailableUpsellOfferCount) {
		return nil, false
	}
	return o.AvailableUpsellOfferCount, true
}

// HasAvailableUpsellOfferCount returns a boolean if a field has been set.
func (o *RoomStayType) HasAvailableUpsellOfferCount() bool {
	if o != nil && !IsNil(o.AvailableUpsellOfferCount) {
		return true
	}

	return false
}

// SetAvailableUpsellOfferCount gets a reference to the given int32 and assigns it to the AvailableUpsellOfferCount field.
func (o *RoomStayType) SetAvailableUpsellOfferCount(v int32) {
	o.AvailableUpsellOfferCount = &v
}

func (o RoomStayType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomStayType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.RegistrationNumber) {
		toSerialize["registrationNumber"] = o.RegistrationNumber
	}
	if !IsNil(o.CurrentRoomInfo) {
		toSerialize["currentRoomInfo"] = o.CurrentRoomInfo
	}
	if !IsNil(o.RoomRates) {
		toSerialize["roomRates"] = o.RoomRates
	}
	if !IsNil(o.GuestCounts) {
		toSerialize["guestCounts"] = o.GuestCounts
	}
	if !IsNil(o.ArrivalDate) {
		toSerialize["arrivalDate"] = o.ArrivalDate
	}
	if !IsNil(o.DepartureDate) {
		toSerialize["departureDate"] = o.DepartureDate
	}
	if !IsNil(o.ExpectedTimes) {
		toSerialize["expectedTimes"] = o.ExpectedTimes
	}
	if !IsNil(o.OriginalTimeSpan) {
		toSerialize["originalTimeSpan"] = o.OriginalTimeSpan
	}
	if !IsNil(o.Guarantee) {
		toSerialize["guarantee"] = o.Guarantee
	}
	if !IsNil(o.Promotion) {
		toSerialize["promotion"] = o.Promotion
	}
	if !IsNil(o.SuiteWith) {
		toSerialize["suiteWith"] = o.SuiteWith
	}
	if !IsNil(o.Total) {
		toSerialize["total"] = o.Total
	}
	if !IsNil(o.TotalPoints) {
		toSerialize["totalPoints"] = o.TotalPoints
	}
	if !IsNil(o.MultiValueAttrs) {
		toSerialize["multiValueAttrs"] = o.MultiValueAttrs
	}
	if !IsNil(o.UpsellInfo) {
		toSerialize["upsellInfo"] = o.UpsellInfo
	}
	if !IsNil(o.MobileNotifications) {
		toSerialize["mobileNotifications"] = o.MobileNotifications
	}
	if !IsNil(o.RoomNumberLocked) {
		toSerialize["roomNumberLocked"] = o.RoomNumberLocked
	}
	if !IsNil(o.PrintRate) {
		toSerialize["printRate"] = o.PrintRate
	}
	if !IsNil(o.OwnerReservationType) {
		toSerialize["ownerReservationType"] = o.OwnerReservationType
	}
	if !IsNil(o.PrimaryShareType) {
		toSerialize["primaryShareType"] = o.PrimaryShareType
	}
	if !IsNil(o.RemoteCheckInAllowed) {
		toSerialize["remoteCheckInAllowed"] = o.RemoteCheckInAllowed
	}
	if !IsNil(o.BookingMedium) {
		toSerialize["bookingMedium"] = o.BookingMedium
	}
	if !IsNil(o.BookingMediumDescription) {
		toSerialize["bookingMediumDescription"] = o.BookingMediumDescription
	}
	if !IsNil(o.AvailableUpsellOfferCount) {
		toSerialize["availableUpsellOfferCount"] = o.AvailableUpsellOfferCount
	}
	return toSerialize, nil
}

type NullableRoomStayType struct {
	value *RoomStayType
	isSet bool
}

func (v NullableRoomStayType) Get() *RoomStayType {
	return v.value
}

func (v *NullableRoomStayType) Set(val *RoomStayType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomStayType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomStayType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomStayType(val *RoomStayType) *NullableRoomStayType {
	return &NullableRoomStayType{value: val, isSet: true}
}

func (v NullableRoomStayType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomStayType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


