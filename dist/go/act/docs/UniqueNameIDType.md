# UniqueNameIDType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Primary** | Pointer to **bool** | When true, indicates a primary information. | [optional] 
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

### GetPrimary

`func (o *UniqueNameIDType) GetPrimary() bool`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *UniqueNameIDType) GetPrimaryOk() (*bool, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *UniqueNameIDType) SetPrimary(v bool)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *UniqueNameIDType) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.

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


