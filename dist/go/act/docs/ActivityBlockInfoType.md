# ActivityBlockInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockIdList** | Pointer to [**[]UniqueNameIDType**](UniqueNameIDType.md) | Defines descriptive name and unique identification combination. | [optional] 
**BlockCode** | Pointer to **string** | Block code for the block. | [optional] 
**BlockName** | Pointer to **string** | Name of the block. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**Primary** | Pointer to **bool** | When true, indicates a primary information. | [optional] 

## Methods

### NewActivityBlockInfoType

`func NewActivityBlockInfoType() *ActivityBlockInfoType`

NewActivityBlockInfoType instantiates a new ActivityBlockInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityBlockInfoTypeWithDefaults

`func NewActivityBlockInfoTypeWithDefaults() *ActivityBlockInfoType`

NewActivityBlockInfoTypeWithDefaults instantiates a new ActivityBlockInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockIdList

`func (o *ActivityBlockInfoType) GetBlockIdList() []UniqueNameIDType`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *ActivityBlockInfoType) GetBlockIdListOk() (*[]UniqueNameIDType, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *ActivityBlockInfoType) SetBlockIdList(v []UniqueNameIDType)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *ActivityBlockInfoType) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetBlockCode

`func (o *ActivityBlockInfoType) GetBlockCode() string`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *ActivityBlockInfoType) GetBlockCodeOk() (*string, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *ActivityBlockInfoType) SetBlockCode(v string)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *ActivityBlockInfoType) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.

### GetBlockName

`func (o *ActivityBlockInfoType) GetBlockName() string`

GetBlockName returns the BlockName field if non-nil, zero value otherwise.

### GetBlockNameOk

`func (o *ActivityBlockInfoType) GetBlockNameOk() (*string, bool)`

GetBlockNameOk returns a tuple with the BlockName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockName

`func (o *ActivityBlockInfoType) SetBlockName(v string)`

SetBlockName sets BlockName field to given value.

### HasBlockName

`func (o *ActivityBlockInfoType) HasBlockName() bool`

HasBlockName returns a boolean if a field has been set.

### GetTimeSpan

`func (o *ActivityBlockInfoType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *ActivityBlockInfoType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *ActivityBlockInfoType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *ActivityBlockInfoType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetPrimary

`func (o *ActivityBlockInfoType) GetPrimary() bool`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *ActivityBlockInfoType) GetPrimaryOk() (*bool, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *ActivityBlockInfoType) SetPrimary(v bool)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *ActivityBlockInfoType) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


