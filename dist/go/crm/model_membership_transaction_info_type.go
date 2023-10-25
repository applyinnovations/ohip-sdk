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

// checks if the MembershipTransactionInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipTransactionInfoType{}

// MembershipTransactionInfoType Specific details regarding the transaction.
type MembershipTransactionInfoType struct {
	// Code type of the type of currency.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// Resort of the transaction.
	HotelId *string `json:"hotelId,omitempty"`
	// Total nights.
	Nights *int32 `json:"nights,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ReservationIdList []UniqueIDType `json:"reservationIdList,omitempty"`
	// Total stay.
	Stay *int32 `json:"stay,omitempty"`
	StayTimeSpan *TimeSpanType `json:"stayTimeSpan,omitempty"`
	// Membership Transaction Date.
	TransactionDate *string `json:"transactionDate,omitempty"`
	// Membership Transaction Type.
	TransactionType *string `json:"transactionType,omitempty"`
}

// NewMembershipTransactionInfoType instantiates a new MembershipTransactionInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipTransactionInfoType() *MembershipTransactionInfoType {
	this := MembershipTransactionInfoType{}
	return &this
}

// NewMembershipTransactionInfoTypeWithDefaults instantiates a new MembershipTransactionInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipTransactionInfoTypeWithDefaults() *MembershipTransactionInfoType {
	this := MembershipTransactionInfoType{}
	return &this
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *MembershipTransactionInfoType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionInfoType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *MembershipTransactionInfoType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *MembershipTransactionInfoType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *MembershipTransactionInfoType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionInfoType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *MembershipTransactionInfoType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *MembershipTransactionInfoType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetNights returns the Nights field value if set, zero value otherwise.
func (o *MembershipTransactionInfoType) GetNights() int32 {
	if o == nil || IsNil(o.Nights) {
		var ret int32
		return ret
	}
	return *o.Nights
}

// GetNightsOk returns a tuple with the Nights field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionInfoType) GetNightsOk() (*int32, bool) {
	if o == nil || IsNil(o.Nights) {
		return nil, false
	}
	return o.Nights, true
}

// HasNights returns a boolean if a field has been set.
func (o *MembershipTransactionInfoType) HasNights() bool {
	if o != nil && !IsNil(o.Nights) {
		return true
	}

	return false
}

// SetNights gets a reference to the given int32 and assigns it to the Nights field.
func (o *MembershipTransactionInfoType) SetNights(v int32) {
	o.Nights = &v
}

// GetReservationIdList returns the ReservationIdList field value if set, zero value otherwise.
func (o *MembershipTransactionInfoType) GetReservationIdList() []UniqueIDType {
	if o == nil || IsNil(o.ReservationIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ReservationIdList
}

// GetReservationIdListOk returns a tuple with the ReservationIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionInfoType) GetReservationIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ReservationIdList) {
		return nil, false
	}
	return o.ReservationIdList, true
}

// HasReservationIdList returns a boolean if a field has been set.
func (o *MembershipTransactionInfoType) HasReservationIdList() bool {
	if o != nil && !IsNil(o.ReservationIdList) {
		return true
	}

	return false
}

// SetReservationIdList gets a reference to the given []UniqueIDType and assigns it to the ReservationIdList field.
func (o *MembershipTransactionInfoType) SetReservationIdList(v []UniqueIDType) {
	o.ReservationIdList = v
}

// GetStay returns the Stay field value if set, zero value otherwise.
func (o *MembershipTransactionInfoType) GetStay() int32 {
	if o == nil || IsNil(o.Stay) {
		var ret int32
		return ret
	}
	return *o.Stay
}

// GetStayOk returns a tuple with the Stay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionInfoType) GetStayOk() (*int32, bool) {
	if o == nil || IsNil(o.Stay) {
		return nil, false
	}
	return o.Stay, true
}

// HasStay returns a boolean if a field has been set.
func (o *MembershipTransactionInfoType) HasStay() bool {
	if o != nil && !IsNil(o.Stay) {
		return true
	}

	return false
}

// SetStay gets a reference to the given int32 and assigns it to the Stay field.
func (o *MembershipTransactionInfoType) SetStay(v int32) {
	o.Stay = &v
}

// GetStayTimeSpan returns the StayTimeSpan field value if set, zero value otherwise.
func (o *MembershipTransactionInfoType) GetStayTimeSpan() TimeSpanType {
	if o == nil || IsNil(o.StayTimeSpan) {
		var ret TimeSpanType
		return ret
	}
	return *o.StayTimeSpan
}

// GetStayTimeSpanOk returns a tuple with the StayTimeSpan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionInfoType) GetStayTimeSpanOk() (*TimeSpanType, bool) {
	if o == nil || IsNil(o.StayTimeSpan) {
		return nil, false
	}
	return o.StayTimeSpan, true
}

// HasStayTimeSpan returns a boolean if a field has been set.
func (o *MembershipTransactionInfoType) HasStayTimeSpan() bool {
	if o != nil && !IsNil(o.StayTimeSpan) {
		return true
	}

	return false
}

// SetStayTimeSpan gets a reference to the given TimeSpanType and assigns it to the StayTimeSpan field.
func (o *MembershipTransactionInfoType) SetStayTimeSpan(v TimeSpanType) {
	o.StayTimeSpan = &v
}

// GetTransactionDate returns the TransactionDate field value if set, zero value otherwise.
func (o *MembershipTransactionInfoType) GetTransactionDate() string {
	if o == nil || IsNil(o.TransactionDate) {
		var ret string
		return ret
	}
	return *o.TransactionDate
}

// GetTransactionDateOk returns a tuple with the TransactionDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionInfoType) GetTransactionDateOk() (*string, bool) {
	if o == nil || IsNil(o.TransactionDate) {
		return nil, false
	}
	return o.TransactionDate, true
}

// HasTransactionDate returns a boolean if a field has been set.
func (o *MembershipTransactionInfoType) HasTransactionDate() bool {
	if o != nil && !IsNil(o.TransactionDate) {
		return true
	}

	return false
}

// SetTransactionDate gets a reference to the given string and assigns it to the TransactionDate field.
func (o *MembershipTransactionInfoType) SetTransactionDate(v string) {
	o.TransactionDate = &v
}

// GetTransactionType returns the TransactionType field value if set, zero value otherwise.
func (o *MembershipTransactionInfoType) GetTransactionType() string {
	if o == nil || IsNil(o.TransactionType) {
		var ret string
		return ret
	}
	return *o.TransactionType
}

// GetTransactionTypeOk returns a tuple with the TransactionType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionInfoType) GetTransactionTypeOk() (*string, bool) {
	if o == nil || IsNil(o.TransactionType) {
		return nil, false
	}
	return o.TransactionType, true
}

// HasTransactionType returns a boolean if a field has been set.
func (o *MembershipTransactionInfoType) HasTransactionType() bool {
	if o != nil && !IsNil(o.TransactionType) {
		return true
	}

	return false
}

// SetTransactionType gets a reference to the given string and assigns it to the TransactionType field.
func (o *MembershipTransactionInfoType) SetTransactionType(v string) {
	o.TransactionType = &v
}

func (o MembershipTransactionInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipTransactionInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CurrencyCode) {
		toSerialize["currencyCode"] = o.CurrencyCode
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Nights) {
		toSerialize["nights"] = o.Nights
	}
	if !IsNil(o.ReservationIdList) {
		toSerialize["reservationIdList"] = o.ReservationIdList
	}
	if !IsNil(o.Stay) {
		toSerialize["stay"] = o.Stay
	}
	if !IsNil(o.StayTimeSpan) {
		toSerialize["stayTimeSpan"] = o.StayTimeSpan
	}
	if !IsNil(o.TransactionDate) {
		toSerialize["transactionDate"] = o.TransactionDate
	}
	if !IsNil(o.TransactionType) {
		toSerialize["transactionType"] = o.TransactionType
	}
	return toSerialize, nil
}

type NullableMembershipTransactionInfoType struct {
	value *MembershipTransactionInfoType
	isSet bool
}

func (v NullableMembershipTransactionInfoType) Get() *MembershipTransactionInfoType {
	return v.value
}

func (v *NullableMembershipTransactionInfoType) Set(val *MembershipTransactionInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipTransactionInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipTransactionInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipTransactionInfoType(val *MembershipTransactionInfoType) *NullableMembershipTransactionInfoType {
	return &NullableMembershipTransactionInfoType{value: val, isSet: true}
}

func (v NullableMembershipTransactionInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipTransactionInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


