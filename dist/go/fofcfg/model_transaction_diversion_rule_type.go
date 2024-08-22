/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the TransactionDiversionRuleType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TransactionDiversionRuleType{}

// TransactionDiversionRuleType A Transaction Diversion Rule Type
type TransactionDiversionRuleType struct {
	// Transaction Diversion Code
	Code *string `json:"code,omitempty"`
	// User defined message for the Transaction Diversion Rule.
	Description *string `json:"description,omitempty"`
	// User configured Sequence number.
	DisplaySequence *float32 `json:"displaySequence,omitempty"`
	// Hotel code with which Transaction Diversion Rule is associated.
	HotelId *string `json:"hotelId,omitempty"`
	// Indicator that tells whether the transaction diversion rule is active or not.
	Inactive *bool `json:"inactive,omitempty"`
	Level *TransactionDiversionRuleLevelType `json:"level,omitempty"`
	Membership *MembershipTypeLevelType `json:"membership,omitempty"`
	// Room number to receive all the diverted transactions configured for this instruction.
	TargetRoom *string `json:"targetRoom,omitempty"`
	Thresholds *ThresholdDetailsType `json:"thresholds,omitempty"`
	// Collection of Transaction Code List
	TransactionCodes []CodeDescriptionType `json:"transactionCodes,omitempty"`
	Type *TransactionDiversionRuleTypeType `json:"type,omitempty"`
	// VIP code to consider while applying Diversion Instruction.
	VipCode *string `json:"vipCode,omitempty"`
}

// NewTransactionDiversionRuleType instantiates a new TransactionDiversionRuleType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTransactionDiversionRuleType() *TransactionDiversionRuleType {
	this := TransactionDiversionRuleType{}
	return &this
}

// NewTransactionDiversionRuleTypeWithDefaults instantiates a new TransactionDiversionRuleType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTransactionDiversionRuleTypeWithDefaults() *TransactionDiversionRuleType {
	this := TransactionDiversionRuleType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *TransactionDiversionRuleType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionDiversionRuleType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *TransactionDiversionRuleType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *TransactionDiversionRuleType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *TransactionDiversionRuleType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionDiversionRuleType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *TransactionDiversionRuleType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *TransactionDiversionRuleType) SetDescription(v string) {
	o.Description = &v
}

// GetDisplaySequence returns the DisplaySequence field value if set, zero value otherwise.
func (o *TransactionDiversionRuleType) GetDisplaySequence() float32 {
	if o == nil || IsNil(o.DisplaySequence) {
		var ret float32
		return ret
	}
	return *o.DisplaySequence
}

// GetDisplaySequenceOk returns a tuple with the DisplaySequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionDiversionRuleType) GetDisplaySequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.DisplaySequence) {
		return nil, false
	}
	return o.DisplaySequence, true
}

// HasDisplaySequence returns a boolean if a field has been set.
func (o *TransactionDiversionRuleType) HasDisplaySequence() bool {
	if o != nil && !IsNil(o.DisplaySequence) {
		return true
	}

	return false
}

// SetDisplaySequence gets a reference to the given float32 and assigns it to the DisplaySequence field.
func (o *TransactionDiversionRuleType) SetDisplaySequence(v float32) {
	o.DisplaySequence = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *TransactionDiversionRuleType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionDiversionRuleType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *TransactionDiversionRuleType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *TransactionDiversionRuleType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *TransactionDiversionRuleType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionDiversionRuleType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *TransactionDiversionRuleType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *TransactionDiversionRuleType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetLevel returns the Level field value if set, zero value otherwise.
func (o *TransactionDiversionRuleType) GetLevel() TransactionDiversionRuleLevelType {
	if o == nil || IsNil(o.Level) {
		var ret TransactionDiversionRuleLevelType
		return ret
	}
	return *o.Level
}

// GetLevelOk returns a tuple with the Level field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionDiversionRuleType) GetLevelOk() (*TransactionDiversionRuleLevelType, bool) {
	if o == nil || IsNil(o.Level) {
		return nil, false
	}
	return o.Level, true
}

// HasLevel returns a boolean if a field has been set.
func (o *TransactionDiversionRuleType) HasLevel() bool {
	if o != nil && !IsNil(o.Level) {
		return true
	}

	return false
}

// SetLevel gets a reference to the given TransactionDiversionRuleLevelType and assigns it to the Level field.
func (o *TransactionDiversionRuleType) SetLevel(v TransactionDiversionRuleLevelType) {
	o.Level = &v
}

// GetMembership returns the Membership field value if set, zero value otherwise.
func (o *TransactionDiversionRuleType) GetMembership() MembershipTypeLevelType {
	if o == nil || IsNil(o.Membership) {
		var ret MembershipTypeLevelType
		return ret
	}
	return *o.Membership
}

// GetMembershipOk returns a tuple with the Membership field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionDiversionRuleType) GetMembershipOk() (*MembershipTypeLevelType, bool) {
	if o == nil || IsNil(o.Membership) {
		return nil, false
	}
	return o.Membership, true
}

// HasMembership returns a boolean if a field has been set.
func (o *TransactionDiversionRuleType) HasMembership() bool {
	if o != nil && !IsNil(o.Membership) {
		return true
	}

	return false
}

// SetMembership gets a reference to the given MembershipTypeLevelType and assigns it to the Membership field.
func (o *TransactionDiversionRuleType) SetMembership(v MembershipTypeLevelType) {
	o.Membership = &v
}

// GetTargetRoom returns the TargetRoom field value if set, zero value otherwise.
func (o *TransactionDiversionRuleType) GetTargetRoom() string {
	if o == nil || IsNil(o.TargetRoom) {
		var ret string
		return ret
	}
	return *o.TargetRoom
}

// GetTargetRoomOk returns a tuple with the TargetRoom field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionDiversionRuleType) GetTargetRoomOk() (*string, bool) {
	if o == nil || IsNil(o.TargetRoom) {
		return nil, false
	}
	return o.TargetRoom, true
}

// HasTargetRoom returns a boolean if a field has been set.
func (o *TransactionDiversionRuleType) HasTargetRoom() bool {
	if o != nil && !IsNil(o.TargetRoom) {
		return true
	}

	return false
}

// SetTargetRoom gets a reference to the given string and assigns it to the TargetRoom field.
func (o *TransactionDiversionRuleType) SetTargetRoom(v string) {
	o.TargetRoom = &v
}

// GetThresholds returns the Thresholds field value if set, zero value otherwise.
func (o *TransactionDiversionRuleType) GetThresholds() ThresholdDetailsType {
	if o == nil || IsNil(o.Thresholds) {
		var ret ThresholdDetailsType
		return ret
	}
	return *o.Thresholds
}

// GetThresholdsOk returns a tuple with the Thresholds field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionDiversionRuleType) GetThresholdsOk() (*ThresholdDetailsType, bool) {
	if o == nil || IsNil(o.Thresholds) {
		return nil, false
	}
	return o.Thresholds, true
}

// HasThresholds returns a boolean if a field has been set.
func (o *TransactionDiversionRuleType) HasThresholds() bool {
	if o != nil && !IsNil(o.Thresholds) {
		return true
	}

	return false
}

// SetThresholds gets a reference to the given ThresholdDetailsType and assigns it to the Thresholds field.
func (o *TransactionDiversionRuleType) SetThresholds(v ThresholdDetailsType) {
	o.Thresholds = &v
}

// GetTransactionCodes returns the TransactionCodes field value if set, zero value otherwise.
func (o *TransactionDiversionRuleType) GetTransactionCodes() []CodeDescriptionType {
	if o == nil || IsNil(o.TransactionCodes) {
		var ret []CodeDescriptionType
		return ret
	}
	return o.TransactionCodes
}

// GetTransactionCodesOk returns a tuple with the TransactionCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionDiversionRuleType) GetTransactionCodesOk() ([]CodeDescriptionType, bool) {
	if o == nil || IsNil(o.TransactionCodes) {
		return nil, false
	}
	return o.TransactionCodes, true
}

// HasTransactionCodes returns a boolean if a field has been set.
func (o *TransactionDiversionRuleType) HasTransactionCodes() bool {
	if o != nil && !IsNil(o.TransactionCodes) {
		return true
	}

	return false
}

// SetTransactionCodes gets a reference to the given []CodeDescriptionType and assigns it to the TransactionCodes field.
func (o *TransactionDiversionRuleType) SetTransactionCodes(v []CodeDescriptionType) {
	o.TransactionCodes = v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *TransactionDiversionRuleType) GetType() TransactionDiversionRuleTypeType {
	if o == nil || IsNil(o.Type) {
		var ret TransactionDiversionRuleTypeType
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionDiversionRuleType) GetTypeOk() (*TransactionDiversionRuleTypeType, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *TransactionDiversionRuleType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given TransactionDiversionRuleTypeType and assigns it to the Type field.
func (o *TransactionDiversionRuleType) SetType(v TransactionDiversionRuleTypeType) {
	o.Type = &v
}

// GetVipCode returns the VipCode field value if set, zero value otherwise.
func (o *TransactionDiversionRuleType) GetVipCode() string {
	if o == nil || IsNil(o.VipCode) {
		var ret string
		return ret
	}
	return *o.VipCode
}

// GetVipCodeOk returns a tuple with the VipCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransactionDiversionRuleType) GetVipCodeOk() (*string, bool) {
	if o == nil || IsNil(o.VipCode) {
		return nil, false
	}
	return o.VipCode, true
}

// HasVipCode returns a boolean if a field has been set.
func (o *TransactionDiversionRuleType) HasVipCode() bool {
	if o != nil && !IsNil(o.VipCode) {
		return true
	}

	return false
}

// SetVipCode gets a reference to the given string and assigns it to the VipCode field.
func (o *TransactionDiversionRuleType) SetVipCode(v string) {
	o.VipCode = &v
}

func (o TransactionDiversionRuleType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TransactionDiversionRuleType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.DisplaySequence) {
		toSerialize["displaySequence"] = o.DisplaySequence
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.Level) {
		toSerialize["level"] = o.Level
	}
	if !IsNil(o.Membership) {
		toSerialize["membership"] = o.Membership
	}
	if !IsNil(o.TargetRoom) {
		toSerialize["targetRoom"] = o.TargetRoom
	}
	if !IsNil(o.Thresholds) {
		toSerialize["thresholds"] = o.Thresholds
	}
	if !IsNil(o.TransactionCodes) {
		toSerialize["transactionCodes"] = o.TransactionCodes
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.VipCode) {
		toSerialize["vipCode"] = o.VipCode
	}
	return toSerialize, nil
}

type NullableTransactionDiversionRuleType struct {
	value *TransactionDiversionRuleType
	isSet bool
}

func (v NullableTransactionDiversionRuleType) Get() *TransactionDiversionRuleType {
	return v.value
}

func (v *NullableTransactionDiversionRuleType) Set(val *TransactionDiversionRuleType) {
	v.value = val
	v.isSet = true
}

func (v NullableTransactionDiversionRuleType) IsSet() bool {
	return v.isSet
}

func (v *NullableTransactionDiversionRuleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTransactionDiversionRuleType(val *TransactionDiversionRuleType) *NullableTransactionDiversionRuleType {
	return &NullableTransactionDiversionRuleType{value: val, isSet: true}
}

func (v NullableTransactionDiversionRuleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTransactionDiversionRuleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


