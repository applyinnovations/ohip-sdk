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

// checks if the CompanyType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CompanyType{}

// CompanyType struct for CompanyType
type CompanyType struct {
	// Alternate Name of the Company. Mainly, it's the name of the company written in the Alternate Language.
	AlternateName *string `json:"alternateName,omitempty"`
	// Commission code of the company.
	CommissionCode *string `json:"commissionCode,omitempty"`
	// Name of the company.
	CompanyName *string `json:"companyName,omitempty"`
	// The code specifying a monetary unit. Use ISO 4217, three alpha code.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// The symbol for the currency, e.g, for currencyCode USD the symbol is $.
	CurrencySymbol *string `json:"currencySymbol,omitempty"`
	// Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard \"minor unit\". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces=\"2\" to represent $85).
	DecimalPlaces *int32 `json:"decimalPlaces,omitempty"`
	// Language identification.
	Language *string `json:"language,omitempty"`
	// Nationality code identification
	Nationality *string `json:"nationality,omitempty"`
	// Description of the VIP status.
	VipDescription *string `json:"vipDescription,omitempty"`
	// VIP status of the company.
	VipStatus *string `json:"vipStatus,omitempty"`
}

// NewCompanyType instantiates a new CompanyType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCompanyType() *CompanyType {
	this := CompanyType{}
	return &this
}

// NewCompanyTypeWithDefaults instantiates a new CompanyType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCompanyTypeWithDefaults() *CompanyType {
	this := CompanyType{}
	return &this
}

// GetAlternateName returns the AlternateName field value if set, zero value otherwise.
func (o *CompanyType) GetAlternateName() string {
	if o == nil || IsNil(o.AlternateName) {
		var ret string
		return ret
	}
	return *o.AlternateName
}

// GetAlternateNameOk returns a tuple with the AlternateName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompanyType) GetAlternateNameOk() (*string, bool) {
	if o == nil || IsNil(o.AlternateName) {
		return nil, false
	}
	return o.AlternateName, true
}

// HasAlternateName returns a boolean if a field has been set.
func (o *CompanyType) HasAlternateName() bool {
	if o != nil && !IsNil(o.AlternateName) {
		return true
	}

	return false
}

// SetAlternateName gets a reference to the given string and assigns it to the AlternateName field.
func (o *CompanyType) SetAlternateName(v string) {
	o.AlternateName = &v
}

// GetCommissionCode returns the CommissionCode field value if set, zero value otherwise.
func (o *CompanyType) GetCommissionCode() string {
	if o == nil || IsNil(o.CommissionCode) {
		var ret string
		return ret
	}
	return *o.CommissionCode
}

// GetCommissionCodeOk returns a tuple with the CommissionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompanyType) GetCommissionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CommissionCode) {
		return nil, false
	}
	return o.CommissionCode, true
}

// HasCommissionCode returns a boolean if a field has been set.
func (o *CompanyType) HasCommissionCode() bool {
	if o != nil && !IsNil(o.CommissionCode) {
		return true
	}

	return false
}

// SetCommissionCode gets a reference to the given string and assigns it to the CommissionCode field.
func (o *CompanyType) SetCommissionCode(v string) {
	o.CommissionCode = &v
}

// GetCompanyName returns the CompanyName field value if set, zero value otherwise.
func (o *CompanyType) GetCompanyName() string {
	if o == nil || IsNil(o.CompanyName) {
		var ret string
		return ret
	}
	return *o.CompanyName
}

// GetCompanyNameOk returns a tuple with the CompanyName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompanyType) GetCompanyNameOk() (*string, bool) {
	if o == nil || IsNil(o.CompanyName) {
		return nil, false
	}
	return o.CompanyName, true
}

// HasCompanyName returns a boolean if a field has been set.
func (o *CompanyType) HasCompanyName() bool {
	if o != nil && !IsNil(o.CompanyName) {
		return true
	}

	return false
}

// SetCompanyName gets a reference to the given string and assigns it to the CompanyName field.
func (o *CompanyType) SetCompanyName(v string) {
	o.CompanyName = &v
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *CompanyType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompanyType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *CompanyType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *CompanyType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetCurrencySymbol returns the CurrencySymbol field value if set, zero value otherwise.
func (o *CompanyType) GetCurrencySymbol() string {
	if o == nil || IsNil(o.CurrencySymbol) {
		var ret string
		return ret
	}
	return *o.CurrencySymbol
}

// GetCurrencySymbolOk returns a tuple with the CurrencySymbol field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompanyType) GetCurrencySymbolOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencySymbol) {
		return nil, false
	}
	return o.CurrencySymbol, true
}

// HasCurrencySymbol returns a boolean if a field has been set.
func (o *CompanyType) HasCurrencySymbol() bool {
	if o != nil && !IsNil(o.CurrencySymbol) {
		return true
	}

	return false
}

// SetCurrencySymbol gets a reference to the given string and assigns it to the CurrencySymbol field.
func (o *CompanyType) SetCurrencySymbol(v string) {
	o.CurrencySymbol = &v
}

// GetDecimalPlaces returns the DecimalPlaces field value if set, zero value otherwise.
func (o *CompanyType) GetDecimalPlaces() int32 {
	if o == nil || IsNil(o.DecimalPlaces) {
		var ret int32
		return ret
	}
	return *o.DecimalPlaces
}

// GetDecimalPlacesOk returns a tuple with the DecimalPlaces field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompanyType) GetDecimalPlacesOk() (*int32, bool) {
	if o == nil || IsNil(o.DecimalPlaces) {
		return nil, false
	}
	return o.DecimalPlaces, true
}

// HasDecimalPlaces returns a boolean if a field has been set.
func (o *CompanyType) HasDecimalPlaces() bool {
	if o != nil && !IsNil(o.DecimalPlaces) {
		return true
	}

	return false
}

// SetDecimalPlaces gets a reference to the given int32 and assigns it to the DecimalPlaces field.
func (o *CompanyType) SetDecimalPlaces(v int32) {
	o.DecimalPlaces = &v
}

// GetLanguage returns the Language field value if set, zero value otherwise.
func (o *CompanyType) GetLanguage() string {
	if o == nil || IsNil(o.Language) {
		var ret string
		return ret
	}
	return *o.Language
}

// GetLanguageOk returns a tuple with the Language field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompanyType) GetLanguageOk() (*string, bool) {
	if o == nil || IsNil(o.Language) {
		return nil, false
	}
	return o.Language, true
}

// HasLanguage returns a boolean if a field has been set.
func (o *CompanyType) HasLanguage() bool {
	if o != nil && !IsNil(o.Language) {
		return true
	}

	return false
}

// SetLanguage gets a reference to the given string and assigns it to the Language field.
func (o *CompanyType) SetLanguage(v string) {
	o.Language = &v
}

// GetNationality returns the Nationality field value if set, zero value otherwise.
func (o *CompanyType) GetNationality() string {
	if o == nil || IsNil(o.Nationality) {
		var ret string
		return ret
	}
	return *o.Nationality
}

// GetNationalityOk returns a tuple with the Nationality field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompanyType) GetNationalityOk() (*string, bool) {
	if o == nil || IsNil(o.Nationality) {
		return nil, false
	}
	return o.Nationality, true
}

// HasNationality returns a boolean if a field has been set.
func (o *CompanyType) HasNationality() bool {
	if o != nil && !IsNil(o.Nationality) {
		return true
	}

	return false
}

// SetNationality gets a reference to the given string and assigns it to the Nationality field.
func (o *CompanyType) SetNationality(v string) {
	o.Nationality = &v
}

// GetVipDescription returns the VipDescription field value if set, zero value otherwise.
func (o *CompanyType) GetVipDescription() string {
	if o == nil || IsNil(o.VipDescription) {
		var ret string
		return ret
	}
	return *o.VipDescription
}

// GetVipDescriptionOk returns a tuple with the VipDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompanyType) GetVipDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.VipDescription) {
		return nil, false
	}
	return o.VipDescription, true
}

// HasVipDescription returns a boolean if a field has been set.
func (o *CompanyType) HasVipDescription() bool {
	if o != nil && !IsNil(o.VipDescription) {
		return true
	}

	return false
}

// SetVipDescription gets a reference to the given string and assigns it to the VipDescription field.
func (o *CompanyType) SetVipDescription(v string) {
	o.VipDescription = &v
}

// GetVipStatus returns the VipStatus field value if set, zero value otherwise.
func (o *CompanyType) GetVipStatus() string {
	if o == nil || IsNil(o.VipStatus) {
		var ret string
		return ret
	}
	return *o.VipStatus
}

// GetVipStatusOk returns a tuple with the VipStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompanyType) GetVipStatusOk() (*string, bool) {
	if o == nil || IsNil(o.VipStatus) {
		return nil, false
	}
	return o.VipStatus, true
}

// HasVipStatus returns a boolean if a field has been set.
func (o *CompanyType) HasVipStatus() bool {
	if o != nil && !IsNil(o.VipStatus) {
		return true
	}

	return false
}

// SetVipStatus gets a reference to the given string and assigns it to the VipStatus field.
func (o *CompanyType) SetVipStatus(v string) {
	o.VipStatus = &v
}

func (o CompanyType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CompanyType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AlternateName) {
		toSerialize["alternateName"] = o.AlternateName
	}
	if !IsNil(o.CommissionCode) {
		toSerialize["commissionCode"] = o.CommissionCode
	}
	if !IsNil(o.CompanyName) {
		toSerialize["companyName"] = o.CompanyName
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
	if !IsNil(o.Language) {
		toSerialize["language"] = o.Language
	}
	if !IsNil(o.Nationality) {
		toSerialize["nationality"] = o.Nationality
	}
	if !IsNil(o.VipDescription) {
		toSerialize["vipDescription"] = o.VipDescription
	}
	if !IsNil(o.VipStatus) {
		toSerialize["vipStatus"] = o.VipStatus
	}
	return toSerialize, nil
}

type NullableCompanyType struct {
	value *CompanyType
	isSet bool
}

func (v NullableCompanyType) Get() *CompanyType {
	return v.value
}

func (v *NullableCompanyType) Set(val *CompanyType) {
	v.value = val
	v.isSet = true
}

func (v NullableCompanyType) IsSet() bool {
	return v.isSet
}

func (v *NullableCompanyType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCompanyType(val *CompanyType) *NullableCompanyType {
	return &NullableCompanyType{value: val, isSet: true}
}

func (v NullableCompanyType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCompanyType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


