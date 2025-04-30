# PackageElementType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Allowance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Description** | Pointer to **[]string** |  | [optional] 
**StartDate** | Pointer to **string** |  | [optional] 
**EndDate** | Pointer to **string** |  | [optional] 
**PackageCode** | Pointer to **string** |  | [optional] 
**CalculationRule** | Pointer to **string** |  | [optional] 
**PostingRhythm** | Pointer to **string** |  | [optional] 
**Quantity** | Pointer to **int32** |  | [optional] 
**IncludedInRate** | Pointer to **bool** |  | [optional] 
**AddRateSeprateLine** | Pointer to **bool** |  | [optional] 
**AddRateCombinedLine** | Pointer to **bool** |  | [optional] 
**StartTime** | Pointer to **string** |  | [optional] 
**EndTime** | Pointer to **string** |  | [optional] 
**SellSeparate** | Pointer to **bool** |  | [optional] 

## Methods

### NewPackageElementType

`func NewPackageElementType() *PackageElementType`

NewPackageElementType instantiates a new PackageElementType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackageElementTypeWithDefaults

`func NewPackageElementTypeWithDefaults() *PackageElementType`

NewPackageElementTypeWithDefaults instantiates a new PackageElementType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *PackageElementType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PackageElementType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PackageElementType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *PackageElementType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetAllowance

`func (o *PackageElementType) GetAllowance() CurrencyAmountType`

GetAllowance returns the Allowance field if non-nil, zero value otherwise.

### GetAllowanceOk

`func (o *PackageElementType) GetAllowanceOk() (*CurrencyAmountType, bool)`

GetAllowanceOk returns a tuple with the Allowance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowance

`func (o *PackageElementType) SetAllowance(v CurrencyAmountType)`

SetAllowance sets Allowance field to given value.

### HasAllowance

`func (o *PackageElementType) HasAllowance() bool`

HasAllowance returns a boolean if a field has been set.

### GetDescription

`func (o *PackageElementType) GetDescription() []string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PackageElementType) GetDescriptionOk() (*[]string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PackageElementType) SetDescription(v []string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PackageElementType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetStartDate

`func (o *PackageElementType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *PackageElementType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *PackageElementType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *PackageElementType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *PackageElementType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *PackageElementType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *PackageElementType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *PackageElementType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetPackageCode

`func (o *PackageElementType) GetPackageCode() string`

GetPackageCode returns the PackageCode field if non-nil, zero value otherwise.

### GetPackageCodeOk

`func (o *PackageElementType) GetPackageCodeOk() (*string, bool)`

GetPackageCodeOk returns a tuple with the PackageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageCode

`func (o *PackageElementType) SetPackageCode(v string)`

SetPackageCode sets PackageCode field to given value.

### HasPackageCode

`func (o *PackageElementType) HasPackageCode() bool`

HasPackageCode returns a boolean if a field has been set.

### GetCalculationRule

`func (o *PackageElementType) GetCalculationRule() string`

GetCalculationRule returns the CalculationRule field if non-nil, zero value otherwise.

### GetCalculationRuleOk

`func (o *PackageElementType) GetCalculationRuleOk() (*string, bool)`

GetCalculationRuleOk returns a tuple with the CalculationRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculationRule

`func (o *PackageElementType) SetCalculationRule(v string)`

SetCalculationRule sets CalculationRule field to given value.

### HasCalculationRule

`func (o *PackageElementType) HasCalculationRule() bool`

HasCalculationRule returns a boolean if a field has been set.

### GetPostingRhythm

`func (o *PackageElementType) GetPostingRhythm() string`

GetPostingRhythm returns the PostingRhythm field if non-nil, zero value otherwise.

### GetPostingRhythmOk

`func (o *PackageElementType) GetPostingRhythmOk() (*string, bool)`

GetPostingRhythmOk returns a tuple with the PostingRhythm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingRhythm

`func (o *PackageElementType) SetPostingRhythm(v string)`

SetPostingRhythm sets PostingRhythm field to given value.

### HasPostingRhythm

`func (o *PackageElementType) HasPostingRhythm() bool`

HasPostingRhythm returns a boolean if a field has been set.

### GetQuantity

`func (o *PackageElementType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *PackageElementType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *PackageElementType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *PackageElementType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetIncludedInRate

`func (o *PackageElementType) GetIncludedInRate() bool`

GetIncludedInRate returns the IncludedInRate field if non-nil, zero value otherwise.

### GetIncludedInRateOk

`func (o *PackageElementType) GetIncludedInRateOk() (*bool, bool)`

GetIncludedInRateOk returns a tuple with the IncludedInRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedInRate

`func (o *PackageElementType) SetIncludedInRate(v bool)`

SetIncludedInRate sets IncludedInRate field to given value.

### HasIncludedInRate

`func (o *PackageElementType) HasIncludedInRate() bool`

HasIncludedInRate returns a boolean if a field has been set.

### GetAddRateSeprateLine

`func (o *PackageElementType) GetAddRateSeprateLine() bool`

GetAddRateSeprateLine returns the AddRateSeprateLine field if non-nil, zero value otherwise.

### GetAddRateSeprateLineOk

`func (o *PackageElementType) GetAddRateSeprateLineOk() (*bool, bool)`

GetAddRateSeprateLineOk returns a tuple with the AddRateSeprateLine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddRateSeprateLine

`func (o *PackageElementType) SetAddRateSeprateLine(v bool)`

SetAddRateSeprateLine sets AddRateSeprateLine field to given value.

### HasAddRateSeprateLine

`func (o *PackageElementType) HasAddRateSeprateLine() bool`

HasAddRateSeprateLine returns a boolean if a field has been set.

### GetAddRateCombinedLine

`func (o *PackageElementType) GetAddRateCombinedLine() bool`

GetAddRateCombinedLine returns the AddRateCombinedLine field if non-nil, zero value otherwise.

### GetAddRateCombinedLineOk

`func (o *PackageElementType) GetAddRateCombinedLineOk() (*bool, bool)`

GetAddRateCombinedLineOk returns a tuple with the AddRateCombinedLine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddRateCombinedLine

`func (o *PackageElementType) SetAddRateCombinedLine(v bool)`

SetAddRateCombinedLine sets AddRateCombinedLine field to given value.

### HasAddRateCombinedLine

`func (o *PackageElementType) HasAddRateCombinedLine() bool`

HasAddRateCombinedLine returns a boolean if a field has been set.

### GetStartTime

`func (o *PackageElementType) GetStartTime() string`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *PackageElementType) GetStartTimeOk() (*string, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *PackageElementType) SetStartTime(v string)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *PackageElementType) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### GetEndTime

`func (o *PackageElementType) GetEndTime() string`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *PackageElementType) GetEndTimeOk() (*string, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *PackageElementType) SetEndTime(v string)`

SetEndTime sets EndTime field to given value.

### HasEndTime

`func (o *PackageElementType) HasEndTime() bool`

HasEndTime returns a boolean if a field has been set.

### GetSellSeparate

`func (o *PackageElementType) GetSellSeparate() bool`

GetSellSeparate returns the SellSeparate field if non-nil, zero value otherwise.

### GetSellSeparateOk

`func (o *PackageElementType) GetSellSeparateOk() (*bool, bool)`

GetSellSeparateOk returns a tuple with the SellSeparate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellSeparate

`func (o *PackageElementType) SetSellSeparate(v bool)`

SetSellSeparate sets SellSeparate field to given value.

### HasSellSeparate

`func (o *PackageElementType) HasSellSeparate() bool`

HasSellSeparate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


