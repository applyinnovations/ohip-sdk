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

// checks if the CompanyInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CompanyInfoType{}

// CompanyInfoType Company Information of the Profile.
type CompanyInfoType struct {
	// Department of the Profile.
	Department *string `json:"department,omitempty"`
	// Legal Company.
	LegalCompany *string `json:"legalCompany,omitempty"`
	// Business Title or Position of the profile.
	Position *string `json:"position,omitempty"`
}

// NewCompanyInfoType instantiates a new CompanyInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCompanyInfoType() *CompanyInfoType {
	this := CompanyInfoType{}
	return &this
}

// NewCompanyInfoTypeWithDefaults instantiates a new CompanyInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCompanyInfoTypeWithDefaults() *CompanyInfoType {
	this := CompanyInfoType{}
	return &this
}

// GetDepartment returns the Department field value if set, zero value otherwise.
func (o *CompanyInfoType) GetDepartment() string {
	if o == nil || IsNil(o.Department) {
		var ret string
		return ret
	}
	return *o.Department
}

// GetDepartmentOk returns a tuple with the Department field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompanyInfoType) GetDepartmentOk() (*string, bool) {
	if o == nil || IsNil(o.Department) {
		return nil, false
	}
	return o.Department, true
}

// HasDepartment returns a boolean if a field has been set.
func (o *CompanyInfoType) HasDepartment() bool {
	if o != nil && !IsNil(o.Department) {
		return true
	}

	return false
}

// SetDepartment gets a reference to the given string and assigns it to the Department field.
func (o *CompanyInfoType) SetDepartment(v string) {
	o.Department = &v
}

// GetLegalCompany returns the LegalCompany field value if set, zero value otherwise.
func (o *CompanyInfoType) GetLegalCompany() string {
	if o == nil || IsNil(o.LegalCompany) {
		var ret string
		return ret
	}
	return *o.LegalCompany
}

// GetLegalCompanyOk returns a tuple with the LegalCompany field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompanyInfoType) GetLegalCompanyOk() (*string, bool) {
	if o == nil || IsNil(o.LegalCompany) {
		return nil, false
	}
	return o.LegalCompany, true
}

// HasLegalCompany returns a boolean if a field has been set.
func (o *CompanyInfoType) HasLegalCompany() bool {
	if o != nil && !IsNil(o.LegalCompany) {
		return true
	}

	return false
}

// SetLegalCompany gets a reference to the given string and assigns it to the LegalCompany field.
func (o *CompanyInfoType) SetLegalCompany(v string) {
	o.LegalCompany = &v
}

// GetPosition returns the Position field value if set, zero value otherwise.
func (o *CompanyInfoType) GetPosition() string {
	if o == nil || IsNil(o.Position) {
		var ret string
		return ret
	}
	return *o.Position
}

// GetPositionOk returns a tuple with the Position field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompanyInfoType) GetPositionOk() (*string, bool) {
	if o == nil || IsNil(o.Position) {
		return nil, false
	}
	return o.Position, true
}

// HasPosition returns a boolean if a field has been set.
func (o *CompanyInfoType) HasPosition() bool {
	if o != nil && !IsNil(o.Position) {
		return true
	}

	return false
}

// SetPosition gets a reference to the given string and assigns it to the Position field.
func (o *CompanyInfoType) SetPosition(v string) {
	o.Position = &v
}

func (o CompanyInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CompanyInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Department) {
		toSerialize["department"] = o.Department
	}
	if !IsNil(o.LegalCompany) {
		toSerialize["legalCompany"] = o.LegalCompany
	}
	if !IsNil(o.Position) {
		toSerialize["position"] = o.Position
	}
	return toSerialize, nil
}

type NullableCompanyInfoType struct {
	value *CompanyInfoType
	isSet bool
}

func (v NullableCompanyInfoType) Get() *CompanyInfoType {
	return v.value
}

func (v *NullableCompanyInfoType) Set(val *CompanyInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableCompanyInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableCompanyInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCompanyInfoType(val *CompanyInfoType) *NullableCompanyInfoType {
	return &NullableCompanyInfoType{value: val, isSet: true}
}

func (v NullableCompanyInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCompanyInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


