# AuthorizationHistoryTypeStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Successful** | Pointer to [**AuthorizationHistoryTypeStatusSuccessful**](AuthorizationHistoryTypeStatusSuccessful.md) |  | [optional] 
**Failed** | Pointer to [**AuthorizationHistoryTypeStatusFailed**](AuthorizationHistoryTypeStatusFailed.md) |  | [optional] 

## Methods

### NewAuthorizationHistoryTypeStatus

`func NewAuthorizationHistoryTypeStatus() *AuthorizationHistoryTypeStatus`

NewAuthorizationHistoryTypeStatus instantiates a new AuthorizationHistoryTypeStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizationHistoryTypeStatusWithDefaults

`func NewAuthorizationHistoryTypeStatusWithDefaults() *AuthorizationHistoryTypeStatus`

NewAuthorizationHistoryTypeStatusWithDefaults instantiates a new AuthorizationHistoryTypeStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccessful

`func (o *AuthorizationHistoryTypeStatus) GetSuccessful() AuthorizationHistoryTypeStatusSuccessful`

GetSuccessful returns the Successful field if non-nil, zero value otherwise.

### GetSuccessfulOk

`func (o *AuthorizationHistoryTypeStatus) GetSuccessfulOk() (*AuthorizationHistoryTypeStatusSuccessful, bool)`

GetSuccessfulOk returns a tuple with the Successful field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccessful

`func (o *AuthorizationHistoryTypeStatus) SetSuccessful(v AuthorizationHistoryTypeStatusSuccessful)`

SetSuccessful sets Successful field to given value.

### HasSuccessful

`func (o *AuthorizationHistoryTypeStatus) HasSuccessful() bool`

HasSuccessful returns a boolean if a field has been set.

### GetFailed

`func (o *AuthorizationHistoryTypeStatus) GetFailed() AuthorizationHistoryTypeStatusFailed`

GetFailed returns the Failed field if non-nil, zero value otherwise.

### GetFailedOk

`func (o *AuthorizationHistoryTypeStatus) GetFailedOk() (*AuthorizationHistoryTypeStatusFailed, bool)`

GetFailedOk returns a tuple with the Failed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailed

`func (o *AuthorizationHistoryTypeStatus) SetFailed(v AuthorizationHistoryTypeStatusFailed)`

SetFailed sets Failed field to given value.

### HasFailed

`func (o *AuthorizationHistoryTypeStatus) HasFailed() bool`

HasFailed returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


