# StatisticSetType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NumericCategorySummariesType** | Pointer to [**[]NumericCategorySummaryType**](NumericCategorySummaryType.md) | Collection of CountCategorySummary elements. Used if count values reported. | [optional] 
**RevenueCategorySummariesType** | Pointer to [**[]RevenueCategorySummaryType**](RevenueCategorySummaryType.md) | Collection of RevenueCategorySummary elements. Used if revenue values reported. | [optional] 
**StatisticDate** | Pointer to **string** | Date of the statistic. | [optional] 
**WeekendDate** | Pointer to **bool** | Determines whether statistic date is a weekend date. | [optional] 

## Methods

### NewStatisticSetType

`func NewStatisticSetType() *StatisticSetType`

NewStatisticSetType instantiates a new StatisticSetType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatisticSetTypeWithDefaults

`func NewStatisticSetTypeWithDefaults() *StatisticSetType`

NewStatisticSetTypeWithDefaults instantiates a new StatisticSetType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNumericCategorySummariesType

`func (o *StatisticSetType) GetNumericCategorySummariesType() []NumericCategorySummaryType`

GetNumericCategorySummariesType returns the NumericCategorySummariesType field if non-nil, zero value otherwise.

### GetNumericCategorySummariesTypeOk

`func (o *StatisticSetType) GetNumericCategorySummariesTypeOk() (*[]NumericCategorySummaryType, bool)`

GetNumericCategorySummariesTypeOk returns a tuple with the NumericCategorySummariesType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumericCategorySummariesType

`func (o *StatisticSetType) SetNumericCategorySummariesType(v []NumericCategorySummaryType)`

SetNumericCategorySummariesType sets NumericCategorySummariesType field to given value.

### HasNumericCategorySummariesType

`func (o *StatisticSetType) HasNumericCategorySummariesType() bool`

HasNumericCategorySummariesType returns a boolean if a field has been set.

### GetRevenueCategorySummariesType

`func (o *StatisticSetType) GetRevenueCategorySummariesType() []RevenueCategorySummaryType`

GetRevenueCategorySummariesType returns the RevenueCategorySummariesType field if non-nil, zero value otherwise.

### GetRevenueCategorySummariesTypeOk

`func (o *StatisticSetType) GetRevenueCategorySummariesTypeOk() (*[]RevenueCategorySummaryType, bool)`

GetRevenueCategorySummariesTypeOk returns a tuple with the RevenueCategorySummariesType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueCategorySummariesType

`func (o *StatisticSetType) SetRevenueCategorySummariesType(v []RevenueCategorySummaryType)`

SetRevenueCategorySummariesType sets RevenueCategorySummariesType field to given value.

### HasRevenueCategorySummariesType

`func (o *StatisticSetType) HasRevenueCategorySummariesType() bool`

HasRevenueCategorySummariesType returns a boolean if a field has been set.

### GetStatisticDate

`func (o *StatisticSetType) GetStatisticDate() string`

GetStatisticDate returns the StatisticDate field if non-nil, zero value otherwise.

### GetStatisticDateOk

`func (o *StatisticSetType) GetStatisticDateOk() (*string, bool)`

GetStatisticDateOk returns a tuple with the StatisticDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatisticDate

`func (o *StatisticSetType) SetStatisticDate(v string)`

SetStatisticDate sets StatisticDate field to given value.

### HasStatisticDate

`func (o *StatisticSetType) HasStatisticDate() bool`

HasStatisticDate returns a boolean if a field has been set.

### GetWeekendDate

`func (o *StatisticSetType) GetWeekendDate() bool`

GetWeekendDate returns the WeekendDate field if non-nil, zero value otherwise.

### GetWeekendDateOk

`func (o *StatisticSetType) GetWeekendDateOk() (*bool, bool)`

GetWeekendDateOk returns a tuple with the WeekendDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWeekendDate

`func (o *StatisticSetType) SetWeekendDate(v bool)`

SetWeekendDate sets WeekendDate field to given value.

### HasWeekendDate

`func (o *StatisticSetType) HasWeekendDate() bool`

HasWeekendDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


