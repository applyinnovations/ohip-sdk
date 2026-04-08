# DailyStatType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StatisticDate** | Pointer to **string** | Date of statistics. | [optional] 
**BlockStats** | Pointer to [**[]BlockStatType**](BlockStatType.md) | Statistics of one block. | [optional] 

## Methods

### NewDailyStatType

`func NewDailyStatType() *DailyStatType`

NewDailyStatType instantiates a new DailyStatType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDailyStatTypeWithDefaults

`func NewDailyStatTypeWithDefaults() *DailyStatType`

NewDailyStatTypeWithDefaults instantiates a new DailyStatType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatisticDate

`func (o *DailyStatType) GetStatisticDate() string`

GetStatisticDate returns the StatisticDate field if non-nil, zero value otherwise.

### GetStatisticDateOk

`func (o *DailyStatType) GetStatisticDateOk() (*string, bool)`

GetStatisticDateOk returns a tuple with the StatisticDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatisticDate

`func (o *DailyStatType) SetStatisticDate(v string)`

SetStatisticDate sets StatisticDate field to given value.

### HasStatisticDate

`func (o *DailyStatType) HasStatisticDate() bool`

HasStatisticDate returns a boolean if a field has been set.

### GetBlockStats

`func (o *DailyStatType) GetBlockStats() []BlockStatType`

GetBlockStats returns the BlockStats field if non-nil, zero value otherwise.

### GetBlockStatsOk

`func (o *DailyStatType) GetBlockStatsOk() (*[]BlockStatType, bool)`

GetBlockStatsOk returns a tuple with the BlockStats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStats

`func (o *DailyStatType) SetBlockStats(v []BlockStatType)`

SetBlockStats sets BlockStats field to given value.

### HasBlockStats

`func (o *DailyStatType) HasBlockStats() bool`

HasBlockStats returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


