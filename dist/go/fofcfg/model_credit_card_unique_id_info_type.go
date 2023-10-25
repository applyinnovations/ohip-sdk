/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the CreditCardUniqueIdInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CreditCardUniqueIdInfoType{}

// CreditCardUniqueIdInfoType Information about the credit card unique id.
type CreditCardUniqueIdInfoType struct {
	ActionType *CreditCardServiceActionType `json:"actionType,omitempty"`
	// Flag to determine if the credit card was swiped/manually entered , This element is only used when PAYMENT SERVICES DIRECTIVE (PSD2) Opera Control is active.
	CardPresent *bool `json:"cardPresent,omitempty"`
	// Customer Initiated Transaction(CIT) Id for Credit Cards. This is only used when PAYMENT SERVICES DIRECTIVE (PSD2) Opera Control is active.
	CitId *string `json:"citId,omitempty"`
	// Card name holder.
	CreditCardName *string `json:"creditCardName,omitempty"`
	// Credit card number.
	CreditCardNumber *string `json:"creditCardNumber,omitempty"`
	// Last 4 digits of a credit card.
	CreditCardNumberLast4Digits *string `json:"creditCardNumberLast4Digits,omitempty"`
	// Credit card type.
	CreditCardType *string `json:"creditCardType,omitempty"`
	// Error code for a unique id request failure.
	ErrorCode *string `json:"errorCode,omitempty"`
	// Error message for a unique id request failure.
	ErrorMessage *string `json:"errorMessage,omitempty"`
	// Expiration date in string representation.
	ExpirationDateString *string `json:"expirationDateString,omitempty"`
	// Success flag after requesting a unique id.
	SuccessYn *string `json:"successYn,omitempty"`
	// Terminal ID from where this request originated.
	TerminalId *string `json:"terminalId,omitempty"`
	// Unique id of credit card.
	UniqueId *string `json:"uniqueId,omitempty"`
}

// NewCreditCardUniqueIdInfoType instantiates a new CreditCardUniqueIdInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCreditCardUniqueIdInfoType() *CreditCardUniqueIdInfoType {
	this := CreditCardUniqueIdInfoType{}
	return &this
}

// NewCreditCardUniqueIdInfoTypeWithDefaults instantiates a new CreditCardUniqueIdInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCreditCardUniqueIdInfoTypeWithDefaults() *CreditCardUniqueIdInfoType {
	this := CreditCardUniqueIdInfoType{}
	return &this
}

// GetActionType returns the ActionType field value if set, zero value otherwise.
func (o *CreditCardUniqueIdInfoType) GetActionType() CreditCardServiceActionType {
	if o == nil || IsNil(o.ActionType) {
		var ret CreditCardServiceActionType
		return ret
	}
	return *o.ActionType
}

// GetActionTypeOk returns a tuple with the ActionType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreditCardUniqueIdInfoType) GetActionTypeOk() (*CreditCardServiceActionType, bool) {
	if o == nil || IsNil(o.ActionType) {
		return nil, false
	}
	return o.ActionType, true
}

// HasActionType returns a boolean if a field has been set.
func (o *CreditCardUniqueIdInfoType) HasActionType() bool {
	if o != nil && !IsNil(o.ActionType) {
		return true
	}

	return false
}

// SetActionType gets a reference to the given CreditCardServiceActionType and assigns it to the ActionType field.
func (o *CreditCardUniqueIdInfoType) SetActionType(v CreditCardServiceActionType) {
	o.ActionType = &v
}

// GetCardPresent returns the CardPresent field value if set, zero value otherwise.
func (o *CreditCardUniqueIdInfoType) GetCardPresent() bool {
	if o == nil || IsNil(o.CardPresent) {
		var ret bool
		return ret
	}
	return *o.CardPresent
}

// GetCardPresentOk returns a tuple with the CardPresent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreditCardUniqueIdInfoType) GetCardPresentOk() (*bool, bool) {
	if o == nil || IsNil(o.CardPresent) {
		return nil, false
	}
	return o.CardPresent, true
}

// HasCardPresent returns a boolean if a field has been set.
func (o *CreditCardUniqueIdInfoType) HasCardPresent() bool {
	if o != nil && !IsNil(o.CardPresent) {
		return true
	}

	return false
}

// SetCardPresent gets a reference to the given bool and assigns it to the CardPresent field.
func (o *CreditCardUniqueIdInfoType) SetCardPresent(v bool) {
	o.CardPresent = &v
}

// GetCitId returns the CitId field value if set, zero value otherwise.
func (o *CreditCardUniqueIdInfoType) GetCitId() string {
	if o == nil || IsNil(o.CitId) {
		var ret string
		return ret
	}
	return *o.CitId
}

// GetCitIdOk returns a tuple with the CitId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreditCardUniqueIdInfoType) GetCitIdOk() (*string, bool) {
	if o == nil || IsNil(o.CitId) {
		return nil, false
	}
	return o.CitId, true
}

// HasCitId returns a boolean if a field has been set.
func (o *CreditCardUniqueIdInfoType) HasCitId() bool {
	if o != nil && !IsNil(o.CitId) {
		return true
	}

	return false
}

// SetCitId gets a reference to the given string and assigns it to the CitId field.
func (o *CreditCardUniqueIdInfoType) SetCitId(v string) {
	o.CitId = &v
}

// GetCreditCardName returns the CreditCardName field value if set, zero value otherwise.
func (o *CreditCardUniqueIdInfoType) GetCreditCardName() string {
	if o == nil || IsNil(o.CreditCardName) {
		var ret string
		return ret
	}
	return *o.CreditCardName
}

// GetCreditCardNameOk returns a tuple with the CreditCardName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreditCardUniqueIdInfoType) GetCreditCardNameOk() (*string, bool) {
	if o == nil || IsNil(o.CreditCardName) {
		return nil, false
	}
	return o.CreditCardName, true
}

// HasCreditCardName returns a boolean if a field has been set.
func (o *CreditCardUniqueIdInfoType) HasCreditCardName() bool {
	if o != nil && !IsNil(o.CreditCardName) {
		return true
	}

	return false
}

// SetCreditCardName gets a reference to the given string and assigns it to the CreditCardName field.
func (o *CreditCardUniqueIdInfoType) SetCreditCardName(v string) {
	o.CreditCardName = &v
}

// GetCreditCardNumber returns the CreditCardNumber field value if set, zero value otherwise.
func (o *CreditCardUniqueIdInfoType) GetCreditCardNumber() string {
	if o == nil || IsNil(o.CreditCardNumber) {
		var ret string
		return ret
	}
	return *o.CreditCardNumber
}

// GetCreditCardNumberOk returns a tuple with the CreditCardNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreditCardUniqueIdInfoType) GetCreditCardNumberOk() (*string, bool) {
	if o == nil || IsNil(o.CreditCardNumber) {
		return nil, false
	}
	return o.CreditCardNumber, true
}

// HasCreditCardNumber returns a boolean if a field has been set.
func (o *CreditCardUniqueIdInfoType) HasCreditCardNumber() bool {
	if o != nil && !IsNil(o.CreditCardNumber) {
		return true
	}

	return false
}

// SetCreditCardNumber gets a reference to the given string and assigns it to the CreditCardNumber field.
func (o *CreditCardUniqueIdInfoType) SetCreditCardNumber(v string) {
	o.CreditCardNumber = &v
}

// GetCreditCardNumberLast4Digits returns the CreditCardNumberLast4Digits field value if set, zero value otherwise.
func (o *CreditCardUniqueIdInfoType) GetCreditCardNumberLast4Digits() string {
	if o == nil || IsNil(o.CreditCardNumberLast4Digits) {
		var ret string
		return ret
	}
	return *o.CreditCardNumberLast4Digits
}

// GetCreditCardNumberLast4DigitsOk returns a tuple with the CreditCardNumberLast4Digits field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreditCardUniqueIdInfoType) GetCreditCardNumberLast4DigitsOk() (*string, bool) {
	if o == nil || IsNil(o.CreditCardNumberLast4Digits) {
		return nil, false
	}
	return o.CreditCardNumberLast4Digits, true
}

// HasCreditCardNumberLast4Digits returns a boolean if a field has been set.
func (o *CreditCardUniqueIdInfoType) HasCreditCardNumberLast4Digits() bool {
	if o != nil && !IsNil(o.CreditCardNumberLast4Digits) {
		return true
	}

	return false
}

// SetCreditCardNumberLast4Digits gets a reference to the given string and assigns it to the CreditCardNumberLast4Digits field.
func (o *CreditCardUniqueIdInfoType) SetCreditCardNumberLast4Digits(v string) {
	o.CreditCardNumberLast4Digits = &v
}

// GetCreditCardType returns the CreditCardType field value if set, zero value otherwise.
func (o *CreditCardUniqueIdInfoType) GetCreditCardType() string {
	if o == nil || IsNil(o.CreditCardType) {
		var ret string
		return ret
	}
	return *o.CreditCardType
}

// GetCreditCardTypeOk returns a tuple with the CreditCardType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreditCardUniqueIdInfoType) GetCreditCardTypeOk() (*string, bool) {
	if o == nil || IsNil(o.CreditCardType) {
		return nil, false
	}
	return o.CreditCardType, true
}

// HasCreditCardType returns a boolean if a field has been set.
func (o *CreditCardUniqueIdInfoType) HasCreditCardType() bool {
	if o != nil && !IsNil(o.CreditCardType) {
		return true
	}

	return false
}

// SetCreditCardType gets a reference to the given string and assigns it to the CreditCardType field.
func (o *CreditCardUniqueIdInfoType) SetCreditCardType(v string) {
	o.CreditCardType = &v
}

// GetErrorCode returns the ErrorCode field value if set, zero value otherwise.
func (o *CreditCardUniqueIdInfoType) GetErrorCode() string {
	if o == nil || IsNil(o.ErrorCode) {
		var ret string
		return ret
	}
	return *o.ErrorCode
}

// GetErrorCodeOk returns a tuple with the ErrorCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreditCardUniqueIdInfoType) GetErrorCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ErrorCode) {
		return nil, false
	}
	return o.ErrorCode, true
}

// HasErrorCode returns a boolean if a field has been set.
func (o *CreditCardUniqueIdInfoType) HasErrorCode() bool {
	if o != nil && !IsNil(o.ErrorCode) {
		return true
	}

	return false
}

// SetErrorCode gets a reference to the given string and assigns it to the ErrorCode field.
func (o *CreditCardUniqueIdInfoType) SetErrorCode(v string) {
	o.ErrorCode = &v
}

// GetErrorMessage returns the ErrorMessage field value if set, zero value otherwise.
func (o *CreditCardUniqueIdInfoType) GetErrorMessage() string {
	if o == nil || IsNil(o.ErrorMessage) {
		var ret string
		return ret
	}
	return *o.ErrorMessage
}

// GetErrorMessageOk returns a tuple with the ErrorMessage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreditCardUniqueIdInfoType) GetErrorMessageOk() (*string, bool) {
	if o == nil || IsNil(o.ErrorMessage) {
		return nil, false
	}
	return o.ErrorMessage, true
}

// HasErrorMessage returns a boolean if a field has been set.
func (o *CreditCardUniqueIdInfoType) HasErrorMessage() bool {
	if o != nil && !IsNil(o.ErrorMessage) {
		return true
	}

	return false
}

// SetErrorMessage gets a reference to the given string and assigns it to the ErrorMessage field.
func (o *CreditCardUniqueIdInfoType) SetErrorMessage(v string) {
	o.ErrorMessage = &v
}

// GetExpirationDateString returns the ExpirationDateString field value if set, zero value otherwise.
func (o *CreditCardUniqueIdInfoType) GetExpirationDateString() string {
	if o == nil || IsNil(o.ExpirationDateString) {
		var ret string
		return ret
	}
	return *o.ExpirationDateString
}

// GetExpirationDateStringOk returns a tuple with the ExpirationDateString field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreditCardUniqueIdInfoType) GetExpirationDateStringOk() (*string, bool) {
	if o == nil || IsNil(o.ExpirationDateString) {
		return nil, false
	}
	return o.ExpirationDateString, true
}

// HasExpirationDateString returns a boolean if a field has been set.
func (o *CreditCardUniqueIdInfoType) HasExpirationDateString() bool {
	if o != nil && !IsNil(o.ExpirationDateString) {
		return true
	}

	return false
}

// SetExpirationDateString gets a reference to the given string and assigns it to the ExpirationDateString field.
func (o *CreditCardUniqueIdInfoType) SetExpirationDateString(v string) {
	o.ExpirationDateString = &v
}

// GetSuccessYn returns the SuccessYn field value if set, zero value otherwise.
func (o *CreditCardUniqueIdInfoType) GetSuccessYn() string {
	if o == nil || IsNil(o.SuccessYn) {
		var ret string
		return ret
	}
	return *o.SuccessYn
}

// GetSuccessYnOk returns a tuple with the SuccessYn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreditCardUniqueIdInfoType) GetSuccessYnOk() (*string, bool) {
	if o == nil || IsNil(o.SuccessYn) {
		return nil, false
	}
	return o.SuccessYn, true
}

// HasSuccessYn returns a boolean if a field has been set.
func (o *CreditCardUniqueIdInfoType) HasSuccessYn() bool {
	if o != nil && !IsNil(o.SuccessYn) {
		return true
	}

	return false
}

// SetSuccessYn gets a reference to the given string and assigns it to the SuccessYn field.
func (o *CreditCardUniqueIdInfoType) SetSuccessYn(v string) {
	o.SuccessYn = &v
}

// GetTerminalId returns the TerminalId field value if set, zero value otherwise.
func (o *CreditCardUniqueIdInfoType) GetTerminalId() string {
	if o == nil || IsNil(o.TerminalId) {
		var ret string
		return ret
	}
	return *o.TerminalId
}

// GetTerminalIdOk returns a tuple with the TerminalId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreditCardUniqueIdInfoType) GetTerminalIdOk() (*string, bool) {
	if o == nil || IsNil(o.TerminalId) {
		return nil, false
	}
	return o.TerminalId, true
}

// HasTerminalId returns a boolean if a field has been set.
func (o *CreditCardUniqueIdInfoType) HasTerminalId() bool {
	if o != nil && !IsNil(o.TerminalId) {
		return true
	}

	return false
}

// SetTerminalId gets a reference to the given string and assigns it to the TerminalId field.
func (o *CreditCardUniqueIdInfoType) SetTerminalId(v string) {
	o.TerminalId = &v
}

// GetUniqueId returns the UniqueId field value if set, zero value otherwise.
func (o *CreditCardUniqueIdInfoType) GetUniqueId() string {
	if o == nil || IsNil(o.UniqueId) {
		var ret string
		return ret
	}
	return *o.UniqueId
}

// GetUniqueIdOk returns a tuple with the UniqueId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreditCardUniqueIdInfoType) GetUniqueIdOk() (*string, bool) {
	if o == nil || IsNil(o.UniqueId) {
		return nil, false
	}
	return o.UniqueId, true
}

// HasUniqueId returns a boolean if a field has been set.
func (o *CreditCardUniqueIdInfoType) HasUniqueId() bool {
	if o != nil && !IsNil(o.UniqueId) {
		return true
	}

	return false
}

// SetUniqueId gets a reference to the given string and assigns it to the UniqueId field.
func (o *CreditCardUniqueIdInfoType) SetUniqueId(v string) {
	o.UniqueId = &v
}

func (o CreditCardUniqueIdInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CreditCardUniqueIdInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActionType) {
		toSerialize["actionType"] = o.ActionType
	}
	if !IsNil(o.CardPresent) {
		toSerialize["cardPresent"] = o.CardPresent
	}
	if !IsNil(o.CitId) {
		toSerialize["citId"] = o.CitId
	}
	if !IsNil(o.CreditCardName) {
		toSerialize["creditCardName"] = o.CreditCardName
	}
	if !IsNil(o.CreditCardNumber) {
		toSerialize["creditCardNumber"] = o.CreditCardNumber
	}
	if !IsNil(o.CreditCardNumberLast4Digits) {
		toSerialize["creditCardNumberLast4Digits"] = o.CreditCardNumberLast4Digits
	}
	if !IsNil(o.CreditCardType) {
		toSerialize["creditCardType"] = o.CreditCardType
	}
	if !IsNil(o.ErrorCode) {
		toSerialize["errorCode"] = o.ErrorCode
	}
	if !IsNil(o.ErrorMessage) {
		toSerialize["errorMessage"] = o.ErrorMessage
	}
	if !IsNil(o.ExpirationDateString) {
		toSerialize["expirationDateString"] = o.ExpirationDateString
	}
	if !IsNil(o.SuccessYn) {
		toSerialize["successYn"] = o.SuccessYn
	}
	if !IsNil(o.TerminalId) {
		toSerialize["terminalId"] = o.TerminalId
	}
	if !IsNil(o.UniqueId) {
		toSerialize["uniqueId"] = o.UniqueId
	}
	return toSerialize, nil
}

type NullableCreditCardUniqueIdInfoType struct {
	value *CreditCardUniqueIdInfoType
	isSet bool
}

func (v NullableCreditCardUniqueIdInfoType) Get() *CreditCardUniqueIdInfoType {
	return v.value
}

func (v *NullableCreditCardUniqueIdInfoType) Set(val *CreditCardUniqueIdInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableCreditCardUniqueIdInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableCreditCardUniqueIdInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCreditCardUniqueIdInfoType(val *CreditCardUniqueIdInfoType) *NullableCreditCardUniqueIdInfoType {
	return &NullableCreditCardUniqueIdInfoType{value: val, isSet: true}
}

func (v NullableCreditCardUniqueIdInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCreditCardUniqueIdInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


