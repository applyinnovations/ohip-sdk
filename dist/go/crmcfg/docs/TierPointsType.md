# TierPointsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NonMemberPoints** | Pointer to **bool** | Indicates if points will be displayed for guests who are not members. | [optional] 
**BasedOn** | Pointer to [**PointsCalculationDateType**](PointsCalculationDateType.md) |  | [optional] 
**TierExpirationMonth** | Pointer to **string** | Month for Upgrade/Downgrade in a Calendar Period. | [optional] 
**RequalifyOnUpgrade** | Pointer to **bool** | Requalify on Upgrade | [optional] 
**DowngradeRenewalInAutoJob** | Pointer to **bool** | Downgrade/Renew the membership level automatically. | [optional] 
**UpgradePeriodRolling** | Pointer to [**NumberOfYearsType**](NumberOfYearsType.md) |  | [optional] 
**DowngradePeriodRolling** | Pointer to [**NumberOfYearsType**](NumberOfYearsType.md) |  | [optional] 
**UpgradePeriodCalendar** | Pointer to [**UpgradeDowngradeForCalendarPeriodType**](UpgradeDowngradeForCalendarPeriodType.md) |  | [optional] 
**DowngradePeriodCalendar** | Pointer to [**UpgradeDowngradeForCalendarPeriodType**](UpgradeDowngradeForCalendarPeriodType.md) |  | [optional] 
**EnableTierManagementReset** | Pointer to **bool** | TMR (Tier Management Reset) Level Rules configuration enabled or not. | [optional] 

## Methods

### NewTierPointsType

`func NewTierPointsType() *TierPointsType`

NewTierPointsType instantiates a new TierPointsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTierPointsTypeWithDefaults

`func NewTierPointsTypeWithDefaults() *TierPointsType`

NewTierPointsTypeWithDefaults instantiates a new TierPointsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNonMemberPoints

`func (o *TierPointsType) GetNonMemberPoints() bool`

GetNonMemberPoints returns the NonMemberPoints field if non-nil, zero value otherwise.

### GetNonMemberPointsOk

`func (o *TierPointsType) GetNonMemberPointsOk() (*bool, bool)`

GetNonMemberPointsOk returns a tuple with the NonMemberPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonMemberPoints

`func (o *TierPointsType) SetNonMemberPoints(v bool)`

SetNonMemberPoints sets NonMemberPoints field to given value.

### HasNonMemberPoints

`func (o *TierPointsType) HasNonMemberPoints() bool`

HasNonMemberPoints returns a boolean if a field has been set.

### GetBasedOn

`func (o *TierPointsType) GetBasedOn() PointsCalculationDateType`

GetBasedOn returns the BasedOn field if non-nil, zero value otherwise.

### GetBasedOnOk

`func (o *TierPointsType) GetBasedOnOk() (*PointsCalculationDateType, bool)`

GetBasedOnOk returns a tuple with the BasedOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBasedOn

`func (o *TierPointsType) SetBasedOn(v PointsCalculationDateType)`

SetBasedOn sets BasedOn field to given value.

### HasBasedOn

`func (o *TierPointsType) HasBasedOn() bool`

HasBasedOn returns a boolean if a field has been set.

### GetTierExpirationMonth

`func (o *TierPointsType) GetTierExpirationMonth() string`

GetTierExpirationMonth returns the TierExpirationMonth field if non-nil, zero value otherwise.

### GetTierExpirationMonthOk

`func (o *TierPointsType) GetTierExpirationMonthOk() (*string, bool)`

GetTierExpirationMonthOk returns a tuple with the TierExpirationMonth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTierExpirationMonth

`func (o *TierPointsType) SetTierExpirationMonth(v string)`

SetTierExpirationMonth sets TierExpirationMonth field to given value.

### HasTierExpirationMonth

`func (o *TierPointsType) HasTierExpirationMonth() bool`

HasTierExpirationMonth returns a boolean if a field has been set.

### GetRequalifyOnUpgrade

`func (o *TierPointsType) GetRequalifyOnUpgrade() bool`

GetRequalifyOnUpgrade returns the RequalifyOnUpgrade field if non-nil, zero value otherwise.

### GetRequalifyOnUpgradeOk

`func (o *TierPointsType) GetRequalifyOnUpgradeOk() (*bool, bool)`

GetRequalifyOnUpgradeOk returns a tuple with the RequalifyOnUpgrade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequalifyOnUpgrade

`func (o *TierPointsType) SetRequalifyOnUpgrade(v bool)`

SetRequalifyOnUpgrade sets RequalifyOnUpgrade field to given value.

### HasRequalifyOnUpgrade

`func (o *TierPointsType) HasRequalifyOnUpgrade() bool`

HasRequalifyOnUpgrade returns a boolean if a field has been set.

### GetDowngradeRenewalInAutoJob

`func (o *TierPointsType) GetDowngradeRenewalInAutoJob() bool`

GetDowngradeRenewalInAutoJob returns the DowngradeRenewalInAutoJob field if non-nil, zero value otherwise.

### GetDowngradeRenewalInAutoJobOk

`func (o *TierPointsType) GetDowngradeRenewalInAutoJobOk() (*bool, bool)`

GetDowngradeRenewalInAutoJobOk returns a tuple with the DowngradeRenewalInAutoJob field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDowngradeRenewalInAutoJob

`func (o *TierPointsType) SetDowngradeRenewalInAutoJob(v bool)`

SetDowngradeRenewalInAutoJob sets DowngradeRenewalInAutoJob field to given value.

### HasDowngradeRenewalInAutoJob

`func (o *TierPointsType) HasDowngradeRenewalInAutoJob() bool`

HasDowngradeRenewalInAutoJob returns a boolean if a field has been set.

### GetUpgradePeriodRolling

`func (o *TierPointsType) GetUpgradePeriodRolling() NumberOfYearsType`

GetUpgradePeriodRolling returns the UpgradePeriodRolling field if non-nil, zero value otherwise.

### GetUpgradePeriodRollingOk

`func (o *TierPointsType) GetUpgradePeriodRollingOk() (*NumberOfYearsType, bool)`

GetUpgradePeriodRollingOk returns a tuple with the UpgradePeriodRolling field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpgradePeriodRolling

`func (o *TierPointsType) SetUpgradePeriodRolling(v NumberOfYearsType)`

SetUpgradePeriodRolling sets UpgradePeriodRolling field to given value.

### HasUpgradePeriodRolling

`func (o *TierPointsType) HasUpgradePeriodRolling() bool`

HasUpgradePeriodRolling returns a boolean if a field has been set.

### GetDowngradePeriodRolling

`func (o *TierPointsType) GetDowngradePeriodRolling() NumberOfYearsType`

GetDowngradePeriodRolling returns the DowngradePeriodRolling field if non-nil, zero value otherwise.

### GetDowngradePeriodRollingOk

`func (o *TierPointsType) GetDowngradePeriodRollingOk() (*NumberOfYearsType, bool)`

GetDowngradePeriodRollingOk returns a tuple with the DowngradePeriodRolling field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDowngradePeriodRolling

`func (o *TierPointsType) SetDowngradePeriodRolling(v NumberOfYearsType)`

SetDowngradePeriodRolling sets DowngradePeriodRolling field to given value.

### HasDowngradePeriodRolling

`func (o *TierPointsType) HasDowngradePeriodRolling() bool`

HasDowngradePeriodRolling returns a boolean if a field has been set.

### GetUpgradePeriodCalendar

`func (o *TierPointsType) GetUpgradePeriodCalendar() UpgradeDowngradeForCalendarPeriodType`

GetUpgradePeriodCalendar returns the UpgradePeriodCalendar field if non-nil, zero value otherwise.

### GetUpgradePeriodCalendarOk

`func (o *TierPointsType) GetUpgradePeriodCalendarOk() (*UpgradeDowngradeForCalendarPeriodType, bool)`

GetUpgradePeriodCalendarOk returns a tuple with the UpgradePeriodCalendar field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpgradePeriodCalendar

`func (o *TierPointsType) SetUpgradePeriodCalendar(v UpgradeDowngradeForCalendarPeriodType)`

SetUpgradePeriodCalendar sets UpgradePeriodCalendar field to given value.

### HasUpgradePeriodCalendar

`func (o *TierPointsType) HasUpgradePeriodCalendar() bool`

HasUpgradePeriodCalendar returns a boolean if a field has been set.

### GetDowngradePeriodCalendar

`func (o *TierPointsType) GetDowngradePeriodCalendar() UpgradeDowngradeForCalendarPeriodType`

GetDowngradePeriodCalendar returns the DowngradePeriodCalendar field if non-nil, zero value otherwise.

### GetDowngradePeriodCalendarOk

`func (o *TierPointsType) GetDowngradePeriodCalendarOk() (*UpgradeDowngradeForCalendarPeriodType, bool)`

GetDowngradePeriodCalendarOk returns a tuple with the DowngradePeriodCalendar field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDowngradePeriodCalendar

`func (o *TierPointsType) SetDowngradePeriodCalendar(v UpgradeDowngradeForCalendarPeriodType)`

SetDowngradePeriodCalendar sets DowngradePeriodCalendar field to given value.

### HasDowngradePeriodCalendar

`func (o *TierPointsType) HasDowngradePeriodCalendar() bool`

HasDowngradePeriodCalendar returns a boolean if a field has been set.

### GetEnableTierManagementReset

`func (o *TierPointsType) GetEnableTierManagementReset() bool`

GetEnableTierManagementReset returns the EnableTierManagementReset field if non-nil, zero value otherwise.

### GetEnableTierManagementResetOk

`func (o *TierPointsType) GetEnableTierManagementResetOk() (*bool, bool)`

GetEnableTierManagementResetOk returns a tuple with the EnableTierManagementReset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnableTierManagementReset

`func (o *TierPointsType) SetEnableTierManagementReset(v bool)`

SetEnableTierManagementReset sets EnableTierManagementReset field to given value.

### HasEnableTierManagementReset

`func (o *TierPointsType) HasEnableTierManagementReset() bool`

HasEnableTierManagementReset returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


