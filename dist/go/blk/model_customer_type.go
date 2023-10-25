/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the CustomerType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CustomerType{}

// CustomerType Contains basic data on the customer's identity, location, relationships, finances, memberships, etc.
type CustomerType struct {
	Anonymization *AnonymizationType `json:"anonymization,omitempty"`
	// Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format.
	BirthDate *string `json:"birthDate,omitempty"`
	// Indicates the date of birth as masked.
	BirthDateMasked *string `json:"birthDateMasked,omitempty"`
	// This element tells if profile is blacklisted or not.
	Blacklist *bool `json:"blacklist,omitempty"`
	// Business Title.
	BusinessTitle *string `json:"businessTitle,omitempty"`
	CompanyInfo *CompanyInfoType `json:"companyInfo,omitempty"`
	// The code specifying a monetary unit. Use ISO 4217, three alpha code.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// The symbol for the currency, e.g, for currencyCode USD the symbol is $.
	CurrencySymbol *string `json:"currencySymbol,omitempty"`
	// Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard \"minor unit\". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces=\"2\" to represent $85).
	DecimalPlaces *int32 `json:"decimalPlaces,omitempty"`
	// Identifies the profile gender code selected from Gender types List of values. Gender types LOV provides the values configured at gender configuration.
	Gender *string `json:"gender,omitempty"`
	Identifications *CustomerTypeIdentifications `json:"identifications,omitempty"`
	// Language identification.
	Language *string `json:"language,omitempty"`
	// Nationality code identification
	Nationality *string `json:"nationality,omitempty"`
	// Detailed name information for the customer.
	PersonName []PersonNameType `json:"personName,omitempty"`
	// This element tells profile is property exclusive or not.
	PrivateProfile *bool `json:"privateProfile,omitempty"`
	// Profession of a person.
	Profession *string `json:"profession,omitempty"`
	// Description of the VIP status.
	VipDescription *string `json:"vipDescription,omitempty"`
	// VIP status of the customer.
	VipStatus *string `json:"vipStatus,omitempty"`
}

// NewCustomerType instantiates a new CustomerType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCustomerType() *CustomerType {
	this := CustomerType{}
	return &this
}

// NewCustomerTypeWithDefaults instantiates a new CustomerType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCustomerTypeWithDefaults() *CustomerType {
	this := CustomerType{}
	return &this
}

// GetAnonymization returns the Anonymization field value if set, zero value otherwise.
func (o *CustomerType) GetAnonymization() AnonymizationType {
	if o == nil || IsNil(o.Anonymization) {
		var ret AnonymizationType
		return ret
	}
	return *o.Anonymization
}

// GetAnonymizationOk returns a tuple with the Anonymization field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerType) GetAnonymizationOk() (*AnonymizationType, bool) {
	if o == nil || IsNil(o.Anonymization) {
		return nil, false
	}
	return o.Anonymization, true
}

// HasAnonymization returns a boolean if a field has been set.
func (o *CustomerType) HasAnonymization() bool {
	if o != nil && !IsNil(o.Anonymization) {
		return true
	}

	return false
}

// SetAnonymization gets a reference to the given AnonymizationType and assigns it to the Anonymization field.
func (o *CustomerType) SetAnonymization(v AnonymizationType) {
	o.Anonymization = &v
}

// GetBirthDate returns the BirthDate field value if set, zero value otherwise.
func (o *CustomerType) GetBirthDate() string {
	if o == nil || IsNil(o.BirthDate) {
		var ret string
		return ret
	}
	return *o.BirthDate
}

// GetBirthDateOk returns a tuple with the BirthDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerType) GetBirthDateOk() (*string, bool) {
	if o == nil || IsNil(o.BirthDate) {
		return nil, false
	}
	return o.BirthDate, true
}

// HasBirthDate returns a boolean if a field has been set.
func (o *CustomerType) HasBirthDate() bool {
	if o != nil && !IsNil(o.BirthDate) {
		return true
	}

	return false
}

// SetBirthDate gets a reference to the given string and assigns it to the BirthDate field.
func (o *CustomerType) SetBirthDate(v string) {
	o.BirthDate = &v
}

// GetBirthDateMasked returns the BirthDateMasked field value if set, zero value otherwise.
func (o *CustomerType) GetBirthDateMasked() string {
	if o == nil || IsNil(o.BirthDateMasked) {
		var ret string
		return ret
	}
	return *o.BirthDateMasked
}

// GetBirthDateMaskedOk returns a tuple with the BirthDateMasked field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerType) GetBirthDateMaskedOk() (*string, bool) {
	if o == nil || IsNil(o.BirthDateMasked) {
		return nil, false
	}
	return o.BirthDateMasked, true
}

// HasBirthDateMasked returns a boolean if a field has been set.
func (o *CustomerType) HasBirthDateMasked() bool {
	if o != nil && !IsNil(o.BirthDateMasked) {
		return true
	}

	return false
}

// SetBirthDateMasked gets a reference to the given string and assigns it to the BirthDateMasked field.
func (o *CustomerType) SetBirthDateMasked(v string) {
	o.BirthDateMasked = &v
}

// GetBlacklist returns the Blacklist field value if set, zero value otherwise.
func (o *CustomerType) GetBlacklist() bool {
	if o == nil || IsNil(o.Blacklist) {
		var ret bool
		return ret
	}
	return *o.Blacklist
}

// GetBlacklistOk returns a tuple with the Blacklist field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerType) GetBlacklistOk() (*bool, bool) {
	if o == nil || IsNil(o.Blacklist) {
		return nil, false
	}
	return o.Blacklist, true
}

// HasBlacklist returns a boolean if a field has been set.
func (o *CustomerType) HasBlacklist() bool {
	if o != nil && !IsNil(o.Blacklist) {
		return true
	}

	return false
}

// SetBlacklist gets a reference to the given bool and assigns it to the Blacklist field.
func (o *CustomerType) SetBlacklist(v bool) {
	o.Blacklist = &v
}

// GetBusinessTitle returns the BusinessTitle field value if set, zero value otherwise.
func (o *CustomerType) GetBusinessTitle() string {
	if o == nil || IsNil(o.BusinessTitle) {
		var ret string
		return ret
	}
	return *o.BusinessTitle
}

// GetBusinessTitleOk returns a tuple with the BusinessTitle field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerType) GetBusinessTitleOk() (*string, bool) {
	if o == nil || IsNil(o.BusinessTitle) {
		return nil, false
	}
	return o.BusinessTitle, true
}

// HasBusinessTitle returns a boolean if a field has been set.
func (o *CustomerType) HasBusinessTitle() bool {
	if o != nil && !IsNil(o.BusinessTitle) {
		return true
	}

	return false
}

// SetBusinessTitle gets a reference to the given string and assigns it to the BusinessTitle field.
func (o *CustomerType) SetBusinessTitle(v string) {
	o.BusinessTitle = &v
}

// GetCompanyInfo returns the CompanyInfo field value if set, zero value otherwise.
func (o *CustomerType) GetCompanyInfo() CompanyInfoType {
	if o == nil || IsNil(o.CompanyInfo) {
		var ret CompanyInfoType
		return ret
	}
	return *o.CompanyInfo
}

// GetCompanyInfoOk returns a tuple with the CompanyInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerType) GetCompanyInfoOk() (*CompanyInfoType, bool) {
	if o == nil || IsNil(o.CompanyInfo) {
		return nil, false
	}
	return o.CompanyInfo, true
}

// HasCompanyInfo returns a boolean if a field has been set.
func (o *CustomerType) HasCompanyInfo() bool {
	if o != nil && !IsNil(o.CompanyInfo) {
		return true
	}

	return false
}

// SetCompanyInfo gets a reference to the given CompanyInfoType and assigns it to the CompanyInfo field.
func (o *CustomerType) SetCompanyInfo(v CompanyInfoType) {
	o.CompanyInfo = &v
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *CustomerType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *CustomerType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *CustomerType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetCurrencySymbol returns the CurrencySymbol field value if set, zero value otherwise.
func (o *CustomerType) GetCurrencySymbol() string {
	if o == nil || IsNil(o.CurrencySymbol) {
		var ret string
		return ret
	}
	return *o.CurrencySymbol
}

// GetCurrencySymbolOk returns a tuple with the CurrencySymbol field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerType) GetCurrencySymbolOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencySymbol) {
		return nil, false
	}
	return o.CurrencySymbol, true
}

// HasCurrencySymbol returns a boolean if a field has been set.
func (o *CustomerType) HasCurrencySymbol() bool {
	if o != nil && !IsNil(o.CurrencySymbol) {
		return true
	}

	return false
}

// SetCurrencySymbol gets a reference to the given string and assigns it to the CurrencySymbol field.
func (o *CustomerType) SetCurrencySymbol(v string) {
	o.CurrencySymbol = &v
}

// GetDecimalPlaces returns the DecimalPlaces field value if set, zero value otherwise.
func (o *CustomerType) GetDecimalPlaces() int32 {
	if o == nil || IsNil(o.DecimalPlaces) {
		var ret int32
		return ret
	}
	return *o.DecimalPlaces
}

// GetDecimalPlacesOk returns a tuple with the DecimalPlaces field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerType) GetDecimalPlacesOk() (*int32, bool) {
	if o == nil || IsNil(o.DecimalPlaces) {
		return nil, false
	}
	return o.DecimalPlaces, true
}

// HasDecimalPlaces returns a boolean if a field has been set.
func (o *CustomerType) HasDecimalPlaces() bool {
	if o != nil && !IsNil(o.DecimalPlaces) {
		return true
	}

	return false
}

// SetDecimalPlaces gets a reference to the given int32 and assigns it to the DecimalPlaces field.
func (o *CustomerType) SetDecimalPlaces(v int32) {
	o.DecimalPlaces = &v
}

// GetGender returns the Gender field value if set, zero value otherwise.
func (o *CustomerType) GetGender() string {
	if o == nil || IsNil(o.Gender) {
		var ret string
		return ret
	}
	return *o.Gender
}

// GetGenderOk returns a tuple with the Gender field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerType) GetGenderOk() (*string, bool) {
	if o == nil || IsNil(o.Gender) {
		return nil, false
	}
	return o.Gender, true
}

// HasGender returns a boolean if a field has been set.
func (o *CustomerType) HasGender() bool {
	if o != nil && !IsNil(o.Gender) {
		return true
	}

	return false
}

// SetGender gets a reference to the given string and assigns it to the Gender field.
func (o *CustomerType) SetGender(v string) {
	o.Gender = &v
}

// GetIdentifications returns the Identifications field value if set, zero value otherwise.
func (o *CustomerType) GetIdentifications() CustomerTypeIdentifications {
	if o == nil || IsNil(o.Identifications) {
		var ret CustomerTypeIdentifications
		return ret
	}
	return *o.Identifications
}

// GetIdentificationsOk returns a tuple with the Identifications field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerType) GetIdentificationsOk() (*CustomerTypeIdentifications, bool) {
	if o == nil || IsNil(o.Identifications) {
		return nil, false
	}
	return o.Identifications, true
}

// HasIdentifications returns a boolean if a field has been set.
func (o *CustomerType) HasIdentifications() bool {
	if o != nil && !IsNil(o.Identifications) {
		return true
	}

	return false
}

// SetIdentifications gets a reference to the given CustomerTypeIdentifications and assigns it to the Identifications field.
func (o *CustomerType) SetIdentifications(v CustomerTypeIdentifications) {
	o.Identifications = &v
}

// GetLanguage returns the Language field value if set, zero value otherwise.
func (o *CustomerType) GetLanguage() string {
	if o == nil || IsNil(o.Language) {
		var ret string
		return ret
	}
	return *o.Language
}

// GetLanguageOk returns a tuple with the Language field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerType) GetLanguageOk() (*string, bool) {
	if o == nil || IsNil(o.Language) {
		return nil, false
	}
	return o.Language, true
}

// HasLanguage returns a boolean if a field has been set.
func (o *CustomerType) HasLanguage() bool {
	if o != nil && !IsNil(o.Language) {
		return true
	}

	return false
}

// SetLanguage gets a reference to the given string and assigns it to the Language field.
func (o *CustomerType) SetLanguage(v string) {
	o.Language = &v
}

// GetNationality returns the Nationality field value if set, zero value otherwise.
func (o *CustomerType) GetNationality() string {
	if o == nil || IsNil(o.Nationality) {
		var ret string
		return ret
	}
	return *o.Nationality
}

// GetNationalityOk returns a tuple with the Nationality field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerType) GetNationalityOk() (*string, bool) {
	if o == nil || IsNil(o.Nationality) {
		return nil, false
	}
	return o.Nationality, true
}

// HasNationality returns a boolean if a field has been set.
func (o *CustomerType) HasNationality() bool {
	if o != nil && !IsNil(o.Nationality) {
		return true
	}

	return false
}

// SetNationality gets a reference to the given string and assigns it to the Nationality field.
func (o *CustomerType) SetNationality(v string) {
	o.Nationality = &v
}

// GetPersonName returns the PersonName field value if set, zero value otherwise.
func (o *CustomerType) GetPersonName() []PersonNameType {
	if o == nil || IsNil(o.PersonName) {
		var ret []PersonNameType
		return ret
	}
	return o.PersonName
}

// GetPersonNameOk returns a tuple with the PersonName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerType) GetPersonNameOk() ([]PersonNameType, bool) {
	if o == nil || IsNil(o.PersonName) {
		return nil, false
	}
	return o.PersonName, true
}

// HasPersonName returns a boolean if a field has been set.
func (o *CustomerType) HasPersonName() bool {
	if o != nil && !IsNil(o.PersonName) {
		return true
	}

	return false
}

// SetPersonName gets a reference to the given []PersonNameType and assigns it to the PersonName field.
func (o *CustomerType) SetPersonName(v []PersonNameType) {
	o.PersonName = v
}

// GetPrivateProfile returns the PrivateProfile field value if set, zero value otherwise.
func (o *CustomerType) GetPrivateProfile() bool {
	if o == nil || IsNil(o.PrivateProfile) {
		var ret bool
		return ret
	}
	return *o.PrivateProfile
}

// GetPrivateProfileOk returns a tuple with the PrivateProfile field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerType) GetPrivateProfileOk() (*bool, bool) {
	if o == nil || IsNil(o.PrivateProfile) {
		return nil, false
	}
	return o.PrivateProfile, true
}

// HasPrivateProfile returns a boolean if a field has been set.
func (o *CustomerType) HasPrivateProfile() bool {
	if o != nil && !IsNil(o.PrivateProfile) {
		return true
	}

	return false
}

// SetPrivateProfile gets a reference to the given bool and assigns it to the PrivateProfile field.
func (o *CustomerType) SetPrivateProfile(v bool) {
	o.PrivateProfile = &v
}

// GetProfession returns the Profession field value if set, zero value otherwise.
func (o *CustomerType) GetProfession() string {
	if o == nil || IsNil(o.Profession) {
		var ret string
		return ret
	}
	return *o.Profession
}

// GetProfessionOk returns a tuple with the Profession field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerType) GetProfessionOk() (*string, bool) {
	if o == nil || IsNil(o.Profession) {
		return nil, false
	}
	return o.Profession, true
}

// HasProfession returns a boolean if a field has been set.
func (o *CustomerType) HasProfession() bool {
	if o != nil && !IsNil(o.Profession) {
		return true
	}

	return false
}

// SetProfession gets a reference to the given string and assigns it to the Profession field.
func (o *CustomerType) SetProfession(v string) {
	o.Profession = &v
}

// GetVipDescription returns the VipDescription field value if set, zero value otherwise.
func (o *CustomerType) GetVipDescription() string {
	if o == nil || IsNil(o.VipDescription) {
		var ret string
		return ret
	}
	return *o.VipDescription
}

// GetVipDescriptionOk returns a tuple with the VipDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerType) GetVipDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.VipDescription) {
		return nil, false
	}
	return o.VipDescription, true
}

// HasVipDescription returns a boolean if a field has been set.
func (o *CustomerType) HasVipDescription() bool {
	if o != nil && !IsNil(o.VipDescription) {
		return true
	}

	return false
}

// SetVipDescription gets a reference to the given string and assigns it to the VipDescription field.
func (o *CustomerType) SetVipDescription(v string) {
	o.VipDescription = &v
}

// GetVipStatus returns the VipStatus field value if set, zero value otherwise.
func (o *CustomerType) GetVipStatus() string {
	if o == nil || IsNil(o.VipStatus) {
		var ret string
		return ret
	}
	return *o.VipStatus
}

// GetVipStatusOk returns a tuple with the VipStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerType) GetVipStatusOk() (*string, bool) {
	if o == nil || IsNil(o.VipStatus) {
		return nil, false
	}
	return o.VipStatus, true
}

// HasVipStatus returns a boolean if a field has been set.
func (o *CustomerType) HasVipStatus() bool {
	if o != nil && !IsNil(o.VipStatus) {
		return true
	}

	return false
}

// SetVipStatus gets a reference to the given string and assigns it to the VipStatus field.
func (o *CustomerType) SetVipStatus(v string) {
	o.VipStatus = &v
}

func (o CustomerType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CustomerType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Anonymization) {
		toSerialize["anonymization"] = o.Anonymization
	}
	if !IsNil(o.BirthDate) {
		toSerialize["birthDate"] = o.BirthDate
	}
	if !IsNil(o.BirthDateMasked) {
		toSerialize["birthDateMasked"] = o.BirthDateMasked
	}
	if !IsNil(o.Blacklist) {
		toSerialize["blacklist"] = o.Blacklist
	}
	if !IsNil(o.BusinessTitle) {
		toSerialize["businessTitle"] = o.BusinessTitle
	}
	if !IsNil(o.CompanyInfo) {
		toSerialize["companyInfo"] = o.CompanyInfo
	}
	if !IsNil(o.CurrencyCode) {
		toSerialize["currencyCode"] = o.CurrencyCode
	}
	if !IsNil(o.CurrencySymbol) {
		toSerialize["currencySymbol"] = o.CurrencySymbol
	}
	if !IsNil(o.DecimalPlaces) {
		toSerialize["decimalPlaces"] = o.DecimalPlaces
	}
	if !IsNil(o.Gender) {
		toSerialize["gender"] = o.Gender
	}
	if !IsNil(o.Identifications) {
		toSerialize["identifications"] = o.Identifications
	}
	if !IsNil(o.Language) {
		toSerialize["language"] = o.Language
	}
	if !IsNil(o.Nationality) {
		toSerialize["nationality"] = o.Nationality
	}
	if !IsNil(o.PersonName) {
		toSerialize["personName"] = o.PersonName
	}
	if !IsNil(o.PrivateProfile) {
		toSerialize["privateProfile"] = o.PrivateProfile
	}
	if !IsNil(o.Profession) {
		toSerialize["profession"] = o.Profession
	}
	if !IsNil(o.VipDescription) {
		toSerialize["vipDescription"] = o.VipDescription
	}
	if !IsNil(o.VipStatus) {
		toSerialize["vipStatus"] = o.VipStatus
	}
	return toSerialize, nil
}

type NullableCustomerType struct {
	value *CustomerType
	isSet bool
}

func (v NullableCustomerType) Get() *CustomerType {
	return v.value
}

func (v *NullableCustomerType) Set(val *CustomerType) {
	v.value = val
	v.isSet = true
}

func (v NullableCustomerType) IsSet() bool {
	return v.isSet
}

func (v *NullableCustomerType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCustomerType(val *CustomerType) *NullableCustomerType {
	return &NullableCustomerType{value: val, isSet: true}
}

func (v NullableCustomerType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCustomerType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


