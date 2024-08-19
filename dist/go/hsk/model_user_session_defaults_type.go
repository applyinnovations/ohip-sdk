/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the UserSessionDefaultsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UserSessionDefaultsType{}

// UserSessionDefaultsType struct for UserSessionDefaultsType
type UserSessionDefaultsType struct {
	BaseLanguage *string `json:"baseLanguage,omitempty"`
	CurrencyCode *string `json:"currencyCode,omitempty"`
	CurrencyFormat *string `json:"currencyFormat,omitempty"`
	DbDateFormat *string `json:"dbDateFormat,omitempty"`
	DefaultLanguage *string `json:"defaultLanguage,omitempty"`
	JavaDateFormat *string `json:"javaDateFormat,omitempty"`
	JavaTimeFormat *string `json:"javaTimeFormat,omitempty"`
	OracleDateFormat *string `json:"oracleDateFormat,omitempty"`
	OracleTimeFormat *string `json:"oracleTimeFormat,omitempty"`
}

// NewUserSessionDefaultsType instantiates a new UserSessionDefaultsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUserSessionDefaultsType() *UserSessionDefaultsType {
	this := UserSessionDefaultsType{}
	return &this
}

// NewUserSessionDefaultsTypeWithDefaults instantiates a new UserSessionDefaultsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUserSessionDefaultsTypeWithDefaults() *UserSessionDefaultsType {
	this := UserSessionDefaultsType{}
	return &this
}

// GetBaseLanguage returns the BaseLanguage field value if set, zero value otherwise.
func (o *UserSessionDefaultsType) GetBaseLanguage() string {
	if o == nil || IsNil(o.BaseLanguage) {
		var ret string
		return ret
	}
	return *o.BaseLanguage
}

// GetBaseLanguageOk returns a tuple with the BaseLanguage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserSessionDefaultsType) GetBaseLanguageOk() (*string, bool) {
	if o == nil || IsNil(o.BaseLanguage) {
		return nil, false
	}
	return o.BaseLanguage, true
}

// HasBaseLanguage returns a boolean if a field has been set.
func (o *UserSessionDefaultsType) HasBaseLanguage() bool {
	if o != nil && !IsNil(o.BaseLanguage) {
		return true
	}

	return false
}

// SetBaseLanguage gets a reference to the given string and assigns it to the BaseLanguage field.
func (o *UserSessionDefaultsType) SetBaseLanguage(v string) {
	o.BaseLanguage = &v
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *UserSessionDefaultsType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserSessionDefaultsType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *UserSessionDefaultsType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *UserSessionDefaultsType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetCurrencyFormat returns the CurrencyFormat field value if set, zero value otherwise.
func (o *UserSessionDefaultsType) GetCurrencyFormat() string {
	if o == nil || IsNil(o.CurrencyFormat) {
		var ret string
		return ret
	}
	return *o.CurrencyFormat
}

// GetCurrencyFormatOk returns a tuple with the CurrencyFormat field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserSessionDefaultsType) GetCurrencyFormatOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyFormat) {
		return nil, false
	}
	return o.CurrencyFormat, true
}

// HasCurrencyFormat returns a boolean if a field has been set.
func (o *UserSessionDefaultsType) HasCurrencyFormat() bool {
	if o != nil && !IsNil(o.CurrencyFormat) {
		return true
	}

	return false
}

// SetCurrencyFormat gets a reference to the given string and assigns it to the CurrencyFormat field.
func (o *UserSessionDefaultsType) SetCurrencyFormat(v string) {
	o.CurrencyFormat = &v
}

// GetDbDateFormat returns the DbDateFormat field value if set, zero value otherwise.
func (o *UserSessionDefaultsType) GetDbDateFormat() string {
	if o == nil || IsNil(o.DbDateFormat) {
		var ret string
		return ret
	}
	return *o.DbDateFormat
}

// GetDbDateFormatOk returns a tuple with the DbDateFormat field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserSessionDefaultsType) GetDbDateFormatOk() (*string, bool) {
	if o == nil || IsNil(o.DbDateFormat) {
		return nil, false
	}
	return o.DbDateFormat, true
}

// HasDbDateFormat returns a boolean if a field has been set.
func (o *UserSessionDefaultsType) HasDbDateFormat() bool {
	if o != nil && !IsNil(o.DbDateFormat) {
		return true
	}

	return false
}

// SetDbDateFormat gets a reference to the given string and assigns it to the DbDateFormat field.
func (o *UserSessionDefaultsType) SetDbDateFormat(v string) {
	o.DbDateFormat = &v
}

// GetDefaultLanguage returns the DefaultLanguage field value if set, zero value otherwise.
func (o *UserSessionDefaultsType) GetDefaultLanguage() string {
	if o == nil || IsNil(o.DefaultLanguage) {
		var ret string
		return ret
	}
	return *o.DefaultLanguage
}

// GetDefaultLanguageOk returns a tuple with the DefaultLanguage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserSessionDefaultsType) GetDefaultLanguageOk() (*string, bool) {
	if o == nil || IsNil(o.DefaultLanguage) {
		return nil, false
	}
	return o.DefaultLanguage, true
}

// HasDefaultLanguage returns a boolean if a field has been set.
func (o *UserSessionDefaultsType) HasDefaultLanguage() bool {
	if o != nil && !IsNil(o.DefaultLanguage) {
		return true
	}

	return false
}

// SetDefaultLanguage gets a reference to the given string and assigns it to the DefaultLanguage field.
func (o *UserSessionDefaultsType) SetDefaultLanguage(v string) {
	o.DefaultLanguage = &v
}

// GetJavaDateFormat returns the JavaDateFormat field value if set, zero value otherwise.
func (o *UserSessionDefaultsType) GetJavaDateFormat() string {
	if o == nil || IsNil(o.JavaDateFormat) {
		var ret string
		return ret
	}
	return *o.JavaDateFormat
}

// GetJavaDateFormatOk returns a tuple with the JavaDateFormat field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserSessionDefaultsType) GetJavaDateFormatOk() (*string, bool) {
	if o == nil || IsNil(o.JavaDateFormat) {
		return nil, false
	}
	return o.JavaDateFormat, true
}

// HasJavaDateFormat returns a boolean if a field has been set.
func (o *UserSessionDefaultsType) HasJavaDateFormat() bool {
	if o != nil && !IsNil(o.JavaDateFormat) {
		return true
	}

	return false
}

// SetJavaDateFormat gets a reference to the given string and assigns it to the JavaDateFormat field.
func (o *UserSessionDefaultsType) SetJavaDateFormat(v string) {
	o.JavaDateFormat = &v
}

// GetJavaTimeFormat returns the JavaTimeFormat field value if set, zero value otherwise.
func (o *UserSessionDefaultsType) GetJavaTimeFormat() string {
	if o == nil || IsNil(o.JavaTimeFormat) {
		var ret string
		return ret
	}
	return *o.JavaTimeFormat
}

// GetJavaTimeFormatOk returns a tuple with the JavaTimeFormat field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserSessionDefaultsType) GetJavaTimeFormatOk() (*string, bool) {
	if o == nil || IsNil(o.JavaTimeFormat) {
		return nil, false
	}
	return o.JavaTimeFormat, true
}

// HasJavaTimeFormat returns a boolean if a field has been set.
func (o *UserSessionDefaultsType) HasJavaTimeFormat() bool {
	if o != nil && !IsNil(o.JavaTimeFormat) {
		return true
	}

	return false
}

// SetJavaTimeFormat gets a reference to the given string and assigns it to the JavaTimeFormat field.
func (o *UserSessionDefaultsType) SetJavaTimeFormat(v string) {
	o.JavaTimeFormat = &v
}

// GetOracleDateFormat returns the OracleDateFormat field value if set, zero value otherwise.
func (o *UserSessionDefaultsType) GetOracleDateFormat() string {
	if o == nil || IsNil(o.OracleDateFormat) {
		var ret string
		return ret
	}
	return *o.OracleDateFormat
}

// GetOracleDateFormatOk returns a tuple with the OracleDateFormat field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserSessionDefaultsType) GetOracleDateFormatOk() (*string, bool) {
	if o == nil || IsNil(o.OracleDateFormat) {
		return nil, false
	}
	return o.OracleDateFormat, true
}

// HasOracleDateFormat returns a boolean if a field has been set.
func (o *UserSessionDefaultsType) HasOracleDateFormat() bool {
	if o != nil && !IsNil(o.OracleDateFormat) {
		return true
	}

	return false
}

// SetOracleDateFormat gets a reference to the given string and assigns it to the OracleDateFormat field.
func (o *UserSessionDefaultsType) SetOracleDateFormat(v string) {
	o.OracleDateFormat = &v
}

// GetOracleTimeFormat returns the OracleTimeFormat field value if set, zero value otherwise.
func (o *UserSessionDefaultsType) GetOracleTimeFormat() string {
	if o == nil || IsNil(o.OracleTimeFormat) {
		var ret string
		return ret
	}
	return *o.OracleTimeFormat
}

// GetOracleTimeFormatOk returns a tuple with the OracleTimeFormat field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserSessionDefaultsType) GetOracleTimeFormatOk() (*string, bool) {
	if o == nil || IsNil(o.OracleTimeFormat) {
		return nil, false
	}
	return o.OracleTimeFormat, true
}

// HasOracleTimeFormat returns a boolean if a field has been set.
func (o *UserSessionDefaultsType) HasOracleTimeFormat() bool {
	if o != nil && !IsNil(o.OracleTimeFormat) {
		return true
	}

	return false
}

// SetOracleTimeFormat gets a reference to the given string and assigns it to the OracleTimeFormat field.
func (o *UserSessionDefaultsType) SetOracleTimeFormat(v string) {
	o.OracleTimeFormat = &v
}

func (o UserSessionDefaultsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UserSessionDefaultsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BaseLanguage) {
		toSerialize["baseLanguage"] = o.BaseLanguage
	}
	if !IsNil(o.CurrencyCode) {
		toSerialize["currencyCode"] = o.CurrencyCode
	}
	if !IsNil(o.CurrencyFormat) {
		toSerialize["currencyFormat"] = o.CurrencyFormat
	}
	if !IsNil(o.DbDateFormat) {
		toSerialize["dbDateFormat"] = o.DbDateFormat
	}
	if !IsNil(o.DefaultLanguage) {
		toSerialize["defaultLanguage"] = o.DefaultLanguage
	}
	if !IsNil(o.JavaDateFormat) {
		toSerialize["javaDateFormat"] = o.JavaDateFormat
	}
	if !IsNil(o.JavaTimeFormat) {
		toSerialize["javaTimeFormat"] = o.JavaTimeFormat
	}
	if !IsNil(o.OracleDateFormat) {
		toSerialize["oracleDateFormat"] = o.OracleDateFormat
	}
	if !IsNil(o.OracleTimeFormat) {
		toSerialize["oracleTimeFormat"] = o.OracleTimeFormat
	}
	return toSerialize, nil
}

type NullableUserSessionDefaultsType struct {
	value *UserSessionDefaultsType
	isSet bool
}

func (v NullableUserSessionDefaultsType) Get() *UserSessionDefaultsType {
	return v.value
}

func (v *NullableUserSessionDefaultsType) Set(val *UserSessionDefaultsType) {
	v.value = val
	v.isSet = true
}

func (v NullableUserSessionDefaultsType) IsSet() bool {
	return v.isSet
}

func (v *NullableUserSessionDefaultsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUserSessionDefaultsType(val *UserSessionDefaultsType) *NullableUserSessionDefaultsType {
	return &NullableUserSessionDefaultsType{value: val, isSet: true}
}

func (v NullableUserSessionDefaultsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUserSessionDefaultsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


