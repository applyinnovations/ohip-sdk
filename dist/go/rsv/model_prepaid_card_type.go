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

// checks if the PrepaidCardType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PrepaidCardType{}

// PrepaidCardType Holds fixed charge information.
type PrepaidCardType struct {
	Amount *CurrencyAmountType `json:"amount,omitempty"`
	// Prepaid card / account number.
	CardNo *string `json:"cardNo,omitempty"`
	// Masked Prepaid card / account number.
	CardNumberMasked *string `json:"cardNumberMasked,omitempty"`
	// Time stamp of the creation.
	CreateDateTime *string `json:"createDateTime,omitempty"`
	// ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
	CreatorId *string `json:"creatorId,omitempty"`
	// Given name, first name or names.
	FirstName *string `json:"firstName,omitempty"`
	// Indicates a gift card type.
	GiftCard *bool `json:"giftCard,omitempty"`
	// Hotel context for the Reservations.
	HotelId *string `json:"hotelId,omitempty"`
	InterfaceId *UniqueIDType `json:"interfaceId,omitempty"`
	// Identifies the last software system or person to modify a record.
	LastModifierId *string `json:"lastModifierId,omitempty"`
	// Time stamp of last modification.
	LastModifyDateTime *string `json:"lastModifyDateTime,omitempty"`
	// Family name, last name or Company Name.
	Name *string `json:"name,omitempty"`
	ProfileId *ProfileId `json:"profileId,omitempty"`
	// Date an item will be purged from a database (e.g., from a live database to an archive).
	PurgeDate *string `json:"purgeDate,omitempty"`
	ReservationId *ReservationId `json:"reservationId,omitempty"`
}

// NewPrepaidCardType instantiates a new PrepaidCardType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPrepaidCardType() *PrepaidCardType {
	this := PrepaidCardType{}
	return &this
}

// NewPrepaidCardTypeWithDefaults instantiates a new PrepaidCardType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPrepaidCardTypeWithDefaults() *PrepaidCardType {
	this := PrepaidCardType{}
	return &this
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *PrepaidCardType) GetAmount() CurrencyAmountType {
	if o == nil || IsNil(o.Amount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardType) GetAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *PrepaidCardType) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given CurrencyAmountType and assigns it to the Amount field.
func (o *PrepaidCardType) SetAmount(v CurrencyAmountType) {
	o.Amount = &v
}

// GetCardNo returns the CardNo field value if set, zero value otherwise.
func (o *PrepaidCardType) GetCardNo() string {
	if o == nil || IsNil(o.CardNo) {
		var ret string
		return ret
	}
	return *o.CardNo
}

// GetCardNoOk returns a tuple with the CardNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardType) GetCardNoOk() (*string, bool) {
	if o == nil || IsNil(o.CardNo) {
		return nil, false
	}
	return o.CardNo, true
}

// HasCardNo returns a boolean if a field has been set.
func (o *PrepaidCardType) HasCardNo() bool {
	if o != nil && !IsNil(o.CardNo) {
		return true
	}

	return false
}

// SetCardNo gets a reference to the given string and assigns it to the CardNo field.
func (o *PrepaidCardType) SetCardNo(v string) {
	o.CardNo = &v
}

// GetCardNumberMasked returns the CardNumberMasked field value if set, zero value otherwise.
func (o *PrepaidCardType) GetCardNumberMasked() string {
	if o == nil || IsNil(o.CardNumberMasked) {
		var ret string
		return ret
	}
	return *o.CardNumberMasked
}

// GetCardNumberMaskedOk returns a tuple with the CardNumberMasked field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardType) GetCardNumberMaskedOk() (*string, bool) {
	if o == nil || IsNil(o.CardNumberMasked) {
		return nil, false
	}
	return o.CardNumberMasked, true
}

// HasCardNumberMasked returns a boolean if a field has been set.
func (o *PrepaidCardType) HasCardNumberMasked() bool {
	if o != nil && !IsNil(o.CardNumberMasked) {
		return true
	}

	return false
}

// SetCardNumberMasked gets a reference to the given string and assigns it to the CardNumberMasked field.
func (o *PrepaidCardType) SetCardNumberMasked(v string) {
	o.CardNumberMasked = &v
}

// GetCreateDateTime returns the CreateDateTime field value if set, zero value otherwise.
func (o *PrepaidCardType) GetCreateDateTime() string {
	if o == nil || IsNil(o.CreateDateTime) {
		var ret string
		return ret
	}
	return *o.CreateDateTime
}

// GetCreateDateTimeOk returns a tuple with the CreateDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardType) GetCreateDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.CreateDateTime) {
		return nil, false
	}
	return o.CreateDateTime, true
}

// HasCreateDateTime returns a boolean if a field has been set.
func (o *PrepaidCardType) HasCreateDateTime() bool {
	if o != nil && !IsNil(o.CreateDateTime) {
		return true
	}

	return false
}

// SetCreateDateTime gets a reference to the given string and assigns it to the CreateDateTime field.
func (o *PrepaidCardType) SetCreateDateTime(v string) {
	o.CreateDateTime = &v
}

// GetCreatorId returns the CreatorId field value if set, zero value otherwise.
func (o *PrepaidCardType) GetCreatorId() string {
	if o == nil || IsNil(o.CreatorId) {
		var ret string
		return ret
	}
	return *o.CreatorId
}

// GetCreatorIdOk returns a tuple with the CreatorId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardType) GetCreatorIdOk() (*string, bool) {
	if o == nil || IsNil(o.CreatorId) {
		return nil, false
	}
	return o.CreatorId, true
}

// HasCreatorId returns a boolean if a field has been set.
func (o *PrepaidCardType) HasCreatorId() bool {
	if o != nil && !IsNil(o.CreatorId) {
		return true
	}

	return false
}

// SetCreatorId gets a reference to the given string and assigns it to the CreatorId field.
func (o *PrepaidCardType) SetCreatorId(v string) {
	o.CreatorId = &v
}

// GetFirstName returns the FirstName field value if set, zero value otherwise.
func (o *PrepaidCardType) GetFirstName() string {
	if o == nil || IsNil(o.FirstName) {
		var ret string
		return ret
	}
	return *o.FirstName
}

// GetFirstNameOk returns a tuple with the FirstName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardType) GetFirstNameOk() (*string, bool) {
	if o == nil || IsNil(o.FirstName) {
		return nil, false
	}
	return o.FirstName, true
}

// HasFirstName returns a boolean if a field has been set.
func (o *PrepaidCardType) HasFirstName() bool {
	if o != nil && !IsNil(o.FirstName) {
		return true
	}

	return false
}

// SetFirstName gets a reference to the given string and assigns it to the FirstName field.
func (o *PrepaidCardType) SetFirstName(v string) {
	o.FirstName = &v
}

// GetGiftCard returns the GiftCard field value if set, zero value otherwise.
func (o *PrepaidCardType) GetGiftCard() bool {
	if o == nil || IsNil(o.GiftCard) {
		var ret bool
		return ret
	}
	return *o.GiftCard
}

// GetGiftCardOk returns a tuple with the GiftCard field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardType) GetGiftCardOk() (*bool, bool) {
	if o == nil || IsNil(o.GiftCard) {
		return nil, false
	}
	return o.GiftCard, true
}

// HasGiftCard returns a boolean if a field has been set.
func (o *PrepaidCardType) HasGiftCard() bool {
	if o != nil && !IsNil(o.GiftCard) {
		return true
	}

	return false
}

// SetGiftCard gets a reference to the given bool and assigns it to the GiftCard field.
func (o *PrepaidCardType) SetGiftCard(v bool) {
	o.GiftCard = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *PrepaidCardType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *PrepaidCardType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *PrepaidCardType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInterfaceId returns the InterfaceId field value if set, zero value otherwise.
func (o *PrepaidCardType) GetInterfaceId() UniqueIDType {
	if o == nil || IsNil(o.InterfaceId) {
		var ret UniqueIDType
		return ret
	}
	return *o.InterfaceId
}

// GetInterfaceIdOk returns a tuple with the InterfaceId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardType) GetInterfaceIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.InterfaceId) {
		return nil, false
	}
	return o.InterfaceId, true
}

// HasInterfaceId returns a boolean if a field has been set.
func (o *PrepaidCardType) HasInterfaceId() bool {
	if o != nil && !IsNil(o.InterfaceId) {
		return true
	}

	return false
}

// SetInterfaceId gets a reference to the given UniqueIDType and assigns it to the InterfaceId field.
func (o *PrepaidCardType) SetInterfaceId(v UniqueIDType) {
	o.InterfaceId = &v
}

// GetLastModifierId returns the LastModifierId field value if set, zero value otherwise.
func (o *PrepaidCardType) GetLastModifierId() string {
	if o == nil || IsNil(o.LastModifierId) {
		var ret string
		return ret
	}
	return *o.LastModifierId
}

// GetLastModifierIdOk returns a tuple with the LastModifierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardType) GetLastModifierIdOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifierId) {
		return nil, false
	}
	return o.LastModifierId, true
}

// HasLastModifierId returns a boolean if a field has been set.
func (o *PrepaidCardType) HasLastModifierId() bool {
	if o != nil && !IsNil(o.LastModifierId) {
		return true
	}

	return false
}

// SetLastModifierId gets a reference to the given string and assigns it to the LastModifierId field.
func (o *PrepaidCardType) SetLastModifierId(v string) {
	o.LastModifierId = &v
}

// GetLastModifyDateTime returns the LastModifyDateTime field value if set, zero value otherwise.
func (o *PrepaidCardType) GetLastModifyDateTime() string {
	if o == nil || IsNil(o.LastModifyDateTime) {
		var ret string
		return ret
	}
	return *o.LastModifyDateTime
}

// GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardType) GetLastModifyDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifyDateTime) {
		return nil, false
	}
	return o.LastModifyDateTime, true
}

// HasLastModifyDateTime returns a boolean if a field has been set.
func (o *PrepaidCardType) HasLastModifyDateTime() bool {
	if o != nil && !IsNil(o.LastModifyDateTime) {
		return true
	}

	return false
}

// SetLastModifyDateTime gets a reference to the given string and assigns it to the LastModifyDateTime field.
func (o *PrepaidCardType) SetLastModifyDateTime(v string) {
	o.LastModifyDateTime = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *PrepaidCardType) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardType) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *PrepaidCardType) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *PrepaidCardType) SetName(v string) {
	o.Name = &v
}

// GetProfileId returns the ProfileId field value if set, zero value otherwise.
func (o *PrepaidCardType) GetProfileId() ProfileId {
	if o == nil || IsNil(o.ProfileId) {
		var ret ProfileId
		return ret
	}
	return *o.ProfileId
}

// GetProfileIdOk returns a tuple with the ProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardType) GetProfileIdOk() (*ProfileId, bool) {
	if o == nil || IsNil(o.ProfileId) {
		return nil, false
	}
	return o.ProfileId, true
}

// HasProfileId returns a boolean if a field has been set.
func (o *PrepaidCardType) HasProfileId() bool {
	if o != nil && !IsNil(o.ProfileId) {
		return true
	}

	return false
}

// SetProfileId gets a reference to the given ProfileId and assigns it to the ProfileId field.
func (o *PrepaidCardType) SetProfileId(v ProfileId) {
	o.ProfileId = &v
}

// GetPurgeDate returns the PurgeDate field value if set, zero value otherwise.
func (o *PrepaidCardType) GetPurgeDate() string {
	if o == nil || IsNil(o.PurgeDate) {
		var ret string
		return ret
	}
	return *o.PurgeDate
}

// GetPurgeDateOk returns a tuple with the PurgeDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardType) GetPurgeDateOk() (*string, bool) {
	if o == nil || IsNil(o.PurgeDate) {
		return nil, false
	}
	return o.PurgeDate, true
}

// HasPurgeDate returns a boolean if a field has been set.
func (o *PrepaidCardType) HasPurgeDate() bool {
	if o != nil && !IsNil(o.PurgeDate) {
		return true
	}

	return false
}

// SetPurgeDate gets a reference to the given string and assigns it to the PurgeDate field.
func (o *PrepaidCardType) SetPurgeDate(v string) {
	o.PurgeDate = &v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *PrepaidCardType) GetReservationId() ReservationId {
	if o == nil || IsNil(o.ReservationId) {
		var ret ReservationId
		return ret
	}
	return *o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardType) GetReservationIdOk() (*ReservationId, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *PrepaidCardType) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given ReservationId and assigns it to the ReservationId field.
func (o *PrepaidCardType) SetReservationId(v ReservationId) {
	o.ReservationId = &v
}

func (o PrepaidCardType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PrepaidCardType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
	}
	if !IsNil(o.CardNo) {
		toSerialize["cardNo"] = o.CardNo
	}
	if !IsNil(o.CardNumberMasked) {
		toSerialize["cardNumberMasked"] = o.CardNumberMasked
	}
	if !IsNil(o.CreateDateTime) {
		toSerialize["createDateTime"] = o.CreateDateTime
	}
	if !IsNil(o.CreatorId) {
		toSerialize["creatorId"] = o.CreatorId
	}
	if !IsNil(o.FirstName) {
		toSerialize["firstName"] = o.FirstName
	}
	if !IsNil(o.GiftCard) {
		toSerialize["giftCard"] = o.GiftCard
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.InterfaceId) {
		toSerialize["interfaceId"] = o.InterfaceId
	}
	if !IsNil(o.LastModifierId) {
		toSerialize["lastModifierId"] = o.LastModifierId
	}
	if !IsNil(o.LastModifyDateTime) {
		toSerialize["lastModifyDateTime"] = o.LastModifyDateTime
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.ProfileId) {
		toSerialize["profileId"] = o.ProfileId
	}
	if !IsNil(o.PurgeDate) {
		toSerialize["purgeDate"] = o.PurgeDate
	}
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	return toSerialize, nil
}

type NullablePrepaidCardType struct {
	value *PrepaidCardType
	isSet bool
}

func (v NullablePrepaidCardType) Get() *PrepaidCardType {
	return v.value
}

func (v *NullablePrepaidCardType) Set(val *PrepaidCardType) {
	v.value = val
	v.isSet = true
}

func (v NullablePrepaidCardType) IsSet() bool {
	return v.isSet
}

func (v *NullablePrepaidCardType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePrepaidCardType(val *PrepaidCardType) *NullablePrepaidCardType {
	return &NullablePrepaidCardType{value: val, isSet: true}
}

func (v NullablePrepaidCardType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePrepaidCardType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


