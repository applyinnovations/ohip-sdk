# BlockOwnerType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Department** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Email** | Pointer to [**EmailInfoType**](EmailInfoType.md) |  | [optional] 
**Hotel** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Name** | Pointer to [**PersonNameType**](PersonNameType.md) |  | [optional] 
**OwnerCode** | Pointer to **string** | Unique Code to identify the owner. | [optional] 
**Ownership** | Pointer to [**BlockOwnershipType**](BlockOwnershipType.md) |  | [optional] 
**Phone** | Pointer to [**TelephoneInfoType**](TelephoneInfoType.md) |  | [optional] 
**Primary** | Pointer to **bool** | When true, this is a primary owner. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**Relationship** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**UserId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**UserName** | Pointer to **string** | Unique application user name of the owner. | [optional] 

## Methods

### NewBlockOwnerType

`func NewBlockOwnerType() *BlockOwnerType`

NewBlockOwnerType instantiates a new BlockOwnerType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockOwnerTypeWithDefaults

`func NewBlockOwnerTypeWithDefaults() *BlockOwnerType`

NewBlockOwnerTypeWithDefaults instantiates a new BlockOwnerType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDepartment

`func (o *BlockOwnerType) GetDepartment() CodeDescriptionType`

GetDepartment returns the Department field if non-nil, zero value otherwise.

### GetDepartmentOk

`func (o *BlockOwnerType) GetDepartmentOk() (*CodeDescriptionType, bool)`

GetDepartmentOk returns a tuple with the Department field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartment

`func (o *BlockOwnerType) SetDepartment(v CodeDescriptionType)`

SetDepartment sets Department field to given value.

### HasDepartment

`func (o *BlockOwnerType) HasDepartment() bool`

HasDepartment returns a boolean if a field has been set.

### GetEmail

`func (o *BlockOwnerType) GetEmail() EmailInfoType`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *BlockOwnerType) GetEmailOk() (*EmailInfoType, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *BlockOwnerType) SetEmail(v EmailInfoType)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *BlockOwnerType) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetHotel

`func (o *BlockOwnerType) GetHotel() CodeDescriptionType`

GetHotel returns the Hotel field if non-nil, zero value otherwise.

### GetHotelOk

`func (o *BlockOwnerType) GetHotelOk() (*CodeDescriptionType, bool)`

GetHotelOk returns a tuple with the Hotel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotel

`func (o *BlockOwnerType) SetHotel(v CodeDescriptionType)`

SetHotel sets Hotel field to given value.

### HasHotel

`func (o *BlockOwnerType) HasHotel() bool`

HasHotel returns a boolean if a field has been set.

### GetName

`func (o *BlockOwnerType) GetName() PersonNameType`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BlockOwnerType) GetNameOk() (*PersonNameType, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BlockOwnerType) SetName(v PersonNameType)`

SetName sets Name field to given value.

### HasName

`func (o *BlockOwnerType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOwnerCode

`func (o *BlockOwnerType) GetOwnerCode() string`

GetOwnerCode returns the OwnerCode field if non-nil, zero value otherwise.

### GetOwnerCodeOk

`func (o *BlockOwnerType) GetOwnerCodeOk() (*string, bool)`

GetOwnerCodeOk returns a tuple with the OwnerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerCode

`func (o *BlockOwnerType) SetOwnerCode(v string)`

SetOwnerCode sets OwnerCode field to given value.

### HasOwnerCode

`func (o *BlockOwnerType) HasOwnerCode() bool`

HasOwnerCode returns a boolean if a field has been set.

### GetOwnership

`func (o *BlockOwnerType) GetOwnership() BlockOwnershipType`

GetOwnership returns the Ownership field if non-nil, zero value otherwise.

### GetOwnershipOk

`func (o *BlockOwnerType) GetOwnershipOk() (*BlockOwnershipType, bool)`

GetOwnershipOk returns a tuple with the Ownership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnership

`func (o *BlockOwnerType) SetOwnership(v BlockOwnershipType)`

SetOwnership sets Ownership field to given value.

### HasOwnership

`func (o *BlockOwnerType) HasOwnership() bool`

HasOwnership returns a boolean if a field has been set.

### GetPhone

`func (o *BlockOwnerType) GetPhone() TelephoneInfoType`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *BlockOwnerType) GetPhoneOk() (*TelephoneInfoType, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *BlockOwnerType) SetPhone(v TelephoneInfoType)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *BlockOwnerType) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetPrimary

`func (o *BlockOwnerType) GetPrimary() bool`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *BlockOwnerType) GetPrimaryOk() (*bool, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *BlockOwnerType) SetPrimary(v bool)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *BlockOwnerType) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.

### GetProfileId

`func (o *BlockOwnerType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *BlockOwnerType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *BlockOwnerType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *BlockOwnerType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetRelationship

`func (o *BlockOwnerType) GetRelationship() CodeDescriptionType`

GetRelationship returns the Relationship field if non-nil, zero value otherwise.

### GetRelationshipOk

`func (o *BlockOwnerType) GetRelationshipOk() (*CodeDescriptionType, bool)`

GetRelationshipOk returns a tuple with the Relationship field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationship

`func (o *BlockOwnerType) SetRelationship(v CodeDescriptionType)`

SetRelationship sets Relationship field to given value.

### HasRelationship

`func (o *BlockOwnerType) HasRelationship() bool`

HasRelationship returns a boolean if a field has been set.

### GetUserId

`func (o *BlockOwnerType) GetUserId() UniqueIDType`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *BlockOwnerType) GetUserIdOk() (*UniqueIDType, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *BlockOwnerType) SetUserId(v UniqueIDType)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *BlockOwnerType) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetUserName

`func (o *BlockOwnerType) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *BlockOwnerType) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *BlockOwnerType) SetUserName(v string)`

SetUserName sets UserName field to given value.

### HasUserName

`func (o *BlockOwnerType) HasUserName() bool`

HasUserName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


