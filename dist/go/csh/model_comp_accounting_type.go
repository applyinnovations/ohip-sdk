/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the CompAccountingType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CompAccountingType{}

// CompAccountingType Authorizer Information
type CompAccountingType struct {
	// AR Account Number of the authorizer
	ARNumber *string `json:"aRNumber,omitempty"`
	AuthorizerId *UniqueIDType `json:"authorizerId,omitempty"`
	// Full name of the authorizer.
	AuthorizerName *string `json:"authorizerName,omitempty"`
	// Rate code of the authorizer.
	AuthorizerRateCode *string `json:"authorizerRateCode,omitempty"`
	// Application user name of the authorizer
	AuthorizerUserName *string `json:"authorizerUserName,omitempty"`
	// The Comp Type for this Account. Used when using the Comp types functionality
	CompTypeCode *string `json:"compTypeCode,omitempty"`
	// The coupon or voucher number used by the external gaming system to track postings made to this routing.
	CompVoucherNo *string `json:"compVoucherNo,omitempty"`
	DateRange *DateRangeType `json:"dateRange,omitempty"`
	// Indicates whether user has the choice to have reservation inherit rate code from the authorizer.
	InheritAuthorizerRateCode *bool `json:"inheritAuthorizerRateCode,omitempty"`
	// Membership number
	MembershipId *string `json:"membershipId,omitempty"`
	// Unique Id of membership
	MembershipIdNo *int32 `json:"membershipIdNo,omitempty"`
	// Name displayed on the membership card
	MembershipNameOnCard *string `json:"membershipNameOnCard,omitempty"`
}

// NewCompAccountingType instantiates a new CompAccountingType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCompAccountingType() *CompAccountingType {
	this := CompAccountingType{}
	return &this
}

// NewCompAccountingTypeWithDefaults instantiates a new CompAccountingType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCompAccountingTypeWithDefaults() *CompAccountingType {
	this := CompAccountingType{}
	return &this
}

// GetARNumber returns the ARNumber field value if set, zero value otherwise.
func (o *CompAccountingType) GetARNumber() string {
	if o == nil || IsNil(o.ARNumber) {
		var ret string
		return ret
	}
	return *o.ARNumber
}

// GetARNumberOk returns a tuple with the ARNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingType) GetARNumberOk() (*string, bool) {
	if o == nil || IsNil(o.ARNumber) {
		return nil, false
	}
	return o.ARNumber, true
}

// HasARNumber returns a boolean if a field has been set.
func (o *CompAccountingType) HasARNumber() bool {
	if o != nil && !IsNil(o.ARNumber) {
		return true
	}

	return false
}

// SetARNumber gets a reference to the given string and assigns it to the ARNumber field.
func (o *CompAccountingType) SetARNumber(v string) {
	o.ARNumber = &v
}

// GetAuthorizerId returns the AuthorizerId field value if set, zero value otherwise.
func (o *CompAccountingType) GetAuthorizerId() UniqueIDType {
	if o == nil || IsNil(o.AuthorizerId) {
		var ret UniqueIDType
		return ret
	}
	return *o.AuthorizerId
}

// GetAuthorizerIdOk returns a tuple with the AuthorizerId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingType) GetAuthorizerIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.AuthorizerId) {
		return nil, false
	}
	return o.AuthorizerId, true
}

// HasAuthorizerId returns a boolean if a field has been set.
func (o *CompAccountingType) HasAuthorizerId() bool {
	if o != nil && !IsNil(o.AuthorizerId) {
		return true
	}

	return false
}

// SetAuthorizerId gets a reference to the given UniqueIDType and assigns it to the AuthorizerId field.
func (o *CompAccountingType) SetAuthorizerId(v UniqueIDType) {
	o.AuthorizerId = &v
}

// GetAuthorizerName returns the AuthorizerName field value if set, zero value otherwise.
func (o *CompAccountingType) GetAuthorizerName() string {
	if o == nil || IsNil(o.AuthorizerName) {
		var ret string
		return ret
	}
	return *o.AuthorizerName
}

// GetAuthorizerNameOk returns a tuple with the AuthorizerName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingType) GetAuthorizerNameOk() (*string, bool) {
	if o == nil || IsNil(o.AuthorizerName) {
		return nil, false
	}
	return o.AuthorizerName, true
}

// HasAuthorizerName returns a boolean if a field has been set.
func (o *CompAccountingType) HasAuthorizerName() bool {
	if o != nil && !IsNil(o.AuthorizerName) {
		return true
	}

	return false
}

// SetAuthorizerName gets a reference to the given string and assigns it to the AuthorizerName field.
func (o *CompAccountingType) SetAuthorizerName(v string) {
	o.AuthorizerName = &v
}

// GetAuthorizerRateCode returns the AuthorizerRateCode field value if set, zero value otherwise.
func (o *CompAccountingType) GetAuthorizerRateCode() string {
	if o == nil || IsNil(o.AuthorizerRateCode) {
		var ret string
		return ret
	}
	return *o.AuthorizerRateCode
}

// GetAuthorizerRateCodeOk returns a tuple with the AuthorizerRateCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingType) GetAuthorizerRateCodeOk() (*string, bool) {
	if o == nil || IsNil(o.AuthorizerRateCode) {
		return nil, false
	}
	return o.AuthorizerRateCode, true
}

// HasAuthorizerRateCode returns a boolean if a field has been set.
func (o *CompAccountingType) HasAuthorizerRateCode() bool {
	if o != nil && !IsNil(o.AuthorizerRateCode) {
		return true
	}

	return false
}

// SetAuthorizerRateCode gets a reference to the given string and assigns it to the AuthorizerRateCode field.
func (o *CompAccountingType) SetAuthorizerRateCode(v string) {
	o.AuthorizerRateCode = &v
}

// GetAuthorizerUserName returns the AuthorizerUserName field value if set, zero value otherwise.
func (o *CompAccountingType) GetAuthorizerUserName() string {
	if o == nil || IsNil(o.AuthorizerUserName) {
		var ret string
		return ret
	}
	return *o.AuthorizerUserName
}

// GetAuthorizerUserNameOk returns a tuple with the AuthorizerUserName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingType) GetAuthorizerUserNameOk() (*string, bool) {
	if o == nil || IsNil(o.AuthorizerUserName) {
		return nil, false
	}
	return o.AuthorizerUserName, true
}

// HasAuthorizerUserName returns a boolean if a field has been set.
func (o *CompAccountingType) HasAuthorizerUserName() bool {
	if o != nil && !IsNil(o.AuthorizerUserName) {
		return true
	}

	return false
}

// SetAuthorizerUserName gets a reference to the given string and assigns it to the AuthorizerUserName field.
func (o *CompAccountingType) SetAuthorizerUserName(v string) {
	o.AuthorizerUserName = &v
}

// GetCompTypeCode returns the CompTypeCode field value if set, zero value otherwise.
func (o *CompAccountingType) GetCompTypeCode() string {
	if o == nil || IsNil(o.CompTypeCode) {
		var ret string
		return ret
	}
	return *o.CompTypeCode
}

// GetCompTypeCodeOk returns a tuple with the CompTypeCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingType) GetCompTypeCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CompTypeCode) {
		return nil, false
	}
	return o.CompTypeCode, true
}

// HasCompTypeCode returns a boolean if a field has been set.
func (o *CompAccountingType) HasCompTypeCode() bool {
	if o != nil && !IsNil(o.CompTypeCode) {
		return true
	}

	return false
}

// SetCompTypeCode gets a reference to the given string and assigns it to the CompTypeCode field.
func (o *CompAccountingType) SetCompTypeCode(v string) {
	o.CompTypeCode = &v
}

// GetCompVoucherNo returns the CompVoucherNo field value if set, zero value otherwise.
func (o *CompAccountingType) GetCompVoucherNo() string {
	if o == nil || IsNil(o.CompVoucherNo) {
		var ret string
		return ret
	}
	return *o.CompVoucherNo
}

// GetCompVoucherNoOk returns a tuple with the CompVoucherNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingType) GetCompVoucherNoOk() (*string, bool) {
	if o == nil || IsNil(o.CompVoucherNo) {
		return nil, false
	}
	return o.CompVoucherNo, true
}

// HasCompVoucherNo returns a boolean if a field has been set.
func (o *CompAccountingType) HasCompVoucherNo() bool {
	if o != nil && !IsNil(o.CompVoucherNo) {
		return true
	}

	return false
}

// SetCompVoucherNo gets a reference to the given string and assigns it to the CompVoucherNo field.
func (o *CompAccountingType) SetCompVoucherNo(v string) {
	o.CompVoucherNo = &v
}

// GetDateRange returns the DateRange field value if set, zero value otherwise.
func (o *CompAccountingType) GetDateRange() DateRangeType {
	if o == nil || IsNil(o.DateRange) {
		var ret DateRangeType
		return ret
	}
	return *o.DateRange
}

// GetDateRangeOk returns a tuple with the DateRange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingType) GetDateRangeOk() (*DateRangeType, bool) {
	if o == nil || IsNil(o.DateRange) {
		return nil, false
	}
	return o.DateRange, true
}

// HasDateRange returns a boolean if a field has been set.
func (o *CompAccountingType) HasDateRange() bool {
	if o != nil && !IsNil(o.DateRange) {
		return true
	}

	return false
}

// SetDateRange gets a reference to the given DateRangeType and assigns it to the DateRange field.
func (o *CompAccountingType) SetDateRange(v DateRangeType) {
	o.DateRange = &v
}

// GetInheritAuthorizerRateCode returns the InheritAuthorizerRateCode field value if set, zero value otherwise.
func (o *CompAccountingType) GetInheritAuthorizerRateCode() bool {
	if o == nil || IsNil(o.InheritAuthorizerRateCode) {
		var ret bool
		return ret
	}
	return *o.InheritAuthorizerRateCode
}

// GetInheritAuthorizerRateCodeOk returns a tuple with the InheritAuthorizerRateCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingType) GetInheritAuthorizerRateCodeOk() (*bool, bool) {
	if o == nil || IsNil(o.InheritAuthorizerRateCode) {
		return nil, false
	}
	return o.InheritAuthorizerRateCode, true
}

// HasInheritAuthorizerRateCode returns a boolean if a field has been set.
func (o *CompAccountingType) HasInheritAuthorizerRateCode() bool {
	if o != nil && !IsNil(o.InheritAuthorizerRateCode) {
		return true
	}

	return false
}

// SetInheritAuthorizerRateCode gets a reference to the given bool and assigns it to the InheritAuthorizerRateCode field.
func (o *CompAccountingType) SetInheritAuthorizerRateCode(v bool) {
	o.InheritAuthorizerRateCode = &v
}

// GetMembershipId returns the MembershipId field value if set, zero value otherwise.
func (o *CompAccountingType) GetMembershipId() string {
	if o == nil || IsNil(o.MembershipId) {
		var ret string
		return ret
	}
	return *o.MembershipId
}

// GetMembershipIdOk returns a tuple with the MembershipId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingType) GetMembershipIdOk() (*string, bool) {
	if o == nil || IsNil(o.MembershipId) {
		return nil, false
	}
	return o.MembershipId, true
}

// HasMembershipId returns a boolean if a field has been set.
func (o *CompAccountingType) HasMembershipId() bool {
	if o != nil && !IsNil(o.MembershipId) {
		return true
	}

	return false
}

// SetMembershipId gets a reference to the given string and assigns it to the MembershipId field.
func (o *CompAccountingType) SetMembershipId(v string) {
	o.MembershipId = &v
}

// GetMembershipIdNo returns the MembershipIdNo field value if set, zero value otherwise.
func (o *CompAccountingType) GetMembershipIdNo() int32 {
	if o == nil || IsNil(o.MembershipIdNo) {
		var ret int32
		return ret
	}
	return *o.MembershipIdNo
}

// GetMembershipIdNoOk returns a tuple with the MembershipIdNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingType) GetMembershipIdNoOk() (*int32, bool) {
	if o == nil || IsNil(o.MembershipIdNo) {
		return nil, false
	}
	return o.MembershipIdNo, true
}

// HasMembershipIdNo returns a boolean if a field has been set.
func (o *CompAccountingType) HasMembershipIdNo() bool {
	if o != nil && !IsNil(o.MembershipIdNo) {
		return true
	}

	return false
}

// SetMembershipIdNo gets a reference to the given int32 and assigns it to the MembershipIdNo field.
func (o *CompAccountingType) SetMembershipIdNo(v int32) {
	o.MembershipIdNo = &v
}

// GetMembershipNameOnCard returns the MembershipNameOnCard field value if set, zero value otherwise.
func (o *CompAccountingType) GetMembershipNameOnCard() string {
	if o == nil || IsNil(o.MembershipNameOnCard) {
		var ret string
		return ret
	}
	return *o.MembershipNameOnCard
}

// GetMembershipNameOnCardOk returns a tuple with the MembershipNameOnCard field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingType) GetMembershipNameOnCardOk() (*string, bool) {
	if o == nil || IsNil(o.MembershipNameOnCard) {
		return nil, false
	}
	return o.MembershipNameOnCard, true
}

// HasMembershipNameOnCard returns a boolean if a field has been set.
func (o *CompAccountingType) HasMembershipNameOnCard() bool {
	if o != nil && !IsNil(o.MembershipNameOnCard) {
		return true
	}

	return false
}

// SetMembershipNameOnCard gets a reference to the given string and assigns it to the MembershipNameOnCard field.
func (o *CompAccountingType) SetMembershipNameOnCard(v string) {
	o.MembershipNameOnCard = &v
}

func (o CompAccountingType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CompAccountingType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ARNumber) {
		toSerialize["aRNumber"] = o.ARNumber
	}
	if !IsNil(o.AuthorizerId) {
		toSerialize["authorizerId"] = o.AuthorizerId
	}
	if !IsNil(o.AuthorizerName) {
		toSerialize["authorizerName"] = o.AuthorizerName
	}
	if !IsNil(o.AuthorizerRateCode) {
		toSerialize["authorizerRateCode"] = o.AuthorizerRateCode
	}
	if !IsNil(o.AuthorizerUserName) {
		toSerialize["authorizerUserName"] = o.AuthorizerUserName
	}
	if !IsNil(o.CompTypeCode) {
		toSerialize["compTypeCode"] = o.CompTypeCode
	}
	if !IsNil(o.CompVoucherNo) {
		toSerialize["compVoucherNo"] = o.CompVoucherNo
	}
	if !IsNil(o.DateRange) {
		toSerialize["dateRange"] = o.DateRange
	}
	if !IsNil(o.InheritAuthorizerRateCode) {
		toSerialize["inheritAuthorizerRateCode"] = o.InheritAuthorizerRateCode
	}
	if !IsNil(o.MembershipId) {
		toSerialize["membershipId"] = o.MembershipId
	}
	if !IsNil(o.MembershipIdNo) {
		toSerialize["membershipIdNo"] = o.MembershipIdNo
	}
	if !IsNil(o.MembershipNameOnCard) {
		toSerialize["membershipNameOnCard"] = o.MembershipNameOnCard
	}
	return toSerialize, nil
}

type NullableCompAccountingType struct {
	value *CompAccountingType
	isSet bool
}

func (v NullableCompAccountingType) Get() *CompAccountingType {
	return v.value
}

func (v *NullableCompAccountingType) Set(val *CompAccountingType) {
	v.value = val
	v.isSet = true
}

func (v NullableCompAccountingType) IsSet() bool {
	return v.isSet
}

func (v *NullableCompAccountingType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCompAccountingType(val *CompAccountingType) *NullableCompAccountingType {
	return &NullableCompAccountingType{value: val, isSet: true}
}

func (v NullableCompAccountingType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCompAccountingType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


