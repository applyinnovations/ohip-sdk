# PostCancelBlockRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancelBlock** | Pointer to [**CancelBlockType**](CancelBlockType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostCancelBlockRequest

`func NewPostCancelBlockRequest() *PostCancelBlockRequest`

NewPostCancelBlockRequest instantiates a new PostCancelBlockRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCancelBlockRequestWithDefaults

`func NewPostCancelBlockRequestWithDefaults() *PostCancelBlockRequest`

NewPostCancelBlockRequestWithDefaults instantiates a new PostCancelBlockRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancelBlock

`func (o *PostCancelBlockRequest) GetCancelBlock() CancelBlockType`

GetCancelBlock returns the CancelBlock field if non-nil, zero value otherwise.

### GetCancelBlockOk

`func (o *PostCancelBlockRequest) GetCancelBlockOk() (*CancelBlockType, bool)`

GetCancelBlockOk returns a tuple with the CancelBlock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelBlock

`func (o *PostCancelBlockRequest) SetCancelBlock(v CancelBlockType)`

SetCancelBlock sets CancelBlock field to given value.

### HasCancelBlock

`func (o *PostCancelBlockRequest) HasCancelBlock() bool`

HasCancelBlock returns a boolean if a field has been set.

### GetLinks

`func (o *PostCancelBlockRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCancelBlockRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCancelBlockRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCancelBlockRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCancelBlockRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCancelBlockRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCancelBlockRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCancelBlockRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


