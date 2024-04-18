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

// checks if the AuthorizationConfigRuleType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AuthorizationConfigRuleType{}

// AuthorizationConfigRuleType Authorization configuration Rule Type.Authorization Rules specify the rule (or rules) that the property uses for credit card authorizations
type AuthorizationConfigRuleType struct {
	Amount *CurrencyAmountType `json:"amount,omitempty"`
	// Guarantee code associated to this rule.
	GuaranteeCode *string `json:"guaranteeCode,omitempty"`
	// Property associated with authorization rule
	HotelId *string `json:"hotelId,omitempty"`
	// Ignore deposits paid for calculation of the amount to be authorized.
	IgnoreDepositsYN *bool `json:"ignoreDepositsYN,omitempty"`
	// A maximum of two digits to set the number of days to authorize for a credit card. If the field is left blank, authorizations will be done for the entire stay duration of the reservation
	MaxDaysToAuthorize *int32 `json:"maxDaysToAuthorize,omitempty"`
	// Percentage to be applied to all rules with a percentage configured in the formula.
	Percentage *float32 `json:"percentage,omitempty"`
	RateCategory *RateCategoryType `json:"rateCategory,omitempty"`
	// Rate code associated to this rule.
	RateCode *string `json:"rateCode,omitempty"`
	RoomClass *RoomClassCodeInfoType `json:"roomClass,omitempty"`
	// Authorization rule Room type.
	RoomType *string `json:"roomType,omitempty"`
	// Rule Number description for current authorization.
	RuleDescription *string `json:"ruleDescription,omitempty"`
	// Rule Number for current authorization.
	RuleNo *int32 `json:"ruleNo,omitempty"`
	SourceCode *SourceCodeInfoType `json:"sourceCode,omitempty"`
}

// NewAuthorizationConfigRuleType instantiates a new AuthorizationConfigRuleType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAuthorizationConfigRuleType() *AuthorizationConfigRuleType {
	this := AuthorizationConfigRuleType{}
	return &this
}

// NewAuthorizationConfigRuleTypeWithDefaults instantiates a new AuthorizationConfigRuleType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAuthorizationConfigRuleTypeWithDefaults() *AuthorizationConfigRuleType {
	this := AuthorizationConfigRuleType{}
	return &this
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *AuthorizationConfigRuleType) GetAmount() CurrencyAmountType {
	if o == nil || IsNil(o.Amount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizationConfigRuleType) GetAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *AuthorizationConfigRuleType) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given CurrencyAmountType and assigns it to the Amount field.
func (o *AuthorizationConfigRuleType) SetAmount(v CurrencyAmountType) {
	o.Amount = &v
}

// GetGuaranteeCode returns the GuaranteeCode field value if set, zero value otherwise.
func (o *AuthorizationConfigRuleType) GetGuaranteeCode() string {
	if o == nil || IsNil(o.GuaranteeCode) {
		var ret string
		return ret
	}
	return *o.GuaranteeCode
}

// GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizationConfigRuleType) GetGuaranteeCodeOk() (*string, bool) {
	if o == nil || IsNil(o.GuaranteeCode) {
		return nil, false
	}
	return o.GuaranteeCode, true
}

// HasGuaranteeCode returns a boolean if a field has been set.
func (o *AuthorizationConfigRuleType) HasGuaranteeCode() bool {
	if o != nil && !IsNil(o.GuaranteeCode) {
		return true
	}

	return false
}

// SetGuaranteeCode gets a reference to the given string and assigns it to the GuaranteeCode field.
func (o *AuthorizationConfigRuleType) SetGuaranteeCode(v string) {
	o.GuaranteeCode = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *AuthorizationConfigRuleType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizationConfigRuleType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *AuthorizationConfigRuleType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *AuthorizationConfigRuleType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetIgnoreDepositsYN returns the IgnoreDepositsYN field value if set, zero value otherwise.
func (o *AuthorizationConfigRuleType) GetIgnoreDepositsYN() bool {
	if o == nil || IsNil(o.IgnoreDepositsYN) {
		var ret bool
		return ret
	}
	return *o.IgnoreDepositsYN
}

// GetIgnoreDepositsYNOk returns a tuple with the IgnoreDepositsYN field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizationConfigRuleType) GetIgnoreDepositsYNOk() (*bool, bool) {
	if o == nil || IsNil(o.IgnoreDepositsYN) {
		return nil, false
	}
	return o.IgnoreDepositsYN, true
}

// HasIgnoreDepositsYN returns a boolean if a field has been set.
func (o *AuthorizationConfigRuleType) HasIgnoreDepositsYN() bool {
	if o != nil && !IsNil(o.IgnoreDepositsYN) {
		return true
	}

	return false
}

// SetIgnoreDepositsYN gets a reference to the given bool and assigns it to the IgnoreDepositsYN field.
func (o *AuthorizationConfigRuleType) SetIgnoreDepositsYN(v bool) {
	o.IgnoreDepositsYN = &v
}

// GetMaxDaysToAuthorize returns the MaxDaysToAuthorize field value if set, zero value otherwise.
func (o *AuthorizationConfigRuleType) GetMaxDaysToAuthorize() int32 {
	if o == nil || IsNil(o.MaxDaysToAuthorize) {
		var ret int32
		return ret
	}
	return *o.MaxDaysToAuthorize
}

// GetMaxDaysToAuthorizeOk returns a tuple with the MaxDaysToAuthorize field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizationConfigRuleType) GetMaxDaysToAuthorizeOk() (*int32, bool) {
	if o == nil || IsNil(o.MaxDaysToAuthorize) {
		return nil, false
	}
	return o.MaxDaysToAuthorize, true
}

// HasMaxDaysToAuthorize returns a boolean if a field has been set.
func (o *AuthorizationConfigRuleType) HasMaxDaysToAuthorize() bool {
	if o != nil && !IsNil(o.MaxDaysToAuthorize) {
		return true
	}

	return false
}

// SetMaxDaysToAuthorize gets a reference to the given int32 and assigns it to the MaxDaysToAuthorize field.
func (o *AuthorizationConfigRuleType) SetMaxDaysToAuthorize(v int32) {
	o.MaxDaysToAuthorize = &v
}

// GetPercentage returns the Percentage field value if set, zero value otherwise.
func (o *AuthorizationConfigRuleType) GetPercentage() float32 {
	if o == nil || IsNil(o.Percentage) {
		var ret float32
		return ret
	}
	return *o.Percentage
}

// GetPercentageOk returns a tuple with the Percentage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizationConfigRuleType) GetPercentageOk() (*float32, bool) {
	if o == nil || IsNil(o.Percentage) {
		return nil, false
	}
	return o.Percentage, true
}

// HasPercentage returns a boolean if a field has been set.
func (o *AuthorizationConfigRuleType) HasPercentage() bool {
	if o != nil && !IsNil(o.Percentage) {
		return true
	}

	return false
}

// SetPercentage gets a reference to the given float32 and assigns it to the Percentage field.
func (o *AuthorizationConfigRuleType) SetPercentage(v float32) {
	o.Percentage = &v
}

// GetRateCategory returns the RateCategory field value if set, zero value otherwise.
func (o *AuthorizationConfigRuleType) GetRateCategory() RateCategoryType {
	if o == nil || IsNil(o.RateCategory) {
		var ret RateCategoryType
		return ret
	}
	return *o.RateCategory
}

// GetRateCategoryOk returns a tuple with the RateCategory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizationConfigRuleType) GetRateCategoryOk() (*RateCategoryType, bool) {
	if o == nil || IsNil(o.RateCategory) {
		return nil, false
	}
	return o.RateCategory, true
}

// HasRateCategory returns a boolean if a field has been set.
func (o *AuthorizationConfigRuleType) HasRateCategory() bool {
	if o != nil && !IsNil(o.RateCategory) {
		return true
	}

	return false
}

// SetRateCategory gets a reference to the given RateCategoryType and assigns it to the RateCategory field.
func (o *AuthorizationConfigRuleType) SetRateCategory(v RateCategoryType) {
	o.RateCategory = &v
}

// GetRateCode returns the RateCode field value if set, zero value otherwise.
func (o *AuthorizationConfigRuleType) GetRateCode() string {
	if o == nil || IsNil(o.RateCode) {
		var ret string
		return ret
	}
	return *o.RateCode
}

// GetRateCodeOk returns a tuple with the RateCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizationConfigRuleType) GetRateCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RateCode) {
		return nil, false
	}
	return o.RateCode, true
}

// HasRateCode returns a boolean if a field has been set.
func (o *AuthorizationConfigRuleType) HasRateCode() bool {
	if o != nil && !IsNil(o.RateCode) {
		return true
	}

	return false
}

// SetRateCode gets a reference to the given string and assigns it to the RateCode field.
func (o *AuthorizationConfigRuleType) SetRateCode(v string) {
	o.RateCode = &v
}

// GetRoomClass returns the RoomClass field value if set, zero value otherwise.
func (o *AuthorizationConfigRuleType) GetRoomClass() RoomClassCodeInfoType {
	if o == nil || IsNil(o.RoomClass) {
		var ret RoomClassCodeInfoType
		return ret
	}
	return *o.RoomClass
}

// GetRoomClassOk returns a tuple with the RoomClass field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizationConfigRuleType) GetRoomClassOk() (*RoomClassCodeInfoType, bool) {
	if o == nil || IsNil(o.RoomClass) {
		return nil, false
	}
	return o.RoomClass, true
}

// HasRoomClass returns a boolean if a field has been set.
func (o *AuthorizationConfigRuleType) HasRoomClass() bool {
	if o != nil && !IsNil(o.RoomClass) {
		return true
	}

	return false
}

// SetRoomClass gets a reference to the given RoomClassCodeInfoType and assigns it to the RoomClass field.
func (o *AuthorizationConfigRuleType) SetRoomClass(v RoomClassCodeInfoType) {
	o.RoomClass = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *AuthorizationConfigRuleType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizationConfigRuleType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *AuthorizationConfigRuleType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *AuthorizationConfigRuleType) SetRoomType(v string) {
	o.RoomType = &v
}

// GetRuleDescription returns the RuleDescription field value if set, zero value otherwise.
func (o *AuthorizationConfigRuleType) GetRuleDescription() string {
	if o == nil || IsNil(o.RuleDescription) {
		var ret string
		return ret
	}
	return *o.RuleDescription
}

// GetRuleDescriptionOk returns a tuple with the RuleDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizationConfigRuleType) GetRuleDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.RuleDescription) {
		return nil, false
	}
	return o.RuleDescription, true
}

// HasRuleDescription returns a boolean if a field has been set.
func (o *AuthorizationConfigRuleType) HasRuleDescription() bool {
	if o != nil && !IsNil(o.RuleDescription) {
		return true
	}

	return false
}

// SetRuleDescription gets a reference to the given string and assigns it to the RuleDescription field.
func (o *AuthorizationConfigRuleType) SetRuleDescription(v string) {
	o.RuleDescription = &v
}

// GetRuleNo returns the RuleNo field value if set, zero value otherwise.
func (o *AuthorizationConfigRuleType) GetRuleNo() int32 {
	if o == nil || IsNil(o.RuleNo) {
		var ret int32
		return ret
	}
	return *o.RuleNo
}

// GetRuleNoOk returns a tuple with the RuleNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizationConfigRuleType) GetRuleNoOk() (*int32, bool) {
	if o == nil || IsNil(o.RuleNo) {
		return nil, false
	}
	return o.RuleNo, true
}

// HasRuleNo returns a boolean if a field has been set.
func (o *AuthorizationConfigRuleType) HasRuleNo() bool {
	if o != nil && !IsNil(o.RuleNo) {
		return true
	}

	return false
}

// SetRuleNo gets a reference to the given int32 and assigns it to the RuleNo field.
func (o *AuthorizationConfigRuleType) SetRuleNo(v int32) {
	o.RuleNo = &v
}

// GetSourceCode returns the SourceCode field value if set, zero value otherwise.
func (o *AuthorizationConfigRuleType) GetSourceCode() SourceCodeInfoType {
	if o == nil || IsNil(o.SourceCode) {
		var ret SourceCodeInfoType
		return ret
	}
	return *o.SourceCode
}

// GetSourceCodeOk returns a tuple with the SourceCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizationConfigRuleType) GetSourceCodeOk() (*SourceCodeInfoType, bool) {
	if o == nil || IsNil(o.SourceCode) {
		return nil, false
	}
	return o.SourceCode, true
}

// HasSourceCode returns a boolean if a field has been set.
func (o *AuthorizationConfigRuleType) HasSourceCode() bool {
	if o != nil && !IsNil(o.SourceCode) {
		return true
	}

	return false
}

// SetSourceCode gets a reference to the given SourceCodeInfoType and assigns it to the SourceCode field.
func (o *AuthorizationConfigRuleType) SetSourceCode(v SourceCodeInfoType) {
	o.SourceCode = &v
}

func (o AuthorizationConfigRuleType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AuthorizationConfigRuleType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
	}
	if !IsNil(o.GuaranteeCode) {
		toSerialize["guaranteeCode"] = o.GuaranteeCode
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.IgnoreDepositsYN) {
		toSerialize["ignoreDepositsYN"] = o.IgnoreDepositsYN
	}
	if !IsNil(o.MaxDaysToAuthorize) {
		toSerialize["maxDaysToAuthorize"] = o.MaxDaysToAuthorize
	}
	if !IsNil(o.Percentage) {
		toSerialize["percentage"] = o.Percentage
	}
	if !IsNil(o.RateCategory) {
		toSerialize["rateCategory"] = o.RateCategory
	}
	if !IsNil(o.RateCode) {
		toSerialize["rateCode"] = o.RateCode
	}
	if !IsNil(o.RoomClass) {
		toSerialize["roomClass"] = o.RoomClass
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.RuleDescription) {
		toSerialize["ruleDescription"] = o.RuleDescription
	}
	if !IsNil(o.RuleNo) {
		toSerialize["ruleNo"] = o.RuleNo
	}
	if !IsNil(o.SourceCode) {
		toSerialize["sourceCode"] = o.SourceCode
	}
	return toSerialize, nil
}

type NullableAuthorizationConfigRuleType struct {
	value *AuthorizationConfigRuleType
	isSet bool
}

func (v NullableAuthorizationConfigRuleType) Get() *AuthorizationConfigRuleType {
	return v.value
}

func (v *NullableAuthorizationConfigRuleType) Set(val *AuthorizationConfigRuleType) {
	v.value = val
	v.isSet = true
}

func (v NullableAuthorizationConfigRuleType) IsSet() bool {
	return v.isSet
}

func (v *NullableAuthorizationConfigRuleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAuthorizationConfigRuleType(val *AuthorizationConfigRuleType) *NullableAuthorizationConfigRuleType {
	return &NullableAuthorizationConfigRuleType{value: val, isSet: true}
}

func (v NullableAuthorizationConfigRuleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAuthorizationConfigRuleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

