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

// checks if the CCBatchSettlementType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CCBatchSettlementType{}

// CCBatchSettlementType Credit card transaction detail for batch settlement
type CCBatchSettlementType struct {
	// The approval code authenticates the authorization.
	ApprovalCode *string `json:"approvalCode,omitempty"`
	// Folio number of transaction
	FolioNo *float32 `json:"folioNo,omitempty"`
	// Guest name associated with the CC settlement transaction.
	GuestName *string `json:"guestName,omitempty"`
	PaymentMethod *ReservationPaymentMethodType `json:"paymentMethod,omitempty"`
	ReservationId *ReservationId `json:"reservationId,omitempty"`
	// Room number associated with the CC settlement transaction.
	RoomId *string `json:"roomId,omitempty"`
	SettlementAmount *CurrencyAmountType `json:"settlementAmount,omitempty"`
	SettlementId *UniqueIDType `json:"settlementId,omitempty"`
	// Transaction Date of the credit card transaction.
	TransactionDate *string `json:"transactionDate,omitempty"`
	// Window number associated with the CC settlement transaction.
	WindowNo *int32 `json:"windowNo,omitempty"`
}

// NewCCBatchSettlementType instantiates a new CCBatchSettlementType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCCBatchSettlementType() *CCBatchSettlementType {
	this := CCBatchSettlementType{}
	return &this
}

// NewCCBatchSettlementTypeWithDefaults instantiates a new CCBatchSettlementType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCCBatchSettlementTypeWithDefaults() *CCBatchSettlementType {
	this := CCBatchSettlementType{}
	return &this
}

// GetApprovalCode returns the ApprovalCode field value if set, zero value otherwise.
func (o *CCBatchSettlementType) GetApprovalCode() string {
	if o == nil || IsNil(o.ApprovalCode) {
		var ret string
		return ret
	}
	return *o.ApprovalCode
}

// GetApprovalCodeOk returns a tuple with the ApprovalCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCBatchSettlementType) GetApprovalCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ApprovalCode) {
		return nil, false
	}
	return o.ApprovalCode, true
}

// HasApprovalCode returns a boolean if a field has been set.
func (o *CCBatchSettlementType) HasApprovalCode() bool {
	if o != nil && !IsNil(o.ApprovalCode) {
		return true
	}

	return false
}

// SetApprovalCode gets a reference to the given string and assigns it to the ApprovalCode field.
func (o *CCBatchSettlementType) SetApprovalCode(v string) {
	o.ApprovalCode = &v
}

// GetFolioNo returns the FolioNo field value if set, zero value otherwise.
func (o *CCBatchSettlementType) GetFolioNo() float32 {
	if o == nil || IsNil(o.FolioNo) {
		var ret float32
		return ret
	}
	return *o.FolioNo
}

// GetFolioNoOk returns a tuple with the FolioNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCBatchSettlementType) GetFolioNoOk() (*float32, bool) {
	if o == nil || IsNil(o.FolioNo) {
		return nil, false
	}
	return o.FolioNo, true
}

// HasFolioNo returns a boolean if a field has been set.
func (o *CCBatchSettlementType) HasFolioNo() bool {
	if o != nil && !IsNil(o.FolioNo) {
		return true
	}

	return false
}

// SetFolioNo gets a reference to the given float32 and assigns it to the FolioNo field.
func (o *CCBatchSettlementType) SetFolioNo(v float32) {
	o.FolioNo = &v
}

// GetGuestName returns the GuestName field value if set, zero value otherwise.
func (o *CCBatchSettlementType) GetGuestName() string {
	if o == nil || IsNil(o.GuestName) {
		var ret string
		return ret
	}
	return *o.GuestName
}

// GetGuestNameOk returns a tuple with the GuestName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCBatchSettlementType) GetGuestNameOk() (*string, bool) {
	if o == nil || IsNil(o.GuestName) {
		return nil, false
	}
	return o.GuestName, true
}

// HasGuestName returns a boolean if a field has been set.
func (o *CCBatchSettlementType) HasGuestName() bool {
	if o != nil && !IsNil(o.GuestName) {
		return true
	}

	return false
}

// SetGuestName gets a reference to the given string and assigns it to the GuestName field.
func (o *CCBatchSettlementType) SetGuestName(v string) {
	o.GuestName = &v
}

// GetPaymentMethod returns the PaymentMethod field value if set, zero value otherwise.
func (o *CCBatchSettlementType) GetPaymentMethod() ReservationPaymentMethodType {
	if o == nil || IsNil(o.PaymentMethod) {
		var ret ReservationPaymentMethodType
		return ret
	}
	return *o.PaymentMethod
}

// GetPaymentMethodOk returns a tuple with the PaymentMethod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCBatchSettlementType) GetPaymentMethodOk() (*ReservationPaymentMethodType, bool) {
	if o == nil || IsNil(o.PaymentMethod) {
		return nil, false
	}
	return o.PaymentMethod, true
}

// HasPaymentMethod returns a boolean if a field has been set.
func (o *CCBatchSettlementType) HasPaymentMethod() bool {
	if o != nil && !IsNil(o.PaymentMethod) {
		return true
	}

	return false
}

// SetPaymentMethod gets a reference to the given ReservationPaymentMethodType and assigns it to the PaymentMethod field.
func (o *CCBatchSettlementType) SetPaymentMethod(v ReservationPaymentMethodType) {
	o.PaymentMethod = &v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *CCBatchSettlementType) GetReservationId() ReservationId {
	if o == nil || IsNil(o.ReservationId) {
		var ret ReservationId
		return ret
	}
	return *o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCBatchSettlementType) GetReservationIdOk() (*ReservationId, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *CCBatchSettlementType) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given ReservationId and assigns it to the ReservationId field.
func (o *CCBatchSettlementType) SetReservationId(v ReservationId) {
	o.ReservationId = &v
}

// GetRoomId returns the RoomId field value if set, zero value otherwise.
func (o *CCBatchSettlementType) GetRoomId() string {
	if o == nil || IsNil(o.RoomId) {
		var ret string
		return ret
	}
	return *o.RoomId
}

// GetRoomIdOk returns a tuple with the RoomId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCBatchSettlementType) GetRoomIdOk() (*string, bool) {
	if o == nil || IsNil(o.RoomId) {
		return nil, false
	}
	return o.RoomId, true
}

// HasRoomId returns a boolean if a field has been set.
func (o *CCBatchSettlementType) HasRoomId() bool {
	if o != nil && !IsNil(o.RoomId) {
		return true
	}

	return false
}

// SetRoomId gets a reference to the given string and assigns it to the RoomId field.
func (o *CCBatchSettlementType) SetRoomId(v string) {
	o.RoomId = &v
}

// GetSettlementAmount returns the SettlementAmount field value if set, zero value otherwise.
func (o *CCBatchSettlementType) GetSettlementAmount() CurrencyAmountType {
	if o == nil || IsNil(o.SettlementAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.SettlementAmount
}

// GetSettlementAmountOk returns a tuple with the SettlementAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCBatchSettlementType) GetSettlementAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.SettlementAmount) {
		return nil, false
	}
	return o.SettlementAmount, true
}

// HasSettlementAmount returns a boolean if a field has been set.
func (o *CCBatchSettlementType) HasSettlementAmount() bool {
	if o != nil && !IsNil(o.SettlementAmount) {
		return true
	}

	return false
}

// SetSettlementAmount gets a reference to the given CurrencyAmountType and assigns it to the SettlementAmount field.
func (o *CCBatchSettlementType) SetSettlementAmount(v CurrencyAmountType) {
	o.SettlementAmount = &v
}

// GetSettlementId returns the SettlementId field value if set, zero value otherwise.
func (o *CCBatchSettlementType) GetSettlementId() UniqueIDType {
	if o == nil || IsNil(o.SettlementId) {
		var ret UniqueIDType
		return ret
	}
	return *o.SettlementId
}

// GetSettlementIdOk returns a tuple with the SettlementId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCBatchSettlementType) GetSettlementIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.SettlementId) {
		return nil, false
	}
	return o.SettlementId, true
}

// HasSettlementId returns a boolean if a field has been set.
func (o *CCBatchSettlementType) HasSettlementId() bool {
	if o != nil && !IsNil(o.SettlementId) {
		return true
	}

	return false
}

// SetSettlementId gets a reference to the given UniqueIDType and assigns it to the SettlementId field.
func (o *CCBatchSettlementType) SetSettlementId(v UniqueIDType) {
	o.SettlementId = &v
}

// GetTransactionDate returns the TransactionDate field value if set, zero value otherwise.
func (o *CCBatchSettlementType) GetTransactionDate() string {
	if o == nil || IsNil(o.TransactionDate) {
		var ret string
		return ret
	}
	return *o.TransactionDate
}

// GetTransactionDateOk returns a tuple with the TransactionDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCBatchSettlementType) GetTransactionDateOk() (*string, bool) {
	if o == nil || IsNil(o.TransactionDate) {
		return nil, false
	}
	return o.TransactionDate, true
}

// HasTransactionDate returns a boolean if a field has been set.
func (o *CCBatchSettlementType) HasTransactionDate() bool {
	if o != nil && !IsNil(o.TransactionDate) {
		return true
	}

	return false
}

// SetTransactionDate gets a reference to the given string and assigns it to the TransactionDate field.
func (o *CCBatchSettlementType) SetTransactionDate(v string) {
	o.TransactionDate = &v
}

// GetWindowNo returns the WindowNo field value if set, zero value otherwise.
func (o *CCBatchSettlementType) GetWindowNo() int32 {
	if o == nil || IsNil(o.WindowNo) {
		var ret int32
		return ret
	}
	return *o.WindowNo
}

// GetWindowNoOk returns a tuple with the WindowNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CCBatchSettlementType) GetWindowNoOk() (*int32, bool) {
	if o == nil || IsNil(o.WindowNo) {
		return nil, false
	}
	return o.WindowNo, true
}

// HasWindowNo returns a boolean if a field has been set.
func (o *CCBatchSettlementType) HasWindowNo() bool {
	if o != nil && !IsNil(o.WindowNo) {
		return true
	}

	return false
}

// SetWindowNo gets a reference to the given int32 and assigns it to the WindowNo field.
func (o *CCBatchSettlementType) SetWindowNo(v int32) {
	o.WindowNo = &v
}

func (o CCBatchSettlementType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CCBatchSettlementType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ApprovalCode) {
		toSerialize["approvalCode"] = o.ApprovalCode
	}
	if !IsNil(o.FolioNo) {
		toSerialize["folioNo"] = o.FolioNo
	}
	if !IsNil(o.GuestName) {
		toSerialize["guestName"] = o.GuestName
	}
	if !IsNil(o.PaymentMethod) {
		toSerialize["paymentMethod"] = o.PaymentMethod
	}
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	if !IsNil(o.RoomId) {
		toSerialize["roomId"] = o.RoomId
	}
	if !IsNil(o.SettlementAmount) {
		toSerialize["settlementAmount"] = o.SettlementAmount
	}
	if !IsNil(o.SettlementId) {
		toSerialize["settlementId"] = o.SettlementId
	}
	if !IsNil(o.TransactionDate) {
		toSerialize["transactionDate"] = o.TransactionDate
	}
	if !IsNil(o.WindowNo) {
		toSerialize["windowNo"] = o.WindowNo
	}
	return toSerialize, nil
}

type NullableCCBatchSettlementType struct {
	value *CCBatchSettlementType
	isSet bool
}

func (v NullableCCBatchSettlementType) Get() *CCBatchSettlementType {
	return v.value
}

func (v *NullableCCBatchSettlementType) Set(val *CCBatchSettlementType) {
	v.value = val
	v.isSet = true
}

func (v NullableCCBatchSettlementType) IsSet() bool {
	return v.isSet
}

func (v *NullableCCBatchSettlementType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCCBatchSettlementType(val *CCBatchSettlementType) *NullableCCBatchSettlementType {
	return &NullableCCBatchSettlementType{value: val, isSet: true}
}

func (v NullableCCBatchSettlementType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCCBatchSettlementType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


