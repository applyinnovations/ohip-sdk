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

// checks if the TrxSetupType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TrxSetupType{}

// TrxSetupType Transaction Code setup details.
type TrxSetupType struct {
	// Accounting Code for the transaction code.
	AccountingCode *string `json:"accountingCode,omitempty"`
	// True indicates the Transaction Code requires the Check Number for posting.
	CheckNoRequired *bool `json:"checkNoRequired,omitempty"`
	// True indicates the Transaction Code is used for deposit postings only.
	DepositPostingOnly *bool `json:"depositPostingOnly,omitempty"`
	DepositType *DepositTypeType `json:"depositType,omitempty"`
	// This flag indicates that the transaction is eligible to earn points (guest can earn points on the revenue posted to this transaction code)
	EarnMembershipPoints *bool `json:"earnMembershipPoints,omitempty"`
	// Short Summary information of the Chain and it's Hubs and Hotels.
	GeneratesType *string `json:"generatesType,omitempty"`
	// True indicates the Transaction Code is inactive.
	Inactive *bool `json:"inactive,omitempty"`
	// True indicates the Transaction Code posting will be included in Deposit/Cencallation rule calculations.
	IncludeInDepositRule *bool `json:"includeInDepositRule,omitempty"`
	// True indicates the Transaction Code is used for cross posting across the hotels/.
	InterHotelSales *bool `json:"interHotelSales,omitempty"`
	// True indicates the Transaction Code is allowed to be posted manually.
	ManualPosting *bool `json:"manualPosting,omitempty"`
	// True indicates the Transaction Code is non taxable.
	NonTaxable *bool `json:"nonTaxable,omitempty"`
	OwnershipStatus *TrxOwnershipType `json:"ownershipStatus,omitempty"`
	// True indicates the Transaction Code is used to post covers.
	PostCovers *bool `json:"postCovers,omitempty"`
	// Deposit posting associated with the transaction code.
	PostingRule *bool `json:"postingRule,omitempty"`
	// Quantity Code for the transaction code.
	QuantityCode *string `json:"quantityCode,omitempty"`
	// This flag indicates that the transaction is eligible to redeem points (guest can use their points to pay for transactions posted with this transaction code)
	RedeemMembershipPoints *bool `json:"redeemMembershipPoints,omitempty"`
	// True indicates the Transaction Code is to be considered as revenue to the Hotel.
	Revenue *bool `json:"revenue,omitempty"`
	// Service Type for the transaction code.
	ServiceType *string `json:"serviceType,omitempty"`
	// True indicates that the tax is inclusive in the generate.
	TaxInclusive *bool `json:"taxInclusive,omitempty"`
	// True indicates the Transaction Code is used for Paid outs.
	UseForPaidout *bool `json:"useForPaidout,omitempty"`
}

// NewTrxSetupType instantiates a new TrxSetupType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTrxSetupType() *TrxSetupType {
	this := TrxSetupType{}
	return &this
}

// NewTrxSetupTypeWithDefaults instantiates a new TrxSetupType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTrxSetupTypeWithDefaults() *TrxSetupType {
	this := TrxSetupType{}
	return &this
}

// GetAccountingCode returns the AccountingCode field value if set, zero value otherwise.
func (o *TrxSetupType) GetAccountingCode() string {
	if o == nil || IsNil(o.AccountingCode) {
		var ret string
		return ret
	}
	return *o.AccountingCode
}

// GetAccountingCodeOk returns a tuple with the AccountingCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSetupType) GetAccountingCodeOk() (*string, bool) {
	if o == nil || IsNil(o.AccountingCode) {
		return nil, false
	}
	return o.AccountingCode, true
}

// HasAccountingCode returns a boolean if a field has been set.
func (o *TrxSetupType) HasAccountingCode() bool {
	if o != nil && !IsNil(o.AccountingCode) {
		return true
	}

	return false
}

// SetAccountingCode gets a reference to the given string and assigns it to the AccountingCode field.
func (o *TrxSetupType) SetAccountingCode(v string) {
	o.AccountingCode = &v
}

// GetCheckNoRequired returns the CheckNoRequired field value if set, zero value otherwise.
func (o *TrxSetupType) GetCheckNoRequired() bool {
	if o == nil || IsNil(o.CheckNoRequired) {
		var ret bool
		return ret
	}
	return *o.CheckNoRequired
}

// GetCheckNoRequiredOk returns a tuple with the CheckNoRequired field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSetupType) GetCheckNoRequiredOk() (*bool, bool) {
	if o == nil || IsNil(o.CheckNoRequired) {
		return nil, false
	}
	return o.CheckNoRequired, true
}

// HasCheckNoRequired returns a boolean if a field has been set.
func (o *TrxSetupType) HasCheckNoRequired() bool {
	if o != nil && !IsNil(o.CheckNoRequired) {
		return true
	}

	return false
}

// SetCheckNoRequired gets a reference to the given bool and assigns it to the CheckNoRequired field.
func (o *TrxSetupType) SetCheckNoRequired(v bool) {
	o.CheckNoRequired = &v
}

// GetDepositPostingOnly returns the DepositPostingOnly field value if set, zero value otherwise.
func (o *TrxSetupType) GetDepositPostingOnly() bool {
	if o == nil || IsNil(o.DepositPostingOnly) {
		var ret bool
		return ret
	}
	return *o.DepositPostingOnly
}

// GetDepositPostingOnlyOk returns a tuple with the DepositPostingOnly field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSetupType) GetDepositPostingOnlyOk() (*bool, bool) {
	if o == nil || IsNil(o.DepositPostingOnly) {
		return nil, false
	}
	return o.DepositPostingOnly, true
}

// HasDepositPostingOnly returns a boolean if a field has been set.
func (o *TrxSetupType) HasDepositPostingOnly() bool {
	if o != nil && !IsNil(o.DepositPostingOnly) {
		return true
	}

	return false
}

// SetDepositPostingOnly gets a reference to the given bool and assigns it to the DepositPostingOnly field.
func (o *TrxSetupType) SetDepositPostingOnly(v bool) {
	o.DepositPostingOnly = &v
}

// GetDepositType returns the DepositType field value if set, zero value otherwise.
func (o *TrxSetupType) GetDepositType() DepositTypeType {
	if o == nil || IsNil(o.DepositType) {
		var ret DepositTypeType
		return ret
	}
	return *o.DepositType
}

// GetDepositTypeOk returns a tuple with the DepositType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSetupType) GetDepositTypeOk() (*DepositTypeType, bool) {
	if o == nil || IsNil(o.DepositType) {
		return nil, false
	}
	return o.DepositType, true
}

// HasDepositType returns a boolean if a field has been set.
func (o *TrxSetupType) HasDepositType() bool {
	if o != nil && !IsNil(o.DepositType) {
		return true
	}

	return false
}

// SetDepositType gets a reference to the given DepositTypeType and assigns it to the DepositType field.
func (o *TrxSetupType) SetDepositType(v DepositTypeType) {
	o.DepositType = &v
}

// GetEarnMembershipPoints returns the EarnMembershipPoints field value if set, zero value otherwise.
func (o *TrxSetupType) GetEarnMembershipPoints() bool {
	if o == nil || IsNil(o.EarnMembershipPoints) {
		var ret bool
		return ret
	}
	return *o.EarnMembershipPoints
}

// GetEarnMembershipPointsOk returns a tuple with the EarnMembershipPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSetupType) GetEarnMembershipPointsOk() (*bool, bool) {
	if o == nil || IsNil(o.EarnMembershipPoints) {
		return nil, false
	}
	return o.EarnMembershipPoints, true
}

// HasEarnMembershipPoints returns a boolean if a field has been set.
func (o *TrxSetupType) HasEarnMembershipPoints() bool {
	if o != nil && !IsNil(o.EarnMembershipPoints) {
		return true
	}

	return false
}

// SetEarnMembershipPoints gets a reference to the given bool and assigns it to the EarnMembershipPoints field.
func (o *TrxSetupType) SetEarnMembershipPoints(v bool) {
	o.EarnMembershipPoints = &v
}

// GetGeneratesType returns the GeneratesType field value if set, zero value otherwise.
func (o *TrxSetupType) GetGeneratesType() string {
	if o == nil || IsNil(o.GeneratesType) {
		var ret string
		return ret
	}
	return *o.GeneratesType
}

// GetGeneratesTypeOk returns a tuple with the GeneratesType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSetupType) GetGeneratesTypeOk() (*string, bool) {
	if o == nil || IsNil(o.GeneratesType) {
		return nil, false
	}
	return o.GeneratesType, true
}

// HasGeneratesType returns a boolean if a field has been set.
func (o *TrxSetupType) HasGeneratesType() bool {
	if o != nil && !IsNil(o.GeneratesType) {
		return true
	}

	return false
}

// SetGeneratesType gets a reference to the given string and assigns it to the GeneratesType field.
func (o *TrxSetupType) SetGeneratesType(v string) {
	o.GeneratesType = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *TrxSetupType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSetupType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *TrxSetupType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *TrxSetupType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetIncludeInDepositRule returns the IncludeInDepositRule field value if set, zero value otherwise.
func (o *TrxSetupType) GetIncludeInDepositRule() bool {
	if o == nil || IsNil(o.IncludeInDepositRule) {
		var ret bool
		return ret
	}
	return *o.IncludeInDepositRule
}

// GetIncludeInDepositRuleOk returns a tuple with the IncludeInDepositRule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSetupType) GetIncludeInDepositRuleOk() (*bool, bool) {
	if o == nil || IsNil(o.IncludeInDepositRule) {
		return nil, false
	}
	return o.IncludeInDepositRule, true
}

// HasIncludeInDepositRule returns a boolean if a field has been set.
func (o *TrxSetupType) HasIncludeInDepositRule() bool {
	if o != nil && !IsNil(o.IncludeInDepositRule) {
		return true
	}

	return false
}

// SetIncludeInDepositRule gets a reference to the given bool and assigns it to the IncludeInDepositRule field.
func (o *TrxSetupType) SetIncludeInDepositRule(v bool) {
	o.IncludeInDepositRule = &v
}

// GetInterHotelSales returns the InterHotelSales field value if set, zero value otherwise.
func (o *TrxSetupType) GetInterHotelSales() bool {
	if o == nil || IsNil(o.InterHotelSales) {
		var ret bool
		return ret
	}
	return *o.InterHotelSales
}

// GetInterHotelSalesOk returns a tuple with the InterHotelSales field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSetupType) GetInterHotelSalesOk() (*bool, bool) {
	if o == nil || IsNil(o.InterHotelSales) {
		return nil, false
	}
	return o.InterHotelSales, true
}

// HasInterHotelSales returns a boolean if a field has been set.
func (o *TrxSetupType) HasInterHotelSales() bool {
	if o != nil && !IsNil(o.InterHotelSales) {
		return true
	}

	return false
}

// SetInterHotelSales gets a reference to the given bool and assigns it to the InterHotelSales field.
func (o *TrxSetupType) SetInterHotelSales(v bool) {
	o.InterHotelSales = &v
}

// GetManualPosting returns the ManualPosting field value if set, zero value otherwise.
func (o *TrxSetupType) GetManualPosting() bool {
	if o == nil || IsNil(o.ManualPosting) {
		var ret bool
		return ret
	}
	return *o.ManualPosting
}

// GetManualPostingOk returns a tuple with the ManualPosting field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSetupType) GetManualPostingOk() (*bool, bool) {
	if o == nil || IsNil(o.ManualPosting) {
		return nil, false
	}
	return o.ManualPosting, true
}

// HasManualPosting returns a boolean if a field has been set.
func (o *TrxSetupType) HasManualPosting() bool {
	if o != nil && !IsNil(o.ManualPosting) {
		return true
	}

	return false
}

// SetManualPosting gets a reference to the given bool and assigns it to the ManualPosting field.
func (o *TrxSetupType) SetManualPosting(v bool) {
	o.ManualPosting = &v
}

// GetNonTaxable returns the NonTaxable field value if set, zero value otherwise.
func (o *TrxSetupType) GetNonTaxable() bool {
	if o == nil || IsNil(o.NonTaxable) {
		var ret bool
		return ret
	}
	return *o.NonTaxable
}

// GetNonTaxableOk returns a tuple with the NonTaxable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSetupType) GetNonTaxableOk() (*bool, bool) {
	if o == nil || IsNil(o.NonTaxable) {
		return nil, false
	}
	return o.NonTaxable, true
}

// HasNonTaxable returns a boolean if a field has been set.
func (o *TrxSetupType) HasNonTaxable() bool {
	if o != nil && !IsNil(o.NonTaxable) {
		return true
	}

	return false
}

// SetNonTaxable gets a reference to the given bool and assigns it to the NonTaxable field.
func (o *TrxSetupType) SetNonTaxable(v bool) {
	o.NonTaxable = &v
}

// GetOwnershipStatus returns the OwnershipStatus field value if set, zero value otherwise.
func (o *TrxSetupType) GetOwnershipStatus() TrxOwnershipType {
	if o == nil || IsNil(o.OwnershipStatus) {
		var ret TrxOwnershipType
		return ret
	}
	return *o.OwnershipStatus
}

// GetOwnershipStatusOk returns a tuple with the OwnershipStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSetupType) GetOwnershipStatusOk() (*TrxOwnershipType, bool) {
	if o == nil || IsNil(o.OwnershipStatus) {
		return nil, false
	}
	return o.OwnershipStatus, true
}

// HasOwnershipStatus returns a boolean if a field has been set.
func (o *TrxSetupType) HasOwnershipStatus() bool {
	if o != nil && !IsNil(o.OwnershipStatus) {
		return true
	}

	return false
}

// SetOwnershipStatus gets a reference to the given TrxOwnershipType and assigns it to the OwnershipStatus field.
func (o *TrxSetupType) SetOwnershipStatus(v TrxOwnershipType) {
	o.OwnershipStatus = &v
}

// GetPostCovers returns the PostCovers field value if set, zero value otherwise.
func (o *TrxSetupType) GetPostCovers() bool {
	if o == nil || IsNil(o.PostCovers) {
		var ret bool
		return ret
	}
	return *o.PostCovers
}

// GetPostCoversOk returns a tuple with the PostCovers field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSetupType) GetPostCoversOk() (*bool, bool) {
	if o == nil || IsNil(o.PostCovers) {
		return nil, false
	}
	return o.PostCovers, true
}

// HasPostCovers returns a boolean if a field has been set.
func (o *TrxSetupType) HasPostCovers() bool {
	if o != nil && !IsNil(o.PostCovers) {
		return true
	}

	return false
}

// SetPostCovers gets a reference to the given bool and assigns it to the PostCovers field.
func (o *TrxSetupType) SetPostCovers(v bool) {
	o.PostCovers = &v
}

// GetPostingRule returns the PostingRule field value if set, zero value otherwise.
func (o *TrxSetupType) GetPostingRule() bool {
	if o == nil || IsNil(o.PostingRule) {
		var ret bool
		return ret
	}
	return *o.PostingRule
}

// GetPostingRuleOk returns a tuple with the PostingRule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSetupType) GetPostingRuleOk() (*bool, bool) {
	if o == nil || IsNil(o.PostingRule) {
		return nil, false
	}
	return o.PostingRule, true
}

// HasPostingRule returns a boolean if a field has been set.
func (o *TrxSetupType) HasPostingRule() bool {
	if o != nil && !IsNil(o.PostingRule) {
		return true
	}

	return false
}

// SetPostingRule gets a reference to the given bool and assigns it to the PostingRule field.
func (o *TrxSetupType) SetPostingRule(v bool) {
	o.PostingRule = &v
}

// GetQuantityCode returns the QuantityCode field value if set, zero value otherwise.
func (o *TrxSetupType) GetQuantityCode() string {
	if o == nil || IsNil(o.QuantityCode) {
		var ret string
		return ret
	}
	return *o.QuantityCode
}

// GetQuantityCodeOk returns a tuple with the QuantityCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSetupType) GetQuantityCodeOk() (*string, bool) {
	if o == nil || IsNil(o.QuantityCode) {
		return nil, false
	}
	return o.QuantityCode, true
}

// HasQuantityCode returns a boolean if a field has been set.
func (o *TrxSetupType) HasQuantityCode() bool {
	if o != nil && !IsNil(o.QuantityCode) {
		return true
	}

	return false
}

// SetQuantityCode gets a reference to the given string and assigns it to the QuantityCode field.
func (o *TrxSetupType) SetQuantityCode(v string) {
	o.QuantityCode = &v
}

// GetRedeemMembershipPoints returns the RedeemMembershipPoints field value if set, zero value otherwise.
func (o *TrxSetupType) GetRedeemMembershipPoints() bool {
	if o == nil || IsNil(o.RedeemMembershipPoints) {
		var ret bool
		return ret
	}
	return *o.RedeemMembershipPoints
}

// GetRedeemMembershipPointsOk returns a tuple with the RedeemMembershipPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSetupType) GetRedeemMembershipPointsOk() (*bool, bool) {
	if o == nil || IsNil(o.RedeemMembershipPoints) {
		return nil, false
	}
	return o.RedeemMembershipPoints, true
}

// HasRedeemMembershipPoints returns a boolean if a field has been set.
func (o *TrxSetupType) HasRedeemMembershipPoints() bool {
	if o != nil && !IsNil(o.RedeemMembershipPoints) {
		return true
	}

	return false
}

// SetRedeemMembershipPoints gets a reference to the given bool and assigns it to the RedeemMembershipPoints field.
func (o *TrxSetupType) SetRedeemMembershipPoints(v bool) {
	o.RedeemMembershipPoints = &v
}

// GetRevenue returns the Revenue field value if set, zero value otherwise.
func (o *TrxSetupType) GetRevenue() bool {
	if o == nil || IsNil(o.Revenue) {
		var ret bool
		return ret
	}
	return *o.Revenue
}

// GetRevenueOk returns a tuple with the Revenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSetupType) GetRevenueOk() (*bool, bool) {
	if o == nil || IsNil(o.Revenue) {
		return nil, false
	}
	return o.Revenue, true
}

// HasRevenue returns a boolean if a field has been set.
func (o *TrxSetupType) HasRevenue() bool {
	if o != nil && !IsNil(o.Revenue) {
		return true
	}

	return false
}

// SetRevenue gets a reference to the given bool and assigns it to the Revenue field.
func (o *TrxSetupType) SetRevenue(v bool) {
	o.Revenue = &v
}

// GetServiceType returns the ServiceType field value if set, zero value otherwise.
func (o *TrxSetupType) GetServiceType() string {
	if o == nil || IsNil(o.ServiceType) {
		var ret string
		return ret
	}
	return *o.ServiceType
}

// GetServiceTypeOk returns a tuple with the ServiceType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSetupType) GetServiceTypeOk() (*string, bool) {
	if o == nil || IsNil(o.ServiceType) {
		return nil, false
	}
	return o.ServiceType, true
}

// HasServiceType returns a boolean if a field has been set.
func (o *TrxSetupType) HasServiceType() bool {
	if o != nil && !IsNil(o.ServiceType) {
		return true
	}

	return false
}

// SetServiceType gets a reference to the given string and assigns it to the ServiceType field.
func (o *TrxSetupType) SetServiceType(v string) {
	o.ServiceType = &v
}

// GetTaxInclusive returns the TaxInclusive field value if set, zero value otherwise.
func (o *TrxSetupType) GetTaxInclusive() bool {
	if o == nil || IsNil(o.TaxInclusive) {
		var ret bool
		return ret
	}
	return *o.TaxInclusive
}

// GetTaxInclusiveOk returns a tuple with the TaxInclusive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSetupType) GetTaxInclusiveOk() (*bool, bool) {
	if o == nil || IsNil(o.TaxInclusive) {
		return nil, false
	}
	return o.TaxInclusive, true
}

// HasTaxInclusive returns a boolean if a field has been set.
func (o *TrxSetupType) HasTaxInclusive() bool {
	if o != nil && !IsNil(o.TaxInclusive) {
		return true
	}

	return false
}

// SetTaxInclusive gets a reference to the given bool and assigns it to the TaxInclusive field.
func (o *TrxSetupType) SetTaxInclusive(v bool) {
	o.TaxInclusive = &v
}

// GetUseForPaidout returns the UseForPaidout field value if set, zero value otherwise.
func (o *TrxSetupType) GetUseForPaidout() bool {
	if o == nil || IsNil(o.UseForPaidout) {
		var ret bool
		return ret
	}
	return *o.UseForPaidout
}

// GetUseForPaidoutOk returns a tuple with the UseForPaidout field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrxSetupType) GetUseForPaidoutOk() (*bool, bool) {
	if o == nil || IsNil(o.UseForPaidout) {
		return nil, false
	}
	return o.UseForPaidout, true
}

// HasUseForPaidout returns a boolean if a field has been set.
func (o *TrxSetupType) HasUseForPaidout() bool {
	if o != nil && !IsNil(o.UseForPaidout) {
		return true
	}

	return false
}

// SetUseForPaidout gets a reference to the given bool and assigns it to the UseForPaidout field.
func (o *TrxSetupType) SetUseForPaidout(v bool) {
	o.UseForPaidout = &v
}

func (o TrxSetupType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TrxSetupType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AccountingCode) {
		toSerialize["accountingCode"] = o.AccountingCode
	}
	if !IsNil(o.CheckNoRequired) {
		toSerialize["checkNoRequired"] = o.CheckNoRequired
	}
	if !IsNil(o.DepositPostingOnly) {
		toSerialize["depositPostingOnly"] = o.DepositPostingOnly
	}
	if !IsNil(o.DepositType) {
		toSerialize["depositType"] = o.DepositType
	}
	if !IsNil(o.EarnMembershipPoints) {
		toSerialize["earnMembershipPoints"] = o.EarnMembershipPoints
	}
	if !IsNil(o.GeneratesType) {
		toSerialize["generatesType"] = o.GeneratesType
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.IncludeInDepositRule) {
		toSerialize["includeInDepositRule"] = o.IncludeInDepositRule
	}
	if !IsNil(o.InterHotelSales) {
		toSerialize["interHotelSales"] = o.InterHotelSales
	}
	if !IsNil(o.ManualPosting) {
		toSerialize["manualPosting"] = o.ManualPosting
	}
	if !IsNil(o.NonTaxable) {
		toSerialize["nonTaxable"] = o.NonTaxable
	}
	if !IsNil(o.OwnershipStatus) {
		toSerialize["ownershipStatus"] = o.OwnershipStatus
	}
	if !IsNil(o.PostCovers) {
		toSerialize["postCovers"] = o.PostCovers
	}
	if !IsNil(o.PostingRule) {
		toSerialize["postingRule"] = o.PostingRule
	}
	if !IsNil(o.QuantityCode) {
		toSerialize["quantityCode"] = o.QuantityCode
	}
	if !IsNil(o.RedeemMembershipPoints) {
		toSerialize["redeemMembershipPoints"] = o.RedeemMembershipPoints
	}
	if !IsNil(o.Revenue) {
		toSerialize["revenue"] = o.Revenue
	}
	if !IsNil(o.ServiceType) {
		toSerialize["serviceType"] = o.ServiceType
	}
	if !IsNil(o.TaxInclusive) {
		toSerialize["taxInclusive"] = o.TaxInclusive
	}
	if !IsNil(o.UseForPaidout) {
		toSerialize["useForPaidout"] = o.UseForPaidout
	}
	return toSerialize, nil
}

type NullableTrxSetupType struct {
	value *TrxSetupType
	isSet bool
}

func (v NullableTrxSetupType) Get() *TrxSetupType {
	return v.value
}

func (v *NullableTrxSetupType) Set(val *TrxSetupType) {
	v.value = val
	v.isSet = true
}

func (v NullableTrxSetupType) IsSet() bool {
	return v.isSet
}

func (v *NullableTrxSetupType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTrxSetupType(val *TrxSetupType) *NullableTrxSetupType {
	return &NullableTrxSetupType{value: val, isSet: true}
}

func (v NullableTrxSetupType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTrxSetupType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


