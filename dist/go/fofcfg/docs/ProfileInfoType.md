# ProfileInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**City** | Pointer to **string** | City for the profile attached to the block. | [optional] 
**Name** | Pointer to **string** | Name for the profile attached to the block. | [optional] 
**Phone** | Pointer to **string** | Phone for the profile attached to the block. | [optional] 
**ProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Type** | Pointer to **string** | Defines the type of Linked profiles for a block. | [optional] 

## Methods

### NewProfileInfoType

`func NewProfileInfoType() *ProfileInfoType`

NewProfileInfoType instantiates a new ProfileInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileInfoTypeWithDefaults

`func NewProfileInfoTypeWithDefaults() *ProfileInfoType`

NewProfileInfoTypeWithDefaults instantiates a new ProfileInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCity

`func (o *ProfileInfoType) GetCity() string`

GetCity returns the City field if non-nil, zero value otherwise.

### GetCityOk

`func (o *ProfileInfoType) GetCityOk() (*string, bool)`

GetCityOk returns a tuple with the City field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCity

`func (o *ProfileInfoType) SetCity(v string)`

SetCity sets City field to given value.

### HasCity

`func (o *ProfileInfoType) HasCity() bool`

HasCity returns a boolean if a field has been set.

### GetName

`func (o *ProfileInfoType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ProfileInfoType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ProfileInfoType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ProfileInfoType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPhone

`func (o *ProfileInfoType) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *ProfileInfoType) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *ProfileInfoType) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *ProfileInfoType) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetProfileId

`func (o *ProfileInfoType) GetProfileId() UniqueIDType`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ProfileInfoType) GetProfileIdOk() (*UniqueIDType, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ProfileInfoType) SetProfileId(v UniqueIDType)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ProfileInfoType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetType

`func (o *ProfileInfoType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ProfileInfoType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ProfileInfoType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ProfileInfoType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


