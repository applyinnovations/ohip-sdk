/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the MembershipTransactionRateType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipTransactionRateType{}

// MembershipTransactionRateType Information related to a membership transaction rate.
type MembershipTransactionRateType struct {
	CentralRateAmount *CurrencyAmountType `json:"centralRateAmount,omitempty"`
	// Indicates the Property currency code.
	Currency *string `json:"currency,omitempty"`
	// Indicates start date of the reservation.
	FromDate *string `json:"fromDate,omitempty"`
	// Indicates the Market code linked to rate code.
	MarketCode *string `json:"marketCode,omitempty"`
	PMSRateAmount *CurrencyAmountType `json:"pMSRateAmount,omitempty"`
	// Indicates the Rate code used in the reservation.
	RateCode *string `json:"rateCode,omitempty"`
	// Indicates end date of the reservation.
	ToDate *string `json:"toDate,omitempty"`
}

// NewMembershipTransactionRateType instantiates a new MembershipTransactionRateType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipTransactionRateType() *MembershipTransactionRateType {
	this := MembershipTransactionRateType{}
	return &this
}

// NewMembershipTransactionRateTypeWithDefaults instantiates a new MembershipTransactionRateType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipTransactionRateTypeWithDefaults() *MembershipTransactionRateType {
	this := MembershipTransactionRateType{}
	return &this
}

// GetCentralRateAmount returns the CentralRateAmount field value if set, zero value otherwise.
func (o *MembershipTransactionRateType) GetCentralRateAmount() CurrencyAmountType {
	if o == nil || IsNil(o.CentralRateAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.CentralRateAmount
}

// GetCentralRateAmountOk returns a tuple with the CentralRateAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionRateType) GetCentralRateAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.CentralRateAmount) {
		return nil, false
	}
	return o.CentralRateAmount, true
}

// HasCentralRateAmount returns a boolean if a field has been set.
func (o *MembershipTransactionRateType) HasCentralRateAmount() bool {
	if o != nil && !IsNil(o.CentralRateAmount) {
		return true
	}

	return false
}

// SetCentralRateAmount gets a reference to the given CurrencyAmountType and assigns it to the CentralRateAmount field.
func (o *MembershipTransactionRateType) SetCentralRateAmount(v CurrencyAmountType) {
	o.CentralRateAmount = &v
}

// GetCurrency returns the Currency field value if set, zero value otherwise.
func (o *MembershipTransactionRateType) GetCurrency() string {
	if o == nil || IsNil(o.Currency) {
		var ret string
		return ret
	}
	return *o.Currency
}

// GetCurrencyOk returns a tuple with the Currency field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionRateType) GetCurrencyOk() (*string, bool) {
	if o == nil || IsNil(o.Currency) {
		return nil, false
	}
	return o.Currency, true
}

// HasCurrency returns a boolean if a field has been set.
func (o *MembershipTransactionRateType) HasCurrency() bool {
	if o != nil && !IsNil(o.Currency) {
		return true
	}

	return false
}

// SetCurrency gets a reference to the given string and assigns it to the Currency field.
func (o *MembershipTransactionRateType) SetCurrency(v string) {
	o.Currency = &v
}

// GetFromDate returns the FromDate field value if set, zero value otherwise.
func (o *MembershipTransactionRateType) GetFromDate() string {
	if o == nil || IsNil(o.FromDate) {
		var ret string
		return ret
	}
	return *o.FromDate
}

// GetFromDateOk returns a tuple with the FromDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionRateType) GetFromDateOk() (*string, bool) {
	if o == nil || IsNil(o.FromDate) {
		return nil, false
	}
	return o.FromDate, true
}

// HasFromDate returns a boolean if a field has been set.
func (o *MembershipTransactionRateType) HasFromDate() bool {
	if o != nil && !IsNil(o.FromDate) {
		return true
	}

	return false
}

// SetFromDate gets a reference to the given string and assigns it to the FromDate field.
func (o *MembershipTransactionRateType) SetFromDate(v string) {
	o.FromDate = &v
}

// GetMarketCode returns the MarketCode field value if set, zero value otherwise.
func (o *MembershipTransactionRateType) GetMarketCode() string {
	if o == nil || IsNil(o.MarketCode) {
		var ret string
		return ret
	}
	return *o.MarketCode
}

// GetMarketCodeOk returns a tuple with the MarketCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionRateType) GetMarketCodeOk() (*string, bool) {
	if o == nil || IsNil(o.MarketCode) {
		return nil, false
	}
	return o.MarketCode, true
}

// HasMarketCode returns a boolean if a field has been set.
func (o *MembershipTransactionRateType) HasMarketCode() bool {
	if o != nil && !IsNil(o.MarketCode) {
		return true
	}

	return false
}

// SetMarketCode gets a reference to the given string and assigns it to the MarketCode field.
func (o *MembershipTransactionRateType) SetMarketCode(v string) {
	o.MarketCode = &v
}

// GetPMSRateAmount returns the PMSRateAmount field value if set, zero value otherwise.
func (o *MembershipTransactionRateType) GetPMSRateAmount() CurrencyAmountType {
	if o == nil || IsNil(o.PMSRateAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.PMSRateAmount
}

// GetPMSRateAmountOk returns a tuple with the PMSRateAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionRateType) GetPMSRateAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.PMSRateAmount) {
		return nil, false
	}
	return o.PMSRateAmount, true
}

// HasPMSRateAmount returns a boolean if a field has been set.
func (o *MembershipTransactionRateType) HasPMSRateAmount() bool {
	if o != nil && !IsNil(o.PMSRateAmount) {
		return true
	}

	return false
}

// SetPMSRateAmount gets a reference to the given CurrencyAmountType and assigns it to the PMSRateAmount field.
func (o *MembershipTransactionRateType) SetPMSRateAmount(v CurrencyAmountType) {
	o.PMSRateAmount = &v
}

// GetRateCode returns the RateCode field value if set, zero value otherwise.
func (o *MembershipTransactionRateType) GetRateCode() string {
	if o == nil || IsNil(o.RateCode) {
		var ret string
		return ret
	}
	return *o.RateCode
}

// GetRateCodeOk returns a tuple with the RateCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionRateType) GetRateCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RateCode) {
		return nil, false
	}
	return o.RateCode, true
}

// HasRateCode returns a boolean if a field has been set.
func (o *MembershipTransactionRateType) HasRateCode() bool {
	if o != nil && !IsNil(o.RateCode) {
		return true
	}

	return false
}

// SetRateCode gets a reference to the given string and assigns it to the RateCode field.
func (o *MembershipTransactionRateType) SetRateCode(v string) {
	o.RateCode = &v
}

// GetToDate returns the ToDate field value if set, zero value otherwise.
func (o *MembershipTransactionRateType) GetToDate() string {
	if o == nil || IsNil(o.ToDate) {
		var ret string
		return ret
	}
	return *o.ToDate
}

// GetToDateOk returns a tuple with the ToDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionRateType) GetToDateOk() (*string, bool) {
	if o == nil || IsNil(o.ToDate) {
		return nil, false
	}
	return o.ToDate, true
}

// HasToDate returns a boolean if a field has been set.
func (o *MembershipTransactionRateType) HasToDate() bool {
	if o != nil && !IsNil(o.ToDate) {
		return true
	}

	return false
}

// SetToDate gets a reference to the given string and assigns it to the ToDate field.
func (o *MembershipTransactionRateType) SetToDate(v string) {
	o.ToDate = &v
}

func (o MembershipTransactionRateType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipTransactionRateType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CentralRateAmount) {
		toSerialize["centralRateAmount"] = o.CentralRateAmount
	}
	if !IsNil(o.Currency) {
		toSerialize["currency"] = o.Currency
	}
	if !IsNil(o.FromDate) {
		toSerialize["fromDate"] = o.FromDate
	}
	if !IsNil(o.MarketCode) {
		toSerialize["marketCode"] = o.MarketCode
	}
	if !IsNil(o.PMSRateAmount) {
		toSerialize["pMSRateAmount"] = o.PMSRateAmount
	}
	if !IsNil(o.RateCode) {
		toSerialize["rateCode"] = o.RateCode
	}
	if !IsNil(o.ToDate) {
		toSerialize["toDate"] = o.ToDate
	}
	return toSerialize, nil
}

type NullableMembershipTransactionRateType struct {
	value *MembershipTransactionRateType
	isSet bool
}

func (v NullableMembershipTransactionRateType) Get() *MembershipTransactionRateType {
	return v.value
}

func (v *NullableMembershipTransactionRateType) Set(val *MembershipTransactionRateType) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipTransactionRateType) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipTransactionRateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipTransactionRateType(val *MembershipTransactionRateType) *NullableMembershipTransactionRateType {
	return &NullableMembershipTransactionRateType{value: val, isSet: true}
}

func (v NullableMembershipTransactionRateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipTransactionRateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


