# PutBlockWashSchedulesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockWashSchedulesInfo** | Pointer to [**BlockWashSchedulesInfoType**](BlockWashSchedulesInfoType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutBlockWashSchedulesRequest

`func NewPutBlockWashSchedulesRequest() *PutBlockWashSchedulesRequest`

NewPutBlockWashSchedulesRequest instantiates a new PutBlockWashSchedulesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutBlockWashSchedulesRequestWithDefaults

`func NewPutBlockWashSchedulesRequestWithDefaults() *PutBlockWashSchedulesRequest`

NewPutBlockWashSchedulesRequestWithDefaults instantiates a new PutBlockWashSchedulesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockWashSchedulesInfo

`func (o *PutBlockWashSchedulesRequest) GetBlockWashSchedulesInfo() BlockWashSchedulesInfoType`

GetBlockWashSchedulesInfo returns the BlockWashSchedulesInfo field if non-nil, zero value otherwise.

### GetBlockWashSchedulesInfoOk

`func (o *PutBlockWashSchedulesRequest) GetBlockWashSchedulesInfoOk() (*BlockWashSchedulesInfoType, bool)`

GetBlockWashSchedulesInfoOk returns a tuple with the BlockWashSchedulesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockWashSchedulesInfo

`func (o *PutBlockWashSchedulesRequest) SetBlockWashSchedulesInfo(v BlockWashSchedulesInfoType)`

SetBlockWashSchedulesInfo sets BlockWashSchedulesInfo field to given value.

### HasBlockWashSchedulesInfo

`func (o *PutBlockWashSchedulesRequest) HasBlockWashSchedulesInfo() bool`

HasBlockWashSchedulesInfo returns a boolean if a field has been set.

### GetLinks

`func (o *PutBlockWashSchedulesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutBlockWashSchedulesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutBlockWashSchedulesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutBlockWashSchedulesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutBlockWashSchedulesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutBlockWashSchedulesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutBlockWashSchedulesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutBlockWashSchedulesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


