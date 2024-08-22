/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
)

// checks if the AwardPointsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AwardPointsType{}

// AwardPointsType Base parent type for membership points comprising common elements between award points and tier points.
type AwardPointsType struct {
	// Indicates if points will be displayed for guests who are not members.
	NonMemberPoints *bool `json:"nonMemberPoints,omitempty"`
	// Award points will be recognized in this number of days following the guest's check out date. The minimum number of days is 3 and the maximum number of days is 60. This delay provides a period of time during which adjustments can be made at the PMS level before awards are uploaded to ORS/OCIS.
	DelayInDays *int32 `json:"delayInDays,omitempty"`
	// Indicates Membership card will be expired if there is no activity on the card for this number of years.
	YearsToExpire *int32 `json:"yearsToExpire,omitempty"`
	CalendarPeriod *CalendarPeriodType `json:"calendarPeriod,omitempty"`
	ExpiryPeriod *NumberOfYearsType `json:"expiryPeriod,omitempty"`
	// Month of Expiry for Calendar
	ExpiryMonth *string `json:"expiryMonth,omitempty"`
	// Months for which the Points accumulated can be redeemed for Rolling period.
	MonthsToAwardPointsExpiry *int32 `json:"monthsToAwardPointsExpiry,omitempty"`
	AwardPointsExpiryDate *AwardPointsValidityDurationType `json:"awardPointsExpiryDate,omitempty"`
	// Award redemption threshold
	AwardRedeemThreshold *int32 `json:"awardRedeemThreshold,omitempty"`
	// Activity Period in months for Rolling.
	ActivityPeriodMonths *int32 `json:"activityPeriodMonths,omitempty"`
	ActivityPeriodYears *NumberOfYearsType `json:"activityPeriodYears,omitempty"`
	// Grace Period in months used for Rolling.
	GracePeriodMonths *int32 `json:"gracePeriodMonths,omitempty"`
	GracePeriodYear *CalendarGracePeriodType `json:"gracePeriodYear,omitempty"`
	// Calculate stay points even if the loyalty membership card is not attached.
	RequiredOnStayPeriod *bool `json:"requiredOnStayPeriod,omitempty"`
	ExceptionCriteria *AwardsExceptionCriteriaType `json:"exceptionCriteria,omitempty"`
}

// NewAwardPointsType instantiates a new AwardPointsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAwardPointsType() *AwardPointsType {
	this := AwardPointsType{}
	return &this
}

// NewAwardPointsTypeWithDefaults instantiates a new AwardPointsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAwardPointsTypeWithDefaults() *AwardPointsType {
	this := AwardPointsType{}
	return &this
}

// GetNonMemberPoints returns the NonMemberPoints field value if set, zero value otherwise.
func (o *AwardPointsType) GetNonMemberPoints() bool {
	if o == nil || IsNil(o.NonMemberPoints) {
		var ret bool
		return ret
	}
	return *o.NonMemberPoints
}

// GetNonMemberPointsOk returns a tuple with the NonMemberPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardPointsType) GetNonMemberPointsOk() (*bool, bool) {
	if o == nil || IsNil(o.NonMemberPoints) {
		return nil, false
	}
	return o.NonMemberPoints, true
}

// HasNonMemberPoints returns a boolean if a field has been set.
func (o *AwardPointsType) HasNonMemberPoints() bool {
	if o != nil && !IsNil(o.NonMemberPoints) {
		return true
	}

	return false
}

// SetNonMemberPoints gets a reference to the given bool and assigns it to the NonMemberPoints field.
func (o *AwardPointsType) SetNonMemberPoints(v bool) {
	o.NonMemberPoints = &v
}

// GetDelayInDays returns the DelayInDays field value if set, zero value otherwise.
func (o *AwardPointsType) GetDelayInDays() int32 {
	if o == nil || IsNil(o.DelayInDays) {
		var ret int32
		return ret
	}
	return *o.DelayInDays
}

// GetDelayInDaysOk returns a tuple with the DelayInDays field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardPointsType) GetDelayInDaysOk() (*int32, bool) {
	if o == nil || IsNil(o.DelayInDays) {
		return nil, false
	}
	return o.DelayInDays, true
}

// HasDelayInDays returns a boolean if a field has been set.
func (o *AwardPointsType) HasDelayInDays() bool {
	if o != nil && !IsNil(o.DelayInDays) {
		return true
	}

	return false
}

// SetDelayInDays gets a reference to the given int32 and assigns it to the DelayInDays field.
func (o *AwardPointsType) SetDelayInDays(v int32) {
	o.DelayInDays = &v
}

// GetYearsToExpire returns the YearsToExpire field value if set, zero value otherwise.
func (o *AwardPointsType) GetYearsToExpire() int32 {
	if o == nil || IsNil(o.YearsToExpire) {
		var ret int32
		return ret
	}
	return *o.YearsToExpire
}

// GetYearsToExpireOk returns a tuple with the YearsToExpire field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardPointsType) GetYearsToExpireOk() (*int32, bool) {
	if o == nil || IsNil(o.YearsToExpire) {
		return nil, false
	}
	return o.YearsToExpire, true
}

// HasYearsToExpire returns a boolean if a field has been set.
func (o *AwardPointsType) HasYearsToExpire() bool {
	if o != nil && !IsNil(o.YearsToExpire) {
		return true
	}

	return false
}

// SetYearsToExpire gets a reference to the given int32 and assigns it to the YearsToExpire field.
func (o *AwardPointsType) SetYearsToExpire(v int32) {
	o.YearsToExpire = &v
}

// GetCalendarPeriod returns the CalendarPeriod field value if set, zero value otherwise.
func (o *AwardPointsType) GetCalendarPeriod() CalendarPeriodType {
	if o == nil || IsNil(o.CalendarPeriod) {
		var ret CalendarPeriodType
		return ret
	}
	return *o.CalendarPeriod
}

// GetCalendarPeriodOk returns a tuple with the CalendarPeriod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardPointsType) GetCalendarPeriodOk() (*CalendarPeriodType, bool) {
	if o == nil || IsNil(o.CalendarPeriod) {
		return nil, false
	}
	return o.CalendarPeriod, true
}

// HasCalendarPeriod returns a boolean if a field has been set.
func (o *AwardPointsType) HasCalendarPeriod() bool {
	if o != nil && !IsNil(o.CalendarPeriod) {
		return true
	}

	return false
}

// SetCalendarPeriod gets a reference to the given CalendarPeriodType and assigns it to the CalendarPeriod field.
func (o *AwardPointsType) SetCalendarPeriod(v CalendarPeriodType) {
	o.CalendarPeriod = &v
}

// GetExpiryPeriod returns the ExpiryPeriod field value if set, zero value otherwise.
func (o *AwardPointsType) GetExpiryPeriod() NumberOfYearsType {
	if o == nil || IsNil(o.ExpiryPeriod) {
		var ret NumberOfYearsType
		return ret
	}
	return *o.ExpiryPeriod
}

// GetExpiryPeriodOk returns a tuple with the ExpiryPeriod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardPointsType) GetExpiryPeriodOk() (*NumberOfYearsType, bool) {
	if o == nil || IsNil(o.ExpiryPeriod) {
		return nil, false
	}
	return o.ExpiryPeriod, true
}

// HasExpiryPeriod returns a boolean if a field has been set.
func (o *AwardPointsType) HasExpiryPeriod() bool {
	if o != nil && !IsNil(o.ExpiryPeriod) {
		return true
	}

	return false
}

// SetExpiryPeriod gets a reference to the given NumberOfYearsType and assigns it to the ExpiryPeriod field.
func (o *AwardPointsType) SetExpiryPeriod(v NumberOfYearsType) {
	o.ExpiryPeriod = &v
}

// GetExpiryMonth returns the ExpiryMonth field value if set, zero value otherwise.
func (o *AwardPointsType) GetExpiryMonth() string {
	if o == nil || IsNil(o.ExpiryMonth) {
		var ret string
		return ret
	}
	return *o.ExpiryMonth
}

// GetExpiryMonthOk returns a tuple with the ExpiryMonth field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardPointsType) GetExpiryMonthOk() (*string, bool) {
	if o == nil || IsNil(o.ExpiryMonth) {
		return nil, false
	}
	return o.ExpiryMonth, true
}

// HasExpiryMonth returns a boolean if a field has been set.
func (o *AwardPointsType) HasExpiryMonth() bool {
	if o != nil && !IsNil(o.ExpiryMonth) {
		return true
	}

	return false
}

// SetExpiryMonth gets a reference to the given string and assigns it to the ExpiryMonth field.
func (o *AwardPointsType) SetExpiryMonth(v string) {
	o.ExpiryMonth = &v
}

// GetMonthsToAwardPointsExpiry returns the MonthsToAwardPointsExpiry field value if set, zero value otherwise.
func (o *AwardPointsType) GetMonthsToAwardPointsExpiry() int32 {
	if o == nil || IsNil(o.MonthsToAwardPointsExpiry) {
		var ret int32
		return ret
	}
	return *o.MonthsToAwardPointsExpiry
}

// GetMonthsToAwardPointsExpiryOk returns a tuple with the MonthsToAwardPointsExpiry field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardPointsType) GetMonthsToAwardPointsExpiryOk() (*int32, bool) {
	if o == nil || IsNil(o.MonthsToAwardPointsExpiry) {
		return nil, false
	}
	return o.MonthsToAwardPointsExpiry, true
}

// HasMonthsToAwardPointsExpiry returns a boolean if a field has been set.
func (o *AwardPointsType) HasMonthsToAwardPointsExpiry() bool {
	if o != nil && !IsNil(o.MonthsToAwardPointsExpiry) {
		return true
	}

	return false
}

// SetMonthsToAwardPointsExpiry gets a reference to the given int32 and assigns it to the MonthsToAwardPointsExpiry field.
func (o *AwardPointsType) SetMonthsToAwardPointsExpiry(v int32) {
	o.MonthsToAwardPointsExpiry = &v
}

// GetAwardPointsExpiryDate returns the AwardPointsExpiryDate field value if set, zero value otherwise.
func (o *AwardPointsType) GetAwardPointsExpiryDate() AwardPointsValidityDurationType {
	if o == nil || IsNil(o.AwardPointsExpiryDate) {
		var ret AwardPointsValidityDurationType
		return ret
	}
	return *o.AwardPointsExpiryDate
}

// GetAwardPointsExpiryDateOk returns a tuple with the AwardPointsExpiryDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardPointsType) GetAwardPointsExpiryDateOk() (*AwardPointsValidityDurationType, bool) {
	if o == nil || IsNil(o.AwardPointsExpiryDate) {
		return nil, false
	}
	return o.AwardPointsExpiryDate, true
}

// HasAwardPointsExpiryDate returns a boolean if a field has been set.
func (o *AwardPointsType) HasAwardPointsExpiryDate() bool {
	if o != nil && !IsNil(o.AwardPointsExpiryDate) {
		return true
	}

	return false
}

// SetAwardPointsExpiryDate gets a reference to the given AwardPointsValidityDurationType and assigns it to the AwardPointsExpiryDate field.
func (o *AwardPointsType) SetAwardPointsExpiryDate(v AwardPointsValidityDurationType) {
	o.AwardPointsExpiryDate = &v
}

// GetAwardRedeemThreshold returns the AwardRedeemThreshold field value if set, zero value otherwise.
func (o *AwardPointsType) GetAwardRedeemThreshold() int32 {
	if o == nil || IsNil(o.AwardRedeemThreshold) {
		var ret int32
		return ret
	}
	return *o.AwardRedeemThreshold
}

// GetAwardRedeemThresholdOk returns a tuple with the AwardRedeemThreshold field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardPointsType) GetAwardRedeemThresholdOk() (*int32, bool) {
	if o == nil || IsNil(o.AwardRedeemThreshold) {
		return nil, false
	}
	return o.AwardRedeemThreshold, true
}

// HasAwardRedeemThreshold returns a boolean if a field has been set.
func (o *AwardPointsType) HasAwardRedeemThreshold() bool {
	if o != nil && !IsNil(o.AwardRedeemThreshold) {
		return true
	}

	return false
}

// SetAwardRedeemThreshold gets a reference to the given int32 and assigns it to the AwardRedeemThreshold field.
func (o *AwardPointsType) SetAwardRedeemThreshold(v int32) {
	o.AwardRedeemThreshold = &v
}

// GetActivityPeriodMonths returns the ActivityPeriodMonths field value if set, zero value otherwise.
func (o *AwardPointsType) GetActivityPeriodMonths() int32 {
	if o == nil || IsNil(o.ActivityPeriodMonths) {
		var ret int32
		return ret
	}
	return *o.ActivityPeriodMonths
}

// GetActivityPeriodMonthsOk returns a tuple with the ActivityPeriodMonths field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardPointsType) GetActivityPeriodMonthsOk() (*int32, bool) {
	if o == nil || IsNil(o.ActivityPeriodMonths) {
		return nil, false
	}
	return o.ActivityPeriodMonths, true
}

// HasActivityPeriodMonths returns a boolean if a field has been set.
func (o *AwardPointsType) HasActivityPeriodMonths() bool {
	if o != nil && !IsNil(o.ActivityPeriodMonths) {
		return true
	}

	return false
}

// SetActivityPeriodMonths gets a reference to the given int32 and assigns it to the ActivityPeriodMonths field.
func (o *AwardPointsType) SetActivityPeriodMonths(v int32) {
	o.ActivityPeriodMonths = &v
}

// GetActivityPeriodYears returns the ActivityPeriodYears field value if set, zero value otherwise.
func (o *AwardPointsType) GetActivityPeriodYears() NumberOfYearsType {
	if o == nil || IsNil(o.ActivityPeriodYears) {
		var ret NumberOfYearsType
		return ret
	}
	return *o.ActivityPeriodYears
}

// GetActivityPeriodYearsOk returns a tuple with the ActivityPeriodYears field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardPointsType) GetActivityPeriodYearsOk() (*NumberOfYearsType, bool) {
	if o == nil || IsNil(o.ActivityPeriodYears) {
		return nil, false
	}
	return o.ActivityPeriodYears, true
}

// HasActivityPeriodYears returns a boolean if a field has been set.
func (o *AwardPointsType) HasActivityPeriodYears() bool {
	if o != nil && !IsNil(o.ActivityPeriodYears) {
		return true
	}

	return false
}

// SetActivityPeriodYears gets a reference to the given NumberOfYearsType and assigns it to the ActivityPeriodYears field.
func (o *AwardPointsType) SetActivityPeriodYears(v NumberOfYearsType) {
	o.ActivityPeriodYears = &v
}

// GetGracePeriodMonths returns the GracePeriodMonths field value if set, zero value otherwise.
func (o *AwardPointsType) GetGracePeriodMonths() int32 {
	if o == nil || IsNil(o.GracePeriodMonths) {
		var ret int32
		return ret
	}
	return *o.GracePeriodMonths
}

// GetGracePeriodMonthsOk returns a tuple with the GracePeriodMonths field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardPointsType) GetGracePeriodMonthsOk() (*int32, bool) {
	if o == nil || IsNil(o.GracePeriodMonths) {
		return nil, false
	}
	return o.GracePeriodMonths, true
}

// HasGracePeriodMonths returns a boolean if a field has been set.
func (o *AwardPointsType) HasGracePeriodMonths() bool {
	if o != nil && !IsNil(o.GracePeriodMonths) {
		return true
	}

	return false
}

// SetGracePeriodMonths gets a reference to the given int32 and assigns it to the GracePeriodMonths field.
func (o *AwardPointsType) SetGracePeriodMonths(v int32) {
	o.GracePeriodMonths = &v
}

// GetGracePeriodYear returns the GracePeriodYear field value if set, zero value otherwise.
func (o *AwardPointsType) GetGracePeriodYear() CalendarGracePeriodType {
	if o == nil || IsNil(o.GracePeriodYear) {
		var ret CalendarGracePeriodType
		return ret
	}
	return *o.GracePeriodYear
}

// GetGracePeriodYearOk returns a tuple with the GracePeriodYear field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardPointsType) GetGracePeriodYearOk() (*CalendarGracePeriodType, bool) {
	if o == nil || IsNil(o.GracePeriodYear) {
		return nil, false
	}
	return o.GracePeriodYear, true
}

// HasGracePeriodYear returns a boolean if a field has been set.
func (o *AwardPointsType) HasGracePeriodYear() bool {
	if o != nil && !IsNil(o.GracePeriodYear) {
		return true
	}

	return false
}

// SetGracePeriodYear gets a reference to the given CalendarGracePeriodType and assigns it to the GracePeriodYear field.
func (o *AwardPointsType) SetGracePeriodYear(v CalendarGracePeriodType) {
	o.GracePeriodYear = &v
}

// GetRequiredOnStayPeriod returns the RequiredOnStayPeriod field value if set, zero value otherwise.
func (o *AwardPointsType) GetRequiredOnStayPeriod() bool {
	if o == nil || IsNil(o.RequiredOnStayPeriod) {
		var ret bool
		return ret
	}
	return *o.RequiredOnStayPeriod
}

// GetRequiredOnStayPeriodOk returns a tuple with the RequiredOnStayPeriod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardPointsType) GetRequiredOnStayPeriodOk() (*bool, bool) {
	if o == nil || IsNil(o.RequiredOnStayPeriod) {
		return nil, false
	}
	return o.RequiredOnStayPeriod, true
}

// HasRequiredOnStayPeriod returns a boolean if a field has been set.
func (o *AwardPointsType) HasRequiredOnStayPeriod() bool {
	if o != nil && !IsNil(o.RequiredOnStayPeriod) {
		return true
	}

	return false
}

// SetRequiredOnStayPeriod gets a reference to the given bool and assigns it to the RequiredOnStayPeriod field.
func (o *AwardPointsType) SetRequiredOnStayPeriod(v bool) {
	o.RequiredOnStayPeriod = &v
}

// GetExceptionCriteria returns the ExceptionCriteria field value if set, zero value otherwise.
func (o *AwardPointsType) GetExceptionCriteria() AwardsExceptionCriteriaType {
	if o == nil || IsNil(o.ExceptionCriteria) {
		var ret AwardsExceptionCriteriaType
		return ret
	}
	return *o.ExceptionCriteria
}

// GetExceptionCriteriaOk returns a tuple with the ExceptionCriteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardPointsType) GetExceptionCriteriaOk() (*AwardsExceptionCriteriaType, bool) {
	if o == nil || IsNil(o.ExceptionCriteria) {
		return nil, false
	}
	return o.ExceptionCriteria, true
}

// HasExceptionCriteria returns a boolean if a field has been set.
func (o *AwardPointsType) HasExceptionCriteria() bool {
	if o != nil && !IsNil(o.ExceptionCriteria) {
		return true
	}

	return false
}

// SetExceptionCriteria gets a reference to the given AwardsExceptionCriteriaType and assigns it to the ExceptionCriteria field.
func (o *AwardPointsType) SetExceptionCriteria(v AwardsExceptionCriteriaType) {
	o.ExceptionCriteria = &v
}

func (o AwardPointsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AwardPointsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.NonMemberPoints) {
		toSerialize["nonMemberPoints"] = o.NonMemberPoints
	}
	if !IsNil(o.DelayInDays) {
		toSerialize["delayInDays"] = o.DelayInDays
	}
	if !IsNil(o.YearsToExpire) {
		toSerialize["yearsToExpire"] = o.YearsToExpire
	}
	if !IsNil(o.CalendarPeriod) {
		toSerialize["calendarPeriod"] = o.CalendarPeriod
	}
	if !IsNil(o.ExpiryPeriod) {
		toSerialize["expiryPeriod"] = o.ExpiryPeriod
	}
	if !IsNil(o.ExpiryMonth) {
		toSerialize["expiryMonth"] = o.ExpiryMonth
	}
	if !IsNil(o.MonthsToAwardPointsExpiry) {
		toSerialize["monthsToAwardPointsExpiry"] = o.MonthsToAwardPointsExpiry
	}
	if !IsNil(o.AwardPointsExpiryDate) {
		toSerialize["awardPointsExpiryDate"] = o.AwardPointsExpiryDate
	}
	if !IsNil(o.AwardRedeemThreshold) {
		toSerialize["awardRedeemThreshold"] = o.AwardRedeemThreshold
	}
	if !IsNil(o.ActivityPeriodMonths) {
		toSerialize["activityPeriodMonths"] = o.ActivityPeriodMonths
	}
	if !IsNil(o.ActivityPeriodYears) {
		toSerialize["activityPeriodYears"] = o.ActivityPeriodYears
	}
	if !IsNil(o.GracePeriodMonths) {
		toSerialize["gracePeriodMonths"] = o.GracePeriodMonths
	}
	if !IsNil(o.GracePeriodYear) {
		toSerialize["gracePeriodYear"] = o.GracePeriodYear
	}
	if !IsNil(o.RequiredOnStayPeriod) {
		toSerialize["requiredOnStayPeriod"] = o.RequiredOnStayPeriod
	}
	if !IsNil(o.ExceptionCriteria) {
		toSerialize["exceptionCriteria"] = o.ExceptionCriteria
	}
	return toSerialize, nil
}

type NullableAwardPointsType struct {
	value *AwardPointsType
	isSet bool
}

func (v NullableAwardPointsType) Get() *AwardPointsType {
	return v.value
}

func (v *NullableAwardPointsType) Set(val *AwardPointsType) {
	v.value = val
	v.isSet = true
}

func (v NullableAwardPointsType) IsSet() bool {
	return v.isSet
}

func (v *NullableAwardPointsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAwardPointsType(val *AwardPointsType) *NullableAwardPointsType {
	return &NullableAwardPointsType{value: val, isSet: true}
}

func (v NullableAwardPointsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAwardPointsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


