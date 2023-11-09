# PutBlockAccessExclusionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockAccessExclusions** | Pointer to [**BlockAccessExclusionBlockAccessExclusions**](BlockAccessExclusionBlockAccessExclusions.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutBlockAccessExclusionRequest

`func NewPutBlockAccessExclusionRequest() *PutBlockAccessExclusionRequest`

NewPutBlockAccessExclusionRequest instantiates a new PutBlockAccessExclusionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutBlockAccessExclusionRequestWithDefaults

`func NewPutBlockAccessExclusionRequestWithDefaults() *PutBlockAccessExclusionRequest`

NewPutBlockAccessExclusionRequestWithDefaults instantiates a new PutBlockAccessExclusionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockAccessExclusions

`func (o *PutBlockAccessExclusionRequest) GetBlockAccessExclusions() BlockAccessExclusionBlockAccessExclusions`

GetBlockAccessExclusions returns the BlockAccessExclusions field if non-nil, zero value otherwise.

### GetBlockAccessExclusionsOk

`func (o *PutBlockAccessExclusionRequest) GetBlockAccessExclusionsOk() (*BlockAccessExclusionBlockAccessExclusions, bool)`

GetBlockAccessExclusionsOk returns a tuple with the BlockAccessExclusions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockAccessExclusions

`func (o *PutBlockAccessExclusionRequest) SetBlockAccessExclusions(v BlockAccessExclusionBlockAccessExclusions)`

SetBlockAccessExclusions sets BlockAccessExclusions field to given value.

### HasBlockAccessExclusions

`func (o *PutBlockAccessExclusionRequest) HasBlockAccessExclusions() bool`

HasBlockAccessExclusions returns a boolean if a field has been set.

### GetLinks

`func (o *PutBlockAccessExclusionRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutBlockAccessExclusionRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutBlockAccessExclusionRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutBlockAccessExclusionRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutBlockAccessExclusionRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutBlockAccessExclusionRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutBlockAccessExclusionRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutBlockAccessExclusionRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


