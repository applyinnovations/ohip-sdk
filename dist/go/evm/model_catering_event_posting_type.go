/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the CateringEventPostingType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CateringEventPostingType{}

// CateringEventPostingType Pertain catering event's posting information.
type CateringEventPostingType struct {
	// An additional identifier for this resource on the folio.
	ChequeNumber *string `json:"chequeNumber,omitempty"`
	// Flag to determine if the posted revenue is Included. If not Included it is considered as Extra posted revenue.
	IncludedRevenue *bool `json:"includedRevenue,omitempty"`
	PostId *UniqueIDType `json:"postId,omitempty"`
	// Flag to determine if the revenue has been posted.
	Posted *bool `json:"posted,omitempty"`
	PostedRevenue *CurrencyAmountType `json:"postedRevenue,omitempty"`
	// Resource description for this posting.
	ResourceName *string `json:"resourceName,omitempty"`
	Revenue *CurrencyAmountType `json:"revenue,omitempty"`
	// The revenue type associated with the resource.
	RevenueType *string `json:"revenueType,omitempty"`
	// Transaction Code used for posting revenue.
	TransactionCode *string `json:"transactionCode,omitempty"`
}

// NewCateringEventPostingType instantiates a new CateringEventPostingType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCateringEventPostingType() *CateringEventPostingType {
	this := CateringEventPostingType{}
	return &this
}

// NewCateringEventPostingTypeWithDefaults instantiates a new CateringEventPostingType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCateringEventPostingTypeWithDefaults() *CateringEventPostingType {
	this := CateringEventPostingType{}
	return &this
}

// GetChequeNumber returns the ChequeNumber field value if set, zero value otherwise.
func (o *CateringEventPostingType) GetChequeNumber() string {
	if o == nil || IsNil(o.ChequeNumber) {
		var ret string
		return ret
	}
	return *o.ChequeNumber
}

// GetChequeNumberOk returns a tuple with the ChequeNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventPostingType) GetChequeNumberOk() (*string, bool) {
	if o == nil || IsNil(o.ChequeNumber) {
		return nil, false
	}
	return o.ChequeNumber, true
}

// HasChequeNumber returns a boolean if a field has been set.
func (o *CateringEventPostingType) HasChequeNumber() bool {
	if o != nil && !IsNil(o.ChequeNumber) {
		return true
	}

	return false
}

// SetChequeNumber gets a reference to the given string and assigns it to the ChequeNumber field.
func (o *CateringEventPostingType) SetChequeNumber(v string) {
	o.ChequeNumber = &v
}

// GetIncludedRevenue returns the IncludedRevenue field value if set, zero value otherwise.
func (o *CateringEventPostingType) GetIncludedRevenue() bool {
	if o == nil || IsNil(o.IncludedRevenue) {
		var ret bool
		return ret
	}
	return *o.IncludedRevenue
}

// GetIncludedRevenueOk returns a tuple with the IncludedRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventPostingType) GetIncludedRevenueOk() (*bool, bool) {
	if o == nil || IsNil(o.IncludedRevenue) {
		return nil, false
	}
	return o.IncludedRevenue, true
}

// HasIncludedRevenue returns a boolean if a field has been set.
func (o *CateringEventPostingType) HasIncludedRevenue() bool {
	if o != nil && !IsNil(o.IncludedRevenue) {
		return true
	}

	return false
}

// SetIncludedRevenue gets a reference to the given bool and assigns it to the IncludedRevenue field.
func (o *CateringEventPostingType) SetIncludedRevenue(v bool) {
	o.IncludedRevenue = &v
}

// GetPostId returns the PostId field value if set, zero value otherwise.
func (o *CateringEventPostingType) GetPostId() UniqueIDType {
	if o == nil || IsNil(o.PostId) {
		var ret UniqueIDType
		return ret
	}
	return *o.PostId
}

// GetPostIdOk returns a tuple with the PostId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventPostingType) GetPostIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.PostId) {
		return nil, false
	}
	return o.PostId, true
}

// HasPostId returns a boolean if a field has been set.
func (o *CateringEventPostingType) HasPostId() bool {
	if o != nil && !IsNil(o.PostId) {
		return true
	}

	return false
}

// SetPostId gets a reference to the given UniqueIDType and assigns it to the PostId field.
func (o *CateringEventPostingType) SetPostId(v UniqueIDType) {
	o.PostId = &v
}

// GetPosted returns the Posted field value if set, zero value otherwise.
func (o *CateringEventPostingType) GetPosted() bool {
	if o == nil || IsNil(o.Posted) {
		var ret bool
		return ret
	}
	return *o.Posted
}

// GetPostedOk returns a tuple with the Posted field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventPostingType) GetPostedOk() (*bool, bool) {
	if o == nil || IsNil(o.Posted) {
		return nil, false
	}
	return o.Posted, true
}

// HasPosted returns a boolean if a field has been set.
func (o *CateringEventPostingType) HasPosted() bool {
	if o != nil && !IsNil(o.Posted) {
		return true
	}

	return false
}

// SetPosted gets a reference to the given bool and assigns it to the Posted field.
func (o *CateringEventPostingType) SetPosted(v bool) {
	o.Posted = &v
}

// GetPostedRevenue returns the PostedRevenue field value if set, zero value otherwise.
func (o *CateringEventPostingType) GetPostedRevenue() CurrencyAmountType {
	if o == nil || IsNil(o.PostedRevenue) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.PostedRevenue
}

// GetPostedRevenueOk returns a tuple with the PostedRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventPostingType) GetPostedRevenueOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.PostedRevenue) {
		return nil, false
	}
	return o.PostedRevenue, true
}

// HasPostedRevenue returns a boolean if a field has been set.
func (o *CateringEventPostingType) HasPostedRevenue() bool {
	if o != nil && !IsNil(o.PostedRevenue) {
		return true
	}

	return false
}

// SetPostedRevenue gets a reference to the given CurrencyAmountType and assigns it to the PostedRevenue field.
func (o *CateringEventPostingType) SetPostedRevenue(v CurrencyAmountType) {
	o.PostedRevenue = &v
}

// GetResourceName returns the ResourceName field value if set, zero value otherwise.
func (o *CateringEventPostingType) GetResourceName() string {
	if o == nil || IsNil(o.ResourceName) {
		var ret string
		return ret
	}
	return *o.ResourceName
}

// GetResourceNameOk returns a tuple with the ResourceName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventPostingType) GetResourceNameOk() (*string, bool) {
	if o == nil || IsNil(o.ResourceName) {
		return nil, false
	}
	return o.ResourceName, true
}

// HasResourceName returns a boolean if a field has been set.
func (o *CateringEventPostingType) HasResourceName() bool {
	if o != nil && !IsNil(o.ResourceName) {
		return true
	}

	return false
}

// SetResourceName gets a reference to the given string and assigns it to the ResourceName field.
func (o *CateringEventPostingType) SetResourceName(v string) {
	o.ResourceName = &v
}

// GetRevenue returns the Revenue field value if set, zero value otherwise.
func (o *CateringEventPostingType) GetRevenue() CurrencyAmountType {
	if o == nil || IsNil(o.Revenue) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Revenue
}

// GetRevenueOk returns a tuple with the Revenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventPostingType) GetRevenueOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Revenue) {
		return nil, false
	}
	return o.Revenue, true
}

// HasRevenue returns a boolean if a field has been set.
func (o *CateringEventPostingType) HasRevenue() bool {
	if o != nil && !IsNil(o.Revenue) {
		return true
	}

	return false
}

// SetRevenue gets a reference to the given CurrencyAmountType and assigns it to the Revenue field.
func (o *CateringEventPostingType) SetRevenue(v CurrencyAmountType) {
	o.Revenue = &v
}

// GetRevenueType returns the RevenueType field value if set, zero value otherwise.
func (o *CateringEventPostingType) GetRevenueType() string {
	if o == nil || IsNil(o.RevenueType) {
		var ret string
		return ret
	}
	return *o.RevenueType
}

// GetRevenueTypeOk returns a tuple with the RevenueType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventPostingType) GetRevenueTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RevenueType) {
		return nil, false
	}
	return o.RevenueType, true
}

// HasRevenueType returns a boolean if a field has been set.
func (o *CateringEventPostingType) HasRevenueType() bool {
	if o != nil && !IsNil(o.RevenueType) {
		return true
	}

	return false
}

// SetRevenueType gets a reference to the given string and assigns it to the RevenueType field.
func (o *CateringEventPostingType) SetRevenueType(v string) {
	o.RevenueType = &v
}

// GetTransactionCode returns the TransactionCode field value if set, zero value otherwise.
func (o *CateringEventPostingType) GetTransactionCode() string {
	if o == nil || IsNil(o.TransactionCode) {
		var ret string
		return ret
	}
	return *o.TransactionCode
}

// GetTransactionCodeOk returns a tuple with the TransactionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventPostingType) GetTransactionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.TransactionCode) {
		return nil, false
	}
	return o.TransactionCode, true
}

// HasTransactionCode returns a boolean if a field has been set.
func (o *CateringEventPostingType) HasTransactionCode() bool {
	if o != nil && !IsNil(o.TransactionCode) {
		return true
	}

	return false
}

// SetTransactionCode gets a reference to the given string and assigns it to the TransactionCode field.
func (o *CateringEventPostingType) SetTransactionCode(v string) {
	o.TransactionCode = &v
}

func (o CateringEventPostingType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CateringEventPostingType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ChequeNumber) {
		toSerialize["chequeNumber"] = o.ChequeNumber
	}
	if !IsNil(o.IncludedRevenue) {
		toSerialize["includedRevenue"] = o.IncludedRevenue
	}
	if !IsNil(o.PostId) {
		toSerialize["postId"] = o.PostId
	}
	if !IsNil(o.Posted) {
		toSerialize["posted"] = o.Posted
	}
	if !IsNil(o.PostedRevenue) {
		toSerialize["postedRevenue"] = o.PostedRevenue
	}
	if !IsNil(o.ResourceName) {
		toSerialize["resourceName"] = o.ResourceName
	}
	if !IsNil(o.Revenue) {
		toSerialize["revenue"] = o.Revenue
	}
	if !IsNil(o.RevenueType) {
		toSerialize["revenueType"] = o.RevenueType
	}
	if !IsNil(o.TransactionCode) {
		toSerialize["transactionCode"] = o.TransactionCode
	}
	return toSerialize, nil
}

type NullableCateringEventPostingType struct {
	value *CateringEventPostingType
	isSet bool
}

func (v NullableCateringEventPostingType) Get() *CateringEventPostingType {
	return v.value
}

func (v *NullableCateringEventPostingType) Set(val *CateringEventPostingType) {
	v.value = val
	v.isSet = true
}

func (v NullableCateringEventPostingType) IsSet() bool {
	return v.isSet
}

func (v *NullableCateringEventPostingType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCateringEventPostingType(val *CateringEventPostingType) *NullableCateringEventPostingType {
	return &NullableCateringEventPostingType{value: val, isSet: true}
}

func (v NullableCateringEventPostingType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCateringEventPostingType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


