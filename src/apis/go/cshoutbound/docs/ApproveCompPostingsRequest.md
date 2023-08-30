# ApproveCompPostingsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompPostings** | Pointer to [**[]CompTransactionType**](CompTransactionType.md) | List of transactions to be submitted to the vendor. | [optional] 

## Methods

### NewApproveCompPostingsRequest

`func NewApproveCompPostingsRequest() *ApproveCompPostingsRequest`

NewApproveCompPostingsRequest instantiates a new ApproveCompPostingsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApproveCompPostingsRequestWithDefaults

`func NewApproveCompPostingsRequestWithDefaults() *ApproveCompPostingsRequest`

NewApproveCompPostingsRequestWithDefaults instantiates a new ApproveCompPostingsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompPostings

`func (o *ApproveCompPostingsRequest) GetCompPostings() []CompTransactionType`

GetCompPostings returns the CompPostings field if non-nil, zero value otherwise.

### GetCompPostingsOk

`func (o *ApproveCompPostingsRequest) GetCompPostingsOk() (*[]CompTransactionType, bool)`

GetCompPostingsOk returns a tuple with the CompPostings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompPostings

`func (o *ApproveCompPostingsRequest) SetCompPostings(v []CompTransactionType)`

SetCompPostings sets CompPostings field to given value.

### HasCompPostings

`func (o *ApproveCompPostingsRequest) HasCompPostings() bool`

HasCompPostings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


