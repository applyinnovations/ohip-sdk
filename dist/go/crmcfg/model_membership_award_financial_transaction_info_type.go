/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
)

// checks if the MembershipAwardFinancialTransactionInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipAwardFinancialTransactionInfoType{}

// MembershipAwardFinancialTransactionInfoType Information related to Other Award.
type MembershipAwardFinancialTransactionInfoType struct {
	// Points required to avail/redeem this award.
	PointsRequired *float32 `json:"pointsRequired,omitempty"`
	// The actual value of the award, in the amount of currency.
	AwardValue *float32 `json:"awardValue,omitempty"`
	// Message for Other awards.
	MessageLine1 *string `json:"messageLine1,omitempty"`
	// Message for Other awards.
	MessageLine2 *string `json:"messageLine2,omitempty"`
	// Message for Other awards.
	MessageLine3 *string `json:"messageLine3,omitempty"`
	// Message for Other awards.
	MessageLine4 *string `json:"messageLine4,omitempty"`
	// Display set for other type of awards for export purpose.
	DisplaySet *string `json:"displaySet,omitempty"`
	// Exchange rate type to be used.
	ExchangeRate *string `json:"exchangeRate,omitempty"`
	// Max percent of total value to be allowed to convert money to points.
	MaxPercentAllowed *float32 `json:"maxPercentAllowed,omitempty"`
	// Ignore Financial transactions in OPERA or not? If true, Financial transaction is not required in OPERA while giving award as it may be recorded in some external system and only points accounting is done in OCIS.
	IgnoreFinancialTransaction *bool `json:"ignoreFinancialTransaction,omitempty"`
}

// NewMembershipAwardFinancialTransactionInfoType instantiates a new MembershipAwardFinancialTransactionInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipAwardFinancialTransactionInfoType() *MembershipAwardFinancialTransactionInfoType {
	this := MembershipAwardFinancialTransactionInfoType{}
	return &this
}

// NewMembershipAwardFinancialTransactionInfoTypeWithDefaults instantiates a new MembershipAwardFinancialTransactionInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipAwardFinancialTransactionInfoTypeWithDefaults() *MembershipAwardFinancialTransactionInfoType {
	this := MembershipAwardFinancialTransactionInfoType{}
	return &this
}

// GetPointsRequired returns the PointsRequired field value if set, zero value otherwise.
func (o *MembershipAwardFinancialTransactionInfoType) GetPointsRequired() float32 {
	if o == nil || IsNil(o.PointsRequired) {
		var ret float32
		return ret
	}
	return *o.PointsRequired
}

// GetPointsRequiredOk returns a tuple with the PointsRequired field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipAwardFinancialTransactionInfoType) GetPointsRequiredOk() (*float32, bool) {
	if o == nil || IsNil(o.PointsRequired) {
		return nil, false
	}
	return o.PointsRequired, true
}

// HasPointsRequired returns a boolean if a field has been set.
func (o *MembershipAwardFinancialTransactionInfoType) HasPointsRequired() bool {
	if o != nil && !IsNil(o.PointsRequired) {
		return true
	}

	return false
}

// SetPointsRequired gets a reference to the given float32 and assigns it to the PointsRequired field.
func (o *MembershipAwardFinancialTransactionInfoType) SetPointsRequired(v float32) {
	o.PointsRequired = &v
}

// GetAwardValue returns the AwardValue field value if set, zero value otherwise.
func (o *MembershipAwardFinancialTransactionInfoType) GetAwardValue() float32 {
	if o == nil || IsNil(o.AwardValue) {
		var ret float32
		return ret
	}
	return *o.AwardValue
}

// GetAwardValueOk returns a tuple with the AwardValue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipAwardFinancialTransactionInfoType) GetAwardValueOk() (*float32, bool) {
	if o == nil || IsNil(o.AwardValue) {
		return nil, false
	}
	return o.AwardValue, true
}

// HasAwardValue returns a boolean if a field has been set.
func (o *MembershipAwardFinancialTransactionInfoType) HasAwardValue() bool {
	if o != nil && !IsNil(o.AwardValue) {
		return true
	}

	return false
}

// SetAwardValue gets a reference to the given float32 and assigns it to the AwardValue field.
func (o *MembershipAwardFinancialTransactionInfoType) SetAwardValue(v float32) {
	o.AwardValue = &v
}

// GetMessageLine1 returns the MessageLine1 field value if set, zero value otherwise.
func (o *MembershipAwardFinancialTransactionInfoType) GetMessageLine1() string {
	if o == nil || IsNil(o.MessageLine1) {
		var ret string
		return ret
	}
	return *o.MessageLine1
}

// GetMessageLine1Ok returns a tuple with the MessageLine1 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipAwardFinancialTransactionInfoType) GetMessageLine1Ok() (*string, bool) {
	if o == nil || IsNil(o.MessageLine1) {
		return nil, false
	}
	return o.MessageLine1, true
}

// HasMessageLine1 returns a boolean if a field has been set.
func (o *MembershipAwardFinancialTransactionInfoType) HasMessageLine1() bool {
	if o != nil && !IsNil(o.MessageLine1) {
		return true
	}

	return false
}

// SetMessageLine1 gets a reference to the given string and assigns it to the MessageLine1 field.
func (o *MembershipAwardFinancialTransactionInfoType) SetMessageLine1(v string) {
	o.MessageLine1 = &v
}

// GetMessageLine2 returns the MessageLine2 field value if set, zero value otherwise.
func (o *MembershipAwardFinancialTransactionInfoType) GetMessageLine2() string {
	if o == nil || IsNil(o.MessageLine2) {
		var ret string
		return ret
	}
	return *o.MessageLine2
}

// GetMessageLine2Ok returns a tuple with the MessageLine2 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipAwardFinancialTransactionInfoType) GetMessageLine2Ok() (*string, bool) {
	if o == nil || IsNil(o.MessageLine2) {
		return nil, false
	}
	return o.MessageLine2, true
}

// HasMessageLine2 returns a boolean if a field has been set.
func (o *MembershipAwardFinancialTransactionInfoType) HasMessageLine2() bool {
	if o != nil && !IsNil(o.MessageLine2) {
		return true
	}

	return false
}

// SetMessageLine2 gets a reference to the given string and assigns it to the MessageLine2 field.
func (o *MembershipAwardFinancialTransactionInfoType) SetMessageLine2(v string) {
	o.MessageLine2 = &v
}

// GetMessageLine3 returns the MessageLine3 field value if set, zero value otherwise.
func (o *MembershipAwardFinancialTransactionInfoType) GetMessageLine3() string {
	if o == nil || IsNil(o.MessageLine3) {
		var ret string
		return ret
	}
	return *o.MessageLine3
}

// GetMessageLine3Ok returns a tuple with the MessageLine3 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipAwardFinancialTransactionInfoType) GetMessageLine3Ok() (*string, bool) {
	if o == nil || IsNil(o.MessageLine3) {
		return nil, false
	}
	return o.MessageLine3, true
}

// HasMessageLine3 returns a boolean if a field has been set.
func (o *MembershipAwardFinancialTransactionInfoType) HasMessageLine3() bool {
	if o != nil && !IsNil(o.MessageLine3) {
		return true
	}

	return false
}

// SetMessageLine3 gets a reference to the given string and assigns it to the MessageLine3 field.
func (o *MembershipAwardFinancialTransactionInfoType) SetMessageLine3(v string) {
	o.MessageLine3 = &v
}

// GetMessageLine4 returns the MessageLine4 field value if set, zero value otherwise.
func (o *MembershipAwardFinancialTransactionInfoType) GetMessageLine4() string {
	if o == nil || IsNil(o.MessageLine4) {
		var ret string
		return ret
	}
	return *o.MessageLine4
}

// GetMessageLine4Ok returns a tuple with the MessageLine4 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipAwardFinancialTransactionInfoType) GetMessageLine4Ok() (*string, bool) {
	if o == nil || IsNil(o.MessageLine4) {
		return nil, false
	}
	return o.MessageLine4, true
}

// HasMessageLine4 returns a boolean if a field has been set.
func (o *MembershipAwardFinancialTransactionInfoType) HasMessageLine4() bool {
	if o != nil && !IsNil(o.MessageLine4) {
		return true
	}

	return false
}

// SetMessageLine4 gets a reference to the given string and assigns it to the MessageLine4 field.
func (o *MembershipAwardFinancialTransactionInfoType) SetMessageLine4(v string) {
	o.MessageLine4 = &v
}

// GetDisplaySet returns the DisplaySet field value if set, zero value otherwise.
func (o *MembershipAwardFinancialTransactionInfoType) GetDisplaySet() string {
	if o == nil || IsNil(o.DisplaySet) {
		var ret string
		return ret
	}
	return *o.DisplaySet
}

// GetDisplaySetOk returns a tuple with the DisplaySet field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipAwardFinancialTransactionInfoType) GetDisplaySetOk() (*string, bool) {
	if o == nil || IsNil(o.DisplaySet) {
		return nil, false
	}
	return o.DisplaySet, true
}

// HasDisplaySet returns a boolean if a field has been set.
func (o *MembershipAwardFinancialTransactionInfoType) HasDisplaySet() bool {
	if o != nil && !IsNil(o.DisplaySet) {
		return true
	}

	return false
}

// SetDisplaySet gets a reference to the given string and assigns it to the DisplaySet field.
func (o *MembershipAwardFinancialTransactionInfoType) SetDisplaySet(v string) {
	o.DisplaySet = &v
}

// GetExchangeRate returns the ExchangeRate field value if set, zero value otherwise.
func (o *MembershipAwardFinancialTransactionInfoType) GetExchangeRate() string {
	if o == nil || IsNil(o.ExchangeRate) {
		var ret string
		return ret
	}
	return *o.ExchangeRate
}

// GetExchangeRateOk returns a tuple with the ExchangeRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipAwardFinancialTransactionInfoType) GetExchangeRateOk() (*string, bool) {
	if o == nil || IsNil(o.ExchangeRate) {
		return nil, false
	}
	return o.ExchangeRate, true
}

// HasExchangeRate returns a boolean if a field has been set.
func (o *MembershipAwardFinancialTransactionInfoType) HasExchangeRate() bool {
	if o != nil && !IsNil(o.ExchangeRate) {
		return true
	}

	return false
}

// SetExchangeRate gets a reference to the given string and assigns it to the ExchangeRate field.
func (o *MembershipAwardFinancialTransactionInfoType) SetExchangeRate(v string) {
	o.ExchangeRate = &v
}

// GetMaxPercentAllowed returns the MaxPercentAllowed field value if set, zero value otherwise.
func (o *MembershipAwardFinancialTransactionInfoType) GetMaxPercentAllowed() float32 {
	if o == nil || IsNil(o.MaxPercentAllowed) {
		var ret float32
		return ret
	}
	return *o.MaxPercentAllowed
}

// GetMaxPercentAllowedOk returns a tuple with the MaxPercentAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipAwardFinancialTransactionInfoType) GetMaxPercentAllowedOk() (*float32, bool) {
	if o == nil || IsNil(o.MaxPercentAllowed) {
		return nil, false
	}
	return o.MaxPercentAllowed, true
}

// HasMaxPercentAllowed returns a boolean if a field has been set.
func (o *MembershipAwardFinancialTransactionInfoType) HasMaxPercentAllowed() bool {
	if o != nil && !IsNil(o.MaxPercentAllowed) {
		return true
	}

	return false
}

// SetMaxPercentAllowed gets a reference to the given float32 and assigns it to the MaxPercentAllowed field.
func (o *MembershipAwardFinancialTransactionInfoType) SetMaxPercentAllowed(v float32) {
	o.MaxPercentAllowed = &v
}

// GetIgnoreFinancialTransaction returns the IgnoreFinancialTransaction field value if set, zero value otherwise.
func (o *MembershipAwardFinancialTransactionInfoType) GetIgnoreFinancialTransaction() bool {
	if o == nil || IsNil(o.IgnoreFinancialTransaction) {
		var ret bool
		return ret
	}
	return *o.IgnoreFinancialTransaction
}

// GetIgnoreFinancialTransactionOk returns a tuple with the IgnoreFinancialTransaction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipAwardFinancialTransactionInfoType) GetIgnoreFinancialTransactionOk() (*bool, bool) {
	if o == nil || IsNil(o.IgnoreFinancialTransaction) {
		return nil, false
	}
	return o.IgnoreFinancialTransaction, true
}

// HasIgnoreFinancialTransaction returns a boolean if a field has been set.
func (o *MembershipAwardFinancialTransactionInfoType) HasIgnoreFinancialTransaction() bool {
	if o != nil && !IsNil(o.IgnoreFinancialTransaction) {
		return true
	}

	return false
}

// SetIgnoreFinancialTransaction gets a reference to the given bool and assigns it to the IgnoreFinancialTransaction field.
func (o *MembershipAwardFinancialTransactionInfoType) SetIgnoreFinancialTransaction(v bool) {
	o.IgnoreFinancialTransaction = &v
}

func (o MembershipAwardFinancialTransactionInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipAwardFinancialTransactionInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.PointsRequired) {
		toSerialize["pointsRequired"] = o.PointsRequired
	}
	if !IsNil(o.AwardValue) {
		toSerialize["awardValue"] = o.AwardValue
	}
	if !IsNil(o.MessageLine1) {
		toSerialize["messageLine1"] = o.MessageLine1
	}
	if !IsNil(o.MessageLine2) {
		toSerialize["messageLine2"] = o.MessageLine2
	}
	if !IsNil(o.MessageLine3) {
		toSerialize["messageLine3"] = o.MessageLine3
	}
	if !IsNil(o.MessageLine4) {
		toSerialize["messageLine4"] = o.MessageLine4
	}
	if !IsNil(o.DisplaySet) {
		toSerialize["displaySet"] = o.DisplaySet
	}
	if !IsNil(o.ExchangeRate) {
		toSerialize["exchangeRate"] = o.ExchangeRate
	}
	if !IsNil(o.MaxPercentAllowed) {
		toSerialize["maxPercentAllowed"] = o.MaxPercentAllowed
	}
	if !IsNil(o.IgnoreFinancialTransaction) {
		toSerialize["ignoreFinancialTransaction"] = o.IgnoreFinancialTransaction
	}
	return toSerialize, nil
}

type NullableMembershipAwardFinancialTransactionInfoType struct {
	value *MembershipAwardFinancialTransactionInfoType
	isSet bool
}

func (v NullableMembershipAwardFinancialTransactionInfoType) Get() *MembershipAwardFinancialTransactionInfoType {
	return v.value
}

func (v *NullableMembershipAwardFinancialTransactionInfoType) Set(val *MembershipAwardFinancialTransactionInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipAwardFinancialTransactionInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipAwardFinancialTransactionInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipAwardFinancialTransactionInfoType(val *MembershipAwardFinancialTransactionInfoType) *NullableMembershipAwardFinancialTransactionInfoType {
	return &NullableMembershipAwardFinancialTransactionInfoType{value: val, isSet: true}
}

func (v NullableMembershipAwardFinancialTransactionInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipAwardFinancialTransactionInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


