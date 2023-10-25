/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the BudgetForecastInformationType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BudgetForecastInformationType{}

// BudgetForecastInformationType Holds budget forecast information for included segment types.
type BudgetForecastInformationType struct {
	CateringSegmentInformation *BudgetForecastCateringInfoType `json:"cateringSegmentInformation,omitempty"`
	CustomSegmentInformation *BudgetForecastCustomInfoType `json:"customSegmentInformation,omitempty"`
	MarketSegmentInformation *BudgetForecastMarketInfoType `json:"marketSegmentInformation,omitempty"`
	RateSegmentInformation *BudgetForecastRateInfoType `json:"rateSegmentInformation,omitempty"`
	TransactionSegmentInformation *BudgetForecastTransactionInfoType `json:"transactionSegmentInformation,omitempty"`
}

// NewBudgetForecastInformationType instantiates a new BudgetForecastInformationType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBudgetForecastInformationType() *BudgetForecastInformationType {
	this := BudgetForecastInformationType{}
	return &this
}

// NewBudgetForecastInformationTypeWithDefaults instantiates a new BudgetForecastInformationType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBudgetForecastInformationTypeWithDefaults() *BudgetForecastInformationType {
	this := BudgetForecastInformationType{}
	return &this
}

// GetCateringSegmentInformation returns the CateringSegmentInformation field value if set, zero value otherwise.
func (o *BudgetForecastInformationType) GetCateringSegmentInformation() BudgetForecastCateringInfoType {
	if o == nil || IsNil(o.CateringSegmentInformation) {
		var ret BudgetForecastCateringInfoType
		return ret
	}
	return *o.CateringSegmentInformation
}

// GetCateringSegmentInformationOk returns a tuple with the CateringSegmentInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BudgetForecastInformationType) GetCateringSegmentInformationOk() (*BudgetForecastCateringInfoType, bool) {
	if o == nil || IsNil(o.CateringSegmentInformation) {
		return nil, false
	}
	return o.CateringSegmentInformation, true
}

// HasCateringSegmentInformation returns a boolean if a field has been set.
func (o *BudgetForecastInformationType) HasCateringSegmentInformation() bool {
	if o != nil && !IsNil(o.CateringSegmentInformation) {
		return true
	}

	return false
}

// SetCateringSegmentInformation gets a reference to the given BudgetForecastCateringInfoType and assigns it to the CateringSegmentInformation field.
func (o *BudgetForecastInformationType) SetCateringSegmentInformation(v BudgetForecastCateringInfoType) {
	o.CateringSegmentInformation = &v
}

// GetCustomSegmentInformation returns the CustomSegmentInformation field value if set, zero value otherwise.
func (o *BudgetForecastInformationType) GetCustomSegmentInformation() BudgetForecastCustomInfoType {
	if o == nil || IsNil(o.CustomSegmentInformation) {
		var ret BudgetForecastCustomInfoType
		return ret
	}
	return *o.CustomSegmentInformation
}

// GetCustomSegmentInformationOk returns a tuple with the CustomSegmentInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BudgetForecastInformationType) GetCustomSegmentInformationOk() (*BudgetForecastCustomInfoType, bool) {
	if o == nil || IsNil(o.CustomSegmentInformation) {
		return nil, false
	}
	return o.CustomSegmentInformation, true
}

// HasCustomSegmentInformation returns a boolean if a field has been set.
func (o *BudgetForecastInformationType) HasCustomSegmentInformation() bool {
	if o != nil && !IsNil(o.CustomSegmentInformation) {
		return true
	}

	return false
}

// SetCustomSegmentInformation gets a reference to the given BudgetForecastCustomInfoType and assigns it to the CustomSegmentInformation field.
func (o *BudgetForecastInformationType) SetCustomSegmentInformation(v BudgetForecastCustomInfoType) {
	o.CustomSegmentInformation = &v
}

// GetMarketSegmentInformation returns the MarketSegmentInformation field value if set, zero value otherwise.
func (o *BudgetForecastInformationType) GetMarketSegmentInformation() BudgetForecastMarketInfoType {
	if o == nil || IsNil(o.MarketSegmentInformation) {
		var ret BudgetForecastMarketInfoType
		return ret
	}
	return *o.MarketSegmentInformation
}

// GetMarketSegmentInformationOk returns a tuple with the MarketSegmentInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BudgetForecastInformationType) GetMarketSegmentInformationOk() (*BudgetForecastMarketInfoType, bool) {
	if o == nil || IsNil(o.MarketSegmentInformation) {
		return nil, false
	}
	return o.MarketSegmentInformation, true
}

// HasMarketSegmentInformation returns a boolean if a field has been set.
func (o *BudgetForecastInformationType) HasMarketSegmentInformation() bool {
	if o != nil && !IsNil(o.MarketSegmentInformation) {
		return true
	}

	return false
}

// SetMarketSegmentInformation gets a reference to the given BudgetForecastMarketInfoType and assigns it to the MarketSegmentInformation field.
func (o *BudgetForecastInformationType) SetMarketSegmentInformation(v BudgetForecastMarketInfoType) {
	o.MarketSegmentInformation = &v
}

// GetRateSegmentInformation returns the RateSegmentInformation field value if set, zero value otherwise.
func (o *BudgetForecastInformationType) GetRateSegmentInformation() BudgetForecastRateInfoType {
	if o == nil || IsNil(o.RateSegmentInformation) {
		var ret BudgetForecastRateInfoType
		return ret
	}
	return *o.RateSegmentInformation
}

// GetRateSegmentInformationOk returns a tuple with the RateSegmentInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BudgetForecastInformationType) GetRateSegmentInformationOk() (*BudgetForecastRateInfoType, bool) {
	if o == nil || IsNil(o.RateSegmentInformation) {
		return nil, false
	}
	return o.RateSegmentInformation, true
}

// HasRateSegmentInformation returns a boolean if a field has been set.
func (o *BudgetForecastInformationType) HasRateSegmentInformation() bool {
	if o != nil && !IsNil(o.RateSegmentInformation) {
		return true
	}

	return false
}

// SetRateSegmentInformation gets a reference to the given BudgetForecastRateInfoType and assigns it to the RateSegmentInformation field.
func (o *BudgetForecastInformationType) SetRateSegmentInformation(v BudgetForecastRateInfoType) {
	o.RateSegmentInformation = &v
}

// GetTransactionSegmentInformation returns the TransactionSegmentInformation field value if set, zero value otherwise.
func (o *BudgetForecastInformationType) GetTransactionSegmentInformation() BudgetForecastTransactionInfoType {
	if o == nil || IsNil(o.TransactionSegmentInformation) {
		var ret BudgetForecastTransactionInfoType
		return ret
	}
	return *o.TransactionSegmentInformation
}

// GetTransactionSegmentInformationOk returns a tuple with the TransactionSegmentInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BudgetForecastInformationType) GetTransactionSegmentInformationOk() (*BudgetForecastTransactionInfoType, bool) {
	if o == nil || IsNil(o.TransactionSegmentInformation) {
		return nil, false
	}
	return o.TransactionSegmentInformation, true
}

// HasTransactionSegmentInformation returns a boolean if a field has been set.
func (o *BudgetForecastInformationType) HasTransactionSegmentInformation() bool {
	if o != nil && !IsNil(o.TransactionSegmentInformation) {
		return true
	}

	return false
}

// SetTransactionSegmentInformation gets a reference to the given BudgetForecastTransactionInfoType and assigns it to the TransactionSegmentInformation field.
func (o *BudgetForecastInformationType) SetTransactionSegmentInformation(v BudgetForecastTransactionInfoType) {
	o.TransactionSegmentInformation = &v
}

func (o BudgetForecastInformationType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BudgetForecastInformationType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CateringSegmentInformation) {
		toSerialize["cateringSegmentInformation"] = o.CateringSegmentInformation
	}
	if !IsNil(o.CustomSegmentInformation) {
		toSerialize["customSegmentInformation"] = o.CustomSegmentInformation
	}
	if !IsNil(o.MarketSegmentInformation) {
		toSerialize["marketSegmentInformation"] = o.MarketSegmentInformation
	}
	if !IsNil(o.RateSegmentInformation) {
		toSerialize["rateSegmentInformation"] = o.RateSegmentInformation
	}
	if !IsNil(o.TransactionSegmentInformation) {
		toSerialize["transactionSegmentInformation"] = o.TransactionSegmentInformation
	}
	return toSerialize, nil
}

type NullableBudgetForecastInformationType struct {
	value *BudgetForecastInformationType
	isSet bool
}

func (v NullableBudgetForecastInformationType) Get() *BudgetForecastInformationType {
	return v.value
}

func (v *NullableBudgetForecastInformationType) Set(val *BudgetForecastInformationType) {
	v.value = val
	v.isSet = true
}

func (v NullableBudgetForecastInformationType) IsSet() bool {
	return v.isSet
}

func (v *NullableBudgetForecastInformationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBudgetForecastInformationType(val *BudgetForecastInformationType) *NullableBudgetForecastInformationType {
	return &NullableBudgetForecastInformationType{value: val, isSet: true}
}

func (v NullableBudgetForecastInformationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBudgetForecastInformationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


