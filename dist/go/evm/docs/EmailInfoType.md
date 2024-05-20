# EmailInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | Pointer to [**EmailType**](EmailType.md) |  | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID elementSpace. | [optional] 

## Methods

### NewEmailInfoType

`func NewEmailInfoType() *EmailInfoType`

NewEmailInfoType instantiates a new EmailInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmailInfoTypeWithDefaults

`func NewEmailInfoTypeWithDefaults() *EmailInfoType`

NewEmailInfoTypeWithDefaults instantiates a new EmailInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *EmailInfoType) GetEmail() EmailType`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *EmailInfoType) GetEmailOk() (*EmailType, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *EmailInfoType) SetEmail(v EmailType)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *EmailInfoType) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetId

`func (o *EmailInfoType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EmailInfoType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EmailInfoType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *EmailInfoType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *EmailInfoType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EmailInfoType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EmailInfoType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EmailInfoType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


