/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the AuthorizerInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AuthorizerInfoType{}

// AuthorizerInfoType Authorizer Information
type AuthorizerInfoType struct {
	AuthorizerId *UniqueIDType `json:"authorizerId,omitempty"`
	// Full name of the authorizer.
	AuthorizerName *string `json:"authorizerName,omitempty"`
	// Rate code of the authorizer.
	AuthorizerRateCode *string `json:"authorizerRateCode,omitempty"`
	// Application user name of the authorizer
	AuthorizerUserName *string `json:"authorizerUserName,omitempty"`
	// Indicates whether user has the choice to have reservation inherit rate code from the authorizer.
	InheritAuthorizerRateCode *bool `json:"inheritAuthorizerRateCode,omitempty"`
}

// NewAuthorizerInfoType instantiates a new AuthorizerInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAuthorizerInfoType() *AuthorizerInfoType {
	this := AuthorizerInfoType{}
	return &this
}

// NewAuthorizerInfoTypeWithDefaults instantiates a new AuthorizerInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAuthorizerInfoTypeWithDefaults() *AuthorizerInfoType {
	this := AuthorizerInfoType{}
	return &this
}

// GetAuthorizerId returns the AuthorizerId field value if set, zero value otherwise.
func (o *AuthorizerInfoType) GetAuthorizerId() UniqueIDType {
	if o == nil || IsNil(o.AuthorizerId) {
		var ret UniqueIDType
		return ret
	}
	return *o.AuthorizerId
}

// GetAuthorizerIdOk returns a tuple with the AuthorizerId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizerInfoType) GetAuthorizerIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.AuthorizerId) {
		return nil, false
	}
	return o.AuthorizerId, true
}

// HasAuthorizerId returns a boolean if a field has been set.
func (o *AuthorizerInfoType) HasAuthorizerId() bool {
	if o != nil && !IsNil(o.AuthorizerId) {
		return true
	}

	return false
}

// SetAuthorizerId gets a reference to the given UniqueIDType and assigns it to the AuthorizerId field.
func (o *AuthorizerInfoType) SetAuthorizerId(v UniqueIDType) {
	o.AuthorizerId = &v
}

// GetAuthorizerName returns the AuthorizerName field value if set, zero value otherwise.
func (o *AuthorizerInfoType) GetAuthorizerName() string {
	if o == nil || IsNil(o.AuthorizerName) {
		var ret string
		return ret
	}
	return *o.AuthorizerName
}

// GetAuthorizerNameOk returns a tuple with the AuthorizerName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizerInfoType) GetAuthorizerNameOk() (*string, bool) {
	if o == nil || IsNil(o.AuthorizerName) {
		return nil, false
	}
	return o.AuthorizerName, true
}

// HasAuthorizerName returns a boolean if a field has been set.
func (o *AuthorizerInfoType) HasAuthorizerName() bool {
	if o != nil && !IsNil(o.AuthorizerName) {
		return true
	}

	return false
}

// SetAuthorizerName gets a reference to the given string and assigns it to the AuthorizerName field.
func (o *AuthorizerInfoType) SetAuthorizerName(v string) {
	o.AuthorizerName = &v
}

// GetAuthorizerRateCode returns the AuthorizerRateCode field value if set, zero value otherwise.
func (o *AuthorizerInfoType) GetAuthorizerRateCode() string {
	if o == nil || IsNil(o.AuthorizerRateCode) {
		var ret string
		return ret
	}
	return *o.AuthorizerRateCode
}

// GetAuthorizerRateCodeOk returns a tuple with the AuthorizerRateCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizerInfoType) GetAuthorizerRateCodeOk() (*string, bool) {
	if o == nil || IsNil(o.AuthorizerRateCode) {
		return nil, false
	}
	return o.AuthorizerRateCode, true
}

// HasAuthorizerRateCode returns a boolean if a field has been set.
func (o *AuthorizerInfoType) HasAuthorizerRateCode() bool {
	if o != nil && !IsNil(o.AuthorizerRateCode) {
		return true
	}

	return false
}

// SetAuthorizerRateCode gets a reference to the given string and assigns it to the AuthorizerRateCode field.
func (o *AuthorizerInfoType) SetAuthorizerRateCode(v string) {
	o.AuthorizerRateCode = &v
}

// GetAuthorizerUserName returns the AuthorizerUserName field value if set, zero value otherwise.
func (o *AuthorizerInfoType) GetAuthorizerUserName() string {
	if o == nil || IsNil(o.AuthorizerUserName) {
		var ret string
		return ret
	}
	return *o.AuthorizerUserName
}

// GetAuthorizerUserNameOk returns a tuple with the AuthorizerUserName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizerInfoType) GetAuthorizerUserNameOk() (*string, bool) {
	if o == nil || IsNil(o.AuthorizerUserName) {
		return nil, false
	}
	return o.AuthorizerUserName, true
}

// HasAuthorizerUserName returns a boolean if a field has been set.
func (o *AuthorizerInfoType) HasAuthorizerUserName() bool {
	if o != nil && !IsNil(o.AuthorizerUserName) {
		return true
	}

	return false
}

// SetAuthorizerUserName gets a reference to the given string and assigns it to the AuthorizerUserName field.
func (o *AuthorizerInfoType) SetAuthorizerUserName(v string) {
	o.AuthorizerUserName = &v
}

// GetInheritAuthorizerRateCode returns the InheritAuthorizerRateCode field value if set, zero value otherwise.
func (o *AuthorizerInfoType) GetInheritAuthorizerRateCode() bool {
	if o == nil || IsNil(o.InheritAuthorizerRateCode) {
		var ret bool
		return ret
	}
	return *o.InheritAuthorizerRateCode
}

// GetInheritAuthorizerRateCodeOk returns a tuple with the InheritAuthorizerRateCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AuthorizerInfoType) GetInheritAuthorizerRateCodeOk() (*bool, bool) {
	if o == nil || IsNil(o.InheritAuthorizerRateCode) {
		return nil, false
	}
	return o.InheritAuthorizerRateCode, true
}

// HasInheritAuthorizerRateCode returns a boolean if a field has been set.
func (o *AuthorizerInfoType) HasInheritAuthorizerRateCode() bool {
	if o != nil && !IsNil(o.InheritAuthorizerRateCode) {
		return true
	}

	return false
}

// SetInheritAuthorizerRateCode gets a reference to the given bool and assigns it to the InheritAuthorizerRateCode field.
func (o *AuthorizerInfoType) SetInheritAuthorizerRateCode(v bool) {
	o.InheritAuthorizerRateCode = &v
}

func (o AuthorizerInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AuthorizerInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AuthorizerId) {
		toSerialize["authorizerId"] = o.AuthorizerId
	}
	if !IsNil(o.AuthorizerName) {
		toSerialize["authorizerName"] = o.AuthorizerName
	}
	if !IsNil(o.AuthorizerRateCode) {
		toSerialize["authorizerRateCode"] = o.AuthorizerRateCode
	}
	if !IsNil(o.AuthorizerUserName) {
		toSerialize["authorizerUserName"] = o.AuthorizerUserName
	}
	if !IsNil(o.InheritAuthorizerRateCode) {
		toSerialize["inheritAuthorizerRateCode"] = o.InheritAuthorizerRateCode
	}
	return toSerialize, nil
}

type NullableAuthorizerInfoType struct {
	value *AuthorizerInfoType
	isSet bool
}

func (v NullableAuthorizerInfoType) Get() *AuthorizerInfoType {
	return v.value
}

func (v *NullableAuthorizerInfoType) Set(val *AuthorizerInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableAuthorizerInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableAuthorizerInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAuthorizerInfoType(val *AuthorizerInfoType) *NullableAuthorizerInfoType {
	return &NullableAuthorizerInfoType{value: val, isSet: true}
}

func (v NullableAuthorizerInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAuthorizerInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


