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

// checks if the MembershipAwardExportType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipAwardExportType{}

// MembershipAwardExportType Types holds the details of Member.
type MembershipAwardExportType struct {
	// Award Number to identify member's information.
	AwardNumber *float32 `json:"awardNumber,omitempty"`
	RecipientInfo *MembershipAwardRecipientInfoType `json:"recipientInfo,omitempty"`
	UserDefinedFields *UserDefinedFieldsType `json:"userDefinedFields,omitempty"`
}

// NewMembershipAwardExportType instantiates a new MembershipAwardExportType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipAwardExportType() *MembershipAwardExportType {
	this := MembershipAwardExportType{}
	return &this
}

// NewMembershipAwardExportTypeWithDefaults instantiates a new MembershipAwardExportType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipAwardExportTypeWithDefaults() *MembershipAwardExportType {
	this := MembershipAwardExportType{}
	return &this
}

// GetAwardNumber returns the AwardNumber field value if set, zero value otherwise.
func (o *MembershipAwardExportType) GetAwardNumber() float32 {
	if o == nil || IsNil(o.AwardNumber) {
		var ret float32
		return ret
	}
	return *o.AwardNumber
}

// GetAwardNumberOk returns a tuple with the AwardNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipAwardExportType) GetAwardNumberOk() (*float32, bool) {
	if o == nil || IsNil(o.AwardNumber) {
		return nil, false
	}
	return o.AwardNumber, true
}

// HasAwardNumber returns a boolean if a field has been set.
func (o *MembershipAwardExportType) HasAwardNumber() bool {
	if o != nil && !IsNil(o.AwardNumber) {
		return true
	}

	return false
}

// SetAwardNumber gets a reference to the given float32 and assigns it to the AwardNumber field.
func (o *MembershipAwardExportType) SetAwardNumber(v float32) {
	o.AwardNumber = &v
}

// GetRecipientInfo returns the RecipientInfo field value if set, zero value otherwise.
func (o *MembershipAwardExportType) GetRecipientInfo() MembershipAwardRecipientInfoType {
	if o == nil || IsNil(o.RecipientInfo) {
		var ret MembershipAwardRecipientInfoType
		return ret
	}
	return *o.RecipientInfo
}

// GetRecipientInfoOk returns a tuple with the RecipientInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipAwardExportType) GetRecipientInfoOk() (*MembershipAwardRecipientInfoType, bool) {
	if o == nil || IsNil(o.RecipientInfo) {
		return nil, false
	}
	return o.RecipientInfo, true
}

// HasRecipientInfo returns a boolean if a field has been set.
func (o *MembershipAwardExportType) HasRecipientInfo() bool {
	if o != nil && !IsNil(o.RecipientInfo) {
		return true
	}

	return false
}

// SetRecipientInfo gets a reference to the given MembershipAwardRecipientInfoType and assigns it to the RecipientInfo field.
func (o *MembershipAwardExportType) SetRecipientInfo(v MembershipAwardRecipientInfoType) {
	o.RecipientInfo = &v
}

// GetUserDefinedFields returns the UserDefinedFields field value if set, zero value otherwise.
func (o *MembershipAwardExportType) GetUserDefinedFields() UserDefinedFieldsType {
	if o == nil || IsNil(o.UserDefinedFields) {
		var ret UserDefinedFieldsType
		return ret
	}
	return *o.UserDefinedFields
}

// GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipAwardExportType) GetUserDefinedFieldsOk() (*UserDefinedFieldsType, bool) {
	if o == nil || IsNil(o.UserDefinedFields) {
		return nil, false
	}
	return o.UserDefinedFields, true
}

// HasUserDefinedFields returns a boolean if a field has been set.
func (o *MembershipAwardExportType) HasUserDefinedFields() bool {
	if o != nil && !IsNil(o.UserDefinedFields) {
		return true
	}

	return false
}

// SetUserDefinedFields gets a reference to the given UserDefinedFieldsType and assigns it to the UserDefinedFields field.
func (o *MembershipAwardExportType) SetUserDefinedFields(v UserDefinedFieldsType) {
	o.UserDefinedFields = &v
}

func (o MembershipAwardExportType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipAwardExportType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AwardNumber) {
		toSerialize["awardNumber"] = o.AwardNumber
	}
	if !IsNil(o.RecipientInfo) {
		toSerialize["recipientInfo"] = o.RecipientInfo
	}
	if !IsNil(o.UserDefinedFields) {
		toSerialize["userDefinedFields"] = o.UserDefinedFields
	}
	return toSerialize, nil
}

type NullableMembershipAwardExportType struct {
	value *MembershipAwardExportType
	isSet bool
}

func (v NullableMembershipAwardExportType) Get() *MembershipAwardExportType {
	return v.value
}

func (v *NullableMembershipAwardExportType) Set(val *MembershipAwardExportType) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipAwardExportType) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipAwardExportType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipAwardExportType(val *MembershipAwardExportType) *NullableMembershipAwardExportType {
	return &NullableMembershipAwardExportType{value: val, isSet: true}
}

func (v NullableMembershipAwardExportType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipAwardExportType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


