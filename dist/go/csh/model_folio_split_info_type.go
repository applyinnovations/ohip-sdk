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

// checks if the FolioSplitInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FolioSplitInfoType{}

// FolioSplitInfoType Containsts the folio split posting information.
type FolioSplitInfoType struct {
	Balance *CurrencyAmountType `json:"balance,omitempty"`
	FolioSplitType *FolioSplitType `json:"folioSplitType,omitempty"`
	Payment *CurrencyAmountType `json:"payment,omitempty"`
	Revenue *CurrencyAmountType `json:"revenue,omitempty"`
	// Running total number of the transactions.
	TotalPostings *int32 `json:"totalPostings,omitempty"`
}

// NewFolioSplitInfoType instantiates a new FolioSplitInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFolioSplitInfoType() *FolioSplitInfoType {
	this := FolioSplitInfoType{}
	return &this
}

// NewFolioSplitInfoTypeWithDefaults instantiates a new FolioSplitInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFolioSplitInfoTypeWithDefaults() *FolioSplitInfoType {
	this := FolioSplitInfoType{}
	return &this
}

// GetBalance returns the Balance field value if set, zero value otherwise.
func (o *FolioSplitInfoType) GetBalance() CurrencyAmountType {
	if o == nil || IsNil(o.Balance) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Balance
}

// GetBalanceOk returns a tuple with the Balance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioSplitInfoType) GetBalanceOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Balance) {
		return nil, false
	}
	return o.Balance, true
}

// HasBalance returns a boolean if a field has been set.
func (o *FolioSplitInfoType) HasBalance() bool {
	if o != nil && !IsNil(o.Balance) {
		return true
	}

	return false
}

// SetBalance gets a reference to the given CurrencyAmountType and assigns it to the Balance field.
func (o *FolioSplitInfoType) SetBalance(v CurrencyAmountType) {
	o.Balance = &v
}

// GetFolioSplitType returns the FolioSplitType field value if set, zero value otherwise.
func (o *FolioSplitInfoType) GetFolioSplitType() FolioSplitType {
	if o == nil || IsNil(o.FolioSplitType) {
		var ret FolioSplitType
		return ret
	}
	return *o.FolioSplitType
}

// GetFolioSplitTypeOk returns a tuple with the FolioSplitType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioSplitInfoType) GetFolioSplitTypeOk() (*FolioSplitType, bool) {
	if o == nil || IsNil(o.FolioSplitType) {
		return nil, false
	}
	return o.FolioSplitType, true
}

// HasFolioSplitType returns a boolean if a field has been set.
func (o *FolioSplitInfoType) HasFolioSplitType() bool {
	if o != nil && !IsNil(o.FolioSplitType) {
		return true
	}

	return false
}

// SetFolioSplitType gets a reference to the given FolioSplitType and assigns it to the FolioSplitType field.
func (o *FolioSplitInfoType) SetFolioSplitType(v FolioSplitType) {
	o.FolioSplitType = &v
}

// GetPayment returns the Payment field value if set, zero value otherwise.
func (o *FolioSplitInfoType) GetPayment() CurrencyAmountType {
	if o == nil || IsNil(o.Payment) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Payment
}

// GetPaymentOk returns a tuple with the Payment field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioSplitInfoType) GetPaymentOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Payment) {
		return nil, false
	}
	return o.Payment, true
}

// HasPayment returns a boolean if a field has been set.
func (o *FolioSplitInfoType) HasPayment() bool {
	if o != nil && !IsNil(o.Payment) {
		return true
	}

	return false
}

// SetPayment gets a reference to the given CurrencyAmountType and assigns it to the Payment field.
func (o *FolioSplitInfoType) SetPayment(v CurrencyAmountType) {
	o.Payment = &v
}

// GetRevenue returns the Revenue field value if set, zero value otherwise.
func (o *FolioSplitInfoType) GetRevenue() CurrencyAmountType {
	if o == nil || IsNil(o.Revenue) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Revenue
}

// GetRevenueOk returns a tuple with the Revenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioSplitInfoType) GetRevenueOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Revenue) {
		return nil, false
	}
	return o.Revenue, true
}

// HasRevenue returns a boolean if a field has been set.
func (o *FolioSplitInfoType) HasRevenue() bool {
	if o != nil && !IsNil(o.Revenue) {
		return true
	}

	return false
}

// SetRevenue gets a reference to the given CurrencyAmountType and assigns it to the Revenue field.
func (o *FolioSplitInfoType) SetRevenue(v CurrencyAmountType) {
	o.Revenue = &v
}

// GetTotalPostings returns the TotalPostings field value if set, zero value otherwise.
func (o *FolioSplitInfoType) GetTotalPostings() int32 {
	if o == nil || IsNil(o.TotalPostings) {
		var ret int32
		return ret
	}
	return *o.TotalPostings
}

// GetTotalPostingsOk returns a tuple with the TotalPostings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioSplitInfoType) GetTotalPostingsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalPostings) {
		return nil, false
	}
	return o.TotalPostings, true
}

// HasTotalPostings returns a boolean if a field has been set.
func (o *FolioSplitInfoType) HasTotalPostings() bool {
	if o != nil && !IsNil(o.TotalPostings) {
		return true
	}

	return false
}

// SetTotalPostings gets a reference to the given int32 and assigns it to the TotalPostings field.
func (o *FolioSplitInfoType) SetTotalPostings(v int32) {
	o.TotalPostings = &v
}

func (o FolioSplitInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FolioSplitInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Balance) {
		toSerialize["balance"] = o.Balance
	}
	if !IsNil(o.FolioSplitType) {
		toSerialize["folioSplitType"] = o.FolioSplitType
	}
	if !IsNil(o.Payment) {
		toSerialize["payment"] = o.Payment
	}
	if !IsNil(o.Revenue) {
		toSerialize["revenue"] = o.Revenue
	}
	if !IsNil(o.TotalPostings) {
		toSerialize["totalPostings"] = o.TotalPostings
	}
	return toSerialize, nil
}

type NullableFolioSplitInfoType struct {
	value *FolioSplitInfoType
	isSet bool
}

func (v NullableFolioSplitInfoType) Get() *FolioSplitInfoType {
	return v.value
}

func (v *NullableFolioSplitInfoType) Set(val *FolioSplitInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableFolioSplitInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableFolioSplitInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFolioSplitInfoType(val *FolioSplitInfoType) *NullableFolioSplitInfoType {
	return &NullableFolioSplitInfoType{value: val, isSet: true}
}

func (v NullableFolioSplitInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFolioSplitInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


