/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the FBAInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FBAInfoType{}

// FBAInfoType FBA ( Flexible Benefits Awards ) related fields.
type FBAInfoType struct {
	// Award's FBA amount.
	Amount *float32 `json:"amount,omitempty"`
	// The code specifying a monetary unit. Use ISO 4217, three alpha code.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// The symbol for the currency, e.g, for currencyCode USD the symbol is $.
	CurrencySymbol *string `json:"currencySymbol,omitempty"`
	// Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard \"minor unit\". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces=\"2\" to represent $85).
	DecimalPlaces *int32 `json:"decimalPlaces,omitempty"`
	// Business date of the FBA bill generation.
	FbaBillGenDate *string `json:"fbaBillGenDate,omitempty"`
	// Indicates if this certificate is a Flexible Benefit Award certificate.
	FlexibleBenefitAward *bool `json:"flexibleBenefitAward,omitempty"`
	// Award's FBA monetary values.
	MonetaryValue *float32 `json:"monetaryValue,omitempty"`
	// Indicates whether the certificate is Orphan or not.
	OrphanCertificate *bool `json:"orphanCertificate,omitempty"`
	// Indicates whether FBA has been posted.
	Posted *bool `json:"posted,omitempty"`
	// Award's FBA posted amount.
	PostedAmount *float32 `json:"postedAmount,omitempty"`
	// Business date of the FBA posting.
	PostingBusinessDate *string `json:"postingBusinessDate,omitempty"`
	// Date and time of the FBA posting.
	PostingDateTime *string `json:"postingDateTime,omitempty"`
	// Marks if the certificate is eligible for reimbursement.
	ReimburseAllowed *bool `json:"reimburseAllowed,omitempty"`
	// Indicates whether FBA has been reimbursed.
	Reimbursed *bool `json:"reimbursed,omitempty"`
	// Award's FBA reimbursed amount.
	ReimbursedAmount *float32 `json:"reimbursedAmount,omitempty"`
	// Business date of the FBA reimbursement.
	ReimbursementBusinessDate *string `json:"reimbursementBusinessDate,omitempty"`
	// Date and time of the FBA reimbursement.
	ReimbursementDateTime *string `json:"reimbursementDateTime,omitempty"`
	// Marks if the certificate is eligible for resettlement
	ResettleAllowed *bool `json:"resettleAllowed,omitempty"`
	// Indicates whether FBA has been settled.
	Settled *bool `json:"settled,omitempty"`
	// Business date of the FBA settlement.
	SettlementBusinessDate *string `json:"settlementBusinessDate,omitempty"`
	// Date and time of the FBA settlement.
	SettlementDateTime *string `json:"settlementDateTime,omitempty"`
	Status *FBAStatusType `json:"status,omitempty"`
}

// NewFBAInfoType instantiates a new FBAInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFBAInfoType() *FBAInfoType {
	this := FBAInfoType{}
	return &this
}

// NewFBAInfoTypeWithDefaults instantiates a new FBAInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFBAInfoTypeWithDefaults() *FBAInfoType {
	this := FBAInfoType{}
	return &this
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *FBAInfoType) GetAmount() float32 {
	if o == nil || IsNil(o.Amount) {
		var ret float32
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *FBAInfoType) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given float32 and assigns it to the Amount field.
func (o *FBAInfoType) SetAmount(v float32) {
	o.Amount = &v
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *FBAInfoType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *FBAInfoType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *FBAInfoType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetCurrencySymbol returns the CurrencySymbol field value if set, zero value otherwise.
func (o *FBAInfoType) GetCurrencySymbol() string {
	if o == nil || IsNil(o.CurrencySymbol) {
		var ret string
		return ret
	}
	return *o.CurrencySymbol
}

// GetCurrencySymbolOk returns a tuple with the CurrencySymbol field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetCurrencySymbolOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencySymbol) {
		return nil, false
	}
	return o.CurrencySymbol, true
}

// HasCurrencySymbol returns a boolean if a field has been set.
func (o *FBAInfoType) HasCurrencySymbol() bool {
	if o != nil && !IsNil(o.CurrencySymbol) {
		return true
	}

	return false
}

// SetCurrencySymbol gets a reference to the given string and assigns it to the CurrencySymbol field.
func (o *FBAInfoType) SetCurrencySymbol(v string) {
	o.CurrencySymbol = &v
}

// GetDecimalPlaces returns the DecimalPlaces field value if set, zero value otherwise.
func (o *FBAInfoType) GetDecimalPlaces() int32 {
	if o == nil || IsNil(o.DecimalPlaces) {
		var ret int32
		return ret
	}
	return *o.DecimalPlaces
}

// GetDecimalPlacesOk returns a tuple with the DecimalPlaces field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetDecimalPlacesOk() (*int32, bool) {
	if o == nil || IsNil(o.DecimalPlaces) {
		return nil, false
	}
	return o.DecimalPlaces, true
}

// HasDecimalPlaces returns a boolean if a field has been set.
func (o *FBAInfoType) HasDecimalPlaces() bool {
	if o != nil && !IsNil(o.DecimalPlaces) {
		return true
	}

	return false
}

// SetDecimalPlaces gets a reference to the given int32 and assigns it to the DecimalPlaces field.
func (o *FBAInfoType) SetDecimalPlaces(v int32) {
	o.DecimalPlaces = &v
}

// GetFbaBillGenDate returns the FbaBillGenDate field value if set, zero value otherwise.
func (o *FBAInfoType) GetFbaBillGenDate() string {
	if o == nil || IsNil(o.FbaBillGenDate) {
		var ret string
		return ret
	}
	return *o.FbaBillGenDate
}

// GetFbaBillGenDateOk returns a tuple with the FbaBillGenDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetFbaBillGenDateOk() (*string, bool) {
	if o == nil || IsNil(o.FbaBillGenDate) {
		return nil, false
	}
	return o.FbaBillGenDate, true
}

// HasFbaBillGenDate returns a boolean if a field has been set.
func (o *FBAInfoType) HasFbaBillGenDate() bool {
	if o != nil && !IsNil(o.FbaBillGenDate) {
		return true
	}

	return false
}

// SetFbaBillGenDate gets a reference to the given string and assigns it to the FbaBillGenDate field.
func (o *FBAInfoType) SetFbaBillGenDate(v string) {
	o.FbaBillGenDate = &v
}

// GetFlexibleBenefitAward returns the FlexibleBenefitAward field value if set, zero value otherwise.
func (o *FBAInfoType) GetFlexibleBenefitAward() bool {
	if o == nil || IsNil(o.FlexibleBenefitAward) {
		var ret bool
		return ret
	}
	return *o.FlexibleBenefitAward
}

// GetFlexibleBenefitAwardOk returns a tuple with the FlexibleBenefitAward field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetFlexibleBenefitAwardOk() (*bool, bool) {
	if o == nil || IsNil(o.FlexibleBenefitAward) {
		return nil, false
	}
	return o.FlexibleBenefitAward, true
}

// HasFlexibleBenefitAward returns a boolean if a field has been set.
func (o *FBAInfoType) HasFlexibleBenefitAward() bool {
	if o != nil && !IsNil(o.FlexibleBenefitAward) {
		return true
	}

	return false
}

// SetFlexibleBenefitAward gets a reference to the given bool and assigns it to the FlexibleBenefitAward field.
func (o *FBAInfoType) SetFlexibleBenefitAward(v bool) {
	o.FlexibleBenefitAward = &v
}

// GetMonetaryValue returns the MonetaryValue field value if set, zero value otherwise.
func (o *FBAInfoType) GetMonetaryValue() float32 {
	if o == nil || IsNil(o.MonetaryValue) {
		var ret float32
		return ret
	}
	return *o.MonetaryValue
}

// GetMonetaryValueOk returns a tuple with the MonetaryValue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetMonetaryValueOk() (*float32, bool) {
	if o == nil || IsNil(o.MonetaryValue) {
		return nil, false
	}
	return o.MonetaryValue, true
}

// HasMonetaryValue returns a boolean if a field has been set.
func (o *FBAInfoType) HasMonetaryValue() bool {
	if o != nil && !IsNil(o.MonetaryValue) {
		return true
	}

	return false
}

// SetMonetaryValue gets a reference to the given float32 and assigns it to the MonetaryValue field.
func (o *FBAInfoType) SetMonetaryValue(v float32) {
	o.MonetaryValue = &v
}

// GetOrphanCertificate returns the OrphanCertificate field value if set, zero value otherwise.
func (o *FBAInfoType) GetOrphanCertificate() bool {
	if o == nil || IsNil(o.OrphanCertificate) {
		var ret bool
		return ret
	}
	return *o.OrphanCertificate
}

// GetOrphanCertificateOk returns a tuple with the OrphanCertificate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetOrphanCertificateOk() (*bool, bool) {
	if o == nil || IsNil(o.OrphanCertificate) {
		return nil, false
	}
	return o.OrphanCertificate, true
}

// HasOrphanCertificate returns a boolean if a field has been set.
func (o *FBAInfoType) HasOrphanCertificate() bool {
	if o != nil && !IsNil(o.OrphanCertificate) {
		return true
	}

	return false
}

// SetOrphanCertificate gets a reference to the given bool and assigns it to the OrphanCertificate field.
func (o *FBAInfoType) SetOrphanCertificate(v bool) {
	o.OrphanCertificate = &v
}

// GetPosted returns the Posted field value if set, zero value otherwise.
func (o *FBAInfoType) GetPosted() bool {
	if o == nil || IsNil(o.Posted) {
		var ret bool
		return ret
	}
	return *o.Posted
}

// GetPostedOk returns a tuple with the Posted field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetPostedOk() (*bool, bool) {
	if o == nil || IsNil(o.Posted) {
		return nil, false
	}
	return o.Posted, true
}

// HasPosted returns a boolean if a field has been set.
func (o *FBAInfoType) HasPosted() bool {
	if o != nil && !IsNil(o.Posted) {
		return true
	}

	return false
}

// SetPosted gets a reference to the given bool and assigns it to the Posted field.
func (o *FBAInfoType) SetPosted(v bool) {
	o.Posted = &v
}

// GetPostedAmount returns the PostedAmount field value if set, zero value otherwise.
func (o *FBAInfoType) GetPostedAmount() float32 {
	if o == nil || IsNil(o.PostedAmount) {
		var ret float32
		return ret
	}
	return *o.PostedAmount
}

// GetPostedAmountOk returns a tuple with the PostedAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetPostedAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.PostedAmount) {
		return nil, false
	}
	return o.PostedAmount, true
}

// HasPostedAmount returns a boolean if a field has been set.
func (o *FBAInfoType) HasPostedAmount() bool {
	if o != nil && !IsNil(o.PostedAmount) {
		return true
	}

	return false
}

// SetPostedAmount gets a reference to the given float32 and assigns it to the PostedAmount field.
func (o *FBAInfoType) SetPostedAmount(v float32) {
	o.PostedAmount = &v
}

// GetPostingBusinessDate returns the PostingBusinessDate field value if set, zero value otherwise.
func (o *FBAInfoType) GetPostingBusinessDate() string {
	if o == nil || IsNil(o.PostingBusinessDate) {
		var ret string
		return ret
	}
	return *o.PostingBusinessDate
}

// GetPostingBusinessDateOk returns a tuple with the PostingBusinessDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetPostingBusinessDateOk() (*string, bool) {
	if o == nil || IsNil(o.PostingBusinessDate) {
		return nil, false
	}
	return o.PostingBusinessDate, true
}

// HasPostingBusinessDate returns a boolean if a field has been set.
func (o *FBAInfoType) HasPostingBusinessDate() bool {
	if o != nil && !IsNil(o.PostingBusinessDate) {
		return true
	}

	return false
}

// SetPostingBusinessDate gets a reference to the given string and assigns it to the PostingBusinessDate field.
func (o *FBAInfoType) SetPostingBusinessDate(v string) {
	o.PostingBusinessDate = &v
}

// GetPostingDateTime returns the PostingDateTime field value if set, zero value otherwise.
func (o *FBAInfoType) GetPostingDateTime() string {
	if o == nil || IsNil(o.PostingDateTime) {
		var ret string
		return ret
	}
	return *o.PostingDateTime
}

// GetPostingDateTimeOk returns a tuple with the PostingDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetPostingDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.PostingDateTime) {
		return nil, false
	}
	return o.PostingDateTime, true
}

// HasPostingDateTime returns a boolean if a field has been set.
func (o *FBAInfoType) HasPostingDateTime() bool {
	if o != nil && !IsNil(o.PostingDateTime) {
		return true
	}

	return false
}

// SetPostingDateTime gets a reference to the given string and assigns it to the PostingDateTime field.
func (o *FBAInfoType) SetPostingDateTime(v string) {
	o.PostingDateTime = &v
}

// GetReimburseAllowed returns the ReimburseAllowed field value if set, zero value otherwise.
func (o *FBAInfoType) GetReimburseAllowed() bool {
	if o == nil || IsNil(o.ReimburseAllowed) {
		var ret bool
		return ret
	}
	return *o.ReimburseAllowed
}

// GetReimburseAllowedOk returns a tuple with the ReimburseAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetReimburseAllowedOk() (*bool, bool) {
	if o == nil || IsNil(o.ReimburseAllowed) {
		return nil, false
	}
	return o.ReimburseAllowed, true
}

// HasReimburseAllowed returns a boolean if a field has been set.
func (o *FBAInfoType) HasReimburseAllowed() bool {
	if o != nil && !IsNil(o.ReimburseAllowed) {
		return true
	}

	return false
}

// SetReimburseAllowed gets a reference to the given bool and assigns it to the ReimburseAllowed field.
func (o *FBAInfoType) SetReimburseAllowed(v bool) {
	o.ReimburseAllowed = &v
}

// GetReimbursed returns the Reimbursed field value if set, zero value otherwise.
func (o *FBAInfoType) GetReimbursed() bool {
	if o == nil || IsNil(o.Reimbursed) {
		var ret bool
		return ret
	}
	return *o.Reimbursed
}

// GetReimbursedOk returns a tuple with the Reimbursed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetReimbursedOk() (*bool, bool) {
	if o == nil || IsNil(o.Reimbursed) {
		return nil, false
	}
	return o.Reimbursed, true
}

// HasReimbursed returns a boolean if a field has been set.
func (o *FBAInfoType) HasReimbursed() bool {
	if o != nil && !IsNil(o.Reimbursed) {
		return true
	}

	return false
}

// SetReimbursed gets a reference to the given bool and assigns it to the Reimbursed field.
func (o *FBAInfoType) SetReimbursed(v bool) {
	o.Reimbursed = &v
}

// GetReimbursedAmount returns the ReimbursedAmount field value if set, zero value otherwise.
func (o *FBAInfoType) GetReimbursedAmount() float32 {
	if o == nil || IsNil(o.ReimbursedAmount) {
		var ret float32
		return ret
	}
	return *o.ReimbursedAmount
}

// GetReimbursedAmountOk returns a tuple with the ReimbursedAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetReimbursedAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.ReimbursedAmount) {
		return nil, false
	}
	return o.ReimbursedAmount, true
}

// HasReimbursedAmount returns a boolean if a field has been set.
func (o *FBAInfoType) HasReimbursedAmount() bool {
	if o != nil && !IsNil(o.ReimbursedAmount) {
		return true
	}

	return false
}

// SetReimbursedAmount gets a reference to the given float32 and assigns it to the ReimbursedAmount field.
func (o *FBAInfoType) SetReimbursedAmount(v float32) {
	o.ReimbursedAmount = &v
}

// GetReimbursementBusinessDate returns the ReimbursementBusinessDate field value if set, zero value otherwise.
func (o *FBAInfoType) GetReimbursementBusinessDate() string {
	if o == nil || IsNil(o.ReimbursementBusinessDate) {
		var ret string
		return ret
	}
	return *o.ReimbursementBusinessDate
}

// GetReimbursementBusinessDateOk returns a tuple with the ReimbursementBusinessDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetReimbursementBusinessDateOk() (*string, bool) {
	if o == nil || IsNil(o.ReimbursementBusinessDate) {
		return nil, false
	}
	return o.ReimbursementBusinessDate, true
}

// HasReimbursementBusinessDate returns a boolean if a field has been set.
func (o *FBAInfoType) HasReimbursementBusinessDate() bool {
	if o != nil && !IsNil(o.ReimbursementBusinessDate) {
		return true
	}

	return false
}

// SetReimbursementBusinessDate gets a reference to the given string and assigns it to the ReimbursementBusinessDate field.
func (o *FBAInfoType) SetReimbursementBusinessDate(v string) {
	o.ReimbursementBusinessDate = &v
}

// GetReimbursementDateTime returns the ReimbursementDateTime field value if set, zero value otherwise.
func (o *FBAInfoType) GetReimbursementDateTime() string {
	if o == nil || IsNil(o.ReimbursementDateTime) {
		var ret string
		return ret
	}
	return *o.ReimbursementDateTime
}

// GetReimbursementDateTimeOk returns a tuple with the ReimbursementDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetReimbursementDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.ReimbursementDateTime) {
		return nil, false
	}
	return o.ReimbursementDateTime, true
}

// HasReimbursementDateTime returns a boolean if a field has been set.
func (o *FBAInfoType) HasReimbursementDateTime() bool {
	if o != nil && !IsNil(o.ReimbursementDateTime) {
		return true
	}

	return false
}

// SetReimbursementDateTime gets a reference to the given string and assigns it to the ReimbursementDateTime field.
func (o *FBAInfoType) SetReimbursementDateTime(v string) {
	o.ReimbursementDateTime = &v
}

// GetResettleAllowed returns the ResettleAllowed field value if set, zero value otherwise.
func (o *FBAInfoType) GetResettleAllowed() bool {
	if o == nil || IsNil(o.ResettleAllowed) {
		var ret bool
		return ret
	}
	return *o.ResettleAllowed
}

// GetResettleAllowedOk returns a tuple with the ResettleAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetResettleAllowedOk() (*bool, bool) {
	if o == nil || IsNil(o.ResettleAllowed) {
		return nil, false
	}
	return o.ResettleAllowed, true
}

// HasResettleAllowed returns a boolean if a field has been set.
func (o *FBAInfoType) HasResettleAllowed() bool {
	if o != nil && !IsNil(o.ResettleAllowed) {
		return true
	}

	return false
}

// SetResettleAllowed gets a reference to the given bool and assigns it to the ResettleAllowed field.
func (o *FBAInfoType) SetResettleAllowed(v bool) {
	o.ResettleAllowed = &v
}

// GetSettled returns the Settled field value if set, zero value otherwise.
func (o *FBAInfoType) GetSettled() bool {
	if o == nil || IsNil(o.Settled) {
		var ret bool
		return ret
	}
	return *o.Settled
}

// GetSettledOk returns a tuple with the Settled field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetSettledOk() (*bool, bool) {
	if o == nil || IsNil(o.Settled) {
		return nil, false
	}
	return o.Settled, true
}

// HasSettled returns a boolean if a field has been set.
func (o *FBAInfoType) HasSettled() bool {
	if o != nil && !IsNil(o.Settled) {
		return true
	}

	return false
}

// SetSettled gets a reference to the given bool and assigns it to the Settled field.
func (o *FBAInfoType) SetSettled(v bool) {
	o.Settled = &v
}

// GetSettlementBusinessDate returns the SettlementBusinessDate field value if set, zero value otherwise.
func (o *FBAInfoType) GetSettlementBusinessDate() string {
	if o == nil || IsNil(o.SettlementBusinessDate) {
		var ret string
		return ret
	}
	return *o.SettlementBusinessDate
}

// GetSettlementBusinessDateOk returns a tuple with the SettlementBusinessDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetSettlementBusinessDateOk() (*string, bool) {
	if o == nil || IsNil(o.SettlementBusinessDate) {
		return nil, false
	}
	return o.SettlementBusinessDate, true
}

// HasSettlementBusinessDate returns a boolean if a field has been set.
func (o *FBAInfoType) HasSettlementBusinessDate() bool {
	if o != nil && !IsNil(o.SettlementBusinessDate) {
		return true
	}

	return false
}

// SetSettlementBusinessDate gets a reference to the given string and assigns it to the SettlementBusinessDate field.
func (o *FBAInfoType) SetSettlementBusinessDate(v string) {
	o.SettlementBusinessDate = &v
}

// GetSettlementDateTime returns the SettlementDateTime field value if set, zero value otherwise.
func (o *FBAInfoType) GetSettlementDateTime() string {
	if o == nil || IsNil(o.SettlementDateTime) {
		var ret string
		return ret
	}
	return *o.SettlementDateTime
}

// GetSettlementDateTimeOk returns a tuple with the SettlementDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetSettlementDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.SettlementDateTime) {
		return nil, false
	}
	return o.SettlementDateTime, true
}

// HasSettlementDateTime returns a boolean if a field has been set.
func (o *FBAInfoType) HasSettlementDateTime() bool {
	if o != nil && !IsNil(o.SettlementDateTime) {
		return true
	}

	return false
}

// SetSettlementDateTime gets a reference to the given string and assigns it to the SettlementDateTime field.
func (o *FBAInfoType) SetSettlementDateTime(v string) {
	o.SettlementDateTime = &v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *FBAInfoType) GetStatus() FBAStatusType {
	if o == nil || IsNil(o.Status) {
		var ret FBAStatusType
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FBAInfoType) GetStatusOk() (*FBAStatusType, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *FBAInfoType) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given FBAStatusType and assigns it to the Status field.
func (o *FBAInfoType) SetStatus(v FBAStatusType) {
	o.Status = &v
}

func (o FBAInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FBAInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
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
	if !IsNil(o.FbaBillGenDate) {
		toSerialize["fbaBillGenDate"] = o.FbaBillGenDate
	}
	if !IsNil(o.FlexibleBenefitAward) {
		toSerialize["flexibleBenefitAward"] = o.FlexibleBenefitAward
	}
	if !IsNil(o.MonetaryValue) {
		toSerialize["monetaryValue"] = o.MonetaryValue
	}
	if !IsNil(o.OrphanCertificate) {
		toSerialize["orphanCertificate"] = o.OrphanCertificate
	}
	if !IsNil(o.Posted) {
		toSerialize["posted"] = o.Posted
	}
	if !IsNil(o.PostedAmount) {
		toSerialize["postedAmount"] = o.PostedAmount
	}
	if !IsNil(o.PostingBusinessDate) {
		toSerialize["postingBusinessDate"] = o.PostingBusinessDate
	}
	if !IsNil(o.PostingDateTime) {
		toSerialize["postingDateTime"] = o.PostingDateTime
	}
	if !IsNil(o.ReimburseAllowed) {
		toSerialize["reimburseAllowed"] = o.ReimburseAllowed
	}
	if !IsNil(o.Reimbursed) {
		toSerialize["reimbursed"] = o.Reimbursed
	}
	if !IsNil(o.ReimbursedAmount) {
		toSerialize["reimbursedAmount"] = o.ReimbursedAmount
	}
	if !IsNil(o.ReimbursementBusinessDate) {
		toSerialize["reimbursementBusinessDate"] = o.ReimbursementBusinessDate
	}
	if !IsNil(o.ReimbursementDateTime) {
		toSerialize["reimbursementDateTime"] = o.ReimbursementDateTime
	}
	if !IsNil(o.ResettleAllowed) {
		toSerialize["resettleAllowed"] = o.ResettleAllowed
	}
	if !IsNil(o.Settled) {
		toSerialize["settled"] = o.Settled
	}
	if !IsNil(o.SettlementBusinessDate) {
		toSerialize["settlementBusinessDate"] = o.SettlementBusinessDate
	}
	if !IsNil(o.SettlementDateTime) {
		toSerialize["settlementDateTime"] = o.SettlementDateTime
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	return toSerialize, nil
}

type NullableFBAInfoType struct {
	value *FBAInfoType
	isSet bool
}

func (v NullableFBAInfoType) Get() *FBAInfoType {
	return v.value
}

func (v *NullableFBAInfoType) Set(val *FBAInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableFBAInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableFBAInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFBAInfoType(val *FBAInfoType) *NullableFBAInfoType {
	return &NullableFBAInfoType{value: val, isSet: true}
}

func (v NullableFBAInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFBAInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


