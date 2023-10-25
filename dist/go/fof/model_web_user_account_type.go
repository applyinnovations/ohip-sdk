/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the WebUserAccountType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &WebUserAccountType{}

// WebUserAccountType Web User Account of the guest.
type WebUserAccountType struct {
	// A flag which determines if the password is auto generated.
	AutoGeneratePassword *bool `json:"autoGeneratePassword,omitempty"`
	// Comments.
	Comments *string `json:"comments,omitempty"`
	// Domain code.
	DomainCode *string `json:"domainCode,omitempty"`
	History *WebUserHistoryType `json:"history,omitempty"`
	// Boolean flag that indicates whether the web account is inactive or not.
	Inactive *bool `json:"inactive,omitempty"`
	// Boolean flag that indicates whether the web account is locked or not.
	Locked *bool `json:"locked,omitempty"`
	// Login Name of the guest.
	LoginName *string `json:"loginName,omitempty"`
	// New Login Name of the guest.
	NewLoginName *string `json:"newLoginName,omitempty"`
	// Login Password.
	NewPassword *string `json:"newPassword,omitempty"`
	// Answer to the Security Question.
	SecurityAnswer *string `json:"securityAnswer,omitempty"`
	SecurityQuestion *CodeDescriptionType `json:"securityQuestion,omitempty"`
}

// NewWebUserAccountType instantiates a new WebUserAccountType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewWebUserAccountType() *WebUserAccountType {
	this := WebUserAccountType{}
	return &this
}

// NewWebUserAccountTypeWithDefaults instantiates a new WebUserAccountType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewWebUserAccountTypeWithDefaults() *WebUserAccountType {
	this := WebUserAccountType{}
	return &this
}

// GetAutoGeneratePassword returns the AutoGeneratePassword field value if set, zero value otherwise.
func (o *WebUserAccountType) GetAutoGeneratePassword() bool {
	if o == nil || IsNil(o.AutoGeneratePassword) {
		var ret bool
		return ret
	}
	return *o.AutoGeneratePassword
}

// GetAutoGeneratePasswordOk returns a tuple with the AutoGeneratePassword field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WebUserAccountType) GetAutoGeneratePasswordOk() (*bool, bool) {
	if o == nil || IsNil(o.AutoGeneratePassword) {
		return nil, false
	}
	return o.AutoGeneratePassword, true
}

// HasAutoGeneratePassword returns a boolean if a field has been set.
func (o *WebUserAccountType) HasAutoGeneratePassword() bool {
	if o != nil && !IsNil(o.AutoGeneratePassword) {
		return true
	}

	return false
}

// SetAutoGeneratePassword gets a reference to the given bool and assigns it to the AutoGeneratePassword field.
func (o *WebUserAccountType) SetAutoGeneratePassword(v bool) {
	o.AutoGeneratePassword = &v
}

// GetComments returns the Comments field value if set, zero value otherwise.
func (o *WebUserAccountType) GetComments() string {
	if o == nil || IsNil(o.Comments) {
		var ret string
		return ret
	}
	return *o.Comments
}

// GetCommentsOk returns a tuple with the Comments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WebUserAccountType) GetCommentsOk() (*string, bool) {
	if o == nil || IsNil(o.Comments) {
		return nil, false
	}
	return o.Comments, true
}

// HasComments returns a boolean if a field has been set.
func (o *WebUserAccountType) HasComments() bool {
	if o != nil && !IsNil(o.Comments) {
		return true
	}

	return false
}

// SetComments gets a reference to the given string and assigns it to the Comments field.
func (o *WebUserAccountType) SetComments(v string) {
	o.Comments = &v
}

// GetDomainCode returns the DomainCode field value if set, zero value otherwise.
func (o *WebUserAccountType) GetDomainCode() string {
	if o == nil || IsNil(o.DomainCode) {
		var ret string
		return ret
	}
	return *o.DomainCode
}

// GetDomainCodeOk returns a tuple with the DomainCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WebUserAccountType) GetDomainCodeOk() (*string, bool) {
	if o == nil || IsNil(o.DomainCode) {
		return nil, false
	}
	return o.DomainCode, true
}

// HasDomainCode returns a boolean if a field has been set.
func (o *WebUserAccountType) HasDomainCode() bool {
	if o != nil && !IsNil(o.DomainCode) {
		return true
	}

	return false
}

// SetDomainCode gets a reference to the given string and assigns it to the DomainCode field.
func (o *WebUserAccountType) SetDomainCode(v string) {
	o.DomainCode = &v
}

// GetHistory returns the History field value if set, zero value otherwise.
func (o *WebUserAccountType) GetHistory() WebUserHistoryType {
	if o == nil || IsNil(o.History) {
		var ret WebUserHistoryType
		return ret
	}
	return *o.History
}

// GetHistoryOk returns a tuple with the History field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WebUserAccountType) GetHistoryOk() (*WebUserHistoryType, bool) {
	if o == nil || IsNil(o.History) {
		return nil, false
	}
	return o.History, true
}

// HasHistory returns a boolean if a field has been set.
func (o *WebUserAccountType) HasHistory() bool {
	if o != nil && !IsNil(o.History) {
		return true
	}

	return false
}

// SetHistory gets a reference to the given WebUserHistoryType and assigns it to the History field.
func (o *WebUserAccountType) SetHistory(v WebUserHistoryType) {
	o.History = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *WebUserAccountType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WebUserAccountType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *WebUserAccountType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *WebUserAccountType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetLocked returns the Locked field value if set, zero value otherwise.
func (o *WebUserAccountType) GetLocked() bool {
	if o == nil || IsNil(o.Locked) {
		var ret bool
		return ret
	}
	return *o.Locked
}

// GetLockedOk returns a tuple with the Locked field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WebUserAccountType) GetLockedOk() (*bool, bool) {
	if o == nil || IsNil(o.Locked) {
		return nil, false
	}
	return o.Locked, true
}

// HasLocked returns a boolean if a field has been set.
func (o *WebUserAccountType) HasLocked() bool {
	if o != nil && !IsNil(o.Locked) {
		return true
	}

	return false
}

// SetLocked gets a reference to the given bool and assigns it to the Locked field.
func (o *WebUserAccountType) SetLocked(v bool) {
	o.Locked = &v
}

// GetLoginName returns the LoginName field value if set, zero value otherwise.
func (o *WebUserAccountType) GetLoginName() string {
	if o == nil || IsNil(o.LoginName) {
		var ret string
		return ret
	}
	return *o.LoginName
}

// GetLoginNameOk returns a tuple with the LoginName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WebUserAccountType) GetLoginNameOk() (*string, bool) {
	if o == nil || IsNil(o.LoginName) {
		return nil, false
	}
	return o.LoginName, true
}

// HasLoginName returns a boolean if a field has been set.
func (o *WebUserAccountType) HasLoginName() bool {
	if o != nil && !IsNil(o.LoginName) {
		return true
	}

	return false
}

// SetLoginName gets a reference to the given string and assigns it to the LoginName field.
func (o *WebUserAccountType) SetLoginName(v string) {
	o.LoginName = &v
}

// GetNewLoginName returns the NewLoginName field value if set, zero value otherwise.
func (o *WebUserAccountType) GetNewLoginName() string {
	if o == nil || IsNil(o.NewLoginName) {
		var ret string
		return ret
	}
	return *o.NewLoginName
}

// GetNewLoginNameOk returns a tuple with the NewLoginName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WebUserAccountType) GetNewLoginNameOk() (*string, bool) {
	if o == nil || IsNil(o.NewLoginName) {
		return nil, false
	}
	return o.NewLoginName, true
}

// HasNewLoginName returns a boolean if a field has been set.
func (o *WebUserAccountType) HasNewLoginName() bool {
	if o != nil && !IsNil(o.NewLoginName) {
		return true
	}

	return false
}

// SetNewLoginName gets a reference to the given string and assigns it to the NewLoginName field.
func (o *WebUserAccountType) SetNewLoginName(v string) {
	o.NewLoginName = &v
}

// GetNewPassword returns the NewPassword field value if set, zero value otherwise.
func (o *WebUserAccountType) GetNewPassword() string {
	if o == nil || IsNil(o.NewPassword) {
		var ret string
		return ret
	}
	return *o.NewPassword
}

// GetNewPasswordOk returns a tuple with the NewPassword field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WebUserAccountType) GetNewPasswordOk() (*string, bool) {
	if o == nil || IsNil(o.NewPassword) {
		return nil, false
	}
	return o.NewPassword, true
}

// HasNewPassword returns a boolean if a field has been set.
func (o *WebUserAccountType) HasNewPassword() bool {
	if o != nil && !IsNil(o.NewPassword) {
		return true
	}

	return false
}

// SetNewPassword gets a reference to the given string and assigns it to the NewPassword field.
func (o *WebUserAccountType) SetNewPassword(v string) {
	o.NewPassword = &v
}

// GetSecurityAnswer returns the SecurityAnswer field value if set, zero value otherwise.
func (o *WebUserAccountType) GetSecurityAnswer() string {
	if o == nil || IsNil(o.SecurityAnswer) {
		var ret string
		return ret
	}
	return *o.SecurityAnswer
}

// GetSecurityAnswerOk returns a tuple with the SecurityAnswer field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WebUserAccountType) GetSecurityAnswerOk() (*string, bool) {
	if o == nil || IsNil(o.SecurityAnswer) {
		return nil, false
	}
	return o.SecurityAnswer, true
}

// HasSecurityAnswer returns a boolean if a field has been set.
func (o *WebUserAccountType) HasSecurityAnswer() bool {
	if o != nil && !IsNil(o.SecurityAnswer) {
		return true
	}

	return false
}

// SetSecurityAnswer gets a reference to the given string and assigns it to the SecurityAnswer field.
func (o *WebUserAccountType) SetSecurityAnswer(v string) {
	o.SecurityAnswer = &v
}

// GetSecurityQuestion returns the SecurityQuestion field value if set, zero value otherwise.
func (o *WebUserAccountType) GetSecurityQuestion() CodeDescriptionType {
	if o == nil || IsNil(o.SecurityQuestion) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.SecurityQuestion
}

// GetSecurityQuestionOk returns a tuple with the SecurityQuestion field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WebUserAccountType) GetSecurityQuestionOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.SecurityQuestion) {
		return nil, false
	}
	return o.SecurityQuestion, true
}

// HasSecurityQuestion returns a boolean if a field has been set.
func (o *WebUserAccountType) HasSecurityQuestion() bool {
	if o != nil && !IsNil(o.SecurityQuestion) {
		return true
	}

	return false
}

// SetSecurityQuestion gets a reference to the given CodeDescriptionType and assigns it to the SecurityQuestion field.
func (o *WebUserAccountType) SetSecurityQuestion(v CodeDescriptionType) {
	o.SecurityQuestion = &v
}

func (o WebUserAccountType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o WebUserAccountType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AutoGeneratePassword) {
		toSerialize["autoGeneratePassword"] = o.AutoGeneratePassword
	}
	if !IsNil(o.Comments) {
		toSerialize["comments"] = o.Comments
	}
	if !IsNil(o.DomainCode) {
		toSerialize["domainCode"] = o.DomainCode
	}
	if !IsNil(o.History) {
		toSerialize["history"] = o.History
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.Locked) {
		toSerialize["locked"] = o.Locked
	}
	if !IsNil(o.LoginName) {
		toSerialize["loginName"] = o.LoginName
	}
	if !IsNil(o.NewLoginName) {
		toSerialize["newLoginName"] = o.NewLoginName
	}
	if !IsNil(o.NewPassword) {
		toSerialize["newPassword"] = o.NewPassword
	}
	if !IsNil(o.SecurityAnswer) {
		toSerialize["securityAnswer"] = o.SecurityAnswer
	}
	if !IsNil(o.SecurityQuestion) {
		toSerialize["securityQuestion"] = o.SecurityQuestion
	}
	return toSerialize, nil
}

type NullableWebUserAccountType struct {
	value *WebUserAccountType
	isSet bool
}

func (v NullableWebUserAccountType) Get() *WebUserAccountType {
	return v.value
}

func (v *NullableWebUserAccountType) Set(val *WebUserAccountType) {
	v.value = val
	v.isSet = true
}

func (v NullableWebUserAccountType) IsSet() bool {
	return v.isSet
}

func (v *NullableWebUserAccountType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableWebUserAccountType(val *WebUserAccountType) *NullableWebUserAccountType {
	return &NullableWebUserAccountType{value: val, isSet: true}
}

func (v NullableWebUserAccountType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableWebUserAccountType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


