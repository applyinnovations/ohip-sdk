# PutBlockAllocationRangeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockAllocationRange** | Pointer to [**BlockAllocationRangeType**](BlockAllocationRangeType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutBlockAllocationRangeRequest

`func NewPutBlockAllocationRangeRequest() *PutBlockAllocationRangeRequest`

NewPutBlockAllocationRangeRequest instantiates a new PutBlockAllocationRangeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutBlockAllocationRangeRequestWithDefaults

`func NewPutBlockAllocationRangeRequestWithDefaults() *PutBlockAllocationRangeRequest`

NewPutBlockAllocationRangeRequestWithDefaults instantiates a new PutBlockAllocationRangeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockAllocationRange

`func (o *PutBlockAllocationRangeRequest) GetBlockAllocationRange() BlockAllocationRangeType`

GetBlockAllocationRange returns the BlockAllocationRange field if non-nil, zero value otherwise.

### GetBlockAllocationRangeOk

`func (o *PutBlockAllocationRangeRequest) GetBlockAllocationRangeOk() (*BlockAllocationRangeType, bool)`

GetBlockAllocationRangeOk returns a tuple with the BlockAllocationRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockAllocationRange

`func (o *PutBlockAllocationRangeRequest) SetBlockAllocationRange(v BlockAllocationRangeType)`

SetBlockAllocationRange sets BlockAllocationRange field to given value.

### HasBlockAllocationRange

`func (o *PutBlockAllocationRangeRequest) HasBlockAllocationRange() bool`

HasBlockAllocationRange returns a boolean if a field has been set.

### GetLinks

`func (o *PutBlockAllocationRangeRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutBlockAllocationRangeRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutBlockAllocationRangeRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutBlockAllocationRangeRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutBlockAllocationRangeRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutBlockAllocationRangeRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutBlockAllocationRangeRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutBlockAllocationRangeRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


