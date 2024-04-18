# PromotionGroupsPromotionGroups

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllRowsFetched** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**PromotionGroups** | Pointer to [**[]PromotionGroupType**](PromotionGroupType.md) | A promotion group. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewPromotionGroupsPromotionGroups

`func NewPromotionGroupsPromotionGroups() *PromotionGroupsPromotionGroups`

NewPromotionGroupsPromotionGroups instantiates a new PromotionGroupsPromotionGroups object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPromotionGroupsPromotionGroupsWithDefaults

`func NewPromotionGroupsPromotionGroupsWithDefaults() *PromotionGroupsPromotionGroups`

NewPromotionGroupsPromotionGroupsWithDefaults instantiates a new PromotionGroupsPromotionGroups object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllRowsFetched

`func (o *PromotionGroupsPromotionGroups) GetAllRowsFetched() bool`

GetAllRowsFetched returns the AllRowsFetched field if non-nil, zero value otherwise.

### GetAllRowsFetchedOk

`func (o *PromotionGroupsPromotionGroups) GetAllRowsFetchedOk() (*bool, bool)`

GetAllRowsFetchedOk returns a tuple with the AllRowsFetched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllRowsFetched

`func (o *PromotionGroupsPromotionGroups) SetAllRowsFetched(v bool)`

SetAllRowsFetched sets AllRowsFetched field to given value.

### HasAllRowsFetched

`func (o *PromotionGroupsPromotionGroups) HasAllRowsFetched() bool`

HasAllRowsFetched returns a boolean if a field has been set.

### GetLimit

`func (o *PromotionGroupsPromotionGroups) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *PromotionGroupsPromotionGroups) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *PromotionGroupsPromotionGroups) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *PromotionGroupsPromotionGroups) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetOffset

`func (o *PromotionGroupsPromotionGroups) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *PromotionGroupsPromotionGroups) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *PromotionGroupsPromotionGroups) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *PromotionGroupsPromotionGroups) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetPromotionGroups

`func (o *PromotionGroupsPromotionGroups) GetPromotionGroups() []PromotionGroupType`

GetPromotionGroups returns the PromotionGroups field if non-nil, zero value otherwise.

### GetPromotionGroupsOk

`func (o *PromotionGroupsPromotionGroups) GetPromotionGroupsOk() (*[]PromotionGroupType, bool)`

GetPromotionGroupsOk returns a tuple with the PromotionGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionGroups

`func (o *PromotionGroupsPromotionGroups) SetPromotionGroups(v []PromotionGroupType)`

SetPromotionGroups sets PromotionGroups field to given value.

### HasPromotionGroups

`func (o *PromotionGroupsPromotionGroups) HasPromotionGroups() bool`

HasPromotionGroups returns a boolean if a field has been set.

### GetTotalPages

`func (o *PromotionGroupsPromotionGroups) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *PromotionGroupsPromotionGroups) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *PromotionGroupsPromotionGroups) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *PromotionGroupsPromotionGroups) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalRows

`func (o *PromotionGroupsPromotionGroups) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *PromotionGroupsPromotionGroups) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *PromotionGroupsPromotionGroups) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *PromotionGroupsPromotionGroups) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


