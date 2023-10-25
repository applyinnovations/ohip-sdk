/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the MembershipTransactionRevenueType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipTransactionRevenueType{}

// MembershipTransactionRevenueType Information related to a membership transactions Revenue.
type MembershipTransactionRevenueType struct {
	CentralRevenue *CurrencyAmountType `json:"centralRevenue,omitempty"`
	// Indicates the Date when the revenue was recognized.
	Date *string `json:"date,omitempty"`
	PMSRevenue *CurrencyAmountType `json:"pMSRevenue,omitempty"`
	// Indicates if the stay is qualified for points calculation.
	Qualified *bool `json:"qualified,omitempty"`
	// Indicates the Revenue type associated to Revenue.
	RevenueType *string `json:"revenueType,omitempty"`
}

// NewMembershipTransactionRevenueType instantiates a new MembershipTransactionRevenueType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipTransactionRevenueType() *MembershipTransactionRevenueType {
	this := MembershipTransactionRevenueType{}
	return &this
}

// NewMembershipTransactionRevenueTypeWithDefaults instantiates a new MembershipTransactionRevenueType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipTransactionRevenueTypeWithDefaults() *MembershipTransactionRevenueType {
	this := MembershipTransactionRevenueType{}
	return &this
}

// GetCentralRevenue returns the CentralRevenue field value if set, zero value otherwise.
func (o *MembershipTransactionRevenueType) GetCentralRevenue() CurrencyAmountType {
	if o == nil || IsNil(o.CentralRevenue) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.CentralRevenue
}

// GetCentralRevenueOk returns a tuple with the CentralRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionRevenueType) GetCentralRevenueOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.CentralRevenue) {
		return nil, false
	}
	return o.CentralRevenue, true
}

// HasCentralRevenue returns a boolean if a field has been set.
func (o *MembershipTransactionRevenueType) HasCentralRevenue() bool {
	if o != nil && !IsNil(o.CentralRevenue) {
		return true
	}

	return false
}

// SetCentralRevenue gets a reference to the given CurrencyAmountType and assigns it to the CentralRevenue field.
func (o *MembershipTransactionRevenueType) SetCentralRevenue(v CurrencyAmountType) {
	o.CentralRevenue = &v
}

// GetDate returns the Date field value if set, zero value otherwise.
func (o *MembershipTransactionRevenueType) GetDate() string {
	if o == nil || IsNil(o.Date) {
		var ret string
		return ret
	}
	return *o.Date
}

// GetDateOk returns a tuple with the Date field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionRevenueType) GetDateOk() (*string, bool) {
	if o == nil || IsNil(o.Date) {
		return nil, false
	}
	return o.Date, true
}

// HasDate returns a boolean if a field has been set.
func (o *MembershipTransactionRevenueType) HasDate() bool {
	if o != nil && !IsNil(o.Date) {
		return true
	}

	return false
}

// SetDate gets a reference to the given string and assigns it to the Date field.
func (o *MembershipTransactionRevenueType) SetDate(v string) {
	o.Date = &v
}

// GetPMSRevenue returns the PMSRevenue field value if set, zero value otherwise.
func (o *MembershipTransactionRevenueType) GetPMSRevenue() CurrencyAmountType {
	if o == nil || IsNil(o.PMSRevenue) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.PMSRevenue
}

// GetPMSRevenueOk returns a tuple with the PMSRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionRevenueType) GetPMSRevenueOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.PMSRevenue) {
		return nil, false
	}
	return o.PMSRevenue, true
}

// HasPMSRevenue returns a boolean if a field has been set.
func (o *MembershipTransactionRevenueType) HasPMSRevenue() bool {
	if o != nil && !IsNil(o.PMSRevenue) {
		return true
	}

	return false
}

// SetPMSRevenue gets a reference to the given CurrencyAmountType and assigns it to the PMSRevenue field.
func (o *MembershipTransactionRevenueType) SetPMSRevenue(v CurrencyAmountType) {
	o.PMSRevenue = &v
}

// GetQualified returns the Qualified field value if set, zero value otherwise.
func (o *MembershipTransactionRevenueType) GetQualified() bool {
	if o == nil || IsNil(o.Qualified) {
		var ret bool
		return ret
	}
	return *o.Qualified
}

// GetQualifiedOk returns a tuple with the Qualified field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionRevenueType) GetQualifiedOk() (*bool, bool) {
	if o == nil || IsNil(o.Qualified) {
		return nil, false
	}
	return o.Qualified, true
}

// HasQualified returns a boolean if a field has been set.
func (o *MembershipTransactionRevenueType) HasQualified() bool {
	if o != nil && !IsNil(o.Qualified) {
		return true
	}

	return false
}

// SetQualified gets a reference to the given bool and assigns it to the Qualified field.
func (o *MembershipTransactionRevenueType) SetQualified(v bool) {
	o.Qualified = &v
}

// GetRevenueType returns the RevenueType field value if set, zero value otherwise.
func (o *MembershipTransactionRevenueType) GetRevenueType() string {
	if o == nil || IsNil(o.RevenueType) {
		var ret string
		return ret
	}
	return *o.RevenueType
}

// GetRevenueTypeOk returns a tuple with the RevenueType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTransactionRevenueType) GetRevenueTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RevenueType) {
		return nil, false
	}
	return o.RevenueType, true
}

// HasRevenueType returns a boolean if a field has been set.
func (o *MembershipTransactionRevenueType) HasRevenueType() bool {
	if o != nil && !IsNil(o.RevenueType) {
		return true
	}

	return false
}

// SetRevenueType gets a reference to the given string and assigns it to the RevenueType field.
func (o *MembershipTransactionRevenueType) SetRevenueType(v string) {
	o.RevenueType = &v
}

func (o MembershipTransactionRevenueType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipTransactionRevenueType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CentralRevenue) {
		toSerialize["centralRevenue"] = o.CentralRevenue
	}
	if !IsNil(o.Date) {
		toSerialize["date"] = o.Date
	}
	if !IsNil(o.PMSRevenue) {
		toSerialize["pMSRevenue"] = o.PMSRevenue
	}
	if !IsNil(o.Qualified) {
		toSerialize["qualified"] = o.Qualified
	}
	if !IsNil(o.RevenueType) {
		toSerialize["revenueType"] = o.RevenueType
	}
	return toSerialize, nil
}

type NullableMembershipTransactionRevenueType struct {
	value *MembershipTransactionRevenueType
	isSet bool
}

func (v NullableMembershipTransactionRevenueType) Get() *MembershipTransactionRevenueType {
	return v.value
}

func (v *NullableMembershipTransactionRevenueType) Set(val *MembershipTransactionRevenueType) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipTransactionRevenueType) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipTransactionRevenueType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipTransactionRevenueType(val *MembershipTransactionRevenueType) *NullableMembershipTransactionRevenueType {
	return &NullableMembershipTransactionRevenueType{value: val, isSet: true}
}

func (v NullableMembershipTransactionRevenueType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipTransactionRevenueType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


