/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the ResPaymentCardType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResPaymentCardType{}

// ResPaymentCardType Information on a credit card for the customer.
type ResPaymentCardType struct {
	ApprovalAmountNeeded *CurrencyAmountType `json:"approvalAmountNeeded,omitempty"`
	// Approval code sent by the credit card company on a successful authorization.
	ApprovalCode *string `json:"approvalCode,omitempty"`
	// Attach the credit card to profile.
	AttachCreditCardToProfile *bool `json:"attachCreditCardToProfile,omitempty"`
	CardHolderName *string `json:"cardHolderName,omitempty"`
	CardId *UniqueIDType `json:"cardId,omitempty"`
	CardNumber *string `json:"cardNumber,omitempty"`
	CardNumberLast4Digits *string `json:"cardNumberLast4Digits,omitempty"`
	CardNumberMasked *string `json:"cardNumberMasked,omitempty"`
	CardOrToken *CardNumberTypeType `json:"cardOrToken,omitempty"`
	// Flag to determine if the credit card was swiped/manually entered , This element is only used when PAYMENT SERVICE DIRECTIVE(PSD) Opera Control is active.
	CardPresent *bool `json:"cardPresent,omitempty"`
	CardType *CardTypeType `json:"cardType,omitempty"`
	// Customer Initiated Transaction(CIT) Id for Credit Cards. This is only used when PAYMENT SERVICES DIRECTIVE (PSD2) Opera Control is active.
	CitId *string `json:"citId,omitempty"`
	CurrentAuthorizedAmount *CurrencyAmountType `json:"currentAuthorizedAmount,omitempty"`
	// Expiration date of the credit card
	ExpirationDate *string `json:"expirationDate,omitempty"`
	ExpirationDateExpired *bool `json:"expirationDateExpired,omitempty"`
	// Masked Expiration date of the credit card
	ExpirationDateMasked *string `json:"expirationDateMasked,omitempty"`
	Processing *CardProcessingType `json:"processing,omitempty"`
	Swiped *bool `json:"swiped,omitempty"`
	// Indicates the user defined credit card type if credit card type from a defined list is not provided
	UserDefinedCardType *string `json:"userDefinedCardType,omitempty"`
}

// NewResPaymentCardType instantiates a new ResPaymentCardType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResPaymentCardType() *ResPaymentCardType {
	this := ResPaymentCardType{}
	return &this
}

// NewResPaymentCardTypeWithDefaults instantiates a new ResPaymentCardType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResPaymentCardTypeWithDefaults() *ResPaymentCardType {
	this := ResPaymentCardType{}
	return &this
}

// GetApprovalAmountNeeded returns the ApprovalAmountNeeded field value if set, zero value otherwise.
func (o *ResPaymentCardType) GetApprovalAmountNeeded() CurrencyAmountType {
	if o == nil || IsNil(o.ApprovalAmountNeeded) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.ApprovalAmountNeeded
}

// GetApprovalAmountNeededOk returns a tuple with the ApprovalAmountNeeded field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPaymentCardType) GetApprovalAmountNeededOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.ApprovalAmountNeeded) {
		return nil, false
	}
	return o.ApprovalAmountNeeded, true
}

// HasApprovalAmountNeeded returns a boolean if a field has been set.
func (o *ResPaymentCardType) HasApprovalAmountNeeded() bool {
	if o != nil && !IsNil(o.ApprovalAmountNeeded) {
		return true
	}

	return false
}

// SetApprovalAmountNeeded gets a reference to the given CurrencyAmountType and assigns it to the ApprovalAmountNeeded field.
func (o *ResPaymentCardType) SetApprovalAmountNeeded(v CurrencyAmountType) {
	o.ApprovalAmountNeeded = &v
}

// GetApprovalCode returns the ApprovalCode field value if set, zero value otherwise.
func (o *ResPaymentCardType) GetApprovalCode() string {
	if o == nil || IsNil(o.ApprovalCode) {
		var ret string
		return ret
	}
	return *o.ApprovalCode
}

// GetApprovalCodeOk returns a tuple with the ApprovalCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPaymentCardType) GetApprovalCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ApprovalCode) {
		return nil, false
	}
	return o.ApprovalCode, true
}

// HasApprovalCode returns a boolean if a field has been set.
func (o *ResPaymentCardType) HasApprovalCode() bool {
	if o != nil && !IsNil(o.ApprovalCode) {
		return true
	}

	return false
}

// SetApprovalCode gets a reference to the given string and assigns it to the ApprovalCode field.
func (o *ResPaymentCardType) SetApprovalCode(v string) {
	o.ApprovalCode = &v
}

// GetAttachCreditCardToProfile returns the AttachCreditCardToProfile field value if set, zero value otherwise.
func (o *ResPaymentCardType) GetAttachCreditCardToProfile() bool {
	if o == nil || IsNil(o.AttachCreditCardToProfile) {
		var ret bool
		return ret
	}
	return *o.AttachCreditCardToProfile
}

// GetAttachCreditCardToProfileOk returns a tuple with the AttachCreditCardToProfile field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPaymentCardType) GetAttachCreditCardToProfileOk() (*bool, bool) {
	if o == nil || IsNil(o.AttachCreditCardToProfile) {
		return nil, false
	}
	return o.AttachCreditCardToProfile, true
}

// HasAttachCreditCardToProfile returns a boolean if a field has been set.
func (o *ResPaymentCardType) HasAttachCreditCardToProfile() bool {
	if o != nil && !IsNil(o.AttachCreditCardToProfile) {
		return true
	}

	return false
}

// SetAttachCreditCardToProfile gets a reference to the given bool and assigns it to the AttachCreditCardToProfile field.
func (o *ResPaymentCardType) SetAttachCreditCardToProfile(v bool) {
	o.AttachCreditCardToProfile = &v
}

// GetCardHolderName returns the CardHolderName field value if set, zero value otherwise.
func (o *ResPaymentCardType) GetCardHolderName() string {
	if o == nil || IsNil(o.CardHolderName) {
		var ret string
		return ret
	}
	return *o.CardHolderName
}

// GetCardHolderNameOk returns a tuple with the CardHolderName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPaymentCardType) GetCardHolderNameOk() (*string, bool) {
	if o == nil || IsNil(o.CardHolderName) {
		return nil, false
	}
	return o.CardHolderName, true
}

// HasCardHolderName returns a boolean if a field has been set.
func (o *ResPaymentCardType) HasCardHolderName() bool {
	if o != nil && !IsNil(o.CardHolderName) {
		return true
	}

	return false
}

// SetCardHolderName gets a reference to the given string and assigns it to the CardHolderName field.
func (o *ResPaymentCardType) SetCardHolderName(v string) {
	o.CardHolderName = &v
}

// GetCardId returns the CardId field value if set, zero value otherwise.
func (o *ResPaymentCardType) GetCardId() UniqueIDType {
	if o == nil || IsNil(o.CardId) {
		var ret UniqueIDType
		return ret
	}
	return *o.CardId
}

// GetCardIdOk returns a tuple with the CardId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPaymentCardType) GetCardIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.CardId) {
		return nil, false
	}
	return o.CardId, true
}

// HasCardId returns a boolean if a field has been set.
func (o *ResPaymentCardType) HasCardId() bool {
	if o != nil && !IsNil(o.CardId) {
		return true
	}

	return false
}

// SetCardId gets a reference to the given UniqueIDType and assigns it to the CardId field.
func (o *ResPaymentCardType) SetCardId(v UniqueIDType) {
	o.CardId = &v
}

// GetCardNumber returns the CardNumber field value if set, zero value otherwise.
func (o *ResPaymentCardType) GetCardNumber() string {
	if o == nil || IsNil(o.CardNumber) {
		var ret string
		return ret
	}
	return *o.CardNumber
}

// GetCardNumberOk returns a tuple with the CardNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPaymentCardType) GetCardNumberOk() (*string, bool) {
	if o == nil || IsNil(o.CardNumber) {
		return nil, false
	}
	return o.CardNumber, true
}

// HasCardNumber returns a boolean if a field has been set.
func (o *ResPaymentCardType) HasCardNumber() bool {
	if o != nil && !IsNil(o.CardNumber) {
		return true
	}

	return false
}

// SetCardNumber gets a reference to the given string and assigns it to the CardNumber field.
func (o *ResPaymentCardType) SetCardNumber(v string) {
	o.CardNumber = &v
}

// GetCardNumberLast4Digits returns the CardNumberLast4Digits field value if set, zero value otherwise.
func (o *ResPaymentCardType) GetCardNumberLast4Digits() string {
	if o == nil || IsNil(o.CardNumberLast4Digits) {
		var ret string
		return ret
	}
	return *o.CardNumberLast4Digits
}

// GetCardNumberLast4DigitsOk returns a tuple with the CardNumberLast4Digits field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPaymentCardType) GetCardNumberLast4DigitsOk() (*string, bool) {
	if o == nil || IsNil(o.CardNumberLast4Digits) {
		return nil, false
	}
	return o.CardNumberLast4Digits, true
}

// HasCardNumberLast4Digits returns a boolean if a field has been set.
func (o *ResPaymentCardType) HasCardNumberLast4Digits() bool {
	if o != nil && !IsNil(o.CardNumberLast4Digits) {
		return true
	}

	return false
}

// SetCardNumberLast4Digits gets a reference to the given string and assigns it to the CardNumberLast4Digits field.
func (o *ResPaymentCardType) SetCardNumberLast4Digits(v string) {
	o.CardNumberLast4Digits = &v
}

// GetCardNumberMasked returns the CardNumberMasked field value if set, zero value otherwise.
func (o *ResPaymentCardType) GetCardNumberMasked() string {
	if o == nil || IsNil(o.CardNumberMasked) {
		var ret string
		return ret
	}
	return *o.CardNumberMasked
}

// GetCardNumberMaskedOk returns a tuple with the CardNumberMasked field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPaymentCardType) GetCardNumberMaskedOk() (*string, bool) {
	if o == nil || IsNil(o.CardNumberMasked) {
		return nil, false
	}
	return o.CardNumberMasked, true
}

// HasCardNumberMasked returns a boolean if a field has been set.
func (o *ResPaymentCardType) HasCardNumberMasked() bool {
	if o != nil && !IsNil(o.CardNumberMasked) {
		return true
	}

	return false
}

// SetCardNumberMasked gets a reference to the given string and assigns it to the CardNumberMasked field.
func (o *ResPaymentCardType) SetCardNumberMasked(v string) {
	o.CardNumberMasked = &v
}

// GetCardOrToken returns the CardOrToken field value if set, zero value otherwise.
func (o *ResPaymentCardType) GetCardOrToken() CardNumberTypeType {
	if o == nil || IsNil(o.CardOrToken) {
		var ret CardNumberTypeType
		return ret
	}
	return *o.CardOrToken
}

// GetCardOrTokenOk returns a tuple with the CardOrToken field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPaymentCardType) GetCardOrTokenOk() (*CardNumberTypeType, bool) {
	if o == nil || IsNil(o.CardOrToken) {
		return nil, false
	}
	return o.CardOrToken, true
}

// HasCardOrToken returns a boolean if a field has been set.
func (o *ResPaymentCardType) HasCardOrToken() bool {
	if o != nil && !IsNil(o.CardOrToken) {
		return true
	}

	return false
}

// SetCardOrToken gets a reference to the given CardNumberTypeType and assigns it to the CardOrToken field.
func (o *ResPaymentCardType) SetCardOrToken(v CardNumberTypeType) {
	o.CardOrToken = &v
}

// GetCardPresent returns the CardPresent field value if set, zero value otherwise.
func (o *ResPaymentCardType) GetCardPresent() bool {
	if o == nil || IsNil(o.CardPresent) {
		var ret bool
		return ret
	}
	return *o.CardPresent
}

// GetCardPresentOk returns a tuple with the CardPresent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPaymentCardType) GetCardPresentOk() (*bool, bool) {
	if o == nil || IsNil(o.CardPresent) {
		return nil, false
	}
	return o.CardPresent, true
}

// HasCardPresent returns a boolean if a field has been set.
func (o *ResPaymentCardType) HasCardPresent() bool {
	if o != nil && !IsNil(o.CardPresent) {
		return true
	}

	return false
}

// SetCardPresent gets a reference to the given bool and assigns it to the CardPresent field.
func (o *ResPaymentCardType) SetCardPresent(v bool) {
	o.CardPresent = &v
}

// GetCardType returns the CardType field value if set, zero value otherwise.
func (o *ResPaymentCardType) GetCardType() CardTypeType {
	if o == nil || IsNil(o.CardType) {
		var ret CardTypeType
		return ret
	}
	return *o.CardType
}

// GetCardTypeOk returns a tuple with the CardType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPaymentCardType) GetCardTypeOk() (*CardTypeType, bool) {
	if o == nil || IsNil(o.CardType) {
		return nil, false
	}
	return o.CardType, true
}

// HasCardType returns a boolean if a field has been set.
func (o *ResPaymentCardType) HasCardType() bool {
	if o != nil && !IsNil(o.CardType) {
		return true
	}

	return false
}

// SetCardType gets a reference to the given CardTypeType and assigns it to the CardType field.
func (o *ResPaymentCardType) SetCardType(v CardTypeType) {
	o.CardType = &v
}

// GetCitId returns the CitId field value if set, zero value otherwise.
func (o *ResPaymentCardType) GetCitId() string {
	if o == nil || IsNil(o.CitId) {
		var ret string
		return ret
	}
	return *o.CitId
}

// GetCitIdOk returns a tuple with the CitId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPaymentCardType) GetCitIdOk() (*string, bool) {
	if o == nil || IsNil(o.CitId) {
		return nil, false
	}
	return o.CitId, true
}

// HasCitId returns a boolean if a field has been set.
func (o *ResPaymentCardType) HasCitId() bool {
	if o != nil && !IsNil(o.CitId) {
		return true
	}

	return false
}

// SetCitId gets a reference to the given string and assigns it to the CitId field.
func (o *ResPaymentCardType) SetCitId(v string) {
	o.CitId = &v
}

// GetCurrentAuthorizedAmount returns the CurrentAuthorizedAmount field value if set, zero value otherwise.
func (o *ResPaymentCardType) GetCurrentAuthorizedAmount() CurrencyAmountType {
	if o == nil || IsNil(o.CurrentAuthorizedAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.CurrentAuthorizedAmount
}

// GetCurrentAuthorizedAmountOk returns a tuple with the CurrentAuthorizedAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPaymentCardType) GetCurrentAuthorizedAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.CurrentAuthorizedAmount) {
		return nil, false
	}
	return o.CurrentAuthorizedAmount, true
}

// HasCurrentAuthorizedAmount returns a boolean if a field has been set.
func (o *ResPaymentCardType) HasCurrentAuthorizedAmount() bool {
	if o != nil && !IsNil(o.CurrentAuthorizedAmount) {
		return true
	}

	return false
}

// SetCurrentAuthorizedAmount gets a reference to the given CurrencyAmountType and assigns it to the CurrentAuthorizedAmount field.
func (o *ResPaymentCardType) SetCurrentAuthorizedAmount(v CurrencyAmountType) {
	o.CurrentAuthorizedAmount = &v
}

// GetExpirationDate returns the ExpirationDate field value if set, zero value otherwise.
func (o *ResPaymentCardType) GetExpirationDate() string {
	if o == nil || IsNil(o.ExpirationDate) {
		var ret string
		return ret
	}
	return *o.ExpirationDate
}

// GetExpirationDateOk returns a tuple with the ExpirationDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPaymentCardType) GetExpirationDateOk() (*string, bool) {
	if o == nil || IsNil(o.ExpirationDate) {
		return nil, false
	}
	return o.ExpirationDate, true
}

// HasExpirationDate returns a boolean if a field has been set.
func (o *ResPaymentCardType) HasExpirationDate() bool {
	if o != nil && !IsNil(o.ExpirationDate) {
		return true
	}

	return false
}

// SetExpirationDate gets a reference to the given string and assigns it to the ExpirationDate field.
func (o *ResPaymentCardType) SetExpirationDate(v string) {
	o.ExpirationDate = &v
}

// GetExpirationDateExpired returns the ExpirationDateExpired field value if set, zero value otherwise.
func (o *ResPaymentCardType) GetExpirationDateExpired() bool {
	if o == nil || IsNil(o.ExpirationDateExpired) {
		var ret bool
		return ret
	}
	return *o.ExpirationDateExpired
}

// GetExpirationDateExpiredOk returns a tuple with the ExpirationDateExpired field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPaymentCardType) GetExpirationDateExpiredOk() (*bool, bool) {
	if o == nil || IsNil(o.ExpirationDateExpired) {
		return nil, false
	}
	return o.ExpirationDateExpired, true
}

// HasExpirationDateExpired returns a boolean if a field has been set.
func (o *ResPaymentCardType) HasExpirationDateExpired() bool {
	if o != nil && !IsNil(o.ExpirationDateExpired) {
		return true
	}

	return false
}

// SetExpirationDateExpired gets a reference to the given bool and assigns it to the ExpirationDateExpired field.
func (o *ResPaymentCardType) SetExpirationDateExpired(v bool) {
	o.ExpirationDateExpired = &v
}

// GetExpirationDateMasked returns the ExpirationDateMasked field value if set, zero value otherwise.
func (o *ResPaymentCardType) GetExpirationDateMasked() string {
	if o == nil || IsNil(o.ExpirationDateMasked) {
		var ret string
		return ret
	}
	return *o.ExpirationDateMasked
}

// GetExpirationDateMaskedOk returns a tuple with the ExpirationDateMasked field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPaymentCardType) GetExpirationDateMaskedOk() (*string, bool) {
	if o == nil || IsNil(o.ExpirationDateMasked) {
		return nil, false
	}
	return o.ExpirationDateMasked, true
}

// HasExpirationDateMasked returns a boolean if a field has been set.
func (o *ResPaymentCardType) HasExpirationDateMasked() bool {
	if o != nil && !IsNil(o.ExpirationDateMasked) {
		return true
	}

	return false
}

// SetExpirationDateMasked gets a reference to the given string and assigns it to the ExpirationDateMasked field.
func (o *ResPaymentCardType) SetExpirationDateMasked(v string) {
	o.ExpirationDateMasked = &v
}

// GetProcessing returns the Processing field value if set, zero value otherwise.
func (o *ResPaymentCardType) GetProcessing() CardProcessingType {
	if o == nil || IsNil(o.Processing) {
		var ret CardProcessingType
		return ret
	}
	return *o.Processing
}

// GetProcessingOk returns a tuple with the Processing field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPaymentCardType) GetProcessingOk() (*CardProcessingType, bool) {
	if o == nil || IsNil(o.Processing) {
		return nil, false
	}
	return o.Processing, true
}

// HasProcessing returns a boolean if a field has been set.
func (o *ResPaymentCardType) HasProcessing() bool {
	if o != nil && !IsNil(o.Processing) {
		return true
	}

	return false
}

// SetProcessing gets a reference to the given CardProcessingType and assigns it to the Processing field.
func (o *ResPaymentCardType) SetProcessing(v CardProcessingType) {
	o.Processing = &v
}

// GetSwiped returns the Swiped field value if set, zero value otherwise.
func (o *ResPaymentCardType) GetSwiped() bool {
	if o == nil || IsNil(o.Swiped) {
		var ret bool
		return ret
	}
	return *o.Swiped
}

// GetSwipedOk returns a tuple with the Swiped field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPaymentCardType) GetSwipedOk() (*bool, bool) {
	if o == nil || IsNil(o.Swiped) {
		return nil, false
	}
	return o.Swiped, true
}

// HasSwiped returns a boolean if a field has been set.
func (o *ResPaymentCardType) HasSwiped() bool {
	if o != nil && !IsNil(o.Swiped) {
		return true
	}

	return false
}

// SetSwiped gets a reference to the given bool and assigns it to the Swiped field.
func (o *ResPaymentCardType) SetSwiped(v bool) {
	o.Swiped = &v
}

// GetUserDefinedCardType returns the UserDefinedCardType field value if set, zero value otherwise.
func (o *ResPaymentCardType) GetUserDefinedCardType() string {
	if o == nil || IsNil(o.UserDefinedCardType) {
		var ret string
		return ret
	}
	return *o.UserDefinedCardType
}

// GetUserDefinedCardTypeOk returns a tuple with the UserDefinedCardType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPaymentCardType) GetUserDefinedCardTypeOk() (*string, bool) {
	if o == nil || IsNil(o.UserDefinedCardType) {
		return nil, false
	}
	return o.UserDefinedCardType, true
}

// HasUserDefinedCardType returns a boolean if a field has been set.
func (o *ResPaymentCardType) HasUserDefinedCardType() bool {
	if o != nil && !IsNil(o.UserDefinedCardType) {
		return true
	}

	return false
}

// SetUserDefinedCardType gets a reference to the given string and assigns it to the UserDefinedCardType field.
func (o *ResPaymentCardType) SetUserDefinedCardType(v string) {
	o.UserDefinedCardType = &v
}

func (o ResPaymentCardType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResPaymentCardType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ApprovalAmountNeeded) {
		toSerialize["approvalAmountNeeded"] = o.ApprovalAmountNeeded
	}
	if !IsNil(o.ApprovalCode) {
		toSerialize["approvalCode"] = o.ApprovalCode
	}
	if !IsNil(o.AttachCreditCardToProfile) {
		toSerialize["attachCreditCardToProfile"] = o.AttachCreditCardToProfile
	}
	if !IsNil(o.CardHolderName) {
		toSerialize["cardHolderName"] = o.CardHolderName
	}
	if !IsNil(o.CardId) {
		toSerialize["cardId"] = o.CardId
	}
	if !IsNil(o.CardNumber) {
		toSerialize["cardNumber"] = o.CardNumber
	}
	if !IsNil(o.CardNumberLast4Digits) {
		toSerialize["cardNumberLast4Digits"] = o.CardNumberLast4Digits
	}
	if !IsNil(o.CardNumberMasked) {
		toSerialize["cardNumberMasked"] = o.CardNumberMasked
	}
	if !IsNil(o.CardOrToken) {
		toSerialize["cardOrToken"] = o.CardOrToken
	}
	if !IsNil(o.CardPresent) {
		toSerialize["cardPresent"] = o.CardPresent
	}
	if !IsNil(o.CardType) {
		toSerialize["cardType"] = o.CardType
	}
	if !IsNil(o.CitId) {
		toSerialize["citId"] = o.CitId
	}
	if !IsNil(o.CurrentAuthorizedAmount) {
		toSerialize["currentAuthorizedAmount"] = o.CurrentAuthorizedAmount
	}
	if !IsNil(o.ExpirationDate) {
		toSerialize["expirationDate"] = o.ExpirationDate
	}
	if !IsNil(o.ExpirationDateExpired) {
		toSerialize["expirationDateExpired"] = o.ExpirationDateExpired
	}
	if !IsNil(o.ExpirationDateMasked) {
		toSerialize["expirationDateMasked"] = o.ExpirationDateMasked
	}
	if !IsNil(o.Processing) {
		toSerialize["processing"] = o.Processing
	}
	if !IsNil(o.Swiped) {
		toSerialize["swiped"] = o.Swiped
	}
	if !IsNil(o.UserDefinedCardType) {
		toSerialize["userDefinedCardType"] = o.UserDefinedCardType
	}
	return toSerialize, nil
}

type NullableResPaymentCardType struct {
	value *ResPaymentCardType
	isSet bool
}

func (v NullableResPaymentCardType) Get() *ResPaymentCardType {
	return v.value
}

func (v *NullableResPaymentCardType) Set(val *ResPaymentCardType) {
	v.value = val
	v.isSet = true
}

func (v NullableResPaymentCardType) IsSet() bool {
	return v.isSet
}

func (v *NullableResPaymentCardType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResPaymentCardType(val *ResPaymentCardType) *NullableResPaymentCardType {
	return &NullableResPaymentCardType{value: val, isSet: true}
}

func (v NullableResPaymentCardType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResPaymentCardType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

