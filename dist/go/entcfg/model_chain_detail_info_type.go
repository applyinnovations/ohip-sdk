/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the ChainDetailInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChainDetailInfoType{}

// ChainDetailInfoType struct for ChainDetailInfoType
type ChainDetailInfoType struct {
	// Flag to check if chain has ASP.
	AspYn *string `json:"aspYn,omitempty"`
	BookingConditions *string `json:"bookingConditions,omitempty"`
	ChainAddress *AddressType `json:"chainAddress,omitempty"`
	ChainCode *string `json:"chainCode,omitempty"`
	ChainDesc *string `json:"chainDesc,omitempty"`
	ChainName *string `json:"chainName,omitempty"`
	// The email address of the chain.
	Email *string `json:"email,omitempty"`
	// This represents the end date of chain.
	EndDate *string `json:"endDate,omitempty"`
	// The fax number of the chain.
	Fax *string `json:"fax,omitempty"`
	// Flag to check if chain accepts Frequent Flier Cards.
	FrequentFlierCardsAcceptYn *string `json:"frequentFlierCardsAcceptYn,omitempty"`
	LoyaltyProgram *string `json:"loyaltyProgram,omitempty"`
	MarketingText *string `json:"marketingText,omitempty"`
	// The phone number of the chain.
	Phone *string `json:"phone,omitempty"`
	// Flag to check if chain allows share Profiles.
	ShareProfilesYn *string `json:"shareProfilesYn,omitempty"`
	// This represents the begin date of Chain.
	StartDate *string `json:"startDate,omitempty"`
}

// NewChainDetailInfoType instantiates a new ChainDetailInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChainDetailInfoType() *ChainDetailInfoType {
	this := ChainDetailInfoType{}
	return &this
}

// NewChainDetailInfoTypeWithDefaults instantiates a new ChainDetailInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChainDetailInfoTypeWithDefaults() *ChainDetailInfoType {
	this := ChainDetailInfoType{}
	return &this
}

// GetAspYn returns the AspYn field value if set, zero value otherwise.
func (o *ChainDetailInfoType) GetAspYn() string {
	if o == nil || IsNil(o.AspYn) {
		var ret string
		return ret
	}
	return *o.AspYn
}

// GetAspYnOk returns a tuple with the AspYn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChainDetailInfoType) GetAspYnOk() (*string, bool) {
	if o == nil || IsNil(o.AspYn) {
		return nil, false
	}
	return o.AspYn, true
}

// HasAspYn returns a boolean if a field has been set.
func (o *ChainDetailInfoType) HasAspYn() bool {
	if o != nil && !IsNil(o.AspYn) {
		return true
	}

	return false
}

// SetAspYn gets a reference to the given string and assigns it to the AspYn field.
func (o *ChainDetailInfoType) SetAspYn(v string) {
	o.AspYn = &v
}

// GetBookingConditions returns the BookingConditions field value if set, zero value otherwise.
func (o *ChainDetailInfoType) GetBookingConditions() string {
	if o == nil || IsNil(o.BookingConditions) {
		var ret string
		return ret
	}
	return *o.BookingConditions
}

// GetBookingConditionsOk returns a tuple with the BookingConditions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChainDetailInfoType) GetBookingConditionsOk() (*string, bool) {
	if o == nil || IsNil(o.BookingConditions) {
		return nil, false
	}
	return o.BookingConditions, true
}

// HasBookingConditions returns a boolean if a field has been set.
func (o *ChainDetailInfoType) HasBookingConditions() bool {
	if o != nil && !IsNil(o.BookingConditions) {
		return true
	}

	return false
}

// SetBookingConditions gets a reference to the given string and assigns it to the BookingConditions field.
func (o *ChainDetailInfoType) SetBookingConditions(v string) {
	o.BookingConditions = &v
}

// GetChainAddress returns the ChainAddress field value if set, zero value otherwise.
func (o *ChainDetailInfoType) GetChainAddress() AddressType {
	if o == nil || IsNil(o.ChainAddress) {
		var ret AddressType
		return ret
	}
	return *o.ChainAddress
}

// GetChainAddressOk returns a tuple with the ChainAddress field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChainDetailInfoType) GetChainAddressOk() (*AddressType, bool) {
	if o == nil || IsNil(o.ChainAddress) {
		return nil, false
	}
	return o.ChainAddress, true
}

// HasChainAddress returns a boolean if a field has been set.
func (o *ChainDetailInfoType) HasChainAddress() bool {
	if o != nil && !IsNil(o.ChainAddress) {
		return true
	}

	return false
}

// SetChainAddress gets a reference to the given AddressType and assigns it to the ChainAddress field.
func (o *ChainDetailInfoType) SetChainAddress(v AddressType) {
	o.ChainAddress = &v
}

// GetChainCode returns the ChainCode field value if set, zero value otherwise.
func (o *ChainDetailInfoType) GetChainCode() string {
	if o == nil || IsNil(o.ChainCode) {
		var ret string
		return ret
	}
	return *o.ChainCode
}

// GetChainCodeOk returns a tuple with the ChainCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChainDetailInfoType) GetChainCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ChainCode) {
		return nil, false
	}
	return o.ChainCode, true
}

// HasChainCode returns a boolean if a field has been set.
func (o *ChainDetailInfoType) HasChainCode() bool {
	if o != nil && !IsNil(o.ChainCode) {
		return true
	}

	return false
}

// SetChainCode gets a reference to the given string and assigns it to the ChainCode field.
func (o *ChainDetailInfoType) SetChainCode(v string) {
	o.ChainCode = &v
}

// GetChainDesc returns the ChainDesc field value if set, zero value otherwise.
func (o *ChainDetailInfoType) GetChainDesc() string {
	if o == nil || IsNil(o.ChainDesc) {
		var ret string
		return ret
	}
	return *o.ChainDesc
}

// GetChainDescOk returns a tuple with the ChainDesc field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChainDetailInfoType) GetChainDescOk() (*string, bool) {
	if o == nil || IsNil(o.ChainDesc) {
		return nil, false
	}
	return o.ChainDesc, true
}

// HasChainDesc returns a boolean if a field has been set.
func (o *ChainDetailInfoType) HasChainDesc() bool {
	if o != nil && !IsNil(o.ChainDesc) {
		return true
	}

	return false
}

// SetChainDesc gets a reference to the given string and assigns it to the ChainDesc field.
func (o *ChainDetailInfoType) SetChainDesc(v string) {
	o.ChainDesc = &v
}

// GetChainName returns the ChainName field value if set, zero value otherwise.
func (o *ChainDetailInfoType) GetChainName() string {
	if o == nil || IsNil(o.ChainName) {
		var ret string
		return ret
	}
	return *o.ChainName
}

// GetChainNameOk returns a tuple with the ChainName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChainDetailInfoType) GetChainNameOk() (*string, bool) {
	if o == nil || IsNil(o.ChainName) {
		return nil, false
	}
	return o.ChainName, true
}

// HasChainName returns a boolean if a field has been set.
func (o *ChainDetailInfoType) HasChainName() bool {
	if o != nil && !IsNil(o.ChainName) {
		return true
	}

	return false
}

// SetChainName gets a reference to the given string and assigns it to the ChainName field.
func (o *ChainDetailInfoType) SetChainName(v string) {
	o.ChainName = &v
}

// GetEmail returns the Email field value if set, zero value otherwise.
func (o *ChainDetailInfoType) GetEmail() string {
	if o == nil || IsNil(o.Email) {
		var ret string
		return ret
	}
	return *o.Email
}

// GetEmailOk returns a tuple with the Email field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChainDetailInfoType) GetEmailOk() (*string, bool) {
	if o == nil || IsNil(o.Email) {
		return nil, false
	}
	return o.Email, true
}

// HasEmail returns a boolean if a field has been set.
func (o *ChainDetailInfoType) HasEmail() bool {
	if o != nil && !IsNil(o.Email) {
		return true
	}

	return false
}

// SetEmail gets a reference to the given string and assigns it to the Email field.
func (o *ChainDetailInfoType) SetEmail(v string) {
	o.Email = &v
}

// GetEndDate returns the EndDate field value if set, zero value otherwise.
func (o *ChainDetailInfoType) GetEndDate() string {
	if o == nil || IsNil(o.EndDate) {
		var ret string
		return ret
	}
	return *o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChainDetailInfoType) GetEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndDate) {
		return nil, false
	}
	return o.EndDate, true
}

// HasEndDate returns a boolean if a field has been set.
func (o *ChainDetailInfoType) HasEndDate() bool {
	if o != nil && !IsNil(o.EndDate) {
		return true
	}

	return false
}

// SetEndDate gets a reference to the given string and assigns it to the EndDate field.
func (o *ChainDetailInfoType) SetEndDate(v string) {
	o.EndDate = &v
}

// GetFax returns the Fax field value if set, zero value otherwise.
func (o *ChainDetailInfoType) GetFax() string {
	if o == nil || IsNil(o.Fax) {
		var ret string
		return ret
	}
	return *o.Fax
}

// GetFaxOk returns a tuple with the Fax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChainDetailInfoType) GetFaxOk() (*string, bool) {
	if o == nil || IsNil(o.Fax) {
		return nil, false
	}
	return o.Fax, true
}

// HasFax returns a boolean if a field has been set.
func (o *ChainDetailInfoType) HasFax() bool {
	if o != nil && !IsNil(o.Fax) {
		return true
	}

	return false
}

// SetFax gets a reference to the given string and assigns it to the Fax field.
func (o *ChainDetailInfoType) SetFax(v string) {
	o.Fax = &v
}

// GetFrequentFlierCardsAcceptYn returns the FrequentFlierCardsAcceptYn field value if set, zero value otherwise.
func (o *ChainDetailInfoType) GetFrequentFlierCardsAcceptYn() string {
	if o == nil || IsNil(o.FrequentFlierCardsAcceptYn) {
		var ret string
		return ret
	}
	return *o.FrequentFlierCardsAcceptYn
}

// GetFrequentFlierCardsAcceptYnOk returns a tuple with the FrequentFlierCardsAcceptYn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChainDetailInfoType) GetFrequentFlierCardsAcceptYnOk() (*string, bool) {
	if o == nil || IsNil(o.FrequentFlierCardsAcceptYn) {
		return nil, false
	}
	return o.FrequentFlierCardsAcceptYn, true
}

// HasFrequentFlierCardsAcceptYn returns a boolean if a field has been set.
func (o *ChainDetailInfoType) HasFrequentFlierCardsAcceptYn() bool {
	if o != nil && !IsNil(o.FrequentFlierCardsAcceptYn) {
		return true
	}

	return false
}

// SetFrequentFlierCardsAcceptYn gets a reference to the given string and assigns it to the FrequentFlierCardsAcceptYn field.
func (o *ChainDetailInfoType) SetFrequentFlierCardsAcceptYn(v string) {
	o.FrequentFlierCardsAcceptYn = &v
}

// GetLoyaltyProgram returns the LoyaltyProgram field value if set, zero value otherwise.
func (o *ChainDetailInfoType) GetLoyaltyProgram() string {
	if o == nil || IsNil(o.LoyaltyProgram) {
		var ret string
		return ret
	}
	return *o.LoyaltyProgram
}

// GetLoyaltyProgramOk returns a tuple with the LoyaltyProgram field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChainDetailInfoType) GetLoyaltyProgramOk() (*string, bool) {
	if o == nil || IsNil(o.LoyaltyProgram) {
		return nil, false
	}
	return o.LoyaltyProgram, true
}

// HasLoyaltyProgram returns a boolean if a field has been set.
func (o *ChainDetailInfoType) HasLoyaltyProgram() bool {
	if o != nil && !IsNil(o.LoyaltyProgram) {
		return true
	}

	return false
}

// SetLoyaltyProgram gets a reference to the given string and assigns it to the LoyaltyProgram field.
func (o *ChainDetailInfoType) SetLoyaltyProgram(v string) {
	o.LoyaltyProgram = &v
}

// GetMarketingText returns the MarketingText field value if set, zero value otherwise.
func (o *ChainDetailInfoType) GetMarketingText() string {
	if o == nil || IsNil(o.MarketingText) {
		var ret string
		return ret
	}
	return *o.MarketingText
}

// GetMarketingTextOk returns a tuple with the MarketingText field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChainDetailInfoType) GetMarketingTextOk() (*string, bool) {
	if o == nil || IsNil(o.MarketingText) {
		return nil, false
	}
	return o.MarketingText, true
}

// HasMarketingText returns a boolean if a field has been set.
func (o *ChainDetailInfoType) HasMarketingText() bool {
	if o != nil && !IsNil(o.MarketingText) {
		return true
	}

	return false
}

// SetMarketingText gets a reference to the given string and assigns it to the MarketingText field.
func (o *ChainDetailInfoType) SetMarketingText(v string) {
	o.MarketingText = &v
}

// GetPhone returns the Phone field value if set, zero value otherwise.
func (o *ChainDetailInfoType) GetPhone() string {
	if o == nil || IsNil(o.Phone) {
		var ret string
		return ret
	}
	return *o.Phone
}

// GetPhoneOk returns a tuple with the Phone field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChainDetailInfoType) GetPhoneOk() (*string, bool) {
	if o == nil || IsNil(o.Phone) {
		return nil, false
	}
	return o.Phone, true
}

// HasPhone returns a boolean if a field has been set.
func (o *ChainDetailInfoType) HasPhone() bool {
	if o != nil && !IsNil(o.Phone) {
		return true
	}

	return false
}

// SetPhone gets a reference to the given string and assigns it to the Phone field.
func (o *ChainDetailInfoType) SetPhone(v string) {
	o.Phone = &v
}

// GetShareProfilesYn returns the ShareProfilesYn field value if set, zero value otherwise.
func (o *ChainDetailInfoType) GetShareProfilesYn() string {
	if o == nil || IsNil(o.ShareProfilesYn) {
		var ret string
		return ret
	}
	return *o.ShareProfilesYn
}

// GetShareProfilesYnOk returns a tuple with the ShareProfilesYn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChainDetailInfoType) GetShareProfilesYnOk() (*string, bool) {
	if o == nil || IsNil(o.ShareProfilesYn) {
		return nil, false
	}
	return o.ShareProfilesYn, true
}

// HasShareProfilesYn returns a boolean if a field has been set.
func (o *ChainDetailInfoType) HasShareProfilesYn() bool {
	if o != nil && !IsNil(o.ShareProfilesYn) {
		return true
	}

	return false
}

// SetShareProfilesYn gets a reference to the given string and assigns it to the ShareProfilesYn field.
func (o *ChainDetailInfoType) SetShareProfilesYn(v string) {
	o.ShareProfilesYn = &v
}

// GetStartDate returns the StartDate field value if set, zero value otherwise.
func (o *ChainDetailInfoType) GetStartDate() string {
	if o == nil || IsNil(o.StartDate) {
		var ret string
		return ret
	}
	return *o.StartDate
}

// GetStartDateOk returns a tuple with the StartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChainDetailInfoType) GetStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.StartDate) {
		return nil, false
	}
	return o.StartDate, true
}

// HasStartDate returns a boolean if a field has been set.
func (o *ChainDetailInfoType) HasStartDate() bool {
	if o != nil && !IsNil(o.StartDate) {
		return true
	}

	return false
}

// SetStartDate gets a reference to the given string and assigns it to the StartDate field.
func (o *ChainDetailInfoType) SetStartDate(v string) {
	o.StartDate = &v
}

func (o ChainDetailInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChainDetailInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AspYn) {
		toSerialize["aspYn"] = o.AspYn
	}
	if !IsNil(o.BookingConditions) {
		toSerialize["bookingConditions"] = o.BookingConditions
	}
	if !IsNil(o.ChainAddress) {
		toSerialize["chainAddress"] = o.ChainAddress
	}
	if !IsNil(o.ChainCode) {
		toSerialize["chainCode"] = o.ChainCode
	}
	if !IsNil(o.ChainDesc) {
		toSerialize["chainDesc"] = o.ChainDesc
	}
	if !IsNil(o.ChainName) {
		toSerialize["chainName"] = o.ChainName
	}
	if !IsNil(o.Email) {
		toSerialize["email"] = o.Email
	}
	if !IsNil(o.EndDate) {
		toSerialize["endDate"] = o.EndDate
	}
	if !IsNil(o.Fax) {
		toSerialize["fax"] = o.Fax
	}
	if !IsNil(o.FrequentFlierCardsAcceptYn) {
		toSerialize["frequentFlierCardsAcceptYn"] = o.FrequentFlierCardsAcceptYn
	}
	if !IsNil(o.LoyaltyProgram) {
		toSerialize["loyaltyProgram"] = o.LoyaltyProgram
	}
	if !IsNil(o.MarketingText) {
		toSerialize["marketingText"] = o.MarketingText
	}
	if !IsNil(o.Phone) {
		toSerialize["phone"] = o.Phone
	}
	if !IsNil(o.ShareProfilesYn) {
		toSerialize["shareProfilesYn"] = o.ShareProfilesYn
	}
	if !IsNil(o.StartDate) {
		toSerialize["startDate"] = o.StartDate
	}
	return toSerialize, nil
}

type NullableChainDetailInfoType struct {
	value *ChainDetailInfoType
	isSet bool
}

func (v NullableChainDetailInfoType) Get() *ChainDetailInfoType {
	return v.value
}

func (v *NullableChainDetailInfoType) Set(val *ChainDetailInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableChainDetailInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableChainDetailInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChainDetailInfoType(val *ChainDetailInfoType) *NullableChainDetailInfoType {
	return &NullableChainDetailInfoType{value: val, isSet: true}
}

func (v NullableChainDetailInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChainDetailInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


