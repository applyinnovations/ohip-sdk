# CompRoutingRequestType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comments** | Pointer to **string** |  | [optional] 
**DeclinedBy** | Pointer to [**UserInfoType**](UserInfoType.md) |  | [optional] 
**RequestedBy** | Pointer to [**UserInfoType**](UserInfoType.md) |  | [optional] 
**Status** | Pointer to [**CompRoutingStatusType**](CompRoutingStatusType.md) |  | [optional] 

## Methods

### NewCompRoutingRequestType

`func NewCompRoutingRequestType() *CompRoutingRequestType`

NewCompRoutingRequestType instantiates a new CompRoutingRequestType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompRoutingRequestTypeWithDefaults

`func NewCompRoutingRequestTypeWithDefaults() *CompRoutingRequestType`

NewCompRoutingRequestTypeWithDefaults instantiates a new CompRoutingRequestType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComments

`func (o *CompRoutingRequestType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *CompRoutingRequestType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *CompRoutingRequestType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *CompRoutingRequestType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetDeclinedBy

`func (o *CompRoutingRequestType) GetDeclinedBy() UserInfoType`

GetDeclinedBy returns the DeclinedBy field if non-nil, zero value otherwise.

### GetDeclinedByOk

`func (o *CompRoutingRequestType) GetDeclinedByOk() (*UserInfoType, bool)`

GetDeclinedByOk returns a tuple with the DeclinedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeclinedBy

`func (o *CompRoutingRequestType) SetDeclinedBy(v UserInfoType)`

SetDeclinedBy sets DeclinedBy field to given value.

### HasDeclinedBy

`func (o *CompRoutingRequestType) HasDeclinedBy() bool`

HasDeclinedBy returns a boolean if a field has been set.

### GetRequestedBy

`func (o *CompRoutingRequestType) GetRequestedBy() UserInfoType`

GetRequestedBy returns the RequestedBy field if non-nil, zero value otherwise.

### GetRequestedByOk

`func (o *CompRoutingRequestType) GetRequestedByOk() (*UserInfoType, bool)`

GetRequestedByOk returns a tuple with the RequestedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedBy

`func (o *CompRoutingRequestType) SetRequestedBy(v UserInfoType)`

SetRequestedBy sets RequestedBy field to given value.

### HasRequestedBy

`func (o *CompRoutingRequestType) HasRequestedBy() bool`

HasRequestedBy returns a boolean if a field has been set.

### GetStatus

`func (o *CompRoutingRequestType) GetStatus() CompRoutingStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CompRoutingRequestType) GetStatusOk() (*CompRoutingStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CompRoutingRequestType) SetStatus(v CompRoutingStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CompRoutingRequestType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


