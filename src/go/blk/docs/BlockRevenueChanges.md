# BlockRevenueChanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockRevenueChanges** | Pointer to [**BlockRevenueChangesDetailsType**](BlockRevenueChangesDetailsType.md) |  | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewBlockRevenueChanges

`func NewBlockRevenueChanges() *BlockRevenueChanges`

NewBlockRevenueChanges instantiates a new BlockRevenueChanges object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockRevenueChangesWithDefaults

`func NewBlockRevenueChangesWithDefaults() *BlockRevenueChanges`

NewBlockRevenueChangesWithDefaults instantiates a new BlockRevenueChanges object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockRevenueChanges

`func (o *BlockRevenueChanges) GetBlockRevenueChanges() BlockRevenueChangesDetailsType`

GetBlockRevenueChanges returns the BlockRevenueChanges field if non-nil, zero value otherwise.

### GetBlockRevenueChangesOk

`func (o *BlockRevenueChanges) GetBlockRevenueChangesOk() (*BlockRevenueChangesDetailsType, bool)`

GetBlockRevenueChangesOk returns a tuple with the BlockRevenueChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockRevenueChanges

`func (o *BlockRevenueChanges) SetBlockRevenueChanges(v BlockRevenueChangesDetailsType)`

SetBlockRevenueChanges sets BlockRevenueChanges field to given value.

### HasBlockRevenueChanges

`func (o *BlockRevenueChanges) HasBlockRevenueChanges() bool`

HasBlockRevenueChanges returns a boolean if a field has been set.

### GetCount

`func (o *BlockRevenueChanges) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *BlockRevenueChanges) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *BlockRevenueChanges) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *BlockRevenueChanges) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *BlockRevenueChanges) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *BlockRevenueChanges) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *BlockRevenueChanges) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *BlockRevenueChanges) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *BlockRevenueChanges) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *BlockRevenueChanges) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *BlockRevenueChanges) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *BlockRevenueChanges) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *BlockRevenueChanges) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockRevenueChanges) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockRevenueChanges) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockRevenueChanges) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *BlockRevenueChanges) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *BlockRevenueChanges) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *BlockRevenueChanges) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *BlockRevenueChanges) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalPages

`func (o *BlockRevenueChanges) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *BlockRevenueChanges) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *BlockRevenueChanges) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *BlockRevenueChanges) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *BlockRevenueChanges) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *BlockRevenueChanges) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *BlockRevenueChanges) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *BlockRevenueChanges) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockRevenueChanges) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockRevenueChanges) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockRevenueChanges) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockRevenueChanges) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


