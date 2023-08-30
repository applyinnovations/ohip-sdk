# BlockStatusStatisticType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StatusSummaryStatistic** | Pointer to [**[]StatisticUnitType**](StatisticUnitType.md) | Unit type to hold statistic code and value pair. | [optional] 
**StatisticDate** | Pointer to **string** | Date of the statistic. | [optional] 

## Methods

### NewBlockStatusStatisticType

`func NewBlockStatusStatisticType() *BlockStatusStatisticType`

NewBlockStatusStatisticType instantiates a new BlockStatusStatisticType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockStatusStatisticTypeWithDefaults

`func NewBlockStatusStatisticTypeWithDefaults() *BlockStatusStatisticType`

NewBlockStatusStatisticTypeWithDefaults instantiates a new BlockStatusStatisticType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatusSummaryStatistic

`func (o *BlockStatusStatisticType) GetStatusSummaryStatistic() []StatisticUnitType`

GetStatusSummaryStatistic returns the StatusSummaryStatistic field if non-nil, zero value otherwise.

### GetStatusSummaryStatisticOk

`func (o *BlockStatusStatisticType) GetStatusSummaryStatisticOk() (*[]StatisticUnitType, bool)`

GetStatusSummaryStatisticOk returns a tuple with the StatusSummaryStatistic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusSummaryStatistic

`func (o *BlockStatusStatisticType) SetStatusSummaryStatistic(v []StatisticUnitType)`

SetStatusSummaryStatistic sets StatusSummaryStatistic field to given value.

### HasStatusSummaryStatistic

`func (o *BlockStatusStatisticType) HasStatusSummaryStatistic() bool`

HasStatusSummaryStatistic returns a boolean if a field has been set.

### GetStatisticDate

`func (o *BlockStatusStatisticType) GetStatisticDate() string`

GetStatisticDate returns the StatisticDate field if non-nil, zero value otherwise.

### GetStatisticDateOk

`func (o *BlockStatusStatisticType) GetStatisticDateOk() (*string, bool)`

GetStatisticDateOk returns a tuple with the StatisticDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatisticDate

`func (o *BlockStatusStatisticType) SetStatisticDate(v string)`

SetStatisticDate sets StatisticDate field to given value.

### HasStatisticDate

`func (o *BlockStatusStatisticType) HasStatisticDate() bool`

HasStatisticDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


