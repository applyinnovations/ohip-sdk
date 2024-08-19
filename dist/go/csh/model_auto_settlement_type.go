/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the AutoSettlementType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AutoSettlementType{}

// AutoSettlementType struct for AutoSettlementType
type AutoSettlementType struct {
	// The Cashier ID of the Cashier who is currently processing the transaction(s).
	CashierId *float32 `json:"cashierId,omitempty"`
	EventType *CashieringEventType `json:"eventType,omitempty"`
	// Folio windows to do auto auto settlement.
	FolioWindowsToSettle []string `json:"folioWindowsToSettle,omitempty"`
	// Folio windows to transfer.
	FolioWindowsToTransfer []string `json:"folioWindowsToTransfer,omitempty"`
	// Property code.
	HotelId *string `json:"hotelId,omitempty"`
	// Dictates whether to include negative postings for auto settlement.
	IncludeCreditCardBalance *bool `json:"includeCreditCardBalance,omitempty"`
	// Indicates the minimum window balance to do auto settlement.
	MinimumWindowBalance *int32 `json:"minimumWindowBalance,omitempty"`
	// Defines the payment method to search reservations.
	PaymentMethods []PaymentMethodSearchType `json:"paymentMethods,omitempty"`
	ReservationCriteria *AutoFolioSettlementCriteriaType `json:"reservationCriteria,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ReservationIdList []UniqueIDType `json:"reservationIdList,omitempty"`
}

// NewAutoSettlementType instantiates a new AutoSettlementType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAutoSettlementType() *AutoSettlementType {
	this := AutoSettlementType{}
	return &this
}

// NewAutoSettlementTypeWithDefaults instantiates a new AutoSettlementType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAutoSettlementTypeWithDefaults() *AutoSettlementType {
	this := AutoSettlementType{}
	return &this
}

// GetCashierId returns the CashierId field value if set, zero value otherwise.
func (o *AutoSettlementType) GetCashierId() float32 {
	if o == nil || IsNil(o.CashierId) {
		var ret float32
		return ret
	}
	return *o.CashierId
}

// GetCashierIdOk returns a tuple with the CashierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoSettlementType) GetCashierIdOk() (*float32, bool) {
	if o == nil || IsNil(o.CashierId) {
		return nil, false
	}
	return o.CashierId, true
}

// HasCashierId returns a boolean if a field has been set.
func (o *AutoSettlementType) HasCashierId() bool {
	if o != nil && !IsNil(o.CashierId) {
		return true
	}

	return false
}

// SetCashierId gets a reference to the given float32 and assigns it to the CashierId field.
func (o *AutoSettlementType) SetCashierId(v float32) {
	o.CashierId = &v
}

// GetEventType returns the EventType field value if set, zero value otherwise.
func (o *AutoSettlementType) GetEventType() CashieringEventType {
	if o == nil || IsNil(o.EventType) {
		var ret CashieringEventType
		return ret
	}
	return *o.EventType
}

// GetEventTypeOk returns a tuple with the EventType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoSettlementType) GetEventTypeOk() (*CashieringEventType, bool) {
	if o == nil || IsNil(o.EventType) {
		return nil, false
	}
	return o.EventType, true
}

// HasEventType returns a boolean if a field has been set.
func (o *AutoSettlementType) HasEventType() bool {
	if o != nil && !IsNil(o.EventType) {
		return true
	}

	return false
}

// SetEventType gets a reference to the given CashieringEventType and assigns it to the EventType field.
func (o *AutoSettlementType) SetEventType(v CashieringEventType) {
	o.EventType = &v
}

// GetFolioWindowsToSettle returns the FolioWindowsToSettle field value if set, zero value otherwise.
func (o *AutoSettlementType) GetFolioWindowsToSettle() []string {
	if o == nil || IsNil(o.FolioWindowsToSettle) {
		var ret []string
		return ret
	}
	return o.FolioWindowsToSettle
}

// GetFolioWindowsToSettleOk returns a tuple with the FolioWindowsToSettle field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoSettlementType) GetFolioWindowsToSettleOk() ([]string, bool) {
	if o == nil || IsNil(o.FolioWindowsToSettle) {
		return nil, false
	}
	return o.FolioWindowsToSettle, true
}

// HasFolioWindowsToSettle returns a boolean if a field has been set.
func (o *AutoSettlementType) HasFolioWindowsToSettle() bool {
	if o != nil && !IsNil(o.FolioWindowsToSettle) {
		return true
	}

	return false
}

// SetFolioWindowsToSettle gets a reference to the given []string and assigns it to the FolioWindowsToSettle field.
func (o *AutoSettlementType) SetFolioWindowsToSettle(v []string) {
	o.FolioWindowsToSettle = v
}

// GetFolioWindowsToTransfer returns the FolioWindowsToTransfer field value if set, zero value otherwise.
func (o *AutoSettlementType) GetFolioWindowsToTransfer() []string {
	if o == nil || IsNil(o.FolioWindowsToTransfer) {
		var ret []string
		return ret
	}
	return o.FolioWindowsToTransfer
}

// GetFolioWindowsToTransferOk returns a tuple with the FolioWindowsToTransfer field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoSettlementType) GetFolioWindowsToTransferOk() ([]string, bool) {
	if o == nil || IsNil(o.FolioWindowsToTransfer) {
		return nil, false
	}
	return o.FolioWindowsToTransfer, true
}

// HasFolioWindowsToTransfer returns a boolean if a field has been set.
func (o *AutoSettlementType) HasFolioWindowsToTransfer() bool {
	if o != nil && !IsNil(o.FolioWindowsToTransfer) {
		return true
	}

	return false
}

// SetFolioWindowsToTransfer gets a reference to the given []string and assigns it to the FolioWindowsToTransfer field.
func (o *AutoSettlementType) SetFolioWindowsToTransfer(v []string) {
	o.FolioWindowsToTransfer = v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *AutoSettlementType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoSettlementType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *AutoSettlementType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *AutoSettlementType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetIncludeCreditCardBalance returns the IncludeCreditCardBalance field value if set, zero value otherwise.
func (o *AutoSettlementType) GetIncludeCreditCardBalance() bool {
	if o == nil || IsNil(o.IncludeCreditCardBalance) {
		var ret bool
		return ret
	}
	return *o.IncludeCreditCardBalance
}

// GetIncludeCreditCardBalanceOk returns a tuple with the IncludeCreditCardBalance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoSettlementType) GetIncludeCreditCardBalanceOk() (*bool, bool) {
	if o == nil || IsNil(o.IncludeCreditCardBalance) {
		return nil, false
	}
	return o.IncludeCreditCardBalance, true
}

// HasIncludeCreditCardBalance returns a boolean if a field has been set.
func (o *AutoSettlementType) HasIncludeCreditCardBalance() bool {
	if o != nil && !IsNil(o.IncludeCreditCardBalance) {
		return true
	}

	return false
}

// SetIncludeCreditCardBalance gets a reference to the given bool and assigns it to the IncludeCreditCardBalance field.
func (o *AutoSettlementType) SetIncludeCreditCardBalance(v bool) {
	o.IncludeCreditCardBalance = &v
}

// GetMinimumWindowBalance returns the MinimumWindowBalance field value if set, zero value otherwise.
func (o *AutoSettlementType) GetMinimumWindowBalance() int32 {
	if o == nil || IsNil(o.MinimumWindowBalance) {
		var ret int32
		return ret
	}
	return *o.MinimumWindowBalance
}

// GetMinimumWindowBalanceOk returns a tuple with the MinimumWindowBalance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoSettlementType) GetMinimumWindowBalanceOk() (*int32, bool) {
	if o == nil || IsNil(o.MinimumWindowBalance) {
		return nil, false
	}
	return o.MinimumWindowBalance, true
}

// HasMinimumWindowBalance returns a boolean if a field has been set.
func (o *AutoSettlementType) HasMinimumWindowBalance() bool {
	if o != nil && !IsNil(o.MinimumWindowBalance) {
		return true
	}

	return false
}

// SetMinimumWindowBalance gets a reference to the given int32 and assigns it to the MinimumWindowBalance field.
func (o *AutoSettlementType) SetMinimumWindowBalance(v int32) {
	o.MinimumWindowBalance = &v
}

// GetPaymentMethods returns the PaymentMethods field value if set, zero value otherwise.
func (o *AutoSettlementType) GetPaymentMethods() []PaymentMethodSearchType {
	if o == nil || IsNil(o.PaymentMethods) {
		var ret []PaymentMethodSearchType
		return ret
	}
	return o.PaymentMethods
}

// GetPaymentMethodsOk returns a tuple with the PaymentMethods field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoSettlementType) GetPaymentMethodsOk() ([]PaymentMethodSearchType, bool) {
	if o == nil || IsNil(o.PaymentMethods) {
		return nil, false
	}
	return o.PaymentMethods, true
}

// HasPaymentMethods returns a boolean if a field has been set.
func (o *AutoSettlementType) HasPaymentMethods() bool {
	if o != nil && !IsNil(o.PaymentMethods) {
		return true
	}

	return false
}

// SetPaymentMethods gets a reference to the given []PaymentMethodSearchType and assigns it to the PaymentMethods field.
func (o *AutoSettlementType) SetPaymentMethods(v []PaymentMethodSearchType) {
	o.PaymentMethods = v
}

// GetReservationCriteria returns the ReservationCriteria field value if set, zero value otherwise.
func (o *AutoSettlementType) GetReservationCriteria() AutoFolioSettlementCriteriaType {
	if o == nil || IsNil(o.ReservationCriteria) {
		var ret AutoFolioSettlementCriteriaType
		return ret
	}
	return *o.ReservationCriteria
}

// GetReservationCriteriaOk returns a tuple with the ReservationCriteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoSettlementType) GetReservationCriteriaOk() (*AutoFolioSettlementCriteriaType, bool) {
	if o == nil || IsNil(o.ReservationCriteria) {
		return nil, false
	}
	return o.ReservationCriteria, true
}

// HasReservationCriteria returns a boolean if a field has been set.
func (o *AutoSettlementType) HasReservationCriteria() bool {
	if o != nil && !IsNil(o.ReservationCriteria) {
		return true
	}

	return false
}

// SetReservationCriteria gets a reference to the given AutoFolioSettlementCriteriaType and assigns it to the ReservationCriteria field.
func (o *AutoSettlementType) SetReservationCriteria(v AutoFolioSettlementCriteriaType) {
	o.ReservationCriteria = &v
}

// GetReservationIdList returns the ReservationIdList field value if set, zero value otherwise.
func (o *AutoSettlementType) GetReservationIdList() []UniqueIDType {
	if o == nil || IsNil(o.ReservationIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ReservationIdList
}

// GetReservationIdListOk returns a tuple with the ReservationIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AutoSettlementType) GetReservationIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ReservationIdList) {
		return nil, false
	}
	return o.ReservationIdList, true
}

// HasReservationIdList returns a boolean if a field has been set.
func (o *AutoSettlementType) HasReservationIdList() bool {
	if o != nil && !IsNil(o.ReservationIdList) {
		return true
	}

	return false
}

// SetReservationIdList gets a reference to the given []UniqueIDType and assigns it to the ReservationIdList field.
func (o *AutoSettlementType) SetReservationIdList(v []UniqueIDType) {
	o.ReservationIdList = v
}

func (o AutoSettlementType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AutoSettlementType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CashierId) {
		toSerialize["cashierId"] = o.CashierId
	}
	if !IsNil(o.EventType) {
		toSerialize["eventType"] = o.EventType
	}
	if !IsNil(o.FolioWindowsToSettle) {
		toSerialize["folioWindowsToSettle"] = o.FolioWindowsToSettle
	}
	if !IsNil(o.FolioWindowsToTransfer) {
		toSerialize["folioWindowsToTransfer"] = o.FolioWindowsToTransfer
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.IncludeCreditCardBalance) {
		toSerialize["includeCreditCardBalance"] = o.IncludeCreditCardBalance
	}
	if !IsNil(o.MinimumWindowBalance) {
		toSerialize["minimumWindowBalance"] = o.MinimumWindowBalance
	}
	if !IsNil(o.PaymentMethods) {
		toSerialize["paymentMethods"] = o.PaymentMethods
	}
	if !IsNil(o.ReservationCriteria) {
		toSerialize["reservationCriteria"] = o.ReservationCriteria
	}
	if !IsNil(o.ReservationIdList) {
		toSerialize["reservationIdList"] = o.ReservationIdList
	}
	return toSerialize, nil
}

type NullableAutoSettlementType struct {
	value *AutoSettlementType
	isSet bool
}

func (v NullableAutoSettlementType) Get() *AutoSettlementType {
	return v.value
}

func (v *NullableAutoSettlementType) Set(val *AutoSettlementType) {
	v.value = val
	v.isSet = true
}

func (v NullableAutoSettlementType) IsSet() bool {
	return v.isSet
}

func (v *NullableAutoSettlementType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAutoSettlementType(val *AutoSettlementType) *NullableAutoSettlementType {
	return &NullableAutoSettlementType{value: val, isSet: true}
}

func (v NullableAutoSettlementType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAutoSettlementType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


