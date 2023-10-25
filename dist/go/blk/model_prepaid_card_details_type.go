/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the PrepaidCardDetailsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PrepaidCardDetailsType{}

// PrepaidCardDetailsType Prepaid Card Details.
type PrepaidCardDetailsType struct {
	// Holds fixed charge detail.
	ActivateDate *string `json:"activateDate,omitempty"`
	BalanceTotal *CurrencyAmountType `json:"balanceTotal,omitempty"`
	CreditTotal *CurrencyAmountType `json:"creditTotal,omitempty"`
	DebitTotal *CurrencyAmountType `json:"debitTotal,omitempty"`
	// Holds fixed charge detail.
	ExpiredDate *string `json:"expiredDate,omitempty"`
	InitialCreditTotal *CurrencyAmountType `json:"initialCreditTotal,omitempty"`
	// Holds fixed charge detail.
	InitialLoadDate *string `json:"initialLoadDate,omitempty"`
	ReservedTotal *CurrencyAmountType `json:"reservedTotal,omitempty"`
	// Holds fixed charge detail.
	Transactions []PrepaidCardTransactionType `json:"transactions,omitempty"`
	// Holds fixed charge detail.
	ValidUntilDate *string `json:"validUntilDate,omitempty"`
}

// NewPrepaidCardDetailsType instantiates a new PrepaidCardDetailsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPrepaidCardDetailsType() *PrepaidCardDetailsType {
	this := PrepaidCardDetailsType{}
	return &this
}

// NewPrepaidCardDetailsTypeWithDefaults instantiates a new PrepaidCardDetailsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPrepaidCardDetailsTypeWithDefaults() *PrepaidCardDetailsType {
	this := PrepaidCardDetailsType{}
	return &this
}

// GetActivateDate returns the ActivateDate field value if set, zero value otherwise.
func (o *PrepaidCardDetailsType) GetActivateDate() string {
	if o == nil || IsNil(o.ActivateDate) {
		var ret string
		return ret
	}
	return *o.ActivateDate
}

// GetActivateDateOk returns a tuple with the ActivateDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardDetailsType) GetActivateDateOk() (*string, bool) {
	if o == nil || IsNil(o.ActivateDate) {
		return nil, false
	}
	return o.ActivateDate, true
}

// HasActivateDate returns a boolean if a field has been set.
func (o *PrepaidCardDetailsType) HasActivateDate() bool {
	if o != nil && !IsNil(o.ActivateDate) {
		return true
	}

	return false
}

// SetActivateDate gets a reference to the given string and assigns it to the ActivateDate field.
func (o *PrepaidCardDetailsType) SetActivateDate(v string) {
	o.ActivateDate = &v
}

// GetBalanceTotal returns the BalanceTotal field value if set, zero value otherwise.
func (o *PrepaidCardDetailsType) GetBalanceTotal() CurrencyAmountType {
	if o == nil || IsNil(o.BalanceTotal) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.BalanceTotal
}

// GetBalanceTotalOk returns a tuple with the BalanceTotal field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardDetailsType) GetBalanceTotalOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.BalanceTotal) {
		return nil, false
	}
	return o.BalanceTotal, true
}

// HasBalanceTotal returns a boolean if a field has been set.
func (o *PrepaidCardDetailsType) HasBalanceTotal() bool {
	if o != nil && !IsNil(o.BalanceTotal) {
		return true
	}

	return false
}

// SetBalanceTotal gets a reference to the given CurrencyAmountType and assigns it to the BalanceTotal field.
func (o *PrepaidCardDetailsType) SetBalanceTotal(v CurrencyAmountType) {
	o.BalanceTotal = &v
}

// GetCreditTotal returns the CreditTotal field value if set, zero value otherwise.
func (o *PrepaidCardDetailsType) GetCreditTotal() CurrencyAmountType {
	if o == nil || IsNil(o.CreditTotal) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.CreditTotal
}

// GetCreditTotalOk returns a tuple with the CreditTotal field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardDetailsType) GetCreditTotalOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.CreditTotal) {
		return nil, false
	}
	return o.CreditTotal, true
}

// HasCreditTotal returns a boolean if a field has been set.
func (o *PrepaidCardDetailsType) HasCreditTotal() bool {
	if o != nil && !IsNil(o.CreditTotal) {
		return true
	}

	return false
}

// SetCreditTotal gets a reference to the given CurrencyAmountType and assigns it to the CreditTotal field.
func (o *PrepaidCardDetailsType) SetCreditTotal(v CurrencyAmountType) {
	o.CreditTotal = &v
}

// GetDebitTotal returns the DebitTotal field value if set, zero value otherwise.
func (o *PrepaidCardDetailsType) GetDebitTotal() CurrencyAmountType {
	if o == nil || IsNil(o.DebitTotal) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.DebitTotal
}

// GetDebitTotalOk returns a tuple with the DebitTotal field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardDetailsType) GetDebitTotalOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.DebitTotal) {
		return nil, false
	}
	return o.DebitTotal, true
}

// HasDebitTotal returns a boolean if a field has been set.
func (o *PrepaidCardDetailsType) HasDebitTotal() bool {
	if o != nil && !IsNil(o.DebitTotal) {
		return true
	}

	return false
}

// SetDebitTotal gets a reference to the given CurrencyAmountType and assigns it to the DebitTotal field.
func (o *PrepaidCardDetailsType) SetDebitTotal(v CurrencyAmountType) {
	o.DebitTotal = &v
}

// GetExpiredDate returns the ExpiredDate field value if set, zero value otherwise.
func (o *PrepaidCardDetailsType) GetExpiredDate() string {
	if o == nil || IsNil(o.ExpiredDate) {
		var ret string
		return ret
	}
	return *o.ExpiredDate
}

// GetExpiredDateOk returns a tuple with the ExpiredDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardDetailsType) GetExpiredDateOk() (*string, bool) {
	if o == nil || IsNil(o.ExpiredDate) {
		return nil, false
	}
	return o.ExpiredDate, true
}

// HasExpiredDate returns a boolean if a field has been set.
func (o *PrepaidCardDetailsType) HasExpiredDate() bool {
	if o != nil && !IsNil(o.ExpiredDate) {
		return true
	}

	return false
}

// SetExpiredDate gets a reference to the given string and assigns it to the ExpiredDate field.
func (o *PrepaidCardDetailsType) SetExpiredDate(v string) {
	o.ExpiredDate = &v
}

// GetInitialCreditTotal returns the InitialCreditTotal field value if set, zero value otherwise.
func (o *PrepaidCardDetailsType) GetInitialCreditTotal() CurrencyAmountType {
	if o == nil || IsNil(o.InitialCreditTotal) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.InitialCreditTotal
}

// GetInitialCreditTotalOk returns a tuple with the InitialCreditTotal field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardDetailsType) GetInitialCreditTotalOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.InitialCreditTotal) {
		return nil, false
	}
	return o.InitialCreditTotal, true
}

// HasInitialCreditTotal returns a boolean if a field has been set.
func (o *PrepaidCardDetailsType) HasInitialCreditTotal() bool {
	if o != nil && !IsNil(o.InitialCreditTotal) {
		return true
	}

	return false
}

// SetInitialCreditTotal gets a reference to the given CurrencyAmountType and assigns it to the InitialCreditTotal field.
func (o *PrepaidCardDetailsType) SetInitialCreditTotal(v CurrencyAmountType) {
	o.InitialCreditTotal = &v
}

// GetInitialLoadDate returns the InitialLoadDate field value if set, zero value otherwise.
func (o *PrepaidCardDetailsType) GetInitialLoadDate() string {
	if o == nil || IsNil(o.InitialLoadDate) {
		var ret string
		return ret
	}
	return *o.InitialLoadDate
}

// GetInitialLoadDateOk returns a tuple with the InitialLoadDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardDetailsType) GetInitialLoadDateOk() (*string, bool) {
	if o == nil || IsNil(o.InitialLoadDate) {
		return nil, false
	}
	return o.InitialLoadDate, true
}

// HasInitialLoadDate returns a boolean if a field has been set.
func (o *PrepaidCardDetailsType) HasInitialLoadDate() bool {
	if o != nil && !IsNil(o.InitialLoadDate) {
		return true
	}

	return false
}

// SetInitialLoadDate gets a reference to the given string and assigns it to the InitialLoadDate field.
func (o *PrepaidCardDetailsType) SetInitialLoadDate(v string) {
	o.InitialLoadDate = &v
}

// GetReservedTotal returns the ReservedTotal field value if set, zero value otherwise.
func (o *PrepaidCardDetailsType) GetReservedTotal() CurrencyAmountType {
	if o == nil || IsNil(o.ReservedTotal) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.ReservedTotal
}

// GetReservedTotalOk returns a tuple with the ReservedTotal field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardDetailsType) GetReservedTotalOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.ReservedTotal) {
		return nil, false
	}
	return o.ReservedTotal, true
}

// HasReservedTotal returns a boolean if a field has been set.
func (o *PrepaidCardDetailsType) HasReservedTotal() bool {
	if o != nil && !IsNil(o.ReservedTotal) {
		return true
	}

	return false
}

// SetReservedTotal gets a reference to the given CurrencyAmountType and assigns it to the ReservedTotal field.
func (o *PrepaidCardDetailsType) SetReservedTotal(v CurrencyAmountType) {
	o.ReservedTotal = &v
}

// GetTransactions returns the Transactions field value if set, zero value otherwise.
func (o *PrepaidCardDetailsType) GetTransactions() []PrepaidCardTransactionType {
	if o == nil || IsNil(o.Transactions) {
		var ret []PrepaidCardTransactionType
		return ret
	}
	return o.Transactions
}

// GetTransactionsOk returns a tuple with the Transactions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardDetailsType) GetTransactionsOk() ([]PrepaidCardTransactionType, bool) {
	if o == nil || IsNil(o.Transactions) {
		return nil, false
	}
	return o.Transactions, true
}

// HasTransactions returns a boolean if a field has been set.
func (o *PrepaidCardDetailsType) HasTransactions() bool {
	if o != nil && !IsNil(o.Transactions) {
		return true
	}

	return false
}

// SetTransactions gets a reference to the given []PrepaidCardTransactionType and assigns it to the Transactions field.
func (o *PrepaidCardDetailsType) SetTransactions(v []PrepaidCardTransactionType) {
	o.Transactions = v
}

// GetValidUntilDate returns the ValidUntilDate field value if set, zero value otherwise.
func (o *PrepaidCardDetailsType) GetValidUntilDate() string {
	if o == nil || IsNil(o.ValidUntilDate) {
		var ret string
		return ret
	}
	return *o.ValidUntilDate
}

// GetValidUntilDateOk returns a tuple with the ValidUntilDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardDetailsType) GetValidUntilDateOk() (*string, bool) {
	if o == nil || IsNil(o.ValidUntilDate) {
		return nil, false
	}
	return o.ValidUntilDate, true
}

// HasValidUntilDate returns a boolean if a field has been set.
func (o *PrepaidCardDetailsType) HasValidUntilDate() bool {
	if o != nil && !IsNil(o.ValidUntilDate) {
		return true
	}

	return false
}

// SetValidUntilDate gets a reference to the given string and assigns it to the ValidUntilDate field.
func (o *PrepaidCardDetailsType) SetValidUntilDate(v string) {
	o.ValidUntilDate = &v
}

func (o PrepaidCardDetailsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PrepaidCardDetailsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActivateDate) {
		toSerialize["activateDate"] = o.ActivateDate
	}
	if !IsNil(o.BalanceTotal) {
		toSerialize["balanceTotal"] = o.BalanceTotal
	}
	if !IsNil(o.CreditTotal) {
		toSerialize["creditTotal"] = o.CreditTotal
	}
	if !IsNil(o.DebitTotal) {
		toSerialize["debitTotal"] = o.DebitTotal
	}
	if !IsNil(o.ExpiredDate) {
		toSerialize["expiredDate"] = o.ExpiredDate
	}
	if !IsNil(o.InitialCreditTotal) {
		toSerialize["initialCreditTotal"] = o.InitialCreditTotal
	}
	if !IsNil(o.InitialLoadDate) {
		toSerialize["initialLoadDate"] = o.InitialLoadDate
	}
	if !IsNil(o.ReservedTotal) {
		toSerialize["reservedTotal"] = o.ReservedTotal
	}
	if !IsNil(o.Transactions) {
		toSerialize["transactions"] = o.Transactions
	}
	if !IsNil(o.ValidUntilDate) {
		toSerialize["validUntilDate"] = o.ValidUntilDate
	}
	return toSerialize, nil
}

type NullablePrepaidCardDetailsType struct {
	value *PrepaidCardDetailsType
	isSet bool
}

func (v NullablePrepaidCardDetailsType) Get() *PrepaidCardDetailsType {
	return v.value
}

func (v *NullablePrepaidCardDetailsType) Set(val *PrepaidCardDetailsType) {
	v.value = val
	v.isSet = true
}

func (v NullablePrepaidCardDetailsType) IsSet() bool {
	return v.isSet
}

func (v *NullablePrepaidCardDetailsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePrepaidCardDetailsType(val *PrepaidCardDetailsType) *NullablePrepaidCardDetailsType {
	return &NullablePrepaidCardDetailsType{value: val, isSet: true}
}

func (v NullablePrepaidCardDetailsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePrepaidCardDetailsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


