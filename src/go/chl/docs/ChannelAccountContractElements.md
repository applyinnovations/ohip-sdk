# ChannelAccountContractElements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContractElements** | Pointer to [**ChannelAccountContractElementsType**](ChannelAccountContractElementsType.md) |  | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChannelAccountContractElements

`func NewChannelAccountContractElements() *ChannelAccountContractElements`

NewChannelAccountContractElements instantiates a new ChannelAccountContractElements object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelAccountContractElementsWithDefaults

`func NewChannelAccountContractElementsWithDefaults() *ChannelAccountContractElements`

NewChannelAccountContractElementsWithDefaults instantiates a new ChannelAccountContractElements object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContractElements

`func (o *ChannelAccountContractElements) GetContractElements() ChannelAccountContractElementsType`

GetContractElements returns the ContractElements field if non-nil, zero value otherwise.

### GetContractElementsOk

`func (o *ChannelAccountContractElements) GetContractElementsOk() (*ChannelAccountContractElementsType, bool)`

GetContractElementsOk returns a tuple with the ContractElements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractElements

`func (o *ChannelAccountContractElements) SetContractElements(v ChannelAccountContractElementsType)`

SetContractElements sets ContractElements field to given value.

### HasContractElements

`func (o *ChannelAccountContractElements) HasContractElements() bool`

HasContractElements returns a boolean if a field has been set.

### GetCount

`func (o *ChannelAccountContractElements) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ChannelAccountContractElements) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ChannelAccountContractElements) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ChannelAccountContractElements) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *ChannelAccountContractElements) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ChannelAccountContractElements) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ChannelAccountContractElements) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ChannelAccountContractElements) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *ChannelAccountContractElements) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *ChannelAccountContractElements) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *ChannelAccountContractElements) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *ChannelAccountContractElements) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelAccountContractElements) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelAccountContractElements) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelAccountContractElements) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelAccountContractElements) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *ChannelAccountContractElements) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *ChannelAccountContractElements) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *ChannelAccountContractElements) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *ChannelAccountContractElements) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalPages

`func (o *ChannelAccountContractElements) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *ChannelAccountContractElements) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *ChannelAccountContractElements) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *ChannelAccountContractElements) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *ChannelAccountContractElements) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ChannelAccountContractElements) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ChannelAccountContractElements) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ChannelAccountContractElements) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelAccountContractElements) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelAccountContractElements) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelAccountContractElements) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelAccountContractElements) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


