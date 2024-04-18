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

// checks if the TrxCodeClassificationType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TrxCodeClassificationType{}

// TrxCodeClassificationType Transaction Code Classification details.
type TrxCodeClassificationType struct {
	// Transaction code type for fiscal printing purposes.
	FiscalTransactionType *string `json:"fiscalTransactionType,omitempty"`
	Group *CodeDescriptionType `json:"group,omitempty"`
	Subgroup *CodeDescriptionType `json:"subgroup,omitempty"`
	TransactionType *TrxCodeClassificationTypeTransactionType `json:"transactionType,omitempty"`
	Type *CashieringTransactionTypeType `json:"type,omitempty"`
}

// NewTrxCodeClassificationType instantiates a new TrxCodeClassificationType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTrxCodeClassificationType() *TrxCodeClassificationType {
	this := TrxCodeClassificationType{}
	return &this
}

// NewTrxCodeClassificationTypeWithDefaults instantiates a new TrxCodeClassificationType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTrxCodeClassificationTypeWithDefaults() *TrxCodeClassificationType {
	this := TrxCodeClassificationType{}
	return &this
}

// GetFiscalTransactionType returns the FiscalTransactionType field value if set, zero value otherwise.
func (o *TrxCodeClassificationType) GetFiscalTransactionType() string {
	if o == nil || IsNil(o.FiscalTransactionType) {
		var ret string
		return ret
	}
	return *o.FiscalTransactionType
}

// GetFiscalTransactionTypeOk returns a tuple with the FiscalTransactionType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxCodeClassificationType) GetFiscalTransactionTypeOk() (*string, bool) {
	if o == nil || IsNil(o.FiscalTransactionType) {
		return nil, false
	}
	return o.FiscalTransactionType, true
}

// HasFiscalTransactionType returns a boolean if a field has been set.
func (o *TrxCodeClassificationType) HasFiscalTransactionType() bool {
	if o != nil && !IsNil(o.FiscalTransactionType) {
		return true
	}

	return false
}

// SetFiscalTransactionType gets a reference to the given string and assigns it to the FiscalTransactionType field.
func (o *TrxCodeClassificationType) SetFiscalTransactionType(v string) {
	o.FiscalTransactionType = &v
}

// GetGroup returns the Group field value if set, zero value otherwise.
func (o *TrxCodeClassificationType) GetGroup() CodeDescriptionType {
	if o == nil || IsNil(o.Group) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.Group
}

// GetGroupOk returns a tuple with the Group field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxCodeClassificationType) GetGroupOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.Group) {
		return nil, false
	}
	return o.Group, true
}

// HasGroup returns a boolean if a field has been set.
func (o *TrxCodeClassificationType) HasGroup() bool {
	if o != nil && !IsNil(o.Group) {
		return true
	}

	return false
}

// SetGroup gets a reference to the given CodeDescriptionType and assigns it to the Group field.
func (o *TrxCodeClassificationType) SetGroup(v CodeDescriptionType) {
	o.Group = &v
}

// GetSubgroup returns the Subgroup field value if set, zero value otherwise.
func (o *TrxCodeClassificationType) GetSubgroup() CodeDescriptionType {
	if o == nil || IsNil(o.Subgroup) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.Subgroup
}

// GetSubgroupOk returns a tuple with the Subgroup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxCodeClassificationType) GetSubgroupOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.Subgroup) {
		return nil, false
	}
	return o.Subgroup, true
}

// HasSubgroup returns a boolean if a field has been set.
func (o *TrxCodeClassificationType) HasSubgroup() bool {
	if o != nil && !IsNil(o.Subgroup) {
		return true
	}

	return false
}

// SetSubgroup gets a reference to the given CodeDescriptionType and assigns it to the Subgroup field.
func (o *TrxCodeClassificationType) SetSubgroup(v CodeDescriptionType) {
	o.Subgroup = &v
}

// GetTransactionType returns the TransactionType field value if set, zero value otherwise.
func (o *TrxCodeClassificationType) GetTransactionType() TrxCodeClassificationTypeTransactionType {
	if o == nil || IsNil(o.TransactionType) {
		var ret TrxCodeClassificationTypeTransactionType
		return ret
	}
	return *o.TransactionType
}

// GetTransactionTypeOk returns a tuple with the TransactionType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxCodeClassificationType) GetTransactionTypeOk() (*TrxCodeClassificationTypeTransactionType, bool) {
	if o == nil || IsNil(o.TransactionType) {
		return nil, false
	}
	return o.TransactionType, true
}

// HasTransactionType returns a boolean if a field has been set.
func (o *TrxCodeClassificationType) HasTransactionType() bool {
	if o != nil && !IsNil(o.TransactionType) {
		return true
	}

	return false
}

// SetTransactionType gets a reference to the given TrxCodeClassificationTypeTransactionType and assigns it to the TransactionType field.
func (o *TrxCodeClassificationType) SetTransactionType(v TrxCodeClassificationTypeTransactionType) {
	o.TransactionType = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *TrxCodeClassificationType) GetType() CashieringTransactionTypeType {
	if o == nil || IsNil(o.Type) {
		var ret CashieringTransactionTypeType
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxCodeClassificationType) GetTypeOk() (*CashieringTransactionTypeType, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *TrxCodeClassificationType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given CashieringTransactionTypeType and assigns it to the Type field.
func (o *TrxCodeClassificationType) SetType(v CashieringTransactionTypeType) {
	o.Type = &v
}

func (o TrxCodeClassificationType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TrxCodeClassificationType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FiscalTransactionType) {
		toSerialize["fiscalTransactionType"] = o.FiscalTransactionType
	}
	if !IsNil(o.Group) {
		toSerialize["group"] = o.Group
	}
	if !IsNil(o.Subgroup) {
		toSerialize["subgroup"] = o.Subgroup
	}
	if !IsNil(o.TransactionType) {
		toSerialize["transactionType"] = o.TransactionType
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	return toSerialize, nil
}

type NullableTrxCodeClassificationType struct {
	value *TrxCodeClassificationType
	isSet bool
}

func (v NullableTrxCodeClassificationType) Get() *TrxCodeClassificationType {
	return v.value
}

func (v *NullableTrxCodeClassificationType) Set(val *TrxCodeClassificationType) {
	v.value = val
	v.isSet = true
}

func (v NullableTrxCodeClassificationType) IsSet() bool {
	return v.isSet
}

func (v *NullableTrxCodeClassificationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTrxCodeClassificationType(val *TrxCodeClassificationType) *NullableTrxCodeClassificationType {
	return &NullableTrxCodeClassificationType{value: val, isSet: true}
}

func (v NullableTrxCodeClassificationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTrxCodeClassificationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

