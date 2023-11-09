# BlockDetailStatisticType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockInformation** | Pointer to [**BlockInfoType**](BlockInfoType.md) |  | [optional] 
**BlockStatistics** | Pointer to [**BlockStatusStatisticsType**](BlockStatusStatisticsType.md) |  | [optional] 

## Methods

### NewBlockDetailStatisticType

`func NewBlockDetailStatisticType() *BlockDetailStatisticType`

NewBlockDetailStatisticType instantiates a new BlockDetailStatisticType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockDetailStatisticTypeWithDefaults

`func NewBlockDetailStatisticTypeWithDefaults() *BlockDetailStatisticType`

NewBlockDetailStatisticTypeWithDefaults instantiates a new BlockDetailStatisticType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockInformation

`func (o *BlockDetailStatisticType) GetBlockInformation() BlockInfoType`

GetBlockInformation returns the BlockInformation field if non-nil, zero value otherwise.

### GetBlockInformationOk

`func (o *BlockDetailStatisticType) GetBlockInformationOk() (*BlockInfoType, bool)`

GetBlockInformationOk returns a tuple with the BlockInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockInformation

`func (o *BlockDetailStatisticType) SetBlockInformation(v BlockInfoType)`

SetBlockInformation sets BlockInformation field to given value.

### HasBlockInformation

`func (o *BlockDetailStatisticType) HasBlockInformation() bool`

HasBlockInformation returns a boolean if a field has been set.

### GetBlockStatistics

`func (o *BlockDetailStatisticType) GetBlockStatistics() BlockStatusStatisticsType`

GetBlockStatistics returns the BlockStatistics field if non-nil, zero value otherwise.

### GetBlockStatisticsOk

`func (o *BlockDetailStatisticType) GetBlockStatisticsOk() (*BlockStatusStatisticsType, bool)`

GetBlockStatisticsOk returns a tuple with the BlockStatistics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatistics

`func (o *BlockDetailStatisticType) SetBlockStatistics(v BlockStatusStatisticsType)`

SetBlockStatistics sets BlockStatistics field to given value.

### HasBlockStatistics

`func (o *BlockDetailStatisticType) HasBlockStatistics() bool`

HasBlockStatistics returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


