# PutBlockCancellationReasonsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockCancellationReasons** | Pointer to [**BlockCancellationReasonsType**](BlockCancellationReasonsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutBlockCancellationReasonsRequest

`func NewPutBlockCancellationReasonsRequest() *PutBlockCancellationReasonsRequest`

NewPutBlockCancellationReasonsRequest instantiates a new PutBlockCancellationReasonsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutBlockCancellationReasonsRequestWithDefaults

`func NewPutBlockCancellationReasonsRequestWithDefaults() *PutBlockCancellationReasonsRequest`

NewPutBlockCancellationReasonsRequestWithDefaults instantiates a new PutBlockCancellationReasonsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockCancellationReasons

`func (o *PutBlockCancellationReasonsRequest) GetBlockCancellationReasons() BlockCancellationReasonsType`

GetBlockCancellationReasons returns the BlockCancellationReasons field if non-nil, zero value otherwise.

### GetBlockCancellationReasonsOk

`func (o *PutBlockCancellationReasonsRequest) GetBlockCancellationReasonsOk() (*BlockCancellationReasonsType, bool)`

GetBlockCancellationReasonsOk returns a tuple with the BlockCancellationReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCancellationReasons

`func (o *PutBlockCancellationReasonsRequest) SetBlockCancellationReasons(v BlockCancellationReasonsType)`

SetBlockCancellationReasons sets BlockCancellationReasons field to given value.

### HasBlockCancellationReasons

`func (o *PutBlockCancellationReasonsRequest) HasBlockCancellationReasons() bool`

HasBlockCancellationReasons returns a boolean if a field has been set.

### GetLinks

`func (o *PutBlockCancellationReasonsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutBlockCancellationReasonsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutBlockCancellationReasonsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutBlockCancellationReasonsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutBlockCancellationReasonsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutBlockCancellationReasonsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutBlockCancellationReasonsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutBlockCancellationReasonsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


