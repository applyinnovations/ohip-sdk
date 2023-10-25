/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the RelationshipProfileSummaryType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RelationshipProfileSummaryType{}

// RelationshipProfileSummaryType struct for RelationshipProfileSummaryType
type RelationshipProfileSummaryType struct {
	Address *RelationshipAddressType `json:"address,omitempty"`
	// Name of the company.
	CompanyName *string `json:"companyName,omitempty"`
	// Name of the customer
	CustomerName *string `json:"customerName,omitempty"`
	// Defines the e-mail address.
	EmailAddress *string `json:"emailAddress,omitempty"`
	// Unique Code to identify the owner.
	OwnerCode *string `json:"ownerCode,omitempty"`
	// Indicates if this relationship is the primary relationship.
	Primary *bool `json:"primary,omitempty"`
	// When true, this is a primary owner.
	PrimaryOwnerCode *bool `json:"primaryOwnerCode,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ProfileIdList []UniqueIDType `json:"profileIdList,omitempty"`
	ProfileStatus *ProfileStatusType `json:"profileStatus,omitempty"`
	ProfileType *ProfileTypeType `json:"profileType,omitempty"`
	// Telephone number assigned to a single location
	TelephoneNumber *string `json:"telephoneNumber,omitempty"`
}

// NewRelationshipProfileSummaryType instantiates a new RelationshipProfileSummaryType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRelationshipProfileSummaryType() *RelationshipProfileSummaryType {
	this := RelationshipProfileSummaryType{}
	return &this
}

// NewRelationshipProfileSummaryTypeWithDefaults instantiates a new RelationshipProfileSummaryType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRelationshipProfileSummaryTypeWithDefaults() *RelationshipProfileSummaryType {
	this := RelationshipProfileSummaryType{}
	return &this
}

// GetAddress returns the Address field value if set, zero value otherwise.
func (o *RelationshipProfileSummaryType) GetAddress() RelationshipAddressType {
	if o == nil || IsNil(o.Address) {
		var ret RelationshipAddressType
		return ret
	}
	return *o.Address
}

// GetAddressOk returns a tuple with the Address field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileSummaryType) GetAddressOk() (*RelationshipAddressType, bool) {
	if o == nil || IsNil(o.Address) {
		return nil, false
	}
	return o.Address, true
}

// HasAddress returns a boolean if a field has been set.
func (o *RelationshipProfileSummaryType) HasAddress() bool {
	if o != nil && !IsNil(o.Address) {
		return true
	}

	return false
}

// SetAddress gets a reference to the given RelationshipAddressType and assigns it to the Address field.
func (o *RelationshipProfileSummaryType) SetAddress(v RelationshipAddressType) {
	o.Address = &v
}

// GetCompanyName returns the CompanyName field value if set, zero value otherwise.
func (o *RelationshipProfileSummaryType) GetCompanyName() string {
	if o == nil || IsNil(o.CompanyName) {
		var ret string
		return ret
	}
	return *o.CompanyName
}

// GetCompanyNameOk returns a tuple with the CompanyName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileSummaryType) GetCompanyNameOk() (*string, bool) {
	if o == nil || IsNil(o.CompanyName) {
		return nil, false
	}
	return o.CompanyName, true
}

// HasCompanyName returns a boolean if a field has been set.
func (o *RelationshipProfileSummaryType) HasCompanyName() bool {
	if o != nil && !IsNil(o.CompanyName) {
		return true
	}

	return false
}

// SetCompanyName gets a reference to the given string and assigns it to the CompanyName field.
func (o *RelationshipProfileSummaryType) SetCompanyName(v string) {
	o.CompanyName = &v
}

// GetCustomerName returns the CustomerName field value if set, zero value otherwise.
func (o *RelationshipProfileSummaryType) GetCustomerName() string {
	if o == nil || IsNil(o.CustomerName) {
		var ret string
		return ret
	}
	return *o.CustomerName
}

// GetCustomerNameOk returns a tuple with the CustomerName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileSummaryType) GetCustomerNameOk() (*string, bool) {
	if o == nil || IsNil(o.CustomerName) {
		return nil, false
	}
	return o.CustomerName, true
}

// HasCustomerName returns a boolean if a field has been set.
func (o *RelationshipProfileSummaryType) HasCustomerName() bool {
	if o != nil && !IsNil(o.CustomerName) {
		return true
	}

	return false
}

// SetCustomerName gets a reference to the given string and assigns it to the CustomerName field.
func (o *RelationshipProfileSummaryType) SetCustomerName(v string) {
	o.CustomerName = &v
}

// GetEmailAddress returns the EmailAddress field value if set, zero value otherwise.
func (o *RelationshipProfileSummaryType) GetEmailAddress() string {
	if o == nil || IsNil(o.EmailAddress) {
		var ret string
		return ret
	}
	return *o.EmailAddress
}

// GetEmailAddressOk returns a tuple with the EmailAddress field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileSummaryType) GetEmailAddressOk() (*string, bool) {
	if o == nil || IsNil(o.EmailAddress) {
		return nil, false
	}
	return o.EmailAddress, true
}

// HasEmailAddress returns a boolean if a field has been set.
func (o *RelationshipProfileSummaryType) HasEmailAddress() bool {
	if o != nil && !IsNil(o.EmailAddress) {
		return true
	}

	return false
}

// SetEmailAddress gets a reference to the given string and assigns it to the EmailAddress field.
func (o *RelationshipProfileSummaryType) SetEmailAddress(v string) {
	o.EmailAddress = &v
}

// GetOwnerCode returns the OwnerCode field value if set, zero value otherwise.
func (o *RelationshipProfileSummaryType) GetOwnerCode() string {
	if o == nil || IsNil(o.OwnerCode) {
		var ret string
		return ret
	}
	return *o.OwnerCode
}

// GetOwnerCodeOk returns a tuple with the OwnerCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileSummaryType) GetOwnerCodeOk() (*string, bool) {
	if o == nil || IsNil(o.OwnerCode) {
		return nil, false
	}
	return o.OwnerCode, true
}

// HasOwnerCode returns a boolean if a field has been set.
func (o *RelationshipProfileSummaryType) HasOwnerCode() bool {
	if o != nil && !IsNil(o.OwnerCode) {
		return true
	}

	return false
}

// SetOwnerCode gets a reference to the given string and assigns it to the OwnerCode field.
func (o *RelationshipProfileSummaryType) SetOwnerCode(v string) {
	o.OwnerCode = &v
}

// GetPrimary returns the Primary field value if set, zero value otherwise.
func (o *RelationshipProfileSummaryType) GetPrimary() bool {
	if o == nil || IsNil(o.Primary) {
		var ret bool
		return ret
	}
	return *o.Primary
}

// GetPrimaryOk returns a tuple with the Primary field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileSummaryType) GetPrimaryOk() (*bool, bool) {
	if o == nil || IsNil(o.Primary) {
		return nil, false
	}
	return o.Primary, true
}

// HasPrimary returns a boolean if a field has been set.
func (o *RelationshipProfileSummaryType) HasPrimary() bool {
	if o != nil && !IsNil(o.Primary) {
		return true
	}

	return false
}

// SetPrimary gets a reference to the given bool and assigns it to the Primary field.
func (o *RelationshipProfileSummaryType) SetPrimary(v bool) {
	o.Primary = &v
}

// GetPrimaryOwnerCode returns the PrimaryOwnerCode field value if set, zero value otherwise.
func (o *RelationshipProfileSummaryType) GetPrimaryOwnerCode() bool {
	if o == nil || IsNil(o.PrimaryOwnerCode) {
		var ret bool
		return ret
	}
	return *o.PrimaryOwnerCode
}

// GetPrimaryOwnerCodeOk returns a tuple with the PrimaryOwnerCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileSummaryType) GetPrimaryOwnerCodeOk() (*bool, bool) {
	if o == nil || IsNil(o.PrimaryOwnerCode) {
		return nil, false
	}
	return o.PrimaryOwnerCode, true
}

// HasPrimaryOwnerCode returns a boolean if a field has been set.
func (o *RelationshipProfileSummaryType) HasPrimaryOwnerCode() bool {
	if o != nil && !IsNil(o.PrimaryOwnerCode) {
		return true
	}

	return false
}

// SetPrimaryOwnerCode gets a reference to the given bool and assigns it to the PrimaryOwnerCode field.
func (o *RelationshipProfileSummaryType) SetPrimaryOwnerCode(v bool) {
	o.PrimaryOwnerCode = &v
}

// GetProfileIdList returns the ProfileIdList field value if set, zero value otherwise.
func (o *RelationshipProfileSummaryType) GetProfileIdList() []UniqueIDType {
	if o == nil || IsNil(o.ProfileIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ProfileIdList
}

// GetProfileIdListOk returns a tuple with the ProfileIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileSummaryType) GetProfileIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ProfileIdList) {
		return nil, false
	}
	return o.ProfileIdList, true
}

// HasProfileIdList returns a boolean if a field has been set.
func (o *RelationshipProfileSummaryType) HasProfileIdList() bool {
	if o != nil && !IsNil(o.ProfileIdList) {
		return true
	}

	return false
}

// SetProfileIdList gets a reference to the given []UniqueIDType and assigns it to the ProfileIdList field.
func (o *RelationshipProfileSummaryType) SetProfileIdList(v []UniqueIDType) {
	o.ProfileIdList = v
}

// GetProfileStatus returns the ProfileStatus field value if set, zero value otherwise.
func (o *RelationshipProfileSummaryType) GetProfileStatus() ProfileStatusType {
	if o == nil || IsNil(o.ProfileStatus) {
		var ret ProfileStatusType
		return ret
	}
	return *o.ProfileStatus
}

// GetProfileStatusOk returns a tuple with the ProfileStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileSummaryType) GetProfileStatusOk() (*ProfileStatusType, bool) {
	if o == nil || IsNil(o.ProfileStatus) {
		return nil, false
	}
	return o.ProfileStatus, true
}

// HasProfileStatus returns a boolean if a field has been set.
func (o *RelationshipProfileSummaryType) HasProfileStatus() bool {
	if o != nil && !IsNil(o.ProfileStatus) {
		return true
	}

	return false
}

// SetProfileStatus gets a reference to the given ProfileStatusType and assigns it to the ProfileStatus field.
func (o *RelationshipProfileSummaryType) SetProfileStatus(v ProfileStatusType) {
	o.ProfileStatus = &v
}

// GetProfileType returns the ProfileType field value if set, zero value otherwise.
func (o *RelationshipProfileSummaryType) GetProfileType() ProfileTypeType {
	if o == nil || IsNil(o.ProfileType) {
		var ret ProfileTypeType
		return ret
	}
	return *o.ProfileType
}

// GetProfileTypeOk returns a tuple with the ProfileType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileSummaryType) GetProfileTypeOk() (*ProfileTypeType, bool) {
	if o == nil || IsNil(o.ProfileType) {
		return nil, false
	}
	return o.ProfileType, true
}

// HasProfileType returns a boolean if a field has been set.
func (o *RelationshipProfileSummaryType) HasProfileType() bool {
	if o != nil && !IsNil(o.ProfileType) {
		return true
	}

	return false
}

// SetProfileType gets a reference to the given ProfileTypeType and assigns it to the ProfileType field.
func (o *RelationshipProfileSummaryType) SetProfileType(v ProfileTypeType) {
	o.ProfileType = &v
}

// GetTelephoneNumber returns the TelephoneNumber field value if set, zero value otherwise.
func (o *RelationshipProfileSummaryType) GetTelephoneNumber() string {
	if o == nil || IsNil(o.TelephoneNumber) {
		var ret string
		return ret
	}
	return *o.TelephoneNumber
}

// GetTelephoneNumberOk returns a tuple with the TelephoneNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileSummaryType) GetTelephoneNumberOk() (*string, bool) {
	if o == nil || IsNil(o.TelephoneNumber) {
		return nil, false
	}
	return o.TelephoneNumber, true
}

// HasTelephoneNumber returns a boolean if a field has been set.
func (o *RelationshipProfileSummaryType) HasTelephoneNumber() bool {
	if o != nil && !IsNil(o.TelephoneNumber) {
		return true
	}

	return false
}

// SetTelephoneNumber gets a reference to the given string and assigns it to the TelephoneNumber field.
func (o *RelationshipProfileSummaryType) SetTelephoneNumber(v string) {
	o.TelephoneNumber = &v
}

func (o RelationshipProfileSummaryType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RelationshipProfileSummaryType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Address) {
		toSerialize["address"] = o.Address
	}
	if !IsNil(o.CompanyName) {
		toSerialize["companyName"] = o.CompanyName
	}
	if !IsNil(o.CustomerName) {
		toSerialize["customerName"] = o.CustomerName
	}
	if !IsNil(o.EmailAddress) {
		toSerialize["emailAddress"] = o.EmailAddress
	}
	if !IsNil(o.OwnerCode) {
		toSerialize["ownerCode"] = o.OwnerCode
	}
	if !IsNil(o.Primary) {
		toSerialize["primary"] = o.Primary
	}
	if !IsNil(o.PrimaryOwnerCode) {
		toSerialize["primaryOwnerCode"] = o.PrimaryOwnerCode
	}
	if !IsNil(o.ProfileIdList) {
		toSerialize["profileIdList"] = o.ProfileIdList
	}
	if !IsNil(o.ProfileStatus) {
		toSerialize["profileStatus"] = o.ProfileStatus
	}
	if !IsNil(o.ProfileType) {
		toSerialize["profileType"] = o.ProfileType
	}
	if !IsNil(o.TelephoneNumber) {
		toSerialize["telephoneNumber"] = o.TelephoneNumber
	}
	return toSerialize, nil
}

type NullableRelationshipProfileSummaryType struct {
	value *RelationshipProfileSummaryType
	isSet bool
}

func (v NullableRelationshipProfileSummaryType) Get() *RelationshipProfileSummaryType {
	return v.value
}

func (v *NullableRelationshipProfileSummaryType) Set(val *RelationshipProfileSummaryType) {
	v.value = val
	v.isSet = true
}

func (v NullableRelationshipProfileSummaryType) IsSet() bool {
	return v.isSet
}

func (v *NullableRelationshipProfileSummaryType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRelationshipProfileSummaryType(val *RelationshipProfileSummaryType) *NullableRelationshipProfileSummaryType {
	return &NullableRelationshipProfileSummaryType{value: val, isSet: true}
}

func (v NullableRelationshipProfileSummaryType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRelationshipProfileSummaryType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


