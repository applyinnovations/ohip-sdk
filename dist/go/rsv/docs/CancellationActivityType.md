# CancellationActivityType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancellationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**CxlDate** | Pointer to **string** |  | [optional] 
**Reason** | Pointer to [**CancellationReasonType**](CancellationReasonType.md) |  | [optional] 
**UserId** | Pointer to **float32** |  | [optional] 
**UserName** | Pointer to **string** |  | [optional] 

## Methods

### NewCancellationActivityType

`func NewCancellationActivityType() *CancellationActivityType`

NewCancellationActivityType instantiates a new CancellationActivityType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancellationActivityTypeWithDefaults

`func NewCancellationActivityTypeWithDefaults() *CancellationActivityType`

NewCancellationActivityTypeWithDefaults instantiates a new CancellationActivityType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancellationIdList

`func (o *CancellationActivityType) GetCancellationIdList() []UniqueIDType`

GetCancellationIdList returns the CancellationIdList field if non-nil, zero value otherwise.

### GetCancellationIdListOk

`func (o *CancellationActivityType) GetCancellationIdListOk() (*[]UniqueIDType, bool)`

GetCancellationIdListOk returns a tuple with the CancellationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationIdList

`func (o *CancellationActivityType) SetCancellationIdList(v []UniqueIDType)`

SetCancellationIdList sets CancellationIdList field to given value.

### HasCancellationIdList

`func (o *CancellationActivityType) HasCancellationIdList() bool`

HasCancellationIdList returns a boolean if a field has been set.

### GetCxlDate

`func (o *CancellationActivityType) GetCxlDate() string`

GetCxlDate returns the CxlDate field if non-nil, zero value otherwise.

### GetCxlDateOk

`func (o *CancellationActivityType) GetCxlDateOk() (*string, bool)`

GetCxlDateOk returns a tuple with the CxlDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCxlDate

`func (o *CancellationActivityType) SetCxlDate(v string)`

SetCxlDate sets CxlDate field to given value.

### HasCxlDate

`func (o *CancellationActivityType) HasCxlDate() bool`

HasCxlDate returns a boolean if a field has been set.

### GetReason

`func (o *CancellationActivityType) GetReason() CancellationReasonType`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *CancellationActivityType) GetReasonOk() (*CancellationReasonType, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *CancellationActivityType) SetReason(v CancellationReasonType)`

SetReason sets Reason field to given value.

### HasReason

`func (o *CancellationActivityType) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetUserId

`func (o *CancellationActivityType) GetUserId() float32`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *CancellationActivityType) GetUserIdOk() (*float32, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *CancellationActivityType) SetUserId(v float32)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *CancellationActivityType) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetUserName

`func (o *CancellationActivityType) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *CancellationActivityType) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *CancellationActivityType) SetUserName(v string)`

SetUserName sets UserName field to given value.

### HasUserName

`func (o *CancellationActivityType) HasUserName() bool`

HasUserName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


