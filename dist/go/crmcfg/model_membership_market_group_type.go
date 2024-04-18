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

// checks if the MembershipMarketGroupType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipMarketGroupType{}

// MembershipMarketGroupType Base type provides information about Membership Market/Property Groups Configuration.
type MembershipMarketGroupType struct {
	// Code is used to identify a Membership Market/Resort Group.
	Code *string `json:"code,omitempty"`
	// Description of the Membership Market/Propety Group.
	Description *string `json:"description,omitempty"`
	// Membership Market/Property Groups display sequence Number
	DisplaySequence *float32 `json:"displaySequence,omitempty"`
	// Membership Markets code and Description.
	MarketCodes []CodeDescriptionType `json:"marketCodes,omitempty"`
}

// NewMembershipMarketGroupType instantiates a new MembershipMarketGroupType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipMarketGroupType() *MembershipMarketGroupType {
	this := MembershipMarketGroupType{}
	return &this
}

// NewMembershipMarketGroupTypeWithDefaults instantiates a new MembershipMarketGroupType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipMarketGroupTypeWithDefaults() *MembershipMarketGroupType {
	this := MembershipMarketGroupType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *MembershipMarketGroupType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipMarketGroupType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *MembershipMarketGroupType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *MembershipMarketGroupType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *MembershipMarketGroupType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipMarketGroupType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *MembershipMarketGroupType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *MembershipMarketGroupType) SetDescription(v string) {
	o.Description = &v
}

// GetDisplaySequence returns the DisplaySequence field value if set, zero value otherwise.
func (o *MembershipMarketGroupType) GetDisplaySequence() float32 {
	if o == nil || IsNil(o.DisplaySequence) {
		var ret float32
		return ret
	}
	return *o.DisplaySequence
}

// GetDisplaySequenceOk returns a tuple with the DisplaySequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipMarketGroupType) GetDisplaySequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.DisplaySequence) {
		return nil, false
	}
	return o.DisplaySequence, true
}

// HasDisplaySequence returns a boolean if a field has been set.
func (o *MembershipMarketGroupType) HasDisplaySequence() bool {
	if o != nil && !IsNil(o.DisplaySequence) {
		return true
	}

	return false
}

// SetDisplaySequence gets a reference to the given float32 and assigns it to the DisplaySequence field.
func (o *MembershipMarketGroupType) SetDisplaySequence(v float32) {
	o.DisplaySequence = &v
}

// GetMarketCodes returns the MarketCodes field value if set, zero value otherwise.
func (o *MembershipMarketGroupType) GetMarketCodes() []CodeDescriptionType {
	if o == nil || IsNil(o.MarketCodes) {
		var ret []CodeDescriptionType
		return ret
	}
	return o.MarketCodes
}

// GetMarketCodesOk returns a tuple with the MarketCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipMarketGroupType) GetMarketCodesOk() ([]CodeDescriptionType, bool) {
	if o == nil || IsNil(o.MarketCodes) {
		return nil, false
	}
	return o.MarketCodes, true
}

// HasMarketCodes returns a boolean if a field has been set.
func (o *MembershipMarketGroupType) HasMarketCodes() bool {
	if o != nil && !IsNil(o.MarketCodes) {
		return true
	}

	return false
}

// SetMarketCodes gets a reference to the given []CodeDescriptionType and assigns it to the MarketCodes field.
func (o *MembershipMarketGroupType) SetMarketCodes(v []CodeDescriptionType) {
	o.MarketCodes = v
}

func (o MembershipMarketGroupType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipMarketGroupType) ToMap() (map[string]interface{}, error) {
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
	if !IsNil(o.MarketCodes) {
		toSerialize["marketCodes"] = o.MarketCodes
	}
	return toSerialize, nil
}

type NullableMembershipMarketGroupType struct {
	value *MembershipMarketGroupType
	isSet bool
}

func (v NullableMembershipMarketGroupType) Get() *MembershipMarketGroupType {
	return v.value
}

func (v *NullableMembershipMarketGroupType) Set(val *MembershipMarketGroupType) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipMarketGroupType) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipMarketGroupType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipMarketGroupType(val *MembershipMarketGroupType) *NullableMembershipMarketGroupType {
	return &NullableMembershipMarketGroupType{value: val, isSet: true}
}

func (v NullableMembershipMarketGroupType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipMarketGroupType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

