# UniqueNameIDType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Display name. | [optional] 
**PhoneNumber** | Pointer to **string** | Phone number | [optional] 
**Email** | Pointer to **string** | Email address | [optional] 
**PrimaryInd** | Pointer to **bool** | When true, indicates a primary information. | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 

## Methods

### NewUniqueNameIDType

`func NewUniqueNameIDType() *UniqueNameIDType`

NewUniqueNameIDType instantiates a new UniqueNameIDType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUniqueNameIDTypeWithDefaults

`func NewUniqueNameIDTypeWithDefaults() *UniqueNameIDType`

NewUniqueNameIDTypeWithDefaults instantiates a new UniqueNameIDType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *UniqueNameIDType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UniqueNameIDType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UniqueNameIDType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UniqueNameIDType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPhoneNumber

`func (o *UniqueNameIDType) GetPhoneNumber() string`

GetPhoneNumber returns the PhoneNumber field if non-nil, zero value otherwise.

### GetPhoneNumberOk

`func (o *UniqueNameIDType) GetPhoneNumberOk() (*string, bool)`

GetPhoneNumberOk returns a tuple with the PhoneNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneNumber

`func (o *UniqueNameIDType) SetPhoneNumber(v string)`

SetPhoneNumber sets PhoneNumber field to given value.

### HasPhoneNumber

`func (o *UniqueNameIDType) HasPhoneNumber() bool`

HasPhoneNumber returns a boolean if a field has been set.

### GetEmail

`func (o *UniqueNameIDType) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *UniqueNameIDType) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *UniqueNameIDType) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *UniqueNameIDType) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetPrimaryInd

`func (o *UniqueNameIDType) GetPrimaryInd() bool`

GetPrimaryInd returns the PrimaryInd field if non-nil, zero value otherwise.

### GetPrimaryIndOk

`func (o *UniqueNameIDType) GetPrimaryIndOk() (*bool, bool)`

GetPrimaryIndOk returns a tuple with the PrimaryInd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryInd

`func (o *UniqueNameIDType) SetPrimaryInd(v bool)`

SetPrimaryInd sets PrimaryInd field to given value.

### HasPrimaryInd

`func (o *UniqueNameIDType) HasPrimaryInd() bool`

HasPrimaryInd returns a boolean if a field has been set.

### GetId

`func (o *UniqueNameIDType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *UniqueNameIDType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *UniqueNameIDType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *UniqueNameIDType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *UniqueNameIDType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *UniqueNameIDType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *UniqueNameIDType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *UniqueNameIDType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


