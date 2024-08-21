# ApplicationUserType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppUser** | Pointer to **string** | Name of the application user | [optional] 
**AppUserId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewApplicationUserType

`func NewApplicationUserType() *ApplicationUserType`

NewApplicationUserType instantiates a new ApplicationUserType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicationUserTypeWithDefaults

`func NewApplicationUserTypeWithDefaults() *ApplicationUserType`

NewApplicationUserTypeWithDefaults instantiates a new ApplicationUserType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppUser

`func (o *ApplicationUserType) GetAppUser() string`

GetAppUser returns the AppUser field if non-nil, zero value otherwise.

### GetAppUserOk

`func (o *ApplicationUserType) GetAppUserOk() (*string, bool)`

GetAppUserOk returns a tuple with the AppUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppUser

`func (o *ApplicationUserType) SetAppUser(v string)`

SetAppUser sets AppUser field to given value.

### HasAppUser

`func (o *ApplicationUserType) HasAppUser() bool`

HasAppUser returns a boolean if a field has been set.

### GetAppUserId

`func (o *ApplicationUserType) GetAppUserId() UniqueIDType`

GetAppUserId returns the AppUserId field if non-nil, zero value otherwise.

### GetAppUserIdOk

`func (o *ApplicationUserType) GetAppUserIdOk() (*UniqueIDType, bool)`

GetAppUserIdOk returns a tuple with the AppUserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppUserId

`func (o *ApplicationUserType) SetAppUserId(v UniqueIDType)`

SetAppUserId sets AppUserId field to given value.

### HasAppUserId

`func (o *ApplicationUserType) HasAppUserId() bool`

HasAppUserId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


