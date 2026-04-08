# UserInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserId** | Pointer to **int32** | User Id of the Opera User | [optional] 
**UserName** | Pointer to **string** | Name of the Opera User | [optional] 

## Methods

### NewUserInfoType

`func NewUserInfoType() *UserInfoType`

NewUserInfoType instantiates a new UserInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserInfoTypeWithDefaults

`func NewUserInfoTypeWithDefaults() *UserInfoType`

NewUserInfoTypeWithDefaults instantiates a new UserInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserId

`func (o *UserInfoType) GetUserId() int32`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *UserInfoType) GetUserIdOk() (*int32, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *UserInfoType) SetUserId(v int32)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *UserInfoType) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetUserName

`func (o *UserInfoType) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *UserInfoType) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *UserInfoType) SetUserName(v string)`

SetUserName sets UserName field to given value.

### HasUserName

`func (o *UserInfoType) HasUserName() bool`

HasUserName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


