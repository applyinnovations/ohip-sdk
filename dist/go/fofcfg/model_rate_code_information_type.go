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

// checks if the RateCodeInformationType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RateCodeInformationType{}

// RateCodeInformationType Budget Forecast information for budget segment code.
type RateCodeInformationType struct {
	// Monthly Revenue Variance information.
	ABVarianceInfo []MonthlyRevenueNightsVarianceInfoType `json:"aBVarianceInfo,omitempty"`
	// Monthly Revenue Variance information.
	AFVarianceInfo []MonthlyRevenueNightsVarianceInfoType `json:"aFVarianceInfo,omitempty"`
	ActualRevenueInfo *RevenueNightsInfoType `json:"actualRevenueInfo,omitempty"`
	BudgetRevenueInfo *RevenueNightsInfoType `json:"budgetRevenueInfo,omitempty"`
	// Monthly Revenue Variance information.
	FBVarianceInfo []MonthlyRevenueNightsVarianceInfoType `json:"fBVarianceInfo,omitempty"`
	ForecastRevenueInfo *RevenueNightsInfoType `json:"forecastRevenueInfo,omitempty"`
	// Segment code for which budget forecast information is fetched.
	RateCode *string `json:"rateCode,omitempty"`
	// Segment code description for segment code.
	RateCodeDescription *string `json:"rateCodeDescription,omitempty"`
}

// NewRateCodeInformationType instantiates a new RateCodeInformationType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRateCodeInformationType() *RateCodeInformationType {
	this := RateCodeInformationType{}
	return &this
}

// NewRateCodeInformationTypeWithDefaults instantiates a new RateCodeInformationType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRateCodeInformationTypeWithDefaults() *RateCodeInformationType {
	this := RateCodeInformationType{}
	return &this
}

// GetABVarianceInfo returns the ABVarianceInfo field value if set, zero value otherwise.
func (o *RateCodeInformationType) GetABVarianceInfo() []MonthlyRevenueNightsVarianceInfoType {
	if o == nil || IsNil(o.ABVarianceInfo) {
		var ret []MonthlyRevenueNightsVarianceInfoType
		return ret
	}
	return o.ABVarianceInfo
}

// GetABVarianceInfoOk returns a tuple with the ABVarianceInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateCodeInformationType) GetABVarianceInfoOk() ([]MonthlyRevenueNightsVarianceInfoType, bool) {
	if o == nil || IsNil(o.ABVarianceInfo) {
		return nil, false
	}
	return o.ABVarianceInfo, true
}

// HasABVarianceInfo returns a boolean if a field has been set.
func (o *RateCodeInformationType) HasABVarianceInfo() bool {
	if o != nil && !IsNil(o.ABVarianceInfo) {
		return true
	}

	return false
}

// SetABVarianceInfo gets a reference to the given []MonthlyRevenueNightsVarianceInfoType and assigns it to the ABVarianceInfo field.
func (o *RateCodeInformationType) SetABVarianceInfo(v []MonthlyRevenueNightsVarianceInfoType) {
	o.ABVarianceInfo = v
}

// GetAFVarianceInfo returns the AFVarianceInfo field value if set, zero value otherwise.
func (o *RateCodeInformationType) GetAFVarianceInfo() []MonthlyRevenueNightsVarianceInfoType {
	if o == nil || IsNil(o.AFVarianceInfo) {
		var ret []MonthlyRevenueNightsVarianceInfoType
		return ret
	}
	return o.AFVarianceInfo
}

// GetAFVarianceInfoOk returns a tuple with the AFVarianceInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateCodeInformationType) GetAFVarianceInfoOk() ([]MonthlyRevenueNightsVarianceInfoType, bool) {
	if o == nil || IsNil(o.AFVarianceInfo) {
		return nil, false
	}
	return o.AFVarianceInfo, true
}

// HasAFVarianceInfo returns a boolean if a field has been set.
func (o *RateCodeInformationType) HasAFVarianceInfo() bool {
	if o != nil && !IsNil(o.AFVarianceInfo) {
		return true
	}

	return false
}

// SetAFVarianceInfo gets a reference to the given []MonthlyRevenueNightsVarianceInfoType and assigns it to the AFVarianceInfo field.
func (o *RateCodeInformationType) SetAFVarianceInfo(v []MonthlyRevenueNightsVarianceInfoType) {
	o.AFVarianceInfo = v
}

// GetActualRevenueInfo returns the ActualRevenueInfo field value if set, zero value otherwise.
func (o *RateCodeInformationType) GetActualRevenueInfo() RevenueNightsInfoType {
	if o == nil || IsNil(o.ActualRevenueInfo) {
		var ret RevenueNightsInfoType
		return ret
	}
	return *o.ActualRevenueInfo
}

// GetActualRevenueInfoOk returns a tuple with the ActualRevenueInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateCodeInformationType) GetActualRevenueInfoOk() (*RevenueNightsInfoType, bool) {
	if o == nil || IsNil(o.ActualRevenueInfo) {
		return nil, false
	}
	return o.ActualRevenueInfo, true
}

// HasActualRevenueInfo returns a boolean if a field has been set.
func (o *RateCodeInformationType) HasActualRevenueInfo() bool {
	if o != nil && !IsNil(o.ActualRevenueInfo) {
		return true
	}

	return false
}

// SetActualRevenueInfo gets a reference to the given RevenueNightsInfoType and assigns it to the ActualRevenueInfo field.
func (o *RateCodeInformationType) SetActualRevenueInfo(v RevenueNightsInfoType) {
	o.ActualRevenueInfo = &v
}

// GetBudgetRevenueInfo returns the BudgetRevenueInfo field value if set, zero value otherwise.
func (o *RateCodeInformationType) GetBudgetRevenueInfo() RevenueNightsInfoType {
	if o == nil || IsNil(o.BudgetRevenueInfo) {
		var ret RevenueNightsInfoType
		return ret
	}
	return *o.BudgetRevenueInfo
}

// GetBudgetRevenueInfoOk returns a tuple with the BudgetRevenueInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateCodeInformationType) GetBudgetRevenueInfoOk() (*RevenueNightsInfoType, bool) {
	if o == nil || IsNil(o.BudgetRevenueInfo) {
		return nil, false
	}
	return o.BudgetRevenueInfo, true
}

// HasBudgetRevenueInfo returns a boolean if a field has been set.
func (o *RateCodeInformationType) HasBudgetRevenueInfo() bool {
	if o != nil && !IsNil(o.BudgetRevenueInfo) {
		return true
	}

	return false
}

// SetBudgetRevenueInfo gets a reference to the given RevenueNightsInfoType and assigns it to the BudgetRevenueInfo field.
func (o *RateCodeInformationType) SetBudgetRevenueInfo(v RevenueNightsInfoType) {
	o.BudgetRevenueInfo = &v
}

// GetFBVarianceInfo returns the FBVarianceInfo field value if set, zero value otherwise.
func (o *RateCodeInformationType) GetFBVarianceInfo() []MonthlyRevenueNightsVarianceInfoType {
	if o == nil || IsNil(o.FBVarianceInfo) {
		var ret []MonthlyRevenueNightsVarianceInfoType
		return ret
	}
	return o.FBVarianceInfo
}

// GetFBVarianceInfoOk returns a tuple with the FBVarianceInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateCodeInformationType) GetFBVarianceInfoOk() ([]MonthlyRevenueNightsVarianceInfoType, bool) {
	if o == nil || IsNil(o.FBVarianceInfo) {
		return nil, false
	}
	return o.FBVarianceInfo, true
}

// HasFBVarianceInfo returns a boolean if a field has been set.
func (o *RateCodeInformationType) HasFBVarianceInfo() bool {
	if o != nil && !IsNil(o.FBVarianceInfo) {
		return true
	}

	return false
}

// SetFBVarianceInfo gets a reference to the given []MonthlyRevenueNightsVarianceInfoType and assigns it to the FBVarianceInfo field.
func (o *RateCodeInformationType) SetFBVarianceInfo(v []MonthlyRevenueNightsVarianceInfoType) {
	o.FBVarianceInfo = v
}

// GetForecastRevenueInfo returns the ForecastRevenueInfo field value if set, zero value otherwise.
func (o *RateCodeInformationType) GetForecastRevenueInfo() RevenueNightsInfoType {
	if o == nil || IsNil(o.ForecastRevenueInfo) {
		var ret RevenueNightsInfoType
		return ret
	}
	return *o.ForecastRevenueInfo
}

// GetForecastRevenueInfoOk returns a tuple with the ForecastRevenueInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateCodeInformationType) GetForecastRevenueInfoOk() (*RevenueNightsInfoType, bool) {
	if o == nil || IsNil(o.ForecastRevenueInfo) {
		return nil, false
	}
	return o.ForecastRevenueInfo, true
}

// HasForecastRevenueInfo returns a boolean if a field has been set.
func (o *RateCodeInformationType) HasForecastRevenueInfo() bool {
	if o != nil && !IsNil(o.ForecastRevenueInfo) {
		return true
	}

	return false
}

// SetForecastRevenueInfo gets a reference to the given RevenueNightsInfoType and assigns it to the ForecastRevenueInfo field.
func (o *RateCodeInformationType) SetForecastRevenueInfo(v RevenueNightsInfoType) {
	o.ForecastRevenueInfo = &v
}

// GetRateCode returns the RateCode field value if set, zero value otherwise.
func (o *RateCodeInformationType) GetRateCode() string {
	if o == nil || IsNil(o.RateCode) {
		var ret string
		return ret
	}
	return *o.RateCode
}

// GetRateCodeOk returns a tuple with the RateCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateCodeInformationType) GetRateCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RateCode) {
		return nil, false
	}
	return o.RateCode, true
}

// HasRateCode returns a boolean if a field has been set.
func (o *RateCodeInformationType) HasRateCode() bool {
	if o != nil && !IsNil(o.RateCode) {
		return true
	}

	return false
}

// SetRateCode gets a reference to the given string and assigns it to the RateCode field.
func (o *RateCodeInformationType) SetRateCode(v string) {
	o.RateCode = &v
}

// GetRateCodeDescription returns the RateCodeDescription field value if set, zero value otherwise.
func (o *RateCodeInformationType) GetRateCodeDescription() string {
	if o == nil || IsNil(o.RateCodeDescription) {
		var ret string
		return ret
	}
	return *o.RateCodeDescription
}

// GetRateCodeDescriptionOk returns a tuple with the RateCodeDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateCodeInformationType) GetRateCodeDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.RateCodeDescription) {
		return nil, false
	}
	return o.RateCodeDescription, true
}

// HasRateCodeDescription returns a boolean if a field has been set.
func (o *RateCodeInformationType) HasRateCodeDescription() bool {
	if o != nil && !IsNil(o.RateCodeDescription) {
		return true
	}

	return false
}

// SetRateCodeDescription gets a reference to the given string and assigns it to the RateCodeDescription field.
func (o *RateCodeInformationType) SetRateCodeDescription(v string) {
	o.RateCodeDescription = &v
}

func (o RateCodeInformationType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RateCodeInformationType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ABVarianceInfo) {
		toSerialize["aBVarianceInfo"] = o.ABVarianceInfo
	}
	if !IsNil(o.AFVarianceInfo) {
		toSerialize["aFVarianceInfo"] = o.AFVarianceInfo
	}
	if !IsNil(o.ActualRevenueInfo) {
		toSerialize["actualRevenueInfo"] = o.ActualRevenueInfo
	}
	if !IsNil(o.BudgetRevenueInfo) {
		toSerialize["budgetRevenueInfo"] = o.BudgetRevenueInfo
	}
	if !IsNil(o.FBVarianceInfo) {
		toSerialize["fBVarianceInfo"] = o.FBVarianceInfo
	}
	if !IsNil(o.ForecastRevenueInfo) {
		toSerialize["forecastRevenueInfo"] = o.ForecastRevenueInfo
	}
	if !IsNil(o.RateCode) {
		toSerialize["rateCode"] = o.RateCode
	}
	if !IsNil(o.RateCodeDescription) {
		toSerialize["rateCodeDescription"] = o.RateCodeDescription
	}
	return toSerialize, nil
}

type NullableRateCodeInformationType struct {
	value *RateCodeInformationType
	isSet bool
}

func (v NullableRateCodeInformationType) Get() *RateCodeInformationType {
	return v.value
}

func (v *NullableRateCodeInformationType) Set(val *RateCodeInformationType) {
	v.value = val
	v.isSet = true
}

func (v NullableRateCodeInformationType) IsSet() bool {
	return v.isSet
}

func (v *NullableRateCodeInformationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRateCodeInformationType(val *RateCodeInformationType) *NullableRateCodeInformationType {
	return &NullableRateCodeInformationType{value: val, isSet: true}
}

func (v NullableRateCodeInformationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRateCodeInformationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


