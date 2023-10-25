/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the PrepaidCardInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PrepaidCardInfoType{}

// PrepaidCardInfoType Detailed information about the prepaid card.
type PrepaidCardInfoType struct {
	AvailableCashoutAmount *CurrencyAmountType `json:"availableCashoutAmount,omitempty"`
	Balance *CurrencyAmountType `json:"balance,omitempty"`
	// Prepaid card number.
	CardNo *string `json:"cardNo,omitempty"`
	// Masked Prepaid card / account number.
	CardNumberMasked *string `json:"cardNumberMasked,omitempty"`
	// Expiry Date of the prepaid card.
	ExpiryDate *string `json:"expiryDate,omitempty"`
	// Hotel context for the prepaid card.
	HotelId *string `json:"hotelId,omitempty"`
	InitialCredit *CurrencyAmountType `json:"initialCredit,omitempty"`
	// Initial Load Date of the prepaid card.
	InitialLoadDate *string `json:"initialLoadDate,omitempty"`
	InterfaceId *UniqueIDType `json:"interfaceId,omitempty"`
	// Issue Date of the prepaid card.
	IssueDate *string `json:"issueDate,omitempty"`
	// Indicate if opera transactions are included on the transactions list.
	OperaTransactionsActive *bool `json:"operaTransactionsActive,omitempty"`
	// Prepaid card transaction details.
	PrepaidCardTransactions []PrepaidCardTransactionInfoType `json:"prepaidCardTransactions,omitempty"`
	ReservationId *UniqueIDType `json:"reservationId,omitempty"`
	ReservedAmount *CurrencyAmountType `json:"reservedAmount,omitempty"`
	TotalCredit *CurrencyAmountType `json:"totalCredit,omitempty"`
	TotalDebit *CurrencyAmountType `json:"totalDebit,omitempty"`
	// Validity of the prepaid card amount.
	ValidUntil *string `json:"validUntil,omitempty"`
	// Indicate if vendor transactions are included on the transactions list.
	VendorTransactionsActive *bool `json:"vendorTransactionsActive,omitempty"`
}

// NewPrepaidCardInfoType instantiates a new PrepaidCardInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPrepaidCardInfoType() *PrepaidCardInfoType {
	this := PrepaidCardInfoType{}
	return &this
}

// NewPrepaidCardInfoTypeWithDefaults instantiates a new PrepaidCardInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPrepaidCardInfoTypeWithDefaults() *PrepaidCardInfoType {
	this := PrepaidCardInfoType{}
	return &this
}

// GetAvailableCashoutAmount returns the AvailableCashoutAmount field value if set, zero value otherwise.
func (o *PrepaidCardInfoType) GetAvailableCashoutAmount() CurrencyAmountType {
	if o == nil || IsNil(o.AvailableCashoutAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.AvailableCashoutAmount
}

// GetAvailableCashoutAmountOk returns a tuple with the AvailableCashoutAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardInfoType) GetAvailableCashoutAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.AvailableCashoutAmount) {
		return nil, false
	}
	return o.AvailableCashoutAmount, true
}

// HasAvailableCashoutAmount returns a boolean if a field has been set.
func (o *PrepaidCardInfoType) HasAvailableCashoutAmount() bool {
	if o != nil && !IsNil(o.AvailableCashoutAmount) {
		return true
	}

	return false
}

// SetAvailableCashoutAmount gets a reference to the given CurrencyAmountType and assigns it to the AvailableCashoutAmount field.
func (o *PrepaidCardInfoType) SetAvailableCashoutAmount(v CurrencyAmountType) {
	o.AvailableCashoutAmount = &v
}

// GetBalance returns the Balance field value if set, zero value otherwise.
func (o *PrepaidCardInfoType) GetBalance() CurrencyAmountType {
	if o == nil || IsNil(o.Balance) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Balance
}

// GetBalanceOk returns a tuple with the Balance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardInfoType) GetBalanceOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Balance) {
		return nil, false
	}
	return o.Balance, true
}

// HasBalance returns a boolean if a field has been set.
func (o *PrepaidCardInfoType) HasBalance() bool {
	if o != nil && !IsNil(o.Balance) {
		return true
	}

	return false
}

// SetBalance gets a reference to the given CurrencyAmountType and assigns it to the Balance field.
func (o *PrepaidCardInfoType) SetBalance(v CurrencyAmountType) {
	o.Balance = &v
}

// GetCardNo returns the CardNo field value if set, zero value otherwise.
func (o *PrepaidCardInfoType) GetCardNo() string {
	if o == nil || IsNil(o.CardNo) {
		var ret string
		return ret
	}
	return *o.CardNo
}

// GetCardNoOk returns a tuple with the CardNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardInfoType) GetCardNoOk() (*string, bool) {
	if o == nil || IsNil(o.CardNo) {
		return nil, false
	}
	return o.CardNo, true
}

// HasCardNo returns a boolean if a field has been set.
func (o *PrepaidCardInfoType) HasCardNo() bool {
	if o != nil && !IsNil(o.CardNo) {
		return true
	}

	return false
}

// SetCardNo gets a reference to the given string and assigns it to the CardNo field.
func (o *PrepaidCardInfoType) SetCardNo(v string) {
	o.CardNo = &v
}

// GetCardNumberMasked returns the CardNumberMasked field value if set, zero value otherwise.
func (o *PrepaidCardInfoType) GetCardNumberMasked() string {
	if o == nil || IsNil(o.CardNumberMasked) {
		var ret string
		return ret
	}
	return *o.CardNumberMasked
}

// GetCardNumberMaskedOk returns a tuple with the CardNumberMasked field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardInfoType) GetCardNumberMaskedOk() (*string, bool) {
	if o == nil || IsNil(o.CardNumberMasked) {
		return nil, false
	}
	return o.CardNumberMasked, true
}

// HasCardNumberMasked returns a boolean if a field has been set.
func (o *PrepaidCardInfoType) HasCardNumberMasked() bool {
	if o != nil && !IsNil(o.CardNumberMasked) {
		return true
	}

	return false
}

// SetCardNumberMasked gets a reference to the given string and assigns it to the CardNumberMasked field.
func (o *PrepaidCardInfoType) SetCardNumberMasked(v string) {
	o.CardNumberMasked = &v
}

// GetExpiryDate returns the ExpiryDate field value if set, zero value otherwise.
func (o *PrepaidCardInfoType) GetExpiryDate() string {
	if o == nil || IsNil(o.ExpiryDate) {
		var ret string
		return ret
	}
	return *o.ExpiryDate
}

// GetExpiryDateOk returns a tuple with the ExpiryDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardInfoType) GetExpiryDateOk() (*string, bool) {
	if o == nil || IsNil(o.ExpiryDate) {
		return nil, false
	}
	return o.ExpiryDate, true
}

// HasExpiryDate returns a boolean if a field has been set.
func (o *PrepaidCardInfoType) HasExpiryDate() bool {
	if o != nil && !IsNil(o.ExpiryDate) {
		return true
	}

	return false
}

// SetExpiryDate gets a reference to the given string and assigns it to the ExpiryDate field.
func (o *PrepaidCardInfoType) SetExpiryDate(v string) {
	o.ExpiryDate = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *PrepaidCardInfoType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardInfoType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *PrepaidCardInfoType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *PrepaidCardInfoType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInitialCredit returns the InitialCredit field value if set, zero value otherwise.
func (o *PrepaidCardInfoType) GetInitialCredit() CurrencyAmountType {
	if o == nil || IsNil(o.InitialCredit) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.InitialCredit
}

// GetInitialCreditOk returns a tuple with the InitialCredit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardInfoType) GetInitialCreditOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.InitialCredit) {
		return nil, false
	}
	return o.InitialCredit, true
}

// HasInitialCredit returns a boolean if a field has been set.
func (o *PrepaidCardInfoType) HasInitialCredit() bool {
	if o != nil && !IsNil(o.InitialCredit) {
		return true
	}

	return false
}

// SetInitialCredit gets a reference to the given CurrencyAmountType and assigns it to the InitialCredit field.
func (o *PrepaidCardInfoType) SetInitialCredit(v CurrencyAmountType) {
	o.InitialCredit = &v
}

// GetInitialLoadDate returns the InitialLoadDate field value if set, zero value otherwise.
func (o *PrepaidCardInfoType) GetInitialLoadDate() string {
	if o == nil || IsNil(o.InitialLoadDate) {
		var ret string
		return ret
	}
	return *o.InitialLoadDate
}

// GetInitialLoadDateOk returns a tuple with the InitialLoadDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardInfoType) GetInitialLoadDateOk() (*string, bool) {
	if o == nil || IsNil(o.InitialLoadDate) {
		return nil, false
	}
	return o.InitialLoadDate, true
}

// HasInitialLoadDate returns a boolean if a field has been set.
func (o *PrepaidCardInfoType) HasInitialLoadDate() bool {
	if o != nil && !IsNil(o.InitialLoadDate) {
		return true
	}

	return false
}

// SetInitialLoadDate gets a reference to the given string and assigns it to the InitialLoadDate field.
func (o *PrepaidCardInfoType) SetInitialLoadDate(v string) {
	o.InitialLoadDate = &v
}

// GetInterfaceId returns the InterfaceId field value if set, zero value otherwise.
func (o *PrepaidCardInfoType) GetInterfaceId() UniqueIDType {
	if o == nil || IsNil(o.InterfaceId) {
		var ret UniqueIDType
		return ret
	}
	return *o.InterfaceId
}

// GetInterfaceIdOk returns a tuple with the InterfaceId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardInfoType) GetInterfaceIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.InterfaceId) {
		return nil, false
	}
	return o.InterfaceId, true
}

// HasInterfaceId returns a boolean if a field has been set.
func (o *PrepaidCardInfoType) HasInterfaceId() bool {
	if o != nil && !IsNil(o.InterfaceId) {
		return true
	}

	return false
}

// SetInterfaceId gets a reference to the given UniqueIDType and assigns it to the InterfaceId field.
func (o *PrepaidCardInfoType) SetInterfaceId(v UniqueIDType) {
	o.InterfaceId = &v
}

// GetIssueDate returns the IssueDate field value if set, zero value otherwise.
func (o *PrepaidCardInfoType) GetIssueDate() string {
	if o == nil || IsNil(o.IssueDate) {
		var ret string
		return ret
	}
	return *o.IssueDate
}

// GetIssueDateOk returns a tuple with the IssueDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardInfoType) GetIssueDateOk() (*string, bool) {
	if o == nil || IsNil(o.IssueDate) {
		return nil, false
	}
	return o.IssueDate, true
}

// HasIssueDate returns a boolean if a field has been set.
func (o *PrepaidCardInfoType) HasIssueDate() bool {
	if o != nil && !IsNil(o.IssueDate) {
		return true
	}

	return false
}

// SetIssueDate gets a reference to the given string and assigns it to the IssueDate field.
func (o *PrepaidCardInfoType) SetIssueDate(v string) {
	o.IssueDate = &v
}

// GetOperaTransactionsActive returns the OperaTransactionsActive field value if set, zero value otherwise.
func (o *PrepaidCardInfoType) GetOperaTransactionsActive() bool {
	if o == nil || IsNil(o.OperaTransactionsActive) {
		var ret bool
		return ret
	}
	return *o.OperaTransactionsActive
}

// GetOperaTransactionsActiveOk returns a tuple with the OperaTransactionsActive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardInfoType) GetOperaTransactionsActiveOk() (*bool, bool) {
	if o == nil || IsNil(o.OperaTransactionsActive) {
		return nil, false
	}
	return o.OperaTransactionsActive, true
}

// HasOperaTransactionsActive returns a boolean if a field has been set.
func (o *PrepaidCardInfoType) HasOperaTransactionsActive() bool {
	if o != nil && !IsNil(o.OperaTransactionsActive) {
		return true
	}

	return false
}

// SetOperaTransactionsActive gets a reference to the given bool and assigns it to the OperaTransactionsActive field.
func (o *PrepaidCardInfoType) SetOperaTransactionsActive(v bool) {
	o.OperaTransactionsActive = &v
}

// GetPrepaidCardTransactions returns the PrepaidCardTransactions field value if set, zero value otherwise.
func (o *PrepaidCardInfoType) GetPrepaidCardTransactions() []PrepaidCardTransactionInfoType {
	if o == nil || IsNil(o.PrepaidCardTransactions) {
		var ret []PrepaidCardTransactionInfoType
		return ret
	}
	return o.PrepaidCardTransactions
}

// GetPrepaidCardTransactionsOk returns a tuple with the PrepaidCardTransactions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardInfoType) GetPrepaidCardTransactionsOk() ([]PrepaidCardTransactionInfoType, bool) {
	if o == nil || IsNil(o.PrepaidCardTransactions) {
		return nil, false
	}
	return o.PrepaidCardTransactions, true
}

// HasPrepaidCardTransactions returns a boolean if a field has been set.
func (o *PrepaidCardInfoType) HasPrepaidCardTransactions() bool {
	if o != nil && !IsNil(o.PrepaidCardTransactions) {
		return true
	}

	return false
}

// SetPrepaidCardTransactions gets a reference to the given []PrepaidCardTransactionInfoType and assigns it to the PrepaidCardTransactions field.
func (o *PrepaidCardInfoType) SetPrepaidCardTransactions(v []PrepaidCardTransactionInfoType) {
	o.PrepaidCardTransactions = v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *PrepaidCardInfoType) GetReservationId() UniqueIDType {
	if o == nil || IsNil(o.ReservationId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardInfoType) GetReservationIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *PrepaidCardInfoType) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given UniqueIDType and assigns it to the ReservationId field.
func (o *PrepaidCardInfoType) SetReservationId(v UniqueIDType) {
	o.ReservationId = &v
}

// GetReservedAmount returns the ReservedAmount field value if set, zero value otherwise.
func (o *PrepaidCardInfoType) GetReservedAmount() CurrencyAmountType {
	if o == nil || IsNil(o.ReservedAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.ReservedAmount
}

// GetReservedAmountOk returns a tuple with the ReservedAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardInfoType) GetReservedAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.ReservedAmount) {
		return nil, false
	}
	return o.ReservedAmount, true
}

// HasReservedAmount returns a boolean if a field has been set.
func (o *PrepaidCardInfoType) HasReservedAmount() bool {
	if o != nil && !IsNil(o.ReservedAmount) {
		return true
	}

	return false
}

// SetReservedAmount gets a reference to the given CurrencyAmountType and assigns it to the ReservedAmount field.
func (o *PrepaidCardInfoType) SetReservedAmount(v CurrencyAmountType) {
	o.ReservedAmount = &v
}

// GetTotalCredit returns the TotalCredit field value if set, zero value otherwise.
func (o *PrepaidCardInfoType) GetTotalCredit() CurrencyAmountType {
	if o == nil || IsNil(o.TotalCredit) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.TotalCredit
}

// GetTotalCreditOk returns a tuple with the TotalCredit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardInfoType) GetTotalCreditOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.TotalCredit) {
		return nil, false
	}
	return o.TotalCredit, true
}

// HasTotalCredit returns a boolean if a field has been set.
func (o *PrepaidCardInfoType) HasTotalCredit() bool {
	if o != nil && !IsNil(o.TotalCredit) {
		return true
	}

	return false
}

// SetTotalCredit gets a reference to the given CurrencyAmountType and assigns it to the TotalCredit field.
func (o *PrepaidCardInfoType) SetTotalCredit(v CurrencyAmountType) {
	o.TotalCredit = &v
}

// GetTotalDebit returns the TotalDebit field value if set, zero value otherwise.
func (o *PrepaidCardInfoType) GetTotalDebit() CurrencyAmountType {
	if o == nil || IsNil(o.TotalDebit) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.TotalDebit
}

// GetTotalDebitOk returns a tuple with the TotalDebit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardInfoType) GetTotalDebitOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.TotalDebit) {
		return nil, false
	}
	return o.TotalDebit, true
}

// HasTotalDebit returns a boolean if a field has been set.
func (o *PrepaidCardInfoType) HasTotalDebit() bool {
	if o != nil && !IsNil(o.TotalDebit) {
		return true
	}

	return false
}

// SetTotalDebit gets a reference to the given CurrencyAmountType and assigns it to the TotalDebit field.
func (o *PrepaidCardInfoType) SetTotalDebit(v CurrencyAmountType) {
	o.TotalDebit = &v
}

// GetValidUntil returns the ValidUntil field value if set, zero value otherwise.
func (o *PrepaidCardInfoType) GetValidUntil() string {
	if o == nil || IsNil(o.ValidUntil) {
		var ret string
		return ret
	}
	return *o.ValidUntil
}

// GetValidUntilOk returns a tuple with the ValidUntil field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardInfoType) GetValidUntilOk() (*string, bool) {
	if o == nil || IsNil(o.ValidUntil) {
		return nil, false
	}
	return o.ValidUntil, true
}

// HasValidUntil returns a boolean if a field has been set.
func (o *PrepaidCardInfoType) HasValidUntil() bool {
	if o != nil && !IsNil(o.ValidUntil) {
		return true
	}

	return false
}

// SetValidUntil gets a reference to the given string and assigns it to the ValidUntil field.
func (o *PrepaidCardInfoType) SetValidUntil(v string) {
	o.ValidUntil = &v
}

// GetVendorTransactionsActive returns the VendorTransactionsActive field value if set, zero value otherwise.
func (o *PrepaidCardInfoType) GetVendorTransactionsActive() bool {
	if o == nil || IsNil(o.VendorTransactionsActive) {
		var ret bool
		return ret
	}
	return *o.VendorTransactionsActive
}

// GetVendorTransactionsActiveOk returns a tuple with the VendorTransactionsActive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardInfoType) GetVendorTransactionsActiveOk() (*bool, bool) {
	if o == nil || IsNil(o.VendorTransactionsActive) {
		return nil, false
	}
	return o.VendorTransactionsActive, true
}

// HasVendorTransactionsActive returns a boolean if a field has been set.
func (o *PrepaidCardInfoType) HasVendorTransactionsActive() bool {
	if o != nil && !IsNil(o.VendorTransactionsActive) {
		return true
	}

	return false
}

// SetVendorTransactionsActive gets a reference to the given bool and assigns it to the VendorTransactionsActive field.
func (o *PrepaidCardInfoType) SetVendorTransactionsActive(v bool) {
	o.VendorTransactionsActive = &v
}

func (o PrepaidCardInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PrepaidCardInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AvailableCashoutAmount) {
		toSerialize["availableCashoutAmount"] = o.AvailableCashoutAmount
	}
	if !IsNil(o.Balance) {
		toSerialize["balance"] = o.Balance
	}
	if !IsNil(o.CardNo) {
		toSerialize["cardNo"] = o.CardNo
	}
	if !IsNil(o.CardNumberMasked) {
		toSerialize["cardNumberMasked"] = o.CardNumberMasked
	}
	if !IsNil(o.ExpiryDate) {
		toSerialize["expiryDate"] = o.ExpiryDate
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.InitialCredit) {
		toSerialize["initialCredit"] = o.InitialCredit
	}
	if !IsNil(o.InitialLoadDate) {
		toSerialize["initialLoadDate"] = o.InitialLoadDate
	}
	if !IsNil(o.InterfaceId) {
		toSerialize["interfaceId"] = o.InterfaceId
	}
	if !IsNil(o.IssueDate) {
		toSerialize["issueDate"] = o.IssueDate
	}
	if !IsNil(o.OperaTransactionsActive) {
		toSerialize["operaTransactionsActive"] = o.OperaTransactionsActive
	}
	if !IsNil(o.PrepaidCardTransactions) {
		toSerialize["prepaidCardTransactions"] = o.PrepaidCardTransactions
	}
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	if !IsNil(o.ReservedAmount) {
		toSerialize["reservedAmount"] = o.ReservedAmount
	}
	if !IsNil(o.TotalCredit) {
		toSerialize["totalCredit"] = o.TotalCredit
	}
	if !IsNil(o.TotalDebit) {
		toSerialize["totalDebit"] = o.TotalDebit
	}
	if !IsNil(o.ValidUntil) {
		toSerialize["validUntil"] = o.ValidUntil
	}
	if !IsNil(o.VendorTransactionsActive) {
		toSerialize["vendorTransactionsActive"] = o.VendorTransactionsActive
	}
	return toSerialize, nil
}

type NullablePrepaidCardInfoType struct {
	value *PrepaidCardInfoType
	isSet bool
}

func (v NullablePrepaidCardInfoType) Get() *PrepaidCardInfoType {
	return v.value
}

func (v *NullablePrepaidCardInfoType) Set(val *PrepaidCardInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullablePrepaidCardInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullablePrepaidCardInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePrepaidCardInfoType(val *PrepaidCardInfoType) *NullablePrepaidCardInfoType {
	return &NullablePrepaidCardInfoType{value: val, isSet: true}
}

func (v NullablePrepaidCardInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePrepaidCardInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


