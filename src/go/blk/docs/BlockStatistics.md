# BlockStatistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MasterInfo** | Pointer to [**BlockStatisticsAllotedRoomsType**](BlockStatisticsAllotedRoomsType.md) |  | [optional] 
**StatisticsDetails** | Pointer to [**BlockStatisticsDetailsType**](BlockStatisticsDetailsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewBlockStatistics

`func NewBlockStatistics() *BlockStatistics`

NewBlockStatistics instantiates a new BlockStatistics object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockStatisticsWithDefaults

`func NewBlockStatisticsWithDefaults() *BlockStatistics`

NewBlockStatisticsWithDefaults instantiates a new BlockStatistics object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *BlockStatistics) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockStatistics) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockStatistics) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockStatistics) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMasterInfo

`func (o *BlockStatistics) GetMasterInfo() BlockStatisticsAllotedRoomsType`

GetMasterInfo returns the MasterInfo field if non-nil, zero value otherwise.

### GetMasterInfoOk

`func (o *BlockStatistics) GetMasterInfoOk() (*BlockStatisticsAllotedRoomsType, bool)`

GetMasterInfoOk returns a tuple with the MasterInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfo

`func (o *BlockStatistics) SetMasterInfo(v BlockStatisticsAllotedRoomsType)`

SetMasterInfo sets MasterInfo field to given value.

### HasMasterInfo

`func (o *BlockStatistics) HasMasterInfo() bool`

HasMasterInfo returns a boolean if a field has been set.

### GetStatisticsDetails

`func (o *BlockStatistics) GetStatisticsDetails() BlockStatisticsDetailsType`

GetStatisticsDetails returns the StatisticsDetails field if non-nil, zero value otherwise.

### GetStatisticsDetailsOk

`func (o *BlockStatistics) GetStatisticsDetailsOk() (*BlockStatisticsDetailsType, bool)`

GetStatisticsDetailsOk returns a tuple with the StatisticsDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatisticsDetails

`func (o *BlockStatistics) SetStatisticsDetails(v BlockStatisticsDetailsType)`

SetStatisticsDetails sets StatisticsDetails field to given value.

### HasStatisticsDetails

`func (o *BlockStatistics) HasStatisticsDetails() bool`

HasStatisticsDetails returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockStatistics) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockStatistics) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockStatistics) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockStatistics) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


