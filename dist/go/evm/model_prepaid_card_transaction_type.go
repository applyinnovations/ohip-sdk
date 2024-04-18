/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the PrepaidCardTransactionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PrepaidCardTransactionType{}

// PrepaidCardTransactionType Prepaid Card transaction.
type PrepaidCardTransactionType struct {
	Amount *CurrencyAmountType `json:"amount,omitempty"`
	// Time stamp of the creation.
	CreateDateTime *string `json:"createDateTime,omitempty"`
	// ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
	CreatorId *string `json:"creatorId,omitempty"`
	// Identifies the last software system or person to modify a record.
	LastModifierId *string `json:"lastModifierId,omitempty"`
	// Time stamp of last modification.
	LastModifyDateTime *string `json:"lastModifyDateTime,omitempty"`
	// Date an item will be purged from a database (e.g., from a live database to an archive).
	PurgeDate *string `json:"purgeDate,omitempty"`
	// Transaction number of the Prepaid card transaction.
	TransactionDate *string `json:"transactionDate,omitempty"`
	// Transaction number of the Prepaid card transaction.
	TransactionNo *float32 `json:"transactionNo,omitempty"`
	TransactionType *PrepaidCardTrxTypeType `json:"transactionType,omitempty"`
}

// NewPrepaidCardTransactionType instantiates a new PrepaidCardTransactionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPrepaidCardTransactionType() *PrepaidCardTransactionType {
	this := PrepaidCardTransactionType{}
	return &this
}

// NewPrepaidCardTransactionTypeWithDefaults instantiates a new PrepaidCardTransactionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPrepaidCardTransactionTypeWithDefaults() *PrepaidCardTransactionType {
	this := PrepaidCardTransactionType{}
	return &this
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *PrepaidCardTransactionType) GetAmount() CurrencyAmountType {
	if o == nil || IsNil(o.Amount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardTransactionType) GetAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *PrepaidCardTransactionType) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given CurrencyAmountType and assigns it to the Amount field.
func (o *PrepaidCardTransactionType) SetAmount(v CurrencyAmountType) {
	o.Amount = &v
}

// GetCreateDateTime returns the CreateDateTime field value if set, zero value otherwise.
func (o *PrepaidCardTransactionType) GetCreateDateTime() string {
	if o == nil || IsNil(o.CreateDateTime) {
		var ret string
		return ret
	}
	return *o.CreateDateTime
}

// GetCreateDateTimeOk returns a tuple with the CreateDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardTransactionType) GetCreateDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.CreateDateTime) {
		return nil, false
	}
	return o.CreateDateTime, true
}

// HasCreateDateTime returns a boolean if a field has been set.
func (o *PrepaidCardTransactionType) HasCreateDateTime() bool {
	if o != nil && !IsNil(o.CreateDateTime) {
		return true
	}

	return false
}

// SetCreateDateTime gets a reference to the given string and assigns it to the CreateDateTime field.
func (o *PrepaidCardTransactionType) SetCreateDateTime(v string) {
	o.CreateDateTime = &v
}

// GetCreatorId returns the CreatorId field value if set, zero value otherwise.
func (o *PrepaidCardTransactionType) GetCreatorId() string {
	if o == nil || IsNil(o.CreatorId) {
		var ret string
		return ret
	}
	return *o.CreatorId
}

// GetCreatorIdOk returns a tuple with the CreatorId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardTransactionType) GetCreatorIdOk() (*string, bool) {
	if o == nil || IsNil(o.CreatorId) {
		return nil, false
	}
	return o.CreatorId, true
}

// HasCreatorId returns a boolean if a field has been set.
func (o *PrepaidCardTransactionType) HasCreatorId() bool {
	if o != nil && !IsNil(o.CreatorId) {
		return true
	}

	return false
}

// SetCreatorId gets a reference to the given string and assigns it to the CreatorId field.
func (o *PrepaidCardTransactionType) SetCreatorId(v string) {
	o.CreatorId = &v
}

// GetLastModifierId returns the LastModifierId field value if set, zero value otherwise.
func (o *PrepaidCardTransactionType) GetLastModifierId() string {
	if o == nil || IsNil(o.LastModifierId) {
		var ret string
		return ret
	}
	return *o.LastModifierId
}

// GetLastModifierIdOk returns a tuple with the LastModifierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardTransactionType) GetLastModifierIdOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifierId) {
		return nil, false
	}
	return o.LastModifierId, true
}

// HasLastModifierId returns a boolean if a field has been set.
func (o *PrepaidCardTransactionType) HasLastModifierId() bool {
	if o != nil && !IsNil(o.LastModifierId) {
		return true
	}

	return false
}

// SetLastModifierId gets a reference to the given string and assigns it to the LastModifierId field.
func (o *PrepaidCardTransactionType) SetLastModifierId(v string) {
	o.LastModifierId = &v
}

// GetLastModifyDateTime returns the LastModifyDateTime field value if set, zero value otherwise.
func (o *PrepaidCardTransactionType) GetLastModifyDateTime() string {
	if o == nil || IsNil(o.LastModifyDateTime) {
		var ret string
		return ret
	}
	return *o.LastModifyDateTime
}

// GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardTransactionType) GetLastModifyDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifyDateTime) {
		return nil, false
	}
	return o.LastModifyDateTime, true
}

// HasLastModifyDateTime returns a boolean if a field has been set.
func (o *PrepaidCardTransactionType) HasLastModifyDateTime() bool {
	if o != nil && !IsNil(o.LastModifyDateTime) {
		return true
	}

	return false
}

// SetLastModifyDateTime gets a reference to the given string and assigns it to the LastModifyDateTime field.
func (o *PrepaidCardTransactionType) SetLastModifyDateTime(v string) {
	o.LastModifyDateTime = &v
}

// GetPurgeDate returns the PurgeDate field value if set, zero value otherwise.
func (o *PrepaidCardTransactionType) GetPurgeDate() string {
	if o == nil || IsNil(o.PurgeDate) {
		var ret string
		return ret
	}
	return *o.PurgeDate
}

// GetPurgeDateOk returns a tuple with the PurgeDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardTransactionType) GetPurgeDateOk() (*string, bool) {
	if o == nil || IsNil(o.PurgeDate) {
		return nil, false
	}
	return o.PurgeDate, true
}

// HasPurgeDate returns a boolean if a field has been set.
func (o *PrepaidCardTransactionType) HasPurgeDate() bool {
	if o != nil && !IsNil(o.PurgeDate) {
		return true
	}

	return false
}

// SetPurgeDate gets a reference to the given string and assigns it to the PurgeDate field.
func (o *PrepaidCardTransactionType) SetPurgeDate(v string) {
	o.PurgeDate = &v
}

// GetTransactionDate returns the TransactionDate field value if set, zero value otherwise.
func (o *PrepaidCardTransactionType) GetTransactionDate() string {
	if o == nil || IsNil(o.TransactionDate) {
		var ret string
		return ret
	}
	return *o.TransactionDate
}

// GetTransactionDateOk returns a tuple with the TransactionDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardTransactionType) GetTransactionDateOk() (*string, bool) {
	if o == nil || IsNil(o.TransactionDate) {
		return nil, false
	}
	return o.TransactionDate, true
}

// HasTransactionDate returns a boolean if a field has been set.
func (o *PrepaidCardTransactionType) HasTransactionDate() bool {
	if o != nil && !IsNil(o.TransactionDate) {
		return true
	}

	return false
}

// SetTransactionDate gets a reference to the given string and assigns it to the TransactionDate field.
func (o *PrepaidCardTransactionType) SetTransactionDate(v string) {
	o.TransactionDate = &v
}

// GetTransactionNo returns the TransactionNo field value if set, zero value otherwise.
func (o *PrepaidCardTransactionType) GetTransactionNo() float32 {
	if o == nil || IsNil(o.TransactionNo) {
		var ret float32
		return ret
	}
	return *o.TransactionNo
}

// GetTransactionNoOk returns a tuple with the TransactionNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardTransactionType) GetTransactionNoOk() (*float32, bool) {
	if o == nil || IsNil(o.TransactionNo) {
		return nil, false
	}
	return o.TransactionNo, true
}

// HasTransactionNo returns a boolean if a field has been set.
func (o *PrepaidCardTransactionType) HasTransactionNo() bool {
	if o != nil && !IsNil(o.TransactionNo) {
		return true
	}

	return false
}

// SetTransactionNo gets a reference to the given float32 and assigns it to the TransactionNo field.
func (o *PrepaidCardTransactionType) SetTransactionNo(v float32) {
	o.TransactionNo = &v
}

// GetTransactionType returns the TransactionType field value if set, zero value otherwise.
func (o *PrepaidCardTransactionType) GetTransactionType() PrepaidCardTrxTypeType {
	if o == nil || IsNil(o.TransactionType) {
		var ret PrepaidCardTrxTypeType
		return ret
	}
	return *o.TransactionType
}

// GetTransactionTypeOk returns a tuple with the TransactionType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrepaidCardTransactionType) GetTransactionTypeOk() (*PrepaidCardTrxTypeType, bool) {
	if o == nil || IsNil(o.TransactionType) {
		return nil, false
	}
	return o.TransactionType, true
}

// HasTransactionType returns a boolean if a field has been set.
func (o *PrepaidCardTransactionType) HasTransactionType() bool {
	if o != nil && !IsNil(o.TransactionType) {
		return true
	}

	return false
}

// SetTransactionType gets a reference to the given PrepaidCardTrxTypeType and assigns it to the TransactionType field.
func (o *PrepaidCardTransactionType) SetTransactionType(v PrepaidCardTrxTypeType) {
	o.TransactionType = &v
}

func (o PrepaidCardTransactionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PrepaidCardTransactionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
	}
	if !IsNil(o.CreateDateTime) {
		toSerialize["createDateTime"] = o.CreateDateTime
	}
	if !IsNil(o.CreatorId) {
		toSerialize["creatorId"] = o.CreatorId
	}
	if !IsNil(o.LastModifierId) {
		toSerialize["lastModifierId"] = o.LastModifierId
	}
	if !IsNil(o.LastModifyDateTime) {
		toSerialize["lastModifyDateTime"] = o.LastModifyDateTime
	}
	if !IsNil(o.PurgeDate) {
		toSerialize["purgeDate"] = o.PurgeDate
	}
	if !IsNil(o.TransactionDate) {
		toSerialize["transactionDate"] = o.TransactionDate
	}
	if !IsNil(o.TransactionNo) {
		toSerialize["transactionNo"] = o.TransactionNo
	}
	if !IsNil(o.TransactionType) {
		toSerialize["transactionType"] = o.TransactionType
	}
	return toSerialize, nil
}

type NullablePrepaidCardTransactionType struct {
	value *PrepaidCardTransactionType
	isSet bool
}

func (v NullablePrepaidCardTransactionType) Get() *PrepaidCardTransactionType {
	return v.value
}

func (v *NullablePrepaidCardTransactionType) Set(val *PrepaidCardTransactionType) {
	v.value = val
	v.isSet = true
}

func (v NullablePrepaidCardTransactionType) IsSet() bool {
	return v.isSet
}

func (v *NullablePrepaidCardTransactionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePrepaidCardTransactionType(val *PrepaidCardTransactionType) *NullablePrepaidCardTransactionType {
	return &NullablePrepaidCardTransactionType{value: val, isSet: true}
}

func (v NullablePrepaidCardTransactionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePrepaidCardTransactionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

