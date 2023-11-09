# SubBlockCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockIdList** | Pointer to [**BlockIdList**](BlockIdList.md) |  | [optional] 
**MasterBlockHotelCode** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**SubBlockInfo** | Pointer to [**[]CreateSubBlockBaseInfoType**](CreateSubBlockBaseInfoType.md) | Sub Block Information for creating Sub Blocks. | [optional] 

## Methods

### NewSubBlockCriteria

`func NewSubBlockCriteria() *SubBlockCriteria`

NewSubBlockCriteria instantiates a new SubBlockCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubBlockCriteriaWithDefaults

`func NewSubBlockCriteriaWithDefaults() *SubBlockCriteria`

NewSubBlockCriteriaWithDefaults instantiates a new SubBlockCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockIdList

`func (o *SubBlockCriteria) GetBlockIdList() BlockIdList`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *SubBlockCriteria) GetBlockIdListOk() (*BlockIdList, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *SubBlockCriteria) SetBlockIdList(v BlockIdList)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *SubBlockCriteria) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetMasterBlockHotelCode

`func (o *SubBlockCriteria) GetMasterBlockHotelCode() string`

GetMasterBlockHotelCode returns the MasterBlockHotelCode field if non-nil, zero value otherwise.

### GetMasterBlockHotelCodeOk

`func (o *SubBlockCriteria) GetMasterBlockHotelCodeOk() (*string, bool)`

GetMasterBlockHotelCodeOk returns a tuple with the MasterBlockHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterBlockHotelCode

`func (o *SubBlockCriteria) SetMasterBlockHotelCode(v string)`

SetMasterBlockHotelCode sets MasterBlockHotelCode field to given value.

### HasMasterBlockHotelCode

`func (o *SubBlockCriteria) HasMasterBlockHotelCode() bool`

HasMasterBlockHotelCode returns a boolean if a field has been set.

### GetSubBlockInfo

`func (o *SubBlockCriteria) GetSubBlockInfo() []CreateSubBlockBaseInfoType`

GetSubBlockInfo returns the SubBlockInfo field if non-nil, zero value otherwise.

### GetSubBlockInfoOk

`func (o *SubBlockCriteria) GetSubBlockInfoOk() (*[]CreateSubBlockBaseInfoType, bool)`

GetSubBlockInfoOk returns a tuple with the SubBlockInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubBlockInfo

`func (o *SubBlockCriteria) SetSubBlockInfo(v []CreateSubBlockBaseInfoType)`

SetSubBlockInfo sets SubBlockInfo field to given value.

### HasSubBlockInfo

`func (o *SubBlockCriteria) HasSubBlockInfo() bool`

HasSubBlockInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


