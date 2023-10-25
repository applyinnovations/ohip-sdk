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

// checks if the TrxSplitAndTransferCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TrxSplitAndTransferCriteriaType{}

// TrxSplitAndTransferCriteriaType Type to define the criteria for Splitting and Transferring the new transaction.
type TrxSplitAndTransferCriteriaType struct {
	// The Cashier ID of the Cashier who is currently processing the transaction(s).
	CashierId *float32 `json:"cashierId,omitempty"`
	// Property code where the reservation transaction exists.
	HotelId *string `json:"hotelId,omitempty"`
	SplitDetails *TrxSplitAndTransferCriteriaTypeSplitDetails `json:"splitDetails,omitempty"`
	// Folio Window Number to where the new transactions , after split, will be transfered.
	TargetFolioWindowNo *int32 `json:"targetFolioWindowNo,omitempty"`
	// Unique Id that references an object uniquely in the system.
	TargetReservationIdList []UniqueIDType `json:"targetReservationIdList,omitempty"`
	// The unique transaction number of this transaction.
	TransactionList []float32 `json:"transactionList,omitempty"`
}

// NewTrxSplitAndTransferCriteriaType instantiates a new TrxSplitAndTransferCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTrxSplitAndTransferCriteriaType() *TrxSplitAndTransferCriteriaType {
	this := TrxSplitAndTransferCriteriaType{}
	return &this
}

// NewTrxSplitAndTransferCriteriaTypeWithDefaults instantiates a new TrxSplitAndTransferCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTrxSplitAndTransferCriteriaTypeWithDefaults() *TrxSplitAndTransferCriteriaType {
	this := TrxSplitAndTransferCriteriaType{}
	return &this
}

// GetCashierId returns the CashierId field value if set, zero value otherwise.
func (o *TrxSplitAndTransferCriteriaType) GetCashierId() float32 {
	if o == nil || IsNil(o.CashierId) {
		var ret float32
		return ret
	}
	return *o.CashierId
}

// GetCashierIdOk returns a tuple with the CashierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSplitAndTransferCriteriaType) GetCashierIdOk() (*float32, bool) {
	if o == nil || IsNil(o.CashierId) {
		return nil, false
	}
	return o.CashierId, true
}

// HasCashierId returns a boolean if a field has been set.
func (o *TrxSplitAndTransferCriteriaType) HasCashierId() bool {
	if o != nil && !IsNil(o.CashierId) {
		return true
	}

	return false
}

// SetCashierId gets a reference to the given float32 and assigns it to the CashierId field.
func (o *TrxSplitAndTransferCriteriaType) SetCashierId(v float32) {
	o.CashierId = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *TrxSplitAndTransferCriteriaType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSplitAndTransferCriteriaType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *TrxSplitAndTransferCriteriaType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *TrxSplitAndTransferCriteriaType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetSplitDetails returns the SplitDetails field value if set, zero value otherwise.
func (o *TrxSplitAndTransferCriteriaType) GetSplitDetails() TrxSplitAndTransferCriteriaTypeSplitDetails {
	if o == nil || IsNil(o.SplitDetails) {
		var ret TrxSplitAndTransferCriteriaTypeSplitDetails
		return ret
	}
	return *o.SplitDetails
}

// GetSplitDetailsOk returns a tuple with the SplitDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSplitAndTransferCriteriaType) GetSplitDetailsOk() (*TrxSplitAndTransferCriteriaTypeSplitDetails, bool) {
	if o == nil || IsNil(o.SplitDetails) {
		return nil, false
	}
	return o.SplitDetails, true
}

// HasSplitDetails returns a boolean if a field has been set.
func (o *TrxSplitAndTransferCriteriaType) HasSplitDetails() bool {
	if o != nil && !IsNil(o.SplitDetails) {
		return true
	}

	return false
}

// SetSplitDetails gets a reference to the given TrxSplitAndTransferCriteriaTypeSplitDetails and assigns it to the SplitDetails field.
func (o *TrxSplitAndTransferCriteriaType) SetSplitDetails(v TrxSplitAndTransferCriteriaTypeSplitDetails) {
	o.SplitDetails = &v
}

// GetTargetFolioWindowNo returns the TargetFolioWindowNo field value if set, zero value otherwise.
func (o *TrxSplitAndTransferCriteriaType) GetTargetFolioWindowNo() int32 {
	if o == nil || IsNil(o.TargetFolioWindowNo) {
		var ret int32
		return ret
	}
	return *o.TargetFolioWindowNo
}

// GetTargetFolioWindowNoOk returns a tuple with the TargetFolioWindowNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSplitAndTransferCriteriaType) GetTargetFolioWindowNoOk() (*int32, bool) {
	if o == nil || IsNil(o.TargetFolioWindowNo) {
		return nil, false
	}
	return o.TargetFolioWindowNo, true
}

// HasTargetFolioWindowNo returns a boolean if a field has been set.
func (o *TrxSplitAndTransferCriteriaType) HasTargetFolioWindowNo() bool {
	if o != nil && !IsNil(o.TargetFolioWindowNo) {
		return true
	}

	return false
}

// SetTargetFolioWindowNo gets a reference to the given int32 and assigns it to the TargetFolioWindowNo field.
func (o *TrxSplitAndTransferCriteriaType) SetTargetFolioWindowNo(v int32) {
	o.TargetFolioWindowNo = &v
}

// GetTargetReservationIdList returns the TargetReservationIdList field value if set, zero value otherwise.
func (o *TrxSplitAndTransferCriteriaType) GetTargetReservationIdList() []UniqueIDType {
	if o == nil || IsNil(o.TargetReservationIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.TargetReservationIdList
}

// GetTargetReservationIdListOk returns a tuple with the TargetReservationIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSplitAndTransferCriteriaType) GetTargetReservationIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.TargetReservationIdList) {
		return nil, false
	}
	return o.TargetReservationIdList, true
}

// HasTargetReservationIdList returns a boolean if a field has been set.
func (o *TrxSplitAndTransferCriteriaType) HasTargetReservationIdList() bool {
	if o != nil && !IsNil(o.TargetReservationIdList) {
		return true
	}

	return false
}

// SetTargetReservationIdList gets a reference to the given []UniqueIDType and assigns it to the TargetReservationIdList field.
func (o *TrxSplitAndTransferCriteriaType) SetTargetReservationIdList(v []UniqueIDType) {
	o.TargetReservationIdList = v
}

// GetTransactionList returns the TransactionList field value if set, zero value otherwise.
func (o *TrxSplitAndTransferCriteriaType) GetTransactionList() []float32 {
	if o == nil || IsNil(o.TransactionList) {
		var ret []float32
		return ret
	}
	return o.TransactionList
}

// GetTransactionListOk returns a tuple with the TransactionList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSplitAndTransferCriteriaType) GetTransactionListOk() ([]float32, bool) {
	if o == nil || IsNil(o.TransactionList) {
		return nil, false
	}
	return o.TransactionList, true
}

// HasTransactionList returns a boolean if a field has been set.
func (o *TrxSplitAndTransferCriteriaType) HasTransactionList() bool {
	if o != nil && !IsNil(o.TransactionList) {
		return true
	}

	return false
}

// SetTransactionList gets a reference to the given []float32 and assigns it to the TransactionList field.
func (o *TrxSplitAndTransferCriteriaType) SetTransactionList(v []float32) {
	o.TransactionList = v
}

func (o TrxSplitAndTransferCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TrxSplitAndTransferCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CashierId) {
		toSerialize["cashierId"] = o.CashierId
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.SplitDetails) {
		toSerialize["splitDetails"] = o.SplitDetails
	}
	if !IsNil(o.TargetFolioWindowNo) {
		toSerialize["targetFolioWindowNo"] = o.TargetFolioWindowNo
	}
	if !IsNil(o.TargetReservationIdList) {
		toSerialize["targetReservationIdList"] = o.TargetReservationIdList
	}
	if !IsNil(o.TransactionList) {
		toSerialize["transactionList"] = o.TransactionList
	}
	return toSerialize, nil
}

type NullableTrxSplitAndTransferCriteriaType struct {
	value *TrxSplitAndTransferCriteriaType
	isSet bool
}

func (v NullableTrxSplitAndTransferCriteriaType) Get() *TrxSplitAndTransferCriteriaType {
	return v.value
}

func (v *NullableTrxSplitAndTransferCriteriaType) Set(val *TrxSplitAndTransferCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableTrxSplitAndTransferCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableTrxSplitAndTransferCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTrxSplitAndTransferCriteriaType(val *TrxSplitAndTransferCriteriaType) *NullableTrxSplitAndTransferCriteriaType {
	return &NullableTrxSplitAndTransferCriteriaType{value: val, isSet: true}
}

func (v NullableTrxSplitAndTransferCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTrxSplitAndTransferCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


