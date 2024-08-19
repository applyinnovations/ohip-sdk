/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the RelationshipProfileType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RelationshipProfileType{}

// RelationshipProfileType struct for RelationshipProfileType
type RelationshipProfileType struct {
	Address *AddressInfoType `json:"address,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ChangeProfileIdList []UniqueIDType `json:"changeProfileIdList,omitempty"`
	Company *CompanyType `json:"company,omitempty"`
	Customer *CustomerType `json:"customer,omitempty"`
	Email *EmailInfoType `json:"email,omitempty"`
	// Relationship identifier.
	Id *string `json:"id,omitempty"`
	// Indicates if this relationship is the primary relationship.
	Primary *string `json:"primary,omitempty"`
	PrimaryOwner *OwnerType `json:"primaryOwner,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ProfileIdList []UniqueIDType `json:"profileIdList,omitempty"`
	ProfileType *ProfileTypeType `json:"profileType,omitempty"`
	StatusCode *ProfileStatusType `json:"statusCode,omitempty"`
	Telephone *TelephoneInfoType `json:"telephone,omitempty"`
	URLs *URLInfoType `json:"uRLs,omitempty"`
}

// NewRelationshipProfileType instantiates a new RelationshipProfileType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRelationshipProfileType() *RelationshipProfileType {
	this := RelationshipProfileType{}
	return &this
}

// NewRelationshipProfileTypeWithDefaults instantiates a new RelationshipProfileType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRelationshipProfileTypeWithDefaults() *RelationshipProfileType {
	this := RelationshipProfileType{}
	return &this
}

// GetAddress returns the Address field value if set, zero value otherwise.
func (o *RelationshipProfileType) GetAddress() AddressInfoType {
	if o == nil || IsNil(o.Address) {
		var ret AddressInfoType
		return ret
	}
	return *o.Address
}

// GetAddressOk returns a tuple with the Address field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileType) GetAddressOk() (*AddressInfoType, bool) {
	if o == nil || IsNil(o.Address) {
		return nil, false
	}
	return o.Address, true
}

// HasAddress returns a boolean if a field has been set.
func (o *RelationshipProfileType) HasAddress() bool {
	if o != nil && !IsNil(o.Address) {
		return true
	}

	return false
}

// SetAddress gets a reference to the given AddressInfoType and assigns it to the Address field.
func (o *RelationshipProfileType) SetAddress(v AddressInfoType) {
	o.Address = &v
}

// GetChangeProfileIdList returns the ChangeProfileIdList field value if set, zero value otherwise.
func (o *RelationshipProfileType) GetChangeProfileIdList() []UniqueIDType {
	if o == nil || IsNil(o.ChangeProfileIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ChangeProfileIdList
}

// GetChangeProfileIdListOk returns a tuple with the ChangeProfileIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileType) GetChangeProfileIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ChangeProfileIdList) {
		return nil, false
	}
	return o.ChangeProfileIdList, true
}

// HasChangeProfileIdList returns a boolean if a field has been set.
func (o *RelationshipProfileType) HasChangeProfileIdList() bool {
	if o != nil && !IsNil(o.ChangeProfileIdList) {
		return true
	}

	return false
}

// SetChangeProfileIdList gets a reference to the given []UniqueIDType and assigns it to the ChangeProfileIdList field.
func (o *RelationshipProfileType) SetChangeProfileIdList(v []UniqueIDType) {
	o.ChangeProfileIdList = v
}

// GetCompany returns the Company field value if set, zero value otherwise.
func (o *RelationshipProfileType) GetCompany() CompanyType {
	if o == nil || IsNil(o.Company) {
		var ret CompanyType
		return ret
	}
	return *o.Company
}

// GetCompanyOk returns a tuple with the Company field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileType) GetCompanyOk() (*CompanyType, bool) {
	if o == nil || IsNil(o.Company) {
		return nil, false
	}
	return o.Company, true
}

// HasCompany returns a boolean if a field has been set.
func (o *RelationshipProfileType) HasCompany() bool {
	if o != nil && !IsNil(o.Company) {
		return true
	}

	return false
}

// SetCompany gets a reference to the given CompanyType and assigns it to the Company field.
func (o *RelationshipProfileType) SetCompany(v CompanyType) {
	o.Company = &v
}

// GetCustomer returns the Customer field value if set, zero value otherwise.
func (o *RelationshipProfileType) GetCustomer() CustomerType {
	if o == nil || IsNil(o.Customer) {
		var ret CustomerType
		return ret
	}
	return *o.Customer
}

// GetCustomerOk returns a tuple with the Customer field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileType) GetCustomerOk() (*CustomerType, bool) {
	if o == nil || IsNil(o.Customer) {
		return nil, false
	}
	return o.Customer, true
}

// HasCustomer returns a boolean if a field has been set.
func (o *RelationshipProfileType) HasCustomer() bool {
	if o != nil && !IsNil(o.Customer) {
		return true
	}

	return false
}

// SetCustomer gets a reference to the given CustomerType and assigns it to the Customer field.
func (o *RelationshipProfileType) SetCustomer(v CustomerType) {
	o.Customer = &v
}

// GetEmail returns the Email field value if set, zero value otherwise.
func (o *RelationshipProfileType) GetEmail() EmailInfoType {
	if o == nil || IsNil(o.Email) {
		var ret EmailInfoType
		return ret
	}
	return *o.Email
}

// GetEmailOk returns a tuple with the Email field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileType) GetEmailOk() (*EmailInfoType, bool) {
	if o == nil || IsNil(o.Email) {
		return nil, false
	}
	return o.Email, true
}

// HasEmail returns a boolean if a field has been set.
func (o *RelationshipProfileType) HasEmail() bool {
	if o != nil && !IsNil(o.Email) {
		return true
	}

	return false
}

// SetEmail gets a reference to the given EmailInfoType and assigns it to the Email field.
func (o *RelationshipProfileType) SetEmail(v EmailInfoType) {
	o.Email = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *RelationshipProfileType) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileType) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *RelationshipProfileType) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *RelationshipProfileType) SetId(v string) {
	o.Id = &v
}

// GetPrimary returns the Primary field value if set, zero value otherwise.
func (o *RelationshipProfileType) GetPrimary() string {
	if o == nil || IsNil(o.Primary) {
		var ret string
		return ret
	}
	return *o.Primary
}

// GetPrimaryOk returns a tuple with the Primary field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileType) GetPrimaryOk() (*string, bool) {
	if o == nil || IsNil(o.Primary) {
		return nil, false
	}
	return o.Primary, true
}

// HasPrimary returns a boolean if a field has been set.
func (o *RelationshipProfileType) HasPrimary() bool {
	if o != nil && !IsNil(o.Primary) {
		return true
	}

	return false
}

// SetPrimary gets a reference to the given string and assigns it to the Primary field.
func (o *RelationshipProfileType) SetPrimary(v string) {
	o.Primary = &v
}

// GetPrimaryOwner returns the PrimaryOwner field value if set, zero value otherwise.
func (o *RelationshipProfileType) GetPrimaryOwner() OwnerType {
	if o == nil || IsNil(o.PrimaryOwner) {
		var ret OwnerType
		return ret
	}
	return *o.PrimaryOwner
}

// GetPrimaryOwnerOk returns a tuple with the PrimaryOwner field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileType) GetPrimaryOwnerOk() (*OwnerType, bool) {
	if o == nil || IsNil(o.PrimaryOwner) {
		return nil, false
	}
	return o.PrimaryOwner, true
}

// HasPrimaryOwner returns a boolean if a field has been set.
func (o *RelationshipProfileType) HasPrimaryOwner() bool {
	if o != nil && !IsNil(o.PrimaryOwner) {
		return true
	}

	return false
}

// SetPrimaryOwner gets a reference to the given OwnerType and assigns it to the PrimaryOwner field.
func (o *RelationshipProfileType) SetPrimaryOwner(v OwnerType) {
	o.PrimaryOwner = &v
}

// GetProfileIdList returns the ProfileIdList field value if set, zero value otherwise.
func (o *RelationshipProfileType) GetProfileIdList() []UniqueIDType {
	if o == nil || IsNil(o.ProfileIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ProfileIdList
}

// GetProfileIdListOk returns a tuple with the ProfileIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileType) GetProfileIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ProfileIdList) {
		return nil, false
	}
	return o.ProfileIdList, true
}

// HasProfileIdList returns a boolean if a field has been set.
func (o *RelationshipProfileType) HasProfileIdList() bool {
	if o != nil && !IsNil(o.ProfileIdList) {
		return true
	}

	return false
}

// SetProfileIdList gets a reference to the given []UniqueIDType and assigns it to the ProfileIdList field.
func (o *RelationshipProfileType) SetProfileIdList(v []UniqueIDType) {
	o.ProfileIdList = v
}

// GetProfileType returns the ProfileType field value if set, zero value otherwise.
func (o *RelationshipProfileType) GetProfileType() ProfileTypeType {
	if o == nil || IsNil(o.ProfileType) {
		var ret ProfileTypeType
		return ret
	}
	return *o.ProfileType
}

// GetProfileTypeOk returns a tuple with the ProfileType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileType) GetProfileTypeOk() (*ProfileTypeType, bool) {
	if o == nil || IsNil(o.ProfileType) {
		return nil, false
	}
	return o.ProfileType, true
}

// HasProfileType returns a boolean if a field has been set.
func (o *RelationshipProfileType) HasProfileType() bool {
	if o != nil && !IsNil(o.ProfileType) {
		return true
	}

	return false
}

// SetProfileType gets a reference to the given ProfileTypeType and assigns it to the ProfileType field.
func (o *RelationshipProfileType) SetProfileType(v ProfileTypeType) {
	o.ProfileType = &v
}

// GetStatusCode returns the StatusCode field value if set, zero value otherwise.
func (o *RelationshipProfileType) GetStatusCode() ProfileStatusType {
	if o == nil || IsNil(o.StatusCode) {
		var ret ProfileStatusType
		return ret
	}
	return *o.StatusCode
}

// GetStatusCodeOk returns a tuple with the StatusCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileType) GetStatusCodeOk() (*ProfileStatusType, bool) {
	if o == nil || IsNil(o.StatusCode) {
		return nil, false
	}
	return o.StatusCode, true
}

// HasStatusCode returns a boolean if a field has been set.
func (o *RelationshipProfileType) HasStatusCode() bool {
	if o != nil && !IsNil(o.StatusCode) {
		return true
	}

	return false
}

// SetStatusCode gets a reference to the given ProfileStatusType and assigns it to the StatusCode field.
func (o *RelationshipProfileType) SetStatusCode(v ProfileStatusType) {
	o.StatusCode = &v
}

// GetTelephone returns the Telephone field value if set, zero value otherwise.
func (o *RelationshipProfileType) GetTelephone() TelephoneInfoType {
	if o == nil || IsNil(o.Telephone) {
		var ret TelephoneInfoType
		return ret
	}
	return *o.Telephone
}

// GetTelephoneOk returns a tuple with the Telephone field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileType) GetTelephoneOk() (*TelephoneInfoType, bool) {
	if o == nil || IsNil(o.Telephone) {
		return nil, false
	}
	return o.Telephone, true
}

// HasTelephone returns a boolean if a field has been set.
func (o *RelationshipProfileType) HasTelephone() bool {
	if o != nil && !IsNil(o.Telephone) {
		return true
	}

	return false
}

// SetTelephone gets a reference to the given TelephoneInfoType and assigns it to the Telephone field.
func (o *RelationshipProfileType) SetTelephone(v TelephoneInfoType) {
	o.Telephone = &v
}

// GetURLs returns the URLs field value if set, zero value otherwise.
func (o *RelationshipProfileType) GetURLs() URLInfoType {
	if o == nil || IsNil(o.URLs) {
		var ret URLInfoType
		return ret
	}
	return *o.URLs
}

// GetURLsOk returns a tuple with the URLs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipProfileType) GetURLsOk() (*URLInfoType, bool) {
	if o == nil || IsNil(o.URLs) {
		return nil, false
	}
	return o.URLs, true
}

// HasURLs returns a boolean if a field has been set.
func (o *RelationshipProfileType) HasURLs() bool {
	if o != nil && !IsNil(o.URLs) {
		return true
	}

	return false
}

// SetURLs gets a reference to the given URLInfoType and assigns it to the URLs field.
func (o *RelationshipProfileType) SetURLs(v URLInfoType) {
	o.URLs = &v
}

func (o RelationshipProfileType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RelationshipProfileType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Address) {
		toSerialize["address"] = o.Address
	}
	if !IsNil(o.ChangeProfileIdList) {
		toSerialize["changeProfileIdList"] = o.ChangeProfileIdList
	}
	if !IsNil(o.Company) {
		toSerialize["company"] = o.Company
	}
	if !IsNil(o.Customer) {
		toSerialize["customer"] = o.Customer
	}
	if !IsNil(o.Email) {
		toSerialize["email"] = o.Email
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.Primary) {
		toSerialize["primary"] = o.Primary
	}
	if !IsNil(o.PrimaryOwner) {
		toSerialize["primaryOwner"] = o.PrimaryOwner
	}
	if !IsNil(o.ProfileIdList) {
		toSerialize["profileIdList"] = o.ProfileIdList
	}
	if !IsNil(o.ProfileType) {
		toSerialize["profileType"] = o.ProfileType
	}
	if !IsNil(o.StatusCode) {
		toSerialize["statusCode"] = o.StatusCode
	}
	if !IsNil(o.Telephone) {
		toSerialize["telephone"] = o.Telephone
	}
	if !IsNil(o.URLs) {
		toSerialize["uRLs"] = o.URLs
	}
	return toSerialize, nil
}

type NullableRelationshipProfileType struct {
	value *RelationshipProfileType
	isSet bool
}

func (v NullableRelationshipProfileType) Get() *RelationshipProfileType {
	return v.value
}

func (v *NullableRelationshipProfileType) Set(val *RelationshipProfileType) {
	v.value = val
	v.isSet = true
}

func (v NullableRelationshipProfileType) IsSet() bool {
	return v.isSet
}

func (v *NullableRelationshipProfileType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRelationshipProfileType(val *RelationshipProfileType) *NullableRelationshipProfileType {
	return &NullableRelationshipProfileType{value: val, isSet: true}
}

func (v NullableRelationshipProfileType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRelationshipProfileType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


