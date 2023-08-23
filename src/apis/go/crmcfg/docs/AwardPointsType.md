# AwardPointsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NonMemberPoints** | Pointer to **bool** | Indicates if points will be displayed for guests who are not members. | [optional] 
**DelayInDays** | Pointer to **int32** | Award points will be recognized in this number of days following the guest&#39;s check out date. The minimum number of days is 3 and the maximum number of days is 60. This delay provides a period of time during which adjustments can be made at the PMS level before awards are uploaded to ORS/OCIS. | [optional] 
**YearsToExpire** | Pointer to **int32** | Indicates Membership card will be expired if there is no activity on the card for this number of years. | [optional] 
**CalendarPeriod** | Pointer to [**CalendarPeriodType**](CalendarPeriodType.md) |  | [optional] 
**ExpiryPeriod** | Pointer to [**NumberOfYearsType**](NumberOfYearsType.md) |  | [optional] 
**ExpiryMonth** | Pointer to **string** | Month of Expiry for Calendar | [optional] 
**MonthsToAwardPointsExpiry** | Pointer to **int32** | Months for which the Points accumulated can be redeemed for Rolling period. | [optional] 
**AwardPointsExpiryDate** | Pointer to [**AwardPointsValidityDurationType**](AwardPointsValidityDurationType.md) |  | [optional] 
**AwardRedeemThreshold** | Pointer to **int32** | Award redemption threshold | [optional] 
**ActivityPeriodMonths** | Pointer to **int32** | Activity Period in months for Rolling. | [optional] 
**ActivityPeriodYears** | Pointer to [**NumberOfYearsType**](NumberOfYearsType.md) |  | [optional] 
**GracePeriodMonths** | Pointer to **int32** | Grace Period in months used for Rolling. | [optional] 
**GracePeriodYear** | Pointer to [**CalendarGracePeriodType**](CalendarGracePeriodType.md) |  | [optional] 
**RequiredOnStayPeriod** | Pointer to **bool** | Calculate stay points even if the loyalty membership card is not attached. | [optional] 
**ExceptionCriteria** | Pointer to [**AwardsExceptionCriteriaType**](AwardsExceptionCriteriaType.md) |  | [optional] 

## Methods

### NewAwardPointsType

`func NewAwardPointsType() *AwardPointsType`

NewAwardPointsType instantiates a new AwardPointsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAwardPointsTypeWithDefaults

`func NewAwardPointsTypeWithDefaults() *AwardPointsType`

NewAwardPointsTypeWithDefaults instantiates a new AwardPointsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNonMemberPoints

`func (o *AwardPointsType) GetNonMemberPoints() bool`

GetNonMemberPoints returns the NonMemberPoints field if non-nil, zero value otherwise.

### GetNonMemberPointsOk

`func (o *AwardPointsType) GetNonMemberPointsOk() (*bool, bool)`

GetNonMemberPointsOk returns a tuple with the NonMemberPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonMemberPoints

`func (o *AwardPointsType) SetNonMemberPoints(v bool)`

SetNonMemberPoints sets NonMemberPoints field to given value.

### HasNonMemberPoints

`func (o *AwardPointsType) HasNonMemberPoints() bool`

HasNonMemberPoints returns a boolean if a field has been set.

### GetDelayInDays

`func (o *AwardPointsType) GetDelayInDays() int32`

GetDelayInDays returns the DelayInDays field if non-nil, zero value otherwise.

### GetDelayInDaysOk

`func (o *AwardPointsType) GetDelayInDaysOk() (*int32, bool)`

GetDelayInDaysOk returns a tuple with the DelayInDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelayInDays

`func (o *AwardPointsType) SetDelayInDays(v int32)`

SetDelayInDays sets DelayInDays field to given value.

### HasDelayInDays

`func (o *AwardPointsType) HasDelayInDays() bool`

HasDelayInDays returns a boolean if a field has been set.

### GetYearsToExpire

`func (o *AwardPointsType) GetYearsToExpire() int32`

GetYearsToExpire returns the YearsToExpire field if non-nil, zero value otherwise.

### GetYearsToExpireOk

`func (o *AwardPointsType) GetYearsToExpireOk() (*int32, bool)`

GetYearsToExpireOk returns a tuple with the YearsToExpire field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYearsToExpire

`func (o *AwardPointsType) SetYearsToExpire(v int32)`

SetYearsToExpire sets YearsToExpire field to given value.

### HasYearsToExpire

`func (o *AwardPointsType) HasYearsToExpire() bool`

HasYearsToExpire returns a boolean if a field has been set.

### GetCalendarPeriod

`func (o *AwardPointsType) GetCalendarPeriod() CalendarPeriodType`

GetCalendarPeriod returns the CalendarPeriod field if non-nil, zero value otherwise.

### GetCalendarPeriodOk

`func (o *AwardPointsType) GetCalendarPeriodOk() (*CalendarPeriodType, bool)`

GetCalendarPeriodOk returns a tuple with the CalendarPeriod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalendarPeriod

`func (o *AwardPointsType) SetCalendarPeriod(v CalendarPeriodType)`

SetCalendarPeriod sets CalendarPeriod field to given value.

### HasCalendarPeriod

`func (o *AwardPointsType) HasCalendarPeriod() bool`

HasCalendarPeriod returns a boolean if a field has been set.

### GetExpiryPeriod

`func (o *AwardPointsType) GetExpiryPeriod() NumberOfYearsType`

GetExpiryPeriod returns the ExpiryPeriod field if non-nil, zero value otherwise.

### GetExpiryPeriodOk

`func (o *AwardPointsType) GetExpiryPeriodOk() (*NumberOfYearsType, bool)`

GetExpiryPeriodOk returns a tuple with the ExpiryPeriod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiryPeriod

`func (o *AwardPointsType) SetExpiryPeriod(v NumberOfYearsType)`

SetExpiryPeriod sets ExpiryPeriod field to given value.

### HasExpiryPeriod

`func (o *AwardPointsType) HasExpiryPeriod() bool`

HasExpiryPeriod returns a boolean if a field has been set.

### GetExpiryMonth

`func (o *AwardPointsType) GetExpiryMonth() string`

GetExpiryMonth returns the ExpiryMonth field if non-nil, zero value otherwise.

### GetExpiryMonthOk

`func (o *AwardPointsType) GetExpiryMonthOk() (*string, bool)`

GetExpiryMonthOk returns a tuple with the ExpiryMonth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiryMonth

`func (o *AwardPointsType) SetExpiryMonth(v string)`

SetExpiryMonth sets ExpiryMonth field to given value.

### HasExpiryMonth

`func (o *AwardPointsType) HasExpiryMonth() bool`

HasExpiryMonth returns a boolean if a field has been set.

### GetMonthsToAwardPointsExpiry

`func (o *AwardPointsType) GetMonthsToAwardPointsExpiry() int32`

GetMonthsToAwardPointsExpiry returns the MonthsToAwardPointsExpiry field if non-nil, zero value otherwise.

### GetMonthsToAwardPointsExpiryOk

`func (o *AwardPointsType) GetMonthsToAwardPointsExpiryOk() (*int32, bool)`

GetMonthsToAwardPointsExpiryOk returns a tuple with the MonthsToAwardPointsExpiry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonthsToAwardPointsExpiry

`func (o *AwardPointsType) SetMonthsToAwardPointsExpiry(v int32)`

SetMonthsToAwardPointsExpiry sets MonthsToAwardPointsExpiry field to given value.

### HasMonthsToAwardPointsExpiry

`func (o *AwardPointsType) HasMonthsToAwardPointsExpiry() bool`

HasMonthsToAwardPointsExpiry returns a boolean if a field has been set.

### GetAwardPointsExpiryDate

`func (o *AwardPointsType) GetAwardPointsExpiryDate() AwardPointsValidityDurationType`

GetAwardPointsExpiryDate returns the AwardPointsExpiryDate field if non-nil, zero value otherwise.

### GetAwardPointsExpiryDateOk

`func (o *AwardPointsType) GetAwardPointsExpiryDateOk() (*AwardPointsValidityDurationType, bool)`

GetAwardPointsExpiryDateOk returns a tuple with the AwardPointsExpiryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardPointsExpiryDate

`func (o *AwardPointsType) SetAwardPointsExpiryDate(v AwardPointsValidityDurationType)`

SetAwardPointsExpiryDate sets AwardPointsExpiryDate field to given value.

### HasAwardPointsExpiryDate

`func (o *AwardPointsType) HasAwardPointsExpiryDate() bool`

HasAwardPointsExpiryDate returns a boolean if a field has been set.

### GetAwardRedeemThreshold

`func (o *AwardPointsType) GetAwardRedeemThreshold() int32`

GetAwardRedeemThreshold returns the AwardRedeemThreshold field if non-nil, zero value otherwise.

### GetAwardRedeemThresholdOk

`func (o *AwardPointsType) GetAwardRedeemThresholdOk() (*int32, bool)`

GetAwardRedeemThresholdOk returns a tuple with the AwardRedeemThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardRedeemThreshold

`func (o *AwardPointsType) SetAwardRedeemThreshold(v int32)`

SetAwardRedeemThreshold sets AwardRedeemThreshold field to given value.

### HasAwardRedeemThreshold

`func (o *AwardPointsType) HasAwardRedeemThreshold() bool`

HasAwardRedeemThreshold returns a boolean if a field has been set.

### GetActivityPeriodMonths

`func (o *AwardPointsType) GetActivityPeriodMonths() int32`

GetActivityPeriodMonths returns the ActivityPeriodMonths field if non-nil, zero value otherwise.

### GetActivityPeriodMonthsOk

`func (o *AwardPointsType) GetActivityPeriodMonthsOk() (*int32, bool)`

GetActivityPeriodMonthsOk returns a tuple with the ActivityPeriodMonths field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityPeriodMonths

`func (o *AwardPointsType) SetActivityPeriodMonths(v int32)`

SetActivityPeriodMonths sets ActivityPeriodMonths field to given value.

### HasActivityPeriodMonths

`func (o *AwardPointsType) HasActivityPeriodMonths() bool`

HasActivityPeriodMonths returns a boolean if a field has been set.

### GetActivityPeriodYears

`func (o *AwardPointsType) GetActivityPeriodYears() NumberOfYearsType`

GetActivityPeriodYears returns the ActivityPeriodYears field if non-nil, zero value otherwise.

### GetActivityPeriodYearsOk

`func (o *AwardPointsType) GetActivityPeriodYearsOk() (*NumberOfYearsType, bool)`

GetActivityPeriodYearsOk returns a tuple with the ActivityPeriodYears field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityPeriodYears

`func (o *AwardPointsType) SetActivityPeriodYears(v NumberOfYearsType)`

SetActivityPeriodYears sets ActivityPeriodYears field to given value.

### HasActivityPeriodYears

`func (o *AwardPointsType) HasActivityPeriodYears() bool`

HasActivityPeriodYears returns a boolean if a field has been set.

### GetGracePeriodMonths

`func (o *AwardPointsType) GetGracePeriodMonths() int32`

GetGracePeriodMonths returns the GracePeriodMonths field if non-nil, zero value otherwise.

### GetGracePeriodMonthsOk

`func (o *AwardPointsType) GetGracePeriodMonthsOk() (*int32, bool)`

GetGracePeriodMonthsOk returns a tuple with the GracePeriodMonths field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGracePeriodMonths

`func (o *AwardPointsType) SetGracePeriodMonths(v int32)`

SetGracePeriodMonths sets GracePeriodMonths field to given value.

### HasGracePeriodMonths

`func (o *AwardPointsType) HasGracePeriodMonths() bool`

HasGracePeriodMonths returns a boolean if a field has been set.

### GetGracePeriodYear

`func (o *AwardPointsType) GetGracePeriodYear() CalendarGracePeriodType`

GetGracePeriodYear returns the GracePeriodYear field if non-nil, zero value otherwise.

### GetGracePeriodYearOk

`func (o *AwardPointsType) GetGracePeriodYearOk() (*CalendarGracePeriodType, bool)`

GetGracePeriodYearOk returns a tuple with the GracePeriodYear field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGracePeriodYear

`func (o *AwardPointsType) SetGracePeriodYear(v CalendarGracePeriodType)`

SetGracePeriodYear sets GracePeriodYear field to given value.

### HasGracePeriodYear

`func (o *AwardPointsType) HasGracePeriodYear() bool`

HasGracePeriodYear returns a boolean if a field has been set.

### GetRequiredOnStayPeriod

`func (o *AwardPointsType) GetRequiredOnStayPeriod() bool`

GetRequiredOnStayPeriod returns the RequiredOnStayPeriod field if non-nil, zero value otherwise.

### GetRequiredOnStayPeriodOk

`func (o *AwardPointsType) GetRequiredOnStayPeriodOk() (*bool, bool)`

GetRequiredOnStayPeriodOk returns a tuple with the RequiredOnStayPeriod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequiredOnStayPeriod

`func (o *AwardPointsType) SetRequiredOnStayPeriod(v bool)`

SetRequiredOnStayPeriod sets RequiredOnStayPeriod field to given value.

### HasRequiredOnStayPeriod

`func (o *AwardPointsType) HasRequiredOnStayPeriod() bool`

HasRequiredOnStayPeriod returns a boolean if a field has been set.

### GetExceptionCriteria

`func (o *AwardPointsType) GetExceptionCriteria() AwardsExceptionCriteriaType`

GetExceptionCriteria returns the ExceptionCriteria field if non-nil, zero value otherwise.

### GetExceptionCriteriaOk

`func (o *AwardPointsType) GetExceptionCriteriaOk() (*AwardsExceptionCriteriaType, bool)`

GetExceptionCriteriaOk returns a tuple with the ExceptionCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExceptionCriteria

`func (o *AwardPointsType) SetExceptionCriteria(v AwardsExceptionCriteriaType)`

SetExceptionCriteria sets ExceptionCriteria field to given value.

### HasExceptionCriteria

`func (o *AwardPointsType) HasExceptionCriteria() bool`

HasExceptionCriteria returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


