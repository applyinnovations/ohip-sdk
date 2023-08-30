# LogUserInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserInfo** | Pointer to [**UserInfoType**](UserInfoType.md) |  | [optional] 
**LogDateTime** | Pointer to **time.Time** | User Log Changes Time Stamp details | [optional] 

## Methods

### NewLogUserInfoType

`func NewLogUserInfoType() *LogUserInfoType`

NewLogUserInfoType instantiates a new LogUserInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLogUserInfoTypeWithDefaults

`func NewLogUserInfoTypeWithDefaults() *LogUserInfoType`

NewLogUserInfoTypeWithDefaults instantiates a new LogUserInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserInfo

`func (o *LogUserInfoType) GetUserInfo() UserInfoType`

GetUserInfo returns the UserInfo field if non-nil, zero value otherwise.

### GetUserInfoOk

`func (o *LogUserInfoType) GetUserInfoOk() (*UserInfoType, bool)`

GetUserInfoOk returns a tuple with the UserInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserInfo

`func (o *LogUserInfoType) SetUserInfo(v UserInfoType)`

SetUserInfo sets UserInfo field to given value.

### HasUserInfo

`func (o *LogUserInfoType) HasUserInfo() bool`

HasUserInfo returns a boolean if a field has been set.

### GetLogDateTime

`func (o *LogUserInfoType) GetLogDateTime() time.Time`

GetLogDateTime returns the LogDateTime field if non-nil, zero value otherwise.

### GetLogDateTimeOk

`func (o *LogUserInfoType) GetLogDateTimeOk() (*time.Time, bool)`

GetLogDateTimeOk returns a tuple with the LogDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogDateTime

`func (o *LogUserInfoType) SetLogDateTime(v time.Time)`

SetLogDateTime sets LogDateTime field to given value.

### HasLogDateTime

`func (o *LogUserInfoType) HasLogDateTime() bool`

HasLogDateTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


