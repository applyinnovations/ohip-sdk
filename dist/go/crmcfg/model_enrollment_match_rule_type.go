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

// checks if the EnrollmentMatchRuleType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EnrollmentMatchRuleType{}

// EnrollmentMatchRuleType Represent Enrollment Match Rule and User Defined Enrollment fields/Attribute configuration for membership type.
type EnrollmentMatchRuleType struct {
	// Enrollment Match Rule for Membership Type.
	MembershipEnrollmentMatchRule *string `json:"membershipEnrollmentMatchRule,omitempty"`
	// Type that holds the User Defined Enrollment field/Attribute such as Communication, First Name , Last Name etc.
	UserDefinedEnrollmentFields []UserDefinedEnrollmentFieldType `json:"userDefinedEnrollmentFields,omitempty"`
	// Indicates if the Advanced Enrollment is enabled for Membership Type. Advanced Enrollment is required tp apply Membership Enrollment Match Rule and User Defined Enrollment Fields/Attributes.
	AdvancedEnrollment *bool `json:"advancedEnrollment,omitempty"`
}

// NewEnrollmentMatchRuleType instantiates a new EnrollmentMatchRuleType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEnrollmentMatchRuleType() *EnrollmentMatchRuleType {
	this := EnrollmentMatchRuleType{}
	return &this
}

// NewEnrollmentMatchRuleTypeWithDefaults instantiates a new EnrollmentMatchRuleType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEnrollmentMatchRuleTypeWithDefaults() *EnrollmentMatchRuleType {
	this := EnrollmentMatchRuleType{}
	return &this
}

// GetMembershipEnrollmentMatchRule returns the MembershipEnrollmentMatchRule field value if set, zero value otherwise.
func (o *EnrollmentMatchRuleType) GetMembershipEnrollmentMatchRule() string {
	if o == nil || IsNil(o.MembershipEnrollmentMatchRule) {
		var ret string
		return ret
	}
	return *o.MembershipEnrollmentMatchRule
}

// GetMembershipEnrollmentMatchRuleOk returns a tuple with the MembershipEnrollmentMatchRule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnrollmentMatchRuleType) GetMembershipEnrollmentMatchRuleOk() (*string, bool) {
	if o == nil || IsNil(o.MembershipEnrollmentMatchRule) {
		return nil, false
	}
	return o.MembershipEnrollmentMatchRule, true
}

// HasMembershipEnrollmentMatchRule returns a boolean if a field has been set.
func (o *EnrollmentMatchRuleType) HasMembershipEnrollmentMatchRule() bool {
	if o != nil && !IsNil(o.MembershipEnrollmentMatchRule) {
		return true
	}

	return false
}

// SetMembershipEnrollmentMatchRule gets a reference to the given string and assigns it to the MembershipEnrollmentMatchRule field.
func (o *EnrollmentMatchRuleType) SetMembershipEnrollmentMatchRule(v string) {
	o.MembershipEnrollmentMatchRule = &v
}

// GetUserDefinedEnrollmentFields returns the UserDefinedEnrollmentFields field value if set, zero value otherwise.
func (o *EnrollmentMatchRuleType) GetUserDefinedEnrollmentFields() []UserDefinedEnrollmentFieldType {
	if o == nil || IsNil(o.UserDefinedEnrollmentFields) {
		var ret []UserDefinedEnrollmentFieldType
		return ret
	}
	return o.UserDefinedEnrollmentFields
}

// GetUserDefinedEnrollmentFieldsOk returns a tuple with the UserDefinedEnrollmentFields field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnrollmentMatchRuleType) GetUserDefinedEnrollmentFieldsOk() ([]UserDefinedEnrollmentFieldType, bool) {
	if o == nil || IsNil(o.UserDefinedEnrollmentFields) {
		return nil, false
	}
	return o.UserDefinedEnrollmentFields, true
}

// HasUserDefinedEnrollmentFields returns a boolean if a field has been set.
func (o *EnrollmentMatchRuleType) HasUserDefinedEnrollmentFields() bool {
	if o != nil && !IsNil(o.UserDefinedEnrollmentFields) {
		return true
	}

	return false
}

// SetUserDefinedEnrollmentFields gets a reference to the given []UserDefinedEnrollmentFieldType and assigns it to the UserDefinedEnrollmentFields field.
func (o *EnrollmentMatchRuleType) SetUserDefinedEnrollmentFields(v []UserDefinedEnrollmentFieldType) {
	o.UserDefinedEnrollmentFields = v
}

// GetAdvancedEnrollment returns the AdvancedEnrollment field value if set, zero value otherwise.
func (o *EnrollmentMatchRuleType) GetAdvancedEnrollment() bool {
	if o == nil || IsNil(o.AdvancedEnrollment) {
		var ret bool
		return ret
	}
	return *o.AdvancedEnrollment
}

// GetAdvancedEnrollmentOk returns a tuple with the AdvancedEnrollment field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnrollmentMatchRuleType) GetAdvancedEnrollmentOk() (*bool, bool) {
	if o == nil || IsNil(o.AdvancedEnrollment) {
		return nil, false
	}
	return o.AdvancedEnrollment, true
}

// HasAdvancedEnrollment returns a boolean if a field has been set.
func (o *EnrollmentMatchRuleType) HasAdvancedEnrollment() bool {
	if o != nil && !IsNil(o.AdvancedEnrollment) {
		return true
	}

	return false
}

// SetAdvancedEnrollment gets a reference to the given bool and assigns it to the AdvancedEnrollment field.
func (o *EnrollmentMatchRuleType) SetAdvancedEnrollment(v bool) {
	o.AdvancedEnrollment = &v
}

func (o EnrollmentMatchRuleType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EnrollmentMatchRuleType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.MembershipEnrollmentMatchRule) {
		toSerialize["membershipEnrollmentMatchRule"] = o.MembershipEnrollmentMatchRule
	}
	if !IsNil(o.UserDefinedEnrollmentFields) {
		toSerialize["userDefinedEnrollmentFields"] = o.UserDefinedEnrollmentFields
	}
	if !IsNil(o.AdvancedEnrollment) {
		toSerialize["advancedEnrollment"] = o.AdvancedEnrollment
	}
	return toSerialize, nil
}

type NullableEnrollmentMatchRuleType struct {
	value *EnrollmentMatchRuleType
	isSet bool
}

func (v NullableEnrollmentMatchRuleType) Get() *EnrollmentMatchRuleType {
	return v.value
}

func (v *NullableEnrollmentMatchRuleType) Set(val *EnrollmentMatchRuleType) {
	v.value = val
	v.isSet = true
}

func (v NullableEnrollmentMatchRuleType) IsSet() bool {
	return v.isSet
}

func (v *NullableEnrollmentMatchRuleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEnrollmentMatchRuleType(val *EnrollmentMatchRuleType) *NullableEnrollmentMatchRuleType {
	return &NullableEnrollmentMatchRuleType{value: val, isSet: true}
}

func (v NullableEnrollmentMatchRuleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEnrollmentMatchRuleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


