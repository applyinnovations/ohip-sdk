/*
oAuth API for OHIP

REST API to obtain an OAuth token from the Oracle Hospitality Integration Platform.  <p>For authenticating to Distribution APIs please use the Early Release OPERA Cloud Distribution Authentication API.</p><br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 21.5.0.0
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package oauth

import (
	"encoding/json"
)

// checks if the OAuth2TokenResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &OAuth2TokenResponse{}

// OAuth2TokenResponse OAuth2 token object sent as a response to the token request
type OAuth2TokenResponse struct {
	// The access token.  Include this in the header for every subsequent request.
	AccessToken string `json:"access_token"`
	// Time in seconds for the access token to expire (typically, 3600 i.e. 60 minutes)
	ExpiresIn *int64 `json:"expires_in,omitempty"`
	// The type of access token issued (Bearer).
	TokenType *string `json:"token_type,omitempty"`
	// Always user_assertion.
	OracleTkContext *string `json:"oracle_tk_context,omitempty"`
}

// NewOAuth2TokenResponse instantiates a new OAuth2TokenResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewOAuth2TokenResponse(accessToken string) *OAuth2TokenResponse {
	this := OAuth2TokenResponse{}
	this.AccessToken = accessToken
	return &this
}

// NewOAuth2TokenResponseWithDefaults instantiates a new OAuth2TokenResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewOAuth2TokenResponseWithDefaults() *OAuth2TokenResponse {
	this := OAuth2TokenResponse{}
	return &this
}

// GetAccessToken returns the AccessToken field value
func (o *OAuth2TokenResponse) GetAccessToken() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.AccessToken
}

// GetAccessTokenOk returns a tuple with the AccessToken field value
// and a boolean to check if the value has been set.
func (o *OAuth2TokenResponse) GetAccessTokenOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.AccessToken, true
}

// SetAccessToken sets field value
func (o *OAuth2TokenResponse) SetAccessToken(v string) {
	o.AccessToken = v
}

// GetExpiresIn returns the ExpiresIn field value if set, zero value otherwise.
func (o *OAuth2TokenResponse) GetExpiresIn() int64 {
	if o == nil || IsNil(o.ExpiresIn) {
		var ret int64
		return ret
	}
	return *o.ExpiresIn
}

// GetExpiresInOk returns a tuple with the ExpiresIn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OAuth2TokenResponse) GetExpiresInOk() (*int64, bool) {
	if o == nil || IsNil(o.ExpiresIn) {
		return nil, false
	}
	return o.ExpiresIn, true
}

// HasExpiresIn returns a boolean if a field has been set.
func (o *OAuth2TokenResponse) HasExpiresIn() bool {
	if o != nil && !IsNil(o.ExpiresIn) {
		return true
	}

	return false
}

// SetExpiresIn gets a reference to the given int64 and assigns it to the ExpiresIn field.
func (o *OAuth2TokenResponse) SetExpiresIn(v int64) {
	o.ExpiresIn = &v
}

// GetTokenType returns the TokenType field value if set, zero value otherwise.
func (o *OAuth2TokenResponse) GetTokenType() string {
	if o == nil || IsNil(o.TokenType) {
		var ret string
		return ret
	}
	return *o.TokenType
}

// GetTokenTypeOk returns a tuple with the TokenType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OAuth2TokenResponse) GetTokenTypeOk() (*string, bool) {
	if o == nil || IsNil(o.TokenType) {
		return nil, false
	}
	return o.TokenType, true
}

// HasTokenType returns a boolean if a field has been set.
func (o *OAuth2TokenResponse) HasTokenType() bool {
	if o != nil && !IsNil(o.TokenType) {
		return true
	}

	return false
}

// SetTokenType gets a reference to the given string and assigns it to the TokenType field.
func (o *OAuth2TokenResponse) SetTokenType(v string) {
	o.TokenType = &v
}

// GetOracleTkContext returns the OracleTkContext field value if set, zero value otherwise.
func (o *OAuth2TokenResponse) GetOracleTkContext() string {
	if o == nil || IsNil(o.OracleTkContext) {
		var ret string
		return ret
	}
	return *o.OracleTkContext
}

// GetOracleTkContextOk returns a tuple with the OracleTkContext field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OAuth2TokenResponse) GetOracleTkContextOk() (*string, bool) {
	if o == nil || IsNil(o.OracleTkContext) {
		return nil, false
	}
	return o.OracleTkContext, true
}

// HasOracleTkContext returns a boolean if a field has been set.
func (o *OAuth2TokenResponse) HasOracleTkContext() bool {
	if o != nil && !IsNil(o.OracleTkContext) {
		return true
	}

	return false
}

// SetOracleTkContext gets a reference to the given string and assigns it to the OracleTkContext field.
func (o *OAuth2TokenResponse) SetOracleTkContext(v string) {
	o.OracleTkContext = &v
}

func (o OAuth2TokenResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o OAuth2TokenResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["access_token"] = o.AccessToken
	if !IsNil(o.ExpiresIn) {
		toSerialize["expires_in"] = o.ExpiresIn
	}
	if !IsNil(o.TokenType) {
		toSerialize["token_type"] = o.TokenType
	}
	if !IsNil(o.OracleTkContext) {
		toSerialize["oracle_tk_context"] = o.OracleTkContext
	}
	return toSerialize, nil
}

type NullableOAuth2TokenResponse struct {
	value *OAuth2TokenResponse
	isSet bool
}

func (v NullableOAuth2TokenResponse) Get() *OAuth2TokenResponse {
	return v.value
}

func (v *NullableOAuth2TokenResponse) Set(val *OAuth2TokenResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableOAuth2TokenResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableOAuth2TokenResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOAuth2TokenResponse(val *OAuth2TokenResponse) *NullableOAuth2TokenResponse {
	return &NullableOAuth2TokenResponse{value: val, isSet: true}
}

func (v NullableOAuth2TokenResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOAuth2TokenResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


