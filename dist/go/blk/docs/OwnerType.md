# OwnerType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Department** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Email** | Pointer to [**EmailInfoType**](EmailInfoType.md) |  | [optional] 
**Hotel** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Name** | Pointer to [**PersonNameType**](PersonNameType.md) |  | [optional] 
**OwnerCode** | Pointer to **string** | Unique Code to identify the owner. | [optional] 
**Phone** | Pointer to [**TelephoneInfoType**](TelephoneInfoType.md) |  | [optional] 
**Primary** | Pointer to **bool** | When true, this is a primary owner. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**Relationship** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**UserId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**UserName** | Pointer to **string** | Unique application user name of the owner. | [optional] 

## Methods

### NewOwnerType

`func NewOwnerType() *OwnerType`

NewOwnerType instantiates a new OwnerType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOwnerTypeWithDefaults

`func NewOwnerTypeWithDefaults() *OwnerType`

NewOwnerTypeWithDefaults instantiates a new OwnerType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDepartment

`func (o *OwnerType) GetDepartment() CodeDescriptionType`

GetDepartment returns the Department field if non-nil, zero value otherwise.

### GetDepartmentOk

`func (o *OwnerType) GetDepartmentOk() (*CodeDescriptionType, bool)`

GetDepartmentOk returns a tuple with the Department field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartment

`func (o *OwnerType) SetDepartment(v CodeDescriptionType)`

SetDepartment sets Department field to given value.

### HasDepartment

`func (o *OwnerType) HasDepartment() bool`

HasDepartment returns a boolean if a field has been set.

### GetEmail

`func (o *OwnerType) GetEmail() EmailInfoType`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *OwnerType) GetEmailOk() (*EmailInfoType, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *OwnerType) SetEmail(v EmailInfoType)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *OwnerType) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetHotel

`func (o *OwnerType) GetHotel() CodeDescriptionType`

GetHotel returns the Hotel field if non-nil, zero value otherwise.

### GetHotelOk

`func (o *OwnerType) GetHotelOk() (*CodeDescriptionType, bool)`

GetHotelOk returns a tuple with the Hotel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotel

`func (o *OwnerType) SetHotel(v CodeDescriptionType)`

SetHotel sets Hotel field to given value.

### HasHotel

`func (o *OwnerType) HasHotel() bool`

HasHotel returns a boolean if a field has been set.

### GetName

`func (o *OwnerType) GetName() PersonNameType`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *OwnerType) GetNameOk() (*PersonNameType, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *OwnerType) SetName(v PersonNameType)`

SetName sets Name field to given value.

### HasName

`func (o *OwnerType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOwnerCode

`func (o *OwnerType) GetOwnerCode() string`

GetOwnerCode returns the OwnerCode field if non-nil, zero value otherwise.

### GetOwnerCodeOk

`func (o *OwnerType) GetOwnerCodeOk() (*string, bool)`

GetOwnerCodeOk returns a tuple with the OwnerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerCode

`func (o *OwnerType) SetOwnerCode(v string)`

SetOwnerCode sets OwnerCode field to given value.

### HasOwnerCode

`func (o *OwnerType) HasOwnerCode() bool`

HasOwnerCode returns a boolean if a field has been set.

### GetPhone

`func (o *OwnerType) GetPhone() TelephoneInfoType`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *OwnerType) GetPhoneOk() (*TelephoneInfoType, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *OwnerType) SetPhone(v TelephoneInfoType)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *OwnerType) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetPrimary

`func (o *OwnerType) GetPrimary() bool`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *OwnerType) GetPrimaryOk() (*bool, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *OwnerType) SetPrimary(v bool)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *OwnerType) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.

### GetProfileId

`func (o *OwnerType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *OwnerType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *OwnerType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *OwnerType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetRelationship

`func (o *OwnerType) GetRelationship() CodeDescriptionType`

GetRelationship returns the Relationship field if non-nil, zero value otherwise.

### GetRelationshipOk

`func (o *OwnerType) GetRelationshipOk() (*CodeDescriptionType, bool)`

GetRelationshipOk returns a tuple with the Relationship field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationship

`func (o *OwnerType) SetRelationship(v CodeDescriptionType)`

SetRelationship sets Relationship field to given value.

### HasRelationship

`func (o *OwnerType) HasRelationship() bool`

HasRelationship returns a boolean if a field has been set.

### GetUserId

`func (o *OwnerType) GetUserId() UniqueIDType`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *OwnerType) GetUserIdOk() (*UniqueIDType, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *OwnerType) SetUserId(v UniqueIDType)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *OwnerType) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetUserName

`func (o *OwnerType) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *OwnerType) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *OwnerType) SetUserName(v string)`

SetUserName sets UserName field to given value.

### HasUserName

`func (o *OwnerType) HasUserName() bool`

HasUserName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


