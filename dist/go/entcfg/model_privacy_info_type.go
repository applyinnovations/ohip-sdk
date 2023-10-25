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

// checks if the PrivacyInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PrivacyInfoType{}

// PrivacyInfoType Defines Privacy related information for the profile.
type PrivacyInfoType struct {
	// Indicates if the profile wishes to allow Email.
	AllowEmail *bool `json:"allowEmail,omitempty"`
	// Indicates if the profile wishes to allow phone calls.
	AllowPhone *bool `json:"allowPhone,omitempty"`
	// Indicates if the profile wishes to allow SMS.
	AllowSMS *bool `json:"allowSMS,omitempty"`
	// Indicates if the profile wishes to be automatically enrolled in the property's loyalty program.
	AutoEnrollLoyaltyProgram *bool `json:"autoEnrollLoyaltyProgram,omitempty"`
	// Indicates if the profile is ok getting info from third parties.
	InfoFromThirdParty *bool `json:"infoFromThirdParty,omitempty"`
	// Indicate the last privacy prompt date of the guest.
	LastPrivacyPromptDate *string `json:"lastPrivacyPromptDate,omitempty"`
	// Indicates if the profile participates in market research.
	MarketResearchParticipation *bool `json:"marketResearchParticipation,omitempty"`
	// Indicates if the profile wishes to opt in for Auto Enrolment Member.
	OptInAutoEnrollmentMember *bool `json:"optInAutoEnrollmentMember,omitempty"`
	// Indicates if the profile wishes to opt in for Email.
	OptInEmail *bool `json:"optInEmail,omitempty"`
	// Indicates if the profile wishes to opt in for Mailing List.
	OptInMailingList *bool `json:"optInMailingList,omitempty"`
	// Indicates if the profile wishes to opt in for Market Research.
	OptInMarketResearch *bool `json:"optInMarketResearch,omitempty"`
	// Indicates if the profile wishes to opt in for Phone.
	OptInPhone *bool `json:"optInPhone,omitempty"`
	// Indicates if the profile wishes to opt in for SMS.
	OptInSms *bool `json:"optInSms,omitempty"`
	// Indicates if the profile wishes to opt in for Third Party.
	OptInThirdParty *bool `json:"optInThirdParty,omitempty"`
}

// NewPrivacyInfoType instantiates a new PrivacyInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPrivacyInfoType() *PrivacyInfoType {
	this := PrivacyInfoType{}
	return &this
}

// NewPrivacyInfoTypeWithDefaults instantiates a new PrivacyInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPrivacyInfoTypeWithDefaults() *PrivacyInfoType {
	this := PrivacyInfoType{}
	return &this
}

// GetAllowEmail returns the AllowEmail field value if set, zero value otherwise.
func (o *PrivacyInfoType) GetAllowEmail() bool {
	if o == nil || IsNil(o.AllowEmail) {
		var ret bool
		return ret
	}
	return *o.AllowEmail
}

// GetAllowEmailOk returns a tuple with the AllowEmail field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrivacyInfoType) GetAllowEmailOk() (*bool, bool) {
	if o == nil || IsNil(o.AllowEmail) {
		return nil, false
	}
	return o.AllowEmail, true
}

// HasAllowEmail returns a boolean if a field has been set.
func (o *PrivacyInfoType) HasAllowEmail() bool {
	if o != nil && !IsNil(o.AllowEmail) {
		return true
	}

	return false
}

// SetAllowEmail gets a reference to the given bool and assigns it to the AllowEmail field.
func (o *PrivacyInfoType) SetAllowEmail(v bool) {
	o.AllowEmail = &v
}

// GetAllowPhone returns the AllowPhone field value if set, zero value otherwise.
func (o *PrivacyInfoType) GetAllowPhone() bool {
	if o == nil || IsNil(o.AllowPhone) {
		var ret bool
		return ret
	}
	return *o.AllowPhone
}

// GetAllowPhoneOk returns a tuple with the AllowPhone field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrivacyInfoType) GetAllowPhoneOk() (*bool, bool) {
	if o == nil || IsNil(o.AllowPhone) {
		return nil, false
	}
	return o.AllowPhone, true
}

// HasAllowPhone returns a boolean if a field has been set.
func (o *PrivacyInfoType) HasAllowPhone() bool {
	if o != nil && !IsNil(o.AllowPhone) {
		return true
	}

	return false
}

// SetAllowPhone gets a reference to the given bool and assigns it to the AllowPhone field.
func (o *PrivacyInfoType) SetAllowPhone(v bool) {
	o.AllowPhone = &v
}

// GetAllowSMS returns the AllowSMS field value if set, zero value otherwise.
func (o *PrivacyInfoType) GetAllowSMS() bool {
	if o == nil || IsNil(o.AllowSMS) {
		var ret bool
		return ret
	}
	return *o.AllowSMS
}

// GetAllowSMSOk returns a tuple with the AllowSMS field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrivacyInfoType) GetAllowSMSOk() (*bool, bool) {
	if o == nil || IsNil(o.AllowSMS) {
		return nil, false
	}
	return o.AllowSMS, true
}

// HasAllowSMS returns a boolean if a field has been set.
func (o *PrivacyInfoType) HasAllowSMS() bool {
	if o != nil && !IsNil(o.AllowSMS) {
		return true
	}

	return false
}

// SetAllowSMS gets a reference to the given bool and assigns it to the AllowSMS field.
func (o *PrivacyInfoType) SetAllowSMS(v bool) {
	o.AllowSMS = &v
}

// GetAutoEnrollLoyaltyProgram returns the AutoEnrollLoyaltyProgram field value if set, zero value otherwise.
func (o *PrivacyInfoType) GetAutoEnrollLoyaltyProgram() bool {
	if o == nil || IsNil(o.AutoEnrollLoyaltyProgram) {
		var ret bool
		return ret
	}
	return *o.AutoEnrollLoyaltyProgram
}

// GetAutoEnrollLoyaltyProgramOk returns a tuple with the AutoEnrollLoyaltyProgram field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrivacyInfoType) GetAutoEnrollLoyaltyProgramOk() (*bool, bool) {
	if o == nil || IsNil(o.AutoEnrollLoyaltyProgram) {
		return nil, false
	}
	return o.AutoEnrollLoyaltyProgram, true
}

// HasAutoEnrollLoyaltyProgram returns a boolean if a field has been set.
func (o *PrivacyInfoType) HasAutoEnrollLoyaltyProgram() bool {
	if o != nil && !IsNil(o.AutoEnrollLoyaltyProgram) {
		return true
	}

	return false
}

// SetAutoEnrollLoyaltyProgram gets a reference to the given bool and assigns it to the AutoEnrollLoyaltyProgram field.
func (o *PrivacyInfoType) SetAutoEnrollLoyaltyProgram(v bool) {
	o.AutoEnrollLoyaltyProgram = &v
}

// GetInfoFromThirdParty returns the InfoFromThirdParty field value if set, zero value otherwise.
func (o *PrivacyInfoType) GetInfoFromThirdParty() bool {
	if o == nil || IsNil(o.InfoFromThirdParty) {
		var ret bool
		return ret
	}
	return *o.InfoFromThirdParty
}

// GetInfoFromThirdPartyOk returns a tuple with the InfoFromThirdParty field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrivacyInfoType) GetInfoFromThirdPartyOk() (*bool, bool) {
	if o == nil || IsNil(o.InfoFromThirdParty) {
		return nil, false
	}
	return o.InfoFromThirdParty, true
}

// HasInfoFromThirdParty returns a boolean if a field has been set.
func (o *PrivacyInfoType) HasInfoFromThirdParty() bool {
	if o != nil && !IsNil(o.InfoFromThirdParty) {
		return true
	}

	return false
}

// SetInfoFromThirdParty gets a reference to the given bool and assigns it to the InfoFromThirdParty field.
func (o *PrivacyInfoType) SetInfoFromThirdParty(v bool) {
	o.InfoFromThirdParty = &v
}

// GetLastPrivacyPromptDate returns the LastPrivacyPromptDate field value if set, zero value otherwise.
func (o *PrivacyInfoType) GetLastPrivacyPromptDate() string {
	if o == nil || IsNil(o.LastPrivacyPromptDate) {
		var ret string
		return ret
	}
	return *o.LastPrivacyPromptDate
}

// GetLastPrivacyPromptDateOk returns a tuple with the LastPrivacyPromptDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrivacyInfoType) GetLastPrivacyPromptDateOk() (*string, bool) {
	if o == nil || IsNil(o.LastPrivacyPromptDate) {
		return nil, false
	}
	return o.LastPrivacyPromptDate, true
}

// HasLastPrivacyPromptDate returns a boolean if a field has been set.
func (o *PrivacyInfoType) HasLastPrivacyPromptDate() bool {
	if o != nil && !IsNil(o.LastPrivacyPromptDate) {
		return true
	}

	return false
}

// SetLastPrivacyPromptDate gets a reference to the given string and assigns it to the LastPrivacyPromptDate field.
func (o *PrivacyInfoType) SetLastPrivacyPromptDate(v string) {
	o.LastPrivacyPromptDate = &v
}

// GetMarketResearchParticipation returns the MarketResearchParticipation field value if set, zero value otherwise.
func (o *PrivacyInfoType) GetMarketResearchParticipation() bool {
	if o == nil || IsNil(o.MarketResearchParticipation) {
		var ret bool
		return ret
	}
	return *o.MarketResearchParticipation
}

// GetMarketResearchParticipationOk returns a tuple with the MarketResearchParticipation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrivacyInfoType) GetMarketResearchParticipationOk() (*bool, bool) {
	if o == nil || IsNil(o.MarketResearchParticipation) {
		return nil, false
	}
	return o.MarketResearchParticipation, true
}

// HasMarketResearchParticipation returns a boolean if a field has been set.
func (o *PrivacyInfoType) HasMarketResearchParticipation() bool {
	if o != nil && !IsNil(o.MarketResearchParticipation) {
		return true
	}

	return false
}

// SetMarketResearchParticipation gets a reference to the given bool and assigns it to the MarketResearchParticipation field.
func (o *PrivacyInfoType) SetMarketResearchParticipation(v bool) {
	o.MarketResearchParticipation = &v
}

// GetOptInAutoEnrollmentMember returns the OptInAutoEnrollmentMember field value if set, zero value otherwise.
func (o *PrivacyInfoType) GetOptInAutoEnrollmentMember() bool {
	if o == nil || IsNil(o.OptInAutoEnrollmentMember) {
		var ret bool
		return ret
	}
	return *o.OptInAutoEnrollmentMember
}

// GetOptInAutoEnrollmentMemberOk returns a tuple with the OptInAutoEnrollmentMember field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrivacyInfoType) GetOptInAutoEnrollmentMemberOk() (*bool, bool) {
	if o == nil || IsNil(o.OptInAutoEnrollmentMember) {
		return nil, false
	}
	return o.OptInAutoEnrollmentMember, true
}

// HasOptInAutoEnrollmentMember returns a boolean if a field has been set.
func (o *PrivacyInfoType) HasOptInAutoEnrollmentMember() bool {
	if o != nil && !IsNil(o.OptInAutoEnrollmentMember) {
		return true
	}

	return false
}

// SetOptInAutoEnrollmentMember gets a reference to the given bool and assigns it to the OptInAutoEnrollmentMember field.
func (o *PrivacyInfoType) SetOptInAutoEnrollmentMember(v bool) {
	o.OptInAutoEnrollmentMember = &v
}

// GetOptInEmail returns the OptInEmail field value if set, zero value otherwise.
func (o *PrivacyInfoType) GetOptInEmail() bool {
	if o == nil || IsNil(o.OptInEmail) {
		var ret bool
		return ret
	}
	return *o.OptInEmail
}

// GetOptInEmailOk returns a tuple with the OptInEmail field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrivacyInfoType) GetOptInEmailOk() (*bool, bool) {
	if o == nil || IsNil(o.OptInEmail) {
		return nil, false
	}
	return o.OptInEmail, true
}

// HasOptInEmail returns a boolean if a field has been set.
func (o *PrivacyInfoType) HasOptInEmail() bool {
	if o != nil && !IsNil(o.OptInEmail) {
		return true
	}

	return false
}

// SetOptInEmail gets a reference to the given bool and assigns it to the OptInEmail field.
func (o *PrivacyInfoType) SetOptInEmail(v bool) {
	o.OptInEmail = &v
}

// GetOptInMailingList returns the OptInMailingList field value if set, zero value otherwise.
func (o *PrivacyInfoType) GetOptInMailingList() bool {
	if o == nil || IsNil(o.OptInMailingList) {
		var ret bool
		return ret
	}
	return *o.OptInMailingList
}

// GetOptInMailingListOk returns a tuple with the OptInMailingList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrivacyInfoType) GetOptInMailingListOk() (*bool, bool) {
	if o == nil || IsNil(o.OptInMailingList) {
		return nil, false
	}
	return o.OptInMailingList, true
}

// HasOptInMailingList returns a boolean if a field has been set.
func (o *PrivacyInfoType) HasOptInMailingList() bool {
	if o != nil && !IsNil(o.OptInMailingList) {
		return true
	}

	return false
}

// SetOptInMailingList gets a reference to the given bool and assigns it to the OptInMailingList field.
func (o *PrivacyInfoType) SetOptInMailingList(v bool) {
	o.OptInMailingList = &v
}

// GetOptInMarketResearch returns the OptInMarketResearch field value if set, zero value otherwise.
func (o *PrivacyInfoType) GetOptInMarketResearch() bool {
	if o == nil || IsNil(o.OptInMarketResearch) {
		var ret bool
		return ret
	}
	return *o.OptInMarketResearch
}

// GetOptInMarketResearchOk returns a tuple with the OptInMarketResearch field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrivacyInfoType) GetOptInMarketResearchOk() (*bool, bool) {
	if o == nil || IsNil(o.OptInMarketResearch) {
		return nil, false
	}
	return o.OptInMarketResearch, true
}

// HasOptInMarketResearch returns a boolean if a field has been set.
func (o *PrivacyInfoType) HasOptInMarketResearch() bool {
	if o != nil && !IsNil(o.OptInMarketResearch) {
		return true
	}

	return false
}

// SetOptInMarketResearch gets a reference to the given bool and assigns it to the OptInMarketResearch field.
func (o *PrivacyInfoType) SetOptInMarketResearch(v bool) {
	o.OptInMarketResearch = &v
}

// GetOptInPhone returns the OptInPhone field value if set, zero value otherwise.
func (o *PrivacyInfoType) GetOptInPhone() bool {
	if o == nil || IsNil(o.OptInPhone) {
		var ret bool
		return ret
	}
	return *o.OptInPhone
}

// GetOptInPhoneOk returns a tuple with the OptInPhone field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrivacyInfoType) GetOptInPhoneOk() (*bool, bool) {
	if o == nil || IsNil(o.OptInPhone) {
		return nil, false
	}
	return o.OptInPhone, true
}

// HasOptInPhone returns a boolean if a field has been set.
func (o *PrivacyInfoType) HasOptInPhone() bool {
	if o != nil && !IsNil(o.OptInPhone) {
		return true
	}

	return false
}

// SetOptInPhone gets a reference to the given bool and assigns it to the OptInPhone field.
func (o *PrivacyInfoType) SetOptInPhone(v bool) {
	o.OptInPhone = &v
}

// GetOptInSms returns the OptInSms field value if set, zero value otherwise.
func (o *PrivacyInfoType) GetOptInSms() bool {
	if o == nil || IsNil(o.OptInSms) {
		var ret bool
		return ret
	}
	return *o.OptInSms
}

// GetOptInSmsOk returns a tuple with the OptInSms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrivacyInfoType) GetOptInSmsOk() (*bool, bool) {
	if o == nil || IsNil(o.OptInSms) {
		return nil, false
	}
	return o.OptInSms, true
}

// HasOptInSms returns a boolean if a field has been set.
func (o *PrivacyInfoType) HasOptInSms() bool {
	if o != nil && !IsNil(o.OptInSms) {
		return true
	}

	return false
}

// SetOptInSms gets a reference to the given bool and assigns it to the OptInSms field.
func (o *PrivacyInfoType) SetOptInSms(v bool) {
	o.OptInSms = &v
}

// GetOptInThirdParty returns the OptInThirdParty field value if set, zero value otherwise.
func (o *PrivacyInfoType) GetOptInThirdParty() bool {
	if o == nil || IsNil(o.OptInThirdParty) {
		var ret bool
		return ret
	}
	return *o.OptInThirdParty
}

// GetOptInThirdPartyOk returns a tuple with the OptInThirdParty field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PrivacyInfoType) GetOptInThirdPartyOk() (*bool, bool) {
	if o == nil || IsNil(o.OptInThirdParty) {
		return nil, false
	}
	return o.OptInThirdParty, true
}

// HasOptInThirdParty returns a boolean if a field has been set.
func (o *PrivacyInfoType) HasOptInThirdParty() bool {
	if o != nil && !IsNil(o.OptInThirdParty) {
		return true
	}

	return false
}

// SetOptInThirdParty gets a reference to the given bool and assigns it to the OptInThirdParty field.
func (o *PrivacyInfoType) SetOptInThirdParty(v bool) {
	o.OptInThirdParty = &v
}

func (o PrivacyInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PrivacyInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AllowEmail) {
		toSerialize["allowEmail"] = o.AllowEmail
	}
	if !IsNil(o.AllowPhone) {
		toSerialize["allowPhone"] = o.AllowPhone
	}
	if !IsNil(o.AllowSMS) {
		toSerialize["allowSMS"] = o.AllowSMS
	}
	if !IsNil(o.AutoEnrollLoyaltyProgram) {
		toSerialize["autoEnrollLoyaltyProgram"] = o.AutoEnrollLoyaltyProgram
	}
	if !IsNil(o.InfoFromThirdParty) {
		toSerialize["infoFromThirdParty"] = o.InfoFromThirdParty
	}
	if !IsNil(o.LastPrivacyPromptDate) {
		toSerialize["lastPrivacyPromptDate"] = o.LastPrivacyPromptDate
	}
	if !IsNil(o.MarketResearchParticipation) {
		toSerialize["marketResearchParticipation"] = o.MarketResearchParticipation
	}
	if !IsNil(o.OptInAutoEnrollmentMember) {
		toSerialize["optInAutoEnrollmentMember"] = o.OptInAutoEnrollmentMember
	}
	if !IsNil(o.OptInEmail) {
		toSerialize["optInEmail"] = o.OptInEmail
	}
	if !IsNil(o.OptInMailingList) {
		toSerialize["optInMailingList"] = o.OptInMailingList
	}
	if !IsNil(o.OptInMarketResearch) {
		toSerialize["optInMarketResearch"] = o.OptInMarketResearch
	}
	if !IsNil(o.OptInPhone) {
		toSerialize["optInPhone"] = o.OptInPhone
	}
	if !IsNil(o.OptInSms) {
		toSerialize["optInSms"] = o.OptInSms
	}
	if !IsNil(o.OptInThirdParty) {
		toSerialize["optInThirdParty"] = o.OptInThirdParty
	}
	return toSerialize, nil
}

type NullablePrivacyInfoType struct {
	value *PrivacyInfoType
	isSet bool
}

func (v NullablePrivacyInfoType) Get() *PrivacyInfoType {
	return v.value
}

func (v *NullablePrivacyInfoType) Set(val *PrivacyInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullablePrivacyInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullablePrivacyInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePrivacyInfoType(val *PrivacyInfoType) *NullablePrivacyInfoType {
	return &NullablePrivacyInfoType{value: val, isSet: true}
}

func (v NullablePrivacyInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePrivacyInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


