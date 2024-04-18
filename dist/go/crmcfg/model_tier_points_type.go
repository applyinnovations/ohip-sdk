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

// checks if the TierPointsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TierPointsType{}

// TierPointsType Base parent type for membership points comprising common elements between award points and tier points.
type TierPointsType struct {
	// Indicates if points will be displayed for guests who are not members.
	NonMemberPoints *bool `json:"nonMemberPoints,omitempty"`
	BasedOn *PointsCalculationDateType `json:"basedOn,omitempty"`
	// Month for Upgrade/Downgrade in a Calendar Period.
	TierExpirationMonth *string `json:"tierExpirationMonth,omitempty"`
	// Requalify on Upgrade
	RequalifyOnUpgrade *bool `json:"requalifyOnUpgrade,omitempty"`
	// Downgrade/Renew the membership level automatically.
	DowngradeRenewalInAutoJob *bool `json:"downgradeRenewalInAutoJob,omitempty"`
	UpgradePeriodRolling *NumberOfYearsType `json:"upgradePeriodRolling,omitempty"`
	DowngradePeriodRolling *NumberOfYearsType `json:"downgradePeriodRolling,omitempty"`
	UpgradePeriodCalendar *UpgradeDowngradeForCalendarPeriodType `json:"upgradePeriodCalendar,omitempty"`
	DowngradePeriodCalendar *UpgradeDowngradeForCalendarPeriodType `json:"downgradePeriodCalendar,omitempty"`
	// TMR (Tier Management Reset) Level Rules configuration enabled or not.
	EnableTierManagementReset *bool `json:"enableTierManagementReset,omitempty"`
}

// NewTierPointsType instantiates a new TierPointsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTierPointsType() *TierPointsType {
	this := TierPointsType{}
	return &this
}

// NewTierPointsTypeWithDefaults instantiates a new TierPointsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTierPointsTypeWithDefaults() *TierPointsType {
	this := TierPointsType{}
	return &this
}

// GetNonMemberPoints returns the NonMemberPoints field value if set, zero value otherwise.
func (o *TierPointsType) GetNonMemberPoints() bool {
	if o == nil || IsNil(o.NonMemberPoints) {
		var ret bool
		return ret
	}
	return *o.NonMemberPoints
}

// GetNonMemberPointsOk returns a tuple with the NonMemberPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TierPointsType) GetNonMemberPointsOk() (*bool, bool) {
	if o == nil || IsNil(o.NonMemberPoints) {
		return nil, false
	}
	return o.NonMemberPoints, true
}

// HasNonMemberPoints returns a boolean if a field has been set.
func (o *TierPointsType) HasNonMemberPoints() bool {
	if o != nil && !IsNil(o.NonMemberPoints) {
		return true
	}

	return false
}

// SetNonMemberPoints gets a reference to the given bool and assigns it to the NonMemberPoints field.
func (o *TierPointsType) SetNonMemberPoints(v bool) {
	o.NonMemberPoints = &v
}

// GetBasedOn returns the BasedOn field value if set, zero value otherwise.
func (o *TierPointsType) GetBasedOn() PointsCalculationDateType {
	if o == nil || IsNil(o.BasedOn) {
		var ret PointsCalculationDateType
		return ret
	}
	return *o.BasedOn
}

// GetBasedOnOk returns a tuple with the BasedOn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TierPointsType) GetBasedOnOk() (*PointsCalculationDateType, bool) {
	if o == nil || IsNil(o.BasedOn) {
		return nil, false
	}
	return o.BasedOn, true
}

// HasBasedOn returns a boolean if a field has been set.
func (o *TierPointsType) HasBasedOn() bool {
	if o != nil && !IsNil(o.BasedOn) {
		return true
	}

	return false
}

// SetBasedOn gets a reference to the given PointsCalculationDateType and assigns it to the BasedOn field.
func (o *TierPointsType) SetBasedOn(v PointsCalculationDateType) {
	o.BasedOn = &v
}

// GetTierExpirationMonth returns the TierExpirationMonth field value if set, zero value otherwise.
func (o *TierPointsType) GetTierExpirationMonth() string {
	if o == nil || IsNil(o.TierExpirationMonth) {
		var ret string
		return ret
	}
	return *o.TierExpirationMonth
}

// GetTierExpirationMonthOk returns a tuple with the TierExpirationMonth field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TierPointsType) GetTierExpirationMonthOk() (*string, bool) {
	if o == nil || IsNil(o.TierExpirationMonth) {
		return nil, false
	}
	return o.TierExpirationMonth, true
}

// HasTierExpirationMonth returns a boolean if a field has been set.
func (o *TierPointsType) HasTierExpirationMonth() bool {
	if o != nil && !IsNil(o.TierExpirationMonth) {
		return true
	}

	return false
}

// SetTierExpirationMonth gets a reference to the given string and assigns it to the TierExpirationMonth field.
func (o *TierPointsType) SetTierExpirationMonth(v string) {
	o.TierExpirationMonth = &v
}

// GetRequalifyOnUpgrade returns the RequalifyOnUpgrade field value if set, zero value otherwise.
func (o *TierPointsType) GetRequalifyOnUpgrade() bool {
	if o == nil || IsNil(o.RequalifyOnUpgrade) {
		var ret bool
		return ret
	}
	return *o.RequalifyOnUpgrade
}

// GetRequalifyOnUpgradeOk returns a tuple with the RequalifyOnUpgrade field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TierPointsType) GetRequalifyOnUpgradeOk() (*bool, bool) {
	if o == nil || IsNil(o.RequalifyOnUpgrade) {
		return nil, false
	}
	return o.RequalifyOnUpgrade, true
}

// HasRequalifyOnUpgrade returns a boolean if a field has been set.
func (o *TierPointsType) HasRequalifyOnUpgrade() bool {
	if o != nil && !IsNil(o.RequalifyOnUpgrade) {
		return true
	}

	return false
}

// SetRequalifyOnUpgrade gets a reference to the given bool and assigns it to the RequalifyOnUpgrade field.
func (o *TierPointsType) SetRequalifyOnUpgrade(v bool) {
	o.RequalifyOnUpgrade = &v
}

// GetDowngradeRenewalInAutoJob returns the DowngradeRenewalInAutoJob field value if set, zero value otherwise.
func (o *TierPointsType) GetDowngradeRenewalInAutoJob() bool {
	if o == nil || IsNil(o.DowngradeRenewalInAutoJob) {
		var ret bool
		return ret
	}
	return *o.DowngradeRenewalInAutoJob
}

// GetDowngradeRenewalInAutoJobOk returns a tuple with the DowngradeRenewalInAutoJob field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TierPointsType) GetDowngradeRenewalInAutoJobOk() (*bool, bool) {
	if o == nil || IsNil(o.DowngradeRenewalInAutoJob) {
		return nil, false
	}
	return o.DowngradeRenewalInAutoJob, true
}

// HasDowngradeRenewalInAutoJob returns a boolean if a field has been set.
func (o *TierPointsType) HasDowngradeRenewalInAutoJob() bool {
	if o != nil && !IsNil(o.DowngradeRenewalInAutoJob) {
		return true
	}

	return false
}

// SetDowngradeRenewalInAutoJob gets a reference to the given bool and assigns it to the DowngradeRenewalInAutoJob field.
func (o *TierPointsType) SetDowngradeRenewalInAutoJob(v bool) {
	o.DowngradeRenewalInAutoJob = &v
}

// GetUpgradePeriodRolling returns the UpgradePeriodRolling field value if set, zero value otherwise.
func (o *TierPointsType) GetUpgradePeriodRolling() NumberOfYearsType {
	if o == nil || IsNil(o.UpgradePeriodRolling) {
		var ret NumberOfYearsType
		return ret
	}
	return *o.UpgradePeriodRolling
}

// GetUpgradePeriodRollingOk returns a tuple with the UpgradePeriodRolling field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TierPointsType) GetUpgradePeriodRollingOk() (*NumberOfYearsType, bool) {
	if o == nil || IsNil(o.UpgradePeriodRolling) {
		return nil, false
	}
	return o.UpgradePeriodRolling, true
}

// HasUpgradePeriodRolling returns a boolean if a field has been set.
func (o *TierPointsType) HasUpgradePeriodRolling() bool {
	if o != nil && !IsNil(o.UpgradePeriodRolling) {
		return true
	}

	return false
}

// SetUpgradePeriodRolling gets a reference to the given NumberOfYearsType and assigns it to the UpgradePeriodRolling field.
func (o *TierPointsType) SetUpgradePeriodRolling(v NumberOfYearsType) {
	o.UpgradePeriodRolling = &v
}

// GetDowngradePeriodRolling returns the DowngradePeriodRolling field value if set, zero value otherwise.
func (o *TierPointsType) GetDowngradePeriodRolling() NumberOfYearsType {
	if o == nil || IsNil(o.DowngradePeriodRolling) {
		var ret NumberOfYearsType
		return ret
	}
	return *o.DowngradePeriodRolling
}

// GetDowngradePeriodRollingOk returns a tuple with the DowngradePeriodRolling field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TierPointsType) GetDowngradePeriodRollingOk() (*NumberOfYearsType, bool) {
	if o == nil || IsNil(o.DowngradePeriodRolling) {
		return nil, false
	}
	return o.DowngradePeriodRolling, true
}

// HasDowngradePeriodRolling returns a boolean if a field has been set.
func (o *TierPointsType) HasDowngradePeriodRolling() bool {
	if o != nil && !IsNil(o.DowngradePeriodRolling) {
		return true
	}

	return false
}

// SetDowngradePeriodRolling gets a reference to the given NumberOfYearsType and assigns it to the DowngradePeriodRolling field.
func (o *TierPointsType) SetDowngradePeriodRolling(v NumberOfYearsType) {
	o.DowngradePeriodRolling = &v
}

// GetUpgradePeriodCalendar returns the UpgradePeriodCalendar field value if set, zero value otherwise.
func (o *TierPointsType) GetUpgradePeriodCalendar() UpgradeDowngradeForCalendarPeriodType {
	if o == nil || IsNil(o.UpgradePeriodCalendar) {
		var ret UpgradeDowngradeForCalendarPeriodType
		return ret
	}
	return *o.UpgradePeriodCalendar
}

// GetUpgradePeriodCalendarOk returns a tuple with the UpgradePeriodCalendar field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TierPointsType) GetUpgradePeriodCalendarOk() (*UpgradeDowngradeForCalendarPeriodType, bool) {
	if o == nil || IsNil(o.UpgradePeriodCalendar) {
		return nil, false
	}
	return o.UpgradePeriodCalendar, true
}

// HasUpgradePeriodCalendar returns a boolean if a field has been set.
func (o *TierPointsType) HasUpgradePeriodCalendar() bool {
	if o != nil && !IsNil(o.UpgradePeriodCalendar) {
		return true
	}

	return false
}

// SetUpgradePeriodCalendar gets a reference to the given UpgradeDowngradeForCalendarPeriodType and assigns it to the UpgradePeriodCalendar field.
func (o *TierPointsType) SetUpgradePeriodCalendar(v UpgradeDowngradeForCalendarPeriodType) {
	o.UpgradePeriodCalendar = &v
}

// GetDowngradePeriodCalendar returns the DowngradePeriodCalendar field value if set, zero value otherwise.
func (o *TierPointsType) GetDowngradePeriodCalendar() UpgradeDowngradeForCalendarPeriodType {
	if o == nil || IsNil(o.DowngradePeriodCalendar) {
		var ret UpgradeDowngradeForCalendarPeriodType
		return ret
	}
	return *o.DowngradePeriodCalendar
}

// GetDowngradePeriodCalendarOk returns a tuple with the DowngradePeriodCalendar field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TierPointsType) GetDowngradePeriodCalendarOk() (*UpgradeDowngradeForCalendarPeriodType, bool) {
	if o == nil || IsNil(o.DowngradePeriodCalendar) {
		return nil, false
	}
	return o.DowngradePeriodCalendar, true
}

// HasDowngradePeriodCalendar returns a boolean if a field has been set.
func (o *TierPointsType) HasDowngradePeriodCalendar() bool {
	if o != nil && !IsNil(o.DowngradePeriodCalendar) {
		return true
	}

	return false
}

// SetDowngradePeriodCalendar gets a reference to the given UpgradeDowngradeForCalendarPeriodType and assigns it to the DowngradePeriodCalendar field.
func (o *TierPointsType) SetDowngradePeriodCalendar(v UpgradeDowngradeForCalendarPeriodType) {
	o.DowngradePeriodCalendar = &v
}

// GetEnableTierManagementReset returns the EnableTierManagementReset field value if set, zero value otherwise.
func (o *TierPointsType) GetEnableTierManagementReset() bool {
	if o == nil || IsNil(o.EnableTierManagementReset) {
		var ret bool
		return ret
	}
	return *o.EnableTierManagementReset
}

// GetEnableTierManagementResetOk returns a tuple with the EnableTierManagementReset field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TierPointsType) GetEnableTierManagementResetOk() (*bool, bool) {
	if o == nil || IsNil(o.EnableTierManagementReset) {
		return nil, false
	}
	return o.EnableTierManagementReset, true
}

// HasEnableTierManagementReset returns a boolean if a field has been set.
func (o *TierPointsType) HasEnableTierManagementReset() bool {
	if o != nil && !IsNil(o.EnableTierManagementReset) {
		return true
	}

	return false
}

// SetEnableTierManagementReset gets a reference to the given bool and assigns it to the EnableTierManagementReset field.
func (o *TierPointsType) SetEnableTierManagementReset(v bool) {
	o.EnableTierManagementReset = &v
}

func (o TierPointsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TierPointsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.NonMemberPoints) {
		toSerialize["nonMemberPoints"] = o.NonMemberPoints
	}
	if !IsNil(o.BasedOn) {
		toSerialize["basedOn"] = o.BasedOn
	}
	if !IsNil(o.TierExpirationMonth) {
		toSerialize["tierExpirationMonth"] = o.TierExpirationMonth
	}
	if !IsNil(o.RequalifyOnUpgrade) {
		toSerialize["requalifyOnUpgrade"] = o.RequalifyOnUpgrade
	}
	if !IsNil(o.DowngradeRenewalInAutoJob) {
		toSerialize["downgradeRenewalInAutoJob"] = o.DowngradeRenewalInAutoJob
	}
	if !IsNil(o.UpgradePeriodRolling) {
		toSerialize["upgradePeriodRolling"] = o.UpgradePeriodRolling
	}
	if !IsNil(o.DowngradePeriodRolling) {
		toSerialize["downgradePeriodRolling"] = o.DowngradePeriodRolling
	}
	if !IsNil(o.UpgradePeriodCalendar) {
		toSerialize["upgradePeriodCalendar"] = o.UpgradePeriodCalendar
	}
	if !IsNil(o.DowngradePeriodCalendar) {
		toSerialize["downgradePeriodCalendar"] = o.DowngradePeriodCalendar
	}
	if !IsNil(o.EnableTierManagementReset) {
		toSerialize["enableTierManagementReset"] = o.EnableTierManagementReset
	}
	return toSerialize, nil
}

type NullableTierPointsType struct {
	value *TierPointsType
	isSet bool
}

func (v NullableTierPointsType) Get() *TierPointsType {
	return v.value
}

func (v *NullableTierPointsType) Set(val *TierPointsType) {
	v.value = val
	v.isSet = true
}

func (v NullableTierPointsType) IsSet() bool {
	return v.isSet
}

func (v *NullableTierPointsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTierPointsType(val *TierPointsType) *NullableTierPointsType {
	return &NullableTierPointsType{value: val, isSet: true}
}

func (v NullableTierPointsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTierPointsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

