# BlockSummaryStatisticType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingSummaryStatistic** | Pointer to [**[]StatisticUnitType**](StatisticUnitType.md) | Unit type to hold statistic code and value pair. | [optional] 
**DailyTargetsSummaryStatistic** | Pointer to [**[]StatisticUnitType**](StatisticUnitType.md) | Unit type to hold statistic code and value pair. | [optional] 
**StatisticDate** | Pointer to **string** | Date of the block inventory statistic. | [optional] 
**StatusSummaryStatistic** | Pointer to [**[]StatusStatisticType**](StatusStatisticType.md) | Statistic summary for a particular status. | [optional] 

## Methods

### NewBlockSummaryStatisticType

`func NewBlockSummaryStatisticType() *BlockSummaryStatisticType`

NewBlockSummaryStatisticType instantiates a new BlockSummaryStatisticType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockSummaryStatisticTypeWithDefaults

`func NewBlockSummaryStatisticTypeWithDefaults() *BlockSummaryStatisticType`

NewBlockSummaryStatisticTypeWithDefaults instantiates a new BlockSummaryStatisticType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBookingSummaryStatistic

`func (o *BlockSummaryStatisticType) GetBookingSummaryStatistic() []StatisticUnitType`

GetBookingSummaryStatistic returns the BookingSummaryStatistic field if non-nil, zero value otherwise.

### GetBookingSummaryStatisticOk

`func (o *BlockSummaryStatisticType) GetBookingSummaryStatisticOk() (*[]StatisticUnitType, bool)`

GetBookingSummaryStatisticOk returns a tuple with the BookingSummaryStatistic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingSummaryStatistic

`func (o *BlockSummaryStatisticType) SetBookingSummaryStatistic(v []StatisticUnitType)`

SetBookingSummaryStatistic sets BookingSummaryStatistic field to given value.

### HasBookingSummaryStatistic

`func (o *BlockSummaryStatisticType) HasBookingSummaryStatistic() bool`

HasBookingSummaryStatistic returns a boolean if a field has been set.

### GetDailyTargetsSummaryStatistic

`func (o *BlockSummaryStatisticType) GetDailyTargetsSummaryStatistic() []StatisticUnitType`

GetDailyTargetsSummaryStatistic returns the DailyTargetsSummaryStatistic field if non-nil, zero value otherwise.

### GetDailyTargetsSummaryStatisticOk

`func (o *BlockSummaryStatisticType) GetDailyTargetsSummaryStatisticOk() (*[]StatisticUnitType, bool)`

GetDailyTargetsSummaryStatisticOk returns a tuple with the DailyTargetsSummaryStatistic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDailyTargetsSummaryStatistic

`func (o *BlockSummaryStatisticType) SetDailyTargetsSummaryStatistic(v []StatisticUnitType)`

SetDailyTargetsSummaryStatistic sets DailyTargetsSummaryStatistic field to given value.

### HasDailyTargetsSummaryStatistic

`func (o *BlockSummaryStatisticType) HasDailyTargetsSummaryStatistic() bool`

HasDailyTargetsSummaryStatistic returns a boolean if a field has been set.

### GetStatisticDate

`func (o *BlockSummaryStatisticType) GetStatisticDate() string`

GetStatisticDate returns the StatisticDate field if non-nil, zero value otherwise.

### GetStatisticDateOk

`func (o *BlockSummaryStatisticType) GetStatisticDateOk() (*string, bool)`

GetStatisticDateOk returns a tuple with the StatisticDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatisticDate

`func (o *BlockSummaryStatisticType) SetStatisticDate(v string)`

SetStatisticDate sets StatisticDate field to given value.

### HasStatisticDate

`func (o *BlockSummaryStatisticType) HasStatisticDate() bool`

HasStatisticDate returns a boolean if a field has been set.

### GetStatusSummaryStatistic

`func (o *BlockSummaryStatisticType) GetStatusSummaryStatistic() []StatusStatisticType`

GetStatusSummaryStatistic returns the StatusSummaryStatistic field if non-nil, zero value otherwise.

### GetStatusSummaryStatisticOk

`func (o *BlockSummaryStatisticType) GetStatusSummaryStatisticOk() (*[]StatusStatisticType, bool)`

GetStatusSummaryStatisticOk returns a tuple with the StatusSummaryStatistic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusSummaryStatistic

`func (o *BlockSummaryStatisticType) SetStatusSummaryStatistic(v []StatusStatisticType)`

SetStatusSummaryStatistic sets StatusSummaryStatistic field to given value.

### HasStatusSummaryStatistic

`func (o *BlockSummaryStatisticType) HasStatusSummaryStatistic() bool`

HasStatusSummaryStatistic returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


