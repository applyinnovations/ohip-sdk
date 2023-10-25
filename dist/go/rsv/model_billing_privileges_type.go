/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the BillingPrivilegesType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BillingPrivilegesType{}

// BillingPrivilegesType This stores the information for Bed Tax Reporting. Mainly used in Maldives.
type BillingPrivilegesType struct {
	// Indicated if a new reservation should be created and automatically checked in whenever the room is checked out. Available for pseudo room types only.
	AllowAutoCheckin *bool `json:"allowAutoCheckin,omitempty"`
	// Indicates if the is a candidate for auto folio settlement.
	AutoSettlement *bool `json:"autoSettlement,omitempty"`
	// The interval of days between each auto folio settlement.
	AutoSettlementFreq *int32 `json:"autoSettlementFreq,omitempty"`
	// The folio settlement type for auto folio settlement.
	AutoSettlementType *string `json:"autoSettlementType,omitempty"`
	// Indicates if the reservation will be included in the Automatic Credit Limit Overages process and also be listed in the Credit Limit Overages screen results.
	CreditLimitAutoPay *bool `json:"creditLimitAutoPay,omitempty"`
	// Indicates if the reservation has charging privileges after checkout.
	PostStayCharging *bool `json:"postStayCharging,omitempty"`
	// Flag used by interface program during check in.
	PostingRestriction *bool `json:"postingRestriction,omitempty"`
	// Indicates if the reservation has charging privileges before arrival.
	PreStayCharging *bool `json:"preStayCharging,omitempty"`
	// Indicates if the guest can do video checkout
	VideoCheckout *bool `json:"videoCheckout,omitempty"`
}

// NewBillingPrivilegesType instantiates a new BillingPrivilegesType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBillingPrivilegesType() *BillingPrivilegesType {
	this := BillingPrivilegesType{}
	return &this
}

// NewBillingPrivilegesTypeWithDefaults instantiates a new BillingPrivilegesType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBillingPrivilegesTypeWithDefaults() *BillingPrivilegesType {
	this := BillingPrivilegesType{}
	return &this
}

// GetAllowAutoCheckin returns the AllowAutoCheckin field value if set, zero value otherwise.
func (o *BillingPrivilegesType) GetAllowAutoCheckin() bool {
	if o == nil || IsNil(o.AllowAutoCheckin) {
		var ret bool
		return ret
	}
	return *o.AllowAutoCheckin
}

// GetAllowAutoCheckinOk returns a tuple with the AllowAutoCheckin field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BillingPrivilegesType) GetAllowAutoCheckinOk() (*bool, bool) {
	if o == nil || IsNil(o.AllowAutoCheckin) {
		return nil, false
	}
	return o.AllowAutoCheckin, true
}

// HasAllowAutoCheckin returns a boolean if a field has been set.
func (o *BillingPrivilegesType) HasAllowAutoCheckin() bool {
	if o != nil && !IsNil(o.AllowAutoCheckin) {
		return true
	}

	return false
}

// SetAllowAutoCheckin gets a reference to the given bool and assigns it to the AllowAutoCheckin field.
func (o *BillingPrivilegesType) SetAllowAutoCheckin(v bool) {
	o.AllowAutoCheckin = &v
}

// GetAutoSettlement returns the AutoSettlement field value if set, zero value otherwise.
func (o *BillingPrivilegesType) GetAutoSettlement() bool {
	if o == nil || IsNil(o.AutoSettlement) {
		var ret bool
		return ret
	}
	return *o.AutoSettlement
}

// GetAutoSettlementOk returns a tuple with the AutoSettlement field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BillingPrivilegesType) GetAutoSettlementOk() (*bool, bool) {
	if o == nil || IsNil(o.AutoSettlement) {
		return nil, false
	}
	return o.AutoSettlement, true
}

// HasAutoSettlement returns a boolean if a field has been set.
func (o *BillingPrivilegesType) HasAutoSettlement() bool {
	if o != nil && !IsNil(o.AutoSettlement) {
		return true
	}

	return false
}

// SetAutoSettlement gets a reference to the given bool and assigns it to the AutoSettlement field.
func (o *BillingPrivilegesType) SetAutoSettlement(v bool) {
	o.AutoSettlement = &v
}

// GetAutoSettlementFreq returns the AutoSettlementFreq field value if set, zero value otherwise.
func (o *BillingPrivilegesType) GetAutoSettlementFreq() int32 {
	if o == nil || IsNil(o.AutoSettlementFreq) {
		var ret int32
		return ret
	}
	return *o.AutoSettlementFreq
}

// GetAutoSettlementFreqOk returns a tuple with the AutoSettlementFreq field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BillingPrivilegesType) GetAutoSettlementFreqOk() (*int32, bool) {
	if o == nil || IsNil(o.AutoSettlementFreq) {
		return nil, false
	}
	return o.AutoSettlementFreq, true
}

// HasAutoSettlementFreq returns a boolean if a field has been set.
func (o *BillingPrivilegesType) HasAutoSettlementFreq() bool {
	if o != nil && !IsNil(o.AutoSettlementFreq) {
		return true
	}

	return false
}

// SetAutoSettlementFreq gets a reference to the given int32 and assigns it to the AutoSettlementFreq field.
func (o *BillingPrivilegesType) SetAutoSettlementFreq(v int32) {
	o.AutoSettlementFreq = &v
}

// GetAutoSettlementType returns the AutoSettlementType field value if set, zero value otherwise.
func (o *BillingPrivilegesType) GetAutoSettlementType() string {
	if o == nil || IsNil(o.AutoSettlementType) {
		var ret string
		return ret
	}
	return *o.AutoSettlementType
}

// GetAutoSettlementTypeOk returns a tuple with the AutoSettlementType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BillingPrivilegesType) GetAutoSettlementTypeOk() (*string, bool) {
	if o == nil || IsNil(o.AutoSettlementType) {
		return nil, false
	}
	return o.AutoSettlementType, true
}

// HasAutoSettlementType returns a boolean if a field has been set.
func (o *BillingPrivilegesType) HasAutoSettlementType() bool {
	if o != nil && !IsNil(o.AutoSettlementType) {
		return true
	}

	return false
}

// SetAutoSettlementType gets a reference to the given string and assigns it to the AutoSettlementType field.
func (o *BillingPrivilegesType) SetAutoSettlementType(v string) {
	o.AutoSettlementType = &v
}

// GetCreditLimitAutoPay returns the CreditLimitAutoPay field value if set, zero value otherwise.
func (o *BillingPrivilegesType) GetCreditLimitAutoPay() bool {
	if o == nil || IsNil(o.CreditLimitAutoPay) {
		var ret bool
		return ret
	}
	return *o.CreditLimitAutoPay
}

// GetCreditLimitAutoPayOk returns a tuple with the CreditLimitAutoPay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BillingPrivilegesType) GetCreditLimitAutoPayOk() (*bool, bool) {
	if o == nil || IsNil(o.CreditLimitAutoPay) {
		return nil, false
	}
	return o.CreditLimitAutoPay, true
}

// HasCreditLimitAutoPay returns a boolean if a field has been set.
func (o *BillingPrivilegesType) HasCreditLimitAutoPay() bool {
	if o != nil && !IsNil(o.CreditLimitAutoPay) {
		return true
	}

	return false
}

// SetCreditLimitAutoPay gets a reference to the given bool and assigns it to the CreditLimitAutoPay field.
func (o *BillingPrivilegesType) SetCreditLimitAutoPay(v bool) {
	o.CreditLimitAutoPay = &v
}

// GetPostStayCharging returns the PostStayCharging field value if set, zero value otherwise.
func (o *BillingPrivilegesType) GetPostStayCharging() bool {
	if o == nil || IsNil(o.PostStayCharging) {
		var ret bool
		return ret
	}
	return *o.PostStayCharging
}

// GetPostStayChargingOk returns a tuple with the PostStayCharging field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BillingPrivilegesType) GetPostStayChargingOk() (*bool, bool) {
	if o == nil || IsNil(o.PostStayCharging) {
		return nil, false
	}
	return o.PostStayCharging, true
}

// HasPostStayCharging returns a boolean if a field has been set.
func (o *BillingPrivilegesType) HasPostStayCharging() bool {
	if o != nil && !IsNil(o.PostStayCharging) {
		return true
	}

	return false
}

// SetPostStayCharging gets a reference to the given bool and assigns it to the PostStayCharging field.
func (o *BillingPrivilegesType) SetPostStayCharging(v bool) {
	o.PostStayCharging = &v
}

// GetPostingRestriction returns the PostingRestriction field value if set, zero value otherwise.
func (o *BillingPrivilegesType) GetPostingRestriction() bool {
	if o == nil || IsNil(o.PostingRestriction) {
		var ret bool
		return ret
	}
	return *o.PostingRestriction
}

// GetPostingRestrictionOk returns a tuple with the PostingRestriction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BillingPrivilegesType) GetPostingRestrictionOk() (*bool, bool) {
	if o == nil || IsNil(o.PostingRestriction) {
		return nil, false
	}
	return o.PostingRestriction, true
}

// HasPostingRestriction returns a boolean if a field has been set.
func (o *BillingPrivilegesType) HasPostingRestriction() bool {
	if o != nil && !IsNil(o.PostingRestriction) {
		return true
	}

	return false
}

// SetPostingRestriction gets a reference to the given bool and assigns it to the PostingRestriction field.
func (o *BillingPrivilegesType) SetPostingRestriction(v bool) {
	o.PostingRestriction = &v
}

// GetPreStayCharging returns the PreStayCharging field value if set, zero value otherwise.
func (o *BillingPrivilegesType) GetPreStayCharging() bool {
	if o == nil || IsNil(o.PreStayCharging) {
		var ret bool
		return ret
	}
	return *o.PreStayCharging
}

// GetPreStayChargingOk returns a tuple with the PreStayCharging field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BillingPrivilegesType) GetPreStayChargingOk() (*bool, bool) {
	if o == nil || IsNil(o.PreStayCharging) {
		return nil, false
	}
	return o.PreStayCharging, true
}

// HasPreStayCharging returns a boolean if a field has been set.
func (o *BillingPrivilegesType) HasPreStayCharging() bool {
	if o != nil && !IsNil(o.PreStayCharging) {
		return true
	}

	return false
}

// SetPreStayCharging gets a reference to the given bool and assigns it to the PreStayCharging field.
func (o *BillingPrivilegesType) SetPreStayCharging(v bool) {
	o.PreStayCharging = &v
}

// GetVideoCheckout returns the VideoCheckout field value if set, zero value otherwise.
func (o *BillingPrivilegesType) GetVideoCheckout() bool {
	if o == nil || IsNil(o.VideoCheckout) {
		var ret bool
		return ret
	}
	return *o.VideoCheckout
}

// GetVideoCheckoutOk returns a tuple with the VideoCheckout field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BillingPrivilegesType) GetVideoCheckoutOk() (*bool, bool) {
	if o == nil || IsNil(o.VideoCheckout) {
		return nil, false
	}
	return o.VideoCheckout, true
}

// HasVideoCheckout returns a boolean if a field has been set.
func (o *BillingPrivilegesType) HasVideoCheckout() bool {
	if o != nil && !IsNil(o.VideoCheckout) {
		return true
	}

	return false
}

// SetVideoCheckout gets a reference to the given bool and assigns it to the VideoCheckout field.
func (o *BillingPrivilegesType) SetVideoCheckout(v bool) {
	o.VideoCheckout = &v
}

func (o BillingPrivilegesType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BillingPrivilegesType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AllowAutoCheckin) {
		toSerialize["allowAutoCheckin"] = o.AllowAutoCheckin
	}
	if !IsNil(o.AutoSettlement) {
		toSerialize["autoSettlement"] = o.AutoSettlement
	}
	if !IsNil(o.AutoSettlementFreq) {
		toSerialize["autoSettlementFreq"] = o.AutoSettlementFreq
	}
	if !IsNil(o.AutoSettlementType) {
		toSerialize["autoSettlementType"] = o.AutoSettlementType
	}
	if !IsNil(o.CreditLimitAutoPay) {
		toSerialize["creditLimitAutoPay"] = o.CreditLimitAutoPay
	}
	if !IsNil(o.PostStayCharging) {
		toSerialize["postStayCharging"] = o.PostStayCharging
	}
	if !IsNil(o.PostingRestriction) {
		toSerialize["postingRestriction"] = o.PostingRestriction
	}
	if !IsNil(o.PreStayCharging) {
		toSerialize["preStayCharging"] = o.PreStayCharging
	}
	if !IsNil(o.VideoCheckout) {
		toSerialize["videoCheckout"] = o.VideoCheckout
	}
	return toSerialize, nil
}

type NullableBillingPrivilegesType struct {
	value *BillingPrivilegesType
	isSet bool
}

func (v NullableBillingPrivilegesType) Get() *BillingPrivilegesType {
	return v.value
}

func (v *NullableBillingPrivilegesType) Set(val *BillingPrivilegesType) {
	v.value = val
	v.isSet = true
}

func (v NullableBillingPrivilegesType) IsSet() bool {
	return v.isSet
}

func (v *NullableBillingPrivilegesType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBillingPrivilegesType(val *BillingPrivilegesType) *NullableBillingPrivilegesType {
	return &NullableBillingPrivilegesType{value: val, isSet: true}
}

func (v NullableBillingPrivilegesType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBillingPrivilegesType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


